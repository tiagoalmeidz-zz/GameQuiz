import Head from 'next/head';
import db from '../../../db.json';

export default function Header() {
  return (
    <Head>
      <title>{`Quiz - ${db.title}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
