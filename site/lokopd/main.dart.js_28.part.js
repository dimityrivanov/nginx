self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={iI:function iI(d,e,f){this.a=d
this.b=e
this.c=f},Ep:function Ep(){},
ayF(d){var x,w,v,u,t,s,r
if(d==null)return new A.bN(null,y.b)
x=y.P.a(B.aP.f0(0,d))
w=J.co(x)
v=y.N
u=A.B(v,y.a)
for(t=J.aF(w.gbS(x)),s=y.j;t.v();){r=t.gL(t)
u.m(0,r,A.kd(s.a(w.h(x,r)),!0,v))}return new A.bN(u,y.b)},
uV:function uV(d,e,f){this.a=d
this.b=e
this.c=f},
UV:function UV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UW:function UW(d){this.a=d},
a1Q(d,e,f){var x=null
return new A.nM(A.asd(x,x,new C.uV(d,x,x)),x,f,e,x)}},J,A,B
C=a.updateHolder(c[12],C)
J=c[1]
A=c[0]
B=c[2]
C.iI.prototype={
j(d,e){var x=this
if(e==null)return!1
if(J.S(e)!==A.E(x))return!1
return e instanceof C.iI&&e.a===x.a&&e.b===x.b&&e.c===x.c},
gA(d){return A.N(this.a,this.b,this.c,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(d){return"AssetBundleImageKey(bundle: "+this.a.k(0)+', name: "'+this.b+'", scale: '+A.h(this.c)+")"}}
C.Ep.prototype={
qP(d,e){return A.a3H(null,this.mJ(d,e,null),d.b,null,d.c)},
qO(d,e,f){return A.a3H(null,this.mJ(e,null,f),e.b,null,e.c)},
mJ(d,e,f){return this.a1S(d,e,f)},
a1S(d,e,f){var x=0,w=A.a4(y.p),v,u=2,t,s,r,q,p,o,n
var $async$mJ=A.a0(function(g,h){if(g===1){t=h
x=u}while(true)switch(x){case 0:x=e!=null?3:4
break
case 3:s=null
u=6
x=9
return A.aj(d.a.wg(d.b),$async$mJ)
case 9:s=h
u=2
x=8
break
case 6:u=5
o=t
if(A.al(o) instanceof A.ly){p=$.fQ.jE$
p===$&&A.b()
p.ns(d)
throw o}else throw o
x=8
break
case 5:x=2
break
case 8:if(s==null){p=$.fQ.jE$
p===$&&A.b()
p.ns(d)
throw A.c(A.a5("Unable to read data"))}v=e.$1(s)
x=1
break
case 4:r=null
u=11
x=14
return A.aj(d.a.eu(0,d.b),$async$mJ)
case 14:r=h
u=2
x=13
break
case 11:u=10
n=t
if(A.al(n) instanceof A.ly){p=$.fQ.jE$
p===$&&A.b()
p.ns(d)
throw n}else throw n
x=13
break
case 10:x=2
break
case 13:if(r==null){p=$.fQ.jE$
p===$&&A.b()
p.ns(d)
throw A.c(A.a5("Unable to read data"))}f.toString
v=f.$1(A.cN(r.buffer,0,null))
x=1
break
case 1:return A.a2(v,w)
case 2:return A.a1(t,w)}})
return A.a3($async$mJ,w)}}
C.uV.prototype={
gnL(){return this.a},
wr(d){var x,w={},v=d.a
if(v==null)v=$.n2()
w.a=w.b=null
v.acf("AssetManifest.json",C.aI6(),y.v).ba(new C.UV(w,this,d,v),y.H).i0(new C.UW(w))
x=w.a
if(x!=null)return x
x=new A.a7($.ae,y.E)
w.b=new A.aO(x,y.z)
return x},
Xg(d,e,f){var x,w,v,u=e.b
if(u==null||f==null||J.iE(f))return d
x=A.anU(y.i,y.N)
for(w=J.aF(f);w.v();){v=w.gL(w)
x.m(0,this.JM(v),v)}u.toString
return this.YO(x,u)},
YO(d,e){var x,w,v
if(d.oX(e)){x=d.h(0,e)
x.toString
return x}w=d.abZ(e)
v=d.aa6(e)
if(w==null)return d.h(0,v)
if(v==null)return d.h(0,w)
if(e<2||e>(w+v)/2)return d.h(0,v)
else return d.h(0,w)},
JM(d){var x,w,v,u
if(d===this.a)return 1
x=A.p7(d,0,null)
w=x.gkW().length>1?x.gkW()[x.gkW().length-2]:""
v=$.avD().vM(w)
if(v!=null&&v.b.length-1>0){u=v.b[1]
u.toString
return A.auQ(u)}return 1},
j(d,e){if(e==null)return!1
if(J.S(e)!==A.E(this))return!1
return e instanceof C.uV&&e.gnL()===this.gnL()&&!0},
gA(d){return A.N(this.gnL(),this.b,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
k(d){return"AssetImage(bundle: "+A.h(this.b)+', name: "'+this.gnL()+'")'}}
var z=a.updateTypes(["ac<af<k,C<k>>?>(k?)"])
C.UV.prototype={
$1(d){var x,w=this,v=w.b,u=v.gnL(),t=d==null?null:J.be(d,v.gnL())
t=v.Xg(u,w.c,t)
t.toString
x=new C.iI(w.d,t,v.JM(t))
v=w.a
u=v.b
if(u!=null)u.cs(0,x)
else v.a=new A.bN(x,y.f)},
$S:445}
C.UW.prototype={
$2(d,e){this.a.b.eK(d,e)},
$S:31};(function installTearOffs(){var x=a._static_1
x(C,"aI6","ayF",0)})();(function inheritance(){var x=a.inherit
x(C.iI,A.F)
x(C.Ep,A.eR)
x(C.uV,C.Ep)
x(C.UV,A.bt)
x(C.UW,A.h6)})()
A.f6(b.typeUniverse,JSON.parse('{"Ep":{"eR":["iI"]},"uV":{"eR":["iI"],"eR.T":"iI"}}'))
var y=(function rtii(){var x=A.a_
return{p:x("hU"),a:x("C<k>"),j:x("C<@>"),P:x("af<k,@>"),N:x("k"),f:x("bN<iI>"),b:x("bN<af<k,C<k>>?>"),z:x("aO<iI>"),E:x("a7<iI>"),i:x("L"),v:x("af<k,C<k>>?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"aJ3","avD",()=>A.cj("/?(\\d+(\\.\\d*)?)x$",!0))})()}
$__dart_deferred_initializers__["mliH5ynDTGS/ui9akpwi4iFB0Kk="] = $__dart_deferred_initializers__.current
