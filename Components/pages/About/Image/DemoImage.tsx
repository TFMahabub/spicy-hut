import DescriptionTextLG from "@/Components/reusedComponents/DescriptionTextLG";
import TitleTextLarge from "@/Components/reusedComponents/TitleTextLarge";
import Image from "next/image";

const DemoImage = () => {
  return (
    <div className="relative h-screen section_gap">
      <Image
        src="https://i.ibb.co/g9v5xLM/about-Us-shape.jpg"
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        alt=""
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center">
        <div className="container flex flex-col text-center max-w-2xl space-y-2">
          <TitleTextLarge >We're Always Ready for you</TitleTextLarge>
          <DescriptionTextLG>
            We continue to be one of the top Japanese restaurants in America, attracting countless food lovers from all over the world. Our one-of-a-kind menu includes authentic tapas-style Japanese dishes and homemade desserts. new update
          </DescriptionTextLG>
        </div>
      </div>
    </div>
  );
};

export default DemoImage;
