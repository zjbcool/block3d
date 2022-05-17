import text_category from './text_category';
import math_number_category from './math_number_category';
import array_category from './array_category';
import object_category from './object_category';
import logic_category from './logic_category';
import loop_category from './loop_category';
import variable_category from './variable_category';
import functions_category from './functions_category';
import system_category from './system_category';

import scenes_category from './scenes_category';
import nodes_category from './nodes_category';
import meshes_category from './meshes_category';
import cameras_category from './cameras_category';
import lights_category from './lights_category';
import events_category from './events_category';
import animation_category from './animation_category';
import time_category from './time_category';
import material_category from './material_category';
import tools_category from './tools_category';

import gui_category from './gui_category';
import tweak_pane_category from './tweak_pane_category';

export default {
  "kind": "categoryToolbox",
  "contents": [
    text_category,
    math_number_category,
    array_category,
    object_category,
    logic_category,
    loop_category,
    variable_category,
    functions_category,
    system_category,
    {
      "kind": "sep",
    },
    scenes_category,
    nodes_category,
    meshes_category,
    cameras_category,
    lights_category,
    material_category,
    events_category,
    time_category,
    animation_category,
    tools_category,
    {
      "kind": "sep",
    },
    gui_category,
    tweak_pane_category,
  ]
}