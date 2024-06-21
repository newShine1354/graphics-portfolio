import Image from "next/image";
import Header from "../components/Header/Header";
import HeaderFooter from "@/components/Header/HeaderFooter";
import PageOne from "@/components/Page/PageOne";
import PageTwo from "@/components/Page/PageTwo";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="text-white bg-black">
      <div className=""></div>
      <Header />
      <HeaderFooter />
      <PageOne />
      <PageTwo />
      <Footer/> 
    </div>
  );
}
