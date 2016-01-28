/*! formstone v0.8.37 [carousel.js] 2016-01-28 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){J.iterate.call(K,i)}function d(){K=a(G.base)}function e(c){var e,f=[H.base,c.customClass,c.rtl?H.rtl:H.ltr];c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.customControls="object"===a.type(c.controls)&&c.controls.previous&&c.controls.next,c.id=this.attr("id"),c.id?c.ariaID=c.id:(c.ariaID=c.rawGuid,this.attr("id",c.ariaID)),b.support.transform||(c.useMargin=!0);var i="",k="",l=[H.control,H.control_previous].join(" "),m=[H.control,H.control_next].join(" ");if(c.controls&&!c.customControls&&(i+='<div class="'+H.controls+'" aria-label="carousel controls" aria-controls="'+c.ariaID+'">',i+='<button type="button" class="'+l+'" aria-label="'+c.labels.previous+'">'+c.labels.previous+"</button>",i+='<button type="button" class="'+m+'" aria-label="'+c.labels.next+'">'+c.labels.next+"</button>",i+="</div>"),c.pagination&&(k+='<div class="'+H.pagination+'" aria-label="carousel pagination" aria-controls="'+c.ariaID+'" role="navigation">',k+="</div>"),c.autoHeight&&f.push(H.auto_height),c.contained&&f.push(H.contained),c.single&&f.push(H.single),this.addClass(f.join(" ")).wrapInner('<div class="'+H.wrapper+'" aria-live="polite"><div class="'+H.container+'"><div class="'+H.canister+'"></div></div></div>').append(i).wrapInner('<div class="'+H.viewport+'"></div>').append(k),c.$viewport=this.find(G.viewport).eq(0),c.$container=this.find(G.container).eq(0),c.$canister=this.find(G.canister).eq(0),c.$pagination=this.find(G.pagination).eq(0),c.$paginationItems=c.$pagination.find(G.page),c.$controlPrevious=c.$controlNext=a(""),c.customControls?(c.$controls=a(c.controls.container).addClass([H.controls,H.controls_custom].join(" ")),c.$controlPrevious=a(c.controls.previous).addClass(l),c.$controlNext=a(c.controls.next).addClass(m)):(c.$controls=this.find(G.controls).eq(0),c.$controlPrevious=c.$controls.find(G.control_previous),c.$controlNext=c.$controls.find(G.control_next)),c.$controlItems=c.$controlPrevious.add(c.$controlNext),c.index=0,c.enabled=!1,c.leftPosition=0,c.autoTimer=null,c.resizeTimer=null,"object"===a.type(c.show)){var n=c.show,o=[],p=[];for(e in n)n.hasOwnProperty(e)&&p.push(e);p.sort(J.sortAsc);for(e in p)p.hasOwnProperty(e)&&o.push({width:parseInt(p[e]),count:n[p[e]],mq:window.matchMedia("(min-width: "+parseInt(p[e])+"px)")});c.show=o}j(c),a.fsMediaquery("bind",c.rawGuid,c.mq,{enter:function(){h.call(c.$el,c)},leave:function(){g.call(c.$el,c)}}),d()}function f(b){J.clearTimer(b.autoTimer),J.startTimer(b.resizeTimer),g.call(this,b),a.fsMediaquery("unbind",b.rawGuid),b.id!==b.ariaID&&this.attr("id",""),b.$controlItems.removeClass([G.control,H.control_previous,G.control_next,G.visible].join(" ")).off(I.namespace),b.$images.off(I.namespace),b.$canister.fsTouch("destroy"),b.$items.removeClass([H.item,H.visible,G.item_previous,G.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),b.pagination&&b.$pagination.remove(),b.controls&&!b.customControls&&b.$controls.remove(),b.customControls&&b.$controls.removeClass([H.controls,H.controls_custom,H.visible].join(" ")),this.removeClass([H.base,H.ltr,H.rtl,H.enabled,H.animated,H.contained,H.single,H.auto_height,H.customClass].join(" ")),d()}function g(a){a.enabled&&(J.clearTimer(a.autoTimer),a.enabled=!1,this.removeClass([H.enabled,H.animated].join(" ")).off(I.namespace),a.$canister.fsTouch("destroy").off(I.namespace).attr("style","").css(M,"none"),a.$items.css({width:"",height:""}).removeClass([H.visible,G.item_previous,G.item_next].join(" ")),a.$images.off(I.namespace),a.$controlItems.off(I.namespace),a.$pagination.html(""),u(a),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(L,""),a.index=0)}function h(a){a.enabled||(a.enabled=!0,this.addClass(H.enabled).on(I.click,G.page,a,s),a.$controlItems.on(I.click,a,r),a.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(I.panStart,a,y).on(I.pan,a,z).on(I.panEnd,a,A).on(I.swipe,a,B).css(M,""),j(a),a.$images.on(I.load,a,p),a.autoAdvance&&(a.autoTimer=J.startTimer(a.autoTimer,a.autoTime,function(){q(a)},!0)),i.call(this,a))}function i(a){if(a.enabled){var b,c,d,e,f,g,h,i,j,k;if(a.count=a.$items.length,a.count<1)return u(a),void a.$canister.css({height:""});for(this.removeClass(H.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=x(a),a.perPage=a.paged?1:a.visible,a.itemMargin=parseInt(a.$items.eq(0).css("marginRight"))+parseInt(a.$items.eq(0).css("marginLeft")),isNaN(a.itemMargin)&&(a.itemMargin=0),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.canisterWidth=a.single?a.containerWidth:(a.pageWidth+a.itemMargin)*a.pageCount,a.$canister.css({width:a.matchWidth?a.canisterWidth:1e6,height:""}),a.$items.css({width:a.matchWidth?a.itemWidth:"",height:""}).removeClass([H.visible,H.item_previous,H.item_next].join(" ")),a.pages=[],c=0,d=0;c<a.count;c+=a.perPage){for(g=a.$items.slice(c,c+a.perPage),i=0,j=0,g.length<a.perPage&&(g=0===c?a.$items:a.$items.slice(a.$items.length-a.perPage)),h=g.eq(a.rtl?g.length-1:0),k=h.position().left,e=0;e<g.length;e++)f=g.eq(e).outerWidth(),b=g.eq(e).outerHeight(),i+=f,b>j&&(j=b);a.pages.push({left:a.rtl?k-(a.canisterWidth-i-2*a.itemMargin):k,height:j,width:i,$items:g}),j>a.itemHeight&&(a.itemHeight=j),d++}a.paged&&(a.pageCount-=a.count%a.visible),a.pageCount<=0&&(a.pageCount=1),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight?a.$canister.css({height:a.pages[0].height}):a.matchHeight&&a.$items.css({height:a.itemHeight});var l="";for(c=0;c<a.pageCount;c++)l+='<button type="button" class="'+H.page+'">'+(c+1)+"</button>";a.$pagination.html(l),a.pageCount<=1?u(a):v(a),a.$paginationItems=a.$el.find(G.page),t(a,a.index,!1),setTimeout(function(){a.$el.addClass(H.animated)},5)}}function j(a){a.$items=a.$canister.children().not(":hidden").addClass(H.item),a.$images=a.$canister.find("img"),a.totalImages=a.$images.length}function k(a){a.enabled&&l.call(this,a,!1)}function l(a,b){a.$images.off(I.namespace),b!==!1&&a.$canister.html(b),a.index=0,j(a),i.call(this,a)}function m(a,b,c){a.enabled&&(J.clearTimer(a.autoTimer),t(a,b-1,!0,c))}function n(a){var b=a.index-1;a.infinite&&0>b&&(b=a.pageCount-1),t(a,b)}function o(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),t(a,b)}function p(a){var b=a.data;b.resizeTimer=J.startTimer(b.resizeTimer,20,function(){i.call(b.$el,b)})}function q(a){var b=a.index+1;b>=a.pageCount&&(b=0),t(a,b)}function r(b){J.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(H.control_next)?1:-1);J.clearTimer(c.autoTimer),t(c,d)}function s(b){J.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));J.clearTimer(c.autoTimer),t(c,d)}function t(a,b,c,d){if(0>b&&(b=a.infinite?a.pageCount-1:0),b>=a.pageCount&&(b=a.infinite?0:a.pageCount-1),!(a.count<1)){a.pages[b]&&(a.leftPosition=-a.pages[b].left),a.leftPosition=D(a,a.leftPosition),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(M,"none").css(L,"translateX("+a.leftPosition+"px)"),setTimeout(function(){a.$canister.css(M,"")},5)):a.$canister.css(L,"translateX("+a.leftPosition+"px)"),a.$items.removeClass([H.visible,H.item_previous,H.item_next].join(" "));for(var e=0,f=a.pages.length;f>e;e++)e===b?a.pages[e].$items.addClass(H.visible).attr("aria-hidden","false"):a.pages[e].$items.not(a.pages[b].$items).addClass(b>e?H.item_previous:H.item_next).attr("aria-hidden","true");a.autoHeight&&a.$canister.css({height:a.pages[b].height}),c!==!1&&d!==!0&&b!==a.index&&(a.infinite||b>-1&&b<a.pageCount)&&a.$el.trigger(I.update,[b]),a.index=b,w(a)}}function u(a){a.$controls.removeClass(H.visible),a.$controlItems.removeClass(H.visible),a.$pagination.removeClass(H.visible)}function v(a){a.$controls.addClass(H.visible),a.$controlItems.addClass(H.visible),a.$pagination.addClass(H.visible)}function w(a){a.$paginationItems.removeClass(H.active).eq(a.index).addClass(H.active),a.infinite?a.$controlItems.addClass(H.visible):a.pageCount<1?a.$controlItems.removeClass(H.visible):(a.$controlItems.addClass(H.visible),a.index<=0?a.$controlPrevious.removeClass(H.visible):(a.index>=a.pageCount-1||!a.single&&a.leftPosition===a.maxMove)&&a.$controlNext.removeClass(H.visible))}function x(c){var d=1;if(c.single)return d;if("array"===a.type(c.show))for(var e in c.show)c.show.hasOwnProperty(e)&&(b.support.nativeMatchMedia?c.show[e].mq.matches&&(d=c.show[e].count):c.show[e].width<b.fallbackWidth&&(d=c.show[e].count));else d=c.show;return c.fill&&c.count<d?c.count:d}function y(a){var b=a.data;if(J.clearTimer(b.autoTimer),!b.single){if(b.useMargin)b.leftPosition=parseInt(b.$canister.css("marginLeft"));else{var c=b.$canister.css(L).split(",");b.leftPosition=parseInt(c[4])}b.$canister.css(M,"none"),z(a)}b.isTouching=!0}function z(a){var b=a.data;b.single||(b.touchLeft=D(b,b.leftPosition+a.deltaX),b.useMargin?b.$canister.css({marginLeft:b.touchLeft}):b.$canister.css(L,"translateX("+b.touchLeft+"px)"))}function A(a){var b=a.data,c=Math.abs(a.deltaX),d=E(b,a),e=!1;if(!b.single){var f,g,h=Math.abs(b.touchLeft),i=!1,j=b.rtl?"right":"left";if(a.directionX===j)for(f=0,g=b.pages.length;g>f;f++)i=b.pages[f],h>Math.abs(i.left)+20&&(e=f+1);else for(f=b.pages.length-1,g=0;f>=g;f--)i=b.pages[f],h<Math.abs(i.left)&&(e=f-1)}e===!1&&(e=50>c?b.index:b.index+d),C(b,e)}function B(a){var b=a.data,c=E(b,a),d=b.index+c;C(b,d)}function C(a,b){a.$canister.css(M,""),t(a,b),a.isTouching=!1}function D(a,b){return isNaN(b)?b=0:a.rtl?(b>a.maxMove&&(b=a.maxMove),0>b&&(b=0)):(b<a.maxMove&&(b=a.maxMove),b>0&&(b=0)),b}function E(a,b){return a.rtl?"right"===b.directionX?1:-1:"left"===b.directionX?1:-1}var F=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,show:1,single:!1,rtl:!1,useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{update:"update"},methods:{_construct:e,_destruct:f,_resize:c,disable:g,enable:h,jump:m,previous:n,next:o,reset:k,resize:i,update:l}}),G=F.classes,H=G.raw,I=F.events,J=F.functions,K=[],L=b.transform,M=b.transition}(jQuery,Formstone);