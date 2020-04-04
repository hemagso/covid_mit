import React, {Component} from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css'
import './App.css';

Survey.StylesManager.applyTheme("default")

class App extends Component {
    json = {
        elements: [
            { type: "text", name: "customerName", title: "What is your name?", isRequired: true},
            { type: "text", name: "customerLastName", title: "What is your last name?", isRequired: true},
            { type: "boolean", name: "locationAuthorization", title: "Share my location data", labelTrue: "Yes", labelFalse: "No", defaultValue: "false"}
        ]
    };

    onComplete(survey, options) {
        if(survey.data.locationAuthorization) {
             navigator.geolocation.getCurrentPosition(
                function(position) {
                    alert("Current Location = " + String(position.coords.latitude) + ", " + String(position.coords.longitude));
                },
                function(error) {
                    alert(error.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000
                }
            );
        }
        alert("Survey Results = " + JSON.stringify(survey.data));
    }

    render() {
        let model = new Survey.Model(this.json)

        return(
            <div>
                <Survey.Survey model={model} onComplete={this.onComplete}/>
            </div>
        );

    }
}

export default App;


