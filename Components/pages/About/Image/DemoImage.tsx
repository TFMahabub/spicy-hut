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
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>
    </div>
  );
};

export default DemoImage;
