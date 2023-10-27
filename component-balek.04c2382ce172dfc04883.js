(self.webpackChunkdigivigil_www_github=self.webpackChunkdigivigil_www_github||[]).push([[106],{818:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>r});var i=a(537),o=a.n(i),t=a(645),s=a.n(t)()(o());s.push([e.id,"\n#balekMainScreenshot{\n\n  max-width: 80%;\n}\n\n\n","",{version:3,sources:["webpack://./src/components/balek/Info.vue"],names:[],mappings:";AA6CA;;EAEE,cAAc;AAChB",sourcesContent:['<template>\n  <div class="InfoDiv">\n    <div class="MainInfoTitleDiv">\n      <img class="MainInfoTitleLogoImg" :src="balekLogo"  alt="Balek Logo"/>\n      Balek\n    </div>\n\n    <div class="MainInfoSummary">\n      Full Stack Javascript Framework\n    </div>\n\n    <br/>\n    <a href="/balek/resources/screenshot.jpg" target="_blank"><img id="balekMainScreenshot" :src="screenShotThumb"  alt="Balek Screenshot"/></a>\n    <div class="MainInfoDescription" style="margin-bottom:40px;">\n      <div class="MainInfoDiv">\n        Balek is a full-stack JavaScript framework designed for developing, building, and deploying web applications that are remotely accessible and persist separate from their interfaces. With Balek, you can build modules using provided APIs and combine them to create powerful web applications.\n        <br/>\n        <br/>\n        The framework includes login and user management modules to streamline the development process. Balek also provides a modular architecture that makes it easy to add custom functionality as your project evolves.\n        <br/>\n        <br/>\n        Click our screenshot to see a larger version, and watch our use cases video to see how Balek in action.\n      </div>\n    </div>\n\n\n  </div>\n</template>\n<script>\nimport balekLogo from \'./resources/Balek.svg\'\n\nimport screenShotThumb from \'./resources/screenshotThumb.png\'\n\nexport default {\n  name: "BalekInfo",\n  data: function () {\n    return {\n      balekLogo, screenShotThumb\n    }\n  }\n};\n<\/script>\n<style>\n\n\n#balekMainScreenshot{\n\n  max-width: 80%;\n}\n\n\n</style>'],sourceRoot:""}]);const r=s},734:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>r});var i=a(537),o=a.n(i),t=a(645),s=a.n(t)()(o());s.push([e.id,"\n.mainSection{\n  position: relative;\n  display: inline-block;\n  border-top: solid black 4px;\n\n  width: 100%;\n  background-color: rgba(0.5,0.5,0.5,0.0);\n}\n.balekMainDiv{\n  position:absolute;\n  width: 100%;\n  font-size: 36pt;\n  text-align: center;\n  color:  #205377;\n}\n\n","",{version:3,sources:["webpack://./src/components/balek/Main.vue"],names:[],mappings:";AAoDA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,2BAA2B;;EAE3B,WAAW;EACX,uCAAuC;AACzC;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB",sourcesContent:['<template>\n  <div class="balekMainDiv">\n\n    <BalekInfo style="border: none; background: none;" />\n\n    <div class="MainInfoDiv">\n\n    <div class="MainInfoTitleDiv" style="text-align: left; margin-top: 30px; border-bottom: solid black 2px;">\n      Use Cases:\n    </div>\n      <br/>\n      <br/>\n      Balek has been used to create a small variety of successful projects, including Diaplode, a multi-user remote workspace used for a variety of purposes, from staging projects to researching notes. Coopilot, a web app and iOS app used in a POS specialist position at a food coop, was also built using Balek. These projects have been deployed in a variety of environments including MacOS, Linux, OpenBSD, Windows, and Google Cloud.\n      <br/>\n      <br/>\n    <div class="MainYouTubeDiv">\n      <iframe class="MainYoutubeVideoIframe"  src="https://www.youtube.com/embed/n3bwKBiYDTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>\n    </div>\n    <div class="MainInfoTitleDiv" style="text-align: left; margin-top: 30px; border-bottom: solid black 2px;">\n      Availability:\n    </div>\n    <div class="MainInfoDiv">\n      Balek is in the process of being cleaned up and documented for public use. Once completed, a pre-alpha branch will be available <a target="_blank" class="MainLink" href="https://www.github.com/digivigil/balek">on Digivigil\'s Github</a>\n\n      <br/>\n      <br/>\n      The Current prototype version can be found <a target="_blank" class="MainLink" href="https://www.github.com/ephedrandrox/balek">here</a>\n    </div>\n</div>\n  </div>\n</template>\n<script>\nimport balekLogo from \'./resources/Balek.svg\'\nimport digivigilLogo from \'../digivigil/resources/digivigil.svg\'\n\nimport BalekInfo from \'./Info.vue\'\n\nexport default {\n  name: "Balek",\n  data: function () {\n    return {\n      balekLogo: balekLogo,\n      digivigilLogo: digivigilLogo\n    }\n  },\n  components: {\n    BalekInfo\n  }\n};\n<\/script>\n<style>\n\n.mainSection{\n  position: relative;\n  display: inline-block;\n  border-top: solid black 4px;\n\n  width: 100%;\n  background-color: rgba(0.5,0.5,0.5,0.0);\n}\n.balekMainDiv{\n  position:absolute;\n  width: 100%;\n  font-size: 36pt;\n  text-align: center;\n  color:  #205377;\n}\n\n</style>'],sourceRoot:""}]);const r=s},803:(e,n,a)=>{"use strict";a.d(n,{Z:()=>g});var i=a(252),o={class:"InfoDiv"},t={class:"MainInfoTitleDiv"},s=["src"],r=(0,i._)("div",{class:"MainInfoSummary"}," Full Stack Javascript Framework ",-1),l=(0,i._)("br",null,null,-1),c={href:"/balek/resources/screenshot.jpg",target:"_blank"},d=["src"],u=(0,i._)("div",{class:"MainInfoDescription",style:{"margin-bottom":"40px"}},[(0,i._)("div",{class:"MainInfoDiv"},[(0,i.Uk)(" Balek is a full-stack JavaScript framework designed for developing, building, and deploying web applications that are remotely accessible and persist separate from their interfaces. With Balek, you can build modules using provided APIs and combine them to create powerful web applications. "),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)(" The framework includes login and user management modules to streamline the development process. Balek also provides a modular architecture that makes it easy to add custom functionality as your project evolves. "),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)(" Click our screenshot to see a larger version, and watch our use cases video to see how Balek in action. ")])],-1),p=a(805),b=a(912);const m={name:"BalekInfo",data:function(){return{balekLogo:p.Z,screenShotThumb:b.Z}}};a(817);const g=(0,a(744).Z)(m,[["render",function(e,n,a,p,b,m){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",t,[(0,i._)("img",{class:"MainInfoTitleLogoImg",src:e.balekLogo,alt:"Balek Logo"},null,8,s),(0,i.Uk)(" Balek ")]),r,l,(0,i._)("a",c,[(0,i._)("img",{id:"balekMainScreenshot",src:e.screenShotThumb,alt:"Balek Screenshot"},null,8,d)]),u])}]])},41:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>c});var i=a(252),o={class:"balekMainDiv"},t=(0,i._)("div",{class:"MainInfoDiv"},[(0,i._)("div",{class:"MainInfoTitleDiv",style:{"text-align":"left","margin-top":"30px","border-bottom":"solid black 2px"}}," Use Cases: "),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)(" Balek has been used to create a small variety of successful projects, including Diaplode, a multi-user remote workspace used for a variety of purposes, from staging projects to researching notes. Coopilot, a web app and iOS app used in a POS specialist position at a food coop, was also built using Balek. These projects have been deployed in a variety of environments including MacOS, Linux, OpenBSD, Windows, and Google Cloud. "),(0,i._)("br"),(0,i._)("br"),(0,i._)("div",{class:"MainYouTubeDiv"},[(0,i._)("iframe",{class:"MainYoutubeVideoIframe",src:"https://www.youtube.com/embed/n3bwKBiYDTU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})]),(0,i._)("div",{class:"MainInfoTitleDiv",style:{"text-align":"left","margin-top":"30px","border-bottom":"solid black 2px"}}," Availability: "),(0,i._)("div",{class:"MainInfoDiv"},[(0,i.Uk)(" Balek is in the process of being cleaned up and documented for public use. Once completed, a pre-alpha branch will be available "),(0,i._)("a",{target:"_blank",class:"MainLink",href:"https://www.github.com/digivigil/balek"},"on Digivigil's Github"),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)(" The Current prototype version can be found "),(0,i._)("a",{target:"_blank",class:"MainLink",href:"https://www.github.com/ephedrandrox/balek"},"here")])],-1),s=a(805),r=a(999);const l={name:"Balek",data:function(){return{balekLogo:s.Z,digivigilLogo:r.Z}},components:{BalekInfo:a(803).Z}};a(39);const c=(0,a(744).Z)(l,[["render",function(e,n,a,s,r,l){var c=(0,i.up)("BalekInfo");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(c,{style:{border:"none",background:"none"}}),t])}]])},817:(e,n,a)=>{var i=a(818);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,a(346).Z)("2c1227b2",i,!1,{})},39:(e,n,a)=>{var i=a(734);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),(0,a(346).Z)("01a0723d",i,!1,{})}}]);
//# sourceMappingURL=component-balek.04c2382ce172dfc04883.js.map