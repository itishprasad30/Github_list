import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Repos from "./Repos";

export default function App() {
    const [post, setPost] = useState([]);
    // const [name, setName] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://api.github.com/users/gaearon");
            setPost(res.data);
        };
        fetchPosts();
    }, []);
    // const BtnClick = () => {
    //     const fetchPosts = async () => {
    //         const res = await axios.get(`https://api.github.com/users/${name}`);
    //         setPost(res.data);
    //         // setName("");
    //     };
    //     fetchPosts();
    // };

    // console.log(post);

    return (
        <div
            className="Container  m-5 "
            style={{ display: "flex", flexDirection: "column" }}>
            <h2 className="text-primary mb-3">The Github RepoList Page </h2>
            {/* <h4>Enter github userName: </h4>
            <input
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button className="button" onClick={BtnClick}>
                Search{" "}
            </button> */}
            <div>
                <h3>User name is :{post.login}</h3>
                <img
                    src={post.avatar_url}
                    alt={post.login}
                    height="200px"
                    width="200px"
                    style={{ borderRadius: "100px" }}
                />
            </div>
            <div>
                <Repos />
            </div>
        </div>
    );
}
