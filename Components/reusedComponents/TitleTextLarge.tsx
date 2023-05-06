import { ChildrenType } from "../GlobalTypeScript/NormalType";

interface PropsType {
    children: ChildrenType;
}

const TitleTextLarge = ({ children }: PropsType) => {
    return (
        <h4 className='text-[2.5rem] md:text-5xl lg:text-6xl text-secondary font-cormorant font-bold leading-tight lg:leading-normal'>
            {children}
        </h4>
    );
};

export default TitleTextLarge;