# 更新日志

[[toc]]

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