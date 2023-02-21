// import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import queryClient from './queryClient';
import { Quicksand } from '@next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const quicksand = Quicksand({
  weight: ['400', '600', '700'],
  style: 'normal',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        html {
          font-family: ${quicksand.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
