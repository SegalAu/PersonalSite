import React from 'react';
import Fade from 'react-reveal/Fade';
/*React Grid system*/
import { Container, Row, Col } from 'react-grid-system';
/*Material UI core*/
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import TextLoop from "react-text-loop";



import CrossfadeImage from 'react-crossfade-image';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

/* Profile Images */
import profile1 from '../../resources/profile1.png';
import profile2 from '../../resources/profile2.png';
import profile3 from '../../resources/profile3.png';
import profileBackground from '../../resources/ProfileBackground.png';

import { Parallax, Background } from 'react-parallax';




var aboutText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
"consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores " +
"et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

const images = [
  profile1, profile2, profile3
];

const ContainerCar = styled.div`
  position: relative;
  overflow: hidden;
  width: 400px
  height: 400px;
`;



const CarouselUI = ({ children }) => <ContainerCar>{children}</ContainerCar>;
const Carousel = makeCarousel(CarouselUI);


class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      imageIndex: 0,
    }

  }






  render(){


    let stylesRender = {


      profilePicture: {
        marginTop: 25,
        marginLeft: 40,
      },

      profileDesc:{
        marginTop: 20,
        marginLeft: 40,
        backgroundColor: "black",
        opacity: 0.9,
        padding: 10,
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

      profileContainer: {
        marginTop: 40,
      },

      carousel: {
        height: 800,
      },



    }






    return(
      <div style={stylesRender.allElements}>

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
        <Fade duration={1500}>
          <Typography variant="subtitle1" gutterBottom>
            {aboutText}
          </Typography>


          <Divider/>

          <div style={stylesRender.profileContainer}>
            <Parallax
                       blur={7}
                       bgImage={profileBackground}
                       bgImageAlt="snow"
                   >
            <Container style={stylesRender.containerStyle}>

                <Row style={stylesRender.rowStyle}>
                <Col xs={3} m={2}>
                <div style = {stylesRender.profilePicture}>
                  <Carousel defaultWait={5000} duration={1000} style={stylesRender.carousel}>
                    <Fade>
                      <div>
                        <img src={images[0]} style={stylesRender.imageStyle}/>
                      </div>
                    </Fade>
                    <Fade>
                      <div>
                        <img src={images[1]}/>
                      </div>
                    </Fade>
                    <Fade>
                      <div>
                        <img src={images[2]}/>
                      </div>
                    </Fade>
                  </Carousel>
                </div>
                </Col>
                <Col xs={6} m={6} style={stylesRender.colStyle}>
                <div style={stylesRender.profileDesc}>
                  <Typography variant="subtitle1" style={stylesRender.whiteText} gutterBottom>
                    {aboutText}
                  </Typography>
                </div>
                </Col>
                </Row>

            </Container>

            </Parallax>
          </div>

        </Fade>
      </div>
    );
  }
}

export default About;
