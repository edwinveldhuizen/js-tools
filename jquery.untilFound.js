/*
 *		nextUntilFound()	/	prevUntilFound()
 *		loops through the siblings until right one found
 */
(function( $ ) {
	$.fn.nextUntilFound = function(selector){
		if(selector == null)		return this.next();
		var lastFound		=	this;
		var siblings		=	this.siblings(selector);
		if(siblings.length == 0)	return siblings;
		
		while(true){
			var next 		=	lastFound.next();
			if(	next.is(selector)	){
				return next;
			}else if(next.length == 0){
				// return first of the siblings
				return siblings.first();
			}else if(lastFound == next){
				// not found
				return $();
			}else{
				// search again
				lastFound	=	next;
			}
		}
	}
	$.fn.prevUntilFound = function(selector){
		if(selector == null)		return this.prev();
		var lastFound		=	this;
		var siblings		=	this.siblings(selector);
		if(siblings.length == 0)	return siblings;
		
		while(true){
			var prev 		=	lastFound.prev();
			if(	prev.is(selector)	){
				return prev;
			}else if(prev.length == 0){
				// return last of the siblings
				return siblings.last();
			}else if(lastFound == prev){
				// not found
				return $();
			}else{
				// search again
				lastFound	=	prev;
			}
		}
	};
}(jQuery)