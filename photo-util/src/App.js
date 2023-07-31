import { useEffect, useState } from 'react';

import './App.css';
import Explorer from './components/Explorer/Explorer';
import Viewer from './components/Viewer/Viewer';
import * as Constants from './Constants';

function App() {

  var viewerVisible = false;

  return (
    <div className="App">
      {viewerVisible ? 
          <Viewer />    : <div>
          <input type="text"
            placeholder="Enter base directory"
            vaule=""
            id="dir_path"
            name="dir_path"
            style={{ width: '50vw', margin: '5vh 25vw' }}
          />
          <Explorer />
        </div>
      }
    </div>
  );
}

export default App;
