import React, { useState } from "react";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

//Import custom Numeral.js locale to separate thousands with spaces and decimals with '.';
import numeral from "numeral";

import { KeyCodes } from "./Components/Keycodes";

function App() {
  const [number, setNumber] = useState({
    firstNumber: "",
    secondNumber: "",
    operator: "",
    result: "0",
    displayed: "0",
    cButton: "AC",
    cButtonCheck: false,
    numToReset: false,
    sizeOfOutput: "1em",
  });

  KeyCodes();

  //Format numbers
  function prettyNumbers(num, format = "0,0.[00000000]") {
    return numeral(num).format(format); //
  }

  //Resize numbers
  function resizeNumbers() {
    //First number resize
    if (!number.operator && !number.secondNumber) {
      if (number.firstNumber.length > 4) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.9em",
        }));
      }

      if (number.firstNumber.length > 5) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.75em",
        }));
      }

      if (number.firstNumber.length > 6) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.65em",
        }));
      }

      if (number.firstNumber.length > 7) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.60em",
        }));
      }

      if (number.firstNumber.length > 8) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.55em",
        }));
      }
    }

    //Second number resize
    if (number.operator && number.firstNumber) {
      if (!number.secondNumber) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "1em",
        }));
      }

      if (number.secondNumber.length > 4) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.90em",
        }));
      }

      if (number.secondNumber.length > 5) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.75em",
        }));
      }

      if (number.secondNumber.length > 6) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.65em",
        }));
      }

      if (number.secondNumber.length > 7) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.60em",
        }));
      }

      if (number.secondNumber.length > 8) {
        setNumber((prevState) => ({
          ...prevState,
          sizeOfOutput: "0.55em",
        }));
      }
    }
  }

  //Resize final number
  function resizeFinalNumber(result) {
    if (result.length > 4) {
      setNumber((prevState) => ({
        ...prevState,
        sizeOfOutput: "0.9em",
      }));
    }

    if (result.length > 5) {
      setNumber((prevState) => ({
        ...prevState,
        sizeOfOutput: "0.75em",
      }));
    }

    if (result.length > 6) {
      setNumber((prevState) => ({
        ...prevState,
        sizeOfOutput: "0.65em",
      }));
    }

    if (result.length > 7) {
      setNumber((prevState) => ({
        ...prevState,
        sizeOfOutput: "0.60em",
      }));
    }

    if (result.length > 8) {
      setNumber((prevState) => ({
        ...prevState,
        sizeOfOutput: "0.55em",
      }));
    }

    if (result.length > 10) {
      setNumber((prevState) => ({
        ...prevState,
        sizeOfOutput: "0.40em",
      }));
    }
  }

  //Reset size of numbers
  function resetSize() {
    setNumber((prevState) => ({
      ...prevState,
      sizeOfOutput: "1em",
    }));
  }

  //Orange buttons
  function turnOnOrange(operator) {
    setNumber((prevState) => ({
      ...prevState,
      isOrange: true,
      whichOrange: operator,
    }));
    operator.className = "orangeActivated";
  }

  function turnOffOrange() {
    number.whichOrange.className = "orangeDisabled";
    setNumber((prevState) => ({
      ...prevState,
      whichOrange: null,
    }));
  }

  //Get clicked number
  function getNumber(e) {
    //If numToReset state is false ,I can't start new calculations with completely different number without pressing C button.
    //I can continue with old result.
    if (number.numToReset === false) {
      //If there's no operator stored in operator state ,number will be stored in firstNumber state.
      if (!number.operator) {
        if (number.firstNumber.length < 10) {
          const num = number.firstNumber + e.target.name;
          setNumber((prevState) => ({
            ...prevState,
            firstNumber: num,
            displayed: prettyNumbers(num),
          }));
        } else {
          return;
        }
      }

      //If there's some operator ,number will be stored in secondNumber state.
      if (number.operator) {
        if (number.secondNumber.length < 10) {
          const num = number.secondNumber + e.target.name;
          setNumber((prevState) => ({
            ...prevState,
            secondNumber: num,
            displayed: prettyNumbers(num),
          }));
        } else {
          return;
        }
      }
    } else {
      //numToReset state is set to true everytime when '=' is clicked.
      //Now I'm able to start new calculations by pressing number without pressing C button.

      //If there's no operator ,number which I click is stored in firstNumber state.
      if (!number.operator) {
        const num = e.target.name;
        setNumber((prevState) => ({
          ...prevState,
          firstNumber: num,
          secondNumber: "",
          operator: "",
          displayed: num,
          numToReset: false,
        }));
        resetSize();
      }

      //If there's operator ,number will be stored in secondNumber state.
      if (number.operator) {
        const num = number.secondNumber + e.target.name;
        setNumber((prevState) => ({
          ...prevState,
          secondNumber: num,
          displayed: num,
          numToReset: false,
        }));
      }
    }

    //At the beginning cButtonCheck is set to false and cButton is set to : 'AC'.
    //After click on number fuction fires and set cButtonCheck to true, and cButton to 'C'
    //C button value is set to props.
    switchToC();
    resizeNumbers();
    if (number.whichOrange) {
      turnOffOrange();
    }
  }

  //Get operator which I've clicked and store it in operator state.
  function operator(e) {
    let newOperator = "";
    let oldOperator = number.operator;
    let result;

    if (number.firstNumber && number.operator && number.secondNumber) {
      newOperator = e.target.name;

      if (oldOperator === "+") {
        result = Number(number.firstNumber) + Number(number.secondNumber);
      }

      if (oldOperator === "-") {
        result = Number(number.firstNumber) - Number(number.secondNumber);
      }

      if (oldOperator === "x") {
        result = Number(number.firstNumber) * Number(number.secondNumber);
      }

      if (oldOperator === "/") {
        result = Number(number.firstNumber) / Number(number.secondNumber);
      }

      setNumber((prevState) => ({
        ...prevState,
        firstNumber: result,
        displayed: result,
        operator: newOperator,
        secondNumber: "",
      }));
      turnOnOrange(e.target);
    } else {
      let operator = e.target;
      setNumber((prevState) => ({
        ...prevState,
        operator: operator.name,
      }));

      if (!number.whichOrange) {
        turnOnOrange(e.target);
        console.log(number.whichOrange);
      }

      if (number.whichOrange) {
        number.whichOrange.className = "orangeDisabled";
        turnOnOrange(e.target);
        console.log(number.whichOrange);
      }

      turnOnOrange(operator);
    }
  }

  //Get result and calculate results depending on operator value.
  function result() {
    const firstNumber = Number(number.firstNumber);
    const secondNumber = Number(number.secondNumber);
    let result = "";

    //PLUS
    if (number.operator === "+") {
      result = firstNumber + secondNumber;
      setNumber((prevState) => ({
        ...prevState,
        firstNumber: result,
        secondNumber: "",
        result: result,
        operator: "",
        displayed: prettyNumbers(result),
        numToReset: true,
      }));
      resizeFinalNumber(prettyNumbers(result));
      //MINUS
    } else if (number.operator === "-") {
      result = firstNumber - secondNumber;
      setNumber((prevState) => ({
        ...prevState,
        firstNumber: result,
        secondNumber: "",
        result: result,
        operator: "",
        displayed: prettyNumbers(result),
        numToReset: true,
      }));
      resizeFinalNumber(prettyNumbers(result));
      //MULTIPLY
    } else if (number.operator === "x") {
      result = firstNumber * secondNumber;
      setNumber((prevState) => ({
        ...prevState,
        firstNumber: result,
        secondNumber: "",
        result: result,
        operator: "",
        displayed: prettyNumbers(result),
        numToReset: true,
      }));
      resizeFinalNumber(prettyNumbers(result));
      //DIVIDE
    } else if (number.operator === "/") {
      result = firstNumber / secondNumber;
      let floatingPoint = (firstNumber % secondNumber) / secondNumber;
      let processedFloatingPoint = String(floatingPoint).replace("0.", "");

      if (processedFloatingPoint.length > 4) {
        //Fixing firstNumber to maximum of 4 decimals.
        let numberToString = String(result);
        let dot = numberToString.indexOf(".");
        let firstHalf = numberToString.substr(0, dot);
        let secondHalf = numberToString.substr(dot, 5);
        let fixedResult = Number(firstHalf + secondHalf);
        setNumber((prevState) => ({
          ...prevState,
          firstNumber: fixedResult,
          secondNumber: "",
          result: result,
          operator: "",
          displayed: prettyNumbers(result, "0,0.[0000]"),
          numToReset: true,
        }));
        resizeFinalNumber(prettyNumbers(result, "0,0.[0000]"));
      } else {
        setNumber((prevState) => ({
          ...prevState,
          firstNumber: result,
          secondNumber: "",
          result: result,
          operator: "",
          displayed: prettyNumbers(result),
          numToReset: true,
        }));
        resizeFinalNumber(prettyNumbers(result));
      }
    }
  }

  //Clear all states and start again.
  function clear() {
    setNumber((prevState) => ({
      ...prevState,
      firstNumber: "",
      secondNumber: "",
      result: "0",
      operator: "",
      displayed: "0",
      numToReset: false,
    }));

    switchToAc();
    resetSize();
    if (number.whichOrange) {
      turnOffOrange();
    }
  }

  //Switch to 'C' button, when number is clicked and states are not empty.
  function switchToC() {
    if (number.cButtonCheck === false) {
      setNumber((prevState) => ({
        ...prevState,
        cButtonCheck: true,
        cButton: "C",
      }));
    }
  }

  //Switch to 'AC' button, when Clear function is called.
  function switchToAc() {
    setNumber((prevState) => ({
      ...prevState,
      cButtonCheck: false,
      cButton: "AC",
    }));
  }

  //Operator Negation
  function negation() {
    if (number.firstNumber && !number.secondNumber) {
      const num = Number(number.firstNumber);
      if (num > 0) {
        setNumber((prevState) => ({
          ...prevState,
          firstNumber: Math.abs(num) * -1,
          displayed: Math.abs(num) * -1,
        }));
      } else if (num < 0) {
        setNumber((prevState) => ({
          ...prevState,
          firstNumber: Math.abs(num),
          displayed: Math.abs(num),
        }));
      }
    }

    if (number.firstNumber && number.secondNumber) {
      const num = Number(number.secondNumber);
      if (num > 0) {
        setNumber((prevState) => ({
          ...prevState,
          secondNumber: Math.abs(num) * -1,
          displayed: Math.abs(num) * -1,
        }));
      } else if (num < 0) {
        setNumber((prevState) => ({
          ...prevState,
          secondNumber: Math.abs(num),
          displayed: Math.abs(num),
        }));
      }
    }

    if (number.result) {
      const num = Number(number.result);
      if (num > 0) {
        setNumber((prevState) => ({
          ...prevState,
          displayed: Math.abs(num) * -1,
        }));
      } else if (num < 0) {
        setNumber((prevState) => ({
          ...prevState,
          displayed: Math.abs(num),
        }));
      }
    }
  }

  //Operator decimal
  function decimal() {
    if (number.numToReset === false) {
      if (
        (!number.firstNumber && !number.secondNumber) ||
        (number.firstNumber && !number.secondNumber)
      ) {
        if (number.firstNumber.includes(".")) {
          setNumber((prevState) => ({
            ...prevState,
            firstNumber: "NaN",
            displayed: "NaN",
          }));
          return;
        } else {
          const num = Number(number.firstNumber) + ".";
          setNumber((prevState) => ({
            ...prevState,
            firstNumber: num,
            displayed: num,
          }));
        }
      }

      if (number.firstNumber && number.secondNumber) {
        if (number.secondNumber.includes(".")) {
          setNumber((prevState) => ({
            ...prevState,
            firstNumber: "NaN",
            displayed: "NaN",
          }));
        } else {
          const num = Number(number.secondNumber) + ".";
          setNumber((prevState) => ({
            ...prevState,
            secondNumber: num,
            displayed: num,
          }));
        }
      }
    } else {
      clear();
    }
  }

  //Operator percent
  function percent() {
    if (number.firstNumber && !number.secondNumber) {
      const num = Number(number.firstNumber) / 100;
      setNumber((prevState) => ({
        ...prevState,
        firstNumber: num,
        displayed: num,
      }));
    }

    if (number.firstNumber && number.secondNumber) {
      const num = Number(number.secondNumber) / 100;
      setNumber((prevState) => ({
        ...prevState,
        secondNumber: num,
        displayed: num,
      }));
    }
  }

  return (
    <div className="calculator">
      <Display display={number.displayed} style={number.sizeOfOutput} />
      <Buttons
        getNumber={getNumber}
        operator={operator}
        result={result}
        negation={negation}
        clear={clear}
        decimal={decimal}
        percent={percent}
        cButton={number.cButton}
      />
    </div>
  );
}

export default App;
