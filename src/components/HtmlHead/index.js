import Head from 'next/head';

const ogType = 'website';
const ogURL = 'yaitalla.vercel.app/';

const HtmlHead = () => (
    <Head>
        <title>Dev Frontend React Javascript HTML CSS</title>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta charSet="utf-8" />
       <meta
        name="description"
        content="comment touver un bon developpeur web pas cher"
      />

      <meta
        content="Developer frontend React js "
        key="ogtitle"
        property="og:title"
      />
      <meta property="og:type" content={ogType} key="ogtype" />
      <meta property="og:image" content="https://i.ibb.co/bK384Gm/miniature.png" key="ogimage" />
      <meta property="og:url" content={ogURL} key="ogurl" />
      <meta
        key="description"
        property="og:description"
        content="realiser un projet numerique, creer un site web...  "
      />
      <link rel="icon" href="/webIcon.png" />
    </Head>
)
export default HtmlHead;