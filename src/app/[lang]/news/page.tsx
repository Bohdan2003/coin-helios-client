//ui
import { LatestNewsSection } from '@/app/[lang]/news/_ui/LatestNewsSection';
import { OtherNewsSection } from '@/app/[lang]/news/_ui/OtherNewsSection/OtherNewsSection';

export default async function News() {
  return (
    <>
      <LatestNewsSection className="mt-[38px]"/>
      <OtherNewsSection className="mt-[60px]"/>
    </>
  );
}