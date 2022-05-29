import React, { Component } from "react";
// import Webcam from 'react-webcam';
import WebcamCapture from "./components/webcam.js";

import "./styles/global.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="head">
          <h1>Live Face Recognition run on the Web</h1>
        </div>
        <p>
          Give access to the webcam and click the button to start face
          recognition.
        </p>
        <WebcamCapture />
      </div>
    );
  }
}

export default App;
