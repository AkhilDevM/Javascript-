const EventEmitter = require('events');
const event = new EventEmitter();
event.on('event call', function(){
    console.log('event emitter used');
})

event.emit('event call')
