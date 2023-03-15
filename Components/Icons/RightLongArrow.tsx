
const RightLongArrow = ({ bg_color, width }: { bg_color: string, width: string }) => {
    return (
        <svg className={`${bg_color} hover:text-primary`} xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 24 24"><path fill={bg_color} d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6Z"></path></svg>
    );
};

export default RightLongArrow;