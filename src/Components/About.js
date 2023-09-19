import React from "react";

export default function About() {
    return (
        <>
            <h1 className="mt-5" style={{ textAlign: "center" }}>
                {" "}<br/>
                About{" "}
            </h1><br/>
            <div className=" container-sm d-flex justify-content-center mt-3" style={{textAlign:"justify"}}>
                <p style={{textAlign:"justify"}}>This is a News App. Here you can read latest News. This project is based on React Js. It is a single page application.<br/>
                    I have used Free News Api from <a  rel="noreferrer" target="_blank" href="https://newscatcherapi.com/"> https://newscatcherapi.com </a>&nbsp;
                    If, in future, there are no News showing that means, <br/>
                    my Free API limit has been exhausted.
                    <br/>
                </p>
            </div>
            <h5 style={{textAlign:"center"}}>&copy;Copyright 2023 <a  rel="noreferrer" target="_blank" href="https://github.com/iash8090/newsapp-React">iash8090</a></h5>
        </>
    );
}
