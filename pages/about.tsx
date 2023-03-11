import AboutHeader from "@/Components/pages/About/AboutHeader/AboutHeader";
import SophisticatedInterpretation from "@/Components/pages/About/SophisticatedInterpretation/SophisticatedInterpretation";
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
    </>
  );
};

export default about;
