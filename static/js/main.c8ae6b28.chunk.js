(this["webpackJsonpunform-examples"]=this["webpackJsonpunform-examples"]||[]).push([[0],{59:function(e,n,t){e.exports=t.p+"static/media/logo-unform.5ab9ac7c.svg"},60:function(e,n,t){e.exports=t(87)},87:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(19),u=t.n(c),o=t(25),l=t(4),i=t(29),s=t.n(i),f=t(43),b=t(39),m=t(24),p=t(54),d=t.n(p).a.create({baseURL:"https://api.github.com"}),v=t(16),h=t(11),O=t(55),g=t(14),j=function(e){var n=e.name,t=Object(h.a)(e,["name"]),c=Object(a.useRef)(null),u=Object(g.c)(n),o=u.fieldName,l=u.defaultValue,i=u.registerField,s={control:function(e){return Object(v.a)({},e,{borderRadius:10,borderColor:"#232129",fontSize:18,height:46})},option:function(e){return Object(v.a)({},e,{color:"#F4EDE8"})}};return Object(a.useEffect)((function(){i({name:o,ref:c.current,getValue:function(e){return t.isMulti?e.state.value?e.state.value.map((function(e){return e.value})):[]:e.state.value?e.state.value.value:""},setValue:function(e,n){e.state.value=n},clearValue:function(e){e.state.value=null}})}),[o,i,t.isMulti]),r.a.createElement(O.a,Object.assign({defaultValue:l,ref:c,classNamePrefix:"react-select",styles:s,theme:function(e){return Object(v.a)({},e,{colors:Object(v.a)({},e.colors,{primary:"#666360",neutral0:"#232129",primary25:"#666360",primary50:"#999591",neutral80:"#F4EDE8",neutral30:"#FBC131"})})},maxMenuHeight:250},t))},E=t(57),x=function(e){var n=e.name,t=Object(h.a)(e,["name"]),c=Object(a.useRef)(null),u=Object(g.c)(n),o=u.fieldName,l=u.defaultValue,i=u.registerField,s={control:function(e){return Object(v.a)({},e,{marginTop:8,borderRadius:10,borderColor:"#232129",fontSize:18,height:46})},option:function(e){return Object(v.a)({},e,{color:"#F4EDE8"})}};return Object(a.useEffect)((function(){i({name:o,ref:c.current,getValue:function(e){return t.isMulti?e.select.state.value?e.select.state.value.map((function(e){return e.value})):[]:e.select.state.value?e.select.state.value.value:""},setValue:function(e,n){e.select.state.value=n},clearValue:function(e){e.select.state.value=null}})}),[o,i,t.isMulti]),r.a.createElement(E.a,Object.assign({cacheOptions:!0,defaultValue:l,ref:c,classNamePrefix:"react-select",theme:function(e){return Object(v.a)({},e,{colors:Object(v.a)({},e.colors,{primary:"#666360",primary25:"#666360",primary50:"#999591",neutral0:"#232129",neutral80:"#F4EDE8",neutral30:"#FBC131"})})},maxMenuHeight:250,styles:s},t))},k=t(6),w=t(7);function y(){var e=Object(k.a)(["\n  font-size: 18px;\n  color: #f4ede8;\n\n  input {\n    margin-right: 8px;\n  }\n"]);return y=function(){return e},e}var V=w.b.label(y()),C=function(e){var n=e.name,t=e.options,c=Object(h.a)(e,["name","options"]),u=Object(a.useRef)([]),o=Object(g.c)(n),l=o.fieldName,i=o.registerField,s=o.defaultValue,f=void 0===s?[]:s;return Object(a.useEffect)((function(){i({name:l,ref:u.current,getValue:function(e){return e.filter((function(e){return e.checked})).map((function(e){return e.value}))},clearValue:function(e){e.forEach((function(e){e.checked=!1}))},setValue:function(e,n){e.forEach((function(e){n.includes(e.id)&&(e.checked=!0)}))}})}),[f,l,i]),r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(V,{htmlFor:e.id,key:e.id},r.a.createElement("input",Object.assign({defaultChecked:f.includes(e.id),ref:function(e){return u.current.push(e)},value:e.value,type:"checkbox",id:e.id},c)),e.label)})))};function F(){var e=Object(k.a)(["\n  font-size: 18px;\n  color: #f4ede8;\n\n  input {\n    margin-right: 8px;\n  }\n"]);return F=function(){return e},e}var R=w.b.label(F()),S=function(e){var n=e.name,t=e.options,c=Object(h.a)(e,["name","options"]),u=Object(a.useRef)([]),o=Object(g.c)(n),l=o.fieldName,i=o.registerField,s=o.defaultValue,f=void 0===s?"":s;return Object(a.useEffect)((function(){i({name:l,ref:u.current,getValue:function(e){var n;return(null===(n=e.find((function(e){return e.checked})))||void 0===n?void 0:n.value)||""},setValue:function(e,n){var t=e.find((function(e){return e.id===n}));t&&(t.checked=!0)},clearValue:function(e){var n=e.find((function(e){return!0===e.checked}));n&&(n.checked=!1)}})}),[f,l,i]),r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(R,{htmlFor:e.id,key:e.id},r.a.createElement("input",Object.assign({ref:function(e){return u.current.push(e)},id:e.id,type:"radio",name:n,defaultChecked:f.includes(e.id),value:e.value},c)),e.label)})))};function z(){var e=Object(k.a)(["\n  height: 40px;\n  width: 100%;\n  background: #fbc131;\n  padding: 0px 16px;\n  border-radius: 10px;\n  border: none;\n  font-size: 18px;\n  font-weight: 500;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n\n  transition: background 0.3s;\n\n  :hover {\n    background: #cc9d29;\n  }\n"]);return z=function(){return e},e}var M=w.b.button(z()),N=function(e){var n=e.children,t=Object(h.a)(e,["children"]);return r.a.createElement(M,t,n)},D=t(20);function G(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  button {\n    margin-top: 16px;\n  }\n"]);return G=function(){return e},e}var B=Object(w.b)(D.a)(G()),H=function(){var e=Object(a.useRef)(null),n=Object(a.useState)("repos"),t=Object(m.a)(n,2),c=t[0],u=t[1],o=Object(a.useState)(!0),l=Object(m.a)(o,2),i=l[0],p=l[1],v=Object(a.useState)(1),h=Object(m.a)(v,2),O=h[0],g=h[1],E=Object(a.useState)(""),k=Object(m.a)(E,2),w=k[0],y=k[1],V=Object(a.useState)([]),C=Object(m.a)(V,2),F=C[0],R=C[1],S=Object(a.useCallback)((function(){var n;p(!0),u((function(e){return"repos"===e?"starred":"repos"})),y(""),null===(n=e.current)||void 0===n||n.clearField("repo")}),[]),z=Object(a.useCallback)((function(e,n){n(F.filter((function(n){return n.label.includes(e)})))}),[F]),M=Object(a.useCallback)((function(e){y(e.value)}),[]),D=Object(a.useCallback)(Object(b.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/users/EliasGcf/".concat(c),{params:{page:O+1}});case 3:if(0===(n=e.sent).data.length){e.next=10;break}t=n.data.map((function(e){return{label:e.name,value:e.full_name}})),R((function(e){return[].concat(Object(f.a)(e),Object(f.a)(t))})),g(O+1),e.next=11;break;case 10:throw new Error("No more repos to loading");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),window.alert(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[c,O]),G=Object(a.useCallback)((function(e){e.repo&&window.open("https://github.com/".concat(e.repo))}),[]);return Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("/users/EliasGcf/".concat(c));case 2:n=e.sent,t=n.data.map((function(e){return{label:e.name,value:e.full_name}})),R(t),p(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),r.a.createElement(B,{ref:e,onSubmit:G},r.a.createElement(j,{name:"name",defaultValue:{value:"repos",label:"Owner"},onChange:S,options:[{value:"repos",label:"Owner"},{value:"starred",label:"Starred"}]}),r.a.createElement(x,{name:"repo",isLoading:i,defaultOptions:F,loadOptions:z,onChange:M,onMenuScrollToBottom:D}),r.a.createElement(N,{type:"submit"},"Open ".concat(w)))};function L(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return L=function(){return e},e}var I=Object(w.b)(D.a)(L()),J=function(){var e=Object(a.useRef)(null);return r.a.createElement(I,{ref:e,onSubmit:function(n){var t;0!==n.profiles.length&&(null===(t=e.current)||void 0===t||t.reset(),n.profiles.forEach((function(e){window.open("https://github.com/".concat(e))})))},initialData:{profiles:["rocketseat"]}},r.a.createElement(C,{name:"profiles",options:[{id:"rocketseat",value:"rocketseat",label:"Rocketseat"},{id:"eliasgcf",value:"eliasgcf",label:"EliasGcf"}]}),r.a.createElement(N,{style:{width:100},type:"submit"},"Open"))};function P(){var e=Object(k.a)(["\n  padding: 24px;\n  border-radius: 10px;\n  background: #3e3b47;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return P=function(){return e},e}var T=Object(w.b)(D.a)(P()),U=function(){var e=Object(a.useRef)(null),n=[{id:"rocketseat",value:"rocketseat",label:"Rocketseat"},{id:"eliasgcf",value:"eliasgcf",label:"EliasGcf"}];return r.a.createElement(T,{ref:e,initialData:{radio:n[1].id},onSubmit:function(e,n){var t=n.reset;e.user&&(window.open("https://github.com/".concat(e.user)),t())}},r.a.createElement(S,{name:"user",options:n}),r.a.createElement(N,{style:{width:100},type:"submit"},"Open"))},_=t(59),q=t.n(_);function A(){var e=Object(k.a)(["\n  max-width: 450px;\n  width: 100%;\n\n  margin-bottom: 40px;\n\n  button {\n    margin-top: 16px;\n  }\n"]);return A=function(){return e},e}function K(){var e=Object(k.a)(["\n  max-width: 450px;\n  width: 100%;\n"]);return K=function(){return e},e}function Q(){var e=Object(k.a)(["\n  height: 100vh;\n\n  > h1 {\n    font-size: 24px;\n    color: #fff;\n    margin-bottom: 16px;\n  }\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  img {\n    margin-bottom: 32px;\n  }\n"]);return Q=function(){return e},e}var W=w.b.div(Q()),X=w.b.div(K()),Y=Object(w.b)(D.a)(A()),Z=function(e){var n=e.children,t=Object(l.f)(),c=Object(l.g)(),u=[{value:"react-select",label:"React Select"},{value:"checkbox",label:"Checkbox"},{value:"radio",label:"Radio"}],o=u.find((function(e){return e.value===c.pathname.replace("/","")})),i=Object(a.useCallback)((function(e){t.push("/".concat(e.value))}),[t]),s=Object(a.useCallback)((function(e){var n=e.input;n&&window.open("https://github.com/EliasGcf/unform-examples/tree/master/src/components/Form/".concat(n))}),[]);return r.a.createElement(W,null,r.a.createElement("img",{src:q.a,alt:"Logo unForm"}),r.a.createElement("h1",null,"Inputs examples with Unform"),r.a.createElement(Y,{onSubmit:s},r.a.createElement(j,{onChange:i,options:u,defaultValue:o,name:"input"}),r.a.createElement(N,{type:"submit"},"Open code on GitHub")),r.a.createElement(X,null,n))},$=function(e){var n=e.component,t=Object(h.a)(e,["component"]),a=Z;return r.a.createElement(l.a,Object.assign({},t,{render:function(){return r.a.createElement(a,null,r.a.createElement(n,null))}}))},ee=function(){return r.a.createElement(l.c,null,r.a.createElement($,{path:"/",exact:!0,component:function(){return null}}),r.a.createElement($,{path:"/react-select",component:H}),r.a.createElement($,{path:"/checkbox",component:J}),r.a.createElement($,{path:"/radio",component:U}))};function ne(){var e=Object(k.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #7159c1;\n    color: #000;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return ne=function(){return e},e}var te=Object(w.a)(ne()),ae=function(){return r.a.createElement(o.a,{basename:"/unform-examples"},r.a.createElement(te,null),r.a.createElement(ee,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.c8ae6b28.chunk.js.map