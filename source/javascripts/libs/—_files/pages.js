(function() {

  $(function() {
    var testimonial_pages;
    testimonial_pages = 0;
    $.each(['.people-love-us', '.brands-love-us'], function(j, el) {
      var groups, pages;
      groups = $("" + el + " .testimonial-group");
      pages = parseInt(groups.length);
      if (pages > testimonial_pages) testimonial_pages = pages;
      return $.each(groups, function(i, group) {
        $(group).data('height', $(group).height());
        if (i !== 0) return $(group).hide().css('height', 0);
      });
    });
    $('a[data-role=load-more-testimonials]').click(function() {
      var i;
      i = parseInt($(this).data('iteration')) + 1;
      $.each(['.people-love-us', '.brands-love-us'], function(j, el) {
        var group;
        group = $("" + el + " .testimonial-group:eq(" + i + ")");
        return group.show().animate({
          height: group.data('height')
        });
      });
      $(this).data('iteration', i);
      if (i === testimonial_pages - 1) $(this).hide();
      return false;
    });
    if ($("#tweet-box").length > 0) {
      return twttr.anywhere(function(T) {
        var a, currentUser, me, profileImage, profileImageTag, screenName;
        T.linkifyUsers();
        currentUser = void 0;
        screenName = void 0;
        profileImage = void 0;
        profileImageTag = void 0;
        if (T.isConnected()) {
          currentUser = T.currentUser;
          screenName = currentUser.data("screen_name");
          profileImage = currentUser.data("profile_image_url");
          profileImageTag = "<img src='" + profileImage + "'/>";
        }
        me = this;
        return a = T("#tweet-box").tweetBox({
          height: 28,
          width: 520,
          defaultContent: "Tell the world!",
          counter: true,
          label: "<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"//" + document.domain + "/assets/tweet-box.css?v=1\" />",
          onTweet: function(plaintext, html) {
            var content;
            me.tweetBox.setContent("Restore default text");
            content = "<div class=\"row\">";
            content += "<div class=\"span2\">";
            content += "<div class=\"testimonial-source medium\">";
            content += "<div class=\"testimonial-person\">";
            content += profileImageTag;
            content += "</div>";
            content += "</div>";
            content += "</div>";
            content += "<div class=\"span17 \">";
            content += "<blockquote>";
            content += "<p>" + plaintext + "</p>";
            content += "<strong>&mdash; " + screenName + "</strong>";
            content += "</blockquote>";
            content += "</div>";
            content += "</div>";
            return $("#added-tweet").html(content);
          }
        });
      });
    }
  });

}).call(this);
