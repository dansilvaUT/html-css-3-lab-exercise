import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggleView: false
    }
  }

  toggleMenu = () => {
    this.setState({ toggleView: !this.state.toggleView })
  }

  render() {
    return (
      <div className="App">
        <section className="landing">
          <header className="navbar">
            <h4>Start Bootstrap</h4>
            <nav className="nav-list">
              <span>Services</span>
              <span>Portfolio</span>
              <span>About</span>
              <span>Team</span>
              <span>Contact</span>
            </nav>
            <div className="dropdown" onClick={this.toggleMenu}>Menu</div>
            {this.state.toggleView
              ? (
                <nav className="dropdown-menu">
                  <span>Services</span>
                  <span>Portfolio</span>
                  <span>About</span>
                  <span>Team</span>
                  <span>Contact</span>
                </nav>
              )
              : null}
          </header>
          <section className="landing-middle">
            <h3>Welcome to Our Studio!</h3>
            <h1> It's nice to meet you</h1>
            <button>Tell me more</button>
          </section>
        </section>
      </div>
    );
  }

}

export default App;
