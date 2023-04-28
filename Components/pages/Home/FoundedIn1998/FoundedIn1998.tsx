import SectionTitle from "@/Components/reusedComponents/SectionTitle";
import Image from "next/image";

const FoundedIn1998 = () => {
  return (
    <div className="section_gap container flex flex-col lg:flex-row gap-10 justify-between">
      <div className="flex-1 lg:flex lg:flex-col lg:justify-between">
        <div>
          <SectionTitle
            topText="FOUNDED IN 1998"
            bottomText="A Sophisticated Interpretation Of Traditional Japanese Cuisine"
            leftLine={false}
            rightLine={true}
            topTextCenter={false}
          />
        </div>
        <div className="relative h-full mt-6 w-full">
          <Image src={"https://i.ibb.co/jLQgDFx/home-FOUNDED-2.jpg"} alt="founded in" objectFit="cover" objectPosition="center" layout="fill" />
        </div>
      </div>
      {/* this height h-screen will be the the full section height */}
      <div className="flex-1 h-screen relative">
        <Image src={"https://i.ibb.co/Rcb1y7T/home-FOUNDED.jpg"} alt="founded in" objectFit="cover" objectPosition="center" layout="fill" />
      </div>
    </div>
  );
};

export default FoundedIn1998;
