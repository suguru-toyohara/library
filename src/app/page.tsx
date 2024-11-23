import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Link href={'/pages/helloWorld'}>記事</Link>
    </div>
  );
}
