export function bindableSetterChanged(property, value, handler) {
  if (this[ property ] === value)
    return;

  if (this[ property ]) {
    this[ property ].removeChangeListener(handler);
  }
  this[ property ] = value;
  this[ property ].addChangeListener(handler);
}
