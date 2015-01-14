/*! Formstone v0.0.1 [navigation.js] 2015-01-14 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){t=a("html, body")}function d(b){b.guid="__"+s++,b.eventGuid=r.namespace+b.guid,b.rawGuid=q.base+b.guid,b.classGuid="."+b.rawGuid,b.isToggle="toggle"===b.type,b.isToggle&&(b.gravity="");var c=q.base,d=[c,b.type].join("-"),e=b.gravity?[d,b.gravity].join("-"):"",f=[b.rawGuid,b.customClass].join(" ");b.handle=this.data(o+"-handle"),b.content=this.data(o+"-content"),b.handleClasses=[q.handle,q.handle.replace(c,d),q.handle.replace(c,e),f].join(" "),b.navClasses=[q.nav.replace(c,d),q.nav.replace(c,e),f].join(" "),b.contentClasses=[q.content.replace(c,d),q.content.replace(c,e),f].join(" "),b.$nav=this.addClass(b.navClasses),b.$handle=a(b.handle).addClass(b.handleClasses),b.$content=a(b.content).addClass(b.contentClasses),b.$animate=a().add(b.$nav).add(b.$content),b.label&&(b.originalLabel=b.$handle.text()),b.$handle.attr("data-switch-target",b.classGuid).on("activate.switch"+b.eventGuid,b,j).on("deactivate.switch"+b.eventGuid,b,k).on("enable.switch"+b.eventGuid,b,l).on("disable.switch"+b.eventGuid,b,m).switch({maxWidth:b.maxWidth,classes:{target:b.classGuid,enabled:p.enabled,active:p.open,raw:{target:b.rawGuid,enabled:q.enabled,active:q.open}}})}function e(a){a.$content.removeClass(a.contentClasses).off(r.namespace),a.$handle.attr("data-switch-target","").removeClass(a.handleClasses).off(a.eventGuid).text(a.originalLabel).switch("destroy"),this.removeClass(a.navClasses).off(r.namespace)}function f(a){a.$handle.switch("activate")}function g(a){a.$handle.switch("deactivate")}function h(a){a.$handle.switch("enable")}function i(a){a.$handle.switch("disable")}function j(a){var b=a.data;b.$el.trigger(r.open),b.$content.addClass(q.open).one(r.clickTouchStart,function(){g(b)}),b.label&&b.$handle.text(b.labels.open),b.isToggle||t.addClass(q.lock)}function k(a){var b=a.data;b.$el.trigger(r.close),b.$content.removeClass(q.open).off(r.namespace),b.label&&b.$handle.text(b.labels.closed),b.isToggle||t.removeClass(q.lock)}function l(a){var b=a.data;b.$content.addClass(q.enabled),setTimeout(function(){b.$animate.addClass(q.animated)},0),b.label&&b.$handle.text(b.labels.closed)}function m(a){var b=a.data;b.$content.removeClass(q.enabled,q.animated),b.$animate.removeClass(q.animated),b.label&&b.$handle.text(b.originalLabel)}var n=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",type:"toggle"},classes:["handle","nav","content","animated","enabled","open","toggle","push","overlay","left","right","lock"],events:{tap:"tap",open:"open",close:"close"},methods:{_setup:c,_construct:d,_destruct:e,open:f,close:g,enable:h,disable:i}}),o=n.namespace,p=n.classes,q=p.raw,r=n.events,s=(n.functions,0),t=null}(jQuery,Formstone);