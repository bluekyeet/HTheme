(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{412:function(e,t,a){"use strict";a.r(t);var r=a(2),o=a(150),n=a(55),c=a(161),i=a(0),l=a.n(i),d=a(54),s=a(56),u=a(254),m=a(167);t.default=()=>{const[e,t]=Object(i.useState)(!1),[a,r]=Object(i.useState)(!1),s=n.a.useStoreState((e=>e.server.data.uuid)),_=n.a.useStoreState((e=>e.status.value)),{clearFlashes:E,clearAndAddHttpError:O}=Object(o.a)(),{connected:S,instance:k}=n.a.useStoreState((e=>e.socket));Object(i.useEffect)((()=>{if(!S||!k||"running"===_)return;const e=e=>{e.toLowerCase().indexOf("you need to agree to the eula in order to run the server")>=0&&t(!0)};return k.addListener(m.a.CONSOLE_OUTPUT,e),()=>{k.removeListener(m.a.CONSOLE_OUTPUT,e)}}),[S,k,_]);return Object(i.useEffect)((()=>{E("feature:eula")}),[]),l.a.createElement(c.b,{visible:e,onDismissed:()=>t(!1),closeOnBackground:!1,showSpinnerOverlay:a},l.a.createElement(p,{key:"feature:eula"}),l.a.createElement(y,null,"Accept Minecraft® EULA"),l.a.createElement(f,null,"By pressing ",'"I Accept"'," below you are indicating your agreement to the ",l.a.createElement(h,{target:"_blank",rel:"noreferrer noopener",href:"https://account.mojang.com/documents/minecraft_eula"},"Minecraft® EULA"),"."),l.a.createElement(w,null,l.a.createElement(g,{variant:d.a.Variants.Secondary,onClick:()=>t(!1)},"Cancel"),l.a.createElement(b,{onClick:()=>{r(!0),E("feature:eula"),Object(u.a)(s,"eula.txt","eula=true").then((()=>{"offline"===_&&k&&k.send(m.b.SET_STATE,"restart"),r(!1),t(!1)})).catch((e=>{console.error(e),O({key:"feature:eula",error:e})})).then((()=>r(!1)))}},"I Accept")))};var p=Object(r.c)(s.a).withConfig({displayName:"EulaModalFeature___StyledFlashMessageRender",componentId:"sc-43378k-0"})({marginBottom:"1rem"}),y=Object(r.c)("h2").withConfig({displayName:"EulaModalFeature___StyledH",componentId:"sc-43378k-1"})({fontSize:"1.5rem",lineHeight:"2rem",marginBottom:"1rem","--tw-text-opacity":"1",color:"hsla(214, 15%, 91%, var(--tw-text-opacity))"}),f=Object(r.c)("p").withConfig({displayName:"EulaModalFeature___StyledP",componentId:"sc-43378k-2"})({"--tw-text-opacity":"1",color:"hsla(210, 16%, 82%, var(--tw-text-opacity))"}),h=Object(r.c)("a").withConfig({displayName:"EulaModalFeature___StyledA",componentId:"sc-43378k-3"})({"--tw-text-opacity":"1",color:"rgba(147, 197, 253, var(--tw-text-opacity))",textDecoration:"underline",transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{"--tw-text-opacity":"1",color:"rgba(96, 165, 250, var(--tw-text-opacity))"}}),w=Object(r.c)("div").withConfig({displayName:"EulaModalFeature___StyledDiv",componentId:"sc-43378k-4"})({marginTop:"2rem",alignItems:"center",justifyContent:"flex-end","@media (min-width: 640px)":{display:"flex"}}),g=Object(r.c)(d.a).withConfig({displayName:"EulaModalFeature___StyledButton",componentId:"sc-43378k-5"})({width:"100%",borderColor:"rgba(0, 0, 0, 0)","@media (min-width: 640px)":{width:"auto"}}),b=Object(r.c)(d.a).withConfig({displayName:"EulaModalFeature___StyledButton2",componentId:"sc-43378k-6"})({marginTop:"1rem",width:"100%","@media (min-width: 640px)":{marginTop:"0px",marginLeft:"1rem",width:"auto"}})}}]);