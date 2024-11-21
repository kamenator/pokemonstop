import CustomNavbar from './navbar'
import Footer from './footer'
import Header from './header'
 
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <CustomNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}