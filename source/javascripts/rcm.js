$(document).ready(function() {
  prettyPrint();

  var stickyPanelOptions;
  stickyPanelOptions = {
    afterDetachCSSClass: "fixed-top",
    savePanelSpace: true,
  };



  // call jRespond and add breakpoints
  var jRes = jRespond([
    {
      label: 'small',
      enter: 0,
      exit: 545
    },
    {
      label: 'big',
      enter: 545,
      exit: 99999
    }
  ]);

  // register enter and exit functions for a single breakpoint
  jRes.addFunc({
    breakpoint: 'big',
    enter: function() {
      $(".site-nav").stickyPanel(stickyPanelOptions);
    },
    exit: function() {
      $(".site-nav").stickyPanel("unstick");
    }
  });

});
