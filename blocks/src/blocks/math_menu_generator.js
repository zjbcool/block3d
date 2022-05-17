import { DropdownHelper } from '../util/util'

const MenuGenerator = {};
const vector = [1, 1, 1]
MenuGenerator.vectorArithmetic = new DropdownHelper([
  ['add', 'add', 'VECTOR3', vector, 'Gets a new Vector3, result of the addition the current Vector3 and the given vector'],
  ['center', 'Center', 'VECTOR3', vector, 'Returns a new Vector3 located at the center between "value1" and "value2"'],
  ['cross', 'Cross', 'VECTOR3', vector, 'Returns a new Vector3 as the cross product of the vectors "left" and "right" The cross product is then orthogonal to both "left" and "right"'],
  ['distance', 'Distance', 'VECTOR3', vector, 'Returns the distance between the vectors "value1" and "value2"'],
  ['divide', 'divide', 'VECTOR3', vector, 'Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones'],
  ['dot', 'Dot', 'VECTOR3', vector, 'Returns the dot product (float) between the vectors "left" and "right"'],
  ['length', 'length', 'VECTOR3', vector, 'Gets the length of the Vector3'],
  ['multiply', 'multiply', 'VECTOR3', vector, 'Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector'],
  ['negate', 'negate', 'VECTOR3', vector, 'Gets a new Vector3 set with the current Vector3 negated coordinates'],
  ['normalize', 'normalize', 'VECTOR3', vector, 'Normalize the current Vector3. Please note that this is an in place operation.'],
  ['scale', 'scale', 'NUM', '1', 'Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"'],
  ['subtract', 'subtract', 'VECTOR3', vector, 'Returns a new Vector3, result of the subtraction of the given vector from the current Vector3'],
])

export default MenuGenerator