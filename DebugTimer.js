/**
 *	DebugTimer is a great class to test performance by measuring time
 *
 *	DebugTimer.start(className:String)
 *	DebugTimer.end(className:String)
 *
 *	@author	Edwin Veldhuizen <info@edwin.pw>
 */

try{
	console.log("")
}catch(e){
	console		=	{log:function(string){}}}
}

var DebugTimer	=	(function (){
	var timers 	=	[],
	
	start 		=	function(functionName){
		if(timers[functionName]!=null){
			console.log("ERROR	::	DebugTimer.start('"+functionName+"')	:: Already started or never ended!");
			return;
		}
		var start_time				=	new Date();
		start_time					=	(start_time.getSeconds()*1000) +start_time.getMilliseconds();
		timers[functionName]		=	start_time;
		return this;
	},
	
	stop 		=	function(functionName){
		var start_time				=	timers[functionName];
		if(start_time==null){
			console.log("ERROR	::	DebugTimer.stop('"+functionName+"')	:: Never started!");
			return;
		}
		
		var end_time				=	new Date();
		end_time					=	(end_time.getSeconds()*1000) +end_time.getMilliseconds();
		console.log("DebugTimer	::	"+functionName+"()  took " + (end_time-start_time) +"ms");
		timers[functionName]		=	null;
	};
	
	return	{
		start:	start,
		stop:	stop
	}
}());