require('./bootstrap');

const channel = Echo.channel('public.playground.1');

//hàm này gọi lại khi kết nối thành công vớ channel
channel.subscribed(()=>{
    console.log('subscrberd!');
});
