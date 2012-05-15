(function() {

  $(document).ready(function() {
    return $('#new_contact_message').live("ajax:success", function(evt, data, status, xhr) {
      $(this).find('input[type=submit]').addClass('load').val('Send Message');
      return $('.sales-form').html(data);
    }).live("submit", function() {
      return $(this).find('input[type=submit]').addClass('load').val('Sending');
    });
  });

}).call(this);
