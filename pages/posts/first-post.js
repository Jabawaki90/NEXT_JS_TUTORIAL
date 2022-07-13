import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script'
import Layout from '../../components/layout';

const FirstPost =()=>{
    return <Layout>
        <Head>
            <title>First Post</title>
            
        </Head>
        <Image src='/images/prof1.jpg' height={144} width={144} alt='Ashraf'/>
        <h1>First Post</h1>
        <h2><Link href='/'>Back Home</Link></h2>
    </Layout>
}

export default FirstPost;