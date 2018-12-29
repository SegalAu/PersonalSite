import React from 'react';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';


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

  handleScroll(){
    if(window.pageYOffset >= 650){
      this.setState({
        revealProjects: true,
      });
    }
  }


  render() {
    let styles = {
      title: {
        height: "auto",
      },

      About: {

      },

      ContentDivStyle : {
        paddingTop: this.state.height * 0.15,
      },

    }


    return(
      <div>
        <div style={styles.title}>
          <Fade bottom duration={1500}>

            <Typography component="h2" variant="h1" gutterBottom>
              Segal Au
            </Typography>

          </Fade>
          <Fade bottom duration={1500}>
            <Typography variant="h2" gutterBottom>
              <TextLoop
                  interval={2000}
                  springConfig={{ stiffness: 190, damping: 14 }}>

                  <span>Software Developer </span>

                  <span>Recovering Coffee Addict </span>

                  <span>Mediocre Gamer </span>

                  <span>Snowboarding Fanatic </span>

                  <span>Master Chef </span>

              </TextLoop>{" "}
            </Typography>
          </Fade>

          <Fade bottom duration={1500}>
            <About style = {styles.About}/>
          </Fade>

          <Fade duration = {1000}>
            <Divider/>
          </Fade>

          <div style = {styles.ContentDivStyle} >
          <Fade duration={1500}>
            <Experience />
          </Fade>
          </div>





          <div style = {styles.ContentDivStyle} >
            <Fade when={this.state.revealProjects} duration={1500}>
              <Projects />
            </Fade>
          </div>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>







        </div>
      </div>
    );
  }
}
export default TitleBar;
