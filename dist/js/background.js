/*! formstone v1.4.0 [background.js] 2017-10-10 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],e):e(jQuery,Formstone)}(function(e,i){"use strict";function o(){(C=Y.scrollTop()+i.windowHeight)<0&&(C=0),P.iterate.call(I,v)}function t(){j=e(b.base),I=e(b.lazy),P.iterate.call(I,h)}function a(e){if(e.visible){var i=e.source;e.source=null,n(e,i,!0)}}function n(i,o,t){if(o!==i.source&&i.visible){if(i.source=o,i.responsive=!1,i.isYouTube=!1,"object"===e.type(o)&&"string"===e.type(o.video)){var a=o.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);a&&a.length>=1&&(i.isYouTube=!0,i.videoId=a[1])}var n=!i.isYouTube&&"object"===e.type(o)&&(o.hasOwnProperty("mp4")||o.hasOwnProperty("ogg")||o.hasOwnProperty("webm"));if(i.video=i.isYouTube||n,i.playing=!1,i.isYouTube)i.playerReady=!1,i.posterLoaded=!1,u(i,o,t);else if("object"===e.type(o)&&o.hasOwnProperty("poster"))d(i,o,t);else{var l=o;if("object"===e.type(o)){var c,p=[],y=[];for(c in o)o.hasOwnProperty(c)&&y.push(c);y.sort(P.sortAsc);for(c in y)y.hasOwnProperty(c)&&p.push({width:parseInt(y[c]),url:o[y[c]],mq:$.matchMedia("(min-width: "+parseInt(y[c])+"px)")});i.responsive=!0,i.sources=p,l=r(i)}s(i,l,!1,t)}}else i.$el.trigger(T.loaded)}function r(e){var o=e.source;if(e.responsive){o=e.sources[0].url;for(var t in e.sources)e.sources.hasOwnProperty(t)&&(i.support.matchMedia?e.sources[t].mq.matches&&(o=e.sources[t].url):e.sources[t].width<i.fallbackWidth&&(o=e.sources[t].url))}return o}function s(i,o,t,a){var n=[w.media,w.image,!0!==a?w.animated:""].join(" "),r=e('<div class="'+n+'" aria-hidden="true"><img alt=""></div>'),s=r.find("img"),d=o;s.one(T.load,function(){R&&r.addClass(w.native).css({backgroundImage:"url('"+d+"')"}),r.fsTransition({property:"opacity"},function(){t||l(i)}).css({opacity:1}),f(i),t&&!a||i.$el.trigger(T.loaded)}).one(T.error,i,c).attr("src",d),i.responsive&&r.addClass(w.responsive),i.$container.append(r),(s[0].complete||4===s[0].readyState)&&s.trigger(T.load),i.currentSource=d}function d(o,t,a){if(o.source&&o.source.poster&&(s(o,o.source.poster,!0,!0),a=!1),!i.isMobile){var n='<div class="'+[w.media,w.video,!0!==a?w.animated:""].join(" ")+'" aria-hidden="true">';n+="<video",o.loop&&(n+=" loop"),o.mute&&(n+=" muted"),n+=">",o.source.webm&&(n+='<source src="'+o.source.webm+'" type="video/webm" />'),o.source.mp4&&(n+='<source src="'+o.source.mp4+'" type="video/mp4" />'),o.source.ogg&&(n+='<source src="'+o.source.ogg+'" type="video/ogg" />'),n+="</video>";var r=e(n+="</div>");r.find("video").one(T.loadedMetaData,function(e){r.fsTransition({property:"opacity"},function(){l(o)}).css({opacity:1}),f(o),o.$el.trigger(T.loaded),o.autoPlay&&p(o)}),o.$container.append(r)}}function u(o,t,a){if(!o.videoId){var n=t.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);o.videoId=n[1]}if(o.posterLoaded||(o.source.poster||(o.source.poster="//img.youtube.com/vi/"+o.videoId+"/0.jpg"),o.posterLoaded=!0,s(o,o.source.poster,!0,a),a=!1),!i.isMobile)if(e("script[src*='youtube.com/iframe_api']").length||e("head").append('<script src="//www.youtube.com/iframe_api"><\/script>'),z){var r=o.guid+"_"+o.youTubeGuid++,d='<div class="'+[w.media,w.embed,!0!==a?w.animated:""].join(" ")+'" aria-hidden="true">';d+='<div id="'+r+'"></div>';var u=e(d+="</div>"),p=e.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:r,loop:o.loop?1:0,autoplay:1,origin:$.location.protocol+"//"+$.location.host},o.youtubeOptions);p.autoplay=1,o.$container.append(u),o.player&&(o.oldPlayer=o.player,o.player=null),o.player=new $.YT.Player(r,{videoId:o.videoId,playerVars:p,events:{onReady:function(e){o.playerReady=!0,o.mute&&o.player.mute(),o.autoPlay||o.player.pauseVideo()},onStateChange:function(e){o.playing||e.data!==$.YT.PlayerState.PLAYING?o.loop&&o.playing&&e.data===$.YT.PlayerState.ENDED&&o.player.playVideo():(o.playing=!0,u.fsTransition({property:"opacity"},function(){l(o)}).css({opacity:1}),f(o),o.$el.trigger(T.loaded)),o.$el.find(b.embed).addClass(w.ready)},onPlaybackQualityChange:function(e){},onPlaybackRateChange:function(e){},onError:function(e){c({data:o})},onApiChange:function(e){}}}),f(o)}else O.push({data:o,source:t})}function l(e){var i=e.$container.find(b.media);i.length>=1&&(i.not(":last").remove(),e.oldPlayer=null)}function c(e){e.data.$el.trigger(T.error)}function p(e){if(e.video&&!e.playing)if(e.isYouTube)e.playerReady?e.player.playVideo():e.autoPlay=!0;else{var i=e.$container.find("video");i.length&&i[0].play(),e.playing=!0}}function y(e){if(e.visible)if(e.responsive){var i=r(e);i!==e.currentSource?s(e,i,!1,!0):f(e)}else f(e)}function f(e){for(var i=e.$container.find(b.media),o=0,t=i.length;o<t;o++){var a=i.eq(o),n=e.isYouTube?"iframe":a.find("video").length?"video":"img",r=a.find(n);if(r.length&&("img"!==n||!R)){var s=e.$el.outerWidth(),d=e.$el.outerHeight(),u=g(e,r);e.width=u.width,e.height=u.height,e.left=0,e.top=0;var l=e.isYouTube?e.embedRatio:e.width/e.height;e.height=d,e.width=e.height*l,e.width<s&&(e.width=s,e.height=e.width/l),e.left=-(e.width-s)/2,e.top=-(e.height-d)/2,a.css({height:e.height,width:e.width,left:e.left,top:e.top})}}}function h(e){e.scrollTop=e.$el.offset().top}function v(e){!e.visible&&e.scrollTop<C+e.lazyEdge&&(e.visible=!0,a(e))}function g(i,o){if(i.isYouTube)return{height:500,width:500/i.embedRatio};if(o.is("img")){var t=o[0];if("undefined"!==e.type(t.naturalHeight))return{height:t.naturalHeight,width:t.naturalWidth};var a=new Image;return a.src=t.src,{height:a.height,width:a.width}}return{height:o[0].videoHeight,width:o[0].videoWidth}}var m=i.Plugin("background",{widget:!0,defaults:{autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:function(i){i.youTubeGuid=0,i.$container=e('<div class="'+w.container+'"></div>').appendTo(this),i.thisClasses=[w.base,i.customClass],i.visible=!0,i.lazy&&(i.visible=!1,i.thisClasses.push(w.lazy)),this.addClass(i.thisClasses.join(" ")),t(),i.lazy?(h(i),v(i)):a(i)},_destruct:function(e){e.$container.remove(),this.removeClass(e.thisClasses.join(" ")).off(T.namespace),t()},_resize:function(){P.iterate.call(j,y),P.iterate.call(I,h),P.iterate.call(I,v)},play:p,pause:function(e){if(e.video&&e.playing){if(e.isYouTube)e.playerReady?e.player.pauseVideo():e.autoPlay=!1;else{var i=e.$container.find("video");i.length&&i[0].pause()}e.playing=!1}},mute:function(e){if(e.video)if(e.isYouTube&&e.playerReady)e.player.mute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!0)}e.mute=!0},unmute:function(e){if(e.video){if(e.isYouTube&&e.playerReady)e.player.unMute();else{var i=e.$container.find("video");i.length&&(i[0].muted=!1)}e.playing=!0}e.mute=!1},resize:f,load:n,unload:function(e){var i=e.$container.find(b.media);i.length>=1&&i.fsTransition({property:"opacity"},function(){i.remove(),delete e.source}).css({opacity:0})}}}),b=m.classes,w=b.raw,T=m.events,P=m.functions,$=i.window,Y=i.$window,C=0,j=[],I=[],R="backgroundSize"in i.document.documentElement.style,z=!1,O=[];i.Ready(function(){o(),Y.on("scroll",o)}),$.onYouTubeIframeAPIReady=function(){z=!0;for(var e in O)O.hasOwnProperty(e)&&u(O[e].data,O[e].source);O=[]}});