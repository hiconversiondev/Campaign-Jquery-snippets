function hiconversion_callback(arg) {
  var waitTime = 60000; 
  var then = new Date();
  hiconversion_callback_helper(arg.frame,then,waitTime);
  return {kind:"ok",frame:arg.frame};
}



function hiconversion_callback_helper(frame,then,waitTime){
  var here = frame.document;
  var performedUpdate = false;
  var wrap = here.getElementById("signInOverlayOpen");
  if ( wrap != null ) {
    wrap.style.background = "url(none) no-repeat transparent";
    wrap.style.color = "#000000";
    wrap.style.fontWeight = "normal";
    wrap.style.textDecoration = "underline";
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
