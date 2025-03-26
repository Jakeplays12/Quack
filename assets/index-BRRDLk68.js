(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const u=[{c:"AI",d:"chatgpt.com",r:0,s:"ChatGPT",sc:"AI",t:"gpt",u:"chatgpt.com/?q={{{s}}}"},{c:"Tech",d:"github.com",r:26,s:"Github",sc:"Programming",t:"ghr",u:"https://github.com/{{{s}}}"},{c:"Entertainment",d:"minecraft.wiki",r:485,s:"Official Minecraft Wiki",sc:"Games (Minecraft)",t:"mc",u:"http://minecraft.wiki?search={{{s}}}"},{c:"Multimedia",d:"www.youtube.com",r:463021,s:"YouTube",sc:"Video",t:"yt",u:"https://www.youtube.com/results?search_query={{{s}}}"},{c:"Social",d:"bsky.app",r:0,s:"Bluesky",sc:"Social Media",t:"bsky",u:"https://bsky.app/search?q={{{s}}}"},{c:"Entertainment",d:"namemc.com",r:0,s:"NameMC",sc:"Games (Minecraft)",t:"namemc",u:"https://namemc.com/search?q={{{s}}}"}];function d(){const r=document.querySelector("#app");r.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
      <div class="content-container">
        <h1>Und*ck (Quack Quack)</h1>
        <p>DuckDuckGo's bang redirects are too slow. Add the following URL as a custom search engine to your browser. Enables <a href="https://duckduckgo.com/bang.html" target="_blank">all of DuckDuckGo's bangs.</a></p>
        <div class="url-container"> 
          <input 
            type="text" 
            class="url-input"
            value="https://unduck.link?q=%s"
            readonly 
          />
          <button class="copy-button">
            <img src="/clipboard.svg" alt="Copy" />
          </button>
        </div>
      </div>
      <footer class="footer">
        <a href="https://t3.chat" target="_blank">t3.chat</a>
        •
        <a href="https://x.com/theo" target="_blank">theo</a>
        •
        <a href="https://github.com/t3dotgg/unduck" target="_blank">github</a>
      </footer>
    </div>
  `;const c=r.querySelector(".copy-button"),o=c.querySelector("img"),n=r.querySelector(".url-input");c.addEventListener("click",async()=>{await navigator.clipboard.writeText(n.value),o.src="/clipboard-check.svg",setTimeout(()=>{o.src="/clipboard.svg"},2e3)})}const p=localStorage.getItem("default-bang")??"g",f=u.find(r=>r.t===p);function h(){var a,i;const c=((a=new URL(window.location.href).searchParams.get("q"))==null?void 0:a.trim())??"";if(!c)return d(),null;const o=c.match(/!(\S+)/i),n=(i=o==null?void 0:o[1])==null?void 0:i.toLowerCase(),t=u.find(l=>l.t===n)??f,e=c.replace(/!\S+\s*/i,"").trim(),s=t==null?void 0:t.u.replace("{{{s}}}",encodeURIComponent(e).replace(/%2F/g,"/"));return s||null}function m(){const r=h();r&&window.location.replace(r)}m();
