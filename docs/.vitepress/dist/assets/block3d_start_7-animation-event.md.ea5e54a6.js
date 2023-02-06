import{_ as e,c as t,o as a,a as n}from"./app.4d7dcf0a.js";const u=JSON.parse('{"title":"动画和事件","description":"","frontmatter":{},"headers":[{"level":2,"title":"动画","slug":"动画","link":"#动画","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":2,"title":"下一步","slug":"下一步","link":"#下一步","children":[]}],"relativePath":"block3d/start/7-animation-event.md"}'),i={name:"block3d/start/7-animation-event.md"},o=n('<h1 id="动画和事件" tabindex="-1">动画和事件 <a class="header-anchor" href="#动画和事件" aria-hidden="true">#</a></h1><p>在前面的教程中，我们导入了几段动画，现在我们来获取和控制这些动画。</p><h2 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-hidden="true">#</a></h2><p>在Block3D中这些动画片段被称为“动画组”AnimationGroup，在场景查看器的<code>Animation groups</code>下面可以看到所有导入的动画组。</p><p><img src="https://cdn.zjbku.com/start/anim-event.jpg" alt="anim-event"></p><p>使用动画分类下的<code>获取动画组get_animaiton_group_by_name</code>拼图和<code>动画组回放animation_group_playback</code>拼图，可以控制动画组的播放。</p><p><img src="https://cdn.zjbku.com/start/anim-event-2-min.jpg" alt="anim-event-2"></p><p>此时，场景中的角色已经跑起来了。</p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h2><p>下面我们使用事件分类下的<code>键盘事件keyboard_event</code>拼图和<code>获取按键get_key_input</code>拼图来控制动画组的播放。</p><ol><li>当键盘按下时，如果按下的是<code>w</code>键，则播放跑步动画；</li><li>当键盘抬起时，如果抬起的是<code>w</code>键，则停止动画。</li></ol><p>其中，要用到逻辑分类下的<code>controls_if</code>拼图和<code>logic_compare</code>拼图，判断按键的值。</p><p><img src="https://cdn.zjbku.com/start/anim-event-5-min.jpg" alt="anim-event-5"></p><p>效果：</p><p><img src="https://cdn.zjbku.com/start/anim-event-6.gif" alt="anim-event-6"></p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-hidden="true">#</a></h2><p>以上走马观花地对Block3D的主要模块做了介绍，教程到这里接近尾声。最后，介绍一下如何最终将所有工作发布为可以在网络上传播的Web3D应用。</p>',17),c=[o];function d(r,p,s,l,_,h){return a(),t("div",null,c)}const g=e(i,[["render",d]]);export{u as __pageData,g as default};
