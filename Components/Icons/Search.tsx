
const Search = ({ bg_color, width, more_class }: { bg_color: string, width: string, more_class: string }) => {
    return (
        <svg className={`fill-[${bg_color}] hover:fill-[#dd5903] duration-300 ${more_class}`} xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 24 24"><path fill="" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></svg>
    );
};

export default Search;