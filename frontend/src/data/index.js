import { faker } from "@faker-js/faker";
import { IoNotifications } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { PiFingerprintBold } from "react-icons/pi";
import { FaPaintBrush } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";

import profile from "../assets/Images/profile2.jpg";
import profile3 from "../assets/Images/profile3.webp";
import profile2 from "../assets/Images/422226.jpg";
import {
  Bell,
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";


const shortcutList =[
  {
    key:0,
    title:"Mark as unread",
    shortcut: ["Cmd", "Shift", "U"]
  },
  {
    key:1,
    title:"Mark as unread",
    shortcut: ["Cmd", "Shift", "U"]
  },
  {
    key:2,
    title:"Mute",
    shortcut: ["Cmd", "Shift", "M"]
  },
  {
    key:3,
    title:"Archieve chat",
    shortcut: ["Cmd", "Shift", "A"]
  },
  {
    key:4,
    title:"Delete chat",
    shortcut: ["Ctrl", "Shift", "D"]
  },
  {
    key:5,
    title:"Delete chat",
    shortcut: ["Ctrl", "Shift", "D"]
  },
  {
    key:6,
    title:"Delete chat",
    shortcut: ["Ctrl", "Shift", "D"]
  },
  {
    key:7,
    title:"Pin chat",
    shortcut: ["Ctrl", "Shift", "P"]
  },
  {
    key:8,
    title:"Search",
    shortcut: ["Ctrl", "S"]
  },
  {
    key:9,
    title:"Search chat",
    shortcut: ["Ctrl", "Shift", "S"]
  },
  {
    key:10,
    title:"New chat",
    shortcut: ["Ctrl", "Shift", "N"]
  },
  {
    key:11,
    title:"New Group",
    shortcut: ["Ctrl", "Shift", "N"]
  },
  {
    key:12,
    title:"Profile Account",
    shortcut: ["Ctrl", "P"]
  },
  {
    key:13,
    title:"Change Theme",
    shortcut: ["Ctrl", "Shift", "T"]
  },
  {
    key:14,
    title:"Emoji Pannel",
    shortcut: ["Ctrl", "P"]
  },
  {
    key:15,
    title:"Open Settings",
    shortcut: ["Ctrl", "Shift", "S"]
  },
  {
    key:16,
    title:"Add Attachement",
    shortcut: ["Ctrl", "A"]
  },
  {
    key:17,
    title:"Sticker",
    shortcut: ["Ctrl", "S"]
  }
  
]

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Profile",
    icon: <SignOut />,
  },
];



const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const ChatList = [
  // {
  //   id: 0,
  //   img: profile3,
  //   name: "Kavita Sharma",
  //   msg: "Missing you Vikas baby",
  //   time: "9:36",
  //   unread: 4,
  //   pinned: true,
  //   online: true,
  // },
  // {
  //   id: 0,
  //   img: profile2,
  //   name: "Soni Sharma",
  //   msg: "Please call back Vikas",
  //   time: "9:36",
  //   unread: 8,
  //   pinned: true,
  //   online: false,
  // },
  // {
  //   id: 0,
  //   img: profile,
  //   name: "Shweta Sharma",
  //   msg: "Missing you",
  //   time: "9:36",
  //   unread: 9,
  //   pinned: true,
  //   online: true,
  // },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 9,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const CallUsersList=[
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },

  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },

  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },

  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },

  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },


]

const CallLog= [
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    time: "08:15",
    unread: 0,
    missed: true,
    incoming: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    time: "08:12",
    unread: 0,
    missed: true,
    incoming: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    time: "08:10",
    unread: 0,
    missed: true,
    incoming: true,
    online: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    time: "08:21",
    unread: 0,
    missed: false,
    incoming: true,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    time: "09:42",
    unread: 0,
    missed: true,
    incoming: true,
    online: false,
  },
  
]

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Links=[
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },{
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  }
]
const Docs=[
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  }
]

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  Docs,
  Links,
  shortcutList,
  CallLog,
  CallUsersList
};
