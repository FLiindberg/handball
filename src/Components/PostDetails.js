import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
    const { id } = useParams();
    const { data: post, error, isPending } = useFetch('https://localhost:7018/api/Posts/' + id);

    return ( 
        <div className="post-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { post && (
                <article>
                    <h2>{ post.title }</h2>
                    <div>{ post.description }</div>
                    <p>Länk till video: { post.link }</p>
                    <p>Inlägget gjordes av: { post.author }</p>
                    <p>Lag: { post.team }</p>
                </article>
            )}
        </div>
     );
}
 
export default PostDetails;