import React from "react";
import ImageViewer from "./ImageViewer";
import ImageEditor from "./ImageEditor";

function Viewer() {

    const [curr, setCurr] = useState("IMG_0005.JPG");
    const [next, setNext] = useState("IMG_0005.JPG");
    const [prev, setPrev] = useState("IMG_0005.JPG");
 
    return (
        <div>
            <ImageViewer prev = {prev} curr = {curr} next = {next} /> 
            <ImageEditor  prev = {prev} curr = {curr} next = {next}/>
        </div>
    )
}

export default Viewer;