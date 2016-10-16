// Twitch IRC docs : https://dev.twitch.tv/docs/irc
// npm irc docs https://www.npmjs.com/package/irc

// Please read the docs for npm irc and Twtich IRC for further functionality
// EX : Client.join, Client.part, Client.send, Client.say, etc...

var irc = require('irc');

// IRC client settings
var settings = {
	nick: "your bot nick here", 						// Enter the username of your bot account (lowercase)
	channels: ["#channel1", "#channel2", "#channel3"], 	// List the names of the twitch channels to connect to #channelname (lowercase)
	server: "irc.twitch.tv", 							// TwitchTV's IRC server
	password: "oauth:your oauth token here", 			// Can be obtained here: http://www.twitchapps.com/tmi
}

// Create an irc client object
var client = new irc.Client(settings.server, settings.nick, {
	port: 6667,// Or 443 for SSL
	channels: [settings.channels + " " + settings.password],
	debug: false,
	password: settings.password,
	username: settings.nick
});

// Triggers when connected to the IRC server
client.addListener('registered',function(message){
	console.log('connected to server : ' + settings.server);
});

// Triggers when message is received
client.addListener('message', function (from, to, message) {
	console.log(from + ' => ' + to + ': ' + message);
});

// Triggers when there is an IRC error
client.addListener('error', function(message) {
    console.error('error: ', message);
});

