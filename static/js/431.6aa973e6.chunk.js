"use strict";(self.webpackChunkawesome_react_portfolio=self.webpackChunkawesome_react_portfolio||[]).push([[431],{9404:(r,e,o)=>{o.d(e,{A:()=>c});var t=o(5043),n=o(3083),p=o(5787),s=o(1325),i=o(9092),a=o(579);const c=r=>{let{onClose:e}=r;const{isDarkMode:o,setIsDarkMode:c}=(0,t.useContext)(s.A),{t:l}=(0,i.B)();return(0,a.jsx)(n.A,{control:(0,a.jsx)(p.A,{checked:o,name:"checkedDarkMode",color:"primary",onChange:()=>{e&&e(),c(!o)}}),label:l("dark_mode")})}},431:(r,e,o)=>{o.r(e),o.d(e,{default:()=>A});var t=o(5043),n=o(1551),p=o(3266),s=o(2612),i=o(4794);const a=(0,i.A)(t.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub"),c=(0,i.A)(t.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");var l=o(6702),f=o(8289),m=o(579);const u=(0,n.A)((r=>({icon:{color:r.palette.text.secondary,transition:"0.1s",cursor:"pointer",fontSize:r=>r.fontSize?"".concat(r.fontSize,"px"):"32px","&:hover":{color:r.palette.text.primary}}}))),d=r=>{let{icon:e,href:o,fontSize:t,...n}=r;const p=u({fontSize:t});return(0,m.jsx)(l.A,{display:"inline",...n,component:s.P.div,whileHover:{scale:1.1},children:(0,m.jsx)(f.A,{href:o,children:(0,m.jsx)(e,{className:p.icon})})})};var h=o(9404),y=o(8403);const x=(0,n.A)((r=>({socialIcon:{marginBottom:"5px"},wrapper:{display:"flex",flexDirection:"row",alignItems:"flex-end",bottom:0,right:0,padding:r.spacing(3),zIndex:100},mobileWrapper:{display:"flex"}}))),A=r=>{let{mobile:e}=r;const o=x(),{isLoading:n}=(0,t.useContext)(y.A),i=(0,p.s)();return(0,t.useEffect)((()=>{n?i.start({opacity:0,y:0}):i.start((r=>({opacity:1,y:0,transition:{delay:1.8+.1*r}})))}),[n,i]),e?(0,m.jsxs)("div",{className:o.mobileWrapper,children:[(0,m.jsx)(d,{icon:a,m:1,href:"https://github.com/SilviaAnasco-ESPE"}),(0,m.jsx)(d,{icon:c,m:1,href:"sianasco@espe.edu.ec"})]}):(0,m.jsxs)(s.P.div,{className:o.wrapper,children:[(0,m.jsx)(s.P.div,{animate:i,custom:0,className:o.socialIcon,children:(0,m.jsx)(d,{icon:a,m:1,href:"https://github.com/SilviaAnasco-ESPE"})}),(0,m.jsx)(s.P.div,{animate:i,custom:3,className:o.socialIcon,children:(0,m.jsx)(d,{icon:c,m:1,href:"sianasco@espe.edu.ec"})}),(0,m.jsx)(s.P.div,{animate:i,custom:4,className:o.socialIcon,children:(0,m.jsx)(h.A,{})})]})}},6702:(r,e,o)=>{o.d(e,{A:()=>_});var t=o(5458),n=o(8168),p=o(5714);function s(r,e){var o={};return Object.keys(r).forEach((function(t){-1===e.indexOf(t)&&(o[t]=r[t])})),o}function i(r){var e=function(e){var o=r(e);return e.css?(0,n.A)({},(0,p.A)(o,r((0,n.A)({theme:e.theme},e.css))),s(e.css,[r.filterProps])):e.sx?(0,n.A)({},(0,p.A)(o,r((0,n.A)({theme:e.theme},e.sx))),s(e.sx,[r.filterProps])):o};return e.propTypes={},e.filterProps=["css","sx"].concat((0,t.A)(r.filterProps)),e}const a=i;const c=function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t=function(r){return e.reduce((function(e,o){var t=o(r);return t?(0,p.A)(e,t):e}),{})};return t.propTypes={},t.filterProps=e.reduce((function(r,e){return r.concat(e.filterProps)}),[]),t};var l=o(4467),f=o(498);function m(r,e){return e&&"string"===typeof e?e.split(".").reduce((function(r,e){return r&&r[e]?r[e]:null}),r):null}const u=function(r){var e=r.prop,o=r.cssProperty,t=void 0===o?r.prop:o,n=r.themeKey,p=r.transform,s=function(r){if(null==r[e])return null;var o=r[e],s=m(r.theme,n)||{};return(0,f.N)(r,o,(function(r){var e;return"function"===typeof s?e=s(r):Array.isArray(s)?e=s[r]||r:(e=m(s,r)||r,p&&(e=p(e))),!1===t?e:(0,l.A)({},t,e)}))};return s.propTypes={},s.filterProps=[e],s};function d(r){return"number"!==typeof r?r:"".concat(r,"px solid")}const h=c(u({prop:"border",themeKey:"borders",transform:d}),u({prop:"borderTop",themeKey:"borders",transform:d}),u({prop:"borderRight",themeKey:"borders",transform:d}),u({prop:"borderBottom",themeKey:"borders",transform:d}),u({prop:"borderLeft",themeKey:"borders",transform:d}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"}));const y=c(u({prop:"displayPrint",cssProperty:!1,transform:function(r){return{"@media print":{display:r}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"}));const x=c(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"}));const A=c(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"}));const v=c(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"}));const g=c(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}));const b=u({prop:"boxShadow",themeKey:"shadows"});function P(r){return r<=1?"".concat(100*r,"%"):r}var w=u({prop:"width",transform:P}),j=u({prop:"maxWidth",transform:P}),S=u({prop:"minWidth",transform:P}),K=u({prop:"height",transform:P}),C=u({prop:"maxHeight",transform:P}),N=u({prop:"minHeight",transform:P});u({prop:"size",cssProperty:"width",transform:P}),u({prop:"size",cssProperty:"height",transform:P});const k=c(w,j,S,K,C,N,u({prop:"boxSizing"}));var z=o(5995);const E=c(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"}));var I=o(45),T=o(5043),R=o(3024),H=o(219),M=o.n(H),W=o(5313);function B(r){return function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=o.name,p=(0,I.A)(o,["name"]);var s,i=t,a="function"===typeof e?function(r){return{root:function(o){return e((0,n.A)({theme:r},o))}}}:{root:e},c=(0,W.A)(a,(0,n.A)({Component:r,name:t||r.displayName,classNamePrefix:i},p));e.filterProps&&(s=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var l=T.forwardRef((function(e,o){var t=e.children,p=e.className,i=e.clone,a=e.component,l=(0,I.A)(e,["children","className","clone","component"]),f=c(e),m=(0,R.A)(f.root,p),u=l;if(s&&(u=function(r,e){var o={};return Object.keys(r).forEach((function(t){-1===e.indexOf(t)&&(o[t]=r[t])})),o}(u,s)),i)return T.cloneElement(t,(0,n.A)({className:(0,R.A)(t.props.className,m)},u));if("function"===typeof t)return t((0,n.A)({className:m},u));var d=a||r;return T.createElement(d,(0,n.A)({ref:o,className:m},u),t)}));return M()(l,r),l}}var D=o(5921);const G=function(r){var e=B(r);return function(r,o){return e(r,(0,n.A)({defaultTheme:D.A},o))}};var O=a(c(h,y,x,A,v,g,b,k,z.A,E));const _=G("div")(O,{name:"MuiBox"})}}]);
//# sourceMappingURL=431.6aa973e6.chunk.js.map