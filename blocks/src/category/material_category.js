export default {
  "kind": "Category",
  // "name": "Materials",
  "cssConfig": {
    "icon": "materialIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "material_style",
  "contents": [
    {
      "kind": "label",
      "text": "Materials:"
    },
    {
      "kind": "block",
      "type": "create_material",
    },
    {
      "kind": "block",
      "type": "create_node_material_from_json",
    },
    {
      "kind": "block",
      "type": "set_get_material_prop",
    },
    {
      "kind": "block",
      "type": "get_material_by_mesh",
    },
    {
      "kind": "block",
      "type": "remove_material",
    },
    {
      "kind": "label",
      "text": "Textures:"
    },
    {
      "kind": "block",
      "type": "create_texture",
    },
    {
      "kind": "block",
      "type": "remove_texture",
    },
    {
      "kind": "block",
      "type": "set_get_texture_prop"
    },
    {
      "kind": "label",
      "text": "Color:"
    },
    {
      "kind": "block",
      "type": "material_color3",
    },
    {
      "kind": "block",
      "type": "material_color3_from_hex",
    },
    {
      "kind": "block",
      "type": "material_color4",
    },
    {
      "kind": "block",
      "type": "material_color4_from_hex",
    },
  ]
}