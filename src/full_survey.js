var survey_params = {
 "title": "MIT Covid-19 ",
 "description": "Help our healthcare workers by making it easier for them to predict how much capacity their hospital needs. By just filling out this simple questionnaire every week you can help our healthcare workers to better prepare to test and treat future patients. \n\nAll questions are voluntary if you don’t want to answer part of the question feel free to fill out the other ones\n",
 "pages": [
  {
   "name": "About you",
   "elements": [
    {
     "type": "text",
     "name": "email",
     "title": "What is your email address? So we can send you a new survey next week ",
     "placeHolder": "Leave this question blank if you don't want to answer it"
    },
    {
     "type": "radiogroup",
     "name": "age",
     "title": "What is your age? ",
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": "0 - 10"
      },
      {
       "value": "2",
       "text": "11 - 20"
      },
      {
       "value": "3",
       "text": "21 - 30"
      },
      {
       "value": "4",
       "text": "31 - 40"
      },
      {
       "value": "5",
       "text": "41 - 50"
      },
      {
       "value": "6",
       "text": "51 - 60"
      },
      {
       "value": "7",
       "text": "61 - 70"
      },
      {
       "value": "8",
       "text": "> 70"
      }
     ],
     "otherText": "Prefer not to answer"
    },
    {
     "type": "radiogroup",
     "name": "Gender",
     "title": "What gender do you identify as?",
     "choices": [
      {
       "value": "1",
       "text": "Female"
      },
      {
       "value": "2",
       "text": "Male"
      },
      {
       "value": "3",
       "text": "Other"
      },
      {
       "value": "-1",
       "text": "Prefer not to answer"
      }
     ]
    },
    {
     "type": "text",
     "name": "zipCode",
     "title": "Where are you currently located? ",
     "description": "Please enter your Zip-Code",
     "placeHolder": "e.g. 02139 or leave blank if you don't want to tell"
    },
    {
     "type": "radiogroup",
     "name": "Leave the house",
     "title": "Do you leave your house for work?",
     "choices": [
      {
       "value": "1",
       "text": "Yes"
      },
      {
       "value": "2",
       "text": "No"
      },
      {
       "value": "-1",
       "text": "Prefer not to answer"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Public transit",
     "title": "Do you use public transportation to get to work?",
     "choices": [
      {
       "value": "1",
       "text": "Yes"
      },
      {
       "value": "2",
       "text": "No"
      },
      {
       "value": "-1",
       "text": "Prefer not to answer"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Occupation",
     "title": "What is your occupation? (only if still going to work)",
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": "Medical staff (e.g. Nurse)"
      },
      {
       "value": "2",
       "text": "Grocery worker "
      },
      {
       "value": "3",
       "text": "Uber/Delivery Driver"
      },
      {
       "value": "-1",
       "text": "Prefer not to answer"
      }
     ]
    },
    {
        "type": "text",
        "name": "numberOfContacts",
        "title": "On average how many people you meet on a day?",
        "description": "Please enter the number of people you meet",
        "placeHolder": "e.g. 3"
       }
   ],
   "title": "About you"
  },
  {
   "name": "Symptoms",
   "elements": [
    {
     "type": "checkbox",
     "name": "symptoms",
     "title": "Do you have any of the following symptoms?",
     "hasOther": true,
     "choices": [
      {
       "value": "1",
       "text": "Fever"
      },
      {
       "value": "2",
       "text": "Dry cough"
      },
      {
       "value": "3",
       "text": "Shortness of breath"
      },
      {
       "value": "4",
       "text": "Loss of sense of smell or taste"
      }
     ],
     "hasNone": true
    },
    {
     "type": "checkbox",
     "name": "warningSigns",
     "title": "Do you experience any of the following warning signs:",
     "description": "If you check any of those you should seek medical attention now!",
     "choices": [
      {
       "value": "1",
       "text": "Trouble breathing"
      },
      {
       "value": "2",
       "text": "Persistent pain or pressure in the chest"
      },
      {
       "value": "3",
       "text": "Bluish lips or face"
      }
     ],
     "hasNone": true
    },
    {
     "type": "radiogroup",
     "name": "tested",
     "title": "Have you been tested for COVID-19?",
     "choices": [
      {
       "value": "1",
       "text": "yes - the test was positive (I currently have COVID-19)"
      },
      {
       "value": "2",
       "text": "yes - the test was negative"
      },
      {
       "value": "3",
       "text": "no"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "contactCovidTested",
     "title": "Have you been in contact with someone in the last two weeks who has tested positive for COVID19?",
     "choices": [
      {
       "value": "1",
       "text": "yes"
      },
      {
       "value": "2",
       "text": "no"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "contactCovidSymptoms",
     "title": "Have you been in contact with someone in the last two weeks who has displayed symptoms of COVID19?",
     "choices": [
      {
       "value": "item1",
       "text": "yes"
      },
      {
       "value": "item2",
       "text": "no"
      }
     ]
    }
   ],
   "title": "Symptoms"
  },
  {
   "name": "Extra",
   "elements": [
    {
     "type": "comment",
     "name": "comment",
     "title": "Anything else we should know?"
    },
    {
     "type": "boolean",
     "name": "locationAuthorization",
	    "defaultValue": "true",
     "title": "Are you willing to share your location with your answers?"
    }
   ]
  },
 ]
};

var survey_version = 1;

export {survey_params, survey_version};
