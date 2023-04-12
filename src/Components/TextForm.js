
import React, {useEffect, useState} from 'react'

export const TextForm = (props) => {

    const [btnColor,setBtnColor] = useState("primary")

    useEffect(()=>{
        if(props.mode=='light'){
            setBtnColor('primary')
        }else{

            setBtnColor(props.mode)
        }
        console.log(props)
    },[props.mode])


    const handleUPClick = ()=>{
        console.log("upper case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleCapClick = ()=>{
        console.log("upper case was clicked " + text);
        let newText = text.charAt(0).toUpperCase()+ text.substring(1).toLowerCase();
        setText(newText);
    }

    const handleLOClick = ()=>{
        console.log("upper case was clicked " + text);
        let newText = text.charAt(0).toUpperCase()+ text.substring(1).toLowerCase();
        setText(newText);
    }
   
    const handleOnChange = (event)=>{
        console.log("upper case was clicked");
        setText(event.target.value);

    }
    const handleclear = (event)=>{
        console.log("upper case was clicked");
        let newText = "";
        setText(newText);

    }



    const [text, setText] = useState('Enter text here2');
    return (
        <>

            <h2 className={`text-${props.mode === 'light' ? 'dark': 'light'}`}>{props.formheading} - {text}</h2>
            <div className="mb-3"  >
                <label htmlFor="mytext" className="form-label">Example textarea</label>
                <textarea className="form-control mb-3" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color:  props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="mytext" rows="8"></textarea>
                {/* <button className="btn btn-primary mx-3" onClick={handleUPClick}>Change to uppercase</button> */}
                <button className={`btn text-white mx-3 bg-${btnColor}`} onClick={handleUPClick}>Change to uppercase</button>
                <button className={`btn text-white mx-3 bg-${btnColor}`}  onClick={handleLOClick}>Change to Lowecase</button>
                <button className={`btn text-white mx-3 bg-${btnColor}`}  onClick={handleCapClick}>Change to Capitalize</button>
                <button className={`btn text-white mx-3 bg-${btnColor}`}  onClick={handleclear}>Clear</button>
            </div>
            <div className='row'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} read time</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
