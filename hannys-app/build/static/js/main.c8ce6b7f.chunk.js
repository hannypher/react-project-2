(this["webpackJsonphannys-app"]=this["webpackJsonphannys-app"]||[]).push([[0],{61:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(22),c=a.n(s),r=a(12),i=a(13),l=a(19),o=a(16),h=a(15),j=(a(53),a(85)),u=a(83),b=a(87),d=a(86),m=a(47),O=a(84),p=a(23),x=a(6),v=a(4),f=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"ABOUT"})})}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"REGISTER"})})}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"HOME"})})}}]),a}(n.Component),N=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(p.a,{children:[Object(v.jsx)("div",{children:Object(v.jsx)(j.a,{bg:"light",variant:"light",expand:"lg",children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(j.a.Brand,{href:"#home",children:"Hannys Spot"}),Object(v.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(v.jsxs)(b.a,{className:"mr-auto",children:[Object(v.jsx)(b.a.Link,{as:p.b,to:"/home",children:"Home"}),Object(v.jsx)(b.a.Link,{as:p.b,to:"/about",children:"About"}),Object(v.jsx)(b.a.Link,{as:p.b,to:"/Register",children:"Register"})]}),Object(v.jsxs)(d.a,{className:"d-flex",children:[Object(v.jsx)(m.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search"}),Object(v.jsx)(O.a,{variant:"outline-danger",children:"Search"})]})]})]})})}),Object(v.jsx)("div",{children:Object(v.jsxs)(x.c,{children:[Object(v.jsx)(x.a,{path:"/about",children:Object(v.jsx)(f,{})}),Object(v.jsx)(x.a,{path:"/register",children:Object(v.jsx)(g,{})}),Object(v.jsx)(x.a,{path:"/",children:Object(v.jsx)(y,{})})]})})]})}}]),a}(n.Component),k=(a(61),a(48)),S=a.n(k),w=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={fullName:"",username:"",email:"",password:""},e.changeFullName=e.changeFullName.bind(Object(l.a)(e)),e.changeUsername=e.changeUsername.bind(Object(l.a)(e)),e.changeEmail=e.changeEmail.bind(Object(l.a)(e)),e.changePassword=e.changePassword.bind(Object(l.a)(e)),e.onSubmit=e.onSubmit.bind(Object(l.a)(e)),e}return Object(i.a)(a,[{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={fullName:this.state.fullName,username:this.state.username,email:this.state.email,password:this.state.password};S.a.post("http://localhost:4000/app/signup",t).then((function(e){return console.log(e.data)})),this.setState({fullName:"",username:"",email:"",password:""})}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(N,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"form-div",children:Object(v.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(v.jsx)("input",{type:"text",placeholder:"Full Name",onChange:this.changeFullName,value:this.state.fullName,className:"form-control form-group"}),Object(v.jsx)("input",{type:"text",placeholder:"Username",onChange:this.changeUsername,value:this.state.username,className:"form-control form-group"}),Object(v.jsx)("input",{type:"text",placeholder:"E-mail",onChange:this.changeEmail,value:this.state.email,className:"form-control form-group"}),Object(v.jsx)("input",{type:"password",placeholder:"Password",onChange:this.changePassword,value:this.state.password,className:"form-control form-group"}),Object(v.jsx)("input",{type:"submit",className:"btn btn-danger btn-block",value:"Submit"})]})})})]})}}]),a}(n.Component);c.a.render(Object(v.jsx)(w,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.c8ce6b7f.chunk.js.map