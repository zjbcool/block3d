# 网格和材质

[[toc]]

## 设置网格变换属性

在前面的教程中，我们发现角色刚加载时是背对着我们的。使用快捷键`Ctrl` + `I`打开场景查看器，选中导入模型的根节点`__root__`

![mesh-material](https://cdn.zjbku.com/start/mesh-material.jpg)

可以发现，角色背对我们的原因是，模型缩放属性的z值为-1。修复此问题，可以在网格分类下，找到`set_get_mesh_transform`拼图

![mesh-transform](https://cdn.zjbku.com/start/mesh-transform.jpg)

将`__root__`的缩放改为`1,1,1`。此拼图用于设置和获取网格的变换属性，即位置、旋转、缩放。注意，此拼图要放到`scene_assets_manager`拼图的'on finish'插槽下，否则会因为找不到`__root__`而报错。

![mesh-material-1](https://cdn.zjbku.com/start/mesh-material-1.png)

## 创建地面

为了演示如何创建和操作网格，我们创建一个最简单的地面。使用网格分类的`create_mesh_set_shapes`拼图可以创建多种预置模型，其中包括我们需要的`Ground`类型。

下面是创建地面网格并设置其参数的步骤：

1. 从网格分类中拖拽`create_mesh_set_shapes`拼图，从下拉菜单中选择`Ground`类型

![mesh-material-2](https://cdn.zjbku.com/start/mesh-material-2.png)

2. 从对象分类中拖拽`object_create`拼图，快捷键`Shift` + `O`，取消勾选`isEmpty`，将其连接到`create_mesh_set_shapes`拼图的`options`参数上

![mesh-material-3](https://cdn.zjbku.com/start/mesh-material-3.png)

3. 在`create_mesh_set_shapes`拼图上右键，点击末尾的`创建 'option'`

![mesh-material-4](https://cdn.zjbku.com/start/mesh-material-4.png)

4. 将右键创建的选项拼图拖拽到`object_create`拼图中。注意，此拼图仅在`object_create`拼图内部有效

![mesh-material-5](https://cdn.zjbku.com/start/mesh-material-5.png)

5. 将选项`width`值设为100，然后复制此拼图，将选项切换为`height`，值同样为100，这样我们就创建一个宽高均为100的地面

![mesh-material-6](https://cdn.zjbku.com/start/mesh-material-6.png)

6. 最后，我们将`create_mesh_set_shapes`拼图创建的地面保存到变量`ground`，以备后用。我们在[加载资产](./3-load-assets.md)教程中介绍了通过点击按钮创建变量，然后再重新打开变量分类，把新出现的拼图拖拽到工作区。其实，使用快捷键`Shift` + `V`，可以直接在工作区创建变量。

![mesh-material-7](https://cdn.zjbku.com/start/mesh-material-7.png)

此时，场景中的地面是黑色的，因为还没有赋材质。并且，由于默认默认环境也有一个地面，两者重叠造成闪烁。为了解决它，我们使用一开始用来解决角色朝向问题的`set_get_mesh_transform`拼图，将地面的位置属性的y值稍微提高一点。以下两种方式效果相同：

![mesh-material-8](https://cdn.zjbku.com/start/mesh-material-8.png)

## 创建材质

创建材质过程要简单的多，因为`create_material`拼图，只有一个`name`参数。以下拼图创建了一个标准类型的材质，然后设置了漫反射颜色和高光颜色属性。

![mesh-material-9](https://cdn.zjbku.com/start/mesh-material-9.png)

用来设置材质属性的拼图名为`set_get_material_prop`，根据不同类型的材质会显示不同类型的属性和默认值。

颜色目前有两个拼图`material_color3`和`material_color3_from_hex`，一个是RGB颜色，另一个是16进制的颜色。

材质创建完成后，使用网格分类下的`set_get_mesh_prop`拼图，在下拉菜单中找到`material`属性，将刚刚的材质赋给地面。

![mesh-material-10](https://cdn.zjbku.com/start/mesh-material-10.png)

保存之后，发现地面仍然是黑色。这是因为场景中还没有灯光，而标准材质并不受HDR环境照明影响。

![mesh-material-11](https://cdn.zjbku.com/start/mesh-material-11.jpg)

## 下一步

实时控制灯光和阴影。