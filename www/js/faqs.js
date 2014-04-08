// var theScroll;
// function scroll(){
//     theScroll = new iScroll('wrapper');
// }


// document.addEventListener('DOMContentLoaded', scroll, false);

$(document).ready(function(){
  $(function() {
    $( "#faqs" ).accordion({
      collapsible: true,
      heightStyle: "content",
      active: false
    });
  }),
  $(".question").on("click", "dt", function(){
    $(".question").css({ "height":"60px", "padding-bottom":"0px"});
  });
});
