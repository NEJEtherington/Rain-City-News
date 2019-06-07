import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { getUser } from "../Api";
import Error from "./Error";

class LoginBox extends React.Component {
  state = {
    userNameInput: "",
    err: null
  };

  render() {
    const { err } = this.state;
    if (err) return <Error err={err} />;
    return (
      <form onSubmit={this.handleSubmit}>
        <GoogleFontLoader
          fonts={[
            {
              font: "IM Fell DW Pica SC",
              weights: [400, "400i"]
            },
            {
              font: "IM Fell DW Pica",
              weights: [400, "400i"]
            }
          ]}
        />
        <input
          style={{ fontFamily: "IM Fell DW Pica, monospaced" }}
          id="textInput"
          onChange={this.handleInput}
          type="text"
          placeholder="Enter username e.g. weegembump"
          require="true"
          size="30"
        />
        <button
          style={{ fontFamily: "IM Fell DW Pica SC, monospaced" }}
          disabled={!this.state.userNameInput}
        >
          Go!
        </button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    getUser(this.state.userNameInput)
      .then(user => {
        return this.props.loginUser(user.username);
      })
      .catch(({ response }) => {
        const errMessage = response.data.msg;
        const errCode = response.status;
        const err = { errMessage, errCode };
        this.setState({ err });
      });
  };

  handleInput = event => {
    this.setState({ userNameInput: event.target.value });
  };
}

export default LoginBox;
