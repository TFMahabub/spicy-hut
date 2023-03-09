const Menus = () => {
  const lounshMenus = [
    {
      name: "Salmon Sashimi",
      price: "26",
      japanese: "サーモンのお刺身",
    },
    {
      name: "Yellow Tail Sashimi",
      price: "21",
      japanese: "ハマチのお刺身",
    },
    {
      name: "The Izakaya Oyster",
      price: "12",
      japanese: "カキのオイル漬け",
    },
    {
      name: "Grilled Mackerel",
      price: "16",
      japanese: "サバの塩焼き",
    },
  ];
  const dinnerMenus = [
    {
      name: "Addictive Cucumber",
      price: "8",
      japanese: "やみつきキュウリ",
    },
    {
      name: "Tofu & Sesame Hot Pot",
      price: "18",
      japanese: "豆乳鍋",
    },
    {
      name: "Parmigiano Ramen",
      price: "18",
      japanese: "明太子クリームラースパ",
    },
    {
      name: "Sake Steamed Clams",
      price: "16",
      japanese: "アサリの酒蒸し",
    },
  ];
  return (
    <div className="container py-5 lg:py-0 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center justify-center lg:justify-around h-full w-full">
      {/* -----------------menu----------------- */}
      <div className="border-2 border-secondary p-7 lg:p-11 text-secondary lg:min-w-[400px] bg-bodyBackground/70">
        <h6 className="text-lg lg:text-[26px] font-cormorant font-bold text-center">
          LUNCH SPECIAL
        </h6>
        <p className="text-center">11:30 am to 2:30 pm</p>
        <div className="mt-3 flex flex-col gap-4 lg:gap-8">
          {lounshMenus?.map((menue, i) => (
            <div>
              <div className="flex items-center justify-between">
                <h6 className="text-lg tracking-wide lg:text-[22px]">
                  {menue?.name}
                </h6>
                <hr className="border-l-0 w-[10%] border-r-0 border-1 border-secondary" />
                <h6 className="text-lg tracking-wide lg:text-[22px]">
                  ${menue?.price}
                </h6>
              </div>
              <p className="text-secondary/50">{menue?.japanese}</p>
            </div>
          ))}
        </div>
      </div>
      {/* -----------------menu----------------- */}
      <div className="border-2 border-secondary p-7 lg:p-11 text-secondary lg:min-w-[400px] bg-bodyBackground/70">
        <h6 className="text-lg lg:text-[26px] font-cormorant font-bold text-center">
          DINNER SPECIAL
        </h6>
        <p className=" text-center">5:30 pm to 10 pm</p>
        <div className="mt-3 flex flex-col gap-4 lg:gap-8">
          {dinnerMenus?.map((menue, i) => (
            <div>
              <div className="flex items-center justify-between">
                <h6 className="text-lg tracking-wide lg:text-[22px]">
                  {menue?.name}
                </h6>
                <hr className="border-l-0 w-[10%] border-r-0 border-1 border-secondary" />
                <h6 className="text-lg tracking-wide lg:text-[22px]">
                  ${menue?.price}
                </h6>
              </div>
              <p className="text-secondary/50">{menue?.japanese}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menus;
