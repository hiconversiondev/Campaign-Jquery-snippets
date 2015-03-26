function hiconversion_callback(arg){
  if(arg.frame.jQuery){
    var $ = arg.frame.jQuery;
    $(document).ready(function(){      
        
$("#ratings").hide();
 $("#detail").addClass("isOn");
 $("#ratings").addClass("isOff");
 $( "#tab2" ).insertBefore( "#ratings" );
  $( "#tab2" ).wrap( "<div class='tabWrap'></div>" );
    
      $('button#tab1Btn').addClass('hic_collapse');
      $('button#tab1Btn').click(function(){
                $('#ratings').removeClass('off');
 $('.tabWrap').removeClass('off');
    if($("#detail").hasClass("isOn")){
      $( "#detail" ).hide();
       $( "#detail" ).removeClass("isOn");
      $( "#detail" ).addClass("isOff");
       $('button#tab1Btn').removeClass('hic_collapse');
       $('button#tab1Btn').addClass('hic_expand');
    } else if ($("#detail").hasClass("isOff")){
         $( "#detail" ).removeClass("isOff");
       $( "#detail" ).addClass("isOn");
       $( "#detail" ).show();
      $('button#tab1Btn').addClass('hic_collapse');
       $('button#tab1Btn').removeClass('hic_expand');
    }
    

        $('.tabWrap').removeClass('off');
        
      });
      $('button#tab2Btn').addClass('hic_expand');
      $('button#tab2Btn').click(function(){
          $('#detail').removeClass('off');
 $('.tabWrap').removeClass('off');
    if($("#ratings").hasClass("isOff")){
      $("#ratings").removeClass("isOff");
      $("#ratings").addClass("isOn");
    
      $( "#ratings" ).show();
       $('button#tab2Btn').removeClass('hic_expand');
       $('button#tab2Btn').addClass('hic_collapse');
    } else if($("#ratings").hasClass("isOn")) {
       $('.tabWrap').removeClass('off');
       $( "#ratings" ).hide();
       $("#ratings").removeClass("isOn");
       $("#ratings").addClass("isOff");
      $('.tabWrap').removeClass('off');
       $('button#tab2Btn').removeClass('hic_collapse');
       $('button#tab2Btn').addClass('hic_expand');
    }
    
        
      });

    });
    return{kind:"ok"};
  }
  return{kind:"notOk"};
}
