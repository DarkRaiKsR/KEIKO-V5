const _0x588c5e=_0x1424;(function(_0x52aa56,_0x4a26c2){const _0x3c4b70=_0x1424,_0x353941=_0x52aa56();while(!![]){try{const _0x1884ab=parseInt(_0x3c4b70(0x239))/0x1*(-parseInt(_0x3c4b70(0x1f5))/0x2)+-parseInt(_0x3c4b70(0x1cb))/0x3*(-parseInt(_0x3c4b70(0x1a0))/0x4)+-parseInt(_0x3c4b70(0x1d6))/0x5+-parseInt(_0x3c4b70(0x22b))/0x6*(parseInt(_0x3c4b70(0x197))/0x7)+parseInt(_0x3c4b70(0x1d4))/0x8+-parseInt(_0x3c4b70(0x1ad))/0x9+-parseInt(_0x3c4b70(0x258))/0xa*(-parseInt(_0x3c4b70(0x216))/0xb);if(_0x1884ab===_0x4a26c2)break;else _0x353941['push'](_0x353941['shift']());}catch(_0x5b1319){_0x353941['push'](_0x353941['shift']());}}}(_0x3b7f,0x6d629));function _0x1424(_0x5ae00b,_0x517129){const _0x3b7f2a=_0x3b7f();return _0x1424=function(_0x142419,_0x3d61e6){_0x142419=_0x142419-0x18a;let _0x307d3f=_0x3b7f2a[_0x142419];return _0x307d3f;},_0x1424(_0x5ae00b,_0x517129);}import{smsg}from'./lib/simple.js';import{format}from'util';import{fileURLToPath}from'url';import _0x5cb2a2,{join}from'path';import{unwatchFile,watchFile}from'fs';import _0x3fdc73 from'chalk';import _0x3a13ea from'node-fetch';import _0x4422f1 from'pino';const isNumber=_0x55c9da=>typeof _0x55c9da===_0x588c5e(0x1d3)&&!isNaN(_0x55c9da),delay=_0x32e7df=>isNumber(_0x32e7df)&&new Promise(_0x24908f=>setTimeout(function(){clearTimeout(this),_0x24908f();},_0x32e7df)),{getAggregateVotesInPollMessage,makeInMemoryStore}=await(await import(_0x588c5e(0x198)))['default'],store=makeInMemoryStore({'logger':_0x4422f1()['child']({'level':'fatal','stream':_0x588c5e(0x213)})});export async function handler(_0x5c723c){const _0x5b59d8=_0x588c5e;this[_0x5b59d8(0x18c)]=this[_0x5b59d8(0x18c)]||[];if(!_0x5c723c)return;this[_0x5b59d8(0x1db)](_0x5c723c[_0x5b59d8(0x255)])[_0x5b59d8(0x244)](console[_0x5b59d8(0x203)]);let _0x1d5c02=_0x5c723c[_0x5b59d8(0x255)][_0x5c723c[_0x5b59d8(0x255)]['length']-0x1];if(!_0x1d5c02)return;if(global['db']['data']==null)await global['loadDatabase']();try{_0x1d5c02=smsg(this,_0x1d5c02)||_0x1d5c02;if(!_0x1d5c02)return;_0x1d5c02['exp']=0x0,_0x1d5c02[_0x5b59d8(0x19c)]=![],_0x1d5c02['bank']=![],_0x1d5c02[_0x5b59d8(0x1cf)]=![];try{let _0x459b5d=global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x222)][_0x1d5c02[_0x5b59d8(0x204)]];if(typeof _0x459b5d!==_0x5b59d8(0x1a6))global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x222)][_0x1d5c02[_0x5b59d8(0x204)]]={};if(_0x459b5d){if(!isNumber(_0x459b5d[_0x5b59d8(0x23d)]))_0x459b5d['exp']=0x0;if(!isNumber(_0x459b5d[_0x5b59d8(0x19c)]))_0x459b5d[_0x5b59d8(0x19c)]=0xa;if(!isNumber(_0x459b5d[_0x5b59d8(0x229)]))_0x459b5d[_0x5b59d8(0x229)]=0x0;if(!isNumber(_0x459b5d[_0x5b59d8(0x1cf)]))_0x459b5d[_0x5b59d8(0x1cf)]=0x0;if(!isNumber(_0x459b5d[_0x5b59d8(0x224)]))_0x459b5d['lastclaim']=0x0;if(!(_0x5b59d8(0x20d)in _0x459b5d))_0x459b5d[_0x5b59d8(0x20d)]=![];if(!_0x459b5d[_0x5b59d8(0x20d)]){if(!(_0x5b59d8(0x1fa)in _0x459b5d))_0x459b5d[_0x5b59d8(0x1fa)]=_0x1d5c02['name'];if(!isNumber(_0x459b5d[_0x5b59d8(0x1c8)]))_0x459b5d[_0x5b59d8(0x1c8)]=-0x1;if(!isNumber(_0x459b5d[_0x5b59d8(0x253)]))_0x459b5d['regTime']=-0x1;}if(!isNumber(_0x459b5d[_0x5b59d8(0x260)]))_0x459b5d[_0x5b59d8(0x260)]=-0x1;if(!(_0x5b59d8(0x199)in _0x459b5d))_0x459b5d[_0x5b59d8(0x199)]='';if(!(_0x5b59d8(0x1eb)in _0x459b5d))_0x459b5d['banned']=![];if(!isNumber(_0x459b5d[_0x5b59d8(0x1a2)]))_0x459b5d['warn']=0x0;if(!isNumber(_0x459b5d[_0x5b59d8(0x1e8)]))_0x459b5d[_0x5b59d8(0x1e8)]=0x0;if(!(_0x5b59d8(0x1a4)in _0x459b5d))_0x459b5d['role']='Tadpole';if(!('autolevelup'in _0x459b5d))_0x459b5d[_0x5b59d8(0x251)]=![];}else global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x222)][_0x1d5c02['sender']]={'exp':0x0,'credit':0x0,'bank':0x0,'chicken':0x0,'lastclaim':0x0,'registered':![],'name':_0x1d5c02[_0x5b59d8(0x1fa)],'age':-0x1,'regTime':-0x1,'afk':-0x1,'afkReason':'','banned':![],'warn':0x0,'level':0x0,'role':_0x5b59d8(0x195),'autolevelup':![]};let _0x21c433=global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x20f)][_0x1d5c02[_0x5b59d8(0x221)]];if(typeof _0x21c433!=='object')global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x20f)][_0x1d5c02[_0x5b59d8(0x221)]]={};if(_0x21c433){if(!(_0x5b59d8(0x1e4)in _0x21c433))_0x21c433[_0x5b59d8(0x1e4)]=!![];if(!(_0x5b59d8(0x1b5)in _0x21c433))_0x21c433['antiLink']=![];if(!(_0x5b59d8(0x1ac)in _0x21c433))_0x21c433['antiSticker']=![];if(!(_0x5b59d8(0x257)in _0x21c433))_0x21c433[_0x5b59d8(0x257)]=![];if(!(_0x5b59d8(0x266)in _0x21c433))_0x21c433[_0x5b59d8(0x266)]=![];if(!(_0x5b59d8(0x228)in _0x21c433))_0x21c433[_0x5b59d8(0x228)]=!![];if(!(_0x5b59d8(0x24a)in _0x21c433))_0x21c433['isBanned']=![];if(!('nsfw'in _0x21c433))_0x21c433[_0x5b59d8(0x20c)]=![];if(!(_0x5b59d8(0x1ab)in _0x21c433))_0x21c433[_0x5b59d8(0x1ab)]='';if(!('sDemote'in _0x21c433))_0x21c433[_0x5b59d8(0x210)]='';if(!(_0x5b59d8(0x1df)in _0x21c433))_0x21c433[_0x5b59d8(0x1df)]=![];if(!(_0x5b59d8(0x191)in _0x21c433))_0x21c433[_0x5b59d8(0x191)]='';if(!('sWelcome'in _0x21c433))_0x21c433['sWelcome']='';if(!(_0x5b59d8(0x265)in _0x21c433))_0x21c433[_0x5b59d8(0x265)]=![];if(!(_0x5b59d8(0x1ff)in _0x21c433))_0x21c433['viewOnce']=![];if(!('viewStory'in _0x21c433))_0x21c433[_0x5b59d8(0x1c6)]=![];if(!(_0x5b59d8(0x1a1)in _0x21c433))_0x21c433['welcome']=![];if(!('chatbot'in _0x21c433))_0x21c433['chatbot']=![];if(!isNumber(_0x21c433['expired']))_0x21c433[_0x5b59d8(0x1cd)]=0x0;}else global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x20f)][_0x1d5c02['chat']]={'antiDelete':!![],'antiLink':![],'antiSticker':![],'antiToxic':![],'detect':![],'expired':0x0,'getmsg':!![],'isBanned':![],'nsfw':![],'sBye':'','sDemote':'','simi':![],'sPromote':'','sticker':![],'sWelcome':'','useDocument':![],'viewOnce':![],'viewStory':![],'welcome':![],'chatbot':![]};let _0xa6ffee=global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x1ef)][this[_0x5b59d8(0x1a8)]['jid']];if(typeof _0xa6ffee!==_0x5b59d8(0x1a6))global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x1ef)][this['user'][_0x5b59d8(0x22f)]]={};if(_0xa6ffee){if(!(_0x5b59d8(0x193)in _0xa6ffee))_0xa6ffee['self']=![];if(!(_0x5b59d8(0x1d8)in _0xa6ffee))_0xa6ffee[_0x5b59d8(0x1d8)]=![];if(!(_0x5b59d8(0x214)in _0xa6ffee))_0xa6ffee[_0x5b59d8(0x214)]=![];if(!(_0x5b59d8(0x18d)in _0xa6ffee))_0xa6ffee[_0x5b59d8(0x18d)]=0x0;if(!(_0x5b59d8(0x22d)in _0xa6ffee))_0xa6ffee[_0x5b59d8(0x22d)]=0x0;}else global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x1ef)][this[_0x5b59d8(0x1a8)]['jid']]={'self':![],'autoread':![],'restrict':![],'restartDB':0x0,'status':0x0};}catch(_0xe530a6){console[_0x5b59d8(0x203)](_0xe530a6);}if(opts['nyimak'])return;if(opts[_0x5b59d8(0x225)]&&_0x1d5c02[_0x5b59d8(0x221)][_0x5b59d8(0x269)](_0x5b59d8(0x1b9)))return;if(opts[_0x5b59d8(0x22a)]&&!_0x1d5c02[_0x5b59d8(0x221)][_0x5b59d8(0x269)](_0x5b59d8(0x1b9)))return;if(opts['swonly']&&_0x1d5c02['chat']!==_0x5b59d8(0x21f))return;if(typeof _0x1d5c02['text']!=='string')_0x1d5c02[_0x5b59d8(0x190)]='';const _0xbd212f=[conn['decodeJid'](global['conn']['user']['id']),...global[_0x5b59d8(0x18f)][_0x5b59d8(0x243)](([_0x2bb4e0])=>_0x2bb4e0)][_0x5b59d8(0x243)](_0x3202c7=>_0x3202c7[_0x5b59d8(0x215)](/[^0-9]/g,'')+_0x5b59d8(0x25a))[_0x5b59d8(0x21a)](_0x1d5c02[_0x5b59d8(0x204)]),_0xf72d6a=_0xbd212f||_0x1d5c02[_0x5b59d8(0x1b8)],_0x487442=_0xf72d6a||global[_0x5b59d8(0x264)][_0x5b59d8(0x243)](_0x176716=>_0x176716[_0x5b59d8(0x215)](/[^0-9]/g,'')+'@s.whatsapp.net')['includes'](_0x1d5c02[_0x5b59d8(0x204)]),_0x30096f=_0xbd212f||global[_0x5b59d8(0x1bb)][_0x5b59d8(0x243)](_0x32c979=>_0x32c979[_0x5b59d8(0x215)](/[^0-9]/g,'')+'@s.whatsapp.net')[_0x5b59d8(0x21a)](_0x1d5c02['sender']);if(opts['queque']&&_0x1d5c02['text']&&!(_0x487442||_0x30096f)){let _0x536ef0=this['msgqueque'],_0x37381d=0x3e8*0x5;const _0x2c650=_0x536ef0[_0x536ef0[_0x5b59d8(0x241)]-0x1];_0x536ef0['push'](_0x1d5c02['id']||_0x1d5c02[_0x5b59d8(0x1aa)]['id']),setInterval(async function(){if(_0x536ef0['indexOf'](_0x2c650)===-0x1)clearInterval(this);await delay(_0x37381d);},_0x37381d);}if(process[_0x5b59d8(0x232)][_0x5b59d8(0x220)]&&process['env'][_0x5b59d8(0x220)][_0x5b59d8(0x227)]()===_0x5b59d8(0x21d)&&!(_0xbd212f||_0xf72d6a))return;if(_0x1d5c02[_0x5b59d8(0x20a)])return;_0x1d5c02[_0x5b59d8(0x23d)]+=Math['ceil'](Math[_0x5b59d8(0x248)]()*0xa);let _0x4c7109,_0x4dfcde=global['db'][_0x5b59d8(0x24b)]&&global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x222)]&&global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x222)][_0x1d5c02['sender']];const _0x129117=(_0x1d5c02[_0x5b59d8(0x1ea)]?(conn[_0x5b59d8(0x20f)][_0x1d5c02[_0x5b59d8(0x221)]]||{})[_0x5b59d8(0x200)]||await this[_0x5b59d8(0x19f)](_0x1d5c02['chat'])['catch'](_0x596a62=>null):{})||{},_0x3bacc4=(_0x1d5c02['isGroup']?_0x129117[_0x5b59d8(0x1d2)]:[])||[],_0x48b142=(_0x1d5c02[_0x5b59d8(0x1ea)]?_0x3bacc4[_0x5b59d8(0x1b0)](_0xcc2e17=>conn['decodeJid'](_0xcc2e17['id'])===_0x1d5c02[_0x5b59d8(0x204)]):{})||{},_0x2d2214=(_0x1d5c02[_0x5b59d8(0x1ea)]?_0x3bacc4[_0x5b59d8(0x1b0)](_0x1f7aa8=>conn['decodeJid'](_0x1f7aa8['id'])==conn[_0x5b59d8(0x1a8)][_0x5b59d8(0x22f)]):{})||{},_0x34943e=_0x48b142?.[_0x5b59d8(0x1e7)]==_0x5b59d8(0x218)||![],_0x57857d=_0x34943e||_0x48b142?.[_0x5b59d8(0x1e7)]==_0x5b59d8(0x1e7)||![],_0x771b4f=_0x2d2214?.['admin']||![],_0x3d6b7f=_0x5cb2a2['join'](_0x5cb2a2[_0x5b59d8(0x21c)](fileURLToPath(import.meta['url'])),'./plugins');for(let _0x4dc922 in global[_0x5b59d8(0x1f3)]){let _0x5ba527=global['plugins'][_0x4dc922];if(!_0x5ba527)continue;if(_0x5ba527[_0x5b59d8(0x1bf)])continue;const _0x75c8a6=join(_0x3d6b7f,_0x4dc922);if(typeof _0x5ba527['all']==='function')try{await _0x5ba527['all'][_0x5b59d8(0x1fc)](this,_0x1d5c02,{'chatUpdate':_0x5c723c,'__dirname':_0x3d6b7f,'__filename':_0x75c8a6});}catch(_0x4080fa){console[_0x5b59d8(0x203)](_0x4080fa);for(let [_0x4b45a7]of global[_0x5b59d8(0x18f)]['filter'](([_0x23f471,_0x1439e9,_0x681e00])=>_0x681e00&&_0x23f471)){let _0x94ae6e=(await conn[_0x5b59d8(0x1f2)](_0x4b45a7))[0x0]||{};if(_0x94ae6e['exists'])_0x1d5c02['reply']((_0x5b59d8(0x1cc)+_0x4dc922+'\x0a*❖\x20Sender:*\x20'+_0x1d5c02[_0x5b59d8(0x204)]+_0x5b59d8(0x1d0)+_0x1d5c02['chat']+_0x5b59d8(0x19d)+_0x1d5c02[_0x5b59d8(0x190)]+_0x5b59d8(0x1f1))[_0x5b59d8(0x196)](),_0x94ae6e[_0x5b59d8(0x22f)]);}}if(!opts[_0x5b59d8(0x214)]){if(_0x5ba527[_0x5b59d8(0x23a)]&&_0x5ba527[_0x5b59d8(0x23a)][_0x5b59d8(0x21a)](_0x5b59d8(0x1e7)))continue;}const _0x3c52f5=_0x3a4c39=>_0x3a4c39[_0x5b59d8(0x215)](/[|\\{}()[\]^$+*?.]/g,'\x5c$&');let _0x4b624c=_0x5ba527[_0x5b59d8(0x261)]?_0x5ba527[_0x5b59d8(0x261)]:conn['prefix']?conn['prefix']:global[_0x5b59d8(0x1f8)],_0x5ed3e5=(_0x4b624c instanceof RegExp?[[_0x4b624c[_0x5b59d8(0x1ce)](_0x1d5c02[_0x5b59d8(0x190)]),_0x4b624c]]:Array[_0x5b59d8(0x212)](_0x4b624c)?_0x4b624c[_0x5b59d8(0x243)](_0xd7e694=>{const _0x3bcbcb=_0x5b59d8;let _0x1ffd13=_0xd7e694 instanceof RegExp?_0xd7e694:new RegExp(_0x3c52f5(_0xd7e694));return[_0x1ffd13[_0x3bcbcb(0x1ce)](_0x1d5c02['text']),_0x1ffd13];}):typeof _0x4b624c==='string'?[[new RegExp(_0x3c52f5(_0x4b624c))[_0x5b59d8(0x1ce)](_0x1d5c02[_0x5b59d8(0x190)]),new RegExp(_0x3c52f5(_0x4b624c))]]:[[[],new RegExp()]])[_0x5b59d8(0x1b0)](_0x3f300c=>_0x3f300c[0x1]);if(typeof _0x5ba527[_0x5b59d8(0x245)]==='function'){if(await _0x5ba527[_0x5b59d8(0x245)][_0x5b59d8(0x1fc)](this,_0x1d5c02,{'match':_0x5ed3e5,'conn':this,'participants':_0x3bacc4,'groupMetadata':_0x129117,'user':_0x48b142,'bot':_0x2d2214,'isROwner':_0xbd212f,'isOwner':_0xf72d6a,'isRAdmin':_0x34943e,'isAdmin':_0x57857d,'isBotAdmin':_0x771b4f,'isPrems':_0x30096f,'chatUpdate':_0x5c723c,'__dirname':_0x3d6b7f,'__filename':_0x75c8a6}))continue;}if(typeof _0x5ba527!=='function')continue;if(_0x4c7109=(_0x5ed3e5[0x0]||'')[0x0]){let _0x2db6a5=_0x1d5c02[_0x5b59d8(0x190)][_0x5b59d8(0x215)](_0x4c7109,''),[_0x24ceda,..._0x3db108]=_0x2db6a5['trim']()['split']` `[_0x5b59d8(0x21e)](_0x498356=>_0x498356);_0x3db108=_0x3db108||[];let _0xc3c8d0=_0x2db6a5[_0x5b59d8(0x196)]()['split']` `[_0x5b59d8(0x263)](0x1),_0x3f5cdd=_0xc3c8d0[_0x5b59d8(0x19a)]` `;_0x24ceda=(_0x24ceda||'')[_0x5b59d8(0x227)]();let _0x2eda12=_0x5ba527['fail']||global[_0x5b59d8(0x240)],_0xbb71ae=_0x5ba527[_0x5b59d8(0x26b)]instanceof RegExp?_0x5ba527[_0x5b59d8(0x26b)][_0x5b59d8(0x242)](_0x24ceda):Array[_0x5b59d8(0x212)](_0x5ba527['command'])?_0x5ba527[_0x5b59d8(0x26b)]['some'](_0x3c5238=>_0x3c5238 instanceof RegExp?_0x3c5238[_0x5b59d8(0x242)](_0x24ceda):_0x3c5238===_0x24ceda):typeof _0x5ba527['command']===_0x5b59d8(0x1a5)?_0x5ba527['command']===_0x24ceda:![];if(!_0xbb71ae)continue;_0x1d5c02['plugin']=_0x4dc922;if(_0x1d5c02[_0x5b59d8(0x221)]in global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x20f)]||_0x1d5c02[_0x5b59d8(0x204)]in global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x222)]){let _0x37dff9=global['db']['data'][_0x5b59d8(0x20f)][_0x1d5c02[_0x5b59d8(0x221)]],_0x3fee32=global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x222)][_0x1d5c02['sender']];if(_0x4dc922!='owner-unbanchat.js'&&_0x37dff9?.[_0x5b59d8(0x24a)])return;if(_0x4dc922!='owner-unbanuser.js'&&_0x3fee32?.['banned'])return;}if(_0x5ba527['rowner']&&_0x5ba527[_0x5b59d8(0x18f)]&&!(_0xbd212f||_0xf72d6a)){_0x2eda12(_0x5b59d8(0x18f),_0x1d5c02,this);continue;}if(_0x5ba527['rowner']&&!_0xbd212f){_0x2eda12('rowner',_0x1d5c02,this);continue;}if(_0x5ba527[_0x5b59d8(0x18f)]&&!_0xf72d6a){_0x2eda12(_0x5b59d8(0x18f),_0x1d5c02,this);continue;}if(_0x5ba527[_0x5b59d8(0x264)]&&!_0x487442){_0x2eda12(_0x5b59d8(0x264),_0x1d5c02,this);continue;}if(_0x5ba527[_0x5b59d8(0x208)]&&!_0x30096f){_0x2eda12(_0x5b59d8(0x208),_0x1d5c02,this);continue;}if(_0x5ba527[_0x5b59d8(0x18e)]&&!_0x1d5c02[_0x5b59d8(0x1ea)]){_0x2eda12(_0x5b59d8(0x18e),_0x1d5c02,this);continue;}else{if(_0x5ba527['botAdmin']&&!_0x771b4f){_0x2eda12(_0x5b59d8(0x22e),_0x1d5c02,this);continue;}else{if(_0x5ba527[_0x5b59d8(0x1e7)]&&!_0x57857d){_0x2eda12(_0x5b59d8(0x1e7),_0x1d5c02,this);continue;}}}if(_0x5ba527['private']&&_0x1d5c02['isGroup']){_0x2eda12('private',_0x1d5c02,this);continue;}if(_0x5ba527['register']==!![]&&_0x4dfcde[_0x5b59d8(0x20d)]==![]){_0x2eda12(_0x5b59d8(0x25b),_0x1d5c02,this);continue;}_0x1d5c02[_0x5b59d8(0x1e0)]=!![];let _0x387d89=_0x5b59d8(0x23d)in _0x5ba527?parseInt(_0x5ba527['exp']):0x11;if(_0x387d89>0xc8)_0x1d5c02[_0x5b59d8(0x1d7)](_0x5b59d8(0x1e1));else _0x1d5c02[_0x5b59d8(0x23d)]+=_0x387d89;if(!_0x30096f&&_0x5ba527[_0x5b59d8(0x19c)]&&global['db'][_0x5b59d8(0x24b)]['users'][_0x1d5c02['sender']]['credit']<_0x5ba527['credit']*0x1){this[_0x5b59d8(0x1d7)](_0x1d5c02[_0x5b59d8(0x221)],_0x5b59d8(0x1fb),_0x1d5c02);continue;}if(_0x5ba527[_0x5b59d8(0x1e8)]>_0x4dfcde[_0x5b59d8(0x1e8)]){this['reply'](_0x1d5c02[_0x5b59d8(0x221)],_0x5b59d8(0x18a)+_0x5ba527[_0x5b59d8(0x1e8)]+'\x20to\x20use\x20this\x20command.*\x20\x0a*Your\x20level\x20'+_0x4dfcde['level']+'*',_0x1d5c02);continue;}let _0x5eb658={'match':_0x5ed3e5,'usedPrefix':_0x4c7109,'noPrefix':_0x2db6a5,'_args':_0xc3c8d0,'args':_0x3db108,'command':_0x24ceda,'text':_0x3f5cdd,'conn':this,'participants':_0x3bacc4,'groupMetadata':_0x129117,'user':_0x48b142,'bot':_0x2d2214,'isROwner':_0xbd212f,'isOwner':_0xf72d6a,'isRAdmin':_0x34943e,'isAdmin':_0x57857d,'isBotAdmin':_0x771b4f,'isPrems':_0x30096f,'chatUpdate':_0x5c723c,'__dirname':_0x3d6b7f,'__filename':_0x75c8a6};try{await _0x5ba527[_0x5b59d8(0x1fc)](this,_0x1d5c02,_0x5eb658);if(!_0x30096f)_0x1d5c02[_0x5b59d8(0x19c)]=_0x1d5c02[_0x5b59d8(0x19c)]||_0x5ba527[_0x5b59d8(0x19c)]||![];}catch(_0x2098ca){_0x1d5c02['error']=_0x2098ca,console[_0x5b59d8(0x203)](_0x2098ca);if(_0x2098ca){let _0x5e8c41=format(_0x2098ca);for(let _0x3f3332 of Object[_0x5b59d8(0x237)](global[_0x5b59d8(0x201)]))_0x5e8c41=_0x5e8c41[_0x5b59d8(0x215)](new RegExp(_0x3f3332,'g'),'#HIDDEN#');if(_0x2098ca[_0x5b59d8(0x1fa)])for(let [_0x3050d1]of global['owner'][_0x5b59d8(0x21e)](([_0x312851,_0x4c9277,_0x379b4a])=>_0x379b4a&&_0x312851)){let _0x1d7fce=(await this['onWhatsApp'](_0x3050d1))[0x0]||{};if(_0x1d7fce['exists'])return _0x1d5c02['reply'](('*❖\x20Plugin:*\x20'+_0x4dc922+_0x5b59d8(0x1c3)+_0x1d5c02[_0x5b59d8(0x204)]+_0x5b59d8(0x1d0)+_0x1d5c02['chat']+_0x5b59d8(0x19d)+_0x4c7109+_0x24ceda+'\x20'+_0x3db108[_0x5b59d8(0x19a)]('\x20')+_0x5b59d8(0x234)+_0x5e8c41)[_0x5b59d8(0x196)](),_0x1d7fce[_0x5b59d8(0x22f)]);}_0x1d5c02[_0x5b59d8(0x1d7)](_0x5e8c41);}}finally{if(typeof _0x5ba527[_0x5b59d8(0x21b)]===_0x5b59d8(0x1b6))try{await _0x5ba527[_0x5b59d8(0x21b)][_0x5b59d8(0x1fc)](this,_0x1d5c02,_0x5eb658);}catch(_0x3a5c40){console[_0x5b59d8(0x203)](_0x3a5c40);}if(_0x1d5c02[_0x5b59d8(0x19c)])_0x1d5c02[_0x5b59d8(0x1d7)]('You\x20used\x20*'+ +_0x1d5c02[_0x5b59d8(0x19c)]+'*');}break;}}}catch(_0x1dd5d5){console[_0x5b59d8(0x203)](_0x1dd5d5);}finally{if(opts[_0x5b59d8(0x236)]&&_0x1d5c02[_0x5b59d8(0x190)]){const _0x36f6d2=this[_0x5b59d8(0x18c)][_0x5b59d8(0x1c5)](_0x1d5c02['id']||_0x1d5c02[_0x5b59d8(0x1aa)]['id']);if(_0x36f6d2!==-0x1)this[_0x5b59d8(0x18c)][_0x5b59d8(0x18b)](_0x36f6d2,0x1);}let _0x2c4793,_0x174e94=global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x24c)];if(_0x1d5c02){_0x1d5c02['sender']&&(_0x2c4793=global['db'][_0x5b59d8(0x24b)][_0x5b59d8(0x222)][_0x1d5c02['sender']])&&(_0x2c4793[_0x5b59d8(0x23d)]+=_0x1d5c02[_0x5b59d8(0x23d)],_0x2c4793['credit']-=_0x1d5c02[_0x5b59d8(0x19c)]*0x1,_0x2c4793['bank']-=_0x1d5c02[_0x5b59d8(0x229)],_0x2c4793['chicken']-=_0x1d5c02['chicken']);let _0x62e33e;if(_0x1d5c02[_0x5b59d8(0x247)]){let _0x8c4df4=+new Date();if(_0x1d5c02[_0x5b59d8(0x247)]in _0x174e94){_0x62e33e=_0x174e94[_0x1d5c02[_0x5b59d8(0x247)]];if(!isNumber(_0x62e33e['total']))_0x62e33e['total']=0x1;if(!isNumber(_0x62e33e[_0x5b59d8(0x1fe)]))_0x62e33e[_0x5b59d8(0x1fe)]=_0x1d5c02[_0x5b59d8(0x203)]!=null?0x0:0x1;if(!isNumber(_0x62e33e['last']))_0x62e33e['last']=_0x8c4df4;if(!isNumber(_0x62e33e[_0x5b59d8(0x24f)]))_0x62e33e['lastSuccess']=_0x1d5c02['error']!=null?0x0:_0x8c4df4;}else _0x62e33e=_0x174e94[_0x1d5c02['plugin']]={'total':0x1,'success':_0x1d5c02[_0x5b59d8(0x203)]!=null?0x0:0x1,'last':_0x8c4df4,'lastSuccess':_0x1d5c02['error']!=null?0x0:_0x8c4df4};_0x62e33e[_0x5b59d8(0x256)]+=0x1,_0x62e33e['last']=_0x8c4df4,_0x1d5c02[_0x5b59d8(0x203)]==null&&(_0x62e33e[_0x5b59d8(0x1fe)]+=0x1,_0x62e33e[_0x5b59d8(0x24f)]=_0x8c4df4);}}try{if(!opts['noprint'])await(await import(_0x5b59d8(0x25f)))['default'](_0x1d5c02,this);}catch(_0x2e1a21){console[_0x5b59d8(0x19b)](_0x1d5c02,_0x1d5c02['quoted'],_0x2e1a21);}if(process[_0x5b59d8(0x232)][_0x5b59d8(0x1a7)])await conn[_0x5b59d8(0x233)]([_0x1d5c02[_0x5b59d8(0x1aa)]]);if(process['env'][_0x5b59d8(0x20b)]&&_0x1d5c02[_0x5b59d8(0x1aa)][_0x5b59d8(0x24d)]==='status@broadcast')await conn[_0x5b59d8(0x233)]([_0x1d5c02['key']]);}}export async function participantsUpdate({id:_0x16cfc6,participants:_0x457e60,action:_0x31162f}){const _0x1d4c55=_0x588c5e;if(opts['self']||this[_0x1d4c55(0x1bc)])return;if(global['db'][_0x1d4c55(0x24b)]==null)await loadDatabase();const _0x559b56=global['db'][_0x1d4c55(0x24b)][_0x1d4c55(0x20f)][_0x16cfc6]||{},_0x3041da={'promote':'💎','demote':_0x1d4c55(0x192),'welcome':_0x1d4c55(0x1e5),'bye':_0x1d4c55(0x1e5),'bug':'🐛','mail':'🎟️','owner':'🪀'};switch(_0x31162f){case _0x1d4c55(0x1af):const _0x39eb7d=(_0x559b56['sPromote']||this[_0x1d4c55(0x1c4)]||conn[_0x1d4c55(0x1c4)]||_0x3041da['promote']+_0x1d4c55(0x231))['replace'](_0x1d4c55(0x226),'@'+_0x457e60[0x0][_0x1d4c55(0x217)]('@')[0x0]);_0x559b56['detect']&&this['sendMessage'](_0x16cfc6,{'text':_0x39eb7d['trim'](),'mentions':[_0x457e60[0x0]]});break;case _0x1d4c55(0x1da):const _0x258010=(_0x559b56['sDemote']||this[_0x1d4c55(0x1bd)]||conn['sdemote']||_0x3041da['demote']+'\x20@user\x20*demoted\x20from\x20admin*')[_0x1d4c55(0x215)](_0x1d4c55(0x226),'@'+_0x457e60[0x0][_0x1d4c55(0x217)]('@')[0x0]);_0x559b56[_0x1d4c55(0x266)]&&this[_0x1d4c55(0x1a9)](_0x16cfc6,{'text':_0x258010['trim'](),'mentions':[_0x457e60[0x0]]});break;}}export async function groupsUpdate(_0xe113df){const _0x528ba2=_0x588c5e;if(opts[_0x528ba2(0x193)])return;for(const _0x26e1b7 of _0xe113df){const _0x1e9dab=_0x26e1b7['id'];if(!_0x1e9dab)continue;let _0x87bdb1=global['db']['data'][_0x528ba2(0x20f)][_0x1e9dab]||{};const _0x1bbbca={'desc':'📝','subject':'👀','icon':'🎇','revoke':'🔗','announceOn':'🔒','announceOff':'🔓','restrictOn':'🚫','restrictOff':'✅'};let _0x51f11b='';if(!_0x87bdb1[_0x528ba2(0x266)])continue;if(_0x26e1b7[_0x528ba2(0x1c1)])_0x51f11b=(_0x87bdb1['sDesc']||this[_0x528ba2(0x1d5)]||conn[_0x528ba2(0x1d5)]||'*'+_0x1bbbca[_0x528ba2(0x1c1)]+_0x528ba2(0x1dc))[_0x528ba2(0x215)](_0x528ba2(0x259),_0x26e1b7[_0x528ba2(0x1c1)]);else{if(_0x26e1b7[_0x528ba2(0x1e2)])_0x51f11b=(_0x87bdb1['sSubject']||this[_0x528ba2(0x1fd)]||conn[_0x528ba2(0x1fd)]||'*'+_0x1bbbca[_0x528ba2(0x1e2)]+_0x528ba2(0x1ed))[_0x528ba2(0x215)](_0x528ba2(0x1c0),_0x26e1b7[_0x528ba2(0x1e2)]);else{if(_0x26e1b7[_0x528ba2(0x1e9)])_0x51f11b=(_0x87bdb1['sIcon']||this[_0x528ba2(0x20e)]||conn[_0x528ba2(0x20e)]||'*'+_0x1bbbca['icon']+_0x528ba2(0x1d1))[_0x528ba2(0x215)](_0x528ba2(0x246),_0x26e1b7[_0x528ba2(0x1e9)]);else{if(_0x26e1b7[_0x528ba2(0x1f7)])_0x51f11b=(_0x87bdb1['sRevoke']||this[_0x528ba2(0x249)]||conn[_0x528ba2(0x249)]||'*'+_0x1bbbca['revoke']+_0x528ba2(0x23c))[_0x528ba2(0x215)](_0x528ba2(0x219),_0x26e1b7['revoke']);else{if(_0x26e1b7[_0x528ba2(0x25d)]===!![])_0x51f11b=_0x87bdb1['sAnnounceOn']||this[_0x528ba2(0x1b4)]||conn[_0x528ba2(0x1b4)]||'*'+_0x1bbbca['announceOn']+'\x20Group\x20Is\x20Now\x20Closed!*';else{if(_0x26e1b7[_0x528ba2(0x25d)]===![])_0x51f11b=_0x87bdb1[_0x528ba2(0x1a3)]||this[_0x528ba2(0x1a3)]||conn[_0x528ba2(0x1a3)]||'*'+_0x1bbbca[_0x528ba2(0x23b)]+'\x20Group\x20Is\x20Now\x20Open!*';else{if(_0x26e1b7[_0x528ba2(0x214)]===!![])_0x51f11b=_0x87bdb1[_0x528ba2(0x1f6)]||this[_0x528ba2(0x1f6)]||conn[_0x528ba2(0x1f6)]||'*'+_0x1bbbca[_0x528ba2(0x1b7)]+_0x528ba2(0x24e);else _0x26e1b7[_0x528ba2(0x214)]===![]&&(_0x51f11b=_0x87bdb1[_0x528ba2(0x1e6)]||this['sRestrictOff']||conn[_0x528ba2(0x1e6)]||'*'+_0x1bbbca[_0x528ba2(0x1e3)]+_0x528ba2(0x1c9));}}}}}}if(!_0x51f11b)continue;await this['sendMessage'](_0x1e9dab,{'text':_0x51f11b,'mentions':this[_0x528ba2(0x1ba)](_0x51f11b)});}}export async function deleteUpdate(_0x405a69){const _0x558ba3=_0x588c5e;try{if(typeof process[_0x558ba3(0x232)][_0x558ba3(0x209)]===_0x558ba3(0x202)||process[_0x558ba3(0x232)][_0x558ba3(0x209)]['toLowerCase']()===_0x558ba3(0x211))return;const {fromMe:_0x303860,id:_0x2b9270,participant:_0x325c26}=_0x405a69;if(_0x303860)return;let _0x3297de=this['serializeM'](this[_0x558ba3(0x1ae)](_0x2b9270));if(!_0x3297de)return;let _0x46bf5b=global['db'][_0x558ba3(0x24b)][_0x558ba3(0x20f)][_0x3297de[_0x558ba3(0x221)]]||{};await this['reply'](conn[_0x558ba3(0x1a8)]['id'],(_0x558ba3(0x206)+_0x325c26[_0x558ba3(0x217)]`@`[0x0]+_0x558ba3(0x26a))[_0x558ba3(0x196)](),_0x3297de,{'mentions':[_0x325c26]}),this[_0x558ba3(0x1ee)](conn[_0x558ba3(0x1a8)]['id'],_0x3297de,![])[_0x558ba3(0x244)](_0x746971=>console['log'](_0x746971,_0x3297de));}catch(_0xaa3629){console['error'](_0xaa3629);}}export async function pollUpdate(_0x2c8023){const _0x9ac049=_0x588c5e;for(const {key:_0x539d87,update:_0x1e304e}of _0x2c8023){if(_0x2c8023[_0x9ac049(0x22c)]){const _0x1227c2=await this['serializeM'](this['loadMessage'](_0x539d87['id']));if(_0x1227c2){const _0x4943d3=await getAggregateVotesInPollMessage({'message':_0x1227c2[_0x9ac049(0x230)],'pollUpdates':_0x1227c2[_0x9ac049(0x22c)]});_0x2c8023[_0x9ac049(0x22c)][0x0][_0x9ac049(0x1ec)]=_0x4943d3,await console[_0x9ac049(0x19b)](_0x4943d3),this[_0x9ac049(0x26c)](_0x2c8023,_0x2c8023[_0x9ac049(0x22c)][0x0][_0x9ac049(0x1ec)]||_0x4943d3[_0x9ac049(0x21e)](_0x128bc3=>_0x128bc3[_0x9ac049(0x262)][_0x9ac049(0x241)]!==0x0)[0x0]?.[_0x9ac049(0x1fa)],_0x2c8023[_0x9ac049(0x230)]);}}}}export async function presenceUpdate(_0x112afa){const _0x2f1ffd=_0x588c5e,_0x236831=_0x112afa['id'],_0x5300c0=Object[_0x2f1ffd(0x23f)](_0x112afa[_0x2f1ffd(0x205)]),_0x5bf533=_0x112afa[_0x2f1ffd(0x205)][_0x5300c0]?.[_0x2f1ffd(0x1b1)],_0x4efb7b=global['db']['data']['users'][_0x5300c0[0x0]];if(_0x4efb7b?.[_0x2f1ffd(0x260)]&&_0x5bf533==='composing'&&_0x4efb7b[_0x2f1ffd(0x260)]>-0x1){if(_0x4efb7b[_0x2f1ffd(0x1eb)]){_0x4efb7b[_0x2f1ffd(0x260)]=-0x1,_0x4efb7b[_0x2f1ffd(0x199)]=_0x2f1ffd(0x207);return;}await console[_0x2f1ffd(0x19b)](_0x2f1ffd(0x235));const _0x3db221=_0x5300c0[0x0]['split']('@')[0x0],_0x196b9d=new Date()-_0x4efb7b[_0x2f1ffd(0x260)],_0x43fb57='\x0a@'+_0x3db221+_0x2f1ffd(0x1f0)+(_0x4efb7b[_0x2f1ffd(0x199)]?_0x4efb7b['afkReason']:_0x2f1ffd(0x1b3))+'\x0aFor\x20The\x20Past\x20'+_0x196b9d[_0x2f1ffd(0x238)]()+'.\x0a';this[_0x2f1ffd(0x1d7)](_0x236831,_0x43fb57,null,{'mentions':this[_0x2f1ffd(0x1ba)](_0x43fb57)}),_0x4efb7b[_0x2f1ffd(0x260)]=-0x1,_0x4efb7b[_0x2f1ffd(0x199)]='';}}global[_0x588c5e(0x240)]=(_0x2fc2c5,_0x103db7,_0x8dc40a)=>{const _0x29273b=_0x588c5e,_0x329ca3='👋🏻\x20Hai\x20*@'+_0x103db7[_0x29273b(0x204)][_0x29273b(0x217)]('@')[0x0]+'*,\x20',_0x4bed1a={'general':'⚙️','owner':'🪀','moderator':_0x29273b(0x1dd),'premium':'💎','group':'👥','private':'👻','admin':'👤','botAdmin':'😸','unreg':'🔒','nsfw':'🔞','rpg':'🎮','restrict':'🙊'},_0x10d421={'owner':'*'+_0x4bed1a[_0x29273b(0x18f)]+_0x29273b(0x1d9)+_0x329ca3+_0x29273b(0x252),'moderator':'*'+_0x4bed1a['moderator']+_0x29273b(0x1de)+_0x329ca3+'\x20This\x20Command\x20Can\x20Only\x20Be\x20Used\x20By\x20*Moderators*!','premium':'*'+_0x4bed1a['premium']+'\x20Premium\x20Query*\x0a\x0a\x20\x20\x20\x20'+_0x329ca3+_0x29273b(0x23e),'group':'*'+_0x4bed1a[_0x29273b(0x18e)]+_0x29273b(0x25c)+_0x329ca3+_0x29273b(0x19e),'private':'*'+_0x4bed1a[_0x29273b(0x21d)]+'\x20Private\x20Query*\x0a\x0a\x20\x20\x20\x20'+_0x329ca3+_0x29273b(0x1f9),'admin':'*'+_0x4bed1a[_0x29273b(0x1e7)]+_0x29273b(0x268)+_0x329ca3+_0x29273b(0x194),'botAdmin':'*'+_0x4bed1a[_0x29273b(0x22e)]+_0x29273b(0x1c2)+_0x329ca3+_0x29273b(0x1c7),'unreg':'*'+_0x4bed1a['unreg']+_0x29273b(0x1b2)+_0x329ca3+_0x29273b(0x267)+_0x103db7[_0x29273b(0x1fa)]+'.18*!','nsfw':'*'+_0x4bed1a['nsfw']+_0x29273b(0x254)+_0x329ca3+'\x20NSFW\x20Is\x20Not\x20Active.\x20Please\x20Contact\x20The\x20Group\x20Admin\x20To\x20Enable\x20This\x20Feature!','restrict':'*'+_0x4bed1a[_0x29273b(0x214)]+_0x29273b(0x1ca)+_0x329ca3+'\x20This\x20feature\x20is\x20*disabled*!'}[_0x2fc2c5];if(_0x10d421)return _0x103db7[_0x29273b(0x1d7)](_0x10d421);};let file=global[_0x588c5e(0x223)](import.meta[_0x588c5e(0x1be)],!![]);function _0x3b7f(){const _0x4d50b1=['@icon','plugin','random','sRevoke','isBanned','data','stats','remoteJid','\x20Group\x20Is\x20Now\x20Restricted\x20To\x20Participants\x20Only!*','lastSuccess','reloadHandler','autolevelup','\x20This\x20Command\x20Can\x20Only\x20Be\x20Used\x20By\x20The\x20*Bot\x20Owner*!','regTime','\x20NSFW\x20Query*\x0a\x0a\x20\x20\x20\x20','messages','total','antiToxic','10BBAfhR','@desc','@s.whatsapp.net','unreg','\x20Group\x20Query*\x0a\x0a\x20\x20\x20\x20','announce','redBright','./lib/print.js','afk','customPrefix','voters','slice','mods','useDocument','detect','\x20Please\x20Register\x20To\x20Use\x20This\x20Feature\x20By\x20Typing:\x0a\x0a*#register\x20name.age*\x0a\x0aExample:\x20*#register\x20','\x20Admin\x27s\x20Query*\x0a\x0a\x20\x20\x20\x20','endsWith','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20└─────────────\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','command','appenTextMessage','*Level\x20required\x20','splice','msgqueque','restartDB','group','owner','text','sPromote','👋🏻️','self','\x20This\x20Command\x20Is\x20Only\x20For\x20*Group\x20Admins*!','Tadpole','trim','2811886BcztUM','@whiskeysockets/baileys','afkReason','join','log','credit','\x0a*❖\x20Command:*\x20','\x20This\x20Command\x20Can\x20Only\x20Be\x20Used\x20In\x20*Group\x20Chats*!','groupMetadata','188eborIm','welcome','warn','sAnnounceOff','role','string','object','autoRead','user','sendMessage','key','sBye','antiSticker','5745834Kkzkvs','loadMessage','promote','find','lastKnownPresence','\x20Registration\x20Query*\x0a\x0a\x20\x20\x20\x20','No\x20Reason','sAnnounceOn','antiLink','function','restrictOn','fromMe','g.us','parseMention','prems','isInit','sdemote','url','disabled','@subject','desc','\x20Bot\x20Admin\x27s\x20Query*\x0a\x0a\x20\x20\x20\x20','\x0a*❖\x20Sender:*\x20','spromote','indexOf','viewStory','\x20Make\x20The\x20Bot\x20An\x20*Admin*\x20To\x20Use\x20This\x20Command!','age','\x20Group\x20Is\x20Now\x20Restricted\x20To\x20Admins\x20Only!*','\x20Inactive\x20Feature\x20Query*\x0a\x0a\x20\x20\x20\x20','15141APwvbA','*❖\x20Plugin:*\x20','expired','exec','chicken','\x0a*❖\x20Chat:*\x20','\x20Icon\x20Has\x20Been\x20Changed*','participants','number','1292600Cxwqqr','sDesc','2868975HRAIBX','reply','autoread','\x20Owner\x27s\x20Query*\x0a\x0a\x20\x20\x20\x20','demote','pushMessage','\x20Description\x20Has\x20Been\x20Changed\x20To*\x0a@desc','🛡️','\x20Moderator\x27s\x20Query*\x0a\x0a\x20\x20\x20\x20','simi','isCommand','cheater','subject','restrictOff','antiDelete','👋🏻','sRestrictOff','admin','level','icon','isGroup','banned','vote','\x20Subject\x20Has\x20Been\x20Changed\x20To*\x0a@subject','copyNForward','settings','\x20Has\x20Stopped\x20Being\x20Afk\x20And\x20Is\x20Currently\x20Typing.\x0a\x0aReason:\x20','\x0a\x0a${format(e)}','onWhatsApp','plugins','Update\x20handler.js','612MOlbhI','sRestrictOn','revoke','prefix','\x20This\x20Command\x20Can\x20Only\x20Be\x20Used\x20In\x20*Private\x20Chats*!','name','*乂\x20You\x20don\x27t\x20have\x20enough\x20gold*','call','sSubject','success','viewOnce','metadata','APIKeys','undefined','error','sender','presences','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20≡\x20deleted\x20a\x20message\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20┌─⊷\x20\x20𝘼𝙉𝙏𝙄\x20𝘿𝙀𝙇𝙀𝙏𝙀\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20▢\x20*Number\x20:*\x20@','User\x20Banned\x20Afk','premium','antidelete','isBaileys','statusview','nsfw','registered','sIcon','chats','sDemote','false','isArray','store','restrict','replace','20334732nIkXOL','split','superadmin','@revoke','includes','after','dirname','private','filter','status@broadcast','MODE','chat','users','__filename','lastclaim','pconly','@user','toLowerCase','getmsg','bank','gconly','6zkmweq','pollUpdates','status','botAdmin','jid','message','\x20@user\x20*is\x20now\x20admin*','env','readMessages','\x0a📄\x20*Error\x20Logs:*\x0a\x0a','AFK','queque','values','toTimeString','606AdGUfO','tags','announceOff','\x20Group\x20Link\x20Has\x20Been\x20Changed\x20To*\x0a@revoke','exp','\x20This\x20Command\x20Is\x20Only\x20For\x20*Premium\x20Members*!','keys','dfail','length','test','map','catch','before'];_0x3b7f=function(){return _0x4d50b1;};return _0x3b7f();}watchFile(file,async()=>{const _0x3f023c=_0x588c5e;unwatchFile(file),console[_0x3f023c(0x19b)](_0x3fdc73[_0x3f023c(0x25e)](_0x3f023c(0x1f4)));if(global[_0x3f023c(0x250)])console[_0x3f023c(0x19b)](await global[_0x3f023c(0x250)]());});