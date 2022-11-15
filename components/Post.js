import React from "react";

const Post = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => {
                const { id, title, body } = post;
                return (
                    <article key={id} className="shadow-md shadow-sky-300 mt-4">
                        <h2>{id}</h2>
                        <h1>{title}</h1>
                        <p>{body}</p>
                    </article>
                )
            })}
        </div>

    )
};

export default Post;
