import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import axios from "axios";
import { useEffect, useState } from 'react';

export default function Home() {
  console.log('test');

  axios.defaults.baseURL = 'http://localhost:3000';
  //axios.defaults.baseURL = 'https://dinnermenuapi.up.railway.app';
  const [Sunday, setSunday] = useState(null);
  useEffect(() => {
    axios.get(`/api/getAll`)
      .then((result) => {
        //console.log(JSON.stringify(result.data[0].name));
        setSunday(result.data[1].name)
        console.log(Sunday);
      })
      .catch(console.error);
  });

  return (
    <Layout home={true}>
      <div>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </div>

    </Layout>


  )
}
