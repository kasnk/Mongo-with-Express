const mongoose=require("mongoose");
const Chat=require("./models/chat.js");



main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from: "Neha",
        to: "Priya",
        msg: "Hi Priya",
        created_at: new Date(),
      },
      {
        from: "Ravi",
        to: "Ankit",
        msg: "Hello Ankit",
        created_at: new Date(),
      },
      {
        from: "Suman",
        to: "Rohit",
        msg: "Hey Rohit, what's up?",
        created_at: new Date(),
      },
      {
        from: "Meena",
        to: "Asha",
        msg: "Good morning Asha",
        created_at: new Date(),
      },
      {
        from: "Amit",
        to: "Ravi",
        msg: "How are you, Ravi?",
        created_at: new Date(),
      },
      {
        from: "Priya",
        to: "Neha",
        msg: "Hi Neha, how have you been?",
        created_at: new Date(),
      },
      {
        from: "Kiran",
        to: "Sunita",
        msg: "Hey Sunita, long time no see!",
        created_at: new Date(),
      },
      {
        from: "Arjun",
        to: "Vikram",
        msg: "Good evening Vikram",
        created_at: new Date(),
      },
      {
        from: "Sonal",
        to: "Tina",
        msg: "Hi Tina, are you coming to the party?",
        created_at: new Date(),
      },
      {
        from: "Vikas",
        to: "Raj",
        msg: "Hello Raj, let's catch up soon",
        created_at: new Date(),
      }
      
];

Chat.insertMany(allChats);

 
 
 