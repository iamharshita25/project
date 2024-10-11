import './Chat.scss';
import { userdata } from '../../library/homedata';
import { useState, useEffect } from 'react';

function Chat() {
    const [activeUserIndex, setActiveUserIndex] = useState(null);  // Track which user's chat is open
    const [userChats, setUserChats] = useState({});  // Track individual chats for each user
    const [newMessage, setNewMessage] = useState('');  // For tracking the textarea input

    // Function to handle sending a message
    const handleSendMessage = () => {
        if (newMessage.trim() !== '' && activeUserIndex !== null) {
            const currentUserId = userdata[activeUserIndex].id;
            const messageObj = {
                text: newMessage,
                timestamp: 'Just now',  // You can add dynamic timestamp logic here if needed
                from: 'me',  // Mark this as a message from the current user
            };

            // Update chat history for the current user
            setUserChats(prevChats => ({
                ...prevChats,
                [currentUserId]: [...(prevChats[currentUserId] || []), messageObj]
            }));
            setNewMessage('');  // Clear the textarea after sending
        }
    };

    // Function to initialize a default message for each user when their chat opens for the first time
    useEffect(() => {
        if (activeUserIndex !== null) {
            const currentUserId = userdata[activeUserIndex].id;

            // If the user doesn't have any chat history yet, initialize with the default message
            if (!userChats[currentUserId]) {
                setUserChats(prevChats => ({
                    ...prevChats,
                    [currentUserId]: [{
                        text: "I want to buy your house",
                        timestamp: '1 hour ago',
                        from: 'other'  // Mark this message as coming from the other user
                    }]
                }));
            }
        }
    }, [activeUserIndex, userChats]);

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                {userdata.slice(0, 3).map((user, index) => (
                    <div
                        className="message"
                        key={index}
                        onClick={() => setActiveUserIndex(index)}  // Set active user when clicked
                    >
                        <img src="src/component/chat/user.jpg" alt="user" /> {/* Replace with actual path */}
                        <div className="messageContent">
                            <span className="username">{user.name}</span>
                            <p className="messageText">{user.msg}</p>
                        </div>
                    </div>
                ))}
            </div>

            {activeUserIndex !== null && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src={userdata[activeUserIndex].profileImage} alt="user" />
                            <span>{userdata[activeUserIndex].name}</span>
                        </div>
                        <div className="close" onClick={() => setActiveUserIndex(null)}>X</div>
                    </div>
                    <div className="center">
                        {(userChats[userdata[activeUserIndex].id] || []).map((message, index) => (
                            <div
                                className={`chatMessage ${message.from === 'me' ? 'own' : ''}`}
                                key={index}
                            >
                                <p>{message.text}</p>
                                <span>{message.timestamp}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bottom">
                        <textarea
                            placeholder="Type a message..."
                            value={newMessage}  // Bind the input value to state
                            onChange={(e) => setNewMessage(e.target.value)}  // Update state when typing
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chat;
