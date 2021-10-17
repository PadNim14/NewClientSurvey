import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
// import App from './App';
import './index.css';
import "survey-react/survey.css";
import * as Survey from "survey-react";

import reportWebVitals from './reportWebVitals';
// Survey.StylesManager.applyTheme("orange");

// var surveyJSON = {title:"Patient Basic Assessment",description:"Obtains basic patient information",pages:[{name:"page1",elements:[{type:"text",name:"question10",title:"Full Name",isRequired:true},{type:"text",name:"date1",title:"Date: (format dd/mm/yyyy)",isRequired:true,inputType:"datetime"},{type:"rating",name:"question2",title:"I weigh myself everyday.",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question1",title:"If my shortness of breath increases, I contact my doctor or nurse.",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question3",title:"If my feet/legs become more swollen than usual, I contact my doctor or nurse. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question4",title:"If I gain 2 kg in one week, I contact my doctor or nurse. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question5",title:"If I experience increased fatigue, I contact my doctor or nurse. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question6",title:"I eat a low salt diet. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question7",title:"I take my medication as prescribed. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question8",title:"I exercise regularly.",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"}],description:"Click 1 if you strongly disagree with the statement; click 5 if you strongly agree with the statement. Otherwise, rate your answer accordingly.\n"}],showCompletedPage:false,navigateToUrl:"https://padnim14.github.io/survey-app/",navigateToUrlOnCondition:[{expression:"Take Survey Again ",url:"https://padnim14.github.io/survey-app/"}]}

// function sendDataToServer(survey) {
//     survey.sendResult('4bd65df1-3324-4d20-b190-c4b35440589d');
// }

// ReactDOM.render(
//     <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));
// Survey.StylesManager.applyTheme("orange");

// var surveyJSON = {title:"Patient Basic Assessment",description:"Obtains basic patient information",completedHtml:"<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <h1>Thank you for completing the survey </h1>\n        <a href=\"https://padnim14.github.io/survey-app/\"> Take survey again </a>\n    </head>\n</html>",pages:[{name:"page1",elements:[{type:"text",name:"question10",title:"Full Name",isRequired:true},{type:"text",name:"date1",title:"Date: (format dd/mm/yyyy)",isRequired:true,inputType:"datetime"},{type:"rating",name:"question2",title:"I weigh myself everyday.",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question1",title:"If my shortness of breath increases, I contact my doctor or nurse.",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question3",title:"If my feet/legs become more swollen than usual, I contact my doctor or nurse. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question4",title:"If I gain 2 kg in one week, I contact my doctor or nurse. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question5",title:"If I experience increased fatigue, I contact my doctor or nurse. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question6",title:"I eat a low salt diet. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question7",title:"I take my medication as prescribed. ",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"},{type:"rating",name:"question8",title:"I exercise regularly.",isRequired:true,minRateDescription:"Low",maxRateDescription:"High"}],description:"Click 1 if you strongly disagree with the statement; click 5 if you strongly agree with the statement. Otherwise, rate your answer accordingly.\n"},{name:"page2",elements:[{type:"html",name:"question9"}]}],showProgressBar:"top",progressBarType:"questions"}

// function sendDataToServer(survey) {
//     survey.sendResult('4bd65df1-3324-4d20-b190-c4b35440589d');
// }

// ReactDOM.render(
//     <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));
//     ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
Survey.StylesManager.applyTheme("darkrose");

var surveyJSON = {title:"Enter New Client",description:"Use this questionnaire to enter any new clients into the database.",pages:[{name:"page1",elements:[{type:"text",name:"question1",title:"First Name"},{type:"text",name:"question10",title:"Last Name"},{type:"radiogroup",name:"question11",title:"Gender of Client",choices:[{value:"item1",text:"Female"},{value:"item2",text:"Male"},{value:"item3",text:"Other"},{value:"item4",text:"Prefer not to say"}]},{type:"text",name:"question10Other",title:"Age of Client"},{type:"text",name:"question2",title:"Phone Number"},{type:"text",name:"question5",title:"Emergency Contact"},{type:"text",name:"question3",title:"Email Address"},{type:"text",name:"question4",title:"Street Address"},{type:"text",name:"question6",title:"Zip Code"},{type:"comment",name:"question7",title:"Description of Ailment"},{type:"radiogroup",name:"question8",title:"Type of Care",choices:[{value:"item1",text:"Frequent"},{value:"item2",text:"Infrequent"},{value:"item3",text:"Need-Based"}]},{type:"comment",name:"question9",title:"Other Important Information"}]}]}

function sendDataToServer(survey) {
    survey.sendResult('a49c3e01-be1d-4e4a-8aaf-d5809004500a');
}

ReactDOM.render(
    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));
   
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
