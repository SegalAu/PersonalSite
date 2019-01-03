import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Scrollbar from 'react-smooth-scrollbar';
/*React Grid system*/
import { Container, Row, Col } from 'react-grid-system';
/*Material UI core*/
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import TextLoop from "react-text-loop";
import scrollToComponent from 'react-scroll-to-component';


import CrossfadeImage from 'react-crossfade-image';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

/* Resources */
import profile1 from '../../resources/profile1.png';
import profile2 from '../../resources/profile2.png';
import profile3 from '../../resources/profile3.png';
import profileBackground from '../../resources/hkEdit3.png';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


import MoreVertIcon from '@material-ui/icons/MoreVert';

/* Buttons */
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { Parallax, Background } from 'react-parallax';

/* Card Material UI */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse'

/* Menu List */
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import classnames from 'classnames';

/*Anchors */
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { goToTop } from 'react-scrollable-anchor'
import { goToAnchor } from 'react-scrollable-anchor'


var aboutText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ";


const images = [
  profile1, profile2, profile3
];

const ContainerCar = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 400px;
`;

const styles = theme => ({

  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

});





const CarouselUI = ({ children }) => <ContainerCar>{children}</ContainerCar>;
const Carousel = makeCarousel(CarouselUI);



class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      imageIndex: 0,
      expanded: false,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);

  }

  componentWillMount(){
    configureAnchors({scrollDuration: 2000});
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(){
    if(this.props.goBackToTop){
      console.log("About sees GO BACK TO TOP");
      this.props.setToTopFalse();
      this.ScrollToTop();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleExpandClick(){
    this.setState({
        expanded: !this.state.expanded,
    });
  }

  ScrollToTop(){
    var element = document.getElementById("about");
    element.scrollIntoView({
      behavior: "smooth",
      block: 'center',
      inline: 'center',
    });
  }


  render(){

    const { classes } = this.props;

    let stylesRender = {


      profilePicture: {
        marginTop: 15,
        marginLeft: 40,
        marginRight: 0,
        float: "left",
      },

      profileDesc:{
        position: "relative",
        marginTop: 50,
        marginLeft: 0,
        backgroundColor: "black",
        opacity: 0.85,
        width: this.state.width * 0.7,
        float: "left",
      },

      containerStyle:{
        marginleft: -20,
        paddingLeft: 0,
      },

      rowStyle: {

        height: 400,
      },


      whiteText:{
        color: "white",
      },

      whiteBackground:{
          backgroundColor: "white",
      },

      profileContainer: {
        marginTop: 0,
        overflow: "hidden",
        width: this.state.width*0.8,
        minWidth: 800,
        height: 350,
      },

      carousel: {
        marginLeft: 0,
        width: 300,
      },

      imageStyle:{
        height: 250,
        marginLeft: 0,
      },

      blackBox: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        backgroundColor: "black",
        opacity: 0.6,
        width: this.state.width*0.4,
        minHeight: 400,
        minWidth: 800,
        marginLeft: -20,
      },


      cardStyle:{
        backgroundColor: "transparent",
        zDepthShadows: "none",
        border: "none",
        boxShadow: 'none',

      },

      buttonStyle:{
        color: "white",
      },

      bottomButtonStyle:{
        color: "white",
      },

      centeredDiv:{
        position: "absolute",
        marginLeft: this.state.width*0.8,
        bottom: 0,

      },

      allElements: {
        height: 800,
      },

      experienceText:{
        color: "white",

      }

    }








    return(
      <div style={stylesRender.allElements}>

        <Fade bottom duration={1500}>

        <section className="top"
                 ref={(section) => {
                   this.top = section;
                 }}
                 id="about">
          <Typography component="h2" variant="h1" gutterBottom style={stylesRender.whiteText}>
            Segal Au
          </Typography>
        </section>

        </Fade>

        <Fade bottom duration={1500}>
          <Typography variant="h2" gutterBottom style={stylesRender.whiteText}>
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

        <Zoom duration={5000}>
          <Divider style={stylesRender.whiteBackground}/>
        </Zoom>

        <Fade duration={3000}>



          <div style={stylesRender.profileContainer}>

              <Card style={stylesRender.cardStyle}>

                <CardActions>
                  <Typography variant="overline" style={stylesRender.whiteText}>
                    About </Typography>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    style={stylesRender.buttonStyle}>

                      <ExpandMoreIcon />
                  </IconButton>

                </CardActions>

                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <div style = {stylesRender.profilePicture}>
                    <Carousel defaultWait={2000} duration={1000} style={stylesRender.carousel}>
                      <Fade>
                        <div>
                          <img src={images[0]} style={stylesRender.imageStyle}/>
                        </div>
                      </Fade>
                      <Fade>
                        <div>
                          <img src={images[1]} style={stylesRender.imageStyle}/>
                        </div>
                      </Fade>
                      <Fade>
                        <div>
                          <img src={images[2]} style={stylesRender.imageStyle}/>
                        </div>
                      </Fade>
                    </Carousel>
                  </div>

                  <div style={stylesRender.blackBox}>
                    <Typography variant="subtitle1" gutterBottom style={stylesRender.whiteText}>
                      {aboutText}
                    </Typography>
                  </div>
                </Collapse>
              </Card>



          </div>


          <div style={stylesRender.centeredDiv}>
            <Typography variant="button" gutterBottom style={stylesRender.experienceText}>
              Show me where you worked
            </Typography>
            <IconButton
              onClick={this.goToExperience}
              aria-label="Show more"
              style={stylesRender.bottomButtonStyle}>
                <ExpandMoreIcon fontSize="large"/>
            </IconButton>
          </div>
        </Fade>

      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
