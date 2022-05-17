
const fg = require('fast-glob');
const { execFile } = require('child_process');
const { log } = require('console');
// todo
async function dirStream(path) {
  const dirStream = fg.stream('*', {
    // cwd: path,
    dot: true,
    onlyFiles: false,
    suppressErrors: true,
  })

  const skip = await getItemsToSkip(path)
  for await (let path of dirStream) {
    if (path instanceof Buffer)
      path = path.toString('utf8')
    if (skip && skip.includes(path))
      continue
    return path
  }

  async function getItemsToSkip(path) {
    if (process.platform !== 'win32') return
    const out = await run('dir', ['/ah', '/b', path.replace(/\//g, '\\')])
      .catch(() => '') // error in case of no matching file
    return out.split('\r\n').slice(0, -1)
  }
}
/**
 * 
 * @param {string} cmd 
 * @param {string[]} args 
 * @returns Promise<string>
 */
function run(cmd, args) {
  return new Promise((resolve, reject) =>
    execFile('cmd', ['/c', cmd, ...args], (err, stdout) => {
      if (err)
        reject(err)
      else
        resolve(stdout)
    }))
}

async function stream (path){
  const dirStream = fg.stream('*', {
    cwd: path,
    dot: true,
    onlyFiles: false,
    onlyDirectories: true,
    suppressErrors: true,
  })
  for await (let file of dirStream) {
    log(file)
  }
}

stream('/')
