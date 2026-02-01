import "@/styles"
import { Head } from "minista"
import Header from "./layouts/Header"
import Content from "./layouts/Content"
import Footer from "./layouts/Footer/Footer"

import { getDynamicURL } from "./utils/getDynamicURL"

export default function (props) {
  const { children, title } = props
  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>lumen | {title} </title>


        <link
          rel="icon"
          href={getDynamicURL("/favicon.ico")}
          sizes="any"
        />

        <link
          rel="apple-touch-icon"
          href={getDynamicURL("/apple-touch-icon.png")}
        />


        <script src="/src/main.js" type="module" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
