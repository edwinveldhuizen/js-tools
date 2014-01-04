/*
 *	EventHandler is a great class to handle custom events and is way faster than jQuery
 *
 *	EventHandler.bind	(eventName:String, callback:Function )			Subscribe on a certain event
 *	EventHandler.trigger(eventName:String, arguments...		 )			Trigger the event with a certain amount of arguments
 *	EventHandler.unbind	(eventName:String, callback:Function ) 			Unsubscribe to a certain event
 *
 *	@author	Edwin Veldhuizen <info@edwin.pw>
 */
var EventHandler = (function (){
	var cache 		= 	{},
	
	trigger		=	function (topic) {
		if (cache[topic]) {
			var thisTopic	=	cache[topic],
				i			=	thisTopic.length,
				funct 		=	null,
				args 		=	Array.prototype.slice.call(arguments);
			
			args.shift();
			while(i--){
				funct 		=	thisTopic[i];
				funct.apply(topic,args);
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