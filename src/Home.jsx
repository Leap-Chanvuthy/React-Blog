import {useState , useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPanding , setIspanding] = useState(true);
    const [error , setError] = useState(null);
    
    useEffect(() =>{
      setTimeout(() =>{
        fetch ('http://localhost:8000/blogs')
        .then ((res) =>{
          if (!res.ok){
            throw Error ('Could not fetch the data for that resource...');
          }
          return res.json();
        })
        .then ((data) =>{
          console.log(data);
          setBlogs(data);
          setIspanding(false);
        })
        .catch ((err) =>{
          setError (err.message);
        });

      } , 2000);
    } , []);
 

    return (
      <div className="home">
      {error && <div> {error} </div>}
      {isPanding && <div> <span> <img src="https://media2.giphy.com/media/NgEAblIYpqSlwpj15O/giphy.gif?cid=6c09b952cg3fben5t59orwj5woowuht2q3njo2i07x9awz2f&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="loading" id='loading'/> </span> </div> }
      {/* {isPanding && <div> Loading... </div>} */}
      {blogs && <BlogList blogs={blogs}   title = "All blogs"  />}

      </div>
    );
  }
   
  export default Home;