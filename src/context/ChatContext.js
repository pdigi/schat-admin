import React, { useContext, useState } from 'react';

const ChatContext = React.createContext();
const ChatUpdateContext = React.createContext();
const MainStateContext = React.createContext();
const MainStateUpdateContext = React.createContext();

export function useChat() {
  return useContext(ChatContext)
}

export function useChatUpdate() {
  return useContext(ChatUpdateContext)
}

export function useMainState() {
  return useContext(MainStateContext)
}

export function useMainStateUpdate() {
  return useContext(MainStateUpdateContext)
}

export default function ChatProvider({ children }) {
  const [chatConfig, setChatConfig] = useState({});
  const [mainState, setMainState] = useState();

  function changeChannel(d) {
    console.log(d, "cntxt")
    setChatConfig(d);
  }

  function upMainState(obj) {
    console.log(obj, "MAIN STATE")
    setMainState(obj);
  }

  return (
    <MainStateContext.Provider value={mainState}>
      <MainStateUpdateContext.Provider value={upMainState}>
        <ChatContext.Provider value={chatConfig}>
          <ChatUpdateContext.Provider value={changeChannel}>
            {children}
          </ChatUpdateContext.Provider>
        </ChatContext.Provider>
      </MainStateUpdateContext.Provider>


    </MainStateContext.Provider>

  )
}

