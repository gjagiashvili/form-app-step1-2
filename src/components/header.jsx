import React from "react";

function Header(props) {
    const bgColor = (step) => {
        return props.step === step ? 'hsl(243, 100%, 40%)' : 'transparent';
    };

    return (
        <div>
            
            <div className="wrapperHeader">
                <div className="wrapperElement" style={{ backgroundColor: bgColor(1) }}>1</div>
                <div className="wrapperDetails">
                    <h5 className="headerNumbers">Step 1</h5>
                    <h5 className="headerNumbersTitle"><b>YOUR INFO</b></h5><br></br>
                </div>
                <div className="wrapperElement" style={{ backgroundColor: bgColor(2) }}>2</div>
                <div className="wrapperDetails">
                    <h5 className="headerNumbers">Step 2</h5>
                    <h5 className="headerNumbersTitle"><b>SELECT PLANS</b></h5><br></br>
                </div>
                <div className="wrapperElement" style={{ backgroundColor: bgColor(3)}}>3</div>
                <div className="wrapperDetails">
                    <h5 className="headerNumbers">Step 3</h5>
                    <h5 className="headerNumbersTitle"><b>ADD-ONS</b></h5><br></br>
                </div>
                <div className="wrapperElement" style={{ backgroundColor: bgColor(4)}}>4</div>
                <div className="wrapperDetails">
                    <h5 className="headerNumbers">Step 4</h5>
                    <h5 className="headerNumbersTitle"><b>SUMMARY</b></h5><br></br>
                </div>
            </div>
        </div>
    )
}

export default Header;