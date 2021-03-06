;(function (window, document, $) {
  // Set the negative margin on the top menu for slide-menu pages
  var $selector1 = $('#topMenu'),
    events = 'click.fndtn';
  if ($selector1.length > 0) $selector1.css("margin-top", $selector1.height() * -1);

  // Watch for clicks to show the sidebar
  var $selector2 = $('#sidebarButton');
  if ($selector2.length > 0) {
    $('#sidebarButton').on(events, function (e) {
      e.preventDefault();
      $('body').toggleClass('active');
    });
  }
  // // Adjust sidebars and sizes when resized
  // $(window).resize(function() {
  //   // if (!navigator.userAgent.match(/Android/i)) $('body').removeClass('active');
  //   var $selector4 = $('#topMenu');
  //   if ($selector4.length > 0) $selector4.css("margin-top", $selector4.height() * -1);
  // });

  // Switch panels for the paneled nav on mobile
  var $selector5 = $('#switchPanels');
  if ($selector5.length > 0)  {
    $('#switchPanels dd').on(events, function (e) {
      e.preventDefault();
      var switchToPanel = $(this).children('a').attr('href'),
          switchToIndex = $(switchToPanel).index();
      $(this).toggleClass('active').siblings().removeClass('active');
      $(switchToPanel).parent().css("left", (switchToIndex * (-100) + '%'));
    });
  }

  $('#nav li a').on(events, function (e) {
    e.preventDefault();
    var href = $(this).attr('href'),
      $target = $(href);
    $('html, body').animate({scrollTop : $target.offset().top}, 300);
  });
}(this, document, jQuery));

function getSong(id){
  $.getJSON('http://localhost:3000/payload.json', function(payload) {
           console.log('selected media!' + id);
           $('.payload').html(payload.iframe);
    });
 }

 function nextSong(){
  $.getJSON('http://localhost:3000/payload.json', function(payload) {
           console.log('selected media!' + payload.iframe);
           $('.payload').html(payload.iframe);
    });
 }

 function prevSong(){
  $.getJSON('http://localhost:3000/payload.json', function(payload) {
           console.log('selected media!' + payload.iframe);
           $('.payload').html(payload.iframe);
    });
 }

window.onload = function(){
                  $(".play-now").click(function(event){
                    event.preventDefault();
                    track = this.getAttribute("data-id");
                    getSong(track);
                  })
                  $(".next-media").click(function(event){
                    event.preventDefault();
                    nextSong();
                  })
                  $(".prev-media").click(function(event){
                    event.preventDefault();
                    prevSong();
                  })
                };