import '@/styles/globals.css';
import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Quicksand } from '@next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import queryClientInstance from './queryClient';

const quicksand = Quicksand({
  weight: ['400', '600', '700'],
  style: 'normal',
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(queryClientInstance);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <style jsx global>{`
          html {
            font-family: ${quicksand.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
