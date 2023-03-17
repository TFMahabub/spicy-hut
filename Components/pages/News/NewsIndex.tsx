import Image from "next/image";
import Link from "next/link";

const NewsIndex = () => {
    return (
        <div className="section_gap flex flex-col gap-[100px]">
            {
                [...Array(6)].map((_, i) => (
                    <div key={i} className="max-w-[1000px] mx-auto flex flex-col gap-1 group">
                        <div className="relative">
                            <Image src={'https://i.ibb.co/6mmrZ5D/Addictive-Cabbage.jpg'} className="w-full" alt="menu image" height={500} width={500} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-secondary/70">MAY 26, 2022</span>
                                <span className="text-md text-primary uppercase">News</span>
                            </div>
                        </div>
                        <h3 className="font-cormorant text-2xl lg:text-4xl text-secondary">Love and food: It is all about spice</h3>
                        <p className="text-md text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus autem dicta perspiciatis nesciunt, quia facilis beatae dolorum saepe ab voluptates pariatur est quibusdam, consequatur quisquam temporibus quaerat mollitia, aliquam sit itaque perferendis porro maxime reprehenderit laboriosam. Omnis nihil facere minima eius enim, modi quod esse delectus illo soluta laudantium dicta impedit nesciunt qui, ipsa veritatis quo.</p>
                        <div>
                            <Link href={"/"} className="mt-5 button_border_animation_without_hover text-secondary after:bg-primary text-center uppercase group-hover:after:w-full">Read More</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default NewsIndex;