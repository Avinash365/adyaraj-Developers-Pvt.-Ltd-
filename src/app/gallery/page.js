import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ConstructionGallery from "@/page/gallery/PhotoGrid";
import HeroSlider from "@/page/gallery/HeroSlider";
import GovernmentStats from "@/components/GovernmentStats";

export default function Home() {
  return (
    <div>
      <Navbar/>    
      <HeroSlider/>
      <ConstructionGallery/>
      <GovernmentStats/>
      <Footer/>
      {/* <HeroSlider /> */}
    </div>
  );
}
