import NewsHeader from '@/Components/pages/News/NewsHeader';
import NewsIndex from '@/Components/pages/News/NewsIndex';
import BackgroundImageOverlay from '@/Components/reusedComponents/BackgroundImageOverlay';

const news = () => {
    return (
        <>
            <BackgroundImageOverlay
                height="h-[550px]"
                bgImage="bg-news_background_image"
            >
                <NewsHeader />
            </BackgroundImageOverlay>
            <NewsIndex />
        </>
    );
};

export default news;