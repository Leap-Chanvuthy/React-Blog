import {useState} from "react";
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
    
        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
          console.log('new blog added');
          navigate('/');
        })
      }

    return ( 
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog title :</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Blog body :</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                <label>Blog author :</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Vuthy Leap">Vuthy Leap</option>
                    <option value="The net ninja">The net ninja</option>
                    <option value="Dome Cooper">Dome cooper</option>
                    <option value="Jonh Stone">Jonh Stone</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;