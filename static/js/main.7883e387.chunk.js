(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{15:function(A,e,t){},16:function(A,e,t){"use strict";t.r(e);var n=t(0),g=t(1),c=t.n(g),o=t(9),s=t.n(o),d=(t(15),t(6)),B=t(2),a=t(3),r=t(5),u=t(4),i=(t(8),function(A){Object(r.a)(t,A);var e=Object(u.a)(t);function t(){return Object(B.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{})}}]),t}(c.a.Component)),O=[{year:"2015",title:"Hong Kong Junior Maths Olympiad",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",count:"1"},{year:"2017",title:"Robofest GRAF World Championship",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",count:"2"},{year:"2018",title:"MIT Innovation Academy Summercamp",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",count:"3"},{year:"2019",title:"BSc Computer Science at King's College London",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",count:"4"},{year:"2020",title:"Hack Sheffield 6",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",count:"5"}],Q=function(A){Object(r.a)(t,A);var e=Object(u.a)(t);function t(){return Object(B.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"timelineItem",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"timelineLine",style:{opacity:this.props.opacity},children:"|"})," ",this.props.year]}),Object(n.jsx)("div",{className:"timelineTitleBox",children:Object(n.jsx)("p",{className:"timelineTitle",children:this.props.title})}),Object(n.jsx)("p",{className:"timelineText",children:this.props.text})]})}}]),t}(c.a.Component),C=function(A){Object(r.a)(t,A);var e=Object(u.a)(t);function t(){return Object(B.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"contactContainer",children:[Object(n.jsx)("p",{className:"timelineWord",children:"TIMELINE"}),Object(n.jsx)("div",{className:"timelineBar"}),Object(n.jsx)("div",{className:"timelineCol",children:O.map((function(A){return Object(n.jsx)(Q,{year:A.year,title:A.title,text:A.text,opacity:A.count/O.length})}))})]})}}]),t}(c.a.Component),b=function(A){Object(r.a)(t,A);var e=Object(u.a)(t);function t(){return Object(B.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"homeBackground-",children:Object(n.jsxs)("div",{className:"homeContainer",children:[Object(n.jsxs)("div",{className:"nameContainer",children:[Object(n.jsxs)("span",{className:"bigName",children:["LO",Object(n.jsx)("span",{className:"accent",children:" TIMOTHY "})]}),Object(n.jsx)("span",{className:"smolName",children:"CHUNG TIN"})]}),Object(n.jsxs)("div",{className:"subtextContainer",children:[Object(n.jsx)("span",{className:"subtext",children:"Current Student"}),Object(n.jsx)("span",{className:"subtext accent",children:"</>"}),Object(n.jsx)("span",{className:"subtext",children:"Rising Developer"})]})]})})}}]),t}(c.a.Component),j=function(A){Object(r.a)(t,A);var e=Object(u.a)(t);function t(){return Object(B.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{})}}]),t}(c.a.Component),D=function(A){Object(r.a)(t,A);var e=Object(u.a)(t);function t(){return Object(B.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{})}}]),t}(c.a.Component),v=function(A){Object(r.a)(t,A);var e=Object(u.a)(t);function t(){return Object(B.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{})}}]),t}(c.a.Component),f=t.p+"static/media/logo.922c3356.ico",H=t.p+"static/media/github.9677eb94.png",m=t.p+"static/media/instagram.7cb2163b.png",l=function(A){Object(r.a)(t,A);var e=Object(u.a)(t);function t(A){var n;return Object(B.a)(this,t),(n=e.call(this,A)).navBtn=function(A){return n.state.display===A?"navBtnSelected":"navBtn"},n.state={display:"home",extendFB:!1,extendIG:!1,extendGM:!1,extendLN:!1,extendGH:!1},n}return Object(a.a)(t,[{key:"render",value:function(){var A,e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"optionBar",children:[Object(n.jsxs)("div",{className:"optTopLeftSection",children:[Object(n.jsx)("img",{className:"icon",src:f,alt:""}),Object(n.jsx)("button",{className:this.navBtn("home"),onClick:function(){return e.setState({display:"home"})},children:"Home"})]}),Object(n.jsxs)("div",{className:"optTopRightSection",children:[Object(n.jsx)("button",{className:this.navBtn("about"),onClick:function(){return e.setState({display:"about"})},children:"About Me"}),Object(n.jsx)("button",{className:this.navBtn("skills"),onClick:function(){return e.setState({display:"skills"})},children:"Skills"}),Object(n.jsx)("button",{className:this.navBtn("achievements"),onClick:function(){return e.setState({display:"achievements"})},children:"Achievements"}),Object(n.jsx)("button",{className:this.navBtn("projects"),onClick:function(){return e.setState({display:"projects"})},children:"Projects"}),Object(n.jsx)("button",{className:this.navBtn("resume"),onClick:function(){return e.setState({display:"resume"})},children:"Resume"})]})]}),Object(n.jsx)("div",{className:"topBar"}),Object(n.jsxs)("div",{className:"content",children:["home"===this.state.display&&Object(n.jsx)(b,{}),"about"===this.state.display&&Object(n.jsx)(i,{}),"skills"===this.state.display&&Object(n.jsx)(v,{}),"achievements"===this.state.display&&Object(n.jsx)(C,{}),"projects"===this.state.display&&Object(n.jsx)(j,{}),"resume"===this.state.display&&Object(n.jsx)(D,{})]}),Object(n.jsxs)("div",{className:"optionBar",children:[Object(n.jsx)("div",{className:"optBottomLeftSection",style:(A={background:"rgb(55, 55, 55)"},Object(d.a)(A,"background","linear-gradient(90deg, rgba(55, 55, 55, 1) 0%, rgba(12,12,12,1) 100%)"),Object(d.a)(A,"height","5ch"),Object(d.a)(A,"marginRight","10ch"),A)}),Object(n.jsxs)("div",{className:"optBottomRightSection",children:[Object(n.jsx)("button",{className:"contactBtn",onMouseEnter:function(){return e.setState({extendFB:!0})},onMouseLeave:function(){return e.setState({extendFB:!1})},children:Object(n.jsxs)("div",{className:"contactBtnContent",children:[Object(n.jsx)("img",{className:"contactIcon",src:"data:image/png;base64,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",alt:""}),this.state.extendFB&&Object(n.jsx)("p",{className:"contactBtnText",children:"Facebook"})]})}),Object(n.jsx)("button",{className:"contactBtn",onMouseEnter:function(){return e.setState({extendIG:!0})},onMouseLeave:function(){return e.setState({extendIG:!1})},children:Object(n.jsxs)("div",{className:"contactBtnContent",children:[Object(n.jsx)("img",{className:"contactIcon",src:m,alt:""}),this.state.extendIG&&Object(n.jsx)("p",{className:"contactBtnText",children:"Instagram"})]})}),Object(n.jsx)("button",{className:"contactBtn",onMouseEnter:function(){return e.setState({extendGM:!0})},onMouseLeave:function(){return e.setState({extendGM:!1})},children:Object(n.jsxs)("div",{className:"contactBtnContent",children:[Object(n.jsx)("img",{className:"contactIcon",src:"data:image/png;base64,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",alt:""}),this.state.extendGM&&Object(n.jsx)("p",{className:"contactBtnText",children:"Gmail"})]})}),Object(n.jsx)("button",{className:"contactBtn",onMouseEnter:function(){return e.setState({extendLN:!0})},onMouseLeave:function(){return e.setState({extendLN:!1})},children:Object(n.jsxs)("div",{className:"contactBtnContent",children:[Object(n.jsx)("img",{className:"contactIcon",src:"data:image/png;base64,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",alt:""}),this.state.extendLN&&Object(n.jsx)("p",{className:"contactBtnText",children:"LinkedIn"})]})}),Object(n.jsx)("button",{className:"contactBtn",onMouseEnter:function(){return e.setState({extendGH:!0})},onMouseLeave:function(){return e.setState({extendGH:!1})},children:Object(n.jsxs)("div",{className:"contactBtnContent",children:[Object(n.jsx)("img",{className:"contactIcon",src:H,alt:""}),this.state.extendGH&&Object(n.jsx)("p",{className:"contactBtnText",children:"Github"})]})})]})]})]})}}]),t}(c.a.Component),x=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(e){var t=e.getCLS,n=e.getFID,g=e.getFCP,c=e.getLCP,o=e.getTTFB;t(A),n(A),g(A),c(A),o(A)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(l,{})}),document.getElementById("root")),x()},8:function(A,e,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.7883e387.chunk.js.map