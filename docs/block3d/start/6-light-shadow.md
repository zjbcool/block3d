# 灯光和阴影



## 创建灯光

在灯光分类下找到`创建灯光create_light`拼图，在下拉菜单中选择平行光`平行光`。对于方向`方向`参数先保持默认，稍后我们在场景中实时调节，再把最终的参数复制到这里。

使用`灯光属性light_properties_accessors`拼图可以设置灯光的属性，如强度、漫反射等

![light-shadow-1](https://cdn.zjbku.com/start/light-shadow.jpg)

将创建灯光的拼图放在创建地面之前，以使灯光能对地面产生作用。有了灯光，地面的材质效果就表现出来了。

![light-shadow-2](https://cdn.zjbku.com/start/light-shadow-2.jpg)

## 创建阴影

1. 创建阴影 - 在灯光分类下的阴影子类中，使用`创建阴影create_shadow`拼图创建阴影，第一个参数是灯光，第二个参数是阴影贴图的大小
2. 设置网格接收阴影 - 默认网格不会接收阴影，需要使用网格分类的`网格属性mesh_properties_accessors`拼图设置地面`接收阴影`为`true`
3. 设置网格产生阴影 - 使用`添加阴影生成器add_shadow_caster`拼图可以指定哪些网格产生阴影

![light-shadow-5](https://cdn.zjbku.com/start/light-shadow-5.jpg)

设置完成之后，保存，阴影就出现了。

![light-shadow-6](https://cdn.zjbku.com/start/light-shadow-6.jpg)


## 调节灯光和阴影

这个阴影颜色太黑，边缘也很硬。另外，灯光的位置和角度对阴影也有很大影响，前面我们故意忽略了这些细节，现在我们认真调节一下灯光和阴影的参数。

首先从菜单栏或使用快捷键`Ctrl` + `I`打开场景查看器，选中灯光，点击右侧的小眼睛图标，这时视图中的灯光会以实体的方式出现。点击场景查看器顶部的工具图标，可以切换为位移、旋转、缩放、边界盒控制器，这样就可以和在三维软件中一样自由控制灯光的位置和方向了。

![light-shadow-7](https://cdn.zjbku.com/start/light-shadow-7.jpg)

在下方的属性面板中，可以看到调节后的位置和方向参数。方向用于创建灯光时的`方向`参数；位置用于设置灯光的`位置`属性。

![light-shadow-8](https://cdn.zjbku.com/start/light-shadow-8.jpg)

阴影面板中提供了控制阴影细节的参数。其中`darkness`控制阴影的明暗，`filter`用于选择阴影的过滤类型及相关参数。

![light-shadow-9](https://cdn.zjbku.com/start/light-shadow-9.jpg)

这些参数可以通过灯光分类下的`阴影属性shadow_properties_accessors`拼图应用到阴影上。

![light-shadow-10](https://cdn.zjbku.com/start/light-shadow-10.jpg)

调节后的灯光和阴影效果：

![light-shadow-11](https://cdn.zjbku.com/start/light-shadow-11.jpg)

## 下一步

让角色动起来！