<script>

// HTML to JavaScript converter
// By John Krutsch (http://asp.xcentrixlc.com/john)
// Moderator of the JavaScript Kit Help Forum: http://freewarejava.com/cgi-bin/Ultimate.cgi

function scriptIt(val){
val.value=val.value.replace(/"/gi,"&#34;")
val.value=val.value.replace(/'/gi,"&#39;")
valArr=escape(val.value).split("%0D%0A")
val.value=""
for (i=0; i<valArr.length; i++){
val.value+= (i==0) ? "<script>\ninfo=" : ""
val.value+= "\"" + unescape(valArr[i])
val.value+= (i!=valArr.length-1) ? "\" + \n" : "\"\n" 
}
val.value+="\ndocument.write(info)\n<\/script>"
}

function ctrlA(el) {
with(el){
focus(); select() 
}
if(document.all){
txt=el.createTextRange()
txt.execCommand("Copy") 
window.status='Selected and copied to clipboard!'
}
else window.status='Press ctrl-c to copy the text to the clipboard'
setTimeout("window.status=''",3000)
} 

</script>
<center>
<form name="f">
<input type="button" value="HTML -> JavaScript" onclick="scriptIt(document.f.t)" />
<input type="reset" value="Reset">
<input type="button" value="Select All" onclick="ctrlA(document.f.t)" />
<br />
<textarea name="t" cols="75"
rows="20"></textarea>
<br />
</form>
</center>
<script>
info="<script id=&#34;cid0020000203087157929&#34; data-cfasync=&#34;false&#34; async=&#34;async&#34; src=&#34;//st.chatango.com/js/gz/emb.js&#34; style=&#34;width: 300px;height: 400px;&#34; >{&#34;handle&#34;:&#34;yuinime&#34;,&#34;arch&#34;:&#34;js&#34;,&#34;styles&#34;:{&#34;a&#34;:&#34;74b9ff&#34;,&#34;b&#34;:100,&#34;c&#34;:&#34;000000&#34;,&#34;d&#34;:&#34;000000&#34;,&#34;k&#34;:&#34;74b9ff&#34;,&#34;l&#34;:&#34;74b9ff&#34;,&#34;m&#34;:&#34;74b9ff&#34;,&#34;p&#34;:&#34;10&#34;,&#34;q&#34;:&#34;74b9ff&#34;,&#34;r&#34;:100,&#34;pos&#34;:&#34;br&#34;,&#34;cv&#34;:1,&#34;cvbg&#34;:&#34;74b9ff&#34;,&#34;cvfg&#34;:&#34;000000&#34;,&#34;cvw&#34;:400,&#34;cvh&#34;:30,&#34;ticker&#34;:1,&#34;fwtickm&#34;:1}}</script>"

document.write(info)
</script>
