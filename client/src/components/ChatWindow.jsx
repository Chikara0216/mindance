import { ChatEngine } from 'react-chat-engine';
import '../assets/css/ChatWindow.css';

const ChatWindow = (props) => {
  const CHAT_ENGINE_PROJECT_ID = '69bf8154-751a-4c4f-bec9-d83d3d09a5c3';

  return (
    <div>
      <ChatEngine
        projectID={CHAT_ENGINE_PROJECT_ID}
        userName={props.user.username}
        userSecret={props.user.secret}
        height='100vh'
        offset={6}
      />
    </div>
  );
};

export default ChatWindow;