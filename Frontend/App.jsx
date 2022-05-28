import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';



import UploadTemplate from "./components/UploadTemplate";
import SubmitTypes from "./components/SubmitTypes";
import SubmitTopic from "./components/SubmitTopic";
import EvaluateTopic from "./components/EvlauateTopic";
import AcceptTopic from "./components/AcceptTopic";
import TopicList from "./components/TopicList";
import StdTopicList from "./components/StdTopicList";
import AddMarking from "./components/AddMarking";
import EditTopic from "./components/EditTopic";
import SubmitDocs from "./components/SubmitDocs";
//import AllStudentGroup from "./components/AllStudentGroup";
import AllTypes from "./components/AllTypes";
import MarkingList from "./components/MarkingList";
import EditMarking from "./components/EditMarking";
import SubmitTypes from "./components/SubmitTypes.jsx";

import DocumentEvaluation from "./components/DocumentEvaluation";
import PresentationEvaluation from "./components/PresentationEvaluation";
import AllDocuments from "./components/AllDocuments";
import RequestCoSupervisor from "./components/RequestCoSupervisor";
import StudentGroup from "./components/StudentGroup";
import UploadTemplate from "./components/UploadTemplate";
import Login from './components/Login';

function App() {

 return (
    <div>
      <Router>

        <Route path="/login" component={Login} />
        <Route path="/SubmitTopic" component={SubmitTopic} />
        <Route path="/EvaluateTopic" component={EvaluateTopic} />
        <Route path="/AcceptTopic" component={AcceptTopic} />
        <Route path="/TopicList" component={TopicList} />
        <Route path="/StdTopicList" component={StdTopicList} />
        <Route path="/AddMarking" component={AddMarking} />
        <Route path="/EditTopic" component={EditTopic} />
        <Route path="/SubmitDocs" component={SubmitDocs} />
        
        <Route path="/AllTypes" component={AllTypes} />
        <Route path="/MarkingList" component={MarkingList} />
        <Route path="/EditMarking" component={EditMarking} />
        <Route path="/SubmitTypes" component={SubmitTypes} />
        <Route exact path="/doc" component={DocumentEvaluation} />
        <Route path="/presentation" component={PresentationEvaluation} />
        <Route path="/allDoc" component={AllDocuments} />
        <Route path="/reqCoSuper" component={RequestCoSupervisor} />
        <Route path="/StudentGroup" component={StudentGroup} />
        <Route path="/UploadTemplate" component={UploadTemplate} />
      </Router>
    </div>
  );
}
export default App;
