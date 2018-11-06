(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(75)},53:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=a(3),i=a(10),u=a(30),m=a.n(u),s=(a(53),a(4)),p=a(5),h=a(8),d=a(6),b=a(7),E=a(9),f=a(31),O=a.n(f),v="http://api.openweathermap.org/data/2.5/forecast?appid=".concat("4505fab19b748345a39d745d61d5c8a6"),j="FETCH_WEATHER";function y(e){var t="".concat(v,"&q=").concat(e,",tr"),a=O.a.get(t);return{type:j,payload:a}}var g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={term:""},a.onInputChange=a.onInputChange.bind(Object(E.a)(Object(E.a)(a))),a.onFormSubmit=a.onFormSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"input-group",onSubmit:this.onFormSubmit},r.a.createElement("input",{placeholder:"Get a five data forecast in your favorite cities",className:"form-control",value:this.state.term,onChange:this.onInputChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit")))}},{key:"onInputChange",value:function(e){this.setState({term:e.target.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.fetchWeather(this.state.term),this.setState({term:""})}}]),t}(n.Component);var w=Object(i.b)(null,function(e){return Object(o.b)({fetchWeather:y},e)})(g),k=a(17),S=a.n(k),_=a(12);var N=function(e){return r.a.createElement("div",null,r.a.createElement(_.Sparklines,{height:120,width:180,data:e.data},r.a.createElement(_.SparklinesLine,{color:e.color}),r.a.createElement(_.SparklinesReferenceLine,{type:"avg"})),r.a.createElement("div",null,(t=e.data,S.a.round(S.a.sum(t)/t.length))," ",e.units));var t},C=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){new window.google.maps.Map(this.refs.map,{zoom:12,center:{lat:this.props.lat,lng:this.props.lon}})}},{key:"render",value:function(){return r.a.createElement("div",{ref:"map"})}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"City"),r.a.createElement("th",null,"Temperature (K)"),r.a.createElement("th",null,"Pressure (hPa)"),r.a.createElement("th",null,"Humidity (%)"))),r.a.createElement("tbody",null,this.props.weather.map(this.renderWeather)))}},{key:"renderWeather",value:function(e){var t=e.city.name,a=e.list.map(function(e){return e.main.temp}),n=e.list.map(function(e){return e.main.pressure}),c=e.list.map(function(e){return e.main.humidity}),l=e.city.coord,o=l.lon,i=l.lat;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(C,{lon:o,lat:i})),r.a.createElement("td",null,r.a.createElement(N,{data:a,color:"orange",units:"K"})),r.a.createElement("td",null,r.a.createElement(N,{data:n,color:"green",units:"hPa"})),r.a.createElement("td",null,r.a.createElement(N,{data:c,color:"black",units:"%"})))}}]),t}(n.Component);var D=Object(i.b)(function(e){return{weather:e.weather}})(T),F=function(){return r.a.createElement("div",{className:"py-5 text-center"},r.a.createElement("img",{className:"d-block mx-auto mb-4",src:"https://media.dragstone.com/content/icon-openweathermap-1.png",height:"100"}),r.a.createElement("h2",null,"Weather Forecast"))},I=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(F,null),r.a.createElement(w,null),r.a.createElement(D,null))}}]),t}(n.Component),W=a(32),L=Object(o.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return[t.payload.data].concat(Object(W.a)(e))}return e}}),R=Object(o.a)(m.a)(o.d);l.a.render(r.a.createElement(i.a,{store:R(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(I,null)),document.querySelector("#root"))}},[[33,2,1]]]);
//# sourceMappingURL=main.cfe7ff4c.chunk.js.map