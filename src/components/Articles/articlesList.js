import React from "react";

const articlesList = ({thing}) => {
    return (
        <button key={thing.id}>
            <h3>{thing.name}</h3>
            <p>{thing.data}</p>
        </button>
    );
};

export default articlesList;