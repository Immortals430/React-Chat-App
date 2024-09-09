import { createSlice } from "@reduxjs/toolkit";
import john from "../../assets/dp/john.jpg"
import modi from "../../assets/dp/modi.webp"
import thor from "../../assets/dp/thor.webp"

// initial state with some dummy json
const initialState = {
  chats: [
    {
      userid: 1,
      name: "Thor",
      image: thor,
      chat: [
        { sender: "I am fine" },
        { me: "How are you?" },
        { sender: "Hi" },
        { me: "Hello" },
      ],
    },
    {
      userid: 2,
      name: "Modi",
      image: modi,
      chat: [
        { sender: "I am fine" },
        { me: "How are you?" },
        { sender: "hi" },
        { me: "Hello" },
      ],
    },
  ],
  activeChat: {},
};

// chat slice
const Chats = createSlice({
  name: "chats",
  initialState,
  reducers: {
    SET_CHATS: (state, action) => {
      state.chats = action.payload;
    },
    SET_ACTIVE_CHATS: (state, action) => {
      state.activeChat = action.payload;
    },
    SEND_MESSAGE: (state, action) => {
      const index = state.chats.findIndex(
        ({ userid }) => userid == action.payload.id
      );
      state.chats[index].chat.unshift({ me: action.payload.msg });
    },
    NEW_MESSAGE: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const {
  SET_CHATS,
  SET_ACTIVE_CHATS,
  SEND_MESSAGE,
  NEW_MESSAGE,
} = Chats.actions;
export const chatReducer = Chats.reducer;
export const chatSelector = (state) => state.chatReducer;
