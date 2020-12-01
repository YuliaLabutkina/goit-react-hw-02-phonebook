(this["webpackJsonpreact-hw"]=this["webpackJsonpreact-hw"]||[]).push([[0],{24:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e.n(a),o=e(13),i=e.n(o),u=(e(23),e(24),e(11)),l=e(4),b=e(5),s=e(8),d=e(7),g=e(14),p=e(29),f=e(2),x=e(3);function h(){var n=Object(f.a)(["\n  position: relative;\n  display: inline-block;\n  width: 180px;\n  margin: 0 auto;\n  color: #777674;\n  font-weight: bold;\n  text-decoration: none;\n  text-shadow: rgba(255,255,255,.5) 1px 1px, rgba(100,100,100,.3) 3px 7px 3px;\n  user-select: none;\n  padding: 1em 2em;\n  outline: none;\n  border-radius: 3px / 100%;\n  background-image:\n   linear-gradient(45deg, rgba(255,255,255,.0) 30%, rgba(255,255,255,.8), rgba(255,255,255,.0) 70%),\n   linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 90%, rgba(255,255,255,.3)),\n   linear-gradient(to right, rgba(125,125,125,1), rgba(255,255,255,.9) 45%, rgba(125,125,125,.5)),\n   linear-gradient(to right, rgba(125,125,125,1), rgba(255,255,255,.9) 45%, rgba(125,125,125,.5)),\n   linear-gradient(to right, rgba(223,190,170,1), rgba(255,255,255,.9) 45%, rgba(223,190,170,.5)),\n   linear-gradient(to right, rgba(223,190,170,1), rgba(255,255,255,.9) 45%, rgba(223,190,170,.5));\n  background-repeat: no-repeat;\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\n  box-shadow: rgba(0,0,0,.5) 3px 10px 10px -10px;\n    \n    &:hover {\n      transition: .5s linear;\n      background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\n    }\n\n    &:active {\n      top: 1px;\n    }\n"]);return h=function(){return n},n}function m(){var n=Object(f.a)(["\n  display: block;\n  margin: 20px auto;\n  padding-left: 16px;\n  font-size: 18px;\n\n  &::placeholder {\n      padding-left: 10px;\n      font-size: 16px;\n  }\n"]);return m=function(){return n},n}function j(){var n=Object(f.a)(["\n  text-align: center;\n  font-size: 22px;\n  font-weight: bold;\n  color: #E9967A;\n"]);return j=function(){return n},n}function v(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return v=function(){return n},n}var O=x.a.form(v()),C=x.a.label(j()),y=x.a.input(m()),F=x.a.button(h()),w=function(n){Object(s.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=t.call.apply(t,[this].concat(a))).state={name:"",number:""},n.handleChange=function(t){n.setState(Object(g.a)({},t.currentTarget.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,r=e.name,a=e.number,c={id:Object(p.a)(),name:r,number:a};n.props.handleSubmitContactForm(c),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(b.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(r.jsxs)(O,{onSubmit:this.handleSubmit,children:[Object(r.jsxs)(C,{children:[" Name",Object(r.jsx)(y,{onChange:this.handleChange,type:"text",name:"name",placeholder:"Enter name",value:t,required:!0})]}),Object(r.jsxs)(C,{children:[" Number",Object(r.jsx)(y,{onChange:this.handleChange,type:"tel",name:"number",placeholder:"Enter number",value:e,required:!0})]}),Object(r.jsx)(F,{type:"submit",children:"Add contact"})]})}}]),e}(a.Component);function k(){var n=Object(f.a)(["\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);return k=function(){return n},n}function S(){var n=Object(f.a)(["\n  display: block;\n  text-align: center;\n  margin: 0 auto;\n  color: #FA8072;\n  font-size: 22px;\n  font-weight: bold;\n"]);return S=function(){return n},n}var A=x.a.label(S()),z=x.a.input(k()),E=function(n){var t=n.value,e=n.changeFilterName;return Object(r.jsxs)(A,{children:[" Find contacts by name",Object(r.jsx)(z,{value:t,onChange:e,type:"text"})]})};function N(){var n=Object(f.a)(["\n  margin-left: 8px;\n  background: #FFEFD5;\n  color: #FA8072;\n"]);return N=function(){return n},n}function L(){var n=Object(f.a)(["\n  color: #FA8072;\n  margin: 0;\n"]);return L=function(){return n},n}function D(){var n=Object(f.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n"]);return D=function(){return n},n}var q=x.a.li(D()),J=x.a.p(L()),T=x.a.button(N()),B=function(n){var t=n.name,e=n.number,a=n.deleteContact;return Object(r.jsxs)(q,{children:[Object(r.jsxs)(J,{children:[t,":  ",e]}),Object(r.jsx)(T,{type:"button",onClick:a,children:"Delete"})]})};function I(){var n=Object(f.a)(["\n  list-style: none;\n  padding: 0;\n"]);return I=function(){return n},n}var M=x.a.ul(I()),P=function(n){var t=n.filterContacts,e=n.deleteContact;return t.length>0&&Object(r.jsx)(M,{children:t.map((function(n){var t=n.id,a=n.name,c=n.number;return Object(r.jsx)(B,{name:a,number:c,deleteContact:function(){return e(t)}},t)}))})};function G(){var n=Object(f.a)(["\n  text-align: center;\n  font-size: 32px;\n  color: #FA8072;\n"]);return G=function(){return n},n}function H(){var n=Object(f.a)(["\n  text-align: center;\n  color: #FA8072;\n"]);return H=function(){return n},n}function K(){var n=Object(f.a)(["\n  width: 300px;\n  margin: 0 auto;\n  padding: 20px 10px;\n  background-color: #FFE4C4;\n  box-shadow: 2px 1px 2px 1px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.12);\n"]);return K=function(){return n},n}var Q=x.a.div(K()),R=x.a.h1(H()),U=x.a.h2(G()),V=function(n){Object(s.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=t.call.apply(t,[this].concat(a))).state={contacts:[],filter:""},n.handleSubmitContactForm=function(t){var e=t.name.toLowerCase();n.state.contacts.find((function(n){return n.name.toLowerCase()===e}))?alert("".concat(t.name," is already in contact")):n.setState((function(n){return{contacts:[].concat(Object(u.a)(n.contacts),[t])}}))},n.changeFilterName=function(t){n.setState({filter:t.currentTarget.value})},n.deleteContact=function(t){n.setState((function(n){return{contacts:Object(u.a)(n.contacts.filter((function(n){return n.id!==t})))}}))},n}return Object(b.a)(e,[{key:"render",value:function(){var n=this.state.filter,t=n.toLowerCase(),e=this.state.contacts.filter((function(n){return n.name.toLowerCase().includes(t)}));return Object(r.jsxs)(Q,{children:[Object(r.jsx)(R,{children:"Phonebook"}),Object(r.jsx)(w,{handleSubmitContactForm:this.handleSubmitContactForm}),Object(r.jsx)(U,{children:"Contacts"}),Object(r.jsx)(E,{value:n,changeFilterName:this.changeFilterName}),Object(r.jsx)(P,{filterContacts:e,deleteContact:this.deleteContact})]})}}]),e}(a.Component);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(V,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d87f1a9f.chunk.js.map