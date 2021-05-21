import Head from 'next/head';

const ogType = 'website';
const ogURL = 'yaitalla.vercel.app/';

const HtmlHead = () => (
    <Head>
        <title>Yassine Aitalla Développeur Frontend</title>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta charSet="utf-8" />
       <meta
        name="description"
        content="Yassine Aitalla"
      />

      <meta
        content="Développeur Frontend "
        key="ogtitle"
        property="og:title"
      />
      <meta property="og:type" content={ogType} key="ogtype" />
      <meta property="og:image" content="/netero.jpg" key="ogimage" />
      <meta property="og:url" content={ogURL} key="ogurl" />
      <meta
        key="description"
        property="og:description"
        content="ReactJS HTML CSS"
      />
      <link rel="icon" href="/webIcon.png" />

    </Head>
)
export default HtmlHead;