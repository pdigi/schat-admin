import { makeStyles } from "@material-ui/core/styles";


export const settings = {
    name: "Digi Support Chat",
    hostname: "shippcartja.com",
    website: "https://www.shippcartja.com",
    crm_url: "https://admin.shippcartja.com/",
    
    signin_url: "https://account.shippcartja.com/signin",
    settings_url: "https://account.shippcartja.com/settings",
    logo: "https://cdn.shippcartja.com/assets/img/logo.png",
    logo_w: "https://cdn.shippcartja.com/assets/img/logo_w.png",
    invoice: "https://cdn.shippcartja.com/view/invoice?id=",
    uinvoice: "https://cdn.shippcartja.com/view/uinvoice?id=",
    prefix: "CAR",
    address: "Kingston, Jamaica",
    phone: "1876 833 7372",
    email: "hello@shippcartja.com",
  };

const drawerWidth = 240;
export const myStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    padding: 2,
    // paddingTop: 100,
  //   paddingTop: 100,
    backgroundColor: "#F4F6F8",
  },
  formRoot: {
    "& > *": {},
    padding:'15px 0px 15px 0px'
  },
  input:{
      width:'100%'
  },
   title: {
    fontSize:"1.3em",
    fontWeight:500,
    color:"#333"
  },
  gridTitle: {
    display: "inline",
    marginTop:"14px"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#0f0679",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
   
  // necessary for content to be below app bar
  //   toolbar: theme.mixins.toolbar,
  toolbar: {
    marginTop: 65,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    backgroundColor:"#F6F5F5"
  },

  //Paper
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  avaIcon:{  
    background: '#ffffff',
    width:30,
    height:30,
    color:'#514487'
  },

  colorReceived: {
    color: "grey",
    // backgroundColor: "grey"
    borderColor: "grey",
    // color:"white"
  },
  colorInTransit: {
    color: "orange",
    borderColor: "orange",
    // backgroundColor: "orange"
    // color:"white"
  },
  colorReady: {
    color: "#0CB6E1",
    // color:"white"
  },
  colorDelivered: {
    color: "green",
    // color:"white"
  },
  colorOnHold: {
    color: "#ff2f4c",
    // color:"white"
  },
  
 //Dash
  packStatusPanel: {
    color:'white',
    // flexGrow: 1,
    // display:'flex',
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
    // border:"1px solid blue"
  },

  purpleTitle:{
    fontWeight:500,
    fontSize:"1.2em",
    color: "#2D0C57"
  },
  //MessageBoard
  inline: {
    display: 'inline',
  },
}));