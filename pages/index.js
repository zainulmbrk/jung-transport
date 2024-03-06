import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Card from "../components/cardMobil";
import DataRent from "../utils/data.json"
import DataMotor from "../utils/dataMotor.json"
import DataTour from "../utils/dataTour.json"
import Container from "../components/container";
import SeeAll from "../components/link"
import CardMotor from "../components/cardMotor";
import CardTour from "../components/cardTour";
const Home = () => {

  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      {/* paket wisata */}
      <SectionTitle
        pretitle="Paket Wisata"
        title="Explore pulau lombok dengan pelayanan dari kami">
        Anda dapat menikmati indahnya pulau lombok tanpa harus ribet menentukan akan kemana, karena kami akan rekomendasikan dengan berbagai macam paket wisata
      </SectionTitle>

      <Container>
        <div className="flex flex-col space-y-4 justify-center items-center w-full">
          <SeeAll/>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {DataTour.map((item,index)=>{
              return(
                  <CardTour data={item} key={index} />
              )
            })}
          </div>
        </div>
      </Container>         

      {/* mobil */}
      <SectionTitle
        pretitle="Sewa Mobil"
        title="Pilih mobil sesuai dengan kebutuhan anda">
        Gunakan layanan transportasi dari kami dan dapatkan pelayanan yang dapat memuaskan anda
      </SectionTitle>
      <Container>
        <div className="flex flex-col space-y-4 justify-center items-center w-full">
          <SeeAll/>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {DataRent.map((item,index)=>{
              return(
                  <Card data={item} key={index} />
              )
            })}
          </div>
        </div>
      </Container>

      {/* motor */}
      <SectionTitle
        pretitle="Sewa Motor"
        title="Pengen ngebolang di lombok?">
        Anda dapat dengan bebas untuk menjelajahi lombok menggunakan sepeda motor yang kece-kece. 
      </SectionTitle>
      <Container>
        <div className="flex flex-col space-y-4 justify-center items-center w-full">
          <SeeAll/>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {DataMotor.map((item,index)=>{
              return(
                  <CardMotor data={item} key={index} />
              )
            })}
          </div>
        </div>
      </Container>
      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Panduan anda dalam menyewa atau menggunakan layanan kami
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;