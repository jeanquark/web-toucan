(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{408:function(t,e,n){"use strict";(function(t){n(24),n(16),n(27),n(43),n(53),n(47),n(432),n(70);var r=n(19);e.a={data:function(){return{loading:!1,messageSentSuccess:!1,messageSentError:!1,form:{firstname:"",lastname:"",email:"",message:""},valid:!0}},computed:{},methods:{onFocus:function(){console.log("onFocus"),this.messageSentSuccess=!1,this.messageSentError=!1},encodeHTML:function(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},sendContactForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log("sendContactForm3"),n=t.$refs.form.validate(),console.log("valid: ",n),!n){e.next=10;break}return t.loading=!0,e.next=8,fetch("https://script.google.com/macros/s/AKfycbxUyOBod71w88TG7KWS66TYvlQWM2-Q8v6l0yez/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({firstname:"".concat(t.encodeHTML(t.form.firstname)),lastname:"".concat(t.encodeHTML(t.form.lastname)),email:"".concat(t.encodeHTML(t.form.email)),message:"".concat(t.encodeHTML(t.form.message))})});case 8:200===e.sent.status&&(t.loading=!1,t.messageSentError=!1,t.messageSentSuccess=!0);case 10:e.next=18;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error: ",e.t0),t.loading=!1,t.messageSentSuccess=!1,t.messageSentError=!0;case 18:case"end":return e.stop()}}),e,null,[[0,12]])})))()},sendContactForm_mailgun:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.$refs.form.validate(),console.log("valid: ",r),!r){n.next=20;break}return n.prev=3,e.loading=!0,n.next=7,mg.messages.create("web-toucan.com",{from:"Contact form http://web-toucan.com",to:[t.env.NUXT_ENV_MAILGUN_DESTINATION_EMAIL_ADDRESS],subject:"New contact form from web-toucan.com",html:"Email sent on ".concat(new Date,".<br /><br />\n                        Here are the information sent:<br />\n                        firstname: <b>").concat(e.encodeHTML(e.form.firstname),"</b><br />\n                        lastname: <b>").concat(e.encodeHTML(e.form.lastname),"</b><br />\n                        email: <b>").concat(e.encodeHTML(e.form.email),"</b><br />\n                        message: <b>").concat(e.encodeHTML(e.form.message),"</b><br />\n                    ")});case 7:o=n.sent,console.log("msg: ",o),e.loading=!1,e.messageSentError=!1,e.messageSentSuccess=!0,n.next=20;break;case 14:n.prev=14,n.t0=n.catch(3),console.log("error: ",n.t0),e.loading=!1,e.messageSentSuccess=!1,e.messageSentError=!0;case 20:case"end":return n.stop()}}),n,null,[[3,14]])})))()}}}}).call(this,n(201))},409:function(t,e,n){var content=n(420);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("2d99f397",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n.r(e);n(10);var r={data:function(){return{}},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},o=n(74),c=n(93),l=n.n(c),m=n(400),v=n(399),d=n(388),f=n(389),_=n(465),h=n(395),x=n(181),y=n(466),w=n(390),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{staticClass:"hidden-sm-and-down",attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{staticClass:"my-3",attrs:{cols:"12",sm:"10"}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-card",{staticClass:"transparent",attrs:{flat:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return n("v-icon",{attrs:{size:"4em",color:r?"secondary":"primary"}},[t._v("laptop")])}}])})],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return n("v-icon",{attrs:{size:"4em",color:r?"secondary":"primary"}},[t._v("palette")])}}])})],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return n("v-icon",{attrs:{size:"4em",color:r?"secondary":"primary"}},[t._v("pie_chart")])}}])})],1)],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},t._l(this.$t("activities").length,(function(e){return n("v-col",{key:e,attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"headline text-center"},[t._v("\n                                "+t._s(t.$t("activities["+(e-1)+"].title"))+"\n                            ")])])})),1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},t._l(this.$t("activities").length,(function(e){return n("v-col",{key:e,attrs:{cols:"12",md:"4"}},[t._v("\n                            "+t._s(t.$t("activities["+(e-1)+"].content"))+"\n                        ")])})),1)],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"hidden-md-and-up",attrs:{"no-gutters":""}},[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:"",md4:""}},t._l(this.$t("activities").length,(function(e){return n("v-card",{key:e,staticClass:"elevation-0 transparent"},[n("v-card-text",{staticClass:"text-xs-center"},[n("v-icon",[t._v("mdi_domain")])],1),t._v(" "),n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v(t._s(t.$t("activities["+(e-1)+"].title")))])]),t._v(" "),n("v-card-text",[t._v("\n                            "+t._s(t.$t("activities["+(e-1)+"].content"))+"\n                        ")])],1)})),1)],1)],1)],1)],1)}),[],!1,null,"ab319372",null);e.default=component.exports;l()(component,{VCard:m.a,VCardText:v.b,VCardTitle:v.c,VCol:d.a,VContainer:f.a,VFlex:_.a,VHover:h.a,VIcon:x.a,VLayout:y.a,VRow:w.a})},414:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tab:null}},computed:{testimonials:function(){return this.$t("testimonials")}}},o=n(74),c=n(93),l=n.n(c),m=n(400),v=n(399),d=n(388),f=n(390),_=n(468),h=n(479),x=n(477),y=n(458),w=n(429),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{staticClass:"my-5",attrs:{justify:"center"}},[n("v-col",{staticClass:"my-3",attrs:{cols:"12",md:"10",lg:"8"}},[n("v-tabs",{attrs:{centered:"",dark:"","icons-and-text":"","background-color":"primary",height:"100"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{staticStyle:{height:"5px"}}),t._v(" "),t._l(t.testimonials.length,(function(e){return n("v-tab",{key:e,staticClass:"white--text",attrs:{href:"#tab-"+e,ripple:""}},[t._v("\n                    "+t._s(t.testimonials[e-1]?t.testimonials[e-1].title:"")+"\n                    "),t.testimonials[e-1]?n("img",{staticStyle:{padding:"10px 0px"},attrs:{src:"images/testimonials/"+t.testimonials[e-1]["image-logo"],width:"40"}}):t._e()])}))],2),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.testimonials.length,(function(e){return n("v-tab-item",{key:e,attrs:{value:"tab-"+e}},[n("v-card",{attrs:{flat:""}},[t.testimonials[e-1]?n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticStyle:{cursor:"pointer"},attrs:{cols:"12",md:"4"}},[n("img",{attrs:{src:"images/testimonials/"+t.testimonials[e-1].image,width:"100%"}})]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",{staticStyle:{"line-height":"2em",padding:"40px"}},[t._v('\n                                    "'),n("i",[t._v(" "+t._s(t.testimonials[e-1].content)+" ")]),t._v('"\n                                ')])],1)],1):t._e()],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:m.a,VCardText:v.b,VCol:d.a,VRow:f.a,VTab:_.a,VTabItem:h.a,VTabs:x.a,VTabsItems:y.a,VTabsSlider:w.a})},415:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{}},computed:{team_members:function(){return this.$t("team_members")}}},o=n(74),c=n(93),l=n.n(c),m=n(185),v=n(400),d=n(399),f=n(388),_=n(469),h=n(470),x=n(471),y=n(472),w=n(390),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"10",lg:"4"}},[n("v-card",{attrs:{flat:""}},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("\n                "+t._s(t.$t("company.title"))+"\n            ")])]),t._v(" "),n("v-card-text",[t._v("\n            "+t._s(t.$t("company.content"))+"\n        ")]),t._v(" "),n("br"),t._v(" "),n("v-expansion-panels",{attrs:{accordion:""}},t._l(t.team_members.length,(function(e){return n("v-expansion-panel",{key:e,staticStyle:{"box-shadow":"none"}},[t.team_members[e-1]?n("v-expansion-panel-header",[n("v-row",{attrs:{"no-gutters":"",align:"center"}},[n("v-col",{attrs:{cols:"3"}},[n("v-avatar",{attrs:{size:100,color:"grey lighten-4"}},[n("img",{attrs:{src:"images/teams/"+t.team_members[e-1].image,alt:"avatar"}})])],1),t._v(" "),n("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"9"}},[n("div",[n("span",{staticClass:"primary--text"},[t._v(" "+t._s(t.team_members[e-1].name)+" ")]),n("br"),n("br"),n("span",{staticClass:"grey--text text--darken-2"},[t._v("\n                                    "+t._s(t.team_members[e-1].role)+"\n                                ")])])])],1)],1):t._e(),t._v(" "),n("v-expansion-panel-content",[t._v("\n                    "+t._s(t.team_members[e-1].content)+"\n                ")])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:m.a,VCard:v.a,VCardText:d.b,VCardTitle:d.c,VCol:f.a,VExpansionPanel:_.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:x.a,VExpansionPanels:y.a,VRow:w.a})},416:function(t,e,n){"use strict";n.r(e);var r=n(408).a,o=n(74),c=n(93),l=n.n(c),m=n(480),v=n(205),d=n(400),f=n(399),_=n(388),h=n(473),x=n(457),y=n(474),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"10",lg:"4"}},[n("v-card",{staticStyle:{padding:"0px 40px"},attrs:{flat:""}},[n("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v("\n                "+t._s(t.$t("contact.title"))+"\n            ")])]),t._v(" "),n("v-card-text",{},[t._v("\n            "+t._s(t.$t("contact.content"))+"\n            "),n("br"),n("br")]),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.sendContactForm(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{name:"firstname",label:""+t.$t("form.firstname"),counter:32,rules:[function(e){return!!e||t.$t("form.firstname")+" "+t.$t("validation.is_required")},function(e){return e&&e.length<=32||t.$t("form.firstname")+" "+t.$t("validation.max_length")+" 32 "+t.$t("validation.characters")}]},on:{focus:t.onFocus},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}}),t._v(" "),n("v-text-field",{attrs:{name:"lastname",label:""+t.$t("form.lastname"),counter:32,rules:[function(e){return!!e||t.$t("form.lastname")+" "+t.$t("validation.is_required")},function(e){return e&&e.length<=32||t.$t("form.lastname")+" "+t.$t("validation.max_length")+" 32 "+t.$t("validation.characters")}]},on:{focus:t.onFocus},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}}),t._v(" "),n("v-text-field",{attrs:{name:"email",label:""+t.$t("form.email"),rules:[function(e){return!!e||t.$t("form.email")+" "+t.$t("validation.is_required")},function(e){return/.+@.+\..+/.test(e)||t.$t("form.email")+" "+t.$t("validation.is_valid")}]},on:{focus:t.onFocus},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("v-textarea",{attrs:{name:"message",rows:"6",label:""+t.$t("form.your_message"),rules:[function(e){return!!e||t.$t("form.your_message")+" "+t.$t("validation.is_required")},function(e){return e&&e.length<=2048||t.$t("form.your_message")+" "+t.$t("validation.max_length")+" 2048 "+t.$t("validation.characters")}]},on:{focus:t.onFocus},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}}),t._v(" "),n("br"),t._v(" "),t.messageSentSuccess||t.messageSentError?t._e():n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{color:"secondary",type:"submit",disabled:!t.valid,loading:t.loading}},[t._v(t._s(t.$t("form.submit")))])],1)],1),t._v(" "),t.messageSentSuccess?n("v-alert",{attrs:{type:"success"}},[t._v("\n            "+t._s(t.$t("form.message_success"))+"\n        ")]):t._e(),t._v(" "),t.messageSentError?n("v-alert",{attrs:{type:"error",prominent:""}},[t._v("\n            "+t._s(t.$t("form.message_error"))+"\n        ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAlert:m.a,VBtn:v.a,VCard:d.a,VCardText:f.b,VCardTitle:f.c,VCol:_.a,VForm:h.a,VTextField:x.a,VTextarea:y.a})},419:function(t,e,n){"use strict";n(409)},420:function(t,e,n){(e=n(20)(!1)).push([t.i,".icon[data-v-87b5a6fe]{color:rgba(0,0,0,.54)}.icon-success[data-v-87b5a6fe]{color:var(--v-success-base)}.flip-card[data-v-87b5a6fe]{background-color:transparent;perspective:1000px}.flip-card-inner[data-v-87b5a6fe]{position:relative;width:100%;height:100%;text-align:center;transition:transform .6s;transform-style:preserve-3d;box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}.flip-card:hover .flip-card-inner[data-v-87b5a6fe]{transform:rotateY(180deg)}.flip-card-back[data-v-87b5a6fe],.flip-card-front[data-v-87b5a6fe]{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.flip-card-back[data-v-87b5a6fe]{transform:rotateY(180deg)}",""]),t.exports=e},475:function(t,e,n){"use strict";n.r(e);var r=n(413),o={data:function(){return{prices:["500","1'500","2'000+"],colors:["#8ac5ff","#64B5F6","#1976d2"]}}},c=(n(419),n(74)),l=n(93),m=n.n(l),v=n(400),d=n(399),f=n(467),_=n(388),h=n(395),x=n(181),y=n(182),w=n(122),C=n(183),$=n(184),V=n(59),k=n(390),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{staticClass:"my-5",attrs:{"no-gutters":"",wrap:"",justify:"center"}},[n("v-col",{staticClass:"my-3",attrs:{cols:"12",md:"8"}},[n("v-row",{attrs:{"no-gutters":"",wrap:""}},t._l(this.$t("packages").length,(function(e){return n("v-col",{key:e,attrs:{cols:"12",md:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return n("v-card",{staticClass:"white--text",class:"elevation-"+(o?10:0),attrs:{flat:"",color:t.colors[e-1],height:"400"}},[n("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[n("div",{staticClass:"text-center",attrs:{color:""}},[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.$t("packages["+(e-1)+"].title")))])])]),t._v(" "),n("v-card-text",{staticStyle:{padding:"30px"}},[n("v-list",{staticStyle:{"background-color":"#d7ebff"},attrs:{subheader:""}},[n("v-list-item",[n("v-list-item-avatar",[n("v-icon",{attrs:{color:""}},[t._v("web")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("packages["+(e-1)+"].asset1")))])],1),t._v(" "),n("v-list-item-action",[n("v-icon",{attrs:{text:"white",color:"green"}},[t._v("check_circle")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-avatar",[n("v-icon",[t._v("email")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("packages["+(e-1)+"].asset2")))])],1),t._v(" "),n("v-list-item-action",[n("v-icon",{attrs:{color:"green"}},[t._v("check_circle")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-avatar",[n("v-icon",[t._v("search")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("packages["+(e-1)+"].asset3")))])],1),t._v(" "),n("v-list-item-action",[n("v-icon",{attrs:{color:"green"}},[t._v("check_circle")])],1)],1)],1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"text-center"},[n("div",{staticClass:"flip-card"},[n("div",{staticClass:"flip-card-inner"},[n("div",{staticClass:"flip-card-front"},[n("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("CHF "+t._s(t.prices[e-1])+" ")],1)],1),t._v(" "),n("div",{staticClass:"flip-card-back"},[n("v-chip",{attrs:{label:"",color:"orange","text-color":"white"}},[t._v(" "+t._s(t.$t("all_inclusive"))),n("v-icon",{attrs:{right:""}},[t._v("done")])],1)],1)])])])],1)],1)}}],null,!0)})],1)})),1)],1)],1)],1)}),[],!1,null,"87b5a6fe",null),S=component.exports;m()(component,{VCard:v.a,VCardText:d.b,VCardTitle:d.c,VChip:f.a,VCol:_.a,VHover:h.a,VIcon:x.a,VList:y.a,VListItem:w.a,VListItemAction:C.a,VListItemAvatar:$.a,VListItemContent:V.a,VListItemTitle:V.b,VRow:k.a});var T=n(414),j=n(415),E=n(416),L={components:{WhatWeDo:r.default,OurPackages:S,Testimonials:T.default,Team:j.default,Contact:E.default},data:function(){return{}},computed:{image1:function(){var t=window?window.innerWidth:null;return t<800?"images/image2-800-min.jpg":t<1200?"images/image2-1200-min.jpg":t<=1600?"images/image2-1600-min.jpg":t<=2200?"images/image2-2200-min.jpg":t<=2600?"images/image2-2600-min.jpg":"images/image2-3200-min.jpg"},image2:function(){var t=window?window.innerWidth:null;return t<800?"images/image3-800-min.jpg":t<1200?"images/image3-1200-min.jpg":t<1600?"images/image3-1600-min.jpg":t<2200?"images/image3-2200-min.jpg":t<2600?"images/image3-2600-min.jpg":"images/image3-3200-min.jpg"}}},F=n(389),H=n(393),M=n(478),I=Object(c.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("section",[n("client-only",[n("v-parallax",{attrs:{src:t.image1,height:"600"}})],1)],1),t._v(" "),n("v-container",[n("what-we-do")],1),t._v(" "),n("section",[n("client-only",[n("v-parallax",{attrs:{src:t.image2,height:"380"}})],1)],1),t._v(" "),n("section",[n("our-packages")],1),t._v(" "),n("section",[n("testimonials")],1),t._v(" "),n("section",[n("v-row",{staticClass:"mb-5",attrs:{"no-gutters":"",justify:"center"}},[n("team"),t._v(" "),n("contact")],1)],1)],1)}),[],!1,null,"55835522",null);e.default=I.exports;m()(I,{WhatWeDo:n(413).default,Testimonials:n(414).default,Team:n(415).default,Contact:n(416).default}),m()(I,{VContainer:F.a,VMain:H.a,VParallax:M.a,VRow:k.a})}}]);