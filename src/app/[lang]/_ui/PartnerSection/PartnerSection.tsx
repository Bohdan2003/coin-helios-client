//ui
import Image from 'next/image';
import { PartnerForm } from '@/app/[lang]/_ui/PartnerSection/PartnerForm';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { bigTitleCls } from '@/shared/classNames';
import { getDictionary } from '@/shared/i18n/dictionaries';
import { cn } from '@/shared/lib/cn';
//img
import imgUrl from '@/shared/assets/images/partner.jpg';

export const PartnerSection: React.FC<{
  lang: TLocale
}> = async ({ lang }) => {
  const {
    main: { partner: d },
    forms: { contact: form, errors },
    buttons: { send: button },
    links: { 'privacyPolicy': link }
  } = await getDictionary(lang);

  return (<section>
    <div className="container grid sm:grid-cols-2 gap-[60px] sm:gap-[20px]">
      <div className="grid md:grid-cols-2 gap-x-[20px] gap-y-[20px] md:gap-y-[50px]">
        <div className="relative md:col-span-2">
          <Image
            className="w-full h-[320px] object-cover rounded-[32px]"
            src={imgUrl}
            alt="become a partner"
          />
          <h3
            className={cn(
              bigTitleCls,
              'whitespace-pre-line',
              'absolute top-[60px] lg:top-[42px] left-[24px] text-white'
            )}
          >
            { d.title }
          </h3>
        </div>
        <p className="opacity-80 md:max-w-[275px]">
          { d.text[0] }
        </p>
        <p className="opacity-80 md:max-w-[314px]">
          { d.text[1] }
        </p>
      </div>
      <div className="flex justify-end">
        <PartnerForm dictionary={{ form, errors, button, link }} />
      </div>
    </div>
  </section>);
};