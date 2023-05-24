import SectionTitle from "@/Components/reusedComponents/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const PerfectDiningExperience = () => {
  return (
    <div className="section_gap container flex flex-col-reverse lg:flex-row gap-10 justify-between">
      {/* this height h-screen will be the the full section height */}
      <div className="lg:flex-1 h-96 lg:h-screen relative">
        <Image src={"https://i.ibb.co/DMs8wwF/home-Beautifull-Quiet1.jpg"} alt="founded in" objectFit="cover" objectPosition="center" layout="fill" />
      </div>
      <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-between">
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
        <div className="relative h-full mt-6 w-full">
          <Image src={"https://i.ibb.co/VxmCc6x/home-Beautifull-Quiet2.jpg"} alt="founded in" objectFit="cover" objectPosition="center" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default PerfectDiningExperience;
