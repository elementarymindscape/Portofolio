(this.webpackJsonppersonal_portfolio=this.webpackJsonppersonal_portfolio||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(6),a=c.n(i),o=(c(23),c(2)),r=(c(24),c(8)),l=c.n(r),j=c(9),m=c.n(j),d=c(0);var h=function(e){var t=e.active,c=e.setActive,s=e.theme,n=e.setTheme;return Object(d.jsxs)("div",{className:"Navbar",children:[Object(d.jsx)("div",{className:"Logo",children:Object(d.jsx)("a",{href:"https://elementarymindscape.github.io/Portfolio/",className:"text".concat(s),children:"Portofolio"})}),Object(d.jsxs)("div",{className:"sidebar "+(t&&"active"),onClick:function(){return c(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]}),Object(d.jsxs)("div",{className:"Navigations ",children:[Object(d.jsx)("a",{className:"text".concat(s),href:"#Home",children:"About"}),Object(d.jsx)("a",{className:"text".concat(s),href:"#Projects",children:"Projects"}),Object(d.jsx)("a",{className:"text".concat(s),href:"https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing",children:"Resume"}),Object(d.jsx)("a",{className:"text".concat(s),href:"#Contact",children:"Contact"})]}),Object(d.jsxs)("div",{className:"themebuttons",children:[Object(d.jsx)("button",{className:"thm1",onClick:function(){return n("theme1")}}),Object(d.jsx)("button",{className:"thm2",onClick:function(){return n("theme2")}}),Object(d.jsx)("button",{className:"thm3",onClick:function(){return n("theme3")}}),Object(d.jsx)("button",{className:"thm4",onClick:function(){return n("theme4")}}),Object(d.jsx)("button",{className:"thm5",onClick:function(){return n("theme5")}})]}),Object(d.jsxs)("div",{className:"Social-Media",children:[Object(d.jsx)(l.a,{className:"Icons text".concat(s),color:"inherit",onClick:function(){return window.open("https://www.linkedin.com/in/vivek-sharma-profile/")}}),Object(d.jsx)(m.a,{className:"Icons text".concat(s),color:"inherit",onClick:function(){return window.open("https://github.com/elementarymindscape")}})]})]})},u=(c(31),c(15)),b=c(16),x=c.n(b);var O=function(e){var t=e.theme,c=(e.setTheme,Object(s.useRef)());return Object(s.useEffect)((function(){Object(u.a)(c.current,{showCursor:!1,backDelay:1500,strings:["Vivek.","a Student.","a Developer."]})}),[]),Object(d.jsxs)("div",{className:"Home",id:"Home",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("h3",{children:"Hi,"}),Object(d.jsxs)("h1",{children:["I am ",Object(d.jsx)("span",{className:"text".concat(t),ref:c})]}),Object(d.jsx)("p",{children:"I am pursuing my B.Tech from Bhagwan Parshuram Institute of Technology in Computer Sciene. I am a Front-End Web Developer and working on my way to become a Full Stack Developer. I have a keen interest in coding and learning various new technologies to become better in the field of work I Love =) ."}),Object(d.jsxs)("button",{onClick:function(){return window.open("https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing")},children:[Object(d.jsx)(x.a,{}),"View Resume"]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("div",{className:"ImgContainer ".concat(t),children:Object(d.jsx)("img",{src:"assets/IntroPage.png",alt:"IntroPageImg"})})})]})},p=(c(32),[{id:1,title:"Full Stack Pizza Website",url:"https://github.com/elementarymindscape/dbms-project",img:"assets/pizza.jpg",alt:"pizza",Description:"A Full Stack Website made using React(Frontend) and NodeJS+Express+MySQL(Backend) with User Authentication using JWT, Online Ordering and Payment functionality and Redux for State Management. (Note: This Project is Work Under Progress, so View Live is not available.)"},{id:2,title:"Tic-Tac-Toe",url:"https://github.com/elementarymindscape/tic-tac-toe",img:"assets/tictactoe.jpg",alt:"tic-tac-toe",liveCode:"https://tic-tac-toe-new.vercel.app/",Description:"The Tic-Tac-Toe game recreated in ReactJS using React Hooks."},{id:3,title:"To-Do List",url:"https://github.com/elementarymindscape/todo-list",img:"assets/todo.jpg",alt:"todo",liveCode:"http://todolist-vivek.surge.sh/",Description:"A Simple To-Do List made using HTML, CSS, Bootstrap and Javascript."},{id:4,title:"Virtual Piano",url:"https://github.com/elementarymindscape/piano-js",img:"assets/piano.jpg",alt:"piano",liveCode:"http://virtual-piano.surge.sh/",Description:"A Virtual Piano made using HTML, CSS, Javascript with On-Keyboard Press Sound."},{id:5,title:"Portofolio Website",url:"https://github.com/elementarymindscape/Portfolio",img:"assets/portfolio.jpg",alt:"portfolio",liveCode:"https://elementarymindscape.github.io/Portfolio/",Description:"A Portfolio Website made to showcase my Projects and Works, made using ReactJS and MaterialUI Icons  "}]);var v=function(e){var t=e.theme,c=Object(s.useState)(0),n=Object(o.a)(c,2),i=n[0],a=n[1];function r(e){a("left"===e?i>0?i-1:4:i<p.length-1?i+1:0)}return Object(d.jsxs)("div",{className:"Projects",id:"Projects",children:[Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*i,"vw)")},children:p.map((function(e,c){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"leftContainer",children:Object(d.jsx)("div",{className:"ImgContainer",children:Object(d.jsx)("img",{src:e.img,alt:e.alt})})})}),Object(d.jsxs)("div",{className:"right ".concat(t),children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsx)("p",{children:e.Description}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){return window.open("".concat(e.url))},children:"Code"}),e.liveCode?Object(d.jsx)("button",{onClick:function(){return window.open("".concat(e.liveCode))},children:"View Live"}):""]})]})]})},c)}))}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"arrow_left",onClick:function(){return r("left")}}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"arrow_right",onClick:function(){return r()}})]})},f=(c(33),c(17));var g=function(e){var t=e.theme,c=Object(s.useState)(""),n=Object(o.a)(c,2),i=n[0],a=n[1],r=Object(s.useState)(""),l=Object(o.a)(r,2),j=l[0],m=l[1],h=Object(s.useState)(""),u=Object(o.a)(h,2),b=u[0],x=u[1],O=Object(s.useState)(""),p=Object(o.a)(O,2),v=p[0],g=p[1],N=Object(s.useState)(""),w=Object(o.a)(N,2),C=w[0],k=w[1],S=Object(s.useState)(""),y=Object(o.a)(S,2),T=y[0],I=y[1];return Object(d.jsxs)("div",{className:"Contact",id:"Contact",children:[Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"ImgContainer",children:Object(d.jsx)("img",{src:"assets/contact.jpg",alt:"contactme"})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("div",{className:"top",children:Object(d.jsxs)("h2",{className:"text".concat(t),children:["Interested to Work Together?",Object(d.jsx)("br",{}),"Let's Talk!"]})}),Object(d.jsx)("div",{className:"bottom",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e="",t="",c="";return i||(t="Name cannot be blank"),j.includes("@")||(e="Invalid Email"),b.length<20&&(c="Message should be atleast 20 characters"),!(e||t||c)||(I(c),g(t),k(e),console.log("ERROR",e),!1)}()&&f.a.sendForm("service_bjsuw5e","template_portfolio",e.target,"user_Id0iTiygREyJpdOpu5UO1").then((function(e){window.location.reload()}),(function(e){}))},children:[Object(d.jsx)("input",{type:"text",required:!0,placeholder:"Your Name",name:"name",value:i,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("div",{style:{fontSize:"14px",color:"red"},children:v}),Object(d.jsx)("input",{type:"text",required:!0,placeholder:"Email",name:"email",value:j,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("div",{style:{fontSize:"14px",color:"red"},children:C}),Object(d.jsx)("textarea",{required:!0,placeholder:"Message",name:"message",value:b,onChange:function(e){return x(e.target.value)}}),Object(d.jsx)("div",{style:{fontSize:"14px",color:"red"},children:T}),Object(d.jsx)("button",{className:t,type:"submit",value:"SUBMIT",children:"SUBMIT"})]})})]})]})}),Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("h2",{children:["Designed By ",Object(d.jsx)("span",{className:"text".concat(t),children:"Vivek."})]})})]})};c(34),c(35);var N=function(e){var t=e.active,c=e.setActive,s=e.theme,n=e.setTheme;function i(){c(!1)}return Object(d.jsxs)("div",{className:"Menu "+(t&&"active"),children:[Object(d.jsx)("div",{className:"Navigation",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:i,children:Object(d.jsx)("a",{className:"text".concat(s),href:"#Home",children:"About"})}),Object(d.jsx)("li",{onClick:i,children:Object(d.jsx)("a",{className:"text".concat(s),href:"#Projects",children:"Projects"})}),Object(d.jsx)("li",{onClick:i,children:Object(d.jsx)("a",{className:"text".concat(s),href:"https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing",children:"Resume"})}),Object(d.jsx)("li",{onClick:i,children:Object(d.jsx)("a",{className:"text".concat(s),href:"#Contact",children:"Contact"})})]})}),Object(d.jsxs)("div",{className:"themebuttons",children:[Object(d.jsx)("button",{className:"thm1",onClick:function(){return n("theme1")}}),Object(d.jsx)("button",{className:"thm2",onClick:function(){return n("theme2")}}),Object(d.jsx)("button",{className:"thm3",onClick:function(){return n("theme3")}}),Object(d.jsx)("button",{className:"thm4",onClick:function(){return n("theme4")}}),Object(d.jsx)("button",{className:"thm5",onClick:function(){return n("theme5")}})]}),Object(d.jsxs)("div",{className:"SocialMedia",children:[Object(d.jsx)(l.a,{className:"Icons text".concat(s),onClick:function(){window.open("https://www.linkedin.com/in/vivek-sharma-profile/")}}),Object(d.jsx)(m.a,{className:"Icons text".concat(s),onClick:function(){window.open("https://github.com/elementarymindscape")}})]})]})};var w=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)("theme1"),a=Object(o.a)(i,2),r=a[0],l=a[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{theme:r,setTheme:l,active:c,setActive:n}),Object(d.jsx)(N,{theme:r,setTheme:l,active:c,setActive:n}),Object(d.jsxs)("div",{className:"Sections",children:[Object(d.jsx)(O,{theme:r,setTheme:l}),Object(d.jsx)(v,{theme:r,setTheme:l}),Object(d.jsx)(g,{theme:r,setTheme:l})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.bfe9750f.chunk.js.map