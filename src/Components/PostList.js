import { Link } from 'react-router-dom';

const PostList = ({ posts, title, author, team }) => {

    return (
        <div className="post-list">
            <h2>{ title }</h2>
            {posts.map((post) => (
                <div className="post-preview" key={post.postId}>
                    <Link to={`/posts/${post.postId}`}>
                        <h2>{ post.title}</h2>
                        <p>Länk till video: { post.link }</p>
                        <p>Inlägget gjordes av: { post.author }</p>
                        <p>Lag: { post.team }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default PostList;