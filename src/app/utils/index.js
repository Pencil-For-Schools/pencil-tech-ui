// import Script from "next/script";

export const head = (
  <>
    {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=XXXXXXXXX" />
    <Script id='google-analytics'>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXX');
        `}
    </Script> */}

    <meta name="description" content="PENCIL TECH" key="desc" />
    <meta property="og:title" content="PENCIL TECH" />
    <meta
      property="og:description"
      content="Together We Can Change Students’ Lives"
    />
    <meta property="og:image" content="/images/metadata-img-pencil.png" />
  </>
);
