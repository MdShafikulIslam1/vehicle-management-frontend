import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import '@/styles/globals.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className=" border border-l border-r border-y-0  container mx-auto">
      <Component {...pageProps}/>
      </div>
      <Footer />
    </>
  );
}
