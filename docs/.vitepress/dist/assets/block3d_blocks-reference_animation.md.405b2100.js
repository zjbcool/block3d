import{_ as i,c as a,o as n,a as e}from"./app.4d7dcf0a.js";const g=JSON.parse('{"title":"动画 Animation","description":"","frontmatter":{},"headers":[{"level":2,"title":"获取动画组 get_animation_group_by_name","slug":"get-animation-group-by_name","link":"#get-animation-group-by_name","children":[]},{"level":2,"title":"动画组属性 animation_group_properties_accessors","slug":"animation-group-properties-accessors","link":"#animation-group-properties-accessors","children":[]},{"level":2,"title":"动画组回放 animation_group_playback","slug":"animation-group-playback","link":"#animation-group-playback","children":[]},{"level":2,"title":"跳转帧 animation_go_to_frame","slug":"animation-go-to-frame","link":"#animation-go-to-frame","children":[]},{"level":2,"title":"混合动画组 animation_blending","slug":"animation-blending","link":"#animation-blending","children":[]},{"level":2,"title":"过渡动画 transition_animation","slug":"transition-animation","link":"#transition-animation","children":[]}],"relativePath":"block3d/blocks-reference/animation.md"}'),t={name:"block3d/blocks-reference/animation.md"},o=e('<h1 id="动画-animation" tabindex="-1">动画 Animation <a class="header-anchor" href="#动画-animation" aria-hidden="true">#</a></h1><p>用于创建、获取和控制动画。</p><nav class="table-of-contents"><ul><li><a href="#get-animation-group-by_name">获取动画组 get_animation_group_by_name</a></li><li><a href="#animation-group-properties-accessors">动画组属性 animation_group_properties_accessors</a></li><li><a href="#animation-group-playback">动画组回放 animation_group_playback</a></li><li><a href="#animation-go-to-frame">跳转帧 animation_go_to_frame</a></li><li><a href="#animation-blending">混合动画组 animation_blending</a></li><li><a href="#transition-animation">过渡动画 transition_animation</a></li></ul></nav><h2 id="get-animation-group-by_name" tabindex="-1">获取动画组 get_animation_group_by_name <a class="header-anchor" href="#get-animation-group-by_name" aria-hidden="true">#</a></h2><p>根据名称获取动画组。动画组是从三维软件导出的关键帧动画。</p><h2 id="animation-group-properties-accessors" tabindex="-1">动画组属性 animation_group_properties_accessors <a class="header-anchor" href="#animation-group-properties-accessors" aria-hidden="true">#</a></h2><p>用于设置或获取动画组属性或状态。状态是访问对象属性时触发的回调函数，用于设置或获取对象的内部数据，用法与属性相同。</p><p>属性：</p><ul><li>当动画组结束时</li><li>当动画组循环时</li><li>当动画组暂停时</li><li>当动画组播放时</li></ul><p>状态：</p><ul><li>开始帧</li><li>是否叠加</li><li>播放中</li><li>已开始</li><li>循环动画</li><li>速率</li><li>结束帧</li></ul><h2 id="animation-group-playback" tabindex="-1">动画组回放 animation_group_playback <a class="header-anchor" href="#animation-group-playback" aria-hidden="true">#</a></h2><p>动画回放控制。</p><p>参数：</p><ul><li>暂停</li><li>播放</li><li>重置</li><li>重新开始</li><li>开始</li><li>停止</li></ul><h2 id="animation-go-to-frame" tabindex="-1">跳转帧 animation_go_to_frame <a class="header-anchor" href="#animation-go-to-frame" aria-hidden="true">#</a></h2><p>使动画组跳转到指定的帧。</p><h2 id="animation-blending" tabindex="-1">混合动画组 animation_blending <a class="header-anchor" href="#animation-blending" aria-hidden="true">#</a></h2><p>设置两个动画组之间的过渡。参数<code>混合速度</code>控制过渡的速度。</p><h2 id="transition-animation" tabindex="-1">过渡动画 transition_animation <a class="header-anchor" href="#transition-animation" aria-hidden="true">#</a></h2><p>过渡对象的属性值到一个目标值。若启用高级选项的回调，当动画结束时，执行回调插槽中的拼图。</p><p>参数：</p><ul><li>对象 - 可动画对象，如网格、相机、灯光</li><li>键 - 动画对象的属性，如position</li><li>值 - 目标值</li><li>类型 - 值类型：Float, Vector2, Vector3, Color3</li><li>时长 - 时间长度，单位秒</li><li>fps - 每秒帧数</li><li>缓动 - 过渡类型，缓动曲线参考：<a href="https://easings.net/" target="_blank" rel="noreferrer">https://easings.net/</a></li></ul>',23),l=[o];function r(s,p,m,c,_,d){return n(),a("div",null,l)}const u=i(t,[["render",r]]);export{g as __pageData,u as default};
