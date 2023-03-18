
const DownArrow = ({ fill_color, width, more_class }: { fill_color: string, width: string, more_class: string }) => {
    return (
        <svg className={`fill-[${fill_color}] duration-300 ${more_class}`} xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 24 24"><path fill="" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"></path></svg>
    );
};

export default DownArrow;