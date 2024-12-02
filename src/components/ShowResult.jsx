import React from "react";

const ShowResult = ({ payload }) => {
    return (
        <div id="ShowResult">
            {payload?.results?.map((e) => (
                <div>
                    <a href={e.sourceUrl} target="_blank" rel="noreferrer">{ //rel react told me to use beacse it's risky to use _blank without it
                    }
                        <h1>{e.title}</h1>
                        <img src={e.image} alt="404 Not Found" />
                    </a>
                </div>
            ))}


        </div>
    )
}

export default ShowResult