import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography, Divider} from '@material-ui/core'
import { dataProvider } from "../utils/util";
import {useChat, useChatUpdate} from '../context/ChatContext'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


  
function ChatList() {
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const chatConfig = useChat();
    const changeChannel = useChatUpdate();

    useEffect(()=>{
        console.log(chatConfig ,"config")
    },[chatConfig])


    React.useEffect(() => {
        loadData();
      },[]);
      async function loadData() {
        // if (!id) return false;
        try {
          const mydata = await dataProvider("get", "/users/", []);
          setData(mydata.data.slice(0,3));
        } catch (error) {
            console.log(error)
        //   setToastMessage(error.message);
        //   setIsToastOpen(true);
        }
      }
      

  return (
      <>

      {
         data?.map(i => {
           return <>
            <ListItem alignItems="flex-start" button onClick={()=>changeChannel({channel:i.name})}>
            <ListItemAvatar>
              <Avatar alt={i.name} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            
              primary={i.name}
         
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
                  {" "+i.company.catchPhrase}
                </React.Fragment>
              }
            />
          </ListItem>
           <Divider variant="inset" component="li" />
            </>
          })
      }
      
     
      </>
  )
}

export default ChatList;
