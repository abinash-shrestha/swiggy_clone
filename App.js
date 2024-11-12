const heading = React.createElement(
  'h1',
  {
    id: 'heading',
    xyz: 'abc',
  },
  'Hello World from React'
);

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'This is an h1'),
    React.createElement('h1', {}, 'This is an h1'),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

console.log(parent);
