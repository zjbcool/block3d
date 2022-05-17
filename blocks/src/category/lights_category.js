export default {
  "kind": "Category",
  // "name": "Lights",
  "cssConfig": {
    "icon": "lightIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "lights_style",
  "contents": [
    {
      "kind": "label",
      "text": "Lights:"
    },
    {
      "kind": "block",
      "type": "create_light"
    },
    {
      "kind": "block",
      "type": "set_get_light_prop",
    },
    {
      "kind": "block",
      "type": "create_shadow",
    },
    {
      "kind": "block",
      "type": "set_shadow_prop"
    },
    {
      "kind": "block",
      "type": "add_shadow_caster",
    },

  ]
}