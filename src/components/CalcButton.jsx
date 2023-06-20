import { Component } from "react";
class CalcButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }

  handleMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };

  onTrigger = () => {
    this.props.parentCallback(this.props.dataText);
  };

  render() {
    return (
      <div
        onClick={this.onTrigger}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="d-flex justify-content-center align-items-center btn"
        style={{
          backgroundColor: this.state.isHover
            ? this.props.dataOnHoverBgColor
            : this.props.dataBgColor,
          color: this.props.dataTextColor,
          height: "75px",
          width: this.props.dataWidth,
          fontSize: "30px",
          textAlign: "center",
          borderRadius: "0px",
        }}
      >
        {this.props.dataText}
      </div>
    );
  }
}

// set default props
CalcButton.defaultProps = {
  dataText: "0",
  dataBgColor: "rgb(12, 19, 46)",
  dataTextColor: "white",
  dataWidth: "100px",
  dataOnHoverBgColor: "#011845",
  dataOnClick: () => {
    let inputArea = document.getElementById("inputArea");
    if (inputArea.innerHTML === " ") {
      inputArea.innerHTML = "1";
    } else {
      inputArea.innerHTML += "1";
    }
  },
};

export default CalcButton;