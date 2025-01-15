export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <meta
          name="facebook-domain-verification"
          content="czz9dybah82kdb7hxyzlt6i27vztya"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=891399949274393&ev=PageView&noscript=1"
            alt="meta tag"
          />
        </noscript>
      </head>
      <html lang="pt-BR">
        <body>{children}</body>
      </html>
    </>
  );
}
