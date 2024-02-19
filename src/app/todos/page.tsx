import Link from 'next/link';
import React from 'react';

const TodosPage = () => {
  const generateTodos = () =>
    Array.from({ length: 20 }).map((_, i) => (
      <li key={i + 1}>
        <Link className="item" href={`/todos/${i + 1}`}>
          تودو: {i + 1}
        </Link>
      </li>
    ));

  return <div>{generateTodos()}</div>;
};

export default TodosPage;
