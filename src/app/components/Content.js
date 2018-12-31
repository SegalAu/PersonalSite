import React from 'react';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Profile from './Profile';


/* Resources */


import Typography from '@material-ui/core/Typography';
import TextLoop from "react-text-loop";
import Fade from 'react-reveal/Fade';


import Divider from '@material-ui/core/Divider';




class TitleBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      revealProjects: false,
      revealExperience: false,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  handleScroll(){
    if(window.pageYOffset >= 650){
      this.setState({
        revealProjects: true,
      });
    } else if(window.pageYOffset >=0){
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
      }

    };

    const videoOptions = {
      src: "src/resources/websiteBackground.mp4",
      autoPlay: true,
      muted: true,
      loop: true,
    };


    return(
      <div>
        <div style={styles.title}>


          <div  style={styles.ContentDivStyle2}>
            <Fade bottom duration={1500}>
              <About style = {styles.About}/>
            </Fade>
          </div>




          <div style = {styles.ContentDivStyle} >
            <Fade when={this.state.revealExperience} duration={2000}>
              <Experience />
            </Fade>
          </div>





          <div style = {styles.ContentDivStyle} >
            <Fade when={this.state.revealProjects} duration={2000}>
              <Projects />
            </Fade>
          </div>



          <br/><br/><br/><br/><br/><br/><br/><br/>



        </div>
      </div>
    );
  }
}
export default TitleBar;
