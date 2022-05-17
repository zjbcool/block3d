export default {
  "kind": "category",
  // "name": "Loops",
  "cssConfig": {
    "icon": "loopIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "loop_style",
  "contents": [
    {
      "kind": "label",
      "text": "Loops:"
    },
    {
      "kind": "block",
      "type": "controls_repeat_ext",
      "inputs": {
        "TIMES": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": "10"
            }
          }
        }
      }
    },
    {
      "kind": "block",
      "type": "controls_whileUntil",
    },
    {
      "kind": "block",
      "type": "controls_for",
      "inputs": {
        "FROM": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": "1"
            }
          }
        },
        "TO": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": "10"
            }
          }
        },
        "BY": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": "1"
            }
          }
        },
      }
    },
    {
      "kind": "block",
      "type": "controls_forEach"
    },
    {
      "kind": "block",
      "type": "controls_flow_statements"
    },
  ]
}