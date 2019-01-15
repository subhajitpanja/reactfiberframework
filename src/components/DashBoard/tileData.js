// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import SimpleExpansionPanel from './SimpleExpansionPanel';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  NavLink
} from "react-router-dom";


export const mailFolderListItems = (
  <div className="sideNavMenu">
   
      <NavLink to="/dashboard/users">
    <ListItem button>
      <ListItemIcon>
        <Icon>account_box</Icon>
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    </NavLink>
    
    <ListItem button>
      <ListItemIcon>
        <Icon>star</Icon>
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>

    <NavLink to="/dashboard/send">
    <ListItem button>
      <ListItemIcon>
        <Icon>send</Icon>
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    </NavLink>
    <ListItem button>
      <ListItemIcon>
        <Icon>drafts</Icon>
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
  
    <ListItem button>
      <ListItemIcon>
        <Icon>email</Icon>
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    
    <SimpleExpansionPanel/>

    <ListItem button>
      <ListItemIcon>
        <Icon>delete</Icon>
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <Icon>report</Icon>
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);
