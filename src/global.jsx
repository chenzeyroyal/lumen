import "@/styles"
import { Head } from "minista"
import Header from "./layouts/Header"
import Content from "./layouts/Content"
import Footer from "./layouts/Footer/Footer"

export default function (props) {
  const { children } = props
  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>lumen | Главная </title>
        <script src="/src/main.js" type="module" />
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
