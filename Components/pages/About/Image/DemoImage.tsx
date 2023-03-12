import aboutImage from "@/public/assats/aboutUs(shape).jpg";
import Image from "next/image";

const DemoImage = () => {
  return (
    <div className="relative">
      <Image
        src={aboutImage}
        className="h-screen w-full bg-no-repeat bg-center section_gap"
        alt=""
      />
      <div className="bg-bodyBackground/50 w-full h-full absolute top-0 left-0"></div>
    </div>
  );
};

export default DemoImage;
