import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useTheme } from '@material-ui/core/styles';
import {myStyles, settings} from '../utils/config'
import { useHistory} from 'react-router-dom';
import logo from '../assets/logo.svg';
import Dashboard from '../pages/Dashboard';
import { ExitToApp, Message } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import {settings} from "../utils/config"
import ChatList from './ChatList'


function Nav(props) {
    let history = useHistory();
  const { window } = props;
  const classes = myStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const clickLink = (e, text) => {
    history.push(""+text[1]);
    setMobileOpen(false);
  }
  console.log(props.comp)
  const drawer = (
    <div>
        <div style={{textAlign:'center', width:'auto', padding:5}}>
            <img alt="logo" style={{width:50}} src={logo}/>
            <div style={{fontSize:'1.3em'}}>{settings.name}</div>
        </div>
      <div className={classes.toolbar} style={{marginTop:0}} />
      <Divider />
      <List>
        <div style={{height:'50vh', overflowY:'scroll'}}>
       <ChatList/>
        </div>
      </List>
      <Divider />
      <List>
        {[['Dasboard',"/dashboard", <DashboardIcon/>],['Sign Out',"/signout", <ExitToApp/>],].map((text, index) => (
          <ListItem button key={text[0]} onClick={(e)=>clickLink(e, text)}>
            <ListItemIcon>{text[2]}</ListItemIcon>
             <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>
      <Divider />
  </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Chatting with Leanne1
          </Typography>
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.comp}
      </main>
    </div>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;
