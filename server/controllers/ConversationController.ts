import { Server, Socket } from 'socket.io';
import ConversationModel from '../models/Conversation';

const createConversation = async (data: IConversation) => {
    return await ConversationModel.create(data);
};

const getAll = async () => {
    return await ConversationModel.find();
};

const getConversation = async (conversationId: string) => {
    return await ConversationModel.findOne({ conversationId: conversationId });
};

const joinConversation = async (conversationId: string, username: string) => {
    const conversation = await ConversationModel.findOne({ conversationId });
    if (conversation && !conversation.participants.includes(username)) { // Not a participant yet
        return await ConversationModel.updateOne({ conversationId }, { $push: { participants: username } });
    }
    return conversation;
};


const leaveConversation = async (conversationId: string, username: string) => {
    const conversation = await ConversationModel.findOne({ conversationId });
    if (conversation && conversation.participants.includes(username)) { // Is a participant
        return await ConversationModel.updateOne({ conversationId: conversationId }, { $pull: { participants: username } });
    }
    return conversation;
};

const conversationWebsocketController = (socket : Socket, io : Server) => {
    console.log(`[${socket.id}] a user connected to server`);

    socket.on("joinRoom" , ({username, convoId}) =>{
        console.log("User: "+ username + "has joined room: "+ convoId);
        socket.join(convoId);
        
        socket.on("newMessage" , (message : IMessage) => {
            console.log("received:")
            console.log(message)
            io.to(convoId).emit("messageUpdate" , message);

        })
    });


    

    socket.on("disconnect", (reason) => {
        console.log(`[${socket.id}] a user disconnected with reason: ${reason}`);
      });

   

};

export default {
    createConversation,
    getAll,
    getConversation,
    
    conversationWebsocketController,
    // getConversationsByUsername,
    joinConversation,
    leaveConversation
};