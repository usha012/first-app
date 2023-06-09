import React, {useEffect, useState} from 'react'

export const AboutUs = (props) => {
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color:'black'
    // })
    
    const [btntext, setBtnText] = useState("Enable Dark Mode")
    // const [myStyle,setMyStyle] = useState()

    // const toggleStyle =()=>{
    //     if(myStyle.color == "white"){
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    let myStyle = {
        color:props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white'
    }

    // useEffect(()=>{
    //     console.log(props,'props')
    //     setMyStyle({color:`${props.mode === 'dark'?'white':'black'}`,
    //         backgroundColor: `${props.mode === 'light'?'white':'black'}`
    //     })
    // },[props.mode])

    const [bgDark, setBgDark] = useState("light")

    useEffect(()=>{
        if(props.mode=='dark'){
            setBgDark('dark')
        }else{

            setBgDark(props.mode)
        }
        console.log(props)
    },[props.mode])



    return (
        <>
            {/* <div className='container py-5 mb-5' style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                <div className='row justify-content-center'>
                    <div className="col-lg-8">
                        <div className="accordion" id="accordionExample" >
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={toggleStyle} className="btn btn-primary my-3" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>{btntext}</button>
                    </div>
                </div>
            </div> */}


            <div className='container-fluid py-5 mb-5' style={{backgroundColor: `lighten(${props.bgcolor}, 50% )` ,color:props.colorchange}}>
                <div className='row justify-content-center'>
                    <div className="col-lg-8">
                        <div className="accordion" id="accordionExample" >
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    {/* <button className={`accordion-button bg-${bgDark}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button> */}
                                    {/* <button className={`accordion-button`} style={{backgroundColor: props.bgcolor,color:props.colorchange}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button> */}
                                      <button className={`accordion-button`} style={{backgroundColor: props.bgcolor,color:props.colorchange}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button onClick={toggleStyle} className="btn btn-primary my-3" style={{backgroundColor: props.bgcolor,color:props.colorchange}}>{btntext}</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}
