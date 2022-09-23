# 更新日志

## 1.0.0-beta.9(2022-09-27)

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
- 更新底层引擎Babylon.js v5.21.0

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