import { User } from "lucide-react"
import "./WorkflowSection.css"

const WorkflowStep = (props)=>{
    return (
        <div className="step-container">
            <div className="step-icon-container">
                {props.children}
            </div>
            <div className="step-body-container ">
                <div className="step-header text">
                    <h2>{props.header}</h2>
                </div>
                <div className="step-subtext text">
                    <p>{props.subtext}</p>
                </div>
            </div>
        </div>
    )
}

const WorkflowSection = ()=>{
    return (
        <div className="wf-container">
            <div className="wf-header">
                <h1>Come Funziona</h1>
            </div>
            <WorkflowStep header="prova" subtext="sottotesto prova1234">
                <User size={48} color="white" strokeWidth={1.5}/>
            </WorkflowStep>
            <WorkflowStep header="prova" subtext="sottotesto prova1234">
                <User size={48} color="white" strokeWidth={1.5}/>
            </WorkflowStep>
            <WorkflowStep header="prova" subtext="sottotesto prova1234">
                <User size={48} color="white" strokeWidth={1.5}/>
            </WorkflowStep>
        </div>
    )
}



export default WorkflowSection