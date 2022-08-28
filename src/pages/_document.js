import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <body className='bg-white font-rubik text-primary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}