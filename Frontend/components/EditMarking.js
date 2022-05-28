import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router';

export default function EditMarking()  {

    const [id, setId] = useState(null);
    const [sid, setSid] = useState("Sample"); //set admin ID
    const [specialization, setSpecialization] = useState(null);
    const [schemeType, setschemeType] = useState(null);
    const [marks, setMarks] = useState(null);
    const [criteria, setCriteria] = useState([]);
    const [extra, setExtra] = useState(null);

    let history = useHistory();

    useEffect(()=>{
        setId(localStorage.getItem('ID'));
        setSid(localStorage.getItem('sid'));
        setSpecialization(localStorage.getItem('specialization'));
        setschemeType(localStorage.getItem('schemeType'));
        setMarks(localStorage.getItem('marks'));
        setCriteria((JSON.parse(localStorage.getItem('criteria')|| "[]")));
        
    },[])

    console.log(criteria);
    
    
    const handleCriteriaInput = (e) => {
        console.log(e.target.name +":"+ e.target.value)
        setExtra({ ...extra, [e.target.name]: e.target.value });
        console.log(extra);
    };

    const handleCriteria = (e) => {
        document.getElementById('markBox').focus();
        alert("New Criteria Added");
        setCriteria((prev) => [...prev, extra]);

    };


    const handleSave = async () => {
        const data = new FormData();
        
        const updateMarking = {
            sid,
            specialization,
            schemeType,
            marks,
            criteria,
        };

        axios.put(`http://localhost:8070/markingscheme/${id}`,updateMarking).then(()=>{

            alert("Marking Scheme Updated Successfully");
            
    
         }).catch((err)=>{
    
            alert(err);
         })
    };

    const handleDelete = async (e,desc) =>{
        e.preventDefault();
        if(desc!=""){
            const newList = criteria.filter((data) => data.des !== desc);
            setCriteria(newList);
        }
        
    };

    const handleEdit = async (e,desc,mark) =>{
        e.preventDefault();

        document.getElementById('desBox').value=desc;
        document.getElementById('markBox').value=mark;

        const event = new Event("change", { bubbles: true });
        document.getElementById('desBox').focus();
        //document.getElementById('markBox').focus();


        // setExtra({ ...extra, ["des"]: desc});
        // setExtra({ ...extra, ["mark"]: mark});
        

        if(desc!=""){
            const newList = criteria.filter((data) => data.des !== desc);
            setCriteria(newList);
        }
        
    };

    const handleFullDelete = async () => {

        let text = "Are you sure you want to delete?";
        if (confirm(text) == true) {
            axios.delete(`http://localhost:8070/markingscheme/${id}`).then(()=>{

            alert("Marking Scheme Deleted!");
            history.push('/MarkingList');
            
    
         }).catch((err)=>{
    
            alert(err);
         })
        } 
        
    };

   



    return(
        <div className="marking-container">
            <div style={{backgroundColor:"#0F0934"}}>

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>

               
            </div>

            

            <div style={{backgroundColor:"white"}}>
            <div className="t-list-head-container">
                    <label className="h-text"> <label style={{color:"#FF5631"}}> UPDATE</label> MARKING</label> <br className="br1" />
                    <label className="h-text">SCHEME</label>
                    <hr />
            </div>
            
            <div className="m-from-container">
                <label style={{fontWeight:'bold'}}> General Information</label>
                <form >
                        <div className="mb-3">
                            <label className="m-form-label">Specialization</label>
                            
                            <select className='form-control m-select' name="Field" id="Field" style={{fontSize:'0.8rem', width:"450px",border: "2px solid #ced4da", height:"30px"}}
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                            >
                                <option value="Default">Select one</option>
                                <option value="Artificial Interligance">Artificial Interligance</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Games">Games</option>
                                <option value="Robotics">Robotics</option>
                            </select>

                        </div>

                        <div className="m-sub">

                        <div className="m-sub-container">
                            <div className="mb-3">
                                <label className="m-form-label" style={{color:"#322B5F"}}>Scheme Type</label>
                                <select className='form-control m-select' name="Field" id="Field" style={{fontSize:'0.8rem', width:"280px",border: "2px solid #ced4da", height:"30px"}}
                                   value={schemeType}
                                   onChange={(e) => setschemeType(e.target.value)}
                                >
                                <option value="Default">Select one</option>
                                <option value="Document">Document</option>
                                <option value="Persentation">Persentation</option>
                            </select>
                            </div>

                        </div>
                        <div className="m-sub-container2">
                            <div className="mb-3">
                                <label className="m-form-label" style={{color:"#322B5F"}}>Total Marks</label>
                                <input type="text"  style={{width:"150px", height:"30px"}} className="t-form-control" id="cUName"
                                    value={marks}
                                    onChange={(e) => setMarks(e.target.value)}
                                />
                            </div>

                        </div>
                        </div>

                        <label style={{fontWeight:'bold'}}> Add New Criteria</label>

                        <div className="mb-3">
                            <label className="m-form-label">Criteria Name</label>
                            <input type="text" name="des" style={{width:"450px", height:"30px"}}  id="desBox"
                                onFocus={handleCriteriaInput}
                                onChange={handleCriteriaInput}
                            />
                        </div>

        
                        <div className="mb-3">
                            <label className="m-form-label">Mark Percentage (%)</label>
                            <input type="text" name="mark" style={{width:"450px", height:"30px"}}  id="markBox"
                                onFocus={handleCriteriaInput}
                                onChange={handleCriteriaInput}
                            />
                        </div>

                        



                    </form>

                    <button  className="btn btn-primary" style={{backgroundColor:"#84809F",width:"200px",fontWeight:"bold"}} onClick={handleCriteria} >+ Add criteria</button>
                    <br/>
                    <button  className="btn btn-primary" style={{backgroundColor:"#0F0934",width:"200px",fontWeight:"bold",marginTop:'20px'}} onClick={handleSave} > Save</button>
                    
                    <button  className="btn btn-danger" style={{width:"200px",fontWeight:"bold",marginLeft:'20px',marginTop:'20px'}} onClick={handleFullDelete} > Delete</button>

                    <div className="bottom-t-container">
                        <label className="bottom-t" style={{color:"#FF5631"}}> SLIIT</label> <label className="bottom-t"> Research</label> <br />
                        <label className="bottom-t"> Management Tool</label>
                    </div>
            
                </div>

            </div>

            <div style={{backgroundColor:'#D5D3E2'}}>
                <div className="t-list-head-container">
                        <label className="h-text"> <label style={{color:"#FF5631"}}> XX %</label> MARKS</label> <br className="br1" />
                        <label className="h-text">TO ALLOCATE</label>       
                </div>

                <div className="t-list-tb-container">

                    <table className="t-table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col" style={{width:'220px'}}>Criteria</th>
                            <th scope="col">Marks (%)</th>
                            <th scope="col" >Action</th>
                            <th scope="col" ></th>
                            </tr>
                        </thead>
                        <tbody>

                        {criteria?.map((data,index)=>(

                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>
                                    {data.des}
                                </td>
                                <td>
                                    {data.mark}
                                </td>
                                                                
                                <td>
                                <button className="btn" style={{color:"#0F0934"}} 
                                onClick={(e) =>handleEdit(e,data.des,data.mark)}> 
                                    Edit 
                                </button>
                                </td>

                                <td>
                                <button className="btn" style={{color:"#0F0934"}} 
                                onClick={(e) =>handleDelete(e,data.des)}> 
                                    X 
                                </button>
                                </td>
                            </tr>
                        ))}
                        
                        </tbody>
                    </table>

                                

                
                </div>

            </div>

            
        </div>
    );
        


}