import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setInterval(() => {
      let ran = Math.random() * 100;
      ran = Math.ceil(ran);
      fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            img: data.data.memes[ran].url,
          });
        })
        .catch((err) => console.log(err));
    }, 3000);
  }

  render() {
    return this.state.img ? (
      <img src={this.state.img} alt="problemo" />
    ) : (
      <h1>sad</h1>
    );
  }
}

export default App;
