import Image from 'next/image';
interface propsType {
    children: any,
    src: string
}

const HompageBannerImageOverlay = ({ children, src }: propsType) => {
    return (
        <div className="relative h-screen w-full">
            <Image src={src} alt="banner image" objectFit="cover" objectPosition="center" layout="fill" />
            {children}
        </div>
    );
};

export default HompageBannerImageOverlay;