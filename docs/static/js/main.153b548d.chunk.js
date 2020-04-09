(this["webpackJsonpsmac-corpus"]=this["webpackJsonpsmac-corpus"]||[]).push([[0],{42:function(t,e,n){t.exports=n(64)},46:function(t,e,n){},50:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(46),n(47),n(11)),s=n(15),l=n(16),u=n(9),f=n(17),m=n(25),d=(n(50),n(7)),h=n(13),p=n(89),b={pragma_versions:["Any","0.4.*","0.5.*","0.6.*"],greater_than:{Any:0,"Greater than 1":1,"Greater than 10":10,"Greater than 100":100}},v=function(t){var e=this;this.query=Object.assign({},t);var n=b.greater_than[t.total_lines]||0,a=b.greater_than[t.functions]||0,r=b.greater_than[t.modifiers]||0,c=b.greater_than[t.payable]||0,o="Any"===t.vrsion?".":t.vrsion||".";return fetch("https://raw.githubusercontent.com/aphd/smac-corpus-api/master/data/metrics.json").then((function(t){return t.json()})).then((function(t){e.setState({data:t.filter((function(t){return t.total_lines>=n&&t.functions>=a&&t.modifiers>=r&&t.payable>=c&&t.vrsion.match(o)}))})})).catch((function(t){return console.log("catch:\n",t)}))};var y=function(t){Object(f.a)(n,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,a=Object(u.a)(t);if(e()){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={loading:!1},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(h.c,{initialValues:{Type:"Any",CV:"Any"},onSubmit:function(e){t.setState({loading:!0}),t.props.onSubmit(e).finally((function(){return t.setState({loading:!1})}))}},(function(e){e.values,e.errors,e.isSubmitting;return r.a.createElement(h.b,null,r.a.createElement(h.a,{name:"vrsion",as:p.a,select:!0,label:"pragma version",SelectProps:{native:!0}},Object.entries(b.pragma_versions).map((function(t){return r.a.createElement("option",{key:t[1]},t[1])}))),r.a.createElement(h.a,{name:"total_lines",as:p.a,select:!0,label:"Source lines of code",SelectProps:{native:!0}},Object.entries(b.greater_than).map((function(t,e){return r.a.createElement("option",{key:e},t[0])}))),r.a.createElement(h.a,{name:"functions",as:p.a,select:!0,label:"Number of functions",SelectProps:{native:!0}},Object.entries(b.greater_than).map((function(t,e){return r.a.createElement("option",{key:e},t[0])}))),r.a.createElement(h.a,{name:"modifiers",as:p.a,select:!0,label:"Number of modifiers",SelectProps:{native:!0}},Object.entries(b.greater_than).map((function(t,e){return r.a.createElement("option",{key:e},t[0])}))),r.a.createElement(h.a,{name:"payable",as:p.a,select:!0,label:"Number of payable",SelectProps:{native:!0}},Object.entries(b.greater_than).map((function(t,e){return r.a.createElement("option",{key:e},t[0])}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:t.state.loading},r.a.createElement("span",{className:"spinner-border spinner-border-sm ".concat(t.state.loading?"mr-2":"d-none")}),"Submit"))}))}}]),n}(a.Component),g=n(12),E=n(8),j=n(38),O=n.n(j),S=r.a.createContext(),k=function(t){var e=Object(a.useState)([]),n=Object(E.a)(e,2),c=n[0],o=n[1];return r.a.createElement(S.Provider,{value:[c,o]},t.children)},R=function(t){var e=Object(a.useContext)(S),n=Object(E.a)(e,2),c=(n[0],n[1]),o=r.a.useState(!1),i=Object(E.a)(o,2),s=i[0],l=i[1];return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"text-right"},r.a.createElement("input",{checked:s,type:"checkbox",onChange:function(e){l(e.target.checked);var n={id:t.id,addr:t.data.contractAddress};c((function(e){return s?e.filter((function(e,n){return e.id!==t.id})):[].concat(Object(g.a)(e),[n])}))}})),t.metrics.map((function(e,n){var a,c=t.data[e];if(c.length>15){var o="".concat(c.slice(0,15),"...");c=O()('<a href="'.concat((a=c,"https://etherscan.io/address/".concat(a,"#code")),'" target="_">').concat(o,"</a>"))}return r.a.createElement("td",{key:n},c)})))},w=function(t){t.forEach((function(t){!function(t){var e="".concat(t,".json"),n="".concat("https://raw.githubusercontent.com/aphd/smac-corpus-api/master/data/contracts/","/").concat(t.substr(0,4),"/").concat(e);fetch(n,{method:"GET"}).then((function(t){return t.json()})).then((function(t){var n=t.result[0].SourceCode,a=new Blob([n],{type:"application/json"}),r=document.createElement("a");r.href=window.URL.createObjectURL(a),r.download=e,document.body.appendChild(r),r.click(),r.remove()}))}(t.addr)}))},_=function(t){var e=Object(a.useContext)(S),n=Object(E.a)(e,1)[0],c=n.length?"":"d-none",o=n.length?"d-none":"";return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"100"},r.a.createElement("button",{type:"button",className:"btn btn-info ".concat(o)},"Select the checkboxes to download the smart contracts - Total number of contracts:"," ",r.a.createElement("span",{class:"badge badge-light"},t.total)),r.a.createElement("button",{onClick:function(){w(n)},type:"button",className:"btn btn-info ".concat(c)},"Download"," ",r.a.createElement("span",{className:"badge badge-light"},n.length)," ","smart contracts")))},C=function(t){return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-right"},"\xa0"),t.metrics.map((function(t,e){return t=t.replace("_"," "),r.a.createElement("th",{className:"align-middle",key:e},t.toLowerCase())})))};var x=function(t){Object(f.a)(n,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,a=Object(u.a)(t);if(e()){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).getRowsData=function(){return a.props.data.map((function(t,e){return r.a.createElement(R,{key:e,id:e,data:t,metrics:a.METRICS})}))},a.METRICS=null,a.total=0,a}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.data&&this.props.data.length>0;return t&&(this.METRICS=function(t){var e=Object.keys(t);return function(t,e){var n=t.indexOf(e);return n>-1&&(t.splice(n,1),t.unshift("contractAddress")),t}(e=function(t,e){return t.filter((function(t){return-1===e.indexOf(t)}))}(e,["_id","blanks","contracts_definition"]),"contractAddress")}(this.props.data[0]),this.total=this.props.data.length),t&&r.a.createElement("table",{className:"table table-hover table-sm table-bordered mt-5"},r.a.createElement("thead",null,r.a.createElement(_,{total:this.total}),r.a.createElement(C,{metrics:this.METRICS})),r.a.createElement("tbody",null,this.getRowsData()))}}]),n}(a.Component);var N=function(t){Object(f.a)(n,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,a=Object(u.a)(t);if(e()){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this)).render=function(){return r.a.createElement(k,null,r.a.createElement(m.b,null,r.a.createElement(m.a,null,r.a.createElement("title",null,"Smac-Corpus"))),r.a.createElement(y,{onSubmit:a.handleSubmit}),r.a.createElement(x,{data:a.state&&a.state.data}))},a.handleSubmit=v.bind(Object(s.a)(a)),a}return n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.153b548d.chunk.js.map