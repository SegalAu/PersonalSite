import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
/* Speed Dial Components */
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

/* Icons */
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExploreIcon from '@material-ui/icons/Explore';
import AppsIcon from '@material-ui/icons/Apps';



const actions = [
    {icon: <FaceIcon/>, name: "About"},
    {icon: <WorkIcon/>, name: "Experience"},
    {icon: <BuildIcon/>, name: "Projects"},
    {icon: <AssignmentIcon/>, name: "Resume"},
    {icon: <AppsIcon/>, name: "Contact"},
];

const styles = theme => ({
  speedDialClass : {
  },

  button: {

    "&:hover" : {
      background: "white",
      color: "#0DC4BE",
    }
  },

  fab: {
    padding: 0,
    margin: 0,
    background: "white",
    "&:hover" : {
      background: "white",
    }
  },

});

class FABNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      direction: "down",
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleClick(){
    //Flip to opposite of current state
    this.setState({
      open: !this.state.open,
    })
  }

  handleOpen(){

      this.setState({
        open: true,
      })

  }

  handleClose(){

      this.setState({
        open: false,
      })

  }

  testScroll(){
    console.log(window.pageYOffset);
  }


  render(){

    let styles = {
      speedDialIconStyle: {
        color: "black",
        backgroundColor: "white",
      }
    }

    const {classes} = this.props;


    return(
      // Create speed dial
      <div>
        <SpeedDial
          ariaLabel="FABNav"
          classes = {{
            fab: classes.fab,
            root: classes.root,
          }}
          icon = {<SpeedDialIcon openIcon={<MenuIcon/>} style = {styles.speedDialIconStyle}/>}
          open = {this.state.open}
          onMouseEnter = {this.handleOpen}
          onMouseLeave = {this.handleClose}
          direction = {this.state.direction}
          onFocus = {this.handleOpen}
          onClick = {this.handleClick}
          onClose = {this.handleClose}
        >

          // handle popup elements in speed dial
          {actions.map(action => (
              <SpeedDialAction
                classes = {{
                  button: classes.button,
                }}
                key = {action.name}
                icon = {action.icon}
                tooltipTitle = {action.name}
                onClick = {this.testScroll}
              />
          ))}
        </SpeedDial>
      </div>


    );
  }
}

FABNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FABNav);
