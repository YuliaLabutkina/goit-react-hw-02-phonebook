(this["webpackJsonpreact-hw"]=this["webpackJsonpreact-hw"]||[]).push([[0],{24:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e(0),c=e.n(r),i=e(13),o=e.n(i),u=(e(23),e(24),e(11)),l=e(4),b=e(5),s=e(8),d=e(7),p=e(14),f=e(29),g=e(2),x=e(3);function h(){var n=Object(g.a)(["\n  position: relative;\n  display: inline-block;\n  width: 180px;\n  margin: 0 auto;\n  color: #777674;\n  font-weight: bold;\n  text-decoration: none;\n  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,\n    rgba(100, 100, 100, 0.3) 3px 7px 3px;\n  user-select: none;\n  padding: 1em 2em;\n  outline: none;\n  border-radius: 3px / 100%;\n  background-image: linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0) 30%,\n      rgba(255, 255, 255, 0.8),\n      rgba(255, 255, 255, 0) 70%\n    ),\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 1),\n      rgba(255, 255, 255, 0) 20%,\n      rgba(255, 255, 255, 0) 90%,\n      rgba(255, 255, 255, 0.3)\n    ),\n    linear-gradient(\n      to right,\n      rgba(125, 125, 125, 1),\n      rgba(255, 255, 255, 0.9) 45%,\n      rgba(125, 125, 125, 0.5)\n    ),\n    linear-gradient(\n      to right,\n      rgba(125, 125, 125, 1),\n      rgba(255, 255, 255, 0.9) 45%,\n      rgba(125, 125, 125, 0.5)\n    ),\n    linear-gradient(\n      to right,\n      rgba(223, 190, 170, 1),\n      rgba(255, 255, 255, 0.9) 45%,\n      rgba(223, 190, 170, 0.5)\n    ),\n    linear-gradient(\n      to right,\n      rgba(223, 190, 170, 1),\n      rgba(255, 255, 255, 0.9) 45%,\n      rgba(223, 190, 170, 0.5)\n    );\n  background-repeat: no-repeat;\n  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\n  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\n  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;\n\n  &:hover {\n    transition: 0.5s linear;\n    background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\n  }\n\n  &:active {\n    top: 1px;\n  }\n"]);return h=function(){return n},n}function m(){var n=Object(g.a)(["\n  display: block;\n  margin: 20px auto;\n  padding-left: 16px;\n  font-size: 18px;\n\n  &::placeholder {\n    padding-left: 10px;\n    font-size: 16px;\n  }\n"]);return m=function(){return n},n}function j(){var n=Object(g.a)(["\n  text-align: center;\n  font-size: 22px;\n  font-weight: bold;\n  color: #e9967a;\n"]);return j=function(){return n},n}function v(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return v=function(){return n},n}var O=x.a.form(v()),C=x.a.label(j()),y=x.a.input(m()),w=x.a.button(h()),k=function(n){Object(s.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(p.a)({},a,r))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number,c={id:Object(f.a)(),name:a,number:r};n.props.handleSubmitContactForm(c),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(b.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(a.jsxs)(O,{onSubmit:this.handleSubmit,children:[Object(a.jsxs)(C,{children:["Name",Object(a.jsx)(y,{onChange:this.handleChange,type:"text",name:"name",placeholder:"Enter name",value:t,required:!0})]}),Object(a.jsxs)(C,{children:["Number",Object(a.jsx)(y,{onChange:this.handleChange,type:"tel",name:"number",placeholder:"Enter number",value:e,required:!0})]}),Object(a.jsx)(w,{type:"submit",children:"Add contact"})]})}}]),e}(r.Component);function S(){var n=Object(g.a)(["\n  width: 200px;\n  font-size: 18px;\n  margin-top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  &::placeholder {\n    padding-left: 10px;\n    font-size: 16px;\n  }\n"]);return S=function(){return n},n}function F(){var n=Object(g.a)(["\n  display: block;\n  text-align: center;\n  margin: 0 auto;\n  color: #fa8072;\n  font-size: 22px;\n  font-weight: bold;\n"]);return F=function(){return n},n}var z=x.a.label(F()),N=x.a.input(S()),E=function(n){var t=n.value,e=n.changeFilterName;return Object(a.jsxs)(z,{children:["Find contacts by name",Object(a.jsx)(N,{value:t,onChange:e,type:"text",placeholder:"Enter name"})]})};function L(){var n=Object(g.a)(["\n  margin-left: 8px;\n  background: #ffefd5;\n  color: #fa8072;\n"]);return L=function(){return n},n}function A(){var n=Object(g.a)(["\n  color: #fa8072;\n  margin: 0;\n"]);return A=function(){return n},n}function q(){var n=Object(g.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n"]);return q=function(){return n},n}var D=x.a.li(q()),J=x.a.p(A()),B=x.a.button(L()),I=function(n){var t=n.name,e=n.number,r=n.deleteContact;return Object(a.jsxs)(D,{children:[Object(a.jsxs)(J,{children:[t,": ",e]}),Object(a.jsx)(B,{type:"button",onClick:r,children:"Delete"})]})};function M(){var n=Object(g.a)(["\n  list-style: none;\n  padding: 0;\n"]);return M=function(){return n},n}var P=x.a.ul(M()),G=function(n){var t=n.filterContacts,e=n.deleteContact;return t.length>0&&Object(a.jsx)(P,{children:t.map((function(n){var t=n.id,r=n.name,c=n.number;return Object(a.jsx)(I,{name:r,number:c,deleteContact:function(){return e(t)}},t)}))})};function H(){var n=Object(g.a)(["\n  text-align: center;\n  font-size: 32px;\n  color: #fa8072;\n"]);return H=function(){return n},n}function K(){var n=Object(g.a)(["\n  text-align: center;\n  color: #fa8072;\n"]);return K=function(){return n},n}function Q(){var n=Object(g.a)(["\n  width: 300px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 10px;\n  background-color: #ffe4c4;\n  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.15),\n    0 10px 10px rgba(0, 0, 0, 0.12);\n"]);return Q=function(){return n},n}var R=x.a.div(Q()),T=x.a.h1(K()),U=x.a.h2(H()),V=function(n){Object(s.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},n.checkingForExistenceOfSuchName=function(t){var e=n.state.contacts,a=t.toLowerCase();return e.find((function(n){return n.name.toLowerCase()===a}))},n.handleSubmitContactForm=function(t){var e=t.name;n.checkingForExistenceOfSuchName(e)?alert("".concat(e," is already in contact")):n.setState((function(n){return{contacts:[].concat(Object(u.a)(n.contacts),[t])}}))},n.changeFilterName=function(t){var e=t.target.value;n.setState({filter:e})},n.deleteContact=function(t){n.setState((function(n){return{contacts:Object(u.a)(n.contacts.filter((function(n){return n.id!==t})))}}))},n}return Object(b.a)(e,[{key:"render",value:function(){var n=this.state,t=n.filter,e=n.contacts,r=t.toLowerCase(),c=e.filter((function(n){return n.name.toLowerCase().includes(r)}));return Object(a.jsxs)(R,{children:[Object(a.jsx)(T,{children:"Phonebook"}),Object(a.jsx)(k,{handleSubmitContactForm:this.handleSubmitContactForm}),Object(a.jsx)(U,{children:"Contacts"}),Object(a.jsx)(E,{value:t,changeFilterName:this.changeFilterName}),Object(a.jsx)(G,{filterContacts:c,deleteContact:this.deleteContact})]})}}]),e}(r.Component);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.357e15e6.chunk.js.map