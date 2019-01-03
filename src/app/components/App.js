import React, {Component} from 'react';
import FABNav from './FABNav';
import Content from './Content';
import About from './About';
import LinkBar from './LinkBar';
import {Scrollbars} from 'react-custom-scrollbars';
import Fade from 'react-reveal/Fade';
import Scrollbar from 'react-smooth-scrollbar';

import BackToTop from './BackToTop';

import scrollToComponent from 'react-scroll-to-component';

import Typography from '@material-ui/core/Typography';
import { Scroller, scrollInitalState } from 'react-skroll'

/* Resources */
import backgroundIMG from '../../resources/street.jpg';
import Cover from 'react-video-cover';
import RainVid from '../../resources/rainBackground.mp4';


/* Anchor Scroll */
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { goToTop } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      displayBackToTop: false,
      goBackToTop: false,
      myChildRefs: "",
      goToExperience: false,
      goToProfile: false,
      goToProject: false,
    }


    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.setToTop = this.setToTop.bind(this);
    this.setToTopFalse = this.setToTopFalse.bind(this);
    this.getChildRefs = this.getChildRefs.bind(this);
    this.scrollToExperience = this.scrollToExperience.bind(this);
    this.setToExperienceFalse = this.setToExperienceFalse.bind(this);
    this.setToProfile = this.setToProfile.bind(this);
    this.setToProfileFalse = this.setToProfileFalse.bind(this);
    this.setToProject = this.setToProject.bind(this);
    this.setToProjectFalse = this.setToProjectFalse.bind(this);
    /* refs */

  }

  getChildRefs(childRefs){
    this.setState({
      myChildRefs: childRefs,
    });

    console.log("CHILD REFS: " + this.state.myChildRefs);
  }

  componentWillMount(){
    configureAnchors({scrollDuration: 2000})
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate() {

  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  handleScroll(){
    if(window.pageYOffset <= 600){
      this.setState({
        displayBackToTop: false,
      });
    } else {
      this.setState({
        displayBackToTop: true,
      });
    }
  }

  setToTop(){
    console.log("APP SEES BACK TO TOP");
    this.setState({
      goBackToTop: true,
    });
  }

  setToTopFalse(){
    console.log("RUNNING SET TO TOP FALSE");
    this.setState({
      goBackToTop: false,
    });
  }

  scrollToExperience(){
    console.log("setting to experience");
    this.setState({
      goToExperience: true,
    });
  }

  setToExperienceFalse(){
    console.log("setting to experience false");
    this.setState({
      goToExperience: false,
    });
  }

  setToProfile(){
    this.setState({
      goToProfile: true,
    });
  }

  setToProfileFalse(){
    this.setState({
      goToProfile: false,
    });
  }

  setToProject(){
    console.log("set to project ran!");
    this.setState({
      goToProject: true,
    });
  }

  setToProjectFalse(){
    this.setState({
      goToProject: false,
    });
  }

  render(){
    let styles = {

      outerContainer: {
      },

      innerContainer: {
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

      backgroundImg:{
        width: this.state.width,
        height: this.state.height,
        marginLeft:-8,
        marginTop:-8,
        overflow:"hidden",
      },

      backgroundDiv:{
        margin: 0,
        padding: 0,
      },



    }

    let btnStyle;

    if(this.state.displayBackToTop){
      btnStyle = {
        BackToTop: {
          position: 'fixed',
          bottom: this.state.height * 0.02,
          right: this.state.width * 0.020,
          zIndex: 5
        },
      };
    } else {
      btnStyle = {
        BackToTop: {
          display: "none",
        },
      };
    }



    const videoOptions = {
      src: "src/resources/websiteBackground.mp4",
      autoPlay: true,
      muted: true,
      loop: true,
    };

    const { scroll } = this.state;



    return(

        <div >

            <img src={backgroundIMG} style={styles.backgroundImg}/>

            <div style = {styles.innerContainer}>


                <div style={styles.Content}>
                  <Content goBackToTop={this.state.goBackToTop}
                           setToTopFalse={this.setToTopFalse}
                           goToExperience={this.state.goToExperience}
                           setToExperienceFalse={this.setToExperienceFalse}
                           goToProfile = {this.state.goToProfile}
                           setToProfileFalse = {this.setToProfileFalse}
                           goToProject = {this.state.goToProject}
                           setToProjectFalse = {this.setToProjectFalse}
                           onRef={ref => (this.content = ref)}/>
                </div>


              <div style={styles.FABNav}>
                <FABNav scrollToExperience={this.scrollToExperience}
                        setToTop={this.setToTop}
                        setToProject={this.setToProject}/>
              </div>

              <div style={btnStyle.BackToTop}>
                <BackToTop setToTop={this.setToTop}/>
              </div>




          </div>


        </div>

    );
  }

}
export default App;
