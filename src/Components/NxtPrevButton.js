import React from "react";

export default function NxtPrevButton(props) {
    
    const prevClick = async () => {
        props.setPage(props.page-1)
        props.setProgess(10);
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?lang=en&countries=in&topic=${props.category}&page_size=10&page=${props.page -1}`;
        let data = await fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": "lQVTKToQtL1ULmYGCxOhRZzZqgk8Bds9AcHDQJ9Qe6U",
                Accept: "application/json",
            },
        });
        props.setProgess(30);
        let parseData = await data.json();
        props.setProgess(60);
        props.setArticles(parseData.articles)
        props.setProgess(100);

    };

    const nextClick = async () => {
        props.setPage(props.page+1)
        props.setProgess(10);
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?lang=en&countries=in&topic=${props.category}&page_size=10&page=${props.page +1}`;
        let data = await fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": "lQVTKToQtL1ULmYGCxOhRZzZqgk8Bds9AcHDQJ9Qe6U",
                Accept: "application/json",
            },
        });
        props.setProgess(30);
        let parseData = await data.json();
        props.setProgess(60);
        props.setArticles(parseData.articles)
        props.setProgess(100);
    };

    return (
        <>
            <div className="container d-flex justify-content-between mb-4">
                <button disabled={props.page <= 1} type="button" className="btn btn-primary" onClick={prevClick}>
                    {" "}
                    &larr; Previous
                </button>
                <button disabled={props.page === 1000} type="button" className="btn btn-primary" onClick={nextClick}>
                    Next &rarr;{" "}
                </button>
            </div>
        </>
    );
}
