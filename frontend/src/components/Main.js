import React from 'react';
import { connect } from 'react-redux';
import { allMessages} from '../store/reducers'

const Main = ({ messages }) => <main>
  { messages.map(message => (
    <div><strong>{message.posted_at} - {message.sender}</strong>: {message.body}</div>
  ))}
  
</main>;

const mapStateToProps = state => ({
  messages: allMessages(state)
})

export default connect(mapStateToProps)(Main);
