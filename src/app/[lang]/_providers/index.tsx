//components
import { MUIProvider } from '@/app/[lang]/_providers/MUIProvider';
import { QueryProvider } from '@/app/[lang]/_providers/QueryProvider';

export default function Providers( { children }: { children: React.ReactNode }) {

  return (
    <MUIProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </MUIProvider>
  );
}
