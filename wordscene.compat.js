var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _a;
(function() {
  if (typeof globalThis === "undefined") window.globalThis = window;
  if (!Object.fromEntries) Object.fromEntries = function(entries) {
    var result = {};
    entries.forEach(function(entry) {
      Object.defineProperty(result, entry[0], { value: entry[1], enumerable: true, writable: true, configurable: true });
    });
    return result;
  };
  if (!Object.entries) Object.entries = function(object) {
    return Object.keys(object).map(function(key) {
      return [key, object[key]];
    });
  };
  if (!Object.values) Object.values = function(object) {
    return Object.keys(object).map(function(key) {
      return object[key];
    });
  };
  var dialogs = document.querySelectorAll("dialog"), active = null, previousFocus = null;
  function syncBackdrop() {
    document.body.classList.toggle("dialog-fallback-open", !!document.querySelector("dialog.dialog-fallback[open]"));
  }
  for (var i = 0; i < dialogs.length; i++) {
    var dialog = dialogs[i];
    if (typeof dialog.showModal === "function" && typeof dialog.close === "function") continue;
    dialog.classList.add("dialog-fallback");
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    if (!("open" in dialog)) Object.defineProperty(dialog, "open", { get: function() {
      return this.hasAttribute("open");
    }, set: function(value) {
      if (value) this.setAttribute("open", "");
      else this.removeAttribute("open");
    } });
    dialog.showModal = function() {
      previousFocus = document.activeElement;
      active = this;
      this.setAttribute("open", "");
      syncBackdrop();
      var focusable = this.querySelector("button,input,select,textarea,a[href]");
      if (focusable) focusable.focus();
    };
    dialog.close = function() {
      var wasOpen = this.hasAttribute("open");
      this.removeAttribute("open");
      syncBackdrop();
      if (active === this) active = null;
      if (previousFocus && document.documentElement.contains(previousFocus)) previousFocus.focus();
      if (wasOpen) {
        var event = document.createEvent("Event");
        event.initEvent("close", false, false);
        this.dispatchEvent(event);
      }
    };
  }
  document.addEventListener("keydown", function(event) {
    if (!active) return;
    if (event.key === "Escape") {
      event.preventDefault();
      active.close();
      return;
    }
    if (event.key !== "Tab") return;
    var controls = Array.prototype.filter.call(active.querySelectorAll("button,input,select,textarea,a[href],[tabindex]"), function(element) {
      return !element.disabled && element.tabIndex >= 0 && element.getClientRects().length;
    });
    if (!controls.length) {
      event.preventDefault();
      return;
    }
    var first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || !active.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !active.contains(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  });
})();
;
const CHAPTERS = [
  [
    "仙",
    "山契",
    "The Mountain Covenant",
    "山脚的水井一夜枯了。宗门账册却写着，今年灵脉的[[output|产出]]比去年更多。掌事要沈砚先向村民收取供奉，他站在井边，没有把征收令拿出来。井底的绳结仍是湿的，说明水并不是慢慢干涸的。",
    "他沿山势查到一条新开的支渠。把灵水引向内门花园的命令盖着师父的印。沈砚请求[[suspend|暂停]]引水，直到双方重新商定山契。师父没有回答，只把那枚印章推到他面前：明日议事，你来说明理由。",
    "The records reported a higher [[output]], but the village well was dry.",
    "Shen Yan asked the council to [[suspend]] the diversion of water."
  ],
  [
    "仙",
    "渡口的空舟",
    "The Empty Ferry",
    "摆渡人说，昨夜他只载了三个人。岸边却留着四双鞋，河上的空舟也比平日沉。林照想直接下水，老船工拦住她，让她先看船沿：四处受力的痕迹并不[[symmetrical|对称]]。",
    "第四个乘客并没有登舟。有人把装着铁砂的布袋绑在船侧，制造船满的假象。林照终于找到失踪者藏身的苇荡，却没有立刻问罪；眼前的人满身伤痕，需要先得到[[shelter|庇护]]，再说明逃亡的原因。",
    "The marks on the boat were not [[symmetrical]].",
    "The injured traveler needed [[shelter]] before he could explain his escape."
  ],
  [
    "仙",
    "旧阵新雪",
    "Snow on the Old Formation",
    "守山阵在雪夜熄灭，执事把错归给刚入门的弟子。陆微发现，阵旗所用的铜线已经被盐雾[[corrode|腐蚀]]，外面新刷的红漆只是遮住了裂纹。这个错误比一个弟子的疏忽古老得多。",
    "她把每一段铜线按安装日期排开，发现账册中的维修从未发生。修好阵法不够，还必须[[rectify|纠正]]记录。天亮后，陆微把损坏的铜线放上议事桌，要求以后每次维修都留下两个人的签字。",
    "Salt can [[corrode]] the copper beneath a coat of paint.",
    "Lu Wei asked the council to [[rectify]] the maintenance records."
  ],
  [
    "仙",
    "丹炉余温",
    "The Warm Furnace",
    "丹师声称自己整晚不在药房，炉壁却还有余温。叶蘅没有立即质疑，因为厚铜也可能缓慢散热。她取来一只相同的炉，记录冷却速度，用它作为[[comparison|对照]]，直到夜深。",
    "两只炉温差很大。丹师终于承认，他为重病的师妹用了禁药，但没有人能保证疗效。叶蘅请医修评估每一种[[hazard|风险]]，并守在榻边。她宁愿面对漫长的不确定，也不愿把一次冒险叫作奇迹。",
    "She used a second furnace for [[comparison]].",
    "Every possible [[hazard]] had to be considered before treatment."
  ],
  [
    "仙",
    "藏书阁的缺页",
    "The Missing Page",
    "剑谱最后一页不见了，顾停以为有人偷走秘法。他逐字核对旧抄本，发现被删掉的其实是一条[[restriction|限制]]：施术者必须在日落前解除剑阵，否则阵中生灵都会受伤。",
    "缺页让剑法显得完美，也让练习者看不见代价。顾停请阁主把警示补回，并把自己失败的记录作为[[appendix|附录]]留在书后。他明白，完整的传承也应当包含前人的错误。",
    "The missing page described an important [[restriction]].",
    "Gu Ting added his failed attempts as an [[appendix]]."
  ],
  [
    "仙",
    "无名碑",
    "The Nameless Stone",
    "山门后有一块无字碑，弟子们把它当作练剑的石头。清扫落叶时，林照看见碑底磨损的姓氏。碑上的名字不是被雨水洗去，而是有人故意[[erase|抹掉]]的。",
    "旧籍记着一位因反对开山而被逐的医修。山洪来时，恰是她留下的林地护住村落。林照没有擅自替她写传记，而是请村民各自[[recollect|回忆]]见过的事，让矛盾的证言并列留在碑旁。",
    "Someone had tried to [[erase]] the name from the stone.",
    "The villagers were asked to [[recollect]] what they had actually seen."
  ],
  [
    "仙",
    "灵田边界",
    "The Boundary Stone",
    "两家宗门争夺一块灵田，界碑却在夜里挪动了三尺。测地师陆微先看苔痕，再量溪岸。每个人都宣称自己的地图最[[accurate|准确]]，可地图画的是二十年前的河道。",
    "她把旧河床的位置标在地上，建议沿现有水源共同灌溉。双方不愿放弃权属，却同意先[[cooperate|合作]]度过旱季。陆微没有称这为和解；她只是把第一份共同签字的用水记录收好。",
    "An old map is not always an [[accurate]] guide to a changing river.",
    "The two schools agreed to [[cooperate]] during the drought."
  ],
  [
    "仙",
    "听风塔",
    "The Wind Tower",
    "塔中风铃连响七次，守塔人说敌人将至。沈砚登塔时却发现新挂的铜铃比旧铃轻。预警的[[mechanism|机制]]已经改变，可值守的人仍按旧规则解释声音。",
    "他们卸下铃铛分别测试，发现大风也会触发警报。沈砚提出一套临时[[procedure|流程]]：铃响后先查风向，再派两人去山口核实。夜里铃声重起，弟子们终于没有盲目拔剑。",
    "The warning [[mechanism]] had changed after the bells were replaced.",
    "They introduced a new [[procedure]] for checking each alarm."
  ],
  [
    "仙",
    "雾谷借火",
    "Borrowed Fire",
    "雾谷的地火突然衰弱，过冬的村民向宗门借火。掌事担心储备[[insufficient|不足]]，只肯借给付得起灵石的人。叶蘅看着被拒在门外的孩子，拿出过去三年的消耗记录。",
    "若把无人居住的炼器室暂时停用，省下的火足够村民熬过寒潮。她并未凭同情否认资源限制，而是重新[[allocate|分配]]有限的储备。第一辆运火车离开时，炼器室的灯一盏盏熄了。",
    "The steward feared that the remaining fuel was [[insufficient]].",
    "Ye Heng proposed a different way to [[allocate]] the reserves."
  ],
  [
    "仙",
    "一寸剑锋",
    "An Inch of Steel",
    "铸剑师说，薄一寸的剑锋会更快。顾停试剑时却看见刃口细小的缺痕。追求速度的[[pursuit|追求]]若不受约束，就会把使用者也算作耗材。他把剑还到炉前，请师傅再做一次抗折试验。",
    "剑在第五次试验中裂开。年轻的铸剑师很羞愧，顾停却保存了碎片。他们需要一条可以重复验证的[[criterion|标准]]，而不是一次恰巧成功的演示。下一把剑更重，也更可靠。",
    "The [[pursuit]] of speed had weakened the blade.",
    "Repeated testing gave them a clear [[criterion]] for safety."
  ],
  [
    "仙",
    "归途灯笼",
    "Lanterns on the Way Home",
    "秘境关闭前，众人争抢最后一条山道。林照看见一位不肯走的老人，他坚持孙女还在谷底。其余人把这句话当作[[illusion|幻觉]]，因为名册上没有那个名字。",
    "林照重新核对入谷记录，发现孩子用的是乳名。她与向导折返，在枯井旁找到女孩。救援耽误了行程，他们只能放弃灵石，换取足够的绳索。每个人都付出了[[sacrifice|牺牲]]，才把灯笼带回山外。",
    "The old man’s memory was dismissed as an [[illusion]].",
    "The rescue required a real [[sacrifice]] from everyone involved."
  ],
  [
    "仙",
    "封山之后",
    "After the Mountain Closed",
    "山门因瘟疫封闭，药材却只能从山下运来。医修们争论是否应当彻底[[isolate|隔离]]所有人，叶蘅把药棚移到界碑旁，划出交接和休息的区域。恐惧没有因此消失，但工作开始有了秩序。",
    "她每天记录新病人数、用药量和饮水来源，不把短暂下降当成痊愈。数周后，证据终于足以支持放宽禁令。叶蘅将这种[[gradual|逐步的]]恢复写进日志，末尾仍留着空白，等待明日的新情况。",
    "The healers had to [[isolate]] sick patients while keeping supplies moving.",
    "The records supported a [[gradual]] return to ordinary life."
  ],
  [
    "案",
    "慢了四分钟的钟",
    "Four Minutes Late",
    "证人说，九点整听见楼上传来响声。程雾看了看墙钟，又核对车站的报时记录：这只钟每天都慢四分钟。所谓精确的[[chronology|时间顺序]]，其实建立在两个不同的时间标准上。",
    "把时间统一后，嫌疑人已在公共汽车上，车内录像也能证实。程雾从名单上划去他的名字，再回到现场。纠正一个时间[[discrepancy|差异]]没有告诉她谁犯了案，却避免让无辜的人替空白作答。",
    "The [[chronology]] depended on clocks that did not agree.",
    "Correcting the [[discrepancy]] ruled out one suspect."
  ],
  [
    "案",
    "电梯第十三层",
    "The Thirteenth Floor",
    "大楼没有十三层，维修单上却连续出现这个编号。保安说那是打印错误，许棠注意到每张单据的金额都刚好低于人工审核的[[threshold|门槛]]。错误很小，重复起来却很整齐。",
    "她把半年记录交给审计员，发现设备编号也不存在。虚构的楼层只是用来[[disguise|掩饰]]重复报销。真正的线索不是一扇神秘的门，而是每次都有人选择不去问的那串数字。",
    "Each claim stayed just below the review [[threshold]].",
    "The invented floor helped [[disguise]] repeated claims."
  ],
  [
    "案",
    "第二把钥匙",
    "The Second Key",
    "房门没有撬痕，屋主坚称钥匙从未离身。顾舟没有由此断定窃贼熟悉屋主。他在抽屉里找到一张旧收据：三年前，维修工曾为门锁做过一个[[duplicate|复制品]]。",
    "锁店留存的领用记录指向前任租客，却不能证明是他作案。顾舟继续查门禁，发现钥匙被装在公共应急箱里。只有证明谁实际取用过，才能把可能性变成可靠的[[inference|推断]]。",
    "A [[duplicate]] of the key had been made three years earlier.",
    "An [[inference]] about guilt required more than access to a key."
  ],
  [
    "案",
    "失焦的合影",
    "The Blurred Photograph",
    "毕业合影里，失踪者的脸恰好模糊。有人说照片被动过手脚，苏禾却先调出原始文件。模糊区域与其他走动者方向相同，符合长曝光造成的[[distortion|失真]]。",
    "她没有从模糊的脸上猜测情绪，而是查看玻璃门的倒影。门里映出一只当晚才运来的展柜。这证明拍摄时间与标注日期不符；照片的[[authenticity|真实性]]和标题的准确性，是两件需要分别核对的事。",
    "The blur was a natural [[distortion]] caused by movement.",
    "The [[authenticity]] of an image does not guarantee an accurate caption."
  ],
  [
    "案",
    "末班邮件",
    "The Last Email",
    "死者电脑在深夜发出邮件，似乎证明他还活着。技术员先检查系统，发现邮件使用了[[automatic|自动的]]定时发送。发件时间只能证明程序执行，不能证明有人坐在桌前。",
    "草稿最后编辑于下午，附件却晚了六小时。两种记录来自不同账户。程雾要求保存服务器副本，再检查访问[[permission|权限]]。她把“谁能做到”与“谁实际做了”分在笔记两栏里。",
    "The message had been sent by an [[automatic]] scheduler.",
    "The team reviewed each account’s [[permission]] to modify the attachment."
  ],
  [
    "案",
    "白色纤维",
    "The White Fiber",
    "窗框上一根白线与嫌疑人的围巾颜色相同，众人都以为找到了关键。检验员提醒，颜色一致只说明它们可能属于同一[[category|类别]]；这类纤维在全市数千件衣服里都能找到。",
    "围巾确实接触过窗框，却是在案发后救人时留下的。新证词让时间顺序清楚起来。检验员在报告中保留了最初结果，并补充它的[[limitation|局限]]，而不是偷偷把不合期待的部分删掉。",
    "The two fibers belonged to a common [[category]].",
    "The report explained the [[limitation]] of that finding."
  ],
  [
    "案",
    "地下水声",
    "Water Beneath the Floor",
    "空置商场夜里总有水声，物业称管线早已关闭。许棠看见水表仍在缓慢转动，便在不同时间记录读数，试着找出用量与营业时间的[[correlation|相关性]]。结果显示，水声只在隔壁餐厅打烊后出现。",
    "排查发现一根未经登记的管道，通向地下清洗间。相关并不能证明偷水，却帮助确定检查方向。物业最终安装了独立[[meter|计量表]]，旧账也交由双方核对，传言中的“地下哭声”有了普通的来源。",
    "She looked for a [[correlation]] between water use and closing time.",
    "A separate [[meter]] made future water use visible."
  ],
  [
    "案",
    "遗嘱上的逗号",
    "The Comma in the Will",
    "两份遗嘱只有一个逗号不同，财产归属却完全改变。律师先确认签字日期，再询问见证人。他拒绝只凭一句话就[[interpret|解释]]死者的全部意愿，因为那句话可能来自后来的抄写。",
    "公证处找到原稿，墨迹与停笔处都能对应，电子扫描却丢失了标点。争执由此缓和，但家人仍需完成正式[[consent|同意]]程序。一个逗号澄清文字，并没有自动修复关系。",
    "The lawyer refused to [[interpret]] the will from a damaged copy.",
    "The family still needed to give formal [[consent]] to the settlement."
  ],
  [
    "案",
    "夜班记录",
    "The Night Shift Log",
    "值班表显示三个人同时在岗，但走廊录像只出现两人。调查员起初怀疑有人伪造签名，随后发现表格上的“到岗”一栏记录的是排班，而不是实际[[attendance|出勤]]。",
    "这个习惯存在多年，事故才让它显出危险。负责人无法用“大家一直如此”免除[[accountability|责任]]。调查报告提出保留排班和签到两套记录，让管理上的空白不再被整齐的表格遮住。",
    "The schedule did not prove actual [[attendance]].",
    "A familiar practice did not remove the manager’s [[accountability]]."
  ],
  [
    "案",
    "未寄出的包裹",
    "The Unsent Parcel",
    "包裹标签写着已送达，收件人却说从未收到。快递员出示签收照，照片只拍到一只手。许棠请求核对原始定位，发现两栋楼共用同一个[[address|地址]]，门牌在施工时被移过位置。",
    "包裹并未失窃，而是留在隔壁值班室。签字者以为会有人来取，系统却立刻把流程标为完成。快递站调整了[[confirmation|确认]]方式，要求核对姓名。一个小改动，比急着找一个骗子更有用。",
    "Two buildings shared the same [[address]] during construction.",
    "The company changed its delivery [[confirmation]] process."
  ],
  [
    "案",
    "雨停后的证人",
    "The Witness After the Rain",
    "证人记得凶手穿红衣，可街角灯箱也是红色的。程雾请他分别描述看到的物体与自己的理解，不再用“红衣人”提示答案。过度明确的问题会[[influence|影响]]回忆，甚至让人把推测当成亲眼所见。",
    "他终于承认，衣服本色可能是灰的。程雾没有责备，而是在笔录中记录照明条件和犹豫之处。可靠的证词需要保留[[uncertainty|不确定性]]；它是继续调查的起点，不是一张被逼着填满的答卷。",
    "A leading question can [[influence]] a witness’s memory.",
    "The statement preserved his [[uncertainty]] about the coat."
  ],
  [
    "案",
    "档案最后一格",
    "The Last Box in the Archive",
    "旧案最后一只盒子是空的，档案管理员却坚持资料没有丢。陆宁查看借阅链，发现盒号沿用了旧目录。迁馆时只更新了电子[[index|索引]]，纸标签仍指向二楼。",
    "他们在地下库房找到了原件，也找到一次未记录的转交。陆宁请管理员补全资料流转的[[sequence|顺序]]，并在旧位置贴上新的指引。案件仍未结束，但下一位寻找真相的人不必再面对一个无解释的空盒。",
    "The digital [[index]] had changed, but the labels had not.",
    "They reconstructed the [[sequence]] of transfers between the rooms."
  ]
];
;
const STORY_DATA = [
  {
    id: "cloud-gate",
    title: "云门试炼：第三声钟",
    englishTitle: "The Third Bell at Cloud Gate",
    category: "修仙志",
    tag: "入门试炼",
    color: "#d9e5df",
    symbol: "☁",
    mood: "从怯懦到破境",
    words: [["disciple", "n.", "弟子；门徒", "a young disciple"], ["spiritual", "adj.", "精神的；灵性的", "spiritual energy"], ["perseverance", "n.", "坚持不懈", "show perseverance"], ["temper", "v.", "磨炼；锻造", "temper the will"], ["breakthrough", "n.", "突破", "make a breakthrough"], ["realm", "n.", "境界；领域", "enter a new realm"], ["conceal", "v.", "隐藏", "conceal a secret"], ["formidable", "adj.", "强大的；难对付的", "a formidable opponent"]],
    cn: ["沈砚入门三年，始终没有引来一缕灵气。第三声钟响起时，试炼石却在他掌下泛起微光，像是沉睡多年的火星。", "众人都说那只是一点巧合。沈砚没有争辩，只把每日引气的时间从一刻延长到三刻，用耐心磨炼自己的心性。", "石阶尽头，一位气势强大的师兄故意挡住去路。沈砚察觉对方在隐藏真正的境界，于是收起急躁，借山风的间隙完成了突破。"],
    en: ["After three years, Shen Yan was still an unremarkable [[disciple]]. When the third bell rang, a faint glow appeared beneath his palm, as if [[spiritual]] fire had awakened.", "Everyone called it luck. Shen Yan did not argue. He extended his daily practice and used [[perseverance]] to [[temper]] his impatient mind.", "At the end of the stairs stood a [[formidable]] senior who tried to block his way. Shen Yan sensed a power he meant to [[conceal]], stayed calm, and finally made a [[breakthrough]] into a new [[realm]]."]
  },
  {
    id: "ruins-lamp",
    title: "归墟灯影",
    englishTitle: "The Lamp Beneath the Ruins",
    category: "修仙志",
    tag: "古灯疑云",
    color: "#e5ded0",
    symbol: "✦",
    mood: "从好奇到警觉",
    words: [["ancient", "adj.", "古老的", "an ancient shrine"], ["obscure", "adj.", "晦涩的；不明的", "an obscure inscription"], ["relic", "n.", "遗物；遗迹", "a forgotten relic"], ["inscription", "n.", "铭文", "read an inscription"], ["summon", "v.", "召唤", "summon a spirit"], ["omen", "n.", "预兆", "a strange omen"], ["investigate", "v.", "调查", "investigate the ruins"], ["vanish", "v.", "消失", "vanish without a trace"]],
    cn: ["归墟秘境的入口只在月蚀时出现。林照在残墙下发现一盏古灯，灯身刻着晦涩的铭文，旁边还压着一枚无人知晓来历的遗物。", "她本想把灯带回宗门，却听见灯芯里传来第二种呼吸声。那不是吉兆。她没有贸然召唤其中的东西，而是先沿着灰尘留下的痕迹调查。", "月影移过墙缝，灯火突然熄灭。下一瞬，同行的师弟凭空消失，只剩一行湿漉漉的脚印，向着禁地深处延伸。"],
    en: ["The entrance to the ruins appeared only during an eclipse. Lin Zhao found an [[ancient]] lamp beneath a broken wall. Its [[obscure]] [[inscription]] surrounded a forgotten [[relic]].", "She heard a second breath inside the lamp. It felt like an [[omen]]. Rather than [[summon]] whatever waited there, she decided to [[investigate]] the dust and the broken seals.", "When moonlight crossed the wall, the flame went out. Her companion seemed to [[vanish]] without a trace, leaving wet footprints that led towards the forbidden chamber."]
  },
  {
    id: "moon-sword",
    title: "借月问剑",
    englishTitle: "A Question Asked of the Moon",
    category: "修仙志",
    tag: "剑意试心",
    color: "#dfe4ed",
    symbol: "☾",
    mood: "从争胜到自省",
    words: [["discern", "v.", "辨别；看清", "discern the difference"], ["provoke", "v.", "挑衅；激起", "provoke a reaction"], ["restraint", "n.", "克制；约束", "exercise restraint"], ["decisive", "adj.", "果断的", "a decisive moment"], ["accompany", "v.", "陪伴；伴随", "accompany a traveler"], ["profound", "adj.", "深刻的", "a profound lesson"], ["vow", "n.", "誓言", "keep a vow"], ["confront", "v.", "面对；对抗", "confront fear"]],
    cn: ["月下问剑，先问心。顾停分辨不出师父留下的两道剑痕有什么不同，只知道其中一道总让他想起自己的骄傲。", "对手不断挑衅，逼他先出剑。顾停握紧剑柄，却想起师父说过，真正的剑修必须有克制，不能让怒意替自己做决定。", "决胜一刻，他没有刺向对手，而是转身挡住落石。那一剑不够凌厉，却让他明白：陪伴与守护同样深刻，面对恐惧比赢下比试更重要。"],
    en: ["Under the moon, Gu Ting tried to [[discern]] the difference between two sword marks. One of them revealed a pride he had never admitted.", "His opponent continued to [[provoke]] him. Gu Ting held the hilt tightly, then chose [[restraint]] instead of anger.", "At the [[decisive]] moment, he turned to block falling stones. The choice taught him a [[profound]] lesson: to [[confront]] fear and keep a [[vow]] mattered more than victory."]
  },
  {
    id: "stolen-herb",
    title: "药谷失窃案",
    englishTitle: "The Missing Herb of Medicine Valley",
    category: "修仙志",
    tag: "宗门疑案",
    color: "#e5e7d5",
    symbol: "✿",
    mood: "从怀疑到求证",
    words: [["alchemy", "n.", "炼丹术", "the art of alchemy"], ["ingredient", "n.", "成分；药材", "a rare ingredient"], ["counterfeit", "adj.", "伪造的；假冒的", "a counterfeit seal"], ["trace", "n.", "痕迹；踪迹", "follow a trace"], ["suspicion", "n.", "怀疑", "raise suspicion"], ["motive", "n.", "动机", "find a motive"], ["recover", "v.", "找回；恢复", "recover the herb"], ["remedy", "n.", "疗法；药物", "a useful remedy"]],
    cn: ["药谷最珍贵的月魄草在守夜时失窃。负责炼丹的弟子说自己一直在配药，可药柜上留下了一枚伪造的封印。", "所有人的怀疑都指向新来的杂役。沈砚没有急着定罪，而是沿着药香和泥水混合的痕迹，逐一核对每个人的动机。", "真相藏在废弃的炼丹房：月魄草被用来救一只受伤的灵兽。沈砚找回药草，也留下了一份更温和的药方。"],
    en: ["A precious herb disappeared from Medicine Valley during the night watch. The disciple in charge of [[alchemy]] claimed to be preparing medicine, but a [[counterfeit]] seal was found on the cabinet.", "The theft raised [[suspicion]] around a new servant. Shen Yan followed a faint [[trace]] of mud and herbs, asking what [[motive]] each person might have.", "The herb had been used to save an injured spirit beast. Shen Yan managed to [[recover]] it and left behind a gentler [[remedy]] instead."]
  },
  {
    id: "tribulation-snow",
    title: "雪夜渡劫",
    englishTitle: "The Snowy Night of Tribulation",
    category: "修仙志",
    tag: "渡劫之夜",
    color: "#dce5ec",
    symbol: "❄",
    mood: "从孤独到新生",
    words: [["catastrophe", "n.", "灾难", "avoid a catastrophe"], ["withstand", "v.", "承受；抵挡", "withstand pressure"], ["cultivate", "v.", "修炼；培养", "cultivate patience"], ["solitary", "adj.", "孤独的；单独的", "a solitary journey"], ["turbulence", "n.", "动荡；紊乱", "emotional turbulence"], ["endure", "v.", "忍受；坚持", "endure hardship"], ["emerge", "v.", "出现；显露", "emerge from darkness"], ["transform", "v.", "改变；转化", "transform the spirit"]],
    cn: ["雷云压在雪峰上，像一场即将降临的灾难。叶蘅独自站在阵心，知道这次渡劫不会有人替她承受。", "第一道天雷落下，她用剑阵抵挡。第二道雷击碎了阵旗，她在动荡的灵力中想起师父教过的事：修炼不是追赶别人，而是培养能够忍受漫长孤独的心。", "黎明前，叶蘅从黑暗和风雪中走出。她没有变得更强大到无所畏惧，却已经能够带着恐惧继续前行。"],
    en: ["Thunderclouds covered the peak like an approaching [[catastrophe]]. Ye Heng stood alone, ready to [[withstand]] the trial herself.", "The first bolt struck the formation. The second created violent [[turbulence]]. She remembered that to [[cultivate]] was also to [[endure]] a long and [[solitary]] road.", "Before dawn, she began to [[emerge]] from the snow. She was not fearless, but the trial had begun to [[transform]] her spirit."]
  },
  {
    id: "star-platform",
    title: "观星台的偏差",
    englishTitle: "The Deviation at the Stargazing Tower",
    category: "修仙志",
    tag: "天象谜题",
    color: "#e2deeb",
    symbol: "✧",
    mood: "从笃定到修正",
    words: [["celestial", "adj.", "天体的；天上的", "a celestial body"], ["trajectory", "n.", "轨迹", "a changing trajectory"], ["phenomenon", "n.", "现象", "a rare phenomenon"], ["calculate", "v.", "计算", "calculate the distance"], ["reveal", "v.", "揭示；显露", "reveal a pattern"], ["hypothesis", "n.", "假设", "test a hypothesis"], ["predict", "v.", "预测", "predict an event"], ["anomaly", "n.", "异常", "notice an anomaly"]],
    cn: ["观星台每夜记录天体轨迹，用来预测秘境开启的时间。负责推演的陆微发现，三颗星的位置出现了细微偏差。", "长老认为那只是罕见天象，不值得打乱计划。陆微却重新计算距离，提出一个大胆假设：异常不是来自天空，而是来自地脉。", "当她把阵图转向山腹，沉睡多年的灵脉终于显露。她没有预测到答案，却学会了先承认自己的模型可能不完整。"],
    en: ["The tower recorded the [[trajectory]] of every [[celestial]] body to [[predict]] when the secret realm would open. Lu Wei noticed an [[anomaly]] in the stars.", "The elders called it a rare [[phenomenon]]. Lu Wei continued to [[calculate]] the distance and decided to test a new [[hypothesis]].", "When she turned the map towards the mountain, the hidden vein was [[reveal]]ed. The result taught her that evidence can change a confident idea."]
  },
  {
    id: "silent-rain",
    title: "雨夜无声",
    englishTitle: "Silence in the Rain",
    category: "悬疑案",
    tag: "现场笔记",
    color: "#dfe4e6",
    symbol: "⌁",
    mood: "从直觉到证据",
    words: [["witness", "n.", "目击者；证人", "an eyewitness"], ["contradict", "v.", "与……矛盾", "contradict a statement"], ["surveillance", "n.", "监控；监视", "surveillance footage"], ["suspicious", "adj.", "可疑的", "a suspicious detail"], ["alibi", "n.", "不在场证明", "provide an alibi"], ["verify", "v.", "核实", "verify a claim"], ["clue", "n.", "线索", "follow a clue"], ["disappear", "v.", "消失", "disappear into the crowd"]],
    cn: ["雨夜的旧戏院没有观众，只有一盏坏掉的门灯。唯一的目击者说，案发时他一直站在售票口，却记不清凶手穿什么颜色的外套。", "监控画面和他的说法互相矛盾：画面里，他在另一个出口停留了七分钟。那是可疑的细节，却还不能证明他就是凶手。", "程雾核实了每一条线索，最后发现真正的关键是雨水冲掉的鞋印。凶手借人群离开，却没有注意到地面反光。"],
    en: ["The old theater was empty in the rain. The only [[witness]] claimed to have stayed by the ticket booth, but could not describe the coat.", "The [[surveillance]] footage seemed to [[contradict]] him. The detail was [[suspicious]], but his [[alibi]] still needed to be [[verify]]ed.", "Cheng Wu followed one small [[clue]]: a footprint washed by rain. The suspect tried to [[disappear]] into the crowd, but the wet floor reflected his shoes."]
  },
  {
    id: "seventh-wharf",
    title: "第七码头",
    englishTitle: "The Seventh Wharf",
    category: "悬疑案",
    tag: "匿名线报",
    color: "#d9e2e2",
    symbol: "⚓",
    mood: "从追踪到揭露",
    words: [["anonymous", "adj.", "匿名的", "an anonymous message"], ["container", "n.", "集装箱；容器", "a sealed container"], ["intercept", "v.", "拦截；截取", "intercept a signal"], ["confidential", "adj.", "机密的", "confidential files"], ["transaction", "n.", "交易", "an illegal transaction"], ["counterfeit", "n.", "赝品；仿制品", "a counterfeit document"], ["evidence", "n.", "证据", "collect evidence"], ["pursue", "v.", "追赶；追查", "pursue the suspect"]],
    cn: ["一条匿名短信把记者许棠引到第七码头：午夜会有一只没有标记的集装箱靠岸。短信只附了一串数字，像是机密交易的编号。", "她截取了港口无线电里的片段，发现有人在寻找一批伪造证件。保安发现她后开始追赶，她只得躲进装卸车的阴影里。", "警方根据她拍下的证据拦截了交易。真正重要的不是箱子里的钱，而是那些能让无数人消失在系统里的名字。"],
    en: ["An [[anonymous]] message led reporter Xu Tang to the seventh wharf. A sealed [[container]] would arrive at midnight, marked only by a number linked to a [[confidential]] [[transaction]].", "She managed to [[intercept]] part of a radio signal about [[counterfeit]] documents. A guard noticed her, and she had to hide among the trucks.", "The police used her [[evidence]] to stop the deal. When the suspects tried to flee, officers began to [[pursue]] them across the dock."]
  },
  {
    id: "mirror-house",
    title: "镜屋",
    englishTitle: "The House of Mirrors",
    category: "悬疑案",
    tag: "心理迷局",
    color: "#e6dfeb",
    symbol: "◌",
    mood: "从迷失到清醒",
    words: [["reflection", "n.", "倒影；反映", "a distorted reflection"], ["psychological", "adj.", "心理的", "psychological pressure"], ["desperate", "adj.", "绝望的；拼命的", "a desperate attempt"], ["manipulate", "v.", "操纵；影响", "manipulate perception"], ["authentic", "adj.", "真实的", "an authentic voice"], ["perception", "n.", "感知；看法", "change perception"], ["motive", "n.", "动机", "question a motive"], ["distort", "v.", "扭曲", "distort the truth"]],
    cn: ["镜屋每一面墙都能照出不同的自己。记者苏禾在里面找到了失踪画家的录音，却发现自己的倒影总比动作慢半拍。", "有人不断用广播操纵她的感知，让她相信出口就在错误的方向。她几乎绝望时，想起画家留下的提示：最真实的声音不会要求你立刻相信它。", "苏禾关掉广播，沿着回声找到暗门。镜子可以扭曲真相，但不能替人解释动机。"],
    en: ["Every wall in the house showed a different [[reflection]]. Su He found a recording by the missing painter, but the images began to [[distort]] her sense of time.", "A voice tried to [[manipulate]] her [[perception]] under intense [[psychological]] pressure. In a [[desperate]] moment, she remembered that an [[authentic]] voice never demands instant belief.", "She switched off the broadcast and followed the echo. A mirror could distort the truth, but it could not explain the painter's [[motive]]."]
  },
  {
    id: "three-days",
    title: "倒数三日",
    englishTitle: "Three Days to the Deadline",
    category: "悬疑案",
    tag: "倒计时",
    color: "#e9ded8",
    symbol: "⌛",
    mood: "从被动到反击",
    words: [["threaten", "v.", "威胁", "threaten to expose"], ["substantial", "adj.", "大量的；实质的", "substantial damage"], ["disclose", "v.", "透露；公开", "disclose information"], ["negotiate", "v.", "谈判", "negotiate a release"], ["precaution", "n.", "预防措施", "take a precaution"], ["collapse", "v.", "崩塌；失败", "a plan collapses"], ["deadline", "n.", "截止日期", "meet a deadline"], ["consequence", "n.", "后果", "face the consequence"]],
    cn: ["三天前，顾言收到一封没有署名的邮件。寄件人威胁公开一份会造成重大损失的合同，并把截止日期设在周五午夜。", "顾言没有立刻回复。他先采取预防措施，复制档案、通知律师，再去谈判对方想要的东西。对方的计划开始崩塌，因为每一次威胁都留下了记录。", "午夜前，顾言公开了真正的证据。他知道任何选择都有后果，却不再让恐惧替自己决定。"],
    en: ["Three days before the [[deadline]], Gu Yan received an anonymous email. The sender [[threatened]] to [[disclose]] a contract that could cause [[substantial]] damage.", "Gu Yan took a [[precaution]] before replying. He copied the files, contacted a lawyer, and tried to [[negotiate]]. The sender's plan began to [[collapse]] when every message became a record.", "Before midnight, Gu Yan released the evidence. He understood the [[consequence]], but fear no longer made the decision for him."]
  },
  {
    id: "empty-room",
    title: "空房间的脚印",
    englishTitle: "Footprints in the Empty Room",
    category: "悬疑案",
    tag: "邻室之谜",
    color: "#e3e0d8",
    symbol: "▧",
    mood: "从噪声到真相",
    words: [["tenant", "n.", "租户", "a former tenant"], ["property", "n.", "房产；财产", "the property owner"], ["adjacent", "adj.", "相邻的", "an adjacent room"], ["disturbance", "n.", "骚乱；打扰", "report a disturbance"], ["landlord", "n.", "房东", "contact the landlord"], ["concealed", "adj.", "隐藏的", "a concealed passage"], ["footprint", "n.", "脚印", "a muddy footprint"], ["reconstruct", "v.", "重建；还原", "reconstruct the scene"]],
    cn: ["空房间已经三个月没有租户，却每晚传出家具拖动的声音。房东说相邻房间没人居住，也没有人报告过骚乱。", "调查员顾舟在地板上发现一个泥脚印，方向与门锁完全相反。他联系旧租户，重新还原了这栋房子最近一次装修的过程。", "墙纸后藏着一条窄道，通向隔壁废弃仓库。声音并非来自鬼魂，而是有人利用房产漏洞藏匿货物。"],
    en: ["The room had been empty for three months, yet furniture seemed to move every night. The [[landlord]] insisted that no [[tenant]] lived in the [[adjacent]] room.", "A muddy [[footprint]] appeared on the floor. Zhou Gu contacted the former owner and began to [[reconstruct]] the renovation.", "Behind the wallpaper was a [[concealed]] passage leading to a warehouse. The repeated [[disturbance]] was part of a scheme involving the [[property]]."]
  },
  {
    id: "fog-hotel",
    title: "雾中旅馆",
    englishTitle: "The Hotel in the Fog",
    category: "悬疑案",
    tag: "身份核验",
    color: "#dfe6e4",
    symbol: "▱",
    mood: "从疏忽到警惕",
    words: [["reservation", "n.", "预订", "confirm a reservation"], ["reception", "n.", "接待处", "at the reception desk"], ["corridor", "n.", "走廊", "a narrow corridor"], ["peculiar", "adj.", "奇怪的", "a peculiar sound"], ["identity", "n.", "身份", "verify an identity"], ["incident", "n.", "事件", "report an incident"], ["relevant", "adj.", "相关的", "relevant information"], ["discreet", "adj.", "谨慎的；不引人注意的", "make a discreet inquiry"]],
    cn: ["大雾封住山路时，许棠只好住进唯一亮灯的旅馆。接待处没有登记册，前台却准确说出了她的预订号码。", "夜里，走廊尽头传来奇怪的金属声。她没有贸然开门，而是用谨慎的方式询问清洁工，发现每个房间的门牌都被调换过。", "警察赶来后核实了所有住客身份。那起看似微小的事件，最终牵出一条与失踪案有关的线索。"],
    en: ["When fog closed the road, Xu Tang stayed at the only lit hotel. At [[reception]], the clerk knew her [[reservation]] number but kept no register.", "A [[peculiar]] sound came from the end of the [[corridor]]. She made a [[discreet]] inquiry instead of opening the door.", "The police arrived to [[verify]] every guest's [[identity]]. The small [[incident]] revealed [[relevant]] information about a missing-person case."]
  },
  {
    id: "old-archive",
    title: "老城档案室",
    englishTitle: "The Archive of the Old City",
    category: "悬疑案",
    tag: "旧案重启",
    color: "#e6e1d4",
    symbol: "▤",
    mood: "从尘封到重见",
    words: [["archive", "n.", "档案；档案馆", "search an archive"], ["deteriorate", "v.", "恶化；变坏", "deteriorate over time"], ["preserve", "v.", "保存；保护", "preserve a record"], ["municipal", "adj.", "市政的", "municipal records"], ["document", "n.", "文件；记录", "a legal document"], ["testimony", "n.", "证词", "give testimony"], ["preliminary", "adj.", "初步的", "a preliminary report"], ["relevant", "adj.", "相关的", "relevant evidence"]],
    cn: ["老城档案室即将拆除，纸张在潮气里逐渐变坏。档案员陆宁在市政记录中找到一份被夹错位置的文件，日期比旧案早了十年。", "一位老人愿意提供证词，但她只记得一盏红灯和一辆没有牌照的车。陆宁把初步报告与地图重叠，发现那条路正通向已被拆掉的码头。", "被保存下来的旧纸片，终于成为与案件相关的证据。真相没有消失，只是被时间藏在了错误的抽屉里。"],
    en: ["The city planned to remove the old [[archive]], where paper records continued to [[deteriorate]]. Lu Ning found a misplaced [[municipal]] [[document]].", "An elderly woman offered her [[testimony]]. A [[preliminary]] map showed that her memory was connected to the old harbor.", "After the record was [[preserve]]d, it became [[relevant]] evidence. The truth had not vanished; it had been stored in the wrong drawer."]
  },
  {
    id: "sea-recording",
    title: "海边录音",
    englishTitle: "The Recording by the Sea",
    category: "悬疑案",
    tag: "异常信号",
    color: "#dbe5e8",
    symbol: "◒",
    mood: "从噪声到回声",
    words: [["acoustic", "adj.", "声音的；听觉的", "an acoustic signal"], ["frequency", "n.", "频率", "a specific frequency"], ["transmission", "n.", "传送；传播", "radio transmission"], ["drown", "v.", "淹没；压过", "drown out a voice"], ["signal", "n.", "信号", "detect a signal"], ["marine", "adj.", "海洋的", "marine research"], ["hypothesis", "n.", "假设", "support a hypothesis"], ["reproduce", "v.", "重现；复制", "reproduce the sound"]],
    cn: ["海洋研究员在礁石边录到一段规律的低鸣。海浪足以淹没普通声音，但这段信号在同一频率上重复出现。", "团队提出了海底设备故障的假设，却无法解释录音中夹杂的人声。为了重现声音，他们把设备放进水下，等待潮汐改变。", "第二次录音证实那不是幻听。信号来自一座废弃灯塔，里面藏着一台仍在发射的旧式电台。"],
    en: ["The researchers recorded a low [[acoustic]] sound by the sea. Waves could [[drown]] out most voices, but this [[signal]] repeated at a specific [[frequency]].", "Their first [[hypothesis]] involved a broken underwater device. They studied the [[transmission]] and tried to [[reproduce]] the sound.", "The second recording proved that the voice was real. The source was an abandoned lighthouse, not a natural [[marine]] phenomenon."]
  },
  {
    id: "paper-cipher",
    title: "纸上密码",
    englishTitle: "The Cipher on Paper",
    category: "悬疑案",
    tag: "密码推演",
    color: "#e9e2d2",
    symbol: "⌘",
    mood: "从混乱到连贯",
    words: [["cipher", "n.", "密码；暗号", "break a cipher"], ["sequence", "n.", "顺序；序列", "a numerical sequence"], ["derive", "v.", "推导；获得", "derive a meaning"], ["decipher", "v.", "破译", "decipher a message"], ["pattern", "n.", "模式；图案", "recognize a pattern"], ["deliberate", "adj.", "故意的；深思熟虑的", "a deliberate choice"], ["encrypt", "v.", "加密", "encrypt a file"], ["coherent", "adj.", "连贯的", "a coherent explanation"]],
    cn: ["死者桌上只有一张画满圆点的纸。警察以为那是随手涂鸦，密码爱好者秦遥却发现数字顺序每隔七位重复。", "她从日期中推导出一组坐标，随后破译出一句话：不要相信第一份报告。那些看似混乱的图案，其实是故意留下的提醒。", "纸张背面还有一段加密文件。秦遥把两段信息拼在一起，得到一个连贯的解释：案件从一开始就被人改写过。"],
    en: ["The dead man's desk held a page covered with dots. Qin Yao noticed a repeated [[sequence]] and began to break the [[cipher]].", "She managed to [[derive]] coordinates and [[decipher]] a sentence. The strange [[pattern]] was a [[deliberate]] warning, not random ink.", "A second file had been [[encrypt]]ed on the back. Together, the clues produced a [[coherent]] explanation."]
  },
  {
    id: "silent-testimony",
    title: "无人证词",
    englishTitle: "The Testimony of No One",
    category: "悬疑案",
    tag: "庭审疑云",
    color: "#e4e1e2",
    symbol: "§",
    mood: "从成见到审慎",
    words: [["credibility", "n.", "可信度", "question credibility"], ["prosecutor", "n.", "检察官", "the prosecutor argued"], ["inconsistent", "adj.", "不一致的", "an inconsistent account"], ["articulate", "v.", "清晰表达", "articulate an idea"], ["verdict", "n.", "裁决；判决", "deliver a verdict"], ["appeal", "v.", "上诉", "appeal the decision"], ["assumption", "n.", "假定；假设", "challenge an assumption"], ["objective", "adj.", "客观的", "an objective review"]],
    cn: ["庭审中没有目击者，只有一份自动生成的语音记录。检察官认为它足以证明被告在场，辩护律师却指出录音前后有三处不一致。", "年轻的技术员终于清晰说明，系统会把背景噪声当成人声补全。原本“没有人证”并不等于没有证据，而是提醒所有人重新检查假设。", "法官要求进行客观复核，最后推翻了草率的判决。真正可靠的裁决，必须允许人们对它提出上诉。"],
    en: ["There was no witness, only an automatic recording. The [[prosecutor]] claimed it proved presence, but the defense questioned its [[credibility]] because the account was [[inconsistent]].", "The technician finally managed to [[articulate]] how the system filled background noise with invented words. The old [[assumption]] needed to be challenged.", "After an [[objective]] review, the judge refused to accept a rushed [[verdict]]. The defense decided to [[appeal]] the decision."]
  }
];
const CET6_EXTRA = "abandon|v.|放弃|abandon a plan\nabnormal|adj.|不正常的|abnormal behavior\nabrupt|adj.|突然的|an abrupt change\nabsurd|adj.|荒谬的|an absurd idea\naccelerate|v.|加速|accelerate growth\naccommodate|v.|容纳；适应|accommodate visitors\naccumulate|v.|积累|accumulate experience\nadequate|adj.|足够的|adequate evidence\nadjacent|adj.|邻近的|adjacent buildings\nadvocate|v.|提倡；拥护|advocate reform\nalter|v.|改变|alter the design\nambiguous|adj.|模棱两可的|an ambiguous answer\namend|v.|修订|amend a law\nanticipate|v.|预期；预料|anticipate demand\napparatus|n.|装置；器械|laboratory apparatus\narbitrary|adj.|任意的；武断的|an arbitrary rule\nassemble|v.|集合；组装|assemble the parts\nattribute|v.|归因于|attribute success to effort\nauthentic|adj.|真实的|an authentic account\nautomate|v.|使自动化|automate the process\nbeneficial|adj.|有益的|beneficial effects\ncapacity|n.|能力；容量|production capacity\ncease|v.|停止|cease operations\ncoincide|v.|巧合；一致|coincide with events\ncompel|v.|迫使|compel a response\ncompatible|adj.|兼容的|compatible devices\ncomprehensive|adj.|全面的|a comprehensive review\nconceive|v.|构想；怀孕|conceive an idea\nconsecutive|adj.|连续的|three consecutive days\ncontradictory|adj.|矛盾的|contradictory evidence\ncontroversial|adj.|有争议的|a controversial issue\nconvert|v.|转换|convert energy\ncrucial|adj.|关键的|a crucial decision\ndeceive|v.|欺骗|deceive the public\ndecline|v.|下降；拒绝|decline an offer\ndeduce|v.|推断|deduce the truth\ndeficiency|n.|缺乏；不足|iron deficiency\ndemonstrate|v.|证明；展示|demonstrate ability\ndeprive|v.|剥夺|deprive someone of rights\ndiminish|v.|减少；削弱|diminish the risk\ndiscriminate|v.|歧视；区分|discriminate against people\ndominate|v.|支配|dominate the market\nelaborate|adj.|精心制作的|an elaborate plan\neliminate|v.|消除；淘汰|eliminate errors\nembrace|v.|拥抱；接受|embrace change\nempirical|adj.|经验主义的|empirical evidence\nenhance|v.|提高；增强|enhance efficiency\nenormous|adj.|巨大的|enormous pressure\nequivalent|adj.|等价的|an equivalent amount\nerode|v.|侵蚀；削弱|erode confidence\nexaggerate|v.|夸大|exaggerate the danger\nexclude|v.|排除；不包括|exclude a possibility\nexplicit|adj.|明确的|explicit instructions\nfacilitate|v.|促进；使便利|facilitate communication\nfinite|adj.|有限的|finite resources\nfluctuate|v.|波动|prices fluctuate\nformulate|v.|制定；构想|formulate a policy\nforthcoming|adj.|即将到来的|forthcoming elections\nfrustrate|v.|使沮丧；阻挠|frustrate an attempt\nfundamental|adj.|根本的|fundamental principles\ngenerate|v.|产生|generate electricity\ngenuine|adj.|真诚的；真正的|genuine concern\nhierarchy|n.|等级制度|social hierarchy\nhighlight|v.|突出；强调|highlight a problem\nidentical|adj.|完全相同的|identical twins\nimplement|v.|实施|implement a policy\nimplicit|adj.|含蓄的；暗示的|implicit meaning\ninduce|v.|诱导；引起|induce sleep\ninevitable|adj.|不可避免的|an inevitable result\ninhibit|v.|抑制|inhibit growth\ninnovative|adj.|创新的|an innovative method\nintegrate|v.|整合|integrate information\nintense|adj.|强烈的|intense competition\nintricate|adj.|复杂精细的|an intricate system\nisolate|v.|隔离；孤立|isolate the cause\nlegitimate|adj.|合法的；正当的|a legitimate concern\nlikewise|adv.|同样地|likewise important\nmanipulate|v.|操纵|manipulate data\nmaximize|v.|最大化|maximize benefits\nmediate|v.|调解；居中|mediate a dispute\nmigrate|v.|迁移|birds migrate\nminimal|adj.|最小的|minimal damage\nmutual|adj.|相互的|mutual trust\nneutral|adj.|中立的|remain neutral\nnotion|n.|观念；想法|a common notion\noblige|v.|迫使；责成|oblige someone to act\noccupy|v.|占据；使忙碌|occupy a position\noffset|v.|抵消|offset the cost\noverlap|v.|重叠|overlap in meaning\nparadox|n.|悖论|an apparent paradox\npersist|v.|坚持；持续|persist in doing\npreliminary|adj.|初步的|preliminary findings\npresume|v.|假定|presume innocence\nprohibit|v.|禁止|prohibit smoking\nprominent|adj.|突出的；显著的|a prominent scholar\nprotocol|n.|协议；规程|follow a protocol\nqualitative|adj.|定性的|qualitative analysis\nquantitative|adj.|定量的|quantitative research\nradical|adj.|根本的；激进的|radical reform\nrandom|adj.|随机的|a random sample\nrefine|v.|改进；提炼|refine a method\nreinforce|v.|加强|reinforce a structure\nreluctant|adj.|不情愿的|reluctant to agree\nrender|v.|使成为；提供|render assistance\nrestore|v.|恢复；修复|restore confidence\nretain|v.|保留|retain information\nrigid|adj.|僵硬的；严格的|rigid rules\nsimultaneous|adj.|同时的|simultaneous events\nsole|adj.|唯一的|the sole reason\nspontaneous|adj.|自发的|a spontaneous decision\nsubsequent|adj.|随后的|subsequent events\nsubtle|adj.|微妙的|a subtle difference\nsufficient|adj.|充分的| sufficient time\nsupplement|v.|补充|supplement the evidence\nsuppress|v.|压制；抑制|suppress a reaction\nsustain|v.|维持；支撑| sustain growth\nterminal|adj.|末端的；终点的|terminal station\nthereby|adv.|从而|thereby reducing cost\nthreshold|n.|门槛；阈值|cross a threshold\ntransmit|v.|传送；传播|transmit a signal\nundergo|v.|经历|undergo treatment\nundertake|v.|承担；着手|undertake research\nunprecedented|adj.|前所未有的|unprecedented change\nutilize|v.|利用|utilize resources\nwhereas|conj.|然而；而|whereas the other...\nwithstand|v.|抵挡；承受|withstand pressure\nyield|v.|产生；屈服|yield results";
const EXTRA_WORDS = CET6_EXTRA.split("\n").map((line) => {
  const [word, pos, meaning, phrase] = line.split("|");
  return { id: word, word, pos, meaning, phrase: phrase.trim(), storyId: null, source: "补充词汇", example: "" };
});
const extraMap = new Map(EXTRA_WORDS.map((w) => [w.id, w]));
function wordsceneMatches(text, pattern) {
  const matches = [];
  pattern.lastIndex = 0;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    matches.push(match);
    if (!match[0].length) pattern.lastIndex++;
  }
  return matches;
}
const additionalStories = CHAPTERS.map(([type, title, en, cn1, cn2, en1, en2], index) => {
  const cn = [cn1, cn2], english = [en1, en2];
  const words = wordsceneMatches("".concat(cn1, " ").concat(cn2), /\[\[([^|]+)\|([^\]]+)\]\]/g).map(([, word, meaning]) => [word, "", meaning, ""]);
  return { id: "volume-".concat(index + 1), title, category: type === "仙" ? "修仙志" : "悬疑案", tag: type === "仙" ? "山中札记" : "证据档案", color: type === "仙" ? "#dce5d9" : "#e0e2eb", symbol: type === "仙" ? "☾" : "◈", mood: "先理解，再回忆", words, cn, en: english, englishTitle: en };
});
const displayAliases = { verify: "verified", reveal: "revealed", preserve: "preserved", encrypt: "encrypted" };
let dictionaryMap = /* @__PURE__ */ new Map();
let STORIES = [];
let STORY_WORDS = [];
let BUILTIN_WORDS = [];
let STORY_INDEX = /* @__PURE__ */ new Map();
let BUILTIN_INDEX = /* @__PURE__ */ new Map();
let CONTEXTUAL_IDS = /* @__PURE__ */ new Set();
let COVERAGE = { reference: 0, contextual: 0, storyUnique: 0, total: 0, coveredTotal: 0 };
const WORDSCENE_DATA_STATE = { dictionary: false, cultivation: false, mystery: false, shell: false };
function wordsceneHasFullBundle() {
  return typeof DICTIONARY_WORDS !== "undefined" && DICTIONARY_WORDS && DICTIONARY_WORDS.length && typeof EXPANDED_STORIES !== "undefined" && EXPANDED_STORIES && EXPANDED_STORIES.length && typeof CLOZE_STORIES !== "undefined" && CLOZE_STORIES && CLOZE_STORIES.length;
}
function assembleWordsceneData(expandedStories, clozeStories, dictionaryWords) {
  var _a2, _b;
  const dictWords = dictionaryWords || [];
  dictionaryMap = new Map(dictWords.map((w) => [w.id, w]));
  const clozeRevisions = new Map((clozeStories || []).map((story) => [story.id, story.cn]));
  const coreRaw = [...STORY_DATA, ...additionalStories];
  const expandedMap = new Map((expandedStories || []).map((s) => [s.id, s]));
  const coreMap = new Map(coreRaw.map((s) => [s.id, s]));
  let rawList;
  if (typeof WORDSCENE_CATALOG !== "undefined" && ((_a2 = WORDSCENE_CATALOG == null ? void 0 : WORDSCENE_CATALOG.stories) == null ? void 0 : _a2.length)) {
    rawList = WORDSCENE_CATALOG.stories.map((entry) => {
      if (expandedMap.has(entry.id)) return expandedMap.get(entry.id);
      if (coreMap.has(entry.id)) return coreMap.get(entry.id);
      return {
        id: entry.id,
        title: entry.title,
        englishTitle: entry.englishTitle,
        category: entry.category,
        tag: entry.tag,
        color: entry.color,
        symbol: entry.symbol,
        mood: entry.mood,
        cn: [entry.excerpt || ""],
        en: [String(entry.englishTitle || entry.title)],
        words: (entry.wordIds || []).map((id) => [id, "", "", ""]),
        _shell: true
      };
    });
  } else {
    rawList = [...coreRaw, ...expandedStories || []];
  }
  STORIES = rawList.map((raw, index) => {
    const shell = !!raw._shell;
    const s = __spreadProps(__spreadValues({}, raw), { cn: clozeRevisions.get(raw.id) || raw.cn, mood: raw.category === "修仙志" ? "权衡与抉择" : "疑点与线索", number: index + 1, englishTitle: raw.englishTitle || raw.en });
    if (Array.isArray(s.englishTitle)) s.englishTitle = "WORDSCENE · " + String(index + 1).padStart(2, "0");
    if (!Array.isArray(s.en)) s.en = [String(s.en || s.englishTitle || "")];
    if (!Array.isArray(s.cn)) s.cn = [String(s.cn || "")];
    s.en = s.en.map((p) => String(p).replace(/\[\[(verify|reveal|preserve|encrypt)\]\]ed/g, (_, id) => "[[".concat(id, "|").concat(displayAliases[id], "]]")).replace("[[threatened]]", "[[threaten|threatened]]"));
    let ids;
    if (shell) {
      ids = (raw.words || []).map((w) => Array.isArray(w) ? w[0] : w.id || w).filter(Boolean);
    } else {
      ids = [...new Set([].concat(...s.en.map((p) => wordsceneMatches(p, /\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g).map((m) => m[1]))))];
    }
    s.words = ids.map((id) => {
      const declared = (raw.words || []).find((w) => w[0] === id || w.id === id), base = dictionaryMap.get(id) || extraMap.get(id) || {};
      const declaredPos = Array.isArray(declared) ? declared[1] : declared == null ? void 0 : declared.pos;
      const declaredMeaning = Array.isArray(declared) ? declared[2] : declared == null ? void 0 : declared.meaning;
      const declaredPhrase = Array.isArray(declared) ? declared[3] : declared == null ? void 0 : declared.phrase;
      const pi = s.en.findIndex((p) => p.includes("[[".concat(id, "]]")) || p.includes("[[".concat(id, "|")));
      const paragraph = s.en[pi] || "";
      const sentence = paragraph.replace(/([.!?])\s+/g, "$1\0").split("\0").find((p) => p.includes("[[".concat(id, "]]")) || p.includes("[[".concat(id, "|"))) || paragraph;
      const plain = (t) => String(t || "").replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g, (_, wid, label) => label || wid);
      const marker = wordsceneMatches(sentence, /\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g).find((m) => m[1] === id);
      const chinese = s.cn.find((p) => p.includes("[[".concat(id, "|"))) || s.cn[pi] || "";
      const chineseMarker = wordsceneMatches(chinese, /\[\[([^|\]]+)\|([^\]]+)\]\]/g).find((m) => m[1] === id);
      return __spreadProps(__spreadValues({}, base), { id, word: id, pos: declaredPos || base.pos || "", meaning: (chineseMarker == null ? void 0 : chineseMarker[2]) || declaredMeaning || base.meaning || "", phrase: declaredPhrase || "", example: plain(sentence), surface: (marker == null ? void 0 : marker[2]) || id, context: plain(chinese), storyId: s.id, source: s.title });
    });
    s._shell = shell && !clozeRevisions.has(raw.id);
    if (!shell && clozeRevisions.has(raw.id)) s._shell = false;
    if (shell && clozeRevisions.has(raw.id) && expandedMap.has(raw.id)) s._shell = false;
    return s;
  });
  STORIES.forEach((s) => {
    if (expandedMap.has(s.id) && clozeRevisions.has(s.id)) s._shell = false;
    if (coreMap.has(s.id) && clozeRevisions.has(s.id)) s._shell = false;
  });
  STORY_WORDS = [].concat(...STORIES.map((s) => s.words));
  const mergedWords = new Map(dictWords.map((w) => [w.id, __spreadValues({}, w)]));
  for (const w of EXTRA_WORDS) if (!mergedWords.has(w.id)) mergedWords.set(w.id, w);
  for (const w of STORY_WORDS) {
    const old = mergedWords.get(w.id) || {};
    mergedWords.set(w.id, __spreadProps(__spreadValues(__spreadValues({}, old), w), { dictionaryMeaning: old.dictionaryMeaning || old.meaning || w.meaning, storyIds: [.../* @__PURE__ */ new Set([...old.storyIds || [], w.storyId])] }));
  }
  BUILTIN_WORDS = [...mergedWords.values()];
  STORY_INDEX = new Map(STORIES.map((s) => [s.id, s]));
  BUILTIN_INDEX = new Map(BUILTIN_WORDS.map((w) => [w.id, w]));
  CONTEXTUAL_IDS = new Set(STORY_WORDS.map((w) => w.id));
  const catalogCov = typeof WORDSCENE_CATALOG !== "undefined" ? (_b = WORDSCENE_CATALOG == null ? void 0 : WORDSCENE_CATALOG.meta) == null ? void 0 : _b.coverage : null;
  COVERAGE = { reference: dictWords.length || (catalogCov == null ? void 0 : catalogCov.reference) || 0, contextual: dictWords.length ? dictWords.filter((w) => CONTEXTUAL_IDS.has(w.id)).length : (catalogCov == null ? void 0 : catalogCov.contextual) || CONTEXTUAL_IDS.size, storyUnique: CONTEXTUAL_IDS.size, total: Math.max(BUILTIN_WORDS.length, (catalogCov == null ? void 0 : catalogCov.total) || 0), coveredTotal: dictWords.length ? BUILTIN_WORDS.filter((w) => CONTEXTUAL_IDS.has(w.id)).length : (catalogCov == null ? void 0 : catalogCov.coveredTotal) || CONTEXTUAL_IDS.size };
  WORDSCENE_DATA_STATE.shell = STORIES.some((s) => s._shell);
  WORDSCENE_DATA_STATE.dictionary = dictWords.length > 0;
}
function assembleFromCatalog() {
  var _a2, _b, _c, _d, _e, _f;
  if (typeof WORDSCENE_CATALOG === "undefined" || !((_a2 = WORDSCENE_CATALOG == null ? void 0 : WORDSCENE_CATALOG.stories) == null ? void 0 : _a2.length)) return false;
  const cat = WORDSCENE_CATALOG;
  STORIES = cat.stories.map((entry) => {
    const words = (entry.wordIds || []).map((id) => ({ id, word: id, meaning: "", pos: "", phrase: "", example: "", surface: id, context: entry.excerpt || "", storyId: entry.id, source: entry.title }));
    return {
      id: entry.id,
      title: entry.title,
      englishTitle: entry.englishTitle,
      category: entry.category,
      tag: entry.tag,
      color: entry.color,
      symbol: entry.symbol,
      mood: entry.mood,
      number: entry.number,
      cn: [entry.excerpt || ""],
      en: [String(entry.englishTitle || entry.title)],
      words,
      wordCount: entry.wordCount || words.length,
      _shell: true
    };
  });
  STORY_WORDS = [].concat(...STORIES.map((s) => s.words));
  const merged = new Map(EXTRA_WORDS.map((w) => [w.id, __spreadValues({}, w)]));
  for (const w of STORY_WORDS) {
    const old = merged.get(w.id) || {};
    merged.set(w.id, __spreadProps(__spreadValues(__spreadValues({}, old), w), { dictionaryMeaning: old.dictionaryMeaning || old.meaning || w.meaning, storyIds: [.../* @__PURE__ */ new Set([...old.storyIds || [], w.storyId])] }));
  }
  BUILTIN_WORDS = [...merged.values()];
  STORY_INDEX = new Map(STORIES.map((s) => [s.id, s]));
  BUILTIN_INDEX = new Map(BUILTIN_WORDS.map((w) => [w.id, w]));
  CONTEXTUAL_IDS = new Set(STORY_WORDS.map((w) => w.id));
  COVERAGE = ((_b = cat.meta) == null ? void 0 : _b.coverage) || { reference: ((_c = cat.meta) == null ? void 0 : _c.words) || 0, contextual: ((_d = cat.meta) == null ? void 0 : _d.words) || 0, storyUnique: CONTEXTUAL_IDS.size, total: ((_e = cat.meta) == null ? void 0 : _e.words) || BUILTIN_WORDS.length, coveredTotal: ((_f = cat.meta) == null ? void 0 : _f.words) || BUILTIN_WORDS.length };
  WORDSCENE_DATA_STATE.shell = true;
  return true;
}
function mergeStoryChunk(chunk) {
  if (!chunk) return;
  const expanded = globalThis.EXPANDED_STORIES || (globalThis.EXPANDED_STORIES = []);
  const cloze = globalThis.CLOZE_STORIES || (globalThis.CLOZE_STORIES = []);
  const seenExp = new Set(expanded.map((s) => s.id));
  const seenCloze = new Set(cloze.map((s) => s.id));
  for (const s of chunk.expanded || []) if (!seenExp.has(s.id)) {
    expanded.push(s);
    seenExp.add(s.id);
  }
  for (const s of chunk.cloze || []) if (!seenCloze.has(s.id)) {
    cloze.push(s);
    seenCloze.add(s.id);
  }
}
if (wordsceneHasFullBundle()) {
  assembleWordsceneData(EXPANDED_STORIES, CLOZE_STORIES, DICTIONARY_WORDS);
  WORDSCENE_DATA_STATE.cultivation = true;
  WORDSCENE_DATA_STATE.mystery = true;
} else if (!assembleFromCatalog()) {
  STORIES = [];
  STORY_WORDS = [];
  BUILTIN_WORDS = EXTRA_WORDS.slice();
  STORY_INDEX = /* @__PURE__ */ new Map();
  BUILTIN_INDEX = new Map(BUILTIN_WORDS.map((w) => [w.id, w]));
  CONTEXTUAL_IDS = /* @__PURE__ */ new Set();
  COVERAGE = { reference: 0, contextual: 0, storyUnique: 0, total: 0, coveredTotal: 0 };
  WORDSCENE_DATA_STATE.shell = true;
}
function maskSurface(sentence, surface) {
  if (!surface) return sentence;
  const literal = surface.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return sentence.replace(new RegExp("(^|[^A-Za-z])".concat(literal, "(?![A-Za-z])"), "ig"), (_, prefix) => prefix + "________");
}
;
"use strict";
const KEY = "wordscene-v2";
const firstStory = ((_a = STORIES[0]) == null ? void 0 : _a.id) || "";
const fresh = () => ({ version: 2, goal: 10, words: {}, favorites: [], completed: [], custom: [], activity: {}, notes: {}, lastStory: firstStory, preferences: { english: false } });
const today = () => {
  const d = /* @__PURE__ */ new Date();
  return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, "0"), "-").concat(String(d.getDate()).padStart(2, "0"));
};
const afterDays = (n) => {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() + n);
  return "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, "0"), "-").concat(String(d.getDate()).padStart(2, "0"));
};
const esc = (s) => String(s != null ? s : "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const shuffle = (a) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};
function cleanState(raw) {
  var _a2;
  const s = fresh();
  if (!raw || typeof raw !== "object") return s;
  if ([10, 20, 30, 50].includes(raw.goal)) s.goal = raw.goal;
  const builtin = new Set(BUILTIN_WORDS.map((w) => w.id));
  s.custom = Array.isArray(raw.custom) ? raw.custom.slice(0, 1500).filter((w) => w && /^[a-z][a-z '-]{0,49}$/i.test(w.word || "") && typeof w.meaning === "string").map((w) => ({ id: w.word.toLowerCase(), word: w.word.toLowerCase(), meaning: w.meaning.slice(0, 150), pos: w.pos || "自定义", phrase: w.phrase || "", example: w.example || "", source: "我的生词", storyId: null })) : [];
  s.custom = [...new Map(s.custom.filter((w) => !builtin.has(w.id)).map((w) => [w.id, w])).values()];
  const ids = new Set([...BUILTIN_WORDS, ...s.custom].map((w) => w.id));
  if (raw.words && typeof raw.words === "object") {
    for (const [id, p] of Object.entries(raw.words)) if (ids.has(id) && p && Number.isInteger(p.stage) && p.stage >= 0 && p.stage <= 4 && typeof p.due === "string") s.words[id] = { stage: p.stage, due: p.due, last: p.last || "", attempts: Number(p.attempts) || 0 };
  }
  if (Array.isArray(raw.favorites)) s.favorites = [...new Set(raw.favorites.filter((id) => ids.has(id)))];
  if (Array.isArray(raw.completed)) s.completed = raw.completed.filter((id) => STORIES.some((st) => st.id === id));
  if (STORIES.some((st) => st.id === raw.lastStory)) s.lastStory = raw.lastStory;
  if (raw.activity && typeof raw.activity === "object") {
    for (const [date, list] of Object.entries(raw.activity)) if (/^\d{4}-\d{2}-\d{2}$/.test(date) && Array.isArray(list)) s.activity[date] = [...new Set(list.filter((id) => ids.has(id)))];
  }
  if (raw.notes && typeof raw.notes === "object") s.notes = Object.fromEntries(Object.entries(raw.notes).filter(([id, n]) => ids.has(id) && typeof n === "string").map(([id, n]) => [id, n.slice(0, 500)]));
  s.preferences = { english: Boolean((_a2 = raw.preferences) == null ? void 0 : _a2.english) };
  return s;
}
let storageAvailable = true, state;
try {
  state = cleanState(JSON.parse(localStorage.getItem(KEY) || localStorage.getItem("wordscene-v1")));
} catch (e) {
  state = fresh();
  storageAvailable = false;
}
const allWords = () => [...BUILTIN_WORDS, ...state.custom];
const getWord = (id) => BUILTIN_INDEX.get(id) || state.custom.find((w) => w.id === id);
const getStory = (id) => STORY_INDEX.get(id);
let category = "全部", search = "", sortUnread = false, notebookFilter = "all", notebookSearch = "", notebookLimit = 40, quiz = null, selectedWord = null, toastTimer, activeSpeech = null;
const main = document.getElementById("main"), wordDialog = document.getElementById("word-dialog"), utilityDialog = document.getElementById("utility-dialog");
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    storageAvailable = true;
  } catch (e) {
    storageAvailable = false;
    toast("当前浏览器无法保存，请导出备份。");
  }
  updateNav();
}
function toast(message) {
  clearTimeout(toastTimer);
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}
function dueWords() {
  return allWords().filter((w) => {
    var _a2;
    return ((_a2 = state.words[w.id]) == null ? void 0 : _a2.due) <= today();
  });
}
function record(id, correct) {
  const old = state.words[id], stage = correct ? Math.min(((old == null ? void 0 : old.stage) || 0) + 1, 4) : 0;
  state.words[id] = { stage, due: afterDays([0, 1, 3, 7, 14][stage]), last: today(), attempts: ((old == null ? void 0 : old.attempts) || 0) + 1 };
  state.activity[today()] = [.../* @__PURE__ */ new Set([...state.activity[today()] || [], id])];
  save();
}
function streak() {
  var _a2, _b;
  let n = 0, d = /* @__PURE__ */ new Date();
  if (!((_a2 = state.activity[today()]) == null ? void 0 : _a2.length)) d.setDate(d.getDate() - 1);
  for (let i = 0; i < 1e4; i++) {
    const k = "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, "0"), "-").concat(String(d.getDate()).padStart(2, "0"));
    if (!((_b = state.activity[k]) == null ? void 0 : _b.length)) break;
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
function updateNav() {
  const badge = document.getElementById("nav-due");
  if (badge) badge.textContent = dueWords().length;
  const route = location.hash.split("/")[0].slice(1) || "library";
  document.querySelectorAll("[data-nav]").forEach((el) => el.classList.toggle("active", el.dataset.nav === (["story", "quiz"].includes(route) ? "library" : route)));
}
function statusFor(w) {
  const p = state.words[w.id];
  return !p ? ["new", "未学习"] : p.due <= today() ? ["due", "待复习"] : p.stage >= 4 ? ["done", "已巩固"] : ["learned", "已记住"];
}
function stats() {
  var _a2;
  const learned = Object.values(state.words).filter((p) => p.stage > 0).length, done = ((_a2 = state.activity[today()]) == null ? void 0 : _a2.length) || 0;
  return '<div class="stats-strip"><div class="stat"><span class="stat-icon">▤</span><div><strong>'.concat(STORIES.length, '<small>篇原创故事</small></strong><p>修仙志与悬疑案双主线</p></div></div><div class="stat"><span class="stat-icon">✓</span><div><strong>').concat(learned, "<small>/ ").concat(allWords().length, ' 词已掌握</small></strong><p>重点词 + 六级扩展词库</p></div></div><div class="stat"><span class="stat-icon">↻</span><div><strong>').concat(dueWords().length, '<small>词待复习</small></strong><p>今天再遇见一次</p></div></div><div class="stat daily-stat"><div style="width:100%"><strong>').concat(done, "<small>/ ").concat(state.goal, " 今日目标 · 连续 ").concat(streak(), ' 天</small></strong><div class="tiny-progress"><span style="width:').concat(Math.min(100, done / state.goal * 100), '%"></span></div><p>').concat(done >= state.goal ? "今日任务已完成。" : "中文先读，记住画面，再回忆英文。", "</p></div></div></div>");
}
function storyCard(s) {
  const known = s.words.filter((w) => {
    var _a2;
    return ((_a2 = state.words[w.id]) == null ? void 0 : _a2.stage) > 0;
  }).length;
  return '<a class="story-card" href="#story/'.concat(s.id, '"><div class="cover" style="--cover:').concat(s.color, ';--cover-ink:#52635f"><div><div class="cover-type">').concat(esc(s.category), " · ").concat(esc(s.tag), '</div><div class="cover-title">').concat(esc(s.en), '</div></div><div class="cover-symbol">').concat(s.symbol, '</div><span class="cover-no">CHAPTER ').concat(String(s.number).padStart(2, "0"), '</span></div><div class="card-body"><div class="card-tags"><span class="tag">').concat(esc(s.category), "</span><span>").concat(state.completed.includes(s.id) ? "✓ 已读" : "约 4 分钟", " · ").concat(s.words.length, " 词</span></div><h3>").concat(esc(s.title), "</h3><p>").concat(esc(s.cn[0]), '</p><div class="card-bottom"><span>').concat(known ? "".concat(known, " / ").concat(s.words.length, " 词已记住") : esc(s.mood), "</span><span>").concat(state.completed.includes(s.id) ? "再读一次" : "打开故事", " ↗</span></div></div></a>");
}
function filteredStories() {
  let list = STORIES.filter((s) => (category === "全部" || s.category === category) && (!search || [s.title, s.en, s.category, s.tag, ...s.words.map((w) => "".concat(w.word, " ").concat(w.meaning))].join(" ").toLowerCase().includes(search.toLowerCase())));
  if (sortUnread) list.sort((a, b) => Number(state.completed.includes(a.id)) - Number(state.completed.includes(b.id)));
  return list;
}
function renderCards() {
  const list = filteredStories(), count = document.getElementById("story-count"), grid = document.getElementById("story-grid");
  if (!count || !grid) return;
  count.textContent = "".concat(list.length, " 篇故事 · ").concat(list.reduce((n, s) => n + s.words.length, 0), " 个语境词");
  grid.innerHTML = list.length ? list.map(storyCard).join("") : '<div class="empty-state" style="grid-column:1/-1"><h2>没有找到匹配故事</h2><p>换一个关键词，或者看看全部章节。</p><button class="button secondary" data-action="clear-search">查看全部</button></div>';
}
function library() {
  main.innerHTML = '<section class="hero"><div><div class="eyebrow">WORDSCENE · CET-6 READING</div><h1>先读中文语境，<br>再把英文<em>想起来。</em></h1><p>不做爽文式的单词堆砌。<br>在修仙志的因果与悬疑案的线索里，先看懂人物发生了什么，再主动回忆六级词汇。</p><div class="hero-actions"><a class="button" href="#story/'.concat(state.lastStory, '">').concat(state.completed.length ? "继续上次阅读" : "进入第一章", ' <span>↗</span></a><a class="text-link" href="#review">').concat(dueWords().length ? "复习 ".concat(dueWords().length, " 个到期词") : "开启今日复习", ' →</a></div></div><div class="hero-art" aria-hidden="true"><div class="orb"></div><div class="spark">✦</div><div class="book one"><small>CULTIVATION FILE</small><strong>云门试炼<br>第三声钟</strong><i>先读因果，再记词义</i></div><div class="book two"><small>MYSTERY CASE</small><strong>第七码头<br>匿名线报</strong><i>每个线索，都有英文</i></div><div class="book three"><small>CET-6 WORD BANK</small><strong>').concat(allWords().length, '<br>词可复习</strong><i>context before recall</i></div><span class="art-label">中文语境优先 · 主动回忆巩固</span></div></section>').concat(stats(), '<section aria-labelledby="shelf-heading"><div class="section-title"><h2 id="shelf-heading">今日书架 <span>THE STORY ARCHIVE</span></h2><p>先读中文 · 展开英文 · 点击词汇 · 读完测验</p></div><div class="library-tools"><div class="filters">').concat(["全部", "修仙志", "悬疑案"].map((c) => '<button class="filter '.concat(category === c ? "active" : "", '" data-category="').concat(c, '" aria-pressed="').concat(category === c, '">').concat(c, "</button>")).join(""), '</div><label class="search"><span aria-hidden="true">⌕</span><input id="story-search" type="search" aria-label="搜索故事或单词" placeholder="搜标题 / 线索 / 六级词" value="').concat(esc(search), '"></label></div><div class="library-caption"><span id="story-count"></span><button data-action="sort" aria-pressed="').concat(sortUnread, '">⇅ ').concat(sortUnread ? "未读优先" : "默认顺序", '</button></div><div id="story-grid" class="story-grid"></div></section><div class="reading-note"><b>☁</b><div><strong>建议顺序：中文 → 英文 → 词汇 → 回忆。</strong><br>每篇故事都将中文放在第一视觉层；英文原文默认收起，避免还没理解场景就被单词打断。</div></div>');
  renderCards();
}
function formatEnglish(text) {
  return text.split(/(\[\[.*?\]\])/g).map((part) => {
    var _a2;
    if (!part.startsWith("[[")) return esc(part);
    const word = part.slice(2, -2), w = getWord(word.toLowerCase());
    return w ? '<button class="word-inline '.concat(((_a2 = state.words[w.id]) == null ? void 0 : _a2.stage) > 0 ? "known" : "", '" data-word="').concat(esc(w.id), '" lang="en">').concat(esc(word), "</button>") : esc(word);
  }).join("");
}
function reader(id) {
  const s = getStory(id);
  if (!s) {
    main.innerHTML = '<div class="empty-state"><h2>这篇故事不存在</h2><a class="button" href="#library">回到书架</a></div>';
    return;
  }
  state.lastStory = s.id;
  save();
  const english = state.preferences.english;
  main.innerHTML = '<div class="reader-top"><a href="#library" class="back-link">← 回到故事书架</a><div class="reader-controls"><button class="button secondary compact" data-action="toggle-english" aria-pressed="'.concat(english, '">').concat(english ? "收起英文" : "展开英文原文", '</button><button class="button secondary compact" data-action="read-aloud">▷ 朗读英文</button><button class="button secondary compact" data-action="focus">').concat(document.body.classList.contains("focus-mode") ? "退出专注" : "专注阅读", '</button></div></div><div class="reader-layout"><article class="reader-paper"><div class="eyebrow">CHAPTER ').concat(String(s.number).padStart(2, "0"), " · ").concat(esc(s.category), " · ").concat(esc(s.tag), "</div><h1>").concat(esc(s.title), '</h1><div class="reader-subtitle">').concat(esc(s.en), '</div><div class="reader-meta">先中文语境 · ').concat(s.words.length, " 个重点词 · ").concat(esc(s.mood), '<br><span class="practice-label">以下为原创 CET-6 风格仿真训练，非官方真题。</span></div>').concat(s.cn.map((cn, i) => '<section class="scene-block"><div class="scene-number">'.concat(String(i + 1).padStart(2, "0"), '</div><p class="reader-paragraph chinese-first" lang="zh-CN">').concat(esc(cn), '</p><p class="translation english-second" lang="en" ').concat(english ? "" : "hidden", ">").concat(formatEnglish(s.en[i]), "</p></section>")).join(""), '<div class="reader-end"><div class="eyebrow">READ · RECALL · RETELL</div><p>合上英文后，试着用中文复述这一段发生了什么，再说出你记得的英文词。</p><div class="hero-actions"><button class="button" data-action="story-quiz" data-story="').concat(s.id, '">读完了，开始回忆 <span>→</span></button><button class="text-link" data-action="complete-story" data-story="').concat(s.id, '">').concat(state.completed.includes(s.id) ? "✓ 已标记读完" : "标记读完", '</button></div></div></article><aside class="reader-aside"><h2>本章词签</h2><p>词汇从中文画面里出现。点击查看释义、搭配和复习状态。</p><div class="words">').concat(s.words.map((w) => '<div class="word-row"><button data-word="'.concat(w.id, '" lang="en">').concat(esc(w.word), "<small>").concat(esc(w.pos), " · ").concat(esc(w.meaning), '</small></button><button class="mark" data-action="favorite" data-id="').concat(w.id, '" aria-label="收藏 ').concat(esc(w.word), '">').concat(state.favorites.includes(w.id) ? "★" : "☆", "</button></div>")).join(""), '</div><div class="aside-box"><b>本章记忆进度</b><span>').concat(s.words.filter((w) => {
    var _a2;
    return ((_a2 = state.words[w.id]) == null ? void 0 : _a2.stage) > 0;
  }).length, " / ").concat(s.words.length, ' 已掌握</span><div class="tiny-progress"><span style="width:').concat(s.words.filter((w) => {
    var _a2;
    return ((_a2 = state.words[w.id]) == null ? void 0 : _a2.stage) > 0;
  }).length / s.words.length * 100, '%"></span></div></div></aside></div>');
}
function wordModal(id) {
  const w = getWord(id);
  if (!w) return;
  selectedWord = id;
  const p = state.words[id];
  document.getElementById("word-content").innerHTML = '<div class="dialog-inner"><div class="dialog-top"><h2 id="word-title" class="english-title" lang="en">'.concat(esc(w.word), '</h2><button class="close-button" data-action="close-word" aria-label="关闭">×</button></div><p>').concat(esc(w.pos), ' <button class="text-link" data-action="speak-word">◖ 发音</button></p><div class="word-meaning">').concat(esc(w.meaning), '</div><p class="word-context-label">中文语境优先</p>').concat(w.phrase ? '<p>常用搭配：<strong lang="en">'.concat(esc(w.phrase), "</strong></p>") : "").concat(w.example ? '<div class="word-example" lang="en">'.concat(esc(w.example), "</div>") : "", '<label class="note-label" for="word-note">我的联想 / 笔记</label><textarea id="word-note" placeholder="写一句自己的中文联想，帮助下次回忆">').concat(esc(state.notes[id] || ""), '</textarea><div class="word-source">来自「').concat(esc(w.source), "」").concat(p ? " · 下次复习：".concat(esc(p.due)) : "", '</div><div class="dialog-buttons"><button class="button compact" data-action="remember-word">✓ ').concat((p == null ? void 0 : p.stage) > 0 ? "再确认记住了" : "我记住了", '</button><button class="button secondary compact" data-action="forget-word">还不熟，加入复习</button><button class="button secondary compact" data-action="save-note">保存笔记</button><button class="button secondary compact" data-action="favorite" data-id="').concat(esc(w.id), '">').concat(state.favorites.includes(id) ? "★ 已收藏" : "☆ 收藏", "</button></div></div>");
  if (!wordDialog.open) wordDialog.showModal();
}
function review() {
  var _a2;
  const due = dueWords(), freshWords = allWords().filter((w) => !state.words[w.id]);
  main.innerHTML = '<div class="page-heading"><div class="eyebrow">ACTIVE RECALL · SPACED REVIEW</div><h1>先回想，再看答案。</h1><p>中文画面负责理解，英文拼写负责提取。今天已学习 '.concat(((_a2 = state.activity[today()]) == null ? void 0 : _a2.length) || 0, " / ").concat(state.goal, " 个词。</p></div>").concat(stats(), '<div class="review-layout"><section class="review-card"><div class="eyebrow">TODAY\'S MISSION</div><h2>').concat(due.length ? "今天有 ".concat(due.length, " 个词回来找你。") : "今天暂时没有到期词。", "</h2><p>").concat(due.length ? "每轮最多练习 12 词：先根据中文释义和例句回忆英文，再检查答案。答错的词会重新回到当天队列。" : "词库里还有 ".concat(freshWords.length, " 个未学习词。可以从新章节开始，也可以立即随机抽取练习。"), '</p><div class="review-options"><button class="button" data-action="due-quiz" ').concat(due.length ? "" : "disabled", '>开始到期复习 <span>→</span></button><button class="button secondary" data-action="free-quiz">随机练 12 词</button></div><a class="text-link" href="#library">去故事书架，先读一段中文语境 ↗</a></section><aside class="review-mini"><h3>记忆间隔</h3><p>每次主动回忆成功，间隔逐步拉长；不确定就诚实选“还不熟”。</p>').concat([[1, "第一次记住", "1 天后"], [2, "第二次回忆", "3 天后"], [3, "第三次回忆", "7 天后"], [4, "持续巩固", "14 天后"]].map((x) => '<div class="schedule-step"><b>'.concat(x[0], "</b><span>").concat(x[1], " · ").concat(x[2], "</span></div>")).join(""), '<p class="practice-label">进度保存在本机。换设备前请到词本导出备份。</p></aside></div>');
}
function startQuiz(words, storyId = null) {
  if (!words.length) {
    toast("当前没有可练习的词，先读一篇故事吧。");
    return;
  }
  quiz = { words: shuffle(words).slice(0, 12), storyId, index: 0, correct: 0, wrong: [], mode: "choice", answered: false, choice: "", options: [], finished: false };
  location.hash = "quiz";
}
function quizPage() {
  if (!quiz) {
    main.innerHTML = '<div class="empty-state"><h2>还没有开始练习</h2><a class="button" href="#review">去今日复习</a></div>';
    return;
  }
  if (quiz.finished) {
    quizResult();
    return;
  }
  const w = quiz.words[quiz.index];
  if (!quiz.options.length) quiz.options = shuffle([w, ...shuffle(allWords().filter((x) => x.id !== w.id)).slice(0, 3)]);
  const sentence = (w.example || "The word ".concat(w.word, " appears in a meaningful context.")).replace(new RegExp("\\b".concat(w.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "\\b"), "ig"), "________");
  main.innerHTML = '<div class="reader-top"><a href="#review" class="back-link">← 退出本轮练习</a><div class="mode-buttons"><button data-mode="choice" class="'.concat(quiz.mode === "choice" ? "active" : "", '" ').concat(quiz.answered ? "disabled" : "", '>语境选择</button><button data-mode="spelling" class="').concat(quiz.mode === "spelling" ? "active" : "", '" ').concat(quiz.answered ? "disabled" : "", '>拼写回忆</button></div></div><div class="review-layout"><section class="review-card"><div class="quiz-top"><span>主动回忆 · ').concat(quiz.mode === "choice" ? "根据中文选英文" : "看中文写英文", "</span><span>").concat(quiz.index + 1, " / ").concat(quiz.words.length, '</span></div><div class="quiz-bar"><span style="width:').concat(quiz.index / quiz.words.length * 100, '%"></span></div><div class="quiz-context">').concat(esc(w.source), " · ").concat(esc(w.pos), '</div><div class="quiz-cn">').concat(esc(w.meaning), '</div><div class="quiz-sentence" lang="en">').concat(esc(sentence), "</div>").concat(quiz.mode === "choice" ? '<div class="answer-grid">'.concat(quiz.options.map((o, i) => '<button class="answer '.concat(quiz.answered ? o.id === w.id ? "correct" : quiz.choice === o.id ? "wrong" : "" : "", '" data-answer="').concat(esc(o.id), '" ').concat(quiz.answered ? "disabled" : "", "><b>").concat("ABCD"[i], '</b><span lang="en">').concat(esc(o.word), "</span></button>")).join(""), "</div>") : '<form id="spelling-form"><label class="quiz-context" for="spell-input">输入英文单词</label><input id="spell-input" class="spelling-input" autocomplete="off" autocapitalize="off" spellcheck="false" '.concat(quiz.answered ? "disabled" : "", ' value="').concat(quiz.answered ? esc(quiz.choice) : "", '" placeholder="先想一想，再输入"><button class="button compact" type="submit" ').concat(quiz.answered ? "disabled" : "", ">检查答案</button></form>")).concat(quiz.answered ? '<div class="answer-feedback '.concat(quiz.choice === w.id ? "good" : "bad", '"><b>').concat(quiz.choice === w.id ? "回答正确" : "再见一次", '</b><span>答案：<strong lang="en">').concat(esc(w.word), "</strong> · ").concat(esc(w.meaning), '</span></div><button class="button" data-action="next-question">').concat(quiz.index + 1 === quiz.words.length ? "查看结果" : "下一题", " →</button>") : "", '</section><aside class="review-mini"><h3>回到语境</h3><p>如果想不起，不要硬猜。打开词汇详情，看看它来自哪一篇修仙志或悬疑案。</p><button class="text-link" data-word="').concat(esc(w.id), '">查看 ').concat(esc(w.word), " ↗</button></aside></div>");
}
function answer(value) {
  if (!quiz || quiz.answered) return;
  const w = quiz.words[quiz.index], normalized = value.trim().toLowerCase();
  if (!normalized) {
    toast("先输入或选择答案。");
    return;
  }
  quiz.choice = normalized;
  quiz.answered = true;
  if (normalized === w.id) quiz.correct++;
  else quiz.wrong.push(w);
  record(w.id, normalized === w.id);
  quizPage();
}
function quizResult() {
  main.innerHTML = '<div class="page-heading"><div class="eyebrow">ACTIVE RECALL COMPLETE</div><h1>这一轮，记忆有了回声。</h1></div><section class="review-card result-card"><div class="result-number">'.concat(quiz.correct, "<small> / ").concat(quiz.words.length, "</small></div><h2>").concat(quiz.correct === quiz.words.length ? "全部想起来了。" : "认识它们，也是一种进步。", "</h2><p>正确回忆已安排下一次复习。").concat(quiz.storyId ? "本章也已标记读完。" : "", "</p>").concat(quiz.wrong.length ? '<p>建议再见一次：</p><div class="result-list">'.concat(quiz.wrong.map((w) => '<button data-word="'.concat(w.id, '">').concat(esc(w.word), "</button>")).join(""), "</div>") : '<div class="completion">✓ 本轮全部正确</div>', '<div class="hero-actions"><button class="button" data-action="retry-wrong" ').concat(quiz.wrong.length ? "" : "hidden", '>再练错词 →</button><a class="button secondary" href="#review">回到复习</a><a class="text-link" href="#library">再读一篇故事 ↗</a></div></section>');
}
function notebook() {
  main.innerHTML = '<div class="page-heading"><div class="eyebrow">WORD BANK · '.concat(allWords().length, ' WORDS</div><h1>我的词本，保存每一次想起。</h1><p>故事重点词与六级扩展词统一管理。可以收藏、写联想、朗读、复习和备份。</p></div><div class="notebook-top"><label class="search"><span>⌕</span><input id="notebook-search" type="search" placeholder="搜索英文 / 中文释义" value="').concat(esc(notebookSearch), '"></label><div class="notebook-actions"><button class="button secondary compact" data-action="backup">导出进度</button><button class="button secondary compact" data-action="restore">恢复备份</button><button class="button compact" data-action="import-words">＋ 添加生词</button></div></div><div class="filters">').concat([["all", "全部词汇"], ["story", "故事重点词"], ["core", "六级扩展词"], ["favorite", "我的收藏"], ["due", "到期复习"], ["new", "尚未学习"], ["learned", "已记住"]].map(([id, t]) => '<button class="filter '.concat(notebookFilter === id ? "active" : "", '" data-notebook="').concat(id, '">').concat(t, "</button>")).join(""), '</div><div id="word-list"></div><p class="practice-label">').concat(storageAvailable ? "进度自动保存在当前浏览器。" : "当前浏览器无法保存进度，请及时导出备份。", '</p><input type="file" id="backup-input" accept=".json,application/json" hidden>');
  renderWordList();
}
function renderWordList() {
  const list = allWords().filter((w) => {
    const p = state.words[w.id], match = notebookFilter === "all" || notebookFilter === "story" && w.storyId || notebookFilter === "core" && !w.storyId && w.source === "六级核心词库" || notebookFilter === "favorite" && state.favorites.includes(w.id) || notebookFilter === "due" && (p == null ? void 0 : p.due) <= today() || notebookFilter === "new" && !p || notebookFilter === "learned" && (p == null ? void 0 : p.stage) > 0;
    return match && (!notebookSearch || "".concat(w.word, " ").concat(w.meaning, " ").concat(w.source).toLowerCase().includes(notebookSearch.toLowerCase()));
  });
  const el = document.getElementById("word-list");
  if (!el) return;
  el.innerHTML = list.length ? '<div class="library-caption"><span>找到 '.concat(list.length, " 个词</span><span>共 ").concat(allWords().length, ' 个可学习词</span></div><div class="word-table-wrap"><table class="word-table"><thead><tr><th>单词 / WORD</th><th>中文释义</th><th>来源</th><th>状态</th><th>操作</th></tr></thead><tbody>').concat(list.slice(0, notebookLimit).map((w) => {
    const [cl, status] = statusFor(w);
    return '<tr><td><button class="table-word" data-word="'.concat(w.id, '" lang="en">').concat(esc(w.word), '</button><div class="practice-label">').concat(esc(w.pos), "</div></td><td>").concat(esc(w.meaning), "</td><td>").concat(w.storyId ? '<a href="#story/'.concat(w.storyId, '">').concat(esc(w.source), " ↗</a>") : esc(w.source), '</td><td><span class="word-status ').concat(cl, '">').concat(status, "</span>").concat(state.words[w.id] ? '<div class="practice-label">'.concat(state.words[w.id].due, "</div>") : "", '</td><td><div class="table-actions"><button class="icon-button" data-action="speak" data-id="').concat(w.id, '" aria-label="朗读">◖</button><button class="icon-button" data-action="favorite" data-id="').concat(w.id, '" aria-label="收藏">').concat(state.favorites.includes(w.id) ? "★" : "☆", "</button></div></td></tr>");
  }).join(""), "</tbody></table></div>").concat(list.length > notebookLimit ? '<button class="button secondary load-more" data-action="more-words">再显示 40 个词</button>' : "") : '<div class="empty-state"><h2>这里暂时没有词</h2><p>去读一篇故事，或添加自己的生词。</p></div>';
}
function utility(title, body) {
  document.getElementById("utility-content").innerHTML = '<div class="dialog-inner"><div class="dialog-top"><h2 id="utility-title">'.concat(title, '</h2><button class="close-button" data-action="close-utility">×</button></div>').concat(body, "</div>");
  if (!utilityDialog.open) utilityDialog.showModal();
}
function speak(text) {
  if (!("speechSynthesis" in window)) {
    toast("当前浏览器不支持朗读。");
    return;
  }
  if (activeSpeech === text && speechSynthesis.speaking) {
    speechSynthesis.cancel();
    activeSpeech = null;
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  u.rate = 0.84;
  activeSpeech = text;
  u.onend = () => activeSpeech = null;
  speechSynthesis.speak(u);
  toast(text.length > 80 ? "正在朗读，再点一次可停止。" : "正在朗读 ".concat(text));
}
function exportBackup() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }), url = URL.createObjectURL(blob), a = document.createElement("a");
  a.href = url;
  a.download = "wordscene-progress-".concat(today(), ".json");
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2e3);
  toast("已导出学习进度");
}
function addWords() {
  const raw = document.getElementById("import-text").value.trim(), lines = raw ? raw.split("\n") : [], existing = new Set(allWords().map((w) => w.id)), newWords = [], bad = [];
  lines.forEach((line, i) => {
    const [word, meaning, ...example] = line.split("|").map((x) => x.trim());
    if (!/^[a-z][a-z '-]{0,49}$/i.test(word || "") || !meaning) bad.push(i + 1);
    else if (!existing.has(word.toLowerCase())) {
      newWords.push({ id: word.toLowerCase(), word: word.toLowerCase(), meaning, pos: "自定义", phrase: "", example: example.join(" | "), source: "我的生词", storyId: null });
      existing.add(word.toLowerCase());
    }
  });
  if (bad.length) {
    document.getElementById("import-error").textContent = "第 ".concat(bad.join("、"), " 行格式有误，请使用：英文 | 中文释义 | 英文例句（可选）。");
    return;
  }
  state.custom.push(...newWords);
  save();
  utilityDialog.close();
  notebookFilter = "all";
  notebook();
  toast(newWords.length ? "已添加 ".concat(newWords.length, " 个生词") : "这些词已经在词本里了");
}
function render() {
  if (!main) return;
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  if (wordDialog && wordDialog.close) wordDialog.close();
  if (utilityDialog && utilityDialog.close) utilityDialog.close();
  const [route, id] = location.hash.slice(1).split("/");
  if (route !== "story") document.body.classList.remove("focus-mode");
  if (route === "story") reader(id);
  else if (route === "review") review();
  else if (route === "notebook") notebook();
  else if (route === "quiz") quizPage();
  else library();
  updateNav();
}
document.addEventListener("click", (e) => {
  const el = e.target.closest("button,a,[data-word]");
  if (!el) return;
  if (el.dataset.word) {
    wordModal(el.dataset.word);
    return;
  }
  if (el.dataset.category) {
    category = el.dataset.category;
    document.querySelectorAll("[data-category]").forEach((b) => b.classList.toggle("active", b.dataset.category === category));
    renderCards();
    return;
  }
  if (el.dataset.notebook) {
    notebookFilter = el.dataset.notebook;
    notebookLimit = 40;
    document.querySelectorAll("[data-notebook]").forEach((b) => b.classList.toggle("active", b.dataset.notebook === notebookFilter));
    renderWordList();
    return;
  }
  if (el.dataset.mode && quiz && !quiz.answered) {
    quiz.mode = el.dataset.mode;
    quizPage();
    return;
  }
  if (el.dataset.answer) {
    answer(el.dataset.answer);
    return;
  }
  const action = el.dataset.action, id = el.dataset.id;
  if (action === "sort") {
    sortUnread = !sortUnread;
    el.innerHTML = "⇅ ".concat(sortUnread ? "未读优先" : "默认顺序");
    renderCards();
  } else if (action === "clear-search") {
    search = "";
    category = "全部";
    library();
  } else if (action === "toggle-english") {
    state.preferences.english = !state.preferences.english;
    save();
    reader(location.hash.split("/")[1]);
  } else if (action === "focus") {
    document.body.classList.toggle("focus-mode");
    reader(location.hash.split("/")[1]);
  } else if (action === "favorite") {
    const on = state.favorites.includes(id);
    state.favorites = on ? state.favorites.filter((x) => x !== id) : [...state.favorites, id];
    save();
    if (location.hash === "#notebook") renderWordList();
    else if (location.hash.startsWith("#story/")) reader(location.hash.split("/")[1]);
    toast(on ? "已取消收藏" : "已收藏到我的词本");
  } else if (action === "close-word") wordDialog.close();
  else if (action === "close-utility") utilityDialog.close();
  else if (action === "remember-word" || action === "forget-word") {
    record(selectedWord, action === "remember-word");
    wordDialog.close();
    render();
    toast(action === "remember-word" ? "已安排下一次复习。" : "已加入今天的复习队列。");
  } else if (action === "save-note") {
    state.notes[selectedWord] = document.getElementById("word-note").value.slice(0, 500);
    save();
    wordDialog.close();
    toast("联想笔记已保存");
  } else if (action === "speak-word") speak(getWord(selectedWord).word);
  else if (action === "speak") speak(getWord(id).word);
  else if (action === "read-aloud") {
    const s = getStory(location.hash.split("/")[1]);
    if (s) speak(s.en.join(" ").replace(/\[\[(.*?)\]\]/g, "$1"));
  } else if (action === "complete-story") {
    const sid = el.dataset.story;
    if (!state.completed.includes(sid)) state.completed.push(sid);
    save();
    el.textContent = "✓ 已标记读完";
    toast("本章已标记读完。");
  } else if (action === "story-quiz") {
    const s = getStory(el.dataset.story);
    startQuiz(s.words, s.id);
  } else if (action === "due-quiz") startQuiz(dueWords());
  else if (action === "free-quiz") startQuiz(allWords());
  else if (action === "next-question" && (quiz == null ? void 0 : quiz.answered)) {
    if (quiz.index + 1 === quiz.words.length) {
      quiz.finished = true;
      if (quiz.storyId && !state.completed.includes(quiz.storyId)) {
        state.completed.push(quiz.storyId);
        save();
      }
    } else {
      quiz.index++;
      quiz.answered = false;
      quiz.choice = "";
      quiz.options = [];
    }
    quizPage();
  } else if (action === "retry-wrong" && quiz) startQuiz(quiz.wrong);
  else if (action === "backup") exportBackup();
  else if (action === "restore") document.getElementById("backup-input").click();
  else if (action === "more-words") {
    notebookLimit += 40;
    renderWordList();
  } else if (action === "import-words") utility("添加自己的生词", '<p>每行一个词。建议把它放进你自己的中文画面里。</p><label for="import-text">英文单词 | 中文释义 | 英文例句（可选）</label><textarea id="import-text" placeholder="wander | 漫步；徘徊 | We wander through the fog."></textarea><div id="import-error" class="error-message"></div><div class="dialog-buttons"><button class="button" data-action="save-import">添加到词本 →</button></div><p>已有词会自动跳过。</p>');
  else if (action === "save-import") addWords();
  else if (action === "save-goal") {
    state.goal = Number(document.getElementById("goal-select").value);
    save();
    utilityDialog.close();
    render();
    toast("每日目标已更新");
  }
});
document.addEventListener("input", (e) => {
  if (e.target.id === "story-search") {
    search = e.target.value;
    renderCards();
  } else if (e.target.id === "notebook-search") {
    notebookSearch = e.target.value;
    notebookLimit = 40;
    renderWordList();
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "spelling-form") {
    e.preventDefault();
    answer(document.getElementById("spell-input").value);
  }
});
document.addEventListener("change", async (e) => {
  if (e.target.id !== "backup-input") return;
  const file = e.target.files[0];
  if (!file) return;
  try {
    const raw = JSON.parse(await file.text());
    if (!raw || !raw.words) throw Error("不是有效的词间备份");
    const incoming = cleanState(raw);
    state.custom = [...new Map([...state.custom, ...incoming.custom].map((w) => [w.id, w])).values()].slice(0, 1500);
    state.words = __spreadValues(__spreadValues({}, state.words), incoming.words);
    state.favorites = [.../* @__PURE__ */ new Set([...state.favorites, ...incoming.favorites])];
    state.completed = [.../* @__PURE__ */ new Set([...state.completed, ...incoming.completed])];
    state.notes = __spreadValues(__spreadValues({}, state.notes), incoming.notes);
    for (const [d, ids] of Object.entries(incoming.activity)) state.activity[d] = [.../* @__PURE__ */ new Set([...state.activity[d] || [], ...ids])];
    state = cleanState(state);
    save();
    notebook();
    toast("备份已合并");
  } catch (err) {
    toast("恢复失败：".concat(err.message));
  } finally {
    e.target.value = "";
  }
});
const goalButton = document.getElementById("goal-button");
if (goalButton) goalButton.addEventListener("click", () => utility("设置今日目标", '<p>目标按今天学习过的不同单词计算。中文阅读、词汇确认和练习都会记录进度。</p><label for="goal-select">每日词汇目标</label><select id="goal-select">'.concat([10, 20, 30, 50].map((n) => '<option value="'.concat(n, '" ').concat(state.goal === n ? "selected" : "", ">每天 ").concat(n, " 个词</option>")).join(""), '</select><div class="dialog-buttons"><button class="button" data-action="save-goal">保存目标</button></div>')));
const aboutButton = document.getElementById("about-button");
if (aboutButton) aboutButton.addEventListener("click", () => utility("词间 · 中文语境优先", "<p>这里不是把六级词汇塞进爽文，而是先让你看懂一段完整的中文情境，再逐步展开英文、词义和主动回忆。</p><p>当前内置 ".concat(STORIES.length, " 篇原创故事、").concat(STORY_WORDS.length, " 个故事重点词，以及 ").concat(EXTRA_WORDS.length, " 个六级扩展词。词库采用可导入结构，可继续加入你的完整六级词表。</p><p>所有学习进度、收藏、联想笔记都保存在当前浏览器；可在「我的词本」导出备份。朗读使用设备英语语音。</p>")));
for (const dialog of [wordDialog, utilityDialog]) if (dialog) dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
window.addEventListener("hashchange", () => {
  render();
  window.scrollTo(0, 0);
  if (main && main.focus) main.focus({ preventScroll: true });
});
;
let readingMode = "cn", storyLimit = 12;
let wordIndex = new Map(BUILTIN_WORDS.map((w) => [w.id, w]));
function refreshWordIndex() {
  wordIndex = new Map(BUILTIN_WORDS.map((w) => [w.id, w]));
}
const rawCleanState = cleanState;
cleanState = function(raw) {
  var _a2, _b, _c;
  const s = rawCleanState(raw);
  s.bookmarks = Array.isArray(raw == null ? void 0 : raw.bookmarks) ? raw.bookmarks.filter((id) => getStory(id)) : [];
  s.mistakes = Object.fromEntries(Object.entries((raw == null ? void 0 : raw.mistakes) || {}).filter(([id, n]) => getWordSafe(id, s) && Number.isInteger(n) && n > 0));
  s.preferences = __spreadProps(__spreadValues({}, s.preferences), { size: [18, 20, 22, 24].includes((_a2 = raw == null ? void 0 : raw.preferences) == null ? void 0 : _a2.size) ? raw.preferences.size : 20, night: Boolean((_b = raw == null ? void 0 : raw.preferences) == null ? void 0 : _b.night), rate: [0.7, 0.85, 1, 1.15].includes((_c = raw == null ? void 0 : raw.preferences) == null ? void 0 : _c.rate) ? raw.preferences.rate : 0.85 });
  s.words = Object.fromEntries(Object.entries(s.words).filter(([, p]) => /^\d{4}-\d{2}-\d{2}$/.test(p.due)));
  return s;
};
function getWordSafe(id, s) {
  return BUILTIN_INDEX.has(id) || wordIndex.has(id) || s.custom.some((w) => w.id === id);
}
try {
  state = cleanState(JSON.parse(localStorage.getItem(KEY) || localStorage.getItem("wordscene-v1")) || state);
} catch (e) {
  state = cleanState(state);
}
const oldRecord = record;
record = function(id, correct) {
  if (!getWord(id)) return;
  if (!correct) state.mistakes[id] = (state.mistakes[id] || 0) + 1;
  const old = state.words[id];
  if (correct && (old == null ? void 0 : old.last) === today() && old.stage > 0) {
    state.activity[today()] = [.../* @__PURE__ */ new Set([...state.activity[today()] || [], id])];
    save();
    return;
  }
  oldRecord(id, correct);
};
function applyPreferences() {
  document.body.classList.toggle("night", state.preferences.night);
  document.documentElement.style.setProperty("--reading-size", state.preferences.size + "px");
}
const oldStats = stats;
stats = function() {
  return oldStats().replace("词已掌握", "词已学习").replace("重点词 + 六级扩展词库", "完整参考词表 + 故事补充词");
};
function coveragePanel() {
  const referencePercent = (COVERAGE.reference || 0 ? COVERAGE.contextual / COVERAGE.reference * 100 : 0).toFixed(1);
  const allPercent = (COVERAGE.total || 0 ? COVERAGE.coveredTotal / COVERAGE.total * 100 : 0).toFixed(1);
  return '<section class="coverage-panel"><div><strong>'.concat(COVERAGE.coveredTotal.toLocaleString(), " / ").concat(COVERAGE.total.toLocaleString(), " 词</strong><p>已有故事语境 · 覆盖率 ").concat(allPercent, "%<br>参考词表 ").concat(COVERAGE.contextual.toLocaleString(), " / ").concat(COVERAGE.reference.toLocaleString(), " 词（").concat(referencePercent, "%）</p></div><div><strong>").concat(STORIES.length, " 篇短篇</strong><p>修仙 ").concat(STORIES.filter((s) => s.category === "修仙志").length, " 篇 · 悬疑 ").concat(STORIES.filter((s) => s.category === "悬疑案").length, ' 篇<br>每个词都按故事中的实际出现核对</p></div><a class="button secondary compact" href="#units">按单元学习全部词 →</a></section>');
}
const oldLibrary = library;
library = function() {
  oldLibrary();
  if (!main) return;
  const hero = main.querySelector(".hero");
  if (!hero) return;
  const title = hero.querySelector("h1"), copy = hero.querySelector("p"), actions = hero.querySelector(".hero-actions"), statsStrip = main.querySelector(".stats-strip");
  if (title) title.innerHTML = "先入故事，<br>再让单词<em>有处可寻。</em>";
  if (copy) copy.innerHTML = "先读懂中文里的山雨、灯影与人物选择。<br>再看英文如何表达，最后关掉提示，试着把它想起来。";
  if (actions) actions.insertAdjacentHTML("beforeend", '<button class="text-link" data-action="random-story">随机一篇 ↗</button>');
  if (statsStrip) statsStrip.insertAdjacentHTML("afterend", coveragePanel());
};
storyCard = function(s) {
  const known = s.words.filter((w) => {
    var _a2;
    return ((_a2 = state.words[w.id]) == null ? void 0 : _a2.stage) > 0;
  }).length, excerpt = s.cn[0].replace(/\[\[[^|]+\|([^\]]+)\]\]/g, "$1");
  return '<a class="story-card" href="#story/'.concat(s.id, '"><div class="cover" style="--cover:').concat(s.color, ';--cover-ink:#52635f"><div><div class="cover-type">').concat(s.category, " · ").concat(s.tag, '</div><div class="cover-title">').concat(esc(s.title), '</div></div><div class="cover-symbol">').concat(s.symbol, '</div><span class="cover-no">CHAPTER ').concat(String(s.number).padStart(2, "0"), '</span></div><div class="card-body"><div class="card-tags"><span class="tag">').concat(s.category, "</span><span>").concat(state.completed.includes(s.id) ? "✓ 已读" : "未读", " · ").concat(s.words.length, " 词</span></div><h3>").concat(esc(s.title), "</h3><p>").concat(esc(excerpt), '</p><div class="card-bottom"><span>').concat(known ? "".concat(known, "/").concat(s.words.length, " 词已学习") : s.mood, "</span><span>").concat(state.bookmarks.includes(s.id) ? "★ 书签" : "阅读", " ↗</span></div></div></a>");
};
renderCards = function() {
  var _a2;
  const list = filteredStories(), count = document.getElementById("story-count"), grid = document.getElementById("story-grid");
  if (!count || !grid) return;
  count.textContent = "".concat(list.length, " 篇短篇 · ").concat(category === "全部" ? "修仙 / 悬疑" : category);
  grid.innerHTML = list.length ? list.slice(0, storyLimit).map(storyCard).join("") : '<div class="empty-state"><h2>没有匹配的故事</h2><button class="button secondary" data-action="clear-search">清除筛选</button></div>';
  (_a2 = document.getElementById("more-stories")) == null ? void 0 : _a2.remove();
  if (list.length > storyLimit) grid.insertAdjacentHTML("afterend", '<button id="more-stories" class="button secondary load-more" data-action="more-stories">再显示 12 篇</button>');
};
formatEnglish = function(text) {
  return text.split(/(\[\[.*?\]\])/g).map((part) => {
    if (!part.startsWith("[[")) return esc(part);
    const [id, surface] = part.slice(2, -2).split("|"), w = getWord(id);
    return w ? '<button class="word-inline" data-word="'.concat(esc(id), '">').concat(esc(surface || id), "</button>") : esc(surface || id);
  }).join("");
};
function formatChinese(text) {
  return text.split(/(\[\[.*?\]\])/g).map((p) => {
    if (!p.startsWith("[[")) return esc(p);
    const [id, label] = p.slice(2, -2).split("|");
    return readingMode === "cn" ? esc(label || id) : '<button class="cn-word" data-word="'.concat(esc(id), '" title="查看对应英文">').concat(esc(label || id), "</button>");
  }).join("");
}
function readerTools() {
  return '<div class="reading-tools"><label>字号 <select id="reading-size">'.concat([18, 20, 22, 24].map((n) => '<option value="'.concat(n, '" ').concat(state.preferences.size === n ? "selected" : "", ">").concat(n, "px</option>")).join(""), '</select></label><label>语速 <select id="speech-rate">').concat([0.7, 0.85, 1, 1.15].map((n) => '<option value="'.concat(n, '" ').concat(state.preferences.rate === n ? "selected" : "", ">").concat(n, "×</option>")).join(""), '</select></label><button class="button secondary compact" data-action="night">').concat(state.preferences.night ? "日间纸张" : "夜间阅读", "</button></div>");
}
reader = function(id) {
  const s = getStory(id);
  if (!s) {
    main.innerHTML = '<div class="empty-state"><h2>章节不存在</h2><a class="button" href="#library">回书架</a></div>';
    return;
  }
  state.lastStory = s.id;
  save();
  const sequence = STORIES.filter((x) => x.category === s.category), at = sequence.indexOf(s), prev = sequence[at - 1], next = sequence[at + 1];
  main.innerHTML = '<div class="reader-top"><a class="back-link" href="#library">← 回到故事书架</a><div class="reader-controls"><button class="button secondary compact" data-action="bookmark" data-id="'.concat(s.id, '">').concat(state.bookmarks.includes(s.id) ? "★ 已加书签" : "☆ 加书签", '</button><button class="button secondary compact" data-action="read-aloud">▷ 朗读英文 / 停止</button><button class="button secondary compact" data-action="focus">').concat(document.body.classList.contains("focus-mode") ? "退出专注" : "专注阅读", '</button></div></div><div class="study-steps" aria-label="阅读步骤">').concat([["cn", "① 中文沉浸"], ["parallel", "② 中英对照"], ["en", "③ 英文回忆"]].map(([mode, label]) => '<button data-reading="'.concat(mode, '" class="').concat(readingMode === mode ? "active" : "", '" aria-pressed="').concat(readingMode === mode, '">').concat(label, "</button>")).join(""), '<button data-action="story-quiz" data-story="').concat(s.id, '">④ 章节测验 →</button></div>').concat(readerTools(), '<div class="reader-layout"><article class="reader-paper"><div class="eyebrow">').concat(s.category, " / ").concat(s.tag, " · ").concat(String(s.number).padStart(2, "0"), "</div><h1>").concat(esc(s.title), '</h1><div class="practice-label">以下为原创 CET-style 仿真模拟训练。</div><div class="reader-meta">').concat(s.words.length, " 个语境重点词 · ").concat(readingMode === "cn" ? "先看懂故事，英文暂时收起" : readingMode === "parallel" ? "中文在前，英文紧随其后" : "试着不依赖中文，回忆完整画面", "</div>").concat(s.cn.map((cn, i) => '<section class="scene-block"><div class="scene-number">'.concat(String(i + 1).padStart(2, "0"), "</div>").concat(readingMode !== "en" ? '<p class="reader-paragraph chinese-first">'.concat(formatChinese(cn), "</p>") : "").concat(readingMode !== "cn" ? '<p class="translation english-second" lang="en">'.concat(formatEnglish(s.en[i]), "</p>") : "", "</section>")).join(""), '<div class="reader-end"><p>回想人物做了什么决定，哪些线索改变了判断？把场景想起来，再试着说出英文。</p><div class="hero-actions"><button class="button" data-action="story-quiz" data-story="').concat(s.id, '">开始本章回忆 →</button><button class="text-link" data-action="complete-story" data-story="').concat(s.id, '">').concat(state.completed.includes(s.id) ? "✓ 已读" : "标记读完", '</button></div><div class="chapter-nav">').concat(prev ? '<a href="#story/'.concat(prev.id, '">← ').concat(esc(prev.title), "</a>") : "<span></span>").concat(next ? '<a href="#story/'.concat(next.id, '">').concat(esc(next.title), " →</a>") : '<a href="#library">读完本卷，回到书架 →</a>', '</div></div></article><aside class="reader-aside"><h2>').concat(readingMode === "cn" ? "先让画面留下来" : "本章词签", "</h2>").concat(readingMode === "cn" ? '<p>这一步只读中文。读完后切换「中英对照」，点击重点词查看语境义与例句。</p><button class="button secondary compact" data-reading="parallel">读懂了，展开英文 →</button>' : '<div class="words">'.concat(s.words.map((w) => '<div class="word-row"><button data-word="'.concat(esc(w.id), '">').concat(esc(w.word), "<small>").concat(esc(w.meaning), '</small></button><button class="mark" data-action="favorite" data-id="').concat(esc(w.id), '" aria-label="收藏 ').concat(esc(w.word), '">').concat(state.favorites.includes(w.id) ? "★" : "☆", "</button></div>")).join(""), "</div>"), '<div class="aside-box"><b>本章学习进度</b><span>').concat(s.words.filter((w) => {
    var _a2;
    return ((_a2 = state.words[w.id]) == null ? void 0 : _a2.stage) > 0;
  }).length, " / ").concat(s.words.length, " 词已学习</span></div></aside></div>");
  applyPreferences();
};
wordModal = function(id) {
  let w = getWord(id);
  const story = getStory(location.hash.split("/")[1]);
  if (story) w = __spreadValues(__spreadValues({}, w), story.words.find((x) => x.id === id));
  if (!w) return;
  selectedWord = id;
  const p = state.words[id];
  const related = (w.storyIds || [w.storyId]).map(getStory).filter(Boolean);
  document.getElementById("word-content").innerHTML = '<div class="dialog-inner"><div class="dialog-top"><h2 id="word-title" class="english-title">'.concat(esc(w.word), '</h2><button class="close-button" data-action="close-word" aria-label="关闭释义">×</button></div><p class="phonetic">').concat(w.ukphone ? "英 /" + esc(w.ukphone) + "/" : "", " ").concat(w.usphone ? "美 /" + esc(w.usphone) + "/" : "", ' <button class="text-link" data-action="speak-word">◖ 发音</button></p>').concat(w.context ? '<div class="context-box"><small>先回到中文语境</small><br>'.concat(esc(w.context), "</div>") : "", '<div class="word-meaning">').concat(esc(w.meaning), "</div>").concat(w.dictionaryMeaning && w.dictionaryMeaning !== w.meaning ? "<details><summary>词典其他释义</summary><p>".concat(esc(w.dictionaryMeaning), "</p></details>") : "").concat(w.example ? '<div class="word-example" lang="en">'.concat(esc(w.example), "</div>") : "").concat(w.phrase ? "<p>搭配：".concat(esc(w.phrase), "</p>") : "").concat(related.length ? '<details class="related-stories"><summary>在 '.concat(related.length, ' 篇故事里遇见这个词</summary><div class="related-story-links">').concat(related.map((s) => '<a href="#story/'.concat(s.id, '">').concat(esc(s.title), " ↗</a>")).join(""), "</div></details>") : "", '<label class="note-label" for="word-note">我的中文联想</label><textarea id="word-note" maxlength="500" placeholder="用自己的话记录这个画面">').concat(esc(state.notes[id] || ""), '</textarea><div class="word-source">').concat(esc(w.source)).concat(p ? " · 复习日期 ".concat(esc(p.due)) : "", '</div><div class="dialog-buttons"><button class="button compact" data-action="remember-word">我记住了</button><button class="button secondary compact" data-action="forget-word">还不熟</button><button class="button secondary compact" data-action="save-note">保存笔记</button><button class="button secondary compact" data-action="favorite" data-id="').concat(esc(id), '">').concat(state.favorites.includes(id) ? "★ 已收藏" : "☆ 收藏", "</button></div></div>");
  if (!wordDialog.open) wordDialog.showModal();
};
startQuiz = function(words, storyId = null) {
  if (!words.length) {
    toast("这个队列暂无单词。");
    return;
  }
  quiz = { words: storyId ? shuffle(words) : shuffle(words).slice(0, 12), storyId, index: 0, correct: 0, wrong: [], mode: "choice", answered: false, choice: "", options: [], finished: false };
  wordDialog.close();
  utilityDialog.close();
  if (location.hash === "#quiz") quizPage();
  else location.hash = "quiz";
};
quizPage = function() {
  if (!quiz) {
    main.innerHTML = '<div class="empty-state"><h2>选择一个练习队列</h2><p>刷新页面会结束本轮，已答题目的进度保留。</p><a href="#review" class="button">今日复习</a></div>';
    return;
  }
  if (quiz.finished) {
    quizResult();
    return;
  }
  const w = quiz.words[quiz.index];
  if (!quiz.options.length) quiz.options = shuffle([w, ...shuffle(allWords().filter((x) => x.id !== w.id)).slice(0, 3)]);
  const surface = w.surface || w.word;
  const blank = w.example ? maskSurface(w.example, surface) : "";
  main.innerHTML = '<div class="reader-top"><a href="#review" class="back-link">← 退出练习</a><div class="mode-buttons">'.concat([["choice", "中文选词"], ["spelling", "拼写回忆"], ["listening", "听音拼写"]].map(([mode, label]) => '<button data-mode="'.concat(mode, '" class="').concat(quiz.mode === mode ? "active" : "", '" ').concat(quiz.answered ? "disabled" : "", ">").concat(label, "</button>")).join(""), '</div></div><section class="review-card" style="max-width:850px;margin:auto"><div class="practice-label">以下为原创 CET-style 仿真模拟训练。</div><div class="quiz-top"><span>').concat(quiz.mode === "listening" ? "听发音，写英文" : "先理解，再提取英文原形", "</span><span>").concat(quiz.index + 1, " / ").concat(quiz.words.length, '</span></div><div class="quiz-bar"><span style="width:').concat(quiz.index / quiz.words.length * 100, '%"></span></div>').concat(quiz.mode === "listening" ? '<button class="button secondary" data-action="speak" data-id="'.concat(esc(w.id), '">◖ 播放单词</button>') : "".concat(w.context ? '<div class="context-box">'.concat(esc(w.context), "</div>") : "", '<div class="quiz-cn">').concat(esc(w.meaning), "</div>").concat(blank ? '<p class="quiz-sentence" lang="en">'.concat(esc(blank), "</p>") : "")).concat(quiz.mode === "choice" ? '<div class="answer-grid">'.concat(quiz.options.map((o, i) => '<button class="answer '.concat(quiz.answered ? o.id === w.id ? "correct" : quiz.choice === o.id ? "wrong" : "" : "", '" data-answer="').concat(esc(o.id), '" ').concat(quiz.answered ? "disabled" : "", "><b>").concat("ABCD"[i], "</b>").concat(esc(o.word), "</button>")).join(""), "</div>") : '<form id="spelling-form"><label for="spell-input">英文单词原形</label><input class="spelling-input" id="spell-input" autocomplete="off" autocapitalize="off" spellcheck="false" value="'.concat(quiz.answered ? esc(quiz.choice) : "", '" ').concat(quiz.answered ? "disabled" : "", '><button type="submit" class="button compact" ').concat(quiz.answered ? "disabled" : "", ">检查答案</button></form>")).concat(quiz.answered ? '<div class="answer-feedback '.concat(quiz.choice === w.id ? "good" : "bad", '"><b>').concat(quiz.choice === w.id ? "回答正确" : "本题答错，已加入错词队列", "</b><span>").concat(esc(w.word), " · ").concat(esc(w.meaning), "</span>").concat(w.example ? "<span>".concat(esc(w.example), "</span>") : "", '</div><button class="button" data-action="next-question">').concat(quiz.index + 1 === quiz.words.length ? "查看结果" : "下一题", " →</button>") : "", "</section>");
};
const oldReview = review;
review = function() {
  oldReview();
  main.querySelector(".review-options").insertAdjacentHTML("beforeend", '<button class="button secondary" data-action="mistake-quiz">错词重练 ('.concat(Object.keys(state.mistakes).length, ')</button><button class="button secondary" data-action="favorite-quiz">收藏专练 (').concat(state.favorites.length, ")</button>"));
};
notebook = function() {
  main.innerHTML = '<div class="page-heading"><div class="eyebrow">CET-6 · COMPLETE REFERENCE BANK</div><h1>每个词，都能找到。</h1><p>'.concat(COVERAGE.reference, " 个参考词表词条 + ").concat(BUILTIN_WORDS.length - COVERAGE.reference, " 个补充词 · ").concat(state.custom.length, " 个自添词</p></div>").concat(coveragePanel(), '<div class="notebook-top"><label class="search"><span>⌕</span><input id="notebook-search" type="search" aria-label="搜索词库" placeholder="英文 / 中文释义" value="').concat(esc(notebookSearch), '"></label><div class="notebook-actions"><button class="button secondary compact" data-action="backup">备份进度</button><button class="button secondary compact" data-action="restore">恢复备份</button><button class="button secondary compact" data-action="export-vocab">导出收藏 CSV</button><button class="button compact" data-action="import-words">添加生词</button></div></div><div class="filters">').concat([["all", "全部"], ["cet6", "六级"], ["cet4", "四级基础"], ["story", "有故事语境"], ["uncovered", "尚无故事语境"], ["favorite", "收藏"], ["mistakes", "错词"], ["due", "到期"], ["new", "未学"], ["learned", "已学"], ["custom", "自添"]].map(([id, label]) => '<button class="filter '.concat(notebookFilter === id ? "active" : "", '" data-notebook="').concat(id, '">').concat(label, "</button>")).join(""), '</div><div id="word-list"></div><p class="practice-label">进度保存在当前浏览器；移动网页文件或换设备前，建议导出备份。</p><input type="file" id="backup-input" accept=".json,application/json" hidden>');
  renderWordList();
};
renderWordList = function() {
  const list = allWords().filter((w) => {
    var _a2, _b;
    const p = state.words[w.id];
    const match = notebookFilter === "all" || notebookFilter === "cet6" && ((_a2 = w.levels) == null ? void 0 : _a2.includes("六级")) || notebookFilter === "cet4" && ((_b = w.levels) == null ? void 0 : _b.includes("四级基础")) || notebookFilter === "story" && w.storyId || notebookFilter === "uncovered" && !w.storyId || notebookFilter === "favorite" && state.favorites.includes(w.id) || notebookFilter === "mistakes" && state.mistakes[w.id] || notebookFilter === "due" && (p == null ? void 0 : p.due) <= today() || notebookFilter === "new" && !p || notebookFilter === "learned" && (p == null ? void 0 : p.stage) > 0 || notebookFilter === "custom" && w.source === "我的生词";
    return match && (!notebookSearch || "".concat(w.word, " ").concat(w.meaning, " ").concat(w.dictionaryMeaning || "").toLowerCase().includes(notebookSearch.toLowerCase()));
  });
  document.getElementById("word-list").innerHTML = '<div class="library-caption"><span>匹配 '.concat(list.length, ' 个词</span><button data-action="filtered-quiz">练习当前筛选 →</button></div>').concat(list.length ? '<div class="word-table-wrap"><table class="word-table"><thead><tr><th>英文</th><th>中文释义</th><th>语境 / 来源</th><th>状态</th><th>操作</th></tr></thead><tbody>'.concat(list.slice(0, notebookLimit).map((w) => {
    const [cl, label] = statusFor(w);
    return '<tr><td><button class="table-word" data-word="'.concat(esc(w.id), '">').concat(esc(w.word), '</button><div class="phonetic">').concat(esc(w.ukphone || ""), "</div></td><td>").concat(esc(w.meaning), "</td><td>").concat(w.storyId ? '<a href="#story/'.concat(w.storyId, '">').concat(esc(w.source), " ↗</a>") : esc(w.source), '</td><td><span class="word-status ').concat(cl, '">').concat(label, '</span></td><td><button class="icon-button" data-action="speak" data-id="').concat(esc(w.id), '" aria-label="朗读 ').concat(esc(w.word), '">◖</button><button class="icon-button" data-action="favorite" data-id="').concat(esc(w.id), '" aria-label="收藏 ').concat(esc(w.word), '">').concat(state.favorites.includes(w.id) ? "★" : "☆", "</button></td></tr>");
  }).join(""), "</tbody></table></div>").concat(list.length > notebookLimit ? '<button class="button secondary load-more" data-action="more-words">再显示 40 个词</button>' : "") : '<div class="empty-state"><h2>没有匹配的词汇</h2><p>试试其他筛选条件。</p></div>');
  window.currentWordFilter = list;
};
function units(id) {
  const size = 20, sorted = [...DICTIONARY_WORDS].sort((a, b) => a.id.localeCompare(b.id)), total = Math.ceil(sorted.length / size);
  if (!id) {
    main.innerHTML = '<div class="page-heading"><div class="eyebrow">ALL WORDS · '.concat(total, ' UNITS</div><h1>完整词库，分成每天的一小份。</h1><p>每单元 20 词，按字母排序。这里是词汇研读单元，原创短篇在故事书架。</p></div><div class="study-unit-grid">').concat(Array.from({ length: total }, (_, i) => {
      const words2 = sorted.slice(i * size, (i + 1) * size);
      return '<a href="#units/'.concat(i + 1, '">单元 ').concat(String(i + 1).padStart(3, "0"), "<small>").concat(words2[0].word, " — ").concat(words2[words2.length - 1].word, "</small><small>").concat(words2.filter((w) => {
        var _a2;
        return ((_a2 = state.words[w.id]) == null ? void 0 : _a2.stage) > 0;
      }).length, " / ").concat(words2.length, " 已学</small></a>");
    }).join(""), "</div>");
    return;
  }
  const n = Number(id);
  if (!Number.isInteger(n) || n < 1 || n > total) {
    location.hash = "units";
    return;
  }
  const words = sorted.slice((n - 1) * size, n * size).map((w) => getWord(w.id));
  window.unitWords = words;
  main.innerHTML = '<div class="page-heading"><a href="#units">← 单元目录</a><h1>单元 '.concat(String(n).padStart(3, "0"), '</h1><p>先看中文，再点击词卡展开英文，尝试回忆后再核对。</p><button class="button" data-action="unit-quiz">练习本单元 →</button></div><div class="progress-grid">').concat(words.map((w) => '<div class="progress-card"><p>'.concat(esc(w.dictionaryMeaning || w.meaning), '</p><details><summary>揭开英文</summary><p><button class="table-word" data-word="').concat(esc(w.id), '">').concat(esc(w.word), '</button></p><p class="phonetic">').concat(esc(w.ukphone || ""), "</p>").concat(w.storyId ? '<a href="#story/'.concat(w.storyId, '">回到「').concat(esc(w.source), "」 ↗</a>") : "", "</details></div>")).join(""), '</div><div class="chapter-nav">').concat(n > 1 ? '<a href="#units/'.concat(n - 1, '">← 上一单元</a>') : "<span></span>").concat(n < total ? '<a href="#units/'.concat(n + 1, '">下一单元 →</a>') : "", "</div>");
}
function progress() {
  const learned = Object.values(state.words).filter((p) => p.stage > 0).length;
  main.innerHTML = '<div class="page-heading"><div class="eyebrow">YOUR READING JOURNEY</div><h1>留下来的，都是走过的路。</h1><p>学习日历、阅读书签和词汇覆盖，一处查看。</p></div><div class="progress-grid"><div class="progress-card"><strong>'.concat(state.completed.length, "</strong><p>已读短篇 / ").concat(STORIES.length, '</p></div><div class="progress-card"><strong>').concat(learned, "</strong><p>已学习词汇 / ").concat(allWords().length, '</p></div><div class="progress-card"><strong>').concat(streak(), '</strong><p>连续学习天数</p></div></div><section class="progress-card"><h2>最近 28 天</h2><div class="activity-grid">').concat(Array.from({ length: 28 }, (_, i) => {
    var _a2;
    const d = afterDays(i - 27), n = ((_a2 = state.activity[d]) == null ? void 0 : _a2.length) || 0;
    return '<div class="activity-cell '.concat(n ? "filled" : "", '" title="').concat(d, " · ").concat(n, ' 词">').concat(d.slice(5), "<span>").concat(n, " 词</span></div>");
  }).join(""), '</div><p>同一天重复学习同一个词，只计入一个词。阅读完成与词汇掌握分别记录。</p></section><div class="section-title"><h2>我的阅读书签</h2></div><div class="story-grid">').concat(state.bookmarks.length ? state.bookmarks.map((id) => storyCard(getStory(id))).join("") : "<p>在阅读页点击「加书签」，下次从这里继续。</p>", "</div>").concat(coveragePanel());
}
const oldRender = render;
render = function() {
  const [route, id] = location.hash.slice(1).split("/");
  if (["progress", "units"].includes(route)) {
    wordDialog.close();
    utilityDialog.close();
    document.body.classList.remove("focus-mode");
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    if (route === "progress") progress();
    else units(id);
    updateNav();
  } else oldRender();
  activeSpeech = null;
  applyPreferences();
};
speak = function(text) {
  if (!("speechSynthesis" in window)) {
    toast("此浏览器没有朗读支持。");
    return;
  }
  if (activeSpeech === text && speechSynthesis.speaking) {
    speechSynthesis.cancel();
    activeSpeech = null;
    toast("朗读已停止");
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  u.rate = state.preferences.rate;
  activeSpeech = text;
  u.onend = () => activeSpeech = null;
  u.onerror = (e) => {
    if (!["canceled", "interrupted"].includes(e.error)) toast("语音暂不可用，请检查系统英语语音。");
  };
  speechSynthesis.speak(u);
};
function savePendingNote() {
  const el = document.getElementById("word-note");
  if (wordDialog.open && el && selectedWord) state.notes[selectedWord] = el.value.slice(0, 500);
}
document.addEventListener("click", (e) => {
  const el = e.target.closest("button");
  if (!el) return;
  const action = el.dataset.action, id = el.dataset.id;
  const handled = el.dataset.reading || ["more-stories", "random-story", "bookmark", "night", "mistake-quiz", "favorite-quiz", "filtered-quiz", "unit-quiz", "export-vocab", "favorite", "read-aloud", "remember-word", "forget-word"].includes(action);
  if (!handled) return;
  e.stopImmediatePropagation();
  if (el.dataset.reading) {
    readingMode = el.dataset.reading;
    reader(location.hash.split("/")[1]);
  } else if (action === "more-stories") {
    storyLimit += 12;
    renderCards();
  } else if (action === "random-story") {
    const pool = filteredStories();
    if (pool.length) location.hash = "story/" + shuffle(pool)[0].id;
  } else if (action === "bookmark") {
    state.bookmarks = state.bookmarks.includes(id) ? state.bookmarks.filter((x) => x !== id) : [...state.bookmarks, id];
    save();
    reader(id);
  } else if (action === "night") {
    state.preferences.night = !state.preferences.night;
    save();
    applyPreferences();
    el.textContent = state.preferences.night ? "日间纸张" : "夜间阅读";
  } else if (action === "favorite") {
    savePendingNote();
    state.favorites = state.favorites.includes(id) ? state.favorites.filter((x) => x !== id) : [...state.favorites, id];
    save();
    if (wordDialog.open) wordModal(id);
    else if (location.hash === "#notebook") renderWordList();
    else if (location.hash.startsWith("#story/")) reader(location.hash.split("/")[1]);
  } else if (action === "remember-word" || action === "forget-word") {
    savePendingNote();
    record(selectedWord, action === "remember-word");
    wordDialog.close();
    render();
  } else if (action === "read-aloud") {
    const s = getStory(location.hash.split("/")[1]);
    if (s) speak(s.en.join(" ").replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g, (_, a, b) => b || a));
  } else if (action === "mistake-quiz") startQuiz(allWords().filter((w) => state.mistakes[w.id]));
  else if (action === "favorite-quiz") startQuiz(allWords().filter((w) => state.favorites.includes(w.id)));
  else if (action === "filtered-quiz") startQuiz(window.currentWordFilter || []);
  else if (action === "unit-quiz") {
    startQuiz(window.unitWords || []);
    if (quiz) {
      quiz.words = shuffle(window.unitWords);
      if (location.hash === "#quiz") quizPage();
    }
  } else if (action === "export-vocab") {
    const cell = (t) => '"' + String(t || "").replace(/"/g, '""') + '"', rows = [["word", "meaning", "context", "note"], ...allWords().filter((w) => state.favorites.includes(w.id)).map((w) => [w.word, w.meaning, w.context, state.notes[w.id]])];
    const blob = new Blob(["\uFEFF" + rows.map((r) => r.map(cell).join(",")).join("\r\n")], { type: "text/csv;charset=utf-8" }), url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url;
    a.download = "wordscene-favorites.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2e3);
    toast("已导出收藏词表");
  }
}, true);
document.addEventListener("change", (e) => {
  if (e.target.id === "reading-size") {
    state.preferences.size = Number(e.target.value);
    save();
    applyPreferences();
  } else if (e.target.id === "speech-rate") {
    state.preferences.rate = Number(e.target.value);
    save();
  }
}, true);
document.addEventListener("change", async (e) => {
  if (e.target.id !== "backup-input") return;
  e.stopImmediatePropagation();
  const file = e.target.files[0];
  if (!file) return;
  try {
    if (file.size > 8e6) throw Error("备份超过 8 MB");
    const raw = JSON.parse(await readWordsceneBackupFile(file));
    if (![1, 2].includes(raw == null ? void 0 : raw.version) || !raw.words || Array.isArray(raw.words) || !Array.isArray(raw.custom)) throw Error("不是有效的词间备份");
    const incoming = cleanState(raw);
    state.custom = [...new Map([...state.custom, ...incoming.custom].map((w) => [w.id, w])).values()].slice(0, 1500);
    state.words = __spreadValues(__spreadValues({}, state.words), incoming.words);
    state.skills = mergeSkillRecords(state.skills, incoming.skills);
    state.listeningChecks = mergeListeningChecks(state.listeningChecks, incoming.listeningChecks);
    state.training = mergeTrainingRecords(state.training, incoming.training);
    state.microWork = mergeMicroWork(state.microWork, incoming.microWork);
    state.serial = mergeSerial(state.serial, incoming.serial);
    state.favorites = [.../* @__PURE__ */ new Set([...state.favorites, ...incoming.favorites])];
    state.completed = [.../* @__PURE__ */ new Set([...state.completed, ...incoming.completed])];
    state.bookmarks = [.../* @__PURE__ */ new Set([...state.bookmarks, ...incoming.bookmarks])];
    state.notes = __spreadValues(__spreadValues({}, state.notes), incoming.notes);
    for (const [id, n] of Object.entries(incoming.mistakes)) state.mistakes[id] = Math.max(state.mistakes[id] || 0, n);
    for (const [day, ids] of Object.entries(incoming.activity)) state.activity[day] = [.../* @__PURE__ */ new Set([...state.activity[day] || [], ...ids])];
    state.goal = incoming.goal;
    state.preferences = incoming.preferences;
    state.lastStory = incoming.lastStory;
    state = cleanState(state);
    save();
    applyPreferences();
    notebook();
    toast("备份已合并：词汇、笔记、书签、错词与设置均已恢复。");
  } catch (error) {
    toast("恢复失败：" + error.message);
  } finally {
    e.target.value = "";
  }
}, true);
addWords = function() {
  const raw = document.getElementById("import-text").value.trim(), error = document.getElementById("import-error");
  if (!raw) {
    error.textContent = "请先输入生词。";
    return;
  }
  const lines = raw.split("\n").filter((l) => l.trim());
  if (lines.length > 200) {
    error.textContent = "每次最多 200 行。";
    return;
  }
  const existing = new Set(allWords().map((w) => w.id)), items = [], bad = [];
  lines.forEach((line, i) => {
    const [word, meaning, ...example] = line.split("|").map((s) => s.trim());
    if (!/^[a-z][a-z '-]{0,49}$/i.test(word || "") || !meaning || meaning.length > 150) {
      bad.push(i + 1);
      return;
    }
    const id = word.toLowerCase();
    if (!existing.has(id)) {
      items.push({ id, word: id, meaning, pos: "自定义", phrase: "", example: example.join(" | ").slice(0, 500), source: "我的生词", storyId: null });
      existing.add(id);
    }
  });
  if (bad.length) {
    error.textContent = "第 ".concat(bad.join("、"), " 行格式错误。用 英文 | 中文释义 | 英文例句（可选），释义最多 150 字。");
    return;
  }
  if (state.custom.length + items.length > 1500) {
    error.textContent = "自添生词总数不能超过 1500。";
    return;
  }
  state.custom.push(...items);
  save();
  utilityDialog.close();
  notebookFilter = "custom";
  notebook();
  toast("已添加 ".concat(items.length, " 个生词，重复词已跳过。"));
};
const about = document.getElementById("about-button");
if (about) {
  about.replaceWith(about.cloneNode(true));
  document.getElementById("about-button").addEventListener("click", () => utility("内容与词表说明", "<p>".concat(STORIES.length, " 篇原创修仙/悬疑短篇，").concat(COVERAGE.reference, " 个参考词表词条，").concat(COVERAGE.storyUnique, " 个不同故事重点词。</p><p>完整收录 Qwerty Learner 两份四六级词表及 ECDICT 全部 cet4/cet6 标记词。词表并集完整收录，小说尚未逐词覆盖整个词库；覆盖率在词库页可查。</p><p>不同出版社的六级词表口径并不完全一致。本地词表下载于 ").concat(typeof DICTIONARY_META !== "undefined" && DICTIONARY_META && DICTIONARY_META.retrieved || "本地词表", '，来源与许可可查看 <a href="SOURCES.md" target="_blank" rel="noopener">SOURCES.md ↗</a>。</p><p>进度与笔记仅保存在当前浏览器；可导出 JSON 备份。每日目标只按标记或答题过的不同词计算。</p>')));
}
const goal = document.getElementById("goal-button");
if (goal) {
  goal.replaceWith(goal.cloneNode(true));
  document.getElementById("goal-button").addEventListener("click", () => utility("每日学习目标", '<p>标记词汇或提交答案才计入每日目标；阅读完成单独记录。</p><label for="goal-select">每天学习词数</label><select id="goal-select">'.concat([10, 20, 30, 50].map((n) => '<option value="'.concat(n, '" ').concat(state.goal === n ? "selected" : "", ">").concat(n, " 词</option>")).join(""), '</select><button class="button" data-action="save-goal">保存目标</button>')));
}
window.addEventListener("hashchange", () => {
  if (location.hash.startsWith("#story/")) {
    readingMode = "cn";
    reader(location.hash.split("/")[1]);
  }
});
;
const SKILL_LABELS = { read: "看懂", listen: "听出", spell: "拼对" };
let skillRecordContext = null, skillQuiz = null;
function cleanSkillRecords(raw, s) {
  const result = /* @__PURE__ */ Object.create(null);
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return result;
  for (const [id, values] of Object.entries(raw)) {
    if (!getWordSafe(id, s) || !values || typeof values !== "object") continue;
    const entry = {};
    for (const kind of Object.keys(SKILL_LABELS)) {
      const p = values[kind];
      if (!p || !Number.isInteger(p.stage) || p.stage < 0 || p.stage > 4 || !/^\d{4}-\d{2}-\d{2}$/.test(p.due || "")) continue;
      entry[kind] = { stage: p.stage, due: p.due, last: /^\d{4}-\d{2}-\d{2}$/.test(p.last || "") ? p.last : "", attempts: Math.max(0, Math.floor(Number(p.attempts) || 0)), mistakes: Math.max(0, Math.floor(Number(p.mistakes) || 0)), updatedAt: Math.max(0, Number(p.updatedAt) || 0) };
    }
    if (Object.keys(entry).length) result[id] = entry;
  }
  return result;
}
function cleanListeningChecks(raw) {
  const result = {};
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return result;
  for (const [id, p] of Object.entries(raw)) if (getStory(id) && p && Number.isInteger(p.correct) && Number.isInteger(p.total) && p.total >= 1 && p.total <= 5 && p.correct >= 0 && p.correct <= p.total) result[id] = { correct: p.correct, total: p.total, last: /^\d{4}-\d{2}-\d{2}$/.test(p.last || "") ? p.last : "", attempts: Math.max(1, Math.floor(Number(p.attempts) || 1)), updatedAt: Math.max(0, Number(p.updatedAt) || 0) };
  return result;
}
function mergeSkillRecords(current, incoming) {
  const merged = __spreadValues({}, current);
  for (const [id, kinds] of Object.entries(incoming || {})) {
    merged[id] = __spreadValues({}, current[id] || {});
    for (const [kind, p] of Object.entries(kinds)) {
      const old = merged[id][kind];
      if (!old || p.updatedAt > old.updatedAt || p.updatedAt === old.updatedAt && p.attempts > old.attempts) merged[id][kind] = __spreadValues({}, p);
    }
  }
  return merged;
}
function mergeListeningChecks(current, incoming) {
  const merged = __spreadValues({}, current);
  for (const [id, p] of Object.entries(incoming || {})) if (!merged[id] || p.updatedAt > merged[id].updatedAt || p.updatedAt === merged[id].updatedAt && p.attempts > merged[id].attempts) merged[id] = __spreadValues({}, p);
  return merged;
}
function readWordsceneBackupFile(file) {
  if (typeof file.text === "function") return file.text();
  return new Promise((resolve, reject) => {
    const reader2 = new FileReader();
    reader2.onload = () => resolve(reader2.result);
    reader2.onerror = () => reject(Error("备份文件读取失败"));
    reader2.readAsText(file, "utf-8");
  });
}
const cleanBeforeSkills = cleanState;
cleanState = function(raw) {
  const s = cleanBeforeSkills(raw);
  s.skills = cleanSkillRecords(raw == null ? void 0 : raw.skills, s);
  s.listeningChecks = cleanListeningChecks(raw == null ? void 0 : raw.listeningChecks);
  return s;
};
try {
  state = cleanState(JSON.parse(localStorage.getItem(KEY) || localStorage.getItem("wordscene-v1")) || state);
} catch (e) {
  state = cleanState(state);
}
function noteSkill(id, correct, kind) {
  if (!getWord(id) || !SKILL_LABELS[kind]) return;
  const entry = state.skills[id] || (state.skills[id] = {}), old = entry[kind];
  const stage = correct ? (old == null ? void 0 : old.last) === today() && old.stage > 0 ? old.stage : Math.min(((old == null ? void 0 : old.stage) || 0) + 1, 4) : 0;
  entry[kind] = { stage, due: afterDays([0, 1, 3, 7, 14][stage]), last: today(), attempts: ((old == null ? void 0 : old.attempts) || 0) + 1, mistakes: ((old == null ? void 0 : old.mistakes) || 0) + (correct ? 0 : 1), updatedAt: Date.now() };
}
const recordBeforeSkills = record;
record = function(id, correct) {
  if (!getWord(id)) return;
  const kinds = skillRecordContext || (location.hash === "#quiz" && quiz ? quiz.mode === "listening" ? ["listen", "spell"] : quiz.mode === "spelling" ? ["spell"] : ["read"] : ["read"]);
  [...new Set(kinds)].forEach((kind) => noteSkill(id, correct, kind));
  recordBeforeSkills(id, correct);
};
function recordInSkills(id, correct, kinds) {
  const old = skillRecordContext;
  skillRecordContext = kinds;
  try {
    record(id, correct);
  } finally {
    skillRecordContext = old;
  }
}
const dueBeforeSkills = dueWords;
dueWords = function() {
  const ids = new Set(dueBeforeSkills().map((w) => w.id));
  for (const [id, kinds] of Object.entries(state.skills)) if (Object.values(kinds).some((p) => p.due <= today())) ids.add(id);
  return allWords().filter((w) => ids.has(w.id));
};
function skillSummary(kind) {
  const values = Object.values(state.skills).map((p) => p[kind]).filter(Boolean);
  return { tested: values.length, due: values.filter((p) => p.due <= today()).length, weak: values.filter((p) => p.stage === 0).length };
}
function skillDashboard() {
  return '<section class="skill-dashboard" aria-labelledby="skill-heading"><div class="section-title"><h2 id="skill-heading">按薄弱项复习</h2></div><p class="practice-label">三项单独安排复习。旧版记录保留，新版从实际答题建立分项记录；听写成绩同时记录听辨和拼写，可在这里分别检验。</p><div class="skill-grid">'.concat(Object.entries(SKILL_LABELS).map(([kind, label]) => {
    const s = skillSummary(kind);
    return '<article class="skill-card"><small>'.concat(kind === "read" ? "英文 → 中文意思" : kind === "listen" ? "听发音 → 中文意思" : "中文意思 → 英文拼写", "</small><h3>").concat(label, "</h3><strong>").concat(s.due, "<span> 词待复习</span></strong><p>已测 ").concat(s.tested, " 词 · 当前薄弱 ").concat(s.weak, ' 词</p><button class="button secondary" data-skill-start="').concat(kind, '">练').concat(label, ' →</button><button class="text-link" data-skill-weak="').concat(kind, '" ').concat(s.weak ? "" : "disabled", ">只练薄弱词</button></article>");
  }).join(""), "</div></section>");
}
function skillQueue(kind, weakOnly) {
  var _a2;
  const words = allWords(), urgent = words.filter((w) => {
    var _a3;
    const p = (_a3 = state.skills[w.id]) == null ? void 0 : _a3[kind];
    return weakOnly ? (p == null ? void 0 : p.stage) === 0 : (p == null ? void 0 : p.due) <= today();
  });
  if (urgent.length) return shuffle(urgent).slice(0, 12);
  if (weakOnly) return [];
  const familiar = /* @__PURE__ */ new Set([...Object.keys(state.words), ...state.favorites, ...(((_a2 = getStory(state.lastStory)) == null ? void 0 : _a2.words) || []).map((w) => w.id)]), candidates = words.filter((w) => {
    var _a3;
    return familiar.has(w.id) && !((_a3 = state.skills[w.id]) == null ? void 0 : _a3[kind]);
  });
  return shuffle(candidates.length ? candidates : words.filter((w) => {
    var _a3;
    return !((_a3 = state.skills[w.id]) == null ? void 0 : _a3[kind]);
  })).slice(0, 12);
}
function skillMeaningOptions(word) {
  const seen = /* @__PURE__ */ new Set([word.meaning]), choices = [word];
  const usefulChars = (text) => (text.match(/[\u3400-\u9fff]/g) || []).filter((char) => !"的地得人事物使与及和性".includes(char)), targetChars = new Set(usefulChars(word.meaning));
  const suitable = (candidate) => candidate.meaning && !seen.has(candidate.meaning) && !usefulChars(candidate.meaning).some((char) => targetChars.has(char));
  for (const candidate of shuffle(allWords())) if (candidate.pos === word.pos && suitable(candidate)) {
    choices.push(candidate);
    seen.add(candidate.meaning);
    if (choices.length === 4) break;
  }
  if (choices.length < 4) {
    for (const candidate of shuffle(allWords())) if (suitable(candidate)) {
      choices.push(candidate);
      seen.add(candidate.meaning);
      if (choices.length === 4) break;
    }
  }
  return shuffle(choices);
}
function skillReviewPage() {
  const s = skillQuiz;
  if (!s) return;
  if (s.finished) {
    main.innerHTML = '<div class="page-heading"><h1>'.concat(SKILL_LABELS[s.kind], '复习完成</h1></div><section class="review-card"><div class="result-number">').concat(s.correct, "<small> / ").concat(s.words.length, "</small></div><p>本轮结果已保存到").concat(SKILL_LABELS[s.kind], '记录，答错的词已安排重练。</p><div class="hero-actions"><button class="button" data-skill-action="retry" ').concat(s.wrong.length ? "" : "hidden", '>重练本轮错词</button><button class="button secondary" data-skill-action="exit">回到复习</button></div></section>');
    return;
  }
  const w = s.words[s.index];
  if (!s.options.length) s.options = skillMeaningOptions(w);
  const audio = s.kind === "listen", spelling = s.kind === "spell";
  main.innerHTML = '<div class="reader-top"><button class="text-link" data-skill-action="exit">← 回到复习</button><span>'.concat(SKILL_LABELS[s.kind], '专项</span></div><section class="review-card skill-quiz"><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><div class="quiz-top"><strong>').concat(audio ? "听发音，选择意思" : spelling ? "看意思，写出英文" : "看英文，选择意思", "</strong><span>").concat(s.index + 1, " / ").concat(s.words.length, "</span></div>").concat(audio ? '<div class="skill-audio"><button class="button" data-skill-action="audio">▷ 听单词 / 停止</button><p class="practice-label">可以重听，提交前不显示拼写。设备英语语音不可用时，请更换支持朗读的浏览器。</p></div>' : '<div class="quiz-cn" lang="'.concat(spelling ? "zh-CN" : "en", '">').concat(esc(spelling ? w.meaning : clozeExpected(w.id)), "</div>")).concat(spelling ? '<form id="skill-spelling-form"><label for="skill-spelling-input">输入英文原形</label><input class="spelling-input" id="skill-spelling-input" autocomplete="off" autocapitalize="off" spellcheck="false" value="'.concat(esc(s.choice), '" ').concat(s.answered ? "disabled" : "", '><button class="button" type="submit" ').concat(s.answered ? "disabled" : "", ">核对拼写</button></form>") : '<div class="answer-grid">'.concat(s.options.map((o, i) => '<button class="answer '.concat(s.answered ? o.id === w.id ? "correct" : o.id === s.choice ? "wrong" : "" : "", '" data-skill-answer="').concat(esc(o.id), '" ').concat(s.answered ? "disabled" : "", "><b>").concat("ABCD"[i], "</b><span>").concat(esc(o.meaning), "</span></button>")).join(""), "</div>")).concat(s.answered ? '<div class="answer-feedback '.concat(s.wasCorrect ? "good" : "bad", '"><strong>').concat(s.wasCorrect ? "回答正确" : "已加入本项复习", "</strong><span>").concat(esc(clozeExpected(w.id)), " · ").concat(esc(w.meaning), "</span>").concat(w.example ? '<span lang="en">'.concat(esc(w.example), "</span>") : "", '</div><button class="button" data-skill-action="next">').concat(s.index + 1 === s.words.length ? "查看结果" : "下一词 →", '</button><button class="text-link" data-word="').concat(esc(w.id), '">查看词卡</button>') : "", "</section>");
  applyPreferences();
}
function submitSkillAnswer(value) {
  const s = skillQuiz;
  if (!s || s.answered) return;
  const w = s.words[s.index], answer2 = normalizeCloze(value);
  if (!answer2) {
    toast("先输入或选择答案。");
    return;
  }
  const correct = s.kind === "spell" ? isClozeCorrect(answer2, w.id) : answer2 === w.id;
  s.choice = value;
  s.answered = true;
  s.wasCorrect = correct;
  if (correct) s.correct++;
  else s.wrong.push(w);
  recordInSkills(w.id, correct, [s.kind]);
  review();
}
const reviewBeforeSkills = review;
review = function() {
  var _a2;
  if (skillQuiz) {
    skillReviewPage();
    return;
  }
  reviewBeforeSkills();
  (_a2 = main.querySelector(".stats-strip")) == null ? void 0 : _a2.insertAdjacentHTML("afterend", skillDashboard());
};
const progressBeforeSkills = progress;
progress = function() {
  var _a2;
  progressBeforeSkills();
  const checks = Object.values(state.listeningChecks);
  (_a2 = main.querySelector(".progress-grid")) == null ? void 0 : _a2.insertAdjacentHTML("afterend", '<section class="progress-card"><h2>听力与分项记录</h2><p>已完成 '.concat(checks.length, " 篇故事理解题；最近各篇成绩合计 ").concat(checks.reduce((n, p) => n + p.correct, 0), " / ").concat(checks.reduce((n, p) => n + p.total, 0), ' 题。看过原文的练习不计入这里。</p><div class="skill-progress">').concat(Object.entries(SKILL_LABELS).map(([kind, label]) => {
    const s = skillSummary(kind);
    return "<span><strong>".concat(label, "</strong> 已测 ").concat(s.tested, " · 待复习 ").concat(s.due, "</span>");
  }).join(""), "</div></section>"));
};
const wordModalBeforeSkills = wordModal;
wordModal = function(id) {
  var _a2;
  wordModalBeforeSkills(id);
  (_a2 = document.querySelector("#word-content .word-meaning")) == null ? void 0 : _a2.insertAdjacentHTML("afterend", '<div class="word-skill-status">'.concat(Object.entries(SKILL_LABELS).map(([kind, label]) => {
    var _a3;
    const p = (_a3 = state.skills[id]) == null ? void 0 : _a3[kind];
    return "<span>".concat(label, "：").concat(!p ? "未测" : p.stage === 0 ? "待重练" : p.due <= today() ? "到期复习" : "下次 " + esc(p.due), "</span>");
  }).join(""), "</div>"));
};
document.addEventListener("click", (event) => {
  const b = event.target.closest("[data-skill-start],[data-skill-weak],[data-skill-action],[data-skill-answer]");
  if (!b) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (b.dataset.skillStart || b.dataset.skillWeak) {
    const kind = b.dataset.skillStart || b.dataset.skillWeak, words = skillQueue(kind, Boolean(b.dataset.skillWeak));
    if (!words.length) {
      toast("这个分项暂时没有待练词。");
      return;
    }
    skillQuiz = { kind, words, index: 0, correct: 0, wrong: [], options: [], answered: false, choice: "", finished: false };
    if (location.hash !== "#review") location.hash = "review";
    else review();
    return;
  }
  if (!skillQuiz) return;
  if (b.dataset.skillAnswer) {
    submitSkillAnswer(b.dataset.skillAnswer);
    return;
  }
  const action = b.dataset.skillAction;
  if (action === "exit") {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    skillQuiz = null;
    review();
  } else if (action === "audio") speak(clozeExpected(skillQuiz.words[skillQuiz.index].id));
  else if (action === "next") {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    skillQuiz.index++;
    skillQuiz.finished = skillQuiz.index >= skillQuiz.words.length;
    skillQuiz.options = [];
    skillQuiz.answered = false;
    skillQuiz.choice = "";
    review();
  } else if (action === "retry") {
    skillQuiz = { kind: skillQuiz.kind, words: shuffle(skillQuiz.wrong), index: 0, correct: 0, wrong: [], options: [], answered: false, choice: "", finished: false };
    review();
  }
}, true);
document.addEventListener("submit", (event) => {
  if (event.target.id !== "skill-spelling-form") return;
  event.preventDefault();
  event.stopImmediatePropagation();
  submitSkillAnswer(document.getElementById("skill-spelling-input").value);
}, true);
window.addEventListener("hashchange", () => {
  if (location.hash !== "#review") skillQuiz = null;
});
;
let clozeView = "read", clozeSession = null;
function storySlots(story) {
  if (!story || !Array.isArray(story.cn)) return [];
  return [].concat(...story.cn.map((paragraph) => wordsceneMatches(paragraph, /\[\[([^|\]]+)\|([^\]]+)\]\]/g).map((match) => ({ id: match[1], meaning: match[2] }))));
}
function ensureCloze(story) {
  if (!clozeSession || clozeSession.id !== story.id) {
    const slots = storySlots(story);
    clozeSession = { id: story.id, slots, answers: slots.map(() => ""), results: null, checked: false, revealed: false, hints: true, active: slots.map((_, i) => i) };
    clozeView = "read";
  }
  return clozeSession;
}
function normalizeCloze(value) {
  return String(value).trim().toLowerCase().replace(/[‘’]/g, "'").replace(/[‐‑–—]/g, "-").replace(/\s+/g, " ");
}
const clozeSpellingGroups = [["color", "colour"], ["colored", "coloured"], ["favorite", "favourite"], ["behavior", "behaviour"], ["neighbor", "neighbour"], ["neighboring", "neighbouring"], ["neighborhood", "neighbourhood"], ["honor", "honour"], ["honorable", "honourable"], ["labor", "labour"], ["center", "centre"], ["theater", "theatre"], ["gray", "grey"], ["organize", "organise"], ["realize", "realise"], ["recognize", "recognise"], ["analyze", "analyse"], ["defense", "defence"], ["offense", "offence"], ["catalog", "catalogue"], ["dialog", "dialogue"], ["jewelry", "jewellery"], ["aluminum", "aluminium"], ["analog", "analogue"]];
function clozeExpected(id) {
  return id === "reservior" ? "reservoir" : id === "uptodate" ? "up-to-date" : id;
}
function isClozeCorrect(value, id) {
  const answer2 = normalizeCloze(value);
  if (id === "reservior" || id === "uptodate") return answer2 === clozeExpected(id);
  return answer2 === id || clozeSpellingGroups.some((group) => group.includes(id) && group.includes(answer2));
}
function clozeParagraph(paragraph, exercise) {
  return paragraph.split(/(\[\[.*?\]\])/g).map((part) => {
    var _a2;
    if (!part.startsWith("[[")) return esc(part);
    const [id, meaning] = part.slice(2, -2).split("|");
    if (!exercise) return '<span class="story-term"><button class="story-word" data-word="'.concat(esc(id), '" lang="en">').concat(esc(clozeExpected(id)), '</button><span class="story-gloss">（').concat(esc(meaning), "）</span></span>");
    const index = clozeParagraph.index++, session = clozeSession, result = (_a2 = session.results) == null ? void 0 : _a2[index];
    const locked = session.checked || !session.active.includes(index);
    const hint = session.hints ? id.charAt(0) + "______" : "________";
    const feedback = result ? result === "correct" ? "✓" : result === "wrong" ? "→ ".concat(esc(clozeExpected(id)), "（").concat(esc(meaning), "）") : "".concat(esc(clozeExpected(id)), "（").concat(esc(meaning), "）") : "";
    return '<span class="cloze-slot '.concat(result || "", '"><label for="cloze-').concat(index, '" class="cloze-number">').concat(index + 1, '.</label><input id="cloze-').concat(index, '" class="cloze-input" data-cloze-index="').concat(index, '" aria-label="第 ').concat(index + 1, " 空").concat(session.hints ? "，首字母 " + esc(id.charAt(0)) : "", '" ').concat(result === "wrong" ? 'aria-invalid="true"' : "", ' style="--blank-width:').concat(Math.min(15, Math.max(8, id.length + 2)), 'ch" value="').concat(esc(session.answers[index]), '" placeholder="').concat(esc(hint), '" maxlength="80" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="next" ').concat(locked ? "disabled" : "", '><span class="cloze-feedback" ').concat(feedback ? "" : "hidden", ">").concat(feedback, "</span></span>");
  }).join("");
}
function updateClozeCounter() {
  const counter = document.getElementById("cloze-counter");
  if (counter) counter.textContent = "已填 ".concat(clozeSession.active.filter((i) => normalizeCloze(clozeSession.answers[i])).length, " / ").concat(clozeSession.active.length, " 空");
}
function clozeResultSummary() {
  const session = clozeSession;
  if (!session.checked) return "";
  if (session.revealed) return '<div class="cloze-summary" role="status"><strong>参考答案已展开</strong><p>这次查看答案不计入已学词汇。准备好了，可以重新填一遍。</p></div>';
  const correct = session.results.filter((result) => result === "correct").length;
  return '<div class="cloze-summary" role="status"><strong>答对 '.concat(correct, " / ").concat(session.slots.length, " 空</strong><p>").concat(correct === session.slots.length ? "这一段剧情里的词，你都想起来了。已安排后续复习。" : "错词已经加入复习。先看看词在这句话里的意思，再重练错词。", "</p></div>");
}
const priorStoryReader = reader;
function storyStudySteps(view) {
  return '<div class="cloze-steps" aria-label="学习模式">'.concat([["read", "01", "① 故事阅读"], ["exercise", "02", "② 剧情填空"], ["listen", "03", "③ 故事听力"]].map(([key, number, label]) => '<button data-cloze-view="'.concat(key, '" aria-pressed="').concat(view === key, '" class="').concat(view === key ? "active" : "", '"><small>STEP ').concat(number, "</small>").concat(label, "</button>")).join(""), "</div>");
}
reader = function(id) {
  const story = getStory(id);
  if (!story || !storySlots(story).length) {
    priorStoryReader(id);
    return;
  }
  const session = ensureCloze(story), exercise = clozeView === "exercise";
  if (clozeView === "listen") {
    listeningReader(story);
    return;
  }
  state.lastStory = id;
  save();
  const sequence = STORIES.filter((s) => s.category === story.category), at = sequence.indexOf(story), previous = sequence[at - 1], next = sequence[at + 1];
  clozeParagraph.index = 0;
  const paragraphs = story.cn.map((p) => '<p class="webnovel-paragraph">'.concat(clozeParagraph(p, exercise), "</p>")).join("");
  main.innerHTML = '<div class="reader-top"><a class="back-link" href="#library">← 回到故事书架</a><div class="reader-controls"><button class="button secondary compact" data-action="bookmark" data-id="'.concat(esc(id), '">').concat(state.bookmarks.includes(id) ? "★ 已加书签" : "☆ 加书签", '</button><button class="button secondary compact" data-action="focus">').concat(document.body.classList.contains("focus-mode") ? "退出专注" : "专注阅读", "</button></div></div>").concat(storyStudySteps(clozeView)).concat(readerTools(), '<article class="reader-paper webnovel-paper"><div class="eyebrow">').concat(esc(story.category), " · CHAPTER ").concat(String(story.number).padStart(2, "0"), "</div><h1>").concat(esc(story.title), '</h1><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><div class="cloze-step-heading"><h2>').concat(exercise ? "第二步：剧情挖空主动回填" : "第一步：故事情境沉浸阅读", "</h2><p>").concat(exercise ? "沿着剧情回填英文原形，不区分大小写，常见英美拼写均可。先自己回忆，再提交核对。" : "粗体是本章词汇。先看人物做了什么，再把英文和这段画面连起来。点击英文可以查看词卡。", "</p></div>").concat(exercise ? '<div class="cloze-toolbar"><label><input id="cloze-hints" type="checkbox" '.concat(session.hints ? "checked" : "", '> 首字母提示</label><span id="cloze-counter" role="status" aria-live="polite"></span></div>').concat(clozeResultSummary(), '<form id="cloze-form" novalidate>').concat(session.slots.some((slot) => slot.id === "reservior") ? '<p class="practice-label">本篇提到原资料中的错拼。对应空格请填写标准拼写 reservoir，不需要记住错误形式。</p>' : "", '<div class="webnovel-text">').concat(paragraphs, '</div><div class="cloze-actions">').concat(session.checked ? '<button type="button" class="button" data-cloze-action="restart">重新填一遍</button>'.concat(!session.revealed && session.results.includes("wrong") ? '<button type="button" class="button secondary" data-cloze-action="retry">只重练错词</button>' : "") : '<button type="submit" class="button">提交核对 →</button><button type="button" class="button secondary" data-cloze-action="reveal">查看参考答案</button>', '<button type="button" class="text-link" data-cloze-view="read">回到故事，找找线索</button></div><p class="practice-label">已提交的结果会保存；刷新页面后，本轮未提交的填写需要重填。</p></form>') : '<div class="webnovel-text">'.concat(paragraphs, '</div><div class="cloze-actions"><button class="button" data-cloze-view="exercise">读完了，去填空 →</button><button class="text-link" data-action="complete-story" data-story="').concat(esc(id), '">').concat(state.completed.includes(id) ? "✓ 已读" : "标记读完", '</button></div><details class="story-original"><summary>展开英文参考段落</summary><div>').concat(story.en.map((p) => '<p class="translation english-second" lang="en">'.concat(formatEnglish(p), "</p>")).join(""), '</div><button class="button secondary compact" data-action="read-aloud">▷ 朗读英文 / 停止</button></details>'), '<div class="chapter-nav">').concat(previous ? '<a href="#story/'.concat(previous.id, '">← ').concat(esc(previous.title), "</a>") : "<span></span>").concat(next ? '<a href="#story/'.concat(next.id, '">').concat(esc(next.title), " →</a>") : '<a href="#library">回到书架 →</a>', "</div></article>");
  updateClozeCounter();
  applyPreferences();
};
document.addEventListener("input", (event) => {
  if (!event.target.matches(".cloze-input") || !clozeSession || clozeSession.checked) return;
  clozeSession.answers[Number(event.target.dataset.clozeIndex)] = event.target.value;
  updateClozeCounter();
});
document.addEventListener("change", (event) => {
  if (event.target.id !== "cloze-hints") return;
  clozeSession.hints = event.target.checked;
  reader(clozeSession.id);
});
document.addEventListener("keydown", (event) => {
  var _a2;
  if (event.key !== "Enter" || !event.target.matches(".cloze-input")) return;
  event.preventDefault();
  const current = Number(event.target.dataset.clozeIndex), next = clozeSession.active.find((index) => index > current);
  if (next !== void 0) document.getElementById("cloze-" + next).focus();
  else (_a2 = document.querySelector('#cloze-form button[type="submit"]')) == null ? void 0 : _a2.click();
});
document.addEventListener("submit", (event) => {
  var _a2;
  if (event.target.id !== "cloze-form") return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const session = clozeSession;
  if (!session || session.checked) return;
  const empty = session.active.find((i) => !normalizeCloze(session.answers[i]));
  if (empty !== void 0) {
    toast("第 ".concat(empty + 1, " 空还没填写。可以先猜一猜，或查看参考答案。"));
    document.getElementById("cloze-" + empty).focus();
    return;
  }
  const results = session.results ? session.results.slice() : session.slots.map(() => null);
  for (const index of session.active) {
    const correct = isClozeCorrect(session.answers[index], session.slots[index].id);
    results[index] = correct ? "correct" : "wrong";
    recordInSkills(session.slots[index].id, correct, ["spell"]);
  }
  session.results = results;
  session.checked = true;
  session.revealed = false;
  reader(session.id);
  (_a2 = document.querySelector(".cloze-summary")) == null ? void 0 : _a2.scrollIntoView({ block: "center" });
}, true);
document.addEventListener("click", (event) => {
  var _a2, _b;
  const button = event.target.closest("[data-cloze-view],[data-cloze-action]");
  if (!button) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const session = clozeSession;
  if (button.dataset.clozeView) {
    clozeView = button.dataset.clozeView;
    reader(session.id);
    (_a2 = document.querySelector(".cloze-steps")) == null ? void 0 : _a2.scrollIntoView({ block: "start" });
    return;
  }
  if (button.dataset.clozeAction === "reveal") {
    session.revealed = true;
    session.checked = true;
    session.results = session.slots.map(() => "revealed");
  } else if (button.dataset.clozeAction === "restart") {
    session.answers = session.slots.map(() => "");
    session.active = session.slots.map((_, i) => i);
    session.results = null;
    session.checked = false;
    session.revealed = false;
  } else if (button.dataset.clozeAction === "retry") {
    session.active = session.results.map((value, index) => value === "wrong" ? index : -1).filter((i) => i >= 0);
    session.active.forEach((index) => {
      session.answers[index] = "";
      session.results[index] = null;
    });
    session.checked = false;
  }
  reader(session.id);
  (_b = document.querySelector(".cloze-step-heading")) == null ? void 0 : _b.scrollIntoView({ block: "start" });
}, true);
const previousClozeLibrary = library;
library = function() {
  previousClozeLibrary();
  if (!main) return;
  const hero = main.querySelector(".hero");
  if (!hero) return;
  const title = hero.querySelector("h1"), copy = hero.querySelector("p"), shelfCopy = main.querySelector(".section-title p"), note = main.querySelector(".reading-note div");
  if (title) title.innerHTML = "跟着剧情走，<br>把单词<em>填回来。</em>";
  if (copy) copy.innerHTML = "修仙篇，看人物如何争取资源、承担代价。<br>悬疑篇，跟同伴进入旧地，沿着线索追出真相。";
  if (shelfCopy) shelfCopy.textContent = "故事里读词 · 同剧情填空 · 听故事练听力";
  if (note) note.innerHTML = "<strong>先读故事，再关掉答案，把英文填回来。</strong><br>粗体词和中文释义一起出现；填空时保留剧情，首字母提示可以关闭。";
};
const clozeAbout = document.getElementById("about-button");
if (clozeAbout) {
  clozeAbout.replaceWith(clozeAbout.cloneNode(true));
  document.getElementById("about-button").addEventListener("click", () => utility("故事与学习说明", "<p>".concat(STORIES.length, " 篇原创修仙与悬疑故事，以中文剧情中的英文词和语境义帮助记忆。读完后，同一段剧情变成填空练习。</p><p>本次收录 ").concat(COVERAGE.total, ' 个内置词，每个词都有故事语境。查看答案和阅读不会自动计为学会；提交填空、词卡确认和其他测验会安排复习。</p><p>词表来源与许可见 <a href="SOURCES.md" target="_blank" rel="noopener">SOURCES.md ↗</a>。学习记录保存在当前浏览器，请定期导出备份。</p>')));
}
;
let listeningSession = null, listeningGeneration = 0, listeningTimer = null, listeningUtterance = null;
function listeningPlain(text) {
  return text.replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g, (_, id, surface) => id === "reservior" ? "reservoir" : surface || id);
}
function listeningChunks(text) {
  const sentences = storySentences(text), chunks = [];
  sentences.forEach((sentence) => {
    const words = sentence.text.trim().split(/\s+/);
    for (let at = 0; at < words.length; at += 32) chunks.push(words.slice(at, at + 32).join(" "));
  });
  return chunks.filter(Boolean);
}
function ensureListening(story) {
  if (!listeningSession || listeningSession.id !== story.id) {
    listeningStop();
    listeningSession = { id: story.id, paragraph: 0, mode: "blind", transcript: false, loop: false, continuous: true, accent: "en-GB", playing: false, paused: false, chunk: 0, status: "准备好了，先不看原文听一遍。", drafts: story.en.map((text) => {
      const slots = wordsceneMatches(text, /\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g).map((match) => ({ id: match[1], answer: match[1] === "reservior" ? "reservoir" : match[2] || match[1] }));
      return { slots, answers: slots.map(() => ""), results: null, assisted: false };
    }) };
  }
  return listeningSession;
}
function listeningStop(message) {
  listeningGeneration++;
  clearTimeout(listeningTimer);
  listeningUtterance = null;
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  if (listeningSession) {
    const wasPlaying = listeningSession.playing || listeningSession.paused;
    listeningSession.playing = false;
    listeningSession.paused = false;
    if (message) listeningSession.status = message;
    else if (wasPlaying) listeningSession.status = "播放已停止，点播放可重新听本段。";
  }
  updateListeningPlayer();
}
function listeningVoices() {
  if (!("speechSynthesis" in window) || typeof speechSynthesis.getVoices !== "function") return [];
  return speechSynthesis.getVoices().filter((voice) => /^en[-_]/i.test(voice.lang));
}
function updateListeningPlayer() {
  const session = listeningSession, status = document.getElementById("listening-status");
  if (!session || !status) return;
  status.textContent = session.status;
  const play = document.querySelector('[data-listening="play"]'), pause = document.querySelector('[data-listening="pause"]');
  if (play) play.textContent = session.paused ? "▷ 继续本句" : session.playing ? "↺ 从本段重听" : "▷ 播放英文";
  if (pause) pause.disabled = !session.playing;
  document.querySelectorAll("[data-listening-paragraph]").forEach((button) => {
    const active = Number(button.dataset.listeningParagraph) === session.paragraph;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const progress2 = document.getElementById("listening-progress");
  if (progress2) progress2.textContent = "第 ".concat(session.paragraph + 1, " / ").concat(getStory(session.id).en.length, " 段");
}
function listeningPlay(resume) {
  const session = listeningSession;
  if (!session) return;
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    session.status = "当前浏览器不支持英语朗读。请用支持朗读的浏览器（如桌面 Edge）打开，或先查看英文原文。";
    updateListeningPlayer();
    return;
  }
  const voices = listeningVoices();
  if (speechSynthesis.getVoices().length && !voices.length) {
    session.status = "设备上没有可用的英语语音，请安装系统英语语音后重试。";
    updateListeningPlayer();
    return;
  }
  const chunk = resume ? session.chunk : 0;
  listeningStop();
  session.chunk = chunk;
  session.playing = true;
  session.paused = false;
  const generation = listeningGeneration, voice = voices.find((v) => v.lang.replace("_", "-").toLowerCase() === session.accent.toLowerCase()) || voices[0];
  function next() {
    if (generation !== listeningGeneration || !session.playing || clozeView !== "listen") return;
    const story = getStory(session.id), chunks = listeningPlaybackChunks(session, story);
    if (session.chunk >= chunks.length) {
      session.chunk = 0;
      if (session.loop) {
        session.status = "本段已听完，再听一遍。";
      } else if (session.scope !== "sentence" && session.continuous && session.paragraph + 1 < story.en.length) {
        session.paragraph++;
        session.sentenceIndex = 0;
        session.transcript = false;
        reader(session.id);
      } else {
        session.playing = false;
        session.status = "播放完成。可以复述情节，或切到重点词听写。";
        updateListeningPlayer();
        return;
      }
    }
    const text = listeningPlaybackChunks(session, story)[session.chunk];
    const utterance = new SpeechSynthesisUtterance(text);
    listeningUtterance = utterance;
    utterance.lang = voice ? voice.lang : session.accent;
    if (voice) utterance.voice = voice;
    utterance.rate = state.preferences.rate;
    session.status = session.scope === "sentence" ? "正在听第 ".concat(session.paragraph + 1, " 段 · 第 ").concat(session.sentenceIndex + 1, " 句") : "正在听第 ".concat(session.paragraph + 1, " 段 · 第 ").concat(session.chunk + 1, " 小节");
    updateListeningPlayer();
    clearTimeout(listeningTimer);
    listeningTimer = setTimeout(() => {
      if (generation === listeningGeneration) listeningStop("语音没有启动。请检查设备英语语音，或换支持朗读的浏览器重试。");
    }, 12e3);
    utterance.onstart = () => {
      if (generation === listeningGeneration) clearTimeout(listeningTimer);
    };
    utterance.onend = () => {
      if (generation !== listeningGeneration) return;
      clearTimeout(listeningTimer);
      session.chunk++;
      next();
    };
    utterance.onerror = (event) => {
      if (generation !== listeningGeneration) return;
      listeningStop(["canceled", "interrupted"].includes(event.error) ? "播放已停止。" : "英语语音暂时不可用。请检查系统语音与网络后重试，或换支持朗读的浏览器。");
    };
    try {
      speechSynthesis.speak(utterance);
    } catch (_) {
      listeningStop("英语语音未能启动，请换支持朗读的浏览器重试。");
    }
  }
  next();
}
function listeningReader(story) {
  const session = ensureListening(story), draft = session.drafts[session.paragraph], supported = "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined";
  state.lastStory = story.id;
  save();
  main.innerHTML = '<div class="reader-top"><a class="back-link" href="#library">← 回到故事书架</a><div class="reader-controls"><button class="button secondary compact" data-action="bookmark" data-id="'.concat(esc(story.id), '">').concat(state.bookmarks.includes(story.id) ? "★ 已加书签" : "☆ 加书签", '</button><button class="button secondary compact" data-action="focus">').concat(document.body.classList.contains("focus-mode") ? "退出专注" : "专注阅读", "</button></div></div>").concat(storyStudySteps("listen")).concat(readerTools(), '<article class="reader-paper webnovel-paper listening-paper"><div class="eyebrow">STORY LISTENING · ').concat(esc(story.category), "</div><h1>").concat(esc(story.title), '</h1><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><div class="cloze-step-heading"><h2>第三步：听故事，抓住英文</h2><p>先盲听抓人物、行动和转折，再逐段听写重点词。播放的是英文参考段落，与中文网文扩写并非逐句对应。</p></div><div class="listening-modes"><button data-listening-mode="blind" aria-pressed="').concat(session.mode === "blind", '" class="').concat(session.mode === "blind" ? "active" : "", '">先听故事</button><button data-listening-mode="dictation" aria-pressed="').concat(session.mode === "dictation", '" class="').concat(session.mode === "dictation" ? "active" : "", '">重点词听写</button></div><section class="listening-player" aria-label="故事播放器"><div class="listening-player-top"><strong id="listening-progress">第 ').concat(session.paragraph + 1, " / ").concat(story.en.length, ' 段</strong><span>设备英语语音</span></div><div class="listening-paragraphs" aria-label="选择段落">').concat(story.en.map((_, i) => '<button data-listening-paragraph="'.concat(i, '" aria-label="播放段落选择：第 ').concat(i + 1, ' 段" aria-pressed="').concat(session.paragraph === i, '" class="').concat(session.paragraph === i ? "active" : "", '">').concat(String(i + 1).padStart(2, "0"), "</button>")).join(""), '</div><div class="listening-buttons"><button class="button" data-listening="play">▷ 播放英文</button><button class="button secondary" data-listening="pause" disabled>暂停</button><button class="button secondary" data-listening="stop">停止</button></div><div class="listening-options"><label><input id="listening-continuous" type="checkbox" ').concat(session.continuous ? "checked" : "", '> 连播后续段落</label><label><input id="listening-loop" type="checkbox" ').concat(session.loop ? "checked" : "", '> 循环本段</label><label for="listening-accent">口音<select id="listening-accent"><option value="en-GB" ').concat(session.accent === "en-GB" ? "selected" : "", '>英式优先</option><option value="en-US" ').concat(session.accent === "en-US" ? "selected" : "", '>美式优先</option></select></label></div><p id="listening-status" class="listening-status" role="status" aria-live="polite">').concat(esc(supported ? session.status : "当前浏览器不支持英语朗读。请用支持朗读的浏览器（如桌面 Edge）打开。"), '</p><p class="practice-label">语速可在上方调整。音色取决于设备已安装的英语语音；部分语音需要联网。暂停后继续会从当前句开头重听。</p></section>').concat(session.mode === "blind" ? '<div class="listening-prompt"><strong>先听，不急着看答案。</strong><p>谁在做什么？遇到了什么阻碍？事情怎样发生转折？听完后用一两句话复述，再展开原文核对。</p></div>' : listeningDictation(draft), '<div class="listening-transcript-actions"><button class="button secondary" data-listening="transcript" aria-expanded="').concat(session.transcript, '">').concat(session.transcript ? "隐藏英文原文" : "显示英文原文与词义", "</button>").concat(session.transcript ? '<p class="practice-label">本段已查看原文；这一轮听写核对不计入词汇掌握。重新听写可开启新一轮。</p>' : "", "</div>").concat(session.transcript ? '<section class="listening-transcript"><h3>第 '.concat(session.paragraph + 1, ' 段 · 原文核对</h3><p class="translation" lang="en">').concat(formatEnglish(story.en[session.paragraph]), '</p><div class="listening-vocabulary">').concat(draft.slots.map((slot) => {
    var _a2;
    return '<p><button class="story-word" data-word="'.concat(esc(slot.id), '" lang="en">').concat(esc(slot.answer), "</button><span>").concat(esc(((_a2 = getWord(slot.id)) == null ? void 0 : _a2.meaning) || ""), "</span></p>");
  }).join(""), "</div></section>") : "", '<div class="listening-next"><button class="button secondary" data-listening="previous" ').concat(session.paragraph === 0 ? "disabled" : "", '>← 上一段</button><button class="button secondary" data-listening="next" ').concat(session.paragraph === story.en.length - 1 ? "disabled" : "", ">下一段 →</button></div></article>");
  applyPreferences();
  updateListeningPlayer();
}
function listeningDictation(draft) {
  if (!draft.slots.length) return '<p class="listening-prompt">这一段没有标记词，可先盲听并复述情节。</p>';
  let index = 0;
  const story = getStory(listeningSession.id), text = story.en[listeningSession.paragraph].split(/(\[\[.*?\]\])/g).map((part) => {
    var _a2;
    if (!part.startsWith("[[")) return esc(part);
    const i = index++, result = (_a2 = draft.results) == null ? void 0 : _a2[i];
    return '<span class="listening-slot '.concat(result || "", '"><label for="listening-answer-').concat(i, '">').concat(i + 1, '.</label><input id="listening-answer-').concat(i, '" data-listening-answer="').concat(i, '" aria-label="听写第 ').concat(i + 1, ' 空" aria-invalid="').concat(result === "wrong", '" value="').concat(esc(draft.answers[i]), '" placeholder="________" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="80" enterkeyhint="next" ').concat(draft.results ? "disabled" : "", ">").concat(result ? '<span class="listening-feedback">'.concat(result === "correct" ? "✓" : "→ " + esc(draft.slots[i].answer), "</span>") : "", "</span>");
  }).join("");
  return '<section class="listening-dictation"><h3>听清这段剧情里的 '.concat(draft.slots.length, ' 个词</h3><p class="practice-label">按录音中的实际拼写回填，包括过去式或复数；不区分大小写。先听再答，原文默认隐藏。</p>').concat(draft.results ? '<div class="cloze-summary" role="status"><strong>答对 '.concat(draft.results.filter((result) => result === "correct").length, " / ").concat(draft.slots.length, " 空</strong><p>").concat(draft.assisted ? "这一轮查看过原文，结果仅供核对，不计入词汇掌握。" : "已保存本轮结果，错词已加入复习。", "</p></div>") : "", '<form id="listening-form" novalidate><p class="listening-cloze-text" lang="en">').concat(text, '</p><div class="listening-form-actions">').concat(draft.results ? '<button type="button" class="button" data-listening="restart">重新听写本段</button>' : '<button type="submit" class="button">核对听写 →</button>', '<button type="button" class="text-link" data-listening="restart">清空，重新听写</button></div></form></section>');
}
const readerBeforeListening = reader;
reader = function(id) {
  if (listeningSession && (listeningSession.id !== id || clozeView !== "listen")) listeningStop();
  readerBeforeListening(id);
};
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-listening],[data-listening-mode],[data-listening-paragraph]");
  if (!button || !listeningSession) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const session = listeningSession, draft = session.drafts[session.paragraph], action = button.dataset.listening;
  if (button.dataset.listeningMode) {
    listeningStop();
    session.mode = button.dataset.listeningMode;
    session.continuous = ["blind", "questions"].includes(session.mode);
    session.loop = false;
    session.chunk = 0;
    reader(session.id);
    return;
  }
  if (button.dataset.listeningParagraph !== void 0 || action === "previous" || action === "next") {
    listeningStop();
    session.chunk = 0;
    session.sentenceIndex = 0;
    session.transcript = false;
    session.paragraph = button.dataset.listeningParagraph !== void 0 ? Number(button.dataset.listeningParagraph) : session.paragraph + (action === "next" ? 1 : -1);
    session.paragraph = Math.max(0, Math.min(session.drafts.length - 1, session.paragraph));
    session.status = "段落已切换，点播放开始。";
    reader(session.id);
    return;
  }
  if (action === "play") listeningPlay(session.paused);
  else if (action === "pause") {
    listeningStop("已暂停。继续时从当前句开头重听。");
    session.paused = true;
    updateListeningPlayer();
  } else if (action === "stop") {
    listeningStop("播放已停止。");
    session.chunk = 0;
  } else if (action === "transcript") {
    session.transcript = !session.transcript;
    if (session.transcript) {
      draft.assisted = true;
      if (session.comprehension) session.comprehension.assisted = true;
      if (session.precisionDrafts) session.precisionDrafts[session.paragraph].forEach((sentence) => sentence.assisted = true);
    }
    reader(session.id);
  } else if (action === "restart") {
    listeningStop();
    draft.answers = draft.slots.map(() => "");
    draft.results = null;
    draft.assisted = false;
    session.transcript = false;
    session.chunk = 0;
    session.status = "新一轮听写已开始。";
    reader(session.id);
  }
}, true);
document.addEventListener("change", (event) => {
  if (!listeningSession || clozeView !== "listen") return;
  const id = event.target.id;
  if (id === "listening-loop") listeningSession.loop = event.target.checked;
  else if (id === "listening-continuous") listeningSession.continuous = event.target.checked;
  else if (id === "listening-accent") {
    listeningStop("口音偏好已更改，点播放重听。");
    listeningSession.accent = event.target.value;
    listeningSession.chunk = 0;
  } else if (id === "speech-rate") {
    listeningStop("语速已更改，点播放重听。");
    listeningSession.chunk = 0;
  }
});
document.addEventListener("input", (event) => {
  if (event.target.dataset.listeningAnswer === void 0 || !listeningSession) return;
  const draft = listeningSession.drafts[listeningSession.paragraph];
  if (!draft.results) draft.answers[Number(event.target.dataset.listeningAnswer)] = event.target.value;
});
document.addEventListener("keydown", (event) => {
  var _a2;
  if (event.key !== "Enter" || event.target.dataset.listeningAnswer === void 0) return;
  event.preventDefault();
  const index = Number(event.target.dataset.listeningAnswer), next = document.getElementById("listening-answer-" + (index + 1));
  if (next) next.focus();
  else (_a2 = document.querySelector('#listening-form button[type="submit"]')) == null ? void 0 : _a2.click();
});
document.addEventListener("submit", (event) => {
  var _a2;
  if (event.target.id !== "listening-form") return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const session = listeningSession, draft = session.drafts[session.paragraph];
  if (draft.results) return;
  const empty = draft.answers.findIndex((value) => !normalizeCloze(value));
  if (empty >= 0) {
    toast("第 ".concat(empty + 1, " 空还没填写。先重听，或展开原文核对。"));
    document.getElementById("listening-answer-" + empty).focus();
    return;
  }
  draft.results = draft.slots.map((slot, i) => isClozeCorrect(draft.answers[i], slot.answer) ? "correct" : "wrong");
  if (!draft.assisted) {
    const ids = [...new Set(draft.slots.map((slot) => slot.id))];
    ids.forEach((id) => recordInSkills(id, draft.slots.every((slot, i) => slot.id !== id || draft.results[i] === "correct"), ["listen", "spell"]));
  }
  if (session.comprehension) session.comprehension.assisted = true;
  if (session.precisionDrafts) session.precisionDrafts[session.paragraph].forEach((sentence) => sentence.assisted = true);
  reader(session.id);
  (_a2 = document.querySelector(".cloze-summary")) == null ? void 0 : _a2.scrollIntoView({ block: "center" });
}, true);
window.addEventListener("hashchange", () => listeningStop());
window.addEventListener("pagehide", () => listeningStop());
document.addEventListener("visibilitychange", () => {
  if (document.hidden && (listeningSession == null ? void 0 : listeningSession.playing)) listeningStop("已停止后台播放。回到页面后可重新播放。");
});
if ("speechSynthesis" in window && typeof speechSynthesis.addEventListener === "function") speechSynthesis.addEventListener("voiceschanged", updateListeningPlayer);
;
let LISTENING_QUESTION_INDEX = /* @__PURE__ */ new Map();
function buildListeningQuestionIndex() {
  LISTENING_QUESTION_INDEX = new Map((typeof LISTENING_QUESTIONS !== "undefined" && LISTENING_QUESTIONS || []).map((item) => [item.id, item.questions]));
}
buildListeningQuestionIndex();
function storySentences(text) {
  const result = [], boundaries = wordsceneMatches(text, /[.!?]+["'”’)]*(?:\s+|$)/g);
  let start = 0;
  for (const match of boundaries) {
    const end = match.index + match[0].length, prefix = text.slice(start, match.index + 1).trim();
    if (/\b(?:Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St|vs|e\.g|i\.e)\.$/i.test(prefix) || /(?:^|\s)[A-Z]\.$/.test(prefix)) continue;
    if (/\b(?:etc|p\.m|a\.m)\.$/i.test(prefix) && text.slice(end) && !/[A-Z]/.test(text.charAt(end))) continue;
    const leading = text.slice(start, end).search(/\S/);
    if (leading >= 0) result.push({ text: text.slice(start + leading, end).trim(), start: start + leading, end: end - text.slice(start, end).match(/\s*$/)[0].length });
    start = end;
  }
  if (text.slice(start).trim()) {
    const leading = text.slice(start).search(/\S/);
    result.push({ text: text.slice(start + leading).trim(), start: start + leading, end: text.replace(/\s+$/, "").length });
  }
  return result;
}
function ensureListeningPractice(story) {
  const s = ensureListening(story);
  if (!s.sentences) {
    s.sentences = story.en.map((p) => storySentences(listeningPlain(p)));
    s.sentenceIndex = 0;
    s.precisionDrafts = s.sentences.map((sentences) => sentences.map(() => ({ text: "", assisted: false, revealed: false, result: null, marked: [] })));
  }
  if (!s.comprehension) {
    const questions = LISTENING_QUESTION_INDEX.get(story.id) || [];
    s.comprehension = { choices: questions.map(() => null), orders: questions.map((q) => shuffle(q.options.map((_, i) => i))), checked: false, assisted: false };
  }
  s.scope = s.mode === "precision" ? "sentence" : "paragraph";
  s.sentenceIndex = Math.max(0, Math.min(s.sentenceIndex, s.sentences[s.paragraph].length - 1));
  return s;
}
function listeningPlaybackChunks(session, story) {
  const text = listeningPlain(story.en[session.paragraph]);
  return listeningChunks(session.scope === "sentence" ? storySentences(text)[session.sentenceIndex].text : text);
}
function sentenceWordSlots(story, paragraph, sentence) {
  let plain = "", slots = [];
  story.en[paragraph].split(/(\[\[.*?\]\])/g).forEach((part) => {
    if (!part.startsWith("[[")) {
      plain += part;
      return;
    }
    const [id, surface] = part.slice(2, -2).split("|"), answer2 = id === "reservior" ? "reservoir" : surface || id, start = plain.length;
    plain += answer2;
    slots.push({ id, answer: answer2, start, end: plain.length });
  });
  return slots.filter((slot) => slot.start >= sentence.start && slot.end <= sentence.end).map((slot) => __spreadProps(__spreadValues({}, slot), { start: slot.start - sentence.start, end: slot.end - sentence.start }));
}
function listeningTokens(text) {
  const normalized = String(text).toLowerCase().replace(/[‘’]/g, "'").replace(/[‐‑–—]/g, "-");
  return wordsceneMatches(normalized, /[a-z0-9]+(?:['-][a-z0-9]+)*/g).map((match) => ({ text: match[0], start: match.index, end: match.index + match[0].length }));
}
function canonicalListeningToken(token) {
  const group = clozeSpellingGroups.find((group2) => group2.includes(token));
  return group ? group[0] : token;
}
function compareListeningSentence(expected, answer2) {
  const source = listeningTokens(expected), typed = listeningTokens(answer2), rows = source.length + 1, cols = typed.length + 1, dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i2 = 0; i2 < rows; i2++) dp[i2][0] = i2;
  for (let j2 = 0; j2 < cols; j2++) dp[0][j2] = j2;
  for (let i2 = 1; i2 < rows; i2++) for (let j2 = 1; j2 < cols; j2++) {
    const same = canonicalListeningToken(source[i2 - 1].text) === canonicalListeningToken(typed[j2 - 1].text);
    dp[i2][j2] = Math.min(dp[i2 - 1][j2 - 1] + (same ? 0 : 1), dp[i2 - 1][j2] + 1, dp[i2][j2 - 1] + 1);
  }
  const operations = [];
  let i = source.length, j = typed.length;
  while (i || j) {
    const same = i && j && canonicalListeningToken(source[i - 1].text) === canonicalListeningToken(typed[j - 1].text);
    if (i && j && dp[i][j] === dp[i - 1][j - 1] + (same ? 0 : 1)) {
      operations.unshift({ kind: same ? "equal" : "changed", source: i - 1, expected: source[i - 1].text, typed: typed[j - 1].text });
      i--;
      j--;
    } else if (i && dp[i][j] === dp[i - 1][j] + 1) {
      operations.unshift({ kind: "missing", source: i - 1, expected: source[i - 1].text });
      i--;
    } else {
      operations.unshift({ kind: "extra", typed: typed[j - 1].text });
      j--;
    }
  }
  return { source, operations, correct: operations.filter((op) => op.kind === "equal").length, extra: operations.filter((op) => op.kind === "extra").length, total: source.length };
}
function sentenceHints(text) {
  const words = [...new Set(text.toLowerCase().match(/\b(?:a|an|the|to|of|and|for|at|as|can|was|were)\b/g) || [])].slice(0, 6);
  return "<ul>".concat(words.length ? "<li>留意功能词：".concat(esc(words.join(" / ")), "。先听清它们是否出现，再练习自然弱读。</li>") : "", "<li>先听完一句再跟读，按人物、动作和结果划分意群，避免每个单词都停顿。</li><li>设备合成语音的节奏可能与真人不同；这些提示用于练习，不是自动发音评分。</li></ul>");
}
function precisionPanel(story) {
  const s = listeningSession, sentences = s.sentences[s.paragraph], sentence = sentences[s.sentenceIndex], draft = s.precisionDrafts[s.paragraph][s.sentenceIndex], slots = sentenceWordSlots(story, s.paragraph, sentence), result = draft.result;
  return '<section class="precision-panel"><h3>单句精听与跟读</h3><p class="precision-hint">选一句，点上方播放；可循环本句。先听写，再核对漏词和错词。不区分大小写、忽略句读标点，接受常见英美拼写。</p><div class="precision-sentences" aria-label="选择句子">'.concat(sentences.map((_, i) => '<button data-precision-sentence="'.concat(i, '" aria-pressed="').concat(i === s.sentenceIndex, '" class="').concat(i === s.sentenceIndex ? "active" : "", '">第 ').concat(i + 1, " 句</button>")).join(""), '</div><form id="precision-form"><label for="precision-input">写下刚才听到的这一句</label><textarea id="precision-input" lang="en" maxlength="1500" spellcheck="false" autocapitalize="off" autocomplete="off" ').concat(result ? "disabled" : "", ' placeholder="先听，再输入；也可以只写下听清的部分">').concat(esc(draft.text), '</textarea><div class="precision-actions">').concat(result ? '<button type="button" class="button" data-precision-action="restart">重新听写本句</button>' : '<button type="submit" class="button">核对这一句 →</button><button type="button" class="button secondary" data-precision-action="restart">重新开始本句</button>', '<button type="button" class="button secondary" data-precision-action="reveal">').concat(draft.revealed ? "隐藏本句原文" : "显示本句原文", "</button></div></form>").concat(result ? '<div class="cloze-summary" role="status"><strong>对上 '.concat(result.correct, " / ").concat(result.total, " 个原文词").concat(result.extra ? " · 多写 " + result.extra + " 词" : "", "</strong><p>").concat(draft.assisted ? "本轮看过原文，仅核对，不计入词汇掌握。" : "本句重点词已记录听辨和拼写结果；漏词、错词可以再听一遍。", '</p><div class="precision-feedback">').concat(result.operations.map((op) => op.kind === "equal" ? esc(op.expected) : op.kind === "extra" ? '<span class="extra" title="多写的词">'.concat(esc(op.typed), "</span>") : '<span class="'.concat(op.kind, '" title="').concat(op.kind === "missing" ? "漏词" : "写成了 " + esc(op.typed), '">').concat(esc(op.expected)).concat(op.kind === "changed" ? "（".concat(esc(op.typed), "）") : "〔漏〕", "</span>")).join(" "), "</div></div>") : "").concat(draft.revealed || result ? '<div class="precision-reference"><h4>原文与跟读提示</h4><p lang="en">'.concat(esc(sentence.text), "</p>").concat(sentenceHints(sentence.text)).concat(slots.length ? '<p class="practice-label">还有听不清的重点词？标记后进入“听出”薄弱词队列。</p><div class="precision-keywords">'.concat(slots.map((slot) => '<button data-precision-weak="'.concat(esc(slot.id), '" ').concat(draft.marked.includes(slot.id) ? "disabled" : "", ">").concat(esc(clozeExpected(slot.id)), " · ").concat(draft.marked.includes(slot.id) ? "已标记" : "听不清", "</button>")).join(""), "</div>") : "", "</div>") : "", "</section>");
}
function comprehensionPanel(story) {
  const s = listeningSession, attempt = s.comprehension, questions = LISTENING_QUESTION_INDEX.get(story.id) || [];
  if (!questions.length) return '<section class="comprehension-panel"><h3>故事理解题</h3><p>这篇暂未载入题目，可以先练单句精听。</p></section>';
  const correct = questions.filter((q, i) => attempt.choices[i] === q.answer).length;
  return '<section class="comprehension-panel"><h3>听完故事，再回答 '.concat(questions.length, ' 道题</h3><p class="practice-label">按英文故事作答。先选完再提交，答案与依据暂时隐藏；可用上方播放器连听全部段落。</p>').concat(attempt.checked ? '<div class="cloze-summary" role="status"><strong>答对 '.concat(correct, " / ").concat(questions.length, " 题</strong><p>").concat(attempt.assisted ? "本轮查看过原文或精听答案，结果仅作核对。" : "本次成绩已保存到学习足迹。理解题单独记录，不自动将本章词汇标记为掌握。", "</p></div>") : "").concat(questions.map((q, i) => '<article class="comprehension-question" id="comprehension-'.concat(i, '"><small>').concat(i + 1, ". ").concat(q.type === "detail" ? "细节与因果" : q.type === "main" ? "主旨" : "动机与推断", '</small><h4 lang="en">').concat(esc(q.prompt), '</h4><div class="comprehension-options">').concat(attempt.orders[i].map((index, position) => '<button data-comprehension-choice="'.concat(i, ":").concat(index, '" aria-pressed="').concat(attempt.choices[i] === index, '" class="').concat(attempt.choices[i] === index ? "selected " : "").concat(attempt.checked ? index === q.answer ? "correct" : index === attempt.choices[i] ? "wrong" : "" : "", '" ').concat(attempt.checked ? "disabled" : "", "><b>").concat("ABCD"[position], '</b><span lang="en">').concat(esc(q.options[index]), "</span></button>")).join(""), "</div>").concat(attempt.checked ? '<div class="comprehension-feedback"><strong>'.concat(attempt.choices[i] === q.answer ? "✓ 回答正确" : "请沿着这条线索重听", '</strong><blockquote lang="en">').concat(esc(q.evidence.quote), "</blockquote><p>").concat(esc(q.explanation), '</p><button class="button secondary compact" data-comprehension-evidence="').concat(i, '">定位依据，精听这一句 →</button></div>') : "", "</article>")).join(""), '<button class="button" data-comprehension-action="').concat(attempt.checked ? "restart" : "submit", '">').concat(attempt.checked ? "重新听故事，再答一轮" : "提交理解题 →", "</button></section>");
}
const listeningReaderBeforePractice = listeningReader;
listeningReader = function(story) {
  var _a2, _b;
  const s = ensureListeningPractice(story);
  listeningReaderBeforePractice(story);
  const precision = s.precisionDrafts[s.paragraph][s.sentenceIndex];
  if (s.mode === "precision" && (precision.revealed || precision.result) || s.mode === "dictation" && s.drafts[s.paragraph].results) s.comprehension.assisted = true;
  const modes = document.querySelector(".listening-modes");
  modes.insertAdjacentHTML("beforeend", '<button data-listening-mode="precision" aria-pressed="'.concat(s.mode === "precision", '" class="').concat(s.mode === "precision" ? "active" : "", '">单句精听</button><button data-listening-mode="questions" aria-pressed="').concat(s.mode === "questions", '" class="').concat(s.mode === "questions" ? "active" : "", '">故事理解题</button>'));
  if (s.mode === "precision" || s.mode === "questions") {
    (_a2 = document.querySelector(".listening-dictation")) == null ? void 0 : _a2.remove();
    const transcriptActions = document.querySelector(".listening-transcript-actions");
    transcriptActions.insertAdjacentHTML("beforebegin", s.mode === "precision" ? precisionPanel(story) : comprehensionPanel(story));
    if (s.mode === "precision") {
      transcriptActions.remove();
      (_b = document.querySelector(".listening-transcript")) == null ? void 0 : _b.remove();
    }
  }
  if (s.mode === "precision") {
    const label = document.getElementById("listening-loop").parentElement;
    label.lastChild.textContent = " 循环本句";
    document.getElementById("listening-continuous").parentElement.hidden = true;
  }
  updateListeningPlayer();
};
const updatePlayerBeforePractice = updateListeningPlayer;
updateListeningPlayer = function() {
  updatePlayerBeforePractice();
  const s = listeningSession;
  if (!s || s.scope !== "sentence") return;
  const progress2 = document.getElementById("listening-progress");
  if (progress2) progress2.textContent = "第 ".concat(s.paragraph + 1, " 段 · 第 ").concat(s.sentenceIndex + 1, " / ").concat(s.sentences[s.paragraph].length, " 句");
  const play = document.querySelector('[data-listening="play"]');
  if (play && s.playing) play.textContent = "↺ 从本句重听";
};
document.addEventListener("input", (event) => {
  if (event.target.id === "precision-input") {
    const s = listeningSession;
    s.precisionDrafts[s.paragraph][s.sentenceIndex].text = event.target.value;
  }
});
document.addEventListener("submit", (event) => {
  var _a2;
  if (event.target.id !== "precision-form") return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const s = listeningSession, d = s.precisionDrafts[s.paragraph][s.sentenceIndex], story = getStory(s.id), sentence = s.sentences[s.paragraph][s.sentenceIndex];
  if (d.result) return;
  if (!listeningTokens(d.text).length) {
    toast("先写下听清的部分，或显示本句原文。");
    document.getElementById("precision-input").focus();
    return;
  }
  d.result = compareListeningSentence(sentence.text, d.text);
  s.comprehension.assisted = true;
  s.drafts[s.paragraph].assisted = true;
  if (!d.assisted) {
    const slots = sentenceWordSlots(story, s.paragraph, sentence), correctSlots = slots.map((slot) => {
      const indices = d.result.source.map((token, i) => token.start >= slot.start && token.end <= slot.end ? i : -1).filter((i) => i >= 0);
      return indices.length > 0 && indices.every((i) => d.result.operations.some((op) => op.source === i && op.kind === "equal"));
    });
    [...new Set(slots.map((slot) => slot.id))].forEach((id) => recordInSkills(id, slots.every((slot, i) => slot.id !== id || correctSlots[i]), ["listen", "spell"]));
  }
  reader(s.id);
  (_a2 = document.querySelector(".precision-panel .cloze-summary")) == null ? void 0 : _a2.scrollIntoView({ block: "center" });
}, true);
document.addEventListener("click", (event) => {
  const b = event.target.closest("[data-precision-sentence],[data-precision-action],[data-precision-weak],[data-comprehension-choice],[data-comprehension-action],[data-comprehension-evidence]");
  if (!b) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const s = listeningSession, story = getStory(s.id), d = s.precisionDrafts[s.paragraph][s.sentenceIndex], attempt = s.comprehension;
  if (b.dataset.precisionSentence !== void 0) {
    listeningStop();
    s.sentenceIndex = Number(b.dataset.precisionSentence);
    s.chunk = 0;
    s.status = "句子已选好，点播放开始精听。";
  } else if (b.dataset.precisionAction === "reveal") {
    d.revealed = !d.revealed;
    if (d.revealed) {
      d.assisted = true;
      attempt.assisted = true;
      s.drafts[s.paragraph].assisted = true;
    }
  } else if (b.dataset.precisionAction === "restart") {
    listeningStop();
    d.text = "";
    d.result = null;
    d.assisted = false;
    d.revealed = false;
    d.marked = [];
    s.chunk = 0;
    s.status = "开始新一轮本句听写。";
  } else if (b.dataset.precisionWeak) {
    if (!d.marked.includes(b.dataset.precisionWeak)) {
      recordInSkills(b.dataset.precisionWeak, false, ["listen"]);
      d.marked.push(b.dataset.precisionWeak);
    }
  } else if (b.dataset.comprehensionChoice) {
    if (!attempt.checked) {
      const [question, choice] = b.dataset.comprehensionChoice.split(":").map(Number);
      attempt.choices[question] = choice;
    }
  } else if (b.dataset.comprehensionAction === "submit") {
    if (attempt.checked) return;
    const questions = LISTENING_QUESTION_INDEX.get(s.id), empty = attempt.choices.findIndex((choice) => choice === null);
    if (empty >= 0) {
      toast("第 ".concat(empty + 1, " 题还没选择。"));
      document.getElementById("comprehension-" + empty).scrollIntoView({ block: "center" });
      return;
    }
    attempt.checked = true;
    if (!attempt.assisted) {
      const previous = state.listeningChecks[s.id];
      state.listeningChecks[s.id] = { correct: questions.filter((q, i) => attempt.choices[i] === q.answer).length, total: questions.length, last: today(), attempts: ((previous == null ? void 0 : previous.attempts) || 0) + 1, updatedAt: Date.now() };
      save();
    }
  } else if (b.dataset.comprehensionAction === "restart") {
    listeningStop();
    attempt.checked = false;
    attempt.assisted = false;
    attempt.choices = attempt.choices.map(() => null);
    attempt.orders = (LISTENING_QUESTION_INDEX.get(s.id) || []).map((q) => shuffle(q.options.map((_, i) => i)));
    s.transcript = false;
    s.paragraph = 0;
    s.chunk = 0;
  } else if (b.dataset.comprehensionEvidence !== void 0) {
    const q = LISTENING_QUESTION_INDEX.get(s.id)[Number(b.dataset.comprehensionEvidence)];
    listeningStop();
    s.mode = "precision";
    s.paragraph = q.evidence.paragraph;
    const anchor = (q.evidence.focusQuote || q.evidence.quote).trim(), offset = listeningPlain(story.en[s.paragraph]).indexOf(anchor);
    s.sentenceIndex = Math.max(0, s.sentences[s.paragraph].findIndex((sentence) => offset >= sentence.start && offset < sentence.end));
    s.chunk = 0;
    s.continuous = false;
    s.transcript = false;
    s.status = "已定位答案依据，点播放重听。";
  }
  reader(s.id);
}, true);
;
let CONTEXT_INDEX = /* @__PURE__ */ new Map();
let EXAM_INDEX = /* @__PURE__ */ new Map();
let MICRO_INDEX = /* @__PURE__ */ new Map();
const TRAINING_TABS = [["home", "训练总览"], ["context", "换场景"], ["cloze", "选词填空"], ["reading", "仔细阅读"], ["matching", "信息匹配"], ["micro", "写译微练"]];
const INITIAL_TRAINING_ROUTE = location.hash.slice(1).split("/");
let contextSession = null, examSession = null, microId = "", microKind = ["translation", "writing"].includes(INITIAL_TRAINING_ROUTE[3]) ? INITIAL_TRAINING_ROUTE[3] : "translation", trainingClock = null, microSaveTimer = null;
function buildTrainingIndexes() {
  CONTEXT_INDEX = new Map((typeof CONTEXT_PRACTICE !== "undefined" && CONTEXT_PRACTICE || []).map((w) => [w.id, w]));
  EXAM_INDEX = new Map((typeof EXAM_PRACTICE !== "undefined" && EXAM_PRACTICE || []).map((set) => [set.id, set]));
  MICRO_INDEX = new Map((typeof MICRO_PRACTICE !== "undefined" && MICRO_PRACTICE || []).map((unit) => [unit.id, unit]));
  if (MICRO_INDEX.has(INITIAL_TRAINING_ROUTE[2])) microId = INITIAL_TRAINING_ROUTE[2];
  else if (!MICRO_INDEX.has(microId)) {
    const list = typeof MICRO_PRACTICE !== "undefined" && MICRO_PRACTICE || [];
    microId = list.length ? list[Math.floor(Date.parse(today() + "T00:00:00Z") / 864e5) % list.length].id : "";
  }
}
buildTrainingIndexes();
const CLOZE_INSTRUCTION = "In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on Answer Sheet 2 with a single line through the centre. You may not use any of the words in the bank more than once.";
const MATCHING_INSTRUCTION = "In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on Answer Sheet 2.";
function validTrainingKey(key) {
  if (key.startsWith("context:")) return !CONTEXT_INDEX.size || CONTEXT_INDEX.has(key.slice(8));
  return key.startsWith("exam:") && (!EXAM_INDEX.size || EXAM_INDEX.has(key.slice(5)));
}
function cleanTrainingRecords(raw) {
  const result = /* @__PURE__ */ Object.create(null);
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return result;
  for (const [key, p] of Object.entries(raw)) if (validTrainingKey(key) && p && Number.isInteger(p.correct) && Number.isInteger(p.total) && p.total > 0 && p.total <= 12 && p.correct >= 0 && p.correct <= p.total) result[key] = { correct: p.correct, total: p.total, attempts: Math.max(1, Math.floor(Number(p.attempts) || 1)), last: /^\d{4}-\d{2}-\d{2}$/.test(p.last || "") ? p.last : "", updatedAt: Number.isFinite(p.updatedAt) ? Math.max(0, p.updatedAt) : 0 };
  return result;
}
function cleanMicroWork(raw) {
  const result = /* @__PURE__ */ Object.create(null);
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return result;
  for (const [id, tasks] of Object.entries(raw)) if ((!MICRO_INDEX.size || MICRO_INDEX.has(id)) && tasks) {
    result[id] = {};
    for (const kind of ["translation", "writing"]) {
      const task = tasks[kind];
      if (task && typeof task.text === "string") result[id][kind] = { text: task.text.slice(0, 7e3), submitted: Boolean(task.submitted), checks: Array.from({ length: 3 }, (_, i) => {
        var _a2;
        return Boolean((_a2 = task.checks) == null ? void 0 : _a2[i]);
      }), updatedAt: Number.isFinite(task.updatedAt) ? Math.max(0, task.updatedAt) : 0 };
    }
  }
  return result;
}
function mergeTrainingRecords(current, incoming) {
  const result = __spreadValues({}, current);
  for (const [key, p] of Object.entries(incoming || {})) if (!result[key] || p.updatedAt > result[key].updatedAt || p.updatedAt === result[key].updatedAt && p.attempts > result[key].attempts) result[key] = __spreadValues({}, p);
  return result;
}
function mergeMicroWork(current, incoming) {
  const result = __spreadValues({}, current);
  for (const [id, tasks] of Object.entries(incoming || {})) {
    result[id] = __spreadValues({}, current[id] || {});
    for (const [kind, p] of Object.entries(tasks)) if (!result[id][kind] || p.updatedAt > result[id][kind].updatedAt) result[id][kind] = __spreadProps(__spreadValues({}, p), { checks: p.checks.slice() });
  }
  return result;
}
const cleanBeforeTraining = cleanState;
cleanState = function(raw) {
  const s = cleanBeforeTraining(raw);
  s.training = cleanTrainingRecords(raw == null ? void 0 : raw.training);
  s.microWork = cleanMicroWork(raw == null ? void 0 : raw.microWork);
  return s;
};
try {
  state = cleanState(JSON.parse(localStorage.getItem(KEY) || localStorage.getItem("wordscene-v1")) || state);
} catch (e) {
  state = cleanState(state);
}
function storeTraining(key, correct, total) {
  const old = state.training[key];
  state.training[key] = { correct, total, last: today(), attempts: ((old == null ? void 0 : old.attempts) || 0) + 1, updatedAt: Date.now() };
  save();
}
function scrollTrainingStart() {
  const element = document.scrollingElement || document.documentElement, previous = element.style.scrollBehavior;
  element.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  element.style.scrollBehavior = previous;
}
function trainingHeader(section) {
  return '<div class="page-heading"><div class="eyebrow">WORDSCENE · TRANSFER & PRACTICE</div><h1>把故事里的词，用到新题里。</h1><p>换个语境辨词义，再练阅读与表达。</p></div><nav class="training-tabs" aria-label="训练类型">'.concat(TRAINING_TABS.map(([key, label]) => '<a href="#practice/'.concat(key, '" class="').concat(section === key ? "active" : "", '" ').concat(section === key ? 'aria-current="page"' : "", ">").concat(label, "</a>")).join(""), "</nav>");
}
function trainingHome() {
  const context = typeof CONTEXT_PRACTICE !== "undefined" && CONTEXT_PRACTICE || [];
  const exam = typeof EXAM_PRACTICE !== "undefined" && EXAM_PRACTICE || [];
  const micro = typeof MICRO_PRACTICE !== "undefined" && MICRO_PRACTICE || [];
  return '<section class="training-grid">'.concat([["context", "换场景复习", "".concat(context.length, " 个精选词 · 每词两个现实语境")], ["cloze", "15 选 10", "".concat(exam.filter((s) => s.type === "cloze").length, " 组原创 · 词性、搭配与逻辑")], ["reading", "双篇仔细阅读", "".concat(exam.filter((s) => s.type === "reading").length, " 组原创 · 每组两篇、10题")], ["matching", "长篇信息匹配", "".concat(exam.filter((s) => s.type === "matching").length, " 组原创 · 15段、10条信息")], ["micro", "每日写译微练", "".concat(micro.length, " 个主题 · 先写再对照参考")]].map(([key, title, description]) => '<a class="training-card" href="#practice/'.concat(key, '"><small>原创 CET-style 仿真模拟训练</small><h2>').concat(title, "</h2><p>").concat(description, "</p><span>开始练习 →</span></a>")).join(""), '</section><p class="practice-label">跨场景练习首批覆盖 ').concat(context.length, " 个词；完整内置词库仍由故事覆盖。题型成绩单独记录，写译练习按清单自评。</p>");
}
function startContext(weakOnly) {
  const known = /* @__PURE__ */ new Set([...Object.keys(state.words), ...state.favorites]);
  const context = typeof CONTEXT_PRACTICE !== "undefined" && CONTEXT_PRACTICE || [];
  let pool = context.filter((w) => {
    var _a2, _b;
    return weakOnly ? ((_a2 = state.training["context:" + w.id]) == null ? void 0 : _a2.correct) < ((_b = state.training["context:" + w.id]) == null ? void 0 : _b.total) : known.has(w.id);
  });
  if (!pool.length && weakOnly) {
    toast("目前没有已记录的跨场景错词。");
    return;
  }
  if (!pool.length) pool = context;
  const selected = shuffle(pool).slice(0, 5), items = selected.map((row) => row.scenes.map((scene, index) => ({ id: row.id, index, scene }))).reduce((all, list) => all.concat(list), []);
  contextSession = { items: shuffle(items), choices: items.map(() => null), orders: items.map((item) => shuffle(item.scene.options.map((_, i) => i))), checked: false, assisted: false };
  practicePage("context");
  scrollTrainingStart();
}
function contextSentence(scene) {
  return scene.sentence.split(/(\[\[.*?\]\])/g).map((part) => part.startsWith("[[") ? '<strong lang="en">'.concat(esc(part.slice(2, -2).split("|")[1]), "</strong>") : esc(part)).join("");
}
function contextPanel() {
  const s = contextSession;
  if (!s) return '<section class="training-paper"><h2>在新场景里认出熟悉的词</h2><p>优先抽取你学过或收藏的词；没有记录时，从首批精选词开始。每轮最多5词、10个新语境。</p><div class="training-actions"><button class="button" data-training="context-start">练已学词的新语境 →</button><button class="button secondary" data-training="context-weak">重练跨场景错词</button></div></section>';
  const correct = s.items.filter((item, i) => s.choices[i] === item.scene.answer).length;
  return '<section class="training-paper"><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><h2>同一个词，换个场景再理解</h2><p>根据英文上下文选本句词义，选完后统一提交。刷新会结束未提交的选择。</p>'.concat(s.checked ? '<div class="cloze-summary"><strong>'.concat(s.assisted ? "参考已展开" : "答对 ".concat(correct, " / ").concat(s.items.length, " 题"), "</strong><p>").concat(s.assisted ? "本轮查看答案，不记词汇掌握。" : "结果已写入“看懂”复习；同一词的两个语境都答对才记为正确。", "</p></div>") : "").concat(s.items.map((item, i) => '<article class="context-question"><small>'.concat(i + 1, ". ").concat(esc(item.scene.label), '</small><p class="training-paragraph" lang="en">').concat(contextSentence(item.scene), '</p><div class="comprehension-options">').concat(s.orders[i].map((choice, index) => '<button data-context-choice="'.concat(i, ":").concat(choice, '" class="').concat(s.choices[i] === choice ? "selected " : "").concat(s.checked ? choice === item.scene.answer ? "correct" : choice === s.choices[i] ? "wrong" : "" : "", '" aria-pressed="').concat(s.choices[i] === choice, '" ').concat(s.checked ? "disabled" : "", "><b>").concat("ABCD"[index], "</b><span>").concat(esc(item.scene.options[choice]), "</span></button>")).join(""), "</div>").concat(s.checked ? '<div class="comprehension-feedback"><strong>本句词义：'.concat(esc(item.scene.meaning), "</strong><p>").concat(esc(item.scene.explanation), '</p><button class="text-link" data-word="').concat(esc(item.id), '">回到 ').concat(esc(item.id), " 词卡与故事 ↗</button></div>") : "", "</article>")).join(""), '<div class="training-actions">').concat(s.checked ? '<button class="button" data-training="context-start">再练一组 →</button><button class="button secondary" data-training="context-weak">重练跨场景错词</button>' : '<button class="button" data-training="context-submit">提交新语境练习 →</button><button class="button secondary" data-training="context-reveal">查看参考</button>', "</div></section>");
}
function flatExamQuestions(set) {
  return set.type === "reading" ? set.passages.reduce((all, p, passage) => all.concat(p.questions.map((q) => __spreadProps(__spreadValues({}, q), { passage }))), []) : set.type === "cloze" ? set.questions.map((q) => {
    var _a2;
    return __spreadProps(__spreadValues({}, q), { wordId: q.wordId || ((_a2 = getWord(set.bank[q.answer].toLowerCase())) == null ? void 0 : _a2.id) });
  }) : set.questions;
}
function examMenu(type) {
  const exam = typeof EXAM_PRACTICE !== "undefined" && EXAM_PRACTICE || [];
  return '<section class="training-paper"><h2>'.concat(type === "cloze" ? "15选10 · 选词填空" : type === "reading" ? "双篇 · 仔细阅读" : "15段 · 信息匹配", '</h2><label class="training-timed"><input id="training-timed" type="checkbox" checked> 限时练习</label><p class="practice-label">开始后连续计时；到时未填计错。刷新结束本轮，已提交成绩保留。也可以取消限时，按自己的节奏练。</p><div class="training-pack-list">').concat(exam.filter((set) => set.type === type).map((set) => {
    const result = state.training["exam:" + set.id];
    return "<article><div><h3>".concat(esc(set.title), "</h3><p>").concat(esc(set.theme), " · 建议 ").concat(set.minutes, " 分钟").concat(result ? " · 上次 " + result.correct + "/" + result.total : "", '</p></div><button class="button secondary" data-exam-start="').concat(esc(set.id), '">开始练习 →</button></article>');
  }).join(""), "</div></section>");
}
function startExam(id, timed) {
  const set = EXAM_INDEX.get(id), questions = flatExamQuestions(set);
  examSession = { id, questions, choices: questions.map(() => null), orders: questions.map((q) => q.options ? shuffle(q.options.map((_, i) => i)) : null), checked: false, assisted: false, timed, deadline: Date.now() + set.minutes * 6e4, elapsed: false };
  practicePage(set.type);
  scrollTrainingStart();
}
function bankedParagraph(text) {
  return esc(text).replace(/\{\{(\d+)\}\}/g, (_, number) => {
    const s = examSession, set = EXAM_INDEX.get(s.id), index = s.questions.findIndex((q) => q.number === Number(number));
    return '<span class="exam-slot"><label for="exam-blank-'.concat(index, '">').concat(number, '.</label><select id="exam-blank-').concat(index, '" data-exam-select="').concat(index, '" aria-label="第 ').concat(number, ' 空" ').concat(s.checked ? "disabled" : "", '><option value="">选择</option>').concat(set.bank.map((word, i) => '<option value="'.concat(i, '" ').concat(s.choices[index] === i ? "selected" : "", " ").concat(s.choices.some((value, other) => other !== index && value === i) ? "disabled" : "", ">").concat("ABCDEFGHIJKLMNO"[i], " · ").concat(esc(word), "</option>")).join(""), "</select></span>");
  });
}
function examFeedback(q, index) {
  const s = examSession, set = EXAM_INDEX.get(s.id);
  if (!s.checked) return "";
  const correct = s.choices[index] === q.answer;
  const answer2 = set.type === "cloze" ? "".concat("ABCDEFGHIJKLMNO"[q.answer], " · ").concat(set.bank[q.answer]) : set.type === "matching" ? "[" + "ABCDEFGHIJKLMNO"[q.answer] + "]" : "".concat("ABCD"[s.orders[index].indexOf(q.answer)], " · ").concat(q.options[q.answer]);
  return '<div class="exam-feedback '.concat(correct ? "good" : "bad", '"><strong>').concat(s.assisted ? "参考" : correct ? "✓ 正确" : s.choices[index] === null ? "未作答" : "需再比较", " · ").concat(esc(answer2), "</strong>").concat(q.evidence ? '<blockquote lang="en">'.concat(esc(typeof q.evidence === "string" ? q.evidence : q.evidence.quote), "</blockquote>") : "", "<p>").concat(esc(q.explanation), "</p>").concat(q.errorType ? "<small>辨析重点：".concat(esc(q.errorType), "</small>") : "").concat(q.wordId ? '<button class="text-link" data-word="'.concat(esc(q.wordId), '">回到词卡 ↗</button>') : "", "</div>");
}
function examPanel() {
  const s = examSession, set = EXAM_INDEX.get(s.id), correct = s.questions.filter((q, i) => s.choices[i] === q.answer).length;
  let material = "", questions = "";
  if (set.type === "cloze") {
    material = '<details class="exam-instruction"><summary>题型说明</summary><p lang="en">'.concat(CLOZE_INSTRUCTION, '</p></details><div class="exam-bank" aria-label="A至O词表">').concat(set.bank.map((word, i) => "<span><b>".concat("ABCDEFGHIJKLMNO"[i], "</b> ").concat(esc(word), "</span>")).join(""), "</div>").concat(set.paragraphs.map((p) => '<p class="training-paragraph" lang="en">'.concat(bankedParagraph(p), "</p>")).join(""));
    if (s.checked) questions = s.questions.map((q, i) => '<article class="exam-question"><h3>第 '.concat(q.number, " 空</h3>").concat(examFeedback(q, i), "</article>")).join("");
  } else if (set.type === "reading") {
    material = '<p class="practice-label">阅读两篇文章，完成46–55题。每题选择一个最佳答案。</p>' + set.passages.map((passage, p) => '<section class="exam-passage" id="exam-passage-'.concat(p, '"><h3>').concat(p === 0 ? "Passage One" : "Passage Two").concat(s.checked ? " · " + esc(passage.title) : "", "</h3>").concat(passage.paragraphs.map((text) => '<p class="training-paragraph" lang="en">'.concat(esc(text), "</p>")).join("")).concat(passage.questions.map((q, i) => {
      const index = p * 5 + i;
      return '<article class="exam-question"><h4 lang="en">'.concat(q.number, ". ").concat(esc(q.prompt), '</h4><div class="comprehension-options">').concat(s.orders[index].map((choice, position) => '<button data-exam-choice="'.concat(index, ":").concat(choice, '" class="').concat(s.choices[index] === choice ? "selected " : "").concat(s.checked ? choice === q.answer ? "correct" : s.choices[index] === choice ? "wrong" : "" : "", '" aria-pressed="').concat(s.choices[index] === choice, '" ').concat(s.checked ? "disabled" : "", "><b>").concat("ABCD"[position], '</b><span lang="en">').concat(esc(q.options[choice]), "</span></button>")).join(""), "</div>").concat(examFeedback(q, index), "</article>");
    }).join(""), "</section>")).join("");
  } else {
    material = '<details class="exam-instruction"><summary>题型说明</summary><p lang="en">'.concat(MATCHING_INSTRUCTION, '</p></details><p class="practice-label">36–45题选择对应段落，同一段可重复使用。</p>').concat(set.paragraphs.map((p, i) => '<section class="matching-paragraph" id="matching-'.concat(i, '"><h3>[').concat("ABCDEFGHIJKLMNO"[i], ']</h3><p class="training-paragraph" lang="en">').concat(esc(p), "</p></section>")).join(""));
    questions = s.questions.map((q, i) => '<article class="exam-question"><label for="matching-answer-'.concat(i, '" lang="en">').concat(q.number, ". ").concat(esc(q.statement), '</label><select id="matching-answer-').concat(i, '" data-exam-select="').concat(i, '" ').concat(s.checked ? "disabled" : "", '><option value="">选择对应段落</option>').concat(set.paragraphs.map((_, letter) => '<option value="'.concat(letter, '" ').concat(s.choices[i] === letter ? "selected" : "", ">[").concat("ABCDEFGHIJKLMNO"[letter], "]</option>")).join(""), "</select>").concat(examFeedback(q, i), "</article>")).join("");
  }
  return '<section class="training-paper"><p class="practice-label">以下为原创 CET-style 仿真模拟训练。</p><h2>'.concat(esc(set.title), '</h2><div class="exam-toolbar"><span id="training-timer" role="status">').concat(s.timed ? "正在计时" : "不限时练习", "</span><span>已选 ").concat(s.choices.filter((value) => value !== null).length, " / ").concat(s.questions.length, ' 题</span><button class="text-link" data-training="exam-menu">返回题组</button></div>').concat(s.checked ? '<div class="cloze-summary"><strong>'.concat(s.assisted ? "参考答案已展开" : "答对 ".concat(correct, " / ").concat(s.questions.length, " 题"), "</strong><p>").concat(s.assisted ? "本轮不记录成绩或词汇掌握。" : s.elapsed ? "时间到，未答题计错。成绩已保存。" : "成绩已保存。阅读理解与信息匹配不自动标记整篇词汇掌握。", "</p></div>") : "").concat(material).concat(questions, '<div class="training-actions">').concat(s.checked ? '<button class="button" data-training="exam-restart">重新练这一组</button><button class="button secondary" data-training="exam-menu">选择其他题组</button>' : '<button class="button" data-training="exam-submit">提交核对 →</button><button class="button secondary" data-training="exam-reveal">查看参考答案</button>', "</div></section>");
}
function gradeExam(reveal = false, timeout = false) {
  const s = examSession;
  if (!s || s.checked) return;
  if (!reveal && !timeout && s.choices.some((value) => value === null)) {
    const index = s.choices.findIndex((value) => value === null), first = document.getElementById("exam-blank-" + index) || document.getElementById("matching-answer-" + index) || document.querySelector('[data-exam-choice^="'.concat(index, ':"]'));
    toast("还有题目未选择。可以继续作答，或查看参考答案。");
    first == null ? void 0 : first.scrollIntoView({ block: "center" });
    first == null ? void 0 : first.focus();
    return;
  }
  const set = EXAM_INDEX.get(s.id);
  if (set.type === "cloze" && !reveal && !timeout && new Set(s.choices).size !== s.choices.length) {
    toast("15选10中，每个词只能使用一次。");
    return;
  }
  s.checked = true;
  s.assisted = reveal;
  s.elapsed = timeout;
  clearInterval(trainingClock);
  if (!reveal) {
    storeTraining("exam:" + s.id, s.questions.filter((q, i) => s.choices[i] === q.answer).length, s.questions.length);
    if (set.type === "cloze") {
      const marked = s.questions.filter((q) => q.wordId);
      [...new Set(marked.map((q) => q.wordId))].forEach((id) => recordInSkills(id, s.questions.every((q, i) => q.wordId !== id || s.choices[i] === q.answer), ["read"]));
    }
  }
  if (location.hash.startsWith("#practice")) {
    practicePage(set.type);
    scrollTrainingStart();
  }
}
function refreshTrainingClock() {
  const s = examSession, element = document.getElementById("training-timer");
  if (!s || !element) return;
  if (s.checked) {
    element.textContent = s.elapsed ? "限时已结束" : "本轮已结束";
    return;
  }
  if (!s.timed) {
    element.textContent = "不限时练习";
    return;
  }
  const seconds = Math.max(0, Math.ceil((s.deadline - Date.now()) / 1e3));
  element.textContent = "剩余 ".concat(Math.floor(seconds / 60), ":").concat(String(seconds % 60).padStart(2, "0"));
  if (seconds === 0) gradeExam(false, true);
}
function getMicroDraft() {
  const entry = state.microWork[microId] || (state.microWork[microId] = {});
  return entry[microKind] || (entry[microKind] = { text: "", submitted: false, checks: [false, false, false], updatedAt: Date.now() });
}
function microWords(text) {
  return (text.match(/[A-Za-z0-9]+(?:['’\-][A-Za-z0-9]+)*/g) || []).length;
}
function microPanel() {
  const unit = MICRO_INDEX.get(microId);
  if (!unit) return "<p>写译内容尚未载入。</p>";
  const task = unit[microKind], draft = getMicroDraft();
  return '<section class="training-paper"><p class="practice-label">以下为原创 CET-style 仿真模拟训练。这里是短篇写译微练习，按清单自评。</p><h2>每日写译 · '.concat(esc(unit.title), '</h2><div class="micro-topics">').concat((typeof MICRO_PRACTICE !== "undefined" && MICRO_PRACTICE || []).map((u) => '<button data-micro-id="'.concat(esc(u.id), '" class="').concat(u.id === microId ? "active" : "", '" aria-pressed="').concat(u.id === microId, '">').concat(esc(u.title), "</button>")).join(""), '</div><div class="listening-modes"><button data-micro-kind="translation" class="').concat(microKind === "translation" ? "active" : "", '" aria-pressed="').concat(microKind === "translation", '">汉译英短段</button><button data-micro-kind="writing" class="').concat(microKind === "writing" ? "active" : "", '" aria-pressed="').concat(microKind === "writing", '">英文短写作</button></div><div class="micro-prompt"><h3>').concat(microKind === "translation" ? "将这段中文译成自然的英文" : "用一个英文短段回应题目", '</h3><p lang="').concat(microKind === "translation" ? "zh-CN" : "en", '">').concat(esc(task.prompt), "</p>").concat(microKind === "writing" ? '<p class="practice-label">建议 '.concat(task.minWords, "–").concat(task.maxWords, " 词。</p>") : "", '</div><p class="practice-label">可练习使用：').concat(task.targets.map((id) => '<button class="text-link" data-word="'.concat(esc(id), '">').concat(esc(id), "</button>")).join(" · "), '</p><form id="micro-form"><label for="micro-input">先自己写，再对照参考</label><textarea id="micro-input" lang="en" maxlength="7000" spellcheck="false" autocapitalize="off" placeholder="草稿会保存在当前浏览器">').concat(esc(draft.text), '</textarea><p class="practice-label" id="micro-word-count">当前 ').concat(microWords(draft.text), ' 词 · 草稿自动保存</p><button class="button" type="submit">保存并对照参考 →</button>').concat(draft.submitted ? '<button type="button" class="button secondary" data-training="micro-hide">收起参考，继续修改</button>' : "", "</form>").concat(draft.submitted ? '<section class="micro-reference"><h3>参考表达与自评</h3><p class="training-paragraph" lang="en">'.concat(esc(task.reference), '</p><p class="practice-label">参考表达可以有多种。这里不自动评估语义、语法或六级分数，也不会自动将目标词记为掌握。</p>').concat(task.checklist.map((point, i) => '<label><input type="checkbox" data-micro-check="'.concat(i, '" ').concat(draft.checks[i] ? "checked" : "", "> ").concat(esc(point), "</label>")).join(""), "</section>") : "", "</section>");
}
function practicePage(section = "home") {
  var _a2;
  clearInterval(trainingClock);
  if (!TRAINING_TABS.some(([key]) => key === section)) section = "home";
  const body = section === "home" ? trainingHome() : section === "context" ? contextPanel() : section === "micro" ? microPanel() : examSession && ((_a2 = EXAM_INDEX.get(examSession.id)) == null ? void 0 : _a2.type) === section ? examPanel() : examMenu(section);
  main.innerHTML = trainingHeader(section) + body;
  applyPreferences();
  if (document.getElementById("training-timer")) {
    refreshTrainingClock();
    if (!examSession.checked) trainingClock = setInterval(refreshTrainingClock, 1e3);
  }
}
const renderBeforeTraining = render;
render = function() {
  const parts = location.hash.slice(1).split("/"), [route, section] = parts;
  if (route === "practice") {
    if (section === "micro") {
      if (MICRO_INDEX.has(parts[2])) microId = parts[2];
      if (["translation", "writing"].includes(parts[3])) microKind = parts[3];
    }
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    wordDialog.close();
    utilityDialog.close();
    document.body.classList.remove("focus-mode");
    practicePage(section);
    updateNav();
  } else {
    clearInterval(trainingClock);
    renderBeforeTraining();
  }
};
const reviewBeforeTraining = review;
review = function() {
  var _a2;
  reviewBeforeTraining();
  if (!skillQuiz) (_a2 = main.querySelector(".skill-dashboard")) == null ? void 0 : _a2.insertAdjacentHTML("afterend", '<div class="training-entry"><h2>把熟词用到新题里</h2><p>换场景辨词义、六级阅读题型、每日写译微练习。</p><a class="button" href="#practice">进入实战练习 →</a></div>');
};
const progressBeforeTraining = progress;
progress = function() {
  var _a2;
  progressBeforeTraining();
  const scored = Object.values(state.training), written = Object.values(state.microWork).reduce((n, tasks) => n + Object.values(tasks).filter((task) => task.submitted).length, 0);
  (_a2 = main.querySelector(".progress-grid")) == null ? void 0 : _a2.insertAdjacentHTML("afterend", '<section class="progress-card"><h2>新语境与实战练习</h2><p>已有 '.concat(scored.length, " 项有效记录；各项最近成绩合计 ").concat(scored.reduce((n, p) => n + p.correct, 0), " / ").concat(scored.reduce((n, p) => n + p.total, 0), " 题。写译已对照 ").concat(written, ' 项。</p><a class="text-link" href="#practice">继续练习 →</a></section>'));
};
document.addEventListener("click", (event) => {
  var _a2;
  const b = event.target.closest("[data-training],[data-context-choice],[data-exam-start],[data-exam-choice],[data-micro-id],[data-micro-kind]");
  if (!b) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (b.dataset.contextChoice) {
    const [i, value] = b.dataset.contextChoice.split(":").map(Number);
    if (!contextSession.checked) contextSession.choices[i] = value;
    practicePage("context");
    return;
  }
  if (b.dataset.examStart) {
    startExam(b.dataset.examStart, Boolean((_a2 = document.getElementById("training-timed")) == null ? void 0 : _a2.checked));
    return;
  }
  if (b.dataset.examChoice) {
    const [i, value] = b.dataset.examChoice.split(":").map(Number);
    if (!examSession.checked) examSession.choices[i] = value;
    practicePage(EXAM_INDEX.get(examSession.id).type);
    return;
  }
  if (b.dataset.microId || b.dataset.microKind) {
    clearTimeout(microSaveTimer);
    save();
    if (b.dataset.microId) microId = b.dataset.microId;
    if (b.dataset.microKind) microKind = b.dataset.microKind;
    const route = "#practice/micro/" + microId + "/" + microKind;
    if (location.hash === route) practicePage("micro");
    else location.hash = route;
    return;
  }
  const action = b.dataset.training;
  if (action === "context-start") startContext(false);
  else if (action === "context-weak") startContext(true);
  else if (action === "context-submit" || action === "context-reveal") {
    const s = contextSession;
    if (!s || s.checked) return;
    if (action === "context-submit" && s.choices.some((value) => value === null)) {
      toast("还有新语境题未选择。");
      return;
    }
    s.checked = true;
    s.assisted = action === "context-reveal";
    if (!s.assisted) {
      for (const id of new Set(s.items.map((item) => item.id))) {
        const indices = s.items.map((item, i) => item.id === id ? i : -1).filter((i) => i >= 0), correct = indices.filter((i) => s.choices[i] === s.items[i].scene.answer).length;
        storeTraining("context:" + id, correct, indices.length);
        recordInSkills(id, correct === indices.length, ["read"]);
      }
    }
    practicePage("context");
    scrollTrainingStart();
  } else if (action === "exam-submit") gradeExam();
  else if (action === "exam-reveal") gradeExam(true);
  else if (action === "exam-restart") {
    const id = examSession.id, timed = examSession.timed;
    startExam(id, timed);
  } else if (action === "exam-menu") {
    const type = EXAM_INDEX.get(examSession.id).type;
    examSession = null;
    clearInterval(trainingClock);
    practicePage(type);
    scrollTrainingStart();
  } else if (action === "micro-hide") {
    const draft = getMicroDraft();
    draft.submitted = false;
    draft.updatedAt = Date.now();
    save();
    practicePage("micro");
  }
}, true);
document.addEventListener("change", (event) => {
  if (event.target.dataset.examSelect !== void 0) {
    const s = examSession;
    if (!s || s.checked) return;
    const index = Number(event.target.dataset.examSelect), value = event.target.value === "" ? null : Number(event.target.value);
    if (EXAM_INDEX.get(s.id).type === "cloze" && value !== null && s.choices.some((choice, i) => i !== index && choice === value)) {
      toast("这个词已经用过，请选另一个。");
      event.target.value = s.choices[index] === null ? "" : s.choices[index];
      return;
    }
    s.choices[index] = value;
    const y = scrollY;
    practicePage(EXAM_INDEX.get(s.id).type);
    scrollTo(0, y);
  } else if (event.target.dataset.microCheck !== void 0) {
    const draft = getMicroDraft();
    draft.checks[Number(event.target.dataset.microCheck)] = event.target.checked;
    draft.updatedAt = Date.now();
    save();
  }
});
document.addEventListener("input", (event) => {
  if (event.target.id !== "micro-input") return;
  const draft = getMicroDraft();
  draft.text = event.target.value.slice(0, 7e3);
  draft.updatedAt = Date.now();
  document.getElementById("micro-word-count").textContent = "当前 ".concat(microWords(draft.text), " 词 · 草稿自动保存");
  clearTimeout(microSaveTimer);
  microSaveTimer = setTimeout(save, 450);
});
document.addEventListener("submit", (event) => {
  if (event.target.id !== "micro-form") return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const draft = getMicroDraft();
  if (!draft.text.trim() || !/[A-Za-z]/.test(draft.text)) {
    toast("先写下自己的英文，再对照参考。");
    document.getElementById("micro-input").focus();
    return;
  }
  clearTimeout(microSaveTimer);
  draft.submitted = true;
  draft.updatedAt = Date.now();
  save();
  practicePage("micro");
  document.querySelector(".micro-reference").scrollIntoView({ block: "start" });
}, true);
window.addEventListener("pagehide", () => {
  if (microSaveTimer) {
    clearTimeout(microSaveTimer);
    save();
  }
});
;
let SERIAL_BOOK_INDEX = /* @__PURE__ */ new Map();
let SERIAL_CHAPTER_INDEX = /* @__PURE__ */ new Map();
let SERIAL_TOTAL_CHAPTERS = 0;
let SERIAL_WORD_CHAPTERS = /* @__PURE__ */ new Map();
let SERIAL_COVERED_IDS = /* @__PURE__ */ new Set();
function serialBooks() {
  if (typeof SERIAL_NOVELS !== "undefined" && SERIAL_NOVELS && SERIAL_NOVELS.length) return SERIAL_NOVELS;
  if (typeof SERIAL_INDEX !== "undefined" && SERIAL_INDEX && SERIAL_INDEX.length) return SERIAL_INDEX;
  return [];
}
function serialTerms(chapter) {
  if (Array.isArray(chapter.cn) && chapter.cn.some((p) => String(p).includes("[["))) return storySlots(chapter);
  return (chapter.wordIds || []).map((id) => ({ id, meaning: chapter.wordMeanings && chapter.wordMeanings[id] || "" }));
}
function buildSerialIndexes() {
  const books = serialBooks();
  SERIAL_BOOK_INDEX = new Map(books.map((b) => [b.id, b]));
  SERIAL_CHAPTER_INDEX = /* @__PURE__ */ new Map();
  books.forEach((book) => book.chapters.forEach((chapter, index) => SERIAL_CHAPTER_INDEX.set(chapter.id, __spreadProps(__spreadValues({}, chapter), { book, index, number: index + 1, category: book.category }))));
  SERIAL_TOTAL_CHAPTERS = SERIAL_CHAPTER_INDEX.size;
  SERIAL_WORD_CHAPTERS = /* @__PURE__ */ new Map();
  SERIAL_CHAPTER_INDEX.forEach((chapter) => {
    serialTerms(chapter).forEach((term) => {
      if (!SERIAL_WORD_CHAPTERS.has(term.id)) SERIAL_WORD_CHAPTERS.set(term.id, []);
      const paragraph = Array.isArray(chapter.cn) ? chapter.cn.findIndex((p) => p.includes("[[" + term.id + "|")) : -1;
      SERIAL_WORD_CHAPTERS.get(term.id).push({ id: chapter.id, book: chapter.book.id, title: chapter.title, bookTitle: chapter.book.title, number: chapter.number, paragraph, meaning: term.meaning });
    });
  });
  SERIAL_COVERED_IDS = new Set(SERIAL_WORD_CHAPTERS.keys());
}
buildSerialIndexes();
const serialFlatten = (rows, fn) => rows.reduce((all, row, index) => all.concat(fn(row, index)), []);
function serialFormatEnglish(text) {
  return text.split(/(\[\[.*?\]\])/g).map((part) => {
    if (!part.startsWith("[[")) return esc(part);
    const [id, surface] = part.slice(2, -2).split("|");
    return '<button class="word-inline" data-word="'.concat(esc(id), '" lang="en">').concat(esc(surface || id), "</button>");
  }).join("");
}
let serialGame = null, serialSpeechGeneration = 0, serialAudioActive = false, serialUtterance = null;
function cleanSerial(raw) {
  const base = { lastChapter: "", completed: [], bookmarks: [], runs: {} };
  if (!raw || typeof raw !== "object") return base;
  base.lastChapter = SERIAL_CHAPTER_INDEX.has(raw.lastChapter) ? raw.lastChapter : "";
  for (const key of ["completed", "bookmarks"]) base[key] = Array.isArray(raw[key]) ? [...new Set(raw[key].filter((id) => SERIAL_CHAPTER_INDEX.has(id)))] : [];
  if (raw.runs && typeof raw.runs === "object") for (const [key, r] of Object.entries(raw.runs)) {
    const [id, mode] = key.split(":");
    if (SERIAL_CHAPTER_INDEX.has(id) && ["choice", "spell", "listen"].includes(mode) && r && Number.isInteger(r.correct) && Number.isInteger(r.total) && r.total > 0 && r.total <= 12 && r.correct >= 0 && r.correct <= r.total) base.runs[key] = { correct: r.correct, total: r.total, attempts: Math.max(1, Math.floor(Number(r.attempts) || 1)), updatedAt: Math.max(0, Number(r.updatedAt) || 0) };
  }
  return base;
}
function mergeSerial(current, incoming) {
  const result = cleanSerial(current), other = cleanSerial(incoming);
  result.completed = [.../* @__PURE__ */ new Set([...result.completed, ...other.completed])];
  result.bookmarks = [.../* @__PURE__ */ new Set([...result.bookmarks, ...other.bookmarks])];
  if (!result.lastChapter) result.lastChapter = other.lastChapter;
  for (const [key, r] of Object.entries(other.runs)) if (!result.runs[key] || r.updatedAt > result.runs[key].updatedAt) result.runs[key] = r;
  return result;
}
const cleanBeforeSerial = cleanState;
cleanState = function(raw) {
  const s = cleanBeforeSerial(raw);
  s.serial = cleanSerial(raw == null ? void 0 : raw.serial);
  return s;
};
try {
  state = cleanState(JSON.parse(localStorage.getItem(KEY) || "null") || state);
} catch (e) {
  state = cleanState(state);
}
function serialContinue(book) {
  const remembered = book.chapters.findIndex((c) => c.id === state.serial.lastChapter);
  if (remembered >= 0) {
    const chapter = book.chapters[remembered];
    if (!state.serial.completed.includes(chapter.id)) return chapter;
    const next = book.chapters.slice(remembered + 1).find((c) => !state.serial.completed.includes(c.id));
    if (next) return next;
  }
  return book.chapters.find((c) => !state.serial.completed.includes(c.id)) || book.chapters[Math.max(remembered, 0)] || book.chapters[0];
}
function serialVolumes(book) {
  const groups = [];
  book.chapters.forEach((chapter, index) => {
    var _a2, _b;
    const number = chapter.volume || 1;
    let group = groups.find((v) => v.number === number);
    if (!group) {
      group = { number, title: ((_b = (_a2 = book.volumes) == null ? void 0 : _a2.find((v) => v.number === number)) == null ? void 0 : _b.title) || book.title, chapters: [] };
      groups.push(group);
    }
    group.chapters.push(__spreadProps(__spreadValues({}, chapter), { number: index + 1 }));
  });
  return groups;
}
function serialVolumeTitle(chapter) {
  var _a2, _b;
  return ((_b = (_a2 = chapter.book.volumes) == null ? void 0 : _a2.find((v) => v.number === (chapter.volume || 1))) == null ? void 0 : _b.title) || chapter.book.title;
}
function serialChapterRows(book, chapters, journey = false) {
  return chapters.map((c) => {
    const records = ["choice", "spell", "listen"].map((m) => state.serial.runs[c.id + ":" + m]).filter(Boolean);
    return '<a class="serial-chapter-row" href="'.concat(journey ? "#practice/journey/" + c.id : "#serial/" + book.id + "/" + c.id, '"><span class="serial-chapter-number">').concat(String(c.number).padStart(2, "0"), "</span><div><h3>").concat(esc(c.title), " ").concat(state.serial.bookmarks.includes(c.id) ? '<span aria-label="已加书签">☆</span>' : "", "</h3>").concat(journey ? "" : "<p>".concat(esc(c.summary), "</p>"), "<small>").concat(journey ? records.length ? "已走过 " + records.length + " 种回忆方式" : "等待第一次回忆" : serialTerms(c).length + " 个语境词 · " + (state.serial.completed.includes(c.id) ? "✓ 已读" : "未读"), '</small></div><span aria-hidden="true">→</span></a>');
  }).join("");
}
function serialVolumeDirectory(book, journey = false) {
  const current = serialContinue(book);
  return serialVolumes(book).map((volume) => '<details class="serial-volume" data-volume="'.concat(volume.number, '" ').concat((current.volume || 1) === volume.number ? "open" : "", "><summary><span>第 ").concat(volume.number, " 卷 · ").concat(esc(volume.title), "</span><small>").concat(volume.chapters[0].number, "—").concat(volume.chapters[volume.chapters.length - 1].number, " 章 · ").concat(volume.chapters.filter((c) => state.serial.completed.includes(c.id)).length, "/").concat(volume.chapters.length, ' 已读</small></summary><div class="serial-volume-chapters">').concat(serialChapterRows(book, volume.chapters, journey), "</div></details>")).join("");
}
function serialBookCard(book, index) {
  const completed = book.chapters.filter((c) => state.serial.completed.includes(c.id)).length, chapter = serialContinue(book);
  return '<article class="serial-book"><a class="serial-book-cover" href="#serial/'.concat(book.id, '"><div class="serial-book-no">NOVEL ').concat(String(index + 1).padStart(2, "0"), " · ").concat(esc(book.category), "</div><h2>").concat(esc(book.title), "</h2><p>").concat(esc(book.subtitle), '</p><span class="serial-seal" aria-hidden="true">').concat(index ? "谜" : "契", '</span><span class="serial-spine">WORDSCENE ORIGINAL</span></a><div class="serial-book-body"><div class="serial-book-meta"><span>').concat(serialVolumes(book).length, " 卷 · ").concat(book.chapters.length, " 章</span><span>已读 ").concat(completed, " / ").concat(book.chapters.length, "</span></div><p>").concat(esc(book.synopsis), '</p><div class="serial-route-progress" role="img" aria-label="已读 ').concat(completed, " 章，共").concat(book.chapters.length, '章"><i style="width:').concat(completed / book.chapters.length * 100, '%"></i></div><div class="hero-actions"><a class="button" href="#serial/').concat(book.id, "/").concat(chapter.id, '">').concat(completed ? "继续阅读" : "翻开第一章", ' ↗</a><a class="text-link" href="#serial/').concat(book.id, '">分卷目录 →</a></div></div></article>');
}
const libraryBeforeSerial = library;
library = function() {
  if (!main) return;
  const books = serialBooks();
  if (!books.length) {
    main.dataset.view = "serial";
    main.innerHTML = '<section class="startup-panel"><h1>正在打开故事书架…</h1><p>目录还在加载，请稍候。</p></section>';
    applyPreferences();
    return;
  }
  const chapter = SERIAL_CHAPTER_INDEX.get(state.serial.lastChapter) || SERIAL_CHAPTER_INDEX.get(books[0].chapters[0].id);
  const coreWords = new Set(serialFlatten(books, (b) => serialFlatten(b.chapters, (c) => serialTerms(c).map((t) => t.id))));
  const totalWords = typeof SERIAL_INDEX_META !== "undefined" && SERIAL_INDEX_META.words || COVERAGE.total || BUILTIN_WORDS.length || coreWords.size;
  main.dataset.view = "serial";
  main.innerHTML = '<section class="serial-hero"><div><div class="serial-kicker">WORDSCENE · A STORY TO REMEMBER</div><h1>读到下一章，<br>也记住<em>下一个词。</em></h1><p>一纸山契，牵出被藏起的旧账。<br>一张船票，带你走进第七码头的雨夜。<br>让人物、线索和转折，成为单词的记忆。</p><div class="hero-actions"><a class="button" href="#serial/'.concat(chapter.book.id, "/").concat(chapter.id, '">').concat(state.serial.lastChapter ? "接着上次的剧情" : "开始我的故事", ' <span>↗</span></a><a class="text-link" href="#practice">去剧情闯关 →</a></div></div><div class="serial-art" aria-hidden="true"><small>THE WORDSCENE COLLECTION</small><strong>山契<br><span>第七码头</span></strong><div class="serial-seal">词间</div><p>故事有下一章<br>记忆有回响</p><span class="serial-spine">READ · RECALL · RETURN</span></div></section><section class="serial-rewards" aria-label="学习概览"><div><strong>02</strong><span>原创连续小说</span></div><div><strong>').concat(SERIAL_TOTAL_CHAPTERS, "</strong><span>剧情章节</span></div><div><strong>").concat(state.serial.completed.length, '</strong><span>已经读完的章节</span></div></section><div class="serial-section-title"><div class="serial-kicker">CHOOSE YOUR STORY</div><h2>今夜，翻开哪一本？</h2><p>同一组人物，同一条主线。按顺序读，伏笔才有回声。</p></div><section class="serial-shelf">').concat(books.map(serialBookCard).join(""), '</section><section class="serial-entry"><div><div class="serial-kicker">RECALL IN THE SCENE</div><h2>记住线索，再往前走。</h2><p>认出关键词、填回关键动作，或听英文找线索。每次八个词，不设倒计时。</p></div><a class="button secondary" href="#practice">进入剧情闯关 →</a></section><section class="serial-archive-note"><h2>跟着长篇，走过完整词库。</h2><p>长篇正文覆盖 ').concat(coreWords.size, " / ").concat(totalWords, " 词（").concat(totalWords ? (coreWords.size / totalWords * 100).toFixed(1) : "0", "%）。").concat(coreWords.size === totalWords ? "所有内置词都能在主线剧情及对应英文里找到。" : "尚有词汇正在写入后续剧情。", '旧笔记、书签和学习记录继续保留；原短篇可作为额外语境阅读。</p><a class="text-link" href="#archive">打开拓展语境 →</a> <a class="text-link" href="#notebook">查看完整词库 →</a></section>');
  applyPreferences();
};
function serialBookPage(id) {
  const book = SERIAL_BOOK_INDEX.get(id);
  if (!book) {
    serialNotFound();
    return;
  }
  const chapter = serialContinue(book);
  main.dataset.view = "serial";
  main.innerHTML = '<div class="reader-top"><a class="back-link" href="#library">← 回到两本故事</a><a class="button secondary compact" href="#serial/'.concat(book.id, "/").concat(chapter.id, '">继续阅读 →</a></div><section class="page-heading"><div class="serial-kicker">').concat(esc(book.category), " · ").concat(serialVolumes(book).length, " 卷 / ").concat(book.chapters.length, " 章</div><h1>").concat(esc(book.title), "</h1><p>").concat(esc(book.synopsis), '</p></section><details class="serial-character-list"><summary>同行的人 · 人物介绍</summary><section class="serial-map">').concat(book.characters.map((c) => "<p><b>".concat(esc(c.name), "</b> ").concat(esc(c.description), "</p>")).join(""), '</section></details><div class="serial-section-title"><h2>分卷目录</h2><p>各卷承接前面的剧情；展开一卷，按章节顺序阅读。</p></div><section class="serial-chapters">').concat(serialVolumeDirectory(book), "</section>");
  applyPreferences();
}
function serialNotFound() {
  main.innerHTML = '<section class="empty-state"><h2>这一章还没找到</h2><a class="button" href="#library">回到书架</a></section>';
}
let serialReadView = "read", serialReadId = "";
function serialRead(id, view) {
  const chapter = SERIAL_CHAPTER_INDEX.get(id);
  if (!chapter) {
    serialNotFound();
    return;
  }
  if (!Array.isArray(chapter.cn) || !chapter.cn.length) {
    if (typeof ensureSerialFullData === "function") {
      ensureSerialFullData().then(() => serialRead(id, view)).catch(() => serialNotFound());
      return;
    }
    serialNotFound();
    return;
  }
  if (serialReadId !== id) {
    serialReadId = id;
    serialReadView = "read";
  }
  if (view) serialReadView = view;
  const session = ensureCloze(chapter);
  clozeView = serialReadView;
  const exercise = serialReadView === "exercise";
  state.serial.lastChapter = id;
  save();
  main.dataset.view = "serial";
  clozeParagraph.index = 0;
  const prev = chapter.book.chapters[chapter.index - 1], next = chapter.book.chapters[chapter.index + 1];
  main.innerHTML = '<div class="reader-top"><a class="back-link" href="#serial/'.concat(chapter.book.id, '">← ').concat(esc(chapter.book.title), ' · 目录</a><div class="reader-controls"><button class="button secondary compact" data-serial-action="bookmark" data-serial-id="').concat(id, '">').concat(state.serial.bookmarks.includes(id) ? "★ 已加书签" : "☆ 留个书签", '</button><button class="button secondary compact" data-serial-action="focus">').concat(document.body.classList.contains("focus-mode") ? "退出专注" : "专注阅读", '</button></div></div><div class="cloze-steps serial-reading-steps"><button data-serial-view="read" class="').concat(exercise ? "" : "active", '" aria-pressed="').concat(!exercise, '"><small>01 · READ</small>沉浸阅读</button><button data-serial-view="exercise" class="').concat(exercise ? "active" : "", '" aria-pressed="').concat(exercise, '"><small>02 · RECALL</small>剧情填空</button><a href="#practice/journey/').concat(id, '"><small>03 · EXPLORE</small>线索闯关 ↗</a></div>').concat(readerTools(), '<article class="reader-paper webnovel-paper"><div class="serial-kicker">').concat(esc(chapter.book.title), " · 卷 ").concat(chapter.volume || 1, " · CHAPTER ").concat(String(chapter.number).padStart(2, "0"), " / ").concat(chapter.book.chapters.length, "</div><h1>").concat(esc(chapter.title), '</h1><aside class="serial-recap"><b>').concat(chapter.index ? "前情回顾" : "故事开始之前", "</b><p>").concat(esc(chapter.recap), '</p></aside><p class="practice-label">原创故事 · ').concat(serialTerms(chapter).length, " 个语境词 · 阅读进度与词汇掌握分别记录</p>").concat(exercise ? '<div class="cloze-toolbar"><label><input id="cloze-hints" type="checkbox" '.concat(session.hints ? "checked" : "", '> 首字母提示</label><span id="cloze-counter" role="status" aria-live="polite"></span></div>').concat(clozeResultSummary(), '<form id="cloze-form" novalidate><div class="webnovel-text">').concat(chapter.cn.map((p) => '<p class="webnovel-paragraph">'.concat(clozeParagraph(p, true), "</p>")).join(""), '</div><div class="cloze-actions">').concat(session.checked ? '<button type="button" class="button" data-cloze-action="restart">重新填一遍</button>'.concat(!session.revealed && session.results.includes("wrong") ? '<button type="button" class="button secondary" data-cloze-action="retry">重练错词</button>' : "") : '<button type="submit" class="button">核对本章回忆 →</button><button type="button" class="button secondary" data-cloze-action="reveal">查看参考答案</button>', "</div></form>") : '<div class="webnovel-text">'.concat(chapter.cn.map((p) => '<p class="webnovel-paragraph">'.concat(clozeParagraph(p, false), "</p>")).join(""), '</div><div class="cloze-actions"><button class="button" data-serial-view="exercise">把剧情里的词填回来 →</button><button class="text-link" data-serial-action="complete" data-serial-id="').concat(id, '">').concat(state.serial.completed.includes(id) ? "✓ 本章已读" : "标记本章已读", '</button></div><details class="story-original"><summary>读一遍对应英文</summary>').concat(chapter.en.map((p, i) => '<section><p class="translation english-second" lang="en">'.concat(serialFormatEnglish(p), '</p><button class="text-link" data-serial-speak="').concat(i, '" data-serial-id="').concat(id, '">▷ 听这一段英文</button></section>')).join(""), '<p id="serial-speech-status" role="status">朗读使用设备英语语音。</p><button class="text-link" data-serial-action="stop">停止朗读</button></details>'), '<div class="serial-entry"><div><h2>这章的线索，记住了吗？</h2><p>八个词的小旅程，回到人物刚刚做出的决定。</p></div><a class="button secondary" href="#practice/journey/').concat(id, '">去线索闯关 →</a></div><div class="chapter-nav">').concat(prev ? '<a href="#serial/'.concat(chapter.book.id, "/").concat(prev.id, '">← ').concat(esc(prev.title), "</a>") : '<a href="#serial/' + chapter.book.id + '">回到目录</a>').concat(next ? '<a href="#serial/'.concat(chapter.book.id, "/").concat(next.id, '">').concat(esc(next.title), " →</a>") : '<a href="#serial/' + chapter.book.id + '">全书读完，回到目录 →</a>', "</div></article>");
  updateClozeCounter();
  applyPreferences();
}
const readerBeforeSerial = reader;
reader = function(id) {
  if (SERIAL_CHAPTER_INDEX.has(id)) {
    serialReadView = clozeView === "exercise" ? "exercise" : "read";
    serialRead(id, serialReadView);
  } else {
    delete main.dataset.view;
    readerBeforeSerial(id);
  }
};
const trainingHomeBeforeSerial = trainingHome;
trainingHome = function() {
  return serialJourneyMenu() + '<details class="serial-exam-fold"><summary>选修：六级题型与写译练习</summary><p>准备考前训练时，再展开这里。</p>'.concat(trainingHomeBeforeSerial(), "</details>");
};
const trainingHeaderBeforeSerial = trainingHeader;
trainingHeader = function(section) {
  if (section === "home") return '<div class="page-heading"><div class="serial-kicker">WORDSCENE · RECALL THE STORY</div><h1>沿着线索，把词想起来。</h1><p>故事读过了，记忆也可以有一段旅程。</p></div>';
  return trainingHeaderBeforeSerial(section);
};
function serialJourneyMenu() {
  const books = serialBooks();
  if (!books.length) return '<section class="startup-panel"><h1>正在打开剧情闯关…</h1><p>目录还在加载，请稍候。</p></section>';
  const last = SERIAL_CHAPTER_INDEX.get(state.serial.lastChapter) || SERIAL_CHAPTER_INDEX.get(books[0].chapters[0].id);
  return '<section class="serial-entry"><div><div class="serial-kicker">YOUR NEXT SCENE</div><h2>'.concat(esc(last.book.title), " · ").concat(esc(last.title), '</h2><p>认出线索 → 拼回动作 → 听出关键词。每轮八个词，答错可以再试，没有倒计时。</p></div><a class="button" href="#practice/journey/').concat(last.id, '">进入这一章 →</a></section><div class="serial-section-title"><h2>想回到哪段剧情？</h2><p>先读章节，再闯关，画面会帮你想起英文。</p></div><section class="serial-shelf">').concat(books.map((book) => '<section class="serial-map"><h2>'.concat(esc(book.title), '</h2><div class="serial-journey-links">').concat(serialVolumeDirectory(book, true), "</div></section>")).join(""), "</section>");
}
function serialGameSlots(chapter) {
  return serialFlatten(chapter.cn, (p, paragraph) => wordsceneMatches(p, /\[\[([^|\]]+)\|([^\]]+)\]\]/g).map((m) => ({ id: m[1], meaning: m[2], paragraph })));
}
function serialGameStart(id, mode = "choice", retry = false) {
  const chapter = SERIAL_CHAPTER_INDEX.get(id);
  if (!chapter) {
    serialNotFound();
    return;
  }
  if (!Array.isArray(chapter.cn) || !chapter.cn.length) {
    if (typeof ensureSerialFullData === "function") {
      ensureSerialFullData().then(() => serialGameStart(id, mode, retry)).catch(() => serialNotFound());
      return;
    }
    serialNotFound();
    return;
  }
  const allowed = ["choice", "spell", "listen"];
  if (!allowed.includes(mode)) mode = "choice";
  serialStopAudio();
  let items = retry && (serialGame == null ? void 0 : serialGame.id) === id && serialGame.wrong.length ? serialGame.wrong.map((item) => __spreadValues({}, item)) : shuffle(serialGameSlots(chapter)).slice(0, 8);
  serialGame = { id, mode, items, index: 0, correct: 0, wrong: [], answer: "", answered: false, revealed: false, heard: false, options: [], finished: false, committed: false };
  serialGamePage(id);
  scrollTrainingStart();
}
function serialMaskedScene(chapter, item) {
  const paragraph = chapter.cn[item.paragraph], sentences = paragraph.match(/[^。！？]+[。！？]?/g) || [paragraph], at = sentences.findIndex((p) => p.includes("[[" + item.id + "|"));
  const current = sentences[at] || paragraph, previous = at > 0 ? sentences[at - 1] : "";
  const text = (previous + current).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2").length <= 140 ? previous + current : current;
  return text.split(/(\[\[.*?\]\])/g).map((p) => {
    if (!p.startsWith("[[")) return esc(p);
    const [id, meaning] = p.slice(2, -2).split("|");
    return id === item.id ? '<span class="serial-gap">〔'.concat(esc(meaning), "〕</span>") : esc(meaning);
  }).join("");
}
function serialChoiceOptions(word, item) {
  const result = [...new Map(skillMeaningOptions(__spreadProps(__spreadValues({}, word), { meaning: item.meaning })).filter((w) => w.id === item.id || !isClozeCorrect(clozeExpected(w.id), item.id)).map((w) => [w.id, w])).values()];
  const used = new Set(result.map((w) => w.id));
  for (const candidate of shuffle(BUILTIN_WORDS)) if (result.length < 4 && !used.has(candidate.id) && !isClozeCorrect(clozeExpected(candidate.id), item.id)) {
    result.push(candidate);
    used.add(candidate.id);
  }
  return shuffle(result);
}
function serialGamePage(id) {
  const chapter = SERIAL_CHAPTER_INDEX.get(id);
  if (!chapter) {
    serialNotFound();
    return;
  }
  main.dataset.view = "serial";
  if (!serialGame || serialGame.id !== id) {
    main.innerHTML = '<div class="reader-top"><a class="back-link" href="#practice">← 回到剧情闯关</a><a class="text-link" href="#serial/'.concat(chapter.book.id, "/").concat(id, '">先读本章 →</a></div><section class="serial-session"><div class="serial-kicker">').concat(esc(chapter.book.title), " · CHAPTER ").concat(chapter.number, "</div><h1>").concat(esc(chapter.title), "</h1><p>").concat(esc(chapter.summary), '</p><div class="serial-recap"><b>让画面帮你记忆</b><p>每轮从本章抽八个词。你可以认出英文、自己拼写，或听英文片段找词；答错会给出剧情里的依据。</p></div><div class="serial-game-modes"><button class="button" data-serial-start="choice" data-serial-id="').concat(id, '">找出线索 →</button><button class="button secondary" data-serial-start="spell" data-serial-id="').concat(id, '">拼回关键动作</button><button class="button secondary" data-serial-start="listen" data-serial-id="').concat(id, '">听音寻词</button></div><p class="practice-label">听音使用设备英语语音；不支持时可以选择另外两种方式。</p></section>');
    applyPreferences();
    return;
  }
  const s = serialGame;
  if (s.finished) {
    serialGameResult(chapter);
    return;
  }
  const item = s.items[s.index], word = getWord(item.id);
  if (!s.options.length) s.options = serialChoiceOptions(word, item);
  const modeLabel = { choice: "找出线索", spell: "拼回动作", listen: "听音寻词" }[s.mode];
  main.innerHTML = '<div class="reader-top"><a class="back-link" href="#practice">← 暂别这段剧情</a><a class="text-link" href="#serial/'.concat(chapter.book.id, "/").concat(id, '">翻回本章 →</a></div><section class="serial-session"><div class="serial-kicker">').concat(esc(chapter.book.title), " · ").concat(modeLabel, "</div><h1>").concat(esc(chapter.title), '</h1><div class="quiz-top"><span>线索 ').concat(s.index + 1, " / ").concat(s.items.length, "</span><span>").concat(s.correct, ' 个词已想起来</span></div><div class="serial-route-progress"><i style="width:').concat(s.index / s.items.length * 100, '%"></i></div>').concat(s.mode === "listen" ? '<div class="serial-dialogue"><p>听这一段英文，找出表示「'.concat(esc(item.meaning), '」的词，填写它的原形。</p><button class="button secondary" data-serial-action="game-speak">▷ 听剧情英文</button><p id="serial-speech-status" role="status">先听完整段落，再试着回忆。</p></div>') : '<div class="serial-scene">'.concat(serialMaskedScene(chapter, item), '</div><p class="practice-label">').concat(s.mode === "choice" ? "这段剧情中的动作或线索，对应哪个英文词？" : "把方括号里这个意思对应的英文原形拼回来。", "</p>")).concat(s.mode === "choice" ? '<div class="serial-game-options">'.concat(s.options.map((w, i) => '<button data-serial-answer="'.concat(esc(w.id), '" ').concat(s.answered ? "disabled" : "", ' class="').concat(s.answered ? w.id === item.id ? "correct" : s.answer === w.id ? "wrong" : "" : "", '"><b>').concat("ABCD"[i], '</b><span lang="en">').concat(esc(clozeExpected(w.id)), "</span></button>")).join(""), "</div>") : '<form id="serial-spell-form"><label for="serial-spell-input">英文单词原形</label><input id="serial-spell-input" class="spelling-input" value="'.concat(esc(s.answer), '" maxlength="80" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" ').concat(s.answered ? "disabled" : "", '><button class="button" type="submit" ').concat(s.answered ? "disabled" : "", ">找回这个词 →</button></form>")).concat(s.mode === "listen" ? '<div class="serial-game-modes"><button class="text-link" data-serial-start="choice" data-serial-id="'.concat(id, '">改为找出线索</button><button class="text-link" data-serial-start="spell" data-serial-id="').concat(id, '">改为拼回动作</button></div>') : "").concat(s.answered ? '<div class="serial-game-feedback '.concat(isClozeCorrect(s.answer, item.id) && !s.revealed ? "good" : "bad", '" role="status"><strong>').concat(s.revealed ? "线索已展开，本题不计掌握" : isClozeCorrect(s.answer, item.id) ? "线索找到了" : "先记住这幅画面，下次再试", '</strong><p><b lang="en">').concat(esc(clozeExpected(item.id)), "</b> · ").concat(esc(item.meaning), "</p><p>").concat(esc(chapter.cn[item.paragraph].replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_, id2, meaning) => id2 === item.id ? clozeExpected(id2) + "（" + meaning + "）" : meaning)), '</p><button class="text-link" data-word="').concat(esc(item.id), '">留下联想笔记 ↗</button></div><button class="button" data-serial-action="game-next">').concat(s.index + 1 === s.items.length ? "看看这次记住了什么" : "继续找线索", " →</button>") : '<button class="text-link" data-serial-action="game-reveal">暂时想不起，看看这条线索</button>', "</section>");
  applyPreferences();
}
function serialGameAnswer(value, reveal = false) {
  const s = serialGame;
  if (!s || s.answered || s.finished) return;
  if (!reveal && s.mode === "listen" && !s.heard) {
    toast("先听完这段英文，再回忆单词。");
    return;
  }
  if (!reveal && !String(value).trim()) {
    toast("先试着填写一个词，或者展开线索。");
    return;
  }
  if (!reveal && s.mode === "choice" && !s.options.some((w) => w.id === value)) return;
  const item = s.items[s.index], correct = !reveal && isClozeCorrect(value, item.id);
  s.answer = String(value || "");
  s.answered = true;
  s.revealed = reveal;
  if (correct) s.correct++;
  else s.wrong.push(item);
  if (!reveal) recordInSkills(item.id, correct, [s.mode === "choice" ? "read" : s.mode === "listen" ? "listen" : "spell"]);
  serialStopAudio();
  serialGamePage(s.id);
}
function serialGameResult(chapter) {
  const s = serialGame, next = chapter.book.chapters[chapter.index + 1];
  if (!s.committed) {
    const key = s.id + ":" + s.mode, previous = state.serial.runs[key];
    state.serial.runs[key] = { correct: s.correct, total: s.items.length, attempts: ((previous == null ? void 0 : previous.attempts) || 0) + 1, updatedAt: Date.now() };
    s.committed = true;
    save();
  }
  main.innerHTML = '<section class="serial-session"><div class="serial-kicker">A SCENE TO REMEMBER</div><h1>你找回了 '.concat(s.correct, " 个词。</h1><p>").concat(esc(chapter.book.title), " · ").concat(esc(chapter.title), " · 本轮 ").concat(s.correct, " / ").concat(s.items.length, '</p><div class="serial-recap"><b>故事会继续，词也会再见面。</b><p>').concat(s.wrong.length ? "尚未想起的词留在这里，答错的词也已经进入相应复习队列。展开过的线索不增加词汇掌握。" : "这一轮词汇已写入对应复习队列，过几天再来，让记忆更牢。", "</p></div>").concat(s.wrong.length ? '<div class="serial-chips">'.concat(s.wrong.map((w) => '<button class="serial-chip" data-word="'.concat(esc(w.id), '">').concat(esc(clozeExpected(w.id)), " · ").concat(esc(w.meaning), "</button>")).join(""), "</div>") : "", '<div class="hero-actions">').concat(s.wrong.length ? '<button class="button" data-serial-action="game-retry">再走一遍这些线索 →</button>' : "", '<button class="button secondary" data-serial-start="').concat(s.mode, '" data-serial-id="').concat(s.id, '">换八个词再练</button><a class="text-link" href="').concat(next ? "#serial/" + chapter.book.id + "/" + next.id : "#serial/" + chapter.book.id, '">').concat(next ? "读下一章" : "回到全书目录", ' →</a></div><div class="serial-game-modes"><button class="text-link" data-serial-start="choice" data-serial-id="').concat(s.id, '">找出线索</button><button class="text-link" data-serial-start="spell" data-serial-id="').concat(s.id, '">拼回动作</button><button class="text-link" data-serial-start="listen" data-serial-id="').concat(s.id, '">听音寻词</button></div></section>');
  applyPreferences();
}
function serialStopAudio() {
  serialSpeechGeneration++;
  serialAudioActive = false;
  serialUtterance = null;
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}
function serialAudioStatus(message) {
  const el = document.getElementById("serial-speech-status");
  if (el) el.textContent = message;
}
function serialSpeak(text, heard) {
  serialStopAudio();
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    serialAudioStatus("这个浏览器暂不支持朗读。可切换“找出线索”或“拼回动作”。");
    return;
  }
  const chunks = listeningChunks(listeningPlain(text));
  if (!chunks.length) return;
  const generation = serialSpeechGeneration;
  serialAudioActive = true;
  const voices = speechSynthesis.getVoices(), voice = voices.find((v) => /^en[-_]/i.test(v.lang));
  const play = (index) => {
    if (generation !== serialSpeechGeneration) return;
    if (index >= chunks.length) {
      serialAudioActive = false;
      serialAudioStatus("本段已听完，可以回忆关键词了。");
      if (heard) heard();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    serialUtterance = utterance;
    utterance.lang = (voice == null ? void 0 : voice.lang) || "en-US";
    if (voice) utterance.voice = voice;
    utterance.rate = state.preferences.rate || 0.85;
    utterance.onend = () => play(index + 1);
    utterance.onerror = () => {
      if (generation !== serialSpeechGeneration) return;
      serialAudioActive = false;
      serialAudioStatus("朗读未能完成，请重试，或切换到阅读回忆。");
    };
    serialAudioStatus("正在听英文片段 ".concat(index + 1, " / ").concat(chunks.length, "…"));
    speechSynthesis.speak(utterance);
  };
  play(0);
}
const updateNavBeforeSerial = updateNav;
updateNav = function() {
  updateNavBeforeSerial();
  const route = location.hash.split("/")[0].slice(1);
  if (["serial", "archive"].includes(route)) {
    document.querySelectorAll("[data-nav]").forEach((el) => el.classList.toggle("active", el.dataset.nav === "library"));
  }
};
const renderBeforeSerial = render;
render = function() {
  if (!main) return;
  const [route, book, id] = location.hash.slice(1).split("/");
  serialStopAudio();
  delete main.dataset.view;
  if (!route || route === "library" || route === "serial" || route === "archive" || route === "practice" && book === "journey") {
    clearInterval(trainingClock);
    if (typeof listeningStop === "function") listeningStop();
    if (wordDialog && wordDialog.close) wordDialog.close();
    if (utilityDialog && utilityDialog.close) utilityDialog.close();
    document.body.classList.remove("focus-mode");
    if (!route || route === "library") library();
    else if (route === "serial") {
      const c = SERIAL_CHAPTER_INDEX.get(id);
      if (id) {
        if ((c == null ? void 0 : c.book.id) === book) serialRead(id);
        else serialNotFound();
      } else serialBookPage(book);
    } else if (route === "archive") {
      libraryBeforeSerial();
      const heroTitle = main.querySelector(".hero h1"), heroCopy = main.querySelector(".hero p"), shelf = main.querySelector("#shelf-heading");
      if (heroTitle) heroTitle.innerHTML = "熟悉的词，<br>再遇见<em>新语境。</em>";
      if (heroCopy) heroCopy.innerHTML = "这里保留完整词汇覆盖的短篇语境。<br>连续主线小说在故事书架，旧学习记录可以继续使用。";
      if (shelf) shelf.textContent = "拓展语境";
    } else serialGamePage(id);
    updateNav();
    return;
  }
  renderBeforeSerial();
  if (route === "units") serialEnhanceVocabularyLinks();
};
const progressBeforeSerial = progress;
progress = function() {
  progressBeforeSerial();
  main.insertAdjacentHTML("afterbegin", '<section class="serial-entry"><div><div class="serial-kicker">YOUR STORY JOURNEY</div><h2>已经走过 '.concat(state.serial.completed.length, " / ").concat(SERIAL_TOTAL_CHAPTERS, " 章</h2><p>").concat(Object.keys(state.serial.runs).length, " 项剧情回忆记录 · ").concat(state.serial.bookmarks.length, " 个主线书签</p>").concat(state.serial.bookmarks.map((id) => {
    const c = SERIAL_CHAPTER_INDEX.get(id);
    return '<a class="text-link" href="#serial/'.concat(c.book.id, "/").concat(id, '">').concat(esc(c.book.title), " · ").concat(esc(c.title), " ↗</a>");
  }).join(""), '</div><a class="button secondary" href="#library">继续故事 →</a></section>'));
};
const reviewBeforeSerial = review;
review = function() {
  reviewBeforeSerial();
  const entry = main.querySelector(".training-entry");
  if (entry) {
    entry.querySelector("h2").textContent = "回到小说里，再遇见这些词";
    entry.querySelector("p").textContent = "从刚读过的章节开始，找出线索、拼回动作、听音寻词。";
    entry.querySelector("a").textContent = "进入剧情闯关 →";
  }
};
const wordModalBeforeSerial = wordModal;
wordModal = function(id) {
  var _a2, _b, _c, _d;
  wordModalBeforeSerial(id);
  const refs = SERIAL_WORD_CHAPTERS.get(id) || [], current = SERIAL_CHAPTER_INDEX.get(location.hash.slice(1).split("/")[2]);
  const reference = refs.find((r) => r.id === (current == null ? void 0 : current.id)) || refs[0], chapter = reference && SERIAL_CHAPTER_INDEX.get(reference.id);
  if (!reference || !chapter) return;
  (_a2 = wordDialog.querySelector(".context-box")) == null ? void 0 : _a2.remove();
  if (Array.isArray(chapter.cn) && reference.paragraph >= 0 && chapter.cn[reference.paragraph]) {
    (_b = wordDialog.querySelector(".word-meaning")) == null ? void 0 : _b.insertAdjacentHTML("beforebegin", '<div class="context-box"><small>'.concat(esc(chapter.book.title), " · 第 ").concat(chapter.number, " 章 · ").concat(esc(chapter.title), "</small><p>").concat(esc(chapter.cn[reference.paragraph].replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_, key, meaning2) => key === id ? clozeExpected(key) + "（" + meaning2 + "）" : meaning2)), "</p></div>"));
    const meaning = wordDialog.querySelector(".word-meaning");
    if (meaning && reference.meaning) meaning.textContent = reference.meaning;
    const example = wordDialog.querySelector(".word-example");
    if (example && Array.isArray(chapter.en)) example.textContent = listeningPlain(chapter.en[reference.paragraph] || "");
  }
  if (clozeExpected(id) !== id) {
    const title = wordDialog.querySelector(".english-title");
    if (title) title.textContent = clozeExpected(id);
    (_c = wordDialog.querySelector(".word-meaning")) == null ? void 0 : _c.insertAdjacentHTML("afterend", '<p class="practice-label">请记标准拼写 '.concat(esc(clozeExpected(id)), "。</p>"));
  }
  (_d = wordDialog.querySelector(".word-source")) == null ? void 0 : _d.insertAdjacentHTML("beforebegin", '<details class="serial-word-sources" open><summary>在连续长篇里遇见这个词 · '.concat(refs.length, ' 章</summary><div class="related-story-links">').concat(refs.slice(0, 12).map((r) => '<a href="#serial/'.concat(r.book, "/").concat(r.id, '">《').concat(esc(r.bookTitle), "》· 第 ").concat(r.number, " 章 · ").concat(esc(r.title), " ↗</a>")).join(""), "</div></details>"));
};
function serialEnhanceVocabularyLinks() {
  main.querySelectorAll(".word-table tbody tr,.progress-card").forEach((row) => {
    var _a2;
    const word = row.querySelector(".table-word[data-word]"), reference = word && ((_a2 = SERIAL_WORD_CHAPTERS.get(word.dataset.word)) == null ? void 0 : _a2[0]);
    if (!reference) return;
    if (clozeExpected(word.dataset.word) !== word.dataset.word) word.textContent = clozeExpected(word.dataset.word);
    const link = row.querySelector('a[href^="#story/"]');
    if (link) {
      link.href = "#serial/" + reference.book + "/" + reference.id;
      link.textContent = "《" + reference.bookTitle + "》· 第 " + reference.number + " 章 ↗";
      link.title = reference.title;
    }
  });
}
const renderWordListBeforeSerial = renderWordList;
renderWordList = function() {
  const query = notebookSearch;
  if (query.trim().toLowerCase() === "up-to-date") notebookSearch = "uptodate";
  try {
    renderWordListBeforeSerial();
  } finally {
    notebookSearch = query;
  }
  serialEnhanceVocabularyLinks();
};
document.addEventListener("click", (event) => {
  const b = event.target.closest("[data-serial-action],[data-serial-view],[data-serial-start],[data-serial-answer],[data-serial-speak]");
  if (!b) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (b.dataset.serialView) {
    serialStopAudio();
    serialRead(serialReadId, b.dataset.serialView);
    scrollTrainingStart();
    return;
  }
  if (b.dataset.serialStart) {
    serialGameStart(b.dataset.serialId, b.dataset.serialStart);
    return;
  }
  if (b.dataset.serialAnswer) {
    serialGameAnswer(b.dataset.serialAnswer);
    return;
  }
  if (b.dataset.serialSpeak !== void 0) {
    const chapter = SERIAL_CHAPTER_INDEX.get(b.dataset.serialId);
    serialSpeak(chapter.en[Number(b.dataset.serialSpeak)]);
    return;
  }
  const action = b.dataset.serialAction, id = b.dataset.serialId, s = serialGame;
  if (action === "focus") {
    document.body.classList.toggle("focus-mode");
    b.textContent = document.body.classList.contains("focus-mode") ? "退出专注" : "专注阅读";
  } else if (action === "bookmark") {
    state.serial.bookmarks = state.serial.bookmarks.includes(id) ? state.serial.bookmarks.filter((x) => x !== id) : [...state.serial.bookmarks, id];
    save();
    serialRead(id);
  } else if (action === "complete") {
    if (!state.serial.completed.includes(id)) state.serial.completed.push(id);
    save();
    serialRead(id);
    toast("本章已读，词汇掌握单独记录。");
  } else if (action === "stop") {
    serialStopAudio();
    serialAudioStatus("朗读已停止。");
  } else if (action === "game-reveal") serialGameAnswer("", true);
  else if (action === "game-next" && (s == null ? void 0 : s.answered) && !s.finished) {
    serialStopAudio();
    s.index++;
    s.answered = false;
    s.answer = "";
    s.revealed = false;
    s.heard = false;
    s.options = [];
    s.finished = s.index >= s.items.length;
    serialGamePage(s.id);
    scrollTrainingStart();
  } else if (action === "game-retry" && (s == null ? void 0 : s.finished)) serialGameStart(s.id, s.mode, true);
  else if (action === "game-speak" && s && !s.answered && !s.finished) {
    const chapter = SERIAL_CHAPTER_INDEX.get(s.id), item = s.items[s.index];
    s.heard = false;
    serialSpeak(chapter.en[item.paragraph], () => {
      if (serialGame === s && !s.answered) s.heard = true;
    });
  }
}, true);
document.addEventListener("input", (event) => {
  if (event.target.id === "serial-spell-input" && serialGame && !serialGame.answered) serialGame.answer = event.target.value;
});
document.addEventListener("submit", (event) => {
  if (event.target.id === "serial-spell-form") {
    event.preventDefault();
    event.stopImmediatePropagation();
    serialGameAnswer(document.getElementById("serial-spell-input").value);
  }
}, true);
window.addEventListener("pagehide", serialStopAudio);
document.addEventListener("visibilitychange", () => {
  if (document.hidden && serialAudioActive) {
    serialStopAudio();
    serialAudioStatus("播放已暂停，回到页面后可重新听。");
  }
});
const serialAboutButton = document.getElementById("about-button");
if (serialAboutButton) {
  serialAboutButton.replaceWith(serialAboutButton.cloneNode(true));
  document.getElementById("about-button").addEventListener("click", () => utility("词间 · 让故事留下记忆", "<p>两部长篇连续小说，共".concat(SERIAL_TOTAL_CHAPTERS, "章，按分卷顺序阅读。先读懂人物、动作和线索，再通过剧情填空与八词闯关回忆英文。展开答案与标记读完不增加词汇掌握。</p><p>长篇正文中已有").concat(SERIAL_COVERED_IDS.size, "/").concat(BUILTIN_WORDS.length, '个词的中英语境；每个词可从完整词库跳回所在章节。原300篇只作为额外拓展保留。原来的词汇记录、收藏、笔记和短篇书签都保留；小说进度单独保存。</p><p>听力使用设备英语语音。进度保存在当前浏览器，可在完整词库页导出备份。词表来源与许可见 <a href="SOURCES.md" target="_blank" rel="noopener">内容来源 ↗</a>。</p>')));
}
;
(() => {
  var _a2;
  function syncNavigation() {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.classList.contains("active")) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    const badge = document.getElementById("nav-due");
    if (badge) badge.hidden = Number(badge.textContent) === 0;
  }
  function enhanceControls() {
    var _a3;
    const route = location.hash.slice(1).split("/")[0] || "library";
    document.body.dataset.view = route;
    document.querySelectorAll(".coverage-panel").forEach((panel) => {
      const paragraph = panel.querySelector("div:first-child p");
      const lineBreak = paragraph == null ? void 0 : paragraph.querySelector("br");
      if (lineBreak && !paragraph.querySelector(".coverage-reference")) {
        const reference = document.createElement("span");
        reference.className = "coverage-reference";
        lineBreak.after(reference);
        while (reference.nextSibling) reference.append(reference.nextSibling);
        reference.prepend(lineBreak);
      }
      const unitLink = panel.querySelector('a[href="#units"]');
      if (unitLink && !unitLink.querySelector(".unit-label-mobile")) unitLink.innerHTML = '<span class="unit-label-full">按单元学习全部词 →</span><span class="unit-label-mobile">学习单元 →</span>';
    });
    document.querySelectorAll(".search input").forEach((input) => {
      input.setAttribute("enterkeyhint", "search");
      input.setAttribute("autocapitalize", "none");
      input.setAttribute("autocorrect", "off");
    });
    (_a3 = document.getElementById("spell-input")) == null ? void 0 : _a3.setAttribute("enterkeyhint", "done");
    document.querySelectorAll("[data-category],[data-notebook],[data-mode],[data-reading]").forEach((button) => button.setAttribute("aria-pressed", String(button.classList.contains("active"))));
    const table = document.querySelector(".word-table");
    if (table) {
      const headings = [...table.querySelectorAll("thead th")];
      headings.forEach((heading, index) => {
        heading.id = "word-column-" + index;
        heading.scope = "col";
      });
      table.querySelectorAll("tbody tr").forEach((row) => [...row.children].forEach((cell, index) => cell.setAttribute("headers", "word-column-" + index)));
    }
    syncNavigation();
  }
  const existingNav = updateNav;
  updateNav = function() {
    existingNav();
    syncNavigation();
  };
  for (const method of ["render", "reader", "quizPage", "renderWordList"]) {
    const existing = window[method];
    if (typeof existing !== "function") continue;
    window[method] = function(...args) {
      const result = existing.apply(this, args);
      enhanceControls();
      return result;
    };
  }
  const originalPreferences = applyPreferences;
  applyPreferences = function() {
    var _a3;
    originalPreferences();
    (_a3 = document.querySelector('meta[name="theme-color"]')) == null ? void 0 : _a3.setAttribute("content", state.preferences.night ? "#192722" : "#f4f0e8");
  };
  function syncDialogState() {
    document.body.classList.toggle("dialog-open", Boolean(wordDialog && wordDialog.open || utilityDialog && utilityDialog.open));
  }
  if (typeof MutationObserver === "function") {
    const dialogObserver = new MutationObserver(syncDialogState);
    [wordDialog, utilityDialog].forEach((dialog) => {
      if (dialog) dialogObserver.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    });
  }
  let restingHeight = window.innerHeight;
  function syncKeyboard() {
    var _a3, _b;
    const editable = (_a3 = document.activeElement) == null ? void 0 : _a3.matches('input:not([type="file"]),textarea');
    const visibleHeight = ((_b = window.visualViewport) == null ? void 0 : _b.height) || window.innerHeight;
    if (!editable) restingHeight = window.innerHeight;
    document.documentElement.style.setProperty("--vvh", visibleHeight + "px");
    document.body.classList.toggle("keyboard-open", Boolean(editable && restingHeight - visibleHeight > 150));
    if (editable && restingHeight - visibleHeight > 120) {
      const target = document.activeElement;
      setTimeout(() => {
        if (!target || typeof target.scrollIntoView !== "function") return;
        try {
          target.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
        } catch (_) {
          try {
            target.scrollIntoView(true);
          } catch (__) {
          }
        }
      }, 50);
    }
  }
  document.addEventListener("focusin", syncKeyboard);
  document.addEventListener("focusout", () => setTimeout(syncKeyboard, 80));
  (_a2 = window.visualViewport) == null ? void 0 : _a2.addEventListener("resize", syncKeyboard);
  window.addEventListener("resize", syncKeyboard);
  window.addEventListener("orientationchange", () => {
    restingHeight = window.innerHeight;
    syncKeyboard();
  });
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category],[data-notebook]");
    if (button) {
      enhanceControls();
      button.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
    }
  });
  enhanceControls();
  syncDialogState();
  applyPreferences();
})();
;
(function() {
  var assetVersions = window.WORDSCENE_ASSET_VERSIONS || {};
  var pending = {};
  var bootFinished = false;
  function versioned(path) {
    var file = path.split("/").pop();
    var version = assetVersions[file] || assetVersions[path] || "";
    return version ? path + (path.indexOf("?") >= 0 ? "&" : "?") + "v=" + version : path;
  }
  function loadScript(path) {
    var src = versioned(path);
    if (pending[src]) return pending[src];
    pending[src] = new Promise(function(resolve, reject) {
      var existing = document.querySelector('script[data-wordscene-src="' + src + '"]');
      if (existing) {
        resolve();
        return;
      }
      var script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.dataset.wordsceneSrc = src;
      script.onload = function() {
        resolve();
      };
      script.onerror = function() {
        pending[src] = null;
        reject(new Error("无法加载 " + path));
      };
      document.head.appendChild(script);
    });
    return pending[src];
  }
  function showDataLoading(message) {
    var main2 = document.getElementById("main");
    if (!main2) return;
    var panel = document.getElementById("data-loading-panel");
    if (!panel) {
      panel = document.createElement("div");
      panel.id = "data-loading-panel";
      panel.className = "startup-panel data-loading-panel";
      panel.setAttribute("aria-live", "polite");
      panel.innerHTML = "<h1></h1><p></p>";
    }
    panel.querySelector("h1").textContent = message || "正在加载内容…";
    panel.querySelector("p").textContent = "首次打开会下载词库或故事正文，完成后即可继续。学习记录不会丢失。";
    if (!panel.parentNode) main2.insertAdjacentElement("afterbegin", panel);
    panel.hidden = false;
  }
  function hideDataLoading() {
    var panel = document.getElementById("data-loading-panel");
    if (panel) panel.hidden = true;
  }
  function refreshIndexes() {
    if (typeof refreshWordIndex === "function") refreshWordIndex();
  }
  function rebuildAfterChunks() {
    var dict = globalThis.DICTIONARY_WORDS || [];
    var expanded = globalThis.EXPANDED_STORIES || [];
    var cloze = globalThis.CLOZE_STORIES || [];
    if (!expanded.length || !cloze.length) return false;
    assembleWordsceneData(expanded, cloze, dict);
    refreshIndexes();
    return true;
  }
  function markReady() {
    bootFinished = true;
    var panel = document.getElementById("startup-panel");
    if (panel && panel.parentNode) panel.remove();
    if (typeof wordsceneMarkReady === "function") wordsceneMarkReady();
  }
  function prefetch(path) {
    var link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "script";
    link.href = versioned(path);
    document.head.appendChild(link);
  }
  window.ensureCatalogData = function() {
    if (typeof WORDSCENE_CATALOG !== "undefined" && WORDSCENE_CATALOG && WORDSCENE_CATALOG.stories && WORDSCENE_CATALOG.stories.length) {
      if (!(STORIES && STORIES.length) && typeof assembleFromCatalog === "function") assembleFromCatalog();
      return Promise.resolve();
    }
    showDataLoading("正在打开拓展语境…");
    return loadScript("catalog.js").then(function() {
      if (typeof assembleFromCatalog === "function") assembleFromCatalog();
      refreshIndexes();
      hideDataLoading();
    }).catch(function(error) {
      hideDataLoading();
      if (typeof toast === "function") toast(error.message || "目录加载失败");
      throw error;
    });
  };
  window.ensureSerialIndex = function() {
    if (typeof SERIAL_INDEX !== "undefined" && SERIAL_INDEX && SERIAL_INDEX.length) {
      if (typeof buildSerialIndexes === "function") buildSerialIndexes();
      return Promise.resolve();
    }
    showDataLoading("正在打开故事书架…");
    return loadScript("serial-index.js").then(function() {
      if (typeof buildSerialIndexes === "function") buildSerialIndexes();
      hideDataLoading();
    }).catch(function(error) {
      hideDataLoading();
      if (typeof toast === "function") toast(error.message || "书架加载失败");
      throw error;
    });
  };
  window.ensureSerialFullData = function() {
    var books = typeof SERIAL_NOVELS !== "undefined" ? SERIAL_NOVELS : null;
    if (books && books.length && books[0].chapters && books[0].chapters[0] && Array.isArray(books[0].chapters[0].cn)) {
      if (typeof buildSerialIndexes === "function") buildSerialIndexes();
      return Promise.resolve();
    }
    showDataLoading("正在打开长篇正文…");
    return loadScript("serial-data.js").then(function() {
      if (typeof buildSerialIndexes === "function") buildSerialIndexes();
      hideDataLoading();
    }).catch(function(error) {
      hideDataLoading();
      if (typeof toast === "function") toast(error.message || "长篇正文加载失败");
      throw error;
    });
  };
  window.ensureTrainingData = function() {
    if (typeof CONTEXT_PRACTICE !== "undefined" && CONTEXT_PRACTICE && CONTEXT_PRACTICE.length) {
      if (typeof buildTrainingIndexes === "function") buildTrainingIndexes();
      return Promise.resolve();
    }
    showDataLoading("正在加载实战练习…");
    return loadScript("training-data.js").then(function() {
      if (typeof buildTrainingIndexes === "function") buildTrainingIndexes();
      hideDataLoading();
    }).catch(function(error) {
      hideDataLoading();
      if (typeof toast === "function") toast(error.message || "练习内容加载失败");
      throw error;
    });
  };
  window.ensureListeningQuestions = function() {
    if (typeof LISTENING_QUESTIONS !== "undefined" && LISTENING_QUESTIONS && LISTENING_QUESTIONS.length) {
      if (typeof buildListeningQuestionIndex === "function") buildListeningQuestionIndex();
      return Promise.resolve();
    }
    showDataLoading("正在加载听力题…");
    return loadScript("listening-questions.js").then(function() {
      if (typeof buildListeningQuestionIndex === "function") buildListeningQuestionIndex();
      hideDataLoading();
    }).catch(function(error) {
      hideDataLoading();
      if (typeof toast === "function") toast(error.message || "听力题加载失败");
      throw error;
    });
  };
  window.ensureStoryData = function(storyId) {
    var story = typeof getStory === "function" ? getStory(storyId) : STORY_INDEX.get(storyId);
    var category2 = story && story.category;
    if (!category2 && typeof WORDSCENE_CATALOG !== "undefined" && WORDSCENE_CATALOG) {
      var entry = WORDSCENE_CATALOG.stories.find(function(s) {
        return s.id === storyId;
      });
      category2 = entry && entry.category;
    }
    var key = category2 === "修仙志" ? "cultivation" : category2 === "悬疑案" ? "mystery" : null;
    var tasks = [];
    if (key && !WORDSCENE_DATA_STATE[key]) {
      tasks.push(loadScript("data/stories-" + key + ".js").then(function() {
        mergeStoryChunk(globalThis["WORDSCENE_CHUNK_" + key]);
        WORDSCENE_DATA_STATE[key] = true;
      }));
    }
    if (!tasks.length && story && story._shell && key) {
      tasks.push(loadScript("data/stories-" + key + ".js").then(function() {
        mergeStoryChunk(globalThis["WORDSCENE_CHUNK_" + key]);
        WORDSCENE_DATA_STATE[key] = true;
      }));
    }
    if (!tasks.length && story && !story._shell) return Promise.resolve(story);
    if (!tasks.length) return Promise.resolve(story);
    showDataLoading("正在打开故事…");
    return Promise.all(tasks).then(function() {
      rebuildAfterChunks();
      hideDataLoading();
      return STORY_INDEX.get(storyId);
    }).catch(function(error) {
      hideDataLoading();
      if (typeof toast === "function") toast(error.message || "故事加载失败");
      throw error;
    });
  };
  window.ensureDictionaryData = function() {
    if (WORDSCENE_DATA_STATE.dictionary && globalThis.DICTIONARY_WORDS && globalThis.DICTIONARY_WORDS.length) {
      return Promise.resolve();
    }
    showDataLoading("正在加载完整词库…");
    return loadScript("dictionary.js").then(function() {
      WORDSCENE_DATA_STATE.dictionary = true;
      var expanded = globalThis.EXPANDED_STORIES || [];
      var cloze = globalThis.CLOZE_STORIES || [];
      if (expanded.length && cloze.length) {
        assembleWordsceneData(expanded, cloze, globalThis.DICTIONARY_WORDS);
      } else if (WORDSCENE_DATA_STATE.shell) {
        var merged = new Map((globalThis.DICTIONARY_WORDS || []).map(function(w) {
          return [w.id, Object.assign({}, w)];
        }));
        EXTRA_WORDS.forEach(function(w) {
          if (!merged.has(w.id)) merged.set(w.id, w);
        });
        STORY_WORDS.forEach(function(w) {
          var old = merged.get(w.id) || {};
          merged.set(w.id, Object.assign({}, old, w, {
            dictionaryMeaning: old.dictionaryMeaning || old.meaning || w.meaning,
            storyIds: [].concat(old.storyIds || [], w.storyId ? [w.storyId] : []).filter(function(v, i, a) {
              return a.indexOf(v) === i;
            })
          }));
        });
        BUILTIN_WORDS = [...merged.values()];
        BUILTIN_INDEX = new Map(BUILTIN_WORDS.map(function(w) {
          return [w.id, w];
        }));
        COVERAGE.reference = (globalThis.DICTIONARY_WORDS || []).length;
        COVERAGE.total = BUILTIN_WORDS.length;
        COVERAGE.contextual = (globalThis.DICTIONARY_WORDS || []).filter(function(w) {
          return CONTEXTUAL_IDS.has(w.id);
        }).length;
        COVERAGE.coveredTotal = BUILTIN_WORDS.filter(function(w) {
          return CONTEXTUAL_IDS.has(w.id);
        }).length;
      }
      refreshIndexes();
      hideDataLoading();
    }).catch(function(error) {
      hideDataLoading();
      if (typeof toast === "function") toast(error.message || "词库加载失败");
      throw error;
    });
  };
  window.ensureAllStoryData = function() {
    return ensureCatalogData().then(function() {
      var tasks = [];
      if (!WORDSCENE_DATA_STATE.cultivation) {
        tasks.push(loadScript("data/stories-cultivation.js").then(function() {
          mergeStoryChunk(globalThis.WORDSCENE_CHUNK_cultivation);
          WORDSCENE_DATA_STATE.cultivation = true;
        }));
      }
      if (!WORDSCENE_DATA_STATE.mystery) {
        tasks.push(loadScript("data/stories-mystery.js").then(function() {
          mergeStoryChunk(globalThis.WORDSCENE_CHUNK_mystery);
          WORDSCENE_DATA_STATE.mystery = true;
        }));
      }
      if (!tasks.length) {
        if (WORDSCENE_DATA_STATE.shell) rebuildAfterChunks();
        return;
      }
      showDataLoading("正在加载全部故事…");
      return Promise.all(tasks).then(function() {
        rebuildAfterChunks();
        hideDataLoading();
      });
    });
  };
  function wrapAsyncRoute() {
    var originalRender = window.render;
    window.render = function() {
      var hash = location.hash.slice(1);
      var parts = hash.split("/");
      var route = parts[0] || "library";
      var section = parts[1];
      var id = parts[2] || parts[1];
      var chain = Promise.resolve();
      if (route === "serial" && parts[2]) {
        chain = ensureSerialFullData();
      } else if (route === "serial" || route === "library" || route === "") {
        chain = ensureSerialIndex();
      } else if (route === "practice" && section === "journey") {
        chain = ensureSerialFullData();
      } else if (route === "practice" && section && section !== "home") {
        chain = ensureTrainingData();
      } else if (route === "practice") {
        chain = ensureSerialIndex();
      } else if (route === "archive") {
        chain = ensureCatalogData();
      } else if (route === "story" && id) {
        chain = ensureCatalogData().then(function() {
          return ensureStoryData(id);
        });
      } else if (route === "notebook" || route === "units" || route === "review" || route === "quiz" || route === "progress") {
        chain = ensureDictionaryData().then(function() {
          if (route === "progress" || route === "review") return ensureAllStoryData();
        });
      }
      return chain.then(function() {
        try {
          originalRender();
        } catch (error) {
          console.error(error);
          throw error;
        }
        markReady();
      }).catch(function(error) {
        showDataLoading("内容加载失败");
        var el = document.getElementById("data-loading-panel");
        if (el) el.querySelector("p").textContent = error && error.message || "请检查网络后重试，或点击顶部重新加载。";
      });
    };
    var originalReader = window.reader;
    window.reader = function(id) {
      if (typeof SERIAL_CHAPTER_INDEX !== "undefined" && SERIAL_CHAPTER_INDEX.has(id)) {
        return ensureSerialFullData().then(function() {
          originalReader(id);
        });
      }
      return ensureCatalogData().then(function() {
        return ensureStoryData(id);
      }).then(function() {
        originalReader(id);
      });
    };
    var originalWordModal = window.wordModal;
    window.wordModal = function(id) {
      ensureDictionaryData().then(function() {
        originalWordModal(id);
      }).catch(function() {
        originalWordModal(id);
      });
    };
  }
  function boot() {
    if (!document.getElementById("main")) {
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
      else setTimeout(boot, 0);
      return;
    }
    try {
      wrapAsyncRoute();
      window.render();
    } catch (error) {
      console.error(error);
      showDataLoading("内容加载失败");
      var el = document.getElementById("data-loading-panel");
      if (el) el.querySelector("p").textContent = error && error.message || "请检查网络后重试，或点击顶部重新加载。";
    }
    setTimeout(function() {
      prefetch("serial-data.js");
      prefetch("catalog.js");
    }, 1200);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
