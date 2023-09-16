require('./bootstrap');

console.log('vô app js');

const form = document.getElementById('form');
const inputMessage = document.getElementById('input-message');
const listMessage = document.getElementById('list-messages');

form.addEventListener('submit',function (event) {
    event.preventDefault(); // ko load trang
    const userInput = inputMessage.value; //lấy ra message

    axios.post('/chat-message',{
        message:userInput
    })
})

const channel = Echo.channel('public.chat.1');

//hàm này gọi lại khi kết nối thành công vớ channel
channel.subscribed(()=>{
    console.log('subscrberd!');
}).listen('.chat-message',(event)=>{
    console.log(event)
    const  message = event.message;
    const li = document.createElement('li');
    li.textContent = message;
    listMessage.append(li);
});
