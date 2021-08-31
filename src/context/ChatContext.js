import React, {useContext, useState} from 'react';

 const ChatContext = React.createContext();
 const ChatUpdateContext = React.createContext();

 export function useChat(){
   return useContext(ChatContext)
 }

 export function useChatUpdate(){
   return useContext(ChatUpdateContext)
 }

 export default function ChatProvider({children}) {
   const [chatConfig, setChatConfig] = useState({channel:'users'});

   function changeChannel(d){
     setChatConfig(d);
   
   }

   return (
    <ChatContext.Provider value={chatConfig}>
      <ChatUpdateContext.Provider value={changeChannel}>
         {children}
      </ChatUpdateContext.Provider>     
    </ChatContext.Provider>
   )
 }

