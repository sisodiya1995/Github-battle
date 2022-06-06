import React from "react";
import Header from "./header";
class Battle extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      userdata: "",
      userdata2: "",
      name2: "",
      isBattle: false,
    };
  }
  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleChange2 = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handlebattle = () => {

    // this.setState({
    //   isBattle: true,
    // });

    this.setState((prev) =>{
      return {
        isBattle : !prev.isBattle ,
        
      }
    })
  };

  handleremove = () => {
    this.setState({
      userdata: "",
      name: "",
    });
  };
  handleremove2 = () => {
    this.setState({
      userdata2: "",
      name2: "",
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.name}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          userdata: data,
        })
      );
  };

  handleClick2 = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.name2}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          userdata2: data,
        })
      );
  };

  render() {
    return (
      <>
      <Header/>
        {this.state.isBattle === false ? (
          <div>
            <div className="battle">
              <small className="instruction">Instructions</small>
              <div className="battle-info">
                <div className="title">
                  <p className="titles">Enter two Github users</p>
                  <i class="fas fa-user-friends"></i>
                </div>
                <div className="title">
                  <p className="titles">Battle</p>
                  <i class="fas fa-fighter-jet"></i>
                </div>
                <div className="title">
                  <p className="titles">See the winner</p>
                  <i class="fas fa-trophy"></i>
                </div>
              </div>
            </div>

            <div className="form">
              <p className="title-2">Players</p>
              <form>
                <p>First Player</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Github user name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <button
                  className="btn-2"
                  type="submit"
                  onClick={(event) => this.handleClick(event)}
                >
                  Submit
                </button>
              </form>
              {this.state.userdata === "" ? (
                ""
              ) : (
                <div className="user">
                  <img
                    src={this.state.userdata.avatar_url}
                    alt="img"
                    className="user-img"
                  />
                  <button className="btn-5"  onClick={this.handleremove}>X</button>
                </div>
              )}

              <form>
                <p>Second Player</p>
                <input
                  type="text"
                  name="name2"
                  placeholder="Github user name"
                  onChange={this.handleChange2}
                  value={this.state.name2}
                />
                <button
                  className="btn-2"
                  type="submit"
                  onClick={(event) => this.handleClick2(event)}
                >
                  Submit
                </button>
              </form>
              {this.state.userdata2 === "" ? (
                ""
              ) : (
                <div className="user-1">
                  <img
                    src={this.state.userdata2.avatar_url}
                    alt="img"
                    className="user-img"
                  />
                  <button className="btn-5" onClick={this.handleremove2}>X</button>
                </div>
              )}

              {this.state.userdata && this.state.userdata2 ? (
                <button className="bttle-btn" onClick={this.handlebattle}>
                  {" "}
                  Battle
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="profiles">
            <div className="user-profile">
              <div className="info">
                <p className="tag">
                  {this.state.userdata.public_repos >
                  this.state.userdata2.public_repos
                    ? "Winner"
                    : "Looser"}
                </p>
                <img src={this.state.userdata.avatar_url} alt="img" />
                <p className="score"> Score :{this.state.userdata.public_repos *2} </p>
                <p className="name">{this.state.userdata.name} </p>
              </div>
              <div className="icons">
                <p className="repo-names">
                  {" "}
                  <i class="fas fa-user"></i> {this.state.userdata.name}{" "}
                </p>
                <p className="names">
                  <i class="fas fa-users"></i> {this.state.userdata.followers}{" "}
                  followers
                </p>
                <p className="names">
                  <i class="fas fa-user-alt"></i>{" "}
                  {this.state.userdata.following} following
                </p>
                <p className="names">
                  {" "}
                  <i class="fas fa-code"></i>{" "}
                  {this.state.userdata.public_repos} repositories
                </p>
              </div>
            </div>
            <div className="user-profile">
              <div className="info">
                <p className="tag">
                  {this.state.userdata2.public_repos >
                  this.state.userdata.public_repos
                    ? "Winner"
                    : "Looser"}
                </p>
                <img src={this.state.userdata2.avatar_url} alt="img" />
                <p className="score"> Score :{this.state.userdata2.public_repos *2} </p>
                <p className="name">{this.state.userdata2.name} </p>
              </div>
              <div className="icons">
              <p className="repo-names"><i class="fas fa-user"></i> {this.state.userdata2.name} </p>
              <p className="names"> <i class="fas fa-users"></i> {this.state.userdata2.followers} followers</p>
              <p className="names"> <i class="fas fa-user-alt"></i> {this.state.userdata2.following} following</p>
              <p className="names">  <i class="fas fa-code"></i> {this.state.userdata2.public_repos} repositories</p>
              </div>
             
            </div>
            <button onClick={this.handlebattle} className="reset">Reset</button>
          </div>
        )}
      </>
    );
  }
}

export default Battle;
