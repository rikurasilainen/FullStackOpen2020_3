(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=(t(20),t(14)),l=t(2),i=function(e){var n=e.onChange,t=e.filter;return r.a.createElement("form",null,"Filter shown with ",r.a.createElement("input",{onChange:n,filter:t}))},m=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,c=e.handleAdd,u=e.handleNumber;return r.a.createElement("div",null,r.a.createElement("h2",null,"Add a new contact"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{required:!0,value:t,onChange:c})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{required:!0,value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=function(e){var n=e.name,t=e.number,a=e.handleDelete;return r.a.createElement("li",null,n," ",t," ",r.a.createElement("button",{onClick:function(){return a(n)}},"delete"))},d=function(e){var n=e.personsFiltered,t=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(f,{key:e.name,name:e.name,number:e.number,handleDelete:t})}))))},s=t(3),h=t.n(s),b="/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},E=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e))},j=function(e,n){return h.a.put("".concat(b,"/").concat(e),n)},O=function(e){var n=e.message,t=e.error;return null===n?null:!0===t?r.a.createElement("div",{className:"error"},n):r.a.createElement("div",{className:"notification"},n)},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),f=Object(l.a)(u,2),s=f[0],h=f[1],b=Object(a.useState)(""),g=Object(l.a)(b,2),w=g[0],S=g[1],k=Object(a.useState)(""),C=Object(l.a)(k,2),N=C[0],y=C[1],D=Object(a.useState)([]),P=Object(l.a)(D,2),A=P[0],F=P[1],I=Object(a.useState)(null),q=Object(l.a)(I,2),J=q[0],L=q[1],T=Object(a.useState)(!1),x=Object(l.a)(T,2),B=x[0],M=x[1];Object(a.useEffect)((function(){v().then((function(e){c(e),F(e)}))}),[]);var z=function(e){B&&(L(),setTimeout((function(){L(null),M(!1)}),5e3)),L(e),setTimeout((function(){L(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(O,{className:"notification",message:J,error:B}),r.a.createElement(i,{filter:N,onChange:function(e){F(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}))),y(e.target.value)}}),r.a.createElement(m,{handleAdd:function(e){h(e.target.value)},handleNumber:function(e){S(e.target.value)},name:s,number:w,addPerson:function(e){if(e.preventDefault(),t.find((function(e){return e.name===s}))){if(window.confirm("".concat(s," is already in the phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===s})),a=n.id,r=Object(o.a)({},n);r.number=w,j(a,r).then((function(e){n.number=w,z("Phonenumber of ".concat(n.name," changed"))})).catch((function(e){M(!0),z("Information of ".concat(s," has already been removed from the server")),c(t.filter((function(e){return e.id!==a}))),F(t.filter((function(e){return e.id!==a})))}))}}else{var u={name:s,number:w};E(u).then((function(e){c(t.concat(e)),F(t.concat(e)),z("".concat(u.name," added to the phonebook"))})).catch((function(e){M(!0),L(e.response.data.error)}))}h(""),S(""),e.target.reset()}}),r.a.createElement(d,{personsFiltered:A,handleDelete:function(e){var n=t.find((function(n){return n.name===e})).id;window.confirm("Delete ".concat(e,"?"))&&p(n).then((function(){c(t.filter((function(e){return e.id!==n}))),F(t.filter((function(e){return e.id!==n}))),z("".concat(e," has been deleted from the phonebook"))})).catch((function(){M(!0),z("Information of ".concat(e," has already been removed from the server")),c(t.filter((function(e){return e.id!==n}))),F(t.filter((function(e){return e.id!==n})))}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c6f89337.chunk.js.map