export default {
  "kind": "Category",
  // "name": "Time",
  "cssConfig": {
    "icon": "timeIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "time_style",
  "contents": [
    {
      "kind": "label",
      "text": "Time:"
    },
    {
      "kind": "block",
      "type": "time_after",
    },
    {
      "kind": "block",
      "type": "time_every_frame"
    },
    {
      "kind": "block",
      "type": "get_delta_time"
    },
    {
      "kind": "block",
      "type": "create_timer"
    },
    {
      "kind": "block",
      "type": "remove_timer"
    },
    
  ]
}