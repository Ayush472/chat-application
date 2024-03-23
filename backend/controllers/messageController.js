import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
export const sendMessage = async (req, res) => {
  console.log(req.body);
  try {
    const { message } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id;
    let conversaion = await Conversation.findOne({
      participants: { $all: [senderId, reciverId] },
    });

    if (!conversaion) {
      conversaion = await Conversation.create({
        participants: [senderId, reciverId] 
      });
    }

    const newMessage = new Message({
      senderId,
      reciverId,
      message,
    });

    if (newMessage) {
      conversaion.messages.push(newMessage._id);
    }
    // await conversaion.save()
    // await newMessage.save();
    await Promise.all([conversaion.save(),newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error sending message", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const  getMessage = async(req, res) => {
try {
  const {id:useToChatID}= req.params;
  const senderId = req.user._id 
  const conversaion = await Conversation.findOne({
    participants:{$all:[senderId,useToChatID]}
  }).populate("messages")
  if (!conversaion) {
    return res.status(200).json([])
  }
  const messages = conversaion.messages;
  res.status(200).json(messages);
  
} catch (error) {
  console.log("Error getMessage message", error.message);
  res.status(500).json({ message: "Internal Server Error" });
}
}