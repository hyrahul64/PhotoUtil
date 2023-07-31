import React, {useState, useEffect} from "react";
import axios from 'axios';

import './Explorer.css'
import Details from "./FileDetails";
import * as Constants from '../../Constants';

function Explorer(props) {

    const [directory, setDirectory] = useState("E://photos/canon/27Jul23")
    const [files, setFiles] = useState([]);

    function loadDirectory() {
        console.log("Inside loadDirectory()");
        axios.get(Constants.default + "/")
          .then((resp) => setFiles(resp.data))
      }
    
      useEffect(loadDirectory, [directory]);
    
    function handleClick(event, id) {
        console.log(id);
        event.preventDefault();
    }

    return(
        <ul>
            {   
                 files.map((file, index) => {return index%7===0 ? 
                <br/> : <Details clickCallback = {handleClick} id = {index} filename = {file}/>})
            }
        </ul>
    );
}

export default Explorer;