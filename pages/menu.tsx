import MenuHeader from '@/Components/pages/Menu/MenuHeader';
import MenuIndex from '@/Components/pages/Menu/MenuIndex';
import BackgroundImageOverlay from '@/Components/reusedComponents/BackgroundImageOverlay';

const menu = () => {
    return (
        <>
            <BackgroundImageOverlay
                height="h-[550px]"
                bgImage="bg-selected_menus_background_image"
            >
                <MenuHeader />
            </BackgroundImageOverlay>
            <MenuIndex />
        </>
    );
};

export default menu;