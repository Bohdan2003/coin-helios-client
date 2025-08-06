//components
import { MUIProvider } from "@/components/providers/MUIProvider";
import {QueryProvider } from "@/components/providers/QueryProvider";

export default function Providers( {children }: { children: React.ReactNode }) {

  return (
    <MUIProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </MUIProvider>
  );
}
