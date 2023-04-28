import FoundedIn1998 from "@/Components/pages/Home/FoundedIn1998/FoundedIn1998";
import Header from "@/Components/pages/Home/Header";
import PerfectDiningExperience from "@/Components/pages/Home/PerfectDiningExperience/PerfectDiningExperience";
import SelectedMenus from "@/Components/pages/Home/SelectedMenus/SelectedMenus";
import ViewFullMenus from "@/Components/pages/Home/ViewFullMenus/ViewFullMenus";
import HompageBannerImageOverlay from "@/Components/reusedComponents/HompageBannerImageOverlay";

export default function Home() {
  return (
    <>
      <HompageBannerImageOverlay src="https://i.ibb.co/5KMVfp7/banner-Image.jpg">
        <Header />
      </HompageBannerImageOverlay>
      <FoundedIn1998 />
      <SelectedMenus />
      <ViewFullMenus />
      <PerfectDiningExperience />
    </>
  );
}
