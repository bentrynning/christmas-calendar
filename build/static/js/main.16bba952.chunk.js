(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports={apiKey:"AIzaSyAbmTMUSpQKAg9O5wZbvuq2mtztvRJt5rc",authDomain:"christmas-calendar-62322.firebaseapp.com",databaseURL:"https://christmas-calendar-62322.firebaseio.com",projectId:"christmas-calendar-62322",storageBucket:"christmas-calendar-62322.appspot.com",messagingSenderId:"918986912216"}},16:function(e,t,a){e.exports=a(39)},21:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),s=(a(21),a(8)),i=a.n(s),l=a(13),d=a(7),u=a(14),m=a(1),h=a(2),f=a(4),p=a(3),v=a(5),b=a(9),g=a.n(b),w=(a(32),function(e){var t=e.number,a=e.name,n=e.onClick;return r.a.createElement("div",{className:"card ".concat(a?"card--open":""),onClick:function(){return!a&&n(t)}},"\u2202",r.a.createElement("div",{className:"card__face card__front"},r.a.createElement("span",{className:"snowflake"}),r.a.createElement("div",{className:"card__face card__inner"},t)),r.a.createElement("div",{className:"card__face card__back"},a))}),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],nameDateMap:{}},a.onMouseMove=function(e){var t=-(window.innerWidth/2-e.pageX)/20,n=(window.innerHeight/2-e.pageY)/10;a.setState({style:{transform:"rotateY(".concat(t,"deg) rotateX(").concat(n,"deg)"),"-webkit-transform":"rotateY(".concat(t,"deg) rotateX(").concat(n,"deg)"),"-moz-transform":"rotateY(".concat(t,"deg) rotateX(").concat(n,"deg)")}})},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.openDates,a=e.onClickHandler;return r.a.createElement("main",{className:"calendar"},this.state.dates.map(function(e,n){return r.a.createElement(w,{key:"date-".concat(n),number:e,name:t[e],onClick:a})}))}}]),t}(r.a.Component),j=0,k=[],O=window.innerWidth,M=window.innerHeight,x=function(e){j+=.01;for(var t=0;t<300;t++){var a=e[t];a.y+=Math.cos(j+a.d)+1+a.r/2,a.x+=2*Math.sin(j),(a.x>O+5||a.x<-5||a.y>M)&&(t%3>0?e[t]={x:Math.random()*O,y:-10,r:a.r,d:a.d}:Math.sin(j)>0?e[t]={x:-5,y:Math.random()*M,r:a.r,d:a.d}:e[t]={x:O+5,y:Math.random()*M,r:a.r,d:a.d})}},E=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(p.a)(t).call(this))).canvas=r.a.createRef(),e}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){for(var e=this.canvas.current.getContext("2d"),t=0;t<300;t++)k.push({x:Math.random()*O,y:Math.random()*M,r:4*Math.random()+1,d:300*Math.random()});setInterval(function(){return function(e,t){e.clearRect(0,0,O,M),e.fillStyle="rgba(255, 255, 255, 0.8)",e.beginPath();for(var a=0;a<300;a++){var n=t[a];e.moveTo(n.x,n.y),e.arc(n.x,n.y,n.r,0,2*Math.PI,!0)}e.fill(),x(t)}(e,k)},33)}},{key:"render",value:function(){return r.a.createElement("canvas",{className:"canvas",width:O,height:M,ref:this.canvas})}}]),t}(r.a.Component),D=(a(37),a(15));g.a.initializeApp(D);var _=g.a.firestore();_.settings({timestampsInSnapshots:!0});var S=_.doc("calendar/dates"),C=_.doc("calendar/users"),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={names:[],openDates:{}},a.openCurrentDate=function(e){if(e<(new Date).getDate()){var t=Math.floor(Math.random()*a.state.names.length),n=a.state.names[t];S.set(Object(u.a)({},a.state.openDates,Object(d.a)({},e,n))).then(function(){return console.log("Save dates complete")}).catch(function(e){return console.log("Save dates faild: ".concat(e))});var r=a.state.names.filter(function(e){return e!==n});a.setState({names:r})}},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:S.onSnapshot(function(e){e&&e.exists&&t.setState({openDates:e.data()})}),C.get().then(function(e){if(e&&e.exists){var a=Object.values(t.state.openDates).map(function(e){return e}),n=e.data().names.filter(function(e){return-1===a.indexOf(e)});t.setState({names:n})}});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.openDates;return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__content"},r.a.createElement("h1",null,"Serviceteam julekalender"))),r.a.createElement(E,null),r.a.createElement(y,{openDates:e,onClickHandler:this.openCurrentDate}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.16bba952.chunk.js.map