import{S as Go,i as Oo,s as Uo,e as t,t as u,k as n,c as o,a as r,g as h,d as a,n as i,b as s,f as Jt,D as e,h as Re,P as Mo,j as Fo,m as Ro,K as Po,L as Bo,o as Vo,M as Yo,x as So,u as jo,N as zo,v as Lo,O as Zt,Q as qo,E as Ko,C as ct}from"../chunks/vendor-b6dcc517.js";function No(c,l,m){const f=c.slice();return f[12]=l[m],f[14]=m,f}function Ao(c){let l=Number.parseFloat(c[12].totalMinutes/60).toFixed(2)+"",m;return{c(){m=u(l)},l(f){m=h(f,l)},m(f,$){Jt(f,m,$)},p(f,$){$&4&&l!==(l=Number.parseFloat(f[12].totalMinutes/60).toFixed(2)+"")&&Re(m,l)},d(f){f&&a(m)}}}function Wo(c){let l,m,f=c[14]+1+"",$,O,B,M=c[12].timeFrom+"",A,te,V=c[12].timeUntil+"",T,D,F,W=c[12].project+"",U,q,E,S=c[12].notesCombined+"",p,d,R,H=Number.parseFloat(c[12].totalMinutes/60).toFixed(2)>0,_=H&&Ao(c);return{c(){l=t("tr"),m=t("th"),$=u(f),O=n(),B=t("td"),A=u(M),te=u(" - "),T=u(V),D=n(),F=t("td"),U=u(W),q=n(),E=t("td"),p=u(S),d=n(),R=t("td"),_&&_.c(),this.h()},l(k){l=o(k,"TR",{});var b=r(l);m=o(b,"TH",{scope:!0});var j=r(m);$=h(j,f),j.forEach(a),O=i(b),B=o(b,"TD",{class:!0});var g=r(B);A=h(g,M),te=h(g," - "),T=h(g,V),g.forEach(a),D=i(b),F=o(b,"TD",{});var K=r(F);U=h(K,W),K.forEach(a),q=i(b),E=o(b,"TD",{});var J=r(E);p=h(J,S),J.forEach(a),d=i(b),R=o(b,"TD",{});var Z=r(R);_&&_.l(Z),Z.forEach(a),b.forEach(a),this.h()},h(){s(m,"scope","row"),s(B,"class","text-black-50")},m(k,b){Jt(k,l,b),e(l,m),e(m,$),e(l,O),e(l,B),e(B,A),e(B,te),e(B,T),e(l,D),e(l,F),e(F,U),e(l,q),e(l,E),e(E,p),e(l,d),e(l,R),_&&_.m(R,null)},p(k,b){b&4&&M!==(M=k[12].timeFrom+"")&&Re(A,M),b&4&&V!==(V=k[12].timeUntil+"")&&Re(T,V),b&4&&W!==(W=k[12].project+"")&&Re(U,W),b&4&&S!==(S=k[12].notesCombined+"")&&Re(p,S),b&4&&(H=Number.parseFloat(k[12].totalMinutes/60).toFixed(2)>0),H?_?_.p(k,b):(_=Ao(k),_.c(),_.m(R,null)):_&&(_.d(1),_=null)},d(k){k&&a(l),_&&_.d()}}}function Jo(c){let l,m,f,$,O,B,M,A,te,V,T,D,F,W,U,q,E,S,p,d,R,H,_,k,b,j,g,K,J,Z,be,Q,x,C,I,oe,G,ht,ae,Pe,ft,mt,re,Be,L,pe,vt,bt,ue,pt,gt,ge,_t,Et,_e,Tt,kt,Ee,wt,yt,le,ze,N,Ve,Dt,qe,Ht,Ke,Ct,Je,It,Se,je,Le=Number.parseFloat(c[3]/60).toFixed(2)+"",Ze,$t,X,Ne,Mt,Ft,Ae,Rt,Pt,Te,Bt,ee,se,ne,We,Vt,St,xe,jt,Lt,ke,he,Nt,At,ie,ce,Ge,Wt,xt,Oe,fe,Gt,de,Ue,Ot,Ut,Ye,me,Yt,we,ye,De,zt,He,qt,Qt,Ce=c[2],P=[];for(let v=0;v<Ce.length;v+=1)P[v]=Wo(No(c,Ce,v));return fe=new Mo({props:{data:c[8],width:100,height:200,options:{maintainAspectRatio:!1}}}),me=new Mo({props:{data:c[9],width:100,height:200,options:{maintainAspectRatio:!1}}}),{c(){l=t("div"),m=t("div"),f=t("div"),$=t("h1"),O=u("tzettel \u{1F4DD}"),B=n(),M=t("div"),A=t("i"),te=u("Tiny helper for chaotic workdays, which merges tasks for clean reports."),V=n(),T=t("div"),D=t("div"),F=t("b"),W=u("Just paste your timesheet notes!"),U=t("br"),q=u(`You can take them beforehand in Notepad++,
			TextEdit, Sublime, handwritten, what ever you like. ;)`),E=t("br"),S=t("br"),p=n(),d=t("div"),R=t("b"),H=u("#ProTip 1: Hashtag grouping"),_=t("br"),k=u(`
			Use a hashtag at the beginning to group entries, e.g. tasks related to a project. These entries
			will be later combined into one entry.`),b=n(),j=t("div"),g=t("b"),K=u("#ProTip 2: General tasks "),J=t("br"),Z=u(`
			Entries without a hashtag in the beginning will be combined into the "General" entry.`),be=n(),Q=t("form"),x=t("div"),C=t("label"),I=u("Paste your notes:"),oe=n(),G=t("textarea"),ht=n(),ae=t("section"),Pe=t("h2"),ft=u("Your report"),mt=n(),re=t("table"),Be=t("thead"),L=t("tr"),pe=t("th"),vt=u("#"),bt=n(),ue=t("th"),pt=u("Fictional time"),gt=n(),ge=t("th"),_t=u("Project"),Et=n(),_e=t("th"),Tt=u("Tasks done \u2705"),kt=n(),Ee=t("th"),wt=u("Hours"),yt=n(),le=t("tbody");for(let v=0;v<P.length;v+=1)P[v].c();ze=n(),N=t("tr"),Ve=t("th"),Dt=n(),qe=t("td"),Ht=n(),Ke=t("td"),Ct=n(),Je=t("td"),It=n(),Se=t("td"),je=t("b"),Ze=u(Le),$t=n(),X=t("section"),Ne=t("h3"),Mt=u("Parsing summary (for verification)"),Ft=n(),Ae=t("p"),Rt=u("This is only for debugging, here is what the algorithm detected in your notes. If a line has no color, than it was not recognized:"),Pt=n(),Te=t("p"),Bt=n(),ee=t("section"),se=t("div"),ne=t("div"),We=t("h3"),Vt=u("Analytics"),St=n(),xe=t("p"),jt=u("Please be mindful to yourself, work metrics are not everything what life is about."),Lt=n(),ke=t("div"),he=t("p"),Nt=u("This is currently not implemented yet."),At=n(),ie=t("div"),ce=t("div"),Ge=t("h4"),Wt=u("Total hours: 7.75"),xt=n(),Oe=t("div"),Fo(fe.$$.fragment),Gt=n(),de=t("div"),Ue=t("h4"),Ot=u("Billable time ratio: 55%"),Ut=n(),Ye=t("div"),Fo(me.$$.fragment),Yt=n(),we=t("div"),ye=t("div"),De=t("blockquote"),zt=u(`"You can't do a good job if your job is all you do." \u2014 Katie Thurmes`),this.h()},l(v){l=o(v,"DIV",{class:!0});var w=r(l);m=o(w,"DIV",{class:!0});var y=r(m);f=o(y,"DIV",{class:!0});var ve=r(f);$=o(ve,"H1",{class:!0});var Xt=r($);O=h(Xt,"tzettel \u{1F4DD}"),Xt.forEach(a),B=i(ve),M=o(ve,"DIV",{class:!0});var eo=r(M);A=o(eo,"I",{});var to=r(A);te=h(to,"Tiny helper for chaotic workdays, which merges tasks for clean reports."),to.forEach(a),eo.forEach(a),ve.forEach(a),y.forEach(a),V=i(w),T=o(w,"DIV",{class:!0});var Ie=r(T);D=o(Ie,"DIV",{class:!0});var $e=r(D);F=o($e,"B",{});var oo=r(F);W=h(oo,"Just paste your timesheet notes!"),oo.forEach(a),U=o($e,"BR",{}),q=h($e,`You can take them beforehand in Notepad++,
			TextEdit, Sublime, handwritten, what ever you like. ;)`),E=o($e,"BR",{}),S=o($e,"BR",{}),$e.forEach(a),p=i(Ie),d=o(Ie,"DIV",{class:!0});var Qe=r(d);R=o(Qe,"B",{});var ao=r(R);H=h(ao,"#ProTip 1: Hashtag grouping"),ao.forEach(a),_=o(Qe,"BR",{}),k=h(Qe,`
			Use a hashtag at the beginning to group entries, e.g. tasks related to a project. These entries
			will be later combined into one entry.`),Qe.forEach(a),b=i(Ie),j=o(Ie,"DIV",{class:!0});var Xe=r(j);g=o(Xe,"B",{});var ro=r(g);K=h(ro,"#ProTip 2: General tasks "),ro.forEach(a),J=o(Xe,"BR",{}),Z=h(Xe,`
			Entries without a hashtag in the beginning will be combined into the "General" entry.`),Xe.forEach(a),Ie.forEach(a),be=i(w),Q=o(w,"FORM",{});var lo=r(Q);x=o(lo,"DIV",{class:!0});var et=r(x);C=o(et,"LABEL",{for:!0,class:!0});var so=r(C);I=h(so,"Paste your notes:"),so.forEach(a),oe=i(et),G=o(et,"TEXTAREA",{class:!0,id:!0,rows:!0,cols:!0}),r(G).forEach(a),et.forEach(a),lo.forEach(a),ht=i(w),ae=o(w,"SECTION",{class:!0});var tt=r(ae);Pe=o(tt,"H2",{});var no=r(Pe);ft=h(no,"Your report"),no.forEach(a),mt=i(tt),re=o(tt,"TABLE",{class:!0});var ot=r(re);Be=o(ot,"THEAD",{});var io=r(Be);L=o(io,"TR",{});var Y=r(L);pe=o(Y,"TH",{scope:!0});var co=r(pe);vt=h(co,"#"),co.forEach(a),bt=i(Y),ue=o(Y,"TH",{scope:!0,class:!0});var uo=r(ue);pt=h(uo,"Fictional time"),uo.forEach(a),gt=i(Y),ge=o(Y,"TH",{scope:!0});var ho=r(ge);_t=h(ho,"Project"),ho.forEach(a),Et=i(Y),_e=o(Y,"TH",{scope:!0});var fo=r(_e);Tt=h(fo,"Tasks done \u2705"),fo.forEach(a),kt=i(Y),Ee=o(Y,"TH",{scope:!0});var mo=r(Ee);wt=h(mo,"Hours"),mo.forEach(a),Y.forEach(a),io.forEach(a),yt=i(ot),le=o(ot,"TBODY",{});var at=r(le);for(let Kt=0;Kt<P.length;Kt+=1)P[Kt].l(at);ze=i(at),N=o(at,"TR",{});var z=r(N);Ve=o(z,"TH",{scope:!0}),r(Ve).forEach(a),Dt=i(z),qe=o(z,"TD",{}),r(qe).forEach(a),Ht=i(z),Ke=o(z,"TD",{}),r(Ke).forEach(a),Ct=i(z),Je=o(z,"TD",{}),r(Je).forEach(a),It=i(z),Se=o(z,"TD",{});var vo=r(Se);je=o(vo,"B",{});var bo=r(je);Ze=h(bo,Le),bo.forEach(a),vo.forEach(a),z.forEach(a),at.forEach(a),ot.forEach(a),tt.forEach(a),$t=i(w),X=o(w,"SECTION",{});var Me=r(X);Ne=o(Me,"H3",{});var po=r(Ne);Mt=h(po,"Parsing summary (for verification)"),po.forEach(a),Ft=i(Me),Ae=o(Me,"P",{});var go=r(Ae);Rt=h(go,"This is only for debugging, here is what the algorithm detected in your notes. If a line has no color, than it was not recognized:"),go.forEach(a),Pt=i(Me),Te=o(Me,"P",{});var xo=r(Te);xo.forEach(a),Me.forEach(a),Bt=i(w),ee=o(w,"SECTION",{});var Fe=r(ee);se=o(Fe,"DIV",{class:!0});var rt=r(se);ne=o(rt,"DIV",{class:!0});var lt=r(ne);We=o(lt,"H3",{});var _o=r(We);Vt=h(_o,"Analytics"),_o.forEach(a),St=i(lt),xe=o(lt,"P",{});var Eo=r(xe);jt=h(Eo,"Please be mindful to yourself, work metrics are not everything what life is about."),Eo.forEach(a),lt.forEach(a),Lt=i(rt),ke=o(rt,"DIV",{class:!0});var To=r(ke);he=o(To,"P",{style:!0});var ko=r(he);Nt=h(ko,"This is currently not implemented yet."),ko.forEach(a),To.forEach(a),rt.forEach(a),At=i(Fe),ie=o(Fe,"DIV",{class:!0});var st=r(ie);ce=o(st,"DIV",{class:!0});var nt=r(ce);Ge=o(nt,"H4",{});var wo=r(Ge);Wt=h(wo,"Total hours: 7.75"),wo.forEach(a),xt=i(nt),Oe=o(nt,"DIV",{});var yo=r(Oe);Ro(fe.$$.fragment,yo),yo.forEach(a),nt.forEach(a),Gt=i(st),de=o(st,"DIV",{class:!0});var it=r(de);Ue=o(it,"H4",{});var Do=r(Ue);Ot=h(Do,"Billable time ratio: 55%"),Do.forEach(a),Ut=i(it),Ye=o(it,"DIV",{});var Ho=r(Ye);Ro(me.$$.fragment,Ho),Ho.forEach(a),it.forEach(a),st.forEach(a),Yt=i(Fe),we=o(Fe,"DIV",{class:!0});var Co=r(we);ye=o(Co,"DIV",{class:!0});var Io=r(ye);De=o(Io,"BLOCKQUOTE",{class:!0});var $o=r(De);zt=h($o,`"You can't do a good job if your job is all you do." \u2014 Katie Thurmes`),$o.forEach(a),Io.forEach(a),Co.forEach(a),Fe.forEach(a),w.forEach(a),this.h()},h(){s($,"class","py-2"),s(M,"class","sub-title"),s(f,"class","col-12"),s(m,"class","row"),s(D,"class","col-md-4"),s(d,"class","col-md-4"),s(j,"class","col-md-4"),s(T,"class","row py-4"),s(C,"for","timesheetNotes"),s(C,"class","form-label"),s(G,"class","form-control"),s(G,"id","timesheetNotes"),s(G,"rows","6"),s(G,"cols","75"),s(x,"class","mb-3"),s(pe,"scope","col"),s(ue,"scope","col"),s(ue,"class","text-black-50"),s(ge,"scope","col"),s(_e,"scope","col"),s(Ee,"scope","col"),s(Ve,"scope","row"),s(re,"class","table"),s(ae,"class","py-4"),s(ne,"class","col-12"),Po(he,"background-color","yellow"),Po(he,"font-style","italic"),s(ke,"class","col-12 text-center"),s(se,"class","row"),s(ce,"class","col text-center"),s(de,"class","col text-center"),s(ie,"class","row"),s(De,"class","blockquote"),s(ye,"class","col text-center"),s(we,"class","row mt-5"),s(l,"class","container py-5")},m(v,w){Jt(v,l,w),e(l,m),e(m,f),e(f,$),e($,O),e(f,B),e(f,M),e(M,A),e(A,te),e(l,V),e(l,T),e(T,D),e(D,F),e(F,W),e(D,U),e(D,q),e(D,E),e(D,S),e(T,p),e(T,d),e(d,R),e(R,H),e(d,_),e(d,k),e(T,b),e(T,j),e(j,g),e(g,K),e(j,J),e(j,Z),e(l,be),e(l,Q),e(Q,x),e(x,C),e(C,I),e(x,oe),e(x,G),Bo(G,c[1]),e(l,ht),e(l,ae),e(ae,Pe),e(Pe,ft),e(ae,mt),e(ae,re),e(re,Be),e(Be,L),e(L,pe),e(pe,vt),e(L,bt),e(L,ue),e(ue,pt),e(L,gt),e(L,ge),e(ge,_t),e(L,Et),e(L,_e),e(_e,Tt),e(L,kt),e(L,Ee),e(Ee,wt),e(re,yt),e(re,le);for(let y=0;y<P.length;y+=1)P[y].m(le,null);e(le,ze),e(le,N),e(N,Ve),e(N,Dt),e(N,qe),e(N,Ht),e(N,Ke),e(N,Ct),e(N,Je),e(N,It),e(N,Se),e(Se,je),e(je,Ze),e(l,$t),e(l,X),e(X,Ne),e(Ne,Mt),e(X,Ft),e(X,Ae),e(Ae,Rt),e(X,Pt),e(X,Te),Te.innerHTML=c[4],e(l,Bt),e(l,ee),e(ee,se),e(se,ne),e(ne,We),e(We,Vt),e(ne,St),e(ne,xe),e(xe,jt),e(se,Lt),e(se,ke),e(ke,he),e(he,Nt),e(ee,At),e(ee,ie),e(ie,ce),e(ce,Ge),e(Ge,Wt),e(ce,xt),e(ce,Oe),Vo(fe,Oe,null),e(ie,Gt),e(ie,de),e(de,Ue),e(Ue,Ot),e(de,Ut),e(de,Ye),Vo(me,Ye,null),e(ee,Yt),e(ee,we),e(we,ye),e(ye,De),e(De,zt),He=!0,qt||(Qt=Yo(G,"input",c[10]),qt=!0)},p(v,[w]){if(w&2&&Bo(G,v[1]),w&4){Ce=v[2];let y;for(y=0;y<Ce.length;y+=1){const ve=No(v,Ce,y);P[y]?P[y].p(ve,w):(P[y]=Wo(ve),P[y].c(),P[y].m(le,ze))}for(;y<P.length;y+=1)P[y].d(1);P.length=Ce.length}(!He||w&8)&&Le!==(Le=Number.parseFloat(v[3]/60).toFixed(2)+"")&&Re(Ze,Le),(!He||w&16)&&(Te.innerHTML=v[4])},i(v){He||(So(fe.$$.fragment,v),So(me.$$.fragment,v),He=!0)},o(v){jo(fe.$$.fragment,v),jo(me.$$.fragment,v),He=!1},d(v){v&&a(l),zo(P,v),Lo(fe),Lo(me),qt=!1,Qt()}}}function dt(c){return(c.getMinutes()<10?"0":"")+c.getMinutes()}function ut(c){return(c.getHours()<10?"0":"")+c.getHours()}function Zo(c,l,m){let f,$,O,B,M=Ko,A=()=>(M(),M=qo(T,E=>m(4,B=E)),T);c.$$.on_destroy.push(()=>M());let V=ct(`9:15 - 9:45 Getting organized
9:45 - 10:00 Stand-Up Meeting
10:00 - 12:00 #ClientTessa Website prototyping start page
12:00 - 12:30 #ClientMark CSS Bugfix for category pages

13:30 - 14:15 #ClientTessa Website prototyping details page
14:15 - 17:10 #ClientMark Javascript fix for fixed header navigation
17:10 - 18:00 #ClientTessa Website deployment details page
`);Zt(c,V,E=>m(1,f=E));const T=ct("");A();let D=ct([]);Zt(c,D,E=>m(2,$=E));let F=ct(0);Zt(c,F,E=>m(3,O=E)),V.subscribe(E=>{console.log("Timesheet value changed",E);const S=/^([01]?\d|2[0-3]):([0-5]\d)\s?-\s?([01]?\d|2[0-3]):([0-5]\d)[^\S\n]?([#][+a-zA-Z0-9]*)?[^\S\n]?([^\n\r]*)?$/gm;var p=null;F.update(I=>0);let d={},R=E.replace(S,'<mark>$1</mark>:<mark>$2</mark>-<mark>$3</mark>:<mark>$4</mark> <mark class="hashtag" style="background-color:cyan;">$5</mark> <mark>$6</mark>');R=R.replace(/\n\r?/g,"<br>"),T.update(I=>R);let H;for(;(H=S.exec(E))!==null;){H.index===S.lastIndex&&S.lastIndex++,H.forEach((I,oe)=>{console.log(`Found match, group ${oe}: ${I}`)});var _=H[1],k=H[2],b=H[3],j=H[4],g=H[5],K=H[6];if(p==null){let I=new Date;p=new Date(I.getFullYear(),I.getMonth(),I.getDate(),_,k,0)}var J=new Date;J.setHours(_,k);var Z=new Date;Z.setHours(b,j);var be=(Z-J)/(1e3*60);console.log("calculated diff minutes",be,H),console.log("Hashtag",g),g==null&&(g="#General",console.log("set hashtag to default value",g)),""+g+""in d||(d[g]={minutesTotal:0,notesCombined:""}),console.log(d),d[g].minutesTotal=d[g].minutesTotal+be,K!=null&&(d[g].notesCombined!=""&&(d[g].notesCombined=d[g].notesCombined+", "),d[g].notesCombined=d[g].notesCombined+K)}let Q=[],x=!1;for(var C in d){console.log(C,d[C].minutesTotal,d[C].notesCombined);let I=p;console.log("current",p.getTime(),p.getHours(),p.getMinutes()),F.update(function(oe){return!x&&oe+d[C].minutesTotal>=6*60&&(p=new Date(p.getTime()+30*6e4),Q.push({timeFrom:ut(I)+":"+dt(I),timeUntil:ut(p)+":"+dt(p),project:"Break",notesCombined:"",totalMinutes:0}),x=!0,I=p),oe+d[C].minutesTotal}),console.log("add",d[C].minutesTotal*6e4),p=new Date(p.getTime()+d[C].minutesTotal*6e4),Q.push({timeFrom:ut(I)+":"+dt(I),timeUntil:ut(p)+":"+dt(p),project:C,notesCombined:d[C].notesCombined,totalMinutes:d[C].minutesTotal})}D.update(I=>Q)});const W={labels:["General","#ClientMark","#ClientTessa"],datasets:[{label:"% of Votes",data:[3.75,2,3],backgroundColor:["rgba(255, 134,159,0.4)","rgba(98,  182, 239,0.4)","rgba(255, 218, 128,0.4)","rgba(113, 205, 205,0.4)","rgba(170, 128, 252,0.4)","rgba(255, 177, 101,0.4)"],borderWidth:2,borderColor:["rgba(255, 134, 159, 1)","rgba(98,  182, 239, 1)","rgba(255, 218, 128, 1)","rgba(113, 205, 205, 1)","rgba(170, 128, 252, 1)","rgba(255, 177, 101, 1)"]}]},U={labels:["General time","Client / Project work time (Billable)"],datasets:[{label:"% of Votes",data:[3.75,4],backgroundColor:["rgba(255, 134,159,0.4)","rgba(98,  182, 239,0.4)","rgba(255, 218, 128,0.4)","rgba(113, 205, 205,0.4)","rgba(170, 128, 252,0.4)","rgba(255, 177, 101,0.4)"],borderWidth:2,borderColor:["rgba(255, 134, 159, 1)","rgba(98,  182, 239, 1)","rgba(255, 218, 128, 1)","rgba(113, 205, 205, 1)","rgba(170, 128, 252, 1)","rgba(255, 177, 101, 1)"]}]};function q(){f=this.value,V.set(f)}return[T,f,$,O,B,V,D,F,W,U,q]}class Xo extends Go{constructor(l){super();Oo(this,l,Zo,Jo,Uo,{parseResultHTML:0})}get parseResultHTML(){return this.$$.ctx[0]}}export{Xo as default};
