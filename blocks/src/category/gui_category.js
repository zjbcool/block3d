export default {
  "kind": "Category",
  // "name": "GUI",
  "cssConfig": {
    "icon": "guiIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "gui_style",
  "contents": [
    {
      "kind": "label",
      "text": "GUI:"
    },
    {
      "kind": "block",
      "type": "create_fullscreen_UI",
    },
    {
      "kind": "block",
      "type": "set_get_advTexture_prop",
    },
    {
      "kind": "block",
      "type": "gui_get_control",
    },
    {
      "kind": "block",
      "type": "gui_control_prop"
    },
    {
      "kind": "block",
      "type": "gui_get_control_value"
    },
    {
      "kind": "block",
      "type": "gui_get_child_controls"
    },
    {
      "kind": "block",
      "type": "gui_event"
    },
    {
      "kind": "block",
      "type": "gui_move_control_to_vector",
    },
  ]
}