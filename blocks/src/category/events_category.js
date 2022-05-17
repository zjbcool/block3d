export default {
  "kind": "Category",
  // "name": "Events",
  "cssConfig": {
    "icon": "eventIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "events_style",
  "contents": [
    {
      "kind": "label",
      "text": "Events:"
    },
    {
      "kind": "block",
      "type": "pointer_event"
    },
    {
      "kind": "block",
      "type": "picking_info"
    },
    {
      "kind": "block",
      "type": "keyboard_event"
    },
    {
      "kind": "block",
      "type": "get_key_input"
    },
    {
      "kind": "block",
      "type": "event_create_action"
    },
    {
      "kind": "block",
      "type": "event_add_actions"
    },
    {
      "kind": "block",
      "type": "create_custom_event"
    },
    {
      "kind": "block",
      "type": "dispatch_custom_event",
    },
    {
      "kind": "block",
      "type": "add_custom_event_listener",
    },
    // {
    //   "kind":"label",
    //   "text":"VirtualJoystick:"
    // },
    // {
    //   "kind": "block",
    //   "type": "create_virtual_joystick",
    // },
    // {
    //   "kind": "block",
    //   "type": "virtual_joystick_get_delta_position",
    // },
    // {
    //   "kind": "block",
    //   "type": "set_virtual_joystick_visible",
    // },
    {
      "kind":"label",
      "text":"Ray:"
    },
    {
      "kind": "block",
      "type": "create_ray",
    },
    {
      "kind": "block",
      "type": "ray_intersects_mesh",
    },
  ]
}