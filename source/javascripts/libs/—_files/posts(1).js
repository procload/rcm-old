(function() {

  $(function() {
    return $('#category_id').change(function() {
      var category_id, url;
      category_id = $('#category_id option:selected').val();
      url = category_id === '' ? '/news.js' : "/news.js?category_id=" + category_id;
      return $.ajax({
        url: url,
        complete: function(data) {
          return $('#posts').hide().html(data.responseText).fadeIn();
        }
      });
    });
  });

}).call(this);
