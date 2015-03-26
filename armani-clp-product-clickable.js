  function hiconversion_callback(arg){
  if(arg.frame.jQuery){
    var $ = arg.frame.jQuery;
    $(document).ready(function(){     
  
  
  var hicproductlink;

  $(".productimage").each(function(){

    hicproductlink =  $(this).find("a").attr("href");
   $(".producttilelarge").wrap('<a class="product_link" href="'+ hicproductlink +'"></a>');
  });
    });
    return{kind:"ok"};
  }
  return{kind:"notOk"};
}
