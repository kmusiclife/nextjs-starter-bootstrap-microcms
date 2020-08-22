import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/styles.sass';

class MyApp extends App {

    componentDidMount() {}
    static async getInitialProps({ Component, router, ctx }) {

        const { req, res } = ctx;
        let pageProps = {};
        
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.router = router;
        return { pageProps }
    }
    render() {
        const { Component, pageProps } = this.props;
        // https://github.com/garmeeh/next-seo
        var siteinfo = { 
            title: process.env.SITE_NAME, 
            description: process.env.SITE_DESCIPTION,
            canonical: process.env.SERVER_URL + pageProps.router.pathname,
            openGraph: {
                type: process.env.OG_TYPE,
                url: process.env.SERVER_URL.toString() + pageProps.router.pathname.toString(),
                title: process.env.SITE_NAME,
                site_name: process.env.SITE_NAME,
                description: process.env.SITE_DESCIPTION,
                images: [
                    {
                        url: `${process.env.SERVER_URL}${process.env.OG_IMAGE}`,
                        width: `${process.env.OG_IMAGE_WIDTH}`, height: `${process.env.OG_IMAGE_HEIGHT}`
                    }
                ]
            }
        };
        siteinfo = Object.assign( siteinfo, pageProps.siteinfo );
        return (<Layout router={pageProps.router} siteinfo={ siteinfo }><Component {...pageProps} /></Layout>);
    }
}

export default MyApp;
