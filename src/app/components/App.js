import React, {Component} from 'react';
import FABNav from './FABNav';
import Content from './Content';
import About from './About';
import LinkBar from './LinkBar';
import {Scrollbars} from 'react-custom-scrollbars';
import Fade from 'react-reveal/Fade';

import Cover from 'react-video-cover';
import RainVid from '../../resources/rainBackground.mp4';

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

      outerContainer: {
        width: '100vw',
        height: 'auto',
        position: "fixed",
        opacity: 0.9,
        top: 0,
        left: 0,
        zIndex: -1,
      },

      innerContainer: {

        paddingRight: 15,
      },

      FABNav: {
        position: 'fixed',
        top: this.state.height * 0.025,
        left: this.state.width * 0.025,
        zIndex: 5,
      },
      Content: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        top: this.state.height * 0.1,
        left: this.state.width * 0.1,
        marginRight: this.state.width * 0.1,
        zIndex: 5,
      },

      Skills: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      },

      Education: {

      },
    }


    const videoOptions = {
      src: "src/resources/websiteBackground.mp4",
      autoPlay: true,
      muted: true,
      loop: true,
    };


    return(
      <div >
        <div style = {styles.innerContainer}>


        <div style={styles.Content}>
          <Content/>
        </div>

        <div style={styles.FABNav}>
          <FABNav/>
        </div>




        </div>

      

      </div>
    );
  }

}
export default App;
