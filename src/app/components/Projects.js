import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Divider from '@material-ui/core/Divider';
/* Card Material UI */
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

/* Buttons */
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Typography from '@material-ui/core/Typography';

/* Resources */
import RCHWayfinderIMG from '../../resources/AddEdge.gif';

import classnames from 'classnames';


const styles = theme => ({
  cardStyle: {

  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),

    [theme.breakpoints.up('sm')]: {

    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})



class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      expanded1: false,
      expanded2: false,
      expanded3: false,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpandClick1 = this.handleExpandClick1.bind(this);
    this.handleExpandClick2 = this.handleExpandClick2.bind(this);
    this.handleExpandClick3 = this.handleExpandClick3.bind(this);
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

  handleExpandClick1(){
    console.log("running expanded 1");
    this.setState({
        expanded1: !this.state.expanded1,
    })
  }

  handleExpandClick2(){
    this.setState({
        expanded2: !this.state.expanded2,
    })
  }

  handleExpandClick3(){
    this.setState({
        expanded3: !this.state.expanded3,
    })
  }

  render(){
    const {classes} = this.props;

    let stylesRender = {
      cardStyle: {
        height: "auto",
        width: "100%",
        display: "flex",

      },

      imgStyle: {
        height: 0.3 * this.state.height,
        width: "100%",
      },
      headerBar: {
        backgroundColor: "black",
        color: "white",
      },
      CollapseElement: {

      },

      CardElement: {
          marginTop: 40,
      },

      container: {
        height: "auto",
      },

      row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: "auto",
        marginTop: 40,
      },

      col: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        height: "auto",
        flex: 1,
      },
    }

    return(
      <div style = {stylesRender.container} >
        <Fade duration={1500}>
          <Typography variant="h2" gutterBottom>
            Projects
          </Typography>


        <Divider/>


        <Card style={stylesRender.CardElement}>
          <CardActionArea>
            <CardMedia
              style={stylesRender.imgStyle}
              image={RCHWayfinderIMG}
              title="RCHWayfinder"
            />
            <CardContent style = {stylesRender.headerBar}>
              <Typography gutterBottom variant="h5" component="h2"
                          style = {stylesRender.headerBar}>
                RCHWayfinder
              </Typography>
              <Typography gutterBottom variant="caption" component="h2"
                          style = {stylesRender.headerBar}>
                Administration Portal Graphical Interface & NoSQL Cloud Database
              </Typography>
              <Typography gutterBottom variant="overline" component="h2"
                          style = {stylesRender.headerBar}>
                Royal Columbian Hospital - BCIT Joint Student Project
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" component="h2">
              Responsibilities & Achievements
            </Typography>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded1,
              })}
              style = {stylesRender.dropDownBtn}
              onClick={this.handleExpandClick1}
              aria-expanded={this.state.expanded1}
              aria-label="Show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse
              in={this.state.expanded1}
              timeout = "auto"
              unmountOnExit
              style = {stylesRender.CollapseElement}>
            <CardContent>
              <Typography>
                <ul>
                  <li>	Contributed in designing and implementing responsive web application tools platform for internal development and analyst team using React / Redux
                  <br/> (enabled cross-platform compatibility and increased productivity by approximately 70%) </li>
                  <li>	Collaborated and wrote software to exceed specific client requirements and establish data handling regulation </li>
                  <li>	Conducted regular QA testing and bug-fixing using Jest / Mocha </li>
                  <li>	Performed back-end integration and development using internal RESTful API (Java) </li>
                  <li>	Enhanced front-end interaction and UI elements of internal development tools using React framework and third-party APIs such as Material UI </li>
                  <li>	Worked with analysts in creating product demos to potential and existing clients </li>
                </ul>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Divider/>

              <Card style={stylesRender.CardElement}>
                <CardActionArea>
                  <CardMedia
                    style={stylesRender.imgStyle}
                    image={RCHWayfinderIMG}
                    title="RCHWayfinder"
                  />
                  <CardContent style = {stylesRender.headerBar}>
                    <Typography gutterBottom variant="h5" component="h2"
                                style = {stylesRender.headerBar}>
                      RCHWayfinder
                    </Typography>
                    <Typography gutterBottom variant="caption" component="h2"
                                style = {stylesRender.headerBar}>
                      Administration Portal Graphical Interface & NoSQL Cloud Database
                    </Typography>
                    <Typography gutterBottom variant="overline" component="h2"
                                style = {stylesRender.headerBar}>
                      Royal Columbian Hospital - BCIT Joint Student Project
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography gutterBottom variant="h5" component="h2">
                    Responsibilities & Achievements
                  </Typography>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded2,
                    })}
                    style = {stylesRender.dropDownBtn}
                    onClick={this.handleExpandClick2}
                    aria-expanded={this.state.expanded2}
                    aria-label="Show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                    in={this.state.expanded2}
                    timeout = "auto"
                    unmountOnExit
                    style = {stylesRender.CollapseElement}>
                  <CardContent>
                    <Typography>
                      <ul>
                        <li>	Contributed in designing and implementing responsive web application tools platform for internal development and analyst team using React / Redux
                        <br/> (enabled cross-platform compatibility and increased productivity by approximately 70%) </li>
                        <li>	Collaborated and wrote software to exceed specific client requirements and establish data handling regulation </li>
                        <li>	Conducted regular QA testing and bug-fixing using Jest / Mocha </li>
                        <li>	Performed back-end integration and development using internal RESTful API (Java) </li>
                        <li>	Enhanced front-end interaction and UI elements of internal development tools using React framework and third-party APIs such as Material UI </li>
                        <li>	Worked with analysts in creating product demos to potential and existing clients </li>
                      </ul>
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>

              <Divider/>

              <Card style={stylesRender.CardElement}>
                <CardActionArea>
                  <CardMedia
                    style={stylesRender.imgStyle}
                    image={RCHWayfinderIMG}
                    title="RCHWayfinder"
                  />
                  <CardContent style = {stylesRender.headerBar}>
                    <Typography gutterBottom variant="h5" component="h2"
                                style = {stylesRender.headerBar}>
                      RCHWayfinder
                    </Typography>
                    <Typography gutterBottom variant="caption" component="h2"
                                style = {stylesRender.headerBar}>
                      Administration Portal Graphical Interface & NoSQL Cloud Database
                    </Typography>
                    <Typography gutterBottom variant="overline" component="h2"
                                style = {stylesRender.headerBar}>
                      Royal Columbian Hospital - BCIT Joint Student Project
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography gutterBottom variant="h5" component="h2">
                    Responsibilities & Achievements
                  </Typography>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded3,
                    })}
                    style = {stylesRender.dropDownBtn}
                    onClick={this.handleExpandClick3}
                    aria-expanded={this.state.expanded3}
                    aria-label="Show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                    in={this.state.expanded3}
                    timeout = "auto"
                    unmountOnExit
                    style = {stylesRender.CollapseElement}>
                  <CardContent>
                    <Typography>
                      <ul>
                        <li>	Contributed in designing and implementing responsive web application tools platform for internal development and analyst team using React / Redux
                        <br/> (enabled cross-platform compatibility and increased productivity by approximately 70%) </li>
                        <li>	Collaborated and wrote software to exceed specific client requirements and establish data handling regulation </li>
                        <li>	Conducted regular QA testing and bug-fixing using Jest / Mocha </li>
                        <li>	Performed back-end integration and development using internal RESTful API (Java) </li>
                        <li>	Enhanced front-end interaction and UI elements of internal development tools using React framework and third-party APIs such as Material UI </li>
                        <li>	Worked with analysts in creating product demos to potential and existing clients </li>
                      </ul>
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>

              </Fade>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
