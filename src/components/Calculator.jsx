import CalcButton from "./CalcButton";
import { useState } from "react";

function Calculator(props) {
  const [history, setHistory] = useState(["", "", "", "", "", ""]);

  const updateHistory = (historyItem) => {
    const updatedHistory = [...history.slice(1, 5), historyItem];
    setHistory(updatedHistory);
  };

  const updateInputArea = (dataText) => {
    let inputArea = document.getElementById(props.dataId + "inp");
    if (inputArea.innerHTML === "") {
      inputArea.innerHTML = dataText;
    } else {
      inputArea.innerHTML += dataText;
    }
    document.getElementById(props.dataId + "answer").innerHTML = "";
  };

  const clearInputArea = () => {
    let inputArea = document.getElementById(props.dataId + "inp");
    let answerArea = document.getElementById(props.dataId + "answer");
    if (inputArea.innerHTML === "" && answerArea.innerHTML === "") {
      setHistory(["", "", "", "", "", ""]);
      return;
    }
    inputArea.innerHTML = "";
    answerArea.innerHTML = "";
  };

  const backspaceInputArea = () => {
    let inputArea = document.getElementById(props.dataId + "inp");
    if (inputArea.innerHTML !== "") {
      inputArea.innerHTML = inputArea.innerHTML.slice(0, -1);
    }
  };

  const calculateInputArea = () => {
    let inputArea = document.getElementById(props.dataId + "inp");
    if (inputArea.innerHTML === "") {
      return;
    }
    updateHistory(inputArea.innerHTML);
    let answerArea = document.getElementById(props.dataId + "answer");
    try {
      // eslint-disable-next-line no-eval
      answerArea.innerHTML = eval(inputArea.innerHTML).toFixed(7);
    } catch {
      answerArea.innerHTML = "Error";
    }
    inputArea.innerHTML = "";
    console.log("Answer: ", answerArea.innerHTML);
  };

  return (
    <div
      className="container text-end shadow my-5"
      style={{
        width: "400px",
        backgroundColor: "rgb(0, 0, 0)",
        borderRadius: "10px",
      }}
    >
      <div
        className="text-white d-block align-items-end text-end"
        style={{ height: "400px" }}
      >
        <div className="w-100 row" style={{ height: "250px" }}>
          <div
            id={props.dataId + "history"}
            className="col-12 fs-2 mt-auto text-secondary align-self-end p-0"
          >
            {history.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
        <div
          id={props.dataId + "inp"}
          className="fs-2 text-end w-100 p-3"
          style={{ height: "75px", zIndex: "1" }}
        ></div>
        <div
          className="fs-1 fw-bold text-end w-100 p-3"
          id={props.dataId + "answer"}
          style={{ height: "75px", zIndex: "1" }}
        ></div>
      </div>
      <div className="row">
        <CalcButton
          className="col-6"
          dataText="C"
          dataWidth="200px"
          parentCallback={clearInputArea}
          dataTextColor="red"
        />
        <CalcButton
          className="col-6"
          dataWidth="200px"
          dataText="&#8592;"
          parentCallback={backspaceInputArea}
          dataTextColor="red"
        />
      </div>
      <div className="row">
        <CalcButton
          className="col-3"
          dataText="7"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="8"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="9"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="/"
          dataTextColor="orange"
          parentCallback={updateInputArea}
        />
      </div>

      <div className="row">
        <CalcButton
          className="col-3"
          dataText="4"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="5"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="6"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="*"
          dataTextColor="orange"
          parentCallback={updateInputArea}
        />
      </div>

      <div className="row">
        <CalcButton
          className="col-3"
          dataText="1"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="2"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="3"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="-"
          dataTextColor="orange"
          parentCallback={updateInputArea}
        />
      </div>

      <div className="row">
        <CalcButton
          className="col-3"
          dataText="0"
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="."
          parentCallback={updateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="="
          dataTextColor="green"
          parentCallback={calculateInputArea}
        />
        <CalcButton
          className="col-3"
          dataText="+"
          dataTextColor="orange"
          parentCallback={updateInputArea}
        />
      </div>
    </div>
  );
}

Calculator.defaultProps = {
  dataId: "id",
};

export default Calculator;