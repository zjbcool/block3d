export default {
  "kind": "Category",
  // "name": "Scenes",
  "cssConfig": {
    "icon": "sceneIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "scenes_style",
  "contents": [
    {
      "kind": "label",
      "text": "Scenes:"
    },
    {
      "kind": "block",
      "type": "scene_create_custom_preloader",
    },
    {
      "kind": "block",
      "type": "scene_update_custom_preloader",
    },
    {
      "kind": "block",
      "type": "scene_assets_manager",
    },
    {
      "kind": "block",
      "type": "scene_load_asset",
    },
    {
      "kind": "block",
      "type": "scene_get_loaded_from_asset"
    },
    {
      "kind": "block",
      "type": "scene_on_finish_load"
    },
    {
      "kind": "block",
      "type": "set_scene_prop",
    },
    {
      "kind": "block",
      "type": "scene_create_default_environment"
    },
    {
      "kind": "block",
      "type": "scene_update_default_environment"
    },
    {
      "kind": "block",
      "type": "scene_get_environment_prop"
    },
    // {
    //   "kind": "block",
    //   "type": "create_photo_dome",
    // },
    {
      "kind": "block",
      "type": "app_fullscreen"
    },
    {
      "kind": "block",
      "type": "app_pointer_lock"
    },
  ]
}