!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="2acb3a46-ef19-472f-abbf-937bbc17a821",e._sentryDebugIdIdentifier="sentry-dbid-2acb3a46-ef19-472f-abbf-937bbc17a821")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"83fc2cd4"};"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5601],{52017:function(e,n,t){t.d(n,{Z:function(){return ev}});var o,r,i=t(66626),l=t(3796),s=t(43769),u=t(99595),a=t(79904),d=t(24766),c=t(93245),p=t(61010),m=t(63163),h=t(41733),f=t(21262),v=t(71440),b=t(82303);function Z(){var e=(0,f._)(["\n  mutation HidePostToggleHiddenPost($postId: Int!, $isHidden: Boolean!) {\n    toggleHiddenPost(postId: $postId, isHidden: $isHidden) {\n      ... on Post {\n        id\n        isHidden\n      }\n      ... on NotFoundError {\n        message\n      }\n      ... on UserError {\n        message\n      }\n    }\n  }\n"]);return Z=function(){return e},e}var g={},w=(0,v.Ps)(Z()),y=c.K.form;function C(e){var n,t,o=e.post,r=e.onDone,s=(0,u.Z)(),f=s.showConfirm,v=s.showError,Z=(0,i._)((n={variables:{postId:o.id,isHidden:!o.isHidden},onCompleted:function(e){"Post"===e.toggleHiddenPost.__typename?o.isHidden?f("Post removed from the community."):f("Post allowed on community."):"NotFoundError"===e.toggleHiddenPost.__typename||"UserError"===e.toggleHiddenPost.__typename?v(e.toggleHiddenPost.message):v("An unexpected error occurred."),r()},onError:function(){v("Something went wrong. Please try again.")}},t=(0,h._)({},g,n),b.D(w,t)),2),C=Z[0],D=Z[1].loading,_=o.isHidden?"Yes, show this post":"Yes, hide this post",T=o.isHidden?"Showing...":"Hiding...",R=o.isHidden?"Show this post to the Community":"Hide this post from the Community";return(0,l.BX)(c.G,{css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(d.xv,{variant:"subheadBig",children:R}),(0,l.BX)(y,{onSubmit:function(e){e.preventDefault(),C()},css:[m.l0.colWithGap(32)],children:[(0,l.tZ)(d.xv,{children:"Hiding a post will remove it from the Community feeds, but the post will still be viewable to the creator. Showing a post will make it so all users will be able to discover this post though community feeds."}),(0,l.BX)(c.G,{css:[m.l0.rowWithGap(8),m.l0.justify.end],children:[(0,l.tZ)(c.G,{children:(0,l.tZ)(a.zx,{type:"button",text:"Cancel",onClick:r})}),(0,l.tZ)(c.G,{children:(0,l.tZ)(a.zx,{disabled:D,colorway:"negative",text:D?T:_,type:"submit",iconLeft:(0,l.tZ)(p.Z,{})})})]})]})]})}var D=t(44935),_=t(84e3),T=t(75271);function R(){var e=(0,f._)(["\n  mutation BanUserFromCommunity($username: String!, $reason: String!) {\n    banCommunityUser(username: $username, reason: $reason) {\n      ... on BannedBoardUser {\n        id\n      }\n      ... on UserError {\n        message\n      }\n    }\n  }\n"]);return R=function(){return e},e}var G={},x=(0,v.Ps)(R()),E=c.K.form;function P(e){var n,t=e.username,o=e.onDone,r=(0,i._)((0,T.useState)(""),2),s=r[0],p=r[1],f=(0,u.Z)(),v=f.showConfirm,Z=f.showError,g=(0,i._)((n=(0,h._)({},G,{onCompleted:function(e){var n=e.banCommunityUser;"UserError"===n.__typename?Z(n.message):v("The user has been banned.")}}),b.D(x,n)),2),w=g[0],y=g[1].loading;return(0,l.BX)(c.G,{css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(d.h4,{level:1,variant:"headerDefault",children:"Ban the author of the Repl?"}),(0,l.tZ)(d.xv,{children:"Are you sure you want to ban this user? All their Repls will be deleted and they will no longer be able to access their account."}),(0,l.BX)(E,{onSubmit:function(e){e.preventDefault(),s&&t?(w({variables:{username:t,reason:s}}),o()):Z("Please provide a reason.")},css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(c.G,{css:[m.l0.colWithGap(8)],children:(0,l.tZ)(D.B,{placeholder:"Reason for banning the user",value:s,onChange:function(e){return p(e.currentTarget.value)},css:{resize:"none",minHeight:40}})}),(0,l.BX)(c.G,{css:[m.l0.rowWithGap(8),m.l0.justify.end],children:[(0,l.tZ)(a.zx,{type:"button",text:"Cancel",onClick:function(){return o()}}),(0,l.tZ)(a.zx,{disabled:y,colorway:"negative",text:y?"Banning user...":"Yes, ban this user",type:"submit",iconLeft:(0,l.tZ)(_.Z,{})})]})]})]})}var B=t(25);function H(){var e=(0,f._)(["\n  mutation ReportRepl($replId: String, $reason: String!) {\n    createBoardReport(replId: $replId, reason: $reason) {\n      id\n    }\n  }\n"]);return H=function(){return e},e}var U={},W=(0,v.Ps)(H()),k=c.K.form;function I(e){var n,t=e.replId,o=e.onDone,r=(0,i._)((0,T.useState)(""),2),s=r[0],p=r[1],f=(0,u.Z)(),v=f.showConfirm,Z=f.showError,g=(0,i._)((n=(0,h._)({},U,{variables:{replId:t,reason:s},onCompleted:function(){v("Repl reported"),o()},onError:function(e){Z(e.message)}}),b.D(W,n)),2),w=g[0],y=g[1].loading;return(0,l.BX)(c.G,{css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(d.xv,{variant:"subheadBig",multiline:!1,children:"Report Repl"}),(0,l.BX)(k,{onSubmit:function(e){e.preventDefault(),s?w():Z("Not reported. No reason specified.")},css:[m.l0.colWithGap(32)],children:[(0,l.tZ)(c.G,{css:[m.l0.colWithGap(8)],children:(0,l.tZ)(D.B,{placeholder:"Why do you want to report this Repl?",value:s,onChange:function(e){return p(e.currentTarget.value)},css:[m.l0.minHeight(64),m.l0.maxHeight(128),{resize:"vertical"}]})}),(0,l.BX)(c.G,{css:[m.l0.rowWithGap(16),m.l0.justify.end],children:[(0,l.tZ)(c.G,{children:(0,l.tZ)(a.zx,{type:"button",text:"Cancel",onClick:function(){return o()}})}),(0,l.tZ)(c.G,{children:(0,l.tZ)(a.zx,{disabled:y,text:y?"Reporting":"Report Repl",type:"submit",colorway:"negative",iconLeft:(0,l.tZ)(B.Z,{}),onClick:function(){return o()}})})]})]})]})}var S=t(54300);function z(){var e=(0,f._)(["\n  mutation WarnUser($username: String!, $reason: String!) {\n    warnUser(username: $username, reason: $reason) {\n      ... on Warning {\n        id\n      }\n      ... on UserError {\n        message\n      }\n    }\n  }\n"]);return z=function(){return e},e}var A={},X=(0,v.Ps)(z()),$=c.K.form;function M(e){var n,t=e.username,o=e.onDone,r=(0,i._)((0,T.useState)(""),2),s=r[0],p=r[1],f=(0,u.Z)(),v=f.showConfirm,Z=f.showError,g=(0,i._)((n=(0,h._)({},A,{onCompleted:function(e){var n=e.warnUser;"UserError"===n.__typename?Z(n.message):v("The user has been warned.")}}),b.D(X,n)),2),w=g[0],y=g[1].loading;return(0,l.BX)(c.G,{css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(d.h4,{level:1,variant:"headerDefault",children:"Warn the author of the Repl?"}),(0,l.BX)($,{onSubmit:function(e){e.preventDefault(),s&&t?(w({variables:{username:t,reason:s}}),o()):Z("Please provide a reason.")},css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(D.B,{placeholder:"Reason for warning the user",value:s,onChange:function(e){return p(e.currentTarget.value)},css:{resize:"none",minHeight:40}}),(0,l.BX)(c.G,{css:[m.l0.rowWithGap(8),m.l0.justify.end],children:[(0,l.tZ)(a.zx,{type:"button",text:"Cancel",onClick:function(){return o()}}),(0,l.tZ)(a.zx,{disabled:y,colorway:"negative",text:y?"Warning user...":"Yes, warn this user",type:"submit",iconLeft:(0,l.tZ)(S.Z,{})})]})]})]})}var N=t(17601),O=t(58532),q=t(379),L=t(36809),j=t(59140),F=t(60366),Y=t(89313),K=t(16865),J=t(41026),V=t(85983),Q=t(7391),ee=t(27387),en=t(96583),et=t(32893);function eo(){var e=(0,f._)(["\n  mutation ReviewTemplateReview($input: ReviewTemplateInput!) {\n    reviewTemplate(input: $input) {\n      ... on TemplateReview {\n        id\n        repl {\n          id\n          ...ReplViewReplActionsPermissions\n        }\n      }\n      ... on UserError {\n        message\n      }\n      ... on UnauthorizedError {\n        message\n      }\n    }\n  }\n  ","\n"]);return eo=function(){return e},e}var er={},ei=(0,v.Ps)(eo(),et.jN),el=c.K.form;function es(e){var n,t,o=e.replId,r=e.reviewType,s=e.onDone,p=(0,u.Z)(),f=p.showConfirm,v=p.showError,Z="Something went wrong ".concat("promote"===r?"promoting":"demoting"," this Template"),g=(0,i._)((n=(0,h._)({},er,{variables:{input:{replId:o,shouldPromote:"promote"===r}},onError:function(e){v(e.message)},onCompleted:function(e){"TemplateReview"===e.reviewTemplate.__typename?(f("Template successfully ".concat("promote"===r?"promoted":"demoted")),s()):"UnauthorizedError"===e.reviewTemplate.__typename||"UserError"===e.reviewTemplate.__typename?v(e.reviewTemplate.message):v(Z)}}),b.D(ei,n)),2),w=g[0],y=g[1];return(0,l.BX)(c.G,{css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(d.h4,{level:1,variant:"headerDefault",children:"promote"===r?"Promote Template":"Demote Template?"}),(0,l.BX)(el,{onSubmit:(t=(0,ee._)(function(e){return(0,en.Jh)(this,function(n){return e.preventDefault(),w(),[2]})}),function(e){return t.apply(this,arguments)}),css:[m.l0.colWithGap(24)],children:["promote"===r?(0,l.tZ)(d.xv,{children:"Promoting a Template will show the Template in the Create Repl modal."}):(0,l.tZ)(d.xv,{children:"Demoting a Template will remove the Template from the Create Repl modal."}),(0,l.BX)(c.G,{css:[m.l0.rowWithGap(8),m.l0.justify.end],children:[(0,l.tZ)(a.zx,{type:"button",text:"Cancel",onClick:function(){return s()}}),"promote"===r?(0,l.tZ)(a.zx,{type:"submit",disabled:y.loading,colorway:"primary",iconLeft:(0,l.tZ)(F.Z,{}),text:y.loading?"Promoting Template...":"Promote Template"}):(0,l.tZ)(a.zx,{type:"submit",disabled:y.loading,colorway:"negative",iconLeft:(0,l.tZ)(j.Z,{}),text:y.loading?"Demoting Template...":"Demote Template"})]})]})]})}var eu=t(29193),ea=t(92331);function ed(){var e=(0,f._)(["\n  mutation UnpublishTemplate($input: DeleteReplDeploymentInput!) {\n    deleteReplDeployment(input: $input) {\n      ... on Repl {\n        id\n        ...PublishReplData\n      }\n      ... on UserError {\n        message\n      }\n      ... on NotFoundError {\n        message\n      }\n    }\n  }\n  ","\n"]);return ed=function(){return e},e}var ec={},ep=(0,v.Ps)(ed(),ea.FW),em=c.K.form;function eh(e){var n,t,o=e.replId,r=e.onDone,s=(0,u.Z)(),f=s.showConfirm,v=s.showError,Z=(0,i._)((n=(0,h._)({},ec,{variables:{input:{replId:o}}}),b.D(ep,n)),2),g=Z[0],w=Z[1];return(0,l.BX)(c.G,{css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(d.h4,{level:1,variant:"headerDefault",children:"Unpublish Template from Community?"}),(0,l.BX)(em,{onSubmit:(t=(0,ee._)(function(e){var n,t,o,i;return(0,en.Jh)(this,function(l){switch(l.label){case 0:e.preventDefault(),l.label=1;case 1:return l.trys.push([1,3,,4]),[4,g()];case 2:return i=l.sent(),[3,4];case 3:return l.sent(),v("Something went wrong. Please try again."),[3,4];case 4:if((null==i?void 0:null===(n=i.data)||void 0===n?void 0:n.deleteReplDeployment.__typename)==="Repl")f("Template successfully unpublished");else if((null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.deleteReplDeployment.__typename)==="NotFoundError"||(null==i?void 0:null===(o=i.data)||void 0===o?void 0:o.deleteReplDeployment.__typename)==="UserError")return v(i.data.deleteReplDeployment.message),[2];return r(),[2]}})}),function(e){return t.apply(this,arguments)}),css:[m.l0.colWithGap(24)],children:[(0,l.tZ)(d.xv,{children:"Unpublishing a Template will remove it from the Templates page. The Repl itself will not be deleted, and you can always re-publish the Template again later."}),(0,l.BX)(c.G,{css:[m.l0.rowWithGap(8),m.l0.justify.end],children:[(0,l.tZ)(a.zx,{type:"button",text:"Cancel",onClick:function(){return r()}}),(0,l.tZ)(a.zx,{disabled:w.loading,colorway:"negative",text:w.loading?"Unpublishing Template...":"Yes, unpublish this Template",type:"submit",iconLeft:(0,l.tZ)(p.Z,{})})]})]})]})}(o=r||(r={})).warnAuthor="warnAuthor",o.banAuthor="banAuthor",o.reportRepl="reportRepl",o.unpublish="unpublish",o.unpublishTemplate="unpublishTemplate",o.promoteTemplate="promoteTemplate",o.demoteTemplate="demoteTemplate",o.modUnpublish="modUnpublish",o.modHide="modHide";var ef=(0,L.X)({item:[m.l0.rowWithGap(8),m.l0.align.center],destructiveItem:[m.l0.color.accentNegativeStronger],modPill:[m.l0.color.foregroundDefault,{textTransform:"uppercase"}]});function ev(e){var n,t,o,r=e.repl,u=e.post,a=e.currentUser,m=e.source,h=(0,i._)((0,T.useState)(null),2),f=h[0],v=h[1],b=new Map,Z=(0,Q.useRouter)(),g="/replEnvironmentDesktop"===Z.pathname||"/replEnvironmentMobile"===Z.pathname,w=(0,s.aq)(r);if(r.authorizations.editFileContents.isAuthorized&&!g&&b.set("edit",{label:"Edit in Workspace",onClick:function(){return Z.push(w.href,w.as)},icon:(0,l.tZ)(Y.Z,{})}),b.set("report",{label:"Report",isDestructive:!0,onClick:function(){return v("reportRepl")},icon:(0,l.tZ)(B.Z,{})}),(null==a?void 0:a.isModerator)&&(b.set("warning",{label:"Warning",isMod:!0,icon:(0,l.tZ)(S.Z,{}),onClick:function(){return v("warnAuthor")},isDestructive:!0}),b.set("banauthor",{label:"Ban author",isMod:!0,icon:(0,l.tZ)(_.Z,{}),onClick:function(){return v("banAuthor")},isDestructive:!0}),null!==r.lastPublishedAt)){var y=(null==u?void 0:u.isHidden)?(0,l.tZ)(K.Z,{}):(0,l.tZ)(p.Z,{}),D=(null==u?void 0:u.isHidden)?"Show post to Community":"Hide post from Community";u&&b.set("visibility",{label:D,icon:y,isMod:!0,isDestructive:!0,onClick:function(){return v("modHide")}}),b.set("modunpublish",{label:"Unpublish Repl",isMod:!0,icon:(0,l.tZ)(_.Z,{}),isDestructive:!0,onClick:function(){return v("modUnpublish")}})}return((null==a?void 0:a.isAdmin)&&r.publishedAs===V.O2.Template&&((null===(o=r.templateReview)||void 0===o?void 0:o.promoted)?b.set("demote",{label:"Demote Template",icon:(0,l.tZ)(j.Z,{}),isDestructive:!0,onClick:function(){return v("demoteTemplate")}}):b.set("promote",{label:"Promote Template",icon:(0,l.tZ)(F.Z,{}),onClick:function(){return v("promoteTemplate")}})),r.authorizations.publish.isAuthorized&&null!==r.lastPublishedAt&&b.set("unpublish",{label:"Unpublish from Community",icon:(0,l.tZ)(p.Z,{}),isDestructive:!0,onClick:function(){return v("unpublish")}}),r.publishedAs===V.O2.Template&&r.authorizations.publish.isAuthorized&&b.set("unpublishtemplate",{label:"Unpublish Template",icon:(0,l.tZ)(p.Z,{}),isMod:!0,isDestructive:!0,onClick:function(){return v("unpublishTemplate")}}),b.size)?(0,l.BX)(l.HY,{children:[(0,l.tZ)(N.ZE,{icon:(0,l.tZ)(J.Z,{}),onAction:function(e){var n;return null===(n=b.get(e))||void 0===n?void 0:n.onClick()},children:Array.from(b).map(function(e){var n=(0,i._)(e,2),t=n[0],o=n[1];return(0,l.tZ)(N.ck,{children:(0,l.BX)(c.G,{css:[ef.item,o.isDestructive&&ef.destructiveItem],children:[o.icon,(0,l.tZ)(d.xv,{multiline:!1,children:o.label}),o.isMod?(0,l.tZ)(q.D,{text:"mod",css:ef.modPill}):null]})},t)})}),(0,l.tZ)(O.u,{isOpen:"reportRepl"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(I,{replId:r.id,onDone:function(){return v(null)}})}),(0,l.tZ)(O.u,{isOpen:"unpublish"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(eu.Z,{repl:r,onDone:function(){return v(null)},source:m})}),(0,l.tZ)(O.u,{isOpen:"warnAuthor"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(M,{username:null===(n=r.owner)||void 0===n?void 0:n.username,onDone:function(){return v(null)}})}),(0,l.tZ)(O.u,{isOpen:"banAuthor"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(P,{username:null===(t=r.owner)||void 0===t?void 0:t.username,onDone:function(){return v(null)}})}),(0,l.tZ)(O.u,{isOpen:"unpublishTemplate"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(eh,{replId:r.id,onDone:function(){return v(null)}})}),(0,l.tZ)(O.u,{isOpen:"demoteTemplate"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(es,{replId:r.id,reviewType:"demote",onDone:function(){return v(null)}})}),(0,l.tZ)(O.u,{isOpen:"promoteTemplate"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(es,{replId:r.id,reviewType:"promote",onDone:function(){return v(null)}})}),(0,l.tZ)(O.u,{isOpen:"modUnpublish"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(eu.Z,{repl:r,onDone:function(){return v(null)},source:m})}),u&&(0,l.tZ)(O.u,{isOpen:"modHide"===f,onRequestClose:function(){return v(null)},children:(0,l.tZ)(C,{post:u,onDone:function(){return v(null)}})})]}):null}},8590:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(41733),r=t(30509),i=t(3796),l=t(28065);function s(e){return(0,i.tZ)(l.ZP,(0,r._)((0,o._)({},e),{children:(0,i.tZ)("path",{d:"M20.76 4.47a19.848 19.848 0 0 0-4.951-1.524c-.234.419-.446.85-.634 1.29a18.439 18.439 0 0 0-5.495 0c-.19-.44-.4-.871-.635-1.29A19.99 19.99 0 0 0 4.09 4.474C.957 9.11.107 13.63.532 18.087a19.96 19.96 0 0 0 6.073 3.05c.491-.662.926-1.364 1.3-2.098a12.916 12.916 0 0 1-2.048-.978c.172-.125.34-.253.502-.377a14.266 14.266 0 0 0 12.142 0 7.1 7.1 0 0 0 .502.377c-.654.386-1.34.714-2.052.98.373.734.808 1.435 1.3 2.095a19.868 19.868 0 0 0 6.077-3.047c.498-5.168-.851-9.647-3.568-13.62ZM8.443 15.347c-1.183 0-2.161-1.074-2.161-2.396 0-1.321.944-2.405 2.157-2.405 1.214 0 2.184 1.084 2.164 2.405-.021 1.322-.954 2.396-2.16 2.396Zm7.974 0c-1.186 0-2.16-1.074-2.16-2.396 0-1.321.944-2.405 2.16-2.405 1.215 0 2.178 1.084 2.157 2.405-.02 1.322-.951 2.396-2.157 2.396Z"})}))}}}]);
//# sourceMappingURL=5601-246cf9f38333f221.js.map