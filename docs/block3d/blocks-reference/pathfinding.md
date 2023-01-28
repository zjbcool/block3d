# 寻径 Pathfinding

[[toc]]

该分类用于创建一个导航网格，在这个网格上可以实现AI、寻路等功能。使用该分类拼图前需要先通过分类顶部“导入模块”按钮导入需要的依赖包。

## 寻径

### 创建导航网格 pathfinding_create_nav_mesh {#pathfinding-create-nav-mesh}

创建导航网格。

参数：
- 网格 - 包含用于创建导航网格的网格数组
- 最大代理数量
- 最大代理半径
- 选项 - 创建导航网格参数，通过该拼图右键菜单-`创建 选项`创建选项拼图
- 调试模式 - 显示创建的导航网格
- 当完成时 - 创建完成时执行该插槽中的拼图

### 随机点 pathfinding_get_random_point_around {#pathfinding-get-random-point-around}

获取导航网格上指定半径内的一个位置。

参数：
- 位置 - 世界坐标位置
- 最大半径 - 距离指定世界坐标位置的最大距离

### 临近点 pathfinding_get_closest_point {#pathfinding-get-closest-point}

获取导航网格上临近参数位置的点。

参数：
- 位置 - 世界坐标位置

### 计算路径 pathfinding_compute_path {#pathfinding-compute-path}

从起点到终点计算一条导航路径。如果没有路径被算出，则返回一个空数组。

该拼图返回组成路径的世界坐标位置的数组。

参数：
- 起点 - 起点位置
- 终点 - 终点位置

### 添加障碍 pathfinding_add_obstacle {#pathfinding-add-obstacle}

添加一个立方体或圆柱体的障碍到导航网格。

立方体障碍参数：
- 位置 - 世界坐标位置
- 大小 - 用向量表示的立方体大小
- 角度 - 沿Y轴的旋转角度
- 调试模式 - 以网格形式显示障碍

圆柱体障碍参数：
- 位置 - 世界坐标位置
- 半径 - 圆柱体的半径
- 高度 - 圆柱体的高度
- 调试模式 - 以网格形式显示障碍

### 删除障碍 pathfinding_remove_obstacle {#pathfinding-remove-obstacle}

删除障碍。

## 代理

### 添加代理 pathfinding_add_agent_to_crowd {#pathfinding-add-agent-to-crowd}

使用指定的参数和变换节点添加新代理。可以将任何内容附加到变换节点。变换节点的位置在场景中不断更新。

拼图返回代理索引。

参数：
- 位置 - 受导航网格约束的世界坐标位置
- 选项 - 代理参数，通过该拼图右键菜单-`创建 选项`创建选项拼图
- 变换节点 - 与不断更新的代理挂钩

### 所有代理 pathfinding_get_agents_from_crowd {#pathfinding-get-agents-from-crowd}

获取包含所有代理的数组。

### 代理前进 pathfinding_agent_goto {#pathfinding-agent-goto}

使代理前往目标点。目标点受导航网格限制。

参数:
- 索引 - 代理索引
- 目标 - 目标位置

### 代理传送 pathfinding_agent_teleport {#pathfinding-agent-teleport}

传送代理到一个新的位置。

参数:
- 索引 - 代理索引
- 目标 - 目标位置

### 代理位置 pathfinding_get_agent_position {#pathfinding-get-agent-position}

返回代理的世界坐标位置。

参数: 
- 索引 - 代理索引

### 代理速度 pathfinding_get_agent_velocity {#pathfinding-get-agent-velocity}

返回代理的世界坐标速度。

参数: 
- 索引 - 代理索引

### 代理下一目标点 pathfinding_get_agent_next_target_path {#pathfinding-get-agent-next-target-path}

返回代理在路径上的下一目标。

参数: 
- 索引 - 代理索引

### 当代理到过终点时 pathfinding_agent_reach_target_event {#pathfinding-agent-reach-target-event}

当代理进入目标点到达半径范围时触发此事件。