
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import Head from 'next/head';

export const Layout = ({ children, router, siteinfo }) => 
{
    return (<>
        <Head />
        <Header />
        <Container siteinfo={siteinfo}>{ children }</Container>
        <Footer />
    </>);
};

export default Layout;
