
function create(elem) {
  return document.createElement(elem)
}

export function createEditor(root, data) {
  root = (typeof root === "string") ? document.getElementById('root') : root
  const {
    TITLE,
    PROJECT_NAME,
    LANG,
    PROJECTS_LIST,
    LICENSE_STATUS,
    LICENSE_LEFT_DAYS,
    EXPIRES,
    APP_HOST,
    APP_PORT,
    PROJECTS_FOLDER,
    AUTO_OPEN,
    AUTO_SAVE,
    EXTERNAL_SERVER,
    VERSION,
    RELEASE_DATE,
  } = data
  const body = document.body
  // editorContainer
  const editorContainer = create('div')
  editorContainer.className = 'editor-container'
  root.appendChild(editorContainer)
  // menu
  const menu = create('editor-menu')
  menu.id = 'menu'
  menu.lang = LANG
  menu.name = TITLE
  menu.leftdays = LICENSE_LEFT_DAYS
  editorContainer.appendChild(menu)
  // main
  const main = create('main')
  main.innerHTML = `
  <div class="editor" id="editor">
    <search-block id="searchBlockDialog"></search-block>
  </div>
  <div class="gutter" id="gutter"></div>
  <div class="output" id="output">
    <div id="sceneView" class="view">
      <canvas id="renderCanvas" class="renderCanvas" touch-action="none"></canvas>
    </div>
  </div>
  `
  editorContainer.appendChild(main)
  // editorFooter
  const editorFooter = create('editor-footer')
  editorFooter.id = 'editorFooter'
  editorFooter.lang = LANG
  editorContainer.appendChild(editorFooter)
  // newProjectDialog
  const newProjectDialog = create('create-dialog')
  newProjectDialog.id = 'newProjectDialog'
  newProjectDialog.lang = LANG
  body.appendChild(newProjectDialog)
  // projectsDialog
  const projectsDialog = create('projects-dialog')
  projectsDialog.id = 'projectsDialog'
  projectsDialog.lang = LANG
  projectsDialog.projects = PROJECTS_LIST
  body.appendChild(projectsDialog)
  // publishDialog
  const publishDialog = create('publish-dialog')
  publishDialog.id = 'publishDialog'
  publishDialog.lang = LANG
  body.appendChild(publishDialog)
  // licenseDialog
  const licenseDialog = create('license-dialog')
  licenseDialog.id = 'licenseDialog'
  licenseDialog.lang = LANG
  licenseDialog.status = LICENSE_STATUS
  licenseDialog.expires = EXPIRES
  licenseDialog.leftdays = LICENSE_LEFT_DAYS
  body.appendChild(licenseDialog)
  // settingsDialog
  const settingsDialog = create('settings-dialog')
  settingsDialog.id = 'settingsDialog'
  settingsDialog.lang = LANG
  settingsDialog.host = APP_HOST
  settingsDialog.port = APP_PORT
  settingsDialog.projects = PROJECTS_FOLDER
  settingsDialog.autoopen = AUTO_OPEN
  settingsDialog.save = AUTO_SAVE
  settingsDialog.external = EXTERNAL_SERVER
  body.appendChild(settingsDialog)
  // aboutDialog
  const aboutDialog = create('about-dialog')
  aboutDialog.id = 'aboutDialog'
  aboutDialog.lang = LANG
  aboutDialog.version = VERSION
  aboutDialog.releaseDate = RELEASE_DATE
  body.appendChild(aboutDialog)
  // welcomeDialog
  const welcomeDialog = create('welcome-dialog')
  welcomeDialog.lang = LANG
  welcomeDialog.version = VERSION
  welcomeDialog.hero = "/media/hero.jpg"
  if (PROJECT_NAME === 'defaultProject') body.appendChild(welcomeDialog)
  // loadingScreen
  const loadingScreen = create('loading-screen')
  loadingScreen.id = 'loadingScreen'
  body.appendChild(loadingScreen)
}