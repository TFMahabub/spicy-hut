import { useRouter } from "next/router";

const packageCategories = () => {
  const { packageCategories } = useRouter().query;
  return (
    <div className="grid place-items-center h-screen">
      <div>
        <h3>this is package_details dynamit page</h3>
        <h3>
          category path-
          <span className="text-red-500">{packageCategories}</span>
        </h3>
      </div>
    </div>
  );
};

export default packageCategories;
