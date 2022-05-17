export default {
  "kind": "category",
  // "name": "Object",
  "cssConfig": {
    "icon": "objectIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "object_style",
  "contents": [
    {
      "kind": "label",
      "text": "Object:"
    },
    {
      "kind": "block",
      "type": "object_create"
    },
    {
      "kind": "block",
      "type": "object_member",
    },
    {
      "kind": "block",
      "type": "object_keys"
    },
    {
      "kind": "label",
      "text": "JSON:"
    },
    {
      "kind": "block",
      "type": "convert_object_to_json",
    },
    {
      "kind": "block",
      "type": "convert_json_to_object"
    },
  ]

}