# 灯光和阴影

[[toc]]

## 创建灯光

在灯光分类下找到`create_light`拼图，在下拉菜单中选择平行光`DirectionalLight`。对于方向`direction`参数先保持默认，稍后我们在场景中实时调节，再把最终的参数复制到这里。

![light-shadow](https://cdn.zjbku.com/start/light-shadow.png)

使用`set_get_light_prop`拼图可以设置灯光的属性，如强度`intensity`、漫反射`diffuse`、位置`position`等

![light-shadow-1](https://cdn.zjbku.com/start/light-shadow-1.png)

将创建灯光的拼图放在创建地面之前，以使灯光能对地面产生作用。有了灯光，地面的材质效果就表现出来了。

![light-shadow-2](https://cdn.zjbku.com/start/light-shadow-2.jpg)

## 创建阴影

在灯光分类下找到`create_shadow`拼图，第一个参数是灯光，第二个参数是阴影贴图的大小。

![light-shadow-3](https://cdn.zjbku.com/start/light-shadow-3.png)

在三维软件中，要调出好看的阴影需要设置很多参数，Block3D中也一样。我们先不关注这些细节。要让阴影产生效果，还需要设置产生阴影的物体和接收阴影的物体。通过设置地面的`receiveShadow`属性为`true`，可以让地面接收阴影。

![light-shadow-4](https://cdn.zjbku.com/start/light-shadow-4.png)

使用`add_shadow_caster`拼图可以指定哪些物体产生阴影，这里自然是角色模型。通过场景查看器，或者在三维软件中查看，角色模型分为两部分。我们可以使用两次`add_shadow_caster`拼图，分别设置两个模型产生阴影。或者，使用循环执行这些重复性的操作：

![light-shadow-5](https://cdn.zjbku.com/start/light-shadow-5.png)

其中，橘黄色的拼图名为`scene_get_loaded_asset`，位于场景分类，紧挨着`scene_load_asset`拼图。

设置完成之后，保存，阴影就出现了。

![light-shadow-6](https://cdn.zjbku.com/start/light-shadow-6.jpg)


## 调节灯光和阴影

这个阴影颜色太黑，边缘也很硬。另外，灯光的位置和角度对阴影也有很大影响，前面我们故意忽略了这些细节，现在我们认真调节一下灯光和阴影的参数。

首先从菜单栏或使用快捷键`Ctrl` + `I`打开场景查看器，选中灯光，点击右侧的小眼睛图标，这时视图中的灯光会以实体的方式出现。点击场景查看器顶部的工具图标，可以切换为位移、旋转、缩放、边界盒控制器，这样就可以和在三维软件中一样自由控制灯光的位置和方向了。

![light-shadow-7](https://cdn.zjbku.com/start/light-shadow-7.jpg)

在下方的属性面板中，可以看到调节后的位置和方向参数。方向用于创建灯光时的`direction`参数；位置用于设置灯光的`position`属性。

![light-shadow-8](https://cdn.zjbku.com/start/light-shadow-8.jpg)

阴影面板中提供了控制阴影细节的参数。其中`darkness`控制阴影的明暗，`filter`用于选择阴影的过滤类型及相关参数。

![light-shadow-9](https://cdn.zjbku.com/start/light-shadow-9.jpg)

这些参数可以通过灯光分类下的`set_shadow_prop`拼图应用到阴影上。

![light-shadow-10](https://cdn.zjbku.com/start/light-shadow-10.png)

调节后的灯光和阴影效果：

![light-shadow-11](https://cdn.zjbku.com/start/light-shadow-11.jpg)

## 下一步

让角色动起来！