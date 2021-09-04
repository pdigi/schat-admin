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
import  "../assets/style.css";

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

            <div style={{maxHeight:'calc(100vh - 150px)', overflowY:"scroll"}} className="imessage">
           
            {data?.map((i, c) => {
            return (
                  <p className={c%2 === 0?"from-me":"from-them  margin-b_one"}>
                  {i.body.substring(0,10)}
                  </p>                
            );
          })}
                </div>
       
        </Grid>
        <Grid item xs={12} style={{display:'flex'}}>
            <textarea style={{width:"100%", height:50, fontSize:'1.1em', marginTop:'10', flex:100}} rows={'3'}>
               
            </textarea><Button variant="contained" style={{flex:1}}><Send style={{color:'#666'}} /></Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Chat;
