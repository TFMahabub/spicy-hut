import AboutHeader from "@/Components/pages/About/AboutHeader/AboutHeader";
import DemoImage from "@/Components/pages/About/Image/DemoImage";
import OurHistoryAndFood from "@/Components/pages/About/OurHistory&Food/OurHistoryAndFood";
import SophisticatedInterpretation from "@/Components/pages/About/SophisticatedInterpretation/SophisticatedInterpretation";
import WeAreHiring from "@/Components/pages/About/WeAreHiring/WeAreHiring";
import BackgroundImageOverlay from "@/Components/reusedComponents/BackgroundImageOverlay";

const about = () => {
  return (
    <>
      <BackgroundImageOverlay
        height="h-[550px]"
        bgImage="bg-selected_menus_background_image"
      >
        <AboutHeader />
      </BackgroundImageOverlay>
      <SophisticatedInterpretation />
      <DemoImage />
      <OurHistoryAndFood />
      <WeAreHiring />
    </>
  );
};

export default about;
