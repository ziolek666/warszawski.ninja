Meteor.startup(function() {
  $('html').attr('lang', 'pl');

  if (Meteor.isCordova) {
    document.addEventListener("backbutton", function() {
      if (window.location.pathname === '/live' ||
          window.location.pathname === '/linie') {
        window.plugins.Suspend.suspendApp();
      } else {
        window.history.back();
      }
    }, false);
  }
});