import Advertisement from "@/components/Home/Advertisement/Advertisement";
import DiscountProducts from "@/components/Home/DiscountProducts/DiscountProducts";
import Experience from "@/components/Home/Experience/Experience";
import FirstSection from "@/components/Home/FirstSection/FirstSection";
import MegaDiscount from "@/components/Home/MegaDiscount/MegaDiscount";
import SkinCare from "@/components/Home/SkinCare/SkinCare";

export default function Home() {

  return (
    <>
      <FirstSection />
      <DiscountProducts />
      <Advertisement />
      <SkinCare />
      {/* <MegaDiscount/> */}
      <Experience />
    </>
  )
}
