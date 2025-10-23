//ui
import { LatestNewsSection } from '@/app/news/ui/LatestNewsSection';
import { OtherNewsSection } from '@/app/news/ui/OtherNewsSection/OtherNewsSection';

export default async function News() {
  return (
    <>
      <LatestNewsSection className="mt-[38px]"/>
      <OtherNewsSection className="mt-[60px]"/>
    </>
  );
}