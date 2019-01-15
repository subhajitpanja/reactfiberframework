import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import shadows from '@material-ui/core/styles/shadows';



const styles = theme => ({
  root: {
    width: '100%',
    border:0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={`subMenuwrapper ${classes.root}`}>
      <ListItem button className="subMenulistItem">
        <ExpansionPanel className="expPanelForsubMenu">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          
            <ListItemIcon>
              <Icon>unarchive</Icon>
            </ListItemIcon>
            <ListItemText primary="Parent" />
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nestedmenu">
          <ListItem button>
            <ListItemIcon>
                <Icon>ballot</Icon>
            </ListItemIcon>
            <ListItemText primary="Submenu" />
          </ListItem>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </ListItem>
      
      
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
