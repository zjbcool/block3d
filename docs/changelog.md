# 更新日志

[[toc]]

## 1.0.0-beta.7(2022-07-01)

- 广告栏尺寸减小
- 下拉菜单 - `设置`中修改`项目路径`时，通过最右侧新增的文件夹图标，可打开导航窗口
- 下拉菜单 - `工具`子菜单新增`.hdr -> .env`工具，用于生成.env纹理
- 系统分类新增`webRequest`子类，用于实现服务器请求，支持常用的`GET` `POST` `PUT` `DELETE`方法
- 材质分类新增创建`GridMaterial`网格材质，及网格材质的属性设置
- 材质分类新增`texture_events`纹理事件拼图和`get_texture_size`获取纹理大小拼图

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