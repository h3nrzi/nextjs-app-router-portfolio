import React from 'react';

interface Props {
  params: {
    a: string[];
  };
}

function getContent(id: string, author: string) {}

const Content = ({ params }: Props) => {
  const [id, author] = params.a;

  return (
    <div>
      <div>{id}</div>
      <div>{author}</div>
    </div>
  );
};

export default Content;
