
const ListView = ({ bg_color, width }: { bg_color: string, width: string }) => {
    return (
        <svg className={`${bg_color}`} xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path></svg>
    );
};

export default ListView;