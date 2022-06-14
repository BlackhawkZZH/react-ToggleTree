import React from 'react';
import './style.css';

const data = {
  val: 1,
  children: [
    { val: 2 },
    {
      val: 3,
      children: [
        {
          val: 4,
          children: [{ val: 5 }],
        },
        {
          val: 6,
        },
      ],
    },
    { val: 8 },
  ],
};

function ToggleTree(props) {
  const { val, children } = props.data;

  return (
    <div>
      {val}
      {children.map((elem) => {
        return (
          <div>
            {elem.children ? (
              <ToggleTree data={elem} />
            ) : (
              <div class="node">{elem.val}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ToggleTree data={data} />
    </div>
  );
}
