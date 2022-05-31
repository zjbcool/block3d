<template><h1 id="动作-actions" tabindex="-1"><a class="header-anchor" href="#动作-actions" aria-hidden="true">#</a> 动作 Actions</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#如何使用动作">如何使用动作</RouterLink></li><li><RouterLink to="#触发器-triggers">触发器 Triggers</RouterLink></li><li><RouterLink to="#可用动作-actions">可用动作 Actions</RouterLink></li><li><RouterLink to="#条件-conditions">条件 Conditions</RouterLink></li><li><RouterLink to="#练习一下">练习一下</RouterLink></li><li><RouterLink to="#精灵的动作">精灵的动作</RouterLink></li><li><RouterLink to="#示例">示例</RouterLink></li></ul></nav>
<h2 id="如何使用动作" tabindex="-1"><a class="header-anchor" href="#如何使用动作" aria-hidden="true">#</a> 如何使用动作</h2>
<p>动作是一种在场景中添加交互的简单方法。一个动作在它的触发器被触发时启动。例如，可以指定当用户单击（或触摸）网格时执行一个动作。</p>
<p>要使用动作，必须将 BABYLON.ActionManager 附加到网格或场景中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>ActionManager</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 ActionManager 后，可注册动作：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>InterpolateValueAction</span><span class="token punctuation">(</span>
        <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnPickTrigger<span class="token punctuation">,</span>
        light<span class="token punctuation">,</span>
        <span class="token string">'diffuse'</span><span class="token punctuation">,</span>
        <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Black</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token number">1000</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上代码，当用户选择网格时，将在 1000 毫秒内将 light.diffuse 变为黑色。</p>
<p>支持链式操作：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager
    <span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>InterpolateValueAction</span><span class="token punctuation">(</span>
            <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnPickTrigger<span class="token punctuation">,</span>
            light<span class="token punctuation">,</span>
            <span class="token string">'diffuse'</span><span class="token punctuation">,</span>
            <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Black</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token number">1000</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>SetValueAction</span><span class="token punctuation">(</span>
            <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>NothingTrigger<span class="token punctuation">,</span>
            mesh<span class="token punctuation">.</span>material<span class="token punctuation">,</span>
            <span class="token string">'wireframe'</span><span class="token punctuation">,</span>
            <span class="token boolean">false</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，第一次单击将设置 light.diffuse 的属性动画，第二次单击将设置 mesh.material 为 false。第三次单击将重新开始并为 light.diffuse 属性设置动画，依此类推...</p>
<p>另外，可以为动作添加条件。如果条件为真，则在触发器被触发时执行动作：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>InterpolateValueAction</span><span class="token punctuation">(</span>
        <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnPickTrigger<span class="token punctuation">,</span>
        camera<span class="token punctuation">,</span>
        <span class="token string">'alpha'</span><span class="token punctuation">,</span>
        <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token number">500</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>PredicateCondition</span><span class="token punctuation">(</span>
            mesh<span class="token punctuation">.</span>actionManager<span class="token punctuation">,</span>
            <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> light<span class="token punctuation">.</span>diffuse<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token constant">BABYLON</span><span class="token punctuation">.</span>Color3<span class="token punctuation">.</span><span class="token function">Red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，仅当 light.diffuse 属性等于红色时，当用户单击网格时，camera.alpha 属性将在 500 毫秒内动画为 0。</p>
<h2 id="触发器-triggers" tabindex="-1"><a class="header-anchor" href="#触发器-triggers" aria-hidden="true">#</a> 触发器 Triggers</h2>
<p>目前，网格有 14 种不同的触发器，场景有 3 种。</p>
<p>可用于网格的触发器有：</p>
<ul>
<li>ActionManager.NothingTrigger: 不触发。用于 action.then 函数的子动作</li>
<li>ActionManager.OnPickTrigger： touch/click 网格时触发</li>
<li>ActionManager.OnDoublePickTrigger：double touch/double click 网格时触发</li>
<li>ActionManager.OnPickDownTrigger：touch down/click down 网格时触发</li>
<li>ActionManager.OnPickUpTrigger：touch up/click up 网格时触发</li>
<li>ActionManager.OnPickOutTrigger：touch down/click down 网格然后移出网格时触发</li>
<li>ActionManager.OnLeftPickTrigger：左键 touch/click 网格时触发</li>
<li>ActionManager.OnRightPickTrigger：右键 touch/click 网格时触发</li>
<li>ActionManager.OnCenterPickTrigger：中键 touch/click 网格时触发</li>
<li>ActionManager.OnLongPressTrigger：长时间 touch/click 网格（以毫秒为单位）（由 BABYLON.Scene.LongPressDelay 定义）时触发</li>
<li>ActionManager.OnPointerOverTrigger：当指针在网格上时触发。只触发一次</li>
<li>ActionManager.OnPointerOutTrigger：当指针不再位于网格上时触发。只触发一次</li>
<li>ActionManager.OnIntersectionEnterTrigger：当网格与指定网格相交时触发。只触发一次</li>
<li>ActionManager.OnIntersectionExitTrigger：当网格不再与指定网格相交时触发。只触发一次</li>
</ul>
<p>请注意，最后两个相交触发器需要指定一个网格，可以像这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>SetValueAction</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnIntersectionEnterTrigger<span class="token punctuation">,</span> 
            <span class="token literal-property property">parameter</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
                <span class="token literal-property property">mesh</span><span class="token operator">:</span> otherMesh<span class="token punctuation">,</span> 
                <span class="token literal-property property">usePreciseIntersection</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        mesh<span class="token punctuation">,</span>
        <span class="token string">"scaling"</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意可选的 usePreciseIntersection 属性。如果不想使用精确的相交点，可以简单地将目标网格作为 parameter 属性的值传递：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>SetValueAction</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnIntersectionEnterTrigger<span class="token punctuation">,</span>
            <span class="token literal-property property">parameter</span><span class="token operator">:</span> otherMesh
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        mesh<span class="token punctuation">,</span>
        <span class="token string">'scaling'</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可用于场景的触发器有：</p>
<ul>
<li>ActionManager.OnEveryFrameTrigger: 每帧触发一次</li>
<li>ActionManager.OnKeyDownTrigger: 当按键按下时触发</li>
<li>ActionManager.OnKeyUpTrigger: 当按键抬起时触发</li>
</ul>
<p>OnKeyUpTrigger 和 OnKeyDownTrigger 触发器都接受一个字符串参数值，该值与事件的 sourceEvent.key 值进行比较。这可以创建仅在特定按键上触发的按键触发器，如下所示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scene<span class="token punctuation">.</span>actionManager<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>ExecuteCodeAction</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnKeyUpTrigger<span class="token punctuation">,</span>
            <span class="token literal-property property">parameter</span><span class="token operator">:</span> <span class="token string">'r'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'r button was pressed'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可用动作-actions" tabindex="-1"><a class="header-anchor" href="#可用动作-actions" aria-hidden="true">#</a> 可用动作 Actions</h2>
<p>大多数操作都有一个 propertyPath 属性。此字符串定义了要影响动作的属性的路径。可以使用如 position 或 diffuse 等直接值。但是也可以提供复杂的路径，比如 position.x</p>
<ul>
<li>SwitchBooleanAction(trigger, target, propertyPath, condition): 切换布尔属性</li>
<li>SetValueAction(trigger, target, propertyPath, value, condition): 为一个属性设置一个直接值</li>
<li>IncrementValueAction(trigger, target, propertyPath, value, condition): 将一个数字与一个数字属性相加</li>
<li>PlayAnimationAction(trigger, target, from, to, loop, condition): 在目标物体上播放动画</li>
<li>StopAnimationAction(trigger, target, condition): 停止目标物体正在播放的任何动画</li>
<li>DoNothingAction(trigger, condition): 什么也不干 😃</li>
<li>CombineAction(trigger, children[], condition): 同时执行多个动作。 children 属性必须是一个动作数组</li>
<li>ExecuteCodeAction(trigger, func, condition): 执行代码</li>
<li>SetParentAction(trigger, target, parent, condition): 设置目标的父级</li>
<li>PlaySoundAction(trigger, sound, condition): 播放指定的音频</li>
<li>StopSoundAction(trigger, sound, condition): 停止播放指定的音频</li>
<li>InterpolateValueAction(trigger, target, propertyPath, value, duration, condition, stopOtherAnimations): 创建动画以将属性的当前值插入给定目标。支持以下类型：
<ul>
<li>number</li>
<li>Color3</li>
<li>Vector3</li>
<li>Quaternion</li>
</ul>
</li>
</ul>
<h2 id="条件-conditions" tabindex="-1"><a class="header-anchor" href="#条件-conditions" aria-hidden="true">#</a> 条件 Conditions</h2>
<p>有以下3种类型的条件：</p>
<ul>
<li>ValueCondition(actionManager, target, propertyPath, value, operator): 当给定的属性和值符合运算符时为真。支持以下运算符：
<ul>
<li>ValueCondition.IsEqual</li>
<li>ValueCondition.IsDifferent</li>
<li>ValueCondition.IsGreater</li>
<li>ValueCondition.IsLesser</li>
</ul>
</li>
<li>PredicateCondition(actionManager, predicate): 当给定的断言函数返回true时为true</li>
<li>StateCondition(actionManager, target, value): 当目标的 state 属性与给定值一致时为true</li>
</ul>
<h2 id="练习一下" tabindex="-1"><a class="header-anchor" href="#练习一下" aria-hidden="true">#</a> 练习一下</h2>
<p>设想当用户触摸网格时，让我们来隐藏它。</p>
<p>首先，你要给相关的网格添加一个 BABYLON.ActionManager。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>ActionManager</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其次，你要注册一个与BABYLON.ActionManager.OnPickTrigger触发器相关的动作。这个动作将把Mesh.visibility属性插值为0.2。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager<span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>InterpolateValueAction</span><span class="token punctuation">(</span>
        <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnPickTrigger<span class="token punctuation">,</span>
        mesh<span class="token punctuation">,</span>
        <span class="token string">'visibility'</span><span class="token punctuation">,</span>
        <span class="token number">0.2</span><span class="token punctuation">,</span>
        <span class="token number">1000</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搞定！</p>
<p>如果在淡出 mesh 后，你希望它重新淡入，你可以通过链式动作将 mesh.visibility 属性恢复为默认值来实现。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>actionManager
    <span class="token punctuation">.</span><span class="token function">registerAction</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>InterpolateValueAction</span><span class="token punctuation">(</span>
            <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnPickTrigger<span class="token punctuation">,</span>
            mesh<span class="token punctuation">,</span>
            <span class="token string">'visibility'</span><span class="token punctuation">,</span>
            <span class="token number">0.2</span><span class="token punctuation">,</span>
            <span class="token number">1000</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>InterpolateValueAction</span><span class="token punctuation">(</span>
            <span class="token constant">BABYLON</span><span class="token punctuation">.</span>ActionManager<span class="token punctuation">.</span>OnPickTrigger<span class="token punctuation">,</span>
            mesh<span class="token punctuation">,</span>
            <span class="token string">'visibility'</span><span class="token punctuation">,</span>
            <span class="token number">1.0</span><span class="token punctuation">,</span>
            <span class="token number">1000</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，第一次点击会隐藏按钮，下一次点击会恢复它，依此类推...</p>
<h2 id="精灵的动作" tabindex="-1"><a class="header-anchor" href="#精灵的动作" aria-hidden="true">#</a> 精灵的动作</h2>
<p>从 Babylon.js 2.3 开始，精灵可以有一个动作管理器：<a href="https://playground.babylonjs.com/#9RUHH#5" target="_blank" rel="noopener noreferrer">精灵动作管理器<ExternalLinkIcon/></a></p>
<p>请注意，SpriteManager 必须通过使用<code v-pre>spriteManager.isPickable = true</code>启用拾取支持。Sprite 还可以使用 <code v-pre>sprite.isPickable = false / true</code> （默认为 False）来控制拾取</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p>如果你想研究动作，可以在 Playground 里尝试：<a href="https://playground.babylonjs.com/#J19GYK#0" target="_blank" rel="noopener noreferrer">动作示例<ExternalLinkIcon/></a></p>
</template>
