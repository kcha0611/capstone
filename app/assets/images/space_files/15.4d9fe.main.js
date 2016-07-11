webpackJsonp([15],{629:function(e,t,a){"use strict";e.exports=a(630)},630:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e){var t=e.user,a=e.type,o=e.className,n=e.hideNameOnMobile,i=(0,d.nodeUrl)()+"/@"+t.username;return s["default"].createElement("a",{href:i,className:(0,u["default"])(f["default"].userLink,o,l({},f["default"].alt,"alt"===a))},s["default"].createElement("img",{src:t.profile_image.small,className:f["default"].userAvatar}),s["default"].createElement("span",{className:(0,u["default"])(f["default"].userName,l({},f["default"].hideNameOnMobile,n))},t.name))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var i=a(197),s=o(i),r=a(497),u=o(r),d=a(478),c=a(631),f=o(c),p={user:i.PropTypes.object.isRequired,type:i.PropTypes.oneOf(["default","alt"]),className:i.PropTypes.string,hideNameOnMobile:i.PropTypes.bool},m={type:"default",hideNameOnMobile:!1};n.propTypes=p,n.defaultProps=m},631:function(e,t){e.exports={userLink:"_2_2WJ _3myVE",userAvatar:"RIxWs",userName:"_2Co2-",alt:"_1_w0v _2tPAp",hideNameOnMobile:"_3e7wd _3ofrt"}},632:function(e,t,a){"use strict";e.exports=a(633)},633:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){return e?{pathname:t.pathname}:{pathname:t.pathname,query:{login_view:"is_visible",login_action:"like"}}}function i(e,t){return e?"pink":t}function s(e,t){return u({},t,e)}function r(e,t,a){var o=e.liked_by_user?a.photos.unlikePhoto:a.photos.likePhoto;return function(){return o(e.id).then(E.toJson).then(function(a){var o=s(a.photo,e);t.setSelectedPhoto(o),t.updatePhotoInPhotoFeed(o)})}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},d=a(197),c=o(d),f=a(497),p=o(f),m=a(529),h=o(m),y=a(526),v=o(y),b=a(530),_=o(b),P=a(534),w=o(P),E=a(463),k=a(498),N=o(k),g=a(524),C=o(g),T=a(634),B=o(T),I=(0,w["default"])((0,h["default"])("LikeLabel"),(0,v["default"])({likes:d.PropTypes.number}))(function(e){var t=e.likes;return t?c["default"].createElement("span",{className:B["default"].labelLike},t):c["default"].createElement("span",null)}),O=(0,w["default"])((0,h["default"])("LikeButton"),(0,v["default"])({type:d.PropTypes.oneOf(["default","alt"]),photo:d.PropTypes.object.isRequired,actions:d.PropTypes.object.isRequired,location:d.PropTypes.object.isRequired,className:d.PropTypes.string}),(0,_["default"])({type:"default"}));t["default"]=O(function(e){var t=e.location,a=e.photo,o=e.actions,s=e.type,u=e.className,d=e.api,f=e.authUser,m="default"===s?"outline":"outline-alt",h=a.liked_by_user,y=f?r(a,o,d):null;return c["default"].createElement(N["default"],{className:(0,p["default"])(B["default"].buttonLike,u),type:i(h,m),tag:"link",title:"Like photo",size:"small",to:n(f,t),onClick:y},c["default"].createElement("span",null,c["default"].createElement(C["default"],{type:"heart",className:(0,p["default"])(B["default"].likeIcon,l({},B["default"].likeIconLiked,a.liked_by_user))}),c["default"].createElement(I,{likes:a.likes})))})},634:function(e,t){e.exports={likeIcon:"BWSrD",likeIconLiked:"_1O_YD",labelLike:"_2ER2Y"}},635:function(e,t,a){"use strict";e.exports=a(636)},636:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0});var n=a(197),i=o(n),s=a(497),r=o(s),u=a(529),d=o(u),c=a(526),f=o(c),p=a(530),m=o(p),h=a(534),y=o(h),v=a(498),b=o(v),_=a(524),P=o(_),w=a(637),E=o(w),k=(0,y["default"])((0,d["default"])("DownloadLabel"),(0,f["default"])({isVisible:n.PropTypes.bool}))(function(e){var t=e.isVisible;return t?i["default"].createElement("span",{className:E["default"].label},"Download"):i["default"].createElement("span",null)}),N=(0,y["default"])((0,d["default"])("DownloadButton"),(0,f["default"])({photo:n.PropTypes.object.isRequired,actions:n.PropTypes.object.isRequired,type:n.PropTypes.oneOf(["default","alt"]),showLabel:n.PropTypes.bool,className:n.PropTypes.string}),(0,m["default"])({type:"default"}));t["default"]=N(function(e){var t=e.photo,a=e.actions,o=e.type,n=e.showLabel,s=e.className,u=function(){return a.trackPhotoDownloadButtonClick(t)};return i["default"].createElement(b["default"],{className:s,type:"default"===o?"outline":"outline-alt",size:"small",title:"Download photo",href:t.links.download,target:"_blank",onClick:u},i["default"].createElement("span",null,i["default"].createElement(P["default"],{type:"download",className:(0,r["default"])(E["default"].downloadIcon,l({},E["default"].labelIcon,n))}),i["default"].createElement(k,{isVisible:n})))})},637:function(e,t){e.exports={icon:"_11dQc",downloadIcon:"Apljk _11dQc",labelIcon:"_1Jd5C",label:"_2Aga-"}},638:function(e,t,a){"use strict";e.exports=a(639)},639:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){var a=e?{add_to_collection_view:"is_visible"}:{login_view:"is_visible",login_action:"add_to_collection"};return{pathname:t.pathname,query:a}}function n(e,t){return t.current_user_collections&&t.current_user_collections.length>0?"green":e}Object.defineProperty(t,"__esModule",{value:!0});var i=a(197),s=o(i),r=a(497),u=o(r),d=a(529),c=o(d),f=a(526),p=o(f),m=a(530),h=o(m),y=a(534),v=o(y),b=a(498),_=o(b),P=a(524),w=o(P),E=a(640),k=o(E),N=(0,v["default"])((0,c["default"])("AddToCollectionButton"),(0,p["default"])({type:i.PropTypes.oneOf(["default","alt"]),photo:i.PropTypes.object.isRequired,actions:i.PropTypes.object.isRequired,location:i.PropTypes.object.isRequired,className:i.PropTypes.string,authUser:i.PropTypes.object}),(0,h["default"])({type:"default"}));t["default"]=N(function(e){var t=e.photo,a=e.actions,o=e.location,i=e.type,r=e.className,d=e.authUser,c="default"===i?"outline":"outline-alt";return s["default"].createElement(_["default"],{className:(0,u["default"])(k["default"].buttonCollections,r),type:n(c,t),size:"small",tag:"link",title:"Add to collection",to:l(d,o),onClick:function(){return a.setSelectedPhoto(t)}},s["default"].createElement(w["default"],{type:"plus",className:k["default"].addIcon}))})},640:function(e,t){e.exports={icon:"_1wfvP",addIcon:"_2rdbO _1wfvP"}},645:function(e,t,a){"use strict";e.exports=a(646)},646:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){var a=e.params,o=e.loadContext;k["default"].photos.getPhoto(a.id).then(E.toJson).then(function(e){return/\/stats/.test(o.url)?void k["default"].photos.getPhotoStats(a.id).then(E.toJson).then(function(a){t(null,{asyncPropsSelectedPhoto:e,stats:{downloads:a.downloads,likes:a.likes,views:a.views}})}):void t(null,{asyncPropsSelectedPhoto:e})})["catch"](t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),d=a(197),c=o(d),f=a(429),p=o(f),m=a(497),h=o(m),y=a(481),v=o(y),b=a(495),_=o(b),P=a(587),w=a(647),E=a(463),k=o(E),N=a(622),g=a(478),C=a(629),T=o(C),B=a(632),I=o(B),O=a(635),j=o(O),V=a(638),M=o(V),L=a(584),R=o(L),x=a(648),S=o(x),q=a(651),U=o(q),A=a(524),D=o(A),W=a(654),G=o(W),J="Photos",F={selectedPhoto:d.PropTypes.object.isRequired,stats:d.PropTypes.object,location:d.PropTypes.object.isRequired,actions:d.PropTypes.object.isRequired,children:d.PropTypes.element,pixelRatio:d.PropTypes.number,windowWidth:d.PropTypes.number,auth:d.PropTypes.object},H=function(e){function t(e){n(this,t);var a=i(this,Object.getPrototypeOf(t).call(this,e)),o=e.actions,l=e.asyncPropsSelectedPhoto;return a.state={stats:e.stats,imgWidth:null},o.setSelectedPhoto(l),a}return s(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){!this.state.imgWidth&&e.windowWidth&&this.setState({imgWidth:e.windowWidth})}},{key:"isInfoView",value:function(){return this.isMetaView()||this.isStatsView()}},{key:"isMetaView",value:function(){var e=this.props.location;return/\/info/.test(e.pathname)}},{key:"isStatsView",value:function(){var e=this.props.location;return/\/stats/.test(e.pathname)}},{key:"fetchStats",value:function(){var e=this,t=this.props,a=t.selectedPhoto,o=t.actions;this.state.stats||(k["default"].photos.getPhotoStats(a.id).then(E.toJson).then(function(t){e.setState({stats:{downloads:t.downloads,likes:t.likes,views:t.views}})}),o.trackPhotoStatsFetching(a))}},{key:"handleLoadedImage",value:function(){this.setState({imageLoaded:!0})}},{key:"handleInfoClick",value:function(e){var t=this.props,a=t.selectedPhoto,o=t.actions,l="stats"===e?o.trackPhotoStatsButtonClick:o.trackPhotoInfoButtonClick;l(a)}},{key:"renderUser",value:function(){var e=this.props.selectedPhoto,t=e.user;return c["default"].createElement("div",{className:(0,h["default"])(G["default"].user,l({},G["default"].hideTopControls,this.isInfoView()))},c["default"].createElement(T["default"],{user:t,type:"alt",hideNameOnMobile:!0}))}},{key:"renderLogo",value:function(){return c["default"].createElement("div",{className:G["default"].logoContainer},c["default"].createElement("a",{href:"/",className:G["default"].logo,title:"Back to Unsplash"},c["default"].createElement(D["default"],{type:"logo",color:"#fff"})))}},{key:"renderActionButtons",value:function(){var e=this.props,t=e.selectedPhoto,a=e.actions,o=e.location,n=e.auth;return c["default"].createElement("div",{className:(0,h["default"])(G["default"].actionButtons,l({},G["default"].hideTopControls,this.isInfoView()))},c["default"].createElement(I["default"],{className:G["default"].actionButton,type:"alt",photo:t,actions:a,location:o,authUser:n.user,api:k["default"]}),c["default"].createElement(M["default"],{className:G["default"].actionButton,type:"alt",photo:t,actions:a,location:o,authUser:n.user}),c["default"].createElement(j["default"],{className:G["default"].actionButton,type:"alt",photo:t,actions:a,showLabel:!0}))}},{key:"renderHeader",value:function(){return c["default"].createElement("div",{className:G["default"].headerContainer},c["default"].createElement("div",{className:G["default"].header},this.renderUser(),this.renderLogo(),this.renderActionButtons()))}},{key:"renderLocation",value:function(){var e=this.props.selectedPhoto,t=(0,g.formatLocation)(e.location||{});return t?c["default"].createElement("div",{className:(0,h["default"])(G["default"].location,l({},G["default"].hideBottomControls,this.isInfoView()))},c["default"].createElement(D["default"],{className:G["default"].locationIcon,type:"location"}),t):null}},{key:"renderEditPhotoButton",value:function(){var e=this.props,t=e.selectedPhoto,a=e.auth;return(0,v["default"])(a,"user.username")!==(0,v["default"])(t,"user.username")?null:c["default"].createElement("div",{className:G["default"].editButtonContainer},c["default"].createElement("a",{className:G["default"].editButton,href:(0,g.railsUrl)()+"/account/photos"},"Edit"))}},{key:"renderInfoButtons",value:function(){var e=this.props.selectedPhoto;return c["default"].createElement("div",{className:(0,h["default"])(G["default"].infoButtons,l({},G["default"].hideBottomControls,this.isInfoView()))},c["default"].createElement("div",{className:G["default"].infoContainer},this.renderEditPhotoButton(),c["default"].createElement(R["default"],{className:G["default"].infoButtonContainer,label:"Info",width:50,bottom:40},c["default"].createElement(_["default"],{className:G["default"].infoButton,to:{pathname:"/photos/"+e.id+"/info"},onClick:this.handleInfoClick.bind(this,"info")},c["default"].createElement(D["default"],{className:G["default"].infoIcon,type:"info",color:"#fff"})))),c["default"].createElement(R["default"],{className:G["default"].infoButtonContainer,label:"Stats",width:50,bottom:40},c["default"].createElement(_["default"],{className:G["default"].infoButton,to:{pathname:"/photos/"+e.id+"/stats"},onMouseEnter:this.fetchStats.bind(this),onClick:this.handleInfoClick.bind(this,"stats")},c["default"].createElement(D["default"],{className:G["default"].infoIcon,type:"stats",color:"#fff"}))))}},{key:"renderFooter",value:function(){return c["default"].createElement("div",{className:G["default"].footerContainer},c["default"].createElement("div",{className:G["default"].footer},this.renderLocation(),this.renderInfoButtons()))}},{key:"renderMetaView",value:function(){var e=this.state.stats,t=this.props.selectedPhoto;return c["default"].createElement("div",{className:(0,h["default"])(G["default"].infoOverlay,l({},G["default"].isVisible,this.isInfoView()))},c["default"].createElement("div",{className:(0,h["default"])(G["default"].overlayContentContainer,l({},G["default"].contentContainerIsVisible,this.isInfoView()))},c["default"].createElement("div",{className:(0,h["default"])(G["default"].overlayContent,l({},G["default"].showContent,this.isMetaView()))},c["default"].createElement(S["default"],{photo:t})),c["default"].createElement("div",{className:(0,h["default"])(G["default"].overlayContent,l({},G["default"].showContent,this.isStatsView()))},c["default"].createElement(U["default"],{stats:e}))),c["default"].createElement("div",{className:G["default"].closeContainer},c["default"].createElement(_["default"],{className:(0,h["default"])(G["default"].close,l({},G["default"].showBottomControls,this.isInfoView())),to:{pathname:"/photos/"+t.id}},c["default"].createElement(D["default"],{className:G["default"].closeIcon,type:"cross"}),c["default"].createElement("span",{className:G["default"].closeLabel},"Close"))))}},{key:"render",value:function(){var e=this.props,t=e.selectedPhoto,a=e.windowWidth,o=e.pixelRatio,l=this.state,n=l.imgWidth,i=l.imageLoaded,s=t.user,r=t.width,u=t.height,d=(0,w.buildTitle)(s.name),f=(0,w.buildDescription)(s.name),m=(0,g.nodeUrl)()+"/photos/"+t.id,h=n,y=(0,N.getImageHeightFromWidth)(h,r,u),v=(0,g.buildImgixUrl)({url:t.urls.raw,width:h,height:y,auto:"format",pixelRatio:o}),b=(0,g.buildImgixUrl)({url:t.urls.raw,width:1080,height:(0,N.getImageHeightFromWidth)(1080,r,u),auto:"format",pixelRatio:o}),_=i&&a>1080?v:b;return c["default"].createElement("div",{className:G["default"].container,style:{zIndex:1e4,backgroundColor:t.color,backgroundImage:'url("'+_+'")'}},c["default"].createElement(p["default"],{title:d,meta:(0,P.buildPhotoMeta)(s,t,d,f,m)}),c["default"].createElement("img",{src:n?v:null,onLoad:this.handleLoadedImage.bind(this),style:{width:0,height:0,position:"absolute"}}),c["default"].createElement("div",{className:G["default"].overlay},this.renderHeader(),this.renderFooter(),this.renderMetaView()))}}]),t}(d.Component);t["default"]=H,H.displayName=J,H.propTypes=F,H.loadProps=r},647:function(e,t){"use strict";function a(e){return"Photo by "+e+" | Unsplash"}function o(e){return"Do-whatever-you-want high-resolution photo from "+e+" on Unsplash."}Object.defineProperty(t,"__esModule",{value:!0}),t.buildTitle=a,t.buildDescription=o},648:function(e,t,a){"use strict";e.exports=a(649)},649:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.photo,a=t.width,o=t.height,l=t.exif,i=void 0===l?{}:l;return s["default"].createElement("div",{className:d["default"].container},s["default"].createElement("div",{className:d["default"].mainInfo},s["default"].createElement(n,{label:"Published",value:(0,r.formatDate)(new Date(t.created_at))}),s["default"].createElement(n,{label:"Dimensions",value:a+" x "+o})),s["default"].createElement("div",null,Object.keys(i).map(function(e){return s["default"].createElement(n,{key:e,label:e.replace("_"," "),value:i[e]})})))}function n(e){var t=e.label,a=e.value;return s["default"].createElement("div",{className:d["default"].stat},s["default"].createElement("label",{className:d["default"].label},t),s["default"].createElement("span",{className:d["default"].value},a||"---"))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l;var i=a(197),s=o(i),r=a(478),u=a(650),d=o(u),c={photo:i.PropTypes.object.isRequired};l.propTypes=c,n.propTypes={label:i.PropTypes.string.isRequired,value:i.PropTypes.oneOfType([i.PropTypes.string,i.PropTypes.number]).isRequired}},650:function(e,t){e.exports={container:"_1MunQ",mainInfo:"_3kD75",stat:"_1rn2C",MaisVisible:"_24fNa",label:"lyiyI _22Som",value:"_3bbq7 _3myVE"}},651:function(e,t,a){"use strict";e.exports=a(652)},652:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.stats;return s["default"].createElement("div",{className:d["default"].stats},t?Object.keys(t).map(function(e){return s["default"].createElement(n,{key:e,label:e,value:t[e]})}):null)}function n(e){var t=e.label,a=e.value;return s["default"].createElement("div",{className:d["default"].stat},s["default"].createElement("label",{className:d["default"].label},t),s["default"].createElement("span",{className:d["default"].value},(0,r.formatNumber)(a)))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l;var i=a(197),s=o(i),r=a(478),u=a(653),d=o(u);l.propTypes={stats:i.PropTypes.object},n.propTypes={label:i.PropTypes.string.isRequired,value:i.PropTypes.number.isRequired}},653:function(e,t){e.exports={stats:"_2Tg9H",stat:"_3TNUW",label:"_2eKkf _22Som",value:"lhhRo _3myVE"}},654:function(e,t){e.exports={container:"_1Mt4k",overlay:"_1DgUN",headerContainer:"_3JfBw",header:"_3KncD _1VOuf",user:"_23nes _2B-vG",logoContainer:"xLYBX",logo:"_2Y5FL _2tPAp",actionButtons:"_3nZCU _2B-vG",actionButton:"_1dwyh",footerContainer:"_3hRrb",footer:"_1ihmd _1VOuf",location:"_3dElQ _2B-vG _3myVE",locationIcon:"_31fav",infoButtons:"Vqu5S _2B-vG",infoContainer:"_3cMvr",infoButtonContainer:"_3YoZB",infoButton:"Zim07 _2tPAp",infoIcon:"_2-4nu",infoOverlay:"E-tSg _2B-vG",overlayContentContainer:"_31yNB _2B-vG",contentContainerIsVisible:"_3-VqZ",overlayContent:"_3fqOJ _2B-vG",showContent:"_3iqZB",isVisible:"_2FktR",closeContainer:"_2_u20",close:"_2A0gA _1VOuf _2tPAp _2B-vG",closeIcon:"wlTke",closeLabel:"XymzI _22Som",hideTopControls:"_2w96w",hideBottomControls:"_3ZiGW",showBottomControls:"rEBvH",editButtonContainer:"_2AfJ5",editButton:"_2ovqU _22Som _2tPAp _2B-vG"}}});
//# sourceMappingURL=15.4d9fe.main.js.map