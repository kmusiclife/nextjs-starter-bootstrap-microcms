import { NextSeo } from 'next-seo';

export const Container = ({ children, siteinfo }) => 
{
    return (<>
        <NextSeo 
            title={siteinfo.title} 
            description={siteinfo.description}
            canonical={siteinfo.canonical} 
            openGraph={{
                type: siteinfo.openGraph.type,
                url: siteinfo.openGraph.url,
                title: siteinfo.openGraph.title,
                description: siteinfo.openGraph.description,
                images: [{
                    site_name: siteinfo.openGraph.images[0].site_name,            
                    title: siteinfo.openGraph.images[0].title,
                    description: siteinfo.openGraph.images[0].description,
                    url: siteinfo.openGraph.images[0].url,
                    width: siteinfo.openGraph.images[0].width,
                    height: siteinfo.openGraph.images[0].height
                }]
            }}
        >
        </NextSeo>
        { children }
    </>);
};

export default Container;
