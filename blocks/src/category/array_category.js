export default {
  "kind": "category",
  // "name": "Array",
  "cssConfig": {
    "icon": "arrayIcon sizeSmall",
    "label": "labelNone"
  },
  "categorystyle": "list_style",
  "contents": [
    {
      "kind": "label",
      "text": "Array:"
    },
    {
      "kind": "block",
      "type": "array_create",
    },
    {
      "kind": "block",
      "type": "array_repeat",
      "inputs": {
        "NUM": {
          "shadow": {
            "type": "math_number",
            "fields": {
              "NUM": "5"
            }
          }
        }
      }
    },
    {
      "kind": "block",
      "type": "array_length",
    },
    {
      "kind": "block",
      "type": "array_is_empty",
    },
    {
      "kind": "block",
      "type": "array_index_of",
    },
    {
      "kind": "block",
      "type": "array_includes",
    },
    {
      "kind": "block",
      "type": "array_get_index",
    },
    {
      "kind": "block",
      "type": "array_set_index",
    },
    {
      "kind": "block",
      "type": "array_get_subarray",
    },
    {
      "kind": "block",
      "type": "array_split",
    },
    {
      "kind": "block",
      "type": "array_sort",
    },
    {
      "kind": "block",
      "type": "array_reverse",
    },
    {
      "kind": "block",
      "type": "array_for_each",
    },
    {
      "kind": "block",
      "type": "array_find",
    },
  ]
}