(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{409:function(t,e,r){var content=r(420);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("d356e0b0",content,!0,{sourceMap:!1})},413:function(t,e,r){"use strict";r.r(e);r(10);var n={data:function(){return{icons:["laptop","palette","pie_chart"]}},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},o=r(74),c=r(93),l=r.n(c),m=r(401),v=r(400),d=r(389),f=r(390),_=r(466),h=r(396),x=r(181),y=r(467),w=r(391),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{staticClass:"hidden-sm-and-down",attrs:{"no-gutters":"",justify:"center"}},[r("v-col",{staticClass:"my-3",attrs:{cols:"12",sm:"10"}},[r("v-container",{attrs:{"grid-list-xl":""}},[r("v-card",{staticClass:"transparent",attrs:{flat:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return r("v-icon",{attrs:{size:"4em",color:n?"secondary":"primary"}},[t._v("laptop")])}}])})],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return r("v-icon",{attrs:{size:"4em",color:n?"secondary":"primary"}},[t._v("palette")])}}])})],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return r("v-icon",{attrs:{size:"4em",color:n?"secondary":"primary"}},[t._v("pie_chart")])}}])})],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},t._l(this.$t("activities").length,(function(e){return r("v-col",{key:e,attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"headline text-center"},[t._v("\n                                "+t._s(t.$t("activities["+(e-1)+"].title"))+"\n                            ")])])})),1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},t._l(this.$t("activities").length,(function(e){return r("v-col",{key:e,attrs:{cols:"12",md:"4"}},[t._v("\n                            "+t._s(t.$t("activities["+(e-1)+"].content"))+"\n                        ")])})),1)],1)],1)],1)],1),t._v(" "),r("v-row",{staticClass:"hidden-md-and-up",attrs:{"no-gutters":""}},[r("v-container",{attrs:{"grid-list-xl":""}},[r("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:"",md4:""}},t._l(this.$t("activities").length,(function(e){return r("v-card",{key:e,staticClass:"elevation-0 transparent"},[r("v-card-text",{staticClass:"text-center"},[r("v-icon",{attrs:{size:"3em",color:e%2==0?"secondary":"primary"}},[t._v(t._s(t.icons[e-1]))])],1),t._v(" "),r("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[r("div",{staticClass:"headline"},[t._v(t._s(t.$t("activities["+(e-1)+"].title")))])]),t._v(" "),r("v-card-text",[t._v("\n                            "+t._s(t.$t("activities["+(e-1)+"].content"))+"\n                        ")])],1)})),1)],1)],1)],1)],1)}),[],!1,null,"7c45db20",null);e.default=component.exports;l()(component,{VCard:m.a,VCardText:v.b,VCardTitle:v.c,VCol:d.a,VContainer:f.a,VFlex:_.a,VHover:h.a,VIcon:x.a,VLayout:y.a,VRow:w.a})},414:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{tab:null}},computed:{testimonials:function(){return this.$t("testimonials")}}},o=r(74),c=r(93),l=r.n(c),m=r(401),v=r(400),d=r(389),f=r(391),_=r(469),h=r(481),x=r(479),y=r(458),w=r(429),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{staticClass:"my-5",attrs:{justify:"center"}},[r("v-col",{staticClass:"my-3",attrs:{cols:"12",md:"10",lg:"8"}},[r("v-tabs",{attrs:{centered:"",dark:"","icons-and-text":"","background-color":"primary",height:"100"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider",{staticStyle:{height:"5px"}}),t._v(" "),t._l(t.testimonials.length,(function(e){return r("v-tab",{key:e,staticClass:"white--text",attrs:{href:"#tab-"+e,ripple:""}},[t._v("\n                    "+t._s(t.testimonials[e-1]?t.testimonials[e-1].title:"")+"\n                    "),t.testimonials[e-1]?r("img",{staticStyle:{padding:"10px 0px"},attrs:{src:"images/testimonials/"+t.testimonials[e-1]["image-logo"],width:"40"}}):t._e()])}))],2),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.testimonials.length,(function(e){return r("v-tab-item",{key:e,attrs:{value:"tab-"+e}},[r("v-card",{attrs:{flat:""}},[t.testimonials[e-1]?r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticStyle:{cursor:"pointer"},attrs:{cols:"12",md:"4"}},[r("img",{attrs:{src:"images/testimonials/"+t.testimonials[e-1].image,width:"100%"}})]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card-text",{staticStyle:{"line-height":"2em",padding:"40px"}},[t._v('\n                                    "'),r("i",[t._v(" "+t._s(t.testimonials[e-1].content)+" ")]),t._v('"\n                                ')])],1)],1):t._e()],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:m.a,VCardText:v.b,VCol:d.a,VRow:f.a,VTab:_.a,VTabItem:h.a,VTabs:x.a,VTabsItems:y.a,VTabsSlider:w.a})},415:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{}},computed:{team_members:function(){return this.$t("team_members")}}},o=r(74),c=r(93),l=r.n(c),m=r(185),v=r(401),d=r(400),f=r(389),_=r(470),h=r(471),x=r(472),y=r(473),w=r(391),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{cols:"12",md:"10",lg:"4"}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[r("div",{staticClass:"headline"},[t._v("\n                "+t._s(t.$t("company.title"))+"\n            ")])]),t._v(" "),r("v-card-text",[t._v("\n            "+t._s(t.$t("company.content"))+"\n        ")]),t._v(" "),r("br"),t._v(" "),r("v-expansion-panels",{attrs:{accordion:""}},t._l(t.team_members.length,(function(e){return r("v-expansion-panel",{key:e,staticStyle:{"box-shadow":"none"}},[t.team_members[e-1]?r("v-expansion-panel-header",[r("v-row",{attrs:{"no-gutters":"",align:"center"}},[r("v-col",{attrs:{cols:"3"}},[r("v-avatar",{attrs:{size:100,color:"grey lighten-4"}},[r("img",{attrs:{src:"images/teams/"+t.team_members[e-1].image,alt:"avatar"}})])],1),t._v(" "),r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"9"}},[r("div",[r("span",{staticClass:"primary--text"},[t._v(" "+t._s(t.team_members[e-1].name)+" ")]),r("br"),r("br"),r("span",{staticClass:"grey--text text--darken-2"},[t._v("\n                                    "+t._s(t.team_members[e-1].role)+"\n                                ")])])])],1)],1):t._e(),t._v(" "),r("v-expansion-panel-content",[t._v("\n                    "+t._s(t.team_members[e-1].content)+"\n                ")])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:m.a,VCard:v.a,VCardText:d.b,VCardTitle:d.c,VCol:f.a,VExpansionPanel:_.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:x.a,VExpansionPanels:y.a,VRow:w.a})},416:function(t,e,r){"use strict";r.r(e);r(16),r(27),r(43),r(53),r(47),r(432),r(70);var n=r(19),o={data:function(){return{loading:!1,messageSentSuccess:!1,messageSentError:!1,form:{firstname:"",lastname:"",email:"",message:""},valid:!0}},computed:{},methods:{onFocus:function(){this.messageSentSuccess=!1,this.messageSentError=!1},encodeHTML:function(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},sendContactForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.$refs.form.validate()){e.next=8;break}return t.loading=!0,e.next=6,fetch("https://script.google.com/macros/s/AKfycbyUbXcwQHeGAjSrDHbIx84PcM1FCEs-S3SnwZjHKQ/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({firstname:"".concat(t.encodeHTML(t.form.firstname)),lastname:"".concat(t.encodeHTML(t.form.lastname)),email:"".concat(t.encodeHTML(t.form.email)),message:"".concat(t.encodeHTML(t.form.message))})});case 6:200===e.sent.status&&(t.$refs.form.reset(),t.loading=!1,t.messageSentError=!1,t.messageSentSuccess=!0);case 8:e.next=16;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error: ",e.t0),t.loading=!1,t.messageSentSuccess=!1,t.messageSentError=!0;case 16:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},c=r(74),l=r(93),m=r.n(l),v=r(482),d=r(206),f=r(401),_=r(400),h=r(389),x=r(474),y=r(457),w=r(475),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{cols:"12",md:"10",lg:"4"}},[r("v-card",{staticStyle:{padding:"0px 40px"},attrs:{flat:""}},[r("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[r("div",{staticClass:"headline"},[t._v("\n                "+t._s(t.$t("contact.title"))+"\n            ")])]),t._v(" "),r("v-card-text",{},[t._v("\n            "+t._s(t.$t("contact.content"))+"\n            "),r("br"),r("br")]),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.sendContactForm(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{name:"firstname",label:""+t.$t("form.firstname"),counter:32,rules:[function(e){return!!e||t.$t("form.firstname")+" "+t.$t("validation.is_required")},function(e){return e&&e.length<=32||t.$t("form.firstname")+" "+t.$t("validation.max_length")+" 32 "+t.$t("validation.characters")}]},on:{focus:t.onFocus},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}}),t._v(" "),r("v-text-field",{attrs:{name:"lastname",label:""+t.$t("form.lastname"),counter:32,rules:[function(e){return!!e||t.$t("form.lastname")+" "+t.$t("validation.is_required")},function(e){return e&&e.length<=32||t.$t("form.lastname")+" "+t.$t("validation.max_length")+" 32 "+t.$t("validation.characters")}]},on:{focus:t.onFocus},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}}),t._v(" "),r("v-text-field",{attrs:{name:"email",label:""+t.$t("form.email"),rules:[function(e){return!!e||t.$t("form.email")+" "+t.$t("validation.is_required")},function(e){return/.+@.+\..+/.test(e)||t.$t("form.email")+" "+t.$t("validation.is_valid")}]},on:{focus:t.onFocus},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("v-textarea",{attrs:{name:"message",rows:"6",label:""+t.$t("form.your_message"),rules:[function(e){return!!e||t.$t("form.your_message")+" "+t.$t("validation.is_required")},function(e){return e&&e.length<=2048||t.$t("form.your_message")+" "+t.$t("validation.max_length")+" 2048 "+t.$t("validation.characters")}]},on:{focus:t.onFocus},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}}),t._v(" "),r("br"),t._v(" "),t.messageSentSuccess||t.messageSentError?t._e():r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{color:"secondary",type:"submit",disabled:!t.valid,loading:t.loading}},[t._v(t._s(t.$t("form.submit")))])],1)],1),t._v(" "),t.messageSentSuccess?r("v-alert",{attrs:{type:"success"}},[t._v("\n            "+t._s(t.$t("form.message_success"))+"\n        ")]):t._e(),t._v(" "),t.messageSentError?r("v-alert",{attrs:{type:"error",prominent:""}},[t._v("\n            "+t._s(t.$t("form.message_error"))+"\n        ")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAlert:v.a,VBtn:d.a,VCard:f.a,VCardText:_.b,VCardTitle:_.c,VCol:h.a,VForm:x.a,VTextField:y.a,VTextarea:w.a})},419:function(t,e,r){"use strict";r(409)},420:function(t,e,r){(e=r(20)(!1)).push([t.i,".icon[data-v-09206c14]{color:rgba(0,0,0,.54)}.icon-success[data-v-09206c14]{color:var(--v-success-base)}.flip-card[data-v-09206c14]{background-color:transparent;perspective:1000px}.flip-card-inner[data-v-09206c14]{position:relative;width:100%;height:100%;text-align:center;transition:transform .6s;transform-style:preserve-3d;box-shadow:0 4px 8px 0 rgba(0,0,0,.2)}.flip-card:hover .flip-card-inner[data-v-09206c14]{transform:rotateY(180deg)}.flip-card-back[data-v-09206c14],.flip-card-front[data-v-09206c14]{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.flip-card-back[data-v-09206c14]{transform:rotateY(180deg)}.white-space[data-v-09206c14]{white-space:normal}",""]),t.exports=e},477:function(t,e,r){"use strict";r.r(e);var n=r(413),o={data:function(){return{prices:["500","1'500","2'000+"],colors:["#8ac5ff","#64B5F6","#1976d2"],iconsSecondLine:["email","admin_panel_settings","code"],iconsThirdLine:["search","functions","compare_arrows"]}}},c=(r(419),r(74)),l=r(93),m=r.n(l),v=r(401),d=r(400),f=r(468),_=r(389),h=r(396),x=r(181),y=r(182),w=r(122),C=r(183),$=r(184),V=r(59),k=r(186),S=r(391),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{staticClass:"my-5",attrs:{"no-gutters":"",wrap:"",justify:"center"}},[r("v-col",{staticClass:"my-3",attrs:{cols:"12",md:"8"}},[r("v-row",{attrs:{"no-gutters":"",wrap:""}},t._l(this.$t("packages").length,(function(e){return r("v-col",{key:e,attrs:{cols:"12",md:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return r("v-card",{staticClass:"white--text",class:"elevation-"+(o?10:0),attrs:{flat:"",color:t.colors[e-1],height:"400"}},[r("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[r("div",{staticClass:"text-center",attrs:{color:""}},[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.$t("packages["+(e-1)+"].title")))])])]),t._v(" "),r("v-card-text",{staticStyle:{padding:"30px"}},[r("v-list",{staticStyle:{"background-color":"#d7ebff"},attrs:{subheader:""}},[r("v-list-item-group",[r("v-list-item",[r("v-list-item-avatar",[r("v-icon",{attrs:{color:""}},[t._v("web")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white-space"},[t._v(t._s(t.$t("packages["+(e-1)+"].asset1")))])],1),t._v(" "),r("v-list-item-action",[r("v-icon",{attrs:{text:"white",color:"green"}},[t._v("check_circle")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[t._v(t._s(t.iconsSecondLine[e-1]))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white-space"},[t._v(t._s(t.$t("packages["+(e-1)+"].asset2")))])],1),t._v(" "),r("v-list-item-action",[r("v-icon",{attrs:{color:"green"}},[t._v("check_circle")])],1)],1),t._v(" "),r("v-list-item",[r("v-list-item-avatar",[r("v-icon",[t._v(t._s(t.iconsThirdLine[e-1]))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white-space"},[t._v(t._s(t.$t("packages["+(e-1)+"].asset3")))])],1),t._v(" "),r("v-list-item-action",[r("v-icon",{attrs:{color:"green"}},[t._v("check_circle")])],1)],1)],1)],1),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"text-center"},[r("div",{staticClass:"flip-card"},[r("div",{staticClass:"flip-card-inner"},[r("div",{staticClass:"flip-card-front"},[r("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("CHF "+t._s(t.prices[e-1])+" ")],1)],1),t._v(" "),r("div",{staticClass:"flip-card-back"},[r("v-chip",{attrs:{label:"",color:"orange","text-color":"white"}},[t._v(" "+t._s(t.$t("all_inclusive"))),r("v-icon",{attrs:{right:""}},[t._v("done")])],1)],1)])])])],1)],1)}}],null,!0)})],1)})),1)],1)],1)],1)}),[],!1,null,"09206c14",null),T=component.exports;m()(component,{VCard:v.a,VCardText:d.b,VCardTitle:d.c,VChip:f.a,VCol:_.a,VHover:h.a,VIcon:x.a,VList:y.a,VListItem:w.a,VListItemAction:C.a,VListItemAvatar:$.a,VListItemContent:V.a,VListItemGroup:k.a,VListItemTitle:V.b,VRow:S.a});var j=r(414),L=r(415),E=r(416),F={components:{WhatWeDo:n.default,OurPackages:T,Testimonials:j.default,Team:L.default,Contact:E.default},data:function(){return{}},computed:{}},H=r(390),I=r(476),z=r(394),O=r(480),P=Object(c.a)(F,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",[e("section",[e("v-parallax",{attrs:{srcset:"/images/image2-800-min.jpg 800w,\n                        /images/image2-1200-min.jpg 1200w,\n                        /images/image2-1600-min.jpg 1600w,\n                        /images/image2-2200-min.jpg 2200w,\n                        /images/image2-2600-min.jpg 2600w,\n                        /images/image2-3200-min.jpg 3200w","max-height":"600",loading:"eager",alt:"peope working in office (cartoonish)"}})],1),this._v(" "),e("v-container",[e("what-we-do")],1),this._v(" "),e("section",[e("v-lazy",[e("v-parallax",{attrs:{srcset:"/images/image3-800-min.jpg 800w,\n                                /images/image3-1200-min.jpg 1200w,\n                                /images/image3-1600-min.jpg 1600w,\n                                /images/image3-2200-min.jpg 2200w,\n                                /images/image3-2600-min.jpg 2600w,\n                                /images/image3-3200-min.jpg 3200w\n            ",height:"380",loading:"lazy",alt:"people around desk in office (cartoonish)"}})],1)],1),this._v(" "),e("section",[e("our-packages")],1),this._v(" "),e("section",[e("testimonials")],1),this._v(" "),e("section",[e("v-row",{staticClass:"mb-5",attrs:{"no-gutters":"",justify:"center"}},[e("team"),this._v(" "),e("contact")],1)],1)],1)}),[],!1,null,"1c0b32bc",null);e.default=P.exports;m()(P,{WhatWeDo:r(413).default,Testimonials:r(414).default,Team:r(415).default,Contact:r(416).default}),m()(P,{VContainer:H.a,VLazy:I.a,VMain:z.a,VParallax:O.a,VRow:S.a})}}]);