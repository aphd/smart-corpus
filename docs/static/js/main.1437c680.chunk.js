(this["webpackJsonpsmac-corpus"]=this["webpackJsonpsmac-corpus"]||[]).push([[0],{106:function(e,t,n){e.exports=n(128)},110:function(e,t,n){},114:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=(n(110),n(111),n(34)),u=n(28),s=n(51),l=n(31),f=n(62),m=n(86),h=(n(114),n(29)),p=n(43),b=n(160),d=n(159),y=n(83),v=y.a().shape({CV:y.b().required("Must enter a value"),Type:y.b().required("Must enter a value")}),g={pragma_versions:["Any","0.4.25","0.5.0","0.5.2","0.6.0"],greater_than:{Any:"Any","Greater than 1":{$gt:1},"Greater than 10":{$gt:10},"Greater than 100":{$gt:100},"Greater than 1000":{$gt:1e3}}},E=function(e){var t=this;this.query=Object.assign({},e);Object.keys(e).forEach((function(e){"Any"===t.query[e]&&delete t.query[e]})),this.query.total_lines=g.greater_than[this.query.total_lines],this.query.functions=g.greater_than[this.query.functions],this.query.modifiers=g.greater_than[this.query.modifiers],this.query.payable=g.greater_than[this.query.payable],console.log(JSON.stringify(this.query)),fetch("http://smac.ga/"+JSON.stringify(this.query)).then((function(e){return e.json()})).then((function(e){return t.setState({data:e.slice(0,20)})})).catch((function(e){return console.log("catch:\n",e)}))};var O=function(e){Object(f.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(l.a)(e);if(t()){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return console.log(),r.a.createElement(p.c,{initialValues:{Type:"Any",CV:"Any"},onSubmit:function(t,n){var a=n.setSubmitting;a(!0),e.props.onSubmit(t),a(!1)},validationSchema:v},(function(e){e.values,e.errors;var t=e.isSubmitting;return r.a.createElement(p.b,null,r.a.createElement(p.a,{name:"vrsion",as:b.a,select:!0,label:"pragma version",SelectProps:{native:!0}},Object.entries(g.pragma_versions).map((function(e){return r.a.createElement("option",{key:e[1]},e[1])}))),r.a.createElement(p.a,{name:"total_lines",as:b.a,select:!0,label:"Source lines of code",SelectProps:{native:!0}},Object.entries(g.greater_than).map((function(e,t){return r.a.createElement("option",{key:t},e[0])}))),r.a.createElement(p.a,{name:"functions",as:b.a,select:!0,label:"Number of functions",SelectProps:{native:!0}},Object.entries(g.greater_than).map((function(e,t){return r.a.createElement("option",{key:t},e[0])}))),r.a.createElement(p.a,{name:"modifiers",as:b.a,select:!0,label:"Number of modifiers",SelectProps:{native:!0}},Object.entries(g.greater_than).map((function(e,t){return r.a.createElement("option",{key:t},e[0])}))),r.a.createElement(p.a,{name:"payable",as:b.a,select:!0,label:"Number of payable",SelectProps:{native:!0}},Object.entries(g.greater_than).map((function(e,t){return r.a.createElement("option",{key:t},e[0])}))),r.a.createElement(d.a,{variant:"contained",color:"primary",type:"submit",disabled:t},"submit"))}))}}]),n}(a.Component),j=n(27),S=n(24),k=n(100),R=n.n(k),_=n(161),q=r.a.createContext(),C=function(e){var t=Object(a.useState)([]),n=Object(S.a)(t,2),c=n[0],o=n[1];return r.a.createElement(q.Provider,{value:[c,o]},e.children)},w=function(e){var t=Object(a.useContext)(q),n=Object(S.a)(t,2),c=(n[0],n[1]),o=r.a.useState(!1),i=Object(S.a)(o,2),u=i[0],s=i[1];return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"text-right"},r.a.createElement(_.a,{checked:u,onChange:function(t){s(t.target.checked);var n={id:e.id};c((function(t){return u?t.filter((function(t,n){return t.id!==e.id})):[].concat(Object(j.a)(t),[n])}))},inputProps:{"aria-label":"primary checkbox"}})),e.metrics.map((function(t,n){var a,c=e.data[t];if(c.length>15){var o="".concat(c.slice(0,15),"...");c=R()('<a href="'.concat((a=c,"https://etherscan.io/address/".concat(a,"#code")),'" >').concat(o,"</a>"))}return r.a.createElement("td",{key:n},c)})))},x=function(){var e=Object(a.useContext)(q),t=Object(S.a)(e,1)[0],n=t.length?"":"d-none",c=t.length?"d-none":"";return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"100"},r.a.createElement("button",{type:"button",className:"btn btn-info ".concat(c)},"Select the checkboxes to download the smart contracts"),r.a.createElement("a",{href:"https://github.com/aphd/smac-corpus-api/raw/master/data/json.7z"},r.a.createElement("button",{type:"button",className:"btn btn-info ".concat(n)},"Download"," ",r.a.createElement("span",{className:"badge badge-light"},t.length)," ","smart contracts"))))},N=function(e){return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-right"},"\xa0"),e.metrics.map((function(e,t){return e=e.replace("_"," "),r.a.createElement("th",{className:"align-middle",key:t},e.toLowerCase())})))};var P=function(e){Object(f.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(l.a)(e);if(t()){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getRowsData=function(){var e=this;return this.props.data.map((function(t,n){return r.a.createElement(w,{key:n,id:n,data:t,metrics:e.METRICS})}))},a.METRICS=null,a}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.data&&this.props.data.length>0;return e&&(this.METRICS=function(e){var t=Object.keys(e);return function(e,t){var n=e.indexOf(t);return n>-1&&(e.splice(n,1),e.unshift("contractAddress")),e}(t=function(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}(t,["_id","blanks","FS","LS"]),"contractAddress")}(this.props.data[0])),e&&r.a.createElement("table",{className:"table table-hover table-sm table-bordered mt-5"},r.a.createElement("thead",null,r.a.createElement(x,null),r.a.createElement(N,{metrics:this.METRICS})),r.a.createElement("tbody",null,this.getRowsData()))}}]),n}(a.Component);var D=function(e){Object(f.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,a=Object(l.a)(e);if(t()){var r=Object(l.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(s.a)(this,n)}}(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).render=function(){return r.a.createElement(C,null,r.a.createElement(m.b,null,r.a.createElement(m.a,null,r.a.createElement("title",null,"Smac-Corpus"))),r.a.createElement(O,{onSubmit:a.handleSubmit}),r.a.createElement(P,{data:a.state&&a.state.data}))},a.handleSubmit=E.bind(Object(u.a)(a)),a}return n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[106,1,2]]]);
//# sourceMappingURL=main.1437c680.chunk.js.map