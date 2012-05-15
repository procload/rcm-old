(function() {

  $(function() {
    $(".delete").live("ajax:success", function(evt, data, status, xhr) {
      return $(this).parents("li").first().fadeOut();
    });
    return $(".edit_post #category_title").bind("railsAutocomplete.select", function(e) {
      var id, post_data, post_id;
      post_id = $(".edit_post #category_title").attr('data-post-id');
      id = $("input#category_id").val();
      post_data = {
        category_id: id
      };
      $(this).val("");
      return $.post("/admin/posts/" + post_id + "/add_category", post_data, (function(data) {
        return $("#categories").append(data);
      }), "html");
    });
  });

}).call(this);
