import Link from 'next/link';

const Title = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="mb-4">
      <h2 className="text-3xl mb-0">{title}</h2>
      <Link href={link} className="underline">
        دیدن همه
      </Link>
    </div>
  );
};

export default Title;
