!function(){try{var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="5bafbbe7-f18d-4ae4-b623-5d2d9fbfb023",n._sentryDebugIdIdentifier="sentry-dbid-5bafbbe7-f18d-4ae4-b623-5d2d9fbfb023")}catch(n){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"83fc2cd4"};"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6032],{73354:function(n,e,r){r.d(e,{n:function(){return s}});var t=r(21262),i=r(71440);function l(){var n=(0,t._)(["\n  fragment ReplStatsRepl on Repl {\n    id\n    likeCount\n    publicForkCount\n  }\n"]);return l=function(){return n},n}var a=(0,i.Ps)(l()),o=r(33479);function u(){var n=(0,t._)(["\n  fragment ReplPostReplCardRepl on Repl {\n    id\n    iconUrl\n    title\n    description(plainText: true)\n    ...ReplStatsRepl\n    ...ReplLinkRepl\n    tags {\n      id\n      isOfficial\n    }\n    owner {\n      ... on Team {\n        id\n        username\n        url\n        image\n      }\n      ... on User {\n        id\n        username\n        url\n        image\n      }\n    }\n  }\n  ","\n  ","\n"]);return u=function(){return n},n}var s=(0,i.Ps)(u(),a,o.Y)},48718:function(n,e,r){r.d(e,{ZP:function(){return y},fv:function(){return C},p0:function(){return k}});var t=r(41733),i=r(30509),l=r(3796),a=r(62279),o=r(43769),u=r(30851),s=r(29626),c=r(15023),d=r(6065),f=r(86466),p=r(14548),m=r(24766),g=r(93245),h=r(63163),v=r(4204),R=r(38865),b=r(9834),w=r.n(b);r(75271);var P=g.K.a,U=(0,a.iv)([h.l0.focusRingOnAfter,{"::after":{borderRadius:h.TV.space8,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,display:"block",zIndex:1}}]);function C(n){var e=n.tags,r=n.maxVisible,t=e.slice(0,void 0===r?3:r),i=e.length-t.length;return(0,l.BX)(g.G,{css:[h.l0.rowWithGap(4),h.l0.align.center],children:[t.map(function(n){return(0,l.tZ)(s.c,{small:!0,tag:n},n.id)}),i>0?(0,l.BX)(m.xv,{variant:"small",color:"dimmest",multiline:!1,children:["+",i]}):null]})}function k(n){var e=n.repl,r=n.showOwner,a=n.maxVisibleTags,s=n.smallerTitle,f=n.onReplClick,p=n.onUserClick,b=e.owner;return(0,l.BX)(g.G,{css:[h.l0.colWithGap(16),h.l0.justify.spaceBetween,h.l0.height("100%")],children:[(0,l.BX)(g.G,{css:[h.l0.rowWithGap(8),h.l0.align.start,h.l0.flex.growAndShrink(1)],children:[(0,l.tZ)(c.ZP,{size:84,iconUrl:e.iconUrl,alt:e.title}),(0,l.BX)(g.G,{css:[h.l0.flex.growAndShrink(1),h.l0.colWithGap(4)],children:[(0,l.tZ)(w(),(0,i._)((0,t._)({legacyBehavior:!0,passHref:!0},(0,o.j3)(e)),{children:(0,l.tZ)(P,{css:[{color:"inherit"},U],onClick:f,children:(0,l.tZ)(m.xv,{variant:s?"subheadDefault":"subheadBig",multiline:!1,children:e.title})})})),r&&b?(0,l.tZ)(g.G,{css:[{maxWidth:"fit-content",zIndex:1}],children:(0,l.tZ)(v.Z,{username:b.username,children:(0,l.tZ)(R.ZP,{user:b,children:(0,l.BX)(P,{css:[{color:"inherit"},h.l0.rowWithGap(4),h.l0.align.center,h.l0.focusRing,{"&:focus":{outlineOffset:2}},h.l0.borderRadius(8)],onClick:p,children:[(0,l.tZ)(d.q,{src:b.image,username:b.username,size:16,layout:"intrinsic"}),(0,l.tZ)(m.xv,{multiline:!1,children:b.username})]})})})}):null,e.description?(0,l.tZ)(m.xv,{color:"dimmer",maxLines:2,css:[h.l0.maxWidth(450)],multiline:!1,children:e.description}):null]})]}),(0,l.BX)(g.G,{css:[h.l0.rowWithGap(8),h.l0.justify.spaceBetween,h.l0.flex.wrap],children:[(0,l.tZ)(u.Z,{css:[h.l0.pb(2)],repl:e}),a?(0,l.tZ)(g.G,{css:[h.l0.position.relative,h.l0.pt(2),{zIndex:1}],children:(0,l.tZ)(C,{tags:e.tags,maxVisible:a})}):null]})]})}function y(n){var e=n.repl,r=n.showOwner,t=n.maxVisibleTags,i=n.smallerTitle,a=n.onReplClick,o=n.onUserClick,u=n.dataCy;return(0,l.tZ)(p.Tg,{css:[h.l0.borderRadius(8),h.l0.p(8),h.l0.position.relative,f.gU.filledAndOutlined,{border:"1px solid "+h.TV.outlineDimmest}],dataCy:u,children:(0,l.tZ)(k,{repl:e,showOwner:r,maxVisibleTags:t,smallerTitle:i,onReplClick:a,onUserClick:o})})}},30851:function(n,e,r){r.d(e,{Z:function(){return p}});var t=r(3796),i=r(71051),l=r(96399),a=r(24766),o=r(93245),u=r(28065),s=r(63163);function c(n){var e=n.count,r=n.children,i=n.tooltip,c=n.small,d=(0,l.d)(e);return(0,t.BX)(o.G,{"aria-label":i,"data-microtip-position":"left",role:"tooltip",css:[s.l0.rowWithGap(4),s.l0.align.center,s.l0.color.foregroundDimmer,{userSelect:"none",lineHeight:1}],children:[(0,t.tZ)(u.jS,{size:c?12:void 0,children:r}),(0,t.tZ)(a.xv,{variant:c?"small":void 0,color:"dimmer",multiline:!1,children:d})]})}r(75271);var d=r(4135),f=r(39290);function p(n){var e=n.repl;return(0,t.BX)(o.G,{css:[s.l0.rowWithGap(16),s.l0.align.center],children:[(0,t.tZ)(c,{small:!0,count:e.publicForkCount,tooltip:(0,i.Z)("fork",e.publicForkCount),children:(0,t.tZ)(d.Z,{})}),(0,t.tZ)(c,{small:!0,count:e.likeCount,tooltip:(0,i.Z)("like",e.likeCount),children:(0,t.tZ)(f.Z,{})})]})}},29626:function(n,e,r){r.d(e,{c:function(){return g},g:function(){return v}});var t=r(3796),i=r(62279),l=r(86466),a=r(14548),o=r(24766),u=r(93245),s=r(7935),c=r(63163),d=r(76547);r(75271);var f=(0,i.iv)({border:"1px solid "+c.TV.accentPrimaryDefault,backgroundColor:"transparent"}),p=function(n){var e=n.isActive,r=n.small;return(0,i.iv)([c.l0.p(r?4:8),c.l0.align.center,c.l0.rowWithGap(4),c.l0.fontSize(12),e?f:l.gU.outlined,c.l0.borderRadius(16),{color:"inherit","&:active":f,height:r?"auto":c.TV.space32}])};function m(n){var e=n.tag,r=n.isActive,i=n.isRemovable,l=n.small,f=l?"small":"text";return(0,t.tZ)(a.Tg,{elevated:!0,css:[c.l0.borderRadius(16)],children:(0,t.BX)(a.Tg,{elevated:r,css:[p({isActive:r,small:l})],children:[(0,t.BX)(u.G,{css:[c.l0.flex.row,c.l0.align.center,c.l0.flex.shrink(1)],children:[(0,t.tZ)(o.xv,{variant:f,color:"dimmest",multiline:!1,children:"#"}),(0,t.tZ)(o.xv,{color:"dimmer",variant:f,css:[c.l0.flex.shrink(1)],multiline:!1,children:e.id})]}),e.isOfficial&&!l?(0,t.tZ)(d.Z,{}):null,i?(0,t.tZ)(s.Z,{size:l?12:16}):null]})})}function g(n){var e=n.tag,r=n.isActive,i=n.small;return(0,t.tZ)(m,{tag:e,isActive:r,small:i,isRemovable:r})}var h=u.K.button;function v(n){var e=n.tag,r=n.onClick,i=n.isActive,l=n.small;return(0,t.tZ)(h,{css:[c.l0.reset.button],onClick:r,children:(0,t.tZ)(m,{tag:e,isActive:i,small:l,isRemovable:!0})})}},35328:function(n,e,r){r.d(e,{sI:function(){return a}});var t=r(21262);function i(){var n=(0,t._)(["\n  fragment ReplViewerOutputOverlayRepl on Repl {\n    id\n    title\n    imageUrl\n    lastPublishedAt\n    authorizations {\n      editMetadata {\n        isAuthorized\n      }\n    }\n  }\n"]);return i=function(){return n},n}function l(){var n=(0,t._)(["\n  mutation ReplViewerOutputOverlayUpdateRepl($input: UpdateReplInput!) {\n    updateRepl(input: $input) {\n      repl {\n        id\n        imageUrl\n      }\n    }\n  }\n"]);return l=function(){return n},n}var a=(0,r(71440).Ps)(i());l()},74831:function(n,e,r){r.d(e,{r:function(){return p},Q:function(){return f}});var t=r(21262),i=r(71440),l=r(35328),a=r(71793);function o(){var n=(0,t._)(["\n  fragment UseReplViewerRepl on Repl {\n    id\n    wasPosted\n    wasPublished\n    publishedAs\n    isProject\n    deployment {\n      id\n      activeRelease {\n        id\n        previewUrl: hostedUrl\n      }\n    }\n    replViewSettings {\n      id\n      defaultView\n      replFile\n    }\n    ...CrosisContextRepl\n  }\n  ","\n"]);return o=function(){return n},n}var u=(0,i.Ps)(o(),a.C),s=r(63353);function c(){var n=(0,t._)(["\n  fragment ReplViewReplViewerRepl on Repl {\n    id\n    publishedAs\n    publicForkCount\n    releasesForkCount\n    prodUrl: hostedUrl(dotty: true)\n    isProject\n    nextPagePathname\n    ...ReplViewerOutputOverlayRepl\n    ...UseReplViewerRepl\n    ...LikeButtonRepl\n  }\n  ","\n  ","\n  ","\n"]);return c=function(){return n},n}function d(){var n=(0,t._)(["\n  fragment ReplViewReplViewerCurrentUser on CurrentUser {\n    id\n    ...LikeButtonCurrentUser\n    ...CrosisContextCurrentUser\n  }\n  ","\n  ","\n"]);return d=function(){return n},n}var f=(0,i.Ps)(c(),l.sI,u,s.R7),p=(0,i.Ps)(d(),s.wO,a.D)},81385:function(n,e,r){r.d(e,{A:function(){return s}});var t=r(21262),i=r(71440),l=r(33479);function a(){var n=(0,t._)(["\n  fragment ReplViewSourceRepl on Repl {\n    id\n    iconUrl\n    title\n    templateLabel\n    ...ReplLinkRepl\n    owner {\n      ... on Team {\n        id\n        username\n        url\n        image\n      }\n      ... on User {\n        id\n        username\n        url\n        image\n      }\n    }\n  }\n  ","\n"]);return a=function(){return n},n}function o(){var n=(0,t._)(["\n  fragment ReplViewFooterRepl on Repl {\n    id\n    description\n    lastPublishedAt\n    timeCreated\n    publishedAs\n    publicForkCount\n    isPrivate\n    deployment {\n      id\n      activeRelease {\n        id\n        timeCreated\n      }\n    }\n    owner {\n      ... on Team {\n        id\n        username\n        url\n        image\n      }\n      ... on User {\n        id\n        username\n        url\n        image\n      }\n    }\n    source {\n      release {\n        id\n      }\n      deployment {\n        id\n        repl {\n          id\n          ...ReplViewSourceRepl\n        }\n      }\n    }\n    tags {\n      id\n    }\n    origin {\n      id\n      ...ReplViewSourceRepl\n    }\n  }\n  ","\n"]);return o=function(){return n},n}var u=(0,i.Ps)(a(),l.Y),s=(0,i.Ps)(o(),u)},71793:function(n,e,r){r.d(e,{C:function(){return u},D:function(){return o}});var t=r(21262),i=r(71440);function l(){var n=(0,t._)(["\n  fragment CrosisContextCurrentUser on CurrentUser {\n    id\n    username\n    isSubscribed\n    roles {\n      id\n      name\n    }\n  }\n"]);return l=function(){return n},n}function a(){var n=(0,t._)(['\n  fragment CrosisContextRepl on Repl {\n    id\n    language\n    slug\n    user {\n      id\n      username\n    }\n    authorizations {\n      editFileContents {\n        isAuthorized\n      }\n    }\n    flagPid2: gateOnOwner(feature: "flag-pid2")\n    flagPid2DarkLaunch: gateOnOwner(feature: "flag-pid2-dark-launch")\n    flagPid2DarkLaunchWithHealthcheck: gateOnOwner(\n      feature: "flag-pid2-dark-launch-with-healthcheck"\n    )\n    flagPid2Shell: gateOnOwner(feature: "flag-pid2-shell")\n    flagPid2ShellMuxed: gateOnOwner(feature: "flag-pid2-shell-muxed")\n  }\n']);return a=function(){return n},n}var o=(0,i.Ps)(l()),u=(0,i.Ps)(a())},99792:function(n,e,r){r.d(e,{YQ:function(){return b},DC:function(){return k}});var t=r(41733),i=r(21262),l=r(71440),a=r(74831),o=r(71519);function u(){var n=(0,i._)(["\n  fragment BountyHunterProfileLabelUserInfo on User {\n    id\n    bountyInfo {\n      hunterEarnings {\n        approximateCyclesEarned\n      }\n    }\n  }\n"]);return u=function(){return n},n}var s=(0,l.Ps)(u()),c=r(81385),d=r(9122);function f(){var n=(0,i._)(["\n  fragment UserRoles on User {\n    roles(\n      only: [\n        ADMIN\n        MODERATOR\n        PATRON\n        PYTHONISTA\n        DETECTIVE\n        LANGUAGE_JAMMER\n        FEATURED\n        REPLIT_REP\n        REPLIT_REP_EDU\n        EXTENSION_DEVELOPER\n      ]\n    ) {\n      id\n      name\n      key\n      tagline\n    }\n  }\n"]);return f=function(){return n},n}function p(){var n=(0,i._)(["\n  fragment ProfileHeaderUser on User {\n    id\n    fullName\n    username\n    image\n    isLoggedIn\n    bio\n    location\n    ...UserRoles\n    ...BountyHunterProfileLabelUserInfo\n  }\n  ","\n  ","\n"]);return p=function(){return n},n}function m(){var n=(0,i._)(["\n  fragment ProfilePageUser on User {\n    id\n    fullName\n    image\n    hasPrivacyRole\n    socials {\n      id\n      url\n      type\n    }\n    publicRepls(count: 1, showUnnamed: true) {\n      items {\n        id\n      }\n    }\n    isBlockedByCurrentUser\n    isBlockingCurrentUser\n    redirectToTeamDashboard\n    username\n    ...ProfileHeaderUser\n    ...UserLinkUser\n  }\n  ","\n  ","\n"]);return m=function(){return n},n}function g(){var n=(0,i._)(["\n  fragment ProfileCurrentUserOrg on CurrentUser {\n    org(orgId: $orgId) {\n      __typename\n      ... on Org {\n        id\n        type\n      }\n      ... on NotFoundError {\n        message\n      }\n      ... on Error {\n        message\n      }\n    }\n  }\n"]);return g=function(){return n},n}function h(){var n=(0,i._)(["\n  fragment ProfilePagePinnedRepl on Repl {\n    id\n    description\n    iconUrl\n    title\n    ...ReplViewReplViewerRepl\n    ...ReplViewFooterRepl\n    templateInfo {\n      iconUrl\n      label\n    }\n  }\n  ","\n  ","\n"]);return h=function(){return n},n}function v(){var n=(0,i._)(["\n  query ProfilePage($username: String!, $orgId: String) {\n    currentUser {\n      id\n      username\n      hasRepl\n      isAdmin: hasRole(role: ADMIN)\n      isPrivacyAccount: hasPrivacyRole\n      isModerator: hasRole(role: MODERATOR)\n      ...ReplViewReplViewerCurrentUser\n      ...ProfileCurrentUserOrg\n    }\n    user: userByUsername(username: $username) {\n      id\n      ...ProfilePageUser\n    }\n  }\n  ","\n  ","\n  ","\n"]);return v=function(){return n},n}var R={},b=(0,l.Ps)(f()),w=(0,l.Ps)(p(),b,s),P=(0,l.Ps)(m(),w,o._),U=(0,l.Ps)(g());h(),a.Q,c.A;var C=(0,l.Ps)(v(),a.r,U,P);function k(n){var e=(0,t._)({},R,n);return d.a(C,e)}}}]);
//# sourceMappingURL=6032-f134ff44f17833d9.js.map