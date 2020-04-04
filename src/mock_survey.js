var survey_params = {
 "title": "MIT Covid-19 ",
 "description": "Help our healthcare workers by making it easier for them to predict how much capacity their hospital needs. By just filling out this simple questionnaire every week you can help our healthcare workers to better prepare to test and treat future patients. \n\nAll questions are voluntary if you don’t want to answer part of the question feel free to fill out the other ones\n",
 "pages": [
  {
   "name": "Extra",
   "elements": [
    {
     "type": "file",
     "name": "googleLocationHistory",
     "storeDataAsText": true,
     "title": "OPTIONAL - Upload you google location history (see here how)",
     "maxSize": 0
    },
    {
     "type": "comment",
     "name": "comment",
     "title": "Anything else we should know?"
    },
    {
     "type": "boolean",
     "name": "locationAuthorization",
     "title": "Are you willing to share your location with your answers?"
    }
   ]
  },
 ]
};

var survey_version = 0;

export {survey_params, survey_version};