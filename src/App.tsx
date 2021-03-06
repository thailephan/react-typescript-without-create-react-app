import React from 'react';

interface Props {
  items: string[];
}

function App({ items }: Props): JSX.Element {
  return (
    <div>
      {items.map((item: string, key) => (
        <div key={key}>{item}</div>
      ))}
    </div>
  );
}

export default App;
