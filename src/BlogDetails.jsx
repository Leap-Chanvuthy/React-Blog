import { useParams , useNavigate} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data : blog , isPanding , error} = useFetch ('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate ();
    const handleDelete = (e) => {
        e.preventDefault();
        fetch ('http://localhost:8000/blogs/' + id , {
            method: 'DELETE'
        }).then (() =>{
            console.log ('blog deleted');
            navigate('/');
        })
    }
    return (
        <div className="blog-details">
          { isPanding && <div>Loading...</div> }
          { error && <div>{ error }</div> }
          { blog && (
            <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.body }</div>
            </article>
          )}
          <button onClick={handleDelete}>Delete</button>
        </div>
      );
}
 
export default BlogDetails;