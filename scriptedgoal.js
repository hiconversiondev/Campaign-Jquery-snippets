function hiconversion_callback(arg) {
  var waitTime = 60000; 
  var then = new Date();
  hiconversion_callback_helper(arg.frame,then,waitTime);
  return {kind:"ok",frame:arg.frame};
}

function hiconversion_callback_helper(frame,then,waitTime){
  var performedUpdate = false;
  if(frame.jQuery){
	var here = document;
	var cta = here.getElementById("add-to-cart");
	if ( cta != null ) {		
					 var send = hiconversion_copy_object(arg);
						send.kind = "click";
						send.goal = arg.goal;
						send.node = cta;
						hiconversion_goal_click(send);
		
	}
	frame.jQuery(frame.document).ajaxComplete(function(){
		var here = document;
		var cta = here.getElementById("add-to-cart");
		if ( cta != null ) {		
						 var send = hiconversion_copy_object(arg);
							send.kind = "click";
							send.goal = arg.goal;
							send.node = cta;
							hiconversion_goal_click(send);
			
		}
	});
	performedUpdate = true;
  } 
  if(!performedUpdate){
    var now = new Date();
    var dif = now - then;
    if (dif < waitTime) {
      frame.setTimeout(function(){hiconversion_callback_helper(frame,then,waitTime);},100);
    }
  }
}
