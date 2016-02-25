#!/usr/bin/env node
var dgram = require('dgram');

// based on http://www.bford.info/pub/net/p2pnat/index.html



var socket = dgram.createSocket('udp4');

socket.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
    try{
    	var publicEndpointA = JSON.parse(message);
    	sendMessageToA(publicEndpointA.address, publicEndpointA.port);
    }catch(err) {}
});

function sendMessageToS () {
	var serverPort = 33333;
	var serverHost = 'S.S.S.S';

	var message = new Buffer('B');
	socket.send(message, 0, message.length, serverPort, serverHost, function (err, nrOfBytesSent) {
	    if (err) return console.log(err);
	    console.log('UDP message sent to ' + serverHost +':'+ serverPort);
	    // socket.close();
	});
}

sendMessageToS();

var counter = 0;
function sendMessageToA (address, port) {
	console.log('sending UDP message to A:', address +':'+ port);
	if(counter == 5) return;
	var message = new Buffer(counter++ + ': Hello A!');
	socket.send(message, 0, message.length, port, address, function (err, nrOfBytesSent) {
	    if (err) return console.log(err);
	    console.log('UDP message sent to A:', address +':'+ port);

	    setTimeout(function () {
	    	sendMessageToA(address, port);
	    }, 2000);
	});
}
