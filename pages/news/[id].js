import Link from 'next/link';

function Index({ post, posts, pagers })
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
          <h1>{ post.id }</h1>
          <div>{ post.createdAt }</div>
        </div>
      </div>
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
export async function getStaticPaths() {
  
  const response = await fetch(process.env.MICROCMS_API_URL, {
    headers: {"X-API-KEY": process.env.MICROCMS_API_KEY}
  });
  const posts = await response.json();
  const paths = [];
  posts.contents.map(post => paths.push( { params: { 'id': post.id } } ) );
  return { 
    paths: paths, 
    fallback: false 
  }
}

export async function getStaticProps({ params })
{

  const id = params.id;
  const limit = process.env.MICROCMS_LIMIT;
  const offset = 0;

  var response = await fetch(process.env.MICROCMS_API_URL+`/${id}`, {
    headers: { "X-API-KEY": process.env.MICROCMS_API_KEY }
  });
  const post = await response.json();
  const siteinfo = {
    title: post.id,
    description: ''
  };
  response = await fetch( process.env.MICROCMS_API_URL+`?limit=`+limit+`&offset=`+offset, {
      headers: {"X-API-KEY": process.env.MICROCMS_API_KEY},
      method: 'GET'
  });
  const posts = await response.json();
  const allPage = posts.totalCount / limit;
  
  var pagers = [];
  for(var i=0; i<allPage; i++){
      pagers.push({ i: i, number: (i+1).toString() });
  }

  return { props: { post, posts, pagers, siteinfo } };

}

export default Index;
