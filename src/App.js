import React, {Component} from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css'
import './App.css';
import axios from 'axios'
import {survey_params, survey_version} from "./mock_survey";

Survey.StylesManager.applyTheme("default")

class App extends Component {
 json = survey_params;

 submit = function(data) {
  axios.post(
      "/api/store",
      JSON.stringify(data),
      {headers:{ 'Content-Type': 'application/json' }}
  );
 };

 onComplete = (survey, options) => {
  if(survey.data.locationAuthorization) {
   navigator.geolocation.getCurrentPosition(
       (position) => {
        let {latitude, longitude} = position.coords;
        this.submit({
         ...survey.data,
         version: survey_version,
         location: {
          status: "success",
          data: {
           latitude: latitude,
           longitude: longitude
          }
         }
        });
       },
       (error) => {
        survey.data.location = {
         status: "fail"
        };
        this.submit({
         ...survey.data,
         version: survey_version,
         location: {
          status: "fail"
         }
        });
       },
       {
        enableHighAccuracy: true,
        timeout: 5000
       }
   );
  }
  else {
   this.submit({
    ...survey.data,
    version: survey_version
   });
  }
 };

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


