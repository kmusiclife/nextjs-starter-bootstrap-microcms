import Head from 'next/head'

const siteinfo = {
    title: 'Title of Index Page',
    description: 'Description of Index Page'
};
const Home = () => {
  return (<></>)
}
Home.getInitialProps = () => {
    return { siteinfo: siteinfo };
};
export default Home;
