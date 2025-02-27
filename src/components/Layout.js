import Head from "next/head"
import { NextSeo } from "next-seo"
import Header from "components/Header"
import config from "4c.config"
import { motion } from "framer-motion"
import Footer from "components/Footer"

const Layout = ({ header, children, ...rest }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  }
  return (
    <>
      <div className="bg-theme min-h-screen">
        <Header {...header} />
        <Head>
          <link rel="icon" href={config.favicon} />
        </Head>
        <NextSeo
          title={config.title.short}
          description={config.description.short}
          canonical={config.url}
          openGraph={{
            url: config.url,
            title: config.title.long,
            description: config.description.long,
            images: [
              {
                url: config.logo,
                width: 1200,
                height: 630,
                alt: config.title.short,
                type: "image/jpeg",
              },
            ],
            site_name: config.siteName,
          }}
        />
        <motion.main
          {...rest}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
        >
          {children}
        </motion.main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
