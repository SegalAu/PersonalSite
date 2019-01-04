import React from 'react';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Profile from './Profile';


import { Scroller, scrollInitalState } from 'react-skroll'



import Typography from '@material-ui/core/Typography';
import TextLoop from "react-text-loop";
import Fade from 'react-reveal/Fade';


import Divider from '@material-ui/core/Divider';

/* Anchor Scroll */
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { goToTop } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'


class TitleBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      revealProjects: false,
      revealExperience: false,
      goBackToTop: this.props.goBackToTop,
      scroll: scrollInitalState,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    this.props.onRef(this);
    console.log("running go to top");

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    this.props.onRef(undefined);
  }

  componentDidUpdate(){
    if(this.props.goBackToTop){
      console.log("Content sees BACK TO TOP");
    }
    if(this.props.goToProject){
      console.log("content sees GO TO PROJECT");
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  handleScroll(){
    console.log("running handle scroll");
    var y = window.scrollY;
    console.log("y : " + y);
    console.log("page y offset: " + window.pageYOffset);
    if(window.pageYOffset >= 1200 || y >= 1200){
      this.setState({
        revealProjects: true,
      });
    }
    if(window.pageYOffset >= 120 || y > 120){
      console.log("setting experience to visible");
      this.setState({
        revealExperience: true,
      })
    }
  }



  render() {
    let styles = {
      title: {
        height: "auto",
        width: "100%",
        overflow: "hidden",
      },

      contentMiddle: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        top: this.state.height * 0.1,
        left: this.state.width * 0.1,
        marginRight: this.state.width * 0.1,
        zIndex: 5,
      },

      ContentDivStyle : {
        width: "100%",
        position: 'relative',
        paddingTop: this.state.height * 0.15,
      },
      ContentDivStyle2:{
        width: "100%",
        position: 'relative',
      },



    };

    const { scroll } = this.state;



    return(
      <div>



        <div style={styles.title}>

          <section>
            <div  style={styles.ContentDivStyle2}>
              <Fade bottom duration={1500}>
                <About style = {styles.About}
                      goBackToTop={this.props.goBackToTop}
                      setToTopFalse={this.props.setToTopFalse}
                      />
              </Fade>
            </div>
          </section>




          <section>
            <div style = {styles.ContentDivStyle} id="experienceContainer">
              <Fade when={this.state.revealExperience} duration={2000}>
                <Experience getChildRefs={this.props.getChildRefs}
                            goToExperience={this.props.goToExperience}
                            setToExperienceFalse={this.props.setToExperienceFalse}
                            />
              </Fade>
            </div>
          </section>




          <section>
            <div style = {styles.ContentDivStyle} >
              <Fade when={this.state.revealProjects} duration={2000}>
                <Projects goToProject = {this.props.goToProject}
                          setToProjectFalse = {this.props.setToProjectFalse}/>
              </Fade>
            </div>
          </section>






          <br/><br/><br/><br/><br/><br/><br/><br/>



        </div>


      </div>
    );
  }
}
export default TitleBar;
