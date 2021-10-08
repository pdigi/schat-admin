import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography, Divider} from '@material-ui/core'
import { dataProvider } from "../utils/util";
import {useChat, useChatUpdate , useMainState} from '../context/ChatContext'
import {loadChat} from '../utils/util'

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
    const [users, setUsers] = React.useState([]);
    const chatConfig = useChat();
    const changeChannel = useChatUpdate();
    const mainState = useMainState();
    // useEffect(()=>{
    //     console.log(chatConfig ,"config")

    //   fetchChatLog();
    // },[chatConfig])


    const fetchChatLog = async() => {

    }
    useEffect(()=>{
      loadData();
      }, [mainState])
    useEffect(() => {
        loadData();
      },[]);
      async function loadData() {
        // if (!id) return false;
        try {
          const mydata = await dataProvider("get", "/users/1", []);
          console.log(mydata.data, "USERS")
          setUsers(mydata.data);
        } catch (error) {
            console.log(error)
        //   setToastMessage(error.message);
        //   setIsToastOpen(true);
        }
      }
      
  return (
      <>

      {
         users?.map(i => {

          return i.type !== 'agent'?( <>
            <ListItem alignItems="flex-start" button onClick={()=>changeChannel({channel:i.room, user: i.username})}>
            <ListItemAvatar>
              <Avatar alt={i.username} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            
              primary={i.username}
         
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
                  {" "+i.id}
                </React.Fragment>
              }
            />
          </ListItem>
           <Divider variant="inset" component="li" />
            </>):''
          })
      }
      
     
      </>
  )
}

export default ChatList;
