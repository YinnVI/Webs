<script src='https://raw.githack.com/YinnVI/Webs/master/label-thumbnail.js' type='text/javascript'></script>
<script type='text/javascript'>
//<![CDATA[
function labelthumbs(t){for(var e=0;e<numposts;e++){var r,n=t.feed.entry[e],m=n.title.$t;if(e==t.feed.entry.length)break;for(var i=0;i<n.link.length;i++){if("replies"==n.link[i].rel&&"text/html"==n.link[i].type)var l=n.link[i].title,o=n.link[i].href;if("alternate"==n.link[i].rel){r=n.link[i].href;break}}var u;try{u=n.media$thumbnail.url,u=u.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")}catch(h){s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb}var p=n.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10);document.write('<ul class="rp_thumbs">'),document.write("<li>"),1==showpostthumbnails&&document.write('<a href="'+r+'"><div class="rp_thumb"><span class="rollover"></span><img width="'+thumb_width+'" height="'+thumb_height+'" alt="'+m+'" src="'+u+'"/></div></a>'),document.write('<span class="rp_title"><a href="'+r+'" target ="_top">'+m+"</a></span>");var g="";if(document.write('<span class="rp_meta">'),1==showpostdate&&(g=g+'<span class="rp_meta_date">'+f+"/"+_+"/"+w+"</span>"),1==showcommentnum&&("1 Comments"==l&&(l="1 Comment"),"0 Comments"==l&&(l="No Comments"),showcomment='<span class="rp_meta_comment"><a href="'+o+'">'+l+"</a></span>",g+=showcomment),1==displaymore&&(g=g+'<span class="rp_meta_more"><a href="'+r+'" class="url" target ="_top">Read More...</a></span>'),document.write(g),document.write("</span>"),document.write('<span class="rp_summary">'),"content"in n)var v=n.content.$t;else if("summary"in n)var v=n.summary.$t;else var v="";var k=/<\S[^>]*>/g;if(v=v.replace(k,""),1==showpostsummary)if(v.length<numchars)document.write(""),document.write(v),document.write("");else{document.write(""),v=v.substring(0,numchars);var y=v.lastIndexOf(" ");v=v.substring(0,y),document.write(v+"..."),document.write("")}document.write("</span>"),document.write("</li>"),document.write("</ul>")}document.write('<ul class="rp_thumbs2">');for(var e=1;e<numposts2;e++){var r,n=t.feed.entry[e],m=n.title.$t;if(e==t.feed.entry.length)break;for(var i=1;i<n.link.length;i++){if("replies"==n.link[i].rel&&"text/html"==n.link[i].type)var l=n.link[i].title,o=n.link[i].href;if("alternate"==n.link[i].rel){r=n.link[i].href;break}}var $;try{$=n.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")}catch(h){s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),$=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb2}var p=n.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10);1==showpostthumbnails2&&document.write('<a href="'+r+'"><div class="rp_thumb2"><img width="'+thumb_width2+'" height="'+thumb_height2+'" alt="'+m+'" src="'+$+'"/></div></a>'),document.write("<li>"),document.write('<span class="rp_title rp_title2"><a href="'+r+'" target ="_top">'+m+"</a></span>");var g="";document.write('<span class="rp_meta rp_meta2">'),1==showpostdate2&&(g=g+'<span class="rp_meta_date rp_meta_date2">'+f+"/"+_+"/"+w+"</span>"),1==showcommentnum2&&("1 Comments"==l&&(l="1 Comment"),"0 Comments"==l&&(l="No Comments"),showcomment='<span class="rp_meta_comment rp_meta_comment2"><a href="'+o+'">'+l+"</a></span>",g+=showcomment),1==displaymore2&&(g=g+'<span class="rp_meta_more rp_meta_more2"><a href="'+r+'" class="url" target ="_top">Read More...</a></span>'),document.write(g),document.write("</span>"),document.write("</li>")}document.write("</ul>")}
//Recent Comments
var numComments=numComments||5,characters=characters||40;function recent_comments(tb){var commentsHtml;commentsHtml='<ul id="recent_comments">';for(var i=0;i<numComments;i++){var commentlink,authorName;if(i==tb.feed.entry.length)break;commentsHtml+="<li>";var entry=tb.feed.entry[i];for(var l=0;l<entry.link.length;l++){if(entry.link[l].rel=='alternate'){commentlink=entry.link[l].href}}for(var a=0;a<entry.author.length;a++){authorName=entry.author[a].name.$t}commentsHtml+="<strong><a href=\""+commentlink+"\" title=\""+authorName+"\">"+authorName+"</a></strong>";var commHTML=entry.content.$t;var commBody=commHTML.replace(/(<([^>]+)>)/ig,"");if(commBody!=""&&commBody.length>characters){commBody=commBody.substring(0,characters);commBody+=" &hellip;"}else{commBody=commBody}commentsHtml+=" - ";commentsHtml+="<span>"+commBody+"</span>";commentsHtml+="</li>"}commentsHtml+='</ul>';document.write(commentsHtml)}
//]]>
//Recent Comments Settings
var numComments  = 5;
var characters  = 60;
</script>
<script type='text/javascript'>
var numposts = 1;
var numposts2 = 4;
var showpostthumbnails = true;
var showpostthumbnails2 = true;
var displaymore = true;
var displaymore2 = false;
var showcommentnum = false;
var showcommentnum2 = false;
var showpostdate = true;
var showpostdate2 = true;
var showpostsummary = true;
var numchars = 100;
var thumb_width = 300;
var thumb_height = 140;
var thumb_width2 = 60;
var thumb_height2 = 60;
var no_thumb = 'https://1.bp.blogspot.com/-7vDs5hMaDho/U268E2ecF4I/AAAAAAAADY8/RBHVTTuJrxc/w300-h140-c/no-image.png'
var no_thumb2 = 'https://3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/s60-c/no-image.png'
</script>