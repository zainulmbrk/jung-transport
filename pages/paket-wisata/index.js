import Head from "next/head";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";

import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";
import Faq from "../../components/faq";
import PopupWidget from "../../components/popupWidget";
import CardTour from "../../components/cardTour";
import DataTour from "../../utils/dataTour.json"
import Container from "../../components/container";
import SeeAll from "../../components/link"

const TourPackage = () => {

  return (
    <>
      <Head>
        <title>RentCar - Lombok</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />           

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

export default TourPackage;