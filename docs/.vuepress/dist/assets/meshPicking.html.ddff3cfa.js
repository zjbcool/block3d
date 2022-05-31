import{_ as i,r as c,o as l,c as u,a as n,d as a,w as p,F as r,b as s,e as o}from"./app.090844ca.js";const d={},k=n("h1",{id:"\u7F51\u683C\u62FE\u53D6-mesh-picking",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7F51\u683C\u62FE\u53D6-mesh-picking","aria-hidden":"true"},"#"),s(" \u7F51\u683C\u62FE\u53D6 Mesh Picking")],-1),h={class:"table-of-contents"},v=s("\u5C04\u7EBF Ray"),m=s("\u68C0\u6D4B\u5C04\u7EBF pickWithRay"),b=s("\u8C13\u8BCD\u51FD\u6570 Predicate function"),_=s("\u4E09\u89D2\u8C13\u8BCD Triangle predicate"),y=s("\u9009\u62E9\u88AB\u906E\u6321\u7269\u4F53 multiPickWithRay"),g=s("\u62FE\u53D6\u5C04\u7EBF createPickingRay"),f=s("\u8C03\u8BD5 RayHelper"),j=s("\u7EC3\u4E60"),w=s("\u5C04\u7EBF\u68C0\u6D4B"),x=s("\u70B9\u51FB\u4E8B\u4EF6"),R=n("h2",{id:"\u5C04\u7EBF-ray",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5C04\u7EBF-ray","aria-hidden":"true"},"#"),s(" \u5C04\u7EBF Ray")],-1),B=n("p",null,"\u5C04\u7EBF\u5C31\u50CF\u592A\u9633\u5149\u3002\u7528\u6765\u68C0\u6D4B\u573A\u666F\u4E2D\u7F51\u683C\u548C\u70B9\u4E4B\u95F4\u7684\u78B0\u649E\u6216\u4EA4\u53C9\u3002",-1),N=n("p",null,[s("\u5728\u4E0A\u4E00\u4E2A\u6559\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u7528\u5B83\u6765\u7528\u9F20\u6807\u9009\u62E9\u7F51\u683C\uFF08\u57283D\u4E2D\u4E00\u6761\u5C04\u7EBF\u4ECE\u6444\u50CF\u673A\u5230\u9F20\u6807\u4F4D\u7F6E\uFF09\uFF0C\u4F7F\u7528\u51FD\u6570"),n("code",null,"scene.pick(scene.pointerX, scene.pointerY)"),s("\u3002")],-1),L=n("p",null,"\u4F46\u5728\u8FD9\u91CC\u6211\u4EEC\u5C06\u770B\u5230\uFF0C\u53EF\u4EE5\u4ECE\u4EFB\u4F55\u4F4D\u7F6E\u548C\u4EFB\u4F55\u65B9\u5411\u53D1\u51FA\u5C04\u7EBF\u3002\u4F8B\u5982\uFF0C\u5728\u7B2C\u4E09\u4EBA\u79F0\u5C04\u51FB\u6E38\u620F\u4E2D\uFF1A\u5B50\u5F39\u548C\u969C\u788D\u7269\u4E4B\u95F4\u7684\u78B0\u649E\u3002",-1),O=n("p",null,"\u76F8\u5173\u6587\u6863:",-1),P=s("\u9996\u5148"),Y={href:"https://doc.babylonjs.com/typedoc/classes/babylon.ray",target:"_blank",rel:"noopener noreferrer"},A=s("\u521B\u5EFA\u5C04\u7EBF new Ray()"),W=s("\u4F7F\u7528"),T={href:"https://doc.babylonjs.com/typedoc/classes/babylon.scene#pickwithray",target:"_blank",rel:"noopener noreferrer"},V=s("scene.pickWithRay()"),C=s("\u5728\u573A\u666F\u4E2D\u53D1\u51FA\u5C04\u7EBF\u6765\u62FE\u53D6\u7F51\u683C"),M=s("\u4F7F\u7528\u8FD4\u56DE\u7684"),H={href:"https://doc.babylonjs.com/typedoc/classes/babylon.pickinginfo",target:"_blank",rel:"noopener noreferrer"},E=s("\u62FE\u53D6\u4FE1\u606F"),D=n("h2",{id:"\u68C0\u6D4B\u5C04\u7EBF-pickwithray",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u68C0\u6D4B\u5C04\u7EBF-pickwithray","aria-hidden":"true"},"#"),s(" \u68C0\u6D4B\u5C04\u7EBF pickWithRay")],-1),F=s("\u5728\u6B64\u5904\u67E5\u770B\u793A\u4F8B\uFF1A"),I={href:"https://playground.babylonjs.com/#KNE0O#84",target:"_blank",rel:"noopener noreferrer"},K=s("\u68C0\u6D4B\u5C04\u7EBF\u63A5\u89E6\u5230\u7684\u7B2C\u4E00\u4E2A\u7F51\u683C"),S=o(`<p>(\u4E0B\u9762\u7684\u63CF\u8FF0\u5C06\u53C2\u8003\u8FD9\u4E2A\u4F8B\u5B50\u3002\u6240\u6709\u7684\u884C\u53C2\u8003\u90FD\u6765\u81EA\u4E8E\u6700\u65B0\u7684\u4F8B\u5B50\u94FE\u63A5)</p><p><img src="https://doc.babylonjs.com/_next/image?url=%2Fimg%2Fhow_to%2Fraycast01.jpg&amp;w=1920&amp;q=75" alt=""></p><p>\u5728\u6211\u4EEC\u6240\u6709\u7684playground\u4E0A\uFF0C\u60F3\u8C61\u89D2\u8272\u662F\u4F4D\u4E8E\u4E2D\u5FC3\u7684\u4E3B\u76D2\u5B50\u3002\u5B83\u5C06\u4E0D\u65AD\u5730\u5411\u524D\u53D1\u5C04\u6FC0\u5149\u675F\uFF0C\u5E76\u68C0\u6D4B\u54EA\u4E2A\u654C\u4EBA\uFF08\u5176\u4ED6\u76D2\u5B50\uFF09\u88AB\u51FB\u4E2D\u3002</p><p>\u6240\u4EE5\u7528\u9F20\u6807\u79FB\u52A8\u800C\u4E0D\u662F\u70B9\u51FB\uFF0C\u901A\u8FC7\u51FD\u6570<code>mousemovef</code>\u6765\u8F6C\u52A8\u8FD9\u4E2A\u76D2\u5B50\u3002\u4E00\u6761\u5C04\u7EBF\u5728\u521B\u5EFA\u65F6\u9700\u8981\uFF1A\u539F\u70B9\u3001\u65B9\u5411\u548C\u957F\u5EA6\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5C06<code>box.isPickable</code>\u8BBE\u7F6E\u4E3A<code>false</code>\uFF0C\u4EE5\u907F\u514D\u5C04\u7EBF\u4ECE\u5185\u90E8\u63A5\u89E6\u5230\u76D2\u5B50\u3002\u56E0\u4E3A\u6211\u4EEC\u5C06\u5C04\u7EBF\u7684\u8D77\u70B9\uFF08\u539F\u70B9\uFF09\u8BBE\u7F6E\u5728\u4E86\u76D2\u5B50\u7684\u4E2D\u5FC3\u3002</p><p>\u6700\u91CD\u8981\u7684\u90E8\u5206\u662F\u7B97\u51FA\u77E2\u91CF\u7684\u6B63\u786E\u65B9\u5411\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">vecToLocal</span><span class="token punctuation">(</span><span class="token parameter">vector<span class="token punctuation">,</span> mesh</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> m <span class="token operator">=</span> mesh<span class="token punctuation">.</span><span class="token function">getWorldMatrix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">TransformCoordinates</span><span class="token punctuation">(</span>vector<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> v<span class="token punctuation">;</span>		 
<span class="token punctuation">}</span>

<span class="token keyword">var</span> forward <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
forward <span class="token operator">=</span> <span class="token function">vecToLocal</span><span class="token punctuation">(</span>forward<span class="token punctuation">,</span> box<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> direction <span class="token operator">=</span> forward<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
direction <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Normalize</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5E0C\u671B\u5F97\u5230\u76F8\u5BF9\u4E8E\u76D2\u5B50\u7A7A\u95F4\u548C\u65B9\u5411\u7684\u524D\u5411\u77E2\u91CF\u3002\u7136\u540E\uFF0C\u4E3A\u4E86\u5F97\u5230\u65B9\u5411\uFF0C\u6211\u4EEC\u4ECE\u539F\u70B9\uFF0C\u5373\u76D2\u5B50\u7684\u4F4D\u7F6E\u4E0A\u51CF\u53BB\u5B83\u3002\u51FD\u6570<code>vecToLocal</code>\u7684\u76EE\u7684\u662F\u901A\u8FC7\u5C06\u4E00\u4E2A\u5411\u91CF\u4E58\u4EE5\u7F51\u683C\u77E9\u9635\uFF0C\u4EE5\u7F51\u683C\u7684\u5C40\u90E8\u7A7A\u95F4\u53D8\u6362\u4F4D\u7F6E\u3002</p><p>\u7136\u540E\uFF0C\u6211\u4EEC\u521B\u5EFA\u5177\u6709\u6240\u6709\u7ED9\u5B9A\u5143\u7D20\u548C\u957F\u5EA6\u4E3A100\u7684\u5C04\u7EBF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Ray</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\uFF0C\u5982\u679C\u5C04\u7EBF\u63A5\u89E6\u5230\u4E00\u4E2A\u7F51\u683C\uFF0C\u6211\u4EEC\u4F1A\u5F97\u5230\u5B83\u7684\u51FB\u4E2D\u70B9\uFF08\u7B2C68\u884C\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> hit <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">pickWithRay</span><span class="token punctuation">(</span>ray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u4E2A\u7F51\u683C\u88AB\u51FB\u4E2D\uFF0C\u6211\u4EEC\u5C31\u5BF9\u5176\u8FDB\u884C\u5904\u7406\uFF0C\u6BD4\u5982\u83B7\u53D6\u7F51\u683C\u540D\u79F0\u3001\u70B9\u7684\u4F4D\u7F6E\u7B49\u7B49\u3002\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u6539\u53D8\u5B83\u7684\u5C3A\u5BF8\uFF0C\u56E0\u4E3A\u5B83\u66F4\u6709\u8DA3!</p><p>\u5982\u679C\u4EE5\u540E\u9700\u8981\u5728\u8FD9\u4E2A\u76D2\u5B50\u4E0A\u68C0\u67E5\u5C04\u7EBF\u76F8\u4EA4\uFF0C\u5C31\u4E0D\u80FD\u5F3A\u5236\u5C06<code>box.isPickable</code>\u8BBE\u7F6E\u4E3A<code>false</code>\uFF0C\u53EF\u4EE5\u5728\u76D2\u5B50\u524D\u9762\u4E00\u70B9\u8BBE\u7F6E\u5C04\u7EBF\u7684\u539F\u70B9\uFF0C\u518D\u8FDC\u4E00\u70B9\u8BBE\u7F6E\u65B9\u5411\u548C\u957F\u5EA6\u3002</p>`,14),X={href:"https://playground.babylonjs.com/#KNE0O#17",target:"_blank",rel:"noopener noreferrer"},q=s("\u5C04\u7EBF\u62FE\u53D6\u793A\u4F8B"),Z=n("h2",{id:"\u8C13\u8BCD\u51FD\u6570-predicate-function",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8C13\u8BCD\u51FD\u6570-predicate-function","aria-hidden":"true"},"#"),s(" \u8C13\u8BCD\u51FD\u6570 Predicate function")],-1),z=n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u8FC7\u6EE4\u5668\uFF0C\u7528\u4E8E\u9009\u62E9\u54EA\u4E9B\u7F51\u683C\u53EF\u4EE5\u88AB\u9009\u62E9\u3002",-1),J={href:"https://playground.babylonjs.com/#KNE0O#18",target:"_blank",rel:"noopener noreferrer"},G=s("\u8C13\u8BCD\u51FD\u6570\u793A\u4F8B"),Q=o(`<p>\u4E0B\u9762\u662F\u4EE3\u7801\u4E2D\u65B0\u52A0\u5165\u7684\u8C13\u8BCD\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">predicate</span><span class="token punctuation">(</span><span class="token parameter">mesh</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mesh <span class="token operator">==</span> box2 <span class="token operator">||</span> mesh <span class="token operator">==</span> box<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u53C2\u6570\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">pickWithRay</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> predicate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>isPickable</code> false \u53C2\u6570\u4F7Fbox\u4E0D\u76F8\u5E72\uFF0C\u6240\u4EE5\u5FC5\u987B\u907F\u5F00box\u3002\u4E3A\u4E86\u6D4B\u8BD5\uFF0C\u6211\u4EEC\u4E5F\u907F\u5F00\u4E86box2\uFF0C\u800C\u5141\u8BB8\u5176\u4ED6\u7684\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662Fbox3\u548Cbox4\uFF09\u3002</p><p>\u7ED3\u679C\u662F\uFF0C\u53EA\u6709box3\uFF0C\u540E\u9762\u7684\u7B2C\u4E8C\u4E2A\u84DD\u8272\u76D2\u5B50\uFF0C\u548Cbox4\u4F1A\u589E\u957F\u3002\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\u5C31\u50CFbox2\u5BF9\u5C04\u7EBF\u6765\u8BF4\u662F\u900F\u660E\u7684\u4E00\u6837\u3002</p><p><code>pickWithRay</code>\u65B9\u6CD5\u8FD8\u6709\u4E00\u4E2A\u53EF\u9009\u7684\u53C2\u6570\u3002\u8FD9\u662F\u4E00\u4E2A\u5E03\u5C14\u503C<code>fastCheck</code>\uFF08\u9ED8\u8BA4\u4E3Afalse\uFF09\u3002<code>True</code>\u5C06\u8FD4\u56DE\u4E0E\u5C04\u7EBF\u76F8\u4EA4\u7684\u7B2C\u4E00\u4E2A\u7F51\u683C\uFF08\u6309\u7167\u7F51\u683C\u6570\u7EC4\u7684\u987A\u5E8F\uFF09\uFF0C\u800C\u4E0D\u662F\u79BB\u5C04\u7EBF\u539F\u70B9\u6700\u8FD1\u7684\u7F51\u683C\u3002</p><h2 id="\u4E09\u89D2\u8C13\u8BCD-triangle-predicate" tabindex="-1"><a class="header-anchor" href="#\u4E09\u89D2\u8C13\u8BCD-triangle-predicate" aria-hidden="true">#</a> \u4E09\u89D2\u8C13\u8BCD Triangle predicate</h2><p>\u4ECEBabylon.js v4.0\u5F00\u59CB\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u81EA\u5B9A\u4E49\u8C13\u8BCD\u6765\u8FC7\u6EE4\u88AB\u9009\u4E2D\u7684\u4E09\u89D2\u5F62\uFF0C\u4EE5\u4FBF\u5BF9\u8FDB\u5165\u7684\u5C04\u7EBF\u8FDB\u884C\u68C0\u6D4B\u3002\u8BE5\u8C13\u8BCD\u5C06\u88AB\u8C03\u7528\uFF0C\u5176\u4E2D\u5305\u62EC\u6BCF\u4E2A\u9762\u76843\u4E2A\u9876\u70B9\u548C\u8FDB\u6765\u7684\u5C04\u7EBF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span>pointerX<span class="token punctuation">,</span> scene<span class="token punctuation">.</span>pointerY<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">p0<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> ray</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5FFD\u7565\u7F51\u683C\u80CC\u9762</span>
    <span class="token keyword">var</span> p0p1 <span class="token operator">=</span> p0<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> p2p1 <span class="token operator">=</span> p2<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5411\u91CF3 vector3</span>
    <span class="token comment">// \u53C9\u4E58cross\u662F\u4E24\u4E2A\u5411\u91CF\u6240\u5728\u5E73\u9762\u7684\u6CD5\u7EBF\u65B9\u5411\uFF0C\u5927\u5C0F\u7531\u4E24\u4E2A\u5411\u91CF\u7684\u5927\u5C0F\u51B3\u5B9A</span>
    <span class="token keyword">var</span> normal <span class="token operator">=</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Cross</span><span class="token punctuation">(</span>p0p1<span class="token punctuation">,</span> p2p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u70B9\u4E58dot\u662F\u5411\u91CF1\u5728\u5411\u91CF2\u4E0A\u7684\u6295\u5F71\uFF0C\u662F\u4E2A\u6570\u91CF\u503C\uFF0C\u5982\u679C\u8BE5\u503C&lt;0\uFF0C\u8868\u793A\u4E24\u5411\u91CF\u7684\u5939\u89D2&gt;90\u5EA6\uFF0C\u4E5F\u5C31\u8868\u793A\u4E09\u89D2\u9762\u4E0D\u671D\u5411\u76F8\u673A</span>
    <span class="token keyword">return</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Vector3<span class="token punctuation">.</span><span class="token function">Dot</span><span class="token punctuation">(</span>ray<span class="token punctuation">.</span>direction<span class="token punctuation">,</span> normal<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u53EF\u4EE5\u8FC7\u6EE4\u6389\u6240\u6709\u4E0D\u671D\u5411\u76F8\u673A\u7684\u4E09\u89D2\u5F62\u3002\uFF08\u5982\u679C\u4E0D\u4F7F\u7528\u8BE5\u8C13\u8BCD\uFF0C\u5C06\u65E0\u6CD5\u70B9\u51FB\u5230\u4E2D\u95F4\u7684\u5C0F\u76D2\u5B50\u3002\uFF09</p>`,11),U={href:"https://playground.babylonjs.com/#EES9W5",target:"_blank",rel:"noopener noreferrer"},$=s("\u4E09\u89D2\u8C13\u8BCD\u793A\u4F8B"),nn=o(`<h2 id="\u9009\u62E9\u88AB\u906E\u6321\u7269\u4F53-multipickwithray" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u88AB\u906E\u6321\u7269\u4F53-multipickwithray" aria-hidden="true">#</a> \u9009\u62E9\u88AB\u906E\u6321\u7269\u4F53 multiPickWithRay</h2><p>\u5982\u679C\u6211\u4EEC\u4E0D\u5E0C\u671B\u5C04\u7EBF\u5728\u7B2C\u4E00\u4E2A\u969C\u788D\u7269\u5904\u505C\u6B62\uFF08\u53EF\u4EE5\u9009\u4E2D\u88AB\u906E\u6321\u4F4F\u7684\u7269\u4F53\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528<code>scene.multiPickWithRay</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Ray</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> direction<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> hits <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">multiPickWithRay</span><span class="token punctuation">(</span>ray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),sn={href:"https://playground.babylonjs.com/#KNE0O#19",target:"_blank",rel:"noopener noreferrer"},an=s("\u591A\u9009\u793A\u4F8B"),en=o(`<p>\u9009\u62E9\u7684\u7ED3\u679C\u662F\u4E00\u4E2A\u6570\u7EC4\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u5FAA\u73AF\u6570\u7EC4\u6765\u6539\u53D8\u6240\u6709\u7684\u51FB\u4E2D\u7684\u7F51\u683C\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u4E24\u4E2A\u84DD\u8272\u65B9\u6846\u7684\u5927\u5C0F\u53D1\u751F\u4E86\u53D8\u5316\u3002\u5C31\u50CF\u4E00\u9897\u80FD\u7A7F\u5899\u7684\u5B50\u5F39!</p><p>\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\u76F4\u63A5\u4F7F\u7528 <code>Ray</code> \u7C7B\u3002</p><p>\u8981\u628A\u5C04\u7EBF\u6539\u4E3A\u5C40\u90E8\u7A7A\u95F4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Ray<span class="token punctuation">.</span><span class="token function">Transform</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> matrix<span class="token punctuation">)</span> \u2192 Ray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u6D4B\u4EA4\u70B9:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Ray<span class="token punctuation">.</span><span class="token function">intersectsMesh</span><span class="token punctuation">(</span>mesh<span class="token punctuation">,</span> fastCheck<span class="token punctuation">)</span> \u2192 PickingInfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u62FE\u53D6\u5C04\u7EBF-createpickingray" tabindex="-1"><a class="header-anchor" href="#\u62FE\u53D6\u5C04\u7EBF-createpickingray" aria-hidden="true">#</a> \u62FE\u53D6\u5C04\u7EBF createPickingRay</h2><p>\u8FD8\u6709\u4E00\u4E2A\u7B80\u4FBF\u7684\u529F\u80FD\u662F<code>scene.createPickingRay</code>\u3002\u8FD9\u6761\u7279\u6B8A\u7684\u5149\u7EBF\u662F\u4ECE\u76F8\u673A\u6295\u5C04\u51FA\u6765\u7684\uFF0C\u4E00\u76F4\u5230\u65E0\u9650\u8FDC\uFF0C\u5728\u5149\u6807\u7684\u65B9\u5411\uFF08\u76F8\u5BF9\u4E8E\u865A\u62DF\u955C\u5934\uFF09\u3002\u4EE4\u4EBA\u56F0\u60D1\u5417\uFF1F\u57FA\u672C\u4E0A\u53EF\u4EE5\u628A\u5B83\u770B\u4F5C\u662F\u4E00\u6761\u4ECE\u76F8\u673A\u6295\u51FA\u7684\u5C04\u7EBF\uFF0C\u5E76\u7531\u5149\u6807 &quot;\u7784\u51C6&quot;\u3002\u8FD9\u662F\u5728\u573A\u666F\u4E2D\u9009\u4E2D\u7269\u4F53\u7684\u53E6\u4E00\u79CD\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Identity() \u5C06\u4E16\u754C\u77E9\u9635\u91CD\u7F6E\u4E3A4x4\u5355\u4F4D\u77E9\u9635\u3002</span>
<span class="token keyword">var</span> ray <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">createPickingRay</span><span class="token punctuation">(</span>scene<span class="token punctuation">.</span>pointerX<span class="token punctuation">,</span> scene<span class="token punctuation">.</span>pointerY<span class="token punctuation">,</span> <span class="token constant">BABYLON</span><span class="token punctuation">.</span>Matrix<span class="token punctuation">.</span><span class="token function">Identity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token keyword">var</span> hit <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">pickWithRay</span><span class="token punctuation">(</span>ray<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),tn={href:"https://playground.babylonjs.com/#AC8XPN",target:"_blank",rel:"noopener noreferrer"},pn=s("\u62FE\u53D6\u5C04\u7EBF\u793A\u4F8B"),on=o(`<p>\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\u76F4\u63A5\u4F7F\u7528 <code>Ray</code> \u7C7B\u3002</p><p>\u8981\u628A\u5C04\u7EBF\u6539\u4E3A\u5C40\u90E8\u7A7A\u95F4:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Ray<span class="token punctuation">.</span><span class="token function">Transform</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> matrix<span class="token punctuation">)</span> \u2192 Ray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u6D4B\u4EA4\u70B9:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Ray<span class="token punctuation">.</span><span class="token function">intersectsMesh</span><span class="token punctuation">(</span>mesh<span class="token punctuation">,</span> fastCheck<span class="token punctuation">)</span> \u2192 PickingInfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8C03\u8BD5-rayhelper" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5-rayhelper" aria-hidden="true">#</a> \u8C03\u8BD5 RayHelper</h2><p>\u8981\u7406\u89E3\u4E00\u6761\u5C04\u7EBF\u7684\u539F\u70B9\u548C\u65B9\u5411\u53EF\u80FD\u662F\u5F88\u56F0\u96BE\u7684\u3002\u4E3A\u5E2E\u52A9\u8C03\u8BD5\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>RayHelper</code>\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\u6765\u521B\u5EFA\u548C\u663E\u793A\u4E00\u4E2ARayHelper:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">BABYLON</span><span class="token punctuation">.</span>RayHelper<span class="token punctuation">.</span><span class="token function">CreateAndShow</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> scene<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Color3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u5206\u6210\u4E24\u6B65\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> rayHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>RayHelper</span><span class="token punctuation">(</span>ray<span class="token punctuation">)</span><span class="token punctuation">;</span>
rayHelper<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F85\u52A9\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u9644\u52A0\u5230\u7F51\u683C\u4EE5\u8DDF\u8E2A\u5176\u65B9\u5411\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> localMeshDirection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> localMeshOrigin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BABYLON<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
rayHelper<span class="token punctuation">.</span><span class="token function">attachToMesh</span><span class="token punctuation">(</span>box<span class="token punctuation">,</span> localMeshDirection<span class="token punctuation">,</span> localMeshOrigin<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),cn={href:"https://playground.babylonjs.com/#ZHDBJ#48",target:"_blank",rel:"noopener noreferrer"},ln=s("\u4F7F\u7528\u8F85\u52A9\u5BF9\u8C61\u62FE\u53D6\u793A\u4F8B"),un=n("h2",{id:"\u7EC3\u4E60",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60","aria-hidden":"true"},"#"),s(" \u7EC3\u4E60")],-1),rn=n("h3",{id:"\u5C04\u7EBF\u68C0\u6D4B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5C04\u7EBF\u68C0\u6D4B","aria-hidden":"true"},"#"),s(" \u5C04\u7EBF\u68C0\u6D4B")],-1),dn=n("ul",null,[n("li",null,"\u4F7F\u7528TypeScript"),n("li",null,"\u521B\u5EFA\u73AF\u5F62\u7403\u9635\u5217"),n("li",null,"\u5438\u9644\u5230\u7F51\u683C\u8868\u9762")],-1),kn={href:"https://playground.babylonjs.com/#MY83VZ#3",target:"_blank",rel:"noopener noreferrer"},hn=s("\u5C04\u7EBF\u68C0\u6D4B\u793A\u4F8B"),vn=n("h3",{id:"\u70B9\u51FB\u4E8B\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u70B9\u51FB\u4E8B\u4EF6","aria-hidden":"true"},"#"),s(" \u70B9\u51FB\u4E8B\u4EF6")],-1),mn=n("ul",null,[n("li",null,"\u8C13\u8BCD\u51FD\u6570"),n("li",null,"\u70B9\u51FB\u4E8B\u4EF6")],-1),bn={href:"https://playground.babylonjs.com/#LCF1DD#1",target:"_blank",rel:"noopener noreferrer"},_n=s("\u70B9\u51FB\u4E8B\u4EF6\u793A\u4F8B");function yn(gn,fn){const t=c("RouterLink"),e=c("ExternalLinkIcon");return l(),u(r,null,[k,n("nav",h,[n("ul",null,[n("li",null,[a(t,{to:"#\u5C04\u7EBF-ray"},{default:p(()=>[v]),_:1})]),n("li",null,[a(t,{to:"#\u68C0\u6D4B\u5C04\u7EBF-pickwithray"},{default:p(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#\u8C13\u8BCD\u51FD\u6570-predicate-function"},{default:p(()=>[b]),_:1})]),n("li",null,[a(t,{to:"#\u4E09\u89D2\u8C13\u8BCD-triangle-predicate"},{default:p(()=>[_]),_:1})]),n("li",null,[a(t,{to:"#\u9009\u62E9\u88AB\u906E\u6321\u7269\u4F53-multipickwithray"},{default:p(()=>[y]),_:1})]),n("li",null,[a(t,{to:"#\u62FE\u53D6\u5C04\u7EBF-createpickingray"},{default:p(()=>[g]),_:1})]),n("li",null,[a(t,{to:"#\u8C03\u8BD5-rayhelper"},{default:p(()=>[f]),_:1})]),n("li",null,[a(t,{to:"#\u7EC3\u4E60"},{default:p(()=>[j]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#\u5C04\u7EBF\u68C0\u6D4B"},{default:p(()=>[w]),_:1})]),n("li",null,[a(t,{to:"#\u70B9\u51FB\u4E8B\u4EF6"},{default:p(()=>[x]),_:1})])])])])]),R,B,N,L,O,n("ul",null,[n("li",null,[P,n("a",Y,[A,a(e)])]),n("li",null,[W,n("a",T,[V,a(e)]),C]),n("li",null,[M,n("a",H,[E,a(e)])])]),D,n("p",null,[F,n("a",I,[K,a(e)])]),S,n("p",null,[n("a",X,[q,a(e)])]),Z,z,n("p",null,[n("a",J,[G,a(e)])]),Q,n("p",null,[n("a",U,[$,a(e)])]),nn,n("p",null,[n("a",sn,[an,a(e)])]),en,n("p",null,[n("a",tn,[pn,a(e)])]),on,n("p",null,[n("a",cn,[ln,a(e)])]),un,rn,dn,n("p",null,[n("a",kn,[hn,a(e)])]),vn,mn,n("p",null,[n("a",bn,[_n,a(e)])])],64)}var wn=i(d,[["render",yn],["__file","meshPicking.html.vue"]]);export{wn as default};