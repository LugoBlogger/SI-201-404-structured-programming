import App from './App';
import Head from 'next/head';

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <div id="root">
        <App />
      </div>
    </>
  );
}