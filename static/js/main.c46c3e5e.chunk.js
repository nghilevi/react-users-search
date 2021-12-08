(this["webpackJsonpreact-users-search"]=this["webpackJsonpreact-users-search"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s,a,c,i,r,u=n(1),o=n.n(u),l=n(4),d=n.n(l),j=n(2);!function(e){e.Users="https://jsonplaceholder.typicode.com/users",e.Posts="https://jsonplaceholder.typicode.com/posts"}(s||(s={})),function(e){e.Default="default",e.Loading="loading",e.Success="success",e.Failure="failure"}(a||(a={})),function(e){e.Loading="Loading data ...",e.Failure="Data loaded failed. Please try again",e.UsersLoadFail="Users loaded failed. Please try again"}(c||(c={})),function(e){e.SelectedUserId="Selected user id:",e.SelectUser="Please select user",e.NoSelection="None"}(i||(i={})),function(e){e.Empty="There is no items on the list. This may be due to we can not load the data. Please try again later!"}(r||(r={}));var f=function(e){return e.toString().toLowerCase()},h=function(e){return e.json()},b=(n(9),n(10),n(0));var O=function(e){var t=e.listItems,n=e.displayField,s=e.onClick,a=Object(u.useState)(""),c=Object(j.a)(a,2),i=c[0],o=c[1],l=function(e){"function"===typeof s&&s(e)};return Object(b.jsx)("div",{className:"list-search",children:t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{"data-testid":"input",type:"text",onInput:function(e){return function(e){o(e.target.value)}(e)}}),Object(b.jsx)("ul",{className:"items-list",children:t.filter((function(e){return f(e[n]).indexOf(f(i))>-1})).map((function(e,t){return Object(b.jsx)("li",{"data-testid":t,onClick:function(t){l(e)},children:e[n]},t)}))})]}):Object(b.jsx)(b.Fragment,{children:r.Empty})})};var p=function(e){var t=e.postsData,n=e.usersData,s=Object(u.useState)(-1),a=Object(j.a)(s,2),c=a[0],r=a[1],o=Object(u.useState)(t),l=Object(j.a)(o,2),d=l[0],h=l[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h1",{className:"app-header",children:[i.SelectedUserId," ",c>=1?c:i.NoSelection]}),Object(b.jsx)(O,{listItems:n,displayField:"name",onClick:function(e){var n=function(e,t,n){var s=e||[];return 0!==n.length&&Array.isArray(e)&&(s=e.filter((function(e){return f(e[t]).search(f(n))>-1}))),s}(t,"userId",e.id);r(e.id),t&&h(n)}}),c>=1?Object(b.jsx)(O,{listItems:d,displayField:"title"}):Object(b.jsx)("div",{className:"text-container",children:Object(b.jsx)("span",{className:"default-text",children:i.SelectUser})})]})};var m=function(){var e=function(){var e=Object(u.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(u.useState)([]),r=Object(j.a)(i,2),o=r[0],l=r[1],d=Object(u.useState)(a.Default),f=Object(j.a)(d,2),b=f[0],O=f[1];return Object(u.useEffect)((function(){O(a.Loading),Promise.all([s.Posts,s.Users].map((function(e){return fetch(e).then(h).catch((function(e){return O(a.Failure)}))}))).then((function(e){c(e[0]),l(e[1]),O(a.Success)})).catch((function(e){return O(a.Failure)}))}),[]),{posts:n,users:o,loadingStatus:b}}(),t=e.posts,n=e.users,i=e.loadingStatus;return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)("div",{children:i===a.Loading?Object(b.jsx)(b.Fragment,{children:c.Loading}):i===a.Failure?Object(b.jsx)(b.Fragment,{children:c.Failure}):n?Object(b.jsx)(p,{postsData:t,usersData:n}):Object(b.jsx)(b.Fragment,{children:c.UsersLoadFail})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};d.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),g()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.c46c3e5e.chunk.js.map