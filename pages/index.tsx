import FoundedIn1998 from "@/Components/pages/Home/FoundedIn1998/FoundedIn1998";
import Header from "@/Components/pages/Home/Header";

export default function Home() {
  return (
    <div className="space-y-[4rem] lg:space-y-[7rem] absolute top-0 w-full">
      <Header />
      <FoundedIn1998 />
    </div>
  );
}
