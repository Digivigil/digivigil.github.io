(self.webpackChunkdigivigil_www_github=self.webpackChunkdigivigil_www_github||[]).push([[514],{757:(n,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>r});var o=e(537),a=e.n(o),t=e(645),l=e.n(t)()(a());l.push([n.id,"\n.digivigilMainDiv{\n  display: block;\n  position: relative;\n\n  text-align: center;\n  color:  #205377;\n  overflow: visible;\n}\n.MainInfoDiv{\n  padding: 3px;\n  padding-top: 10px;\n  font-size: 18pt;\n  position: relative;\n  vertical-align: middle;\n  margin: 0;\n  text-align: left;\n  display: block;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 20px;\n}\n#MainInfoAndLogo {\n  display: block;\n  margin: 0;\n  border: none;\n  padding: 0px;\n\n  padding-top : 10px;\n\n\n\n  margin-bottom: 40px;\n}\n#MainInfoDiv{\n  line-height: 18pt;\n  display: block;\n\n  text-align: left;\n\n  background: rgba(96, 95, 95, 0.3);\n  padding: 20px;\n\n  margin: auto;\n  font-size: 18pt;\n  white-space: normal;\n\n  display: inline-block;\n\n  text-align: center;\n  padding: 20px;\n  width: 100%;\n}\n.MainYouTubeDiv{\n\n  display: inline-block;\n  margin: auto;\n  margin-bottom: 40px;\n  margin-top: 20px;\n}\n.MainYoutubeVideoIframe{\n  display: block;\n  border: solid white 5px;\n  border-radius: 20px;\n  width: 80vw;\n  height: 45vw;\n}\n.MainRouterLink{\n  text-decoration: none;\n  font-weight: bold;\n  color: #205377\n}\n.MainRouterLink:hover{\n  color: #96170d\n}\n#digivigilMainTextLogo{\n  max-width: 30vw;\n}\n.mainLogoDiv {\n  position: relative;\n\n\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.8);\n  margin: auto;\n  padding: 30px;\n  border-radius: 40px;\n  border: solid 5px #205377;\n  border: none;\n  height: auto;\n  vertical-align: top;\n\n  margin-bottom: 30px;\n}\n\n","",{version:3,sources:["webpack://./src/components/digivigil/Main.vue"],names:[],mappings:";AAwDA;EACE,cAAc;EACd,kBAAkB;;EAElB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AAGnB;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,SAAS;EACT,gBAAgB;EAChB,cAAc;EACd,oCAAoC;EACpC,aAAa;AACf;AAEA;EACE,cAAc;EACd,SAAS;EACT,YAAY;EACZ,YAAY;;EAEZ,kBAAkB;;;;EAIlB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,cAAc;;EAEd,gBAAgB;;EAEhB,iCAAiC;EACjC,aAAa;;EAEb,YAAY;EACZ,eAAe;EACf,mBAAmB;;EAEnB,qBAAqB;;EAErB,kBAAkB;EAClB,aAAa;EACb,WAAW;AACb;AAGA;;EAEE,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAElB;AAGA;EACE,cAAc;EACd,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,iBAAiB;EACjB;AACF;AAEA;EACE;AACF;AAGA;EACE,eAAe;AAEjB;AAIA;EACE,kBAAkB;;;EAGlB,qBAAqB;EACrB,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,mBAAmB;;EAEnB,mBAAmB;AAErB",sourcesContent:['<template>\n  <div class="digivigilMainDiv">\n    <div id ="MainInfoAndLogo">\n\n          <div class="mainLogoDiv">\n            <img id="digivigilMainTextLogo" :src="DigivigilTextLogo"  alt="Digivigil"/>\n          </div>\n          <br/>\n\n    </div>\n\n\n    <div class="MainInfoDiv">To progress beyond a prototype stage that has been used successfully for internal tasks, <router-link to="balek" class="MainRouterLink">Balek</router-link> and <router-link to="diaplode" class="MainRouterLink">Diaplode</router-link> are transitioning to a release suitable for public adoption.\n      <br/>\n      <br/>\n      To achieve this goal I will be:\n      <ul>\n        <li>Refactoring from Javascript to TypesScript.</li>\n        <li>Updating Documentation</li>\n        <li>Creating Tests</li>\n      </ul>\n\n\n\n      <a target="_blank" class="MainLink" href="https://github.com/ephedrandrox/balek/">The current iterations</a> utilize the Dojo Toolkit to enable design patterns now available from language features. Causing the Dojo toolkit to lose much of it\'s value in the light of language and package progressions like Typescript and Babel.\n      <br/><br/>\n      As the Typescript conversion occurs, <a class="MainLink" href="/docs/">Documentation</a>, <a class="MainLink" href="/docs/jest-stare/">Tests</a>, and <a class="MainLink" href="/docs/coverage/">Test Coverage</a> reflecting the current state will be available.\n      <br/><br/>The repositories can be found <a target="_blank" class="MainLink" href="https://www.github.com/digivigil">on Github. </a> Where you can\n      👀 watch them if interested in release updates.<br/>\n\n    </div>\n\n  </div>\n</template>\n<script>\nimport digivigilLogo from \'./resources/digivigil.svg\'\nimport DigivigilTextLogo from \'./resources/DigivigilLogoText.svg\'\n\n\nimport BalekInfo from \'../balek/Info.vue\'\nimport DiaplodeInfo from \'../diaplode/Info.vue\'\n\nexport default {\n  name: "Digivigil",\n  data: function () {\n    return {\n      digivigilLogo: digivigilLogo,\n      DigivigilTextLogo: DigivigilTextLogo,\n    }\n  },\n  components: {\n    BalekInfo,DiaplodeInfo\n  }\n};\n<\/script>\n<style>\n.digivigilMainDiv{\n  display: block;\n  position: relative;\n\n  text-align: center;\n  color:  #205377;\n  overflow: visible;\n\n\n}\n\n.MainInfoDiv{\n  padding: 3px;\n  padding-top: 10px;\n  font-size: 18pt;\n  position: relative;\n  vertical-align: middle;\n  margin: 0;\n  text-align: left;\n  display: block;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 20px;\n}\n\n#MainInfoAndLogo {\n  display: block;\n  margin: 0;\n  border: none;\n  padding: 0px;\n\n  padding-top : 10px;\n\n\n\n  margin-bottom: 40px;\n}\n#MainInfoDiv{\n  line-height: 18pt;\n  display: block;\n\n  text-align: left;\n\n  background: rgba(96, 95, 95, 0.3);\n  padding: 20px;\n\n  margin: auto;\n  font-size: 18pt;\n  white-space: normal;\n\n  display: inline-block;\n\n  text-align: center;\n  padding: 20px;\n  width: 100%;\n}\n\n\n.MainYouTubeDiv{\n\n  display: inline-block;\n  margin: auto;\n  margin-bottom: 40px;\n  margin-top: 20px;\n\n}\n\n\n.MainYoutubeVideoIframe{\n  display: block;\n  border: solid white 5px;\n  border-radius: 20px;\n  width: 80vw;\n  height: 45vw;\n}\n.MainRouterLink{\n  text-decoration: none;\n  font-weight: bold;\n  color: #205377\n}\n\n.MainRouterLink:hover{\n  color: #96170d\n}\n\n\n#digivigilMainTextLogo{\n  max-width: 30vw;\n\n}\n\n\n\n.mainLogoDiv {\n  position: relative;\n\n\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.8);\n  margin: auto;\n  padding: 30px;\n  border-radius: 40px;\n  border: solid 5px #205377;\n  border: none;\n  height: auto;\n  vertical-align: top;\n\n  margin-bottom: 30px;\n\n}\n\n</style>'],sourceRoot:""}]);const r=l},468:(n,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>L});var o=e(252),a={class:"digivigilMainDiv"},t={id:"MainInfoAndLogo"},l={class:"mainLogoDiv"},r=["src"],A=(0,o._)("br",null,null,-1),s={class:"MainInfoDiv"},g=(0,o._)("br",null,null,-1),d=(0,o._)("br",null,null,-1),p=(0,o._)("ul",null,[(0,o._)("li",null,"Refactoring from Javascript to TypesScript."),(0,o._)("li",null,"Updating Documentation"),(0,o._)("li",null,"Creating Tests")],-1),c=(0,o._)("a",{target:"_blank",class:"MainLink",href:"https://github.com/ephedrandrox/balek/"},"The current iterations",-1),u=(0,o._)("br",null,null,-1),b=(0,o._)("br",null,null,-1),v=(0,o._)("a",{class:"MainLink",href:"/docs/"},"Documentation",-1),k=(0,o._)("a",{class:"MainLink",href:"/docs/jest-stare/"},"Tests",-1),B=(0,o._)("a",{class:"MainLink",href:"/docs/coverage/"},"Test Coverage",-1),f=(0,o._)("br",null,null,-1),h=(0,o._)("br",null,null,-1),m=(0,o._)("a",{target:"_blank",class:"MainLink",href:"https://www.github.com/digivigil"},"on Github. ",-1),E=(0,o._)("br",null,null,-1),C=e(999),x=e(809),w=e(159),D=e(783);const M={name:"Digivigil",data:function(){return{digivigilLogo:C.Z,DigivigilTextLogo:x.Z}},components:{BalekInfo:w.Z,DiaplodeInfo:D.Z}};e(879);const L=(0,e(744).Z)(M,[["render",function(n,i,e,C,x,w){var D=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",t,[(0,o._)("div",l,[(0,o._)("img",{id:"digivigilMainTextLogo",src:n.DigivigilTextLogo,alt:"Digivigil"},null,8,r)]),A]),(0,o._)("div",s,[(0,o.Uk)("To progress beyond a prototype stage that has been used successfully for internal tasks, "),(0,o.Wm)(D,{to:"balek",class:"MainRouterLink"},{default:(0,o.w5)((function(){return[(0,o.Uk)("Balek")]})),_:1}),(0,o.Uk)(" and "),(0,o.Wm)(D,{to:"diaplode",class:"MainRouterLink"},{default:(0,o.w5)((function(){return[(0,o.Uk)("Diaplode")]})),_:1}),(0,o.Uk)(" are transitioning to a release suitable for public adoption. "),g,d,(0,o.Uk)(" To achieve this goal I will be: "),p,c,(0,o.Uk)(" utilize the Dojo Toolkit to enable design patterns now available from language features. Causing the Dojo toolkit to lose much of it's value in the light of language and package progressions like Typescript and Babel. "),u,b,(0,o.Uk)(" As the Typescript conversion occurs, "),v,(0,o.Uk)(", "),k,(0,o.Uk)(", and "),B,(0,o.Uk)(" reflecting the current state will be available. "),f,h,(0,o.Uk)("The repositories can be found "),m,(0,o.Uk)(" Where you can 👀 watch them if interested in release updates."),E])])}]])},879:(n,i,e)=>{var o=e(757);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals),(0,e(346).Z)("d1d3aa30",o,!1,{})}}]);
//# sourceMappingURL=component-digivigil.d62601722f6457c445f6.js.map