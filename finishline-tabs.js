function hiconversion_callback(arg) {
  var waitTime = 60000;
  var then = new Date();
  hiconversion_callback_helper_print_disable(arg.frame, then, waitTime);
  return {
    kind: 'ok',
    frame: arg.frame
  };
}
function hiconversion_callback_helper_print_disable(frame, then, waitTime) {
  var here = frame.document;
  var performedUpdate = false;
  if (frame.jQuery) {
    var $ = arg.frame.jQuery;
    $(document).ready(function () {
                   var hicRatingLink =   $('#pdpHeader > ul.headerTop.table #BVRRRatingSummaryLinkReadID > a');
      if (hicRatingLink.length > 0 && $('.hicReviews').size() == 0) {
        hicRatingLink.clone().addClass("hicReviews").appendTo("#BVRRRatingSummaryLinkReadID");
                    $('.hicReviews').click(function(event){
                      event.preventDefault();
                      $('#ratings').show();
          location.href = "#ratings";
          
          $('button#tab2Btn').removeClass('hic_expand');
 	  $('button#tab2Btn').addClass('hic_collapse');
        });
        
           $('#ratings, #detail').hide();
      $('#tab2').insertBefore('#ratings');
      $('#tab2').wrap('<div class=\'tabWrap\'></div>');
      $('.tabWrap').removeClass('off');
      $('button#tab1Btn').addClass('hic_expand');
      $('button#tab1Btn').click(function () {
        $('#ratings').removeClass('off');
        $(this).toggleClass('hic_expand');
        $('#detail').slideToggle();
        $('.tabWrap').removeClass('off');
      });
      $('button#tab2Btn').addClass('hic_expand');
      $('button#tab2Btn').click(function () {
        $('#detail').removeClass('off');
        $(this).toggleClass('hic_expand');
        $('#ratings').slideToggle();
        $('.tabWrap').removeClass('off');
      });
        performedUpdate = true;      
      }

    });

  }
  if (!performedUpdate) {
    var now = new Date();
    var dif = now - then;
    if (dif < waitTime) {
      frame.setTimeout(function () {
        hiconversion_callback_helper_print_disable(frame, then, waitTime);
      }, 100);
    }
  }
}
