(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(19),t(2)),l=function(e){var n=e.onChange,t=e.filter;return r.a.createElement("form",null,"Filter shown with ",r.a.createElement("input",{onChange:n,filter:t}))},i=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,u=e.handleAdd,c=e.handleNumber;return r.a.createElement("div",null,r.a.createElement("h2",null,"Add a new contact"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{required:!0,value:t,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{required:!0,value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var n=e.name,t=e.number,a=e.handleDelete;return r.a.createElement("li",null,n," ",t," ",r.a.createElement("button",{onClick:function(){return a(n)}},"delete"))},f=function(e){var n=e.personsFiltered,t=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(m,{key:e.name,name:e.name,number:e.number,handleDelete:t})}))))},d=t(3),s=t.n(d),h="/api/persons",b=function(){return s.a.get(h).then((function(e){return e.data}))},v=function(e){return s.a.post(h,e).then((function(e){return e.data}))},E=function(e){return s.a.delete("".concat(h,"/").concat(e))},p=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.error;return null===n?null:!0===t?r.a.createElement("div",{className:"error"},n):r.a.createElement("div",{className:"notification"},n)},j=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(o.a)(c,2),d=m[0],s=m[1],h=Object(a.useState)(""),j=Object(o.a)(h,2),w=j[0],O=j[1],S=Object(a.useState)(""),k=Object(o.a)(S,2),C=k[0],N=k[1],y=Object(a.useState)([]),D=Object(o.a)(y,2),P=D[0],A=D[1],F=Object(a.useState)(null),I=Object(o.a)(F,2),q=I[0],J=I[1],L=Object(a.useState)(!1),T=Object(o.a)(L,2),x=T[0],B=T[1];Object(a.useEffect)((function(){b().then((function(e){u(e),A(e)}))}),[]);var M=function(e){x&&(J(),setTimeout((function(){J(null),B(!1)}),5e3)),J(e),setTimeout((function(){J(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{className:"notification",message:q,error:x}),r.a.createElement(l,{filter:C,onChange:function(e){A(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}))),N(e.target.value)}}),r.a.createElement(i,{handleAdd:function(e){s(e.target.value)},handleNumber:function(e){O(e.target.value)},name:d,number:w,addPerson:function(e){e.preventDefault();var n={name:d,number:w};if(t.find((function(e){return e.name===d}))){if(window.confirm("".concat(d," is already in the phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===d})).id;p(a,n).then((function(a){A(t.map((function(e){return e.name!==d?e:a}))),u(t.map((function(e){return e.name!==d?e:a}))),s(""),O(""),e.target.reset(),M("Phonenumber of ".concat(n.name," changed"))})).catch((function(){B(!0),M("Information of ".concat(n.name," has already been removed from the server")),u(t.filter((function(e){return e.id!==a}))),A(t.filter((function(e){return e.id!==a})))}))}}else v(n).then((function(e){u(t.concat(e)),A(t.concat(e))})),s(""),O(""),e.target.reset(),M("".concat(n.name," added to the phonebook"))}}),r.a.createElement(f,{personsFiltered:P,handleDelete:function(e){var n=t.find((function(n){return n.name===e})).id;window.confirm("Delete ".concat(e,"?"))&&E(n).then((function(){u(t.filter((function(e){return e.id!==n}))),A(t.filter((function(e){return e.id!==n}))),M("".concat(e," has been deleted from the phonebook"))})).catch((function(){B(!0),M("Information of ".concat(e," has already been removed from the server")),u(t.filter((function(e){return e.id!==n}))),A(t.filter((function(e){return e.id!==n})))}))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b6e5c0b0.chunk.js.map