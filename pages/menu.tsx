import MenuHeader from '@/Components/pages/Menu/MenuHeader';
import MenuIndex from '@/Components/pages/Menu/MenuIndex';
import RestPageBannerImageOverlay from '@/Components/reusedComponents/RestPageBannerImageOverlay';

const menu = () => {
    return (
        <>
            <RestPageBannerImageOverlay
                src="https://i.ibb.co/k3PjxBF/selected-Menus.jpg"
            >
                <MenuHeader />
            </RestPageBannerImageOverlay>
            <MenuIndex />
        </>
    );
};

export default menu;