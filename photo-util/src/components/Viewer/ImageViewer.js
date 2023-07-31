import axios from 'axios';
import React, {useState} from "react";

import './ImageViewer.css'
import * as Constants from '../../Constants';

function ImageViewer(props) {

    const [imageData, setImageData] = useState(null);
 
    function loadImage() {
      console.log("Inside loadImage()")
      axios.get(Constants.default + "/" + props.curr)
        .then((resp) => setImageData(resp.data))
    }

    
    return (
        <div className="Viewer">
            <img className="Photo" src = "./photos/IMG_0019.JPG" alt="Image should come here!" ></img>
        </div>
    )
}

export default ImageViewer;