import AboutHeader from "@/Components/pages/About/AboutHeader/AboutHeader";
import DemoImage from "@/Components/pages/About/Image/DemoImage";
import OurHistoryAndFood from "@/Components/pages/About/OurHistory&Food/OurHistoryAndFood";
import SophisticatedInterpretation from "@/Components/pages/About/SophisticatedInterpretation/SophisticatedInterpretation";
import WeAreHiring from "@/Components/pages/About/WeAreHiring/WeAreHiring";
import RestPageBannerImageOverlay from "@/Components/reusedComponents/RestPageBannerImageOverlay";

const about = () => {
  return (
    <>
      <RestPageBannerImageOverlay
        src="https://i.ibb.co/k3PjxBF/selected-Menus.jpg"
      >
        <AboutHeader />
      </RestPageBannerImageOverlay>
      <SophisticatedInterpretation />
      <DemoImage />
      <OurHistoryAndFood />
      <WeAreHiring />
    </>
  );
};

export default about;
