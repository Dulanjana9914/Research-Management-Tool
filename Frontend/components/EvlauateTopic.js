import "./CSS/topicsub.css";
import "./CSS/btrap.css";

export default function EvaluateTopic()  {

    return(
        <div className="topic-container">
            <div style={{backgroundColor:"#0F0934"}}>

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>

                <div className="s-from-container">
                    <form > 
                        <div className="mb-3">
                            <label className="s-form-label" >Group ID</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cUName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Group Name</label>
                            <input  className="s-input" disabled  type="text"  style={{width:"450px"}}  id="cName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Research Field</label>
                            
                            <input  className="s-input" disabled  type="text"  style={{width:"450px"}}  id="cName"
                                
                                />

                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Research Topic</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cName"   
                            />
                           
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Group Leader's email</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px"}}  id="cName"
                                
                            />
                        </div>

                        <div className="mb-3">
                            <label className="s-form-label">Comments (Optional)</label>
                            <input className="s-input" disabled type="text"  style={{width:"450px", height:"100px"}}  id="cName"
                                
                            />
                        </div>
                    </form>       
                </div> 

                

            </div>



            <div style={{backgroundColor:"white"}}>

            <div className="t-list-head-container">
                    <label className="h-text" > EVALUATE</label> <br  />
                    <label className="h-text"> <label style={{color:"#FF5631"}}> RESEARCH</label> PROJECT</label> <br />
                    <label className="h-text">TOPIC</label>
            </div>
            
            <div className="t-from-container" style={{marginLeft:'20%'}}>


                <button className="btn btn-success" style={{backgroundColor:"#00D8BE",fontSize:"2rem",marginLeft:"10%" }}>
                    Download Topic Details
                </button> <br/> <br/>


                <form >
                        
                        <div className="mb-3">
                            <label className="t-form-label">Comments (Optional)</label>
                            <input type="text"  style={{width:"450px", height:"100px"}}  id="cName"
                                
                            />
                        </div>



                        <button type="submit" className="btn btn-primary" style={{backgroundColor:"#0F0934",width:"200px",fontWeight:"bold",marginLeft:"45%"}} >Submit</button>
                    </form>

                    <div className="bottom-t-container">
                        <label className="bottom-t" style={{color:"#FF5631"}}> SLIIT</label> <label className="bottom-t"> Research</label> <br />
                        <label className="bottom-t"> Management Tool</label>
                    </div>
            
                </div>

            </div>
        </div>
    );
        


}