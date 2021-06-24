(this["webpackJsonporigin-react"]=this["webpackJsonporigin-react"]||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(20),s=a.n(i),r=(a(59),a(6)),o=a(33),l=a(4),u=a.n(l),d=a(9),m=a(42),j=a(43),h=a(47),b=a(46),p=a(71),O=a.n(p).a.buildClient({domain:"origin51.myshopify.com",storefrontAccessToken:"864aa74c2de985c408f9fd7fbc24b56a"}),v=a(1),f=c.a.createContext(),x=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={products:[],product:{},checkout:{},isCartOpen:!1,quantity:1},e.getVariants=function(e){var t=O.graphQLClient.query((function(t){t.add("productByHandle",{args:{handle:"".concat(e)}},(function(e){e.add("title"),e.add("handle"),e.add("id"),e.addConnection("variants",{args:{first:99}},(function(e){e.add("id"),e.add("title"),e.add("availableForSale"),e.add("quantityAvailable"),e.add("currentlyNotInStock"),e.add("price"),e.add("selectedOptions",(function(e){e.add("name"),e.add("value")}))}))}))}));return O.graphQLClient.send(t).then((function(e){return JSON.parse(JSON.stringify(e.model.productByHandle))})).catch((function(){return null}))},e.createCheckout=Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.checkout.create();case 2:return a=t.sent,localStorage.setItem("checkout",a.id),t.next=6,e.setState({checkout:a});case 6:case"end":return t.stop()}}),t)}))),e.fetchCheckout=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.checkout.fetch(a).then((function(t){e.setState({checkout:t})})).catch((function(e){return console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchAllProducts=Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.product.fetchAll();case 2:a=t.sent,e.setState({products:a});case 4:case"end":return t.stop()}}),t)}))),e.fetchProductWithId=function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.product.fetch(a);case 2:return n=t.sent,e.setState({product:n}),console.log(JSON.stringify(n)),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addItemToCheckout=function(){var t=Object(d.a)(u.a.mark((function t(a,n){var c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=[{variantId:a,quantity:parseInt(n,10)}],t.next=3,O.checkout.addLineItems(e.state.checkout.id,c);case 3:i=t.sent,e.setState({checkout:i}),console.log(i),e.openCart();case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.removeLineItems=function(){var t=Object(d.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[a],t.next=3,O.checkout.removeLineItems(e.state.checkout.id,n);case 3:c=t.sent,e.setState({checkout:c}),console.log(c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeCart=function(){e.setState({isCartOpen:!1})},e.openCart=function(){e.setState({isCartOpen:!0})},e.getSelectedVariant=function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.product.helpers.variantForOptions(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e.discount=function(){var t=Object(d.a)(u.a.mark((function t(a){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[a],t.next=3,O.checkout.addDiscount(e.state.checkout.id,n);case 3:c=t.sent,e.setState({checkout:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){localStorage.checkout?this.fetchCheckout(localStorage.checkout):this.createCheckout()}},{key:"render",value:function(){return Object(v.jsx)(f.Provider,{value:Object(o.a)(Object(o.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithId:this.fetchProductWithId,closeCart:this.closeCart,openCart:this.openCart,addItemToCheckout:this.addItemToCheckout,removeLineItems:this.removeLineItems,getVariants:this.getVariants,getSelectedVariant:this.getSelectedVariant,discount:this.discount}),children:this.props.children})}}]),a}(n.Component),g=(f.Consumer,x),N=a(75),y=a(16);var C=Object(r.i)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){setTimeout((function(){window.scrollTo(0,0)}),300)}));return function(){e()}}),[t]),null})),k=a(138),S=(a(87),a.p+"static/media/Origin51_logo_alien.e89f60e2.svg"),w=a.p+"static/media/Origin51_alt-logotype.1b95fa46.svg",I=a(137),P={hidden:{opacity:0},show:{opacity:1,transition:{type:"spring",delay:.5,duration:3}}};var T=function(){return Object(v.jsxs)("section",{className:"hero-container",children:[Object(v.jsxs)("div",{className:"hero-images",children:[Object(v.jsx)(I.a.img,{src:S,className:"logo",alt:"",variants:P,initial:"hidden",animate:"show"}),Object(v.jsx)(I.a.img,{src:w,className:"logo name",alt:"",variants:P,initial:"hidden",animate:"show"})]}),Object(v.jsx)("div",{className:"arrow",children:Object(v.jsx)("span",{})})]})},q=a(8),A=(a(61),a(10)),F=a(45),E=a.p+"static/media/Origin51_alt-logo.b76ba844.svg",L=function(){var e=Object(n.useContext)(f).openCart,t=function(){F.animateScroll.scrollToTop()};return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("nav",{className:"nav",children:Object(v.jsxs)("div",{className:"nav-container",children:[Object(v.jsx)(q.b,{to:"/home",onClick:t,className:"nav-name",children:"Origin 51"}),Object(v.jsx)(q.b,{to:"/home",onClick:t,className:"nav-logo",children:Object(v.jsx)("img",{src:E,alt:" "})}),Object(v.jsx)("div",{className:"nav-menu-container",children:Object(v.jsxs)("ul",{className:"nav-menu",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(q.c,{to:"/home",exact:!0,activeClassName:"underline",className:"nav-link",children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(q.c,{to:"/products",exact:!0,activeClassName:"underline",className:"nav-link",children:"Buy"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(A.Anchor,{onClick:function(){return e()},className:"nav-link",children:"Cart"})})]})})]})})})};a(69);var D=function(e){var t=e.title,a=e.imageUrl,n=e.body;return Object(v.jsxs)("section",{className:"container",children:[Object(v.jsx)("img",{src:a,className:"photo",alt:""}),Object(v.jsx)("h2",{className:"title",children:t}),Object(v.jsx)("p",{className:"body",children:n})]})};a(125);var R=function(e){var t=e.title,a=e.imageUrl,n=e.body;return Object(v.jsxs)("section",{className:"containerR",children:[Object(v.jsx)("img",{src:a,className:"photoR",alt:""}),Object(v.jsx)("h2",{className:"titleR",children:t}),Object(v.jsx)("p",{className:"bodyR",children:n})]})},U=a.p+"static/media/Origin51_OutofthisWorld.9be5e687.svg",H=(a(126),a(73)),_=a.n(H),M=a(48),V=a(49);function B(e){e.preventDefault(),_.a.sendForm("service_81vvdk3","template_1rbf3m9",e.target,"user_Qz3RcXkkyg8Mr6nP2Urv4").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}var z=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isActive:!1},e.handleShow=function(){e.setState({isActive:!0})},e.handleHide=function(){e.setState({isActive:!1})},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("footer",{children:[Object(v.jsxs)("div",{className:"socials",children:[Object(v.jsx)("h3",{children:"Follow Us"}),Object(v.jsx)("a",{href:"https://twitter.com/bluejay_mr",className:"facebook social",children:Object(v.jsx)(M.a,{icon:V.a,size:"2x"})}),Object(v.jsx)("a",{href:"https://twitter.com/bluejay_mr",className:"twitter social",children:Object(v.jsx)(M.a,{icon:V.c,size:"2x"})}),Object(v.jsx)("a",{href:"https://twitter.com/bluejay_mr",className:"insta social",children:Object(v.jsx)(M.a,{icon:V.b,size:"2x"})})]}),Object(v.jsxs)("div",{className:"contact",children:[Object(v.jsx)(v.Fragment,{children:this.state.isActive?Object(v.jsx)("div",{className:"thank",children:Object(v.jsx)("h4",{className:"t-message",children:"Thank you human, we will be in touch soon!"})}):Object(v.jsx)("h3",{className:"form-title",children:"Signal Us"})}),Object(v.jsxs)("form",{onSubmit:B,children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("input",{type:"email",placeholder:"Email",className:"form-control",name:"email"}),Object(v.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("input",{type:"text",placeholder:"Subject",className:"form-control",name:"subject"}),Object(v.jsx)("label",{htmlFor:"subject",className:"form-label",children:"Subject"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("textarea",{className:"form-control",placeholder:"Message",cols:"30",rows:"8",name:"message"}),Object(v.jsx)("label",{htmlFor:"message",className:"messaging",children:"Message"})]}),Object(v.jsx)("div",{className:"form-btn",children:Object(v.jsx)("input",{type:"submit",className:"btn-submit",value:"Send",onClick:this.handleShow})})]})]}),Object(v.jsxs)("div",{className:"legal",children:[Object(v.jsx)("h3",{children:"Legal"}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{children:"UNDERAGE SALE PROHIBITED"}),Object(v.jsx)("span",{children:"SMOKING IS HAZARDOUS TO YOUR HEALTH"}),"This statement has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. CONSULT YOUR DOCTOR BEFORE USING THIS PRODUCT. KEEP OUT OF THE REACH OF CHILDREN. DO NOT USE IF PREGNANT, LACTATION, OR SUFFERING FROM MEDICAL CONDITIONS, OR TAKING MEDICATIONS."]})]})]})}}]),a}(n.Component),G=(a(70),function(){return Object(v.jsxs)(I.a.div,{className:"content",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(v.jsx)(L,{}),Object(v.jsx)(T,{}),Object(v.jsx)(I.a.div,{initial:{},animate:{},children:Object(v.jsx)(D,{className:"product1",title:"Premium Smokable Hemp Cigarettes",imageUrl:U,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et egestas dui. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque volutpat ante, consectetur semper enim blandit tristique. In dictum feugiat ante, quis ultricies elit lacinia lobortis. Phasellus nec finibus dui. Donec iaculis condimentum metus, eget vulputate tellus faucibus nec. Etiam gravida condimentum libero, in suscipit dui pretium id. Suspendisse dictum erat a laoreet pharetra. Sed non aliquam nibh, eu feugiat nisl. Maecenas viverra gravida enim nec molestie. Phasellus ac lorem eget odio luctus condimentum id sit amet ante. Duis posuere semper elit, in accumsan elit consequat aliquam. Nunc sed eleifend lectus. Phasellus condimentum mauris orci, vitae pulvinar neque efficitur elementum. Phasellus fringilla eget leo et elementum. Nulla suscipit ullamcorper neque in venenatis. Proin ullamcorper porttitor tortor, consectetur ultrices metus cursus ac. Maecenas pharetra dolor ut mi pellentesque gravida. Nulla hendrerit lorem enim."})}),Object(v.jsx)(I.a.div,{initial:{},animate:{},children:Object(v.jsx)(R,{className:"product2",title:"Premium Vape Cartridges",imageUrl:U,body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et egestas dui. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque volutpat ante, consectetur semper enim blandit tristique. In dictum feugiat ante, quis ultricies elit lacinia lobortis. Phasellus nec finibus dui. Donec iaculis condimentum metus, eget vulputate tellus faucibus nec. Etiam gravida condimentum libero, in suscipit dui pretium id. Suspendisse dictum erat a laoreet pharetra. Sed non aliquam nibh, eu feugiat nisl. Maecenas viverra gravida enim nec molestie. Phasellus ac lorem eget odio luctus condimentum id sit amet ante. Duis posuere semper elit, in accumsan elit consequat aliquam. Nunc sed eleifend lectus. Phasellus condimentum mauris orci, vitae pulvinar neque efficitur elementum. Phasellus fringilla eget leo et elementum. Nulla suscipit ullamcorper neque in venenatis. Proin ullamcorper porttitor tortor, consectetur ultrices metus cursus ac. Maecenas pharetra dolor ut mi pellentesque gravida. Nulla hendrerit lorem enim."})}),Object(v.jsx)(z,{})]})});function J(){var e=Object(r.g)();return Object(v.jsx)(I.a.div,{className:"content",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(v.jsx)("div",{className:"entry",children:Object(v.jsxs)("div",{className:"age container",children:[Object(v.jsx)("img",{src:S,className:"logo",alt:"logo"}),Object(v.jsx)("h3",{className:"age label",children:"You must be 18 or older to view and order from this site"}),Object(v.jsxs)("div",{className:"button container",children:[Object(v.jsx)(q.b,{className:"age button",to:"/home",children:"Yes, I am 18 or older"}),Object(v.jsx)("button",{className:"age button",onClick:function(){return e.goBack()},children:"No"})]})]})})})}var W=function(e){var t=e.title,a=e.imageUrl,n=e.body,c=e.alt;return Object(v.jsxs)("section",{className:"containerP",children:[Object(v.jsx)("img",{src:a,className:"photoP",alt:c}),Object(v.jsx)("h2",{className:"titleP",children:t}),Object(v.jsx)("p",{className:"bodyP",children:n})]})},Y=function(){var e=Object(n.useContext)(f).openCart,t=function(){F.animateScroll.scrollToTop()};return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("nav",{className:"nav",children:Object(v.jsxs)("div",{className:"nav-container buy",children:[Object(v.jsx)(q.b,{to:"/home",onClick:t,className:"nav-name",children:"Origin 51"}),Object(v.jsx)(q.b,{to:"/home",onClick:t,className:"nav-logo",children:Object(v.jsx)("img",{src:E,alt:" "})}),Object(v.jsxs)("ul",{className:"nav-menu",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(q.c,{to:"/home",exact:!0,activeClassName:"underline",className:"nav-link",children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(q.c,{to:"/products",exact:!0,activeClassName:"underline",className:"nav-link",children:"Buy"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(A.Anchor,{onClick:function(){return e()},className:"nav-link",children:"Cart"})})]})]})})})},Q=a(27),K=(a(132),a(31)),$=function(e){var t=e.disabled,a=void 0!==t&&t,c=e.product,i=e.quantity,s=void 0===i?1:i,r=Object(n.useContext)(f).addItemToCheckout,o=Object(n.useState)(!1),l=Object(Q.a)(o,2),m=l[0],j=l[1],h=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,r(c.id,s);case 3:j(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(A.Button,{onClick:h,disabled:a,isLoading:m,loadingText:"Adding to Cart",className:"toCart",children:"Add To Cart"})},X=function(e){var t=e.handleChange,a=e.product,n=e.getOption,c=e.disabled,i=e.hidden,s=a.options[n],r=s.name;return Object(v.jsx)("form",{className:"variant-form",hidden:i||!1,children:Object(v.jsxs)("select",{className:"variant",disabled:c||!1,defaultValue:"Choose",onChange:function(e){return t(Object(K.a)({},r,e.target.value))},children:[Object(v.jsx)("option",{value:"Choose",disabled:!0,children:"Choose"}),s.values.map((function(e){return Object(v.jsx)("option",{value:e.value,children:e.value},"prod_variant_".concat(e.value,"_").concat(r))}))]})})},Z=function(e){var t=e.product,a=Object(n.useState)(1),c=Object(Q.a)(a,2),i=c[0],s=c[1],r=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(i+1));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s(i>1?i-1:i+0));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,s(parseInt(a,0));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=Object(n.useContext)(f),a=t.getVariants,c=t.getSelectedVariant,i=Object(n.useState)(),s=Object(Q.a)(i,2),r=s[0],l=s[1],m=Object(n.useState)({}),j=Object(Q.a)(m,2),h=j[0],b=j[1],p=Object(n.useState)(!0),O=Object(Q.a)(p,2),v=O[0],x=O[1],g=function(){var t=Object(d.a)(u.a.mark((function t(n){var i,s,r,d,m;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e.handle);case 2:return i=t.sent,s=i.variants,r=Object(o.a)(Object(o.a)({},h),n),t.next=7,c(e,r);case 7:(d=t.sent)?(m=s.filter((function(e){return e.id===d.id}))[0],d.availableToSell=m.availableForSale,d.outOfStock=m.currentlyNotInStock,d.limitedInventory=m.quantityAvailable<6&&m.quantityAvailable>0?m.quantityAvailable:null,l(d),b(r)):l(null);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){var t=Object.keys(e).length;if(t>0&&x(!1),t>0&&1===e.variants.length){var a=e.variants[0].selectedOptions[0],n=a.name,c=a.value;g(Object(K.a)({},n,c))}return function(){return!1}}),[]),{selectedVariant:r,handleOptionChange:g,loadingProduct:v}}(t),h=j.selectedVariant,b=j.handleOptionChange;return t?Object(v.jsx)("div",{className:"add",children:Object(v.jsx)(A.Row,{children:Object(v.jsxs)(A.Col,{children:[Object(v.jsxs)("span",{className:"price",children:["$",(null===h||void 0===h?void 0:h.price)||t.variants[0].price]}),Object(v.jsx)(X,{product:t,handleChange:b,getOption:0,hidden:t.variants.length<2}),Object(v.jsxs)("div",{className:"quantity-container",children:[Object(v.jsx)("button",{className:"increase quantity",onClick:r,children:"+"}),Object(v.jsx)("input",{className:"quantity number",min:1,onChange:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),defaultValue:i,value:i,readOnly:!0}),Object(v.jsx)("button",{className:"decrease quantity",onClick:l,children:"-"})]}),Object(v.jsx)($,{disabled:!h&&!(null===h||void 0===h?void 0:h.availableToSell),product:h,quantity:i})]})})}):Object(v.jsx)("div",{children:"Loading"})},ee=function(){return Object(v.jsx)(A.Div,{bg:"transparent",d:"flex",align:"center",justify:"center",pos:"absolute",top:"0",bottom:"0",right:"0",left:"0",style:{zIndex:-1},children:Object(v.jsx)(A.Icon,{name:"Loading3",size:"4rem",color:"#212121"})})},te=function(){var e=Object(n.useContext)(f),t=e.fetchAllProducts,a=e.products;return Object(n.useEffect)((function(){return t(),function(){}}),[t]),a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Y,{}),Object(v.jsx)(I.a.div,{className:"contents",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:a.map((function(e){return Object(v.jsxs)("div",{className:"divScroll",children:[Object(v.jsx)(W,{className:"product2",title:e.title,imageUrl:e.images[0].src,body:e.description,alt:e.title}),Object(v.jsx)(Z,{product:e})]},e.id)}))})]}):Object(v.jsx)(ee,{})},ae=(a(133),function(){var e=Object(n.useContext)(f),t=e.isCartOpen,a=e.closeCart,c=e.checkout,i=e.removeLineItems;return c.lineItems?Object(v.jsx)(A.SideDrawer,{className:"side-drawer",isOpen:t,onClose:a,children:Object(v.jsxs)("div",{className:"side-container",children:[Object(v.jsx)("button",{onClick:a,className:"cart_exit",children:"X"}),c.lineItems<1?Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("p",{className:"empty",children:[" ","Your Cart is Empty...",Object(v.jsx)("br",{})," Let's Fix That!"," "]})}):Object(v.jsx)(v.Fragment,{children:c.lineItems&&c.lineItems.map((function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){return i(e.id)},className:"remove",children:"Remove"}),Object(v.jsx)("div",{className:"item-img",children:Object(v.jsx)(A.Div,{bgImg:e.variant.image.src,bgSize:"cover",bgPos:"center center",h:"5rem",w:"4rem",marginLeft:"2rem"})}),Object(v.jsxs)("div",{className:"cart-wrap",children:[Object(v.jsx)("p",{className:"item",children:e.title}),Object(v.jsxs)("p",{className:"item",children:["Flavor: ",e.variant.title]}),Object(v.jsxs)("p",{className:"item quant",children:["Quantity: ",e.quantity]})]}),Object(v.jsx)("div",{className:"item-price",children:Object(v.jsxs)("p",{children:["$",e.variant.price*e.quantity]})}),Object(v.jsx)("div",{className:"divide"})]},e.id)}))}),Object(v.jsxs)("div",{className:"bottum",children:[Object(v.jsx)("div",{className:"subtotal cartLabel",children:"Subtotal"}),Object(v.jsxs)("div",{className:"subtotal",children:["$ ",c.subtotalPrice]}),Object(v.jsx)("a",{href:c.webUrl,target:"_blank",rel:"noreferrer",className:"checkout-btn",children:"Checkout"})]})]})}):null}),ne=function(){return Object(v.jsxs)(I.a.div,{className:"PageNotFound",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(v.jsx)("h1",{children:"404"}),Object(v.jsx)("img",{src:S,height:300,width:400,alt:""}),Object(v.jsx)("h2",{children:"Watch out, do not be abducted!"}),Object(v.jsxs)(q.b,{to:"/",className:"li",children:["Teleport back to Home!",Object(v.jsx)("span",{className:"arrow"})]})]})},ce=new N.a;var ie=function(){var e=Object(r.h)();return Object(v.jsx)("section",{className:"App",children:Object(v.jsx)(g,{children:Object(v.jsxs)(y.Provider,{value:ce,debug:undefined,debugAfterHydration:!0,children:[Object(v.jsx)(ae,{}),Object(v.jsx)(C,{}),Object(v.jsx)(k.a,{exitBeforeEnter:!0,children:Object(v.jsxs)(r.d,{location:e,children:[Object(v.jsx)(r.b,{path:"/",exact:!0,component:J}),Object(v.jsx)(r.b,{path:"/home",exact:!0,component:G}),Object(v.jsx)(r.b,{path:"/products",exact:!0,component:te}),Object(v.jsx)(r.b,{path:"*",component:ne}),Object(v.jsx)(r.a,{to:"/404"})]},e.key)})]})})})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,139)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(v.jsx)(q.a,{basename:"/Origin51",children:Object(v.jsx)(ie,{})}),document.getElementById("root")),se()},59:function(e,t,a){},61:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},87:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.a77e3d91.chunk.js.map