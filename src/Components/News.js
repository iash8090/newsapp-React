import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NxtPrevButton from "./NxtPrevButton";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;

    const updateNews = async () => {
        props.setProgess(15);
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?lang=en&countries=in&topic=${props.category}&page_size=10&page=${page}`;
       // const url = "";
        setLoading(true);
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
        setArticles(parseData.articles);
        setLoading(false);
        props.setProgess(100);
    };

    useEffect(() => {
        if ((props.searchData)?.length ){
            console.log("searching", props.searchData)
            setArticles(props.searchData)
        }
        else{
            updateNews();
        }
            // eslint-disable-next-line 
    }, [props.searchData]);


    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?lang=en&countries=in&topic=${props.category}&page_size=10&page=${page + 1}`;
        //const url = "";
        let data = await fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": "lQVTKToQtL1ULmYGCxOhRZzZqgk8Bds9AcHDQJ9Qe6U",
                Accept: "application/json",
            },
        });
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
    };

    return (
        <>
            {/* If category='world' then use InfiniteScroll else use Next/Previous Button */}
            {props.category === "world" ? (
                <InfiniteScroll style={{ overflow: "hidden" }} dataLength={articles?.length} next={fetchMoreData} hasMore={articles?.length !== props.total_pages} loader={<Spinner />}>
                    <div className="container-fluid">
                    <div className={`form-check form-switch text-${props.mode === "dark"?"light":"dark"}`} style={{ float: "right" }}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            <b>Dark Mode</b>
                        </label>
                    </div>
                    <h1 className="mb-4" style={{ textAlign: "center", marginTop: "60px" }}>
                        Top <b>Headlines </b> on {capitalizeFirstLetter(props.category)}
                    </h1>
                    </div>

                    <div className="container">
                        {articles.map((element, index) => {
                            return (
                                <div className="row" key={index}>
                                    <NewsItems
                                        mode={props.mode}
                                        title={element?.title}
                                        description={element?.summary.slice(0, 450)}
                                        imageUrl={element?.media}
                                        newsUrl={element?.link}
                                        author={element?.author}
                                        publishedDate={element?.published_date}
                                        source={element?.rights}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </InfiniteScroll>
            ) : (
                <div>
                    <h1 className="mb-4" style={{ textAlign: "center", marginTop: "60px" }}>
                        Top <b>Headlines </b> on {capitalizeFirstLetter(props.category)}
                    </h1>
                    {/*  if loading is true then load Spinner */}
                    {loading && <Spinner />}
                    <div className="container">
                        {articles.map((element, index) => {
                            return (
                                <div className="row" key={index}>
                                    <NewsItems
                                        mode={props.mode}
                                        title={element.title}
                                        description={element.summary.slice(0, 450)}
                                        imageUrl={element.media}
                                        newsUrl={element.link}
                                        author={element.author}
                                        publishedDate={element.published_date}
                                        source={element.rights}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <NxtPrevButton page={page} setPage={setPage} setArticles={setArticles} setProgess={props.setProgess} category={props.category}></NxtPrevButton>
                </div>
            )}
        </>
    );
};
News.defaultProps = {
    pageSize: 10,
    category: "world",
};

News.propsTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
export default News;
