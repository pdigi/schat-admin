import React, {useState} from "react"
import FullWidthTabs from "../components/FullWidthTabs";

 function Chats(){

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    return (
        <>
        ok
        </>
    )
}

export default Chats;