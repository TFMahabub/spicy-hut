import FoundedIn1998 from "@/Components/pages/Home/FoundedIn1998/FoundedIn1998";
import Header from "@/Components/pages/Home/Header";
import PerfectDiningExperience from "@/Components/pages/Home/PerfectDiningExperience/PerfectDiningExperience";
import SelectedMenus from "@/Components/pages/Home/SelectedMenus/SelectedMenus";
import ViewFullMenus from "@/Components/pages/Home/ViewFullMenus/ViewFullMenus";
import BackgroundImageOverlay from "@/Components/reusedComponents/BackgroundImageOverlay";

export default function Home() {
  return (
    <>
      <BackgroundImageOverlay
        height="h-screen"
        bgImage="bg-banner_background_image"
      >
        <Header />
      </BackgroundImageOverlay>
      <FoundedIn1998 />
      <SelectedMenus />
      <ViewFullMenus />
      <PerfectDiningExperience />
    </>
  );
}
