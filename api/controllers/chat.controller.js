import mongoose from 'mongoose';
import Chat from '../models/chat.model.js';

export const getChats = async (req, res) => {
    const tokenUserId = req.user.id;

    try {
        const chats = await Chat.find({
            users: { $elemMatch: { $eq: tokenUserId } }
        });

        for (const chat of chats) {
            const receiverId = chat.users.find((id) => id.toString() !== tokenUserId.toString());
            const receiver = await User.findById(receiverId, 'id username avatar');
            chat.receiver = receiver;
        }

        res.status(200).json(chats);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get chats!" });
    }
};

export const getChat = async (req, res) => {
    const tokenUserId = req.user.id;

    try {
        const chat = await Chat.findById(req.params.id)
            .where('users').elemMatch({ $eq: tokenUserId })
            .populate({
                path: 'messages',
                options: { sort: { createdAt: 1 } }
            });

        await Chat.findByIdAndUpdate(req.params.id, {
            $push: { seenBy: tokenUserId }
        });

        res.status(200).json(chat);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get chat!" });
    }
};

export const addChat = async (req, res) => {
    console.log(req)
    const tokenUserId = req.user.id;
    const receiverId = req.body.receiverId;

    if (!receiverId) {
        return res.status(400).json({ message: "Invalid receiverId" });
    }
    console.log(tokenUserId)
    try {
        const newChat = await Chat.create({
            users: [tokenUserId, req.body.receiverId]
        });
        res.status(200).json(newChat);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to add chat!" });
    }
};

export const readChat = async (req, res) => {
    const tokenUserId = req.user.id;

    try {
        const chat = await Chat.findByIdAndUpdate(req.params.id, {
            $set: { seenBy: [tokenUserId] }
        }, { new: true });

        res.status(200).json(chat);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to read chat!" });
    }
};