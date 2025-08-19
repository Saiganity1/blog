import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Michael Dave Sicat. I love playing mobile games and basketball. I'm a third-year student taking up a Bachelor of Science in Information Technology (BSIT-3A) at the University of the Assumption. </p>
        <p>
          My favorite food is tocino and fried rice. In five years, I see myself as a highly paid, top-level software engineer. Also i love to learn new things to further improve my skills and develop more skills
        </p>
      </section>
    </Layout>
  );
}