import React from 'react';
import Typography from '@material-ui/core/Typography';


var aboutText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. " +
"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
"consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores " +
"et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

class About extends React.Component {
  constructor(props){
    super(props);
  }




  render(){
    return(
      <div >
        <Typography variant="subtitle1" gutterBottom>
          {aboutText}
        </Typography>
      </div>
    );
  }
}

export default About;
