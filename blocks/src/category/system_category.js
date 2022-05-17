export default {
  "kind": "category",
  // "name": "System",
  "cssConfig": {
    "icon": "systemIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "system_style",
  "contents": [
    {
      "kind": "label",
      "text": "System:"
    },
    {
      "kind": "block",
      "type": "console_log",
      "inputs": {
        "TEXT": {
          "shadow": {
            "type": "text",
            "fields": {
              "TEXT": ""
            }
          }
        }
      }
    },
    {
      "kind": "block",
      "type": "window_alert",
      "inputs": {
        "TEXT": {
          "shadow": {
            "type": "text",
            "fields": {
              "TEXT": ""
            }
          }
        }
      }
    },
    {
      "kind": "block",
      "type": "text_prompt_ext",
      "inputs": {
        "TEXT": {
          "shadow": {
            "type": "text",
            "fields": {
              "TEXT": ""
            }
          }
        }
      }
    }, 
    {
      "kind": "block",
      "type": "execute_tab"
    },
    {
      "kind": "block",
      "type": "get_tab_arg"
    },
    {
      "kind": "block",
      "type": "get_function_by_name"
    },
    {
      "kind": "block",
      "type": "set_get_glob_object"
    },
    {
      "kind": "block",
      "type": "set_get_local_storage_item",
    },
    {
      "kind": "block",
      "type": "local_storage_remove_item",
    },
    {
      "kind": "block",
      "type": "advanced_comment"
    },
    {
      "kind": "block",
      "type": "advanced_connect"
    },

  ]
}