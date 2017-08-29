(function(){
  $.fn.Gslider = function(options){
    var settings = $.extend({
      timer:3000
    },options);
    this.addClass("slider-wrapper");
    this.each(function(){
      var set = $(this).children().children();
      $(this).children().children().hide();
      var counter = 0;
      var storeObj = set[counter];
      $(set[counter]).show();
      counter++;
      setInterval(function(){
        $(storeObj).hide();
        $(set[counter]).show();
        storeObj = set[counter]
        counter++;
        if(counter > set.length-1){
          counter = 0;
        }
      },settings.timer);
    })
  }
}(jQuery))
