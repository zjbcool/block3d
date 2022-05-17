export default {
  "kind": "Category",
  // "name": "Cameras",
  "cssConfig": {
    "icon": "cameraIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "cameras_style",
  "contents": [
    {
      "kind": "label",
      "text": "Cameras:"
    },
    {
      "kind": "block",
      "type": "create_camera",
    },
    {
      "kind": "block",
      "type": "set_get_camera_prop",
    },
    {
      "kind": "block",
      "type": "set_get_active_camera",
    },
    {
      "kind": "block",
      "type": "remove_camera",
    },
    {
      "kind": "block",
      "type": "autorotate_camera",
    },
    {
      "kind": "block",
      "type": "bounce_camera",
    },
    {
      "kind": "block",
      "type": "zoom_camera",
    },
    {
      "kind": "block",
      "type": "camera_control_enabled",
    },
    {
      "kind": "block",
      "type": "camera_get_forward_ray",
    },
  ]
}