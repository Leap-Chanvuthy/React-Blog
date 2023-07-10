import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {
    
  const {data : blogs , isPanding , error} = useFetch ('http://localhost:8000/blogs');

    return (
      <div className="home">
      {error && <div> {error} </div>}
      {isPanding && <div> <span> <img src="https://media2.giphy.com/media/NgEAblIYpqSlwpj15O/giphy.gif?cid=6c09b952cg3fben5t59orwj5woowuht2q3njo2i07x9awz2f&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="loading" id='loading'/> </span> </div> }
      {isPanding && <div> Loading... </div>}
      {blogs && <BlogList blogs={blogs}   title = "All blogs"  />}

      </div>
    );
  }
   
  export default Home;