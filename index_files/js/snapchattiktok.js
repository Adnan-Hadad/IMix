// Snap Pixel Code

(function (e, t, n) {
  if (e.snaptr) return;
  var a = (e.snaptr = function () {
    a.handleRequest
      ? a.handleRequest.apply(a, arguments)
      : a.queue.push(arguments);
  });
  a.queue = [];
  var s = "script";
  r = t.createElement(s);
  r.async = !0;
  r.src = n;
  var u = t.getElementsByTagName(s)[0];
  u.parentNode.insertBefore(r, u);
})(window, document, "https://sc-static.net/scevent.min.js");

snaptr("init", "f1f6f707-502a-48f4-9e97-299905cca8f7", {
  user_email: "_INSERT_USER_EMAIL_",
});

snaptr("track", "PAGE_VIEW");

(function (e, t, n) {
  if (e.snaptr) return;
  var a = (e.snaptr = function () {
    a.handleRequest
      ? a.handleRequest.apply(a, arguments)
      : a.queue.push(arguments);
  });
  a.queue = [];
  var s = "script";
  r = t.createElement(s);
  r.async = !0;
  r.src = n;
  var u = t.getElementsByTagName(s)[0];
  u.parentNode.insertBefore(r, u);
})(window, document, "https://sc-static.net/scevent.min.js");

snaptr("init", "f1f6f707-502a-48f4-9e97-299905cca8f7", {
  user_email: "_INSERT_USER_EMAIL_",
});

snaptr("track", "PURCHASE");

!(function (w, d, t) {
  w.TiktokAnalyticsObject = t;
  var ttq = (w[t] = w[t] || []);
  (ttq.methods = [
    "page",
    "track",
    "identify",
    "instances",
    "debug",
    "on",
    "off",
    "once",
    "ready",
    "alias",
    "group",
    "enableCookie",
    "disableCookie",
  ]),
    (ttq.setAndDefer = function (t, e) {
      t[e] = function () {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
      };
    });
  for (var i = 0; i < ttq.methods.length; i++)
    ttq.setAndDefer(ttq, ttq.methods[i]);
  (ttq.instance = function (t) {
    for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
      ttq.setAndDefer(e, ttq.methods[n]);
    return e;
  }),
    (ttq.load = function (e, n) {
      var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
      (ttq._i = ttq._i || {}),
        (ttq._i[e] = []),
        (ttq._i[e]._u = i),
        (ttq._t = ttq._t || {}),
        (ttq._t[e] = +new Date()),
        (ttq._o = ttq._o || {}),
        (ttq._o[e] = n || {});
      n = document.createElement("script");
      (n.type = "text/javascript"),
        (n.async = !0),
        (n.src = i + "?sdkid=" + e + "&lib=" + t);
      e = document.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(n, e);
    });

  ttq.load("CJ47KM3C77U957217CRG");
  ttq.page();
})(window, document, "ttq");
