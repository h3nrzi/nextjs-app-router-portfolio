import { delay } from '@/utils';
import React, { Suspense } from 'react';

async function fetchTodo(id: number) {
  await delay(2);
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);
  if (!res.ok) throw new Error('تودو فچ نشد');
  return res.json();
}

const TodosPage = async ({ params }: { params: { id: number } }) => {
  await delay(2);

  return (
    <Suspense fallback={<div>Loading Todo</div>}>
      <Todo id={params.id} />
    </Suspense>
  );
};

async function Todo({ id }: { id: number }) {
  const todo = await fetchTodo(id);

  return (
    <>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
    </>
  );
}

export default TodosPage;
