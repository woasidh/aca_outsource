import React from 'react'
import './StepContainer.css'
import s1_bold from '../../../../../images/signup1_bold.png'
import s1_light from '../../../../../images/signup1_light.png'
import s2_bold from '../../../../../images/signup2_bold.png'
import s2_light from '../../../../../images/signup2_light.png'
import s3_bold from '../../../../../images/signup3_bold.png'
import s3_light from '../../../../../images/signup3_light.png'
import next from '../../../../../images/next.png'

function StepContainer(props) {

    const currentStep = props.currentStep;
    console.log(props.currentStep);

    const firProc = ()=>{
        let firImg = s1_light;
        let active = "";
        if(currentStep === 0){
            firImg = s1_bold;
            active = "active";
        }
        return(
            <div style={{ backgroundImage: `url(${firImg})` }} className= {`signup__step1 ${active}`}></div>
        );
    }

    const secProc = ()=>{
        let secImg = s2_light;
        let active = "";
        if(currentStep === 1){
            secImg = s2_bold;
            active = "active";
        }
        return(
            <div style={{ backgroundImage: `url(${secImg})` }} className={`signup__step1 ${active}`}>
            </div>
        );
    }

    const thdProc = ()=>{
        let thdImg = s3_light;
        let active = "";
        if(currentStep === 2){
            thdImg = s3_bold;
            active = "active";
        }
        return(
            <div style={{ backgroundImage: `url(${thdImg})` }} className={`signup__step1 ${active}`}>
            </div>
        );
    }

    return (
        <div className="signup__stepContainer">
            {firProc()}
            <img src={next} alt="next" />
            {secProc()}
            <img src={next} alt="next" />
            {thdProc()}
        </div>
    )
}

export default StepContainer
