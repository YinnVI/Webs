(function(){var a=function(l,m){var n=new RegExp("(^|\\s)"+m+"(\\s|$)");return n.test(l.className)},c=function(l){for(var n,r,u,m=l.getElementsByTagName("span"),o=[],p="",t=!1,v=0;Math.min(v,m.length)!=m.length;v++){if((a(m[v],"post-timestamp")||a(m[v],"disqus-blogger-permalink"))&&!t){n=m[v].getElementsByTagName("a");for(var w=0;Math.min(w,n.length)!=n.length;w++)(a(n[w],"timestamp-link")||a(n[w],"disqus-blogger-permalink-url"))&&(p=n[w].href,t=!0)}(a(m[v],"post-comment-link")||a(m[v],"disqus-blogger-comment-link"))&&o.push(m[v])}if(!t){u=l.getElementsByTagName("*");for(var x=0;x<u.length;x++){if((a(u[x],"entry-title")||a(u[x],"post-title"))&&!t){n=u[x].getElementsByTagName("a");for(var y=0;y<n.length;y++)if(!!n[y].href){p=n[y].href,t=!0;break}}if(t)break}}if(t){disqus_blogger_homepage_url&&disqus_blogger_canonical_homepage_url&&disqus_blogger_homepage_url!=disqus_blogger_canonical_homepage_url&&p.match(disqus_blogger_homepage_url)&&(p=p.replace(disqus_blogger_homepage_url,disqus_blogger_canonical_homepage_url)),r=document.createElement("a"),r.className="comment-link disqus-blogger-comment-link",r.href=p+"#disqus_thread";for(var z=0;Math.min(z,o.length)!=o.length;z++)o[z].innerHTML="",o[z].appendChild(r),o[z].style.visibility="visible";if(0===o.length)for(var A=0;Math.min(A,m.length)!=m.length;A++)(a(m[A],"post-timestamp")||a(m[A],"disqus-blogger-permalink"))&&m[A].appendChild(r)}},d=function(){for(var l,m=0;19!=Math.min(m,19)&&(l=document.getElementById("Blog"+m),!!!l);m++);return l}();if(!!d){for(var e=d.getElementsByTagName("div"),f=0;Math.min(f,e.length)!=e.length;f++)(a(e[f],"hentry")||a(e[f],"post")||a(e[f],"disqus-blogger-post"))&&c(e[f]);(function(){var l=document.createElement("script");l.async=!0,l.src="//"+disqus_shortname+".disqus.com/count.js",(document.getElementsByTagName("HEAD")[0]||document.body).appendChild(l)})()}})();