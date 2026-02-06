export const loadIntercom = function loadIntercom() {
  // Prevent multiple loads
  if (window.intercomScriptLoaded) {
    Intercom("show");
    return;
  }
  window.intercomScriptLoaded = true;

  // Load Intercom widget
  (function () {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
      ic('reattach_activator');
      ic('update', {});
    } else {
      var d = document;
      var i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Intercom = i;

      var l = function () {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.intercom.io/widget/YOUR_APP_ID';
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      };
      l();
    }
  })();

  // After load → open automatically
  window.Intercom('boot', {
    app_id: 'YOUR_APP_ID'
  });

  // Optional: ensure it opens after load
  setTimeout(() => Intercom('show'), 500);
}