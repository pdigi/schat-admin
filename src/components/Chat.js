import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
  Grid,
  Button,
} from "@material-ui/core";
import { dataProvider } from "../utils/util";
import { useChat } from "../context/ChatContext";
import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function Chat(props) {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const chatConfig = useChat();

  React.useEffect(() => {
    console.log(chatConfig.channel);
    loadData(chatConfig.channel);
  }, [chatConfig]);
  async function loadData(channel) {
    // if (!id) return false;

    // fetch local storage chat
    try {
      const mydata = await dataProvider("get", "/posts/", []);
      setData(mydata.data.slice(0, 40));
    } catch (error) {
      //   setToastMessage(error.message);
      //   setIsToastOpen(true);
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>

            <div style={{height:'calc(100vh - 150px)', paddingBottom:50, overflowY:"scroll"}}>
            {data?.map((i) => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={i.title} src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={i.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {/* Ali Connors */}
                        </Typography>
                        {" " + i.body}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
                </div>
       
        </Grid>
        <Grid item xs={12} style={{display:'flex'}}>
            <textarea style={{width:"100%", height:50, fontSize:'1.1em', marginTop:'10', flex:60}} rows={'3'}>
                s
            </textarea><Button variant="contained" style={{flex:1}}><Send style={{color:'#666'}} /></Button>
          {/* <TextField
            style={{bottom:10, position:'absolute' }}
            variant="outlined"
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={3}
            //   defaultValue="Default Value"
          /> */}
        </Grid>
      </Grid>
    </>
  );
}

export default Chat;
