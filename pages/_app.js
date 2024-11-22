import Layout from '../components/layout.js'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* Set page background color, taken from:
      https://stackoverflow.com/questions/63247550/nextjs-switch-body-background-color */}
      <style jsx global>{`
        body {
          background: #282828;
          color: white;
          font-family: monospace;
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}