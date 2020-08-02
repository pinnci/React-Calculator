import React from 'react';

function Buttons(props){
    function clickEffectOn(e){
        let button = e.target;

        //Number Buttons
        if(button.className === '' || button.className === 'disabled'){
            button.className = 'activated';
        }

        //Silver Buttons
        if(button.id === 'silverButton'){
            button.className = 'silverActivated'
        }

        //Equals Button
        if(button.id === 'orangeButton'){
            button.className = 'orangeActivated'
        }
    }
    
    function clickEffectOff(e){
        let button = e.target;

        //Number Buttons
        if(button.className === 'activated'){
            button.className = 'disabled';
        }

        //Silver Buttons
        if(button.id === 'silverButton' && button.className === 'silverActivated'){
            button.className = 'silverDisabled'
        }

        //Equals Button
        if(button.id === 'orangeButton' && button.className === 'orangeActivated'){
            button.className = 'orangeDisabled'
        }
    }

    return(
        <div className='buttons-wrapper'>
            <div className='row'>
                <button 
                    name='c'
                    className=""
                    id="silverButton" 
                    onClick={props.clear}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    >{props.cButton}
                </button>

                <button 
                    name='+/-' 
                    className=""
                    id="silverButton" 
                    onClick={props.negation}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    >+/-
                    </button>

                <button 
                    name='%' 
                    className=""
                    id="silverButton" 
                    onClick={props.percent}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    >%
                    </button>

                <button 
                    name='/' 
                    onClick={props.operator}
                    id="orangeButton"
                    >/
                    </button>
            </div>

            <div className='row'>
                <button
                     name='7' 
                    onClick={props.getNumber} 
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >7
                    </button>

                <button 
                name='8' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >8
                    </button>

                <button 
                    name='9' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >9
                    </button>

                <button 
                    name='x' 
                    onClick={props.operator}
                    id="orangeButton"
                    >x
                    </button>
            </div>

            <div className='row'>
                <button 
                    name='4' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >4
                    </button>

                <button 
                    name='5' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >5
                    </button>

                <button 
                    name='6' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >6
                    </button>

                <button 
                    name='-' 
                    onClick={props.operator}
                    id="orangeButton"
                    >-
                    </button>
            </div>

            <div className='row'>
                <button 
                    name='1' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >1
                    </button>

                <button 
                    name='2' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >2
                    </button>

                <button 
                    name='3' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >3
                    </button>

                <button 
                    name='+' 
                    onClick={props.operator}
                    id="orangeButton"
                    >+
                    </button>
            </div>

            <div className='row'>
                <button 
                    name='0' 
                    onClick={props.getNumber}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >0</button>
                    
                <button 
                    name='.' 
                    onClick={props.decimal}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    className=''
                    >,
                    </button>

                <button 
                    name='=' 
                    className="" 
                    onClick={props.result}
                    onMouseDown={clickEffectOn}
                    onMouseUp={clickEffectOff}
                    id="orangeButton"
                    >=
                    </button>
            </div>
        </div>
    );
}

export default Buttons;