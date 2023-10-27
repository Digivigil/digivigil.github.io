(self.webpackChunkdigivigil_www_github=self.webpackChunkdigivigil_www_github||[]).push([[845],{8162:(a,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var t=i(7537),s=i.n(t),n=i(3645),l=i.n(n)()(s());l.push([a.id,'\n.githubTasksGrid {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: 0 0;\n  grid-auto-flow: row;\n  grid-template-areas:\n    "githubTasksGridGravatar githubTasksGridTitle"\n    "githubTasksGridGravatar githubTasksGridDetails";\n  margin: auto;\n}\n@media (max-width: 300px) {\n.githubTasksGrid {\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto auto;\n    gap: 0 0;\n    grid-auto-flow: row;\n    grid-template-areas:\n      "githubTasksGridTitle githubTasksGridTitle"\n      "githubTasksGridGravatar githubTasksGridDetails";\n    margin: auto;\n}\n}\n.githubTasksGridTitle {\n  grid-area: githubTasksGridTitle;\n  padding: 3px;\n}\n.githubTasksGridGravatar {\n  grid-area: githubTasksGridGravatar;\n  padding: 3px;\n  display: flex;\n  align-items: center;\n}\n.githubTasksGridDetails {\n  grid-area: githubTasksGridDetails;\n  padding: 3px;\n  align-self: end;\n  max-width: 100%;\n  white-space: normal;\n}\n.githubTasksGridGravatarImage {\n  margin: 0 auto;\n}\n.githubTasks {\n  display: block;\n  position: relative;\n\n  text-align: left;\n  color: #205377;\n  overflow: visible;\n}\n.githubTask {\n  border: solid rgba(124, 173, 197, 0.4) 1px;\n  text-align: left;\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n\n  -webkit-box-shadow: 3px 0px 24px -6px rgba(189, 183, 189, 1);\n  -moz-box-shadow: 3px 0px 24px -6px rgba(189, 183, 189, 1);\n  box-shadow: 3px 0px 24px -6px rgba(189, 183, 189, 1);\n}\n.githubTaskDeletions {\n  text-align: left;\n  padding-left: 10px;\n  color: #96170d;\n}\n.githubTaskAdditions {\n  text-align: left;\n  color: darkolivegreen;\n}\n.githubTaskDate {\n  padding-left: 10px;\n  display: inline-block;\n\n  white-space: nowrap;\n}\n.githubTaskMessage {\n  padding-left: 10px;\n}\n.githubTaskFiles {\n  padding-left: 10px;\n  white-space: nowrap;\n}\n.githubTaskAuthor {\n  display: inline-block;\n}\n.githubTaskStats {\n  display: inline-block;\n}\n',"",{version:3,sources:["webpack://./src/github/components/Tasks.vue"],names:[],mappings:";AAyIA;EACE,aAAa;EACb,+BAA+B;EAC/B,6BAA6B;EAC7B,QAAQ;EACR,mBAAmB;EACnB;;oDAEkD;EAClD,YAAY;AACd;AAEA;AACE;IACE,+BAA+B;IAC/B,6BAA6B;IAC7B,QAAQ;IACR,mBAAmB;IACnB;;sDAEkD;IAClD,YAAY;AACd;AACF;AAEA;EACE,+BAA+B;EAC/B,YAAY;AACd;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;AAEA;EACE,cAAc;AAChB;AAEA;EACE,cAAc;EACd,kBAAkB;;EAElB,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,0CAA0C;EAC1C,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,kBAAkB;;EAElB,4DAA4D;EAC5D,yDAAyD;EACzD,oDAAoD;AACtD;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,qBAAqB;;EAErB,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AAEA;EACE,qBAAqB;AACvB;AAEA;EACE,qBAAqB;AACvB",sourcesContent:['<template>\n  <div class="githubTasks">\n    <a\n      style="color: #14aff1"\n      v-bind:href="GithubData.Projects.url"\n      target="_blank"\n      >{{ GithubData.Projects.title }}</a\n    ><br />\n    {{ GithubData.Projects.shortDescription }}\n    <h3 v-if="GithubData.Projects.inProgressItems.length > 0">In Progress:</h3>\n    <div\n      v-if="GithubData.Projects.inProgressItems.length > 0"\n      class="githubTask"\n      v-for="item in GithubData.Projects.inProgressItems"\n    >\n      <div\n        class="githubTasksGrid"\n        v-if="item.item.content && item.name && item.item.content.bodyHTML"\n      >\n        <div class="githubTasksGridTitle">\n          <a\n            style="color: #14aff1"\n            v-if="item.item.content.url"\n            v-bind:href="item.item.content.url"\n            target="_blank"\n            ><div class="githubTaskMessage">{{ item.name }}</div></a\n          >\n        </div>\n\n        <div class="githubTasksGridGravatar">\n          \x3c!--            <img--\x3e\n          \x3c!--              class="githubTasksGridGravatarImage"--\x3e\n          \x3c!--              v-bind:src="data.author.gravatarImageSrc"--\x3e\n          \x3c!--              alt="Gravatar"--\x3e\n          \x3c!--            />--\x3e\n        </div>\n\n        <div class="githubTasksGridDetails">\n          <div v-html="item.item.content.bodyHTML"></div>\n          <div class="githubTaskDate">\n            \x3c!--              📅--\x3e\n            \x3c!--              {{--\x3e\n            \x3c!--                new Date(data.committedDate).toLocaleDateString("en-us", {--\x3e\n            \x3c!--                  year: "numeric",--\x3e\n            \x3c!--                  month: "short",--\x3e\n            \x3c!--                  day: "numeric",--\x3e\n            \x3c!--                })--\x3e\n            \x3c!--              }}--\x3e\n          </div>\n\n          <div class="githubTaskStats">\n            \x3c!--              <span class="githubTaskAdditions"--\x3e\n            \x3c!--                >&nbsp &nbsp+{{ data.additions }}</span--\x3e\n            \x3c!--              >--\x3e\n            \x3c!--              <span class="githubTaskDeletions">-{{ data.deletions }}</span>--\x3e\n            \x3c!--              <span class="githubTaskFiles"--\x3e\n            \x3c!--                >📝{{ data.changedFilesIfAvailable }}--\x3e\n            \x3c!--              </span>--\x3e\n          </div>\n          \x3c!--            <div class="githubTaskAuthor">&nbsp ✍️{{ data.author.name }}</div>--\x3e\n        </div>\n      </div>\n    </div>\n    <h3>On Deck:</h3>\n    <div>\n      <div class="githubTask" v-for="item in GithubData.Projects.onDeckItems">\n        <div\n          class="githubTasksGrid"\n          v-if="item.item.content && item.name && item.item.content.bodyHTML"\n        >\n          <div class="githubTasksGridTitle">\n            <a\n              style="color: #14aff1"\n              v-if="item.item.content.url"\n              v-bind:href="item.item.content.url"\n              target="_blank"\n              ><div class="githubTaskMessage">{{ item.name }}</div></a\n            >\n          </div>\n\n          <div class="githubTasksGridGravatar">\n            \x3c!--            <img--\x3e\n            \x3c!--              class="githubTasksGridGravatarImage"--\x3e\n            \x3c!--              v-bind:src="data.author.gravatarImageSrc"--\x3e\n            \x3c!--              alt="Gravatar"--\x3e\n            \x3c!--            />--\x3e\n          </div>\n\n          <div class="githubTasksGridDetails">\n            <div v-html="item.item.content.bodyHTML"></div>\n            <div class="githubTaskDate">\n              \x3c!--              📅--\x3e\n              \x3c!--              {{--\x3e\n              \x3c!--                new Date(data.committedDate).toLocaleDateString("en-us", {--\x3e\n              \x3c!--                  year: "numeric",--\x3e\n              \x3c!--                  month: "short",--\x3e\n              \x3c!--                  day: "numeric",--\x3e\n              \x3c!--                })--\x3e\n              \x3c!--              }}--\x3e\n            </div>\n\n            <div class="githubTaskStats">\n              \x3c!--              <span class="githubTaskAdditions"--\x3e\n              \x3c!--                >&nbsp &nbsp+{{ data.additions }}</span--\x3e\n              \x3c!--              >--\x3e\n              \x3c!--              <span class="githubTaskDeletions">-{{ data.deletions }}</span>--\x3e\n              \x3c!--              <span class="githubTaskFiles"--\x3e\n              \x3c!--                >📝{{ data.changedFilesIfAvailable }}--\x3e\n              \x3c!--              </span>--\x3e\n            </div>\n            \x3c!--            <div class="githubTaskAuthor">&nbsp ✍️{{ data.author.name }}</div>--\x3e\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n<script>\nimport GithubData from "../data.json";\n\nexport default {\n  name: "GithubCommits",\n  data: function () {\n    return {\n      GithubData: GithubData,\n    };\n  },\n  props: {\n    GithubData: {\n      type: String,\n      required: true,\n    },\n  },\n  mounted: function () {},\n};\n<\/script>\n<style>\n.githubTasksGrid {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: 0 0;\n  grid-auto-flow: row;\n  grid-template-areas:\n    "githubTasksGridGravatar githubTasksGridTitle"\n    "githubTasksGridGravatar githubTasksGridDetails";\n  margin: auto;\n}\n\n@media (max-width: 300px) {\n  .githubTasksGrid {\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto auto;\n    gap: 0 0;\n    grid-auto-flow: row;\n    grid-template-areas:\n      "githubTasksGridTitle githubTasksGridTitle"\n      "githubTasksGridGravatar githubTasksGridDetails";\n    margin: auto;\n  }\n}\n\n.githubTasksGridTitle {\n  grid-area: githubTasksGridTitle;\n  padding: 3px;\n}\n\n.githubTasksGridGravatar {\n  grid-area: githubTasksGridGravatar;\n  padding: 3px;\n  display: flex;\n  align-items: center;\n}\n\n.githubTasksGridDetails {\n  grid-area: githubTasksGridDetails;\n  padding: 3px;\n  align-self: end;\n  max-width: 100%;\n  white-space: normal;\n}\n\n.githubTasksGridGravatarImage {\n  margin: 0 auto;\n}\n\n.githubTasks {\n  display: block;\n  position: relative;\n\n  text-align: left;\n  color: #205377;\n  overflow: visible;\n}\n.githubTask {\n  border: solid rgba(124, 173, 197, 0.4) 1px;\n  text-align: left;\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n\n  -webkit-box-shadow: 3px 0px 24px -6px rgba(189, 183, 189, 1);\n  -moz-box-shadow: 3px 0px 24px -6px rgba(189, 183, 189, 1);\n  box-shadow: 3px 0px 24px -6px rgba(189, 183, 189, 1);\n}\n.githubTaskDeletions {\n  text-align: left;\n  padding-left: 10px;\n  color: #96170d;\n}\n.githubTaskAdditions {\n  text-align: left;\n  color: darkolivegreen;\n}\n.githubTaskDate {\n  padding-left: 10px;\n  display: inline-block;\n\n  white-space: nowrap;\n}\n.githubTaskMessage {\n  padding-left: 10px;\n}\n\n.githubTaskFiles {\n  padding-left: 10px;\n  white-space: nowrap;\n}\n\n.githubTaskAuthor {\n  display: inline-block;\n}\n\n.githubTaskStats {\n  display: inline-block;\n}\n</style>\n'],sourceRoot:""}]);const d=l},8845:(a,e,i)=>{"use strict";i.d(e,{Z:()=>F});var t=i(6252),s=i(3577),n={class:"githubTasks"},l=["href"],d=(0,t._)("br",null,null,-1),c={key:0},r={class:"githubTask"},o={key:0,class:"githubTasksGrid"},g={class:"githubTasksGridTitle"},m=["href"],b={class:"githubTaskMessage"},u=(0,t._)("div",{class:"githubTasksGridGravatar"},[(0,t.kq)("            <img"),(0,t.kq)('              class="githubTasksGridGravatarImage"'),(0,t.kq)('              v-bind:src="data.author.gravatarImageSrc"'),(0,t.kq)('              alt="Gravatar"'),(0,t.kq)("            />")],-1),h={class:"githubTasksGridDetails"},p=["innerHTML"],k=(0,t._)("div",{class:"githubTaskDate"},[(0,t.kq)("              📅"),(0,t.kq)("              {{"),(0,t.kq)('                new Date(data.committedDate).toLocaleDateString("en-us", {'),(0,t.kq)('                  year: "numeric",'),(0,t.kq)('                  month: "short",'),(0,t.kq)('                  day: "numeric",'),(0,t.kq)("                })"),(0,t.kq)("              }}")],-1),v=(0,t._)("div",{class:"githubTaskStats"},[(0,t.kq)('              <span class="githubTaskAdditions"'),(0,t.kq)("                >&nbsp &nbsp+{{ data.additions }}</span"),(0,t.kq)("              >"),(0,t.kq)('              <span class="githubTaskDeletions">-{{ data.deletions }}</span>'),(0,t.kq)('              <span class="githubTaskFiles"'),(0,t.kq)("                >📝{{ data.changedFilesIfAvailable }}"),(0,t.kq)("              </span>")],-1),A=(0,t._)("h3",null,"On Deck:",-1),f={class:"githubTask"},D={key:0,class:"githubTasksGrid"},T={class:"githubTasksGridTitle"},x=["href"],B={class:"githubTaskMessage"},I=(0,t._)("div",{class:"githubTasksGridGravatar"},[(0,t.kq)("            <img"),(0,t.kq)('              class="githubTasksGridGravatarImage"'),(0,t.kq)('              v-bind:src="data.author.gravatarImageSrc"'),(0,t.kq)('              alt="Gravatar"'),(0,t.kq)("            />")],-1),w={class:"githubTasksGridDetails"},C=["innerHTML"],G=(0,t._)("div",{class:"githubTaskDate"},[(0,t.kq)("              📅"),(0,t.kq)("              {{"),(0,t.kq)('                new Date(data.committedDate).toLocaleDateString("en-us", {'),(0,t.kq)('                  year: "numeric",'),(0,t.kq)('                  month: "short",'),(0,t.kq)('                  day: "numeric",'),(0,t.kq)("                })"),(0,t.kq)("              }}")],-1),y=(0,t._)("div",{class:"githubTaskStats"},[(0,t.kq)('              <span class="githubTaskAdditions"'),(0,t.kq)("                >&nbsp &nbsp+{{ data.additions }}</span"),(0,t.kq)("              >"),(0,t.kq)('              <span class="githubTaskDeletions">-{{ data.deletions }}</span>'),(0,t.kq)('              <span class="githubTaskFiles"'),(0,t.kq)("                >📝{{ data.changedFilesIfAvailable }}"),(0,t.kq)("              </span>")],-1),_=i(6464);const P={name:"GithubCommits",data:function(){return{GithubData:_}},props:{GithubData:{type:String,required:!0}},mounted:function(){}};i(3305);const F=(0,i(3744).Z)(P,[["render",function(a,e,i,_,P,F){return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("a",{style:{color:"#14aff1"},href:i.GithubData.Projects.url,target:"_blank"},(0,s.zw)(i.GithubData.Projects.title),9,l),d,(0,t.Uk)(" "+(0,s.zw)(i.GithubData.Projects.shortDescription)+" ",1),i.GithubData.Projects.inProgressItems.length>0?((0,t.wg)(),(0,t.iD)("h3",c,"In Progress:")):(0,t.kq)("v-if",!0),i.GithubData.Projects.inProgressItems.length>0?((0,t.wg)(!0),(0,t.iD)(t.HY,{key:1},(0,t.Ko)(i.GithubData.Projects.inProgressItems,(function(a){return(0,t.wg)(),(0,t.iD)("div",r,[a.item.content&&a.name&&a.item.content.bodyHTML?((0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",g,[a.item.content.url?((0,t.wg)(),(0,t.iD)("a",{key:0,style:{color:"#14aff1"},href:a.item.content.url,target:"_blank"},[(0,t._)("div",b,(0,s.zw)(a.name),1)],8,m)):(0,t.kq)("v-if",!0)]),u,(0,t._)("div",h,[(0,t._)("div",{innerHTML:a.item.content.bodyHTML},null,8,p),k,v,(0,t.kq)('            <div class="githubTaskAuthor">&nbsp ✍️{{ data.author.name }}</div>')])])):(0,t.kq)("v-if",!0)])})),256)):(0,t.kq)("v-if",!0),A,(0,t._)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.GithubData.Projects.onDeckItems,(function(a){return(0,t.wg)(),(0,t.iD)("div",f,[a.item.content&&a.name&&a.item.content.bodyHTML?((0,t.wg)(),(0,t.iD)("div",D,[(0,t._)("div",T,[a.item.content.url?((0,t.wg)(),(0,t.iD)("a",{key:0,style:{color:"#14aff1"},href:a.item.content.url,target:"_blank"},[(0,t._)("div",B,(0,s.zw)(a.name),1)],8,x)):(0,t.kq)("v-if",!0)]),I,(0,t._)("div",w,[(0,t._)("div",{innerHTML:a.item.content.bodyHTML},null,8,C),G,y,(0,t.kq)('            <div class="githubTaskAuthor">&nbsp ✍️{{ data.author.name }}</div>')])])):(0,t.kq)("v-if",!0)])})),256))])])}]])},3305:(a,e,i)=>{var t=i(8162);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[a.id,t,""]]),t.locals&&(a.exports=t.locals),(0,i(5346).Z)("2f579ab2",t,!1,{})},6464:a=>{"use strict";a.exports=JSON.parse('{"balekProjectsData":{"id":"PVT_kwHOBhIlFc4ANPDI","title":"Balek Pre-Alpha Roadmap","readme":"Project page for Pre-Alpha stage that will complete a Typescript Pre-Alpha release of the prototype Balek Javascript framework","onDeckItems":[{"item":{"id":"PVTI_lAHOBhIlFc4ANPDIzgFafCI","content":{"__typename":"Issue","title":"Create Stateful Module","bodyHTML":"<p dir=\\"auto\\">Stateful Module will be used throughout the framework for Observable patterns</p>","bodyUrl":"https://github.com/Digivigil/Balek/issues/1#issue-1620526148","url":"https://github.com/Digivigil/Balek/issues/1"},"fieldValues":{"nodes":[{"field":{"__typename":"ProjectV2Field"},"repository":{"name":"Balek"},"__typename":"ProjectV2ItemFieldRepositoryValue"},{"id":"PVTFTV_lQHOBhIlFc4ANPDIzgFafCLOA7V6rg","text":"Create Stateful Module","__typename":"ProjectV2ItemFieldTextValue"},{"id":"PVTFSV_lQHOBhIlFc4ANPDIzgFafCLOA7V6rw","name":"On Deck","__typename":"ProjectV2ItemFieldSingleSelectValue"}]}},"name":"Create Stateful Module"},{"item":{"id":"PVTI_lAHOBhIlFc4ANPDIzgFgCWA","content":{"__typename":"Issue","title":"Create NPM","bodyHTML":"<ul class=\\"contains-task-list\\">\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Create an NPM Module</li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Package Configuration Module</li>\\n</ul>","bodyUrl":"https://github.com/Digivigil/Balek/issues/3#issue-1670082924","url":"https://github.com/Digivigil/Balek/issues/3"},"fieldValues":{"nodes":[{"field":{"__typename":"ProjectV2Field"},"repository":{"name":"Balek"},"__typename":"ProjectV2ItemFieldRepositoryValue"},{"id":"PVTFTV_lQHOBhIlFc4ANPDIzgFgCWDOA8USnA","text":"Create NPM","__typename":"ProjectV2ItemFieldTextValue"},{"id":"PVTFSV_lQHOBhIlFc4ANPDIzgFgCWDOA8USnQ","name":"On Deck","__typename":"ProjectV2ItemFieldSingleSelectValue"}]}},"name":"Create NPM"}],"inProgressItems":[{"item":{"id":"PVTI_lAHOBhIlFc4ANPDIzgFcdPg","content":{"__typename":"Issue","title":"Create Configure Module","bodyHTML":"<ul class=\\"contains-task-list\\">\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\" checked=\\"\\"> Create importable configure instance singleton</li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Create Tests</li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Pass Tests</li>\\n</ul>","bodyUrl":"https://github.com/Digivigil/Balek/issues/2#issue-1670082891","url":"https://github.com/Digivigil/Balek/issues/2"},"fieldValues":{"nodes":[{"field":{"__typename":"ProjectV2Field"},"repository":{"name":"Balek"},"__typename":"ProjectV2ItemFieldRepositoryValue"},{"id":"PVTFTV_lQHOBhIlFc4ANPDIzgFcdPjOA7sYew","text":"Create Configure Module","__typename":"ProjectV2ItemFieldTextValue"},{"id":"PVTFSV_lQHOBhIlFc4ANPDIzgFcdPjOA7sYfA","name":"In Progress","__typename":"ProjectV2ItemFieldSingleSelectValue"}]}},"name":"Create Configure Module"}]},"balekIssuesData":[{"title":"Create Stateful Module","number":1,"url":"https://github.com/Digivigil/Balek/issues/1","createdAt":"2023-03-12T21:58:06Z","author":{"login":"Digivigil"},"labels":{"nodes":[]}},{"title":"Create Configure Module","number":2,"url":"https://github.com/Digivigil/Balek/issues/2","createdAt":"2023-04-16T18:31:13Z","author":{"login":"Digivigil"},"labels":{"nodes":[]}},{"title":"Create NPM","number":3,"url":"https://github.com/Digivigil/Balek/issues/3","createdAt":"2023-04-16T18:31:19Z","author":{"login":"Digivigil"},"labels":{"nodes":[]}}],"balekCommitsData":[{"oid":"4ec55b2f7827f31f913c498a11abc06a45a07863","changedFilesIfAvailable":2,"commitUrl":"https://github.com/Digivigil/Balek/commit/4ec55b2f7827f31f913c498a11abc06a45a07863","message":"import update","committedDate":"2023-08-25T21:21:43Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":2,"deletions":2},{"oid":"6a0c1a801a919a7bb27b89af7a5f4202a0af36d0","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Balek/commit/6a0c1a801a919a7bb27b89af7a5f4202a0af36d0","message":"version update in package","committedDate":"2023-08-25T21:14:28Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":1,"deletions":1},{"oid":"98c38768e9feaedbad04e5a19816f2c773333e4f","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Balek/commit/98c38768e9feaedbad04e5a19816f2c773333e4f","message":"Updated dependencies","committedDate":"2023-08-25T21:11:54Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":5,"deletions":3},{"oid":"3ed605f556fa4684091aa4a26b48c6e10864b59d","changedFilesIfAvailable":6,"commitUrl":"https://github.com/Digivigil/Balek/commit/3ed605f556fa4684091aa4a26b48c6e10864b59d","message":"export update","committedDate":"2023-08-25T06:23:00Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":57,"deletions":15},{"oid":"8004733eca1515a91742ed9bb692264ea34d379e","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Balek/commit/8004733eca1515a91742ed9bb692264ea34d379e","message":"export update","committedDate":"2023-08-25T06:20:40Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":0,"deletions":0},{"oid":"d224c8ad8d015d715ca1d3d2366436a3b75cfaac","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Balek/commit/d224c8ad8d015d715ca1d3d2366436a3b75cfaac","message":"Ignore Update","committedDate":"2023-02-23T04:46:45Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":4,"deletions":1},{"oid":"87dd836e3beac8d2736244b969f101957e10f91a","changedFilesIfAvailable":2,"commitUrl":"https://github.com/Digivigil/Balek/commit/87dd836e3beac8d2736244b969f101957e10f91a","message":"Package Update","committedDate":"2023-02-23T04:44:26Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":431,"deletions":246},{"oid":"49f823968488c1a3691758315e9dd6d83a912afc","changedFilesIfAvailable":4,"commitUrl":"https://github.com/Digivigil/Balek/commit/49f823968488c1a3691758315e9dd6d83a912afc","message":"eslint javascript remove and packages.json update","committedDate":"2023-02-17T00:35:58Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":12,"deletions":108},{"oid":"53f614e55d6d30a8a22bd993c12671b09fa648ba","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Balek/commit/53f614e55d6d30a8a22bd993c12671b09fa648ba","message":"package-lock update","committedDate":"2023-02-16T23:18:56Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":516,"deletions":7990},{"oid":"8a4d7feff4b42c2669a90c453bc95cca69d1ca87","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Balek/commit/8a4d7feff4b42c2669a90c453bc95cca69d1ca87","message":"link update","committedDate":"2023-02-16T23:12:27Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":1,"deletions":1},{"oid":"c82eaae471cf7b7d078718eec78ee2a3e8593fc6","changedFilesIfAvailable":44,"commitUrl":"https://github.com/Digivigil/Balek/commit/c82eaae471cf7b7d078718eec78ee2a3e8593fc6","message":"Typescript update with Tests and Documentation\\n\\nBegan building the refactored Instance, IO, and Configuration Modules","committedDate":"2023-02-16T23:10:57Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":19296,"deletions":60},{"oid":"8a53c1c9b78090134d464c45c8d65e14fc87b549","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Balek/commit/8a53c1c9b78090134d464c45c8d65e14fc87b549","message":"Return of the Carriage","committedDate":"2023-01-02T22:25:05Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":2,"deletions":1},{"oid":"c2b36d9a1d2d08c7fe38efde6a135062956817e1","changedFilesIfAvailable":3,"commitUrl":"https://github.com/Digivigil/Balek/commit/c2b36d9a1d2d08c7fe38efde6a135062956817e1","message":"PNG Update","committedDate":"2023-01-02T22:23:56Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":3,"deletions":3},{"oid":"5bd53aba41013d51d76798ab7e0ca5ddd92933b7","changedFilesIfAvailable":4,"commitUrl":"https://github.com/Digivigil/Balek/commit/5bd53aba41013d51d76798ab7e0ca5ddd92933b7","message":"Update","committedDate":"2023-01-02T21:48:22Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":48,"deletions":1},{"oid":"cb54678ded35240a3af9505c0362ebd5f841ae04","changedFilesIfAvailable":2,"commitUrl":"https://github.com/Digivigil/Balek/commit/cb54678ded35240a3af9505c0362ebd5f841ae04","message":"Capitalized and ignored","committedDate":"2022-07-06T04:31:07Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":3,"deletions":1},{"oid":"ddd54e18da2ed84698eef21069d22cd10fc8453c","changedFilesIfAvailable":2,"commitUrl":"https://github.com/Digivigil/Balek/commit/ddd54e18da2ed84698eef21069d22cd10fc8453c","message":"Initial commit","committedDate":"2022-07-06T04:22:00Z","author":{"name":"Digivigil","email":"101852437+Digivigil@users.noreply.github.com","gravatarImageSrc":"https://www.gravatar.com/avatar/8456f13cbc598238e17f74db3250108a"},"additions":31,"deletions":0}],"diaplodeProjectsData":{"id":"PVT_kwHOBhIlFc4AO6l-","title":"Diaplode Pre-Alpha Roadmap","readme":null,"onDeckItems":[{"item":{"id":"PVTI_lAHOBhIlFc4AO6l-zgGJJx4","content":{"__typename":"Issue","title":"Create npm source tree","bodyHTML":"<p dir=\\"auto\\">Waiting until Balek has become an NPM Module to began rebuilding Diaplode in Typescript</p>\\n<ul class=\\"contains-task-list\\">\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Create package.json</li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Install/configure for Typescript</li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Install/configure Linter/Formatter</li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Create source and build boilerplate</li>\\n<li class=\\"task-list-item\\"><input type=\\"checkbox\\" id=\\"\\" disabled=\\"\\" class=\\"task-list-item-checkbox\\"> Create package.json Build Scripts</li>\\n</ul>","bodyUrl":"https://github.com/Digivigil/Diaplode/issues/1#issue-1670026752","url":"https://github.com/Digivigil/Diaplode/issues/1"},"fieldValues":{"nodes":[{"field":{"__typename":"ProjectV2Field"},"repository":{"name":"Diaplode"},"__typename":"ProjectV2ItemFieldRepositoryValue"},{"id":"PVTFTV_lQHOBhIlFc4AO6l-zgGJJx7OBDaHqw","text":"Create npm source tree","__typename":"ProjectV2ItemFieldTextValue"},{"id":"PVTFSV_lQHOBhIlFc4AO6l-zgGJJx7OBDaHrA","name":"On Deck","__typename":"ProjectV2ItemFieldSingleSelectValue"}]}},"name":"Create npm source tree"},{"item":{"id":"PVTI_lAHOBhIlFc4AO6l-zgGJLcg","content":{"__typename":"Issue","title":"Create Documentation","bodyHTML":"<p dir=\\"auto\\">Create Documentation Boilerplate and Roadmap</p>","bodyUrl":"https://github.com/Digivigil/Diaplode/issues/2#issue-1670043704","url":"https://github.com/Digivigil/Diaplode/issues/2"},"fieldValues":{"nodes":[{"field":{"__typename":"ProjectV2Field"},"repository":{"name":"Diaplode"},"__typename":"ProjectV2ItemFieldRepositoryValue"},{"id":"PVTFTV_lQHOBhIlFc4AO6l-zgGJLcjOBDaadw","text":"Create Documentation","__typename":"ProjectV2ItemFieldTextValue"},{"id":"PVTFSV_lQHOBhIlFc4AO6l-zgGJLcjOBDaaeA","name":"On Deck","__typename":"ProjectV2ItemFieldSingleSelectValue"}]}},"name":"Create Documentation"}],"inProgressItems":[]},"diaplodeIssuesData":[{"title":"Create npm source tree","number":1,"url":"https://github.com/Digivigil/Diaplode/issues/1","createdAt":"2023-04-16T15:57:43Z","author":{"login":"Digivigil"},"labels":{"nodes":[]}},{"title":"Create Documentation","number":2,"url":"https://github.com/Digivigil/Diaplode/issues/2","createdAt":"2023-04-16T16:52:17Z","author":{"login":"Digivigil"},"labels":{"nodes":[]}}],"diaplodeCommitsData":[{"oid":"9136aab1d4a04307d17acd76516e9eb4d2c73208","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Diaplode/commit/9136aab1d4a04307d17acd76516e9eb4d2c73208","message":"Update","committedDate":"2023-01-02T23:19:25Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":1,"deletions":1},{"oid":"1fa7bbce305145d2af446388b98f1c52121ef2f5","changedFilesIfAvailable":4,"commitUrl":"https://github.com/Digivigil/Diaplode/commit/1fa7bbce305145d2af446388b98f1c52121ef2f5","message":"PNG Update","committedDate":"2023-01-02T22:23:36Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":8,"deletions":3},{"oid":"aa413780d6a295e6a5ac3f8f998fe058d5fd1681","changedFilesIfAvailable":1,"commitUrl":"https://github.com/Digivigil/Diaplode/commit/aa413780d6a295e6a5ac3f8f998fe058d5fd1681","message":"size change","committedDate":"2023-01-02T22:09:41Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":1,"deletions":1},{"oid":"1797e9060bda7083d59990c51f9d6e2f368db14a","changedFilesIfAvailable":6,"commitUrl":"https://github.com/Digivigil/Diaplode/commit/1797e9060bda7083d59990c51f9d6e2f368db14a","message":"Update","committedDate":"2023-01-02T22:06:04Z","author":{"name":"Blake Glanville","email":"blake@digivigil.com","gravatarImageSrc":"https://www.gravatar.com/avatar/cc27276fc864a56ba21217a6d1853a2e"},"additions":37,"deletions":2},{"oid":"cf7631c3bd6e11e1c69944186e4875e57d83647d","changedFilesIfAvailable":2,"commitUrl":"https://github.com/Digivigil/Diaplode/commit/cf7631c3bd6e11e1c69944186e4875e57d83647d","message":"Initial commit","committedDate":"2023-01-02T20:37:44Z","author":{"name":"Digivigil","email":"101852437+Digivigil@users.noreply.github.com","gravatarImageSrc":"https://www.gravatar.com/avatar/8456f13cbc598238e17f74db3250108a"},"additions":30,"deletions":0}]}')}}]);
//# sourceMappingURL=845.b99188a6058c718aff55.js.map