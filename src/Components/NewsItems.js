import React from "react";

const NewsItems = (props) => {
    let { title, description, imageUrl, newsUrl, mode, author, publishedDate, source } = props;
    return (
        <>
            <div className="card mb-3" style={{ backgroundColor: mode === "dark" ? "#3e3f5a" : "white", color: mode === "light" ? "black" : "white" }}>
                <div className="row g-0">
                    <div className="col-md-4" style={{ height: "250px" }}>
                        <img src={imageUrl} className="img-fluid rounded-start" alt="NA" style={{ maxHeight: "100%", maxWidth: "100%", aspectRatio: "5/3.5", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <div className="row">
                                <div className="col">
                                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "50%" }}>
                                        {source}
                                    </span>
                                    <p className="card-text">
                                        <small style={{ color: mode === "dark" ? "#c4d7e8" : "black" }}>
                                            By {author ? author : "Unknown"} on {new Date(publishedDate).toDateString()}{" "}
                                        </small>
                                    </p>
                                </div>
                                <div className="col text-end">
                                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsItems;
