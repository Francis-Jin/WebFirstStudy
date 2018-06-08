/**
 * Created by king on 9/12/2017.
 * event.js
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function () {
    console.log('some_event 事件触发');
});
setTimeout(function () {
    event.emit('some_event');
},1000);
