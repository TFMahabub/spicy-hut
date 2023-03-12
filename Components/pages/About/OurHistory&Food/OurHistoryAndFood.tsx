import SectionTitle from "@/Components/reusedComponents/SectionTitle";
import sideImage from "@/public/assats/aboutUs(OurHistoryandFood).jpg";
import sideImage2 from "@/public/assats/aboutUs(OurHistoryandFood2).jpg";
import Image from "next/image";

const OurHistoryAndFood = () => {
  return (
    <div className="section_gap container flex flex-col lg:flex-row gap-16 justify-between">
      <div className="flex-1 lg:flex lg:flex-col lg:justify-between">
        <div>
          <SectionTitle
            topText="WHERE IT ALL BEGAN"
            bottomText="Our History & Food Philosophy"
            leftLine={false}
            rightLine={true}
            topTextCenter={false}
          />
          <p className="pText">
            We are located in an excellent location in the center of the city,
            quiet in the middle of the hustle and bustle. Enjoy your meal time
            in a comfortable environment. We can’t wait to serve you at our
            restaurant.
          </p>
          <p className="pText">
            We present delicious and enticing dishes with high-quality
            ingredients. There is no set protocol for ordering from the menu.
          </p>
        </div>
      </div>
      <div className="flex-1 lg:relative lg:overflow-hidden">
        <Image
          src={sideImage}
          className="w-full lg:absolute lg:w-[60%] lg:z-10 lg:top-0 lg:right-0"
          alt=""
        />
        <Image
          src={sideImage2}
          className="hidden lg:block lg:absolute lg:w-[60%] lg:bottom-0 lg:left-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurHistoryAndFood;
