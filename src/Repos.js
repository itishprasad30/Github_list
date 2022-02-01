import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Repos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                `https://api.github.com/users/gaearon/repos`
            );
            setRepos(res.data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    // Get Current post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currRepos = repos.slice(indexOfFirstPost, indexOfLastPost);

    //change pagenum

    const paginate = (PageNumber) => {
        setCurrentPage(PageNumber);
    };
    console.log(repos);
    return (
        <div style={{ marginTop: "25px" }}>
            <h2>All Repositary</h2>
            {currRepos.map((repo, id) => (
                <Card repo={repo} key={id} loading={loading} />
            ))}

            <Pagination
                paginate={paginate}
                postPerPage={postsPerPage}
                totalRepos={repos.length}
            />
        </div>
    );
};

export default Repos;
