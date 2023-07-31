import React from "react";
import './FileDetails.css'

function FileDetails(props) {
    return(
        <span key = {props.index}
                id = {props.index}
                onClick = {(event) => {props.clickCallback(event, props.id)}}
        >
            <li><a href = {props.filename}>{props.filename}</a></li>
        </span>
    )
}

export default FileDetails;