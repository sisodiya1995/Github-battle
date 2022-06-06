import React from "react";
import Header from "./header";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      color : ""
    };
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  handleClick = (event) => {
    let val = event.target.innerText;
    console.log(val);

    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${val}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data : data ,
        color :"red"
      
      }));
  };
  render() {
    if (!this.state.data) {
      return <h1>Fetching...</h1>;
    }

    return (
      <>
      <Header/>
      <div className="buttons">
      {["All", "Javascript", "Ruby", "Java", "CSS", "Python"].map((elm) => {
          return (
            <button className="btn" id ={this.state.color}
              onClick={(event) => {
                this.handleClick(event);
              }}
            >
              {elm}
            </button>
          );
        })}
      </div>
       

        <div className="all_repo">
          {" "}
          {this.state.data.items.map((repo, i) => {
            return (
              <>
                <div key={i} className="repo-info">
                  <div className="info">
                    <p className="count"> # {1 + i}</p>
                    <img alt="img" src={repo.owner.avatar_url} />
                    <p className="name">{repo.name}</p>
                  </div>

                  <div className="icons">
                    <p className="repo-names">
                      {" "}
                      <i class="fas fa-user"></i> {repo.name} 
                    </p>
                    <p className="names">
                      <i class="fas fa-star"></i> {repo.stargazers_count} stars
                    </p>
                    <p className="names">
                      {" "}
                      <i class="fas fa-code-branch"></i> {repo.forks} forks
                    </p>
                    <p className="names">
                      <i class="fas fa-exclamation-triangle"></i>{" "} 
                      {repo.open_issues} open issues
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Dashboard;
