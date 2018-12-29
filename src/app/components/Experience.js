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
import AEXImg from '../../resources/AEX.jpg';

import classnames from 'classnames';


const styles = theme => ({
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



class Experience extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      expanded: false,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
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

  handleExpandClick(){
    this.setState({
        expanded: !this.state.expanded,
    })
  }

  render(){
    const {classes} = this.props;

    let stylesRender = {
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
    }

    return(
      <div >
        <Fade bottom>

          <Typography variant="h2" gutterBottom>
            Experience
          </Typography>

          <div>
            <Divider/>
          </div>


          <Card style = {stylesRender.CardElement}>
            <CardActionArea>
              <CardMedia
                style={stylesRender.imgStyle}
                image={AEXImg}
                title="Agreement Express"
              />
              <CardContent style = {stylesRender.headerBar}>
                <Typography gutterBottom variant="h5" component="h2"
                            style = {stylesRender.headerBar}>
                  Software Developer (Co-op) - Agreement Express
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h2"
                            style = {stylesRender.headerBar}>
                  January - August 2018 (8 month)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography gutterBottom variant="h5" component="h2">
                Responsibilities & Achievements
              </Typography>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                style = {stylesRender.dropDownBtn}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse
                in={this.state.expanded}
                timeout = "auto"
                unmountOnExit
                style = {stylesRender.CollapseElement}>
              <CardContent>
                <Typography variant="subtitle1" >
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

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);
