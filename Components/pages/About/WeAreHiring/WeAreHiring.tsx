import SectionTitle from "@/Components/reusedComponents/SectionTitle";
import Image from "next/image";

const WeAreHiring = () => {
  return (
    <div className="section_gap container flex flex-col lg:flex-row gap-16 justify-between">
      <div className="flex-1 relative">
        <Image src="https://i.ibb.co/HB8CH65/about-Us-we-are-hiring.jpg"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          alt="" />
      </div>
      <div className="flex-1 lg:flex lg:flex-col lg:justify-between">
        <div>
          <SectionTitle
            topText="JOIN US AT PATIO.TIME"
            bottomText="We Are Hiring!"
            leftLine={false}
            rightLine={true}
            topTextCenter={false}
          />
          <p className="pText">
            We are looking for chefs and service staff at Patio.Time Sushi and
            our other branches. Please call or email for details. Lorem ipsum dolor sit amet consectetur adipisicing elit. A soluta deleniti quibusdam dolorum est corporis quis reprehenderit praesentium facilis possimus reiciendis autem atque, fugiat natus sit nemo alias. Eum, adipisci.
          </p>
          <div className="space-y-2">
            <p className="tracking-wide text-lg leading-relaxed mt-3 text-secondary/60">
              1. <span className="text-secondary">Sushi Chef - New York</span>
            </p>
            <hr className=" text-[#4e4e4e] w-full h-[1px]" />
            <p className="tracking-wide text-lg leading-relaxed mt-3 text-secondary/60">
              2. <span className="text-secondary">Waiter - New York</span>
            </p>
            <hr className=" text-[#4e4e4e] w-full h-[1px]" />
            <p className="tracking-wide text-lg leading-relaxed mt-3 text-secondary/60">
              3. <span className="text-secondary">Receptionist - Kyoto</span>
            </p>
            <hr className=" text-[#4e4e4e] w-full h-[1px]" />
          </div>
          <a href="http://facebook.com" target="_blank" rel="noreferrer" className="mt-5 button_border_animation_end_to_start text-secondary after:bg-primary ">SEND RESUME & APPLY NOW</a>
          {/* <button className="">
            <Link href={"/apply"}>SEND RESUME & APPLY NOW</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default WeAreHiring;
