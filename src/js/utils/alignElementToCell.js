export function alignElementToCell(element, direction, m_transform, cell) {
  const gridRect = element.parentElement.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();
  const offsetHeight = direction ? 50 : 35;
  const offsetWidth = direction ? 35 + 7.5 : 0;
  const x = offsetWidth + ( cellRect.left - gridRect.left ) - m_transform[ 4 ];
  const y = ( ( cellRect.height - offsetHeight ) / 2 ) + ( cellRect.top - gridRect.top ) - m_transform[ 5 ];
  return {x, y};
}
