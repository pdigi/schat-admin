import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
} from "@material-ui/core";
import { dataProvider, getChatLog, saveChatLog } from "../utils/util";
import { useChat, useMainStateUpdate, useMainState } from "../context/ChatContext";
import { Send } from "@material-ui/icons";
import "../assets/style.css";
import io from "socket.io-client";
import { useSocketContext } from '../App'
// import Register from "./Register";

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
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState('');
  const [chatList, setChatList] = useState([]);
  // const [connection, setConnection] = useState(false);
  const [socket, setSocket] = useState();
  const chatConfig = useChat();
  const mainStateUpdate = useMainStateUpdate();
  const mainState = useMainState();
  // const socketContext = useSocketContext();
  const chatWindowRef = React.useRef();

  const [username, setusername] = useState('Agent');
  const [roomname, setroomname] = useState("");

  const [isReg, setReg] = useState(false)

  // useEffect(()=>{
  //   console.log(chatList, "chatlist");
  //   saveChatLog({room:roomname, chat: chatList});
  // },[chatList])

// useEffect(()=>{
// console.log('main state up ***************************')
// }, [mainState])

  // CLient click effect( chnage room/channel)
  useEffect(()=>{
    // console.log(chatConfig ,"chat comp -- connect to new room")
    setroomname(chatConfig.channel)
    setChatList([]);
  // fetchChatLog();
},[chatConfig]);

useEffect(()=>{
  if(roomname !== '') jRoom();
},[roomname])



  useEffect(()=>{
    // jRoom(roomname);
  },[])

  const scrollToBottom = () => {
    chatWindowRef.current.scrollTop = chatWindowRef.current?.scrollHeight;
  }

  function registrationStatus(data) {
    if(data.registered) {
      setusername(data.value[0])
      setReg(data.registered)
      console.log(data.value[0], 'uname')

      console.log(chatList, "chatlist");
      console.log(getChatLog({room:roomname}), "chatlist");
     
      jRoom();
      // jRoom(data.value[0]);
    }

  }

 
  useEffect(() => {
    console.log(chatConfig.channel);
    // loadData(chatConfig.channel);
  }, [chatConfig]);

  const jRoom = () => {
    const s = io('https://chat.digipoint.biz', {
      transports: ["websocket", "polling"], // use WebSocket first, if available
      auth: {
        token: 'pj'
      }
    });

    // s.emit("disconnect");

    // GOOD
    s.on("connect", async(args) => {
      console.log("Socket Connected",args)
      let log = getChatLog({room:roomname});
      console.log(log)
      // setChatList(getChatLog({room:roomname}));
      // jRoom();
    });

    s.on("chatlist", (args) => {
      console.log(args,'updatelist #####################')
      mainStateUpdate(Math.random());
    });
    
    s.on("disconnect", () => {
      console.log("Socket Disconnected")
      
      // socket?.emit("chat", { text: uname+" has left the chat" });
      // jRoom();
    });
    console.log({ username: username, roomname: roomname }, "JOINING");
    // setChatList(getChatLog({room:roomname}));

    s.emit("joinRoom", { username: username, roomname: roomname, type:'agent' });
    s.on("message", (args) => {
      console.log(args, "New Message")
      // setChatList([...chatList, { user: args.username, msg: args.text.text }])
      setChatList(chatList => [...chatList, { user: args.username, msg: args.text }]);
      
      scrollToBottom();
    });
    
   
    setSocket(s);

  }


  const handleMessage = (e) => {
    if (e.target.value === '\n') return;
    setMsg(e.target.value)
  }
  const sendMessage = () => {
    // if(!connection) return;
    socket?.emit("chat", { text: msg });

    // saveChatLog({room:roomname, chat: chatList});
    // setChatList([...chatList, {user:'me', msg:msg}])
    setMsg('');
  }
  const enterKeySendMessage = (e) => {
    // console.log(e.key, "key")
    // console.log(e.keyCode , "key-code")
    // console.log(e.shiftKey , "key-code")
    // return;
    if (e.key !== 'Enter' || msg.trim().length < 1 || e.shiftKey) return;
    sendMessage();
  }

  return (
    <div style={{ width: 'auto' }}>
      <Grid container>
        <Grid item xs={12}>       
          <div ref={chatWindowRef} style={{ height: 'calc(100vh - 155px)', overflowY: "scroll", maxWidth: '100vw' }} className="imessage">
            {chatList?.map((i, c) => {
              return (
                <>
                 <p key={c} className={i.user === username ? "from-me" : "from-them  margin-b_one"}>
                 <small style={{background:'white', color:'#333', padding:'1px 3px', fontWeight:'bold', borderRadius:5}}>{i.user}</small><br/>
                  {i.msg}
                </p>                
                </>               
                // <p key={c+'key'} className={c % 2 === 0 ? "from-me" : "from-them  margin-b_one"}>
                //   {i.body.substring(0, 10)}
                // </p>
              );
            })}
          </div>

        </Grid>
        <Grid item xs={12} style={{ display: 'flex', maxWidth: '100vw' }}>
          <textarea onChange={handleMessage} onKeyPress={enterKeySendMessage} value={msg} style={{ width: "100%", height: 50, fontSize: '1.1em', marginTop: '10', flex: 50, border:"1px solid #555" }} rows={'3'}></textarea><Button onClick={sendMessage} variant="contained" style={{ flex: 1 }}><Send style={{ color: '#0080ff' }} /></Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Chat;
