import React, {Component} from 'react';
import FABNav from './FABNav';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render(){
    let styles = {
      FABNav: {
        position: 'absolute',
        backgroundColor: "white",
        color: "white",
        bottom: this.state.height * 0.075,
        right: this.state.width * 0.075,
      }
    }
    return(
      <div>
        <div>
          <header>
            <h1> Testing React SetUp </h1>
          </header>
        </div>


        <div style={styles.FABNav}>
          <FABNav/>
        </div>
      </div>
    );
  }

}
export default App;
