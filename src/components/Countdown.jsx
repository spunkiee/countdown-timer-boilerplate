import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onSetCountdownTime = (seconds) => {
    this.setState({
      count: seconds,
    });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <div className="clock-container">
          {count !== 0 && <Clock reset={this.reset} timeInSeconds={count} />}
          <CountdownForm onSetCountdownTime={this.onSetCountdownTime} />
        </div>
      </div>
    );
  }
}

export default Countdown;
