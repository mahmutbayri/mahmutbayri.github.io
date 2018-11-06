(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(75),c=n.n(r),s=n(6),i=n(15),l=n(78),p=n.n(l),u=n(127),m=n(130),d=n(129),h=n(128),b=n(82),f=n(46),E=n.n(f),y="fetch_posts",v="create_post",O="fetch_post",j="delete_post",g="http://reduxblog.herokuapp.com/api",k="?key=kal";var _=n(44),w=n.n(_),N=Object(s.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return w.a.omit(t,e.payload);case y:return w.a.mapKeys(e.payload.data,"id");case O:var n=e.payload.data,a=Object(b.a)({},t);return a[n.id]=n,a;default:return t}},form:h.a}),P=n(34),S=n(35),D=n(38),C=n(36),x=n(41),F=n(124),T=function(t){function e(){return Object(P.a)(this,e),Object(D.a)(this,Object(C.a)(e).apply(this,arguments))}return Object(x.a)(e,t),Object(S.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"text-xs-right"},o.a.createElement(F.a,{to:"/posts/new",className:"btn btn-primary"},"Add a post")),o.a.createElement("h3",null,"Posts"),o.a.createElement("ul",{className:"list-group"},this.renderPost()))}},{key:"renderPost",value:function(){return w.a.map(this.props.posts,function(t){return o.a.createElement("li",{className:"list-group-item",key:t.id},o.a.createElement(F.a,{to:"/posts/".concat(t.id)},t.title))})}}]),e}(a.Component);var X=Object(i.b)(function(t){return{posts:t.posts}},{fetchPosts:function(){var t=E.a.get("".concat(g,"/posts").concat(k));return{type:y,payload:t}}})(T),L=n(126),I=n(125),J=function(t){function e(){return Object(P.a)(this,e),Object(D.a)(this,Object(C.a)(e).apply(this,arguments))}return Object(x.a)(e,t),Object(S.a)(e,[{key:"renderField",value:function(t){var e=t.meta,n=e.touched,a=e.error,r="form-group ".concat(n&&a?"has-danger":"");return o.a.createElement("div",{className:r},o.a.createElement("label",null,t.label),o.a.createElement("input",Object.assign({className:"form-control",type:"text"},t.input)),n?a:"")}},{key:"onSubmit",value:function(t){var e=this;this.props.createPost(t,function(){e.props.history.push("/")})}},{key:"render",value:function(){var t=this.props.handleSubmit;return o.a.createElement("form",{onSubmit:t(this.onSubmit.bind(this))},o.a.createElement(L.a,{label:"Title",name:"title",component:this.renderField}),o.a.createElement(L.a,{label:"Categories",name:"categories",component:this.renderField}),o.a.createElement(L.a,{label:"Post content",name:"content",component:this.renderField}),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),o.a.createElement(F.a,{to:"/",className:"btn btn-danger"},"Cancel"))}}]),e}(a.Component);var M=Object(I.a)({validate:function(t){var e={};return t.title||(e.title="enter a title!"),t.categories||(e.categories="enter a categories!"),t.content||(e.content="enter some content please!"),e},form:"PostNewForm"})(Object(i.b)(null,{createPost:function(t,e){var n=E.a.post("".concat(g,"/posts").concat(k),t).then(function(){return e()});return{type:v,payload:n}}})(J)),R=function(t){function e(){return Object(P.a)(this,e),Object(D.a)(this,Object(C.a)(e).apply(this,arguments))}return Object(x.a)(e,t),Object(S.a)(e,[{key:"componentDidMount",value:function(){this.props.post||this.props.fetchPost(this.props.match.params.id)}},{key:"onDeleteClick",value:function(){var t=this,e=this.props.match.params.id;this.props.deletePost(e,function(){t.props.history.push("/")})}},{key:"render",value:function(){var t=this.props.post;return t?o.a.createElement("div",null,o.a.createElement(F.a,{to:"/"},"Back to index"),o.a.createElement("button",{className:"btn btn-danger pull-xs-right",onClick:this.onDeleteClick.bind(this)},"Delete Post"),o.a.createElement("h3",null,t.title),o.a.createElement("h6",null,t.categories),o.a.createElement("p",null,t.content)):o.a.createElement("div",null,"Loading")}}]),e}(a.Component),U=Object(i.b)(function(t,e){return{post:t.posts[e.match.params.id]}},{fetchPost:function(t){var e=E.a.get("".concat(g,"/posts/").concat(t).concat(k));return{type:O,payload:e}},deletePost:function(t,e){return E.a.delete("".concat(g,"/posts/").concat(t).concat(k)).then(function(){e()}),{type:j,payload:t}}})(R),V=Object(s.a)(p.a)(s.d);c.a.render(o.a.createElement(i.a,{store:V(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},o.a.createElement(u.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,{path:"/posts/new",component:M}),o.a.createElement(d.a,{path:"/posts/:id",component:U}),o.a.createElement(d.a,{path:"/",component:X})))),document.querySelector("#root"))},84:function(t,e,n){t.exports=n(123)}},[[84,2,1]]]);
//# sourceMappingURL=main.d6250fab.chunk.js.map