# 更新日志

## 1.0.0-beta.10(2022-11-06)

- 破坏性更新
  - 为了优化拼图设计，重做了部分拼图，这些修改会造成对老版本不兼容——
  - `场景`分类`资产管理器`拼图移除了`默认加载器`选项，修改后不再有默认加载界面
  - `场景`分类`场景属性`拼图改为`scene_properties_accessors`
  - `网格`分类`网格属性`拼图改为`mesh_properties_accessors`
  - `相机`分类`相机属性`拼图改为`camera_properties_accessors`
  - `灯光`分类`灯光属性`拼图改为`light_properties_accessors`
  - `灯光`分类`阴影属性`拼图改为`shadow_properties_accessors`
  - `材质`分类`创建材质`拼图选项中移除了`网格材质`
  - `材质`分类`材质属性`拼图改为`material_properties_accessors`
  - `材质属性material_properties_accessors`拼图删除了部分不常用属性
  - `渲染`分类`效果属性`拼图拆分为`rendering_effects_properties_accessors`和`rendering_effect_properties`
  - `界面`分类`界面属性`拼图改为`gui_control_properties_accessors`
  - `界面`分类删除了`界面属性set_get_gui_prop`拼图
  - `界面`分类删除了`控件事件gui_control_event`拼图
  - `界面`分类`创建全屏UI create_fullscreen_UI`拼图重命名为`create_adt_for_fullscreen_ui`，并增加了`视网膜屏幕`选项，勾选它可以在视网膜或高ppi屏幕上让UI更加清晰
- 新增拼图
  - `系统`分类新增`创建变量create_variable`拼图，用于创建块级作用域的常量和变量
  - `系统`分类的`全局对象set_get_glob_object`拼图新增`执行`和`获取执行`选项，如果对象的值是一个函数，这两个选项可用于执行函数和获取函数的运行结果
  - `节点`分类新增`获取节点get_node_by_name`拼图，用于根据名字获取网格、相机、灯光等节点
  - `网格`分类新增`拖拽信息drag_mesh_info`拼图，该拼图不在分类中显示，要通过`拖拽网格drag_mesh`拼图右键菜单创建，它用于获取拖拽信息
  - `网格`分类新增`碰撞移动网格move_mesh_with_collisions`拼图，用于通过物理引擎驱动网格位移
  - `网格`分类新增`获取网格方向get_mesh_direction`拼图
  - `相机`分类新增`获取相机方向get_camera_direction`拼图
  - `时间`分类增加`获取时间get_elapsed_time`拼图
  - `界面`分类增加`设置UI图层蒙板set_ui_layer_mask`拼图
  - `界面`分类增加`创建网络纹理create_adt_for_mesh_texture`拼图，可将GUI编辑器制作的UI作为网格纹理
- 界面
  - 发布面板移除`GUI`和`调参`模块选项，修改为分别在这两个拼图分类顶部增加`导入模块`和`删除模块`按钮。
  - 发布面板`构建`选项新增`覆盖index.html`和`覆盖main.js`选项，用于决定发布时是否覆盖之前的文件，此功能便于用户写入自定义代码
  - 移除广告区，增加可开关的侧边栏（快捷键ctrl+shift+B），其中包含教程、示例、插件、赞赏、升级等面板
  - 创建选项卡数量限制为1个
  - 移除打开文件夹快捷键shift R
  - 查找拼图的下拉菜单选项在鼠标移入时会显示完整拼图名称提示，这对于查找名字较长的拼图比较有用
- 汉化
  - 现在基本上所有拼图的属性都已完成汉化
  - 在属性类拼图的工具提示中，保留了该属性的英文名称，便于查询
- 专业版
  - `辅助`分类新增`添加查看器自定义属性add_inspectable_custom_properties`拼图，用于向场景查看器中添加自定义属性，可用于比如灯光、材质参数的实时调试
  - 下拉菜单新增`隐藏/显示侧边栏`命令
  - 改进插件系统
  - 取消权限：开关广告
  - 增加权限：解除创建选项卡数量限制
- 示例
  - 由于上述破坏性更新，全部示例使用新版本重新制作
  - 示例下载转移到软件侧边栏，官网下载页面不再提供下载链接
- 修复
  - `网格`分类下`创建圆环节`拼图错误问题
  - 修复下拉菜单`显示/隐藏编辑区`快捷键错误问题
  - 修复代码视图在隐藏编辑区时显示错误问题
  - 修复创建线条时默认材质渲染错误问题
  - 修复GUI编辑器中图片工具的地址使用相对路径错误问题
  - 修复节点材质编辑器使用图片相对路径错误问题

## 1.0.0-beta.9(2022-09-24)

- 发布mac版，支持arm64架构，新的发行版只有一个单独的block3d文件
- 拼图汉化，现在所有拼图都实现了中文界面
- 现在可升级为专业版，功能包括：
  - 支持关闭广告
  - 解锁额外拼图
  - 支持拼图插件，见[文档](./block3d/diving-deeper/plugins.md)
  - 支持切换到代码视图
- 拼图
  - 专业版新增`渲染`分类，用于实现各种渲染特效，见[文档](./block3d/blocks-reference/render.md)
  - 原`工具`分类重命名为`辅助`分类，归入专业版，其中的`功能检测`拼图迁移到`系统`分类下
  - 现在默认不自动创建环境，需要使用`场景`分类中新增的`简易环境`或`创建环境`拼图手动创建
- 界面
  - 菜单栏新增`执行`按钮，用于执行逻辑，`保存`按钮不再执行逻辑
  - 为提示用户保存项目，在刷新和关闭浏览器时，增加了弹窗提示
  - 菜单栏新增`主题`按钮，用于切换明暗主题
  - 工具栏顶部增加`展开收起`按钮，可以切换图标和图标+名称模式
  - 底部状态栏新增`帮助`和`论坛`按钮
  - 状态栏提示文字的颜色改为更醒目的黄色
  - 标题不再显示版本号，在`下拉菜单`-`关于`中查看版本信息
  - 修改下拉菜单快捷键
    - 打开项目文件夹 -> Shift R
    - 切换编辑区 -> Ctrl Shift H
    - 切换视图 -> Ctrl Shift V
    - 场景查看器 -> Ctrl I(移除Shift I)
- 9个示例程序全部更新
- 修改默认的项目路径为`我的文档\block3d\projects`
- 修复`设置`中`项目路径`为空时的错误
- 修复`scene_get_loaded_from_asset`拼图无法解析大型JSON的错误
- 修复创建重名选项卡时的错误，现在重名选项卡会无法创建
- 修复某些情况下无法打开默认项目和新建、发布项目的问题
- 更新底层引擎Babylon.js v5.25.0

## 1.0.0-beta.8(2022-07-27)

- 工作区右键菜单新增`查找拼图`命令
- 下拉菜单 - `工具`子菜单新增`Base64编码器`，用于将LOGO图片转换为base64编码
- 场景查看器现在固定在3D视图右侧，之前是悬浮在3D视图之上，会遮挡场景
- 拼图
  - 材质分类新增`update_texture_url`拼图，用于更新贴图
  - 材质分类的`get_texture_size`拼图增加下拉菜单，可分别获取纹理的大小、宽度、高度和宽高比
  - 材质分类下的`create_node_material_from_json`拼图被整合进`create_material`拼图，原有拼图被删除
  - TweakPane分类下的`create_tweak_pane`拼图增加`options`参数，可以控制调参面板在窗口中的位置
  - 删除GUI分类下的`gui_get_control_value`拼图，它可以用`gui_control_prop`拼图代替，用来获取控件的值
  - 更新拼图中英文提示
  - 网格、相机拼图增加二级分类，将功能相近的拼图分到一组，方便查找
- 更新底层引擎Babylon.js v5.16.0

## 1.0.0-beta.7(2022-07-11)

- 广告栏尺寸减小
- 下拉菜单 - `设置`中修改`项目路径`时，通过最右侧新增的文件夹图标，可打开导航窗口
- 下拉菜单 - `工具`子菜单新增`.hdr -> .env`工具，用于生成.env纹理
- 系统分类新增`webRequest`子类，用于实现服务器请求，支持常用的`GET` `POST` `PUT` `DELETE`方法
- 材质分类新增创建`GridMaterial`网格材质，及网格材质的属性设置
- 材质分类新增`texture_events`纹理事件拼图和`get_texture_size`获取纹理大小拼图
- 修改默认项目路径为：`C:\Users\Administrator\AppData\Local\block3d\projects`
- 更新底层引擎Babylon.js v5.14.1

## 1.0.0-beta.6(2022-07-01)

- 更新相机分类的中文版*拼图提示* 
- 修改默认项目路径为：`C:\Users\Administrator\AppData\Roaming\block3d\projects`
- 移除安装目录中的配置文件`config.json`
- 移除安装目录中的密钥
- 修复Block3D安装到C盘时造成的错误
- 修复去广告激活问题。此后版本更新时，无需重新激活（同一台电脑上）
- 更新底层引擎Babylon.js v5.13.0

## 1.0.0-beta.5(2022-06-24)

- 更新底层引擎Babylon.js v5.12.1
- 修改循环分类下`controls_for`拼图`from`默认参数为`0`
- 修改
  - 相机分类下`set_get_camera_prop`拼图，避免报错
  - 灯光分类下`set_get_light_prop`拼图，避免报错
  - 材质分类下`set_get_material_prop`拼图，避免报错
  - 材质分类下`set_get_texture_prop`拼图，避免报错

## 1.0.0-beta.4(2022-06-17)

- 场景分类下`scene_get_loaded_from_asset`拼图增加`json`选项
- 更新底层引擎Babylon.js v5.11.0
- 修复发布的应用无法正常运行的问题

## 1.0.0-beta.3(2022-06-14)

- 系统分类新增`advanced_new_line`拼图，用于换行
- 新增代码视图，限赞助用户。激活后通过`下拉菜单`-`切换视图`可显示生成的代码
- 修复
  - 文本分类下`text_append`拼图生成错误代码问题
  - 数组分类下`array_set_index` `array_get_index`拼图生成错误代码问题
  - 逻辑分类下`controls_if`拼图生成错误代码问题
  - 循环分类下的拼图生成错误代码问题
  - 场景分类下`scene_create_default_envrionment`拼图生成错误代码问题

## 1.0.0-beta.2(2022-06-5)

- 弃用安装程序，改为免安装，解压后运行`block3d.exe`
- 修复`console_log`拼图参数为`info`时的错误

## 1.0.0-beta.1(2022-06-2)