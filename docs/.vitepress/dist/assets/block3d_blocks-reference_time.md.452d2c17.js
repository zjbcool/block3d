import{_ as l,c as d,b as e,d as t,e as r,a as i,o as n,r as s}from"./app.a8a600a6.js";const D=JSON.parse('{"title":"时间 Time","description":"","frontmatter":{},"headers":[{"level":2,"title":"时间","slug":"时间","link":"#时间","children":[{"level":3,"title":"获取时间 get_elapsed_time","slug":"get-elapsed-time","link":"#get-elapsed-time","children":[]},{"level":3,"title":"延时 time_after","slug":"time-after","link":"#time-after","children":[]},{"level":3,"title":"创建间隔器 create_intervalometer","slug":"create-intervalometer","link":"#create-intervalometer","children":[]},{"level":3,"title":"删除间隔器 remove_intervalometer","slug":"remove-intervalometer","link":"#remove-intervalometer","children":[]},{"level":3,"title":"每帧 time_every_frame","slug":"time-every-frame","link":"#time-every-frame","children":[]},{"level":3,"title":"获取帧时间差 get_delta_time","slug":"get-delta-time","link":"#get-delta-time","children":[]}]},{"level":2,"title":"计时器","slug":"计时器","link":"#计时器","children":[{"level":3,"title":"创建计时器 create_advanced_timer","slug":"create-advanced-timer","link":"#create-advanced-timer","children":[]},{"level":3,"title":"计时器属性 advanced_timer_properties_accessors","slug":"advanced-timer-properties-accessors","link":"#advanced-timer-properties-accessors","children":[]},{"level":3,"title":"计时器方法 advanced_timer_methods","slug":"advanced-timer-methods","link":"#advanced-timer-methods","children":[]}]}],"relativePath":"block3d/blocks-reference/time.md"}'),c={name:"block3d/blocks-reference/time.md"},o=e("h1",{id:"时间-time",tabindex:"-1"},[t("时间 Time "),e("a",{class:"header-anchor",href:"#时间-time","aria-hidden":"true"},"#")],-1),h=e("p",null,"这类拼图用于控制时间。",-1),_={class:"table-of-contents"},m=e("a",{href:"#时间"},"时间",-1),v=e("li",null,[e("a",{href:"#get-elapsed-time"},"获取时间 get_elapsed_time")],-1),p=e("li",null,[e("a",{href:"#time-after"},"延时 time_after")],-1),u=e("li",null,[e("a",{href:"#create-intervalometer"},"创建间隔器 create_intervalometer")],-1),f=e("li",null,[e("a",{href:"#remove-intervalometer"},"删除间隔器 remove_intervalometer")],-1),g={href:"#time-every-frame"},b=e("li",null,[e("a",{href:"#get-delta-time"},"获取帧时间差 get_delta_time")],-1),x=e("li",null,[e("a",{href:"#计时器"},"计时器"),e("ul",null,[e("li",null,[e("a",{href:"#create-advanced-timer"},"创建计时器 create_advanced_timer")]),e("li",null,[e("a",{href:"#advanced-timer-properties-accessors"},"计时器属性 advanced_timer_properties_accessors")]),e("li",null,[e("a",{href:"#advanced-timer-methods"},"计时器方法 advanced_timer_methods")])])],-1),k=i('<h2 id="时间" tabindex="-1">时间 <a class="header-anchor" href="#时间" aria-hidden="true">#</a></h2><h3 id="get-elapsed-time" tabindex="-1">获取时间 get_elapsed_time <a class="header-anchor" href="#get-elapsed-time" aria-hidden="true">#</a></h3><p>返回自1970年1月1日00:00:00 UTC以来经过的毫秒数。</p><h3 id="time-after" tabindex="-1">延时 time_after <a class="header-anchor" href="#time-after" aria-hidden="true">#</a></h3><p>该拼图会在延迟指定时间后，执行<code>执行</code>插槽中的拼图。</p><h3 id="create-intervalometer" tabindex="-1">创建间隔器 create_intervalometer <a class="header-anchor" href="#create-intervalometer" aria-hidden="true">#</a></h3><p>按照固定的时间间隔重复执行&#39;执行&#39;插槽中的拼图。</p><h3 id="remove-intervalometer" tabindex="-1">删除间隔器 remove_intervalometer <a class="header-anchor" href="#remove-intervalometer" aria-hidden="true">#</a></h3><p>取消间隔计时器。</p>',9),T={id:"time-every-frame",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#time-every-frame","aria-hidden":"true"},"#",-1),S=i('<p>弃用。使用<a href="./events.html#listen-scene-event">监听场景事件 listen_scene_event</a>代替。该拼图会在每一帧渲染时，执行<code>执行</code>插槽中的拼图。</p><h3 id="get-delta-time" tabindex="-1">获取帧时间差 get_delta_time <a class="header-anchor" href="#get-delta-time" aria-hidden="true">#</a></h3><p>获取当前帧与上一帧之间的时间差（单位毫秒）。该拼图用于<a href="./events.html#listen-scene-event">监听场景事件 listen_scene_event</a>拼图，它与速度相乘以实现顺畅的程序动画。</p><h2 id="计时器" tabindex="-1">计时器 <a class="header-anchor" href="#计时器" aria-hidden="true">#</a></h2><h3 id="create-advanced-timer" tabindex="-1">创建计时器 create_advanced_timer <a class="header-anchor" href="#create-advanced-timer" aria-hidden="true">#</a></h3><p>创建一个高级计时器。</p><h3 id="advanced-timer-properties-accessors" tabindex="-1">计时器属性 advanced_timer_properties_accessors <a class="header-anchor" href="#advanced-timer-properties-accessors" aria-hidden="true">#</a></h3><p>属性：</p><ul><li>当每次计数：在每次计时器计算剩余时间时触发事件</li><li>当状态改变：当状态改变时触发事件</li><li>当计时取消：当计时器根据打断条件取消时触发事件</li><li>当计时结束：当计时器结束时触发事件</li></ul><p>状态：</p><ul><li>打断条件：设置计时器的打断条件</li></ul><h3 id="advanced-timer-methods" tabindex="-1">计时器方法 advanced_timer_methods <a class="header-anchor" href="#advanced-timer-methods" aria-hidden="true">#</a></h3><p>计时器方法。包括：</p><ul><li>开始计时器：将启动计时器的一个新的迭代。每次只能运行一个计时器的实例。</li><li>结束计时器：将在下一刻强制停止计时。</li><li>销毁计时器：销毁计时器，释放所有资源。</li></ul>',14);function V(N,A,C,B,P,I){const a=s("Badge");return n(),d("div",null,[o,h,e("nav",_,[e("ul",null,[e("li",null,[m,e("ul",null,[v,p,u,f,e("li",null,[e("a",g,[t("每帧 time_every_frame "),r(a,{type:"warning",text:"弃用"})])]),b])]),x])]),k,e("h3",T,[t("每帧 time_every_frame "),r(a,{type:"warning",text:"弃用"}),t(),y]),S])}const E=l(c,[["render",V]]);export{D as __pageData,E as default};
