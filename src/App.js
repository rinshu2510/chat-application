import './App.css';
import {ChatEngine}from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App=()=>{
  /// if not logged in go to login form
  if(!localStorage.getItem('username'))
  return <LoginForm/>

  return (    
   <ChatEngine
        height="100vh"
        projectID="913b297e-b729-4e0a-86a1-07269d1f8734"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps}/>}

   /> 
  );
}

export default App;
