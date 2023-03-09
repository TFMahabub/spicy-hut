interface propsType {
  topText: string;
  bottomText: string;
  leftLine: boolean;
  rightLine: boolean;
  topTextCenter: boolean;
}
const SectionTitle = ({
  topText,
  bottomText,
  leftLine,
  rightLine,
  topTextCenter,
}: propsType) => {
  return (
    <>
      <div
        className={`flex gap-4 items-center ${
          topTextCenter ? "justify-center" : ""
        }`}
      >
        <hr
          className={`w-10 h-[2px] bg-primary ${leftLine ? "block" : "hidden"}`}
        />
        <h2 className="top_title">{topText}</h2>
        <hr
          className={`w-10 h-[2px] bg-primary ${
            rightLine ? "block" : "hidden"
          }`}
        />
      </div>
      <h3 className="mt-2 text-secondary text-4xl lg:text-7xl font-semibold font-cormorant">
        {bottomText}
      </h3>
    </>
  );
};

export default SectionTitle;
