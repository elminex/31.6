(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){e.exports=n(286)},122:function(e,t,n){},123:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},170:function(e,t){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},250:function(e,t,n){},253:function(e,t,n){},284:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(43),s=n.n(c),o=n(20),l=n(21),u=n(24),i=n(22),p=n(23),m=n(29),d=(n(122),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),f=n(15),h=(n(123),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(f.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))}))}),E=Object(m.f)(function(e){return r.a.createElement(h,e)}),b=(n(127),function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement(d,null),r.a.createElement(E,{links:[{path:"/",title:"Home"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"},{path:"/posts/new",title:"Add post"},{path:"/posts/random",title:"Load random post"}]}))}),v=(n(128),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),g=function(e){var t=e.children;return r.a.createElement(v,null,r.a.createElement(b,null),t)},O=(n(129),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),P=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Contact Page"),r.a.createElement("p",null,"Your Favourite Blooger Ltd.",r.a.createElement("br",null),"9432 Division Street",r.a.createElement("br",null),"Stone Mountain, GA 30083",r.a.createElement("br",null),r.a.createElement("br",null),"Mobile Number: 207-914-3411",r.a.createElement("br",null)))},j=n(8),y=n(13),k=n.n(y),_=n(34),N=n(54),w=n(18),q=n(31),x=n.n(q),R="https://kodilla-mern-app.herokuapp.com",S=function(e){return e.posts.singlePost},C=function(e){return e.posts.request},T=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},A=function(e){return"app/".concat("posts","/").concat(e)},D=A("START_REQUEST"),I=A("END_REQUEST"),M=A("LOAD_POSTS"),B=A("LOAD_POST"),L=A("ERROR_REQUEST"),U=A("RESET_REQUEST"),F=(A("EDIT_POST"),A("LOAD_POSTS_PAGE")),Q=function(){return{type:D}},W=function(){return{type:I}},X=function(e){return{payload:e,type:B}},G=function(e){return{error:e,type:L}},J=function(){return{type:U}},V=function(e){return{payload:e,type:F}},H={data:[],singlePost:{},amount:0,postsPerPage:10,presentPage:1,request:{pending:!1,error:null,success:null}};var Y=function(e){return function(){var t=Object(_.a)(k.a.mark(function t(n){var a;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q()),t.prev=1,t.next=4,x.a.get("".concat("/api","/posts/").concat(e));case 4:a=t.sent,n(X(a.data[0])),n(W()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(G(t.t0.message));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()},z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.count;return e=0===t?"No posts":t,r.a.createElement("div",null,"Posts count: ",e)}}]),t}(r.a.Component),K=Object(j.b)(function(e){return{count:(t=e,t.posts.data.length)};var t})(z),Z=(n(151),n(83),n(25)),$=(n(152),function(e){var t=e.children,n=Object(Z.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),ee=n(112),te=n.n(ee),ne=function(e){var t=e.children,n=Object(Z.a)(e,["children"]);return r.a.createElement("p",Object.assign({},n,{className:"html-box"}),te()(t))};var ae=function(e){var t=e.id,n=e.title,a=e.content,c=e.author;return r.a.createElement("article",{className:"post-summary"},r.a.createElement($,null,n),r.a.createElement("span",null,"Author: ",c),r.a.createElement(ne,null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250;if(t<1)return"error";if(e.length>t){var n=e.substr(0,e.lastIndexOf(" ",t))+" ...";return n}return e}(a)),r.a.createElement(f.b,{className:"button button--primary",variant:"primary",to:"/posts/".concat(t)},"Read more"),r.a.createElement(f.b,{className:"button button--primary",variant:"primary",to:"/posts/edit/".concat(t)},"Edit post"))},re=function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},t.map(function(e){return r.a.createElement(ae,Object.assign({key:e.id},e))})))},ce=n(53),se=(n(239),function(){return r.a.createElement(ce.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),oe=n(41),le=(n(240),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(Z.a)(e,["variant","children"]);return r.a.createElement(ce.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(oe.c,null);case"success":return r.a.createElement(oe.a,null);case"warning":case"error":return r.a.createElement(oe.b,null);default:return r.a.createElement(oe.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),ue=(n(241),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.state={presentPage:n.props.initialPage||1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.pages,a=t.show,c=this.state.presentPage,s=r.a.createElement("li",{className:"pagination__list__item",onClick:function(){return e.changePage(c-1)}},"<"),o=r.a.createElement("li",{className:"pagination__list__item",onClick:function(){return e.changePage(c+1)}},">");return a?r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},c>1?s:"",Object(N.a)(Array(n)).map(function(t,n){return r.a.createElement("li",{key:++n,onClick:function(){e.changePage(n)},className:"pagination__list__item".concat(n===c?" pagination__list__item--active":"")},n)}),c===n&&0!==n?"":o)):null}}]),t}(r.a.Component)),ie=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).loadPostsPage=function(e){var t=n.props;(0,t.loadPostsByPage)(e,t.postsPerPage)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadPostsByPage)(e.initialPage,e.postsPerPage)}},{key:"componentWillUnmount",value:function(){(0,this.props.resetRequest)()}},{key:"render",value:function(){var e,t=this.props,n=t.posts,a=t.request,c=t.pages,s=t.pagination,o=t.initialPage;switch(!0){case!a.pending&&a.success&&n.length>0:e=r.a.createElement(re,{posts:n});break;case!a.pending&&a.error:e=r.a.createElement(le,{variant:"error"},a.error);break;case!a.pending&&a.success&&0===n.length:e=r.a.createElement(le,{variant:"info"},"No posts");break;default:e=r.a.createElement(se,null)}return r.a.createElement("div",null,e,s?r.a.createElement(ue,{pages:c,onPageChange:this.loadPostsPage,show:a.success,initialPage:o}):"")}}]),t}(r.a.Component);ie.defaultProps={initialPage:1,postsPerPage:10,pagination:!0};var pe=ie,me=Object(j.b)(function(e){return{posts:(t=e,t.posts.data),request:C(e),pages:T(e)};var t},function(e){return{resetRequest:function(){return e(J())},loadPostsByPage:function(t,n){return e(function(e,t){return function(){var n=Object(_.a)(k.a.mark(function n(a){var r,c,s,o;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(Q()),n.prev=1,r=(e-1)*t,c=t,n.next=6,x.a.get("".concat("/api","/posts/range/").concat(r,"/").concat(c));case 6:s=n.sent,o={posts:s.data.posts,amount:s.data.amount,postsPerPage:t,presentPage:e},a(V(o)),a(W()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),a(G(n.t0.message));case 15:case"end":return n.stop()}},n,null,[[1,12]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))}}})(pe),de=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Blog"),r.a.createElement(K,null),r.a.createElement(me,{postsPerPage:3,pagination:!1}))},fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},he=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Posts List"),r.a.createElement(K,null),r.a.createElement(me,null))},Ee=n(52),be=n(39),ve=(n(242),function(e){var t=e.value,n=e.label,a=e.onChange,c=Object(Z.a)(e,["value","label","onChange"]);return r.a.createElement("label",{className:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},c,{value:t,onChange:a,className:"text-field__input"})))}),ge=(n(243),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)}),Oe=function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(Z.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)},Pe=n(113),je=n.n(Pe),ye=(n(248),n(249),n(250),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={post:{title:"",author:"",content:""}},n.handleChange=n.handleChange.bind(Object(be.a)(n)),n.handleEditor=n.handleEditor.bind(Object(be.a)(n)),n.addPost=n.addPost.bind(Object(be.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.editMode&&this.setState({post:{title:this.props.singlePost.title,author:this.props.singlePost.author,content:this.props.singlePost.content}})}},{key:"componentWillUnmount",value:function(){(0,this.props.resetRequest)()}},{key:"handleChange",value:function(e){var t=this.state.post;this.setState({post:Object(w.a)({},t,Object(Ee.a)({},e.target.name,e.target.value))})}},{key:"handleEditor",value:function(e){var t=this.state.post;this.setState({post:Object(w.a)({},t,{content:e})})}},{key:"addPost",value:function(e){var t=this.state.post,n=this.props,a=n.addPost,r=n.editPost,c=n.editMode,s=n.id;e.preventDefault(),c?r(t,s):a(t)}},{key:"render",value:function(){var e,t=this.state.post,n=this.props,a=n.request,c=n.editMode;switch(!0){case a.success:e=r.a.createElement(le,{variant:"success"},"Post has been added!");break;case a.error:e=r.a.createElement(le,{variant:"error"},a.error);break;case a.pending:e=r.a.createElement(se,null);break;default:e=r.a.createElement("form",{onSubmit:this.addPost},r.a.createElement(ve,{value:t.title,label:"Title",onChange:this.handleChange,name:"title"}),r.a.createElement(ve,{value:t.author,label:"Author",onChange:this.handleChange,name:"author"}),r.a.createElement(ge,null,"Post content"),r.a.createElement(je.a,{className:"content-editor",tag:"pre",text:t.content,onChange:this.handleEditor,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),c?r.a.createElement(Oe,{variant:"primary"},"Edit post"):r.a.createElement(Oe,{variant:"primary"},"Add Post"))}return e}}]),t}(r.a.Component)),ke=Object(j.b)(function(e){return{request:C(e)}},function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(_.a)(k.a.mark(function t(n){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q()),t.prev=1,t.next=4,x.a.post("".concat("/api","/posts"),e);case 4:n(W()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(G(t.t0.message));case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e(J())}}})(ye),_e=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Add Post"),r.a.createElement(ke,null))},Ne=function(e){var t,n=e.match,c=e.resetRequest,s=e.editPost,o=e.loadPost,l=e.request,u=e.singlePost;Object(a.useEffect)(function(){return o(n.params.id),function(){return c()}},[o,n,c]);switch(!0){case l.success:t=r.a.createElement(ye,{editMode:!0,request:{success:null,pending:null,error:null},editPost:s,singlePost:u,resetRequest:c,id:n.params.id});break;case l.error:t=r.a.createElement(le,{variant:"error"},l.error);break;default:t=r.a.createElement(se,null)}return r.a.createElement("div",null,r.a.createElement(O,null,"Edit Post"),t)},we=Object(m.f)(Object(j.b)(function(e){return{request:C(e),singlePost:S(e)}},function(e){return{loadPost:function(t){return e(Y(t))},editPost:function(t,n){return e(function(e,t){return function(){var n=Object(_.a)(k.a.mark(function n(a){var r;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(Q()),n.prev=1,n.next=4,x.a.post("".concat("/api","/posts/").concat(t),{post:e,id:t});case 4:return n.next=6,x.a.get("".concat("/api","/posts/").concat(t));case 6:r=n.sent,a(X(r.data[0])),a(W()),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),a(G(n.t0.message));case 14:case"end":return n.stop()}},n,null,[[1,11]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))},resetRequest:function(){return e(J())}}})(Ne)),qe=n(55),xe=n(114),Re=n(115),Se=(n(253),function(e){var t=e.post,n=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,t.title),r.a.createElement("span",null,"Author: ",t.author),r.a.createElement(ne,null,t.content),r.a.createElement(qe.FacebookProvider,{appId:"1211874079019883"},r.a.createElement(qe.ShareButton,{className:"fb-share-button",href:"".concat(R).concat(n.pathname)},r.a.createElement(xe.a,{icon:Re.a,className:"fb-icon"}),"Share on Facebook"),r.a.createElement(qe.Comments,{href:"".concat(R).concat(n.pathname)})))}),Ce=Object(m.f)(function(e){return r.a.createElement(Se,e)}),Te=function(e){var t,n=e.loadPost,c=e.match,s=e.singlePost,o=e.request,l=e.resetRequest;switch(Object(a.useEffect)(function(){return n(c.params.id),function(){return l()}},[n,c,l]),!0){case o.success&&!o.pending:t=r.a.createElement(Ce,{post:s});break;case!o.pending&&o.error:t=r.a.createElement(le,{variant:"error"},o.error);break;case!o.pending&&o.success&&!s:t=r.a.createElement(le,{variant:"error"},"Wygl\u0105da na to, \u017ce nic tu nie ma");break;default:t=r.a.createElement(se,null)}return r.a.createElement("div",null,t)},Ae=Object(m.f)(Object(j.b)(function(e){return{singlePost:S(e),request:C(e)}},function(e){return{loadPost:function(t){return e(Y(t))},resetRequest:function(){return e(J())}}})(Te)),De=function(e){var t,n=e.loadRandomPost,c=e.singlePost,s=e.request,o=e.resetRequest;switch(Object(a.useEffect)(function(){return n(),function(){return o()}},[n,o]),!0){case s.success&&!s.pending:t=r.a.createElement(Ce,{post:c});break;case!s.pending&&s.error:t=r.a.createElement(le,{variant:"error"},s.error);break;case!s.pending&&s.success&&!c:t=r.a.createElement(le,{variant:"error"},"Wygl\u0105da na to, \u017ce nic tu nie ma");break;default:t=r.a.createElement(se,null)}return r.a.createElement("div",null,t)},Ie=Object(j.b)(function(e){return{singlePost:S(e),request:C(e)}},function(e){return{loadRandomPost:function(){return e(function(){var e=Object(_.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q()),e.prev=1,e.next=4,x.a.get("".concat("/api","/posts/random"));case 4:n=e.sent,t(X(n.data)),t(W()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(G(e.t0.message));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())},resetRequest:function(){return e(J())}}})(De),Me=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={posts:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:de}),r.a.createElement(m.a,{path:"/contact",exact:!0,component:P}),r.a.createElement(m.a,{path:"/posts",exact:!0,component:he}),r.a.createElement(m.a,{path:"/posts/new",exact:!0,component:_e}),r.a.createElement(m.a,{path:"/posts/edit/:id",component:we}),r.a.createElement(m.a,{path:"/posts/random",component:Ie}),r.a.createElement(m.a,{path:"/posts/:id",component:Ae}),r.a.createElement(m.a,{component:fe})))}}]),t}(r.a.Component),Be=(n(284),n(285),n(33)),Le=n(116),Ue=Object(Be.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case M:return Object(w.a)({},e,{data:t.payload});case B:return Object(w.a)({},e,{singlePost:t.payload});case D:return Object(w.a)({},e,{request:{pending:!0,error:null,success:null}});case I:return Object(w.a)({},e,{request:{pending:!1,error:null,success:!0}});case L:return Object(w.a)({},e,{request:{pending:!1,error:t.error,success:!1}});case U:return Object(w.a)({},e,{request:{pending:!1,error:null,success:null}});case F:return Object(w.a)({},e,{amount:t.payload.amount,postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,data:Object(N.a)(t.payload.posts)});default:return e}}}),Fe=Object(Be.e)(Ue,Object(Be.d)(Object(Be.a)(Le.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(r.a.createElement(function(){return r.a.createElement(j.a,{store:Fe},r.a.createElement(f.a,null,r.a.createElement(Me,null)))},null),document.getElementById("root"))},83:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.549e33b1.chunk.js.map