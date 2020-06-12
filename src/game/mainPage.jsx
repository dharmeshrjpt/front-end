import React, { Component } from "react";
import images from "./images";

class MainPage extends Component {
  state = {
    score1: 0,
    score2: 0,
    flag1: 1,
    flag2: 1,
    number: 0,
  };
  winnerHandel = () => {
    (this.state.score1 > 20 && alert("Player1 Wins")) ||
      (this.state.score2 > 20 && alert("Player2 wins"));
  };
  updateNumber = () => {
    this.setState({
      number: Math.floor(Math.random() * 6 + 1),
    });
  };
  onClickHandel1 = () => {
    this.setState({
      score1: this.state.score1 + this.state.number,
      flag1: 0,
      flag2: 1,
    });
  };
  onClickHandel2 = () => {
    this.setState({
      score2: this.state.score2 + this.state.number,
      flag1: 1,
      flag2: 0,
    });
  };
  resetHandel = () => {
    this.setState({ score1: 0, score2: 0, flag1: 1, flag2: 1, number: 0 });
  };
  render() {
    return (
      <div className="tc">
        <div
          className=" fl w-50 pa7 left-element  bg-washed-red br tc"
          style={{ position: "absolute", height: "100%", width: "50%" }}
        >
          <h1
            className="b--solid"
            style={{
              position: "absolute",

              top: 20,
            }}
          >
            PLAYER 1
          </h1>
          <font
            style={{
              fontSize: 100,
              position: "absolute",
              top: 70,
              left: "31%",
              WebkitTextStroke: 1,
            }}
            className=" b underline"
          >
            score
          </font>
          <div>
            <font
              style={{
                fontSize: 50,
                WebkitTextStroke: 1,
              }}
              className=" b underline"
            >
              {this.state.score1 + this.state.number}
            </font>
            <button
              className="btn-lg shadow-3"
              style={{
                position: "absolute",
                bottom: 300,
                left: "45%",
                WebkitTextStroke: 1,
              }}
              onClick={() => {
                this.updateNumber();
                this.onClickHandel1();
              }}
              disabled={!this.state.flag1}
            >
              play
            </button>
          </div>
        </div>
        <div
          className="fl w-50 pa7 bg-washed-green md1 tc "
          style={{
            position: "absolute",
            right: 0,
            height: "100%",
            width: "50%",
          }}
        >
          <h1
            className="b--solid "
            style={{
              position: "absolute",
              top: 20,
            }}
          >
            PLAYER 2
          </h1>
          <font
            style={{
              fontSize: 100,
              position: "absolute",
              top: 70,
              left: "31%",
              WebkitTextStroke: 1,
            }}
            className=" b underline"
          >
            score
          </font>
          <div>
            <font
              style={{
                fontSize: 50,
                WebkitTextStroke: 1,
              }}
              className=" b underline"
            >
              {this.state.score2}
            </font>
          </div>
          <button
            className="btn-lg shadow-3"
            style={{
              position: "absolute",
              bottom: 300,
              left: "45%",

              WebkitTextStroke: 1,
            }}
            onClick={() => {
              this.updateNumber();
              this.onClickHandel2();
              this.winnerHandel();
            }}
            disabled={!this.state.flag2}
          >
            play
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${images[this.state.number - 1]})`,
            backgroundSize: "cover",
            position: "absolute",
            right: 1,
            left: 1,
            bottom: 350,
            height: 140,
            width: 140,
          }}
          className="container shadow-3 br-pill "
        ></div>
        <button
          className="btn-lg shadow-3"
          style={{
            position: "absolute",
            left: "47%",
            bottom: 250,
            WebkitTextStroke: 1,
          }}
          onClick={this.resetHandel}
        >
          Reset
        </button>
        {this.winnerHandel()}
      </div>
    );
  }
}

export default MainPage;
