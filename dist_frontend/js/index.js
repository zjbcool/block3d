
window.addEventListener('load', initProject, false)

async function initProject() {
  const fetchInitData = await fetch('/api/init')
  const data = await fetchInitData.json()
  block3d.createEditor('root', data)
  setup(data)
}

function $(id) {
  return document.getElementById(id)
}

async function setup(data) {
  const projectName = data.PROJECT_NAME
  const lang = data.LANG
  const leftDays = data.LICENSE_LEFT_DAYS
  // 配置文件workspace.json中的setting项
  const setting = {
    title: 'setting',
    id: '',
    data: {
      lang: 'en',
      gutterPosition: 50,
      openInspector: false
    },
  }

  // 获取组件
  const menu = $('menu'),
    newProjectDialog = $('newProjectDialog'),
    projectsDialog = $('projectsDialog'),
    publishDialog = $('publishDialog'),
    settingsDialog = $('settingsDialog'),
    licenseDialog = $('licenseDialog'),
    aboutDialog = $('aboutDialog'),
    loadingScreen = $('loadingScreen'),
    editorFooter = $('editorFooter'),
    searchBlockDialog = $('searchBlockDialog');

  loadingScreen.open()
  block3d.editorFooter = editorFooter
  // 创建组件
  const tabManager = new block3d.TabManager('#editor', lang)
  // 为代码编辑器添加代码提示
  tabManager.addExtralLib = monaco => {
    monaco.languages.typescript.javascriptDefaults.addExtraLib(tsdeclare.babylon_d_ts);
    monaco.languages.typescript.javascriptDefaults.addExtraLib(tsdeclare.appInstance_d_ts);
  }
  block3d.tabManager = tabManager
  const gutter = new block3d.Gutter('#editor', '#gutter', '#output')

  let appInstance
  BABYLON.apps = []
  BABYLON.Preloader = block3d.Preloader
  // 组件初始化
  // 分割线变化时回调函数
  gutter.onMove = () => {
    tabManager.resize()
    appInstance.resize()
  }
  gutter.onStop = () => {
    // 保存gutter位置
    setting.data.gutterPosition = gutter.getPosition()
  }
  // 加载配置和代码
  const fetchJson = await fetch(`/${projectName}/workspace.json`)
  if (!fetchJson.ok) console.error(new Error('加载项目失败'))
  const json = await fetchJson.json()
  setting.data.openInspector = json.setting.data.openInspector
  // 分割线初始位置
  setting.data.gutterPosition = json.setting.data.gutterPosition
  gutter.setPosition(json.setting.data.gutterPosition)
  tabManager.resize()
  // 加载工作区
  tabManager.customTabs = Object.keys(json).slice(1, -1)
  await tabManager.loadJson(json)
  tabManager.setActive(tabManager.getTabByTitle('main'))
  // 创建app
  appInstance = new block3d.App('renderCanvas').setup()
  BABYLON.apps.push(appInstance)
  // 执行代码，运行应用
  setTimeout(() => {
    saveAndCompile()
    loadingScreen.close()
  }, 200)
  // 显示帧率
  new block3d.Fps(200).onChange = () => editorFooter.fps = appInstance.getFps()
  // 删除拼图编辑器中的无用变量
  tabManager.tabs.forEach(tab => tab.type === 'block' && tab.removeUnusedVariables())
  // 激活工作区
  tabManager.addEventListener('active', (event) => {
    const title = event.target.active.title
    showInfo({ en: title, zh: title })
  })
  // 新增工作区
  tabManager.addEventListener('add', (event) => {
    const title = event.target.active.title
    showInfo({ en: title, zh: title })
  })
  // 删除工作区
  // tabManager.addEventListener('remove', () => {
  //   //
  // })
  /**
   * 禁用右键
   */
  document.oncontextmenu = new Function("event.returnValue=false")
  // 自动保存
  settingsDialog.autoSave(saveWorkspace(), 5)

  // 
  menu.oncreate = () => newProjectDialog.open()
  menu.onopen = () => projectsDialog.open()
  menu.onsave = () => saveAndCompile()

  function hideCategory(categorys) {
    categorys.forEach(cateName => {
      tabManager.tabs.forEach(tab => {
        const items = tab.workspace.getToolbox().getToolboxItems()
        items.find(item => item.name_ === cateName).hide()
        // console.log(tab.workspace.getToolbox().getToolboxItems()[6])
      })
    })
  }
  /**
   * 注册下拉菜单功能
   */
  menu.ondropdown = id => {
    switch (id) {
      case 'openFolder':
        doOpenFolder()
        break
      case 'saveAs':
        doSaveAs()
        break
      case 'publishApp':
        publishDialog.open()
        break
      case 'runApp':
        window.open(`${window.location.origin}/${projectName}/index.html`)
        break
      case 'inspectorTool':
        doOpenInspector('scene')
        break
      case 'addTab':
        tabManager.doAddTab()
        break
      case 'removeTab':
        tabManager.doRemoveTab()
        break
      case 'renameTab':
        tabManager.doRenameTab()
        break
      case 'removeApp':
        doRemoveApp()
        break
      case 'hideEditor':
        doHideEditor()
        break
      case 'searchBlock':
        displaySearchBlockDialog()
        break
      case 'licenseKey':
        licenseDialog.open()
        break
      case 'setting':
        settingsDialog.open()
        break
      case 'about':
        aboutDialog.open()
        break
    }
  }
  /**
     * 注册快捷键
     */
  document.addEventListener("keydown", registerShortcut)
  function registerShortcut(e) {
    const ctrlKey = e.ctrlKey
    const shiftKey = e.shiftKey
    const altlKey = e.altKey

    if (!e.repeat && ctrlKey) {
      switch (e.key) {
        case 's':
          saveAndCompile()
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
        case 'p':
          publishDialog.open()
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
        case 'o':
          projectsDialog.open()
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
        case 'i':
          // 打开场景查看器，使用alt+i 打开场景查看器保存时会关闭
          setting.data.openInspector = false
          doOpenInspector('scene')
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
        case 'd':
          // 禁用浏览器快捷键ctrl+D
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
      }
    }
    if (!e.repeat && ctrlKey && shiftKey) {
      switch (e.key) {
        case 's':
        case 'S':
          doSaveAs()
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
      }
    }
    if (!e.repeat && shiftKey) {
      switch (e.key) {
        // shift + tab 从自定义选项卡返回main选项卡
        case 'Tab':
          if (tabManager.active === tabManager.mainTab) return false

          if (tabManager.active.type === 'block' && 1) {
            tabManager.setActive(tabManager.mainTab)
          }
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
      }
    }
    if (!e.repeat && altlKey) {
      switch (e.key) {
        case 'i':
          // alt+i 始终打开场景查看器
          setting.data.openInspector = true
          doOpenInspector('scene')
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
        case 'd':
          // 禁用浏览器快捷键alt+D
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
      }
    }
    if (!e.repeat && altlKey && shiftKey) {
      switch (e.key) {
        case 'r':
        case 'R':
          doOpenFolder()
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
        case 'h':
        case 'H':
          doHideEditor()
          e.preventDefault()
          e.stopPropagation()
          e.key = false
          return false
      }
    }
  }
  /**
   * 发布并运行
   */
  publishDialog.onsubmit = async () => {
    const fetchPublish = await fetch('/api/publish', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        projectName: projectName,
        workspaceData: tabManager.save(),
        options: publishDialog.getInput()
      })
    })
    const result = await fetchPublish.text()
    if (result === 'ok') {
      publishDialog.close()
      setTimeout(() => {
        window.open(`${window.location.origin}/${projectName}/index.html`)
      }, 500)
    }
  }

  /**
   * 激活激活码
   */
  licenseDialog.onactive = async () => {
    const activeCode = licenseDialog.getActiveKey()
    // 本地验证，输入空值，长度错误，默认值时无效
    if (!activeCode.length || activeCode.length != 29 || activeCode === 'XXXX-XXXX-XXXX-XXXX-XXXX-XXXX') {
      // 激活码无效
      showInfo({ en: 'invalid active key', zh: '无效的激活码' })
      return
    }
    loadingScreen.open()
    const fetchData = await fetch('/api/active-license-key', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ licensekey: activeCode })
    })
    const result = await fetchData.json()
    setTimeout(() => {
      loadingScreen.close()
      result.validate === 'valid' && window.location.reload()
      result.validate === 'invalid' && showInfo({ en: 'invalid active key', zh: '无效的激活码' })
    }, 1000)
  }
  /**
 * 取消激活激活码
 */
  licenseDialog.oninactive = async () => {
    loadingScreen.open()
    await fetch('/api/inactive-license-key')
    setTimeout(() => {
      loadingScreen.close()
      window.location.reload()
    }, 1000)
  }
  /**
   * 将当前项目另存为新项目，并打开新项目
  */
  async function doSaveAs() {
    const newProjectName = lang == 'en' ? window.prompt('Save as:') : window.prompt('另存为：')
    if (!newProjectName) return
    const fetchSaveAs = await fetch('/api/saveas', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectName, newProjectName })
    })
    const result = await fetchSaveAs.text()
    if (result === 'ok') {
      setTimeout(() => {
        window.location = `${window.location.origin}/${newProjectName}/~`
      }, 500)
    }
  }
  /**
   * 删除项目
  */
  async function doRemoveApp() {
    const confirm = lang == 'en' ? window.confirm('Are you sure to delete?') : window.confirm('确定删除项目?')
    if (confirm) {
      await fetch('/api/remove', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName })
      })
      setTimeout(() => {
        window.location = `${window.location.origin}/defaultProject/~`
      }, 200)
    }
  }
  /**
   * 保存当前工作区
   * @returns object
   */
  function saveWorkspace() {
    const workspaceData = tabManager.save() // -> Array
    workspaceData.push(setting)
    return { projectName, workspaceData }
  }
  /**
   * 保存工作区和编译js
   */
  async function saveAndCompile() {
    const workspace = saveWorkspace()
    const fetchSave = await fetch('/api/save', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workspace)
    })
    tabManager.customTabs = workspace.workspaceData.map(item => item.title).slice(1, -1)
    if (fetchSave.ok) {
      const code = await fetchSave.text()
      // 执行代码，运行应用
      appInstance && appInstance.dispose()
      appInstance.setup()
      eval(code)
      appInstance.run()
      // showInfo({ en: 'saved!', zh: '已保存！' })
      // 场景查看器
      setting.data.openInspector && doOpenInspector('scene')
    }
    // 广告
    if (leftDays === 0) {
      const root = $('root')
      let aside = document.querySelector('editor-aside')
      aside && root.removeChild(aside)
      aside = document.createElement('editor-aside')
      root.appendChild(aside)
    }
  }

  /**
   * 浏览项目文件夹
   */
  async function doOpenFolder() {
    await fetch('/api/reveal', {
      method: 'post',
      headers: { 'Content-Type': 'text/plain' },
      body: projectName
    })
  }

  /**
   * 创建项目
   */
  newProjectDialog.onsubmit = async () => {
    // 新项目名称，不能包含空格
    let { projectName, description, isNewWindow } = newProjectDialog
    if (!projectName) return
    projectName = projectName.replace(/\s*/g, "")

    const fetchProject = await fetch('/api/create', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectName, description })
    })

    newProjectDialog.close()
    const result = await fetchProject.text()
    if (result === 'ok') {
      setTimeout(() => {
        isNewWindow ? window.open(`${window.location.origin}/${projectName}/~`) : window.location = `${window.location.origin}/${projectName}/~`
      }, 500)
    } else {
      showInfo({ en: 'failed to create project', zh: '新建项目失败' })
    }
  }

  /**
   * 打开项目
  */
  projectsDialog.onsubmit = () => {
    const { projectName, isNewWindow } = projectsDialog
    const url = `${window.location.origin}/${projectName}/~`

    setTimeout(() => {
      isNewWindow && window.open(url)
      !isNewWindow && (window.location = url)
    }, 500)

  }

  /**
   * 显示查找拼图对话框
   */
  function displaySearchBlockDialog() {
    searchBlockDialog.isVisible = !searchBlockDialog.isVisible
    searchBlockDialog.display(searchBlockDialog.isVisible)
  }

  /**
   * 显示/隐藏编辑器
   */
  function doHideEditor() {
    if (!gutter.isRightFullscreen) {
      gutter.fullscreen('right')
    } else {
      gutter.setPosition(setting.data.gutterPosition)
      gutter.isRightFullscreen = false
      tabManager.resize()
    }
    appInstance.resize()
    // search block
    searchBlockDialog.isVisible && searchBlockDialog.display(false)
  }
  /**
   * 打开查看器
   * @param {string} scene scene | overlayScene
   * @returns 
   */
  function doOpenInspector() {
    function createDebugLayerElement() {
      const oldElem = $('debugLayer')
      oldElem && oldElem.parentElement.removeChild(oldElem)

      const debugLayerElem = document.createElement('div')
      debugLayerElem.id = 'debugLayer'
      debugLayerElem.style.width = '100%'
      debugLayerElem.style.height = '100%'
      $('renderCanvas').insertAdjacentElement('afterend', debugLayerElem)
      return debugLayerElem
    }

    if (appInstance.scene.debugLayer.isVisible()) {
      appInstance.scene.debugLayer.hide()
    } else {
      appInstance.scene.debugLayer.show({
        embedMode: true,
        globalRoot: createDebugLayerElement()
      })
    }
  }

  /**
   * 暂停/继续渲染
   */
  editorFooter.playback = () => {
    if (appInstance.running) {
      appInstance.stop()
      editorFooter.running = false
    } else {
      appInstance.run()
      editorFooter.running = true
    }
  }

  /**
 * @param {object} message 要显示的信息
 * @param {string} message.en 英文信息
 * @param {string} message.zh 中文信息
 */
  function showInfo(message) {
    editorFooter.info = (lang === 'en' ? message.en : message.zh)
    setTimeout(() => { editorFooter.info = '' }, 4000)
  }
}
