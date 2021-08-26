(this.webpackJsonppersonal_portfolio=this.webpackJsonppersonal_portfolio||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(6),i=c.n(a),o=(c(23),c(2)),r=(c(24),c(8)),l=c.n(r),j=c(9),m=c.n(j),d=c(0);var u=function(e){var t=e.active,c=e.setActive,n=e.theme,s=e.setTheme;return Object(d.jsxs)("div",{className:"Navbar",children:[Object(d.jsx)("div",{className:"Logo",children:Object(d.jsx)("a",{href:"https://elementarymindscape.github.io/Portfolio/",className:"text".concat(n),children:"Portofolio"})}),Object(d.jsxs)("div",{className:"sidebar "+(t&&"active"),onClick:function(){return c(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]}),Object(d.jsxs)("div",{className:"Navigations ",children:[Object(d.jsx)("a",{className:"text".concat(n),href:"#Home",children:"About"}),Object(d.jsx)("a",{className:"text".concat(n),href:"#Projects",children:"Projects"}),Object(d.jsx)("a",{className:"text".concat(n),href:"https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing",children:"Resume"}),Object(d.jsx)("a",{className:"text".concat(n),href:"#Contact",children:"Contact"})]}),Object(d.jsxs)("div",{className:"themebuttons",children:[Object(d.jsx)("button",{className:"thm1",onClick:function(){return s("theme1")}}),Object(d.jsx)("button",{className:"thm2",onClick:function(){return s("theme2")}}),Object(d.jsx)("button",{className:"thm3",onClick:function(){return s("theme3")}}),Object(d.jsx)("button",{className:"thm4",onClick:function(){return s("theme4")}}),Object(d.jsx)("button",{className:"thm5",onClick:function(){return s("theme5")}})]}),Object(d.jsxs)("div",{className:"Social-Media",children:[Object(d.jsx)(l.a,{className:"Icons text".concat(n),color:"inherit",onClick:function(){return window.open("https://www.linkedin.com/in/vivek-sharma-profile/")}}),Object(d.jsx)(m.a,{className:"Icons text".concat(n),color:"inherit",onClick:function(){return window.open("https://github.com/elementarymindscape")}})]})]})},h=(c(31),c(15)),b=c(16),O=c.n(b);var x=function(e){var t=e.theme,c=(e.setTheme,Object(n.useRef)());return Object(n.useEffect)((function(){Object(h.a)(c.current,{showCursor:!1,backDelay:1500,strings:["Vivek.","a Student.","a Developer."]})}),[]),Object(d.jsxs)("div",{className:"Home",id:"Home",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("h3",{children:"Hi,"}),Object(d.jsxs)("h1",{children:["I am ",Object(d.jsx)("span",{className:"text".concat(t),ref:c})]}),Object(d.jsx)("p",{children:"I am pursuing my B.Tech from Bhagwan Parshuram Institute of Technology in Computer Sciene. I am a Front-End Web Developer and working on my way to become a Full Stack Developer. I have a keen interest in coding and learning various new technologies to become better in the field of work I Love =) ."}),Object(d.jsxs)("button",{onClick:function(){return window.open("https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing")},children:[Object(d.jsx)(O.a,{}),"View Resume"]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("div",{className:"ImgContainer ".concat(t),children:Object(d.jsx)("img",{src:"assets/IntroPage.png",alt:"IntroPageImg"})})})]})},p=(c(32),[{id:1,title:"Full Stack Pizza Website",url:"https://github.com/elementarymindscape/dbms-project",img:"assets/pizza.jpg",alt:"pizza",Description:"A Full Stack Website made using React(Frontend) and NodeJS+Express+MySQL(Backend) with User Authentication using JWT, Online Ordering and Payment functionality and Redux for State Management."},{id:2,title:"Tic-Tac-Toe",url:"https://github.com/elementarymindscape/tic-tac-toe",img:"assets/tictactoe.jpg",alt:"tic-tac-toe",Description:"The Tic-Tac-Toe game recreated in ReactJS using React Hooks."},{id:3,title:"To-Do List",url:"https://github.com/elementarymindscape/todo-list",img:"assets/todo.jpg",alt:"todo",Description:"A Simple To-Do List made using HTML, CSS, Bootstrap and Javascript."},{id:4,title:"Virtual Piano",url:"https://github.com/elementarymindscape/piano-js",img:"assets/piano.jpg",alt:"piano",Description:"A Virtual Piano made using HTML, CSS, Javascript with On-Keyboard Press Sound."},{id:5,title:"Portofolio Website",url:"https://github.com/elementarymindscape/Portfolio",img:"assets/portfolio.jpg",alt:"portfolio",Description:"A Portfolio Website made to showcase my Projects and Works, made using ReactJS and MaterialUI Icons  "}]);var f=function(e){var t=e.theme,c=Object(n.useState)(0),s=Object(o.a)(c,2),a=s[0],i=s[1];function r(e){i("left"===e?a>0?a-1:4:a<p.length-1?a+1:0)}return Object(d.jsxs)("div",{className:"Projects",id:"Projects",children:[Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*a,"vw)")},children:p.map((function(e,c){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"leftContainer",children:Object(d.jsx)("div",{className:"ImgContainer",children:Object(d.jsx)("img",{src:e.img,alt:e.alt})})})}),Object(d.jsxs)("div",{className:"right ".concat(t),children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsx)("p",{children:e.Description}),Object(d.jsx)("button",{onClick:function(){return window.open("".concat(e.url))},children:"Code"})]})]})},c)}))}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"arrow_left",onClick:function(){return r("left")}}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"arrow_right",onClick:function(){return r()}})]})},v=(c(33),c(17));var g=function(e){var t=e.theme,c=Object(n.useState)(""),s=Object(o.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),j=l[0],m=l[1],u=Object(n.useState)(""),h=Object(o.a)(u,2),b=h[0],O=h[1],x=Object(n.useState)(""),p=Object(o.a)(x,2),f=p[0],g=p[1],N=Object(n.useState)(""),w=Object(o.a)(N,2),C=w[0],k=w[1],S=Object(n.useState)(""),y=Object(o.a)(S,2),T=y[0],I=y[1];return Object(d.jsx)("div",{className:"Contact",id:"Contact",children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"ImgContainer",children:Object(d.jsx)("img",{src:"assets/contact.jpg",alt:"contactme"})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("div",{className:"top",children:Object(d.jsxs)("h2",{className:"text".concat(t),children:["Interested to Work Together?",Object(d.jsx)("br",{}),"Let's Talk!"]})}),Object(d.jsx)("div",{className:"bottom",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e="",t="",c="";return a||(t="Name cannot be blank"),j.includes("@")||(e="Invalid Email"),b.length<20&&(c="Message should be atleast 20 characters"),!(e||t||c)||(I(c),g(t),k(e),console.log("ERROR",e),!1)}()&&v.a.sendForm("service_bjsuw5e","template_portfolio",e.target,"user_Id0iTiygREyJpdOpu5UO1").then((function(e){window.location.reload()}),(function(e){}))},children:[Object(d.jsx)("input",{type:"text",required:!0,placeholder:"Your Name",name:"name",value:a,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("div",{style:{fontSize:"14px",color:"red"},children:f}),Object(d.jsx)("input",{type:"text",required:!0,placeholder:"Email",name:"email",value:j,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("div",{style:{fontSize:"14px",color:"red"},children:C}),Object(d.jsx)("textarea",{required:!0,placeholder:"Message",name:"message",value:b,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("div",{style:{fontSize:"14px",color:"red"},children:T}),Object(d.jsx)("button",{className:t,type:"submit",value:"SUBMIT",children:"SUBMIT"})]})})]})]})})})};c(34),c(35);var N=function(e){var t=e.active,c=e.setActive,n=e.theme,s=e.setTheme;function a(){c(!1)}return Object(d.jsxs)("div",{className:"Menu "+(t&&"active"),children:[Object(d.jsx)("div",{className:"Navigation",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:a,children:Object(d.jsx)("a",{className:"text".concat(n),href:"#Home",children:"About"})}),Object(d.jsx)("li",{onClick:a,children:Object(d.jsx)("a",{className:"text".concat(n),href:"#Projects",children:"Projects"})}),Object(d.jsx)("li",{onClick:a,children:Object(d.jsx)("a",{className:"text".concat(n),href:"https://drive.google.com/file/d/1iLrJEgjJN0blYwuZpLl9Ss3yxjIdiuXJ/view?usp=sharing",children:"Resume"})}),Object(d.jsx)("li",{onClick:a,children:Object(d.jsx)("a",{className:"text".concat(n),href:"#Contact",children:"Contact"})})]})}),Object(d.jsxs)("div",{className:"themebuttons",children:[Object(d.jsx)("button",{className:"thm1",onClick:function(){return s("theme1")}}),Object(d.jsx)("button",{className:"thm2",onClick:function(){return s("theme2")}}),Object(d.jsx)("button",{className:"thm3",onClick:function(){return s("theme3")}}),Object(d.jsx)("button",{className:"thm4",onClick:function(){return s("theme4")}}),Object(d.jsx)("button",{className:"thm5",onClick:function(){return s("theme5")}})]}),Object(d.jsxs)("div",{className:"SocialMedia",children:[Object(d.jsx)(l.a,{className:"Icons text".concat(n),onClick:function(){window.open("https://www.linkedin.com/in/vivek-sharma-profile/")}}),Object(d.jsx)(m.a,{className:"Icons text".concat(n),onClick:function(){window.open("https://github.com/elementarymindscape")}})]})]})};var w=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("theme1"),i=Object(o.a)(a,2),r=i[0],l=i[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{theme:r,setTheme:l,active:c,setActive:s}),Object(d.jsx)(N,{theme:r,setTheme:l,active:c,setActive:s}),Object(d.jsxs)("div",{className:"Sections",children:[Object(d.jsx)(x,{theme:r,setTheme:l}),Object(d.jsx)(f,{theme:r,setTheme:l}),Object(d.jsx)(g,{theme:r,setTheme:l})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.0c614644.chunk.js.map