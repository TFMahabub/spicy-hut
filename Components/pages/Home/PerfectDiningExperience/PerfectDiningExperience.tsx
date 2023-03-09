import SectionTitle from "@/Components/reusedComponents/SectionTitle";
import sideImage1 from "@/public/assats/home(BeautifullQuiet1).jpg";
import sideImage2 from "@/public/assats/home(BeautifullQuiet2).jpg";
import Image from "next/image";
import Link from "next/link";

const PerfectDiningExperience = () => {
  return (
    <div className="section_gap container flex flex-col lg:flex-row gap-10 justify-between">
      <div className="flex-1">
        <Image src={sideImage1} className="" alt="" />
      </div>
      <div className="flex-1 lg:flex lg:flex-col lg:justify-between">
        <div>
          <SectionTitle
            topText="BEAUTIFUL QUIET SPACE"
            bottomText="Perfect Dining Experience"
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
          <Link href={"/"}>
            <p className="text-secondary tracking-wide text-lg leading-relaxed mt-8 hover:underline hover:underline-offset-8">
              HOW TO GET HERE
            </p>
          </Link>
        </div>
        <Image src={sideImage2} className="" alt="" />
      </div>
    </div>
  );
};

export default PerfectDiningExperience;
