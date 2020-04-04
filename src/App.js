import React, {Component} from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css'
import './App.css';
import { geolocated } from "react-geolocated";

Survey.StylesManager.applyTheme("default")

class App extends Component {
    json = {
        elements: [
            { type: "text", name: "customerName", title: "What is your name?", isRequired: true},
            { type: "text", name: "customerLastName", title: "What is your last name?", isRequired: true}
        ]
    };

    onComplete(result) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log(position.coords.latitude, position.coords.longitude)
            },
            function(error) {
                console.log(error.message)
            },
            {
                enableHighAccuracy: true,
                timeout: 5000
            }
        );
        console.log(result)
    }

    render() {
        let model = new Survey.Model(this.json)

        return(
            <div>
                <Survey.Survey model={model} onComplete={this.onComplete()}/>
            </div>
        );

    }
}

export default App;


