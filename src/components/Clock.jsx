import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "",
      seconds: this.props.timeInSeconds + 1,
    };
  }

  formatTime(timeInSeconds) {
    var seconds = timeInSeconds % 60;
    var minutes = Math.floor(timeInSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        seconds: this.state.seconds - 1,
        time: this.formatTime(this.state.seconds - 1),
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(this.interval);
      this.props.reset();
    }, (this.props.timeInSeconds + 1) * 1000);
  }

  render() {
    const { time, seconds } = this.state;
    //Keep the classes name. Try to inject your code and do not remove existing code
    return (
      <div className="clock">
        <span className="clock-text clock-value">{seconds !== 0 && time}</span>
      </div>
    );
  }
}

export default Clock;
