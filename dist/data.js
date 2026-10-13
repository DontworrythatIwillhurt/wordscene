/* 词间 · 中文语境优先的六级词库与原创阅读素材
 * 文章中的词会进入「语境词」；其余词进入「六级词库」，可以直接练习。
 * 词库采用可扩展的数据结构，后续可继续从标准词表导入，不影响阅读功能。
 */
const STORY_DATA = [
  {id:'cloud-gate',title:'云门试炼：第三声钟',englishTitle:'The Third Bell at Cloud Gate',category:'修仙志',tag:'入门试炼',color:'#d9e5df',symbol:'☁',mood:'从怯懦到破境',words:[['disciple','n.','弟子；门徒','a young disciple'],['spiritual','adj.','精神的；灵性的','spiritual energy'],['perseverance','n.','坚持不懈','show perseverance'],['temper','v.','磨炼；锻造','temper the will'],['breakthrough','n.','突破','make a breakthrough'],['realm','n.','境界；领域','enter a new realm'],['conceal','v.','隐藏','conceal a secret'],['formidable','adj.','强大的；难对付的','a formidable opponent']],
    cn:['沈砚入门三年，始终没有引来一缕灵气。第三声钟响起时，试炼石却在他掌下泛起微光，像是沉睡多年的火星。','众人都说那只是一点巧合。沈砚没有争辩，只把每日引气的时间从一刻延长到三刻，用耐心磨炼自己的心性。','石阶尽头，一位气势强大的师兄故意挡住去路。沈砚察觉对方在隐藏真正的境界，于是收起急躁，借山风的间隙完成了突破。'],
    en:[`After three years, Shen Yan was still an unremarkable [[disciple]]. When the third bell rang, a faint glow appeared beneath his palm, as if [[spiritual]] fire had awakened.`,`Everyone called it luck. Shen Yan did not argue. He extended his daily practice and used [[perseverance]] to [[temper]] his impatient mind.`,`At the end of the stairs stood a [[formidable]] senior who tried to block his way. Shen Yan sensed a power he meant to [[conceal]], stayed calm, and finally made a [[breakthrough]] into a new [[realm]].`]},
  {id:'ruins-lamp',title:'归墟灯影',englishTitle:'The Lamp Beneath the Ruins',category:'修仙志',tag:'古灯疑云',color:'#e5ded0',symbol:'✦',mood:'从好奇到警觉',words:[['ancient','adj.','古老的','an ancient shrine'],['obscure','adj.','晦涩的；不明的','an obscure inscription'],['relic','n.','遗物；遗迹','a forgotten relic'],['inscription','n.','铭文','read an inscription'],['summon','v.','召唤','summon a spirit'],['omen','n.','预兆','a strange omen'],['investigate','v.','调查','investigate the ruins'],['vanish','v.','消失','vanish without a trace']],
    cn:['归墟秘境的入口只在月蚀时出现。林照在残墙下发现一盏古灯，灯身刻着晦涩的铭文，旁边还压着一枚无人知晓来历的遗物。','她本想把灯带回宗门，却听见灯芯里传来第二种呼吸声。那不是吉兆。她没有贸然召唤其中的东西，而是先沿着灰尘留下的痕迹调查。','月影移过墙缝，灯火突然熄灭。下一瞬，同行的师弟凭空消失，只剩一行湿漉漉的脚印，向着禁地深处延伸。'],
    en:[`The entrance to the ruins appeared only during an eclipse. Lin Zhao found an [[ancient]] lamp beneath a broken wall. Its [[obscure]] [[inscription]] surrounded a forgotten [[relic]].`,`She heard a second breath inside the lamp. It felt like an [[omen]]. Rather than [[summon]] whatever waited there, she decided to [[investigate]] the dust and the broken seals.`,`When moonlight crossed the wall, the flame went out. Her companion seemed to [[vanish]] without a trace, leaving wet footprints that led towards the forbidden chamber.`]},
  {id:'moon-sword',title:'借月问剑',englishTitle:'A Question Asked of the Moon',category:'修仙志',tag:'剑意试心',color:'#dfe4ed',symbol:'☾',mood:'从争胜到自省',words:[['discern','v.','辨别；看清','discern the difference'],['provoke','v.','挑衅；激起','provoke a reaction'],['restraint','n.','克制；约束','exercise restraint'],['decisive','adj.','果断的','a decisive moment'],['accompany','v.','陪伴；伴随','accompany a traveler'],['profound','adj.','深刻的','a profound lesson'],['vow','n.','誓言','keep a vow'],['confront','v.','面对；对抗','confront fear']],
    cn:['月下问剑，先问心。顾停分辨不出师父留下的两道剑痕有什么不同，只知道其中一道总让他想起自己的骄傲。','对手不断挑衅，逼他先出剑。顾停握紧剑柄，却想起师父说过，真正的剑修必须有克制，不能让怒意替自己做决定。','决胜一刻，他没有刺向对手，而是转身挡住落石。那一剑不够凌厉，却让他明白：陪伴与守护同样深刻，面对恐惧比赢下比试更重要。'],
    en:[`Under the moon, Gu Ting tried to [[discern]] the difference between two sword marks. One of them revealed a pride he had never admitted.`,`His opponent continued to [[provoke]] him. Gu Ting held the hilt tightly, then chose [[restraint]] instead of anger.`,`At the [[decisive]] moment, he turned to block falling stones. The choice taught him a [[profound]] lesson: to [[confront]] fear and keep a [[vow]] mattered more than victory.`]},
  {id:'stolen-herb',title:'药谷失窃案',englishTitle:'The Missing Herb of Medicine Valley',category:'修仙志',tag:'宗门疑案',color:'#e5e7d5',symbol:'✿',mood:'从怀疑到求证',words:[['alchemy','n.','炼丹术','the art of alchemy'],['ingredient','n.','成分；药材','a rare ingredient'],['counterfeit','adj.','伪造的；假冒的','a counterfeit seal'],['trace','n.','痕迹；踪迹','follow a trace'],['suspicion','n.','怀疑','raise suspicion'],['motive','n.','动机','find a motive'],['recover','v.','找回；恢复','recover the herb'],['remedy','n.','疗法；药物','a useful remedy']],
    cn:['药谷最珍贵的月魄草在守夜时失窃。负责炼丹的弟子说自己一直在配药，可药柜上留下了一枚伪造的封印。','所有人的怀疑都指向新来的杂役。沈砚没有急着定罪，而是沿着药香和泥水混合的痕迹，逐一核对每个人的动机。','真相藏在废弃的炼丹房：月魄草被用来救一只受伤的灵兽。沈砚找回药草，也留下了一份更温和的药方。'],
    en:[`A precious herb disappeared from Medicine Valley during the night watch. The disciple in charge of [[alchemy]] claimed to be preparing medicine, but a [[counterfeit]] seal was found on the cabinet.`,`The theft raised [[suspicion]] around a new servant. Shen Yan followed a faint [[trace]] of mud and herbs, asking what [[motive]] each person might have.`,`The herb had been used to save an injured spirit beast. Shen Yan managed to [[recover]] it and left behind a gentler [[remedy]] instead.`]},
  {id:'tribulation-snow',title:'雪夜渡劫',englishTitle:'The Snowy Night of Tribulation',category:'修仙志',tag:'渡劫之夜',color:'#dce5ec',symbol:'❄',mood:'从孤独到新生',words:[['catastrophe','n.','灾难','avoid a catastrophe'],['withstand','v.','承受；抵挡','withstand pressure'],['cultivate','v.','修炼；培养','cultivate patience'],['solitary','adj.','孤独的；单独的','a solitary journey'],['turbulence','n.','动荡；紊乱','emotional turbulence'],['endure','v.','忍受；坚持','endure hardship'],['emerge','v.','出现；显露','emerge from darkness'],['transform','v.','改变；转化','transform the spirit']],
    cn:['雷云压在雪峰上，像一场即将降临的灾难。叶蘅独自站在阵心，知道这次渡劫不会有人替她承受。','第一道天雷落下，她用剑阵抵挡。第二道雷击碎了阵旗，她在动荡的灵力中想起师父教过的事：修炼不是追赶别人，而是培养能够忍受漫长孤独的心。','黎明前，叶蘅从黑暗和风雪中走出。她没有变得更强大到无所畏惧，却已经能够带着恐惧继续前行。'],
    en:[`Thunderclouds covered the peak like an approaching [[catastrophe]]. Ye Heng stood alone, ready to [[withstand]] the trial herself.`,`The first bolt struck the formation. The second created violent [[turbulence]]. She remembered that to [[cultivate]] was also to [[endure]] a long and [[solitary]] road.`,`Before dawn, she began to [[emerge]] from the snow. She was not fearless, but the trial had begun to [[transform]] her spirit.`]},
  {id:'star-platform',title:'观星台的偏差',englishTitle:'The Deviation at the Stargazing Tower',category:'修仙志',tag:'天象谜题',color:'#e2deeb',symbol:'✧',mood:'从笃定到修正',words:[['celestial','adj.','天体的；天上的','a celestial body'],['trajectory','n.','轨迹','a changing trajectory'],['phenomenon','n.','现象','a rare phenomenon'],['calculate','v.','计算','calculate the distance'],['reveal','v.','揭示；显露','reveal a pattern'],['hypothesis','n.','假设','test a hypothesis'],['predict','v.','预测','predict an event'],['anomaly','n.','异常','notice an anomaly']],
    cn:['观星台每夜记录天体轨迹，用来预测秘境开启的时间。负责推演的陆微发现，三颗星的位置出现了细微偏差。','长老认为那只是罕见天象，不值得打乱计划。陆微却重新计算距离，提出一个大胆假设：异常不是来自天空，而是来自地脉。','当她把阵图转向山腹，沉睡多年的灵脉终于显露。她没有预测到答案，却学会了先承认自己的模型可能不完整。'],
    en:[`The tower recorded the [[trajectory]] of every [[celestial]] body to [[predict]] when the secret realm would open. Lu Wei noticed an [[anomaly]] in the stars.`,`The elders called it a rare [[phenomenon]]. Lu Wei continued to [[calculate]] the distance and decided to test a new [[hypothesis]].`,`When she turned the map towards the mountain, the hidden vein was [[reveal]]ed. The result taught her that evidence can change a confident idea.`]},
  {id:'silent-rain',title:'雨夜无声',englishTitle:'Silence in the Rain',category:'悬疑案',tag:'现场笔记',color:'#dfe4e6',symbol:'⌁',mood:'从直觉到证据',words:[['witness','n.','目击者；证人','an eyewitness'],['contradict','v.','与……矛盾','contradict a statement'],['surveillance','n.','监控；监视','surveillance footage'],['suspicious','adj.','可疑的','a suspicious detail'],['alibi','n.','不在场证明','provide an alibi'],['verify','v.','核实','verify a claim'],['clue','n.','线索','follow a clue'],['disappear','v.','消失','disappear into the crowd']],
    cn:['雨夜的旧戏院没有观众，只有一盏坏掉的门灯。唯一的目击者说，案发时他一直站在售票口，却记不清凶手穿什么颜色的外套。','监控画面和他的说法互相矛盾：画面里，他在另一个出口停留了七分钟。那是可疑的细节，却还不能证明他就是凶手。','程雾核实了每一条线索，最后发现真正的关键是雨水冲掉的鞋印。凶手借人群离开，却没有注意到地面反光。'],
    en:[`The old theater was empty in the rain. The only [[witness]] claimed to have stayed by the ticket booth, but could not describe the coat.`,`The [[surveillance]] footage seemed to [[contradict]] him. The detail was [[suspicious]], but his [[alibi]] still needed to be [[verify]]ed.`,`Cheng Wu followed one small [[clue]]: a footprint washed by rain. The suspect tried to [[disappear]] into the crowd, but the wet floor reflected his shoes.`]},
  {id:'seventh-wharf',title:'第七码头',englishTitle:'The Seventh Wharf',category:'悬疑案',tag:'匿名线报',color:'#d9e2e2',symbol:'⚓',mood:'从追踪到揭露',words:[['anonymous','adj.','匿名的','an anonymous message'],['container','n.','集装箱；容器','a sealed container'],['intercept','v.','拦截；截取','intercept a signal'],['confidential','adj.','机密的','confidential files'],['transaction','n.','交易','an illegal transaction'],['counterfeit','n.','赝品；仿制品','a counterfeit document'],['evidence','n.','证据','collect evidence'],['pursue','v.','追赶；追查','pursue the suspect']],
    cn:['一条匿名短信把记者许棠引到第七码头：午夜会有一只没有标记的集装箱靠岸。短信只附了一串数字，像是机密交易的编号。','她截取了港口无线电里的片段，发现有人在寻找一批伪造证件。保安发现她后开始追赶，她只得躲进装卸车的阴影里。','警方根据她拍下的证据拦截了交易。真正重要的不是箱子里的钱，而是那些能让无数人消失在系统里的名字。'],
    en:[`An [[anonymous]] message led reporter Xu Tang to the seventh wharf. A sealed [[container]] would arrive at midnight, marked only by a number linked to a [[confidential]] [[transaction]].`,`She managed to [[intercept]] part of a radio signal about [[counterfeit]] documents. A guard noticed her, and she had to hide among the trucks.`,`The police used her [[evidence]] to stop the deal. When the suspects tried to flee, officers began to [[pursue]] them across the dock.`]},
  {id:'mirror-house',title:'镜屋',englishTitle:'The House of Mirrors',category:'悬疑案',tag:'心理迷局',color:'#e6dfeb',symbol:'◌',mood:'从迷失到清醒',words:[['reflection','n.','倒影；反映','a distorted reflection'],['psychological','adj.','心理的','psychological pressure'],['desperate','adj.','绝望的；拼命的','a desperate attempt'],['manipulate','v.','操纵；影响','manipulate perception'],['authentic','adj.','真实的','an authentic voice'],['perception','n.','感知；看法','change perception'],['motive','n.','动机','question a motive'],['distort','v.','扭曲','distort the truth']],
    cn:['镜屋每一面墙都能照出不同的自己。记者苏禾在里面找到了失踪画家的录音，却发现自己的倒影总比动作慢半拍。','有人不断用广播操纵她的感知，让她相信出口就在错误的方向。她几乎绝望时，想起画家留下的提示：最真实的声音不会要求你立刻相信它。','苏禾关掉广播，沿着回声找到暗门。镜子可以扭曲真相，但不能替人解释动机。'],
    en:[`Every wall in the house showed a different [[reflection]]. Su He found a recording by the missing painter, but the images began to [[distort]] her sense of time.`,`A voice tried to [[manipulate]] her [[perception]] under intense [[psychological]] pressure. In a [[desperate]] moment, she remembered that an [[authentic]] voice never demands instant belief.`,`She switched off the broadcast and followed the echo. A mirror could distort the truth, but it could not explain the painter's [[motive]].`]},
  {id:'three-days',title:'倒数三日',englishTitle:'Three Days to the Deadline',category:'悬疑案',tag:'倒计时',color:'#e9ded8',symbol:'⌛',mood:'从被动到反击',words:[['threaten','v.','威胁','threaten to expose'],['substantial','adj.','大量的；实质的','substantial damage'],['disclose','v.','透露；公开','disclose information'],['negotiate','v.','谈判','negotiate a release'],['precaution','n.','预防措施','take a precaution'],['collapse','v.','崩塌；失败','a plan collapses'],['deadline','n.','截止日期','meet a deadline'],['consequence','n.','后果','face the consequence']],
    cn:['三天前，顾言收到一封没有署名的邮件。寄件人威胁公开一份会造成重大损失的合同，并把截止日期设在周五午夜。','顾言没有立刻回复。他先采取预防措施，复制档案、通知律师，再去谈判对方想要的东西。对方的计划开始崩塌，因为每一次威胁都留下了记录。','午夜前，顾言公开了真正的证据。他知道任何选择都有后果，却不再让恐惧替自己决定。'],
    en:[`Three days before the [[deadline]], Gu Yan received an anonymous email. The sender [[threatened]] to [[disclose]] a contract that could cause [[substantial]] damage.`,`Gu Yan took a [[precaution]] before replying. He copied the files, contacted a lawyer, and tried to [[negotiate]]. The sender's plan began to [[collapse]] when every message became a record.`,`Before midnight, Gu Yan released the evidence. He understood the [[consequence]], but fear no longer made the decision for him.`]},
  {id:'empty-room',title:'空房间的脚印',englishTitle:'Footprints in the Empty Room',category:'悬疑案',tag:'邻室之谜',color:'#e3e0d8',symbol:'▧',mood:'从噪声到真相',words:[['tenant','n.','租户','a former tenant'],['property','n.','房产；财产','the property owner'],['adjacent','adj.','相邻的','an adjacent room'],['disturbance','n.','骚乱；打扰','report a disturbance'],['landlord','n.','房东','contact the landlord'],['concealed','adj.','隐藏的','a concealed passage'],['footprint','n.','脚印','a muddy footprint'],['reconstruct','v.','重建；还原','reconstruct the scene']],
    cn:['空房间已经三个月没有租户，却每晚传出家具拖动的声音。房东说相邻房间没人居住，也没有人报告过骚乱。','调查员顾舟在地板上发现一个泥脚印，方向与门锁完全相反。他联系旧租户，重新还原了这栋房子最近一次装修的过程。','墙纸后藏着一条窄道，通向隔壁废弃仓库。声音并非来自鬼魂，而是有人利用房产漏洞藏匿货物。'],
    en:[`The room had been empty for three months, yet furniture seemed to move every night. The [[landlord]] insisted that no [[tenant]] lived in the [[adjacent]] room.`,`A muddy [[footprint]] appeared on the floor. Zhou Gu contacted the former owner and began to [[reconstruct]] the renovation.`,`Behind the wallpaper was a [[concealed]] passage leading to a warehouse. The repeated [[disturbance]] was part of a scheme involving the [[property]].`]},
  {id:'fog-hotel',title:'雾中旅馆',englishTitle:'The Hotel in the Fog',category:'悬疑案',tag:'身份核验',color:'#dfe6e4',symbol:'▱',mood:'从疏忽到警惕',words:[['reservation','n.','预订','confirm a reservation'],['reception','n.','接待处','at the reception desk'],['corridor','n.','走廊','a narrow corridor'],['peculiar','adj.','奇怪的','a peculiar sound'],['identity','n.','身份','verify an identity'],['incident','n.','事件','report an incident'],['relevant','adj.','相关的','relevant information'],['discreet','adj.','谨慎的；不引人注意的','make a discreet inquiry']],
    cn:['大雾封住山路时，许棠只好住进唯一亮灯的旅馆。接待处没有登记册，前台却准确说出了她的预订号码。','夜里，走廊尽头传来奇怪的金属声。她没有贸然开门，而是用谨慎的方式询问清洁工，发现每个房间的门牌都被调换过。','警察赶来后核实了所有住客身份。那起看似微小的事件，最终牵出一条与失踪案有关的线索。'],
    en:[`When fog closed the road, Xu Tang stayed at the only lit hotel. At [[reception]], the clerk knew her [[reservation]] number but kept no register.`,`A [[peculiar]] sound came from the end of the [[corridor]]. She made a [[discreet]] inquiry instead of opening the door.`,`The police arrived to [[verify]] every guest's [[identity]]. The small [[incident]] revealed [[relevant]] information about a missing-person case.`]},
  {id:'old-archive',title:'老城档案室',englishTitle:'The Archive of the Old City',category:'悬疑案',tag:'旧案重启',color:'#e6e1d4',symbol:'▤',mood:'从尘封到重见',words:[['archive','n.','档案；档案馆','search an archive'],['deteriorate','v.','恶化；变坏','deteriorate over time'],['preserve','v.','保存；保护','preserve a record'],['municipal','adj.','市政的','municipal records'],['document','n.','文件；记录','a legal document'],['testimony','n.','证词','give testimony'],['preliminary','adj.','初步的','a preliminary report'],['relevant','adj.','相关的','relevant evidence']],
    cn:['老城档案室即将拆除，纸张在潮气里逐渐变坏。档案员陆宁在市政记录中找到一份被夹错位置的文件，日期比旧案早了十年。','一位老人愿意提供证词，但她只记得一盏红灯和一辆没有牌照的车。陆宁把初步报告与地图重叠，发现那条路正通向已被拆掉的码头。','被保存下来的旧纸片，终于成为与案件相关的证据。真相没有消失，只是被时间藏在了错误的抽屉里。'],
    en:[`The city planned to remove the old [[archive]], where paper records continued to [[deteriorate]]. Lu Ning found a misplaced [[municipal]] [[document]].`,`An elderly woman offered her [[testimony]]. A [[preliminary]] map showed that her memory was connected to the old harbor.`,`After the record was [[preserve]]d, it became [[relevant]] evidence. The truth had not vanished; it had been stored in the wrong drawer.`]},
  {id:'sea-recording',title:'海边录音',englishTitle:'The Recording by the Sea',category:'悬疑案',tag:'异常信号',color:'#dbe5e8',symbol:'◒',mood:'从噪声到回声',words:[['acoustic','adj.','声音的；听觉的','an acoustic signal'],['frequency','n.','频率','a specific frequency'],['transmission','n.','传送；传播','radio transmission'],['drown','v.','淹没；压过','drown out a voice'],['signal','n.','信号','detect a signal'],['marine','adj.','海洋的','marine research'],['hypothesis','n.','假设','support a hypothesis'],['reproduce','v.','重现；复制','reproduce the sound']],
    cn:['海洋研究员在礁石边录到一段规律的低鸣。海浪足以淹没普通声音，但这段信号在同一频率上重复出现。','团队提出了海底设备故障的假设，却无法解释录音中夹杂的人声。为了重现声音，他们把设备放进水下，等待潮汐改变。','第二次录音证实那不是幻听。信号来自一座废弃灯塔，里面藏着一台仍在发射的旧式电台。'],
    en:[`The researchers recorded a low [[acoustic]] sound by the sea. Waves could [[drown]] out most voices, but this [[signal]] repeated at a specific [[frequency]].`,`Their first [[hypothesis]] involved a broken underwater device. They studied the [[transmission]] and tried to [[reproduce]] the sound.`,`The second recording proved that the voice was real. The source was an abandoned lighthouse, not a natural [[marine]] phenomenon.`]},
  {id:'paper-cipher',title:'纸上密码',englishTitle:'The Cipher on Paper',category:'悬疑案',tag:'密码推演',color:'#e9e2d2',symbol:'⌘',mood:'从混乱到连贯',words:[['cipher','n.','密码；暗号','break a cipher'],['sequence','n.','顺序；序列','a numerical sequence'],['derive','v.','推导；获得','derive a meaning'],['decipher','v.','破译','decipher a message'],['pattern','n.','模式；图案','recognize a pattern'],['deliberate','adj.','故意的；深思熟虑的','a deliberate choice'],['encrypt','v.','加密','encrypt a file'],['coherent','adj.','连贯的','a coherent explanation']],
    cn:['死者桌上只有一张画满圆点的纸。警察以为那是随手涂鸦，密码爱好者秦遥却发现数字顺序每隔七位重复。','她从日期中推导出一组坐标，随后破译出一句话：不要相信第一份报告。那些看似混乱的图案，其实是故意留下的提醒。','纸张背面还有一段加密文件。秦遥把两段信息拼在一起，得到一个连贯的解释：案件从一开始就被人改写过。'],
    en:[`The dead man's desk held a page covered with dots. Qin Yao noticed a repeated [[sequence]] and began to break the [[cipher]].`,`She managed to [[derive]] coordinates and [[decipher]] a sentence. The strange [[pattern]] was a [[deliberate]] warning, not random ink.`,`A second file had been [[encrypt]]ed on the back. Together, the clues produced a [[coherent]] explanation.`]},
  {id:'silent-testimony',title:'无人证词',englishTitle:'The Testimony of No One',category:'悬疑案',tag:'庭审疑云',color:'#e4e1e2',symbol:'§',mood:'从成见到审慎',words:[['credibility','n.','可信度','question credibility'],['prosecutor','n.','检察官','the prosecutor argued'],['inconsistent','adj.','不一致的','an inconsistent account'],['articulate','v.','清晰表达','articulate an idea'],['verdict','n.','裁决；判决','deliver a verdict'],['appeal','v.','上诉','appeal the decision'],['assumption','n.','假定；假设','challenge an assumption'],['objective','adj.','客观的','an objective review']],
    cn:['庭审中没有目击者，只有一份自动生成的语音记录。检察官认为它足以证明被告在场，辩护律师却指出录音前后有三处不一致。','年轻的技术员终于清晰说明，系统会把背景噪声当成人声补全。原本“没有人证”并不等于没有证据，而是提醒所有人重新检查假设。','法官要求进行客观复核，最后推翻了草率的判决。真正可靠的裁决，必须允许人们对它提出上诉。'],
    en:[`There was no witness, only an automatic recording. The [[prosecutor]] claimed it proved presence, but the defense questioned its [[credibility]] because the account was [[inconsistent]].`,`The technician finally managed to [[articulate]] how the system filled background noise with invented words. The old [[assumption]] needed to be challenged.`,`After an [[objective]] review, the judge refused to accept a rushed [[verdict]]. The defense decided to [[appeal]] the decision.`]}
];

/* 高频六级扩展词：没有故事语境的词也可以在词库里直接练习。 */
const CET6_EXTRA = `abandon|v.|放弃|abandon a plan
abnormal|adj.|不正常的|abnormal behavior
abrupt|adj.|突然的|an abrupt change
absurd|adj.|荒谬的|an absurd idea
accelerate|v.|加速|accelerate growth
accommodate|v.|容纳；适应|accommodate visitors
accumulate|v.|积累|accumulate experience
adequate|adj.|足够的|adequate evidence
adjacent|adj.|邻近的|adjacent buildings
advocate|v.|提倡；拥护|advocate reform
alter|v.|改变|alter the design
ambiguous|adj.|模棱两可的|an ambiguous answer
amend|v.|修订|amend a law
anticipate|v.|预期；预料|anticipate demand
apparatus|n.|装置；器械|laboratory apparatus
arbitrary|adj.|任意的；武断的|an arbitrary rule
assemble|v.|集合；组装|assemble the parts
attribute|v.|归因于|attribute success to effort
authentic|adj.|真实的|an authentic account
automate|v.|使自动化|automate the process
beneficial|adj.|有益的|beneficial effects
capacity|n.|能力；容量|production capacity
cease|v.|停止|cease operations
coincide|v.|巧合；一致|coincide with events
compel|v.|迫使|compel a response
compatible|adj.|兼容的|compatible devices
comprehensive|adj.|全面的|a comprehensive review
conceive|v.|构想；怀孕|conceive an idea
consecutive|adj.|连续的|three consecutive days
contradictory|adj.|矛盾的|contradictory evidence
controversial|adj.|有争议的|a controversial issue
convert|v.|转换|convert energy
crucial|adj.|关键的|a crucial decision
deceive|v.|欺骗|deceive the public
decline|v.|下降；拒绝|decline an offer
deduce|v.|推断|deduce the truth
deficiency|n.|缺乏；不足|iron deficiency
demonstrate|v.|证明；展示|demonstrate ability
deprive|v.|剥夺|deprive someone of rights
diminish|v.|减少；削弱|diminish the risk
discriminate|v.|歧视；区分|discriminate against people
dominate|v.|支配|dominate the market
elaborate|adj.|精心制作的|an elaborate plan
eliminate|v.|消除；淘汰|eliminate errors
embrace|v.|拥抱；接受|embrace change
empirical|adj.|经验主义的|empirical evidence
enhance|v.|提高；增强|enhance efficiency
enormous|adj.|巨大的|enormous pressure
equivalent|adj.|等价的|an equivalent amount
erode|v.|侵蚀；削弱|erode confidence
exaggerate|v.|夸大|exaggerate the danger
exclude|v.|排除；不包括|exclude a possibility
explicit|adj.|明确的|explicit instructions
facilitate|v.|促进；使便利|facilitate communication
finite|adj.|有限的|finite resources
fluctuate|v.|波动|prices fluctuate
formulate|v.|制定；构想|formulate a policy
forthcoming|adj.|即将到来的|forthcoming elections
frustrate|v.|使沮丧；阻挠|frustrate an attempt
fundamental|adj.|根本的|fundamental principles
generate|v.|产生|generate electricity
genuine|adj.|真诚的；真正的|genuine concern
hierarchy|n.|等级制度|social hierarchy
highlight|v.|突出；强调|highlight a problem
identical|adj.|完全相同的|identical twins
implement|v.|实施|implement a policy
implicit|adj.|含蓄的；暗示的|implicit meaning
induce|v.|诱导；引起|induce sleep
inevitable|adj.|不可避免的|an inevitable result
inhibit|v.|抑制|inhibit growth
innovative|adj.|创新的|an innovative method
integrate|v.|整合|integrate information
intense|adj.|强烈的|intense competition
intricate|adj.|复杂精细的|an intricate system
isolate|v.|隔离；孤立|isolate the cause
legitimate|adj.|合法的；正当的|a legitimate concern
likewise|adv.|同样地|likewise important
manipulate|v.|操纵|manipulate data
maximize|v.|最大化|maximize benefits
mediate|v.|调解；居中|mediate a dispute
migrate|v.|迁移|birds migrate
minimal|adj.|最小的|minimal damage
mutual|adj.|相互的|mutual trust
neutral|adj.|中立的|remain neutral
notion|n.|观念；想法|a common notion
oblige|v.|迫使；责成|oblige someone to act
occupy|v.|占据；使忙碌|occupy a position
offset|v.|抵消|offset the cost
overlap|v.|重叠|overlap in meaning
paradox|n.|悖论|an apparent paradox
persist|v.|坚持；持续|persist in doing
preliminary|adj.|初步的|preliminary findings
presume|v.|假定|presume innocence
prohibit|v.|禁止|prohibit smoking
prominent|adj.|突出的；显著的|a prominent scholar
protocol|n.|协议；规程|follow a protocol
qualitative|adj.|定性的|qualitative analysis
quantitative|adj.|定量的|quantitative research
radical|adj.|根本的；激进的|radical reform
random|adj.|随机的|a random sample
refine|v.|改进；提炼|refine a method
reinforce|v.|加强|reinforce a structure
reluctant|adj.|不情愿的|reluctant to agree
render|v.|使成为；提供|render assistance
restore|v.|恢复；修复|restore confidence
retain|v.|保留|retain information
rigid|adj.|僵硬的；严格的|rigid rules
simultaneous|adj.|同时的|simultaneous events
sole|adj.|唯一的|the sole reason
spontaneous|adj.|自发的|a spontaneous decision
subsequent|adj.|随后的|subsequent events
subtle|adj.|微妙的|a subtle difference
sufficient|adj.|充分的| sufficient time
supplement|v.|补充|supplement the evidence
suppress|v.|压制；抑制|suppress a reaction
sustain|v.|维持；支撑| sustain growth
terminal|adj.|末端的；终点的|terminal station
thereby|adv.|从而|thereby reducing cost
threshold|n.|门槛；阈值|cross a threshold
transmit|v.|传送；传播|transmit a signal
undergo|v.|经历|undergo treatment
undertake|v.|承担；着手|undertake research
unprecedented|adj.|前所未有的|unprecedented change
utilize|v.|利用|utilize resources
whereas|conj.|然而；而|whereas the other...
withstand|v.|抵挡；承受|withstand pressure
yield|v.|产生；屈服|yield results`;

const EXTRA_WORDS = CET6_EXTRA.split('\n').map(line=>{const [word,pos,meaning,phrase]=line.split('|');return {id:word,word,pos,meaning,phrase:phrase.trim(),storyId:null,source:'补充词汇',example:''};});
const extraMap = new Map(EXTRA_WORDS.map(w=>[w.id,w]));
// Avoid matchAll / flatMap and regex lookbehind in older mobile browser engines.
function wordsceneMatches(text,pattern){
  const matches=[];
  pattern.lastIndex=0;
  let match;
  while((match=pattern.exec(text))!==null){matches.push(match);if(!match[0].length)pattern.lastIndex++;}
  return matches;
}
const additionalStories = CHAPTERS.map(([type,title,en,cn1,cn2,en1,en2],index)=>{
  const cn=[cn1,cn2], english=[en1,en2];
  const words=wordsceneMatches(`${cn1} ${cn2}`,/\[\[([^|]+)\|([^\]]+)\]\]/g).map(([,word,meaning])=>[word,'',meaning,'']);
  return {id:`volume-${index+1}`,title,category:type==='仙'?'修仙志':'悬疑案',tag:type==='仙'?'山中札记':'证据档案',color:type==='仙'?'#dce5d9':'#e0e2eb',symbol:type==='仙'?'☾':'◈',mood:'先理解，再回忆',words,cn,en:english,englishTitle:en};
});
const displayAliases={verify:'verified',reveal:'revealed',preserve:'preserved',encrypt:'encrypted'};

let dictionaryMap=new Map();
let STORIES=[];
let STORY_WORDS=[];
let BUILTIN_WORDS=[];
let STORY_INDEX=new Map();
let BUILTIN_INDEX=new Map();
let CONTEXTUAL_IDS=new Set();
let COVERAGE={reference:0,contextual:0,storyUnique:0,total:0,coveredTotal:0};
const WORDSCENE_DATA_STATE={dictionary:false,cultivation:false,mystery:false,shell:false};
const WORDSCENE_CORE_WORDS=(typeof WORDSCENE_CORE_VOCAB!=='undefined'?WORDSCENE_CORE_VOCAB:[]).map(([id,pos,meaning,hasDictionary,levelMask])=>({id,word:id,pos,meaning,dictionaryMeaning:meaning,hasDictionary,levels:[...(levelMask&1?['四级基础']:[]),...(levelMask&2?['六级']:[])],phrase:'',example:'',source:hasDictionary?'六级词库':'小说补充词'}));
const WORDSCENE_CORE_INDEX=new Map(WORDSCENE_CORE_WORDS.map(w=>[w.id,w]));
const WORDSCENE_KNOWN_STORIES=new Set(typeof WORDSCENE_OLD_STORY_IDS!=='undefined'?WORDSCENE_OLD_STORY_IDS:[]);
function isKnownWordsceneStory(id){return STORY_INDEX.has(id)||WORDSCENE_KNOWN_STORIES.has(id);}
const WORDSCENE_DICTIONARY_PARTS=new Map();
const WORDSCENE_DETAIL_IDS=new Set();
function applyWordsceneDictionaryPayload(payload){
  if(!payload||!Number.isInteger(payload.bucket)||!Array.isArray(payload.words))return;
  WORDSCENE_DICTIONARY_PARTS.set(payload.bucket,payload.words);
  for(const word of payload.words){
    if(!word||!BUILTIN_INDEX.has(word.id))continue;
    dictionaryMap.set(word.id,word);
    WORDSCENE_DETAIL_IDS.add(word.id);
    const current=BUILTIN_INDEX.get(word.id);Object.assign(current,word,{meaning:current.meaning||word.meaning,dictionaryMeaning:word.dictionaryMeaning||word.meaning});
  }
  if(typeof refreshWordIndex==='function')refreshWordIndex();
}

function wordsceneHasFullBundle(){
  return typeof DICTIONARY_WORDS!=='undefined' && DICTIONARY_WORDS && DICTIONARY_WORDS.length
    && typeof EXPANDED_STORIES!=='undefined' && EXPANDED_STORIES && EXPANDED_STORIES.length
    && typeof CLOZE_STORIES!=='undefined' && CLOZE_STORIES && CLOZE_STORIES.length;
}

function assembleWordsceneData(expandedStories, clozeStories, dictionaryWords){
  const dictWords=dictionaryWords?.length?dictionaryWords:WORDSCENE_CORE_WORDS;
  dictionaryMap=new Map(dictWords.map(w=>[w.id,w]));
  const clozeRevisions=new Map((clozeStories||[]).map(story=>[story.id,story.cn]));
  const coreRaw=[...STORY_DATA,...additionalStories];
  const expandedMap=new Map((expandedStories||[]).map(s=>[s.id,s]));
  const coreMap=new Map(coreRaw.map(s=>[s.id,s]));
  let rawList;
  if(typeof WORDSCENE_CATALOG!=='undefined'&&WORDSCENE_CATALOG?.stories?.length){
    rawList=WORDSCENE_CATALOG.stories.map(entry=>{
      if(expandedMap.has(entry.id))return expandedMap.get(entry.id);
      if(coreMap.has(entry.id))return coreMap.get(entry.id);
      return {
        id:entry.id,title:entry.title,englishTitle:entry.englishTitle,category:entry.category,tag:entry.tag,
        color:entry.color,symbol:entry.symbol,mood:entry.mood,
        cn:[entry.excerpt||''],en:[String(entry.englishTitle||entry.title)],
        words:(entry.wordIds||[]).map(id=>[id,'','','']),
        _shell:true
      };
    });
  }else{
    rawList=[...coreRaw,...(expandedStories||[])];
  }
  STORIES=rawList.map((raw,index)=>{
    const shell=!!raw._shell;
  const s={...raw,cn:clozeRevisions.get(raw.id)||raw.cn,mood:raw.category==='修仙志'?'权衡与抉择':'疑点与线索',number:index+1,englishTitle:raw.englishTitle||raw.en};
    if(Array.isArray(s.englishTitle)) s.englishTitle='WORDSCENE · '+String(index+1).padStart(2,'0');
    if(!Array.isArray(s.en)) s.en=[String(s.en||s.englishTitle||'')];
    if(!Array.isArray(s.cn)) s.cn=[String(s.cn||'')];
    s.en=s.en.map(p=>String(p).replace(/\[\[(verify|reveal|preserve|encrypt)\]\]ed/g,(_,id)=>`[[${id}|${displayAliases[id]}]]`).replace('[[threatened]]','[[threaten|threatened]]'));
    let ids;
    if(shell){
      ids=(raw.words||[]).map(w=>Array.isArray(w)?w[0]:w.id||w).filter(Boolean);
    }else{
      ids=[...new Set([].concat(...s.en.map(p=>wordsceneMatches(p,/\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g).map(m=>m[1]))))];
    }
    s.words=ids.map(id=>{
      const declared=(raw.words||[]).find(w=>w[0]===id||w.id===id),base=dictionaryMap.get(id)||extraMap.get(id)||{};
      const declaredPos=Array.isArray(declared)?declared[1]:declared?.pos;
      const declaredMeaning=Array.isArray(declared)?declared[2]:declared?.meaning;
      const declaredPhrase=Array.isArray(declared)?declared[3]:declared?.phrase;
      const pi=s.en.findIndex(p=>p.includes(`[[${id}]]`)||p.includes(`[[${id}|`));
      const paragraph=s.en[pi]||'';
      const sentence=paragraph.replace(/([.!?])\s+/g,'$1\u0000').split('\u0000').find(p=>p.includes(`[[${id}]]`)||p.includes(`[[${id}|`))||paragraph;
      const plain=t=>String(t||'').replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g,(_,wid,label)=>label||wid);
      const marker=wordsceneMatches(sentence,/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g).find(m=>m[1]===id);
      const chinese=s.cn.find(p=>p.includes(`[[${id}|`))||s.cn[pi]||'';
      const chineseMarker=wordsceneMatches(chinese,/\[\[([^|\]]+)\|([^\]]+)\]\]/g).find(m=>m[1]===id);
      return {...base,id,word:id,pos:declaredPos||base.pos||'',meaning:chineseMarker?.[2]||declaredMeaning||base.meaning||'',phrase:declaredPhrase||'',example:plain(sentence),surface:marker?.[2]||id,context:plain(chinese),storyId:s.id,source:s.title};
    });
    s._shell=shell&&!clozeRevisions.has(raw.id);
    // A core/expanded story with cloze applied is complete even if dictionary pending.
    if(!shell&&clozeRevisions.has(raw.id)) s._shell=false;
    if(shell&&clozeRevisions.has(raw.id)&&expandedMap.has(raw.id)) s._shell=false;
    return s;
  });
  // Mark hydrated when we have both expanded body and cloze for that id.
  STORIES.forEach(s=>{
    if(expandedMap.has(s.id)&&clozeRevisions.has(s.id)) s._shell=false;
    if(coreMap.has(s.id)&&clozeRevisions.has(s.id)) s._shell=false;
  });
  STORY_WORDS=[].concat(...STORIES.map(s=>s.words));
  const mergedWords=new Map(dictWords.map(w=>[w.id,{...w}]));
  for(const w of EXTRA_WORDS)if(!mergedWords.has(w.id))mergedWords.set(w.id,w);
  for(const w of STORY_WORDS){const old=mergedWords.get(w.id)||{};mergedWords.set(w.id,{...old,...w,dictionaryMeaning:old.dictionaryMeaning||old.meaning||w.meaning,storyIds:[...new Set([...(old.storyIds||[]),w.storyId])]});}
  BUILTIN_WORDS=[...mergedWords.values()];
  STORY_INDEX=new Map(STORIES.map(s=>[s.id,s]));
  BUILTIN_INDEX=new Map(BUILTIN_WORDS.map(w=>[w.id,w]));
  CONTEXTUAL_IDS=new Set(STORY_WORDS.map(w=>w.id));
  const catalogCov=typeof WORDSCENE_CATALOG!=='undefined'?WORDSCENE_CATALOG?.meta?.coverage:null;
  COVERAGE={reference:dictionaryWords?.length||catalogCov?.reference||WORDSCENE_CORE_WORDS.filter(w=>w.hasDictionary).length,contextual:dictionaryWords?.length?dictionaryWords.filter(w=>CONTEXTUAL_IDS.has(w.id)).length:(catalogCov?.contextual||CONTEXTUAL_IDS.size),storyUnique:CONTEXTUAL_IDS.size,total:Math.max(BUILTIN_WORDS.length,catalogCov?.total||0),coveredTotal:BUILTIN_WORDS.filter(w=>CONTEXTUAL_IDS.has(w.id)).length};
  WORDSCENE_DATA_STATE.shell=STORIES.some(s=>s._shell);
  WORDSCENE_DATA_STATE.dictionary=Boolean(dictionaryWords?.length);
}

function assembleFromCatalog(){
  if(typeof WORDSCENE_CATALOG==='undefined'||!WORDSCENE_CATALOG?.stories?.length)return false;
  const cat=WORDSCENE_CATALOG;
  STORIES=cat.stories.map(entry=>{
    const words=(entry.wordIds||[]).map(id=>({...WORDSCENE_CORE_INDEX.get(id),id,word:id,phrase:'',example:'',surface:id,context:entry.excerpt||'',storyId:entry.id,source:entry.title}));
    return {
      id:entry.id,title:entry.title,englishTitle:entry.englishTitle,category:entry.category,tag:entry.tag,
      color:entry.color,symbol:entry.symbol,mood:entry.mood,number:entry.number,
      cn:[entry.excerpt||''],en:[String(entry.englishTitle||entry.title)],
      words,wordCount:entry.wordCount||words.length,_shell:true
    };
  });
  STORY_WORDS=[].concat(...STORIES.map(s=>s.words));
  const merged=new Map(WORDSCENE_CORE_WORDS.map(w=>[w.id,{...w}]));
  for(const w of EXTRA_WORDS)if(!merged.has(w.id))merged.set(w.id,{...w});
  for(const w of STORY_WORDS){const old=merged.get(w.id)||{};merged.set(w.id,{...old,...w,dictionaryMeaning:old.dictionaryMeaning||old.meaning||w.meaning,storyIds:[...new Set([...(old.storyIds||[]),w.storyId])]});}
  BUILTIN_WORDS=[...merged.values()];
  STORY_INDEX=new Map(STORIES.map(s=>[s.id,s]));
  BUILTIN_INDEX=new Map(BUILTIN_WORDS.map(w=>[w.id,w]));
  CONTEXTUAL_IDS=new Set(STORY_WORDS.map(w=>w.id));
  COVERAGE=cat.meta?.coverage||{reference:cat.meta?.words||0,contextual:cat.meta?.words||0,storyUnique:CONTEXTUAL_IDS.size,total:cat.meta?.words||BUILTIN_WORDS.length,coveredTotal:cat.meta?.words||BUILTIN_WORDS.length};
  WORDSCENE_DATA_STATE.shell=true;
  return true;
}

function mergeStoryChunk(chunk){
  if(!chunk)return;
  const expanded=globalThis.EXPANDED_STORIES||(globalThis.EXPANDED_STORIES=[]);
  const cloze=globalThis.CLOZE_STORIES||(globalThis.CLOZE_STORIES=[]);
  const seenExp=new Set(expanded.map(s=>s.id));
  const seenCloze=new Set(cloze.map(s=>s.id));
  for(const s of chunk.expanded||[])if(!seenExp.has(s.id)){expanded.push(s);seenExp.add(s.id);}
  for(const s of chunk.cloze||[])if(!seenCloze.has(s.id)){cloze.push(s);seenCloze.add(s.id);}
}

if(wordsceneHasFullBundle()){
  assembleWordsceneData(EXPANDED_STORIES,CLOZE_STORIES,DICTIONARY_WORDS);
  WORDSCENE_DATA_STATE.cultivation=true;
  WORDSCENE_DATA_STATE.mystery=true;
}else if(!assembleFromCatalog()){
  STORIES=[];
  STORY_WORDS=[];
  const seed=new Map(WORDSCENE_CORE_WORDS.map(w=>[w.id,{...w}]));
  EXTRA_WORDS.forEach(w=>{if(!seed.has(w.id))seed.set(w.id,w);});
  BUILTIN_WORDS=[...seed.values()];
  STORY_INDEX=new Map();
  BUILTIN_INDEX=new Map(BUILTIN_WORDS.map(w=>[w.id,w]));
  CONTEXTUAL_IDS=new Set();
  COVERAGE={reference:0,contextual:0,storyUnique:0,total:0,coveredTotal:0};
  WORDSCENE_DATA_STATE.shell=true;
}

function maskSurface(sentence,surface){
  if(!surface)return sentence;
  const literal=surface.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  return sentence.replace(new RegExp(`(^|[^A-Za-z])${literal}(?![A-Za-z])`,'ig'),(_,prefix)=>prefix+'________');
}
