(this["webpackJsonpunform-examples"]=this["webpackJsonpunform-examples"]||[]).push([[0],{64:function(e,n,t){e.exports=t.p+"static/media/logo-unform.5ab9ac7c.svg"},67:function(e,n,t){e.exports=t(95)},95:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(21),u=t.n(c),o=t(27),l=t(7),i=t(31),s=t.n(i),f=t(46),b=t(41),p=t(23),m=t(57),d=t.n(m).a.create({baseURL:"https://api.github.com"}),v=t(17),g=t(10),h=t(58),O=t(9),j=function(e){var n=e.name,t=Object(g.a)(e,["name"]),c=Object(a.useRef)(null),u=Object(O.c)(n),o=u.fieldName,l=u.defaultValue,i=u.registerField,s={control:function(e){return Object(v.a)({},e,{borderRadius:10,borderColor:"#232129",fontSize:18,height:46})},option:function(e){return Object(v.a)({},e,{color:"#F4EDE8"})}};return Object(a.useEffect)((function(){i({name:o,ref:c.current,getValue:function(e){return t.isMulti?e.state.value?e.state.value.map((function(e){return e.value})):[]:e.state.value?e.state.value.value:""},setValue:function(e,n){e.select.setValue(n,"set-value")},clearValue:function(e){e.select.clearValue()}})}),[o,i,t.isMulti]),r.a.createElement(h.a,Object.assign({defaultValue:l,ref:c,classNamePrefix:"react-select",styles:s,theme:function(e){return Object(v.a)({},e,{colors:Object(v.a)({},e.colors,{primary:"#666360",neutral0:"#232129",primary25:"#666360",primary50:"#999591",neutral80:"#F4EDE8",neutral30:"#FBC131"})})},maxMenuHeight:250},t))},x=t(60),E=function(e){var n=e.name,t=Object(g.a)(e,["name"]),c=Object(a.useRef)(null),u=Object(O.c)(n),o=u.fieldName,l=u.defaultValue,i=u.registerField,s={control:function(e){return Object(v.a)({},e,{marginTop:8,borderRadius:10,borderColor:"#232129",fontSize:18,height:46})},option:function(e){return Object(v.a)({},e,{color:"#F4EDE8"})}};return Object(a.useEffect)((function(){i({name:o,ref:c.current,getValue:function(e){return t.isMulti?e.select.state.value?e.select.state.value.map((function(e){return e.value})):[]:e.select.state.value?e.select.state.value.value:""},setValue:function(e,n){e.select.select.setValue(n,"set-value")},clearValue:function(e){e.select.select.clearValue()}})}),[o,i,t.isMulti]),r.a.createElement(x.a,Object.assign({cacheOptions:!0,defaultValue:l,ref:c,classNamePrefix:"react-select",theme:function(e){return Object(v.a)({},e,{colors:Object(v.a)({},e.colors,{primary:"#666360",primary25:"#666360",primary50:"#999591",neutral0:"#232129",neutral80:"#F4EDE8",neutral30:"#FBC131"})})},maxMenuHeight:250,styles:s},t))},k=t(4),y=t(5);function V(){var e=Object(k.a)(["\n  font-size: 18px;\n  color: #f4ede8;\n\n  input {\n    margin-right: 8px;\n  }\n"]);return V=function(){return e},e}var w=y.b.label(V()),R=function(e){var n=e.name,t=e.options,c=Object(g.a)(e,["name","options"]),u=Object(a.useRef)([]),o=Object(O.c)(n),l=o.fieldName,i=o.registerField,s=o.defaultValue;return Object(a.useEffect)((function(){i({name:l,ref:u.current,getValue:function(e){return e.filter((function(e){return e.checked})).map((function(e){return e.value}))},clearValue:function(e){e.forEach((function(e){e.checked=!1}))},setValue:function(e,n){e.forEach((function(e){n.includes(e.id)&&(e.checked=!0)}))}})}),[s,l,i]),r.a.createElement(r.a.Fragment,null,t.map((function(e,n){var t;return r.a.createElement(w,{htmlFor:e.id,key:e.id},r.a.createElement("input",Object.assign({defaultChecked:null===(t=s)||void 0===t?void 0:t.includes(e.id),ref:function(e){return e&&(u.current[n]=e)},value:e.value,type:"checkbox",id:e.id},c)),e.label)})))};function F(){var e=Object(k.a)(["\n  font-size: 18px;\n  color: #f4ede8;\n\n  input {\n    margin-right: 8px;\n  }\n"]);return F=function(){return e},e}var C=y.b.label(F()),S=function(e){var n=e.name,t=e.options,c=Object(g.a)(e,["name","options"]),u=Object(a.useRef)([]),o=Object(O.c)(n),l=o.fieldName,i=o.registerField,s=o.defaultValue,f=void 0===s?"":s;return Object(a.useEffect)((function(){i({name:l,ref:u.current,getValue:function(e){var n;return(null===(n=e.find((function(e){return e.checked})))||void 0===n?void 0:n.value)||""},setValue:function(e,n){var t=e.find((function(e){return e.id===n}));t&&(t.checked=!0)},clearValue:function(e){var n=e.find((function(e){return!0===e.checked}));n&&(n.checked=!1)}})}),[f,l,i]),r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(C,{htmlFor:e.id,key:e.id},r.a.createElement("input",Object.assign({ref:function(e){return u.current.push(e)},id:e.id,type:"radio",name:n,defaultChecked:f.includes(e.id),value:e.value},c)),e.label)})))},z=t(66);function D(){var e=Object(k.a)(["\n  background: #232129;\n  color: #fff;\n  padding: 24px 16px;\n  border-radius: 10px;\n\n  cursor: pointer;\n\n  ul {\n    li {\n      margin-left: 8px;\n    }\n    margin-bottom: 16px;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 16px;\n  }\n"]);return D=function(){return e},e}var N=y.b.div(D()),I=function(e){var n=e.name,t=Object(a.useRef)(null),c=Object(O.c)(n),u=c.fieldName,o=c.registerField,l=c.defaultValue,i=void 0===l?[]:l,s=Object(a.useState)(i),f=Object(p.a)(s,2),b=f[0],m=f[1],d=Object(z.a)({accept:"image/*",onDrop:function(e){t.current&&(t.current.acceptedFiles=e,m(e))}}),v=d.getRootProps,g=d.getInputProps,h=d.isDragActive;return Object(a.useEffect)((function(){o({name:u,ref:t.current,getValue:function(e){return e.acceptedFiles||[]},clearValue:function(e){e.acceptedFiles=[],m([])},setValue:function(e,n){e.acceptedFiles=n,m(n)}})}),[u,o]),r.a.createElement(N,Object.assign({},v(),{onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.click()}}),r.a.createElement("input",Object.assign({},g(),{accept:"image/*",ref:t})),0!==b.length&&r.a.createElement("ul",null,b.map((function(e){return r.a.createElement("li",{key:e.name},"".concat(e.name," - ").concat(e.size," bytes"))}))),h?r.a.createElement("p",null,"Drop the files here ..."):r.a.createElement("p",null,"Drag drop some files here, or click to select files"))},M=function(e){var n=e.name,t=Object(g.a)(e,["name"]),c=Object(a.useRef)(null),u=Object(O.c)(n),o=u.fieldName,l=u.registerField,i=u.defaultValue,s=void 0===i?"":i;return Object(a.useEffect)((function(){l({name:o,ref:c.current,path:"value"})}),[l,o]),r.a.createElement("textarea",Object.assign({ref:c,defaultValue:s},t))},P=(t(92),t(65)),G=function(e){var n=e.name,t=Object(g.a)(e,["name"]),c=Object(a.useRef)(null),u=Object(O.c)(n),o=u.fieldName,l=u.defaultValue,i=void 0===l?"":l,s=u.registerField;return Object(a.useEffect)((function(){c.current&&(c.current.phoneValue=i)}),[i]),Object(a.useEffect)((function(){s({name:o,ref:c.current,getValue:function(e){return e.phoneValue||""},setValue:function(e,n){e.phoneValue=n},clearValue:function(e){e.phoneValue="",e.value=""}})}),[o,s]),r.a.createElement(P.a,Object.assign({ref:c,value:i,onChange:function(e){c.current&&(c.current.phoneValue=e)}},t))};function L(){var e=Object(k.a)(["\n  height: 40px;\n  width: 100%;\n  background: #fbc131;\n  padding: 0px 16px;\n  border-radius: 10px;\n  border: none;\n  font-size: 18px;\n  font-weight: 500;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n\n  transition: background 0.3s;\n\n  :hover {\n    background: #cc9d29;\n  }\n"]);return L=function(){return e},e}var B=y.b.button(L()),T=function(e){var n=e.children,t=Object(g.a)(e,["children"]);return r.a.createElement(B,t,n)},U=t(11);function A(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  button {\n    margin-top: 16px;\n  }\n"]);return A=function(){return e},e}var H=Object(y.b)(U.a)(A()),J=function(){var e=Object(a.useRef)(null),n=Object(a.useState)("repos"),t=Object(p.a)(n,2),c=t[0],u=t[1],o=Object(a.useState)(!0),l=Object(p.a)(o,2),i=l[0],m=l[1],v=Object(a.useState)(1),g=Object(p.a)(v,2),h=g[0],O=g[1],x=Object(a.useState)(""),k=Object(p.a)(x,2),y=k[0],V=k[1],w=Object(a.useState)([]),R=Object(p.a)(w,2),F=R[0],C=R[1],S=[{value:"repos",label:"Owner"},{value:"starred",label:"Starred"}],z=Object(a.useCallback)((function(){var n;m(!0),u((function(e){return"repos"===e?"starred":"repos"})),V(""),null===(n=e.current)||void 0===n||n.clearField("repo")}),[]),D=Object(a.useCallback)((function(e,n){n(F.filter((function(n){return n.label.includes(e)})))}),[F]),N=Object(a.useCallback)((function(e){V(null===e||void 0===e?void 0:e.value)}),[]),I=Object(a.useCallback)(Object(b.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/users/EliasGcf/".concat(c),{params:{page:h+1}});case 3:if(0===(n=e.sent).data.length){e.next=10;break}t=n.data.map((function(e){return{label:e.name,value:e.full_name}})),C((function(e){return[].concat(Object(f.a)(e),Object(f.a)(t))})),O(h+1),e.next=11;break;case 10:throw new Error("No more repos to loading");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),window.alert(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[c,h]),M=Object(a.useCallback)((function(e){e.repo&&window.open("https://github.com/".concat(e.repo))}),[]);return Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/users/EliasGcf/".concat(c));case 2:n=e.sent,t=n.data.map((function(e){return{label:e.name,value:e.full_name}})),C(t),m(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),r.a.createElement(H,{ref:e,onSubmit:M},r.a.createElement(j,{name:"name",defaultValue:S[0],onChange:z,options:S}),r.a.createElement(E,{name:"repo",isLoading:i,defaultOptions:F,loadOptions:D,onChange:N,onMenuScrollToBottom:I}),r.a.createElement(T,{type:"submit"},"Open ".concat(y)))};function _(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return _=function(){return e},e}var q=Object(y.b)(U.a)(_()),K=function(){var e=Object(a.useRef)(null);return r.a.createElement(q,{ref:e,onSubmit:function(n){var t;0!==n.profiles.length&&(null===(t=e.current)||void 0===t||t.reset(),n.profiles.forEach((function(e){window.open("https://github.com/".concat(e))})))},initialData:{profiles:["rocketseat"]}},r.a.createElement(R,{name:"profiles",options:[{id:"rocketseat",value:"rocketseat",label:"Rocketseat"},{id:"eliasgcf",value:"eliasgcf",label:"EliasGcf"}]}),r.a.createElement(T,{style:{width:100},type:"submit"},"Open"))};function Q(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Q=function(){return e},e}var W=Object(y.b)(U.a)(Q()),X=function(){var e=Object(a.useRef)(null),n=[{id:"rocketseat",value:"rocketseat",label:"Rocketseat"},{id:"eliasgcf",value:"eliasgcf",label:"EliasGcf"}];return r.a.createElement(W,{ref:e,initialData:{radio:n[1].id},onSubmit:function(e,n){var t=n.reset;e.user&&(window.open("https://github.com/".concat(e.user)),t())}},r.a.createElement(S,{name:"user",options:n}),r.a.createElement(T,{style:{width:100},type:"submit"},"Open"))};function Y(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  button {\n    margin-top: 16px;\n  }\n"]);return Y=function(){return e},e}var Z=Object(y.b)(U.a)(Y()),$=function(){var e=Object(a.useRef)(null);return r.a.createElement(Z,{ref:e,onSubmit:function(n){var t;if(0!==n.images.length){var a=n.images.map((function(e){return URL.createObjectURL(e)}));null===(t=e.current)||void 0===t||t.reset(),alert(a)}}},r.a.createElement(I,{name:"images"}),r.a.createElement(T,null,"Open"))};function ee(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  display: flex;\n  flex-direction: column;\n\n  textarea {\n    width: 100%;\n    height: 150px;\n\n    max-height: 300px;\n    min-height: 56px;\n\n    margin-bottom: 16px;\n    border-radius: 10px;\n\n    padding: 8px;\n\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    resize: vertical;\n  }\n"]);return ee=function(){return e},e}var ne=Object(y.b)(U.a)(ee()),te=function(){var e=Object(a.useRef)(null);return r.a.createElement(ne,{ref:e,onSubmit:function(e){alert(e.text)}},r.a.createElement(M,{name:"text",placeholder:"Digite aqui ..."}),r.a.createElement(T,{style:{width:"100%"},type:"submit"},"Send"))};function ae(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  input {\n    padding: 8px 0 8px 8px;\n    border-radius: 10px;\n    border: none;\n\n    margin-left: 8px;\n  }\n\n  .PhoneInputCountryIconImg,\n  .PhoneInputCountrySelectArrow {\n    color: #fbc131;\n  }\n"]);return ae=function(){return e},e}var re=Object(y.b)(U.a)(ae()),ce=function(){var e=Object(a.useCallback)((function(e,n){(0,n.reset)(),window.alert(e.phone)}),[]);return r.a.createElement(re,{onSubmit:e},r.a.createElement(G,{name:"phone",placeholder:"+55 81 99145 0029"}),r.a.createElement(T,{style:{marginTop:16},type:"submit"},"Send"))},ue=t(64),oe=t.n(ue);function le(){var e=Object(k.a)(["\n  max-width: 450px;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  button {\n    margin-top: 16px;\n  }\n"]);return le=function(){return e},e}function ie(){var e=Object(k.a)(["\n  max-width: 450px;\n  width: 100%;\n"]);return ie=function(){return e},e}function se(){var e=Object(k.a)(["\n  height: 100vh;\n\n  > h1 {\n    font-size: 24px;\n    color: #fff;\n    margin-bottom: 16px;\n  }\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  img {\n    margin-bottom: 32px;\n  }\n"]);return se=function(){return e},e}var fe=y.b.div(se()),be=y.b.div(ie()),pe=Object(y.b)(U.a)(le()),me=function(e){var n=e.children,t=Object(l.f)(),c=Object(l.g)(),u=[{value:"react-select",label:"React Select"},{value:"checkbox",label:"Checkbox"},{value:"radio",label:"Radio"},{value:"react-dropzone",label:"React Dropzone"},{value:"textarea",label:"TextArea"},{value:"react-phone-number-input",label:"React Phone Number"}],o=u.find((function(e){return e.value===c.pathname.replace("/","")})),i=Object(a.useCallback)((function(e){t.push("/".concat(e.value))}),[t]),s=Object(a.useCallback)((function(e){var n=e.input;n&&window.open("https://github.com/EliasGcf/unform-examples/tree/master/src/components/Form/".concat(n))}),[]);return r.a.createElement(fe,null,r.a.createElement("img",{src:oe.a,alt:"Logo unForm"}),r.a.createElement("h1",null,"Inputs examples with Unform"),r.a.createElement(pe,{onSubmit:s},r.a.createElement(j,{onChange:i,options:u,defaultValue:o,name:"input"}),r.a.createElement(T,{type:"submit"},"Open code on GitHub")),r.a.createElement(be,null,n))},de=function(e){var n=e.component,t=Object(g.a)(e,["component"]),a=me;return r.a.createElement(l.a,Object.assign({},t,{render:function(){return r.a.createElement(a,null,r.a.createElement(n,null))}}))},ve=function(){return r.a.createElement(l.c,null,r.a.createElement(de,{path:"/",exact:!0,component:function(){return null}}),r.a.createElement(de,{path:"/react-select",component:J}),r.a.createElement(de,{path:"/checkbox",component:K}),r.a.createElement(de,{path:"/radio",component:X}),r.a.createElement(de,{path:"/react-dropzone",component:$}),r.a.createElement(de,{path:"/textarea",component:te}),r.a.createElement(de,{path:"/react-phone-number-input",component:ce}))};function ge(){var e=Object(k.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #6633cc;\n    color: #000;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return ge=function(){return e},e}var he=Object(y.a)(ge()),Oe=function(){return r.a.createElement(o.a,{basename:"/unform-examples"},r.a.createElement(he,null),r.a.createElement(ve,null))};u.a.render(r.a.createElement(Oe,null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.9568a8ee.chunk.js.map