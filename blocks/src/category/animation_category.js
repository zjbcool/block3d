export default {
  "kind": "Category",
  // "name": "Animation",
  "cssConfig": {
    "icon": "animateIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "animation_style",
  "contents": [
    {
      "kind": "label",
      "text": "Animation:"
    },
    // {
    //   "kind": "block",
    //   "type": "create_animation_for_target",
    // },
    // {
    //   "kind": "block",
    //   "type": "begin_animation",
    // },
    // {
    //   "kind": "block",
    //   "type": "animation_playback"
    // },
    // {
    //   "kind": "block",
    //   "type": "on_animation_end"
    // },
    {
      "kind": "block",
      "type": "get_animation_group_by_name"
    },
    {
      "kind": "block",
      "type": "set_get_animaiton_group_prop"
    },
    {
      "kind": "block",
      "type": "animation_group_playback"
    },
    {
      "kind": "block",
      "type": "animation_go_to_frame"
    },
    {
      "kind": "block",
      "type": "animation_blending"
    },
    {
      "kind": "block",
      "type": "transition_animation"
    },
  ]
}