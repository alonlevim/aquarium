(this.webpackJsonpaquarium=this.webpackJsonpaquarium||[]).push([[0],[,function(e,t,a){e.exports={Aquarium:"Aquarium_Aquarium__tQejz",Background:"Aquarium_Background__1tbqt",Land:"Aquarium_Land__QSN87",Rocks:"Aquarium_Rocks__sMIb_",Rock:"Aquarium_Rock__1-ltl",Standing:"Aquarium_Standing__1_yav",Standing2:"Aquarium_Standing2__OR3a9",Sunlight:"Aquarium_Sunlight__1rWP1",SeaKelp:"Aquarium_SeaKelp__1stG2",BlueShape:"Aquarium_BlueShape__1n1nb",BlueShape2:"Aquarium_BlueShape2__3k8HL",GreenShape:"Aquarium_GreenShape__1OwGD",GreenShape2:"Aquarium_GreenShape2__3xz5W",Rock2:"Aquarium_Rock2__1taqG",Rock3:"Aquarium_Rock3__2z6G7",PurpleShape:"Aquarium_PurpleShape__1PxV2",RedShape:"Aquarium_RedShape__2NwmC",Bubble:"Aquarium_Bubble__3PKjo",moveBubble:"Aquarium_moveBubble__32zRN"}},,,,,,,function(e,t,a){e.exports=a.p+"static/media/rock2.0c047bfc.svg"},,,,function(e,t,a){e.exports={Fish:"Fish_Fish__1Z0ry"}},function(e,t,a){e.exports=a.p+"static/media/fish.a6ec6b72.svg"},function(e,t,a){e.exports={Food:"Food_Food__3ZtMC"}},function(e,t,a){e.exports={GithubIcon:"GithubIcon_GithubIcon__18cKc"}},function(e,t,a){e.exports=a.p+"static/media/land.5010d4f3.svg"},function(e,t,a){e.exports=a.p+"static/media/rocks.8fa88985.svg"},function(e,t,a){e.exports=a.p+"static/media/rock.771f0d0b.svg"},function(e,t,a){e.exports=a.p+"static/media/standing.7e075853.svg"},function(e,t,a){e.exports=a.p+"static/media/standing2.aa55cd6d.svg"},function(e,t,a){e.exports=a.p+"static/media/sunlight.5ec30dde.svg"},function(e,t,a){e.exports=a.p+"static/media/sea-kelp.38be889c.svg"},function(e,t,a){e.exports=a.p+"static/media/blue-shape.40d840ac.svg"},function(e,t,a){e.exports=a.p+"static/media/blue-shape2.15d7a192.svg"},function(e,t,a){e.exports=a.p+"static/media/green-shape.0baeed56.svg"},function(e,t,a){e.exports=a.p+"static/media/green-shape2.80a36b2c.svg"},function(e,t,a){e.exports=a.p+"static/media/purple-shape.afc4ef84.svg"},function(e,t,a){e.exports=a.p+"static/media/red-shape.8d493c82.svg"},function(e,t,a){e.exports=a.p+"static/media/bubble.69126146.svg"},,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),s=a.n(r),o=(a(36),a(7)),c=a(2),u=a(3),l=a(5),m=a(4),h=a(6),d=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},f=function(e,t){return(180*Math.atan2(t.y-e.y,t.x-e.x)/Math.PI).toFixed(3)},p=function(e,t){return{x:Math.floor(Math.random()*(e.x-t.width)),y:Math.floor(Math.random()*(e.y-t.height))}},b=function(e,t){var a,n,i=function(e,t){var a=e.x-t.x,n=e.y-t.y,i=0!==a?n/a:0;return{m:i,b:e.y-i*e.x}}(e,t),r=i.m,s=i.b;return Math.abs(e.x-t.x)>Math.abs(e.y-t.y)?n=r*(a=e.x<t.x?e.x+1:e.x-1)+s:(n=e.y<t.y?e.y+1:e.y-1,a=0!==r?(n-s)/r:t.x),{x:a,y:n}},v=function(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y},g=a(12),y=a.n(g),I=a(13),_=a.n(I);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).move=function(){var e=p(a.state.maxPositionAquarium,a.state.sizeInfoFish);a.movementInterval.interval=setInterval((function(){var t=a.state.fishPosition,n=a.state,i=n.angle,r=n.direction,s=b(t,e);d(t,e)>a.maxDistanceToChangeDirectionAndAngle&&(r=t.x<s.x?"right":"left",i=f(t,s)-180);var o={x:s.x,y:s.y};a.setState({fishPosition:o,direction:r,angle:i});var c=q({},o,{width:a.state.sizeInfoFish.width,height:a.state.sizeInfoFish.height}),u=q({},e,{width:1,height:1});v(c,u)&&(clearInterval(a.movementInterval.interval),a.idle())}),a.movementInterval.timeInMilliseconds)},a.idle=function(){a.idleTimeout.timeout=setTimeout(a.move,a.idleTimeout.timeInMilliseconds)},a.getFishSizeInfo=function(e){if(a.state.sizeInfoFish.default){var t=e.getBoundingClientRect();t.default=!1,a.setState({sizeInfoFish:t})}};var n={x:e.sizeInfoAquarium.width-e.sizeInfoAquarium.borderRadius,y:e.sizeInfoAquarium.height-e.sizeInfoAquarium.borderRadius};return a.state={size:1,fishPosition:p(n,{width:30,height:30}),direction:"left",angle:0,maxPositionAquarium:n,sizeInfoFish:{width:60,height:50,default:!0}},a.movementInterval={interval:null,timeInMilliseconds:15},a.idleTimeout={timeout:null,timeInMilliseconds:1e3},a.maxDistanceToChangeDirectionAndAngle=10,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){1===Math.round(Math.random())?this.idle():this.move()}},{key:"render",value:function(){return i.a.createElement("img",{ref:this.getFishSizeInfo,src:_.a,alt:"",className:y.a.Fish,style:{top:this.state.fishPosition.y,left:this.state.fishPosition.x,transform:"rotate(".concat(this.state.angle,"deg) scaleY(").concat("right"===this.state.direction?-1:1,")")}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.movementInterval.interval),clearTimeout(this.idleTimeout.timeout)}}]),t}(i.a.PureComponent),O=a(14),S=a.n(O),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).move=function(){a.state.maxY>a.state.yPosition?a.setState({yPosition:a.state.yPosition+1}):a.props.destroy()},a.state={yPosition:0,maxY:window.innerHeight},a.movementInterval={interval:null,timeInMilliseconds:5},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.movementInterval.interval=setInterval(this.move,this.movementInterval.timeInMilliseconds)}},{key:"render",value:function(){return i.a.createElement("div",{className:S.a.Food,style:{left:this.props.xPosition,top:this.state.yPosition}},"Food")}},{key:"componentWillUnmount",value:function(){clearInterval(this.movementInterval.interval)}}]),t}(i.a.PureComponent),k=a(15),P=a.n(k),w=function(e){return i.a.createElement("a",{target:"_blank",href:"https://github.com/alonlevim/aquarium",className:P.a.GithubIcon},e.children)},z=a(1),E=a.n(z),M=a(16),B=a.n(M),N=a(17),R=a.n(N),F=a(18),D=a.n(F),G=a(19),C=a.n(G),T=a(20),W=a.n(T),L=a(21),K=a.n(L),U=a(22),Y=a.n(U),H=a(23),J=a.n(H),Q=a(24),Z=a.n(Q),V=a(25),X=a.n(V),$=a(26),ee=a.n($),te=a(27),ae=a.n(te),ne=a(28),ie=a.n(ne),re=a(29),se=a.n(re),oe=a(8),ce=a.n(oe),ue=a(30);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){a.state.foodInstance||a.setState({foodInstance:i.a.createElement(j,{xPosition:e.pageX-a.state.sizeInfoAquarium.x,destroy:a.destroyFood})})},a.destroyFood=function(){a.setState({foodInstance:null})},a.addBubbleToScreen=function(){a.addBubbleInterval.interval=setInterval((function(){a.setState((function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.bubbles);t.current>=t.list.length&&(t.current=0);var n=Math.floor(Math.random()*window.innerWidth),r=(Math.random()+a.scaleBubble.min)*a.scaleBubble.max;return t.list[t.current+1<t.list.length?t.current+1:0]=null,t.list[t.current]=i.a.createElement("img",{key:t.current,src:se.a,alt:"",className:E.a.Bubble,style:{bottom:"50px",right:"".concat(n,"px"),transform:"scale(".concat(r,")")}}),t.current++,{bubbles:t}}))}),a.addBubbleInterval.timeInMilliseconds)},a.getAquariumSizeInfo=function(e){if(null==a.state.sizeInfoAquarium){var t=e.getBoundingClientRect();t.borderRadius=a.borderRadius,a.setState({sizeInfoAquarium:t})}},a.state={foodInstance:null,bubbles:{current:0,list:new Array(50)},sizeInfoAquarium:null},a.addBubbleInterval={interval:null,timeInMilliseconds:250},a.borderRadius=30,a.scaleBubble={min:.1,max:1.5},document.addEventListener("click",a.handleClick),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.addBubbleToScreen()}},{key:"render",value:function(){return i.a.createElement("div",{className:E.a.Aquarium},i.a.createElement("div",{className:E.a.Background,ref:this.getAquariumSizeInfo},i.a.createElement(w,null),i.a.createElement("img",{src:C.a,alt:"",className:E.a.Standing}),i.a.createElement("img",{src:W.a,alt:"",className:E.a.Standing2}),i.a.createElement("img",{src:Y.a,alt:"",className:E.a.SeaKelp}),i.a.createElement("img",{src:D.a,alt:"",className:E.a.Rock}),i.a.createElement("img",{src:R.a,alt:"",className:E.a.Rocks}),i.a.createElement("img",{src:J.a,alt:"",className:E.a.BlueShape}),i.a.createElement("img",{src:Z.a,alt:"",className:E.a.BlueShape2}),i.a.createElement("img",{src:ce.a,alt:"",className:E.a.Rock2}),i.a.createElement("img",{src:ce.a,alt:"",className:E.a.Rock3}),i.a.createElement("img",{src:X.a,alt:"",className:E.a.GreenShape}),i.a.createElement("img",{src:ee.a,alt:"",className:E.a.GreenShape2}),i.a.createElement("img",{src:ae.a,alt:"",className:E.a.PurpleShape}),i.a.createElement("img",{src:ie.a,alt:"",className:E.a.RedShape}),this.state.bubbles.list.map((function(e){return e})),this.state.foodInstance,null!=this.state.sizeInfoAquarium?i.a.createElement(A,{sizeInfoAquarium:this.state.sizeInfoAquarium}):null,null!=this.state.sizeInfoAquarium?i.a.createElement(A,{sizeInfoAquarium:this.state.sizeInfoAquarium}):null,null!=this.state.sizeInfoAquarium?i.a.createElement(A,{sizeInfoAquarium:this.state.sizeInfoAquarium}):null,null!=this.state.sizeInfoAquarium?i.a.createElement(A,{sizeInfoAquarium:this.state.sizeInfoAquarium}):null,null!=this.state.sizeInfoAquarium?i.a.createElement(A,{sizeInfoAquarium:this.state.sizeInfoAquarium}):null,i.a.createElement("img",{src:B.a,alt:"",className:E.a.Land}),i.a.createElement("img",{src:K.a,alt:"",className:E.a.Sunlight})))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick),Object(ue.clearInterval)(this.addBubbleInterval.interval)}}]),t}(i.a.PureComponent);a(39);var he=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[31,1,2]]]);
//# sourceMappingURL=main.ac304df1.chunk.js.map