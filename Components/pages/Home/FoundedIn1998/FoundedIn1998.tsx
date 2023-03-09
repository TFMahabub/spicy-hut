import SectionTitle from "@/Components/reusedComponents/SectionTitle";
import sideImage from "@/public/assats/home(FOUNDED).jpg";
import Image from "next/image";

const FoundedIn1998 = () => {
    return (
        <div className="container flex flex-col lg:flex-row gap-10 justify-between">
            <div className="flex-1">
                <SectionTitle topText="FOUNDED IN 1998" bottomText="A Sophisticated Interpretation Of Traditional Japanese Cuisine" leftLine={false} rightLine={true}/>
            </div>
            <div className="flex-1">
                <Image src={sideImage} className="" alt="" />
            </div>
        </div>
    );
};

export default FoundedIn1998;