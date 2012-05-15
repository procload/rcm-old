(function() {

  $(document).ready(function() {
    var clickedAway, isVisible, vcardContent,
      _this = this;
    $('#firstScreenshot').modal({
      'show': false
    });
    $(".btn-how-it-works").toggle((function() {
      $(this).addClass('triggered naked');
      $('.how-it-works').slideDown(800, function() {
        var new_position;
        new_position = $(".btn-how-it-works").offset();
        return jQuery("html, body").animate({
          scrollTop: new_position.top
        });
      });
      return false;
    }), function() {
      $('.how-it-works').slideUp(500, function() {
        return $(".btn-how-it-works").removeClass('naked triggered');
      });
      return false;
    });
    $.facebox.settings.loadingImage = '/assets/parts/facebox/loading.gif';
    $.facebox.settings.closeImage = '/assets/parts/facebox/closelabel.png';
    $('a[rel*=facebox]').facebox();
    $.each($("a[href^='http']:not([href*='dotloop.com']):not([rel='facebox'])"), function(idx, item) {
      return $(item).click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        return window.open(this.href, "_blank");
      });
    });
    $('.intro-block h2 em').shuffleLetters();
    vcardContent = function(element) {
      var content;
      content = $(element).children('.additional-details').clone().remove().html();
      return content;
    };
    $('.movement-pin .marker').bind('click', function(e) {
      e.preventDefault;
      $('.movement-pin .testimonial').fadeOut(100, function() {
        return $(this).parent('.movement-pin').css({
          "z-index": 1
        });
      });
      return $(this).siblings('.testimonial').fadeIn(100, function() {
        return $(this).parent('.movement-pin').css({
          "z-index": 5
        });
      });
    });
    $(document).on("click", ".testimonial .close", function(e) {
      e.preventDefault;
      e.stopPropagation;
      return $(this).parent().parent().parent().fadeOut(100, function() {
        return $(this).parent('.movement-pin').css({
          "z-index": 1
        });
      });
    });
    $('.movement-pin').each(function(index) {
      $(this).delay(300 * index).animate({
        opacity: 1,
        top: '+=30'
      }, $(this).data('speed'));
      if (index === 0) return $(this).children('.marker').trigger('click');
    });
    vcardContent = function(element) {
      var content;
      content = $(element).children('.additional-details').clone().remove().html();
      return content;
    };
    isVisible = false;
    clickedAway = false;
    $('.team-list li .vcard').each(function(index, el) {
      var placement;
      if ($(el).children().last().hasClass('left')) {
        placement = 'left';
      } else {
        placement = 'right';
      }
      return $(el).popover({
        html: true,
        trigger: "manual",
        content: vcardContent(el),
        placement: placement,
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><a href="#" class="close">Close</a><div class="popover-content"><p></p></div></div></div>'
      }).click(function(e) {
        $(this).popover("show");
        isVisible = true;
        return e.preventDefault();
      });
    });
    $(document).click(function(e) {
      if (isVisible & clickedAway) {
        $('.team-list li .vcard').popover("hide");
        return isVisible = clickedAway = false;
      } else {
        return clickedAway = true;
      }
    });
    return $(".team-list .vcard").hover((function() {
      if ($(this).children(".staff-photo").children('.img-alt').length > 0) {
        return $(this).children(".staff-photo").children(".img-main").fadeOut(100, function() {
          return $(this).siblings(".img-alt").fadeIn();
        });
      }
    }), function() {
      return $(this).children(".staff-photo").children(".img-alt").fadeOut(100, function() {
        return $(this).siblings(".img-main").fadeIn();
      });
    });
  });

}).call(this);
