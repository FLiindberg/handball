import PostList from "./PostList";
import useFetch from "./useFetch";
import './index.css'

const Home = () => {
    const { data: posts, isPending, error } = useFetch('https://localhost:7018/api/Posts');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            {posts && <PostList posts={posts} title="Alla Inlägg!" />}
            { isPending && <div>Loading...</div> }
        </div>
    );
}

export default Home;