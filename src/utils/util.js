import jwt_decode from "jwt-decode";
var axios = require("axios");
var Cookies = require("js-cookie");

export const config = {
  // domain: "http://localhost:1980"
  domain: "https://jsonplaceholder.typicode.com/",
};

if (process.env.NODE_ENV === "development") {
  config.domain = "http://165.22.12.72:5150/";
} else {
  config.domain = "https://chat.digipoint.biz/";
}

config.domain = "https://chat.digipoint.biz/";

axios.defaults.timeout = 6000;
const axios_app = axios.create({
  baseURL: config.domain,
  timeout: 9000,
  // headers: {'X-Custom-Header': 'foobar'}
});



export function goTo(u){
    window.location.href = u;
  }
  function getToken(){
     const c =  Cookies.get('cb_token', { path: '/', domain: '.shippcartja.com' });
  
    if(process.env.NODE_ENV === 'development'){
      return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdHJpY2subWFsY29sbUBnbWFpbC5jb20iLCJhY2NvdW50X2lkIjoiMTQ3IiwiYWNjb3VudF90eXBlIjoiYWRtaW4iLCJwZXJtaXNzaW9uIjoyLCJpYXQiOjE2MzAwMjA0NjUsImV4cCI6MTYzMDAzMTI2NX0.ikctYP8xzpxxm8u15nQPMGHKAHo5n1vn3kpwazpDSp4"
    } else {
      return c;
    }
  
  }

export async function dataProvider(method, url, data) {
    // getToken();
    // return false;
    try {
      const response = await axios_app({
        method: method,
        url: url,
        data:  data ,
        headers: { Authorization: "Bearer " + getToken() },
      });
      // console.log(response.status, "provider")
      // console.log(response.response, "provider")
        return response;
    } catch (error) {
        // console.log(error.headers.status, "est")
        // console.log(error.response, "est")

        if (error.response) {
            // console.log(error.response.data);
            if(error.response.status === 403){
                // window.location = "signin";
                return false;
            }
         
          }
          if(error.response){
             throw new Error(error.response?.data.message) 
          } else {
            throw new Error("Request timeout.")
          } 
      
    }
  }


  export function loadChat(value){

    var data = {
      channel: '1',
      
    }
    return data;

  }

  export function saveChatLog(args){
    console.log(args,"save args")
    localStorage.setItem(args.room, JSON.stringify(args.chat));
  }

  export function getChatLog(args){
    let d = localStorage.getItem(args.room)
    return JSON.parse(d);
  }