"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[444],{3444:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,u=t(2791),i=t(9439),o=t(168),a=t(6487),c=a.ZP.form(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  input {\n    margin-bottom: 14px;\n  }\n"]))),l=t(9434),f=t(208),s="NOT_FOUND";var p=function(n,e){return n===e};function d(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?p:r,i=t.maxSize,o=void 0===i?1:i,a=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),l=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:s},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return s}return{get:r,put:function(e,u){r(e)===s&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,c);function f(){var e=l.get(arguments);if(e===s){if(e=n.apply(null,arguments),a){var t=l.getEntries(),r=t.find((function(n){return a(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return f.clearCache=function(){return l.clear()},f}function v(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function h(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var i,o=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=a,f=l.memoizeOptions,s=void 0===f?t:f,p=Array.isArray(s)?s:[s],d=v(r),h=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return u}var m,x=h(d),y=function(n){return n.filter},g=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},j=function(n){return n.contacts.items},w=x([j,y],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase(),0)}))})),C=function(){return{contacts:(0,l.v9)(j),error:(0,l.v9)(b),isLoading:(0,l.v9)(g),filter:(0,l.v9)(y),visibleContacts:(0,l.v9)(w)}},k=t(4238),z=t(184),Z=function(){var n=(0,u.useState)(""),e=(0,i.Z)(n,2),t=e[0],r=e[1],o=(0,u.useState)(""),a=(0,i.Z)(o,2),s=a[0],p=a[1],d=C(),v=(0,l.I0)();return(0,z.jsxs)(c,{onSubmit:function(n){if(n.preventDefault(),Array.isArray(d)?d.find((function(n){return n.name.toLowerCase()===t.toLowerCase()})):null)return alert("".concat(t," is already in contacts")),!1;v((0,f.uK)({name:t,number:s})),r(""),p("")},children:[(0,z.jsx)("label",{htmlFor:"inputName",children:"Name"}),(0,z.jsx)("input",{type:"text",name:"name",value:t,id:"inputName",required:!0,onChange:function(n){return r(n.target.value)}}),(0,z.jsx)("label",{htmlFor:"inputNumber",children:"Number"}),(0,z.jsx)("input",{type:"tel",name:"number",value:s,id:"inputNumber",required:!0,onChange:function(n){return p(n.target.value)}}),(0,z.jsx)(k.z,{colorScheme:"blue",size:"sm",type:"submit",children:"Add contact"})]})},A=a.ZP.li(m||(m=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n\n  button {\n    padding: 0 10px;\n  }\n"])));function E(n){var e=n.contact,t=(0,l.I0)(),r=e.id,u=e.name,i=e.number;return(0,z.jsxs)(A,{children:[(0,z.jsxs)("p",{children:[u,": ",i]}),(0,z.jsx)(k.z,{colorScheme:"blue",size:"xs",type:"button",onClick:function(){return t((0,f.GK)(r))},children:"Delete"})]})}function N(){var n=(0,l.I0)(),e=C().visibleContacts;return(0,u.useEffect)((function(){n((0,f.yF)("/contacts"))}),[n]),(0,z.jsxs)("ul",{children:[0===e.length&&(0,z.jsx)(A,{children:"No contacts for your search"}),e.length>0&&e.map((function(n){return(0,z.jsx)(E,{contact:n,id:n.id},n.id)}))]})}var S,F,L=t(6895),q=a.ZP.div(S||(S=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 14px;\n"]))),I=function(){var n=C(),e=(0,l.I0)();return(0,z.jsxs)(q,{children:[(0,z.jsx)("label",{children:"Find by name: "}),(0,z.jsx)("input",{type:"text",name:"filter",value:n.filter,placeholder:"Enter name",onChange:function(n){return function(n){return e((0,L.T)(n.target.value))}(n)}})]})},O=t(7205),P=a.ZP.div(F||(F=(0,o.Z)(["\n  margin: 40px auto 0 auto;\n  background-color: #f4f6f7;\n  width: 480px;\n  height: 100%;\n  padding: 40px;\n  border-radius: 6px;\n\n  h1 {\n    text-align: center;\n    font-size: 32px;\n  }\n\n  h2 {\n    text-align: center;\n    font-size: 24px;\n    margin-top: 20px;\n    margin-bottom: 16px;\n  }\n"]))),_=function(){var n=(0,l.v9)(g),e=(0,l.v9)(b);return(0,z.jsxs)(P,{children:[(0,z.jsx)("h1",{children:"Phonebook"}),(0,z.jsx)(Z,{}),(0,z.jsx)("h2",{children:"Contacts"}),(0,z.jsx)(I,{}),e&&(0,z.jsxs)("b",{children:["Error: ",e]}),n&&(0,z.jsx)(O.a,{}),(0,z.jsx)(N,{})]})}}}]);
//# sourceMappingURL=444.b55ba4ba.chunk.js.map