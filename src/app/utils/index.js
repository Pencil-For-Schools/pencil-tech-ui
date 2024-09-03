import Script from 'next/script';

export const head = (
  <>
    <Script src='https://embed.twitch.tv/embed/v1.js' />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XSY6RM7J2D" />
    <Script id='google-analytics'>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XSY6RM7J2D');
        `}
    </Script>
    {/* <Script id='circle-widget'>
      {`
          (function (w,d,s,o,f,js,fjs) {
            w['circleWidget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
            js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
            js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
        }(window, document, 'script', 'mw', 'https://create.reppedin.tech/external/widget.js'));
      
        mw('init', {
          community_public_uid: '510a34dc',
          brand_color: '{"dark"=>"#00BF67", "light"=>"#00BF67"}'
        });
      
        // Optional: pass in a default space slug and/or post slug
        // mw('setDefaults', {
        //   space_slug: '',
        //   post_slug: ''
        // });
        `}
    </Script> */}

    <Script id='mailerlite-widget'>
        {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '698620');`}
    </Script>

    <meta name="description" content="REPPEDFLIX: Technical content by diverse technologists" key="desc" />
        <meta property="og:title" content="REPPEDFLIX: Technical content by diverse technologists" />
        <meta
          property="og:description"
          content="REPPEDFLIX: Technical content by diverse technologists"
        />
        <meta
          property="og:image"
          content="/metadata-img-reppedflix.png"
        />
  </>
);
