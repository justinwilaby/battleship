export function findNodeAtPoint(x, y, nodeList) {
  let len = +nodeList.length;
  let i = +0;
  for (; i < len; i++) {
    const {left, top, width, height} = nodeList[ i ].getBoundingClientRect();
    if (x >= left && x <= left + width && y >= top && y <= top + height) {
      break;
    }
  }
  return nodeList[ i ];
}
