<template><h1 id="行为-behaviors" tabindex="-1"><a class="header-anchor" href="#行为-behaviors" aria-hidden="true">#</a> 行为 Behaviors</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#通用">通用</RouterLink></li></ul></nav>
<p>Babylon.js v3.1引入了一个新的基于组件的工具：行为 Behaviors。行为是一个简单的类，可以附加到一个目标上，它将提供一组特定的功能。功能将由定义的事件触发。</p>
<h2 id="通用" tabindex="-1"><a class="header-anchor" href="#通用" aria-hidden="true">#</a> 通用</h2>
<p>行为由以下接口定义：</p>
<ul>
<li>name：返回行为的名称</li>
<li>init()：当一个行为需要初始化时会调用这个函数。这是在附加到目标之前。</li>
<li>attach(target)：当行为附加到目标时，将调用此函数。这是行为将挂钩有用事件的地方。 Babylon.js将确保当调用此函数时，当前未加载该场景。</li>
<li>detach()：当行为与目标分离时将调用此函数。该行为必须清除所有相关资源并取消所有事件</li>
</ul>
<p>如果行为依赖动画，则可以使用以下静态属性：</p>
<ul>
<li>EasingFunction:定义使用动画的缓动函数</li>
<li>EasingMode:定义动画使用的缓动模式</li>
</ul>
<p>您可以向任何实现 IBehaviorAware 接口的对象（例如灯光、相机或网格）添加行为。每个 IBehaviorAware 都提供以下入口点：</p>
<ul>
<li>addBehavior(behavior):使用此函数将行为附加到给定目标。如果场景当前正在加载，此代码将延迟到场景完成。</li>
<li>removeBehavior(behavior): 使用此函数将行为与目标分离</li>
<li>getBehaviorByName(name):返回具有给定名称的行为，如果未找到则返回 null</li>
<li>behaviors: 此只读属性返回与目标关联的行为列表</li>
</ul>
<p>大多数情况下，行为被设计用来处理特定的目标。</p>
<p>这里面有相机和网格行为。</p>
</template>
