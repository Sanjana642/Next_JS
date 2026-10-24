
import React from "react";

const SingleArticlePage = async ({ params }) => {
    const { id } = await params;

    // Fetch data according to id later

    return (
        <div>SingleArticlePage: {id}</div>
    );
};

export default SingleArticlePage;
