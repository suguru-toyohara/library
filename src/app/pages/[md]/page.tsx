import dynamic from 'next/dynamic';

export default async function Page({
  params,
}: { params: Promise<{ md: string }> }) {
  const articleName = (await params).md;
  const ArticleComponent = dynamic(
    () => import(`@/contents/pages/${articleName}.md`),
  );

  return <ArticleComponent />;
}
