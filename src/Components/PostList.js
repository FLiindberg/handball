import { Link } from 'react-router-dom';

const PostList = ({ posts, title}) => {

    return (
        <div className="post-list">
            <h2>{ title }</h2>
            {posts.map((post) => (
                <div className="post-preview" key={post.postId}>
                    <Link to={`/posts/${post.postId}`}>
                        <h2>{ post.title}</h2>
                        <p>Länk: { post.link }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default PostList;