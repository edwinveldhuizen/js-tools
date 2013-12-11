/*
 *	EventHandler is a great class to handle custom events and is way faster than jQuery
 *	Just subscribe somewhere with EventHandler.bind('eventName', callback ) where callback gets the arguments
 *	And trigger with EventHandler.trigger('eventName', arguments)
 *	You can unsubscribe with EventHandler.unbind('eventName', callback) or with the result of bind() you got before
 *
 *	Author:		Edwin Veldhuizen || edwin.pw
 */
var EventHandler = (function (){
	var cache 		= 	{},
	
	trigger		=	function (topic, args) {
		if (cache[topic]) {
			var thisTopic	=	cache[topic],
				i			=	thisTopic.length;
				funct 		=	null;
				
			while(i--){
				funct 		=	thisTopic[i];
				funct(args);
			}
		}
	},
	bind		=	function (topic, callback) {
		if (!cache[topic])		cache[topic] = [];
		
		cache[topic].push(callback);
		return [topic, callback];
	},
	unbind		=	function (handle, completly) {
		var t	=	handle[0],
			i	=	cache[t].length - 1;
		
		if (cache[t]) {
			while(i--){
				cache[t].splice(cache[t][i], 1);
				if(completly){ delete cache[t]; }
			}
		}
	};
    return {
        trigger: 	trigger,
        bind: 		bind,
        unbind: 	unbind
    };
}());