import { MUIProvider } from '@/app/[lang]/_providers/MUIProvider';
import { QueryProvider } from '@/app/[lang]/_providers/QueryProvider';
import { ToasterProvider } from '@/app/[lang]/_providers/ToasterProvider';

export default function Providers( { children }: { children: React.ReactNode }) {

  return (
    <MUIProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
      <ToasterProvider/>
    </MUIProvider>
  );
}
