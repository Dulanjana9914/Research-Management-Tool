import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import emailjs from "emailjs-com";



export default function EditTopic()  {

    const [tid, settid] = useState();
    const [id, setid] = useState();
    const [groupID, setgroupID] = useState();
    const [groupName, setgroupName] = useState();
    const [rField, setrField] = useState();
    const [rTopic, setrTopic] = useState();
    const [leaderEmail, setleaderEmail] = useState();
    const [comment, setacomment] = useState();
    const [status, setstatus] = useState();

    let history = useHistory();


    useEffect(()=>{

        settid(localStorage.getItem('tid'));
        setid(localStorage.getItem('ID'));
        setgroupID(localStorage.getItem('groupID'));
        setgroupName(localStorage.getItem('groupName'));
        setrField(localStorage.getItem('rField'));
        setrTopic(localStorage.getItem('rTopic'));
        setleaderEmail(localStorage.getItem('leaderEmail'));
        setacomment(localStorage.getItem('comment'));
        setstatus(localStorage.getItem('status'));



    },[])

    async function  submitData(e) {
        
        e.preventDefault();


        const updateTopic = {
            tid,
            groupID,
            groupName,
            rField,
            rTopic,
            leaderEmail,
            comment,
            status
        }

        let ans = 1;

        if (ans) {

            await axios.put(`http://localhost:8070/topic/${id}`, updateTopic).then(() => {
                alert("Topic Update successfully");
                history.push('/StdTopicList');
            }).catch((err) => {
                alert(err);
            })

        }
    }

    async function  goList(){

    }

    

    return(
        <div className="topic-container">
            <div className="side-panel">

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>

                

            </div>
            <div style={{backgroundColor:"white"}}>

                <div className="head-container">
                    <label className="h-text" style={{color:"#FF5631"}}> UPDATE</label> <br className="br1" />
                    <label className="h-text">RESEARCH TOPIC</label>
                </div>
            
            <div className="t-from-container" style={{marginTop:"0px"}}>
            <form onSubmit={submitData}> 
                        <div className="mb-3">
                            <label className="s-form-label" >Group ID</label>
                            <input type="text"  style={{width:"450px"}}  id="cUName"
                                value={groupID}
                                onChange={(e) => setgroupID(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Group Name</label>
                            <input   type="text"  style={{width:"450px"}}  id="cName"
                                value={groupName}
                                onChange={(e) => setgroupName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Research Field</label>
                            
                            <input  type="text"  style={{width:"450px"}}  id="cName"
                                value={rField}
                                onChange={(e) => setrField(e.target.value)}
                                />

                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Research Topic</label>
                            <input type="text"  style={{width:"450px"}}  id="cName"   
                                value={rTopic}
                                onChange={(e) => setrTopic(e.target.value)}
                            />
                           
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Group Leader's email</label>
                            <input type="text"  style={{width:"450px"}}  id="cName"
                                value={leaderEmail}
                                onChange={(e) => setleaderEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Comments (Optional)</label>
                            <input type="text"  style={{width:"450px", height:"100px"}}  id="cName"
                                value={comment}
                                onChange={(e) => setacomment(e.target.value)}
                            />
                        </div>
                        <br />

                        <input type="hidden" name="mail" value={leaderEmail} />

                        <button name="Accept" type="submit" className="l-btn-accept" style={{width:"200px",fontSize:"2rem"}} value="Accepted">
                            Update
                        </button>

                    </form>  

                    <a href="/stdTopicList">
                            <button name="Reject" onClick={goList} className="l-btn-reject" style={{backgroundColor:"#84809F", width:"200px", marginLeft:"240px",fontSize:"2rem",marginTop:"-90px"}} value="Rejected">
                                Cancel
                            </button>
                        </a>

                    <br/>            
                </div>

            </div>
        </div>
    );
        


}