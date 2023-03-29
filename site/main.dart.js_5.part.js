self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={a3Q:function a3Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},a3R:function a3R(){},a3S:function a3S(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},a3O:function a3O(){},a3P:function a3P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},pw:function pw(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.lx$=d
_.aL$=e
_.a0$=f
_.a=null},FU:function FU(d,e,f,g,h,i,j){var _=this
_.ly=d
_.bh=e
_.ba=f
_.ce=$
_.eN=!0
_.cm$=g
_.N$=h
_.bn$=i
_.id=null
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
ahY(d,e){var x=null,w=B.ar([null,0],y.f,y.e),v=d.length,u=!0
u=u?E.kJ:x
return new A.Dk(new A.a3P(e,0,0,1),new A.a3N(!0,!0,!0,d,w),x,D.aO,!1,x,x,u,!1,x,v,D.a4,E.ud,x,D.ag,x)},
Dk:function Dk(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.p3=d
_.p4=e
_.cx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.x=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.a=s},
a3N:function a3N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h},
GJ:function GJ(d,e,f){this.f=d
this.d=e
this.a=f}},D,B,C,J,E
A=a.updateHolder(c[7],A)
D=c[2]
B=c[0]
C=c[8]
J=c[1]
E=c[9]
A.a3Q.prototype={
Ks(d){var x=this.c
return d.qI(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+D.c.b7(B.a(["scrollOffset: "+B.h(x.a),"crossAxisOffset: "+B.h(x.b),"mainAxisExtent: "+B.h(x.c),"crossAxisExtent: "+B.h(x.d)],y.x),", ")+")"}}
A.a3R.prototype={}
A.a3S.prototype={
KA(d){var x=this.b
if(x>0)return Math.max(0,this.a*D.d.dW(d/x)-1)
return 0},
RW(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
tN(d){var x=this,w=x.a,v=D.f.dR(d,w)
return new A.a3Q(D.f.f2(d,w)*x.b,x.RW(v*x.c),x.d,x.e)},
GQ(d){var x=this.b
return x*(D.f.f2(d-1,this.a)+1)-(x-this.d)}}
A.a3O.prototype={}
A.a3P.prototype={
Ac(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.a3S(v,t+x.b,u+w,t,u,B.P4(d.x))}}
A.pw.prototype={
j(d){return"crossAxisOffset="+B.h(this.w)+"; "+this.NG(0)}}
A.FU.prototype={
eB(d){if(!(d.e instanceof A.pw))d.e=new A.pw(!1,null,null)},
sKP(d){var x,w=this
if(w.ly===d)return
if(B.y(d)===B.y(w.ly)){x=w.ly
x=x.a!==d.a||x.b!==d.b||x.c!==d.c||x.d!==d.d||!1}else x=!0
if(x)w.a9()
w.ly=d},
le(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bH(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.x.prototype.ga3.call(a4)),a7=a4.bh
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.ly.Ac(a6)
t=u.b
s=t>1e-10?u.a*D.d.f2(w,t):0
r=isFinite(v)?u.KA(v):a5
t=a4.N$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a4.bn$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=D.f.hd(s-t,0,a4.cm$)
a4.nr(o,r==null?0:D.f.hd(p-r,0,a4.cm$))}else a4.nr(0,0)
n=u.tN(s)
if(a4.N$==null)if(!a4.Gi(s,n.a)){m=u.GQ(a7.gqP())
a4.id=C.j3(a5,!1,a5,a5,m,0,0,m,a5)
a7.nH()
return}l=n.a
k=l+n.c
t=a4.N$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a5
for(;j>=s;--j){h=u.tN(j)
p=h.c
g=a4.a17(a6.qI(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.N$
p.toString
p.ht(n.Ks(a6))
i=a4.N$
p=i.e
p.toString
t.a(p)
p.a=l
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.n(a4).h("ak.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.tN(j)
e=h.c
d=a6.qI(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a0$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.a16(d,i)
if(g==null)break}else g.ht(d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
k=Math.max(k,a0+e);++j
i=g}t=a4.bn$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a7.HI(a6,s,t,l,k)
a2=a4.fH(a6,Math.min(x,l),k)
a3=a4.lc(a6,l,k)
a4.id=C.j3(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.nH()}}
A.Dk.prototype={
GE(d){return new A.GJ(this.p3,this.p4,null)}}
A.a3N.prototype={
Rt(d){var x,w,v,u=null,t=this.r
if(!t.a4(0,d)){x=t.i(0,u)
x.toString
for(w=this.f,v=x;v<w.length;){x=w[v].a
if(x!=null)t.m(0,x,v)
if(J.f(x,d)){t.m(0,u,v+1)
return v}++v}t.m(0,u,v)}else return t.i(0,d)
return u},
HS(d){return this.Rt(d instanceof C.qN?d.a:d)},
xi(d,e){var x,w,v,u,t=null
if(e<0||e>=this.f.length)return t
x=this.f[e]
w=x.a
v=w!=null?new C.qN(w):t
x=new B.fY(x,t)
u=C.afU(x,e)
x=u!=null?new C.tZ(u,x,t):x
return new B.iL(new C.nI(new C.qO(x,t),t),v)},
glp(){return this.f.length},
AE(d){return this.f!==d.f}}
A.GJ.prototype={
ap(d){var x=new A.FU(this.f,y.v.a(d),B.B(y.e,y.g),0,null,null,B.ao())
x.ar()
return x},
aD(d,e){e.sKP(this.f)},
xZ(d,e,f,g,h){var x
this.NH(d,e,f,g,h)
x=this.f.Ac(d).GQ(this.d.glp())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.E,[A.a3Q,A.a3R,A.a3O])
w(A.a3S,A.a3R)
w(A.a3P,A.a3O)
w(A.pw,C.dB)
w(A.FU,C.kw)
w(A.Dk,C.rE)
w(A.a3N,C.GH)
w(A.GJ,C.j4)})()
B.qS(b.typeUniverse,JSON.parse('{"pw":{"dB":[],"dI":["C"],"fO":[],"ca":[]},"FU":{"kw":[],"cb":[],"ak":["C","dB"],"x":[],"H":[],"af":[],"ak.1":"dB","ak.0":"C"},"Dk":{"au":[],"i":[]},"GJ":{"j4":[],"at":[],"i":[]}}'))
var y={x:B.W("v<l>"),g:B.W("C"),z:B.W("i0"),t:B.W("pw"),v:B.W("mN"),c:B.W("dB"),e:B.W("m"),f:B.W("dy?")}}
$__dart_deferred_initializers__["JFtgQuuPn6VjLs3/9IaJXV4nHM0="] = $__dart_deferred_initializers__.current
