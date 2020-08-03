import Head from 'next/head';

const ogType = 'website';
const ogURL = 'yaitalla.vercel.app/';

const HtmlHead = () => (
    <Head>
        <title>Développeur Frontend React JS HTML CSS</title>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta charSet="utf-8" />
       <meta
        name="description"
        content="UI UX Design Dévelopement Web Mobile"
      />

      <meta
        content="Solution Web, Responsive Design"
        key="ogtitle"
        property="og:title"
      />
      <meta property="og:type" content={ogType} key="ogtype" />
      <meta property="og:image" content="/netero.png" key="ogimage" />
      <meta property="og:url" content={ogURL} key="ogurl" />
      <meta
        key="description"
        property="og:description"
        content="Réaliser un projet numerique, Créer un site web"
      />
      <link rel="icon" href="/webIcon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"/>

    </Head>
)
export default HtmlHead;