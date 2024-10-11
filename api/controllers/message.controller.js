import Chat from '../models/chat.model.js';
import Message from '../models/message.model.js';

export const addMessage = async (req, res) => {
    const tokenUserId = req.user.id;
    const chatId = req.params.chatId;
    const text = req.body.text;
    console.log(tokenUserId)
    console.log(chatId)
    console.log(text)
    try {
        const chat = await Chat.findOne({
            _id: chatId,
            users: { $in: [tokenUserId] }
        });

        if (!chat) return res.status(404).json({ message: "Chat not found!" });

        const message = new Message({
            text,
            chatId,
            userId: tokenUserId,
        });

        await message.save();
        chat.messages.push(message._id);
        chat.lastMessage = text;
        await chat.save();

        res.status(200).json(message);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add message!" });
    }
};

