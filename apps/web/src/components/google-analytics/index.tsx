import Script from "next/script";

const GoogleAnalytics = () => {
  const gaID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaID}`}
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaID}', {
        page_path: window.location.pathname,
      });
    `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
