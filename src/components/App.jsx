import { data } from 'jquery';
import React, { useEffect } from 'react';
import Channels from './Channels'
import Message from './Message'; 
import Chat from './Chat'; 
//import { UserContext } from '../user-context';

export default class App extends React.Component {
  //static contextType = UserContext;

  render() {
    const { channels, messages } = this.props;

    return(
      <div className='row h-100 pb-3'>
        <div className='col-3 border-right'>
          <Channels channels={channels}/>
        </div>   
        <div className='col h-100'>
          <Chat messages={messages}/>
          <Message messages={messages}/>
        </div> 
      </div>
    );
  }
}

