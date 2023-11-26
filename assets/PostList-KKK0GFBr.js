import{c as F,j as e,a as c,u as T,r as x,f as A,b as z,o as B,d as H,e as M,g as R,h as O,s as S,B as W,H as $,T as G,i as V,L as Q,k as X,S as Y}from"./main-ByzVvI3q.js";var[Z,q]=F({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function D(a){var t;const s=a.split(" "),r=(t=s[0])!=null?t:"",o=s.length>1?s[s.length-1]:"";return r&&o?`${r.charAt(0)}${o.charAt(0)}`:r.charAt(0)}function C(a){const{name:t,getInitials:s,...r}=a,o=q();return e.jsx(c.div,{role:"img","aria-label":t,...r,__css:o.label,children:t?s==null?void 0:s(t):null})}C.displayName="AvatarName";var w=a=>e.jsxs(c.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...a,children:[e.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),e.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]});function L(a){const{src:t,srcSet:s,onError:r,onLoad:o,getInitials:n,name:l,borderRadius:d,loading:u,iconLabel:i,icon:m=e.jsx(w,{}),ignoreFallback:f,referrerPolicy:g,crossOrigin:h}=a,v=T({src:t,onError:r,crossOrigin:h,ignoreFallback:f})==="loaded";return!t||!v?l?e.jsx(C,{className:"chakra-avatar__initials",getInitials:n,name:l}):x.cloneElement(m,{role:"img","aria-label":i}):e.jsx(c.img,{src:t,srcSet:s,alt:l,onLoad:o,referrerPolicy:g,crossOrigin:h??void 0,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:d}})}L.displayName="AvatarImage";var J={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},_=A((a,t)=>{const s=z("Avatar",a),[r,o]=x.useState(!1),{src:n,srcSet:l,name:d,showBorder:u,borderRadius:i="full",onError:m,onLoad:f,getInitials:g=D,icon:h=e.jsx(w,{}),iconLabel:b=" avatar",loading:v,children:p,borderColor:y,ignoreFallback:k,crossOrigin:I,referrerPolicy:E,...P}=B(a),j={borderRadius:i,borderWidth:u?"2px":void 0,...J,...s.container};return y&&(j.borderColor=y),e.jsx(c.span,{ref:t,...P,className:H("chakra-avatar",a.className),"data-loaded":M(r),__css:j,children:e.jsxs(Z,{value:s,children:[e.jsx(L,{src:n,srcSet:l,loading:v,onLoad:R(f,()=>{o(!0)}),onError:m,getInitials:g,name:d,borderRadius:i,icon:h,iconLabel:b,ignoreFallback:k,crossOrigin:I,referrerPolicy:E}),p]})})});_.displayName="Avatar";var N=c("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});N.displayName="Center";var K={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};A(function(t,s){const{axis:r="both",...o}=t;return e.jsx(c.div,{ref:s,__css:K[r],...o,position:"absolute"})});const ee=()=>{const{data:a}=O(),[t,s]=x.useState(8),[r,o]=x.useState(!1),n=()=>{const{scrollTop:l,clientHeight:d,scrollHeight:u}=document.documentElement;l+d>=u-100&&!r&&(o(!0),setTimeout(()=>{s(i=>i+8),o(!1)},1e3))};return x.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[n]),e.jsxs("div",{children:[e.jsx("div",{className:S.list,children:a==null?void 0:a.slice(0,t).map(l=>e.jsx(N,{py:6,br:15,children:e.jsxs(W,{maxW:"320px",w:"full",boxShadow:"2xl",rounded:"lg",p:6,textAlign:"center",children:[e.jsx(_,{size:"xl",src:"https://boringavatars.com/f3ffd2-bff1ce-82bda7-6e837c-2e0527",mb:4,pos:"relative",_after:{content:'""',w:4,h:4,bg:"green.300",border:"2px solid white",rounded:"full",pos:"absolute",bottom:0,right:3}}),e.jsx($,{fontSize:"2xl",fontFamily:"body",height:8,overflow:"hidden",children:l.title}),e.jsxs(G,{textAlign:"justify",mb:4,color:V("gray.700","gray.400"),px:3,children:[l.body.slice(0,100),"..."]}),e.jsxs(Q,{to:`/picasso-test/posts/${l.id}`,children:[e.jsx(X,{flex:1,fontSize:"sm",rounded:"full",bg:"blue.400",color:"white",boxShadow:"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)",_hover:{bg:"blue.500"},_focus:{bg:"blue.500"},children:"просмотр"})," "]})]})},l.id))}),r&&t<a.length&&e.jsxs("div",{className:S.spinner,children:[" ",e.jsx(Y,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})," "]})]})};export{ee as default};
