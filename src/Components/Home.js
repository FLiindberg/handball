import PostList from "./PostList";
import useFetch from "./useFetch";
import './index.css'

const Home = () => {
    const { data: posts, isPending, error } = useFetch('https://localhost:7018/api/Posts');

    return (
        <div className="home">
            {posts && <PostList posts={posts} title="Alla Inlägg!" />}
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
        </div>
    );
}

export default Home;