export default {
  "kind": "Category",
  // "name": "Nodes",
  "cssConfig": {
    "icon": "nodeIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "nodes_style",
  "contents": [
    {
      "kind": "label",
      "text": "Nodes:"
    },
    {
      "kind": "block",
      "type": "mesh_selector"
    },
    {
      "kind": "block",
      "type": "camera_selector"
    },
    {
      "kind": "block",
      "type": "light_selector"
    },
    {
      "kind": "block",
      "type": "create_transform_node"
    },
    {
      "kind": "block",
      "type": "node_get_all"
    },
    {
      "kind": "block",
      "type": "node_get_children",
    },
    {
      "kind": "label",
      "text": "Relations:"
    },
    {
      "kind": "block",
      "type": "node_parent",
    },
    {
      "kind": "block",
      "type": "node_is_child_of",
    },
    {
      "kind": "label",
      "text": "Enabled:"
    },
    {
      "kind": "block",
      "type": "node_set_enabled",
    },
  ]
}