import { ChildrenType } from '../GlobalTypeScript/NormalType';
interface PropsType {
    children: ChildrenType;
}

const DescriptionTextLG = ({ children }: PropsType) => {
    return (
        <p className='text-secondary tracking-wider text-lg leading-relaxed'>
            {children}
        </p>
    );
};

export default DescriptionTextLG;