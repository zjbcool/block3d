export default {
  "kind": "category",
  // "name": "TweakPane",
  "cssConfig": {
    "icon": "tweakpaneIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "tweak_pane_style",
  "contents": [
    {
      "kind": "label",
      "text": "TweakPane:"
    },
    {
      "kind": "block",
      "type": "create_tweak_pane",
    },
    {
      "kind": "block",
      "type": "pane_add_folder",
    },
    {
      "kind": "block",
      "type": "pane_add_slider",
    },
    {
      "kind": "block",
      "type": "pane_add_list",
    },
    {
      "kind": "block",
      "type": "pane_add_checkbox",
    },
    {
      "kind": "block",
      "type": "pane_add_text",
    },
    {
      "kind": "block",
      "type": "pane_add_color",
    },
    {
      "kind": "block",
      "type": "pane_add_button",
    },
    {
      "kind": "block",
      "type": "pane_get_value",
    }

  ]
}