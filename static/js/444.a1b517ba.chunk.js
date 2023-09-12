"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[444],{444:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,u=e(791),i=e(439),o=e(168),a=e(867),c=a.ZP.form(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-bottom: 6px;\n  }\n"]))),l=e(434),f=e(208),s="NOT_FOUND";var p=function(n,t){return n===t};function d(n,t){var e="object"===typeof t?t:{equalityCheck:t},r=e.equalityCheck,u=void 0===r?p:r,i=e.maxSize,o=void 0===i?1:i,a=e.resultEqualityCheck,c=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,u=0;u<r;u++)if(!n(t[u],e[u]))return!1;return!0}}(u),l=1===o?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:s},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(n,t){var e=[];function r(n){var r=e.findIndex((function(e){return t(n,e.key)}));if(r>-1){var u=e[r];return r>0&&(e.splice(r,1),e.unshift(u)),u.value}return s}return{get:r,put:function(t,u){r(t)===s&&(e.unshift({key:t,value:u}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(o,c);function f(){var t=l.get(arguments);if(t===s){if(t=n.apply(null,arguments),a){var e=l.getEntries(),r=e.find((function(n){return a(n.value,t)}));r&&(t=r.value)}l.put(arguments,t)}return t}return f.clearCache=function(){return l.clear()},f}function v(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function h(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var u=function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];var i,o=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,f=l.memoizeOptions,s=void 0===f?e:f,p=Array.isArray(s)?s:[s],d=v(r),h=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],t=d.length,e=0;e<t;e++)n.push(d[e].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return u}var m,x=h(d),y=function(n){return n.filter},g=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},j=function(n){return n.contacts.items},w=x([j,y],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase(),0)}))})),C=function(){return{contacts:(0,l.v9)(j),error:(0,l.v9)(b),isLoading:(0,l.v9)(g),filter:(0,l.v9)(y),visibleContacts:(0,l.v9)(w)}},k=e(184),N=function(){var n=(0,u.useState)(""),t=(0,i.Z)(n,2),e=t[0],r=t[1],o=(0,u.useState)(""),a=(0,i.Z)(o,2),s=a[0],p=a[1],d=C(),v=(0,l.I0)();return(0,k.jsxs)(c,{onSubmit:function(n){if(n.preventDefault(),d.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})))return alert("".concat(e," is already in contacts")),!1;v((0,f.uK)({name:e,number:s})),r(""),p("")},children:[(0,k.jsx)("label",{htmlFor:"inputName",children:"Name"}),(0,k.jsx)("input",{type:"text",name:"name",value:e,id:"inputName",required:!0,onChange:function(n){return r(n.target.value)}}),(0,k.jsx)("label",{htmlFor:"inputNumber",children:"Number"}),(0,k.jsx)("input",{type:"tel",name:"number",value:s,id:"inputNumber",required:!0,onChange:function(n){return p(n.target.value)}}),(0,k.jsx)("button",{type:"submit",children:"Add contact"})]})},Z=a.ZP.li(m||(m=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  margin-bottom: 8px;\n\n  button {\n    padding: 0 10px;\n  }\n"])));function E(n){var t=n.contact,e=(0,l.I0)(),r=t.id,u=t.name,i=t.number;return(0,k.jsxs)(Z,{children:[(0,k.jsxs)("p",{children:[u,": ",i]}),(0,k.jsx)("button",{type:"button",onClick:function(){return e((0,f.GK)(r))},children:"Delete"})]})}function A(){var n=(0,l.I0)(),t=C().visibleContacts;return(0,u.useEffect)((function(){n((0,f.yF)("/contacts"))}),[n]),(0,k.jsxs)("ul",{children:[0===t.length&&(0,k.jsx)(Z,{children:"No contacts for your search"}),t.length>0&&t.map((function(n){return(0,k.jsx)(E,{contact:n,id:n.id},n.id)}))]})}var F,z,L=e(895),S=a.ZP.div(F||(F=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n"]))),q=function(){var n=C(),t=(0,l.I0)();return(0,k.jsxs)(S,{children:[(0,k.jsx)("label",{children:"Find contact by Name: "}),(0,k.jsx)("input",{type:"text",name:"filter",value:n,placeholder:"Enter name",onChange:function(n){return function(n){return t((0,L.T)(n.target.value))}(n)}})]})},I=e(510),O=a.ZP.div(z||(z=(0,o.Z)(["\n  margin: 60px auto 0 auto;\n  background-color: #d8ecda;\n  width: 360px;\n  height: 100%;\n  padding: 80px;\n  border-radius: 4px;\n\n  h1 {\n    text-align: center;\n    font-size: 36px;\n    margin-bottom: 20px;\n  }\n\n  h2 {\n    text-align: center;\n    font-size: 26px;\n    margin-top: 28px;\n    margin-bottom: 18px;\n  }\n"]))),P=function(){var n=(0,l.v9)(b),t=(0,l.v9)(g);return(0,k.jsxs)(O,{children:[(0,k.jsx)("h1",{children:"Phonebook"}),(0,k.jsx)(N,{}),(0,k.jsx)("h2",{children:"Contacts"}),(0,k.jsx)(q,{}),n&&(0,k.jsxs)("b",{children:["Error: ",n]}),t&&(0,k.jsx)(I.a,{}),(0,k.jsx)(A,{})]})}}}]);
//# sourceMappingURL=444.a1b517ba.chunk.js.map