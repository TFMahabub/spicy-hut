import SectionTitle from "@/Components/reusedComponents/SectionTitle";
import Menus from "./Menus";

const SelectedMenus = () => {
  return (
    <div className="section_gap">
      <div className="container ">
        <div className="text-center">
          <SectionTitle
            topText="RECOMMENDATIONS"
            bottomText="Selected Menus"
            leftLine={true}
            rightLine={true}
            topTextCenter={true}
          />
        </div>
      </div>
      <div className=" bg-no-repeat bg-center bg-selected_menus_background_image w-full lg:h-screen">
        <div className="mt-12 bg-bodyBackground/40 w-full h-full">
          <Menus />
        </div>
      </div>
    </div>
  );
};

export default SelectedMenus;
