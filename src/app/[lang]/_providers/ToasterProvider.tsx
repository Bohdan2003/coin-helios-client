import { Toaster } from 'react-hot-toast';

export const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          padding: '12px 16px',
          borderRadius: '8px',
          fontSize: '0.875rem',
          fontWeight: 500,
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          maxWidth: '400px',
        },
        success: {
          style: {
            backgroundColor: 'var(--mui-palette-success-light, #edf7ed)',
          },
        },
        error: {
          style: {
            backgroundColor: 'var(--mui-palette-error-light, #fdeded)',
          },
        },
      }}
    />
  );
};