"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[137],{4137:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(4270),r=n(9439),s=n(2791),c=n(9434),i="ContactForm_contactAddForm__h-+WW",o="ContactForm_contactAddLabel__zYesn",u="ContactForm_contactAddInput__MlXun",l="ContactForm_contactAddBtn__uYWWc",d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},m=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},_=function(e){return e.filter.filter},f=n(3634),p=n(184),b=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],h=(0,s.useState)(""),_=(0,r.Z)(h,2),b=_[0],v=_[1],x=(0,c.I0)(),C=(0,c.v9)(m),j=function(e){switch(e.currentTarget.name){case"name":return a(e.currentTarget.value);case"number":return v(e.currentTarget.value);default:return}},g=function(){a(""),v("")};return(0,p.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var t={id:d(),name:n,number:b};if(C.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(n," is already in contacts."));x((0,f.uK)(t)),g()},children:[(0,p.jsxs)("label",{className:o,children:["Name",(0,p.jsx)("input",{className:u,type:"text",name:"name",value:n,placeholder:"Enter Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:j})]}),(0,p.jsxs)("label",{className:o,children:["Number",(0,p.jsx)("input",{className:u,type:"tel",name:"number",value:b,placeholder:"Enter Phone Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:j})]}),(0,p.jsx)("button",{className:l,type:"submit",children:"Add contact"})]})},v="ContactList_contactList__UFVCg",x="ContactList_contactListItem__3th7-",C="ContactList_contactListBtn__iwQAv",j=function(){var e=(0,c.v9)(m),t=(0,c.v9)(_),n=(0,c.I0)();return(0,p.jsx)("ul",{className:v,children:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return(0,p.jsxs)("li",{className:x,children:[(0,p.jsx)("p",{children:e.name}),(0,p.jsx)("p",{children:e.number}),(0,p.jsx)("button",{className:C,name:e.name,type:"submit",onClick:function(){return t=e.id,n((0,f.GK)(t));var t},children:"Delete"},e.id)]},e.id)}))})},g=n(4808),N="Filter_filterLabel__+pnW-",L="Filter_filterTitle__5SDqd",y="Filter_filterInput__1Cysk",w=function(){var e=(0,c.v9)(_),t=(0,c.I0)();return(0,p.jsxs)("label",{className:N,children:[(0,p.jsx)("p",{className:L,children:"Find contacts by Name"}),(0,p.jsx)("input",{className:y,value:e,name:"filter",onChange:function(e){t((0,g.O)(e.currentTarget.value))},type:"input",placeholder:"Enter Looking Name"})]})},A=function(){var e=(0,c.I0)(),t=(0,c.v9)(h);return(0,s.useEffect)((function(){e((0,f.yF)())}),[e]),(0,p.jsxs)("div",{children:[(0,p.jsx)(a.q,{children:(0,p.jsx)("title",{children:"Phonebook"})}),(0,p.jsx)(b,{}),(0,p.jsx)("div",{children:t&&"Request in progress..."}),(0,p.jsx)(w,{}),(0,p.jsx)(j,{})]})}}}]);
//# sourceMappingURL=137.430e9b05.chunk.js.map