import {
  JavaScript
} from 'blockly';

JavaScript['mesh_create_set_shapes'] = (block) => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const type = `\'Create${block.getFieldValue('TYPE')}\'`; // 方法
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`;

  const fun = JavaScript.provideFunction_('mesh_create_set_shapes', [`
  // mesh_create_set_shapes block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name, type, options) { 
    const mesh = BABYLON.MeshBuilder[type](name, options, appInstance.scene);
    mesh.material = appInstance.defautlMaterial;
    return mesh;
  }`]);
  return [`${fun}(${name}, ${type}, ${options})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['mesh_create_box_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_tiledbox_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_sphere_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_cylinder_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_capsule_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_plane_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_tiledplane_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_disc_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_ground_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_groundfromheightmap_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_tiledground_option'] = JavaScript['object_key_value'];
JavaScript['mesh_create_lines_option'] = JavaScript['object_key_value'];

JavaScript['mesh_when_dragged_options'] = JavaScript['object_key_value'];

JavaScript['set_get_mesh_prop'] = block => {
  const method = block.getFieldValue('METHOD');
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE) ;
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;
  if (!mesh) return '';
  if (method === 'set') {
    return `
    ${mesh}.${key} = ${value};`
  } else if (method === 'get') {
    return [`${mesh}.${key}`, JavaScript.ORDER_FUNCTION_CALL]
  }
}

JavaScript['set_get_mesh_transform'] = block => {
  const method = block.getFieldValue('METHOD');
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const transform = block.getFieldValue('TRANSFORM');
  const xyz = block.getFieldValue('XYZ');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;
  if (!mesh) return '';

  if (method === 'set') {
    if (xyz === 'xyz') {
      return `
  ${mesh}.${transform} = ${value};`
    } else {
      return `
  ${mesh}.${transform}.${xyz} = ${value};`
    }
  } else if (method === 'get') {
    if (xyz === 'xyz') {
      return [`${mesh}.${transform}`, JavaScript.ORDER_FUNCTION_CALL]
    } else {
      return [`${mesh}.${transform}.${xyz}`, JavaScript.ORDER_FUNCTION_CALL]
    }
  }
}

JavaScript['translate_mesh'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const distance = JavaScript.valueToCode(block, 'DISTANCE', JavaScript.ORDER_NONE) || 0;
  const axis = JavaScript.valueToCode(block, 'AXIS', JavaScript.ORDER_NONE);
  const local = block.getFieldValue('LOCAL') === 'TRUE';

  if (local) {
    return `
  ${mesh}.translate(${axis}, ${distance}, BABYLON.Space.LOCAL);`
  } else {
    return `
  ${mesh}.translate(${axis}, ${distance}, BABYLON.Space.WORLD);`
  }
}

JavaScript['rotate_mesh'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const degree = JavaScript.valueToCode(block, 'DEGREE', JavaScript.ORDER_FUNCTION_CALL);
  const axis = JavaScript.valueToCode(block, 'AXIS', JavaScript.ORDER_NONE);
  const local = block.getFieldValue('LOCAL') === 'TRUE';
  if (!mesh) return ''
  if (local) {
    return `
  ${mesh}.rotate(${axis}, (${degree}) * Math.PI / 180, BABYLON.Space.LOCAL);`
  } else {
    return `
  ${mesh}.rotate(${axis}, (${degree}) * Math.PI / 180, BABYLON.Space.WORLD);`
  }
}

JavaScript['rotate_mesh_pov'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const pitch = JavaScript.valueToCode(block, 'PITCH', JavaScript.ORDER_NONE) || 0;
  const yaw = JavaScript.valueToCode(block, 'YAW', JavaScript.ORDER_NONE) || 0;
  const roll = JavaScript.valueToCode(block, 'ROLL', JavaScript.ORDER_NONE) || 0;
  if (!mesh) return ''
  return `
  ${mesh}.rotatePOV((${pitch}) * Math.PI / 180, (${yaw}) * Math.PI / 180, (${roll}) * Math.PI / 180);`
}

JavaScript['set_mesh_direction'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const direction = JavaScript.valueToCode(block, 'DIRECTION', JavaScript.ORDER_NONE);
  if (!mesh) return ''
  return `
  ${mesh}.setDirection(${direction});`
}

JavaScript['mesh_look_at'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const point = JavaScript.valueToCode(block, 'POINT', JavaScript.ORDER_NONE);
  if (!mesh) return ''
  return `
  ${mesh}.lookAt(${point});`
}

JavaScript['remove_mesh'] = block => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const includeChildren = block.getFieldValue('INCLUDE_CHILDREN') === 'TRUE';
  if (!mesh) return '';

  return `
  appInstance.scene.removeMesh(${mesh}, ${includeChildren});`
}

JavaScript['mesh_set_parent'] = block => {
  const childMesh = JavaScript.valueToCode(block, 'CHILD_MESH', JavaScript.ORDER_NONE);
  const parentMesh = JavaScript.valueToCode(block, 'PARENT_MESH', JavaScript.ORDER_NONE);

  if (!childMesh || !parentMesh) return '';
  return `
  ${childMesh}.setParent(${parentMesh});`
}

JavaScript['clone_mesh'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE) || `\'\'`;
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  if (!mesh) return '';
  return [`${mesh}.clone(${name})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['mesh_create_instance'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE) || `\'\'`;
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  if (!mesh) return '';
  return [`${mesh}.createInstance(${name})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['drag_mesh'] = (block) => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE) || `\'\'`;
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\{\}`;
  const dragStartDo = `() => {${JavaScript.statementToCode(block, 'DRAG_START_DO')}}`;
  const dragDo = `() => {${JavaScript.statementToCode(block, 'DRAG_DO')}}`;
  const dragEndDo = `() => {${JavaScript.statementToCode(block, 'DRAG_END_DO')}}`;

  const fun = JavaScript.provideFunction_('drag_mesh', [`
  // drag_mesh block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(mesh, options, dragStartDo, dragDo, dragEndDo) { 
    const pointerDragBehavior = new BABYLON.PointerDragBehavior(options);

    options && options.hasOwnProperty('useObjectOrientationForDragging') && (pointerDragBehavior.useObjectOrientationForDragging = options.useObjectOrientationForDragging);
    options && options.hasOwnProperty('updateDragPlane') && (pointerDragBehavior.updateDragPlane = options.updateDragPlane);
    options && options.hasOwnProperty('enabled') && (pointerDragBehavior.enabled = options.enabled);
    options && options.hasOwnProperty('moveAttached') && (pointerDragBehavior.moveAttached = options.moveAttached);

    // Listen to drag events
    pointerDragBehavior.onDragStartObservable.add((event)=>{
      dragStartDo();
    })
    pointerDragBehavior.onDragObservable.add((event)=>{
      dragDo();
    })
    pointerDragBehavior.onDragEndObservable.add((event)=>{
      dragEndDo();
    })

    mesh.addBehavior(pointerDragBehavior);
  }`]);
  return `
  ${fun}(${mesh}, ${options}, ${dragStartDo}, ${dragDo}, ${dragEndDo});`


}

JavaScript['check_point_behind_mesh'] = block => {
  const point = JavaScript.valueToCode(block, 'POINT', JavaScript.ORDER_NONE);
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);

  const fun = JavaScript.provideFunction_('check_point_behind_mesh', [`
  // check_point_behind_mesh block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(point, mesh) { 
    if (!point || point.getClassName() !== 'Vector3' || !mesh || mesh.getClassName() !== 'Mesh') return;

    const dir = appInstance.scene.activeCamera.position.subtract(point).normalize();
    const ray = new BABYLON.Ray(point, dir, 10);
    const info = ray.intersectsMesh(mesh);
    if (info.hit) {
      return true
    } else {
      return false
    }
  }`]);
  return [`${fun}(${point}, ${mesh})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['check_intersects_mesh'] = block => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const target = JavaScript.valueToCode(block, 'TARGET', JavaScript.ORDER_NONE);
  const precise = block.getFieldValue('PRECISE') === 'TRUE';
  const includeChildren = block.getFieldValue('INCLUDE_CHILDREN') === 'TRUE';
  if (!mesh) return '';

  return [`${mesh}.intersectsMesh(${target}, ${precise}, ${includeChildren})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['check_intersects_point'] = block => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const point = JavaScript.valueToCode(block, 'POINT', JavaScript.ORDER_NONE);
  if (!mesh) return '';

  return [`${mesh}.intersectsPoint(${point})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['mesh_create_decal'] = block => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE) || `\'\'`;
  const texture = JavaScript.valueToCode(block, 'TEXTURE', JavaScript.ORDER_NONE) || `\'\'`;
  const options = JavaScript.valueToCode(block, 'OPTIONS', JavaScript.ORDER_NONE) || `\'\'`;

  const fun = JavaScript.provideFunction_('mesh_create_decal', [`
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name, mesh, texture, options) {
    if(!mesh) return;
    
    const decalMat = new BABYLON.StandardMaterial(name, appInstance.scene);
    decalMat.diffuseTexture = new BABYLON.Texture(texture, appInstance.scene);
    decalMat.diffuseTexture.hasAlpha = true;
    decalMat.zOffset = -2;
    const decalMesh = BABYLON.MeshBuilder.CreateDecal(name, mesh, options);
    decalMesh.material = decalMat;
    return decalMesh;
  }
  `])

  return [`${fun}(${name}, ${mesh}, ${texture}, ${options})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['mesh_create_decal_option'] = block => {
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE) || `\'\'`;
  return `\"${key}\: ${value}\, \"`;
}

JavaScript['mesh_add_lod_level'] = block => {
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const distance = JavaScript.valueToCode(block, 'DISTANCE', JavaScript.ORDER_NONE);
  const lodMesh = JavaScript.valueToCode(block, 'LOD_MESH', JavaScript.ORDER_NONE);
  if (!mesh) return ''
  return `
  ${mesh}.addLODLevel(${distance}, ${lodMesh})`;
}

JavaScript['create_highlight_layer'] = block => {
  const name = JavaScript.valueToCode(block, 'NAME', JavaScript.ORDER_NONE) || `\'\'`;
  const fun = JavaScript.provideFunction_('create_highlight_layer', [`
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(name) {
    appInstance.overlaySceneEnabled = true;
    return new BABYLON.HighlightLayer(name, appInstance.scene);
  }
  `])

  return [`${fun}(${name})`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['add_mesh_to_highlight_layer'] = block => {
  const layer = JavaScript.valueToCode(block, 'LAYER', JavaScript.ORDER_NONE);
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);
  const color = JavaScript.valueToCode(block, 'COLOR', JavaScript.ORDER_NONE);

  if (!mesh || !layer) return '';
  return `
  ${layer}.addMesh(${mesh}, ${color});`
}
JavaScript['exclude_mesh_from_highlight_layer'] = block => {
  const layer = JavaScript.valueToCode(block, 'LAYER', JavaScript.ORDER_NONE);
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);

  if (!mesh || !layer) return '';
  return `
  ${layer}.addExcludedMesh(${mesh});`
}

JavaScript['set_highlight_layer_prop'] = block => {
  const layer = JavaScript.valueToCode(block, 'LAYER', JavaScript.ORDER_NONE);
  const key = block.getFieldValue('KEY');
  const value = JavaScript.valueToCode(block, 'VALUE', JavaScript.ORDER_NONE);

  if (!layer) return '';
  return `
  ${layer}.${key} = ${value};`
}

JavaScript['remove_mesh_from_highlight_layer'] = block => {
  const layer = JavaScript.valueToCode(block, 'LAYER', JavaScript.ORDER_NONE);
  const mesh = JavaScript.valueToCode(block, 'MESH', JavaScript.ORDER_NONE);

  if (!mesh || !layer) return '';
  return `
  ${layer}.removeMesh(${mesh});`
}