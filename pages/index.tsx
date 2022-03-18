import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => (
    <div style={{ textAlign: 'center' }}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>hello servicePortal index</h1>
        <Link href="example">
            <h1>goto example page</h1>
        </Link>
    </div>
);

export default Home;
