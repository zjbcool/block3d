# 渲染 Rendering

用于创建高亮、辉光、后处理等渲染效果。

[[toc]]

## 渲染

### 创建渲染效果 create_rendering_effects {#create-rendering-effects}

渲染效果。用于开启或禁用渲染效果。

### 渲染效果属性 rendering_effects_properties_accessors {#rendering-effects-properties-accessors}

用于设置或获取渲染效果属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同，在拼图中表示为"属性*"。

属性：
- 色差chromaticAberration - 色差效果，可将图片的RGB通道分离出来
- 景深depthOfField - 景深效果，根据与相机的距离对物体应用不同的模糊度
- 抗锯齿fxaa - 抗锯齿效果，会移除图片上的锯齿现象
- 颗粒grain - 颗粒效果，在图片上添加噪点
- 图像处理imageProcessing - 图像处理效果，用于改变图片亮度、对比度等

访问器：
- 启用泛光bloomEnabled - 启用或禁用泛光效果
- 泛光颗粒bloomKernel - 模糊颗度
- 泛光缩放bloomScale - 泛光缩放，值越小，性能越好
- 泛光阈值bloomThreshold - 用于泛光的亮度阈值
- 泛光权重bloomWeight - 泛光权重
- 相机cameras - 获取相机列表
- 启用色差chromaticAberrationEnabled - 启用或禁用色差效果
- 启用景深depthOfFieldEnabled - 是否开启景深
- 启用抗锯齿fxaaEnabled - 是否开启抗锯齿

### 后处理属性 post_process_properties {#post-process-properties}

用于设置或获取景深、颗粒、图像处理、锐化等后处理效果属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同，在拼图中表示为"属性*"。

景深属性：
- fStop - 相机的F-Stop。最终的快门直径可通过镜头大小/F-Stop得到
- 焦长focalLength - 相机焦距。单位毫米
- 焦距focusDistance - 从相机到焦点的距离。单位毫米
- 是否支持isSupported - 检查是否支持该效果
- 镜头大小lensSize - 最大镜头大小。单位毫米。标准相机是50mm。最终的快门直径可通过镜头大小/F-Stop得到

颗粒属性：
- 强度intensity - 颗粒效果的强度

图像处理属性：
- 对比度contrast - 设置或获取对比度
- 曝光度exposure - 设置或获取曝光度

锐化属性：
- 颜色数量colorAmount - 应用多少原有颜色。设置为0会显示边缘检测
- 边缘数量edgeAmount - 应用多少边缘锐度

## 高亮层

### 创建高亮层 create_highlight_layer {#create-highlight-layer}

创建高亮层。该效果可在网格周围生成高亮辉光，以突出显示网格。

### 高亮层属性 highlight_layer_properties_accessors {#highlight-layer-properties-accessors}

用于设置或获取高亮层属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同，在拼图中表示为"属性*"。

属性：
- 启用isEnabled - 是否启用高亮层
- 内辉光innerGlow - 是否激活内部辉光
- 外辉光outerGlow - 是否激活外部辉光

访问器：
- 水平模糊度blurHorizontalSize - 水平方向模糊度
- 垂直模糊度blurVerticalSize - 垂直方向模糊度
- 相机camera - 获取附加到辉光层的相机

### 高亮层方法 highlight_layer_methods {#highlight-layer-methods}

高亮层方法。用于控制高亮层中的网格。

- 添加 - 在高亮层添加网格，使其以选择的颜色高亮
- 排除 - 在排除列表中添加网格，以防止其影响高亮层或受到高亮层影响
- 移除 - 在高亮层移除网格，使其不再高亮

## 辉光层

### 创建辉光层 create_glow_layer {#create-glow-layer}

创建辉光层。该效果会从自发光材质上发出辉光。

### 辉光层属性 glow_layer_properties_accessors {#glow-layer-properties-accessors}

用于设置或获取辉光层属性或访问器。访问器是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同，在拼图中表示为"属性*"。

属性：
- 启用isEnabled - 是否启用辉光层
- 自然颜色neutralColor - 用于生成辉光贴图的纹理背景色

访问器：
- 模糊内核大小blurKernelSize - 设置或获取模糊内核大小
- 相机camera - 获取附加到辉光层的相机
- 强度intensity - 设置或获取辉光强度
- 主纹理mainTexture - 获取特效渲染的主纹理
- 渲染组IDrenderingGroupId - 设置或获取辉光层应在其中渲染的渲染组id

### 辉光层方法 glow_layer_methods {#glow-layer-methods}

辉光层方法。用于控制辉光层中的网格。

- 排除 - 在排除列表中添加网格，以防止其受到辉光层的影响
- 仅包含 - 在包含列表中添加网格，以影响辉光层或受辉光层影响
