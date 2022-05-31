# 创建项目

[[toc]]

## 默认项目

运行Block3D会打开一个名为`defaultProject`的默认启动项目，它是自动创建的，位于你刚刚设置的项目路径下。你可以直接从这个项目开始，或者创建一个新项目。

## 新建项目

点击菜单栏上的`新建`按钮

![menu](https://cdn.zjbku.com/start/menu-1.jpg)

然后在打开的对话框中，输入项目名称即可新建项目。

![create](https://cdn.zjbku.com/start/create.jpg)

- **项目名称**：用于创建项目文件夹，支持中文，建议使用英文或者拼音。
- **描述**：会在项目文件夹下创建一个`README.md`文件，此文件随时可以用记事本或代码编辑器打开修改。
- **在新窗口打开**：如果勾选会在新窗口打开新建项目。

描述可以在`打开项目`对话框中显示，以帮助了解项目详情

![open](https://cdn.zjbku.com/start/open.jpg)

如果你已经设置了[项目路径](./install.md#设置项目路径)，在点击**OK**按钮后，会在你的项目路径下出现这个新创建的项目。你可以通过菜单栏-下拉菜单中的`打开文件夹`，或使用快捷键`Alt` + `Shift` + `R`，打开项目文件夹。

## 项目结构

默认的项目结构：

```
myProject
├─ assets
|  ├─ css
|  |  └─ index.css
|  ├─ js
|  |  └─ babylon.js
|  ├─ media
|  |  └─ logo.svg
|  ├─ scene
|  |  └─ scene.babylon
|  └─ texture
|     ├─ backgroundGround.png
|     ├─ backgroundSkybox.dds
|     ├─ environment.dds
|     └─ environmentSpecular.env
├─ workspace_backup
└─ workspace.json
```

- assets - （不可变）静态资源文件夹
  - css - （不可变）样式文件夹
  - js - （不可变）javascript文件夹
  - media - （不可变）图标、媒体文件夹
  - scene - 3D资产文件夹
  - texture - （不可变）默认环境贴图文件夹
    - backgroundGround.png - 地面贴图
    - backgroundSkybox.dds - 天空盒背景
    - environment.dds - 环境反射贴图
    - environmentSpecular.env - 环境照明贴图
- workspace_backup - （不可变）工作区备份文件夹，需要在`设置`中勾选`自动保存`
- workspace.json - （不可变）工作区文件，这个文件中保存了你在工作区编辑的拼图和代码

在实际开发中，可能会用到很多3D资产，block3d并不会限制用户把所有3D资产统一堆放到`scene`文件夹中，用户可以在`assets`文件夹中任意创建文件夹存放3D资产。

## 下一步

从[Mixamo](https://www.mixamo.com/)下载一些动画，通过Blender导出.gltf/.glb，看一下block3d如何加载3D资产。