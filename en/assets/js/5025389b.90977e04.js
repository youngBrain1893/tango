"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6586],{8712:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/08/30/welcome","metadata":{"permalink":"/tango/en/blog/2023/08/30/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-30-welcome/index.md","source":"@site/i18n/en/docusaurus-plugin-content-blog/2023-08-30-welcome/index.md","title":"Tango LowCode Builder Released!","description":"\ud83d\udcdd Introduction","date":"2023-08-30T00:00:00.000Z","formattedDate":"August 30, 2023","tags":[{"label":"netease","permalink":"/tango/en/blog/tags/netease"},{"label":"tango","permalink":"/tango/en/blog/tags/tango"},{"label":"open-source","permalink":"/tango/en/blog/tags/open-source"}],"readingTime":4.895,"hasTruncateMarker":false,"authors":[{"name":"Wells SUN","title":"Core maintainer","url":"https://github.com/wwsun","imageURL":"https://github.com/wwsun.png","key":"wwsun"}],"frontMatter":{"title":"Tango LowCode Builder Released!","authors":["wwsun"],"tags":["netease","tango","open-source"]}},"content":"## \ud83d\udcdd Introduction\\n\\nTango is a low-code designer framework for quickly building low-code platforms. With Tango, you only need a few lines of code to build a basic low-code platform frontend system. The Tango low-code designer directly reads the source code of the frontend project, executes and renders the frontend view based on the source code, and provides users with low-code visual building capabilities. User\'s building operations will be translated into modifications to the source code. With low-code tools or platforms built using Tango, it is possible to achieve the effect of \\"source code in, source code out\\" and seamlessly integrate with the existing R&D system within the enterprise.\\n\\n### \u2728 Features\\n\\n- After actual testing in the production environment of NetEase Cloud Music, it can be flexibly integrated and applied to low-code platforms, local development tools, and more.\\n- Driven by source code AST, with no private DSL and protocols.\\n- Provides real-time code output capability, supports source code input and output.\\n- Out-of-the-box front-end low-code designer, providing flexible and easy-to-use designer React components.\\n- Developed using TypeScript, providing complete type definition files.\\n\\n### \ud83c\udfd7\ufe0f Code-based Low-Code Solution\\n\\nDue to the fact that the engine kernel is completely based on the source code-driven implementation, Tango low-code engine can achieve the visualization building capability of source code input and source code output, without providing any private intermediate products. If the company already has a complete R&D system (code hosting, building, deployment, CDN), Tango low-code engine can be directly used to integrate with existing services to build a low-code development platform.\\n\\n<img src=\\"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/13140534982/ee2e/f42c/cc9a/184e2918a011b57d46e6c64a2722fa44.png\\" />\\n\\n### \ud83d\udcc4 Code in, Code out\\n\\n\u7531\u4e8e\u5f15\u64ce\u5185\u6838\u5b8c\u5168\u57fa\u4e8e\u6e90\u4ee3\u7801\u9a71\u52a8\u5b9e\u73b0\uff0cTango \u4f4e\u4ee3\u7801\u5f15\u64ce\u80fd\u591f\u5b9e\u73b0\u6e90\u4ee3\u7801\u8fdb\uff0c\u6e90\u4ee3\u7801\u51fa\u7684\u53ef\u89c6\u5316\u642d\u5efa\u80fd\u529b\uff0c\u4e0d\u63d0\u4f9b\u4efb\u4f55\u79c1\u6709\u7684\u4e2d\u95f4\u4ea7\u7269\u3002\u5982\u679c\u516c\u53f8\u5185\u90e8\u5df2\u7ecf\u6709\u4e86\u4e00\u5957\u5b8c\u5584\u7684\u7814\u53d1\u4f53\u7cfb\uff08\u4ee3\u7801\u6258\u7ba1\u3001\u6784\u5efa\u3001\u90e8\u7f72\u3001CDN\uff09\uff0c\u90a3\u4e48\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Tango \u4f4e\u4ee3\u7801\u5f15\u64ce\u4e0e\u73b0\u6709\u7684\u670d\u52a1\u96c6\u6210\u6784\u5efa\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u3002\\n\\n![code in, code out](./codein-codeout.png)\\n\\n### \ud83c\udfc6 Advantages\\n\\nCompared to the low-code building solution based on private schema, Tango low-code engine has the following advantages:\\n\\n| Comparison Items | Schema-base low-code solution | Tango (Code-based) |\\n| ---------------- | ----------------------------------------- | ------------------------------------------- |\\n| Applicable Scenarios | Targeted vertical building scenarios, such as forms, marketing pages, etc. | \ud83d\udd25 Applicable to application building scenarios centered on source code |\\n| Language Capabilities | Relies on private protocols for extension, inflexible, and difficult to align with programming language capabilities | \ud83d\udd25 Based directly on JavaScript language, can use all language features, no extensibility issues |\\n| Development Capability | LowCode | \ud83d\udd25 LowCode + ProCode |\\n| Source Code Export | Centered on schema, one-way code output, irreversible | \ud83d\udd25 Source code-centered, two-way transcoding |\\n| Custom Dependencies | Need to be encapsulated according to private protocol extension, high customization cost | \ud83d\udd25 Existing components can be seamlessly and low-cost integrated |\\n| Integrated R&D Facilities | High customization cost, additional customization required | \ud83d\udd25 Low-cost integration, can directly reuse existing deployment and publishing capabilities |\\n\\nThe specific technical architecture is shown in the following figure:\\n## \ud83d\udcd0 Architecture\\n\\nThe Tango low-code engine has been layered and decoupled in implementation, enabling independent development and maintenance of the upper-level low-code platform and the lower-level low-code engine, allowing for fast integration and deployment. In addition, Tango\'s low-code engine defines an open material ecosystem, allowing developers to freely contribute to extension components and configure property setters that enhance low-code materials.\\n\\nThe specific technical architecture is shown in the following diagram.\\n\\n![low-code engine](./lowocode-engine.png)\\n\\n## \u23f0 Milestones\\n\\nTango low-code engine is the core component of NetEase Cloud Music\'s internal low-code platform. Open sourcing involves a lot of decoupling work of core logic, which will bring us a lot of additional work in our normal work. Therefore, we plan to promote the open source of Tango low-code engine in stages.\\n\\n1. Today we officially released the first community version of Tango low-code engine, which will include the core code library of Tango low-code engine, TangoBoot application framework, and low-code component library adapted to antd v4.\\n2. We plan to release the 1.0 Beta version of the low-code engine on September 30th this year. This version will refactor the core implementation for community scenarios, remove some compatibility code we have internally in Cloud Music, and optimize the implementation of the core.\\n3. We plan to release the 1.0 RC version of the low-code engine on October 30th this year. This version will ensure that the core API is basically stable and no longer has BREAKING CHANGE. At the same time, we will provide comprehensive and detailed development guides, deployment documents, and demonstration applications.\\n4. The official version will be released before the end of Q4 2023, and we will further improve our open source community operation mechanism.\\n![milestones](./tango-milestones.png)\\n\\n## \ud83e\udd1d Community\\n\\nOur open source work is actively advancing, and you can learn about our latest progress through the following information:\\n\\n- Github Repository: <https://github.com/NetEase/tango>\\n- Documentation Site: <https://netease.github.io/tango/>\\n\\nWelcome everyone to join our community and participate in the open source construction of the Tango low-code engine. Any questions can be reported to us through [Github Issues](https://github.com/NetEase/tango/issues), and we will follow up and deal with them promptly.\\n\\n## \ud83d\udc97 Acknowledgements\\n\\nThanks to the Netease Cloud Music Public Technical Team, the Front-End Team, the Live Broadcasting Technical Team, and all the colleagues who participated in the Tango project.\\n\\nThanks to the Sandpack project provided by CodeSandbox, which provides powerful browser-based code building and execution capabilities for Tango."}]}')}}]);