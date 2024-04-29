import{t as L,y as b,A as j,d as G,at as Bt,C as Vt,au as Wt,av as A,o as z,b as X,e as _t,f as bt,h as At,i as pt,ac as Ft,F as Gt,g as Tt,a8 as Pt,c as Xt,ar as Yt,aw as Zt,v as Qt,T as Jt,Q as ut,ax as te,J as ee,ay as se,n as ne,D as re}from"../modules/vue-BvTVgwbe.js";import{S as ie,a as Kt,W as ht,w as ct,x as ae,c as vt,T as oe,X as le,_ as et,Y as ue,Z as he,$ as ce,a0 as de,a1 as fe,a2 as pe,e as ve,a3 as dt,a4 as Et,a5 as ge,N as me}from"../index-Cb7Z1AMe.js";function ye(t){var e;return{info:L(((e=ie(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const ft={};function as(t){function e(s){return ft[s]??(ft[s]=ye(s))}return{info:b({get(){return e(j(t)).info.value},set(s){e(j(t)).info.value=s}}),update:async(s,n)=>{const i=e(n??j(t)),r=await i.update(s);return r&&(i.info.value=r),r}}}const _e=G({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=Kt(),i=L(null),r=Bt(i),o=L(null),a=b(()=>e.width?e.width:r.width.value),l=b(()=>e.width?e.width/ht.value:r.height.value);e.width&&Vt(()=>{i.value&&(i.value.style.width=`${a.value}px`,i.value.style.height=`${l.value}px`)});const p=b(()=>a.value/l.value),g=b(()=>e.scale&&!n.value?+e.scale:p.value<ht.value?a.value/ct.value:l.value*ht.value/ct.value),y=b(()=>({height:`${ae.value}px`,width:`${ct.value}px`,transform:`translate(-50%, -50%) scale(${g.value})`,"--slidev-slide-scale":g.value})),S=b(()=>({"select-none":!vt.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&Wt(b(()=>`
    :root {
      --slidev-slide-scale: ${g.value};
    }
  `)),A(oe,g),A(le,o),(f,d)=>(z(),X("div",{id:"slide-container",ref_key:"root",ref:i,class:pt(["slidev-slides-container",S.value])},[_t("div",{id:"slide-content",ref_key:"slideElement",ref:o,class:"slidev-slide-content",style:At(y.value)},[bt(f.$slots,"default")],4),bt(f.$slots,"controls")],2))}}),os=et(_e,[["__file","/home/runner/work/Workshop-Haskell/Workshop-Haskell/node_modules/@slidev/client/internals/SlideContainer.vue"]]),xe={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},we=_t("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),Se=_t("div",null,"Loading slide...",-1),be=G({__name:"SlideLoading",setup(t){const e=L(!1);return Ft(()=>{setTimeout(()=>{e.value=!0},200)}),(s,n)=>(z(),X("div",xe,[e.value?(z(),X(Gt,{key:0},[we,Se],64)):Tt("v-if",!0)]))}}),Pe=et(be,[["__file","/home/runner/work/Workshop-Haskell/Workshop-Haskell/node_modules/@slidev/client/internals/SlideLoading.vue"]]),Ee=G({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},active:{type:Boolean,default:!1},is:{type:Function,required:!0},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var r,o;return((o=(r=e.route.meta)==null?void 0:r.slide)==null?void 0:o.frontmatter.zoom)??1});A(ue,e.route),A(he,L(e.route.no)),A(ce,L(e.renderContext)),A(de,Pt(e,"active")),A(fe,Pt(e,"clicksContext")),A(pe,s);const n=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),i=Zt({loader:async()=>{const r=await e.is();return G({setup(o,{attrs:a}){return Ft(()=>{var l,p;(p=(l=e.clicksContext)==null?void 0:l.onMounted)==null||p.call(l)}),()=>Qt(r.default,a)}})},delay:300,loadingComponent:Pe});return(r,o)=>(z(),X("div",{class:pt(j(ve)(t.route))},[(z(),Xt(Yt(j(i)),{style:At(n.value),"data-slidev-no":e.route.no,class:pt({"disable-view-transition":!["slide","presenter"].includes(e.renderContext)})},null,8,["style","data-slidev-no","class"]))],2))}}),ls=et(Ee,[["__scopeId","data-v-026ee359"],["__file","/home/runner/work/Workshop-Haskell/Workshop-Haskell/node_modules/@slidev/client/internals/SlideWrapper.vue"]]);var Me=Object.defineProperty,Mt=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,kt=(t,e,s)=>e in t?Me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,gt=(t,e)=>{for(var s in e||(e={}))ke.call(e,s)&&kt(t,s,e[s]);if(Mt)for(var s of Mt(e))Le.call(e,s)&&kt(t,s,e[s]);return t},Ce=()=>({emit(t,...e){for(let s=0,n=this.events[t]||[],i=n.length;s<i;s++)n[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}});function Lt(t,e,s,n=i=>i){return t*n(.5-e*(.5-s))}function De(t){return[-t[0],-t[1]]}function k(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function Ne(t,e){return[t[0]/e,t[1]/e]}function B(t){return[t[1],-t[0]]}function Ct(t,e){return t[0]*e[0]+t[1]*e[1]}function Ie(t,e){return t[0]===e[0]&&t[1]===e[1]}function $e(t){return Math.hypot(t[0],t[1])}function Ae(t){return t[0]*t[0]+t[1]*t[1]}function Dt(t,e){return Ae(P(t,e))}function jt(t){return Ne(t,$e(t))}function Fe(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function V(t,e,s){let n=Math.sin(s),i=Math.cos(s),r=t[0]-e[0],o=t[1]-e[1],a=r*i-o*n,l=r*n+o*i;return[a+e[0],l+e[1]]}function mt(t,e,s){return k(t,M(P(e,t),s))}function Nt(t,e,s){return k(t,M(e,s))}var{min:R,PI:Te}=Math,It=.275,W=Te+1e-4;function Ke(t,e={}){let{size:s=16,smoothing:n=.5,thinning:i=.5,simulatePressure:r=!0,easing:o=h=>h,start:a={},end:l={},last:p=!1}=e,{cap:g=!0,easing:y=h=>h*(2-h)}=a,{cap:S=!0,easing:f=h=>--h*h*h+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,d):a.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,H=Math.pow(s*n,2),D=[],u=[],_=t.slice(0,10).reduce((h,w)=>{let v=w.pressure;if(r){let m=R(1,w.distance/s),at=R(1,1-m);v=R(1,h+(at-h)*(m*It))}return(h+v)/2},t[0].pressure),x=Lt(s,i,t[t.length-1].pressure,o),st,nt=t[0].vector,U=t[0].point,Y=U,F=U,T=Y,rt=!1;for(let h=0;h<t.length;h++){let{pressure:w}=t[h],{point:v,vector:m,distance:at,runningLength:q}=t[h];if(h<t.length-1&&d-q<3)continue;if(i){if(r){let $=R(1,at/s),lt=R(1,1-$);w=R(1,_+(lt-_)*($*It))}x=Lt(s,i,w,o)}else x=s/2;st===void 0&&(st=x);let Ot=q<c?y(q/c):1,Ut=d-q<E?f((d-q)/E):1;x=Math.max(.01,x*Math.min(Ot,Ut));let xt=(h<t.length-1?t[h+1]:t[h]).vector,ot=h<t.length-1?Ct(m,xt):1,qt=Ct(m,nt)<0&&!rt,wt=ot!==null&&ot<0;if(qt||wt){let $=M(B(nt),x);for(let lt=1/13,Q=0;Q<=1;Q+=lt)F=V(P(v,$),v,W*Q),D.push(F),T=V(k(v,$),v,W*-Q),u.push(T);U=F,Y=T,wt&&(rt=!0);continue}if(rt=!1,h===t.length-1){let $=M(B(m),x);D.push(P(v,$)),u.push(k(v,$));continue}let St=M(B(mt(xt,m,ot)),x);F=P(v,St),(h<=1||Dt(U,F)>H)&&(D.push(F),U=F),T=k(v,St),(h<=1||Dt(Y,T)>H)&&(u.push(T),Y=T),_=w,nt=m}let N=t[0].point.slice(0,2),I=t.length>1?t[t.length-1].point.slice(0,2):k(t[0].point,[1,1]),it=[],Z=[];if(t.length===1){if(!(c||E)||p){let h=Nt(N,jt(B(P(N,I))),-(st||x)),w=[];for(let v=1/13,m=v;m<=1;m+=v)w.push(V(h,N,W*2*m));return w}}else{if(!(c||E&&t.length===1))if(g)for(let w=1/13,v=w;v<=1;v+=w){let m=V(u[0],N,W*v);it.push(m)}else{let w=P(D[0],u[0]),v=M(w,.5),m=M(w,.51);it.push(P(N,v),P(N,m),k(N,m),k(N,v))}let h=B(De(t[t.length-1].vector));if(E||c&&t.length===1)Z.push(I);else if(S){let w=Nt(I,h,x);for(let v=1/29,m=v;m<1;m+=v)Z.push(V(w,I,W*3*m))}else Z.push(k(I,M(h,x)),k(I,M(h,x*.99)),P(I,M(h,x*.99)),P(I,M(h,x)))}return D.concat(Z,u.reverse(),it)}function je(t,e={}){var s;let{streamline:n=.5,size:i=16,last:r=!1}=e;if(t.length===0)return[];let o=.15+(1-n)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let d=1;d<5;d++)a.push(mt(a[0],f,d/4))}a.length===1&&(a=[...a,[...k(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,g=0,y=l[0],S=a.length-1;for(let f=1;f<a.length;f++){let d=r&&f===S?a[f].slice(0,2):mt(y.point,a[f],o);if(Ie(y.point,d))continue;let c=Fe(d,y.point);if(g+=c,f<S&&!p){if(g<i)continue;p=!0}y={point:d,pressure:a[f][2]>=0?a[f][2]:.5,vector:jt(P(y.point,d)),distance:c,runningLength:g},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function He(t,e={}){return Ke(je(t,e),e)}function J(t,e){return t-e}function Re(t){return t<0?-1:1}function tt(t){return[Math.abs(t),Re(t)]}function Ht(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var ze=2,C=ze,O=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const i=this.drauu.el,r=(e=this.drauu.options.coordinateScale)!=null?e:1,o=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-a.left+o.x)*r,y:(t.pageY-a.top+o.y)*r,pressure:t.pressure}}else{const a=this.drauu.svgPoint;a.x=t.clientX+o.x,a.y=t.clientY+o.y;const l=a.matrixTransform((n=i.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*r,y:l.y*r,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?gt(gt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),n.setAttribute("stroke",i.color),n.setAttribute("stroke-width",i.size.toString()),n.setAttribute("stroke-linecap","round"),i.dasharray&&n.setAttribute("stroke-dasharray",i.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(C))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Oe=class Rt extends O{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return Rt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=He(e,gt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const i=n.reduce((r,[o,a],l,p)=>{const[g,y]=p[(l+1)%p.length];return r.push(o,a,(o+g)/2,(a+y)/2),r},["M",...n[0],"Q"]);return i.push("Z"),i.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},Ue=class extends O{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=tt(t.x-this.start.x),[n,i]=tt(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[r,o]=[this.start.x,this.start.x+e*s].sort(J),[a,l]=[this.start.y,this.start.y+n*i].sort(J);this.attr("cx",(r+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-r)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function zt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(i),s.appendChild(n),s}var qe=class extends O{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Ht(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(zt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let r=n/i;r=Math.round(r),Math.abs(r)<=1?(e=this.start.x+i*r,s=this.start.y+i):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Be=class extends O{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=tt(t.x-this.start.x),[n,i]=tt(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[r,o]=[this.start.x,this.start.x+e*s].sort(J),[a,l]=[this.start.y,this.start.y+n*i].sort(J);this.attr("x",r),this.attr("y",a),this.attr("width",o-r),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ve(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function We(t,e,s){let n=e.x,i=e.y,r=s.x-n,o=s.y-i;if(r!==0||o!==0){const a=((t.x-n)*r+(t.y-i)*o)/(r*r+o*o);a>1?(n=s.x,i=s.y):a>0&&(n+=r*a,i+=o*a)}return r=t.x-n,o=t.y-i,r*r+o*o}function Ge(t,e){let s=t[0];const n=[s];let i;for(let r=1,o=t.length;r<o;r++)i=t[r],Ve(i,s)>e&&(n.push(i),s=i);return s!==i&&i&&n.push(i),n}function yt(t,e,s,n,i){let r=n,o=0;for(let a=e+1;a<s;a++){const l=We(t[a],t[e],t[s]);l>r&&(o=a,r=l)}r>n&&(o-e>1&&yt(t,e,o,n,i),i.push(t[o]),s-o>1&&yt(t,o,s,n,i))}function Xe(t,e){const s=t.length-1,n=[t[0]];return yt(t,0,s,e,n),n.push(t[s]),n}function $t(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:Ge(t,n),t=Xe(t,n),t}var Ye=class K extends O{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Ht();const s=zt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=$t(this.points,1,!0),this.count=0),this.attr("d",K.toSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",K.toSvgData($t(this.points,1,!0))),!e.getTotalLength()))}static line(e,s){const n=s.x-e.x,i=s.y-e.y;return{length:Math.sqrt(n**2+i**2),angle:Math.atan2(i,n)}}static controlPoint(e,s,n,i){const r=s||e,o=n||e,a=.2,l=K.line(r,o),p=l.angle+(i?Math.PI:0),g=l.length*a,y=e.x+Math.cos(p)*g,S=e.y+Math.sin(p)*g;return{x:y,y:S}}static bezierCommand(e,s,n){const i=K.controlPoint(n[s-1],n[s-2],e),r=K.controlPoint(e,n[s-1],n[s+1],!0);return`C ${i.x.toFixed(C)},${i.y.toFixed(C)} ${r.x.toFixed(C)},${r.y.toFixed(C)} ${e.x.toFixed(C)},${e.y.toFixed(C)}`}static toSvgData(e){return e.reduce((s,n,i,r)=>i===0?`M ${n.x.toFixed(C)},${n.y.toFixed(C)}`:`${s} ${K.bezierCommand(n,i,r)}`,"")}},Ze=class extends O{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const r=s[i];if(r.getTotalLength){const o=r.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=r.getPointAtLength(o*a/this.pathSubFactor),p=r.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:a,element:n||r})}}else r.children&&e(r.children,r)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,i=e.x1,r=e.x2,o=t.y1,a=t.y2,l=e.y1,p=e.y2,g=(s-n)*(l-p)-(o-a)*(i-r),y=(s*a-o*n)*(i-r)-(s-n)*(i*p-l*r),S=(s*a-o*n)*(l-p)-(o-a)*(i*p-l*r),f=(d,c,E)=>d>=c&&d<=E?!0:d>=E&&d<=c;if(g===0)return!1;{const d={x:y/g,y:S/g};return f(d.x,s,n)&&f(d.y,o,a)&&f(d.x,i,r)&&f(d.y,l,p)}}};function Qe(t){return{draw:new Ye(t),stylus:new Oe(t),line:new qe(t),rectangle:new Be(t),ellipse:new Ue(t),eraseLine:new Ze(t)}}var Je=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Ce(),this._originalPointerId=null,this._models=Qe(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",i,{passive:!1}),s.addEventListener("pointermove",r,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",i),s.removeEventListener("pointermove",r),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function ts(t){return new Je(t)}const es=Jt(()=>{const{currentSlideNo:t,isPresenter:e}=Kt(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=ut("slidev-drawing-enabled",!1),i=ut("slidev-drawing-pinned",!1),r=te(ut("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=L(!1),a=L(!1),l=L(!1),p=L(!1),g=L("stylus"),y=b(()=>vt.drawings.syncAll||e.value);let S=!1;const f=b({get(){return g.value},set(u){g.value=u,u==="arrow"?(c.mode="line",r.arrowEnd=!0):(c.mode=u,r.arrowEnd=!1)}}),d=ee({brush:r,acceptsInputTypes:b(()=>n.value&&(!vt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=se(ts(d));function E(){c.clear(),y.value&&Et(t.value,"")}function H(){var u;l.value=c.canRedo(),a.value=c.canUndo(),p.value=!!((u=c.el)!=null&&u.children.length)}function D(u){S=!0;const _=dt[u||t.value];_!=null?c.load(_):c.clear(),H(),S=!1}return c.on("changed",()=>{if(H(),!S){const u=c.dump(),_=t.value;(dt[_]||"")!==u&&y.value&&Et(_,c.dump())}}),ge(u=>{S=!0,u[t.value]!=null&&c.load(u[t.value]||""),S=!1,H()}),ne(()=>{re(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",u=>{if(!n.value||me.value)return;const _=!u.ctrlKey&&!u.altKey&&!u.shiftKey&&!u.metaKey;let x=!0;u.code==="KeyZ"&&(u.ctrlKey||u.metaKey)?u.shiftKey?c.redo():c.undo():u.code==="Escape"?n.value=!1:u.code==="KeyL"&&_?f.value="line":u.code==="KeyA"&&_?f.value="arrow":u.code==="KeyS"&&_?f.value="stylus":u.code==="KeyR"&&_?f.value="rectangle":u.code==="KeyE"&&_?f.value="ellipse":u.code==="KeyC"&&_?E():u.code.startsWith("Digit")&&_&&+u.code[5]<=s.length?r.color=s[+u.code[5]-1]:x=!1,x&&(u.preventDefault(),u.stopPropagation())},!1),{brush:r,brushColors:s,canClear:p,canRedo:l,canUndo:a,clear:E,drauu:c,drauuOptions:d,drawingEnabled:n,drawingMode:f,drawingPinned:i,drawingState:dt,isDrawing:o,loadCanvas:D}}),ss=["innerHTML"],ns=G({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){const{drawingState:e}=es();return(s,n)=>j(e)[s.page]?(z(),X("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:j(e)[s.page]},null,8,ss)):Tt("v-if",!0)}}),us=et(ns,[["__file","/home/runner/work/Workshop-Haskell/Workshop-Haskell/node_modules/@slidev/client/internals/DrawingPreview.vue"]]);export{us as D,ls as S,os as a,ye as b,es as c,as as u};
