(this["webpackJsonpsmac-corpus"]=this["webpackJsonpsmac-corpus"]||[]).push([[0],{101:function(e,t,a){},105:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),u=(a(101),a(102),a(29)),s=a(45),i=a(46),o=a(57),m=a(80),h=(a(105),a(25)),d=a(62),E=a(137),b=a(138),p=a(82),f=p.a().shape({Type:p.b().min(3,"Must have at least 3 values").required("Must enter a value")}),v=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.c,{initialValues:{Type:"library",CV:"0.4.25"},onSubmit:function(t,a){var n=a.setSubmitting;n(!0),e.props.onSubmit(t),n(!1)},validationSchema:f},(function(e){var t=e.values,a=e.errors,n=e.isSubmitting;return l.a.createElement(d.b,null,l.a.createElement(d.a,{name:"Type",type:"input",as:E.a}),l.a.createElement(d.a,{name:"CV",type:"input",as:E.a}),l.a.createElement("div",null,l.a.createElement(b.a,{type:"submit",disabled:n},"submit")),l.a.createElement("pre",null,"Errors: ",JSON.stringify(a,null,2)),l.a.createElement("pre",null,"Values: ",JSON.stringify(t,null,2)))}))}}]),t}(n.Component),y=function(e){function t(e){return Object(u.a)(this,t),Object(s.a)(this,Object(i.a)(t).call(this))}return Object(o.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=function(e){return e.substr(0,16).replace("T"," ")};return l.a.createElement("div",null,l.a.createElement("table",{className:"table table-hover table-sm table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"pragma"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"SLOC"),l.a.createElement("th",null,"NF"),l.a.createElement("th",null,"First_seen"),l.a.createElement("th",null,"Last_seen"))),l.a.createElement("tbody",null,this.props.smacs.map((function(t){return l.a.createElement("tr",{key:t._id},l.a.createElement("td",null,l.a.createElement("a",{target:"_",href:"https://etherscan.io/address/".concat(t.address,"#code")},t.address)),l.a.createElement("td",null,t.CV),l.a.createElement("td",null,t.ContractName),l.a.createElement("td",null,t.Type),l.a.createElement("td",null,t.SLOC),l.a.createElement("td",null,t.NF),l.a.createElement("td",null,e(t.FS)),l.a.createElement("td",null,e(t.LS)))})))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this))).handleSubmit=function(e){fetch("http://smac.ga/object/"+JSON.stringify(e),{headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a.setState({smacs:e})})).catch((function(e){console.log("catch:\n",e)}))},a.render=function(){return l.a.createElement("main",{className:"container-fluid"},l.a.createElement(m.b,null,l.a.createElement(m.a,null,l.a.createElement("title",null,"Smac-Corpus"))),l.a.createElement(v,{onSubmit:a.handleSubmit}),l.a.createElement(y,{smacs:a.state.smacs}))},a.state={smacs:[]},a}return Object(o.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){e.exports=a(108)}},[[97,1,2]]]);
//# sourceMappingURL=main.f96877b9.chunk.js.map