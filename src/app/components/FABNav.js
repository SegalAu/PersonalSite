import React from 'react';
import classNames from 'classnames';
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

const speedDialStyle = {

}

const actions = [
    {icon: <FaceIcon/>, name: "About"},
    {icon: <BuildIcon/>, name: "Skills"},
    {icon: <WorkIcon/>, name: "Experience"},
    {icon: <AssignmentIcon/>, name: "Resume"},
];

class FABNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      direction: "up",
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

  render(){

    const speedDialClassName = classNames(
      this.props.SpeedDialStyle
    );


    return(
      // Create speed dial
      <div>
        <SpeedDial
          ariaLabel="FABNav"
          className = {speedDialClassName}
          icon = {<MenuIcon/>}
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
              key = {action.name}
              icon = {action.icon}
              tooltipTitle = {action.name}
              onClick = {this.handleClick}
            />
          ))}
        </SpeedDial>
      </div>


    );
  }
}
export default FABNav;
