import CustomNavbar from './navbar'
import Footer from './footer'
import Header from './header'
import styles from '../styles/Layout.module.css';

 
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <CustomNavbar />
      <div className={styles.content_container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}