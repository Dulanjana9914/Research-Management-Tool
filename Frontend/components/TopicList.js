import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from 'react-router';


export default function TopicList()  {

    const[request,setRequest] = useState([]);
    let history = useHistory();
    const[searchTerm,setSearchTerm] = useState("");
    const[spec,setSpec] = useState("");
    const[field,setField] = useState("");

    let col = "";
    let btnColor="";
    let btnText=""

    

    useEffect(()=>{

        
        axios.get("http://localhost:8070/topic").then((res)=>{
            setRequest(res.data.topicRouter);
            }).catch((err)=>{
                alert(err.message);
            })

    },[])

    console.log(request);

    function colorProduce(data){
        let val= "l-accepted";
        if(data == "pending"){
           val= "l-pending";
           btnColor= "l-btn-accepted";
           btnText="Review"  
        }
        else if(data == "Rejected"){
            val= "l-rejected";
            btnColor= "l-btn-pending";
            btnText="Edit"   
        }
        else{
            val= "l-accepted";
            btnColor= "l-btn-pending";
            btnText="Edit"   
        }
        col = val;

    };


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

        history.push('/AcceptTopic')
        
    }

    function search(rows){
        return rows.filter(row => row.groupID.toLowerCase().indexOf(q))
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

                    <div className="l-filter-container" style={{backgroundColor:"#D3D3D3", paddingTop: "5px",paddingLeft: "10px", paddingRight: "10px",paddingBottom: "5px"}}>

                        <div className="m-sub-container">
                            <input placeholder="Group ID" className="l-sbox" type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                        </div>

                        <div className="m-sub-container2">
                            
                        <label> Research Field:  </label>
                        <select style={{marginLeft:"20px", backgroundColor:"white"}}  className='l-s-spec'  name="Field" id="rField"
                                    onChange={(e) => setField(e.target.value)}
                                >
                                    <option value="">All</option>
                                    <option value="Artificial Interligance">Artificial Interligance</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Games">Games</option>
                                    <option value="Robotics">Robotics</option>
                                    
                            </select>

                            <label style={{marginLeft:"20px"}} > Research Topic: </label>

                            <select className='l-s-spec' style={{marginLeft:"20px", backgroundColor:"white"}} name="Field" id="Field"
                                    onChange={(e) => setSpec(e.target.value)}
                                >
                                    <option value="">All</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="pending">Pending</option>
                                    <option value="Rejected">Rejected</option>
                                    
                            </select>
                        </div>
  
                    </div>

                    

                    <table className="t-table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Group_ID</th>
                            <th scope="col">Research Field</th>
                            <th scope="col">Research Topic</th>             
                            <th scope="col">Status</th>
                            <th scope="col" style={{width:'100px'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {request.filter(val=>{
                                if(searchTerm ==="" && spec==="" && field===""){
                                    return val;
                                }
                                else if(val.groupID.toLowerCase().includes(searchTerm.toLocaleLowerCase()) && val.status.toLowerCase().includes(spec.toLocaleLowerCase()) && val.rField.toLowerCase().includes(field.toLocaleLowerCase())){
                                    return val}
                            }).map((data,index)=>(

                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>
                                        {data.groupID}
                                    </td>
                                    <td>
                                        {data.rField}
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
                            Go to Questions
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