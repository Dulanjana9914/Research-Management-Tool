import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from 'react-router';


export default function TopicList()  {

    const[request,setRequest] = useState([]);
    let col = "";
    let btnColor="";
    let btnText=""
    let history = useHistory();

    

    useEffect(()=>{

        
        axios.get("http://localhost:8070/topic").then((res)=>{
            setRequest(res.data.topicRouter);
            }).catch((err)=>{
                alert(err.message);
            })

    },[])

    function colorProduce(data){
        let val= "l-accepted";
        if(data == "pending"){
           val= "l-pending";
           btnColor= "l-btn-pending";
           btnText="Edit"  
        }
        else if(data == "Rejected"){
            val= "l-rejected";
            btnColor= "l-btn-resubmit";
            btnText="Re-submit"   
        }
        else{
            val= "l-accepted";
            btnColor= "l-btn-accepted";
            btnText="Req Co-Supervisor"   
        }
        col = val;

    };

    console.log(request);


    const setData = (data) => {
        let { _id,tid, groupID, groupName, rField, rTopic,leaderEmail, comment,status} = data;

        localStorage.setItem('ID',_id);
        localStorage.setItem('tid', tid);
        localStorage.setItem('groupID', groupID);
        localStorage.setItem('groupName', groupName);
        localStorage.setItem('rField', rField);
        localStorage.setItem('rTopic', rTopic);
        localStorage.setItem('leaderEmail', leaderEmail);
        localStorage.setItem('comment', comment);
        localStorage.setItem('status', status);

        if(status=="Accepted"){
            history.push('/reqCoSuper');
        }
        else if(status=="Rejected"){
            history.push('/SubmitTopic')
        }
        else{
            history.push('/EditTopic');
        }
        
        
    }

    return(
        <div className="t-list-container">
            <div style={{backgroundColor:"#0F0934"}}>

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>


            </div>
            <div style={{backgroundColor:"white"}}>

                <div className="t-list-head-container">
                    <label className="h-text" style={{color:"#FF5631"}}> SUBMITTED</label> <br className="br1" />
                    <label className="h-text">RESEARCH TOPICS</label>
                </div>
            
                <div className="t-list-tb-container">

                    <table className="t-table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Group_ID</th>
                            <th scope="col">Research Topic</th>
                            <th scope="col">Status</th>
                            <th scope="col" style={{width:'200px'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {request.map((data,index)=>(

                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>
                                    {data.groupID}
                                </td>
                                <td>
                                    {data.rTopic}
                                </td>
                                <td>
                                    {colorProduce(data.status)}
                                    <span className={col} >{data.status}</span>
                                    
                                </td>
                                
                                <td>
                                    <button className={btnColor} onClick={() => setData(data)}> {btnText} </button>
                                </td>
                            </tr>
                            ))}

                        </tbody>
                    </table>

                    <div>
                        <button className="t-nav-btn">
                            Ask A Question
                        </button>
                    </div>
                

                
                </div>

                <div className="bottom-t-container">
                    <label className="bottom-t" style={{color:"#FF5631"}}> SLIIT</label> <label className="bottom-t"> Research</label> <br />
                    <label className="bottom-t"> Management Tool</label>
                </div>
            
            </div>
        </div>
    );
        


}