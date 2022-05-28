import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import emailjs from "emailjs-com";



export default function AcceptTopic()  {

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

        const btnName = e.nativeEvent.submitter.name;
        let sts="";



        if (btnName=="Accept") {
            sts= "Accepted";
        } else if (btnName=="Reject") {
            sts= "Rejected";
        } else {
            //no button pressed
        }

        const updateTopic = {
            tid,
            groupID,
            groupName,
            rField,
            rTopic,
            leaderEmail,
            comment,
            status:sts
        }

        let ans = 1;

        if (ans) {

            await axios.put(`http://localhost:8070/topic/${id}`, updateTopic).then(() => {
                alert("Status Update successfully");
            }).catch((err) => {
                alert(err);
            })

        }

        document.getElementById("subBut").click();

        
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_tc03vnm',
            'template_viacnc5',
            e.currentTarget,
            '-utNmr2eLLLW4jLyR'
        )
        .then(
            (result) => {
            history.push("/topiclist");
            },
            (error) => {
            console.log(error.text);
            }
        );
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
                    <label className="h-text" style={{color:"#FF5631"}}> APPROVE</label> <br className="br1" />
                    <label className="h-text">RESEARCH TOPIC</label>
                </div>
            
            <div className="t-from-container" style={{marginTop:"0px"}}>
            <form onSubmit={submitData}> 
                        <div className="mb-3">
                            <label className="s-form-label" >Group ID</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cUName"
                                value={groupID}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Group Name</label>
                            <input  className="s-input" disabled  type="text"  style={{width:"450px"}}  id="cName"
                                value={groupName}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Research Field</label>
                            
                            <input  className="s-input" disabled  type="text"  style={{width:"450px"}}  id="cName"
                                value={rField}
                                />

                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Research Topic</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cName"   
                                value={rTopic}
                            />
                           
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Group Leader's email</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cName"
                                value={leaderEmail}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Comments (Optional)</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px", height:"100px"}}  id="cName"
                                value={comment}
                            />
                        </div>
                        <br />

                        <input type="hidden" name="mail" value={leaderEmail} />

                        <button name="Accept" type="submit" className="l-btn-accept" style={{width:"200px",fontSize:"2rem"}} value="Accepted">
                            Accept
                        </button>

                        <button name="Reject" type="submit" className="l-btn-reject" style={{width:"200px", marginLeft:"40px",fontSize:"2rem"}} value="Rejected">
                            Reject
                        </button>
                    </form>  

                    <form onSubmit={sendEmail}>
                            <input type="hidden" name="mail" value={leaderEmail} />
                            <input type="hidden" name="to_name" value={groupName} />
                            <input type="hidden" name="status" value={status} />
                            <button hidden id="subBut">Send Email</button>
                    </form>

                    <br/>            
                </div>

            </div>
        </div>
    );
        


}