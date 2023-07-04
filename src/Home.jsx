import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'vuthy', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'peter', id: 3 },
      { title: 'mobile development', body: 'lorem ipsum...', author: 'vuthy', id: 4 }
    ])

    const handleDelete = (id) =>{
      const newBlog = blogs.filter ((blog) => blog.id != id);
      setBlogs(newBlog);
    }
  
    return (
      <div className="home">
       <BlogList blogs={blogs}  title = "All blogs"  handleDelete ={handleDelete} />
      </div>
    );
  }
   
  export default Home;