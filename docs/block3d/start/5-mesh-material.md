# 网格和材质

[[toc]]

## 设置网格变换属性

在前面的教程中，我们发现角色刚加载时是背对着我们的。使用快捷键`Ctrl` + `I`打开场景查看器，选中导入模型的根节点`__root__`

![mesh-material](https://cdn.zjbku.com/start/mesh-material.jpg)

可以发现，角色背对我们的原因是，模型缩放属性的z值为-1。修复此问题，可以在`网格`分类的`变换`子类中，找到第一个`网格变换set_get_mesh_transform`拼图，将`__root__`的缩放改为`1,1,1`。此拼图用于设置和获取网格的变换属性，即位置、旋转、缩放。注意，此拼图要放到`资产管理器scene_assets_manager`拼图的'完成'插槽下，即当网格加载完成后执行此操作。

![mesh-material-1](https://cdn.zjbku.com/start/mesh-material-1-min.jpeg)

## 创建地面

为了演示如何创建和操作网格，我们创建一个最简单的地面。使用网格分类的`创建网格create_mesh_set_shapes`拼图可以创建多种预置模型，其中包括我们需要的`地面`类型。

下面是创建地面网格并设置其参数的步骤：

1. 从网格分类中拖拽`创建网格create_mesh_set_shapes`拼图，从下拉菜单中选择`地面`类型
2. 从对象分类中拖拽`创建对象object_create`拼图，快捷键`Shift` + `O`，取消勾选`空`，将其连接到`创建网格create_mesh_set_shapes`拼图的`选项`参数上
3. 在`创建网格create_mesh_set_shapes`拼图上右键，点击末尾的`创建 '选项'`
4. 将右键创建的选项拼图拖拽到`创建对象object_create`拼图中。注意，此拼图仅在`创建对象object_create`拼图内部有效
5. 将选项`宽度`值设为100，然后复制此拼图，将选项切换为`高度`，值同样为100，这样我们就创建一个宽高均为100的地面

![mesh-material-gif](https://cdn.zjbku.com/start/create-mesh-1.gif)

## 创建材质

材质可以通过三维软件导出，也可以在Block3D中创建。下面的示例中，使用`创建材质create_material`拼图创建了一个标准类型的材质，然后使用`材质属性material_properties_accessors`设置了漫反射颜色和高光颜色属性，最后，使用`网格属性mesh_properties_accessors`拼图将这个材质赋给了地面。

![mesh-material-10](https://cdn.zjbku.com/start/mesh-material-3-min.jpg)

:::tip 提示
`网格属性mesh_properties_accessors`拼图有属性和访问器两个选项，访问器实际是一个函数，由于两者用法相同，关系密切，因此整合到一起。
:::

保存之后，发现地面变成了黑色。这是因为场景中还没有灯光，而标准材质并不受环境照明影响。

![mesh-material-11](https://cdn.zjbku.com/start/mesh-material-11.jpg)

## 下一步

实时控制灯光和阴影。