import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import About from './Components/About'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
    const [mode, setMode] = useState("light");
    const [progress, setProgess] = useState(0);
    const [ srch, setSrch ] = useState('');
    const [ searchData , setSearchData ]= useState([])

    const handleSearch= async()=>{
        setProgess(15)
        if (srch){
            const url = `https://api.newscatcherapi.com/v2/search?q=${srch}&topic=world`;
            let data = await fetch(url, {
                method: "GET",
                headers: {
                    "x-api-key": "lQVTKToQtL1ULmYGCxOhRZzZqgk8Bds9AcHDQJ9Qe6U",
                    Accept: "application/json",
                },
            });
            setProgess(30)
            let parseData = await data.json();
            setProgess(60)
            setSearchData(parseData.articles);
            setProgess(100)
        }
        else{
            setProgess(100)
            setSearchData()
        }
    }


    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
            // to change text color to white
            document.body.style.color = "white";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }

    };


        return (
            <>
                <Router>
                    <NavBar mode={mode} toggleMode={toggleMode} handleSearch={handleSearch} setSrch={setSrch}/>
                    <LoadingBar color="#f11946" progress={progress} shadow={true} height={3}/>
                    <Routes>
                        <Route exact path="/" element={<Navigate to="/newsapp-React" />} />
                        <Route exact path="/newsapp-React" element={<News  key="world" category="world" srch={srch} searchData={searchData} setProgess={setProgess} toggleMode={toggleMode}  mode={mode}/> } />
                        <Route exact path="/business" element={<News  key="business" category="business" searchData={searchData} setProgess={setProgess} toggleMode={toggleMode} mode={mode}/> } />
                        <Route exact path="/entertainment" element={<News  key="entertainment" category="entertainment" searchData={searchData} setProgess={setProgess} toggleMode={toggleMode} mode={mode} /> } />
                        <Route exact path="/politics" element={<News  key="politics" category="politics" searchData={searchData} setProgess={setProgess} toggleMode={toggleMode} mode={mode}/> } />
                        <Route exact path="/science" element={<News  key="science" category="science" searchData={searchData} setProgess={setProgess} toggleMode={toggleMode} mode={mode}/> } />
                        <Route exact path="/sports" element={<News  key="sport" category="sport" searchData={searchData} setProgess={setProgess} toggleMode={toggleMode}  mode={mode} /> } />
                        <Route exact path="/technology" element={<News  key="tech" category="tech" searchData={searchData} setProgess={setProgess} toggleMode={toggleMode} mode={mode}/> } />
                        <Route exact path="/about" element={<About key="about" setProgess={setProgess} toggleMode={toggleMode} mode={mode}/> } />
                    
                    </Routes>
                </Router>
            </>
        );
}
