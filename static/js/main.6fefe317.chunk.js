(this.webpackJsonpaquarium=this.webpackJsonpaquarium||[]).push([[0],[,function(e,t,n){e.exports={Aquarium:"Aquarium_Aquarium__tQejz",Background:"Aquarium_Background__1tbqt",Land:"Aquarium_Land__QSN87",Rocks:"Aquarium_Rocks__sMIb_",Rock:"Aquarium_Rock__1-ltl",Standing:"Aquarium_Standing__1_yav",Standing2:"Aquarium_Standing2__OR3a9",Sunlight:"Aquarium_Sunlight__1rWP1",SeaKelp:"Aquarium_SeaKelp__1stG2",BlueShape:"Aquarium_BlueShape__1n1nb",BlueShape2:"Aquarium_BlueShape2__3k8HL",GreenShape:"Aquarium_GreenShape__1OwGD",GreenShape2:"Aquarium_GreenShape2__3xz5W",Rock2:"Aquarium_Rock2__1taqG",Rock3:"Aquarium_Rock3__2z6G7",PurpleShape:"Aquarium_PurpleShape__1PxV2",RedShape:"Aquarium_RedShape__2NwmC",Bubble:"Aquarium_Bubble__3PKjo",moveBubble:"Aquarium_moveBubble__32zRN"}},,,,,,,function(e,t,n){e.exports={Food:"Food_Food__3ZtMC",yellow:"Food_yellow__1UZ4Q",green:"Food_green__10WJz"}},function(e,t,n){e.exports=n.p+"static/media/rock2.0c047bfc.svg"},,,,function(e,t,n){e.exports={Fish:"Fish_Fish__1Z0ry"}},function(e,t,n){e.exports=n.p+"static/media/fish.a6ec6b72.svg"},function(e,t,n){e.exports=n.p+"static/media/yellow-food.0f938568.svg"},function(e,t,n){e.exports=n.p+"static/media/green-food.bf3ea358.svg"},function(e,t,n){e.exports={GithubIcon:"GithubIcon_GithubIcon__18cKc"}},function(e,t,n){e.exports=n.p+"static/media/land.5010d4f3.svg"},function(e,t,n){e.exports=n.p+"static/media/rocks.8fa88985.svg"},function(e,t,n){e.exports=n.p+"static/media/rock.771f0d0b.svg"},function(e,t,n){e.exports=n.p+"static/media/standing.7e075853.svg"},function(e,t,n){e.exports=n.p+"static/media/standing2.aa55cd6d.svg"},function(e,t,n){e.exports=n.p+"static/media/sunlight.5ec30dde.svg"},function(e,t,n){e.exports=n.p+"static/media/sea-kelp.38be889c.svg"},function(e,t,n){e.exports=n.p+"static/media/blue-shape.40d840ac.svg"},function(e,t,n){e.exports=n.p+"static/media/blue-shape2.15d7a192.svg"},function(e,t,n){e.exports=n.p+"static/media/green-shape.0baeed56.svg"},function(e,t,n){e.exports=n.p+"static/media/green-shape2.80a36b2c.svg"},function(e,t,n){e.exports=n.p+"static/media/purple-shape.afc4ef84.svg"},function(e,t,n){e.exports=n.p+"static/media/red-shape.8d493c82.svg"},function(e,t,n){e.exports=n.p+"static/media/bubble.69126146.svg"},,function(e,t,n){e.exports=n(42)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(12),r=n.n(o),s=(n(38),n(7)),c=n(2),u=n(3),l=n(5),m=n(4),d=n(6),f=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},h=function(e,t){return(180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI).toFixed(3)},p=function(e,t){return{x:Math.floor(Math.random()*(e.x-t.width)),y:Math.floor(Math.random()*(e.y-t.height))}},v=function(e,t){var n,a,i=function(e,t){var n=e.x-t.x,a=e.y-t.y,i=0!==n?a/n:0;return{m:i,b:e.y-i*e.x}}(e,t),o=i.m,r=i.b;return Math.abs(e.x-t.x)>Math.abs(e.y-t.y)?a=o*(n=e.x<t.x?e.x+1:e.x-1)+r:(a=e.y<t.y?e.y+1:e.y-1,n=0!==o?(a-r)/o:t.x),{x:n,y:a}},b=function(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y},g=function(){return Math.round(Math.random())},y=n(13),_=n.n(y),I=n(14),x=n.n(I);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={RIGHT:"right",LEFT:"left"},A=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).move=function(){clearInterval(n.movementInterval.interval);var e=p(n.state.maxPositionAquarium,n.state.sizeInfoFish);n.movementInterval.interval=setInterval((function(){var t=n.state.food.point||e,a=n.state.fishPosition,i=n.state,o=i.angle,r=i.direction,s=v(a,t);f(a,t)>n.maxDistanceToChangeDirectionAndAngle&&(r=a.x<s.x?q.RIGHT:q.LEFT,o=h(a,s)-180);var c={x:s.x,y:s.y};n.setState({fishPosition:c,direction:r,angle:o});var u=S({},c,{width:n.state.sizeInfoFish.width,height:n.state.sizeInfoFish.height}),l=S({},t,{width:1,height:1});b(u,l)&&(clearInterval(n.movementInterval.interval),n.state.food.point?n.eatFood():n.idle())}),n.state.speed)},n.idle=function(){n.idleTimeout.timeout=setTimeout(n.move,n.idleTimeout.timeInMilliseconds)},n.eatFood=function(){n.props.destroyFood(),n.setState({size:n.state.size+1})},n.getFishSizeInfo=function(e){if(n.state.sizeInfoFish.default){var t=e.getBoundingClientRect();t.default=!1,n.setState({sizeInfoFish:t})}};var a={x:e.sizeInfoAquarium.width-e.sizeInfoAquarium.borderRadius,y:e.sizeInfoAquarium.height-e.sizeInfoAquarium.borderRadius};return n.movementInterval={interval:null,defaultTimeInMilliseconds:15},n.state={size:1,fishPosition:p(a,{width:30,height:30}),direction:q.LEFT,angle:0,speed:n.movementInterval.defaultTimeInMilliseconds,maxPositionAquarium:a,sizeInfoFish:{width:60,height:50,default:!0},food:{point:null}},n.idleTimeout={timeout:null,timeInMilliseconds:1e3},n.maxDistanceToChangeDirectionAndAngle=10,n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){1===g()?this.idle():this.move()}},{key:"componentDidUpdate",value:function(e,t){var n=this;(e.food||t.food.point)&&this.setState((function(t){var a=S({},t),i=a.food;a.speed;return i.point=e.food,{food:i,speed:e.food?1:n.movementInterval.defaultTimeInMilliseconds}}),this.move)}},{key:"render",value:function(){var e=this.state,t=e.fishPosition,n=e.angle,a=e.size,o=e.direction;return i.a.createElement("img",{ref:this.getFishSizeInfo,src:x.a,alt:"",className:_.a.Fish,style:{top:t.y,left:t.x,transform:"\n                        rotate(".concat(n,"deg)\n                        scale(").concat(.9+.1*a,", ").concat(o===q.RIGHT?-1*(.9+.1*a):.9+.1*a,")\n                        ")}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.movementInterval.interval),clearTimeout(this.idleTimeout.timeout)}}]),t}(i.a.PureComponent),k=n(8),w=n.n(k),P=n(15),j=n.n(P),E=n(16),z={GREEN:{src:n.n(E).a,class:"green"},YELLOW:{src:j.a,class:"yellow"}},F=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).move=function(){if(n.state.maxY>n.state.yPosition){var e=n.state.yPosition+1;n.setState({yPosition:e}),n.props.update({y:e,x:n.props.xPosition})}else n.props.destroy()},n.state={yPosition:0,maxY:e.sizeInfoAquarium.height-e.sizeInfoAquarium.borderRadius,color:g()?z.GREEN:z.YELLOW},n.movementInterval={interval:null,timeInMilliseconds:e.init.slowDownTimeInMilliseconds},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.movementInterval.interval=setInterval(this.move,this.movementInterval.timeInMilliseconds)}},{key:"render",value:function(){var e=this.props.xPosition,t=this.state,n=t.yPosition,a=t.color;return i.a.createElement("img",{src:a.src,alt:"",className:[w.a.Food,w.a[a.class]].join(" "),style:{left:e,top:n}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.movementInterval.interval)}}]),t}(i.a.PureComponent),M=n(17),R=n.n(M),B=function(e){return i.a.createElement("a",{target:"_blank",href:"https://github.com/alonlevim/aquarium",className:R.a.GithubIcon},e.children)},N=n(1),T=n.n(N),D=n(18),G=n.n(D),L=n(19),C=n.n(L),W=n(20),K=n.n(W),U=n(21),H=n.n(U),Y=n(22),J=n.n(Y),Q=n(23),Z=n.n(Q),V=n(24),X=n.n(V),$=n(25),ee=n.n($),te=n(26),ne=n.n(te),ae=n(27),ie=n.n(ae),oe=n(28),re=n.n(oe),se=n(29),ce=n.n(se),ue=n(30),le=n.n(ue),me=n(31),de=n.n(me),fe=n(9),he=n.n(fe),pe=n(32);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){if(!n.state.food.instance){var t=be({},n.state.food);t.instance=i.a.createElement(F,{xPosition:e.pageX-n.state.sizeInfoAquarium.x,destroy:n.destroyFood,sizeInfoAquarium:n.state.sizeInfoAquarium,init:n.state.food,update:n.updateFood}),n.setState({food:t})}},n.destroyFood=function(){var e=be({},n.state.food);e.instance=n.foodPoint=null,n.setState({food:e})},n.addBubbleToScreen=function(){n.addBubbleInterval.interval=setInterval((function(){n.setState((function(e){var t=be({},e.bubbles);t.current>=t.list.length&&(t.current=0);var a=Math.floor(Math.random()*window.innerWidth),o=(Math.random()+n.scaleBubble.min)*n.scaleBubble.max;return t.list[t.current+1<t.list.length?t.current+1:0]=null,t.list[t.current]=i.a.createElement("img",{key:t.current,src:de.a,alt:"",className:T.a.Bubble,style:{bottom:"50px",right:"".concat(a,"px"),transform:"scale(".concat(o,")")}}),t.current++,{bubbles:t}}))}),n.addBubbleInterval.timeInMilliseconds)},n.updateFood=function(e){n.foodPoint=e},n.getAquariumSizeInfo=function(e){n.setState((function(t){if(!t.sizeInfoAquarium){var a=e.getBoundingClientRect();return a.borderRadius=n.borderRadius,{sizeInfoAquarium:a}}}),n.initInstanceFish())},n.initInstanceFish=function(){n.setState((function(e){for(var t=be({},e.fish),a=0;a<t.count;a++)t.list.push((function(e,t){return i.a.createElement(A,{key:e,sizeInfoAquarium:t,food:n.foodPoint,destroyFood:n.destroyFood})}));return e}))},n.state={bubbles:{current:0,list:new Array(50)},fish:{count:5,list:[]},food:{instance:null,slowDownTimeInMilliseconds:25},sizeInfoAquarium:null},n.addBubbleInterval={interval:null,timeInMilliseconds:250},n.borderRadius=30,n.scaleBubble={min:.1,max:1.5},n.foodPoint=null,document.addEventListener("click",n.handleClick),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.addBubbleToScreen()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:T.a.Aquarium},i.a.createElement("div",{className:T.a.Background,ref:this.getAquariumSizeInfo},i.a.createElement(B,null),i.a.createElement("img",{src:H.a,alt:"",className:T.a.Standing}),i.a.createElement("img",{src:J.a,alt:"",className:T.a.Standing2}),i.a.createElement("img",{src:X.a,alt:"",className:T.a.SeaKelp}),i.a.createElement("img",{src:K.a,alt:"",className:T.a.Rock}),i.a.createElement("img",{src:C.a,alt:"",className:T.a.Rocks}),i.a.createElement("img",{src:ee.a,alt:"",className:T.a.BlueShape}),i.a.createElement("img",{src:ne.a,alt:"",className:T.a.BlueShape2}),i.a.createElement("img",{src:he.a,alt:"",className:T.a.Rock2}),i.a.createElement("img",{src:he.a,alt:"",className:T.a.Rock3}),i.a.createElement("img",{src:ie.a,alt:"",className:T.a.GreenShape}),i.a.createElement("img",{src:re.a,alt:"",className:T.a.GreenShape2}),i.a.createElement("img",{src:ce.a,alt:"",className:T.a.PurpleShape}),i.a.createElement("img",{src:le.a,alt:"",className:T.a.RedShape}),this.state.bubbles.list.map((function(e){return e})),this.state.food.instance,this.state.fish.list.map((function(t,n){return t(n,e.state.sizeInfoAquarium)})),i.a.createElement("img",{src:G.a,alt:"",className:T.a.Land}),i.a.createElement("img",{src:Z.a,alt:"",className:T.a.Sunlight})))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick),Object(pe.clearInterval)(this.addBubbleInterval.interval)}}]),t}(i.a.PureComponent);n(41);var ye=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[33,1,2]]]);
//# sourceMappingURL=main.6fefe317.chunk.js.map