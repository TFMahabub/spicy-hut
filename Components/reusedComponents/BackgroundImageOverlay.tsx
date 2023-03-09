const BackgroundImageOverlay = ({ children, height, bgImage }: any) => {
  return (
    <div
      className={`bg-no-repeat bg-center bg-black ${height && height} ${
        bgImage && bgImage
      }`}
    >
      <div className="bg-bodyBackground/50 w-full h-full grid_place_center">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImageOverlay;
