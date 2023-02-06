import{_ as t,c as i,o as a,a as e}from"./app.4d7dcf0a.js";const s=JSON.parse('{"title":"寻径 Pathfinding","description":"","frontmatter":{},"headers":[{"level":2,"title":"寻径","slug":"寻径","link":"#寻径","children":[{"level":3,"title":"创建导航网格 pathfinding_create_nav_mesh","slug":"pathfinding-create-nav-mesh","link":"#pathfinding-create-nav-mesh","children":[]},{"level":3,"title":"随机点 pathfinding_get_random_point_around","slug":"pathfinding-get-random-point-around","link":"#pathfinding-get-random-point-around","children":[]},{"level":3,"title":"临近点 pathfinding_get_closest_point","slug":"pathfinding-get-closest-point","link":"#pathfinding-get-closest-point","children":[]},{"level":3,"title":"计算路径 pathfinding_compute_path","slug":"pathfinding-compute-path","link":"#pathfinding-compute-path","children":[]},{"level":3,"title":"添加障碍 pathfinding_add_obstacle","slug":"pathfinding-add-obstacle","link":"#pathfinding-add-obstacle","children":[]},{"level":3,"title":"删除障碍 pathfinding_remove_obstacle","slug":"pathfinding-remove-obstacle","link":"#pathfinding-remove-obstacle","children":[]}]},{"level":2,"title":"代理","slug":"代理","link":"#代理","children":[{"level":3,"title":"添加代理 pathfinding_add_agent_to_crowd","slug":"pathfinding-add-agent-to-crowd","link":"#pathfinding-add-agent-to-crowd","children":[]},{"level":3,"title":"所有代理 pathfinding_get_agents_from_crowd","slug":"pathfinding-get-agents-from-crowd","link":"#pathfinding-get-agents-from-crowd","children":[]},{"level":3,"title":"代理前进 pathfinding_agent_goto","slug":"pathfinding-agent-goto","link":"#pathfinding-agent-goto","children":[]},{"level":3,"title":"代理传送 pathfinding_agent_teleport","slug":"pathfinding-agent-teleport","link":"#pathfinding-agent-teleport","children":[]},{"level":3,"title":"代理位置 pathfinding_get_agent_position","slug":"pathfinding-get-agent-position","link":"#pathfinding-get-agent-position","children":[]},{"level":3,"title":"代理速度 pathfinding_get_agent_velocity","slug":"pathfinding-get-agent-velocity","link":"#pathfinding-get-agent-velocity","children":[]},{"level":3,"title":"代理下一目标点 pathfinding_get_agent_next_target_path","slug":"pathfinding-get-agent-next-target-path","link":"#pathfinding-get-agent-next-target-path","children":[]},{"level":3,"title":"当代理到过终点时 pathfinding_agent_reach_target_event","slug":"pathfinding-agent-reach-target-event","link":"#pathfinding-agent-reach-target-event","children":[]}]}],"relativePath":"block3d/blocks-reference/pathfinding.md"}'),n={name:"block3d/blocks-reference/pathfinding.md"},d=e('<h1 id="寻径-pathfinding" tabindex="-1">寻径 Pathfinding <a class="header-anchor" href="#寻径-pathfinding" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#寻径">寻径</a><ul><li><a href="#pathfinding-create-nav-mesh">创建导航网格 pathfinding_create_nav_mesh</a></li><li><a href="#pathfinding-get-random-point-around">随机点 pathfinding_get_random_point_around</a></li><li><a href="#pathfinding-get-closest-point">临近点 pathfinding_get_closest_point</a></li><li><a href="#pathfinding-compute-path">计算路径 pathfinding_compute_path</a></li><li><a href="#pathfinding-add-obstacle">添加障碍 pathfinding_add_obstacle</a></li><li><a href="#pathfinding-remove-obstacle">删除障碍 pathfinding_remove_obstacle</a></li></ul></li><li><a href="#代理">代理</a><ul><li><a href="#pathfinding-add-agent-to-crowd">添加代理 pathfinding_add_agent_to_crowd</a></li><li><a href="#pathfinding-get-agents-from-crowd">所有代理 pathfinding_get_agents_from_crowd</a></li><li><a href="#pathfinding-agent-goto">代理前进 pathfinding_agent_goto</a></li><li><a href="#pathfinding-agent-teleport">代理传送 pathfinding_agent_teleport</a></li><li><a href="#pathfinding-get-agent-position">代理位置 pathfinding_get_agent_position</a></li><li><a href="#pathfinding-get-agent-velocity">代理速度 pathfinding_get_agent_velocity</a></li><li><a href="#pathfinding-get-agent-next-target-path">代理下一目标点 pathfinding_get_agent_next_target_path</a></li><li><a href="#pathfinding-agent-reach-target-event">当代理到过终点时 pathfinding_agent_reach_target_event</a></li></ul></li></ul></nav><p>该分类用于创建一个导航网格，在这个网格上可以实现AI、寻路等功能。使用该分类拼图前需要先通过分类顶部“导入模块”按钮导入需要的依赖包。</p><h2 id="寻径" tabindex="-1">寻径 <a class="header-anchor" href="#寻径" aria-hidden="true">#</a></h2><h3 id="pathfinding-create-nav-mesh" tabindex="-1">创建导航网格 pathfinding_create_nav_mesh <a class="header-anchor" href="#pathfinding-create-nav-mesh" aria-hidden="true">#</a></h3><p>创建导航网格。</p><p>参数：</p><ul><li>网格 - 包含用于创建导航网格的网格数组</li><li>最大代理数量</li><li>最大代理半径</li><li>选项 - 创建导航网格参数，通过该拼图右键菜单-<code>创建 选项</code>创建选项拼图</li><li>调试模式 - 显示创建的导航网格</li><li>当完成时 - 创建完成时执行该插槽中的拼图</li></ul><h3 id="pathfinding-get-random-point-around" tabindex="-1">随机点 pathfinding_get_random_point_around <a class="header-anchor" href="#pathfinding-get-random-point-around" aria-hidden="true">#</a></h3><p>获取导航网格上指定半径内的一个位置。</p><p>参数：</p><ul><li>位置 - 世界坐标位置</li><li>最大半径 - 距离指定世界坐标位置的最大距离</li></ul><h3 id="pathfinding-get-closest-point" tabindex="-1">临近点 pathfinding_get_closest_point <a class="header-anchor" href="#pathfinding-get-closest-point" aria-hidden="true">#</a></h3><p>获取导航网格上临近参数位置的点。</p><p>参数：</p><ul><li>位置 - 世界坐标位置</li></ul><h3 id="pathfinding-compute-path" tabindex="-1">计算路径 pathfinding_compute_path <a class="header-anchor" href="#pathfinding-compute-path" aria-hidden="true">#</a></h3><p>从起点到终点计算一条导航路径。如果没有路径被算出，则返回一个空数组。</p><p>该拼图返回组成路径的世界坐标位置的数组。</p><p>参数：</p><ul><li>起点 - 起点位置</li><li>终点 - 终点位置</li></ul><h3 id="pathfinding-add-obstacle" tabindex="-1">添加障碍 pathfinding_add_obstacle <a class="header-anchor" href="#pathfinding-add-obstacle" aria-hidden="true">#</a></h3><p>添加一个立方体或圆柱体的障碍到导航网格。</p><p>立方体障碍参数：</p><ul><li>位置 - 世界坐标位置</li><li>大小 - 用向量表示的立方体大小</li><li>角度 - 沿Y轴的旋转角度</li><li>调试模式 - 以网格形式显示障碍</li></ul><p>圆柱体障碍参数：</p><ul><li>位置 - 世界坐标位置</li><li>半径 - 圆柱体的半径</li><li>高度 - 圆柱体的高度</li><li>调试模式 - 以网格形式显示障碍</li></ul><h3 id="pathfinding-remove-obstacle" tabindex="-1">删除障碍 pathfinding_remove_obstacle <a class="header-anchor" href="#pathfinding-remove-obstacle" aria-hidden="true">#</a></h3><p>删除障碍。</p><h2 id="代理" tabindex="-1">代理 <a class="header-anchor" href="#代理" aria-hidden="true">#</a></h2><h3 id="pathfinding-add-agent-to-crowd" tabindex="-1">添加代理 pathfinding_add_agent_to_crowd <a class="header-anchor" href="#pathfinding-add-agent-to-crowd" aria-hidden="true">#</a></h3><p>使用指定的参数和变换节点添加新代理。可以将任何内容附加到变换节点。变换节点的位置在场景中不断更新。</p><p>拼图返回代理索引。</p><p>参数：</p><ul><li>位置 - 受导航网格约束的世界坐标位置</li><li>选项 - 代理参数，通过该拼图右键菜单-<code>创建 选项</code>创建选项拼图</li><li>变换节点 - 与不断更新的代理挂钩</li></ul><h3 id="pathfinding-get-agents-from-crowd" tabindex="-1">所有代理 pathfinding_get_agents_from_crowd <a class="header-anchor" href="#pathfinding-get-agents-from-crowd" aria-hidden="true">#</a></h3><p>获取包含所有代理的数组。</p><h3 id="pathfinding-agent-goto" tabindex="-1">代理前进 pathfinding_agent_goto <a class="header-anchor" href="#pathfinding-agent-goto" aria-hidden="true">#</a></h3><p>使代理前往目标点。目标点受导航网格限制。</p><p>参数:</p><ul><li>索引 - 代理索引</li><li>目标 - 目标位置</li></ul><h3 id="pathfinding-agent-teleport" tabindex="-1">代理传送 pathfinding_agent_teleport <a class="header-anchor" href="#pathfinding-agent-teleport" aria-hidden="true">#</a></h3><p>传送代理到一个新的位置。</p><p>参数:</p><ul><li>索引 - 代理索引</li><li>目标 - 目标位置</li></ul><h3 id="pathfinding-get-agent-position" tabindex="-1">代理位置 pathfinding_get_agent_position <a class="header-anchor" href="#pathfinding-get-agent-position" aria-hidden="true">#</a></h3><p>返回代理的世界坐标位置。</p><p>参数:</p><ul><li>索引 - 代理索引</li></ul><h3 id="pathfinding-get-agent-velocity" tabindex="-1">代理速度 pathfinding_get_agent_velocity <a class="header-anchor" href="#pathfinding-get-agent-velocity" aria-hidden="true">#</a></h3><p>返回代理的世界坐标速度。</p><p>参数:</p><ul><li>索引 - 代理索引</li></ul><h3 id="pathfinding-get-agent-next-target-path" tabindex="-1">代理下一目标点 pathfinding_get_agent_next_target_path <a class="header-anchor" href="#pathfinding-get-agent-next-target-path" aria-hidden="true">#</a></h3><p>返回代理在路径上的下一目标。</p><p>参数:</p><ul><li>索引 - 代理索引</li></ul><h3 id="pathfinding-agent-reach-target-event" tabindex="-1">当代理到过终点时 pathfinding_agent_reach_target_event <a class="header-anchor" href="#pathfinding-agent-reach-target-event" aria-hidden="true">#</a></h3><p>当代理进入目标点到达半径范围时触发此事件。</p>',59),h=[d];function l(g,p,r,o,f,_){return a(),i("div",null,h)}const u=t(n,[["render",l]]);export{s as __pageData,u as default};
