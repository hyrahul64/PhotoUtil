import React, { useState } from "react";
import './ImageEditor.css'

function ImageEditor() {
    function handleChange(event) {
        console.log("input changed on " + event.target.value);
        if(event.target.id === "path")
            setPath(event.target.value);
        else if(event.target.id === "name")
            setName(event.target.value)
        else if(event.target.id === "content")
            setContent(event.target.value)
        else if(event.target.id === "type")
            setType(event.target.value)
        else if(event.target.id === "location")
            setLocation(event.target.value)
        event.preventDefault();
    }
    const [path, setPath] = useState("");
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    return (
        <div className="ImageEditor">

            <h2>Image Details</h2>
            <input type="text"
                id="path"
                name="path"
                placeholder="Path"
                value={path} onChange={handleChange} />

            <input type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name} onChange={handleChange} />


            <button>LOAD</button>

            <br/>
            <select
                id="content"
                name="content"
                onSelect={handleChange}>
                <option value = "select">Select  Image Content</option> 
                <option value = "trees">Trees</option> 
                <option value = "flowers">Flowers</option> 
                <option value = "house">Houses</option> 
                <option value = "persons">Persons</option> 
                <option value = "artistic">Artistic</option>
                <option value = "animals">Birds/Animals</option>
                <option value = "Nature">Nature</option>
            </select>


            <select
                id="type"
                name="type"
                onSelect={handleChange}>
                <option value = "select">Select Content Type</option> 
                <option value = "image">Image</option> 
                <option value = "video">Video</option> 
                <option value = "digest">Digest</option> 
                <option value = "panaroma">Panaroma</option> 
            </select>

            <select type="text"
                id="location"
                name="location"
                onSelect={handleChange} >
                <option value = "select">Select Location</option> 
                <option value = "image">Wellington</option> 
                <option value = "image">Auckland</option> 
                <option value = "image">Raglan</option> 
                <option value = "image">Hamilton</option> 
                <option value = "image">Cambridge</option> 
                <option value = "image">Glenview</option> 
            </select>

            <div className="navigator">
                <button>PREV</button>
                <button>NEXT</button>
            </div>

            <br/>
            <button>SUBMIT</button>

        </div>
    )
}



export default ImageEditor;