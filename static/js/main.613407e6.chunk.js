(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{77:function(e,n,t){},78:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var i,c,r,a,s,l,o,j,d,x,b,p,h,g,O=t(0),m=t(52),u=t.n(m),f=(t(77),t(78),t(8)),v=t(62),y=t.n(v),w=t(103),k=t(53),S=t(4),_=t(44),I=t.n(_),C=t(59),G=t.n(C),N=t(102),z=t(9),A=t(3),E=t(2),R=Object(O.createContext)(),T=function(e){var n=e.reducer,t=e.initialState,i=e.children;return Object(E.jsx)(R.Provider,{value:Object(O.useReducer)(n,t),children:i})},J=function(){return Object(O.useContext)(R)},M="SET_SEARCH_TERM",q=z.a.div(i||(i=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  border: 1px solid lightgray;\n  height: 30px;\n  padding: 10px 15px;\n  width: 500px;\n  margin: 0px auto;\n  border-radius: 999px;\n  input {\n    flex: 1;\n    padding: 8px 13px;\n    font-size: medium;\n    border: 0;\n    outline: 0;\n  }\n  .searchicon {\n    color: gray;\n  }\n"]))),B=z.a.div(c||(c=Object(f.a)(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  button {\n    margin: 5px;\n    background: #f8f8f8 !important;\n    border: 1px solid white;\n    text-transform: inherit;\n    &:hover {\n      margin: 5px;\n      background: #f8f8f8 !important;\n      color: #000;\n      border: 1px solid #c6c6c6;\n    }\n  }\n"]))),D=function(e){var n=e.hide,t=Object(O.useState)(""),i=Object(S.a)(t,2),c=i[0],r=i[1],a=Object(A.l)(),s=J(),l=Object(S.a)(s,2);Object(k.a)(l[0]);var o=l[1];return Object(E.jsxs)("form",{onSubmit:function(e){e.preventDeafult(),o({type:M,term:c}),console.log(c),a("/search")},children:[Object(E.jsxs)(q,{children:[Object(E.jsx)(I.a,{className:"searchicon"}),Object(E.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)}}),Object(E.jsx)(G.a,{})]}),!n&&Object(E.jsxs)(B,{children:[Object(E.jsx)(N.a,{type:"submit",variant:"outlined",children:"Google Search"}),Object(E.jsx)(N.a,{variant:"outlined",children:"I am feeling lucky"})]})]})},H=z.a.div(r||(r=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n"]))),K=z.a.div(a||(a=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 20px 30px;\n    align-items: center;\n"]))),L=z.a.div(s||(s=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    p{\n        margin-right: 20px;\n        font-size: 15px;\n    }\n    .left-margin{\n        margin-left: 20px;\n    }\n"]))),P=z.a.div(l||(l=Object(f.a)(["\n    flex: 1;\n    display: flex;\n    margin-top: 10%;\n    flex-direction: column;\n    img {\n        object-fit: contain;\n        height: 100px;\n        margin-bottom: 5px;\n    }\n"]))),V=function(){return Object(E.jsxs)(H,{children:[Object(E.jsxs)(K,{children:[Object(E.jsxs)(L,{children:[Object(E.jsx)("p",{children:"About"}),Object(E.jsx)("p",{children:"Store"})]}),Object(E.jsxs)(L,{children:[Object(E.jsx)("p",{children:"Gmail"}),Object(E.jsx)("p",{children:"Images"}),Object(E.jsx)(y.a,{className:"left-margin"}),Object(E.jsx)(w.a,{className:"left-margin"})]})]}),Object(E.jsxs)(P,{children:[Object(E.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png",alt:"google-logo"}),Object(E.jsx)("div",{children:Object(E.jsx)(D,{})})]})]})},X=t(12),Y=t(63),F=t.n(Y),Q=t(64),U=t.n(Q),W=t(66),Z=t.n(W),$=t(65),ee=t.n($),ne=t(67),te=t.n(ne),ie=function(e){var n=Object(O.useState)(null),t=Object(S.a)(n,2),i=t[0],c=t[1];return Object(O.useEffect)((function(){fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyCDqBgS8V3fK-xrJSfr-IprkXel6c7bmdY","&cx=").concat("07dcdd70dc4f24df6","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){c(e)}))}),{term:e}),{data:i}},ce=z.a.div(o||(o=Object(f.a)(["\n  display: flex;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background-color: white;\n  align-items: flex-start;\n  padding: 30px;\n  border-bottom: 1px solid lightgray;\n  img {\n    height: 50px;\n    margin-right: 50px;\n  }\n"]))),re=z.a.div(j||(j=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  color: gray;\n  margin-top: 30px;\n  a {\n    text-decoration: none;\n    color: gray;\n    margin-left: 5px;\n  }\n"]))),ae=z.a.div(d||(d=Object(f.a)(["\n  margin-left: ",";\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n"])),(function(e){return e.right?"80px":"0px"})),se=z.a.div(x||(x=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n"]))),le=z.a.div(b||(b=Object(f.a)(["\n  max-width: 650px;\n  margin-top: 20px;\n  margin-left: 240px;\n  margin-bottom: 100px;\n  .resultCount {\n    color: #70757a;\n    font-size: 14px;\n  }\n  .result {\n    margin: 40px 0px;\n  }\n"]))),oe=z.a.a(p||(p=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #000;\n  margin-bottom: 3px;\n  img {\n    height: 50px;\n    width: 50px;\n    object-fit: contain;\n    margin-right: 10px;\n  }\n"]))),je=z.a.a(h||(h=Object(f.a)(["\n  text-decoration: none;\n  h2 {\n    font-weight: 500;\n  }\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),de=z.a.p(g||(g=Object(f.a)(["\n  margin-top: 10px;\n"]))),xe=function(){var e=J(),n=Object(S.a)(e,1)[0].term,t=ie(n).data;return console.log(t),Object(E.jsxs)("div",{children:[Object(E.jsxs)(ce,{children:[Object(E.jsx)(X.b,{to:"/",children:Object(E.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Google_2011_logo.png/640px-Google_2011_logo.png"})}),Object(E.jsxs)("div",{children:[Object(E.jsx)(D,{hide:!0}),Object(E.jsxs)(re,{children:[Object(E.jsxs)(ae,{children:[Object(E.jsxs)(se,{children:[Object(E.jsx)(I.a,{}),Object(E.jsx)(X.b,{to:"/all",children:"All"})]}),Object(E.jsxs)(se,{children:[Object(E.jsx)(F.a,{}),Object(E.jsx)(X.b,{to:"/all",children:"News"})]}),Object(E.jsxs)(se,{children:[Object(E.jsx)(U.a,{}),Object(E.jsx)(X.b,{to:"/all",children:"Images"})]}),Object(E.jsxs)(se,{children:[Object(E.jsx)(ee.a,{}),Object(E.jsx)(X.b,{to:"/all",children:"Shopping"})]}),Object(E.jsxs)(se,{children:[Object(E.jsx)(Z.a,{}),Object(E.jsx)(X.b,{to:"/all",children:"Maps"})]}),Object(E.jsxs)(se,{children:[Object(E.jsx)(te.a,{})," ",Object(E.jsx)(X.b,{to:"/all",children:"More"})]})]}),Object(E.jsxs)(ae,{right:!0,children:[Object(E.jsx)(se,{children:Object(E.jsx)(X.b,{to:"/settings",children:"Settings"})}),Object(E.jsx)(se,{children:Object(E.jsx)(X.b,{to:"/tools",children:"Tools"})})]})]})]})]}),n&&Object(E.jsxs)(le,{children:[Object(E.jsxs)("p",{className:"resultCount",children:["About ",null===t||void 0===t?void 0:t.searchInformation.formattedTotalResults," results (",null===t||void 0===t?void 0:t.searchInformation.formattedSearchTime,") for ",n]}),null===t||void 0===t?void 0:t.items.map((function(e){var n,t,i,c,r,a;return Object(E.jsxs)("div",{className:"result",children:[Object(E.jsxs)(oe,{href:e.link,children:[(null===(n=e.pagemap)||void 0===n||null===(t=n.cse_image)||void 0===t?void 0:t.length)>0&&(null===(i=e.pagemap)||void 0===i||null===(c=i.cse_image[0])||void 0===c?void 0:c.src)&&Object(E.jsx)("img",{src:null===(r=e.pagemap)||void 0===r||null===(a=r.cse_image[0])||void 0===a?void 0:a.src,alt:""}),e.displayLink]}),Object(E.jsx)(je,{href:e.link,children:Object(E.jsx)("h2",{children:e.title})}),Object(E.jsx)(de,{children:e.snippet})]})}))]})]})};function be(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(X.a,{children:Object(E.jsxs)(A.c,{children:[Object(E.jsx)(A.a,{exact:!0,path:"/",element:Object(E.jsx)(V,{})}),Object(E.jsx)(A.a,{path:"/search",element:Object(E.jsx)(xe,{})})]})}),Object(E.jsx)(V,{})]})}var pe=t(48),he=function(e,n){return n.type===M?Object(pe.a)(Object(pe.a)({},e),{},{term:n.term}):e};u.a.createRoot(document.getElementById("root")).render(Object(E.jsx)(T,{initialState:{term:""},reducer:he,children:Object(E.jsx)(be,{})}))}},[[86,1,2]]]);
//# sourceMappingURL=main.613407e6.chunk.js.map