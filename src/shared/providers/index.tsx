//components
import { MUIProvider } from '@/shared/providers/MUIProvider';
import { QueryProvider } from '@/shared/providers/QueryProvider';

export default function Providers( { children }: { children: React.ReactNode }) {

  return (
    <MUIProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </MUIProvider>
  );
}
