(this["webpackJsonpreact-scrapper"]=this["webpackJsonpreact-scrapper"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),l=n.n(c),o=(n(9),n(1)),u=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)([]),s=Object(o.a)(u,2),i=s[0],m=s[1],d=Object(a.useState)(!0),f=Object(o.a)(d,2),p=f[0],E=f[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),v=h[0],g=h[1],N=["de","dos","das","da","do","os","as","com","se","na","em","por","cada","ec","ac","ad","no"];return r.a.createElement("div",{className:"CrawlerUI"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-search"},r.a.createElement("h1",null,"Search for domains here"),r.a.createElement("span",null,"e.g. https://www.google.com/"),r.a.createElement("div",{className:"form-holder"},r.a.createElement("label",{htmlFor:"domains"},"Domains (one per line)"),r.a.createElement("textarea",{name:"domains",id:"domains",onChange:function(e){l(e.target.value.split("\n"))},value:c.join("\n")}),r.a.createElement("button",{className:"button",onClick:function(){c.filter((function(e){return""!==e})).forEach((function(e){var t={method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({url:e})};g(e),fetch("https://wordcrawler-api.herokuapp.com/get-occurrences",t).then((function(e){return e.json()})).then((function(e){m((function(t){return t.concat(e)}))})).then((function(e){return g("")}))}))}},"Submit"))),r.a.createElement("div",{className:"output"},r.a.createElement("div",{className:"box"},r.a.createElement("h2",null,"Occurrences"),i&&r.a.createElement("div",{className:"table-holder"},r.a.createElement("div",{className:"table-controls"},r.a.createElement("button",{className:"button",onClick:function(){return E(!p)}},"Toggle filters"),r.a.createElement("button",{className:"button",onClick:function(){var e=new Set;i.forEach((function(t){return e.add(t.name)}));var t=Array.from(e).map((function(e){var t=i.filter((function(t){return t.name===e})).map((function(e){return e.incidences})).reduce((function(e,t){return e+t}));return{name:e,incidences:t}}));m(t)}},"Merge data"),r.a.createElement("button",{className:"button",onClick:function(){return m([])}},"Clear Data")),r.a.createElement("ul",null,r.a.createElement("li",{className:"table-head"},r.a.createElement("strong",null,"Word")," ",r.a.createElement("span",null,"Occurrences")),i.filter((function(e){return!p||e.name.length>1&&!N.includes(e.name)})).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("strong",null,e.name)," ",r.a.createElement("span",null,e.incidences))})))),v&&r.a.createElement("span",null,"Crawling into ",v,"...")))))};var s=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.9f4f4a30.chunk.js.map