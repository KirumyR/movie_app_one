(this.webpackJsonpmovie_app_one=this.webpackJsonpmovie_app_one||[]).push([[0],{31:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(20),i=n.n(a),r=n(6),o=n(1),j=(n(31),n(2));function l(e){return console.log(e),Object(j.jsx)("div",{className:"about__container",children:Object(j.jsx)("span",{children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435: \u044f \u0441\u0434\u0435\u043b\u0430\u043b \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043b\u044e\u0431\u043b\u044e \u0444\u0438\u043b\u044c\u043c\u044b"})})}var m=n(11),u=n.n(m),d=n(21),b=n(22),v=n(23),h=n(26),x=n(25),O=n(24),p=n.n(O);n(52);var f=function(e){e.id;var t=e.year,n=e.title,c=e.summary,s=e.poster;return e.genres,Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{className:"movie_img",src:s,alt:n,title:n}),Object(j.jsxs)("div",{className:"movie_column",children:[Object(j.jsx)("h3",{className:"movie_title",children:n}),Object(j.jsx)("h5",{className:"movie_year",children:t}),Object(j.jsxs)("p",{className:"movie_summary",children:[c.slice(0,200),"..."]})]})]})},y=(n(53),function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).getMovies=Object(d.a)(u.a.mark((function t(){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?quality=3D");case 2:n=t.sent,c=n.data.data.movies,e.setState({movies:c,isLoading:!1}),console.log({movies:c});case 6:case"end":return t.stop()}}),t)}))),e.state={isLoading:!0,movies:[]},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader_text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})}):Object(j.jsx)("div",{className:"movies",children:n.map((function(e){return Object(j.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),n}(s.a.Component)),_=y;n(54),n(55);function g(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)(r.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(j.jsx)(r.b,{to:"/about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})}function N(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(g,{}),Object(j.jsx)(o.c,{children:Object(j.jsx)(o.a,{exact:!0,path:"/",render:function(){},element:Object(j.jsx)(_,{})})}),Object(j.jsx)(o.c,{children:Object(j.jsx)(o.a,{path:"/about",render:function(){},element:Object(j.jsx)(l,{})})})]})}i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.9284a989.chunk.js.map