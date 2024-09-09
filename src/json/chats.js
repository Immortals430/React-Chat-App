import john from "../assets/dp/john.jpg"
import modi from "../assets/dp/modi.webp"
import thor from "../assets/dp/thor.webp"


// dummy chat json 
export let chatsjson = [
    {
        userid: 1,
        name: "Thor",
        image: thor,
        chat: [            
            { sender: "I am fine"},
            { me: "How are you?"},
            {sender: "Hi"},
            { me: "Hello" },
        ]   
    },
    {
        userid: 2,
        name: "Modi",
        image: modi,
        chat: [        
            { sender: "I am fine"},
            { me: "How are you?"},
            { sender: "hi"},
            { me: "Hello" },
        ]
    }
];
