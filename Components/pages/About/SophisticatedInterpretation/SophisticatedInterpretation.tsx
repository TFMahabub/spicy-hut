import SectionTitle from "@/Components/reusedComponents/SectionTitle";
import Image from "next/image";

const SophisticatedInterpretation = () => {
  return (
    <div className="section_gap container flex flex-col-reverse lg:flex-row gap-16 justify-between">
      <div className="flex-1 relative">
        <Image src="https://i.ibb.co/gdqH9bz/about-Us-resturent.jpg" alt="" objectFit="cover" objectPosition="center" layout="fill" />
      </div>
      <div className="flex-1 lg:flex lg:flex-col lg:justify-between h-screen">
        <div>
          <SectionTitle
            topText="FOUNDED IN 1998"
            bottomText="A Sophisticated Interpretation Of Traditional Japanese Cuisine"
            leftLine={false}
            rightLine={true}
            topTextCenter={false}
          />
          <p className="pText">
            A distinctive, well-preserved and comfortable space, high-quality
            products, authentic cuisine, food and drinks are done flawlessly.
          </p>
          <p className="pText">
            We continue to be one of the top Japanese restaurants in America,
            attracting countless food lovers from all over the world. Our
            one-of-a-kind menu includes authentic tapas-style Japanese dishes
            and homemade desserts. new update
          </p>
          <p className="pText">
            We continue to be one of the top Japanese restaurants in America,
            attracting countless food lovers from all over the world. Our
            one-of-a-kind menu includes authentic tapas-style Japanese dishes
            and homemade desserts. new update
          </p>
        </div>
      </div>
    </div>
  );
};

export default SophisticatedInterpretation;
