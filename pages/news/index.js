import Link from 'next/link';

function Index({ posts, pagers })
{

    const rows = posts.contents.map(
    p => 
        <tr key={p.id}>
            <td><Link as={ '/'+process.env.MICROCMS_PATHNAME+'/'+p.id } href={ '/'+process.env.MICROCMS_PATHNAME+'/[id]' }><a>{p.id}</a></Link></td>
            <td>{ p.createdAt }</td>
        </tr>
    );
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody> 
                    </table>
                    <ul className="pagination">
                        { pagers.map( 
                            pager => 
                            <li className="page-item" key={ pager.i }>
                                <Link href={{ pathname: '/'+process.env.MICROCMS_PATHNAME, query: { page: pager.i } }} >
                                    <a className="page-link">{ pager.number}</a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </>);
}
Index.getInitialProps = async ({ query }) => 
{
    const limit = process.env.MICROCMS_LIMIT;
    const page = query.page;
    const offset = (page * limit) | 0;

    const response = await fetch( process.env.MICROCMS_API_URL+`?limit=`+limit+`&offset=`+offset, {
        headers: {"X-API-KEY": process.env.MICROCMS_API_KEY},
        method: 'GET'
    });
    const posts = await response.json();
    const allPage = posts.totalCount / limit;
    const siteinfo = {
        title: (parseInt(page)+1).toString()+'/'+allPage.toString(),
        description: ''
    };

    var pagers = [];
    for(var i=0; i<allPage; i++){
        pagers.push({ i: i, number: (i+1).toString() });
    }
    return { posts, pagers, siteinfo };

};
export default Index;

