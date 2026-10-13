var LISTENING_QUESTIONS = [
  {
    "id": "cloud-gate",
    "questions": [
      {
        "type": "detail",
        "prompt": "What happened when the third bell rang?",
        "options": [
          "A senior left the stairs.",
          "A glow appeared under his palm.",
          "His daily practice was cancelled.",
          "A disciple handed him a sword."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "When the third bell rang, a faint glow appeared beneath his palm, as if spiritual fire had awakened.",
          "focusQuote": "When the third bell rang, a faint glow appeared beneath his palm, as if spiritual fire had awakened."
        },
        "explanation": "第三声钟响时掌下出现微光；师兄阻路和练习调整属于后面的情节。"
      },
      {
        "type": "detail",
        "prompt": "How did Shen Yan respond to the claim that he was lucky?",
        "options": [
          "He challenged the elders publicly.",
          "He stopped practising for a day.",
          "He trained longer without arguing.",
          "He asked the senior to explain."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Shen Yan did not argue. He extended his daily practice and used perseverance to temper his impatient mind.",
          "focusQuote": "He extended his daily practice and used perseverance to temper his impatient mind."
        },
        "explanation": "他没有争辩，而是延长每日练习；其余选项均未发生。"
      },
      {
        "type": "main",
        "prompt": "What best describes Shen Yan's progress?",
        "options": [
          "Persistent practice followed by a calm response.",
          "A sudden reward without further effort.",
          "Public praise followed by an easy victory.",
          "Avoiding a challenge by hiding from others."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "At the end of the stairs stood a formidable senior who tried to block his way. Shen Yan sensed a power he meant to conceal, stayed calm, and finally made a breakthrough into a new realm.",
          "focusQuote": "Shen Yan sensed a power he meant to conceal, stayed calm, and finally made a breakthrough into a new realm."
        },
        "explanation": "结合持续练习与最终冷静突破，进步来自积累和应对；不是单靠运气或躲避。"
      }
    ]
  },
  {
    "id": "ruins-lamp",
    "questions": [
      {
        "type": "detail",
        "prompt": "When could the entrance to the ruins be seen?",
        "options": [
          "Only after the lamp was lit.",
          "Whenever the wall was repaired.",
          "Only during an eclipse.",
          "Whenever a companion arrived."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The entrance to the ruins appeared only during an eclipse.",
          "focusQuote": "The entrance to the ruins appeared only during an eclipse."
        },
        "explanation": "入口只在日蚀或月蚀期间出现；原文未说点灯或修墙能开启入口。"
      },
      {
        "type": "detail",
        "prompt": "Where did the wet footprints lead?",
        "options": [
          "Towards the forbidden chamber.",
          "Back to the broken wall.",
          "Into the empty lamp.",
          "Towards the entrance outside."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Her companion seemed to vanish without a trace, leaving wet footprints that led towards the forbidden chamber.",
          "focusQuote": "Her companion seemed to vanish without a trace, leaving wet footprints that led towards the forbidden chamber."
        },
        "explanation": "同伴消失后，湿脚印朝禁室延伸；不是回到入口。"
      },
      {
        "type": "inference",
        "prompt": "What does Lin Zhao's response to the second breath suggest?",
        "options": [
          "She trusted the lamp's promises.",
          "She wanted to summon it quickly.",
          "She ignored the unusual sound.",
          "She preferred investigation before action."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "She heard a second breath inside the lamp. It felt like an omen. Rather than summon whatever waited there, she decided to investigate the dust and the broken seals.",
          "focusQuote": "Rather than summon whatever waited there, she decided to investigate the dust and the broken seals."
        },
        "explanation": "她没有立即召唤，而是检查灰尘与破封，体现先查再行动；不是忽视异响。"
      }
    ]
  },
  {
    "id": "moon-sword",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did Gu Ting examine under the moon?",
        "options": [
          "Two pieces of broken stone.",
          "Two marks left by swords.",
          "Two copies of an old vow.",
          "Two different opponents' coats."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "Under the moon, Gu Ting tried to discern the difference between two sword marks.",
          "focusQuote": "Under the moon, Gu Ting tried to discern the difference between two sword marks."
        },
        "explanation": "他辨别的是两道剑痕；落石是后面的事件。"
      },
      {
        "type": "detail",
        "prompt": "What did Gu Ting do at the decisive moment?",
        "options": [
          "He struck his opponent's hand.",
          "He stepped away from the stones.",
          "He turned to block falling stones.",
          "He abandoned the contest without acting."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "At the decisive moment, he turned to block falling stones.",
          "focusQuote": "At the decisive moment, he turned to block falling stones."
        },
        "explanation": "关键时刻他转身挡住落石；不是继续攻击或完全退出。"
      },
      {
        "type": "main",
        "prompt": "What did the final choice teach Gu Ting?",
        "options": [
          "Victory required a stronger sword.",
          "Provocation should always be returned.",
          "Fear proved that his vow was useless.",
          "Keeping a vow could outweigh winning."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "At the decisive moment, he turned to block falling stones. The choice taught him a profound lesson: to confront fear and keep a vow mattered more than victory.",
          "focusQuote": "The choice taught him a profound lesson: to confront fear and keep a vow mattered more than victory."
        },
        "explanation": "结尾明确说面对恐惧、守誓言比胜利重要；不应把故事误读为比剑技巧。"
      }
    ]
  },
  {
    "id": "stolen-herb",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was found on the medicine cabinet?",
        "options": [
          "A counterfeit seal.",
          "A damaged furnace.",
          "A servant's written confession.",
          "A trace of fresh blood."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The disciple in charge of alchemy claimed to be preparing medicine, but a counterfeit seal was found on the cabinet.",
          "focusQuote": "The disciple in charge of alchemy claimed to be preparing medicine, but a counterfeit seal was found on the cabinet."
        },
        "explanation": "柜上发现伪造印记；新仆役受到怀疑，但没有供认。"
      },
      {
        "type": "detail",
        "prompt": "Why had the missing herb been used?",
        "options": [
          "To complete a public examination.",
          "To save an injured spirit beast.",
          "To replace an ordinary cooking herb.",
          "To reward the new servant."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The herb had been used to save an injured spirit beast.",
          "focusQuote": "The herb had been used to save an injured spirit beast."
        },
        "explanation": "草药用于救受伤灵兽；原文没有考试、奖励或烹调用途。"
      },
      {
        "type": "inference",
        "prompt": "Which approach best describes Shen Yan's investigation?",
        "options": [
          "Accepting suspicion as a final answer.",
          "Judging only the alchemist's words.",
          "Tracing evidence and considering motives.",
          "Ignoring the herb's eventual use."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The theft raised suspicion around a new servant. Shen Yan followed a faint trace of mud and herbs, asking what motive each person might have.",
          "focusQuote": "Shen Yan followed a faint trace of mud and herbs, asking what motive each person might have."
        },
        "explanation": "他循泥土和药草痕迹询问各人的动机，未直接把对仆役的怀疑当结论。"
      }
    ]
  },
  {
    "id": "tribulation-snow",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did Ye Heng face the trial at first?",
        "options": [
          "She waited for a senior's help.",
          "She stood alone on the peak.",
          "She left before the clouds arrived.",
          "She hid beneath the formation."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "Ye Heng stood alone, ready to withstand the trial herself.",
          "focusQuote": "Ye Heng stood alone, ready to withstand the trial herself."
        },
        "explanation": "她独自站立准备承受考验；原文没有等待或躲藏。"
      },
      {
        "type": "detail",
        "prompt": "What did the second bolt cause?",
        "options": [
          "The peak to disappear.",
          "The snow to melt completely.",
          "A silent pause in the trial.",
          "Violent turbulence around her."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The second created violent turbulence.",
          "focusQuote": "The second created violent turbulence."
        },
        "explanation": "第二道雷引发剧烈动荡；第一道雷才是击中阵法。"
      },
      {
        "type": "inference",
        "prompt": "What can be inferred about Ye Heng after the trial?",
        "options": [
          "She changed despite still feeling fear.",
          "She no longer needed to cultivate.",
          "She regretted leaving her companions.",
          "She had avoided every difficult moment."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Before dawn, she began to emerge from the snow. She was not fearless, but the trial had begun to transform her spirit.",
          "focusQuote": "She was not fearless, but the trial had begun to transform her spirit."
        },
        "explanation": "她并非毫无恐惧，但考验开始改变她；不能据此断定修炼结束或已躲开痛苦。"
      }
    ]
  },
  {
    "id": "star-platform",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the tower record celestial movements?",
        "options": [
          "To measure the elders' strength.",
          "To identify a stolen star map.",
          "To predict the realm's opening.",
          "To choose a new tower keeper."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The tower recorded the trajectory of every celestial body to predict when the secret realm would open.",
          "focusQuote": "The tower recorded the trajectory of every celestial body to predict when the secret realm would open."
        },
        "explanation": "记录天体轨迹是为了预测秘境开启时机；不是选人或测力量。"
      },
      {
        "type": "detail",
        "prompt": "What revealed the hidden vein?",
        "options": [
          "A new prediction by the elders.",
          "Turning the map towards the mountain.",
          "A sudden disappearance of the tower.",
          "Waiting until every star vanished."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "When she turned the map towards the mountain, the hidden vein was revealed.",
          "focusQuote": "When she turned the map towards the mountain, the hidden vein was revealed."
        },
        "explanation": "她把图转向山体后隐脉显露；其余方法没有出现。"
      },
      {
        "type": "main",
        "prompt": "What does Lu Wei's testing show?",
        "options": [
          "Rare events never deserve study.",
          "Evidence can overturn an accepted idea.",
          "The elders had supplied the final answer.",
          "Calculations are useful only when easy."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "When she turned the map towards the mountain, the hidden vein was revealed. The result taught her that evidence can change a confident idea.",
          "focusQuote": "The result taught her that evidence can change a confident idea."
        },
        "explanation": "结果让她认识到证据能改变自信的观点，呼应持续计算与检验假设。"
      }
    ]
  },
  {
    "id": "silent-rain",
    "questions": [
      {
        "type": "detail",
        "prompt": "What could the witness not describe?",
        "options": [
          "The suspect's coat.",
          "The ticket booth's location.",
          "The rain outside the theater.",
          "The time a bell had rung."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The only witness claimed to have stayed by the ticket booth, but could not describe the coat.",
          "focusQuote": "The only witness claimed to have stayed by the ticket booth, but could not describe the coat."
        },
        "explanation": "他声称在售票处，却讲不出外套；原文没有说他不知售票处在哪里。"
      },
      {
        "type": "detail",
        "prompt": "What made the suspect's shoes noticeable?",
        "options": [
          "A recording of his voice.",
          "Mud hidden inside the coat.",
          "Light from the ticket window.",
          "Their reflection on the wet floor."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The suspect tried to disappear into the crowd, but the wet floor reflected his shoes.",
          "focusQuote": "The suspect tried to disappear into the crowd, but the wet floor reflected his shoes."
        },
        "explanation": "湿地板映出鞋子；雨冲脚印与鞋的反光是相关但不同的线索。"
      },
      {
        "type": "inference",
        "prompt": "Why was verification of the alibi still needed?",
        "options": [
          "The footage had proved every detail.",
          "A suspicious contradiction was not yet a complete finding.",
          "The witness had already admitted lying.",
          "The theater had no possible witnesses."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The surveillance footage seemed to contradict him. The detail was suspicious, but his alibi still needed to be verified.",
          "focusQuote": "The detail was suspicious, but his alibi still needed to be verified."
        },
        "explanation": "监控似乎矛盾使细节可疑，但不在场证明仍需核实；可疑不等于已供认。"
      }
    ]
  },
  {
    "id": "seventh-wharf",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did Xu Tang learn about the seventh wharf?",
        "options": [
          "From a guard's public announcement.",
          "From the container's contents.",
          "From an anonymous message.",
          "From a police invitation."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "An anonymous message led reporter Xu Tang to the seventh wharf.",
          "focusQuote": "An anonymous message led reporter Xu Tang to the seventh wharf."
        },
        "explanation": "匿名消息引她去码头；截获无线电发生在之后。"
      },
      {
        "type": "detail",
        "prompt": "Why did she hide among the trucks?",
        "options": [
          "The police ordered her to leave.",
          "The suspects opened the container.",
          "Her equipment stopped recording.",
          "A guard had noticed her."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A guard noticed her, and she had to hide among the trucks.",
          "focusQuote": "A guard noticed her, and she had to hide among the trucks."
        },
        "explanation": "保安察觉她后，她躲进卡车之间；不是警方驱赶。"
      },
      {
        "type": "inference",
        "prompt": "How did Xu Tang contribute to stopping the deal?",
        "options": [
          "She provided evidence the police could use.",
          "She negotiated a different price.",
          "She persuaded every suspect to surrender.",
          "She replaced the counterfeit documents."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The police used her evidence to stop the deal. When the suspects tried to flee, officers began to pursue them across the dock.",
          "focusQuote": "The police used her evidence to stop the deal."
        },
        "explanation": "警方使用她的证据制止交易；未说她亲自谈判、换文件或劝全部投降。"
      }
    ]
  },
  {
    "id": "mirror-house",
    "questions": [
      {
        "type": "detail",
        "prompt": "What effect did the recorded images have on Su He?",
        "options": [
          "They made every room look larger.",
          "They distorted her sense of time.",
          "They identified the painter's location.",
          "They gave her a clear travel route."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "Su He found a recording by the missing painter, but the images began to distort her sense of time.",
          "focusQuote": "Su He found a recording by the missing painter, but the images began to distort her sense of time."
        },
        "explanation": "图像扰乱她的时间感；原文未说图像直接定位画家。"
      },
      {
        "type": "detail",
        "prompt": "What did Su He do after turning off the broadcast?",
        "options": [
          "She followed the echo.",
          "She trusted the recording immediately.",
          "She destroyed all the mirrors.",
          "She demanded an instant answer."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "She switched off the broadcast and followed the echo.",
          "focusQuote": "She switched off the broadcast and followed the echo."
        },
        "explanation": "她关广播后循回声走；摧毁镜子和逼答均未出现。"
      },
      {
        "type": "inference",
        "prompt": "Why did she question the voice's demand?",
        "options": [
          "It described every mirror correctly.",
          "It sounded too quiet to hear.",
          "It could not mention the painter.",
          "It pushed her to believe immediately."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A voice tried to manipulate her perception under intense psychological pressure. In a desperate moment, she remembered that an authentic voice never demands instant belief.",
          "focusQuote": "In a desperate moment, she remembered that an authentic voice never demands instant belief."
        },
        "explanation": "她想到真实声音不会要求即时相信，从而抵抗心理操控；音量不是依据。"
      }
    ]
  },
  {
    "id": "three-days",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the anonymous sender threaten to do?",
        "options": [
          "Delay a scheduled medical visit.",
          "Erase every copy of a message.",
          "Disclose a damaging contract.",
          "Cancel the lawyer's appointment."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The sender threatened to disclose a contract that could cause substantial damage.",
          "focusQuote": "The sender threatened to disclose a contract that could cause substantial damage."
        },
        "explanation": "对方威胁公开可能造成大损失的合同；医疗等情节不在英文中。"
      },
      {
        "type": "detail",
        "prompt": "What weakened the sender's plan?",
        "options": [
          "Gu Yan's refusal to make copies.",
          "The record left by each message.",
          "The disappearance of the contract.",
          "A promise to pay before midnight."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The sender's plan began to collapse when every message became a record.",
          "focusQuote": "The sender's plan began to collapse when every message became a record."
        },
        "explanation": "每条消息成了记录，计划随之瓦解；复制文件是预防，而非销毁。"
      },
      {
        "type": "inference",
        "prompt": "What does Gu Yan's final action indicate?",
        "options": [
          "He accepted risk rather than letting fear decide.",
          "He believed disclosure would have no consequences.",
          "He agreed to every demand from the sender.",
          "He waited for the deadline to pass unnoticed."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Before midnight, Gu Yan released the evidence. He understood the consequence, but fear no longer made the decision for him.",
          "focusQuote": "He understood the consequence, but fear no longer made the decision for him."
        },
        "explanation": "他明知后果仍在午夜前公布证据，说明选择不再由恐惧支配；不等于毫无风险。"
      }
    ]
  },
  {
    "id": "empty-room",
    "questions": [
      {
        "type": "detail",
        "prompt": "How long had the room supposedly been empty?",
        "options": [
          "Three nights.",
          "Three weeks.",
          "One month.",
          "Three months."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "The room had been empty for three months, yet furniture seemed to move every night.",
          "focusQuote": "The room had been empty for three months, yet furniture seemed to move every night."
        },
        "explanation": "房间已空三个月，家具却似乎每夜移动；不要混淆月份与频次。"
      },
      {
        "type": "detail",
        "prompt": "What was hidden behind the wallpaper?",
        "options": [
          "A second tenant's diary.",
          "A passage leading to a warehouse.",
          "A set of moving furniture.",
          "A copy of the landlord's contract."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Behind the wallpaper was a concealed passage leading to a warehouse.",
          "focusQuote": "Behind the wallpaper was a concealed passage leading to a warehouse."
        },
        "explanation": "墙纸后是通往仓库的暗道，不是另一份合同。"
      },
      {
        "type": "main",
        "prompt": "Which explanation is supported for the repeated disturbance?",
        "options": [
          "An ordinary tenant moved furniture openly.",
          "The former owner returned each night.",
          "A concealed property-related scheme was operating.",
          "The building had been empty for years."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Behind the wallpaper was a concealed passage leading to a warehouse. The repeated disturbance was part of a scheme involving the property.",
          "focusQuote": "The repeated disturbance was part of a scheme involving the property."
        },
        "explanation": "暗道与房产阴谋相连，解释反复动静；不能把房东的说法当成已证实结论。"
      }
    ]
  },
  {
    "id": "fog-hotel",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did Xu Tang stay at that hotel?",
        "options": [
          "Fog had closed the road.",
          "Her reservation had been cancelled.",
          "The police had asked her to wait.",
          "She had lost her identity document."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "When fog closed the road, Xu Tang stayed at the only lit hotel.",
          "focusQuote": "When fog closed the road, Xu Tang stayed at the only lit hotel."
        },
        "explanation": "雾封道路，她住进唯一亮灯的旅馆；未说警方要求或证件丢失。"
      },
      {
        "type": "detail",
        "prompt": "How did she respond to the corridor sound?",
        "options": [
          "She immediately opened the door.",
          "She left without asking anyone.",
          "She made a discreet inquiry.",
          "She tried to silence every guest."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "She made a discreet inquiry instead of opening the door.",
          "focusQuote": "She made a discreet inquiry instead of opening the door."
        },
        "explanation": "她谨慎询问而非开门，选择既关注异常又不贸然接近。"
      },
      {
        "type": "main",
        "prompt": "What made the hotel incident significant?",
        "options": [
          "It proved that all guests were criminals.",
          "It explained how fog formed.",
          "It caused the hotel to close forever.",
          "It supplied information about a missing person."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The police arrived to verify every guest's identity. The small incident revealed relevant information about a missing-person case.",
          "focusQuote": "The small incident revealed relevant information about a missing-person case."
        },
        "explanation": "身份核查揭出失踪案相关信息；未证明所有客人有罪或永久关店。"
      }
    ]
  },
  {
    "id": "old-archive",
    "questions": [
      {
        "type": "detail",
        "prompt": "What threatened the old paper records?",
        "options": [
          "A planned sale to tourists.",
          "Continued deterioration.",
          "An unexpected printing error.",
          "A ban on municipal files."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The city planned to remove the old archive, where paper records continued to deteriorate.",
          "focusQuote": "The city planned to remove the old archive, where paper records continued to deteriorate."
        },
        "explanation": "纸张持续恶化，搬迁计划也在进行；不是已售出或禁止市政档案。"
      },
      {
        "type": "detail",
        "prompt": "What place was linked to the elderly woman's memory?",
        "options": [
          "The newly built archive.",
          "A neighboring village school.",
          "The old harbor.",
          "A room behind the courthouse."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A preliminary map showed that her memory was connected to the old harbor.",
          "focusQuote": "A preliminary map showed that her memory was connected to the old harbor."
        },
        "explanation": "初步地图将她的回忆与旧港连接；其他地点未出现。"
      },
      {
        "type": "inference",
        "prompt": "Why had the truth been difficult to find?",
        "options": [
          "The useful record had been misplaced.",
          "The witness had withdrawn her testimony.",
          "Every original document had vanished.",
          "The harbor had never existed."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "After the record was preserved, it became relevant evidence. The truth had not vanished; it had been stored in the wrong drawer.",
          "focusQuote": "The truth had not vanished; it had been stored in the wrong drawer."
        },
        "explanation": "记录被放错抽屉，保存后成为证据；不是原件全毁或证人撤证。"
      }
    ]
  },
  {
    "id": "sea-recording",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was distinctive about the seaside signal?",
        "options": [
          "It stopped whenever waves grew louder.",
          "It was visible above the water.",
          "It appeared only once at dawn.",
          "It repeated at a specific frequency."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Waves could drown out most voices, but this signal repeated at a specific frequency.",
          "focusQuote": "Waves could drown out most voices, but this signal repeated at a specific frequency."
        },
        "explanation": "信号以特定频率反复出现，即使浪声能盖过声音；不是只响一次。"
      },
      {
        "type": "detail",
        "prompt": "Where was the sound finally traced?",
        "options": [
          "A damaged underwater device.",
          "An abandoned lighthouse.",
          "A passing research ship.",
          "A natural marine process."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The source was an abandoned lighthouse, not a natural marine phenomenon.",
          "focusQuote": "The source was an abandoned lighthouse, not a natural marine phenomenon."
        },
        "explanation": "第二次录音证明真声来自废灯塔；水下坏设备是初始假设。"
      },
      {
        "type": "inference",
        "prompt": "How did the later evidence change the investigation?",
        "options": [
          "It confirmed that no real voice existed.",
          "It made the first hypothesis unnecessary to test.",
          "It replaced the initial device explanation with a real source.",
          "It showed that waves could never cover voices."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The second recording proved that the voice was real. The source was an abandoned lighthouse, not a natural marine phenomenon.",
          "focusQuote": "The source was an abandoned lighthouse, not a natural marine phenomenon."
        },
        "explanation": "最终真声与灯塔推翻初始水下设备设想；不表示浪声从不盖人声。"
      }
    ]
  },
  {
    "id": "paper-cipher",
    "questions": [
      {
        "type": "detail",
        "prompt": "What first drew Qin Yao's attention to the dotted page?",
        "options": [
          "The repeated sequence of dots.",
          "The color of the paper's back.",
          "The desk's unusual height.",
          "The name of the dead man's daughter."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Qin Yao noticed a repeated sequence and began to break the cipher.",
          "focusQuote": "Qin Yao noticed a repeated sequence and began to break the cipher."
        },
        "explanation": "重复序列促使她解码；英文未提供女儿姓名或纸背颜色。"
      },
      {
        "type": "detail",
        "prompt": "What was hidden on the back of the page?",
        "options": [
          "A random set of ink stains.",
          "A second encrypted file.",
          "An ordinary shopping receipt.",
          "A note explaining the man's death."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A second file had been encrypted on the back.",
          "focusQuote": "A second file had been encrypted on the back."
        },
        "explanation": "背面还有一份加密文件；不能把第一面的故意警告当成随机墨迹。"
      },
      {
        "type": "inference",
        "prompt": "What can be inferred about the dotted pattern?",
        "options": [
          "It was an unfinished decoration.",
          "It was useless without a witness.",
          "It had been printed accidentally.",
          "It was intended to communicate a warning."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "She managed to derive coordinates and decipher a sentence. The strange pattern was a deliberate warning, not random ink.",
          "focusQuote": "The strange pattern was a deliberate warning, not random ink."
        },
        "explanation": "解出的坐标和句子说明图案是有意警告，不是装饰或事故。"
      }
    ]
  },
  {
    "id": "silent-testimony",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the defense question the recording's credibility?",
        "options": [
          "The prosecutor had lost the file.",
          "A witness refused to speak.",
          "Its account was inconsistent.",
          "The judge had already accepted it."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The prosecutor claimed it proved presence, but the defense questioned its credibility because the account was inconsistent.",
          "focusQuote": "The prosecutor claimed it proved presence, but the defense questioned its credibility because the account was inconsistent."
        },
        "explanation": "识别内容不一致使可信度受质疑；问题并非文件丢失。"
      },
      {
        "type": "detail",
        "prompt": "What did the technician explain about the system?",
        "options": [
          "It inserted invented words into background noise.",
          "It recorded the defendant in person.",
          "It removed all noise before making a record.",
          "It had been repaired by the prosecutor."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The technician finally managed to articulate how the system filled background noise with invented words.",
          "focusQuote": "The technician finally managed to articulate how the system filled background noise with invented words."
        },
        "explanation": "系统会把背景噪声补成虚构词，不能把自动输出直接视为真实发言。"
      },
      {
        "type": "inference",
        "prompt": "What was the implication of the objective review?",
        "options": [
          "The recording required no further examination.",
          "A rushed verdict lacked acceptable support.",
          "The defense had withdrawn its case.",
          "The technician had become a witness to the event."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "After an objective review, the judge refused to accept a rushed verdict. The defense decided to appeal the decision.",
          "focusQuote": "After an objective review, the judge refused to accept a rushed verdict."
        },
        "explanation": "法官拒绝仓促裁决，辩方提出上诉；未说技术员亲历事件或无需复查。"
      }
    ]
  },
  {
    "id": "volume-1",
    "questions": [
      {
        "type": "detail",
        "prompt": "What contrast was reported at the village?",
        "options": [
          "Less output and a flooded well.",
          "More output and a dry well.",
          "Stable output and a repaired well.",
          "More output and a larger council."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The records reported a higher output, but the village well was dry.",
          "focusQuote": "The records reported a higher output, but the village well was dry."
        },
        "explanation": "产出更高但村井干枯，是关键反差；并非产出下降。"
      },
      {
        "type": "detail",
        "prompt": "What action did Shen Yan request?",
        "options": [
          "Raise the reported output.",
          "Deepen every village well.",
          "Replace the council members.",
          "Suspend the diversion of water."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "Shen Yan asked the council to suspend the diversion of water.",
          "focusQuote": "Shen Yan asked the council to suspend the diversion of water."
        },
        "explanation": "他要求暂停引水改道，而非直接改记录或换议事者。"
      },
      {
        "type": "main",
        "prompt": "What issue do the two sentences point to?",
        "options": [
          "Greater output did not ensure water reached the village.",
          "The council had completed a new irrigation project.",
          "The well had dried because output fell.",
          "The villagers had rejected all available water."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The records reported a higher output, but the village well was dry.",
          "focusQuote": "The records reported a higher output, but the village well was dry."
        },
        "explanation": "高产出与干井并存，再要求停改道，指向水未到村里的分配问题；不能推断产出下降。"
      }
    ]
  },
  {
    "id": "volume-2",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was unusual about the boat marks?",
        "options": [
          "They were painted very recently.",
          "They all pointed towards a village.",
          "They lacked symmetry.",
          "They were hidden under water."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The marks on the boat were not symmetrical.",
          "focusQuote": "The marks on the boat were not symmetrical."
        },
        "explanation": "唯一明确特点是痕迹不对称；原文没有颜色、日期或水下位置。"
      },
      {
        "type": "detail",
        "prompt": "What did the injured traveler need before explaining the escape?",
        "options": [
          "Shelter.",
          "A new map.",
          "A second boat.",
          "A written accusation."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The injured traveler needed shelter before he could explain his escape.",
          "focusQuote": "The injured traveler needed shelter before he could explain his escape."
        },
        "explanation": "先需要庇护才说明逃亡；没有要求地图或指控。"
      },
      {
        "type": "inference",
        "prompt": "What priority is indicated by the traveler's situation?",
        "options": [
          "Replacing the boat before checking any marks.",
          "Obtaining an explanation before giving protection.",
          "Treating the marks as proof of guilt.",
          "Providing protection before asking for the account."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The injured traveler needed shelter before he could explain his escape.",
          "focusQuote": "The injured traveler needed shelter before he could explain his escape."
        },
        "explanation": "原文明定先获庇护、后讲逃亡经过；不应反过来把解释当救助条件。"
      }
    ]
  },
  {
    "id": "volume-3",
    "questions": [
      {
        "type": "detail",
        "prompt": "What can damage the copper under the paint?",
        "options": [
          "Heat from a furnace.",
          "Repeated polishing.",
          "Salt.",
          "Ordinary paper labels."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "Salt can corrode the copper beneath a coat of paint.",
          "focusQuote": "Salt can corrode the copper beneath a coat of paint."
        },
        "explanation": "盐能腐蚀漆下铜材；其余因素未在英文中指出。"
      },
      {
        "type": "detail",
        "prompt": "What did Lu Wei ask the council to correct?",
        "options": [
          "The maintenance records.",
          "The coat's color.",
          "The village water supply.",
          "The furnace temperature."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Lu Wei asked the council to rectify the maintenance records.",
          "focusQuote": "Lu Wei asked the council to rectify the maintenance records."
        },
        "explanation": "要求纠正维修记录；不是重涂颜色或调整药炉。"
      },
      {
        "type": "inference",
        "prompt": "What connection does the passage suggest?",
        "options": [
          "Paint proves that copper remains sound.",
          "Maintenance records should reflect the actual condition.",
          "The council had already replaced all copper.",
          "Salt prevents concealed damage."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Lu Wei asked the council to rectify the maintenance records.",
          "focusQuote": "Lu Wei asked the council to rectify the maintenance records."
        },
        "explanation": "实际铜材可能在漆下受损，记录需要纠正；不能仅因外层有漆便认定完好。"
      }
    ]
  },
  {
    "id": "volume-4",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did she use a second furnace?",
        "options": [
          "To begin a separate treatment.",
          "To make a comparison.",
          "To increase the first furnace's heat.",
          "To replace all the medicine."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "She used a second furnace for comparison.",
          "focusQuote": "She used a second furnace for comparison."
        },
        "explanation": "第二只炉用于对照；英文未说增加加热或直接换药。"
      },
      {
        "type": "detail",
        "prompt": "What needed consideration before treatment?",
        "options": [
          "Only the fastest method.",
          "Only the patient's request.",
          "Every possible hazard.",
          "Every available second furnace."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Every possible hazard had to be considered before treatment.",
          "focusQuote": "Every possible hazard had to be considered before treatment."
        },
        "explanation": "治疗前要考虑所有可能风险，不只看速度或请求。"
      },
      {
        "type": "main",
        "prompt": "Which description best fits the stated procedure?",
        "options": [
          "A comparison followed by attention to treatment risks.",
          "An immediate cure without any assessment.",
          "A furnace choice based solely on appearance.",
          "An agreement to ignore uncertain outcomes."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Every possible hazard had to be considered before treatment.",
          "focusQuote": "Every possible hazard had to be considered before treatment."
        },
        "explanation": "两句描述对照与风险考量，未保证立刻治好，也没有以外观选炉。"
      }
    ]
  },
  {
    "id": "volume-5",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was described on the missing page?",
        "options": [
          "An important restriction.",
          "A list of successful attempts.",
          "The date of a new test.",
          "A guide to drawing an appendix."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The missing page described an important restriction.",
          "focusQuote": "The missing page described an important restriction."
        },
        "explanation": "缺页包含重要限制；英文没有交代具体限制内容，不能补成中文中的日落规则。"
      },
      {
        "type": "detail",
        "prompt": "What did Gu Ting include in the appendix?",
        "options": [
          "The council's final decision.",
          "His unsuccessful attempts.",
          "A copy of the missing page.",
          "His opponent's training schedule."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Gu Ting added his failed attempts as an appendix.",
          "focusQuote": "Gu Ting added his failed attempts as an appendix."
        },
        "explanation": "附录记录他失败的尝试；不是找回缺页或对手安排。"
      },
      {
        "type": "main",
        "prompt": "Which focus best connects the two statements?",
        "options": [
          "Comparing two equally successful methods.",
          "Replacing written records with oral accounts.",
          "Recording restrictions and unsuccessful experience.",
          "Removing every unfavorable part of a record."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Gu Ting added his failed attempts as an appendix.",
          "focusQuote": "Gu Ting added his failed attempts as an appendix."
        },
        "explanation": "两句分别提限制与失败记录，主旨是保留这些补充信息；并非只展示成功或删去不利内容。"
      }
    ]
  },
  {
    "id": "volume-6",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had someone tried to remove from the stone?",
        "options": [
          "Its outer color.",
          "The village boundary.",
          "The entire inscription plate.",
          "A person's name."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Someone had tried to erase the name from the stone.",
          "focusQuote": "Someone had tried to erase the name from the stone."
        },
        "explanation": "有人试图擦去石上的名字；未说移界碑或整块铭牌。"
      },
      {
        "type": "detail",
        "prompt": "What were the villagers asked to remember?",
        "options": [
          "What they had personally seen.",
          "What an official had promised.",
          "What neighbors said about the name.",
          "What they imagined had happened."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The villagers were asked to recollect what they had actually seen.",
          "focusQuote": "The villagers were asked to recollect what they had actually seen."
        },
        "explanation": "要求回忆实际见过的事，区别于传言、想象或承诺。"
      },
      {
        "type": "inference",
        "prompt": "What kind of information would be most useful here?",
        "options": [
          "A newly invented explanation.",
          "Firsthand recollections about the event.",
          "An unrelated name on another stone.",
          "An account based only on village rumors."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The villagers were asked to recollect what they had actually seen.",
          "focusQuote": "The villagers were asked to recollect what they had actually seen."
        },
        "explanation": "调查要求亲历回忆，故第一手见闻最有依据；原文未支持传闻或凭空解释。"
      }
    ]
  },
  {
    "id": "volume-7",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why might the old map be unreliable?",
        "options": [
          "The two schools had destroyed it.",
          "The drought had erased every mark.",
          "The river's course was changing.",
          "The map showed no river at all."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "An old map is not always an accurate guide to a changing river.",
          "focusQuote": "An old map is not always an accurate guide to a changing river."
        },
        "explanation": "河流在变化，旧图未必仍准确；不是一定被毁或没画河。"
      },
      {
        "type": "detail",
        "prompt": "What did the two schools agree to do?",
        "options": [
          "Draw identical maps before meeting.",
          "Cooperate during the drought.",
          "Move the river to a new location.",
          "Cancel all use of the old maps."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The two schools agreed to cooperate during the drought.",
          "focusQuote": "The two schools agreed to cooperate during the drought."
        },
        "explanation": "两宗同意旱期合作；具体改道与废图均未在英文提及。"
      },
      {
        "type": "main",
        "prompt": "Which statement best summarizes the situation?",
        "options": [
          "Past maps settled every disagreement.",
          "The drought made cooperation impossible.",
          "Only a new map could end the drought.",
          "Changing conditions called for caution and cooperation."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "An old map is not always an accurate guide to a changing river.",
          "focusQuote": "An old map is not always an accurate guide to a changing river."
        },
        "explanation": "旧图需谨慎使用，同时两方合作应对旱情；不等于新地图本身就能结束干旱。"
      }
    ]
  },
  {
    "id": "volume-8",
    "questions": [
      {
        "type": "detail",
        "prompt": "What change preceded the altered warning mechanism?",
        "options": [
          "The bells were replaced.",
          "The tower was abandoned.",
          "The guards changed their leader.",
          "Every alarm was disconnected."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The warning mechanism had changed after the bells were replaced.",
          "focusQuote": "The warning mechanism had changed after the bells were replaced."
        },
        "explanation": "换铃后预警机制变化；其余变化未出现。"
      },
      {
        "type": "detail",
        "prompt": "What was the new procedure designed to do?",
        "options": [
          "Choose which bell sounded best.",
          "Reduce the number of guards.",
          "Check each alarm.",
          "Replace the bells again."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "They introduced a new procedure for checking each alarm.",
          "focusQuote": "They introduced a new procedure for checking each alarm."
        },
        "explanation": "新步骤用于逐个核查警报，不是选铃音或再换铃。"
      },
      {
        "type": "inference",
        "prompt": "Why does the new checking procedure fit the situation?",
        "options": [
          "The old alarms had all been invented.",
          "A changed warning system needed updated verification.",
          "The guards wanted to ignore every warning.",
          "Replacing bells had removed the need to check."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The warning mechanism had changed after the bells were replaced.",
          "focusQuote": "The warning mechanism had changed after the bells were replaced."
        },
        "explanation": "机制变了，核查方式也需更新；不能把换铃等同无需验证。"
      }
    ]
  },
  {
    "id": "volume-9",
    "questions": [
      {
        "type": "detail",
        "prompt": "What concerned the steward?",
        "options": [
          "The quality of the new storage room.",
          "The price of every village meal.",
          "The size of the next shipment.",
          "The adequacy of the remaining fuel."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "The steward feared that the remaining fuel was insufficient.",
          "focusQuote": "The steward feared that the remaining fuel was insufficient."
        },
        "explanation": "担心剩余燃料不足；不是库房大小或餐费。"
      },
      {
        "type": "detail",
        "prompt": "What did Ye Heng propose changing?",
        "options": [
          "The way reserves were allocated.",
          "The material used to make fuel.",
          "The number of council members.",
          "The date when the drought began."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Ye Heng proposed a different way to allocate the reserves.",
          "focusQuote": "Ye Heng proposed a different way to allocate the reserves."
        },
        "explanation": "建议换一种分配储备的方法，并未提出新燃料或议事人员更换。"
      },
      {
        "type": "main",
        "prompt": "What is the passage mainly concerned with?",
        "options": [
          "Replacing all existing supplies.",
          "Managing a potentially limited reserve.",
          "Expanding a fuel-producing factory.",
          "Proving that the steward feared nothing."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The steward feared that the remaining fuel was insufficient.",
          "focusQuote": "The steward feared that the remaining fuel was insufficient."
        },
        "explanation": "燃料可能不足与重新分配构成储备管理问题；未说扩厂或能增产。"
      }
    ]
  },
  {
    "id": "volume-10",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the cost of pursuing greater speed?",
        "options": [
          "The blade became harder to test.",
          "The tests took much longer.",
          "The blade became weaker.",
          "The safety criterion disappeared."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The pursuit of speed had weakened the blade.",
          "focusQuote": "The pursuit of speed had weakened the blade."
        },
        "explanation": "追求速度削弱剑身；不是仅增加测试时间。"
      },
      {
        "type": "detail",
        "prompt": "How was a clear safety criterion established?",
        "options": [
          "By observing one successful attempt.",
          "By asking the fastest user.",
          "By comparing the blade's color.",
          "Through repeated testing."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "Repeated testing gave them a clear criterion for safety.",
          "focusQuote": "Repeated testing gave them a clear criterion for safety."
        },
        "explanation": "反复测试提供安全标准，不能用单次成功代替。"
      },
      {
        "type": "main",
        "prompt": "Which issue is central to the passage?",
        "options": [
          "Checking safety when speed has reduced blade strength.",
          "Choosing a weapon only by its weight.",
          "Explaining why no blade can ever be safe.",
          "Ending tests as soon as a blade moves quickly."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The pursuit of speed had weakened the blade.",
          "focusQuote": "The pursuit of speed had weakened the blade."
        },
        "explanation": "速度与强度存在代价，继而用重复测试核安全；原文不支持完全否定剑或只看重量。"
      }
    ]
  },
  {
    "id": "volume-11",
    "questions": [
      {
        "type": "detail",
        "prompt": "How was the old man's memory initially treated?",
        "options": [
          "As a reliable instruction.",
          "As an illusion.",
          "As a complete rescue plan.",
          "As a formal accusation."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The old man’s memory was dismissed as an illusion.",
          "focusQuote": "The old man’s memory was dismissed as an illusion."
        },
        "explanation": "老人记忆起初被当幻觉，不是可靠计划或正式指控。"
      },
      {
        "type": "detail",
        "prompt": "Who had to make a sacrifice for the rescue?",
        "options": [
          "Only the old man.",
          "Only the rescue leader.",
          "Everyone involved.",
          "No one involved."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The rescue required a real sacrifice from everyone involved.",
          "focusQuote": "The rescue required a real sacrifice from everyone involved."
        },
        "explanation": "救援需要所有参与者真实付出；不能缩成仅某一人或零代价。"
      },
      {
        "type": "main",
        "prompt": "Which statement is consistent with both facts?",
        "options": [
          "The memory had already been proven false.",
          "The rescue succeeded without any cost.",
          "Only the old man's account mattered.",
          "The rescue involved costs despite initial disbelief."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The rescue required a real sacrifice from everyone involved.",
          "focusQuote": "The rescue required a real sacrifice from everyone involved."
        },
        "explanation": "记忆被怀疑，救援仍需共同付出；未明确记忆真假，也未说零代价。"
      }
    ]
  },
  {
    "id": "volume-12",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the healers need to do at the same time?",
        "options": [
          "Isolate patients and keep supplies moving.",
          "Release all patients and close deliveries.",
          "Separate every supplier from the town.",
          "Stop supplies until ordinary life returned."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The healers had to isolate sick patients while keeping supplies moving.",
          "focusQuote": "The healers had to isolate sick patients while keeping supplies moving."
        },
        "explanation": "必须隔离病人同时维持供应；不是全面停运。"
      },
      {
        "type": "detail",
        "prompt": "What supported a gradual return to ordinary life?",
        "options": [
          "A promise from the suppliers.",
          "A sudden end to all illness.",
          "The recorded information.",
          "A vote without examining records."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The records supported a gradual return to ordinary life.",
          "focusQuote": "The records supported a gradual return to ordinary life."
        },
        "explanation": "记录为逐步恢复提供依据；英文没有立即无病或仅靠投票。"
      },
      {
        "type": "inference",
        "prompt": "What approach to recovery does the passage support?",
        "options": [
          "Restoring everything at once.",
          "Using records while relaxing restrictions gradually.",
          "Treating supply movement as unnecessary.",
          "Assuming isolation prevents every future illness."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The records supported a gradual return to ordinary life.",
          "focusQuote": "The records supported a gradual return to ordinary life."
        },
        "explanation": "依据记录逐步恢复，且需维持供应；不支持一步解禁或保证未来无病。"
      }
    ]
  },
  {
    "id": "volume-13",
    "questions": [
      {
        "type": "detail",
        "prompt": "What undermined the original chronology?",
        "options": [
          "A missing list of witnesses.",
          "A clock with no numbers.",
          "A newly revised bus schedule.",
          "Clocks that showed different times."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "The chronology depended on clocks that did not agree.",
          "focusQuote": "The chronology depended on clocks that did not agree."
        },
        "explanation": "多个钟不一致影响时间顺序；没有涉及公交表或无刻度钟。"
      },
      {
        "type": "detail",
        "prompt": "What happened after the discrepancy was corrected?",
        "options": [
          "One suspect was ruled out.",
          "All suspects confessed.",
          "The clocks stopped working.",
          "A new crime was confirmed."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Correcting the discrepancy ruled out one suspect.",
          "focusQuote": "Correcting the discrepancy ruled out one suspect."
        },
        "explanation": "校正差异排除一名嫌疑人；不是全部认罪或发现新罪。"
      },
      {
        "type": "inference",
        "prompt": "What does the outcome suggest about the original suspicion?",
        "options": [
          "It depended on a perfectly synchronized timeline.",
          "It could change when the time evidence changed.",
          "It proved that the corrected suspect owned a clock.",
          "It was supported by a complete confession."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Correcting the discrepancy ruled out one suspect.",
          "focusQuote": "Correcting the discrepancy ruled out one suspect."
        },
        "explanation": "时刻修正会改变嫌疑判断；英文未提供自白或钟的所有权。"
      }
    ]
  },
  {
    "id": "volume-14",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did each claim relate to the review threshold?",
        "options": [
          "It exceeded the threshold slightly.",
          "It matched the threshold exactly.",
          "It stayed slightly below the threshold.",
          "It had no stated relationship to review."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "Each claim stayed just below the review threshold.",
          "focusQuote": "Each claim stayed just below the review threshold."
        },
        "explanation": "每笔申请都略低于审核门槛；不要反选超过或恰好相等。"
      },
      {
        "type": "detail",
        "prompt": "What helped conceal the repeated claims?",
        "options": [
          "A damaged review machine.",
          "An invented floor.",
          "An honest maintenance worker.",
          "A change in the review date."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The invented floor helped disguise repeated claims.",
          "focusQuote": "The invented floor helped disguise repeated claims."
        },
        "explanation": "虚构楼层用于掩饰重复申领，不是机器损坏。"
      },
      {
        "type": "inference",
        "prompt": "Why might the claims' amounts have been kept just below the threshold?",
        "options": [
          "To guarantee that the floor really existed.",
          "To show that the claims were all unrelated.",
          "To increase the length of each review.",
          "To make repeated claims less likely to trigger review."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Each claim stayed just below the review threshold.",
          "focusQuote": "Each claim stayed just below the review threshold."
        },
        "explanation": "每笔刻意接近却低于门槛，结合虚构楼层暗示规避复核；不证明楼层存在。"
      }
    ]
  },
  {
    "id": "volume-15",
    "questions": [
      {
        "type": "detail",
        "prompt": "When had the duplicate key been made?",
        "options": [
          "Three years earlier.",
          "Three days earlier.",
          "After the current investigation.",
          "On the night of the incident."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A duplicate of the key had been made three years earlier.",
          "focusQuote": "A duplicate of the key had been made three years earlier."
        },
        "explanation": "复制钥匙是三年前制作；不是案发当天。"
      },
      {
        "type": "detail",
        "prompt": "What was insufficient to support an inference of guilt?",
        "options": [
          "A complete confession.",
          "Access to a key alone.",
          "Evidence from several sources.",
          "A confirmed account of actual use."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "An inference about guilt required more than access to a key.",
          "focusQuote": "An inference about guilt required more than access to a key."
        },
        "explanation": "仅能拿到钥匙不足以断罪；原文未否定供认或实际取用证据。"
      },
      {
        "type": "inference",
        "prompt": "What can be inferred about the duplicate key?",
        "options": [
          "Its existence identifies a particular offender.",
          "Its age makes it impossible to use.",
          "It is relevant without being conclusive proof of guilt.",
          "It proves that the original key was stolen."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "An inference about guilt required more than access to a key.",
          "focusQuote": "An inference about guilt required more than access to a key."
        },
        "explanation": "复制品存在可能相关，但持钥机会不等于犯罪证据；其年龄也不使其自动失效。"
      }
    ]
  },
  {
    "id": "volume-16",
    "questions": [
      {
        "type": "detail",
        "prompt": "What caused the blur in the image?",
        "options": [
          "A deliberately erased caption.",
          "Movement during the image-making process.",
          "Damage to an archive drawer.",
          "The removal of every original file."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The blur was a natural distortion caused by movement.",
          "focusQuote": "The blur was a natural distortion caused by movement."
        },
        "explanation": "模糊为运动造成的自然失真；不是已确认修图。"
      },
      {
        "type": "detail",
        "prompt": "What does image authenticity fail to guarantee?",
        "options": [
          "That an image ever existed.",
          "That movement can create distortion.",
          "That an original can be preserved.",
          "That its caption is accurate."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The authenticity of an image does not guarantee an accurate caption.",
          "focusQuote": "The authenticity of an image does not guarantee an accurate caption."
        },
        "explanation": "图像真实不保证文字说明准确；需要分别查证。"
      },
      {
        "type": "inference",
        "prompt": "Which conclusion about the image is justified?",
        "options": [
          "A genuine image can still be accompanied by misleading text.",
          "A blurred image must always be a forgery.",
          "An authentic image makes further checking pointless.",
          "A correct caption proves that no movement occurred."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The authenticity of an image does not guarantee an accurate caption.",
          "focusQuote": "The authenticity of an image does not guarantee an accurate caption."
        },
        "explanation": "真图也可能有错说明；不应把模糊当造假，或把真实当无需复查。"
      }
    ]
  },
  {
    "id": "volume-17",
    "questions": [
      {
        "type": "detail",
        "prompt": "How had the message been sent?",
        "options": [
          "By a person using a stolen key.",
          "Through a live telephone call.",
          "By an automatic scheduler.",
          "With a newly printed postcard."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The message had been sent by an automatic scheduler.",
          "focusQuote": "The message had been sent by an automatic scheduler."
        },
        "explanation": "信息通过自动定时程序发送；不能直接证明发送时有人操作。"
      },
      {
        "type": "detail",
        "prompt": "What permission did the team examine?",
        "options": [
          "Permission to cancel every message.",
          "Permission to modify the attachment.",
          "Permission to borrow the building key.",
          "Permission to enter an old archive."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The team reviewed each account’s permission to modify the attachment.",
          "focusQuote": "The team reviewed each account’s permission to modify the attachment."
        },
        "explanation": "核查各账号修改附件的权限，并非建筑物出入权。"
      },
      {
        "type": "main",
        "prompt": "What should be distinguished when interpreting the message?",
        "options": [
          "The recipient's name and the weather.",
          "The attachment's size and the key's age.",
          "The writing style and the building's color.",
          "Automated sending and authorized attachment changes."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The team reviewed each account’s permission to modify the attachment.",
          "focusQuote": "The team reviewed each account’s permission to modify the attachment."
        },
        "explanation": "发送由定时器执行，附件修改另涉及账号权限，两种活动应区分。"
      }
    ]
  },
  {
    "id": "volume-18",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the comparison show about the two fibers?",
        "options": [
          "They belonged to a common category.",
          "They came from one unique garment.",
          "They had different owners' names.",
          "They were found on the same date."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The two fibers belonged to a common category.",
          "focusQuote": "The two fibers belonged to a common category."
        },
        "explanation": "结果只说明同属常见类别，未指向唯一衣物或日期。"
      },
      {
        "type": "detail",
        "prompt": "What did the report explain?",
        "options": [
          "The owner's complete confession.",
          "The finding's limitations.",
          "The exact location of both garments.",
          "The disappearance of all other evidence."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The report explained the limitation of that finding.",
          "focusQuote": "The report explained the limitation of that finding."
        },
        "explanation": "报告说明结论的局限，不是补出唯一来源。"
      },
      {
        "type": "inference",
        "prompt": "Which interpretation would go beyond the stated finding?",
        "options": [
          "The fibers were of a commonly used type.",
          "The result had limitations.",
          "The fibers uniquely identified one person's clothing.",
          "The report discussed the comparison."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The two fibers belonged to a common category.",
          "focusQuote": "The two fibers belonged to a common category."
        },
        "explanation": "常见类别无法唯一识别某人衣物；其余选项是明确事实。"
      }
    ]
  },
  {
    "id": "volume-19",
    "questions": [
      {
        "type": "detail",
        "prompt": "What two things did she try to relate?",
        "options": [
          "Water quality and the shop's price.",
          "Water use and closing time.",
          "The meter's size and the building's age.",
          "The number of tenants and their names."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "She looked for a correlation between water use and closing time.",
          "focusQuote": "She looked for a correlation between water use and closing time."
        },
        "explanation": "寻找用水与打烊时间的相关性；未提水价或住户人数。"
      },
      {
        "type": "detail",
        "prompt": "What made later water use observable?",
        "options": [
          "The disappearance of the original pipes.",
          "A change in the opening hours.",
          "A witness's recollection alone.",
          "A separate meter."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A separate meter made future water use visible.",
          "focusQuote": "A separate meter made future water use visible."
        },
        "explanation": "独立计量表让之后用水可见；不是只凭记忆。"
      },
      {
        "type": "main",
        "prompt": "How did the investigation move forward?",
        "options": [
          "From examining a timing relationship to measuring future use.",
          "From proving theft to abandoning all measurement.",
          "From changing opening hours to closing the shop.",
          "From identifying a tenant to removing every meter."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "She looked for a correlation between water use and closing time.",
          "focusQuote": "She looked for a correlation between water use and closing time."
        },
        "explanation": "先查时间关联，再独立记录用量；原文没有已证明偷水或停业。"
      }
    ]
  },
  {
    "id": "volume-20",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why would the lawyer not interpret the will from that copy?",
        "options": [
          "The family had already settled everything.",
          "The copy was damaged.",
          "The will contained no words.",
          "The writer had forbidden all lawyers."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The lawyer refused to interpret the will from a damaged copy.",
          "focusQuote": "The lawyer refused to interpret the will from a damaged copy."
        },
        "explanation": "律师拒用损坏副本解释遗嘱；不是家庭已和解。"
      },
      {
        "type": "detail",
        "prompt": "What was still required for the settlement?",
        "options": [
          "A different lawyer's departure.",
          "A new name for the property.",
          "The family's formal consent.",
          "The destruction of the original will."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The family still needed to give formal consent to the settlement.",
          "focusQuote": "The family still needed to give formal consent to the settlement."
        },
        "explanation": "和解仍须家人正式同意，不能由一份解释自动替代。"
      },
      {
        "type": "main",
        "prompt": "Which distinction matters in this passage?",
        "options": [
          "A damaged copy and a newly invented will.",
          "A lawyer's age and the size of the family.",
          "A spoken promise and a forgotten name.",
          "Reliable interpretation and approval of the settlement."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The family still needed to give formal consent to the settlement.",
          "focusQuote": "The family still needed to give formal consent to the settlement."
        },
        "explanation": "可靠解释与家人正式批准是两件事；不能将前者当成后者已完成。"
      }
    ]
  },
  {
    "id": "volume-21",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the schedule fail to prove?",
        "options": [
          "Actual attendance.",
          "The existence of a manager.",
          "The building's working hours.",
          "The familiarity of the practice."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The schedule did not prove actual attendance.",
          "focusQuote": "The schedule did not prove actual attendance."
        },
        "explanation": "排班不证明实际出勤；不可直接当签到。"
      },
      {
        "type": "detail",
        "prompt": "What did the familiar practice fail to remove?",
        "options": [
          "Every worker's name.",
          "The manager's accountability.",
          "The schedule's original format.",
          "The time of the next meeting."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A familiar practice did not remove the manager’s accountability.",
          "focusQuote": "A familiar practice did not remove the manager’s accountability."
        },
        "explanation": "惯例不能免去经理责任；其余对象未提。"
      },
      {
        "type": "main",
        "prompt": "What is the central issue?",
        "options": [
          "Replacing all workers after a schedule changes.",
          "Explaining why schedules should never be used.",
          "Distinguishing planned staffing from actual responsibility.",
          "Showing that familiar procedures always prevent accidents."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The schedule did not prove actual attendance.",
          "focusQuote": "The schedule did not prove actual attendance."
        },
        "explanation": "排班与实际到岗不同，惯例又不免责任，焦点是计划记录与实际责任的区分。"
      }
    ]
  },
  {
    "id": "volume-22",
    "questions": [
      {
        "type": "detail",
        "prompt": "What complication existed during construction?",
        "options": [
          "No building had an address.",
          "Both buildings had been demolished.",
          "The addresses changed every evening.",
          "Two buildings shared an address."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Two buildings shared the same address during construction.",
          "focusQuote": "Two buildings shared the same address during construction."
        },
        "explanation": "施工期间两栋楼共用地址；不是没有地址。"
      },
      {
        "type": "detail",
        "prompt": "What process did the company change?",
        "options": [
          "Its delivery confirmation process.",
          "Its construction approval process.",
          "Its loan repayment process.",
          "Its passenger booking process."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The company changed its delivery confirmation process.",
          "focusQuote": "The company changed its delivery confirmation process."
        },
        "explanation": "改进的是配送确认，不是施工许可或借款。"
      },
      {
        "type": "inference",
        "prompt": "What would the shared address make especially important?",
        "options": [
          "Using the same confirmation for both buildings.",
          "Confirming the actual delivery destination.",
          "Assuming either building was an acceptable destination.",
          "Avoiding all contact with the recipient."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "Two buildings shared the same address during construction.",
          "focusQuote": "Two buildings shared the same address during construction."
        },
        "explanation": "地址重合会让实际收货地点的确认更重要；不能默认送任一楼皆可。"
      }
    ]
  },
  {
    "id": "volume-23",
    "questions": [
      {
        "type": "detail",
        "prompt": "What can a leading question influence?",
        "options": [
          "The coat's original color.",
          "The time shown by a clock.",
          "A witness's memory.",
          "The length of a written record."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A leading question can influence a witness’s memory.",
          "focusQuote": "A leading question can influence a witness’s memory."
        },
        "explanation": "诱导性问题影响回忆；不直接改变衣服本色或钟时。"
      },
      {
        "type": "detail",
        "prompt": "What did the statement preserve?",
        "options": [
          "A confirmed description of the coat.",
          "His uncertainty about the coat.",
          "A claim that he saw no one.",
          "The questioner's final conclusion."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The statement preserved his uncertainty about the coat.",
          "focusQuote": "The statement preserved his uncertainty about the coat."
        },
        "explanation": "笔录保留对外套的不确定，并非确证某颜色。"
      },
      {
        "type": "inference",
        "prompt": "Why is preserving that uncertainty useful?",
        "options": [
          "It makes the witness's memory perfectly accurate.",
          "It lets the interviewer supply missing details.",
          "It removes the need to ask any questions.",
          "It avoids presenting doubt as a definite observation."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The statement preserved his uncertainty about the coat.",
          "focusQuote": "The statement preserved his uncertainty about the coat."
        },
        "explanation": "保留犹豫避免将不确定包装成确见；不保证记忆完美或无需再查。"
      }
    ]
  },
  {
    "id": "volume-24",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had changed without a matching label update?",
        "options": [
          "The digital index.",
          "The sequence of court decisions.",
          "The names of all witnesses.",
          "The contents of every record."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The digital index had changed, but the labels had not.",
          "focusQuote": "The digital index had changed, but the labels had not."
        },
        "explanation": "电子索引已变，标签未变；未说案卷内容全变。"
      },
      {
        "type": "detail",
        "prompt": "What did they reconstruct?",
        "options": [
          "A new set of room labels.",
          "The transfers between the rooms.",
          "The disappearance of the building.",
          "The order of unrelated testimony."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "They reconstructed the sequence of transfers between the rooms.",
          "focusQuote": "They reconstructed the sequence of transfers between the rooms."
        },
        "explanation": "还原资料在房间之间转交的顺序；不是重新编证言。"
      },
      {
        "type": "main",
        "prompt": "What difficulty do the two sentences describe?",
        "options": [
          "All records had been proven destroyed.",
          "Every room had the same label.",
          "Finding records through inconsistent location information.",
          "Replacing a digital index with no supporting history."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "The digital index had changed, but the labels had not.",
          "focusQuote": "The digital index had changed, but the labels had not."
        },
        "explanation": "索引与纸签不一致，再追转交历史，说明查找位置的问题；不等于已毁档。"
      }
    ]
  },
  {
    "id": "expansion-a-001",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why had the academy voted to abolish the spell?",
        "options": [
          "Its teacher had gone abroad.",
          "There were reports of abuse.",
          "Its name was too difficult.",
          "The ferry had arrived late."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The academy had voted to abolish a spell after reports of abuse.",
          "focusQuote": "The academy had voted to abolish a spell after reports of abuse."
        },
        "explanation": "废术因有人滥用；其他理由未出现。"
      },
      {
        "type": "detail",
        "prompt": "How did Lin check the ferry's acceleration?",
        "options": [
          "By abandoning the search.",
          "By removing the witness.",
          "By using the strong currents.",
          "By asking the tutor to steer."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin’s ability checked its acceleration through abundant currents.",
          "focusQuote": "Lin’s ability checked its acceleration through abundant currents."
        },
        "explanation": "借水流控制加速，并非放弃或让导师操船。"
      },
      {
        "type": "inference",
        "prompt": "What explains Lin's commitment to the witness?",
        "options": [
          "Her exposed medical privacy mattered to him.",
          "He wanted to publish her stolen record.",
          "He believed she absorbed every medicine.",
          "He needed proof of absolute safety."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The academic notes described abnormal absorption of medicine. A stolen abortion record exposed the witness’s identity; her body could not absorb medicine well, but Lin would abide by his promise to protect her. He was absolutely certain that her privacy mattered.",
          "focusQuote": "He was absolutely certain that her privacy mattered."
        },
        "explanation": "他守诺保护被暴露隐私的证人，不是公开病史。"
      }
    ]
  },
  {
    "id": "expansion-a-002",
    "questions": [
      {
        "type": "detail",
        "prompt": "What allowed Mei's team to use the room?",
        "options": [
          "The accountant's confession.",
          "The victims' departure.",
          "A hidden stair accessory.",
          "The acceptance of her booking."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "His acceptance of her booking gave her access to an accessible room that could accommodate her team.",
          "focusQuote": "His acceptance of her booking gave her access to an accessible room that could accommodate her team."
        },
        "explanation": "老板接受预订使团队获准入住；暗账是后文。"
      },
      {
        "type": "detail",
        "prompt": "What implicated the owner in the fire?",
        "options": [
          "An account hidden in a stair accessory.",
          "The sound of his accent.",
          "An ordinary booking form.",
          "An empty room near the stairs."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A stair accessory hid a second account, proving the owner an accessary to arson.",
          "focusQuote": "A stair accessory hid a second account, proving the owner an accessary to arson."
        },
        "explanation": "楼梯配件中暗账证其为纵火帮凶，非口音可疑。"
      },
      {
        "type": "inference",
        "prompt": "How did the audit affect the guests?",
        "options": [
          "It convinced them no fire had occurred.",
          "Accurate compensation restored their trust.",
          "It required another payment to the owner.",
          "It blamed the accountant for every loss."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A stair accessory hid a second account, proving the owner an accessary to arson. Mei could accomplish the audit with accuracy and paid compensation accordingly. That quiet accomplishment restored the guests’ trust.",
          "focusQuote": "Mei could accomplish the audit with accuracy and paid compensation accordingly. That quiet accomplishment restored the guests’ trust."
        },
        "explanation": "准确核查及相应赔偿恢复客人信任。"
      }
    ]
  },
  {
    "id": "expansion-a-003",
    "questions": [
      {
        "type": "detail",
        "prompt": "What made the advertised act dangerous?",
        "options": [
          "A change in the actor's costume.",
          "A dim lamp on the stage.",
          "Acid found on a rope.",
          "A smaller plot of land."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "He actually found acid on a rope: the actual danger was acute, unlike the harmless act promised in an ad.",
          "focusQuote": "He actually found acid on a rope: the actual danger was acute, unlike the harmless act promised in an ad."
        },
        "explanation": "绳上有酸，与无害演出的承诺冲突。"
      },
      {
        "type": "detail",
        "prompt": "What made the manager acknowledge the damage?",
        "options": [
          "Lin's private promise.",
          "A new advertisement.",
          "Removal of the stage lamp.",
          "Collective action by the cast."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Collective action made him acknowledge the damage.",
          "focusQuote": "Collective action made him acknowledge the damage."
        },
        "explanation": "演员共同行动使经理承认，非广告或私下保证。"
      },
      {
        "type": "inference",
        "prompt": "What interest lay behind the manager's dispute?",
        "options": [
          "Acquiring the property for himself.",
          "Training a new cast.",
          "Giving land to the acquaintance.",
          "Replacing acid with medicine."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "An actor and an actress rehearsed while an acquaintance tried to accuse their acquisitive manager of stealing an acre. Lin went to acquaint himself with the dispute over the acquisition the manager hoped to acquire.",
          "focusQuote": "Lin went to acquaint himself with the dispute over the acquisition the manager hoped to acquire."
        },
        "explanation": "争议围绕经理希望取得的地块，未说赠地。"
      }
    ]
  },
  {
    "id": "expansion-a-004",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the parents help the adolescent adapt?",
        "options": [
          "They changed all his old habits.",
          "They kept his routine and adjusted his desk.",
          "They moved away from the healer.",
          "They avoided discussing adoption."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "His adoptive parents would adopt his old routine and adjust an adjustable desk; their rooms adjoin a healer’s home.",
          "focusQuote": "His adoptive parents would adopt his old routine and adjust an adjustable desk; their rooms adjoin a healer’s home."
        },
        "explanation": "采用原作息并调整书桌，非强改一切。"
      },
      {
        "type": "detail",
        "prompt": "What did the administration require?",
        "options": [
          "A letter criticizing the parents.",
          "A new desk in every room.",
          "An additional admission record.",
          "A promise never to become an adult."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The administration had to admit that admission required an additional record.",
          "focusQuote": "The administration had to admit that admission required an additional record."
        },
        "explanation": "入学还需额外证明，即使已有康复材料。"
      },
      {
        "type": "inference",
        "prompt": "Why was adding the word 'our' important?",
        "options": [
          "It helped him trust that he belonged in this home.",
          "It cancelled every admission requirement.",
          "It changed the healer's professional title.",
          "It prevented him from leaving the building."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "His mother asked him to add an adjective: “our.” That tiny addition helped him trust the parents he would adore. He could become an adult and advance without losing this home.",
          "focusQuote": "That tiny addition helped him trust the parents he would adore."
        },
        "explanation": "这个词使他更信任共同的家，不取消手续或限制外出。"
      }
    ]
  },
  {
    "id": "expansion-a-005",
    "questions": [
      {
        "type": "detail",
        "prompt": "What first made Lin question the advertisement?",
        "options": [
          "The word 'completely' beside 'cures.'",
          "The expert's refusal to investigate.",
          "The lack of aerial photographs.",
          "The clinic's location outside the mountains."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Lin’s adventure began when he noticed the adverb “completely” beside “cures.”",
          "focusQuote": "Lin’s adventure began when he noticed the adverb “completely” beside “cures.”"
        },
        "explanation": "完全治愈的表述引起质疑，并非没有照片。"
      },
      {
        "type": "detail",
        "prompt": "What could the service actually do?",
        "options": [
          "Cure every illness permanently.",
          "Only ease the illnesses described.",
          "Replace all honest care.",
          "Instantly remove affective disorders."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "An affiliate would affirm that the service could only ease illnesses that afflict patients.",
          "focusQuote": "An affiliate would affirm that the service could only ease illnesses that afflict patients."
        },
        "explanation": "确认只能缓解，不能承诺全部永久治愈。"
      },
      {
        "type": "main",
        "prompt": "What is the main tension in the story?",
        "options": [
          "The clinic needed a larger aircraft.",
          "The villagers disliked family advice.",
          "Attractive promotion overstated medical benefits.",
          "The expert refused to examine the service."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "An advanced aeroplane promised an advantageous mountain clinic. Its aerial pictures had aesthetic appeal, but an advertisement exaggerated its advantage. Lin’s adventure began when he noticed the adverb “completely” beside “cures.”",
          "focusQuote": "Its aerial pictures had aesthetic appeal, but an advertisement exaggerated its advantage."
        },
        "explanation": "宣传夸大利益，与真实局限和需说明风险相冲突。"
      }
    ]
  },
  {
    "id": "expansion-a-006",
    "questions": [
      {
        "type": "detail",
        "prompt": "Whose interests did the agent's agenda favor?",
        "options": [
          "Village seed growers.",
          "The airport's photographer.",
          "A public grain warehouse.",
          "A private airline."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "An African photograph in an airport album moved Lin to act against an agency agent whose agenda favored a private airline.",
          "focusQuote": "An African photograph in an airport album moved Lin to act against an agency agent whose agenda favored a private airline."
        },
        "explanation": "安排有利私人航空公司，而不是村庄粮种。"
      },
      {
        "type": "detail",
        "prompt": "What did the airplane carry?",
        "options": [
          "Gifts rather than grain.",
          "Seeds rather than gifts.",
          "Only damaged cooling equipment.",
          "Only agricultural records."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Alas, the airplane carried gifts rather than grain.",
          "focusQuote": "Alas, the airplane carried gifts rather than grain."
        },
        "explanation": "货物是礼物而非粮食。"
      },
      {
        "type": "inference",
        "prompt": "What was Lin's aim?",
        "options": [
          "To expand the agent's agenda.",
          "To restore aid for villagers.",
          "To stop all travel to Africa.",
          "To replace the airport album."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin’s aim was to restore aid. The aggregate budget convinced the donor to become agreeable. Afterward, villagers could afford seeds again.",
          "focusQuote": "Lin’s aim was to restore aid."
        },
        "explanation": "恢复援助，最终村民重新买得起种子。"
      }
    ]
  },
  {
    "id": "expansion-a-007",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did Lin reveal a mark?",
        "options": [
          "By painting a sign.",
          "By breaking the alloy plates.",
          "By using alcohol.",
          "By questioning every guard."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "Lin stayed alert and used alcohol to reveal a mark.",
          "focusQuote": "Lin stayed alert and used alcohol to reveal a mark."
        },
        "explanation": "使用酒精揭示标记，不是破坏门板。"
      },
      {
        "type": "detail",
        "prompt": "What helped the group escape?",
        "options": [
          "Keeping the original route.",
          "Replacing the guards.",
          "Removing both doors entirely.",
          "Finding an alternative route."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "They found an alternative and escaped altogether, alive despite the altitude.",
          "focusQuote": "They found an alternative and escaped altogether, alive despite the altitude."
        },
        "explanation": "改路减险并一起脱险，并未拆掉两扇门。"
      },
      {
        "type": "inference",
        "prompt": "What might the envoy's accusation cause?",
        "options": [
          "Division among allied guards.",
          "An explanation of the door mechanism.",
          "Proof that every guard betrayed the alliance.",
          "A safe route without inspection."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Two alloy doors looked alike. An alien envoy would allege that an ally lacked allegiance, but the allegation could only alienate the allied guards. Lin stayed alert and used alcohol to reveal a mark.",
          "focusQuote": "An alien envoy would allege that an ally lacked allegiance, but the allegation could only alienate the allied guards."
        },
        "explanation": "指控使盟军疏远，未构成背叛证据。"
      }
    ]
  },
  {
    "id": "expansion-a-008",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the order become dangerous?",
        "options": [
          "The whisper had no words.",
          "Ambient noise made it ambiguous.",
          "The ambassador refused to listen.",
          "The guards lacked ammunition."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "His ambition was to amplify a whisper, but ambient noise gave an ambiguous order dangerous ambiguity.",
          "focusQuote": "His ambition was to amplify a whisper, but ambient noise gave an ambiguous order dangerous ambiguity."
        },
        "explanation": "环境噪声使指令含混；不是没人讲话。"
      },
      {
        "type": "detail",
        "prompt": "What did nearly one ampere of current do?",
        "options": [
          "Silence the experiment.",
          "Send the ambulance away.",
          "Increase the signal's amplitude.",
          "Remove the guards' ammunition."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "An ample amount of current—nearly one ampere—increased the signal’s amplitude.",
          "focusQuote": "An ample amount of current—nearly one ampere—increased the signal’s amplitude."
        },
        "explanation": "电流增大信号振幅，未说它立即消除噪声。"
      },
      {
        "type": "inference",
        "prompt": "What did the tuning-fork analogy help identify?",
        "options": [
          "The ambassador's responsibility.",
          "A harmless fault needing no study.",
          "A reason to abandon all experiments.",
          "A similar problem in the circuit and echo."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "An analyst used a tuning fork as an analogue. The analogy showed an analogous fault. With an analytic, analytical analysis, they could analyse the circuit and analyze its echo. Once safe, the experiment could amuse people again.",
          "focusQuote": "The analogy showed an analogous fault."
        },
        "explanation": "类比显示类似故障，推动线路和回声分析。"
      }
    ]
  },
  {
    "id": "expansion-a-009",
    "questions": [
      {
        "type": "detail",
        "prompt": "When did Lin hurt his ankle?",
        "options": [
          "While reaching the leaning antenna.",
          "While reading an announcement.",
          "While carrying the electrician's tools.",
          "While opening a controller with his foot."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "An antique antenna leaned at a strange angle, and Lin hurt his ankle reaching it.",
          "focusQuote": "An antique antenna leaned at a strange angle, and Lin hurt his ankle reaching it."
        },
        "explanation": "够倾斜天线时受伤，未说脚踩控制器。"
      },
      {
        "type": "detail",
        "prompt": "What was the true culprit?",
        "options": [
          "The electrician's manner.",
          "An ant inside the controller.",
          "The anniversary's date.",
          "The announcer's voice."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The true culprit was an ant inside a controller, beside an overheated anode.",
          "focusQuote": "The true culprit was an ant inside a controller, beside an overheated anode."
        },
        "explanation": "控制器中的蚂蚁是明确真因，非电工态度。"
      },
      {
        "type": "inference",
        "prompt": "How did Lin ultimately view the electrician?",
        "options": [
          "As the cause of every fault.",
          "As a worker whose help was unnecessary.",
          "As an ordinary person who provided valuable help.",
          "As someone who had sabotaged the antenna."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "“Anyhow, anyone could miss that,” Lin said. “It could happen anywhere, anyway.” The electrician fixed it, then helped anchor the antenna. Far apart from the myths, this ordinary man was the rescue party’s angel.",
          "focusQuote": "The electrician fixed it, then helped anchor the antenna."
        },
        "explanation": "修复并固定天线的工人提供重要帮助，焦虑不等于破坏。"
      }
    ]
  },
  {
    "id": "expansion-a-010",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the attractive appliance conceal?",
        "options": [
          "A completed repair application.",
          "A returned meal.",
          "An appointment letter.",
          "Faulty apparatus."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Its appealing appearance hid faulty apparatus.",
          "focusQuote": "Its appealing appearance hid faulty apparatus."
        },
        "explanation": "好看外形掩盖设备故障。"
      },
      {
        "type": "detail",
        "prompt": "What did the inspector find?",
        "options": [
          "A considerable blockage in the pipe.",
          "A new applicant's name.",
          "An empty letter box.",
          "A harmless decoration."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "His appraisal found an appreciable blockage.",
          "focusQuote": "His appraisal found an appreciable blockage."
        },
        "explanation": "检查发现管道明显堵塞。"
      },
      {
        "type": "inference",
        "prompt": "Why did the inspection matter?",
        "options": [
          "It replaced every later check.",
          "It identified a problem and supported repair funding.",
          "It showed the apology had already fixed everything.",
          "It made the neighbors' meals unnecessary."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "An inspector’s appointment let him appear and appraise the pipe. His appraisal found an appreciable blockage. The applicable rules let him apply for repair funds; the committee would appoint him supervisor.",
          "focusQuote": "His appraisal found an appreciable blockage. The applicable rules let him apply for repair funds; the committee would appoint him supervisor."
        },
        "explanation": "查明堵塞并申请修缮资金，初次道歉未解决故障。"
      }
    ]
  },
  {
    "id": "expansion-a-011",
    "questions": [
      {
        "type": "detail",
        "prompt": "What sparked the argument?",
        "options": [
          "The architect's arrival at a harbor.",
          "An arrow hitting a support.",
          "An arbitrary funding cut.",
          "Removal of the entire arena."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "An arbitrary cut in the appropriation sparked an argument.",
          "focusQuote": "An arbitrary cut in the appropriation sparked an argument."
        },
        "explanation": "拨款被随意削减引发争论。"
      },
      {
        "type": "detail",
        "prompt": "What could support the damaged arch?",
        "options": [
          "An arc designed through arithmetic.",
          "A replacement suit of armor.",
          "Unused army arrows.",
          "A large sheet of cloth."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Problems would arise, but his colleague was apt at arithmetic: an arc could support the damaged arch.",
          "focusQuote": "Problems would arise, but his colleague was apt at arithmetic: an arc could support the damaged arch."
        },
        "explanation": "算术帮助设计弧形支撑，盔甲非修门材料。"
      },
      {
        "type": "inference",
        "prompt": "Why did the support arrangement matter later?",
        "options": [
          "It delayed every architectural study.",
          "It removed the council from the arena.",
          "It brought the army to the arena.",
          "It stopped an arrow and protected people."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "They could arrange an array of supports. The arrangement stopped an arrow when the army arrived. It would arouse hope among guards whose armor had failed them.",
          "focusQuote": "The arrangement stopped an arrow when the army arrived."
        },
        "explanation": "安排挡箭并唤起盔甲失效者希望，非招来军队。"
      }
    ]
  },
  {
    "id": "expansion-a-012",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was the artist initially arrested?",
        "options": [
          "His doctor had disappeared.",
          "An article supposedly exposed artillery plans.",
          "He confessed to attacking the general.",
          "His painting was sold abroad."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "An article supposedly revealed artillery plans.",
          "focusQuote": "An article supposedly revealed artillery plans."
        },
        "explanation": "被指泄露炮兵图，未说供认或卖画。"
      },
      {
        "type": "detail",
        "prompt": "What plot did Lin expose?",
        "options": [
          "Stealing all medical illustrations.",
          "Replacing the general's article.",
          "Assassinating a doctor.",
          "Closing an artificial channel."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin exposed an assassination plot: raiders meant to assassinate a doctor.",
          "focusQuote": "Lin exposed an assassination plot: raiders meant to assassinate a doctor."
        },
        "explanation": "揭出的阴谋是刺杀医师。"
      },
      {
        "type": "inference",
        "prompt": "Why was the treason accusation misguided?",
        "options": [
          "The painting illustrated an artery for healers.",
          "The painter had assisted the raiders.",
          "The general understood every medical diagram.",
          "The painter ordered the attack while asleep."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The painter had been asleep and knew no aspect of the assault. His artistic aspiration was to illustrate an artery for healers. To ascribe treason to his art was, he said, the act of an ass.",
          "focusQuote": "His artistic aspiration was to illustrate an artery for healers."
        },
        "explanation": "画的是供医者用的动脉图，非军事泄密。"
      }
    ]
  },
  {
    "id": "expansion-a-013",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the apprentice asked to assess?",
        "options": [
          "An athletic competition.",
          "The council's next leader.",
          "A space mission.",
          "The value of a star chart."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "The star-map association would assemble an assembly and assign an apprentice an assignment: assess a chart as an asset.",
          "focusQuote": "The star-map association would assemble an assembly and assign an apprentice an assignment: assess a chart as an asset."
        },
        "explanation": "任务是评估星图，宇航员只是未来愿望。"
      },
      {
        "type": "detail",
        "prompt": "Who confirmed the coast had changed?",
        "options": [
          "An athlete returning across the Atlantic.",
          "The associate predicting profit.",
          "A sailor refusing maps.",
          "The assistant copying symbols."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "An athletic athlete returning across the Atlantic confirmed it.",
          "focusQuote": "An athletic athlete returning across the Atlantic confirmed it."
        },
        "explanation": "横渡大西洋归来的运动员确认海岸变化。"
      },
      {
        "type": "inference",
        "prompt": "Why did the apprentice challenge the assessment?",
        "options": [
          "He preferred promises to astronomy.",
          "He had evidence that the coastline had moved.",
          "He believed old symbols never mattered.",
          "He wanted every route to remain profitable."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The assessment was wrong. An associate would assume the route profitable, but the apprentice was assertive enough to assert that the coast had moved. His mentor’s assurance could assure him, but only evidence could astonish the council.",
          "focusQuote": "An associate would assume the route profitable, but the apprentice was assertive enough to assert that the coast had moved."
        },
        "explanation": "他指出海岸移动，质疑盈利假设；不是仅靠鼓励。"
      }
    ]
  },
  {
    "id": "expansion-a-014",
    "questions": [
      {
        "type": "detail",
        "prompt": "What caused gas to escape from the lamp?",
        "options": [
          "A lost auction invitation.",
          "A buyer touching the diagram.",
          "A failed seal during a pressure change.",
          "A new name for the lamp."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "Its attractive glow was the main attraction, but a failed seal leaked gas into the atmosphere as atmospheric pressure changed.",
          "focusQuote": "Its attractive glow was the main attraction, but a failed seal leaked gas into the atmosphere as atmospheric pressure changed."
        },
        "explanation": "密封失效及气压变化导致漏气。"
      },
      {
        "type": "detail",
        "prompt": "What was required before lighting it?",
        "options": [
          "An empty auction room.",
          "An agreed purchase price.",
          "A revised atomic diagram.",
          "Steady pressure."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "It said the lamp must attain steady pressure before any attempt to light it.",
          "focusQuote": "It said the lamp must attain steady pressure before any attempt to light it."
        },
        "explanation": "点灯之前须达到稳压条件。"
      },
      {
        "type": "inference",
        "prompt": "What did Mei attribute the risk to?",
        "options": [
          "A concealed warning.",
          "The existence of atoms.",
          "The buyers' interest in the glow.",
          "The attendant's careful reading."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "She found a deleted warning and stopped a possible attack of fumes. Buyers changed their attitude; she would attribute the risk to concealment, not magic. Everyone left safely.",
          "focusQuote": "Buyers changed their attitude; she would attribute the risk to concealment, not magic."
        },
        "explanation": "危险来自警告被隐瞒，而不是魔法或认真阅读。"
      }
    ]
  },
  {
    "id": "expansion-a-015",
    "questions": [
      {
        "type": "detail",
        "prompt": "What played through the car's audio?",
        "options": [
          "A repair report.",
          "An author's autobiography.",
          "An expert's live conversation.",
          "A new set of directions."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "An author’s autobiography played as audio from an old automobile.",
          "focusQuote": "An author’s autobiography played as audio from an old automobile."
        },
        "explanation": "音频是作家的自传。"
      },
      {
        "type": "detail",
        "prompt": "What did Mei find during the aural test?",
        "options": [
          "A thinking machine.",
          "A book with no recording.",
          "Circuits amplifying a tape.",
          "A complete lack of spare parts."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei’s aural test found auxiliary circuits used to augment a tape.",
          "focusQuote": "Mei’s aural test found auxiliary circuits used to augment a tape."
        },
        "explanation": "辅助电路增强磁带，自动化不等于思想。"
      },
      {
        "type": "main",
        "prompt": "What changed after repair?",
        "options": [
          "The car stopped telling stories.",
          "It became an independent thinker.",
          "The owner rejected the findings.",
          "Stories continued without a false claim."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The owner could avail himself of an average repair shop on the avenue. He accepted the discovery and repaired the car; it continued telling stories, now without a false claim.",
          "focusQuote": "He accepted the discovery and repaired the car; it continued telling stories, now without a false claim."
        },
        "explanation": "修好后仍讲故事，只不再虚称自主思考。"
      }
    ]
  },
  {
    "id": "expansion-a-016",
    "questions": [
      {
        "type": "detail",
        "prompt": "What date was claimed for the axle?",
        "options": [
          "300 B.C.",
          "300 A.D.",
          "Three years earlier.",
          "The award year."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "After an award, Mei received an axle dated to 300 B.C.",
          "focusQuote": "After an award, Mei received an axle dated to 300 B.C."
        },
        "explanation": "宣称公元前三百年，非公元后。"
      },
      {
        "type": "detail",
        "prompt": "What was behind the supposed curse?",
        "options": [
          "An archaeological prize.",
          "A failed aviation experiment.",
          "The donor's confession.",
          "An ancient rescue."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The supposed curse was a failed aviation experiment.",
          "focusQuote": "The supposed curse was a failed aviation experiment."
        },
        "explanation": "真相为失败航空实验，不是超自然诅咒。"
      },
      {
        "type": "inference",
        "prompt": "Why did Mei await an answer?",
        "options": [
          "Every detail was already clear.",
          "The age claim had been proved.",
          "The donor's background was vague.",
          "The graduate had refused to help."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "After an award, Mei received an axle dated to 300 B.C. A bachelor who had studied archaeology offered help, but the donor’s background was vague. She stayed awake to await his answer.",
          "focusQuote": "A bachelor who had studied archaeology offered help, but the donor’s background was vague."
        },
        "explanation": "背景模糊促使等待，未证实年代。"
      }
    ]
  },
  {
    "id": "expansion-a-017",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the banker eat before becoming ill?",
        "options": [
          "A biscuit used as bait.",
          "A band's baked meal.",
          "Beans from his luggage.",
          "Bacon on the balcony."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "After badminton, a bald banker ate bacon on a balcony and became badly ill.",
          "focusQuote": "After badminton, a bald banker ate bacon on a balcony and became badly ill."
        },
        "explanation": "阳台吃培根后病倒；饼干是调查诱饵。"
      },
      {
        "type": "detail",
        "prompt": "Why did the band member steal the ballot?",
        "options": [
          "Fear of bankruptcy.",
          "A plan to poison the banker.",
          "A wish to replace the ballet.",
          "A need for a different badge."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A band member returned the ballot: fearing bankruptcy, he had stolen it before the banker went bankrupt.",
          "focusQuote": "A band member returned the ballot: fearing bankruptcy, he had stolen it before the banker went bankrupt."
        },
        "explanation": "乐手因害怕破产盗票，未说他毒害银行家。"
      },
      {
        "type": "inference",
        "prompt": "What distinction was important?",
        "options": [
          "The badge proved who stole food.",
          "Bacteria explained illness but not theft.",
          "The ballot caused bacterial illness.",
          "The mouse revealed the band member's motive."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "She would bake a biscuit as bait and balance it beside a bamboo basket, tied to a balloon. A mouse led her to bacteria in the food; one bacterium explained illness but not theft.",
          "focusQuote": "A mouse led her to bacteria in the food; one bacterium explained illness but not theft."
        },
        "explanation": "细菌解释病因，却不能解盗票，须分查。"
      }
    ]
  },
  {
    "id": "expansion-a-018",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the barber say had not occurred?",
        "options": [
          "Sale of every barrel.",
          "An early banquet.",
          "Delivery of barley by barge.",
          "Payment to the baron."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A barber from the bar said no barge had delivered barley to the barn.",
          "focusQuote": "A barber from the bar said no barge had delivered barley to the barn."
        },
        "explanation": "没有驳船送大麦到谷仓。"
      },
      {
        "type": "detail",
        "prompt": "Who broke the barrier with a gun?",
        "options": [
          "An unpaid boatman.",
          "The baron's cook.",
          "A sailor paid in advance.",
          "The banquet's barber."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A bandit wearing a bandage broke the barrier. He was an unpaid boatman, firing into the air.",
          "focusQuote": "He was an unpaid boatman, firing into the air."
        },
        "explanation": "来者为未领工钱的船工，朝空中开枪。"
      },
      {
        "type": "inference",
        "prompt": "How did Mei respond to his grievance?",
        "options": [
          "She allowed more firing.",
          "She ignored the money trail.",
          "She offered a new banquet.",
          "She traced money, paid wages, and urged surrender."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A bandit wearing a bandage broke the barrier. He was an unpaid boatman, firing into the air. Mei traced the sale money, settled his wages, and persuaded him to surrender.",
          "focusQuote": "Mei traced the sale money, settled his wages, and persuaded him to surrender."
        },
        "explanation": "追款结工钱并劝投降，非放任武力。"
      }
    ]
  },
  {
    "id": "expansion-a-019",
    "questions": [
      {
        "type": "detail",
        "prompt": "What disguise did the base use?",
        "options": [
          "A charity kitchen.",
          "A baseball school.",
          "A medicine warehouse.",
          "A seaside hotel."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A base near the bazaar posed as a baseball school.",
          "focusQuote": "A base near the bazaar posed as a baseball school."
        },
        "explanation": "基地冒充棒球学校，不是旅馆。"
      },
      {
        "type": "detail",
        "prompt": "What did the man actually want?",
        "options": [
          "To hide weapons.",
          "To sell donations.",
          "To bathe after charity baking.",
          "To replace the batteries."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Basically, the man only wished to bathe after baking for charity.",
          "focusQuote": "Basically, the man only wished to bathe after baking for charity."
        },
        "explanation": "烘焙慈善点心后想洗澡，非藏武器。"
      },
      {
        "type": "inference",
        "prompt": "What supported the baker's innocence?",
        "options": [
          "All traders confessing.",
          "An entirely empty basement.",
          "Proof the school never existed.",
          "A shipping receipt."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The real battle was upstairs, where traders wanted the donations. A shipping receipt became the basis of Mei’s case and proved the baker innocent.",
          "focusQuote": "A shipping receipt became the basis of Mei’s case and proved the baker innocent."
        },
        "explanation": "货运收据成调查依据并证烘焙者清白。"
      }
    ]
  },
  {
    "id": "expansion-a-020",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the beggar think the bead could do?",
        "options": [
          "Control a beast.",
          "Answer every prayer.",
          "Produce beans.",
          "Repair a house."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "His belief was that it controlled a beast.",
          "focusQuote": "His belief was that it controlled a beast."
        },
        "explanation": "他以为可控野兽，未说可制造豆子。"
      },
      {
        "type": "detail",
        "prompt": "What did he do after his behavior changed?",
        "options": [
          "Sell the insects.",
          "Return the bead and feed the insects.",
          "Demand another prayer.",
          "Keep living beings as possessions."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "He returned the bead and fed the insects.",
          "focusQuote": "He returned the bead and fed the insects."
        },
        "explanation": "归珠、喂虫是明确改变。"
      },
      {
        "type": "main",
        "prompt": "What shift does his story describe?",
        "options": [
          "Prayer becoming a jewelry business.",
          "Hunger turning into control over animals.",
          "Possessive expectations giving way to kinder conduct.",
          "Practice ending in a refusal of all help."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Learning to behave kindly changed his behavior. He returned the bead and fed the insects. That was the true beginning of his practice.",
          "focusQuote": "Learning to behave kindly changed his behavior."
        },
        "explanation": "由想占有生灵转向友善行为，非成功统领兽群。"
      }
    ]
  },
  {
    "id": "expansion-a-021",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the rescuer actually afraid of?",
        "options": [
          "Losing the berry drink.",
          "Carrying medicine beyond the boundary.",
          "Failing to find her belt.",
          "Being unable to betray her teacher."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Besides, her fear was only about carrying medicine beyond the boundary.",
          "focusQuote": "Besides, her fear was only about carrying medicine beyond the boundary."
        },
        "explanation": "她怕的是越界运药，非背叛师父或饮料丢失。"
      },
      {
        "type": "detail",
        "prompt": "Who was meant to benefit from the medicine?",
        "options": [
          "The villagers making the bet.",
          "The friend near the bench.",
          "Her injured beloved.",
          "Lin's teacher at the boundary."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Its benign ingredients would benefit her injured beloved.",
          "focusQuote": "Its benign ingredients would benefit her injured beloved."
        },
        "explanation": "温和成分将帮助受伤的爱人；不是下注者。"
      },
      {
        "type": "main",
        "prompt": "What misunderstanding drives the story?",
        "options": [
          "Her anxiety was mistaken for intended betrayal.",
          "The belt was believed to contain a beast.",
          "The medicine was proved harmful to everyone.",
          "The villagers thought she refused every gift."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A biased bet predicted that this beneficiary would betray her teacher. Lin rejected the bias. Besides, her fear was only about carrying medicine beyond the boundary.",
          "focusQuote": "Besides, her fear was only about carrying medicine beyond the boundary."
        },
        "explanation": "把运药的焦虑歪解为背叛，是有偏见的猜测；原文未说有害。"
      }
    ]
  },
  {
    "id": "expansion-a-022",
    "questions": [
      {
        "type": "detail",
        "prompt": "Whom was the charity sale intended to help?",
        "options": [
          "The printer's business partners.",
          "Children injured at birth.",
          "Every retired bishop.",
          "Students without bicycles."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A bishop offered his biography at a charity bid for children injured at birth.",
          "focusQuote": "A bishop offered his biography at a charity bid for children injured at birth."
        },
        "explanation": "义卖旨在帮助出生受伤的孩子，而非印刷商利润。"
      },
      {
        "type": "detail",
        "prompt": "What happened when an honest edition was proposed?",
        "options": [
          "The bishop cancelled every sale.",
          "The printer destroyed the records.",
          "The buyers doubled their bids.",
          "The buyers lowered their bids."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The printer would bind an honest edition. Buyers lowered their bids, and the bishop accepted it: biotechnology should help families, not sell false wonders.",
          "focusQuote": "Buyers lowered their bids, and the bishop accepted it: biotechnology should help families, not sell false wonders."
        },
        "explanation": "诚实版本提出后买家降价，主教接受。"
      },
      {
        "type": "inference",
        "prompt": "What problem did Mei uncover?",
        "options": [
          "Technical work had been inflated into miracle claims.",
          "The children had hidden a genuine invention.",
          "The printer had never produced a book.",
          "Biology notes proved the billion-dollar value."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei came by bicycle with the printer’s bill. A biscuit concealed a bite in the page; ordinary biotech work had become a bizarre miracle claim. The bishop complained bitterly, his voice bitter with bitterness.",
          "focusQuote": "A biscuit concealed a bite in the page; ordinary biotech work had become a bizarre miracle claim."
        },
        "explanation": "普通生物技术被变成奇迹宣传，不证明巨额价值。"
      }
    ]
  },
  {
    "id": "expansion-a-023",
    "questions": [
      {
        "type": "detail",
        "prompt": "Who was initially blamed for the accident?",
        "options": [
          "The healer treating the apprentice.",
          "The injured apprentice's neighbor.",
          "The blind mixer who prepared bleach.",
          "A gardener repairing the blade."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "Neighbours would blame a blind, blond mixer who had prepared bleach.",
          "focusQuote": "Neighbours would blame a blind, blond mixer who had prepared bleach."
        },
        "explanation": "邻人最初指责配漂白剂的失明金发工人。"
      },
      {
        "type": "detail",
        "prompt": "What explained the harmful mixture?",
        "options": [
          "Paint from a new blanket.",
          "Blossom juice mixed into the wrong blend.",
          "Salt from the garden path.",
          "A missing page from the ledger."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A blank ledger made the outlook bleak, but a blink revealed a blossom beside the apprentice’s blouse. Its juice, blended into the wrong blend, explained the blood.",
          "focusQuote": "Its juice, blended into the wrong blend, explained the blood."
        },
        "explanation": "花汁混错配料解释伤害；空账本不直接制造混液。"
      },
      {
        "type": "inference",
        "prompt": "What does the final outcome show about the accusation?",
        "options": [
          "It correctly identified the mixer.",
          "It proved the apprentice had never been hurt.",
          "It remained the only available explanation.",
          "It was overturned by a different explanation."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The mixer was innocent. He returned to a garden in bloom, and the smith asked the healer to bless the recovered apprentice.",
          "focusQuote": "The mixer was innocent."
        },
        "explanation": "工人最终无辜，实际混液解释推翻初指责；伤害仍真实。"
      }
    ]
  },
  {
    "id": "expansion-a-024",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did Mei notice as the boiler began to boil?",
        "options": [
          "A loose bolt.",
          "A damaged booklet.",
          "A worker's broken bone.",
          "A new factory banner."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Mei found a loose bolt as the boiler began to boil.",
          "focusQuote": "Mei found a loose bolt as the boiler began to boil."
        },
        "explanation": "锅炉煮沸时发现松螺栓，骨折并未发生。"
      },
      {
        "type": "detail",
        "prompt": "What important fact did the worker admit?",
        "options": [
          "He had placed the bomb.",
          "He had seen the intruder.",
          "He had received every bonus.",
          "He had written the board's warning."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "With a blush, a worker admitted seeing the intruder.",
          "focusQuote": "With a blush, a worker admitted seeing the intruder."
        },
        "explanation": "工人承认见到入侵者，非承认放炸弹。"
      },
      {
        "type": "inference",
        "prompt": "Why did the meeting become urgent?",
        "options": [
          "The bonuses had become too large.",
          "The board disliked long discussions.",
          "A hidden bomb added to a safety emergency.",
          "The booklets had been delivered late."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "She gave a blunt warning and spoke bluntly to the board: a safety blunder had endangered workers. The boring meeting could bore anyone, but a bomb behind a boot made it urgent. Steam would blur her sight.",
          "focusQuote": "The boring meeting could bore anyone, but a bomb behind a boot made it urgent."
        },
        "explanation": "靴后炸弹与已有安全失误令会议紧急，不是枯燥本身。"
      }
    ]
  },
  {
    "id": "expansion-a-025",
    "questions": [
      {
        "type": "detail",
        "prompt": "What caused the cart to hit a branch?",
        "options": [
          "A deliberate turn by Lin.",
          "A bowl placed in its path.",
          "The villagers' boycott.",
          "A failed brake."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A failed brake sent a cart into a branch, making the bowl bounce.",
          "focusQuote": "A failed brake sent a cart into a branch, making the bowl bounce."
        },
        "explanation": "刹车故障造成撞树，不是碗或抵制直接致撞。"
      },
      {
        "type": "detail",
        "prompt": "What did the trader do afterward?",
        "options": [
          "Opened the road and repaired the brakes.",
          "Made the boundary larger.",
          "Demanded the driver pay for damage.",
          "Moved every village into his property."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "He opened the road and repaired the brakes.",
          "focusQuote": "He opened the road and repaired the brakes."
        },
        "explanation": "后来开放道路并修刹车，未说扩大私界。"
      },
      {
        "type": "inference",
        "prompt": "What changed in the trader's attitude?",
        "options": [
          "He became proud of blocking the road.",
          "Shock and shame led him to change his conduct.",
          "He decided every villager was an enemy.",
          "He treated the crash as a harmless performance."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The trader clutched his bosom, shocked to his bowels. At the bottom of his grief lay shame. He opened the road and repaired the brakes.",
          "focusQuote": "At the bottom of his grief lay shame. He opened the road and repaired the brakes."
        },
        "explanation": "惊惧与羞愧对应行动改变；不是继续炫耀封路。"
      }
    ]
  },
  {
    "id": "expansion-a-026",
    "questions": [
      {
        "type": "detail",
        "prompt": "What failed while the couple crossed the bridge?",
        "options": [
          "The bride's carriage wheels.",
          "The guard's briefcase lock.",
          "The brass bridle.",
          "The village's brewing equipment."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A bride and bridegroom crossed a brick bridge when a brass bridle failed.",
          "focusQuote": "A bride and bridegroom crossed a brick bridge when a brass bridle failed."
        },
        "explanation": "黄铜马笼头失灵，并非酒坊设备。"
      },
      {
        "type": "detail",
        "prompt": "What did Lin's report identify as the cause?",
        "options": [
          "Waste from the local brewery.",
          "The horse's breed breaking a weak fixture.",
          "A proven bribe to the bride.",
          "The guests standing on the bridge."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The horse’s breed, not waste from the local brew, had broken a weak fixture.",
          "focusQuote": "The horse’s breed, not waste from the local brew, had broken a weak fixture."
        },
        "explanation": "马的品种使弱配件损坏，原文明确否定酿酒废物。"
      },
      {
        "type": "inference",
        "prompt": "What does the bride's response indicate?",
        "options": [
          "She insisted on staying mounted.",
          "She cancelled every future ceremony.",
          "She wanted the guard to blame the guests.",
          "She acted to lead the guests to safety."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The brave bride dismounted and led the guests safely. Lin took a steady breath, and the ceremony went ahead.",
          "focusQuote": "The brave bride dismounted and led the guests safely."
        },
        "explanation": "她下马带宾客安全走过，显示先照顾现场安全。"
      }
    ]
  },
  {
    "id": "expansion-a-027",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was wrong with the bell's frame?",
        "options": [
          "It was brittle and shaking.",
          "It was hidden beneath the brook.",
          "It had been strengthened that morning.",
          "It had no connection to the bell."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The bell’s brittle frame shook; the guide furrowed his brow and began to brood.",
          "focusQuote": "The bell’s brittle frame shook; the guide furrowed his brow and began to brood."
        },
        "explanation": "钟架脆弱且晃动；并非已加固。"
      },
      {
        "type": "detail",
        "prompt": "What did Lin do to address the danger?",
        "options": [
          "He asked the boy to climb higher.",
          "He secured the frame.",
          "He removed the boy's hat.",
          "He played a louder broadcast."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin secured the frame.",
          "focusQuote": "Lin secured the frame."
        },
        "explanation": "他固定钟架，而非继续催爬或加大广播。"
      },
      {
        "type": "inference",
        "prompt": "Why did the guide begin to feel like a brute?",
        "options": [
          "He had broken the boy's hat.",
          "He had missed the tourists' arrival.",
          "He recognized the cruelty of demanding that the boy climb.",
          "He had refused to show anyone the brochure."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A bristle had caused a boy’s bruise. The bell’s brittle frame shook; the guide furrowed his brow and began to brood. His brutal demand that the boy climb it made him feel a brute.",
          "focusQuote": "His brutal demand that the boy climb it made him feel a brute."
        },
        "explanation": "粗暴要求孩子上脆架令他自觉野蛮；不是帽子或宣传册问题。"
      }
    ]
  },
  {
    "id": "expansion-a-028",
    "questions": [
      {
        "type": "detail",
        "prompt": "What explanation did the bureau give for the dry well?",
        "options": [
          "The absence of animals.",
          "A shortage of witnesses.",
          "An unrelated religious dispute.",
          "Its budget."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A bureau blamed its budget for a dry well.",
          "focusQuote": "A bureau blamed its budget for a dry well."
        },
        "explanation": "办事处把干井归于预算；证人是后面的调查步骤。"
      },
      {
        "type": "detail",
        "prompt": "What showed that someone had staged the incident?",
        "options": [
          "A hidden bullet.",
          "The school's borrowed bucket.",
          "An ordinary flower bud.",
          "The number of farmers present."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A hidden bullet proved someone had staged it.",
          "focusQuote": "A hidden bullet proved someone had staged it."
        },
        "explanation": "隐藏子弹证实人为安排，桶本身不是造假证物。"
      },
      {
        "type": "main",
        "prompt": "Which outcome best captures Lin's intervention?",
        "options": [
          "He received a large payment for the well.",
          "The trick was exposed and animals regained water.",
          "The bureau stopped every farmer from approaching.",
          "The well remained dry after the witnesses arrived."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "His bulletin exposed the trick. Farmers brought a bunch of witnesses, and the bureau cleared the well. Lin would not earn a buck, but the animals drank again.",
          "focusQuote": "Farmers brought a bunch of witnesses, and the bureau cleared the well."
        },
        "explanation": "揭穿把戏、清井后动物喝水；林没有赚取酬金。"
      }
    ]
  },
  {
    "id": "expansion-a-029",
    "questions": [
      {
        "type": "detail",
        "prompt": "What guided Mei toward the cabin?",
        "options": [
          "The cabbage's position.",
          "The thief's written invitation.",
          "Prints in butter.",
          "The cemetery's new sign."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "Prints in butter led Mei to bypass the back door and reach a cabin, where a butterfly circled a burner.",
          "focusQuote": "Prints in butter led Mei to bypass the back door and reach a cabin, where a butterfly circled a burner."
        },
        "explanation": "黄油中的印记引她绕过后门到小屋。"
      },
      {
        "type": "detail",
        "prompt": "When did Mei press the alarm button?",
        "options": [
          "After the entire box had burst.",
          "Before entering the butcher's shop.",
          "After the burglar was released.",
          "Before the box could burst."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Mei pressed an alarm button before the box could burst.",
          "focusQuote": "Mei pressed an alarm button before the box could burst."
        },
        "explanation": "在箱子爆裂前报警；不能倒置先后。"
      },
      {
        "type": "inference",
        "prompt": "Why was the cigarette butt important?",
        "options": [
          "It exposed the thief's hiding place.",
          "It explained the butcher's prices.",
          "It showed all grain had burned.",
          "It proved the butterfly belonged to Mei."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A loud buzz rose as the flame began to burn a box of burial supplies. Behind a bush, the thief meant to bury a stolen bushel of grain. A cigarette butt revealed his hiding place.",
          "focusQuote": "A cigarette butt revealed his hiding place."
        },
        "explanation": "烟蒂揭出藏身处，不证明粮尽焚或物价。"
      }
    ]
  },
  {
    "id": "expansion-a-030",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the cafe claim the camera could determine?",
        "options": [
          "A cake's recipe and owner.",
          "A cake's calories and calcium.",
          "The researcher's exact location.",
          "The candidate's academic record."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A campus cafe displayed a camera inside a cage, claiming that calculus measured a cake’s calorie count and calcium.",
          "focusQuote": "A campus cafe displayed a camera inside a cage, claiming that calculus measured a cake’s calorie count and calcium."
        },
        "explanation": "宣称可测蛋糕热量与钙，不是识别配方或身份。"
      },
      {
        "type": "detail",
        "prompt": "How were the displayed calculations produced?",
        "options": [
          "By a normal dessert calculation.",
          "By the camel outside the cafe.",
          "By a candidate feeding invented values through a cable.",
          "By a verified test on real food."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A candidate fed invented calculations through a cable from a kitchen cabinet.",
          "focusQuote": "A candidate fed invented calculations through a cable from a kitchen cabinet."
        },
        "explanation": "候选人经电缆输入虚构计算结果，并非测真实食物。"
      },
      {
        "type": "inference",
        "prompt": "Why did the sales show have to be cancelled?",
        "options": [
          "The food had all been eaten.",
          "The calendar had disappeared.",
          "The researcher had refused a campsite.",
          "The device's results were shown to be fabricated."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The calculator failed a plain cafeteria dessert. A candidate fed invented calculations through a cable from a kitchen cabinet. She remained calm and showed the error.",
          "focusQuote": "A candidate fed invented calculations through a cable from a kitchen cabinet."
        },
        "explanation": "错误及假数据被揭露，促使取消展示；不是日程或食物耗尽。"
      }
    ]
  },
  {
    "id": "expansion-a-031",
    "questions": [
      {
        "type": "detail",
        "prompt": "Whom was the captain escorting?",
        "options": [
          "A cancer patient.",
          "A prisoner returning to court.",
          "An injured pirate.",
          "A worker repairing a cannon."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A captain in a blue cap escorted a cancer patient along a canal.",
          "focusQuote": "A captain in a blue cap escorted a cancer patient along a canal."
        },
        "explanation": "护送的是癌症患者，不是后面释放的俘虏。"
      },
      {
        "type": "detail",
        "prompt": "Why did Lin measure the capacitor's capacitance?",
        "options": [
          "To choose a new sail color.",
          "To use it to delay the fuse.",
          "To increase the pirates' cannon range.",
          "To calculate the patient's medicine cost."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Lin measured its capacitance, using it to delay the fuse.",
          "focusQuote": "Lin measured its capacitance, using it to delay the fuse."
        },
        "explanation": "测容量用于延迟引信，非帮助海盗增程。"
      },
      {
        "type": "inference",
        "prompt": "What priority is shown after they rounded the cape?",
        "options": [
          "Capturing another ship for recognition.",
          "Returning every pirate to the canal.",
          "Bringing people home rather than seeking glory.",
          "Replacing the captive with a new prisoner."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "They rounded the cape and freed a captive, refusing to capture another vessel for glory. At the canteen, Lin wrote a chart caption about bringing everyone home.",
          "focusQuote": "They rounded the cape and freed a captive, refusing to capture another vessel for glory."
        },
        "explanation": "释放俘虏并拒为荣耀夺船，图注也是带大家回家；非追功。"
      }
    ]
  },
  {
    "id": "expansion-a-032",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where was the cash hidden?",
        "options": [
          "In the carriage's wheels.",
          "Inside the cassette.",
          "Behind the castle's wall.",
          "Beneath the carrot basket."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A carpenter sent a carrot basket to a castle, hiding cash beneath it.",
          "focusQuote": "A carpenter sent a carrot basket to a castle, hiding cash beneath it."
        },
        "explanation": "现金藏在胡萝卜篮下面。"
      },
      {
        "type": "detail",
        "prompt": "What did Mei find under the carpet?",
        "options": [
          "A carbon copy.",
          "A cardinal's costume.",
          "A new basket of carrots.",
          "A wooden stage mask."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei found a carbon copy under a carpet and a cassette in a cart.",
          "focusQuote": "Mei found a carbon copy under a carpet and a cassette in a cart."
        },
        "explanation": "地毯下是复写副本，磁带则在推车里。"
      },
      {
        "type": "inference",
        "prompt": "Why was the payment not a robbery?",
        "options": [
          "The carrier had guessed its value.",
          "It rewarded the carpenter's years of church repairs.",
          "Every cast member owned the castle.",
          "The cashier had refused to trace it."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A cast member had played the carpenter. This was no robbery: the payment rewarded years of his career, repairing the church. Mei returned the wages.",
          "focusQuote": "This was no robbery: the payment rewarded years of his career, repairing the church."
        },
        "explanation": "它是多年修教堂的酬劳，非无来源赃款。"
      }
    ]
  },
  {
    "id": "expansion-a-033",
    "questions": [
      {
        "type": "detail",
        "prompt": "Whom did the caretaker blame for the collapse?",
        "options": [
          "The families at the shelter.",
          "The locked room's occupant.",
          "The cattle beneath the cathedral.",
          "The clerk compiling the catalog."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A collapse caused a casualty, but a casual caretaker blamed cattle beneath a cathedral.",
          "focusQuote": "A collapse caused a casualty, but a casual caretaker blamed cattle beneath a cathedral."
        },
        "explanation": "看管人归咎地下牛群，非救济家庭。"
      },
      {
        "type": "detail",
        "prompt": "What physical problem contributed to the collapse?",
        "options": [
          "An extra entry in the catalog.",
          "Too many families eating nearby.",
          "A complete absence of cattle.",
          "A cavity and damaged cement."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A cavity weakened the ceiling; a leaking catalyst had attacked the cement.",
          "focusQuote": "A cavity weakened the ceiling; a leaking catalyst had attacked the cement."
        },
        "explanation": "空洞弱化顶棚，泄漏物损水泥；动物在场不是因果解释。"
      },
      {
        "type": "inference",
        "prompt": "What did Mei prioritize after finding the danger?",
        "options": [
          "Stopping entry and moving people and animals to safety.",
          "Continuing visits while revising the catalog.",
          "Closing the shelter before inspecting the cave.",
          "Blaming the cattle without checking the ceiling."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A Catholic shelter continued to cater for families. The cautious Mei made entry cease, rescued a man from a locked cell, and moved the cattle to safety.",
          "focusQuote": "The cautious Mei made entry cease, rescued a man from a locked cell, and moved the cattle to safety."
        },
        "explanation": "停止进入、救人并迁牛是明确措施；不是继续参观或仅改目录。"
      }
    ]
  },
  {
    "id": "expansion-a-034",
    "questions": [
      {
        "type": "detail",
        "prompt": "What happened to the cereal wine?",
        "options": [
          "It vanished from the center.",
          "It froze in a ceramic cup.",
          "It burned inside a glass.",
          "It stained every cemetery record."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "At a century ceremony, cereal wine froze inside a ceramic cup.",
          "focusQuote": "At a century ceremony, cereal wine froze inside a ceramic cup."
        },
        "explanation": "谷酒在陶杯内冻结；其他异变未出现。"
      },
      {
        "type": "detail",
        "prompt": "What supported the officials' mistaken certainty?",
        "options": [
          "A fully verified temperature record.",
          "The small crack alone.",
          "A false certificate.",
          "The cost of the ceremony."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Their certainty rested on a false certificate.",
          "focusQuote": "Their certainty rested on a false certificate."
        },
        "explanation": "确信依赖假证明，小裂纹不能解释冰。"
      },
      {
        "type": "inference",
        "prompt": "What was Mei's corrective approach?",
        "options": [
          "Spend more on impressive honors.",
          "Replace all wine with a different drink.",
          "Ignore temperature because the certificate existed.",
          "Require confirmation of the actual measurements."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Mei required the issuer to certify the real measurements. Not a cent was spent on false honours; people could celebrate an honest anniversary instead.",
          "focusQuote": "Mei required the issuer to certify the real measurements."
        },
        "explanation": "要求签发者证明真实测量，非靠证件或荣誉开销。"
      }
    ]
  },
  {
    "id": "expansion-a-035",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the charter forbid the host to add?",
        "options": [
          "A hidden fee.",
          "An additional contestant.",
          "A new chapter.",
          "A charity announcement."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "One chapter forbade the charming host to add a hidden charge.",
          "focusQuote": "One chapter forbade the charming host to add a hidden charge."
        },
        "explanation": "章程不许加暗费，未禁止新增参赛者或慈善宣传。"
      },
      {
        "type": "detail",
        "prompt": "What happened after the chart exposed the scheme?",
        "options": [
          "The contestants lost all their chances.",
          "The extra fee was removed.",
          "The chairman cancelled the charter.",
          "The host received a larger fee."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "He removed the fee, and his false charm lost power.",
          "focusQuote": "He removed the fee, and his false charm lost power."
        },
        "explanation": "图表揭露后取消费用，参赛机会恢复。"
      },
      {
        "type": "inference",
        "prompt": "What had the host's charming appearance concealed?",
        "options": [
          "A new charity venue.",
          "The lack of contestants.",
          "A greedy charging scheme.",
          "An error in the chalk's color."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The chairman asked Mei to inspect the charter. One chapter forbade the charming host to add a hidden charge. His characteristic smile had hidden his character; greed began to characterize the scheme.",
          "focusQuote": "His characteristic smile had hidden his character; greed began to characterize the scheme."
        },
        "explanation": "迷人笑容遮真实贪婪收费，并不证明合规。"
      }
    ]
  },
  {
    "id": "expansion-a-036",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where did the pursuit of the thief nearly end?",
        "options": [
          "At a castle gate.",
          "At a printing office.",
          "At the chemist's garden.",
          "At a chasm."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Mei’s chase of a cheat nearly ended at a chasm.",
          "focusQuote": "Mei’s chase of a cheat nearly ended at a chasm."
        },
        "explanation": "追逐几乎在深沟前结束。"
      },
      {
        "type": "detail",
        "prompt": "What information was hidden by the charcoal marks?",
        "options": [
          "A chemical recipe.",
          "The amount on a cheque.",
          "A neighbor's travel route.",
          "A new chess competition schedule."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "charcoal marks on the pieces hid a chemical recipe the chemist would cherish.",
          "focusQuote": "charcoal marks on the pieces hid a chemical recipe the chemist would cherish."
        },
        "explanation": "棋上炭记藏化学配方，非支票额。"
      },
      {
        "type": "inference",
        "prompt": "Why was the chessboard particularly valuable to the chemist?",
        "options": [
          "It was the only place he could eat.",
          "It served as a record of knowledge he cherished.",
          "It allowed the thief to leave safely.",
          "It contained proof that no theft occurred."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The thief puffed his cheek and kept up idle chatter. charcoal marks on the pieces hid a chemical recipe the chemist would cherish. His knowledge of chemistry had made the board a safe archive.",
          "focusQuote": "charcoal marks on the pieces hid a chemical recipe the chemist would cherish."
        },
        "explanation": "棋盘作配方档案，价值不止棋戏；最后仍证实盗窃。"
      }
    ]
  },
  {
    "id": "expansion-a-037",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the chief admit about his childhood?",
        "options": [
          "He had repaired the chimney.",
          "He had written the village's aid rules.",
          "He had once choked on food.",
          "He had led the village during a fire."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "Eating chicken in the chill, he admitted that he had once begun to choke on food.",
          "focusQuote": "Eating chicken in the chill, he admitted that he had once begun to choke on food."
        },
        "explanation": "承认小时候噎过，非当时已治理火灾。"
      },
      {
        "type": "detail",
        "prompt": "What choice faced the villagers after the fire?",
        "options": [
          "Which chicken dish to buy.",
          "Which old letter to discard.",
          "Where to hold a feast.",
          "Who should receive aid."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "Villagers had a choice after a fire: whom should they choose for aid?",
          "focusQuote": "Villagers had a choice after a fire: whom should they choose for aid?"
        },
        "explanation": "灾后核心选择是援助对象，而非菜肴。"
      },
      {
        "type": "inference",
        "prompt": "What change did the chief make at the end?",
        "options": [
          "He cleared the flue and prioritized vulnerable households.",
          "He gave richer meals to his preferred guests.",
          "He hid the chimney behind another letter.",
          "He stopped all aid until the village agreed."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "An old mark on his chin explained his fear. He would chop away the wood blocking the flue and put vulnerable households first.",
          "focusQuote": "He would chop away the wood blocking the flue and put vulnerable households first."
        },
        "explanation": "拆堵烟口木板并优先脆弱家庭；不是继续宴请或停援。"
      }
    ]
  },
  {
    "id": "expansion-a-038",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did Lin find in the chronicle?",
        "options": [
          "A plan for a new chorus.",
          "A record of the same event.",
          "The patient's medicine price.",
          "A list of every cigarette brand."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A chronic patient collapsed; Lin found the same event in a chronicle.",
          "focusQuote": "A chronic patient collapsed; Lin found the same event in a chronicle."
        },
        "explanation": "旧记录里有同样事件，说明并非第一次；非品牌单。"
      },
      {
        "type": "detail",
        "prompt": "What prevented air from moving around the room?",
        "options": [
          "The doctor's arrival.",
          "A missing music chord.",
          "Poor circulation in an obsolete circuit.",
          "The patient refusing to stand."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Yet an old label said cigaret, revealing an obsolete circular circuit. Bad circulation prevented air from moving round the room.",
          "focusQuote": "Bad circulation prevented air from moving round the room."
        },
        "explanation": "旧环形回路通风不好，不是病人动作导致。"
      },
      {
        "type": "inference",
        "prompt": "What best explains Lin's effective response?",
        "options": [
          "Completing the chorus before helping.",
          "Changing the words of every song.",
          "Treating all tobacco as the only proven cause.",
          "Opening the space and allowing fresh air to circulate."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin opened the circle and let fresh air circulate. The circumference mattered less than the patient’s breath. A Christian doctor saved him.",
          "focusQuote": "Lin opened the circle and let fresh air circulate."
        },
        "explanation": "放开人圈使新鲜空气流通，医师救人；不能忽略实际通风。"
      }
    ]
  },
  {
    "id": "expansion-a-039",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the civilian seeking?",
        "options": [
          "Citizenship.",
          "A role in the circus.",
          "Ownership of the script.",
          "Permission to classify others."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "At a circus, a civilian sought citizenship as a citizen.",
          "focusQuote": "At a circus, a civilian sought citizenship as a citizen."
        },
        "explanation": "她申请公民身份，非演出角色。"
      },
      {
        "type": "detail",
        "prompt": "How did Mei clarify the rules?",
        "options": [
          "By repeating only old customs.",
          "By using a clause in a script.",
          "By ignoring the application.",
          "By demanding applause first."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "She took a classic classical script from a clamp and used one clause to clarify the rules with clarity.",
          "focusQuote": "She took a classic classical script from a clamp and used one clause to clarify the rules with clarity."
        },
        "explanation": "从文本条款澄清，不仅援传统。"
      },
      {
        "type": "inference",
        "prompt": "What ultimately determined how the application was handled?",
        "options": [
          "Her clan's objection alone.",
          "The volume of the argument.",
          "Its proper classification under the rules.",
          "The classmate's applause alone."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The clerk would classify her application by its true classification. Her classmate began to clap; she could clasp the certificate that recognized her choice.",
          "focusQuote": "The clerk would classify her application by its true classification."
        },
        "explanation": "书记按真正类别处理申请，掌声不替代正式规则。"
      }
    ]
  },
  {
    "id": "expansion-a-040",
    "questions": [
      {
        "type": "detail",
        "prompt": "What caught on the latch at the entrance?",
        "options": [
          "The clerk's identity card.",
          "The patient's medicine packet.",
          "A rope from the clearing.",
          "A clip on the client's cloak."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A metal clatter stopped her: a clip on a cloak caught the latch, and a claw mark scarred the clay.",
          "focusQuote": "A metal clatter stopped her: a clip on a cloak caught the latch, and a claw mark scarred the clay."
        },
        "explanation": "斗篷夹卡住门栓，别与地上爪印混为一物。"
      },
      {
        "type": "detail",
        "prompt": "What was the clinical problem?",
        "options": [
          "Damaged packaging.",
          "An absence of every medicine.",
          "The lack of any clinic records.",
          "An animal biting the clerk."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The clinical problem was damaged packaging.",
          "focusQuote": "The clinical problem was damaged packaging."
        },
        "explanation": "临床相关问题是包装受损，而非兽咬。"
      },
      {
        "type": "inference",
        "prompt": "What actually kept the patient out?",
        "options": [
          "A confirmed dangerous beast.",
          "A broken latch.",
          "The cliff's disappearance.",
          "The clinic's proved uncleanliness."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Records clearly proved the clinic’s cleanliness. At midnight on the clock, the case reached its climax: a broken latch, not a beast, had kept a patient out.",
          "focusQuote": "At midnight on the clock, the case reached its climax: a broken latch, not a beast, had kept a patient out."
        },
        "explanation": "结尾明确门栓坏，不是野兽；记录反证诊所不洁之说。"
      }
    ]
  },
  {
    "id": "expansion-a-041",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where did Mei find the children?",
        "options": [
          "Inside a coal store.",
          "In a locked closet.",
          "Near the coastal rescue station.",
          "Backstage at the club."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "Mei turned a lock clockwise and found a cluster of children in a closet.",
          "focusQuote": "Mei turned a lock clockwise and found a cluster of children in a closet."
        },
        "explanation": "梅顺时针转动锁后在壁橱中发现孩子；煤仓中发现的是小丑的外套。"
      },
      {
        "type": "detail",
        "prompt": "What did Mei discover when she examined the drink?",
        "options": [
          "A medicine left by the coach.",
          "A message from the missing clown.",
          "Cocaine in a cocktail.",
          "A label identifying each child."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei looked closely and found cocaine in a cocktail.",
          "focusQuote": "Mei looked closely and found cocaine in a cocktail."
        },
        "explanation": "她仔细查看后发现鸡尾酒中有可卡因；原文没有提到药物、留言或身份标签。"
      },
      {
        "type": "main",
        "prompt": "Which account best summarizes the outcome?",
        "options": [
          "Rescuers protected the children, and the clown helped arrest the manager.",
          "The coach identified the children, and the manager arranged their return.",
          "The children escaped alone while Mei continued searching for the clown.",
          "The clown recovered his coat and persuaded the manager to reopen the club."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "She called a rescue coalition on the coast. They would clothe each child safely; the rescued clown helped arrest the manager.",
          "focusQuote": "They would clothe each child safely; the rescued clown helped arrest the manager."
        },
        "explanation": "结局是梅联络沿海救援联盟安置孩子，获救的小丑协助逮捕经理。"
      }
    ]
  },
  {
    "id": "expansion-a-042",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where was the coded note found?",
        "options": [
          "Under the coffin.",
          "Among the collected coins.",
          "Inside the hidden compartment.",
          "Inside a collar."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The cold affected cognitive judgment, but a note inside a collar held a code.",
          "focusQuote": "The cold affected cognitive judgment, but a note inside a collar held a code."
        },
        "explanation": "代码写在衣领中的纸条上；隐藏隔间是该线索指向的位置。"
      },
      {
        "type": "detail",
        "prompt": "What did the colonist record that pointed to a concealed space?",
        "options": [
          "A coil's coefficient.",
          "The date of the ships' arrival.",
          "The colonel's claim to the coins.",
          "A map of the colony."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A colonist had recorded a coil’s coefficient, pointing to a hidden compartment.",
          "focusQuote": "A colonist had recorded a coil’s coefficient, pointing to a hidden compartment."
        },
        "explanation": "殖民者记录的线圈系数指向隐藏隔间；其余细节没有出现在英文故事中。"
      },
      {
        "type": "inference",
        "prompt": "What did the collaborative research establish about the wreck?",
        "options": [
          "The cold had caused an accidental collision.",
          "The disaster had been deliberately arranged.",
          "The colonel had a valid claim to the treasure.",
          "The coin had been placed in the coffin after recovery."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Collective, collaborative research defeated him: their collaboration proved the disaster had been arranged.",
          "focusQuote": "Collective, collaborative research defeated him: their collaboration proved the disaster had been arranged."
        },
        "explanation": "合作调查证明灾难是安排好的，因此不是单纯意外；并未证明银币何时放入棺木。"
      }
    ]
  },
  {
    "id": "expansion-a-043",
    "questions": [
      {
        "type": "detail",
        "prompt": "What danger did Lin identify in the column?",
        "options": [
          "An unstable metal plate.",
          "A missing stage switch.",
          "Unsafe combustion.",
          "A comet approaching the stage."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Lin checked a colored column and found unsafe combustion.",
          "focusQuote": "Lin checked a colored column and found unsafe combustion."
        },
        "explanation": "林检查彩色柱子时发现燃烧不安全；金属片和开关是随后处理问题的物品。"
      },
      {
        "type": "detail",
        "prompt": "What did Lin order as the show was about to begin?",
        "options": [
          "Delay the comet ceremony.",
          "Ask the comic to speak.",
          "Replace the commander.",
          "Clear the stage."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "As the show would commence, he gave the command to clear the stage.",
          "focusQuote": "As the show would commence, he gave the command to clear the stage."
        },
        "explanation": "演出即将开始时，他下令清空舞台；英文原文没有另外三项行动。"
      },
      {
        "type": "main",
        "prompt": "What value receives praise at the end of the story?",
        "options": [
          "Protecting people instead of prioritizing spectacle.",
          "Using comedy to make a military victory more impressive.",
          "Completing the ceremony despite technical doubts.",
          "Finding a more elaborate way to commemorate combat."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The commander would commend him. Later commentary honoured care rather than spectacle.",
          "focusQuote": "Later commentary honoured care rather than spectacle."
        },
        "explanation": "后来的评论赞扬关怀而不是场面，体现处理安全隐患的价值。"
      }
    ]
  },
  {
    "id": "expansion-a-044",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was Mei sent to the granary?",
        "options": [
          "To supervise workers' journeys home.",
          "To carry out an inspection for a committee.",
          "To negotiate a new Commonwealth trade route.",
          "To select the grain for a public dinner."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A commercial committee gave Mei a commission to inspect a granary.",
          "focusQuote": "A commercial committee gave Mei a commission to inspect a granary."
        },
        "explanation": "商业委员会委托梅检查粮仓；并非安排通勤、贸易路线或宴会。"
      },
      {
        "type": "detail",
        "prompt": "What did the parties agree to do before the granary reopened?",
        "options": [
          "Settle their dispute through slogans.",
          "Replace all grain suppliers.",
          "Share their records.",
          "Stop workers from commuting."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "They would commit to sharing records.",
          "focusQuote": "They would commit to sharing records."
        },
        "explanation": "他们承诺共享记录；随后的沟通改善和粮仓重开是结果。"
      },
      {
        "type": "main",
        "prompt": "Which development best captures the resolution?",
        "options": [
          "The committee turned expensive grain into a new export product.",
          "Workers resolved the dispute by moving closer to the granary.",
          "One political group persuaded the other to abandon its position.",
          "Sharing information improved communication and restored access to food."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "That commitment improved communication; the granary reopened, and workers could commute home carrying dinner.",
          "focusQuote": "That commitment improved communication; the granary reopened, and workers could commute home carrying dinner."
        },
        "explanation": "共享记录的承诺改善沟通，粮仓重开，工人能带着晚饭回家；原文没有价格或政治立场改变的结论。"
      }
    ]
  },
  {
    "id": "expansion-a-045",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why were the two maps unsuitable for a direct comparison?",
        "options": [
          "Their scales were incompatible.",
          "They belonged to different travellers.",
          "The compass had been damaged.",
          "One map was missing from the compartment."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Mei’s companion would compare their maps: their scales lacked compatibility and were not compatible.",
          "focusQuote": "Mei’s companion would compare their maps: their scales lacked compatibility and were not compatible."
        },
        "explanation": "地图比例尺不兼容是问题所在；罗盘损坏和地图缺失没有原文依据。"
      },
      {
        "type": "detail",
        "prompt": "How did the travellers address their disagreement?",
        "options": [
          "They paid the more competent traveller.",
          "They used a shared scale and repaired the problem together.",
          "They held another competition to choose a map.",
          "They asked Mei to replace the compass."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "With compassion, they chose a shared scale; compensation became a joint repair.",
          "focusQuote": "With compassion, they chose a shared scale; compensation became a joint repair."
        },
        "explanation": "他们选择统一比例尺，把赔偿要求转为共同修复；并未竞赛选图或更换罗盘。"
      },
      {
        "type": "main",
        "prompt": "What shift does the story describe?",
        "options": [
          "A technical comparison becoming a contest for compensation.",
          "A traveller replacing cooperation with a more accurate compass.",
          "A competitive dispute giving way to a cooperative repair.",
          "A successful competitor refusing to share his map."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A comparative check proved the charts were not comparable. With compassion, they chose a shared scale; compensation became a joint repair.",
          "focusQuote": "With compassion, they chose a shared scale; compensation became a joint repair."
        },
        "explanation": "检查确认图表无法直接比较，最后以共同尺度和修复解决竞争性争执。"
      }
    ]
  },
  {
    "id": "expansion-a-046",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did Mei compile after the neighbours objected?",
        "options": [
          "A list of musical notes.",
          "The composer's unfinished works.",
          "The building's repair rules.",
          "Each complaint."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Before a composer could complete a composition, neighbours began to complain. Mei would compile each complaint.",
          "focusQuote": "Mei would compile each complaint."
        },
        "explanation": "邻居开始抱怨后，梅汇总每一项投诉；汇总的对象不是音符或作品。"
      },
      {
        "type": "detail",
        "prompt": "What did the composer realize a thorough repair plan had to include?",
        "options": [
          "Every material involved.",
          "Every neighbour's preferred music.",
          "A method for compressing all sound.",
          "A formal compliment from Mei."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "He came to comprehend that a comprehensive plan for a complicated repair must comprise every material.",
          "focusQuote": "He came to comprehend that a comprehensive plan for a complicated repair must comprise every material."
        },
        "explanation": "他理解到完整的复杂修复计划必须涵盖每一种材料；不是只压缩声音或寻求赞扬。"
      },
      {
        "type": "main",
        "prompt": "What enabled the composer to return to his work?",
        "options": [
          "The neighbours withdrew their complaints without repairs.",
          "Understanding the materials and completing a comprehensive repair.",
          "Mei approved his sound compression experiment despite the complications.",
          "The composer replaced his music with a period of permanent silence."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "He came to comprehend that a comprehensive plan for a complicated repair must comprise every material. That comprehension let him compose again; repair reached completion, and silence could complement music completely.",
          "focusQuote": "That comprehension let him compose again; repair reached completion, and silence could complement music completely."
        },
        "explanation": "理解完整修复计划的要求并完成修复，让他再次作曲；不是忽视投诉或永久停止音乐。"
      }
    ]
  },
  {
    "id": "expansion-a-047",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the letter clarify about the compulsory test?",
        "options": [
          "It ranked performers by their feelings.",
          "It required them to compose together.",
          "It measured beats rather than feeling.",
          "It replaced the concert with a written examination."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A concise letter concerning the rule answered their concern: its concept measured beats, not feeling.",
          "focusQuote": "A concise letter concerning the rule answered their concern: its concept measured beats, not feeling."
        },
        "explanation": "信说明测试的概念衡量节拍而不是感受，回应了把音乐视作数字的疑虑。"
      },
      {
        "type": "detail",
        "prompt": "What did the two friends agree to do after making a concession?",
        "options": [
          "Cancel the compulsory test.",
          "Ask for a new tutor.",
          "Ignore the rule during the concert.",
          "Practise together."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "With one concession, they agreed to practise.",
          "focusQuote": "With one concession, they agreed to practise."
        },
        "explanation": "作出让步后，他们同意练习；原文没有取消测试、更换导师或无视规定。"
      },
      {
        "type": "main",
        "prompt": "What conclusion do the friends reach?",
        "options": [
          "Discipline can support musical expression.",
          "Numerical tests can replace musical feeling.",
          "Compromise weakens a performer's concentration.",
          "A concert matters less than meeting compulsory rules."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "They could conclude with a shared conclusion: discipline could support expression.",
          "focusQuote": "They could conclude with a shared conclusion: discipline could support expression."
        },
        "explanation": "两人最终的共同结论是纪律能够支持表达，并非用数字取代情感。"
      }
    ]
  },
  {
    "id": "expansion-a-048",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did Mei require before accepting the sabotage claim?",
        "options": [
          "An admission from every witness.",
          "Concrete, conclusive evidence.",
          "Agreement from the confident investigator.",
          "A replacement for the dripping conductor."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A confident investigator wanted to condemn sabotage, but Mei sought conclusive, concrete evidence before she would confirm it.",
          "focusQuote": "A confident investigator wanted to condemn sabotage, but Mei sought conclusive, concrete evidence before she would confirm it."
        },
        "explanation": "梅要求确切、具体的证据才肯确认破坏说法，不能仅凭调查者的自信。"
      },
      {
        "type": "detail",
        "prompt": "What had the caretaker failed to notice?",
        "options": [
          "The conflict among investigators.",
          "The witnesses' confusion.",
          "The building's condition and wiring configuration.",
          "The experts' loss of confidence."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The caretaker would confess he had missed the building’s condition and wiring configuration.",
          "focusQuote": "The caretaker would confess he had missed the building’s condition and wiring configuration."
        },
        "explanation": "管理员承认忽略的是建筑状况和线路配置；其他项不是他承认遗漏的内容。"
      },
      {
        "type": "inference",
        "prompt": "Which description best fits Mei's approach?",
        "options": [
          "She treated witness agreement as sufficient proof of sabotage.",
          "She used confrontation to pressure the caretaker into blaming witnesses.",
          "She followed the first investigator's explanation before checking the room.",
          "She tested a physical explanation before the group approved repairs."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei made steam condense against cold concrete.",
          "focusQuote": "Mei made steam condense against cold concrete."
        },
        "explanation": "梅让蒸汽在冷混凝土上凝结，展示物理机制；结合后来批准维修，可见她先检验解释再推动处理。"
      }
    ]
  },
  {
    "id": "expansion-a-049",
    "questions": [
      {
        "type": "detail",
        "prompt": "Who worked with Mei to demand records of the conquest?",
        "options": [
          "A conscientious doctor.",
          "The unconscious soldier.",
          "The celebrating conqueror.",
          "The delegates blocking the roads."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "In conjunction with a conscientious doctor, Mei demanded records of his conquest.",
          "focusQuote": "In conjunction with a conscientious doctor, Mei demanded records of his conquest."
        },
        "explanation": "梅与一位尽责的医生共同要求征服记录；昏迷士兵是受害情况中的人物。"
      },
      {
        "type": "detail",
        "prompt": "What did the delegate help connect after recognizing the harm?",
        "options": [
          "The roads around congress.",
          "Hospital records.",
          "The conqueror's congratulations.",
          "Two missing soldiers."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The delegate became conscious of the harm. Consequently, he helped connect hospital records.",
          "focusQuote": "Consequently, he helped connect hospital records."
        },
        "explanation": "代表意识到伤害后协助连接医院记录，不能将道路或失踪士兵替代记录。"
      },
      {
        "type": "main",
        "prompt": "What priority emerged from the investigation?",
        "options": [
          "Completing the celebration before examining its consequences.",
          "Protecting the reputation of the successful conqueror.",
          "Putting living people ahead of celebration.",
          "Using hospital records to justify another conquest."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A consensus put living people before celebration.",
          "focusQuote": "A consensus put living people before celebration."
        },
        "explanation": "形成的共识明确把活着的人置于庆祝之上；其他项颠倒了最后的价值选择。"
      }
    ]
  },
  {
    "id": "expansion-a-050",
    "questions": [
      {
        "type": "detail",
        "prompt": "What obstacle could limit the proposed construction?",
        "options": [
          "The absence of paths in the forest.",
          "A lack of concern among the families.",
          "The conspicuous leaf used at the meeting.",
          "A financial constraint in the constitution."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A financial constraint in the constitution could constrain construction.",
          "focusQuote": "A financial constraint in the constitution could constrain construction."
        },
        "explanation": "原文明确说宪章中的财务约束可能限制建设；绿叶是后来表示同意的标志。"
      },
      {
        "type": "detail",
        "prompt": "What did the councillors decide to do after considering the floods?",
        "options": [
          "Consolidate funds and build barriers.",
          "Suspend conservation until clean water returned.",
          "Replace dams and paths with family payments.",
          "Revise the constitution before discussing any solution."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "After careful consideration, and considering the floods, councillors would consolidate funds. They would construct barriers that constitute a real solution.",
          "focusQuote": "They would construct barriers that constitute a real solution."
        },
        "explanation": "考虑洪水后，议员决定整合资金并建屏障；原文未提及暂停保护或先修改宪章。"
      },
      {
        "type": "main",
        "prompt": "Which development best summarizes Lin's effort?",
        "options": [
          "His plan failed because construction and conservation could not coexist.",
          "His sustained concern led a doubtful council to support protective construction.",
          "His arguments persuaded families to accept the loss of clean water.",
          "His financial proposal replaced the need to protect the forest."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "After careful consideration, and considering the floods, councillors would consolidate funds. They would construct barriers that constitute a real solution. A conspicuous green leaf marked their agreement.",
          "focusQuote": "They would construct barriers that constitute a real solution."
        },
        "explanation": "议会最初怀疑保护方案，林持续推动，最终整合资金建屏障并达成同意。"
      }
    ]
  },
  {
    "id": "expansion-a-051",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the experts' tests show about the bottled water?",
        "options": [
          "Its increased consumption caused harmless symptoms.",
          "The consultancy had tested every cap.",
          "The caps could contain poison and contaminate the water.",
          "The consumer had used a different water supply."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Contemporary tests proved the caps could contain poison and contaminate water.",
          "focusQuote": "Contemporary tests proved the caps could contain poison and contaminate water."
        },
        "explanation": "检测证明瓶盖可能含毒并污染水；不能将污染来源换成消费量或其他水源。"
      },
      {
        "type": "detail",
        "prompt": "What action did the consul ultimately take?",
        "options": [
          "He demanded retaliation against the consultant.",
          "He accepted the firm's objections to the tests.",
          "He asked consumers to increase consumption.",
          "He recalled the bottles."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The consul ceased to contemplate retaliation and recalled the bottles.",
          "focusQuote": "The consul ceased to contemplate retaliation and recalled the bottles."
        },
        "explanation": "领事停止考虑报复并召回瓶子，因此最终行动是召回。"
      },
      {
        "type": "main",
        "prompt": "What resolved the dispute over the water?",
        "options": [
          "Testing established contamination, leading to a recall.",
          "The consultant reassured the consumers and restored confidence.",
          "The firm proved that the tests had used the wrong content.",
          "The consul retaliated before specialists examined the bottles."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Its contention failed: contamination was clear. The consul ceased to contemplate retaliation and recalled the bottles.",
          "focusQuote": "Its contention failed: contamination was clear."
        },
        "explanation": "公司争辩失败，污染证据明确，随后召回；不是靠保证或报复解决。"
      }
    ]
  },
  {
    "id": "expansion-a-052",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the actual records compare with promises about bridge work?",
        "options": [
          "They showed the work was ahead of schedule.",
          "They contradicted promises of continuous progress.",
          "They confirmed the families' contract had been cancelled.",
          "They recorded every villager's contribution accurately."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "In context, promised continuity and continuous work were a contradiction of the records.",
          "focusQuote": "In context, promised continuity and continuous work were a contradiction of the records."
        },
        "explanation": "记录与连续施工的承诺相矛盾；原文还指出贡献未入报告，不能说记录完整。"
      },
      {
        "type": "detail",
        "prompt": "What was missing from the engineer's reports?",
        "options": [
          "The bridge's location on the continent.",
          "The leaders' meeting dates.",
          "The villagers' contributions.",
          "The engineer's explanations for delays."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "His contradictory claims were the contrary of villagers’ experience: they would contribute, but their contribution disappeared from reports.",
          "focusQuote": "His contradictory claims were the contrary of villagers’ experience: they would contribute, but their contribution disappeared from reports."
        },
        "explanation": "村民有所贡献，但贡献从报告中消失；问题不是地理位置或会议日期。"
      },
      {
        "type": "main",
        "prompt": "What was achieved after Mei exposed the discrepancy?",
        "options": [
          "The families abandoned the bridge contract.",
          "The engineer gained greater control over the reports.",
          "The leaders halted all construction until the dispute ended.",
          "Workers were recognized and safe construction could continue."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "They recognized the workers and let safe construction continue.",
          "focusQuote": "They recognized the workers and let safe construction continue."
        },
        "explanation": "结局明确为认可工人并让安全施工继续，不是放弃合同或永久停工。"
      }
    ]
  },
  {
    "id": "expansion-a-053",
    "questions": [
      {
        "type": "detail",
        "prompt": "What fault did the coordinated tests identify?",
        "options": [
          "A copper wire had crossed signals.",
          "The technician had erased the recording.",
          "The police had lost two written statements.",
          "The accused had altered the conversion equipment."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Better coordination proved a copper wire had crossed signals.",
          "focusQuote": "Better coordination proved a copper wire had crossed signals."
        },
        "explanation": "协调测试证明铜线串了信号；原文没有指控技术员删除记录或被告改设备。"
      },
      {
        "type": "detail",
        "prompt": "What happened to the accused after the court considered the result?",
        "options": [
          "He received a conviction based on the recording.",
          "He was released.",
          "He was asked to make another confession.",
          "He had to coordinate further tests."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The accused left free, and investigators learned to cope with uncertainty.",
          "focusQuote": "The accused left free, and investigators learned to cope with uncertainty."
        },
        "explanation": "被告获释，说明原始指控未能成立；不是再次定罪或逼供。"
      },
      {
        "type": "inference",
        "prompt": "Why was the recording unsafe as a basis for conviction?",
        "options": [
          "Its convenient format prevented the experts from listening to it.",
          "The accused had supplied an unreliable technician.",
          "A technical fault undermined the apparent confession.",
          "The court rejected the use of recordings in all cases."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Better coordination proved a copper wire had crossed signals.",
          "focusQuote": "Better coordination proved a copper wire had crossed signals."
        },
        "explanation": "技术故障使原先看似供述的信号不能可靠定罪；不能推出法院拒绝一切录音证据。"
      }
    ]
  },
  {
    "id": "expansion-a-054",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did Mei check the copied numbers?",
        "options": [
          "By treating the corrosion marks as proof against the reporter.",
          "By asking the corporation to assert copyright.",
          "By comparing the corpse with the corn sack.",
          "By correcting them and matching batches with dates."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei made a correction to correct copied numbers correctly. She would correlate each batch with its corresponding date.",
          "focusQuote": "She would correlate each batch with its corresponding date."
        },
        "explanation": "梅纠正抄写数字并把批次与对应日期关联；腐蚀痕迹未指向记者有罪。"
      },
      {
        "type": "detail",
        "prompt": "How did Mei obtain a clearer understanding of the case?",
        "options": [
          "She reviewed the correspondence with lawful access.",
          "She accepted the firm's copyright claim as the answer.",
          "She identified the reporter through corrosion alone.",
          "She removed the letters from the investigation."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "With lawful access, Mei untied a cord and reviewed the correspondence. The case’s core became clear.",
          "focusQuote": "With lawful access, Mei untied a cord and reviewed the correspondence."
        },
        "explanation": "梅依法进入，解开绳索并查看往来信件，案件核心才清晰。"
      },
      {
        "type": "inference",
        "prompt": "What can be concluded about the corrosion marks?",
        "options": [
          "They conclusively proved the reporter had altered the archives.",
          "They could match the letters without implicating the reporter.",
          "They established that every copied number was accurate.",
          "They made lawful access to the correspondence unnecessary."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Corrosion marks could correspond to the letters but did not implicate the reporter.",
          "focusQuote": "Corrosion marks could correspond to the letters but did not implicate the reporter."
        },
        "explanation": "痕迹可能与信件对应，但没有牵连记者；不能把对应关系当作罪责证明。"
      }
    ]
  },
  {
    "id": "expansion-a-055",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the advisers discover about the design?",
        "options": [
          "It was an authentic map of cosmic dots.",
          "It belonged to the county council.",
          "It was a shop coupon.",
          "It was a medical warning about the cotton."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "On a couch, they found the design was a shop coupon.",
          "focusQuote": "On a couch, they found the design was a shop coupon."
        },
        "explanation": "他们发现图案实际上是商店优惠券；原文没有证明宇宙图是真的。"
      },
      {
        "type": "detail",
        "prompt": "What did the cousins' return of the costume prompt?",
        "options": [
          "A new council investigation of the cottage.",
          "The sale of a second cosmic costume.",
          "An apology from Mei's counterpart.",
          "A correction to the shop's advertisement."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "With courage, the courageous cousins returned it at the counter. Their decision made the shop correct its advertisement.",
          "focusQuote": "Their decision made the shop correct its advertisement."
        },
        "explanation": "表兄弟把衣服退回柜台，该决定促使商店修正广告；没有第二次销售或道歉情节。"
      },
      {
        "type": "main",
        "prompt": "Which account best describes the story?",
        "options": [
          "A sales claim was challenged, and the buyers secured a correction.",
          "A council authenticated a cosmic design and recommended keeping it.",
          "Mei's cough prevented the advisers from checking the costume.",
          "The cousins bought a replacement after learning about its design."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "With courage, the courageous cousins returned it at the counter. Their decision made the shop correct its advertisement.",
          "focusQuote": "Their decision made the shop correct its advertisement."
        },
        "explanation": "核查发现优惠券图案后，买方退货并促成广告更正；不是鉴定为真或再买一件。"
      }
    ]
  },
  {
    "id": "expansion-a-056",
    "questions": [
      {
        "type": "detail",
        "prompt": "What caused the crane accident?",
        "options": [
          "A cow entered the courtyard.",
          "A wrong turn of the crank.",
          "A baby climbed into the machinery.",
          "The driver left before the cradle was lifted."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A wrong turn of its crank caused a crash and a crack.",
          "focusQuote": "A wrong turn of its crank caused a crash and a crack."
        },
        "explanation": "曲柄转错引发碰撞和裂缝；牛和螃蟹工艺品没有造成事故。"
      },
      {
        "type": "detail",
        "prompt": "What had the driver actually done after going to the hut?",
        "options": [
          "He waited there for news coverage.",
          "He bought cakes before returning to the yard.",
          "He called for help.",
          "He asked the court to blame Mei."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "But in the true course of events, he had called for help.",
          "focusQuote": "But in the true course of events, he had called for help."
        },
        "explanation": "真实经过是司机求救；不能把逃去小屋的表面情形当作胆怯的完整证据。"
      },
      {
        "type": "inference",
        "prompt": "Why did Mei correct the rumour about the driver?",
        "options": [
          "The crane had never been in danger.",
          "The baby had already left the courtyard before the accident.",
          "The cow, rather than the driver, was responsible for the crash.",
          "His request for help contradicted the portrayal of him as a coward."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "News coverage from the court called the driver a coward: he had run to a cozy hut selling cream cakes. But in the true course of events, he had called for help.",
          "focusQuote": "But in the true course of events, he had called for help."
        },
        "explanation": "报道以他跑去小屋认定胆怯，但实际他已求救；梅纠正的是对他行动的误解。"
      }
    ]
  },
  {
    "id": "expansion-a-057",
    "questions": [
      {
        "type": "detail",
        "prompt": "What problem caused the team's crippling crisis?",
        "options": [
          "Debt.",
          "A damaged mechanical creature.",
          "A shortage of creative ideas.",
          "An alarm at the warehouse."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Debt caused a crippling crisis.",
          "focusQuote": "Debt caused a crippling crisis."
        },
        "explanation": "原文直接说明债务造成严重危机；仓库警报属于逮捕时的后续情节。"
      },
      {
        "type": "detail",
        "prompt": "Where did the tracks Mei followed lead?",
        "options": [
          "To the loan office.",
          "Toward a warehouse.",
          "Back to the cricket ground.",
          "Inside the mechanical creature."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Using criminology, Mei followed tracks that crept toward a warehouse.",
          "focusQuote": "Using criminology, Mei followed tracks that crept toward a warehouse."
        },
        "explanation": "梅追踪的痕迹朝向仓库；其余地点没有英文依据。"
      },
      {
        "type": "main",
        "prompt": "What principle guided Mei's response after the arrest?",
        "options": [
          "Withhold credit from anyone proposing a new invention.",
          "Judge loans by how impressive each invention appears.",
          "Use clear lending criteria without blaming all inventors for one thief.",
          "Restore credit without checking future borrowers' credentials."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Mei set clear criteria for future loans, refusing to let one thief condemn every inventor.",
          "focusQuote": "Mei set clear criteria for future loans, refusing to let one thief condemn every inventor."
        },
        "explanation": "她设置清楚的贷款标准，也拒绝因一名窃贼否定全部发明者；不是全面停贷或免除检查。"
      }
    ]
  },
  {
    "id": "expansion-a-058",
    "questions": [
      {
        "type": "detail",
        "prompt": "What signalled the performance to begin?",
        "options": [
          "A visitor crossing the bank.",
          "The critic's attack on the crown.",
          "A cucumber inside the cube.",
          "A crow and a cuckoo."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A crow and a cuckoo gave the performance’s cue.",
          "focusQuote": "A crow and a cuckoo gave the performance’s cue."
        },
        "explanation": "乌鸦和杜鹃给出演出的提示；皇冠中的蔬菜不是开演信号。"
      },
      {
        "type": "detail",
        "prompt": "What would happen when visitors crushed the crust?",
        "options": [
          "It would crumble.",
          "It would immediately crystallize.",
          "The crown would become smoother.",
          "The show would move to the cruise ship."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Visitors would crush its crust, making it crumble.",
          "focusQuote": "Visitors would crush its crust, making it crumble."
        },
        "explanation": "游客压碎表面后会导致它碎裂；结晶属于后来说明每个单位的措施。"
      },
      {
        "type": "main",
        "prompt": "What did the repair ultimately help the show achieve?",
        "options": [
          "A more persuasive attack on the crude crown.",
          "Respect for village culture.",
          "An end to every criticism of the materials.",
          "A demonstration that visitors should crush the display."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Repair let the show culminate in respect for village culture.",
          "focusQuote": "Repair let the show culminate in respect for village culture."
        },
        "explanation": "修复使演出以尊重乡村文化告终；不是鼓励破坏或消除一切批评。"
      }
    ]
  },
  {
    "id": "expansion-a-059",
    "questions": [
      {
        "type": "detail",
        "prompt": "What concern did the curriculum reveal about the potion?",
        "options": [
          "Its cupboard could not be locked.",
          "Its seller used illegal currency.",
          "It had cumulative side effects.",
          "Its smoke proved it cured a curse."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The curriculum showed cumulative side effects.",
          "focusQuote": "The curriculum showed cumulative side effects."
        },
        "explanation": "课程资料显示累积副作用；货币当时合法，烟也没有证明疗效。"
      },
      {
        "type": "detail",
        "prompt": "What did the healer do after Lin checked the current records?",
        "options": [
          "He accepted the trader's currency.",
          "He promised patients freedom from a curse.",
          "He removed all honest medicine from sale.",
          "He refused the sale."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin checked the current records beside a curved cushion. The healer watched a curl of smoke rise and refused the sale.",
          "focusQuote": "The healer watched a curl of smoke rise and refused the sale."
        },
        "explanation": "林核查现有记录后，药师拒绝交易；后一句还说诚实的药物仍然可用。"
      },
      {
        "type": "inference",
        "prompt": "What lesson is suggested by the refusal to sell?",
        "options": [
          "Medical claims should be checked rather than accepted on blind faith.",
          "Legal currency makes a trader's cure claim reliable.",
          "Side effects justify withdrawing all medicine from patients.",
          "A potion's appearance is enough to establish its benefits."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Lin’s curiosity made him curious, but a curt warning told him to curb blind faith in a cure.",
          "focusQuote": "Lin’s curiosity made him curious, but a curt warning told him to curb blind faith in a cure."
        },
        "explanation": "警告要求抑制对疗效的盲信，后来的记录核查和拒售支持这一谨慎态度。"
      }
    ]
  },
  {
    "id": "expansion-a-060",
    "questions": [
      {
        "type": "detail",
        "prompt": "What entered the machinery and disrupted the routine?",
        "options": [
          "A damp puppet.",
          "A toy dart.",
          "A loose cutter.",
          "A fallen cylinder."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A toy dart entered the machinery.",
          "focusQuote": "A toy dart entered the machinery."
        },
        "explanation": "玩具飞镖进入机器；木偶、切刀和圆筒是场景或设备描述。"
      },
      {
        "type": "detail",
        "prompt": "How did Lin prevent dangerous damage?",
        "options": [
          "He moved the puppet to the dam.",
          "He waited for the machine's cycle to finish.",
          "He stopped the machine.",
          "He persuaded the owner to inspect the dart."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "He stopped the machine before dangerous damage.",
          "focusQuote": "He stopped the machine before dangerous damage."
        },
        "explanation": "林在造成危险损坏前停下机器；并非等待运行结束或仅劝说老板。"
      },
      {
        "type": "main",
        "prompt": "What changed in the dairy's routine after the incident?",
        "options": [
          "Visitors were encouraged to keep following the old custom.",
          "The owner's mockery became a warning used for entertainment.",
          "The machine was operated more quickly to avoid damage.",
          "Daily attention to real hazards became necessary."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Their customary routine changed: real danger required daily care, not jokes.",
          "focusQuote": "Their customary routine changed: real danger required daily care, not jokes."
        },
        "explanation": "例行习惯发生改变：真实危险需要每日留心，而不是玩笑或继续旧习。"
      }
    ]
  },
  {
    "id": "expansion-a-061",
    "questions": [
      {
        "type": "detail",
        "prompt": "What problem threatened the dealer?",
        "options": [
          "Altered debt records",
          "A stolen shipment",
          "A fatal workplace accident",
          "A missing trading licence"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "At dawn, a dean found altered data in a database. A decade of debt became a deadly deal. A deaf dealer faced collapse, although no death had occurred.",
          "focusQuote": "At dawn, a dean found altered data in a database."
        },
        "explanation": "改动的债务记录威胁生意；原文特意说没有死亡事故。"
      },
      {
        "type": "detail",
        "prompt": "What did Mei focus on during her check?",
        "options": [
          "A dealer’s hearing test",
          "A decimal point",
          "A lender’s signature",
          "A broken alarm wire"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei checked one datum: a decimal point."
        },
        "explanation": "检查的是小数点，屏幕和警报用于掩盖欺骗，不是她核查的数项。"
      },
      {
        "type": "inference",
        "prompt": "What was the purpose of correcting the account?",
        "options": [
          "Closing the academy",
          "Rewarding the data supplier",
          "Protecting an honest trader",
          "Cancelling every loan"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "preserve decency and a decent trader’s future by correcting the account."
        },
        "explanation": "最后决定保住正派商人的未来，不是取消全部借款。"
      }
    ]
  },
  {
    "id": "expansion-a-062",
    "questions": [
      {
        "type": "detail",
        "prompt": "What made the decorated deck unsafe?",
        "options": [
          "An overloaded passenger cabin",
          "Rotting wood under the paint",
          "Loose deer antlers",
          "A damaged ship engine"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "wood decompose beneath the paint"
        },
        "explanation": "油漆掩盖腐木和加深的裂缝；没有发动机或载客超重证据。"
      },
      {
        "type": "detail",
        "prompt": "How could Mei identify the supplier’s fraud?",
        "options": [
          "By testing the paint",
          "By following the ship",
          "By examining receipts",
          "By questioning passengers"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei could deduce the fraud from receipts."
        },
        "explanation": "推断来自收据，而非装饰颜色或乘客证言。"
      },
      {
        "type": "inference",
        "prompt": "What did the final measures prioritize?",
        "options": [
          "A more elaborate display",
          "A larger supplier payment",
          "A faster decoration schedule",
          "A safer ship"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "They could decline unsafe decoration; accidents began to decline too."
        },
        "explanation": "拒绝不安全装饰并减少事故，说明目标是安全，不是抢工期。"
      }
    ]
  },
  {
    "id": "expansion-a-063",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had left the workshop short of metal?",
        "options": [
          "A new shield design",
          "An order to stop production",
          "A financial deficit",
          "A shipment theft"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "a deficit had left the workshop deficient in metal."
        },
        "explanation": "金属不足与赤字相连；未说被盗或被停产。"
      },
      {
        "type": "detail",
        "prompt": "Why did arrows deflect incorrectly?",
        "options": [
          "The apprentices aimed badly",
          "The soldiers refused orders",
          "The shields were too heavy",
          "The shields lacked enough metal"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The deflection came from deficiency, not a wish to defy orders."
        },
        "explanation": "偏转来自材料不足，不是蓄意抗命，也未归咎士兵瞄准。"
      },
      {
        "type": "inference",
        "prompt": "What does Mei’s report suggest about the craftsman?",
        "options": [
          "He had been unfairly blamed",
          "He had intentionally lost the battle",
          "He had stolen the supplies",
          "He had refused to train anyone"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Officials stopped trying to degrade the craftsman; further degradation was prevented."
        },
        "explanation": "官员停止贬损，报告说明战败原因；蓄意败战或偷料不受支持。"
      }
    ]
  },
  {
    "id": "expansion-a-064",
    "questions": [
      {
        "type": "detail",
        "prompt": "What change did the delegation discuss?",
        "options": [
          "Increasing courier salaries",
          "Closing a village school",
          "Replacing all the recipes",
          "Delaying food deliveries"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A delegation voted on a delay to food delivery."
        },
        "explanation": "讨论的是延迟配送，人口报告是理由，不是新菜谱提案。"
      },
      {
        "type": "detail",
        "prompt": "What was wrong with the use of the symbols?",
        "options": [
          "They indicated groups, not numbers",
          "They showed only delivery dates",
          "They represented food ingredients",
          "They identified the voters"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "symbols merely denote groups, not numbers."
        },
        "explanation": "符号只表示群体，不能被当成需求数量。"
      },
      {
        "type": "inference",
        "prompt": "What most clearly supported restoring delivery?",
        "options": [
          "A wish to avoid future voting",
          "The families’ real need",
          "A demand for costly delicacies",
          "The courier’s private profit"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Families’ delight proved that public need mattered."
        },
        "explanation": "家人的喜悦支持公共需要确实存在，不能推出追求昂贵菜或取消投票。"
      }
    ]
  },
  {
    "id": "expansion-a-065",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was the dentist facing deportation?",
        "options": [
          "A statement linked him to deposit theft",
          "His treatment had killed a patient",
          "His travel papers had expired",
          "His child had damaged the clinic"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "a deposition seemed to depict theft of a deposit."
        },
        "explanation": "指控来自涉及定金盗窃的证词，不是过期证件或治疗致死。"
      },
      {
        "type": "detail",
        "prompt": "What did the scans and density measurements establish?",
        "options": [
          "The deputy’s financial losses",
          "The dates of treatment",
          "The family’s travel route",
          "The amount of the deposit"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "proved treatment dates"
        },
        "explanation": "牙科扫描与材料密度证明治疗日期，不直接计算定金。"
      },
      {
        "type": "inference",
        "prompt": "What did stopping the order achieve?",
        "options": [
          "An automatic refund for every patient",
          "A promotion for the deputy",
          "Freedom and cleared names for the family",
          "Permanent closure of the clinic"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "They could depart safely, with cleared names."
        },
        "explanation": "家人得以清白、安全离开；未说诊所关闭或副职获奖。"
      }
    ]
  },
  {
    "id": "expansion-a-066",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the courier protecting?",
        "options": [
          "A box of minerals",
          "A dessert",
          "An ancestor’s portrait",
          "A map of the hospital"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "a courier desperately protected a dessert."
        },
        "explanation": "送货员保护甜点；祖辈路线与设计不是怀中那份礼物。"
      },
      {
        "type": "detail",
        "prompt": "Where was the delivery intended to go?",
        "options": [
          "To a roadside market",
          "To a military camp",
          "To a hospital",
          "To an ancestral temple"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "His description named a hospital as its destination."
        },
        "explanation": "目的地明确是医院，不能凭荒漠背景推成营地。"
      },
      {
        "type": "inference",
        "prompt": "Why did Lin choose a better route?",
        "options": [
          "To claim the ancestor’s property",
          "To prove inherited greatness",
          "To remove the hospital’s patients",
          "To deliver medicine and sweets safely"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "He would designate a desirable route and despatch both medicine and sweets. The old path served safe arrival, not inherited glory.",
          "focusQuote": "The old path served safe arrival, not inherited glory."
        },
        "explanation": "重新选路用于安全运送药与甜食，原文还否定继承荣耀是目的。"
      }
    ]
  },
  {
    "id": "expansion-a-067",
    "questions": [
      {
        "type": "detail",
        "prompt": "What claim did the detector’s maker make?",
        "options": [
          "The city had already been destroyed",
          "Everyone had the same future",
          "One person was destined to destroy the city",
          "The detective had stolen the device"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "someone was destined to destroy the city."
        },
        "explanation": "制造者把毁城归给一个人的命运；这只是其主张，并非已发生事实。"
      },
      {
        "type": "detail",
        "prompt": "What undermined the detector’s reliability?",
        "options": [
          "Its operator could not read",
          "Its power source had vanished",
          "Its records covered too many years",
          "Its model deviated from evidence"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "It began to deviate from real evidence"
        },
        "explanation": "模型偏离真实证据；没有断电、失读或记录年份过多的说明。"
      },
      {
        "type": "inference",
        "prompt": "Why was ending the prediction important?",
        "options": [
          "It prevented fear from driving harm",
          "It confirmed the maker’s accusation",
          "It identified the city’s future ruler",
          "It made the model more expensive"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Fear, not fate, threatened destruction."
        },
        "explanation": "威胁来自恐惧而非命运，叫停预测不能理解成确认指控。"
      }
    ]
  },
  {
    "id": "expansion-a-068",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why were villagers afraid of the diary?",
        "options": [
          "They thought it listed stolen diamonds",
          "They feared it contained a military plan",
          "They believed its pages were poisonous",
          "They believed its reader would be devoured"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "a devil would devour its reader."
        },
        "explanation": "恐惧来自吞噬读者的传闻，日记里的钻石图本身不是盗窃证据。"
      },
      {
        "type": "detail",
        "prompt": "What indicated a leak?",
        "options": [
          "The diesel machine’s dial",
          "The elder’s spoken account",
          "The size of the diamond",
          "The diary’s handwriting"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A diesel machine’s dial revealed a leak."
        },
        "explanation": "漏处由柴油机器仪表揭示，长者口述用于后来记录事件。"
      },
      {
        "type": "inference",
        "prompt": "What was the focus of Lin’s efforts?",
        "options": [
          "Replacing the villagers’ dialect",
          "Helping patients rather than serving legends",
          "Recovering the diamond for a ruler",
          "Preserving the dictator’s account"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin’s devotion belonged to people, not to legends."
        },
        "explanation": "修理与照顾病人体现对人的投入，不是效忠传说或独裁者。"
      }
    ]
  },
  {
    "id": "expansion-a-069",
    "questions": [
      {
        "type": "detail",
        "prompt": "What first troubled the diners?",
        "options": [
          "The menu and recipe did not match",
          "The server forgot every order",
          "The dining room had no food",
          "The guests were denied seats"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The digital menu and recipe had a difference"
        },
        "explanation": "菜单与配方有差别，影响口味；未说无食物或拒绝入座。"
      },
      {
        "type": "detail",
        "prompt": "What added to the problem besides flavour?",
        "options": [
          "A shortage of digital screens",
          "Poor ventilation and heavy soup",
          "An excessive number of servers",
          "A leaking water supply"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Poor ventilation let carbon dioxide diffuse through the room, while the heavy soup was hard to digest.",
          "focusQuote": "Poor ventilation let carbon dioxide diffuse through the room, while the heavy soup was hard to digest."
        },
        "explanation": "通风不良及浓汤难消化是额外问题，不应只归结为味道。"
      },
      {
        "type": "inference",
        "prompt": "What was the effect of the server’s actions?",
        "options": [
          "They increased the room’s darkness",
          "They stopped every future meal",
          "They reduced risk for the diners",
          "They concealed the recipe difference"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Risk would diminish."
        },
        "explanation": "开窗、稀释汤后风险降低，而不是掩饰差别或停止餐饮。"
      }
    ]
  },
  {
    "id": "expansion-a-070",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the director initially want the staff to do?",
        "options": [
          "Destroy the broken reader",
          "Close the directory",
          "Replace the diplomat’s diploma",
          "Interview all applicants"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "close the directory directly."
        },
        "explanation": "初始指示是关闭目录，后来丢旧档的主张不能混成最初命令。"
      },
      {
        "type": "detail",
        "prompt": "What was interfering with the reader?",
        "options": [
          "An expired password",
          "A broken diploma seal",
          "Dirt",
          "A missing programme"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Mei found dirt that could disable a reader."
        },
        "explanation": "污垢使读取器失效；证书失踪不能直接理解成封印破损。"
      },
      {
        "type": "inference",
        "prompt": "What best describes Mei’s approach?",
        "options": [
          "Discard records to speed up applications",
          "Accept the missing diploma as proof of fraud",
          "Punish the staff before examining the machine",
          "Fix the underlying fault before escalating the dispute"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "She repaired the reader, found the diploma, and stopped a disastrous diplomatic dispute."
        },
        "explanation": "修机器并找回证书避免外交争端，体现先查实际故障。"
      }
    ]
  },
  {
    "id": "expansion-a-071",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did Mei find on a disk?",
        "options": [
          "A map of the hospital",
          "Instructions for a new cure",
          "Separate medicine batches",
          "The patients’ personal diaries"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "a disk holding discrete batches"
        },
        "explanation": "磁盘涉及分开药品批次，之后发现假记录，并非新疗法指南。"
      },
      {
        "type": "detail",
        "prompt": "What did the clinical discussion reveal?",
        "options": [
          "All patients received the same care",
          "Staff had refused every discharge",
          "The seller had corrected his records",
          "Some patients were discriminated against"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "staff would discriminate against some patients."
        },
        "explanation": "讨论揭出区别对待病人；其余选项与相关行为不符。"
      },
      {
        "type": "inference",
        "prompt": "Why were the deteriorating pills removed?",
        "options": [
          "To prevent patients from leaving with unsafe medicine",
          "To prove the stall’s advertised cure",
          "To reduce the clinic’s patient numbers",
          "To punish patients who asked questions"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Pills undergoing disintegration were removed before discharge."
        },
        "explanation": "解体药片在出院前移走，符合避免不安全用药；未用于惩罚质疑者。"
      }
    ]
  },
  {
    "id": "expansion-a-072",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the manager react to disobedience?",
        "options": [
          "By postponing the performance",
          "By distributing torches",
          "By removing every mask",
          "By dismissing staff"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "he would dismiss staff for disobedience."
        },
        "explanation": "不服从者被解雇；分发手电是梅采取的措施。"
      },
      {
        "type": "detail",
        "prompt": "Why did Mei dismantle the lamp?",
        "options": [
          "It could disorient actors",
          "It had been stolen from visitors",
          "It blocked the theatre’s sign",
          "It was the only source of heat"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "a lamp that could disorient actors."
        },
        "explanation": "灯可能让演员迷失方向，未说它被盗或承担供暖。"
      },
      {
        "type": "inference",
        "prompt": "What did Mei’s response prioritize?",
        "options": [
          "Allowing guards to punish visitors",
          "Getting the audience out safely",
          "Preserving the manager’s authority",
          "Keeping the backstage display unchanged"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The audience escaped."
        },
        "explanation": "处置面具和提供照明最终让观众逃出，与维护经理权威相反。"
      }
    ]
  },
  {
    "id": "expansion-a-073",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the owner use to distinguish the two stills?",
        "options": [
          "Their spelling labels",
          "Their locations in different towns",
          "Their temperature records",
          "Their construction materials"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "treated spelling as a distinction."
        },
        "explanation": "老板把拼写差异当区别，并非根据工艺实测。"
      },
      {
        "type": "detail",
        "prompt": "What clue indicated trapped gas?",
        "options": [
          "A missing still",
          "A bubble",
          "A broken label",
          "A visitor’s complaint"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A bubble revealed trapped gas."
        },
        "explanation": "气泡揭示滞留气体；投诉与标签争执都不是这一物理线索。"
      },
      {
        "type": "inference",
        "prompt": "What really explained the different drinks?",
        "options": [
          "The guests’ anger",
          "The brewery’s remote location",
          "The brewing craft",
          "The number of letters in the labels"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The distinct drinks differed because of craft, not labels."
        },
        "explanation": "结论明确是工艺造成差异，非拼写或地理位置。"
      }
    ]
  },
  {
    "id": "expansion-a-074",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why had the student hoped to make the documentary?",
        "options": [
          "To prove a divine rescue",
          "To escape distress after a divorce",
          "To advertise a new dock",
          "To find a missing relative"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "After a divorce, she hoped to dodge distress."
        },
        "explanation": "拍片前的私人动机是离婚后的避苦，不能把救海豚当成事先目标。"
      },
      {
        "type": "detail",
        "prompt": "How did Lin help manage the flood?",
        "options": [
          "He closed every neighbouring district",
          "He moved the documentary equipment",
          "He organized supplies and diverted water",
          "He waited for the currents to stop"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "organizing distribution and a diversion to divert floods."
        },
        "explanation": "林组织物资分配与洪水改道，而不是等待或搬拍摄器材。"
      },
      {
        "type": "inference",
        "prompt": "What did the rescue lead the student to recognize?",
        "options": [
          "Only one rescuer deserved credit",
          "Filming was always more useful than helping",
          "Floods could be controlled by doctrine",
          "Different skills could work together"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Skill diversity freed the dolphin."
        },
        "explanation": "多样技能共同救出海豚，结尾拒绝僵硬教条，排除独角英雄论。"
      }
    ]
  },
  {
    "id": "expansion-a-075",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was brought to the market by donkey cart?",
        "options": [
          "Student records",
          "A trader’s furniture",
          "Relief supplies",
          "Bird cages"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "a donkey cart brought the dole"
        },
        "explanation": "驴车运来的是救济物资，不是后文出现的鸟或宿舍记录。"
      },
      {
        "type": "detail",
        "prompt": "What did the trader predict?",
        "options": [
          "An immediate recovery",
          "An end to all donations",
          "A successful student election",
          "A decline toward doom"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A trader predicted a downward path toward doom."
        },
        "explanation": "商人预言下行与厄运；林后来对此表示怀疑。"
      },
      {
        "type": "inference",
        "prompt": "What did Lin’s decision imply?",
        "options": [
          "Immediate need mattered more than the gloomy claim",
          "The trader’s prediction had been verified",
          "Only market traders deserved relief",
          "All aid should be delayed until recovery"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "He would donate supplies and let care continue."
        },
        "explanation": "林继续捐物资，说明没有因悲观说法停止照顾宿舍里的人。"
      }
    ]
  },
  {
    "id": "expansion-a-076",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was wrong with the old plan?",
        "options": [
          "Its drawer could not be opened",
          "It required too many dragons",
          "It removed every village field",
          "Its drainage let water drift away"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "its drainage let water drift."
        },
        "explanation": "草图的缺点是排水让水漂散，不是抽屉或龙本身。"
      },
      {
        "type": "detail",
        "prompt": "What precaution did Lin require before repairs?",
        "options": [
          "Workers had to be sober",
          "The village had to stop farming",
          "The drum had to be destroyed",
          "Every drug had to be discarded"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "He required sober hands before any drastic repair."
        },
        "explanation": "前次事故涉及药物与醉工，林要求清醒操作，并非丢弃所有药。"
      },
      {
        "type": "inference",
        "prompt": "What supported the final success?",
        "options": [
          "A worker’s drunken improvisation",
          "Practical work that brought water to the fields",
          "A dream that replaced the repair",
          "A drawing that stopped the drought"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Each drop now reached the fields."
        },
        "explanation": "结尾的成果是水到田中；原文明说相信劳动胜过梦。"
      }
    ]
  },
  {
    "id": "expansion-a-077",
    "questions": [
      {
        "type": "detail",
        "prompt": "Who stayed to operate the dye-shop machinery?",
        "options": [
          "A dutiful dwarf",
          "The duke",
          "A travelling merchant",
          "The river keeper"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A dutiful dwarf chose to dwell in the dwelling, running a dynamo"
        },
        "explanation": "留下运行机器的是尽责的矮个工人，公爵只命名后离开。"
      },
      {
        "type": "detail",
        "prompt": "What harmful practice occurred at the shop?",
        "options": [
          "Dust was sold as medicine",
          "Dye was dumped into the river",
          "The motors were deliberately frozen",
          "Ducks were used as fuel"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "workers would dump dye into a river"
        },
        "explanation": "向河中倾倒染料导致鸭子濒死，不能误选用鸭作燃料。"
      },
      {
        "type": "inference",
        "prompt": "What made the repaired workplace genuinely dynamic?",
        "options": [
          "Ignoring the dying duck",
          "Operating the motors without interruption",
          "Responsible testing and safe repair",
          "The duke’s chosen name"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "At dusk, due care meant his duty was to stop it. Mei tested its dynamical behaviour for a long duration. Safe repair restored a truly dynamic workplace.",
          "focusQuote": "Safe repair restored a truly dynamic workplace."
        },
        "explanation": "活力来自安全修复，不是命名或坚持不停机。"
      }
    ]
  },
  {
    "id": "expansion-a-078",
    "questions": [
      {
        "type": "detail",
        "prompt": "What disrupted the potter’s earnings?",
        "options": [
          "An eclipse shut every market",
          "An earthquake broke the pots",
          "An eagle stole the wares",
          "The festival was cancelled"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "An earthquake broke the pots"
        },
        "explanation": "地震打碎陶器；日食与游客生态问题出现在后段。"
      },
      {
        "type": "detail",
        "prompt": "Why was ecological damage also an economic issue?",
        "options": [
          "Tourists were the only source of income",
          "Every eclipse destroyed the harvest",
          "The economy depended on the ecosystem",
          "The potter owned every edible plant"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The economy depended on the ecosystem"
        },
        "explanation": "经济依赖生态系统，不等于游客是唯一收入或每次日食毁收成。"
      },
      {
        "type": "inference",
        "prompt": "What kind of recovery did the villagers pursue?",
        "options": [
          "An immediate return through magic",
          "A costly rebuild without study",
          "A permanent ban on pottery",
          "Careful, cost-saving repairs"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "they made an economical repair economically."
        },
        "explanation": "研究成本并节约修复，且恢复不轻易发生，排除瞬间奇迹。"
      }
    ]
  },
  {
    "id": "expansion-a-079",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had gone missing from edition eighteen?",
        "options": [
          "The whole printing machine",
          "An Egyptian translation",
          "An elder’s editorial",
          "The editor’s education certificate"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "lost an editorial by an eighty-year-old elder."
        },
        "explanation": "第十八期丢的是八十岁长者的社论，不是整台机器。"
      },
      {
        "type": "detail",
        "prompt": "What actually caused paper to be ejected?",
        "options": [
          "The writer withdrew his article",
          "The machine rejected controversial opinions",
          "A rival editor removed the paper",
          "The editor’s elbow pressed an elastic catch"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "when his elbow pressed it."
        },
        "explanation": "梅看见肘部按到弹性扣件使纸弹出，不能推成观点遭审查。"
      },
      {
        "type": "inference",
        "prompt": "What did the editor need to improve the result?",
        "options": [
          "Set aside his ego and revise the article patiently",
          "Blame the writer’s ideas",
          "Remove all educational content",
          "Treat the machine as flawless"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Hours would elapse as he agreed to edit the article. He set his ego aside. Better efficiency and patient effort made the lesson effective.",
          "focusQuote": "He set his ego aside."
        },
        "explanation": "他放下自我、愿意编辑文章，耐心努力改善效果；不是坚持把问题归咎于作者的观点。"
      }
    ]
  },
  {
    "id": "expansion-a-080",
    "questions": [
      {
        "type": "detail",
        "prompt": "What restriction did the elite want?",
        "options": [
          "Only electricians could build homes",
          "Only elephants could be decorated",
          "Only elected officials could teach",
          "Only eligible riders could use the lift"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "the elite wanted only eligible riders."
        },
        "explanation": "精英要求只有认定有资格者乘电梯，其他选项不在故事中。"
      },
      {
        "type": "detail",
        "prompt": "What did Lin explain about electrical elevation?",
        "options": [
          "It did not represent social rank",
          "It required every rider to vote",
          "It was independent of electricity",
          "It automatically removed neighbours"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Electric elevation was not social rank"
        },
        "explanation": "升高不等于身份地位，技术不该用来排除邻居。"
      },
      {
        "type": "inference",
        "prompt": "What was the final choice about the lift?",
        "options": [
          "Abandon electrical safety",
          "Include residents rather than exclude them",
          "Replace the lift with an election",
          "Reserve all trips for the elite"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "They chose inclusion and rose together."
        },
        "explanation": "结尾共同上升表明选择包容，不是预留给精英或放弃安全。"
      }
    ]
  },
  {
    "id": "expansion-a-081",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the family visit the embassy?",
        "options": [
          "They wanted to emigrate",
          "They wanted to stage an exhibition",
          "They were delivering medicine",
          "They were interviewing the clerk"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A family seeking to emigrate visited an embassy."
        },
        "explanation": "家人来使馆为移居，不是办展览或采访工作人员。"
      },
      {
        "type": "detail",
        "prompt": "Where did Mei find the smoking wires?",
        "options": [
          "Under a clerk’s desk",
          "Embedded in embroidery",
          "Behind the embassy sign",
          "Inside the family’s bags"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "wires that someone had chosen to embed in embroidery."
        },
        "explanation": "电线藏在刺绣中；烟并非家人的行李所致。"
      },
      {
        "type": "inference",
        "prompt": "What lesson did the clerk take from the incident?",
        "options": [
          "Families should avoid embassies",
          "Smoke was a sign of emotion",
          "Responsibility required action",
          "Eloquence could replace repairs"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The clerk learned to embody responsibility through action."
        },
        "explanation": "通风等行动解决险情，华丽言辞不能代替实际责任。"
      }
    ]
  },
  {
    "id": "expansion-a-082",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did an employee emphasize danger?",
        "options": [
          "To attract more hunters",
          "To protect rare animals",
          "To stop all employment",
          "To enlarge the empire"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "His emphasis protected rare animals."
        },
        "explanation": "雇员提醒危险是为稀有动物，不是吸引更多猎人。"
      },
      {
        "type": "detail",
        "prompt": "What threatened the enclosure?",
        "options": [
          "A damaged royal palace",
          "A ban on forest guards",
          "Endless hunting",
          "A shortage of visitors"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "now endless hunting would endanger them."
        },
        "explanation": "原文把威胁与不断捕猎相连，未提宫殿或禁用守卫。"
      },
      {
        "type": "inference",
        "prompt": "What change supported the forest’s future?",
        "options": [
          "Leaving the keeper without authority",
          "Replacing protection with more hunting",
          "Closing cooperation between departments",
          "Empowering the keeper and combining efforts"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Officials would empower the keeper. One department’s endeavor joined another’s endeavour. Care would endow them with endurance, giving the forest a living ending.",
          "focusQuote": "Officials would empower the keeper."
        },
        "explanation": "官员给看护者权力，随后部门合力；不是撤权或增猎。"
      }
    ]
  },
  {
    "id": "expansion-a-083",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was Lin’s wish to enrol difficult?",
        "options": [
          "The teacher refused every student",
          "Lin lacked all physical energy",
          "Villagers treated the teacher as an enemy",
          "The engine had already been repaired"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "villagers called the teacher an enemy."
        },
        "explanation": "阻力来自对老师的敌意，非引擎已修好或林没精力。"
      },
      {
        "type": "detail",
        "prompt": "What did the inquiry show training had to do?",
        "options": [
          "Avoid questions about equipment",
          "Limit skills to the teacher",
          "Remove every village pipe",
          "Ensure safety and enforce rules"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "training must ensure safety and enforce rules."
        },
        "explanation": "培训必须保安全、执行规则，不能理解成不准提问。"
      },
      {
        "type": "inference",
        "prompt": "What helped change the villagers’ understanding?",
        "options": [
          "Patient questions followed by practical learning",
          "Accepting suspicion without inquiry",
          "The teacher’s nationality alone",
          "Abandoning all engineering work"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "They chose to engage, enlarge pipes, and enhance performance. New skills would energize work and enlighten them. Their enlightenment came from patient questions.",
          "focusQuote": "Their enlightenment came from patient questions."
        },
        "explanation": "耐心问清与学技能带来领悟，国籍本身不是理由。"
      }
    ]
  },
  {
    "id": "expansion-a-084",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was Mei’s envelope missing an entry ticket?",
        "options": [
          "The village had cancelled all entertainment",
          "The enterprise had never issued tickets",
          "Mei had given it to the entrepreneur",
          "An envious sponsor had taken it"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "An envious sponsor had taken it."
        },
        "explanation": "票被嫉妒的赞助人拿走，最初并非晚会已全部取消。"
      },
      {
        "type": "detail",
        "prompt": "What did the sponsor believe his money allowed?",
        "options": [
          "Ignoring environmental duties",
          "Choosing the village’s doctors",
          "Preventing all disease",
          "Owning every visitor’s envelope"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Money, he thought, would entitle him to ignore environmental duties."
        },
        "explanation": "这是赞助人的想法，原文没有说他能控制医生或预防疾病。"
      },
      {
        "type": "inference",
        "prompt": "Why did Mei delay the event?",
        "options": [
          "The crowd disliked entertainment",
          "An epidemic threatened the village",
          "She wanted a more expensive ticket",
          "The sponsor lacked enough money"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Mei delayed this episode because an epidemic threatened the village."
        },
        "explanation": "延期直接缘于疫病威胁，不是票价或观众没兴趣。"
      }
    ]
  },
  {
    "id": "expansion-a-085",
    "questions": [
      {
        "type": "detail",
        "prompt": "What problem did the crew’s equipment present?",
        "options": [
          "It could not protect everyone equally",
          "It was too expensive to carry",
          "It had disappeared before departure",
          "It was suitable only for the captain"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Its equipment could not give everyone equal protection."
        },
        "explanation": "装备不能提供平等保护，不等于只适合船长或已丢失。"
      },
      {
        "type": "detail",
        "prompt": "What assumption did Lin identify as mistaken?",
        "options": [
          "The equator could be crossed",
          "Equal weight meant equivalent safety",
          "An equation could test balance",
          "A shield could be erected"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "To equate equal weight with equivalent safety was an error."
        },
        "explanation": "重量相同不等于安全相同；检验平衡本身并未被否定。"
      },
      {
        "type": "inference",
        "prompt": "What was Lin’s priority on the rescue errand?",
        "options": [
          "Preserving false records",
          "Leaving the equipment unexamined",
          "Escorting people to safety",
          "Winning a volcanic race"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin served as escort while everyone could escape."
        },
        "explanation": "林担任护送者使众人逃脱，之后清除假记录。"
      }
    ]
  },
  {
    "id": "expansion-a-086",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the estate owner hope to establish?",
        "options": [
          "A market for evaporation equipment",
          "An academic establishment concerned with aesthetics",
          "A hospital for visitors",
          "A permanent military base"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "an esthetic academic establishment."
        },
        "explanation": "业主想建立美学学术机构，活动中的实验不是卖器材市场。"
      },
      {
        "type": "detail",
        "prompt": "Why did Mei question the experiment’s conclusion?",
        "options": [
          "The guests refused to watch",
          "The crafts had all been destroyed",
          "A result was being treated as eternal truth",
          "The test contained no water"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Calling the result eternal truth violated ethical research and ethics."
        },
        "explanation": "问题是把结果说成永恒真理，并未说实验没有水。"
      },
      {
        "type": "inference",
        "prompt": "What did the revision preserve?",
        "options": [
          "The owner’s claim of everlasting truth",
          "An unsafe stage for future visitors",
          "The original estimate without evaluation",
          "Beauty without permanent claims of certainty"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "preserving beauty without claims of everlasting certainty."
        },
        "explanation": "修订保美感、撤永久确定性主张，非继续原来的绝对宣称。"
      }
    ]
  },
  {
    "id": "expansion-a-087",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the student find during the examination?",
        "options": [
          "A complete history of every organism",
          "Evidence that all evolution had stopped",
          "Obvious exaggeration in the model",
          "A missing examination paper"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "then found evident exaggeration."
        },
        "explanation": "发现夸张，不能把模型读成所有生物的完整进化史。"
      },
      {
        "type": "detail",
        "prompt": "How did the host push the display beyond limits?",
        "options": [
          "Reducing its scope too far",
          "Removing every evolutionary example",
          "Allowing no visitors to enter",
          "Using excessively bright lights"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "exceed limits with excessive, excessively bright lights."
        },
        "explanation": "超限与过亮照明相关，不是缩小范围或拒访客。"
      },
      {
        "type": "inference",
        "prompt": "What did the student’s response favour?",
        "options": [
          "Careful evidence and acknowledged exceptions",
          "Treating one mistake as proof of evil",
          "Keeping every excessive claim",
          "Judging the model only by its brightness"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "She explained every exception and removed excess."
        },
        "explanation": "逐条解释例外、删去过量内容，体现谨慎证据而非一错即恶。"
      }
    ]
  },
  {
    "id": "expansion-a-088",
    "questions": [
      {
        "type": "detail",
        "prompt": "Who was the planned excursion meant to serve?",
        "options": [
          "Every worker equally",
          "Only the exhausted planner",
          "Visitors from another company",
          "Senior officers only"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "it served senior officers exclusively"
        },
        "explanation": "原计划只供高层，员工兴奋并不代表都能参加。"
      },
      {
        "type": "detail",
        "prompt": "What made the planner’s treatment especially unreasonable?",
        "options": [
          "He was denied toilet breaks",
          "He refused to plan the trip",
          "He demanded all the best seats",
          "He had already been exempted from work"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Denied toilet breaks"
        },
        "explanation": "筹划员连如厕休息都被拒，非自己拒工作或要求特权。"
      },
      {
        "type": "inference",
        "prompt": "What did the revised plan combine?",
        "options": [
          "Cancellation of everyone’s responsibilities",
          "Fair duties and enjoyment of the trip",
          "More exhaustion and fewer breaks",
          "Exclusive privileges and no work"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A fair execution plan let everyone execute their duties and enjoy the trip."
        },
        "explanation": "公平安排兼顾履责与游玩，不等于免除所有职责。"
      }
    ]
  },
  {
    "id": "expansion-a-089",
    "questions": [
      {
        "type": "detail",
        "prompt": "What physical problem threatened the exhibition?",
        "options": [
          "The exit was blocked",
          "All flowers were artificial",
          "The gardener had vanished",
          "The garden had no entrance"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "the blocked exit threatened the exhibit"
        },
        "explanation": "风险来自出口堵塞；没有人工花或园丁失踪的信息。"
      },
      {
        "type": "detail",
        "prompt": "Why did Mei question further expansion?",
        "options": [
          "It would make all flowers live forever",
          "It would cause needless expense",
          "It would shorten every expedition",
          "It would prove the exile’s innocence"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "To expand further would expend funds at needless expense."
        },
        "explanation": "扩张造成不必要开支，与花能永生无关。"
      },
      {
        "type": "inference",
        "prompt": "What does the final outcome suggest?",
        "options": [
          "Officials had to expel its owner",
          "Exotic flowers could never be exhibited",
          "The garden could continue on a modest scale",
          "The garden required permanent grandeur"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The garden could exist without grandeur."
        },
        "explanation": "不求宏大也能继续，成本降低、出口打开而展览保留。"
      }
    ]
  },
  {
    "id": "expansion-a-090",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the owner’s explanation focus on?",
        "options": [
          "The expert’s permit conditions",
          "Export income",
          "Chemical warnings",
          "The injured workers’ testimony"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The owner’s exposition showed only export income."
        },
        "explanation": "业主只展示出口收入，不是完整讲安全或许可证条件。"
      },
      {
        "type": "detail",
        "prompt": "Why did the chemicals explode?",
        "options": [
          "Every warning was followed carefully",
          "Export income had decreased",
          "The experimentation was poorly handled",
          "The expert’s permit automatically expired"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "poor experimentation let them explode."
        },
        "explanation": "爆炸与糟糕实验过程相关，不能把许可到期当物理原因。"
      },
      {
        "type": "inference",
        "prompt": "What was required before further mining exploration?",
        "options": [
          "A new export advertisement",
          "Immediate dismissal of every worker",
          "More uncontrolled chemical exposure",
          "An explanation of safety"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Before more exploration, they must explain safety."
        },
        "explanation": "继续勘探前先说明安全，不是增加无控接触或只做广告。"
      }
    ]
  },
  {
    "id": "expansion-a-091",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the club’s cloak intended to express?",
        "options": [
          "A new method of firefighting",
          "The wealth of the dye supplier",
          "The beauty of an extinct bird",
          "The power of a living dragon"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "to express the beauty of an extinct bird."
        },
        "explanation": "羽衣纪念灭绝鸟的美，防火是后来需要处理的问题。"
      },
      {
        "type": "detail",
        "prompt": "What risk accompanied colour extraction?",
        "options": [
          "It would make every fabric waterproof",
          "It would remove all external flames",
          "It would prevent any extension",
          "Smoke could threaten eyesight"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "threaten eyesight through smoke."
        },
        "explanation": "提取染色过程的烟可能伤视力，未说它能防水或灭火。"
      },
      {
        "type": "inference",
        "prompt": "What balance did Lin seek for the project?",
        "options": [
          "A beautiful tribute within safe limits",
          "Unlimited expansion despite danger",
          "Less beauty in exchange for more smoke",
          "Abandoning every extracurricular activity"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "An extraordinary tribute needed safe limits."
        },
        "explanation": "非凡纪念也需安全限度，不能推成禁止全部课外活动。"
      }
    ]
  },
  {
    "id": "expansion-a-092",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had the famous fairy promised?",
        "options": [
          "A new faculty building",
          "A permanent ban on medicine",
          "An eclipse at the village",
          "Relief from famine"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "promised relief from famine."
        },
        "explanation": "仙子许诺解除饥荒；院系设备属于后来查到的线索。"
      },
      {
        "type": "detail",
        "prompt": "What was making the medicine deteriorate?",
        "options": [
          "A faulty Fahrenheit gauge",
          "A rival faction’s vote",
          "The villagers’ lack of faith",
          "Too many food deliveries"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "a Fahrenheit gauge’s failure made medicine fade."
        },
        "explanation": "温度仪表故障使药效减弱，不能只归结派系或信仰。"
      },
      {
        "type": "inference",
        "prompt": "What ultimately gave villagers practical relief?",
        "options": [
          "Continued reliance on the false gauge",
          "Repairs and arriving food",
          "A new fable preserving the old claim",
          "Greater fame for the fairy"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "She helped facilitate repairs. Fair, faithful help stopped people turning faint. The fake tale’s fabrication was exposed as false, and food arrived.",
          "focusQuote": "She helped facilitate repairs."
        },
        "explanation": "结尾维修与粮食到达提供实际帮助，神话编造已被揭穿。"
      }
    ]
  },
  {
    "id": "expansion-a-093",
    "questions": [
      {
        "type": "detail",
        "prompt": "What destination had the ticket seller advertised?",
        "options": [
          "A magic isle",
          "An ordinary coast",
          "A railway terminal",
          "A hospital inland"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "a ferry to a magic isle."
        },
        "explanation": "广告说仙岛；普通海岸是后来核图得到的真实目的地。"
      },
      {
        "type": "detail",
        "prompt": "What did Lin’s check reveal?",
        "options": [
          "The fare was lower than advertised",
          "The ferry was headed to an ordinary coast",
          "The ferry carried no passengers",
          "The captain had lost his compass"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The actual destination was an ordinary coast."
        },
        "explanation": "真实航向普通海岸，未说空船或罗盘丢了。"
      },
      {
        "type": "inference",
        "prompt": "What was the result of checking the route?",
        "options": [
          "Proof that the magic isle existed",
          "A decision to ignore preparation",
          "An honest account and refund of the overcharge",
          "A journey cancelled for every traveller"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The captain would accept the check and acknowledge the mistake and confirm the route by compass. Lin said farewell and returned the overcharge. An honest account and adequate preparation and careful navigation, he thought, made a safe journey possible.",
          "focusQuote": "Lin said farewell and returned the overcharge."
        },
        "explanation": "多收钱退回，船长承认错误；不等于仙岛被证实或全员停行。"
      }
    ]
  },
  {
    "id": "expansion-b-001",
    "questions": [
      {
        "type": "detail",
        "prompt": "What problem appeared before the man collapsed?",
        "options": [
          "The banquet food disappeared",
          "His coat clasp would not fasten",
          "A fax machine caught fire",
          "A feather struck his eye"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "its fastener would not fasten."
        },
        "explanation": "衣扣不能扣紧先发生；传真是后来的证据。"
      },
      {
        "type": "detail",
        "prompt": "What made the clasp dangerous?",
        "options": [
          "Its fabric trapped all the heat",
          "It carried a false family name",
          "A faulty spring exposed a needle",
          "Its feather made the coat too heavy"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A faulty spring exposed a fatal needle"
        },
        "explanation": "故障弹簧露出致命针，不是羽毛重量或衣料温度。"
      },
      {
        "type": "inference",
        "prompt": "What weakened the guests’ explanation based on fate?",
        "options": [
          "The man was too tired to speak",
          "The coat was everyone’s favourite",
          "The waiter had been afraid",
          "The needle traced the problem to its maker"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "the trapped needle identified its maker."
        },
        "explanation": "针指向制作者的具体责任，使命运说不充分；受欢迎不说明安全。"
      }
    ]
  },
  {
    "id": "expansion-b-002",
    "questions": [
      {
        "type": "detail",
        "prompt": "What prevented fertilizer from reaching the fields?",
        "options": [
          "The festival’s cancellation",
          "A federal ban on farming",
          "An extra ferry fee",
          "A shortage of fertile land"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A ferry demanded an extra fee, keeping fertilizer away from fertile fields."
        },
        "explanation": "渡船额外收费挡住肥料，不是禁耕或没好田。"
      },
      {
        "type": "detail",
        "prompt": "What physical clues linked the problem to the tollkeeper?",
        "options": [
          "The inspector’s clothes",
          "A traveller’s empty water bottle",
          "The number of festival visitors",
          "Fibres near the poisoned feed"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A black fiber floated beside a red fibre from the tollkeeper’s uniform."
        },
        "explanation": "饲料附近纤维与收费人制服相关，检查员服饰只是他人议论。"
      },
      {
        "type": "inference",
        "prompt": "What helped expose the waste pipe?",
        "options": [
          "Farmers’ feedback",
          "Discussion of the inspector’s appearance",
          "A new ferry tax",
          "Refusal to clear the drain"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Farmers’ feedback exposed the tollkeeper’s waste pipe."
        },
        "explanation": "农民反馈揭出排污管，谈女性穿着没有解决实际问题。"
      }
    ]
  },
  {
    "id": "expansion-b-003",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the fisherman report seeing?",
        "options": [
          "A nuclear reactor",
          "A burning fishing boat",
          "A scientific laboratory",
          "A firework"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A fisherman had seen only a firework"
        },
        "explanation": "渔夫只见烟火，不支持作者声称的核裂变。"
      },
      {
        "type": "detail",
        "prompt": "What indicated a violent fight?",
        "options": [
          "A broken figure and blood",
          "A finite battery charge",
          "A scientist’s title",
          "The fireplace’s location"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A broken figure and blood showed a fierce fight."
        },
        "explanation": "碎塑像与血迹支持搏斗；电池用于反驳反应堆说。"
      },
      {
        "type": "inference",
        "prompt": "Why was the glowing wire not evidence of a reactor?",
        "options": [
          "It had come from the sea",
          "It used a small battery’s limited charge",
          "It had no visible colour",
          "It could not be touched with a finger"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The finely cut wire drew power from a small battery with a finite charge, not a reactor."
        },
        "explanation": "供能来自有限电量小电池，不是核反应堆。"
      }
    ]
  },
  {
    "id": "expansion-b-004",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why had the keeper’s repairs been delayed?",
        "options": [
          "His fitness was poor",
          "The cook refused every guest",
          "The fleet had left the harbour",
          "A curtain blocked all the tools"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "The keeper’s poor fitness delayed repairs"
        },
        "explanation": "身体状况拖延维修，未说厨娘或船队妨碍。"
      },
      {
        "type": "detail",
        "prompt": "What danger did the altered plate create?",
        "options": [
          "It changed the cook’s recipes",
          "It directed ships toward a reef",
          "It removed all light from the harbour",
          "It increased the fleet’s speed"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "it pointed ships toward the reef."
        },
        "explanation": "问题是光指向暗礁，不是船速或菜谱。"
      },
      {
        "type": "inference",
        "prompt": "What prevented the fleet from following the false signal?",
        "options": [
          "The keeper stopped all repairs",
          "The ships followed the flattened plate",
          "Lin covered the false light",
          "The guest flattered the cook"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin covered the false light."
        },
        "explanation": "遮掉错误灯光后船队安全入港；继续跟板的光恰恰危险。"
      }
    ]
  },
  {
    "id": "expansion-b-005",
    "questions": [
      {
        "type": "detail",
        "prompt": "What supplies were inside the medicine box?",
        "options": [
          "Wood and cooking fuel",
          "Flour and flu remedies",
          "Fertilizer and bird feed",
          "Dye and electrical tools"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "It contained flour and remedies for flu."
        },
        "explanation": "箱中是面粉与流感药，不是其他故事的物资。"
      },
      {
        "type": "detail",
        "prompt": "Why did Yun keep pressure on the man’s wound?",
        "options": [
          "He had refused the medicine",
          "The water had stopped flowing",
          "His flesh had been torn",
          "He had a fever from the box"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "His torn flesh worried her, but she kept pressure on the wound"
        },
        "explanation": "皮肉撕裂让她压住伤口；未提拒药或水停。"
      },
      {
        "type": "inference",
        "prompt": "How did the group find the last family?",
        "options": [
          "They waited on the first roof",
          "They stopped using the river markers",
          "They returned to the medicine store",
          "They followed a feather above the foam"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "They followed it to the last family"
        },
        "explanation": "前句羽毛在泡沫上飘动，他们跟随它找到最后一家。"
      }
    ]
  },
  {
    "id": "expansion-b-006",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the storyteller promise in the forest?",
        "options": [
          "A route to a foreign city",
          "A cure for the traveller’s cut",
          "Treasure that would last forever",
          "A safe shelter from every storm"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "treasure lasting forever behind the fore gate."
        },
        "explanation": "承诺是门后永用的财宝，未保证避尽风暴或治伤。"
      },
      {
        "type": "detail",
        "prompt": "What was the foremost danger?",
        "options": [
          "The forecast alone",
          "The foreigner’s map",
          "The villagers’ dialect",
          "A trap that force would trigger"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A foreigner made a fold in his map and touched a cut on his forehead. The foremost danger was the trap, not the storm in the forecast. Even without magic, one could foresee that force would trigger it.",
          "focusQuote": "Even without magic, one could foresee that force would trigger it."
        },
        "explanation": "最要紧的是机关陷阱，非预报中的风暴。"
      },
      {
        "type": "inference",
        "prompt": "What does Yun’s response show?",
        "options": [
          "She relied on tracks rather than blind obedience",
          "She accepted the treasure story immediately",
          "She needed a storm to stop the plan",
          "She believed the fool should lead again"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Yun had to forbid blind obedience and focus on the tracks."
        },
        "explanation": "云制止盲从、看足迹，不能读成立即相信寻宝者。"
      }
    ]
  },
  {
    "id": "expansion-b-007",
    "questions": [
      {
        "type": "detail",
        "prompt": "What first made the order suspicious?",
        "options": [
          "It arrived after the meeting ended",
          "It demanded repairs to the fortress",
          "It contained no military instruction",
          "Its format differed from the former governor’s"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Its format differed from one used by the former governor"
        },
        "explanation": "格式与旧长官不一致，会议则尚未召开。"
      },
      {
        "type": "detail",
        "prompt": "What was the forged order intended to cause?",
        "options": [
          "Guards abandoning the fortress",
          "Guards checking every seal",
          "Reinforcements refusing entry",
          "Villagers repairing old walls"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "so guards would forsake the fortress and march forth."
        },
        "explanation": "伪令要守军弃堡外出，不是查印或维修。"
      },
      {
        "type": "inference",
        "prompt": "Why were the guards described as fortunate?",
        "options": [
          "The stranger gained control of the forum",
          "Reinforcements arrived and no one died",
          "They obeyed the forged order successfully",
          "The false seal became official"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A fortnight later, a fossil inside the false seal proved its source. The guards were fortunate: reinforcements had arrived. Fortunately, no one died. At the forum, Yun urged leaders to foster trust and protect villagers rather than let a stranger’s fortune decide their lives.",
          "focusQuote": "The guards were fortunate: reinforcements had arrived."
        },
        "explanation": "援军到达、无人死亡支持幸运评价，未说伪令成功或假印变真。"
      }
    ]
  },
  {
    "id": "expansion-b-008",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had risen fourfold at the planned garden?",
        "options": [
          "Demand for water",
          "The number of foxes",
          "The value of the framework",
          "The elder’s medicine dose"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "demand had risen fourfold."
        },
        "explanation": "花园需求增加四倍；没有说动物数或药量同步增加。"
      },
      {
        "type": "detail",
        "prompt": "Where did the unusual sweet smell come from?",
        "options": [
          "The elder’s food",
          "A hidden bottle",
          "Most nearby plants",
          "The fox’s fur"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The smell came from a hidden bottle."
        },
        "explanation": "气味来自藏瓶，附近只有少量芳香植物，不能当主要来源。"
      },
      {
        "type": "inference",
        "prompt": "What ultimately saved the spring?",
        "options": [
          "Blaming the builder without checking",
          "Increasing demand again",
          "Removing excess pressure",
          "Keeping the altered valve unchanged"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Removing the extra pressure saved the spring"
        },
        "explanation": "解除额外压力救泉；改阀是具体问题，非单凭指责建筑者。"
      }
    ]
  },
  {
    "id": "expansion-b-009",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did Lin find frozen inside the fridge?",
        "options": [
          "A freight invoice",
          "A fresh ticket",
          "A torn frock",
          "A border map"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "Lin found a fresh ticket frozen inside"
        },
        "explanation": "冻在冰柜的是新票，裙子与边境水沟属于其他线索。"
      },
      {
        "type": "detail",
        "prompt": "What revealed a drain leading toward the frontier?",
        "options": [
          "A passenger’s ticket number",
          "A freight schedule",
          "A frog crossing the frost",
          "The keeper’s complaints"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A frog hopped across the frost, revealing a drain toward the frontier."
        },
        "explanation": "青蛙越过霜层显出水沟，不能误作货运日程引路。"
      },
      {
        "type": "inference",
        "prompt": "What did following the drain achieve?",
        "options": [
          "Repair of the train’s engine",
          "Confirmation of the keeper’s innocence",
          "A permanent ban on trading",
          "Recovery of stolen goods"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin followed it to the stolen goods."
        },
        "explanation": "沿沟找到盗货，商人恢复交易自由，不是停贸或证明看守清白。"
      }
    ]
  },
  {
    "id": "expansion-b-010",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had happened to the promised funding?",
        "options": [
          "It paid for a new furnace",
          "It was returned to every donor",
          "It vanished",
          "It bought all the furniture"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "its funding vanished beside burned fur."
        },
        "explanation": "资金不见，没有兑现配家具的承诺；位置在焦毛旁不是付款用途。"
      },
      {
        "type": "detail",
        "prompt": "Why did the device fail to function?",
        "options": [
          "The hall had too much furniture",
          "The fund was still being counted",
          "The disciples had cancelled the experiment",
          "A fuse was broken"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A broken fuse explained why the device could not function"
        },
        "explanation": "坏保险丝解释装置失效，资金失踪不是电气原因。"
      },
      {
        "type": "inference",
        "prompt": "Why did Yun restrain the disciples’ fury?",
        "options": [
          "It would obstruct the inquiry",
          "It would prove fusion had occurred",
          "It would make the fund larger",
          "It would fulfil the contract automatically"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "their fury would only frustrate the inquiry"
        },
        "explanation": "愤怒报复会妨碍调查、加重挫败，不能代替核账与履约。"
      }
    ]
  },
  {
    "id": "expansion-b-011",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where was the gang hiding?",
        "options": [
          "Inside the gardener’s house",
          "On a freight train",
          "At the town’s jail",
          "In a garage behind the gallery"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "His gang hid in a garage behind the gallery."
        },
        "explanation": "团伙藏在展览馆后的车库，监狱是后来的结果。"
      },
      {
        "type": "detail",
        "prompt": "What caused the trapped driver’s breathing danger?",
        "options": [
          "Spilled gasoline releasing fumes",
          "A shortage of garlic",
          "A map blocking the window",
          "An excessive battery charge"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A gallon of spilled gasoline released gaseous fumes"
        },
        "explanation": "汽油泼洒产生气体危及司机，大蒜只是园丁闻到的味道。"
      },
      {
        "type": "inference",
        "prompt": "What mattered to the driver’s friends in the ending?",
        "options": [
          "Taking over the gallery",
          "His survival",
          "Ownership of the galaxy map",
          "The gangster’s gambling winnings"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "joyful about his survival rather than the criminal’s defeat."
        },
        "explanation": "结尾明确喜悦来自司机活下来，而非匪徒失败或地图。"
      }
    ]
  },
  {
    "id": "expansion-b-012",
    "questions": [
      {
        "type": "detail",
        "prompt": "What mistake did the researcher make?",
        "options": [
          "Generalizing from a single gene",
          "Refusing to use a generator",
          "Testing every plant separately",
          "Rejecting all genetic evidence"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "tried to generalize from a single gene"
        },
        "explanation": "研究者从一个基因概括所有植物，不是完全拒绝遗传证据。"
      },
      {
        "type": "detail",
        "prompt": "What helped produce genuine results?",
        "options": [
          "All the generic equipment was discarded",
          "Villagers generously supplied seeds",
          "The universal destiny claim was accepted",
          "Only the genius worked alone"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Villagers were generous with seeds; their generosity produced genuine results"
        },
        "explanation": "村民捐种支持真实结果，原文未证明普遍命运论。"
      },
      {
        "type": "inference",
        "prompt": "What did the researcher learn from the outcome?",
        "options": [
          "Every plant had the same destiny",
          "Only expensive equipment could work",
          "Evidence could change his view",
          "Talent made evidence unnecessary"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "good evidence could change his mind."
        },
        "explanation": "最后发现证据能改看法，普通设备也能育苗。"
      }
    ]
  },
  {
    "id": "expansion-b-013",
    "questions": [
      {
        "type": "detail",
        "prompt": "What explained the supposed ghost’s movement?",
        "options": [
          "A floating ginger plant",
          "A hidden glider",
          "A geological earthquake",
          "A real giant"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "a hidden glider could glide like a ghost."
        },
        "explanation": "幽灵式滑行来自藏滑翔机，影子大不证明真巨人。"
      },
      {
        "type": "detail",
        "prompt": "What detail did Lin notice despite the spectacle?",
        "options": [
          "A broken student map",
          "A missing tear gland",
          "A wire’s gleam",
          "An invisible valley"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "a glance revealed a wire’s gleam."
        },
        "explanation": "瞥见钢线微光揭出机器线索，烟气刺激泪腺不是腺体丢失。"
      },
      {
        "type": "inference",
        "prompt": "What made the apparent haunting convincing to villagers?",
        "options": [
          "An operator openly explaining the device",
          "Students announcing the geometry first",
          "A complete absence of smoke and lighting",
          "Mechanical wings glittering under lamps"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The wings would glitter under lamps, turning a machine into a haunting."
        },
        "explanation": "灯下翼面闪光把机器装成闹鬼，不是操作人先公开原理。"
      }
    ]
  },
  {
    "id": "expansion-b-014",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the idol’s description promise?",
        "options": [
          "Food for every goat",
          "An end to all woodcarving",
          "Worldwide glory",
          "Safer golf equipment"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "promised global glory around the globe."
        },
        "explanation": "说明宣传全球荣耀，高尔夫球是后来供货线索。"
      },
      {
        "type": "detail",
        "prompt": "What revealed the material beneath the golden surface?",
        "options": [
          "A glove made of gold",
          "The goddess’s title",
          "A portrait of the supplier",
          "A goat gnawing the base"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A goat had begun to gnaw its base, exposing wood."
        },
        "explanation": "山羊啃底露木，金色表面不等于实心黄金。"
      },
      {
        "type": "inference",
        "prompt": "What was Lin trying to accomplish?",
        "options": [
          "Save the innocent keeper",
          "Give the false maker more glory",
          "Purchase all the packed goods",
          "Stop every village donation permanently"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "His goal was to save the innocent keeper."
        },
        "explanation": "林的目标是护住无辜看守，结尾退款不代表永禁捐款。"
      }
    ]
  },
  {
    "id": "expansion-b-015",
    "questions": [
      {
        "type": "detail",
        "prompt": "Who was blamed by gossip at the ceremony?",
        "options": [
          "The recent graduate",
          "The grandfather",
          "The governor’s gardener",
          "The clerk"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Gossip blamed a clerk in a gown"
        },
        "explanation": "流言怪书记；其他人物后来核证据，不是此处被指者。"
      },
      {
        "type": "detail",
        "prompt": "What small shortage appeared in every grain sack?",
        "options": [
          "One gram",
          "One kilogram",
          "One whole sack",
          "One handful of seed"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Each sack of grain lacked one gram"
        },
        "explanation": "每袋少一克；不能误成千克或整袋。"
      },
      {
        "type": "inference",
        "prompt": "What exposed the forged grants?",
        "options": [
          "The grand ceremony’s size",
          "A repeated grammatical error",
          "The clerk’s torn gown",
          "The height of the granite steps"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "every altered line repeated one grammatical error."
        },
        "explanation": "改过的每行重复语法错，衣裙破损发生在救孩子时，不能证明贪款。"
      }
    ]
  },
  {
    "id": "expansion-b-016",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the landlord call the grave cursed?",
        "options": [
          "He wanted the neighbouring grape field",
          "He wanted to rebuild the greenhouse for the family",
          "He had lost his own burial records",
          "He had seen the traveler perform a ritual"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A greedy landlord wanted the grape field beside a greenhouse."
        },
        "explanation": "贪婪地主想夺葡萄田，诅咒是这目标下的说法。"
      },
      {
        "type": "detail",
        "prompt": "What helped Yun understand the false omen?",
        "options": [
          "The traveler’s nationality alone",
          "A hidden jar rolling from the stone",
          "A goat refusing to graze",
          "The family abandoning the field"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Gravity rolled a hidden jar from the grey stone"
        },
        "explanation": "重力使藏瓶滚出揭示机关；羊仍吃草，国籍本身不证明真假。"
      },
      {
        "type": "inference",
        "prompt": "What did Yun’s success allow the family to do?",
        "options": [
          "Forget the deceased completely",
          "Accept the landlord’s curse",
          "Mourn without fear",
          "Surrender the burial ground"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "They could grieve without fear"
        },
        "explanation": "家人能够安心哀悼，非放弃墓地或忘记亡者。"
      }
    ]
  },
  {
    "id": "expansion-b-017",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the grain groove conceal?",
        "options": [
          "A box of clean flour",
          "Spoiled grain",
          "A payment guarantee",
          "A set of guard uniforms"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A groove concealed gross amounts of spoiled grain."
        },
        "explanation": "凹槽藏坏粮，与商人的安全保证不一致。"
      },
      {
        "type": "detail",
        "prompt": "Who was actually making the troubling noise?",
        "options": [
          "A lost guide",
          "The guilty merchant outside",
          "An elder who had seen the grinding",
          "An animal growing rapidly"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The noise became a groan: an elder had watched the merchant grind moldy grain. It damaged the animals’ growth. The guard’s grumble faded as a guide offered guidance and a clear guideline for gathering evidence.",
          "focusQuote": "The noise became a groan: an elder had watched the merchant grind moldy grain."
        },
        "explanation": "声音是老人呻吟，不是动物低吼的确认。"
      },
      {
        "type": "inference",
        "prompt": "What secured safer food in the end?",
        "options": [
          "Threats without records",
          "The merchant’s original guarantee",
          "Ignoring the animals’ growth",
          "Careful work rather than threats"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Careful work, rather than threats, returned safe food to the shelves."
        },
        "explanation": "结尾明确说细致工作而非威胁让安全食品重新上架；商人原先的保证并未兑现。"
      }
    ]
  },
  {
    "id": "expansion-b-018",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the young man initially mistake the powder for?",
        "options": [
          "Flour",
          "Paint",
          "Gunpowder",
          "Medicine"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "what he thought was gunpowder"
        },
        "explanation": "以为是火药，结尾才认出无害舞台粉末；两种认知要分清。"
      },
      {
        "type": "detail",
        "prompt": "Why was the jammed door a serious problem?",
        "options": [
          "It prevented food from being divided",
          "It hid the guitar player’s identity",
          "It had already broken every hammer",
          "It could hamper escape"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A jammed door would hamper escape"
        },
        "explanation": "门卡住妨碍逃生，锤子敲不开不等于锤子全断。"
      },
      {
        "type": "inference",
        "prompt": "What helped the group remain calm?",
        "options": [
          "Recognizing the powder as harmless",
          "Finding a hidden gun",
          "Refusing the side exit",
          "Resuming training during the hail"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The player recognized the powder as harmless stage dust."
        },
        "explanation": "认出无害粉末消除误会，文章没有找到枪。"
      }
    ]
  },
  {
    "id": "expansion-b-019",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was suspicious about the clerk’s documents?",
        "options": [
          "They contained no handwriting",
          "They lacked every ship’s name",
          "They were both ordinary receipts",
          "They named different harbours"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Suspicious handwriting named a different harbour."
        },
        "explanation": "手袋文件涉及不同港口，且是被植入的文件，不是无笔迹。"
      },
      {
        "type": "detail",
        "prompt": "How was the altered list concealed?",
        "options": [
          "Among loose papers near hidden hardware",
          "Inside a ship’s fuel tank",
          "Under the clerk’s old injury record",
          "In the helper’s shoes"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A handsome helper used a handkerchief to hang a cover over the handle. Hidden hardware sat inside. A handful of loose papers made it handy to conceal the altered list; few noticed what could happen to the ships.",
          "focusQuote": "A handful of loose papers made it handy to conceal the altered list; few noticed what could happen to the ships."
        },
        "explanation": "散页便利藏假名单，硬件藏在遮布内；没有油箱或鞋证据。"
      },
      {
        "type": "inference",
        "prompt": "What cleared the clerk’s name?",
        "options": [
          "The glue being removed from every ship",
          "The thief’s prints beneath the cover",
          "The helper’s handsome appearance",
          "Her promise to forget the hardship"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "the real thief’s prints appeared beneath the cover."
        },
        "explanation": "遮布下真贼指纹洗清嫌疑，外貌不能作为证据。"
      }
    ]
  },
  {
    "id": "expansion-b-020",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the supervisor order despite danger?",
        "options": [
          "Hurry into the heated room",
          "Delay all hay deliveries",
          "Remove the hawk from the forest",
          "Stop the birds from hatching"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "ordered them to hasten into the heat despite its hazardous air."
        },
        "explanation": "主管催弟子进危险热屋，云才阻止这一安排。"
      },
      {
        "type": "detail",
        "prompt": "What was harmful to the birds besides heat?",
        "options": [
          "The mere presence of an outside hawk",
          "Harsh noise",
          "The harp’s restored harmony",
          "The shaded place"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Harsh noise could harm the birds"
        },
        "explanation": "刺耳噪音有害，文中并未把屋外鹰认作主要损失原因。"
      },
      {
        "type": "inference",
        "prompt": "Why did the conflict subside?",
        "options": [
          "The disciples left every egg behind",
          "The birds stopped making any sound",
          "The eggs were moved and hatched successfully",
          "The supervisor’s punishment increased"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "She stopped the hassle, secured a harness, and moved the eggs to shade. The birds hatched into harmonious song. The supervisor’s hateful words lost their power, and his disciples’ hatred softened into relief.",
          "focusQuote": "The birds hatched into harmonious song."
        },
        "explanation": "移到阴凉后顺利孵出和谐叫声，弟子松了口气，不是惩罚升级。"
      }
    ]
  },
  {
    "id": "expansion-b-021",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the letter to headquarters demand?",
        "options": [
          "A replacement headmaster immediately",
          "An inquiry into the school fire",
          "A new school prayer",
          "A change of newspaper title"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A headline about the school fire reached headquarters. The letter’s heading demanded an inquiry. The headmaster complained of a headache beside a burned heap at the hearth.",
          "focusQuote": "The letter’s heading demanded an inquiry."
        },
        "explanation": "信要求调查失火，未直接要求换校长。"
      },
      {
        "type": "detail",
        "prompt": "How had the heating been made more dangerous?",
        "options": [
          "The ledger had turned into a heater",
          "The school had stopped using all fuel",
          "Someone altered the valve to raise the heat",
          "The cook had removed every hedge"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Someone had increased the heat by altering the heating valve."
        },
        "explanation": "有人改供暖阀升温，账本被藏是调查线索而非热源。"
      },
      {
        "type": "inference",
        "prompt": "Why could a prayer not settle the case?",
        "options": [
          "All the injured had refused care",
          "The letter was addressed incorrectly",
          "The cook had never entered the school",
          "Physical evidence still showed wrongdoing"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A prayer to heaven could not erase the evidence."
        },
        "explanation": "实物证据仍在，厨师急着烧账且校长承认疏忽，祈祷不能抹去。"
      }
    ]
  },
  {
    "id": "expansion-b-022",
    "questions": [
      {
        "type": "detail",
        "prompt": "What indicated a safer route to the stranded heir?",
        "options": [
          "The heir’s family title",
          "A helmet found at the summit",
          "A herd beside some herbs",
          "The helicopter’s paint"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A herd beside a patch of herb showed a safer path."
        },
        "explanation": "兽群与药草旁路径是路线线索，家族头衔不是安全证据。"
      },
      {
        "type": "detail",
        "prompt": "What did the rescuer have to do to the rope?",
        "options": [
          "Cut it before reaching the heir",
          "Remove every guard’s harness",
          "Replace it with a scarf",
          "Increase its tension"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "heighten the rope’s tension to save the helpless man."
        },
        "explanation": "需要增加拉力救人，围巾是孩子故事的物件，不是此处救绳。"
      },
      {
        "type": "inference",
        "prompt": "What likely motivated the heir’s later support?",
        "options": [
          "His experience of being rescued",
          "A wish to stop all advice",
          "Fear of the rescuer’s helmet",
          "The disappearance of every storm"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "She had to heighten the rope’s tension to save the helpless man. Hence, he funded rescue teams; henceforth, he listened to helpful advice. Her heroic act made her a hero to the valley.",
          "focusQuote": "She had to heighten the rope’s tension to save the helpless man."
        },
        "explanation": "获救后因此资助救援队，不能推出风暴全消失或拒建议。"
      }
    ]
  },
  {
    "id": "expansion-b-023",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did Yun hide her badge?",
        "options": [
          "She had lost her authority permanently",
          "The smith demanded a disguise",
          "She was trying to avoid a lawful repair",
          "The sect’s hierarchy would hinder inquiry"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "The sect’s hierarchy would hinder inquiry. Yun had to hide her badge"
        },
        "explanation": "等级阻碍调查，使她藏徽章；没有永久失权的信息。"
      },
      {
        "type": "detail",
        "prompt": "What showed the importance of checking the valve?",
        "options": [
          "Its hissing sound",
          "The historian’s age",
          "The gate’s old legends",
          "The smith’s clothing"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "the valve’s hiss mattered more than old stories."
        },
        "explanation": "阀门嘶声比旧故事重要，调查关注真实安全障碍。"
      },
      {
        "type": "inference",
        "prompt": "What principle did the inquiry establish?",
        "options": [
          "The sect’s hierarchy should decide all repairs",
          "Rank could not block a safety review",
          "All historic records had to be destroyed",
          "Only historians could inspect gates"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "rank could no longer prevent a safety review."
        },
        "explanation": "调查改变规则，身份不能阻挡安全审核，非删历史档案。"
      }
    ]
  },
  {
    "id": "expansion-b-024",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had changed beneath the bell stand?",
        "options": [
          "Its hook had been replaced",
          "The elder’s hobby had ended",
          "All the holes had vanished",
          "The hoe had turned into gold"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "its hook had been replaced."
        },
        "explanation": "挂钩被换，修理记录仍列孔洞，不能说孔洞都没了。"
      },
      {
        "type": "detail",
        "prompt": "What muffled one side of the bell?",
        "options": [
          "The elder’s hoarse voice",
          "Hidden honey",
          "A honeymoon scarf",
          "The sound of a child’s hop"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "hidden honey muffled one side."
        },
        "explanation": "蜂蜜使一侧声音变闷，新婚夫妇和沙哑嗓子不是钟内原因。"
      },
      {
        "type": "inference",
        "prompt": "Why was the owner honoured?",
        "options": [
          "He refused all further inspection",
          "He allowed children under the lifted bell",
          "He admitted the repair was imperfect",
          "He claimed the bell was flawless"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "honourable enough to admit an imperfect repair."
        },
        "explanation": "荣誉来自肯认修补不完美，不是宣称无瑕或纵孩子冒险。"
      }
    ]
  },
  {
    "id": "expansion-b-025",
    "questions": [
      {
        "type": "detail",
        "prompt": "What delayed help after the wreck?",
        "options": [
          "An already repaired hull",
          "Too little horsepower and a blocked hose",
          "A lack of all housing",
          "The hostess’s refusal to help"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "Too little horsepower and a blocked hose delayed help."
        },
        "explanation": "马力不足及软管堵塞拖援助；女主人则接待获救家庭。"
      },
      {
        "type": "detail",
        "prompt": "What did the waterline establish about the kidnapper?",
        "options": [
          "He had caused every wave",
          "He had never used a rope",
          "He had boarded late",
          "He had repaired the ship"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The waterline proved he had boarded late."
        },
        "explanation": "水线证明登船晚，不证明修船或引发全部风浪。"
      },
      {
        "type": "inference",
        "prompt": "What did the host prioritize before giving Lin evidence?",
        "options": [
          "Searching the kidnapper’s house alone",
          "Restoring the wrecked hull",
          "Questioning every guest immediately",
          "Hospital care for the injured child"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "hospitalize the injured child before handing Lin the evidence."
        },
        "explanation": "男主人先送伤童住院再交证据，未独闯绑匪住处。"
      }
    ]
  },
  {
    "id": "expansion-b-026",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had ruined the hut’s supplies?",
        "options": [
          "The rescuer’s humour",
          "A hunter’s successful trip",
          "High humidity",
          "A lack of hymns"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "High humidity ruined supplies."
        },
        "explanation": "高湿毁物资，幽默与哼唱用于舒缓众人。"
      },
      {
        "type": "detail",
        "prompt": "Why was a torch especially risky nearby?",
        "options": [
          "All the food had been frozen",
          "The hurricane had already stopped",
          "The hut lacked any door",
          "Hydrogen and leaking fuel were present"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A hydraulic door and hydrogen tank stood beside leaking hydrocarbon fuel."
        },
        "explanation": "氢罐及漏燃料使火种危险，不能凭风停当作安全。"
      },
      {
        "type": "inference",
        "prompt": "What was the team’s central practical aim?",
        "options": [
          "Protect every life through the storm",
          "Send the hysterical man outside",
          "Test fuel by throwing a torch",
          "Hide all uncertainty from the group"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "protecting every human life."
        },
        "explanation": "团队保护每人生命，禁止投火把并没人受伤。"
      }
    ]
  },
  {
    "id": "expansion-b-027",
    "questions": [
      {
        "type": "detail",
        "prompt": "What prevented immediate identification on the cards?",
        "options": [
          "They had no written names",
          "Every card was frozen solid",
          "The boatman had destroyed both cards",
          "Their photographs had been switched"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "their switched photographs."
        },
        "explanation": "卡的照片被交换，不能把不识字船夫等同毁卡者。"
      },
      {
        "type": "detail",
        "prompt": "What had the guard failed to do?",
        "options": [
          "Respond to the burning boat",
          "Serve ice cream",
          "Teach the youth an idiom",
          "Build a second lake crossing"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "chosen to ignore the burning boat."
        },
        "explanation": "懒散无知的守卫无视着火船，原文没给他卖冰激凌任务。"
      },
      {
        "type": "inference",
        "prompt": "What did checking the real documents prevent?",
        "options": [
          "Treating the youth as an expert rescuer",
          "Mislabeling the boatman as illegal",
          "Mistaking the guard for a teacher",
          "Closing all ice-cream stalls"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The illiterate boatman was not an illegal entrant."
        },
        "explanation": "核实实际证件后，不识字船夫不是非法入境者，识字与合法性不能混同。"
      }
    ]
  },
  {
    "id": "expansion-b-028",
    "questions": [
      {
        "type": "detail",
        "prompt": "What helped the child distinguish reality in the picture?",
        "options": [
          "Yun illuminated it and asked her to illustrate what was real",
          "The artist removed every imagined scene",
          "The child stopped studying during illness",
          "The lamp created a real kingdom"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Yun used a lamp to illuminate its illustration and asked her to illustrate what was real."
        },
        "explanation": "云照亮插图、请她说明真实内容，灯没有造真实王国。"
      },
      {
        "type": "detail",
        "prompt": "Why were the pages in danger?",
        "options": [
          "The lamp had broken every page",
          "Water threatened them",
          "The artist rejected immigration paintings",
          "The child copied the wrong ending"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Water threatened immense pages."
        },
        "explanation": "书页受水威胁，修复处理用于保画册，不是因模仿而坏。"
      },
      {
        "type": "main",
        "prompt": "What best captures the purpose of restoring the pictures?",
        "options": [
          "Prove the imaginary kingdom physically existed",
          "Stop all future copying of paintings",
          "Preserve the art while encouraging the child’s own imagination",
          "Replace the child’s story with the artist’s memories"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Water threatened immense pages. Yun took immediate action and would immerse them in a repair bath immediately. Colors returned. The artist taught the girl to imagine her own ending, and she painted a bridge home.",
          "focusQuote": "The artist taught the girl to imagine her own ending, and she painted a bridge home."
        },
        "explanation": "修复后仍教女孩构想自己的结局，不强迫替换成画家的记忆。"
      }
    ]
  },
  {
    "id": "expansion-b-029",
    "questions": [
      {
        "type": "detail",
        "prompt": "What financial danger did imported medicine present?",
        "options": [
          "It would fund the whole empire",
          "It could impoverish families",
          "It would remove all clinic fees",
          "It would enrich every patient"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "The cost of import medicine would impoverish families."
        },
        "explanation": "进口药费用可能致贫，原文并非免费或能使患者致富。"
      },
      {
        "type": "detail",
        "prompt": "What did Yun refuse to impose?",
        "options": [
          "A fair clinical plan",
          "An early treatment schedule",
          "An impossible target",
          "An impartial evidence review"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "She refused to impose an impossible target."
        },
        "explanation": "她拒强加不可能指标；公平计划是随后实施而非她反对的。"
      },
      {
        "type": "main",
        "prompt": "What was the practical focus of the new plan?",
        "options": [
          "Wait for complete immunity before treatment",
          "Raise medicine prices for every family",
          "Make officials immune to all questioning",
          "Treat patients without waiting for payment"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "clinics could treat people without waiting for payment."
        },
        "explanation": "新计划使诊所不必等付款便治疗，目标不是等绝对免疫。"
      }
    ]
  },
  {
    "id": "expansion-b-030",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the elder decide to imprison the maker?",
        "options": [
          "Because the laboratory was already open",
          "Because the student stole every lamp",
          "Because of an improper complaint",
          "Because the cave had no entrance"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "the elder chose to imprison its maker after an improper complaint."
        },
        "explanation": "不恰当投诉导致囚人，未说学生偷灯。"
      },
      {
        "type": "detail",
        "prompt": "Why was the student’s report unreliable?",
        "options": [
          "He supplied too many confirmed measurements",
          "He refused to improve any wording",
          "He had already found no impurity",
          "He impulsively claimed the cave was inaccessible"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The impulsive student claimed the cave was inaccessible. That impulse produced an inaccurate, inadequate report. Yun helped him improve it. Inasmuch as the evidence was weak, he admitted the error and began an improvement.",
          "focusQuote": "That impulse produced an inaccurate, inadequate report."
        },
        "explanation": "冲动断言导致不准确、不充分报告，之后他承认错误。"
      },
      {
        "type": "inference",
        "prompt": "What did the final response reward?",
        "options": [
          "Honest work rather than spectacle",
          "The original inaccurate report",
          "The elder’s premature accusation",
          "Incense hiding contamination"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "rewarded honest work instead of spectacle."
        },
        "explanation": "释放与合理激励奖励诚实劳动，不是掩杂质或错误报告。"
      }
    ]
  },
  {
    "id": "expansion-b-031",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was wrong with the clinic’s access ramp?",
        "options": [
          "It was longer than every other ramp",
          "It had been removed by an Indian doctor",
          "It was designed only for the manager",
          "Its dimensions followed an incomplete plan"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Its incline and steep inclination came from an incomplete, incorrect plan."
        },
        "explanation": "不完整错误图造成陡坡，未说印度医生拆坡。"
      },
      {
        "type": "detail",
        "prompt": "Why did patients incur repeated charges?",
        "options": [
          "Devices were incompatible",
          "The clinic lacked every doctor",
          "All patients refused treatment",
          "The ramp required an entrance tax"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Incompatible devices forced patients to incur charges"
        },
        "explanation": "不兼容设备招致费用，与坡道直接收费不同。"
      },
      {
        "type": "main",
        "prompt": "What is the passage mainly concerned with?",
        "options": [
          "Postponing access indefinitely",
          "Restoring fair, accessible clinic service",
          "Promoting an incredible cure without repairs",
          "Keeping the clinic dependent on false bills"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin made an inclusive plan include all patients and incorporate safe access."
        },
        "explanation": "兼顾全体患者与安全通行、核账体现恢复公平服务。"
      }
    ]
  },
  {
    "id": "expansion-b-032",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the witness’s indignation indicate?",
        "options": [
          "Fear and harm rather than guilt",
          "Proof that he forged every document",
          "A wish to stop industrialization entirely",
          "Confidence in all the machinery"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "An individual statement at an indoor court would indicate an official’s indirect role. An indignant witness refused to be indifferent. His indignation was an indication of harm, indicative of fear rather than guilt.",
          "focusQuote": "His indignation was an indication of harm, indicative of fear rather than guilt."
        },
        "explanation": "激愤表现伤害与恐惧，不能直接认成有罪。"
      },
      {
        "type": "detail",
        "prompt": "What made the workers’ jobs difficult?",
        "options": [
          "A lack of inexpensive materials",
          "Inefficient tools and machinery inertia",
          "Their refusal to work industriously",
          "A total absence of local industry"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Yun warned against blaming workers indiscriminately. Evidence was indispensable. Plans to industrialize the town had left its industry with inefficient industrial tools. Industrious workers struggled against the machinery’s inertia.",
          "focusQuote": "Industrious workers struggled against the machinery’s inertia."
        },
        "explanation": "勤工仍受机械惯性困扰，不能归咎不勤劳。"
      },
      {
        "type": "inference",
        "prompt": "What does the success of inexpensive repairs imply?",
        "options": [
          "Industrial tools could never be improved",
          "Confessions were needed before any repair",
          "Officials had wrongly called the breakdown unavoidable",
          "Threatening workers was the only effective method"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Inexpensive repairs stopped the breakdown officials had called inevitable"
        },
        "explanation": "低成本修理止故障，反驳所谓必然，不支持逼供才有效。"
      }
    ]
  },
  {
    "id": "expansion-b-033",
    "questions": [
      {
        "type": "detail",
        "prompt": "What extreme claim did the clinic make?",
        "options": [
          "Its supplies had already been independently verified",
          "Medicine could stop every infectious disease",
          "Its pills were only ordinary food",
          "It treated adults but never infants"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "would supposedly stop every infectious disease."
        },
        "explanation": "诊所声称能挡一切传染病，这是被质疑的承诺。"
      },
      {
        "type": "detail",
        "prompt": "What suggested the pills might infect patients?",
        "options": [
          "The sound of the horn alone",
          "The merchant’s low influence",
          "The use of inferior supplies",
          "A shortage of salesmen"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "inferior supplies might infect patients."
        },
        "explanation": "云推断劣质材料可能让病人感染；不能把号角吸引人群或涨价当成药物安全的证明。"
      },
      {
        "type": "main",
        "prompt": "What is the passage’s main contrast?",
        "options": [
          "Low prices versus costly advertising designs",
          "Infant care versus adult employment",
          "Food preparation versus a shortage of merchants",
          "Safe treatment versus exaggerated promises"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Safe infrastructure and an honest infusion mattered more than promises."
        },
        "explanation": "可靠设施与诚实治疗对比虚假无限疗效，不是广告设计风格。"
      }
    ]
  },
  {
    "id": "expansion-b-034",
    "questions": [
      {
        "type": "detail",
        "prompt": "What hidden risk did the inherited recipe contain?",
        "options": [
          "Its ink was poisonous to read",
          "Its supplier had no inland shop",
          "An ingredient could inhibit breathing",
          "It required all residents to migrate"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "one ingredient could inhibit breathing."
        },
        "explanation": "一成分抑制呼吸，风险在药方而非读到墨迹。"
      },
      {
        "type": "detail",
        "prompt": "What did the keeper do after children were harmed?",
        "options": [
          "Publish every trial immediately",
          "Replace the supplier’s stamp",
          "Send the children to the coastal inn",
          "Hide the injection record"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "hide the injection record after it began to injure children."
        },
        "explanation": "伤童后藏注射记录，供货印反用于追查。"
      },
      {
        "type": "inference",
        "prompt": "How was the family’s reputation ultimately protected?",
        "options": [
          "By identifying and correcting the recipe’s weakness",
          "By denying all injuries",
          "By keeping the old name beyond question",
          "By refusing innovative testing"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "saved the family’s reputation by correcting its recipe."
        },
        "explanation": "纠正配方而非遮错保住名誉，创新测试揭出内在弱点。"
      }
    ]
  },
  {
    "id": "expansion-b-035",
    "questions": [
      {
        "type": "detail",
        "prompt": "What accusation distracted from the real danger?",
        "options": [
          "The inspector had stolen insects",
          "The town lacked all scientific equipment",
          "The complainant had warned honestly",
          "The scientist was insane"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Calling her insane had hidden the danger inside her insect boxes."
        },
        "explanation": "说科学家疯掩盖箱内危险，不能当作已证实事实。"
      },
      {
        "type": "detail",
        "prompt": "What did the probe actually find?",
        "options": [
          "Inorganic powder",
          "A harmless handwritten apology",
          "A new insect species",
          "An empty input record"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "find inorganic powder."
        },
        "explanation": "探针找无机粉末，威胁是潜毒而非她的虫子。"
      },
      {
        "type": "inference",
        "prompt": "Why was a full inspection important?",
        "options": [
          "It avoided checking the input records",
          "It linked the powder to the complainant’s store",
          "It showed the scientist could not speak",
          "It proved every complaint genuine"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The sample matched the complainant’s store"
        },
        "explanation": "完整检验让样本与投诉人商店相合，从而洗清科学家。"
      }
    ]
  },
  {
    "id": "expansion-b-036",
    "questions": [
      {
        "type": "detail",
        "prompt": "When did installation of the lamp begin?",
        "options": [
          "After the first instalment was paid",
          "After the whole room was already lit",
          "Before any plan was made",
          "After every institute refused help"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Its installation began after the first installment"
        },
        "explanation": "首期付款后安装，不能混成灯已成功亮后的事。"
      },
      {
        "type": "detail",
        "prompt": "What caused the lamp’s failure?",
        "options": [
          "A broken classroom window",
          "Missing insulation and an insulator",
          "A completely useless instrument",
          "An excess of teaching material"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Missing insulation and one insulator, not the instrument, caused the failure."
        },
        "explanation": "故障是缺绝缘材料与绝缘体，不是整器具无用。"
      },
      {
        "type": "inference",
        "prompt": "What does the outcome suggest about the initial failure?",
        "options": [
          "It required abandoning the instrument entirely",
          "It showed installation had been impossible",
          "It could be remedied through instruction and testing",
          "It proved the disciple could never build a lamp"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "For instance, the teacher would instruct him to test each joint. That advice was instrumental: in an instant, the lamp worked, and the room brightened instantly. Honest repair could inspire others as well as flawless magic.",
          "focusQuote": "For instance, the teacher would instruct him to test each joint."
        },
        "explanation": "指导与接点测试使灯工作，初败不意味永远不能做。"
      }
    ]
  },
  {
    "id": "expansion-b-037",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was missing from the drug-intake limit?",
        "options": [
          "A manager’s elaborate explanation",
          "Actual measurements",
          "An insurance policy",
          "A family complaint"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "its drug intake limit lacked actual measurements."
        },
        "explanation": "保单完整但摄入量限额无实测，不能说根本无保单。"
      },
      {
        "type": "detail",
        "prompt": "How did the clerk clarify the calculation?",
        "options": [
          "By increasing the intake limit",
          "By adopting only the manager’s terminology",
          "By integrating the bills",
          "By removing every disputed receipt"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "An intelligent clerk would integrate the bills. Their integration made an integral calculation intelligible. The manager displayed his intellect and intelligence through elaborate terms, but an intellectual answer could still hide facts.",
          "focusQuote": "Their integration made an integral calculation intelligible."
        },
        "explanation": "整合账单使完整计算可理解，不是删单或只听术语。"
      },
      {
        "type": "inference",
        "prompt": "What brought the intense dispute under control?",
        "options": [
          "The seller treating the complaint as an insult",
          "The loss of the policy’s integrity",
          "An agreement never to keep records",
          "Reliable evidence securing the payment"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "evidence reduced its intensity and secured the payment."
        },
        "explanation": "证据降争执并落实赔付，辱骂或毁完整性都不起这个作用。"
      }
    ]
  },
  {
    "id": "expansion-b-038",
    "questions": [
      {
        "type": "detail",
        "prompt": "What prevented the wards from connecting?",
        "options": [
          "An international school’s refusal",
          "A completed maintenance programme",
          "An intentional break",
          "A lack of interested students"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "an intentional break prevented the wards from being able to interconnect."
        },
        "explanation": "故意断接造成无法连通，不是学生不想交流。"
      },
      {
        "type": "detail",
        "prompt": "What contradicted the keeper’s claim of accidental interference?",
        "options": [
          "Normal teaching-room furniture",
          "Students’ polite questions",
          "A record of uninterrupted internet use",
          "Altered internal wires"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "held altered internal wires."
        },
        "explanation": "教室内被改导线与只称偶发干扰不符，访问者网络也断。"
      },
      {
        "type": "inference",
        "prompt": "What did the keeper appear to want?",
        "options": [
          "Control over academic exchange",
          "Better access for visiting students",
          "More transparent internship records",
          "Stronger interpersonal trust"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "His interest was control: he had blocked academic intercourse"
        },
        "explanation": "其利益是控制，阻断学术来往并损信任，不是改善开放访问。"
      }
    ]
  },
  {
    "id": "expansion-b-039",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the witness’s friend interfere with the interview?",
        "options": [
          "Giving her an uninterrupted recording",
          "Helping her explain every detail",
          "Leaving before any question was asked",
          "Using harsh intonation to intimidate her"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "used harsh intonation to intimidate the witness and interrupt her."
        },
        "explanation": "朋友用严厉语调恐吓、打断，非帮助完整叙述。"
      },
      {
        "type": "detail",
        "prompt": "What did the repeated noise’s rhythm match?",
        "options": [
          "A nearby clock",
          "The witness’s walking pace",
          "An unfamiliar musical piece",
          "The interpreter’s handwriting"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "its intrinsic rhythm matched the nearby clock."
        },
        "explanation": "规律与钟相合，不是证人步速或音乐。"
      },
      {
        "type": "inference",
        "prompt": "What best describes Lin’s intervention?",
        "options": [
          "Treating every accent as equivalent",
          "Using a real recording instead of intuition",
          "Accepting the friend’s authority",
          "Stopping the witness from finishing"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "He would introduce the real accent rather than rely on intuition."
        },
        "explanation": "林引入真实口音录音而非直觉，使证人最后讲完。"
      }
    ]
  },
  {
    "id": "expansion-b-040",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the inventor claim the armour could resist?",
        "options": [
          "Any invasion",
          "Only weak rain",
          "Only merchant criticism",
          "A specific kind of paint"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "armor against any invasion."
        },
        "explanation": "声称抵任何入侵，后来测试却刻意用弱弓。"
      },
      {
        "type": "detail",
        "prompt": "How was apparent safety related to bow strength?",
        "options": [
          "Only by the armour’s colour",
          "Inversely",
          "Not related at all",
          "Only by the invoice date"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "bow strength was inversely related to apparent safety."
        },
        "explanation": "弓力越弱表面越安全，不能把这看作毫无关系。"
      },
      {
        "type": "inference",
        "prompt": "Why did buyers refuse further investment?",
        "options": [
          "The inventor had returned every investment voluntarily",
          "The investigation found the certificate valid",
          "Evidence showed trials always used weakened bows",
          "The armour had succeeded under every attack"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Trials would invariably involve a weakened bow."
        },
        "explanation": "每次用弱弓揭出测试失真，证书也是无效的，不支持成功万能。"
      }
    ]
  },
  {
    "id": "expansion-b-041",
    "questions": [
      {
        "type": "detail",
        "prompt": "What contradicted the suspicion suggested by rusty iron?",
        "options": [
          "The water was always free",
          "An ion test showed clean water",
          "Every resident refused water",
          "The canal had already dried up"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "an ion test showed clean water."
        },
        "explanation": "离子检验显示水净，锈铁表象不能单独证水损坏。"
      },
      {
        "type": "detail",
        "prompt": "What linked false accounts to the manager?",
        "options": [
          "The island’s religious beliefs",
          "A mineral found in the water",
          "An ivory seal",
          "An Italian worker’s fatigue"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "An ivory seal connected the false accounts to a manager"
        },
        "explanation": "象牙印章把假账连到经理，宗教背景不是证据。"
      },
      {
        "type": "main",
        "prompt": "What is the main practical issue in the passage?",
        "options": [
          "Replacing every belief on the island",
          "Stopping all irrigation permanently",
          "Trading ivory between foreign workers",
          "Fair water supply and false charges"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin would issue a report demanding equal supply irrespective of belief. An ivory seal connected the false accounts to a manager nicknamed Jack. The residents recovered their payments and repaired the canal together.",
          "focusQuote": "Lin would issue a report demanding equal supply irrespective of belief."
        },
        "explanation": "要求不分信仰平等供水并追回收费，非改变居民信仰。"
      }
    ]
  },
  {
    "id": "expansion-b-042",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where had the rival hidden the gems?",
        "options": [
          "Inside a jazz instrument",
          "Under the reporter’s jeans",
          "In jelly",
          "Behind a portrait"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "a jealous rival had stuffed gems into jelly."
        },
        "explanation": "宝石塞在果冻里，画像后来被说不能证明什么。"
      },
      {
        "type": "detail",
        "prompt": "What exposed the false pocket?",
        "options": [
          "The singer’s portrait",
          "A joke by the owner",
          "The reporter’s journal title",
          "A jet from a spilled drink"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A spilled drink’s jet revealed the false pocket"
        },
        "explanation": "泼饮料水流显露假口袋，不是笑话或日记名。"
      },
      {
        "type": "inference",
        "prompt": "What was the reporter’s role after the case?",
        "options": [
          "Document the events while protecting the owner from rumours",
          "Blame the owner’s religion for the theft",
          "Keep the rival’s hiding place secret",
          "Cancel the bar’s show permanently"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The reporter wrote the journey in his journal, protecting the Jewish owner from rumors. A joke restored the jolly room. The thief went to jail, and the owner’s joyful smile expressed honest joy.",
          "focusQuote": "The reporter wrote the journey in his journal, protecting the Jewish owner from rumors."
        },
        "explanation": "记录旅程并护犹太老板免谣言，不能以宗教作盗窃理由。"
      }
    ]
  },
  {
    "id": "expansion-b-043",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where did the juvenile find the discarded items?",
        "options": [
          "Inside the judge’s home",
          "Behind the prison door",
          "In the keeper’s meal",
          "At a jungle junction"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "found junk at a jungle junction."
        },
        "explanation": "孩子在丛林岔口拾废品，不是进法官家偷。"
      },
      {
        "type": "detail",
        "prompt": "What mistake had the keeper made?",
        "options": [
          "Treating rubbish as stolen treasure",
          "Ignoring a stolen jug’s owner",
          "Failing to see the boy kick the door",
          "Deleting all keyboard records"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "His judgement had mistaken rubbish for stolen treasure."
        },
        "explanation": "保管者把垃圾认作被盗宝，键盘记录反而支持孩子搬废弃物。"
      },
      {
        "type": "inference",
        "prompt": "Why did release become justified?",
        "options": [
          "The jury refused all evidence",
          "Records supported the child’s account",
          "The accusation sounded impressive",
          "The child admitted a theft"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A keyboard record showed he was carrying discarded equipment."
        },
        "explanation": "记录显示搬的是废弃设备，给释放提供理由，不是凭指控气势。"
      }
    ]
  },
  {
    "id": "expansion-b-044",
    "questions": [
      {
        "type": "detail",
        "prompt": "What limited the knight’s movements?",
        "options": [
          "His painful knee",
          "A broken kingdom gate",
          "A lack of all knowledge",
          "His refusal to use tools"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "His knee hurt too much to kneel"
        },
        "explanation": "膝痛使他不能跪，仍有工具与知识制作风筝。"
      },
      {
        "type": "detail",
        "prompt": "Why was the captor desperate?",
        "options": [
          "A dispute over a knitted scarf",
          "A kidney illness",
          "A lost royal kite",
          "A stolen motor"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "desperate over a kidney illness"
        },
        "explanation": "亲属绑匪因肾病恐惧，但原因不能免罪。"
      },
      {
        "type": "inference",
        "prompt": "What balance did the knight seek?",
        "options": [
          "Forgiving the crime without justice",
          "Protecting the captor instead of the child",
          "Mercy alongside accountability",
          "Immediate killing without rescue"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "mercy would kindle hope without erasing justice."
        },
        "explanation": "仁慈点希望且不取消公正，非无条件免罪或先杀人。"
      }
    ]
  },
  {
    "id": "expansion-b-045",
    "questions": [
      {
        "type": "detail",
        "prompt": "What revealed the ladder lacked proper support?",
        "options": [
          "The landlady’s lamb",
          "A lace tie",
          "A landscape painting",
          "The young man’s label"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A lace tie revealed a lack of proper supports."
        },
        "explanation": "花边带反映支撑不足，责怪青年标签不是物理依据。"
      },
      {
        "type": "detail",
        "prompt": "What had the lad actually repaired?",
        "options": [
          "Every laboratory machine",
          "The village lane",
          "A broken cord",
          "The landlady’s injured leg"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The lad had repaired that cord."
        },
        "explanation": "青年修的是断绳，不能扩大为所有设备或治房东腿。"
      },
      {
        "type": "inference",
        "prompt": "What conclusion ended the accusation?",
        "options": [
          "The lad deliberately slowed everyone",
          "The landlady had fabricated every accident",
          "The workers no longer needed repairs",
          "Equipment damage largely caused the delay"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The delay was largely due to damaged equipment, not his effort."
        },
        "explanation": "延误主要来自设备损坏，非青年不努力，故应听他解释。"
      }
    ]
  },
  {
    "id": "expansion-b-046",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was responsible for the apparent beast?",
        "options": [
          "A broken laundry machine",
          "An animal hidden in a lathe",
          "A laser projection",
          "A creature on the lawn"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "a laser projected a latent beast behind a lattice."
        },
        "explanation": "激光投出潜伏兽像，不证明草坪有真实兽。"
      },
      {
        "type": "detail",
        "prompt": "What exposed the fleeing suspect?",
        "options": [
          "The lawyer’s invitation",
          "The lawn’s footprints",
          "A lawsuit already completed",
          "His laughter"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "His laughter betrayed him."
        },
        "explanation": "逃往洗衣房者笑声露位置，法律行动在之后。"
      },
      {
        "type": "inference",
        "prompt": "What did sharing the layout achieve?",
        "options": [
          "It made the false haunting understandable",
          "It proved the beast survived outdoors",
          "It prevented laymen from seeing the plans",
          "It placed the lawyer above the city’s law"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Yun would lay the plans before every layman, and the false haunting ended."
        },
        "explanation": "公开图与反光层使把戏结束，非继续禁止普通人查看。"
      }
    ]
  },
  {
    "id": "expansion-b-047",
    "questions": [
      {
        "type": "detail",
        "prompt": "What inconsistency did the leader investigate?",
        "options": [
          "Two different medal designs",
          "A leather store versus a library",
          "The number of leaves on a tree",
          "A lease versus a promise of lasting work"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "compared a lease with a leaflet promising eternal work."
        },
        "explanation": "对比租约与长期工作传单，树叶只是现场物件。"
      },
      {
        "type": "detail",
        "prompt": "What had ruined the store’s supplies?",
        "options": [
          "Leakage",
          "The teacher’s lecture",
          "The worker’s learning",
          "The owner’s legacy"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The leakage ruined supplies."
        },
        "explanation": "漏水毁原料，学习讲课是查事实的帮助。"
      },
      {
        "type": "inference",
        "prompt": "What best explains the worker’s leadership?",
        "options": [
          "She avoided every inspection",
          "She investigated what others had avoided",
          "She repeated the accusation of laziness",
          "She cancelled the owner’s legacy"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Her leadership came from doing the work others had avoided."
        },
        "explanation": "她做了别人回避的查验才展现领导力，不是重复懒惰指责。"
      }
    ]
  },
  {
    "id": "expansion-b-048",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the tax supposed to pay for?",
        "options": [
          "A lens advertised as protection from a leopard",
          "Repairs to a lemon orchard damaged by animals",
          "A law banning sellers from collecting fees",
          "Compensation for officials accused of fraud"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "New legislation allowed officials to levy it for a lens said to repel a leopard.",
          "focusQuote": "a lens said to repel a leopard"
        },
        "explanation": "税款名义上用于据说能驱走豹子的镜片；这是宣传的理由，不表示豹子已真实出现。果树、禁收费和官员赔偿均非用途。"
      },
      {
        "type": "detail",
        "prompt": "How could the beam be redirected?",
        "options": [
          "By changing the villagers’ tax liability",
          "By using a lever",
          "By moving the nearby lemon tree",
          "By passing another piece of legislation"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A lever provided leverage to redirect the beam."
        },
        "explanation": "光束由杠杆改变方向。修理收费是骗局的经济后果，法律和柠檬树不是控制光束的装置。"
      },
      {
        "type": "inference",
        "prompt": "What does the effect of reducing the light suggest?",
        "options": [
          "The villagers had paid for effective animal protection",
          "The lens required more costly repairs",
          "The frightening effect had a physical explanation",
          "The shadow proved the seller’s magical claim"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Yun used less light to lessen fear and lower its level, lest anyone mistake the trick for magic. A nearby lemon tree’s shadow vanished with it.",
          "focusQuote": "A nearby lemon tree’s shadow vanished with it."
        },
        "explanation": "减少光线后影子消失，说明恐惧来自可操控的光影，而非魔法或可靠的防兽作用；也不能据此要求追加修理费。"
      }
    ]
  },
  {
    "id": "expansion-b-049",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the librarian seek permission to do?",
        "options": [
          "Move the library records to a prison",
          "Release banned books for readers",
          "Replace the seals on every box",
          "Destroy records of the prisoner’s life"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A liberal librarian sought a licence to liberate banned books."
        },
        "explanation": "管理员申请许可是为解禁书籍，非销毁囚犯档案或更换全部封条。"
      },
      {
        "type": "detail",
        "prompt": "What did workers uncover after lightening the box?",
        "options": [
          "A list of the library’s lighting expenses",
          "Instructions for growing lilies",
          "Records from a prisoner’s lifetime",
          "A licence issued by the lieutenant"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Workers would lighten the box and uncover records from a prisoner’s lifetime."
        },
        "explanation": "清理箱子后发现囚犯生平记录。花、照明和军官等细节不能替代这里的档案内容。"
      },
      {
        "type": "inference",
        "prompt": "What did the recovery of the records contribute to?",
        "options": [
          "A permanent ban on library access",
          "Proof that every similar document was genuine",
          "A decision to keep the prisoner confined",
          "The prisoner’s release"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The library gained liberty, and the records helped secure the prisoner’s liberation."
        },
        "explanation": "档案帮助囚犯获释；相似性曾让人怀疑造假，并不等于所有相似文件都真实，也不是继续禁读或拘禁。"
      }
    ]
  },
  {
    "id": "expansion-b-050",
    "questions": [
      {
        "type": "detail",
        "prompt": "What happened when the liner struck limestone?",
        "options": [
          "The singer lost her written testimony",
          "The captain ran out of drinking water",
          "A passenger was injured and left limping",
          "A cabin curtain caught fire"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A liner struck limestone and injured a passenger’s limb, leaving him with a limp."
        },
        "explanation": "碰撞造成乘客肢体受伤并跛行；水量有限和歌手作证是后续情节，未说幕布起火。"
      },
      {
        "type": "detail",
        "prompt": "What did the linguistic analysis reveal?",
        "options": [
          "The singer had written the original chart",
          "The passenger had misunderstood the captain",
          "The meeting place had been painted incorrectly",
          "The written course had been changed"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A linguistic analysis showed that someone had altered the written course."
        },
        "explanation": "语言分析发现书面航线被修改。狮子标记的是会面地点，不能推出其绘制错误，也未确定歌手是原图作者。"
      },
      {
        "type": "inference",
        "prompt": "Which conclusion about the singer is best supported?",
        "options": [
          "She helped others despite being hurt herself",
          "Her injury prevented her from giving evidence",
          "The lipstick proved she had sabotaged the liner",
          "She abandoned the wounded to protect herself"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Her cut lip did not prevent testimony."
        },
        "explanation": "嘴唇受伤并未妨碍她作证，可见她仍提供帮助；末段还说她救伤者。口红只建立关联，不能直接证明她破坏航船。"
      }
    ]
  },
  {
    "id": "expansion-b-051",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the threatening list demand?",
        "options": [
          "Payment for the library’s literature classes",
          "Repayment of a loan, a loaf, and livestock subsidies",
          "Compensation for a missing receipt",
          "A new levy on treatment of liver disease"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A threatening list demanded repayment of a loan, a loaf, and livestock subsidies."
        },
        "explanation": "清单要求偿还贷款、面包和牲畜补贴，未说是扫盲课费或新设治疗税。"
      },
      {
        "type": "detail",
        "prompt": "What problem did Lin find in the landlord’s accounts?",
        "options": [
          "The signing location was never recorded",
          "The receipt referred to a different locality",
          "Some charges appeared more than once",
          "The elder’s treatment had not been included"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The landlord’s accounting load included duplicate charges."
        },
        "explanation": "账目存在重复收费，非完全缺失治疗记录或没有签字地点。"
      },
      {
        "type": "main",
        "prompt": "What broader value of literacy does the story illustrate?",
        "options": [
          "Literary language makes financial checks unnecessary",
          "Discarding loose papers reduces household costs",
          "Threatening letters offer the best guide to repayment",
          "Reading records can help people defend their interests"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A lively class resumed, and the new readers learned how a written record could protect them."
        },
        "explanation": "课堂恢复，学员发现书面记录能保护自己；故事以重复账单说明读写能力的实际价值，并非鼓励丢纸或照恐吓信付款。"
      }
    ]
  },
  {
    "id": "expansion-b-052",
    "questions": [
      {
        "type": "detail",
        "prompt": "What condition did the lord attach to avoiding disaster?",
        "options": [
          "The traveler had to leave the lodge",
          "The villagers had to change their transport route",
          "The valley had to stop growing crops",
          "People had to purchase his timber"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "The lord claimed only buying his timber could stop disaster."
        },
        "explanation": "领主声称只有买他的木材才能止灾。题目问其声称的条件，不表示该条件真实有效。"
      },
      {
        "type": "detail",
        "prompt": "What was the actual threat to the crops?",
        "options": [
          "A locust swarm",
          "The traveler’s wish for a longer life",
          "The loom’s prediction of fate",
          "A lack of lodging for railway workers"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A locust swarm, not fate, threatened the crops; restored deliveries brought real relief to the valley.",
          "focusQuote": "A locust swarm, not fate, threatened the crops; restored deliveries brought real relief to the valley."
        },
        "explanation": "作物受蝗群威胁，非宿命；恢复配送带来实际缓解，不能把织机的预言当原因。"
      },
      {
        "type": "inference",
        "prompt": "Why was testing the loom’s voice useful?",
        "options": [
          "It confirmed that timber purchases controlled fate",
          "It separated a false warning from a real problem",
          "It proved that transport records could be ignored",
          "It showed that all threats to the valley were imaginary"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A logical inquiry exposed the false voice. A locust swarm, not fate, threatened the crops; restored deliveries brought real relief to the valley.",
          "focusQuote": "A logical inquiry exposed the false voice."
        },
        "explanation": "调查揭出假声音，同时辨认真实蝗灾；不能因预言为假就认为所有危险都不存在，更不支持木材能控制命运。"
      }
    ]
  },
  {
    "id": "expansion-b-053",
    "questions": [
      {
        "type": "detail",
        "prompt": "What caused the loud rattling near the lorry?",
        "options": [
          "The porter’s lung illness",
          "Loose wood",
          "The lounge’s loudspeaker",
          "A luminous object splitting apart"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A loud rattle came from loose wood, which he might lose without repairs."
        },
        "explanation": "响声来自松动木料，不修就可能遗失；疾病和扬声器虽出现，却不是这处机械响声的来源。"
      },
      {
        "type": "detail",
        "prompt": "What did the manager’s promise of luxury actually entice the porter into?",
        "options": [
          "Paying for his own luncheon",
          "Taking leave for medical treatment",
          "Working without pay",
          "Replacing the lorry’s frame at no cost"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The manager’s promise of luxury was a lure for unpaid work."
        },
        "explanation": "奢华承诺诱使他无偿劳动，未说特定为更换车架或支付午餐，也不是提供病假。"
      },
      {
        "type": "inference",
        "prompt": "What view of loyalty does Lin’s inspection support?",
        "options": [
          "A loyal worker should trust any promise of comfort",
          "Illness makes recovering cargo unimportant",
          "Repairing cargo excuses withholding wages",
          "Commitment does not require accepting exploitation"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin’s inspection restored the cargo and showed that loyalty did not require accepting exploitation.",
          "focusQuote": "Lin’s inspection restored the cargo and showed that loyalty did not require accepting exploitation."
        },
        "explanation": "追回货物与揭穿诱骗说明忠诚不等于忍受剥削；生病并未让货物失去意义，维修也不能合理化欠薪。"
      }
    ]
  },
  {
    "id": "expansion-b-054",
    "questions": [
      {
        "type": "detail",
        "prompt": "What physical force produced the magician’s effect?",
        "options": [
          "Magnetic attraction",
          "A change in the audience’s mood",
          "An unusually large mainframe",
          "Heat from the damaged circuit"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The trick relied mainly on magnetic pull and ordinary magnetism."
        },
        "explanation": "把戏主要依靠普通磁力，不是观众情绪、设备体积或发热。"
      },
      {
        "type": "detail",
        "prompt": "What problem had the maker concealed behind the spectacle?",
        "options": [
          "A lack of audience interest",
          "Neglect of the device’s upkeep",
          "The maid’s refusal to inspect the machinery",
          "The magistrate’s mistaken address"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The maker had failed to maintain the device, hiding poor maintenance behind spectacle."
        },
        "explanation": "精彩效果掩盖了设备维护不足。女仆实际请求检查，称呼和观众兴趣不是被隐瞒的问题。"
      },
      {
        "type": "inference",
        "prompt": "What is the fairest conclusion about the audience?",
        "options": [
          "Their admiration demonstrated that the claim was true",
          "They had knowingly assisted in concealing the damage",
          "They had been persuaded by a misleading presentation",
          "Their distrust had forced the maker to invent the trick"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The audience was not mad; it had trusted a claim the magician now admitted was false."
        },
        "explanation": "观众是相信了后来被承认虚假的宣传，不是明知真相还帮助隐瞒；赞叹效果不能验证宣传。"
      }
    ]
  },
  {
    "id": "expansion-b-055",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the nurse’s finding qualify the crowd’s accusation?",
        "options": [
          "It showed the accident had been imagined",
          "It proved the manager had planned an attack",
          "It shifted all responsibility to the injured visitors",
          "It found malpractice without establishing deliberate malice"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A nurse found malpractice, not proof of a malicious plot."
        },
        "explanation": "护士发现失当行为，不能据此证明恶意阴谋；并非事故不存在或责任全在访客。"
      },
      {
        "type": "detail",
        "prompt": "What made the system’s fault clear?",
        "options": [
          "Its manual",
          "The manager’s makeup",
          "The crowd’s majority vote",
          "The rescued animal’s behavior"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Its manual made the fault manifest."
        },
        "explanation": "说明书揭示故障。化妆掩饰恐惧，群体归罪及救动物都不是揭明技术故障的证据。"
      },
      {
        "type": "inference",
        "prompt": "What change in the manager does the ending emphasize?",
        "options": [
          "He used confidence to dispute the ruling",
          "He began accepting responsibility through action",
          "He proved that appearance could replace management",
          "He treated the rescue as evidence of a conspiracy"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "He accepted the ruling and rescued an injured mammal. Caring for mankind began with admitting what his own system had done.",
          "focusQuote": "He accepted the ruling and rescued an injured mammal."
        },
        "explanation": "接受裁决、救助伤者并承认系统造成的后果，体现以行动担责；不能由救援倒推阴谋或把外表当管理能力。"
      }
    ]
  },
  {
    "id": "expansion-b-056",
    "questions": [
      {
        "type": "detail",
        "prompt": "What asset were the couple told they would inherit?",
        "options": [
          "A market for marble tokens",
          "A manuscript about Mars",
          "A maritime mine",
          "A marsh already owned by the marshal"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A married couple would inherit a maritime mine."
        },
        "explanation": "承诺的遗产是海上矿场；火星图和沼泽属于后来查出的骗局线索。"
      },
      {
        "type": "detail",
        "prompt": "What did Lin discover after following the mark into the marsh?",
        "options": [
          "The bride had already sold the mine",
          "The tokens were made from mined marble",
          "The worker had hidden the manuscript",
          "There was no mine there"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "Lin followed a mark into a marsh and found no mine."
        },
        "explanation": "循标记到沼泽未发现矿场。不能把制造代币当成真的采矿证据，也未说新娘已卖矿。"
      },
      {
        "type": "inference",
        "prompt": "Why could the couple regard the outcome as a narrow escape?",
        "options": [
          "The fraudulent inheritance offer was stopped",
          "Their mine had begun yielding a large fortune",
          "Their marriage had been canceled by the marshal",
          "They had successfully purchased the worthless land"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A marshal stopped the fraud and restored the name of a worker called a martyr in false advertising. The couple could marvel at their narrow escape.",
          "focusQuote": "A marshal stopped the fraud"
        },
        "explanation": "骗局被阻止使两人避开损失；未说婚姻取消或矿场产生收益，更不是成功购买无价值土地。"
      }
    ]
  },
  {
    "id": "expansion-b-057",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the masked agitator urge people to do?",
        "options": [
          "Calculate the mast’s mass",
          "Protect the maternity ward",
          "Study the scholar’s texts",
          "Carry out a massacre"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A masked agitator used a mask to urge a massacre."
        },
        "explanation": "煽动者鼓动屠杀；教学、计算和保护产科病房是其他人物与后续行动。"
      },
      {
        "type": "detail",
        "prompt": "How was the teacher’s mathematical work used?",
        "options": [
          "To support a rescue",
          "To give the agitator stronger slogans",
          "To judge the children’s physical strength",
          "To replace the families’ lessons about maturity"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Their mathematical work, or maths, supported rescue rather than slogans."
        },
        "explanation": "数学用于救援，非强化口号或比较体力；有关儿童成长的教学在结尾另行出现。"
      },
      {
        "type": "main",
        "prompt": "What standard does the story use to judge skill and courage?",
        "options": [
          "How confidently people display their strength",
          "Whether their abilities help protect lives",
          "How closely they repeat political slogans",
          "Whether they can avoid teaching difficult subjects"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Skill mattered because it protected lives, not because it displayed strength."
        },
        "explanation": "技能的意义在保护生命，与开篇不把阳刚姿态当勇气相呼应；口号、自我展示和回避教学不是标准。"
      }
    ]
  },
  {
    "id": "expansion-b-058",
    "questions": [
      {
        "type": "detail",
        "prompt": "What shortcoming did the mechanic identify in the irrigation goal?",
        "options": [
          "It required stopping the pump’s cycle",
          "It depended on media approval",
          "Maximum flow alone did not establish its value",
          "It gave the repairer too much recognition"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A mechanic showed that the maximum flow did not define its meaning."
        },
        "explanation": "机械师指出最高流量本身不足以说明意义，需可靠测量与实际收益；不等于停泵或靠媒体裁定。"
      },
      {
        "type": "detail",
        "prompt": "Who received the medal at the end?",
        "options": [
          "The mayor",
          "The original designer",
          "A media reporter",
          "The mechanic"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Practical repair supplied the means to save the field, and the mechanic received the medal."
        },
        "explanation": "奖章给机械师，因实际维修救田；非市长、设计者或采访者。"
      },
      {
        "type": "inference",
        "prompt": "What made the final resolution fairer than the designer’s claim?",
        "options": [
          "It used measurable benefits and recognized practical repair",
          "It treated the designer’s reputation as the decisive measure",
          "It awarded credit according to the largest stated flow",
          "It allowed the media to replace performance measurements"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A measurable gain became the meaningful standard. Practical repair supplied the means to save the field, and the mechanic received the medal.",
          "focusQuote": "A measurable gain became the meaningful standard."
        },
        "explanation": "裁定以可测收益为标准，并承认实际维修贡献；名声、宣称最大流量和媒体意见不能替代成效。"
      }
    ]
  },
  {
    "id": "expansion-b-059",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was the elder unable to recover the song from the recording as it was?",
        "options": [
          "The merchant had changed its menu",
          "The recording medium had warped",
          "The melody belonged to a different region",
          "The doctor had forbidden him to memorize it"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "He tried to memorize it, but the recording medium had warped."
        },
        "explanation": "记录介质变形影响歌曲恢复；未说医生禁记曲，商人菜单和曲调来源也不是故障原因。"
      },
      {
        "type": "detail",
        "prompt": "What did the mercury thermometer expose?",
        "options": [
          "The merchant’s missing membership records",
          "A problem with the elder’s memory alone",
          "Poor storage conditions",
          "A defect in the doctor’s medical care"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Heat would melt the wax; a mercury thermometer exposed poor storage."
        },
        "explanation": "温度计揭示储存不当，高温会熔蜡；不是单纯记忆障碍或医生治疗错误。"
      },
      {
        "type": "inference",
        "prompt": "What does the elder’s recovery suggest about the merchant’s offer?",
        "options": [
          "The memorial token was essential to treatment",
          "Buying membership would have prevented the storage fault",
          "The menu had supplied the missing melody",
          "The advertised promise was not needed to recover the song"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The elder recovered his song without buying a promise."
        },
        "explanation": "老人未买承诺也找回歌，说明商人声称的商品不是必要条件；不能推出会员能防储存故障。"
      }
    ]
  },
  {
    "id": "expansion-b-060",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did Yun withhold judgment of the merchant’s merit?",
        "options": [
          "Rumor alone was an inadequate basis",
          "The guild merger had already been approved",
          "The accounts had been independently verified",
          "The workshop lacked any testing equipment"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Yun would not judge merit merely by rumor."
        },
        "explanation": "云不愿仅凭传闻评价；账目一团糟并非已验证，工坊后来有多种测试设备。"
      },
      {
        "type": "detail",
        "prompt": "What did the microscopic scratches reveal about the supposed meteorite?",
        "options": [
          "It had been naturally shaped in space",
          "It was a furnace-made alloy",
          "It was the workshop’s original ruler",
          "It had been damaged by the microphone"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Under a microscope, microscopic scratches showed that the stone was an alloy from a furnace, not a divine gift.",
          "focusQuote": "the stone was an alloy from a furnace"
        },
        "explanation": "微观划痕证明物体是炉中合金，非神赐陨石；显微镜提供证据，不能误成话筒造成损坏。"
      },
      {
        "type": "main",
        "prompt": "Which approach to unusual claims does the story favor?",
        "options": [
          "Judging the merchant by the state of his accounts alone",
          "Accepting the messenger’s wrapping as proof of origin",
          "Checking physical evidence before accepting extraordinary claims",
          "Merging guilds to settle disagreements about the stone"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Under a microscope, microscopic scratches showed that the stone was an alloy from a furnace, not a divine gift.",
          "focusQuote": "Under a microscope, microscopic scratches showed that the stone was an alloy from a furnace, not a divine gift."
        },
        "explanation": "关键结论来自实物检查，支持先核验证据再接受神奇说法；包装、合并行会和只看商人账目均未证明石头来源。"
      }
    ]
  },
  {
    "id": "expansion-b-061",
    "questions": [
      {
        "type": "detail",
        "prompt": "How could poison enter the drinks?",
        "options": [
          "Through medicine carried on the minibus",
          "From the migrant’s clothing",
          "Through a pipe with a tiny opening",
          "By mixing the mineral into the mine walls"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A miner found a miniature mineral sample with a hole one millimetre wide. Poison could mingle with the drinks through that pipe.",
          "focusQuote": "Poison could mingle with the drinks through that pipe."
        },
        "explanation": "原文说毒物可通过细管混入饮料；末段薄荷药是去毒后的救助，不是投毒通道。"
      },
      {
        "type": "detail",
        "prompt": "What transported the injured away?",
        "options": [
          "The mill’s locomotive",
          "A military convoy",
          "The millionaire’s private car",
          "A minibus"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A minibus carried the injured away."
        },
        "explanation": "小巴运走伤者；军事控制是开篇争议背景，未说军车实施这次运送。"
      },
      {
        "type": "inference",
        "prompt": "What attitude toward worker safety did the ministry demonstrate?",
        "options": [
          "Even small injuries deserved serious attention",
          "Military control made medical precautions unnecessary",
          "Only the worst injuries qualified for treatment",
          "Migrants had to accept poisoning as a normal risk"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The ministry protected the minority and treated even minor harm seriously."
        },
        "explanation": "部门保护少数群体并严肃对待轻微伤害，说明小伤也应重视；不能推出正常化毒害或只救重伤。"
      }
    ]
  },
  {
    "id": "expansion-b-062",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had been done to the letter addressed to Lin?",
        "options": [
          "It was rewritten to request help for the family",
          "It was altered to mislead people",
          "It was hidden inside the missionary’s mitten",
          "It was copied to verify the missing man’s location"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A letter addressed to Mister Lin had been altered to mislead people."
        },
        "explanation": "信被篡改以误导人，不是核对失踪位置；化学手套是另一证据，未说信藏其中。"
      },
      {
        "type": "detail",
        "prompt": "What discovery brought the threats to an end?",
        "options": [
          "A real missile behind the mirror",
          "The missionary’s original mission orders",
          "A concealed projector",
          "A new mixer for the image’s paint"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The threats ended when he found the hidden projector."
        },
        "explanation": "找到隐藏投影机后威胁停止；镜中导弹是反射把戏，并非真的武器被发现。"
      },
      {
        "type": "inference",
        "prompt": "Why was correcting the misconception socially important?",
        "options": [
          "It let the miser keep profiting from the disappearance",
          "It proved that the spectacle had supernatural strength",
          "It excused altering letters whenever someone was grieving",
          "It prevented neighbors from misjudging the grieving family"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin corrected the misconception before neighbors could misunderstand the grieving family."
        },
        "explanation": "纠正误解防止邻人误判悲伤家庭，保护其处境；并非纵容造假或证明超自然力量。"
      }
    ]
  },
  {
    "id": "expansion-b-063",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did modernization of the clinic’s model involve?",
        "options": [
          "Adjusting a module and its signal",
          "Replacing every item with new equipment",
          "Stopping helpers from working with patients",
          "Changing the doctor’s modest manner"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Modernization meant learning to modify a module and modulate its signal, not buying everything new.",
          "focusQuote": "modify a module and modulate its signal"
        },
        "explanation": "现代化是学会改模块和调信号，而非全部买新设备；医生性格和阻止助手也不是操作内容。"
      },
      {
        "type": "detail",
        "prompt": "What effect could even a brief failure have?",
        "options": [
          "It would improve the drug’s effectiveness",
          "It would weaken the drug",
          "It would dry the cabinet immediately",
          "It would remove the need for repairs"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Even a momentary failure weakened the drug."
        },
        "explanation": "短暂故障也会削弱药物效力。潮湿发霉须检查修理，不能倒推故障有利或免修。"
      },
      {
        "type": "inference",
        "prompt": "What does the clinic’s improvement suggest about modernization?",
        "options": [
          "New purchases are the best measure of progress",
          "Modest doctors are unable to lead repairs",
          "Targeted adjustments can bring useful improvement",
          "Short failures are harmless when changes are moderate"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Modernization meant learning to modify a module and modulate its signal, not buying everything new. Moderate changes worked moderately well.",
          "focusQuote": "Moderate changes worked moderately well."
        },
        "explanation": "适度、针对性的调整已取得效果，支持不必全部更新才能进步；短暂故障伤药，不能认为无害。"
      }
    ]
  },
  {
    "id": "expansion-b-064",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the monk recognize as the supposed monster?",
        "options": [
          "A group of mosque volunteers",
          "A swarm of mosquitoes",
          "Hungry monkeys",
          "A seller hiding on the moor"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A monk beside the monument recognized hungry monkeys, not a supernatural beast."
        },
        "explanation": "僧人认出饥饿猴子而非超自然怪兽；蚊池清理及志愿者出现在后续协作中。"
      },
      {
        "type": "detail",
        "prompt": "What did the monopoly seller demand from every family?",
        "options": [
          "A monthly donation to the mosque",
          "Ownership of their monitoring equipment",
          "Payment for a new monument",
          "A mortgage"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The monopoly seller called them a monetary crisis and demanded a mortgage from every family."
        },
        "explanation": "垄断商把叫声说成金融危机，并向每家要求抵押，非宗教捐款或纪念碑费用。"
      },
      {
        "type": "inference",
        "prompt": "What helped improve the village’s mood?",
        "options": [
          "Exposing the fabricated danger and cooperating on practical problems",
          "Increasing the monster tax to satisfy the seller",
          "Treating the recorded cries as proof of a financial emergency",
          "Requiring every household to mortgage its property"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Moreover, mortal neighbors could cooperate: a Moslem resident and mosque volunteers removed mosquito pools nearby. The frightened village’s mood lifted when the fabricated danger was gone.",
          "focusQuote": "The frightened village’s mood lifted when the fabricated danger was gone."
        },
        "explanation": "邻人合作处理蚊池，虚构危险消除后情绪好转；追加税和抵押会继续骗局，录音也不证明金融危机。"
      }
    ]
  },
  {
    "id": "expansion-b-065",
    "questions": [
      {
        "type": "detail",
        "prompt": "How were the false road prints produced?",
        "options": [
          "By the mouse moving across the moss",
          "With a stolen mould",
          "By guests climbing the ridge",
          "With the motor’s broken parts"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "a stolen mould made false prints on the muddy road."
        },
        "explanation": "假印迹由偷来的模具造成，不是老鼠、登山客或电机部件。"
      },
      {
        "type": "detail",
        "prompt": "What indicated that the missing friend had been there recently?",
        "options": [
          "The rain stopping the movie",
          "The number of copied tickets",
          "Fresh food in the hidden mug",
          "The length of the mountain trail"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A mouse crossed moss, revealing a hidden mug. One mouthful of fresh food showed the friend had stopped there recently.",
          "focusQuote": "One mouthful of fresh food showed the friend had stopped there recently."
        },
        "explanation": "隐藏杯中的新鲜食物表明朋友近期停留过；电影停播、山路长短和复制票数都不能确定此时间线。"
      },
      {
        "type": "inference",
        "prompt": "Why would the tickets give a misleading impression of the number of people?",
        "options": [
          "Witnesses had recorded no actual movements",
          "Every ticket belonged to the missing friend",
          "Rain had erased the guests’ original names",
          "Repeated copies could look like evidence of a larger group"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Duplicate tickets created a multitude only through multiplication: someone had chosen to multiply copies.",
          "focusQuote": "someone had chosen to multiply copies"
        },
        "explanation": "所谓人多来自复制票，票的数量不能直接等于真实人数；原文有多个目击者记录行动，并非无人作证。"
      }
    ]
  },
  {
    "id": "expansion-b-066",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the musician’s account establish about the soup?",
        "options": [
          "It had been exchanged for another soup",
          "It had been poisoned by a mythical creature",
          "It had been prepared by the guard",
          "It had never been near the mustard or mutton"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The man’s musical account showed that the soup had been replaced, not poisoned by a creature from myth.",
          "focusQuote": "the soup had been replaced"
        },
        "explanation": "音乐记录显示汤被替换，非神话怪物投毒；没有证据说是守卫做汤或从未接近配菜。"
      },
      {
        "type": "detail",
        "prompt": "What identified the murderer?",
        "options": [
          "The guard’s attempt to frighten the musician",
          "A note in the score",
          "The neighbors’ whispered accusation",
          "The musician’s inability to speak"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A note in the score identified the murderer."
        },
        "explanation": "乐谱中的音符指认真凶；逼供、流言和不能说话都不能替代证据。"
      },
      {
        "type": "inference",
        "prompt": "What did the case show about the musician’s inability to speak?",
        "options": [
          "It made the crowd’s suspicions reliable",
          "It required the guard to obtain a forced confession",
          "It did not prevent him from supplying useful evidence",
          "It left the investigators with no way to identify the killer"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Their mutual respect let the musician’s careful record speak when his voice could not."
        },
        "explanation": "尊重使他的细致记录代替声音提供证据，不能把失语当罪证或认为只有逼供才能破案。"
      }
    ]
  },
  {
    "id": "expansion-b-067",
    "questions": [
      {
        "type": "detail",
        "prompt": "What caused the apprentice’s torn coat?",
        "options": [
          "A sailor’s spoon",
          "A navigation log caught in the fabric",
          "A badge on a naval officer’s coat",
          "A loose nail in the doorway"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Lin identified the real damage, namely, a nasty tear caused by the loose nail.",
          "focusQuote": "a nasty tear caused by the loose nail"
        },
        "explanation": "松钉把衣服撕破，航海日志、徽章和勺子不是损坏原因。"
      },
      {
        "type": "detail",
        "prompt": "What did Lin say could not determine the truth of the sailor’s account?",
        "options": [
          "A national badge or nationality",
          "Careful observation of the doorway",
          "A reliable description of events",
          "Evidence of the ordinary physical damage"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A national badge, a nation, or nationality did not determine truth."
        },
        "explanation": "国徽、国家和国籍不能决定说法真假，应核对事实；观察门口和实际损坏反而是有效线索。"
      },
      {
        "type": "main",
        "prompt": "What lesson does the investigation offer the apprentice?",
        "options": [
          "A national identity guarantees a reliable account",
          "Careful observation of ordinary evidence helps establish truth",
          "Unusual explanations are needed for minor damage",
          "Joint repairs can replace an account of what happened"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The sailor would lick jam from his spoon: evidence was mostly mundane. This natural insight could motivate the apprentice to observe carefully.",
          "focusQuote": "This natural insight could motivate the apprentice to observe carefully."
        },
        "explanation": "普通证据也能解释事件并启发细察；身份不能保证真实，合修门不是替代事实说明，轻微损坏也无需奇异解释。"
      }
    ]
  },
  {
    "id": "expansion-b-068",
    "questions": [
      {
        "type": "detail",
        "prompt": "What could justify another investigative visit?",
        "options": [
          "Further evidence",
          "A new family title",
          "The aunt's occupation",
          "An unchanged old label"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "Further evidence could necessitate another visit."
        },
        "explanation": "新证据可使再次走访成为必要；不是称号或旧标签触发复查。"
      },
      {
        "type": "detail",
        "prompt": "Where was the missing jewel found?",
        "options": [
          "In the nephew's clothing",
          "In a neighbouring house",
          "Inside the test equipment",
          "At the aunt's workplace"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "found the jewel in a neighbouring house"
        },
        "explanation": "珠宝在相邻房屋找到；针痕所在的身体并非藏珠地点。"
      },
      {
        "type": "inference",
        "prompt": "How should the old record affect a witness's credibility?",
        "options": [
          "It should replace further questioning",
          "It should confirm the thief's identity",
          "It should not determine credibility",
          "It should automatically discredit the witness"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "an obsolete, offensive label that could not decide a witness’s credibility"
        },
        "explanation": "旧档案的冒犯标签不能决定可信度；也未证明盗贼身份。"
      }
    ]
  },
  {
    "id": "expansion-b-069",
    "questions": [
      {
        "type": "detail",
        "prompt": "What physically obstructed the nesting platform?",
        "options": [
          "A broken nickel plate",
          "The stranger's newspaper",
          "A nitrogen container",
          "Loose wires"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "caught in a net of loose wires"
        },
        "explanation": "平台被松散电线缠住；正常检测的材料不是此处障碍。"
      },
      {
        "type": "detail",
        "prompt": "Whom did Lin nominate?",
        "options": [
          "The unfamiliar repairer",
          "The titled noble",
          "The noisy stranger",
          "The newsstand owner"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "nominate the unknown repairer who restored the nesting platform"
        },
        "explanation": "林推荐修复平台的无名修理工，并非只有名义头衔的人。"
      },
      {
        "type": "inference",
        "prompt": "What finally weakened the students' fears?",
        "options": [
          "The stranger's nickname",
          "The birds' return",
          "A louder public warning",
          "The noble's title"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "some repeated nonsense until the birds returned"
        },
        "explanation": "鸟回归才使学生信服；头衔和绰号没有解决失鸟疑问。"
      }
    ]
  },
  {
    "id": "expansion-b-070",
    "questions": [
      {
        "type": "detail",
        "prompt": "Which direction did the noticeable arrow indicate?",
        "options": [
          "Southwest",
          "Southeast",
          "Northwest",
          "Northeast"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "a noticeable arrow led northwest"
        },
        "explanation": "箭头指西北；东北是另一张告示的方向，不能混淆。"
      },
      {
        "type": "detail",
        "prompt": "What did the suspicious noun label actually belong to?",
        "options": [
          "A thief's confession",
          "A train repair order",
          "A coded payment",
          "An ordinary lesson"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "a noun label belonged to an ordinary lesson"
        },
        "explanation": "名词标签属于普通课程，并非盗窃暗号。"
      },
      {
        "type": "main",
        "prompt": "What is the passage mainly about?",
        "options": [
          "A theft scare caused by misread signs",
          "A scholar hiding a stolen train",
          "A thief changing station schedules",
          "A new lesson stopping all travel"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Clear records, rather than an exciting accusation, brought the travelers home."
        },
        "explanation": "记录澄清了误会，列车正常运行；文中并无停运或盗车。"
      }
    ]
  },
  {
    "id": "expansion-b-071",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did many donations actually purchase?",
        "options": [
          "Children's novels",
          "Slogans",
          "Balanced meals",
          "Nuclear equipment"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Numerous donations bought slogans instead of sound nutrition."
        },
        "explanation": "捐款买的是口号而非可靠营养；不能因修女写小说就选小说。"
      },
      {
        "type": "detail",
        "prompt": "What problem did the food test reveal?",
        "options": [
          "The nuts contained a reactor",
          "The children had received excess food",
          "An essential nutrient was missing",
          "The nylon bag was radioactive"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "each nut in a nylon bag lacked an essential nutrient"
        },
        "explanation": "检测指出必需营养素不足，没有报告辐射或食物过量。"
      },
      {
        "type": "main",
        "prompt": "What change resolves the nursery's problem?",
        "options": [
          "Replacing meals with cell models",
          "Selling more miracle slogans",
          "Closing the nursery permanently",
          "Providing genuine food supplies"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "the nursery reopened with honest supplies"
        },
        "explanation": "托儿所靠真实补给重新开门；不是以模型或口号代替饭菜。"
      }
    ]
  },
  {
    "id": "expansion-b-072",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the doctor criticize the apprentice?",
        "options": [
          "He considered the student insufficiently obedient",
          "He had lost the medical records",
          "He refused to take an oath",
          "He had already left the clinic"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "called his student insufficiently obedient"
        },
        "explanation": "医生指责学徒不够服从；立誓确已发生，并非拒绝立誓。"
      },
      {
        "type": "detail",
        "prompt": "Who carried the patient to safety?",
        "options": [
          "The teacher's opponent",
          "The apprentice",
          "The doctor",
          "An observer"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The apprentice took an oar and carried the patient to safety."
        },
        "explanation": "救走病人的人是学徒；不能把云的观察行动当成实际运送。"
      },
      {
        "type": "inference",
        "prompt": "What does the apprentice's action suggest?",
        "options": [
          "The patient withdrew the complaint",
          "The observers ordered harsher treatment",
          "Helping took priority over submission",
          "The oath proved the doctor correct"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Duty was an obligation to help, not a demand to oblige people to submit."
        },
        "explanation": "救人说明责任不等于强迫屈从；病人并未撤回异议。"
      }
    ]
  },
  {
    "id": "expansion-b-073",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the traveler's occupation?",
        "options": [
          "Selling olive oil",
          "Repairing resistance meters",
          "Writing official complaints",
          "Testing ocean water"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "His occupation was testing ocean water."
        },
        "explanation": "旅客负责海水检测；油和电阻仪出现过，但未被写成职业。"
      },
      {
        "type": "detail",
        "prompt": "What caused the unpleasant smell?",
        "options": [
          "A concealed waste outlet",
          "The traveler's room",
          "The olive oil bottle",
          "The visitor's offspring"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A hidden waste outlet, not the traveler, caused the smell."
        },
        "explanation": "臭味来自隐藏排污口，英文明确排除了旅客。"
      },
      {
        "type": "inference",
        "prompt": "Why did Lin propose a fair test?",
        "options": [
          "To stop all ocean research",
          "To check the rumor against evidence",
          "To punish the visitor immediately",
          "To sell the measuring device"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The findings would offset the rumor."
        },
        "explanation": "检测结果用于反驳传言，而非未经核实直接惩罚。"
      }
    ]
  },
  {
    "id": "expansion-b-074",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had been left out of the report?",
        "options": [
          "Every kitchen ingredient",
          "The opponent's opinion",
          "The only photograph of the opening",
          "The waiter's employment history"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "omit the only photograph of the opening"
        },
        "explanation": "报告遗漏唯一开口照片；洋葱等厨房信息不是这项遗漏。"
      },
      {
        "type": "detail",
        "prompt": "What explained the misleading visual effect?",
        "options": [
          "The smell of onion",
          "The opponent's accusation",
          "The absence of workers",
          "Tests in optics"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Tests in optics explained the optical trick."
        },
        "explanation": "光学检测解释视觉把戏；气味并不解释门上的影像。"
      },
      {
        "type": "inference",
        "prompt": "What could workers do once the door functioned?",
        "options": [
          "Challenge blame and document repairs",
          "End all maintenance records",
          "Keep the opening permanently hidden",
          "Blame the waiter without checking"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "workers could oppose unfair blame and take the opportunity to document every repair"
        },
        "explanation": "门恢复后，工人得以反驳不公并记录维修，不是删记录。"
      }
    ]
  },
  {
    "id": "expansion-b-075",
    "questions": [
      {
        "type": "detail",
        "prompt": "What activity turned into an argument?",
        "options": [
          "An orphan's science lesson",
          "An oral rehearsal",
          "An optional reading",
          "The orchard harvest"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "an oral rehearsal became a dispute"
        },
        "explanation": "引发争执的是口头排练；朗读只是可选节目。"
      },
      {
        "type": "detail",
        "prompt": "How did the traditional player respond to the novice?",
        "options": [
          "He destroyed her ornament",
          "He refused to hear any music",
          "He accepted her",
          "He dismissed her immediately"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "An orthodox player accepted the novice"
        },
        "explanation": "传统乐手这次接纳新人；平日可能拒绝不能当成本次结果。"
      },
      {
        "type": "inference",
        "prompt": "Why investigate the tune beyond its broad old label?",
        "options": [
          "To remove every original score",
          "To forbid foreign musicians",
          "To replace instruments with minerals",
          "To identify its actual origin"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "they would trace where the tune could actually originate"
        },
        "explanation": "追查的是曲调真实来源；宽泛标签不足以说明来历。"
      }
    ]
  },
  {
    "id": "expansion-b-076",
    "questions": [
      {
        "type": "detail",
        "prompt": "What happened after the families received clothes?",
        "options": [
          "They still waited outside",
          "They entered the medicine tent",
          "They attacked the guards",
          "They left the outskirts"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Yet everyone waited outside."
        },
        "explanation": "拿到衣服后仍被留在门外，并没有立即获准进入。"
      },
      {
        "type": "detail",
        "prompt": "What brought the camp into care?",
        "options": [
          "Declaring all residents outlaws",
          "Opening the gate",
          "Taking away the medicine",
          "Moving the tents farther away"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Opening the gate brought the camp into care."
        },
        "explanation": "开门使营地得到照护；定罪或移走药物不是解决办法。"
      },
      {
        "type": "inference",
        "prompt": "Why was the families' anger understandable?",
        "options": [
          "The medicine had cured everyone",
          "They wanted to occupy the guards' homes",
          "Their movement was misread as an attack",
          "Their clothing had been stolen"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "an outward move, or a step outwards, was not an attack"
        },
        "explanation": "人们外移并非攻击，却遭误解；文中没有夺屋企图。"
      }
    ]
  },
  {
    "id": "expansion-b-077",
    "questions": [
      {
        "type": "detail",
        "prompt": "What unsafe action did the owner take?",
        "options": [
          "Reducing the oven's capacity",
          "Replacing every damaged wire",
          "Inspecting the oven on time",
          "Overloading the circuit"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "overestimate capacity and overload the circuit"
        },
        "explanation": "老板高估容量并使电路超载；按时检修恰与逾期记录相反。"
      },
      {
        "type": "detail",
        "prompt": "How did neighbours stop the runaway cart from harming people?",
        "options": [
          "They caught up and overturned it",
          "They hid it under an overcoat",
          "They pushed it onto the overpass",
          "They left it to the owner"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "overtake and overturn a runaway cart safely"
        },
        "explanation": "邻居追上并安全掀翻失控车；大衣藏的是检查记录。"
      },
      {
        "type": "inference",
        "prompt": "Why did the overall ruling change?",
        "options": [
          "The inspection had never been due",
          "A public report challenged a false claim",
          "The owner's capacity estimate was accepted",
          "The overseas repairer withdrew"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "An overt report changed the overall ruling and helped overthrow the false claim."
        },
        "explanation": "公开报告推翻假说法，因此改变结论；不是采信老板估算。"
      }
    ]
  },
  {
    "id": "expansion-b-078",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was the boat's ownership disputed?",
        "options": [
          "The package was late",
          "The oar belonged to a port officer",
          "Repair bills remained unpaid",
          "The owl had damaged the boat"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "ownership was disputed owing to unpaid bills"
        },
        "explanation": "所有权争议源于未付款，与猫头鹰或包裹到达时间无关。"
      },
      {
        "type": "detail",
        "prompt": "What caused the worker's pain?",
        "options": [
          "An oyster shell",
          "A falling oxygen tank",
          "An animal bite",
          "Chemical contact"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A worker’s pain came from a painful chemical touch."
        },
        "explanation": "疼痛来自接触化学品；出现牡蛎箱并不等于贝壳致伤。"
      },
      {
        "type": "inference",
        "prompt": "What explanation undermined the supposed curse?",
        "options": [
          "The oar could undergo oxidation",
          "The owl predicted a payment",
          "The pact described a magical boat",
          "The owner had left the port"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "the oar could oxidize, not curse its users"
        },
        "explanation": "船桨会氧化，原文明确否定诅咒；鸟的出现不是预言证据。"
      }
    ]
  },
  {
    "id": "expansion-b-079",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the sliding books reveal?",
        "options": [
          "A cracked kitchen window",
          "A projected painting",
          "A live panther's cage",
          "A stolen panda"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "revealing a projected painting"
        },
        "explanation": "书册滑落露出投影画，非真实动物藏身处。"
      },
      {
        "type": "detail",
        "prompt": "What did Lin demonstrate under the palm?",
        "options": [
          "How the pigment poisoned the air",
          "How the pane was replaced",
          "How the lamp enlarged the image",
          "How the panther escaped"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin showed how the lamp enlarged the image"
        },
        "explanation": "林展示灯光放大图像的原理；没有真实豹逃离。"
      },
      {
        "type": "inference",
        "prompt": "Why had the frightening image been displayed?",
        "options": [
          "It warned of a real escaped animal",
          "It tested a rescue team's speed",
          "It protected the painter's panda",
          "It was part of the artist's advertising"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The artist admitted that his advertising had frightened a real person."
        },
        "explanation": "画家承认广告吓到了人；没有真实猛兽或救援测试的依据。"
      }
    ]
  },
  {
    "id": "expansion-b-080",
    "questions": [
      {
        "type": "detail",
        "prompt": "What prevented participants from leaving easily?",
        "options": [
          "A partition",
          "The parachute",
          "A gift receipt",
          "The arrival of Parliament"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "a partition trapped them"
        },
        "explanation": "隔板困住参与者；降落伞用于投递礼包。"
      },
      {
        "type": "detail",
        "prompt": "What danger was detected in the gift bags?",
        "options": [
          "An explosive stage light",
          "A parasite affecting muscles",
          "A broken parachute cord",
          "A blocked route map"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "a parasite in the gift bags; it could paralyse or paralyze muscles"
        },
        "explanation": "礼袋含能使肌肉瘫痪的寄生虫；道路堵塞是另一项问题。"
      },
      {
        "type": "main",
        "prompt": "What is the central problem exposed at the parade?",
        "options": [
          "A dispute about parachute design",
          "A canceled parliamentary election",
          "Serious failures in participant safety",
          "A shortage of decorative gifts"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The harm came partly from negligence."
        },
        "explanation": "伤害部分源于疏忽，结合困人和危险礼包，可见庆典安全失职。"
      }
    ]
  },
  {
    "id": "expansion-b-081",
    "questions": [
      {
        "type": "detail",
        "prompt": "What supported the traveler's real identity?",
        "options": [
          "A pastry recipe",
          "A theater ticket",
          "The patrol's initial suspicion",
          "A valid paternity record"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A valid paternity record showed the traveler’s identity was real."
        },
        "explanation": "有效亲子记录证明身份；爱做点心并非身份证据。"
      },
      {
        "type": "detail",
        "prompt": "Who was persuaded to testify?",
        "options": [
          "A theater patron",
          "A calf's owner",
          "The passport maker",
          "The accuser's assistant"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "His passion persuaded a theater patron to testify."
        },
        "explanation": "热情说服剧院赞助人作证；并没有护照制造者作证的描述。"
      },
      {
        "type": "inference",
        "prompt": "What role did the patron's testimony play?",
        "options": [
          "It confirmed the passport was false",
          "It helped contest the accusation",
          "It established a new patent",
          "It proved the traveler impatient"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A patriot could be patriotic without accepting false blame. His passion persuaded a theater patron to testify."
        },
        "explanation": "上下文是抵抗虚假指控，证词帮助澄清；未创设专利或证实假身份。"
      }
    ]
  },
  {
    "id": "expansion-b-082",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the seller justify blocking passers-by?",
        "options": [
          "By reporting damage to the pearl stall",
          "By announcing road repairs",
          "By citing a beast's unusual behaviour",
          "By showing a valid police order"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A seller cited a beast’s peculiarity, blocking every pedestrian and pedlar."
        },
        "explanation": "卖家以猛兽习性为由阻路，未出示合法封路命令。"
      },
      {
        "type": "detail",
        "prompt": "What helped expose the dishonest account?",
        "options": [
          "The peacock's damaged feathers",
          "The price of a peach",
          "A missing bicycle pedal",
          "A matching account held by a peer"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A stolen account matched one held by a peer."
        },
        "explanation": "被盗账目与同行保存的一份吻合；其他景物不是账目证据。"
      },
      {
        "type": "inference",
        "prompt": "What does the penalty imposed after the market reopened suggest about the toll?",
        "options": [
          "It was based on deception rather than a legitimate restriction",
          "To identify a genuine injured animal",
          "To mark the peasant's completed road",
          "To protect the market from flooding"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "He could peel its paint and peep inside. A stolen account matched one held by a peer. The market reopened, and the false toll earned its maker a penalty.",
          "focusQuote": "The market reopened, and the false toll earned its maker a penalty."
        },
        "explanation": "结尾明确这是虚假收费且收费者受罚，可推知其并非正当限制；不需要假设脚印是谁制作。"
      }
    ]
  },
  {
    "id": "expansion-b-083",
    "questions": [
      {
        "type": "detail",
        "prompt": "How was the diluted perfume disguised?",
        "options": [
          "The penguin model released perfume",
          "Pepper masked its scent",
          "A quartz bottle changed its colour",
          "The elder supplied stronger oil"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Pepper hid the diluted scent."
        },
        "explanation": "胡椒掩盖被稀释的香气；企鹅只是表演模型。"
      },
      {
        "type": "detail",
        "prompt": "Why were buyers still at risk even if the show worked?",
        "options": [
          "The actor refused to appear",
          "Every needle had broken",
          "Its medical promise was false",
          "The performance never began"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "its false medical promise still placed buyers in peril"
        },
        "explanation": "危险在虚假治病承诺；机关表演运作良好并不能使承诺真实。"
      },
      {
        "type": "main",
        "prompt": "What problem does Yun's investigation address?",
        "options": [
          "A failed theatrical audition",
          "The theft of the elder's pension records",
          "A shortage of pepper on the peninsula",
          "Misleading medical claims used to sell perfume"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Yun let the actor perform, but the performance required honest accounts. Perhaps the show worked perfectly; its false medical promise still placed buyers in peril. Fair refunds ended that danger.",
          "focusQuote": "Perhaps the show worked perfectly; its false medical promise still placed buyers in peril."
        },
        "explanation": "调查拆穿香水医疗宣传，退款解决受骗损失；非普通演出失败。"
      }
    ]
  },
  {
    "id": "expansion-b-084",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did Yun measure the boundary?",
        "options": [
          "By setting a perpendicular post",
          "By following a newspaper headline",
          "By opening every village well",
          "By asking workers to leave"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Yun set a perpendicular post to measure the boundary."
        },
        "explanation": "云立垂直木柱量边界；期刊标题不能代替测量。"
      },
      {
        "type": "detail",
        "prompt": "What was done to the dangerous shaft?",
        "options": [
          "It was expanded toward the perimeter",
          "It was closed permanently",
          "It received an unlimited license",
          "It became a village well"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "closed the dangerous shaft permanently"
        },
        "explanation": "危险矿井被永久关闭；许可并非延长开采。"
      },
      {
        "type": "inference",
        "prompt": "How did the advertisement misrepresent the permit?",
        "options": [
          "It accurately guaranteed clean wells",
          "It transferred ownership to workers",
          "It overstated how long permission lasted",
          "It understated the mine's depth"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The license covered one period, not an eternal exemption."
        },
        "explanation": "许可只有一个时期，广告宣称永久明显夸大时效。"
      }
    ]
  },
  {
    "id": "expansion-b-085",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the clock's owner respond to questions?",
        "options": [
          "He stopped the clock immediately",
          "He published full wage records",
          "He invited independent tests",
          "He persecuted the questioners"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Its owner chose to persecute anyone who questioned it."
        },
        "explanation": "主人迫害质疑者，并非主动开放检测或账目。"
      },
      {
        "type": "detail",
        "prompt": "What exposed the owner's smooth claims?",
        "options": [
          "Relevant details in a petition",
          "A change in the clock's colour",
          "Yun's personal charm",
          "A worker's refusal to write"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Its pertinent details exposed the owner’s smooth persuasion."
        },
        "explanation": "请愿书的有关细节揭穿说辞；不是靠个人魅力判断。"
      },
      {
        "type": "inference",
        "prompt": "Why did workers want the clock's operation to end?",
        "options": [
          "It made their petition unnecessary",
          "It required endless unpaid shifts",
          "It had already paid them too much",
          "It prevented residents from visiting"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "endless magic meant endless unpaid shifts"
        },
        "explanation": "所谓无尽魔法意味着无工资的无尽轮班，直接损害工人休息。"
      }
    ]
  },
  {
    "id": "expansion-b-086",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the photoelectric device actually change?",
        "options": [
          "The animal's species",
          "The physician's diagnosis",
          "A photograph",
          "A physical law"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A photoelectric device altered a photograph, not a law of physics."
        },
        "explanation": "装置改的是照片，英文明确否定改变物理定律。"
      },
      {
        "type": "detail",
        "prompt": "What caused the apparent miraculous strength?",
        "options": [
          "A new animal diet",
          "The philosopher's training",
          "The exhibition's donations",
          "The subject's reaction to smoke"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "He was physically affected by smoke; the change was physiological."
        },
        "explanation": "实际是受烟影响后的生理反应，非慈善捐款创造力量。"
      },
      {
        "type": "main",
        "prompt": "What is the passage mainly about?",
        "options": [
          "Correcting an exhibition's false miracle claim",
          "Training animals for scientific research",
          "Raising funds for a new fuel company",
          "Replacing medical care with photography"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "protecting animals and people instead of selling false wonder"
        },
        "explanation": "展览转向保护人和动物，纠正出售虚假奇迹的做法。"
      }
    ]
  },
  {
    "id": "expansion-b-087",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the pilot handle the needle?",
        "options": [
          "He pushed it back through the lid",
          "He lifted it carefully with a pin",
          "He hid it inside a pillow",
          "He washed it in pineapple juice"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "used it to lift the needle with a careful pinch"
        },
        "explanation": "飞行员用别针小心挑起针；没有拿果汁清洗或塞回罐盖。"
      },
      {
        "type": "detail",
        "prompt": "What did the pineapple juice contain?",
        "options": [
          "Clean water only",
          "A piece of the pilot's coat",
          "The same chemical",
          "An extra medicine pill"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "One pint of pineapple juice held the same chemical."
        },
        "explanation": "菠萝汁含同一种化学物，说明并非只有馅饼或腌菜受污染。"
      },
      {
        "type": "inference",
        "prompt": "Why did guards check who had approached the table?",
        "options": [
          "To identify the best picnic cook",
          "To count the arriving pilgrims",
          "To return the pilot's coat",
          "To trace the possible contamination source"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "guards checked who had approached the table"
        },
        "explanation": "食物已发现被下毒，追查接近餐桌者旨在定位污染来源。"
      }
    ]
  },
  {
    "id": "expansion-b-088",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where did the pirate conceal the pistol and piston?",
        "options": [
          "In a pit",
          "Under the platform",
          "Inside the pump",
          "Behind the plantation"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "hid a pistol and piston in a pit"
        },
        "explanation": "手枪和活塞被藏在坑里；平台和水泵是其他场景物。"
      },
      {
        "type": "detail",
        "prompt": "Why did Yun stop the pump?",
        "options": [
          "The planet had changed orbit",
          "Pitch was blocking the pipe",
          "The plantation lacked plastic",
          "The pirate requested medical help"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "She found pitch blocking the pipe and stopped the pump."
        },
        "explanation": "停泵因沥青堵管，并非天体轨道变动。"
      },
      {
        "type": "main",
        "prompt": "How is the supposed magical cure challenged?",
        "options": [
          "The platform becomes a working reactor",
          "The doctors stop treating the disease",
          "Water repairs and real medical treatment replace it",
          "The pirate proves the planets heal people"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Safe repairs restored water, while doctors treated the real disease."
        },
        "explanation": "修管恢复水源、医生治疗真实疾病，海盗救世说法随广告破产。"
      }
    ]
  },
  {
    "id": "expansion-b-089",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the plutocrat do after making his pledge?",
        "options": [
          "Returned all the stolen water",
          "Opened the store for children",
          "Repaired the playground pump",
          "Sent workers to steal grain"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "then sent workers to plunge into the store and steal grain"
        },
        "explanation": "许诺之后仍派人偷粮，不能把悦耳保证当作履行承诺。"
      },
      {
        "type": "detail",
        "prompt": "What had happened to water intended for the fields?",
        "options": [
          "It had been diverted",
          "It had become plentiful rain",
          "It had frozen in the pump",
          "It had been sold by children"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Water for fields worked with a plough had been diverted."
        },
        "explanation": "耕田用水遭改道；未说冻结或孩子售水。"
      },
      {
        "type": "inference",
        "prompt": "What made the pledge meaningful in the end?",
        "options": [
          "A larger collection of grain",
          "Actual repayment alongside shared rules",
          "The man's pleasant appearance",
          "The destruction of every receipt"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A rule of pluralism, plus actual repayment, made the pledge meaningful."
        },
        "explanation": "真正偿还和多方参与的规则使保证落地，外貌和粮多不足以解释。"
      }
    ]
  },
  {
    "id": "expansion-b-090",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did Lin discover inside the polymer shell?",
        "options": [
          "An election notice",
          "A clean-water sample",
          "A pollutant",
          "A poem"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Lin gave the polymer shell a poke, exposing a pollutant."
        },
        "explanation": "轻戳外壳暴露污染物，非宣传材料或清水。"
      },
      {
        "type": "detail",
        "prompt": "Where did the label lead Lin?",
        "options": [
          "To the poet's pocket",
          "To a polar school",
          "To the politician's office",
          "To the harbor pool"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "trace it to the harbor pool"
        },
        "explanation": "标签追至港口水池；原文没有写政客办公室。"
      },
      {
        "type": "inference",
        "prompt": "What was wrong with the proposed pollution remedy?",
        "options": [
          "It would itself contaminate water",
          "It would make poetry unpopular",
          "It required an impossible election",
          "It had already been stolen by police"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "as a cure for pollution, although it would pollute the water"
        },
        "explanation": "所谓治理污染的东西反而会污染水，与诗歌流行无关。"
      }
    ]
  },
  {
    "id": "expansion-b-091",
    "questions": [
      {
        "type": "detail",
        "prompt": "What shortage did the porter directly experience?",
        "options": [
          "Too few portable machines",
          "Too little porridge",
          "Too few portraits",
          "Too little cooking fuel"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "a porter received too small a portion of porridge"
        },
        "explanation": "搬运工领到的粥过少；其他物品不是他直接遭遇的短缺。"
      },
      {
        "type": "detail",
        "prompt": "What revealed the hidden drain?",
        "options": [
          "The donor's popularity",
          "The porcelain bowl's price",
          "Bubbles in the nearby pond",
          "A new portrait of the cook"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Bubbles would pop in a nearby pond, revealing the hidden drain."
        },
        "explanation": "附近池塘气泡暴露暗排水管，非机器统计的人气。"
      },
      {
        "type": "inference",
        "prompt": "What undermined the portrayal of the cook as a thief?",
        "options": [
          "His pose in the photograph",
          "The donor's high popularity",
          "The porter's small meal",
          "Physical findings and his cooperation"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Lin chose to ponder the evidence and measure the tank’s position. The cook’s positive response helped positively identify the leak. His photographic pose proved nothing. The actual thief returned the stolen meals.",
          "focusQuote": "The cook’s positive response helped positively identify the leak. His photographic pose proved nothing. The actual thief returned the stolen meals."
        },
        "explanation": "照片姿态不证明偷盗，厨师配合查漏且真贼归还餐食。"
      }
    ]
  },
  {
    "id": "expansion-b-092",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was discovered in the sealed parcel?",
        "options": [
          "Live poultry",
          "A false papal seal",
          "Only a cooking pot",
          "A stolen recipe"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A postal check found live poultry in a sealed parcel."
        },
        "explanation": "包裹内发现活家禽；锅是另一个已送来的物品。"
      },
      {
        "type": "detail",
        "prompt": "What was eventually established about the donation letter?",
        "options": [
          "It demanded payment for the pot",
          "It was genuine",
          "It was a prediction",
          "It belonged to the teacher"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The letter proved genuine, and the pot went to its owner."
        },
        "explanation": "捐赠信证实真实，锅归失主；未说信要求付锅款。"
      },
      {
        "type": "inference",
        "prompt": "Why did the teacher ask for a testable claim?",
        "options": [
          "The letter had been proved false",
          "The show needed more predictions",
          "Posture alone could not establish guilt",
          "The poultry had already escaped"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Students read the teacher’s posture as guilt; he asked them to postulate a testable claim instead."
        },
        "explanation": "学生凭姿态认罪，老师要求可检验主张，避免把外表直接当证据。"
      }
    ]
  },
  {
    "id": "expansion-c-001",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the monk put into the dry well?",
        "options": [
          "Copper from the bell",
          "The elder's written preface",
          "Water from the fields",
          "Powder made from roots"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "pound roots into powder and pour them into a dry well"
        },
        "explanation": "和尚将草根捣粉倒入干井；铜属于钟的材料。"
      },
      {
        "type": "detail",
        "prompt": "Why did he move the bell to a hill?",
        "options": [
          "To prevent injury",
          "To stop rain reaching the fields",
          "To sell the copper alloy",
          "To follow an old rescue precedent"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "He moved the precious bell to a hill to preclude injury"
        },
        "explanation": "移钟目的是预防伤害；此举并无旧救援先例可循。"
      },
      {
        "type": "inference",
        "prompt": "What does his response to the storm suggest?",
        "options": [
          "He wanted to burn the village",
          "He believed its harm could be reduced",
          "He believed lightning must destroy the village",
          "He had no expectation of rain"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "rejected the prediction that lightning must destroy the village"
        },
        "explanation": "他拒绝必毁村的预言并采取防伤、防火措施，可见危害并非只能接受。"
      }
    ]
  },
  {
    "id": "expansion-c-002",
    "questions": [
      {
        "type": "detail",
        "prompt": "What setting did Lin consider better for the witness?",
        "options": [
          "A visitor's laboratory",
          "The premier's meeting hall",
          "A private room",
          "The public court"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "Lin found that a private room was preferable"
        },
        "explanation": "林认为单独房间更好，不是按宫廷偏好公开问话。"
      },
      {
        "type": "detail",
        "prompt": "What alteration was found in the instructions?",
        "options": [
          "Tea became sleeping medicine",
          "A low fee became a high fee",
          "A bottle became a sealed case",
          "Before birth became after birth"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A tiny preposition changed “before birth” to “after birth”"
        },
        "explanation": "说明中介词改变时间关系，其他选项把不同事件误作标签篡改。"
      },
      {
        "type": "inference",
        "prompt": "Why was the visitor's prescription a threat to testimony?",
        "options": [
          "It could erase the witness's memory",
          "It prevented the bottle being sealed",
          "It made the witness identify the premier",
          "It required a public interview"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "his prescription named a herb that erased memory"
        },
        "explanation": "药方含抹除记忆的草药，可能损害证词；高费用本身不是此题核心风险。"
      }
    ]
  },
  {
    "id": "expansion-c-003",
    "questions": [
      {
        "type": "detail",
        "prompt": "Who supposedly owned the leaflet, according to the guard?",
        "options": [
          "The printer's owner",
          "The previous visitor",
          "The president",
          "The priest"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "the previous visitor’s property"
        },
        "explanation": "狱卒借口传单属于前一位访客；不能当成事实已获证实。"
      },
      {
        "type": "detail",
        "prompt": "What defect in the printer became a major clue?",
        "options": [
          "A broken blue cartridge",
          "A complete lack of ink",
          "A missing letter",
          "An unreadable paper size"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "its principal flaw was a missing letter"
        },
        "explanation": "关键缺陷是漏字；蓝红墨区别属于另条线索。"
      },
      {
        "type": "main",
        "prompt": "Which account best summarizes the judge's approach to the alleged royal plot?",
        "options": [
          "A conspiracy against royalty",
          "A presidential election",
          "The guard's military promotion",
          "Verifiable tests corrected a threatening interpretation of an ordinary school text"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Yan felt a prick of pride when a priest translated the writing. It was primarily a primary school exercise about a primate, not a plot against the prince or princess. The prime clue lay in the primitive printer: its principal flaw was a missing letter. Yan would print a test and act principally on the principle of verifiable proof. Nobody had noticed that flaw previously.",
          "focusQuote": "It was primarily a primary school exercise about a primate, not a plot against the prince or princess. The prime clue lay in the primitive printer: its principal flaw was a missing letter. Yan would print a test and act principally on the principle of verifiable proof."
        },
        "explanation": "文字其实是关于灵长类的学校练习，法官又以打印测试和可核验证据处理线索；主旨是以证据纠正危险解读。"
      }
    ]
  },
  {
    "id": "expansion-c-004",
    "questions": [
      {
        "type": "detail",
        "prompt": "When was the possible ally expected to arrive?",
        "options": [
          "During a funeral procession",
          "Before the prison was built",
          "At the professor's lecture",
          "After a paid advertisement"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "probably arrive during the funeral procession"
        },
        "explanation": "帮手可能趁送葬队伍到来；获利广告是后续被拒绝的安排。"
      },
      {
        "type": "detail",
        "prompt": "What did the visitor produce to open the lock?",
        "options": [
          "A public prison profile",
          "A safe solvent",
          "A stronger prism",
          "A forged trial record"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "a producer who could produce a safe solvent"
        },
        "explanation": "访客能制造安全溶剂，用来溶开锁；棱镜由囚犯持有。"
      },
      {
        "type": "inference",
        "prompt": "What does the visitor's rejected contract suggest?",
        "options": [
          "He wanted to advertise the jailer's profit",
          "He had no production experience",
          "He did not want the escape commercialized",
          "He doubted the prisoner had escaped"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "refused a profitable contract to proclaim the escape as an advertisement"
        },
        "explanation": "拒绝获利广告合约说明不愿把逃生商业化，并非没有制造经验。"
      }
    ]
  },
  {
    "id": "expansion-c-005",
    "questions": [
      {
        "type": "detail",
        "prompt": "What condition did the minister attach to quick approval?",
        "options": [
          "The crew must stop speaking",
          "The council must replace the program",
          "The village must cancel all trade",
          "The engineer must surrender her design"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "prompt approval if the engineer surrendered her design"
        },
        "explanation": "迅速批准以交出设计为条件；不是发音练习的条件。"
      },
      {
        "type": "detail",
        "prompt": "Why did the crew need clear commands?",
        "options": [
          "Ambiguity could send a sailor overboard",
          "The projector could not hear them",
          "The minister requested a speech",
          "The propeller ran only during silence"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "One ambiguous pronoun could send a sailor overboard."
        },
        "explanation": "含糊代词可能导致水手落水，发音训练解决操作风险。"
      },
      {
        "type": "inference",
        "prompt": "What did the successful demonstration challenge?",
        "options": [
          "The fact that the village was isolated",
          "The claim that the craft would explode",
          "The existence of the council",
          "The need for a propeller"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The council watched the craft land unharmed."
        },
        "explanation": "议会见飞舟完好降落，与爆炸宣传相抵触，不是否认此前村庄封闭。"
      }
    ]
  },
  {
    "id": "expansion-c-006",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was unfair about the proposed harvest charge?",
        "options": [
          "It was paid entirely in water",
          "It was too small to fund a pump",
          "It did not match people's incomes",
          "It applied only to the gardener"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "the tax was hardly proportional to anyone’s income"
        },
        "explanation": "征收费与个人收入不成比例，不是只向园丁征收。"
      },
      {
        "type": "detail",
        "prompt": "What condition was attached to the gardener's water supply?",
        "options": [
          "The prophet must receive all harvests",
          "The trees must grow protein",
          "The academy must abandon its protocol",
          "The village must fund the provision"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "provided the village funded its provision"
        },
        "explanation": "供水以村里承担供给费用为条件，不能漏听条件词。"
      },
      {
        "type": "main",
        "prompt": "What scheme does the investigation uncover?",
        "options": [
          "False prosperity claims concealing stolen water",
          "A genuine cure for every drought",
          "A fair tax improving the orchard",
          "A lawful sale of academy instruments"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Roots revealed a drain, whose proximity to the river explained the stolen water."
        },
        "explanation": "树根下的管道暴露偷水，结合空瓶与虚假预言，是伪繁荣骗局。"
      }
    ]
  },
  {
    "id": "expansion-c-007",
    "questions": [
      {
        "type": "detail",
        "prompt": "What happened after the boy bought food?",
        "options": [
          "He stole a pumpkin",
          "Someone drugged him",
          "He joined the puppet company",
          "He published a missing-child report"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Someone had drugged him after a purchase at the food stall."
        },
        "explanation": "孩子买食品后被下药；不能把集市景物当成犯罪对象。"
      },
      {
        "type": "detail",
        "prompt": "What helped solve the kidnapper's purpose?",
        "options": [
          "A ticket-punching glove alone",
          "The colour of the pyjamas",
          "A receipt in a dropped purse",
          "The puppy's steam trail"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A dropped purse disclosed the kidnapper’s purpose; its receipt solved the puzzle."
        },
        "explanation": "遗落钱包及其收据揭露绑匪目的，衣色不是解谜关键。"
      },
      {
        "type": "inference",
        "prompt": "Why did the reporter postpone publication?",
        "options": [
          "The child wanted to write it",
          "The court had canceled the rescue",
          "The doctor refused all reports",
          "Early publicity could endanger the child"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "Its publicity could endanger the child"
        },
        "explanation": "延迟公开为避免危及孩子；未说医生禁止一切报道。"
      }
    ]
  },
  {
    "id": "expansion-c-008",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the merchant's offer compare with his quota?",
        "options": [
          "It was ten times the quota",
          "It was exactly the quota",
          "It was half the quota",
          "It was ten deliveries below the quota"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "His quarterly quota permitted only ten deliveries, yet his quotation offered a hundred."
        },
        "explanation": "允许10批却报价100批，为十倍；不能只记住其中一个数字。"
      },
      {
        "type": "detail",
        "prompt": "Where was the recoverable spring water found?",
        "options": [
          "Under the queen's quilt",
          "In the merchant's hidden tank",
          "Inside the quartz measure",
          "At the apprentice's home"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "the queen opened his hidden tank. The recovered spring water"
        },
        "explanation": "泉水在商人暗藏水罐中，石英量杯并非储水处。"
      },
      {
        "type": "inference",
        "prompt": "Why did the apprentice call for measurements?",
        "options": [
          "The merchant had no quota",
          "The village preferred warm water",
          "Impressions alone could not establish water quality",
          "Every applicant lacked qualifications"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "qualitative impressions alone could not establish water quality"
        },
        "explanation": "定性印象无法确认水质，故需定量检验；没有说所有人均无资格。"
      }
    ]
  },
  {
    "id": "expansion-c-009",
    "questions": [
      {
        "type": "detail",
        "prompt": "What dangerous alteration had been made to the train?",
        "options": [
          "Its cargo seal had been repainted",
          "Its railway route had been flooded",
          "Its luggage rack had been replaced",
          "Its radiator had been removed"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The radiator had been removed"
        },
        "explanation": "散热器遭拆除是危险改动；行李架异响只是开场线索。"
      },
      {
        "type": "detail",
        "prompt": "Whose seal appeared on the hidden crate?",
        "options": [
          "The mine owner's",
          "The passenger's",
          "The station guard's",
          "The driver's"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "it bore the mine owner’s seal"
        },
        "explanation": "隐藏箱子带矿主封章，非被误怪乘客的证明。"
      },
      {
        "type": "main",
        "prompt": "What shift occurs in the investigation?",
        "options": [
          "From railway repairs to stopping all trains",
          "From blaming a passenger to investigating mine sabotage",
          "From a race to searching for lost rabbits",
          "From testing cargo to blaming the rainforest"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The passenger was cleared, and the mine’s sabotage case began."
        },
        "explanation": "乘客澄清，调查转向矿场破坏案；其他选项错置开场景物。"
      }
    ]
  },
  {
    "id": "expansion-c-010",
    "questions": [
      {
        "type": "detail",
        "prompt": "What produced the rapid rattling sound?",
        "options": [
          "A locked door opening",
          "A rider's cattle bell",
          "A broken rat trap",
          "The owner's footsteps"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Its rapidity matched a broken rat trap, not footsteps."
        },
        "explanation": "哗啦节奏与坏鼠夹吻合，原文明排除脚步声。"
      },
      {
        "type": "detail",
        "prompt": "How did Lu free the owner?",
        "options": [
          "She forced the locked door",
          "She broke the rat trap",
          "She moved the entire shed",
          "She cut his bonds"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Lu cut his bonds, rather than forcing a locked door."
        },
        "explanation": "陆选择割断束缚，而非强破门；注意rather than后的排除项。"
      },
      {
        "type": "inference",
        "prompt": "Why did Lu resist accepting the first account?",
        "options": [
          "She wanted corroborating evidence",
          "She already trusted every guard",
          "She wanted a random search",
          "She refused to examine testimony"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "Lu would rarely accept a tale without corroboration."
        },
        "explanation": "她通常不接受无佐证故事，所以会继续核查，而非相信全部守卫。"
      }
    ]
  },
  {
    "id": "expansion-c-011",
    "questions": [
      {
        "type": "detail",
        "prompt": "What accounting problem did the clerk discover?",
        "options": [
          "The reactor wall had hidden the tax money",
          "Every receipt had been reversed",
          "Every farmer had paid twice",
          "The retired collector had destroyed the dates"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "the collector had reversed every receipt"
        },
        "explanation": "征收者倒置收据登记，导致已缴事实被掩盖；未说村民已经全缴两次。"
      },
      {
        "type": "detail",
        "prompt": "Who could verify the payment dates?",
        "options": [
          "The tax rebel's lawyer",
          "An unnamed judge",
          "A retired receiver",
          "The reactor's owner"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A retired receiver could readily confirm the dates."
        },
        "explanation": "退休收款人能确认日期，法官是判断已缴款的人。"
      },
      {
        "type": "inference",
        "prompt": "What was the collector's aim in threatening rebellion?",
        "options": [
          "To rescue the farmers",
          "To rebuild the reactor",
          "To confirm the original dates",
          "To conceal the fraud"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "hoping a rebellion would hide the fraud"
        },
        "explanation": "叛乱威胁旨在掩盖骗税，不是为维修或替农民出头。"
      }
    ]
  },
  {
    "id": "expansion-c-012",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was secretly recorded inside the box?",
        "options": [
          "Visitors' private information",
          "Only public poetry performances",
          "The hall's electricity consumption",
          "The cake ingredients"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "kept a record of visitors’ secrets"
        },
        "explanation": "录音机记录访客秘密；送食谱与背诗只是招募背景。"
      },
      {
        "type": "detail",
        "prompt": "What did recognizing the serial number lead to?",
        "options": [
          "A canceled court settlement",
          "A stolen shipment",
          "A genuine recommendation",
          "The original cake recipe"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Recognition of its serial number led to a stolen shipment."
        },
        "explanation": "序号识别指向失窃货物；并非证明活动组织者可信。"
      },
      {
        "type": "inference",
        "prompt": "What had to happen before victims would reconcile?",
        "options": [
          "All recordings had to be broadcast",
          "The hall had to close for another recession",
          "Their money had to be recovered",
          "The organizer had to offer new recipes"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "reconcile only after its recovery"
        },
        "explanation": "和解以钱款追回为前提；善意姿态或新食谱不能替代偿还。"
      }
    ]
  },
  {
    "id": "expansion-c-013",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where had the refugee hidden a second reel?",
        "options": [
          "In the refrigerator",
          "Under the mayor's office",
          "In a boat ticket",
          "At a mirror"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "a mirror where he had hidden a second reel"
        },
        "explanation": "第二卷藏在纸条指向的镜子处；冰箱用于取茶点。"
      },
      {
        "type": "detail",
        "prompt": "What action did the council agree to take?",
        "options": [
          "Remove redundant drains",
          "Refund every refinery purchase",
          "Destroy the river-games office",
          "Send the witness back immediately"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The council agreed to remove redundant drains"
        },
        "explanation": "议会同意拆多余排水管；烧办公室反而被要求克制。"
      },
      {
        "type": "inference",
        "prompt": "Why did the mayor offer a boat-ticket refund?",
        "options": [
          "To acknowledge every charge openly",
          "To minimize public anger over the pollution",
          "To reward the witness's filmmaking",
          "To finance a new rescue boat"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "hoping to reduce public anger to a minor financial reduction"
        },
        "explanation": "退款意在将排污民愤降成小额金钱问题，并非全面承认指控。"
      }
    ]
  },
  {
    "id": "expansion-c-014",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the queen respond to the old order?",
        "options": [
          "She postponed all planting",
          "She surrendered her horse",
          "She rejected it",
          "She reinforced it"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The queen would reject that order"
        },
        "explanation": "女王拒绝过时命令；加强税收要求是指挥官的行动。"
      },
      {
        "type": "detail",
        "prompt": "What new position was assigned to the commander?",
        "options": [
          "Forest ownership",
          "Control of the treasury",
          "Command of a second regiment",
          "Clerical work"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "the commander would be relegated to clerical work"
        },
        "explanation": "指挥官被降去做文书，并非取得更多军权或财权。"
      },
      {
        "type": "inference",
        "prompt": "What priority distinguishes the queen's plan?",
        "options": [
          "Restoring damaged land and forests",
          "Building another glorious conquest",
          "Continuing regular land seizures",
          "Protecting the old tax demand"
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The queen read the hidden list aloud. Villagers would be reimbursed for lost fields, and the commander would be relegated to clerical work. A village elder began to rejoice; the young trees might rejuvenate the valley. The commander’s new duty was to relate every seizure to its rightful owner and restore that relation.",
          "focusQuote": "Villagers would be reimbursed for lost fields, and the commander would be relegated to clerical work. A village elder began to rejoice; the young trees might rejuvenate the valley."
        },
        "explanation": "女王重在恢复受损林地，原文与追求辉煌统治作对比。"
      }
    ]
  },
  {
    "id": "expansion-c-015",
    "questions": [
      {
        "type": "detail",
        "prompt": "What supported the messenger's reliability?",
        "options": [
          "A rumour from the yard",
          "A reliable seal",
          "A slow clock",
          "The prisoner's religion"
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The messenger’s reliability depended on a reliable seal."
        },
        "explanation": "可信印章支持使者可靠性，不是学生过去依赖的传言。"
      },
      {
        "type": "detail",
        "prompt": "What did the damaged clock fragment indicate?",
        "options": [
          "The guards had invented both clocks",
          "The prisoner owned every ancient object",
          "The crime had occurred elsewhere",
          "The hearing had already ended"
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "its damage would remind the judges that the crime occurred elsewhere"
        },
        "explanation": "钟残片损伤提示案发地点在别处；不是证明庭审结束。"
      },
      {
        "type": "inference",
        "prompt": "Why did the student turn to measurements?",
        "options": [
          "The messenger had refused a seal",
          "The prisoner had confessed",
          "The guard enjoyed punishing people",
          "A previous reliance on rumour had failed"
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The student’s reliance on rumor had once failed; now he would rely on measurements."
        },
        "explanation": "曾因传言误事，学生改依测量；未见囚犯认罪或印章缺失。"
      }
    ]
  },
  {
    "id": "expansion-c-016",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did a guest ask the owner to renew the fire permit?",
        "options": [
          "The inn had safety problems needing attention.",
          "The council had cancelled every existing booking.",
          "The actress needed permission for a performance.",
          "The renovation had already made all rooms safe."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A remote inn called “The renaissance” offered cheap rent. Its renovation would render three rooms unsafe, yet the owner refused their removal from the booking list. A guest asked him to remove broken glass, repair the stairs, and renew the fire permit.",
          "focusQuote": "Its renovation would render three rooms unsafe, yet the owner refused their removal from the booking list. A guest asked him to remove broken glass, repair the stairs, and renew the fire permit."
        },
        "explanation": "客人同时要求清除玻璃、修楼梯和更新消防许可，说明旅馆安全隐患；不是演出许可或取消全部预订。"
      },
      {
        "type": "detail",
        "prompt": "What did the owner want in exchange for repaying the guest's fee?",
        "options": [
          "Her agreement to represent customers in court.",
          "Her help in getting a safety rule repealed.",
          "Her assistance in recording his promises.",
          "Her payment for a replacement notice."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The owner promised to repay her fee if she would ask the council to repeal a safety rule. He began to repeat the promise repeatedly, hoping repetition would conceal his repetitive lies. He could repel questions but did not repent. An actress whose repertoire included court dramas recorded his reply.",
          "focusQuote": "The owner promised to repay her fee if she would ask the council to repeal a safety rule."
        },
        "explanation": "退款附带条件是请议会废除安全规则；代表顾客和录音均不是他的交换条件。"
      },
      {
        "type": "inference",
        "prompt": "What does the hidden permit reproduction suggest about earlier complaints?",
        "options": [
          "They had led to immediate repairs.",
          "They concerned only expensive room rates.",
          "Authorities had suppressed them.",
          "They had been invented by the actress."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A reporter helped them replace the false notice with a truthful replacement. The owner’s representation of his inn had misled customers; the actress would represent them as their elected representative. No reproach stopped her. A hidden reproduction of the permit exposed official repression of past complaints, and the inn finally closed for repairs.",
          "focusQuote": "A hidden reproduction of the permit exposed official repression of past complaints, and the inn finally closed for repairs."
        },
        "explanation": "复制件揭露了对过往投诉的官方压制；立即维修、价格投诉或演员编造均无依据。"
      }
    ]
  },
  {
    "id": "expansion-c-017",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did a resident request urgent specialist help?",
        "options": [
          "She needed to correct the spelling on a map.",
          "She had discovered poison at her residence.",
          "She wanted to restore the keeper's promotion.",
          "She had lost the laboratory's equipment."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "Residents who reside by the lake feared for the town’s reputation. A resident had abandoned her residential residence after finding residual poison. Her request for rescue would require specialist help; the requirement was urgent, and the laboratory supplied the requisite equipment.",
          "focusQuote": "A resident had abandoned her residential residence after finding residual poison. Her request for rescue would require specialist help; the requirement was urgent, and the laboratory supplied the requisite equipment."
        },
        "explanation": "住户发现残留毒物后离开住所，急需专业救援；地图和升职不是求救原因。"
      },
      {
        "type": "detail",
        "prompt": "What did research reveal about the keeper?",
        "options": [
          "He had released a dangerous reptile deliberately.",
          "He had resigned before the pollution occurred.",
          "He had discharged medical reserves into the water.",
          "He had supplied all the rescue equipment."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The keeper planned to resign, but his resignation could not explain the pollution. He seemed to resent the inspector, nursing resentment after a failed promotion. Research revealed that he had emptied the medical reserve into the water. The reptile was harmless; investigators cleared the creature and prosecuted the keeper.",
          "focusQuote": "Research revealed that he had emptied the medical reserve into the water."
        },
        "explanation": "研究查明管理员将医用储备倒入水中；爬行动物无害，辞职意向也不能解释污染。"
      },
      {
        "type": "inference",
        "prompt": "What mistake would blaming the reptile have produced?",
        "options": [
          "It would have prevented any threatening letters from being written.",
          "It would have confirmed that the residents exaggerated the poisoning.",
          "It would have proved that the map itself contained poison.",
          "It would have confused a suspected danger with the actual source of pollution."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The keeper planned to resign, but his resignation could not explain the pollution. He seemed to resent the inspector, nursing resentment after a failed promotion. Research revealed that he had emptied the medical reserve into the water. The reptile was harmless; investigators cleared the creature and prosecuted the keeper.",
          "focusQuote": "Research revealed that he had emptied the medical reserve into the water. The reptile was harmless; investigators cleared the creature and prosecuted the keeper."
        },
        "explanation": "动物被证实无害，污染来自管理员；把怀疑对象当成真正污染源会误判，居民中毒并未被否定。"
      }
    ]
  },
  {
    "id": "expansion-c-018",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the elders' records reveal?",
        "options": [
          "The disciple had damaged both mountain roads.",
          "The spring had dried up naturally in autumn.",
          "Both elders had altered measurements.",
          "The responsive spirit had written the records."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Two elders demanded respect, but neither behaved in a respectable way. She remained respectful and asked them to respond. Their respective records, dated spring and autumn respectively, showed that each respondent had altered a measurement. A responsive spirit echoed every false response.",
          "focusQuote": "Their respective records, dated spring and autumn respectively, showed that each respondent had altered a measurement."
        },
        "explanation": "春秋两份记录显示两名长老各自改过测量值；没有证据指向弟子或自然干涸。"
      },
      {
        "type": "detail",
        "prompt": "What responsibility did each elder accept?",
        "options": [
          "Restraining the disciple during the festival.",
          "Replacing every resistant shield.",
          "Training the spirit to stop responding.",
          "Repairing a broken pipe."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The elders called her restless and tried to restrain her. She would restrict the spell and restore the spring. Each accepted responsibility for a broken pipe, becoming responsible for repairs. The result was clear water; the resultant peace allowed the valley to resume its harvest festival.",
          "focusQuote": "Each accepted responsibility for a broken pipe, becoming responsible for repairs."
        },
        "explanation": "两人承担坏管道的修理责任，随后恢复清水；其他措施不是他们接受的责任。"
      },
      {
        "type": "main",
        "prompt": "Which account best summarizes the disciple's achievement?",
        "options": [
          "She secured responsibility for repairs that restored clear water and peace.",
          "She defeated a spirit to become the sole owner of the mountain resort.",
          "She cancelled the harvest festival to settle a dispute between villagers.",
          "She earned the elders' approval by refusing to question their measurements."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The elders called her restless and tried to restrain her. She would restrict the spell and restore the spring. Each accepted responsibility for a broken pipe, becoming responsible for repairs. The result was clear water; the resultant peace allowed the valley to resume its harvest festival.",
          "focusQuote": "She would restrict the spell and restore the spring. Each accepted responsibility for a broken pipe, becoming responsible for repairs. The result was clear water; the resultant peace allowed the valley to resume its harvest festival."
        },
        "explanation": "学徒让长老承担水管修理责任，清水恢复、节庆得以继续；这是其干预的整体成果。"
      }
    ]
  },
  {
    "id": "expansion-c-019",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the shopkeeper wish to retain the ledger?",
        "options": [
          "To conceal diverted revenue from the lawyer.",
          "To prevent her nephew from attending the reunion.",
          "To create a new tax rule for the shop.",
          "To keep it as a reminder of her working life."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A retail shopkeeper decided to retire. Before retirement, she wanted to retain a ledger for memory. The tax clerk said its retention might retard a pending sale. She asked him to retell the rule, and his rude retort made her retreat into the shop.",
          "focusQuote": "Before retirement, she wanted to retain a ledger for memory."
        },
        "explanation": "她明确想留账本作为纪念；隐瞒收入是侄子的行为，不是她的目的。"
      },
      {
        "type": "detail",
        "prompt": "What did the real contract reveal about the nephew?",
        "options": [
          "He sought her property and had diverted the shop's income.",
          "He planned to buy books with his own savings.",
          "He had asked the lawyer to correct an honest mistake.",
          "He wanted the shopkeeper to retain every old ledger."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "In retrospect, the clerk’s visit was strange. She would retrieve the real contract before a family reunion. Its revelation showed that a nephew wanted her property as revenge for an old quarrel. He had diverted the shop’s revenue and planned to reverse the figures.",
          "focusQuote": "Its revelation showed that a nephew wanted her property as revenge for an old quarrel. He had diverted the shop’s revenue and planned to reverse the figures."
        },
        "explanation": "合同揭示侄子因旧怨谋取财产并转走收入；图书馆是店主后来恢复的。"
      },
      {
        "type": "inference",
        "prompt": "What limit did the lawyer place on revising the paperwork?",
        "options": [
          "Any change was allowed once the nephew threatened revolt.",
          "A date could be corrected, but dishonesty was unacceptable.",
          "The clerk's retort had to be included in the contract.",
          "The entire ledger had to be destroyed before review."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A lawyer offered a review, asking her to revise a date but refusing a dishonest revision. The nephew threatened a revolt and spoke of a revolution, though no revolutionary cause justified theft. The shopkeeper’s answer made his scheme revolve around repayment. She used the recovered reward to revive the town’s small library.",
          "focusQuote": "A lawyer offered a review, asking her to revise a date but refusing a dishonest revision."
        },
        "explanation": "律师允许改日期却拒绝不诚实的修改，体现合法纠错与造假的界限；没有销毁账本条件。"
      }
    ]
  },
  {
    "id": "expansion-c-020",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the village riot intended to distract people from?",
        "options": [
          "The theft of fruit nearing ripeness.",
          "The rider's effort to repair a mining rig.",
          "The bard's plan to leave the ridge.",
          "The guards' inspection of the pond."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The rider found a rifle beside a mining rig. A rigorous inspection disclosed a rigid metal rim inside the instrument. She would rinse its strings before someone could rip them away. A riot in the village was merely a diversion for stealing ripe fruit that would soon ripen.",
          "focusQuote": "A riot in the village was merely a diversion for stealing ripe fruit that would soon ripen."
        },
        "explanation": "骚乱只是偷取将成熟水果的掩护；不是矿机修理或诗人离村的安排。"
      },
      {
        "type": "detail",
        "prompt": "What revealed the thief's boat?",
        "options": [
          "A torn ribbon beside the rifle.",
          "A ripple crossing the pond.",
          "A confession during the harvest ritual.",
          "A crack inside the bard's instrument."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A ripple crossed the pond, revealing the thief’s boat. As water began to rise, the rider took a risk and followed. She stopped the thief during his fake harvest ritual. His rivalry with the bard was no excuse. The bard’s former rival was caught, and music returned to the ridge.",
          "focusQuote": "A ripple crossed the pond, revealing the thief’s boat."
        },
        "explanation": "水塘上的涟漪暴露船的位置；抓捕发生在之后的假仪式中。"
      },
      {
        "type": "inference",
        "prompt": "What can be inferred about the guards' initial response to the bard?",
        "options": [
          "They had already identified the bard's former rival.",
          "They organized the riot to help the rider.",
          "They dismissed a story that deserved investigation.",
          "They knew the instrument contained stolen fruit."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "A rider heard a broken rhythm on a narrow ridge. A wounded bard had a cracked rib and a torn ribbon. He asked her to rid the instrument of a hidden riddle, but village guards answered with ridicule and called the story ridiculous.",
          "focusQuote": "He asked her to rid the instrument of a hidden riddle, but village guards answered with ridicule and called the story ridiculous."
        },
        "explanation": "卫兵嘲笑受伤诗人的求助，后续却找到实体线索和盗贼，说明初始轻率否定；并未先识破对手。"
      }
    ]
  },
  {
    "id": "expansion-c-021",
    "questions": [
      {
        "type": "detail",
        "prompt": "When did the robber try to steal from the treasury?",
        "options": [
          "After the gardener received royal thanks.",
          "During the confusion caused by the robot.",
          "While the museum was replacing the crown.",
          "Before the robot entered the garden."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A robber tried to rob the treasury during the confusion. The robbery involved a model rocket, a copper rod, and a roller that made coins roll across the roof. An old Roman coin lay among the stolen pieces. A romantic tale of royal romance had disguised the thief’s visit.",
          "focusQuote": "A robber tried to rob the treasury during the confusion."
        },
        "explanation": "劫匪利用混乱实施盗窃；王室感谢和找回王冠都在后面。"
      },
      {
        "type": "detail",
        "prompt": "What was the robot actually doing?",
        "options": [
          "Moving stolen coins across the roof.",
          "Repairing the museum's coin display.",
          "Watering the garden's plants.",
          "Preparing food beside the cook."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The gardener heard a rooster and traced the root of the noise to a speaker tied with rope. A rose bush had begun to rot below a rotten drain; its rotary valve would rotate with every rotation of the robot’s arm. The machine was watering plants. Its recovered crown belonged to the museum, and the royalty thanked the gardener.",
          "focusQuote": "The machine was watering plants."
        },
        "explanation": "机器人手臂转动阀门，实际用于浇灌；滚动硬币是劫匪的手法。"
      },
      {
        "type": "inference",
        "prompt": "Why did the robot's alarming noise not establish its involvement in the robbery?",
        "options": [
          "The robot had stopped operating before any disturbance occurred.",
          "The royal family had authorized the coins to be removed.",
          "The cook had hidden the treasury inside the garden.",
          "An alarming sound alone did not show criminal purpose in a machine used for plant care."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The gardener heard a rooster and traced the root of the noise to a speaker tied with rope. A rose bush had begun to rot below a rotten drain; its rotary valve would rotate with every rotation of the robot’s arm. The machine was watering plants. Its recovered crown belonged to the museum, and the royalty thanked the gardener.",
          "focusQuote": "The machine was watering plants."
        },
        "explanation": "调查发现机器是在浇花；可怕声响本身不足以证明它在盗窃。盗贼趁乱作案是另一行为。"
      }
    ]
  },
  {
    "id": "expansion-c-022",
    "questions": [
      {
        "type": "detail",
        "prompt": "What warning had the runner actually given?",
        "options": [
          "The island had lost its supply of sacks.",
          "The captain had abandoned the normal route.",
          "The ferry's hull had ruptured.",
          "The assistant's ruby was a fake."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The captain’s rude assistant used rubber gloves to rub a ruby clean. He hid rubbish under a rug and blamed a runner for spreading a rumour. The runner had actually warned of a rupture in the hull; ignoring it could ruin the boat.",
          "focusQuote": "The runner had actually warned of a rupture in the hull; ignoring it could ruin the boat."
        },
        "explanation": "跑者警告船体破裂，助手却说他散播谣言；红宝石真假没有提及。"
      },
      {
        "type": "detail",
        "prompt": "Why did the trader want the ferry sunk?",
        "options": [
          "To stop passengers from rowing on the lake.",
          "To sell the captain a replacement saddle.",
          "To protect the sacred island from supplies.",
          "To obtain the rights to the crossing."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A ruthless trader wanted the ferry sunk to gain the crossing rights. Yet a rusty hinge showed fresh rust beside a replaced ruler. The captain measured the cut and enforced the safety rule. They moored by a sacred island, lifted supplies in a sack, and used a horse’s saddle as a makeshift cushion for the injured runner.",
          "focusQuote": "A ruthless trader wanted the ferry sunk to gain the crossing rights."
        },
        "explanation": "商人想靠沉船夺取渡口经营权；马鞍后来用于给伤者垫坐。"
      },
      {
        "type": "inference",
        "prompt": "What does the captain's response to the cut show?",
        "options": [
          "He treated the damage as a safety issue requiring action.",
          "He accepted the assistant's claim that the runner spread rumors.",
          "He continued the route without checking the warning.",
          "He transferred crossing rights to the trader immediately."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A ruthless trader wanted the ferry sunk to gain the crossing rights. Yet a rusty hinge showed fresh rust beside a replaced ruler. The captain measured the cut and enforced the safety rule. They moored by a sacred island, lifted supplies in a sack, and used a horse’s saddle as a makeshift cushion for the injured runner.",
          "focusQuote": "The captain measured the cut and enforced the safety rule. They moored by a sacred island, lifted supplies in a sack, and used a horse’s saddle as a makeshift cushion for the injured runner."
        },
        "explanation": "船长测量切口、执行安全规定并靠岸，说明认真应对危险；不是接受造谣指控或继续航行。"
      }
    ]
  },
  {
    "id": "expansion-c-023",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the wandering saint board the vessel?",
        "options": [
          "To collect the owner's unpaid salary.",
          "To sell the supplier's leftover fish.",
          "To inspect the vessel's flag design.",
          "To help sick people aboard."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A wandering saint boarded for the sake of helping the sick. He carried salad, a sandwich, and salmon with a little salt. At a sale, a salesman had called spoiled fish saleable. The saint asked the captain to salute the honest cook instead.",
          "focusQuote": "A wandering saint boarded for the sake of helping the sick."
        },
        "explanation": "他登船是为了照顾病人，携带食物并不意味着要贩卖坏鱼。"
      },
      {
        "type": "detail",
        "prompt": "What established that the food sale was fraudulent?",
        "options": [
          "A tested sample of the food.",
          "The sailor's account of crew sadness.",
          "The rescue boat's sandy landing place.",
          "The cook's salute to the merchant."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A sample of food proved the fraud. The harbor court gave its sanction to a rescue boat, whose arrival brought salvation. They landed on sandy ground and covered a burning crate with sand. A discarded sardine tin bore the supplier’s mark. The captain paid the crew and testified against the merchant.",
          "focusQuote": "A sample of food proved the fraud."
        },
        "explanation": "食品样本证明欺诈；救援和登陆发生在后，厨师受致敬也不是检验证据。"
      },
      {
        "type": "inference",
        "prompt": "Which priority guided the sailor's approach to the voyage?",
        "options": [
          "Reducing wages was necessary to obtain rescue approval.",
          "Crew protection took precedence over the owner's wage savings.",
          "Paying the supplier mattered more than testing food.",
          "Reaching sandy ground eliminated the need for safeguards."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A sailor raised a flag to sail safely through the channel. He spoke sadly of the crew’s sadness, but keeping them safe required a firm safeguard. Their safety mattered more than the owner’s salary savings.",
          "focusQuote": "Their safety mattered more than the owner’s salary savings."
        },
        "explanation": "开头明确船员安全比船主节省薪资重要；靠岸和付款不能替代安全保障。"
      }
    ]
  },
  {
    "id": "expansion-c-024",
    "questions": [
      {
        "type": "detail",
        "prompt": "What triggered the telescope's alarm?",
        "options": [
          "Moisture was soaking into the casing.",
          "A satellite had moved away from Saturn.",
          "The treasurer had stopped paying the patrons.",
          "The cook had damaged the mirror with sauce."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A scholar aimed a satellite mirror at Saturn. The telescope’s saturation alarm sounded when moisture began to saturate the casing. She could not satisfy her patrons; their expected satisfaction required a satisfactory image produced satisfactorily.",
          "focusQuote": "The telescope’s saturation alarm sounded when moisture began to saturate the casing."
        },
        "explanation": "报警由水分浸透外壳触发；酱汁属于后来窃贼制造的干扰。"
      },
      {
        "type": "detail",
        "prompt": "Why was the scholar initially unable to identify the culprit clearly?",
        "options": [
          "Police had refused to scan the scarf.",
          "It was dark and the evidence was limited.",
          "The patrons had destroyed every image.",
          "She had spent her savings on a new observatory."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Police would scan the cloth at the right scale. A scandal arose over a funding scarcity, although funds were merely hidden. Evidence was scarce, and the scholar could scarcely identify the culprit in darkness. A staged scary scream tried to scare her away. She waited for sunrise, found the stolen mirror, and exposed her treasurer.",
          "focusQuote": "Evidence was scarce, and the scholar could scarcely identify the culprit in darkness."
        },
        "explanation": "线索稀缺且黑暗中难辨嫌犯；没有警察拒检或所有图像被毁的信息。"
      },
      {
        "type": "inference",
        "prompt": "What did waiting until sunrise enable the scholar to do?",
        "options": [
          "Repair the saturation alarm without saving the lens.",
          "Prove that the funding had genuinely run out.",
          "Overcome the poor visibility and expose the treasurer.",
          "Replace the stolen mirror with a different satellite."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Police would scan the cloth at the right scale. A scandal arose over a funding scarcity, although funds were merely hidden. Evidence was scarce, and the scholar could scarcely identify the culprit in darkness. A staged scary scream tried to scare her away. She waited for sunrise, found the stolen mirror, and exposed her treasurer.",
          "focusQuote": "She waited for sunrise, found the stolen mirror, and exposed her treasurer."
        },
        "explanation": "天亮后找到失窃镜子、揭露财务主管；资金实际上被藏起，并非耗尽。"
      }
    ]
  },
  {
    "id": "expansion-c-025",
    "questions": [
      {
        "type": "detail",
        "prompt": "What made the burned scoop inconsistent with blaming the gardener?",
        "options": [
          "The gardener had hidden the scoop inside a lecture hall.",
          "The scorch mark was beyond the gardener's working scope.",
          "The scientist said no paper had burned.",
          "The scholar had signed the official schedule."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A scientist offered a scientific account of the ash. Someone had used scissors to cut a script from a volume of scripture. The dean would scoff at the suggestion and scold the gardener. Yet a metal scoop had a scorch mark that lay beyond the gardener’s working scope.",
          "focusQuote": "Yet a metal scoop had a scorch mark that lay beyond the gardener’s working scope."
        },
        "explanation": "焦痕位置超出园丁工作范围，削弱院长的指责；不是园丁藏工具或科学家否认燃烧。"
      },
      {
        "type": "detail",
        "prompt": "Where did police rescue the missing scholar?",
        "options": [
          "Inside the garden's lecture pavilion.",
          "Above the scout's window screen.",
          "In the cellar beneath a sculpture.",
          "Behind a shelf of scripture volumes."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A young scout began to scramble over the wall. She found a scrap the dean had tried to scrape away, leaving a scratch under the window screen. A loose screw allowed entry. The missing scholar’s scream came from below a sculpture. After a careful scrutiny of the cellar, police rescued him. The dean could not scrub the evidence clean or improve his credibility score with another sneer of scorn.",
          "focusQuote": "The missing scholar’s scream came from below a sculpture. After a careful scrutiny of the cellar, police rescued him."
        },
        "explanation": "雕塑下面传来叫声，警方检查地下室后救人；经卷是剪下剧本的来源。"
      },
      {
        "type": "inference",
        "prompt": "What does the dean's attempt to scrape away a scrap suggest?",
        "options": [
          "He was preparing materials for the scholar's lecture.",
          "He had discovered that the scientist's ash analysis was false.",
          "He wanted to improve the garden's scenery before a visit.",
          "He was trying to remove evidence connected to the disappearance."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A young scout began to scramble over the wall. She found a scrap the dean had tried to scrape away, leaving a scratch under the window screen. A loose screw allowed entry. The missing scholar’s scream came from below a sculpture. After a careful scrutiny of the cellar, police rescued him. The dean could not scrub the evidence clean or improve his credibility score with another sneer of scorn.",
          "focusQuote": "She found a scrap the dean had tried to scrape away, leaving a scratch under the window screen."
        },
        "explanation": "院长想刮掉纸片且最终无法洗清证据，说明掩盖线索；讲座准备和美化花园均无法解释此举。"
      }
    ]
  },
  {
    "id": "expansion-c-026",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was concealed in the seed box's secret section?",
        "options": [
          "The brother's second-hand boat contract.",
          "A list of the school's next classes.",
          "A map of the flooded farming area.",
          "The guard's personal planting equipment."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "First they would search the dock; secondly, they would seek the seller. The box’s secret section held a map of the flooded agricultural sector. Security officers had seemingly ignored this segment of the shipment. Someone planned to segregate farm families by denying seed to poorer houses.",
          "focusQuote": "The box’s secret section held a map of the flooded agricultural sector."
        },
        "explanation": "盒内暗格藏着受淹农业区地图；旧船只是次要事项。"
      },
      {
        "type": "detail",
        "prompt": "What did the sailor ask the villagers to do when the guard intervened?",
        "options": [
          "Hand over the map without resistance.",
          "Move the seeds into the guard's house.",
          "Exclude poorer families from planting lessons.",
          "Choose witnesses through a fair selection."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A guard tried to seize the map. He seldom met resistance, but the sailor asked villagers to select witnesses for a fair selection. The guard’s self-importance exposed his selfish purpose: he worked for the seller. The brothers returned the seeds and taught planting at the school during the next semester.",
          "focusQuote": "He seldom met resistance, but the sailor asked villagers to select witnesses for a fair selection."
        },
        "explanation": "水手让村民公平选见证人，未屈服交图；排斥贫困家庭是对方的计划。"
      },
      {
        "type": "inference",
        "prompt": "Whose interests was the guard serving?",
        "options": [
          "The seller's interests rather than the farm families' access to seeds.",
          "The schoolchildren's interests by keeping the box closed.",
          "The brother's interests by prioritizing the used boat.",
          "The flooded families' interests by withholding the map."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A guard tried to seize the map. He seldom met resistance, but the sailor asked villagers to select witnesses for a fair selection. The guard’s self-importance exposed his selfish purpose: he worked for the seller. The brothers returned the seeds and taught planting at the school during the next semester.",
          "focusQuote": "The guard’s self-importance exposed his selfish purpose: he worked for the seller."
        },
        "explanation": "守卫企图夺图且被揭露替卖家办事；结合扣种计划，可推知他不在保护农户。"
      }
    ]
  },
  {
    "id": "expansion-c-027",
    "questions": [
      {
        "type": "detail",
        "prompt": "What property of the device did the sensor reveal?",
        "options": [
          "Its ability to spread knowledge like seed.",
          "Its immunity to damaged wiring.",
          "Its compatibility with every stolen machine.",
          "Its response to heat."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A sensitive sensor revealed the device’s true sensitivity to heat. A sensible investigator checked each sentence in the speech and made sense of its borrowed wording. The senator tried to separate technical facts from political sentiment, but a separation of the wiring told another story.",
          "focusQuote": "A sensitive sensor revealed the device’s true sensitivity to heat."
        },
        "explanation": "传感器显示设备真实的热敏感性；传播知识只是议员的轰动宣称。"
      },
      {
        "type": "detail",
        "prompt": "What happened when the carved serpent fell from the podium?",
        "options": [
          "A stolen component was exposed.",
          "The engineer withdrew the earlier criticism.",
          "The supporters discovered a new speech manuscript.",
          "The servant was chosen as a new senator."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A sergeant inspected the machines separately. Their serial numbers formed a series of thefts. The matter was serious, and he took it seriously. After seventeen days, during the senator’s next sermon, a carved serpent fell from the podium and exposed a stolen component. A servant testified at the next session; the senator’s seventy supporters finally stopped applauding.",
          "focusQuote": "After seventeen days, during the senator’s next sermon, a carved serpent fell from the podium and exposed a stolen component."
        },
        "explanation": "雕蛇掉落露出被盗零件，是实物线索；并未导致工程师撤回批评或仆人当选。"
      },
      {
        "type": "inference",
        "prompt": "Why did the senator's supporters eventually stop applauding?",
        "options": [
          "The seminar had been postponed beyond seventy days.",
          "Evidence and testimony undermined his impressive promises.",
          "The sensor confirmed his complete technical honesty.",
          "The sergeant announced that all serial numbers were unrelated."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A sergeant inspected the machines separately. Their serial numbers formed a series of thefts. The matter was serious, and he took it seriously. After seventeen days, during the senator’s next sermon, a carved serpent fell from the podium and exposed a stolen component. A servant testified at the next session; the senator’s seventy supporters finally stopped applauding.",
          "focusQuote": "After seventeen days, during the senator’s next sermon, a carved serpent fell from the podium and exposed a stolen component. A servant testified at the next session; the senator’s seventy supporters finally stopped applauding."
        },
        "explanation": "编号串联盗窃、掉出的赃物和仆人证词促使支持者改变反应；不是验证其诚实。"
      }
    ]
  },
  {
    "id": "expansion-c-028",
    "questions": [
      {
        "type": "detail",
        "prompt": "How had the regent restricted women?",
        "options": [
          "He had excluded them from court workshops.",
          "He had prohibited them from approaching any well.",
          "He had forced them to settle the boundary dispute.",
          "He had made them design every coronation robe."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A tailor asked to sew new robes without restrictions based on sex. The regent’s sexism had barred women from court workshops and spread cruel sexual gossip. In the shade, the tailor saw a shadowy figure enter a shady passage. His shadow reached the well’s shaft.",
          "focusQuote": "The regent’s sexism had barred women from court workshops and spread cruel sexual gossip."
        },
        "explanation": "摄政者的性别歧视使女性被禁入宫廷作坊；未说禁近水井或强制制衣。"
      },
      {
        "type": "detail",
        "prompt": "How did the tailor loosen the captive ruler's bonds?",
        "options": [
          "She shook the ladder until the ropes broke.",
          "She used shampoo on the dirty bonds.",
          "She asked the regent to remove them.",
          "She cut them with a workshop needle."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The tailor felt the ladder shake, but her shaky hands found a shallow ledge. The coronation was a sham; the real ruler lay below. The regent’s behavior brought shame and proved shameful. She used a bottle of shampoo to loosen the captive’s dirty bonds, pulled him free, and revealed the true shape of the conspiracy.",
          "focusQuote": "She used a bottle of shampoo to loosen the captive’s dirty bonds, pulled him free, and revealed the true shape of the conspiracy."
        },
        "explanation": "裁缝用洗发水松开污脏束缚后救人；晃动梯子只是不稳的处境。"
      },
      {
        "type": "inference",
        "prompt": "Why was the planned coronation illegitimate?",
        "options": [
          "The tailor had refused to sew any robes.",
          "The boundary dispute had been settled too quickly.",
          "The real ruler was imprisoned while a sham coronation proceeded.",
          "The well contained water that damaged the robes."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The tailor felt the ladder shake, but her shaky hands found a shallow ledge. The coronation was a sham; the real ruler lay below. The regent’s behavior brought shame and proved shameful. She used a bottle of shampoo to loosen the captive’s dirty bonds, pulled him free, and revealed the true shape of the conspiracy.",
          "focusQuote": "The coronation was a sham; the real ruler lay below."
        },
        "explanation": "真统治者被囚井下，加冕被明确称为骗局；服装、快速和解或井水损坏均非原因。"
      }
    ]
  },
  {
    "id": "expansion-c-029",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was concealed by the bloodstained sheet?",
        "options": [
          "A net-cutting blade.",
          "A counterfeit coin.",
          "A record of the wool bargain.",
          "A worker's shipbuilding tools."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A shield concealed a box inside the shed. The shepherd could shear his sheep or shave his beard with the blade, yet neither task explained the sheriff’s sheer panic. A bloodstained sheet lay on a shelf beside a painted shell. It hid a counterfeit shilling.",
          "focusQuote": "A bloodstained sheet lay on a shelf beside a painted shell. It hid a counterfeit shilling."
        },
        "explanation": "染血床单藏着伪造先令；刀是牧羊人的工具，不能替代藏物细节。"
      },
      {
        "type": "detail",
        "prompt": "What did the shepherd do when the sheriff threatened to shoot?",
        "options": [
          "Accepted blame on behalf of the shipbuilders.",
          "Dropped the wool and escaped by boat.",
          "Raised his shield and called honest guards.",
          "Paid the sheriff with the counterfeit shipment."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The sheriff would shift blame to the shipbuilding workers. But a missing shipment included those counterfeit coins, and the supposed shipwreck had never happened. A cold shiver went through the shepherd at the shock. When the sheriff threatened to shoot, the shepherd raised his shield and called the honest guards. The wool bargain became testimony.",
          "focusQuote": "When the sheriff threatened to shoot, the shepherd raised his shield and called the honest guards."
        },
        "explanation": "牧羊人用盾防护并呼叫正直卫兵；未替造船工认罪或交付假币。"
      },
      {
        "type": "inference",
        "prompt": "What purpose did the supposed shipwreck serve in the sheriff's scheme?",
        "options": [
          "It proved that an actual shark had destroyed the coins.",
          "It explained why the shepherd no longer owned sheep.",
          "It justified the honest guards' decision to threaten the sheriff.",
          "It provided a false explanation connected to the missing shipment."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The sheriff would shift blame to the shipbuilding workers. But a missing shipment included those counterfeit coins, and the supposed shipwreck had never happened. A cold shiver went through the shepherd at the shock. When the sheriff threatened to shoot, the shepherd raised his shield and called the honest guards. The wool bargain became testimony.",
          "focusQuote": "The sheriff would shift blame to the shipbuilding workers. But a missing shipment included those counterfeit coins, and the supposed shipwreck had never happened."
        },
        "explanation": "失踪货物含假币，而声称的海难从未发生，说明它是虚假掩饰；不能证明鲨鱼毁船。"
      }
    ]
  },
  {
    "id": "expansion-c-030",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the porter interrupt the attack on the clerk?",
        "options": [
          "He pulled the attacker into a moving shuttle bus.",
          "He shut the temple shutter from outside.",
          "He knocked over a salt sack with a shovel.",
          "He fired the shot that struck the clerk."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Shortly afterward, a shot sounded. The clerk clutched his shoulder as someone tried to shove him into a crate. A shrewd porter picked up a shovel and knocked over a sack, raising a salt shower. A shrill shriek came from the attacker.",
          "focusQuote": "A shrewd porter picked up a shovel and knocked over a sack, raising a salt shower."
        },
        "explanation": "搬运工用铲推倒盐袋，扬起盐雨干预袭击；不是开枪伤人或公交拉人。"
      },
      {
        "type": "detail",
        "prompt": "What ultimately proved that stock had been diverted?",
        "options": [
          "The attacker's reputation for shyness.",
          "The shrimp basket's total weight.",
          "The depot's report of sound accounting.",
          "The clerk's shorthand records."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A spilled basket of shrimp marked his escape toward a shrine. The porter would not shrug away a witness’s fear: she watched the man shrink behind a shrub, then shut the temple shutter. A stopped shuttle bus blocked his way. The supposedly shy accountant was the thief; the clerk’s shorthand proved the diversion of stock.",
          "focusQuote": "The supposedly shy accountant was the thief; the clerk’s shorthand proved the diversion of stock."
        },
        "explanation": "速记记录证明库存被转移；害羞形象只是会计师伪装，仓库财务本就有问题。"
      },
      {
        "type": "inference",
        "prompt": "Why would shortening the audit have been risky?",
        "options": [
          "The apparent shortage required careful accounting to uncover diverted stock.",
          "The porter had already proved that no stock was missing.",
          "The shrine needed the auditor's shorthand as a ceremonial text.",
          "The shopkeeper had requested that all figures be ignored."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A spilled basket of shrimp marked his escape toward a shrine. The porter would not shrug away a witness’s fear: she watched the man shrink behind a shrub, then shut the temple shutter. A stopped shuttle bus blocked his way. The supposedly shy accountant was the thief; the clerk’s shorthand proved the diversion of stock.",
          "focusQuote": "The supposedly shy accountant was the thief; the clerk’s shorthand proved the diversion of stock."
        },
        "explanation": "开头指出记账差、审计拟走捷径；结尾靠速记查出挪货，说明缩短核查可能漏掉问题，并非库存正常。"
      }
    ]
  },
  {
    "id": "expansion-c-031",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was the forged signature important during the siege?",
        "options": [
          "It identified the physician's medical degree.",
          "It recorded the scout's sightseeing route.",
          "It was needed to purchase ordinary lamps.",
          "It could make surrender orders appear authorized."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The scout showed a forged signature. Its significance was significant because it could signify orders to surrender. The silent captain enforced silence, calling the allegation silly. Yet the letter contained silicon dust from a workshop and traces of silver ink.",
          "focusQuote": "Its significance was significant because it could signify orders to surrender."
        },
        "explanation": "伪签名的意义在于可能代表投降命令；不是医师资格或采购凭据。"
      },
      {
        "type": "detail",
        "prompt": "How was the forged emblem made visible?",
        "options": [
          "Two lamps shone on it simultaneously.",
          "A soldier sifted it through the medicine sieve.",
          "The physician washed off every trace of ink.",
          "The scout read it aloud to the silent captain."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The physician found a similar seal on a bottle. This similarity linked the captain to the forgery; similarly, his gloves held the same dust. She valued simplicity and sought to simplify the proof. Two lamps could simulate the seal under simultaneous beams. When they shone simultaneously, the forged emblem became visible. The city held its walls.",
          "focusQuote": "Two lamps could simulate the seal under simultaneous beams. When they shone simultaneously, the forged emblem became visible."
        },
        "explanation": "两灯同时照射使伪造徽记显现；筛药和读信不是检验手段。"
      },
      {
        "type": "inference",
        "prompt": "Why was the captain's dismissal of the allegation unconvincing?",
        "options": [
          "The physician's illness and the soldier's sigh.",
          "A matching seal and the same dust on his gloves.",
          "The city's intact walls and narrow doorway.",
          "The captain's request that the physician go sightseeing."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The physician found a similar seal on a bottle. This similarity linked the captain to the forgery; similarly, his gloves held the same dust. She valued simplicity and sought to simplify the proof. Two lamps could simulate the seal under simultaneous beams. When they shone simultaneously, the forged emblem became visible. The city held its walls.",
          "focusQuote": "The physician found a similar seal on a bottle. This similarity linked the captain to the forgery; similarly, his gloves held the same dust."
        },
        "explanation": "相似封印和手套上的同种粉尘把船长与伪造相连，削弱了他的否认；疾病和叹气无法建立这种联系。"
      }
    ]
  },
  {
    "id": "expansion-c-032",
    "questions": [
      {
        "type": "detail",
        "prompt": "What made the recorded ship's siren suspicious?",
        "options": [
          "It was associated with an inland building site.",
          "It played during the singer's confession at the concert.",
          "It could be heard only inside the reservoir.",
          "It was recorded by the victim while skiing."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A sincere singer confessed one sin before a concert. Her sincerity impressed Detective He, who found her alone in a single apartment. The singular clue was a ship’s siren recorded at a building site inland.",
          "focusQuote": "The singular clue was a ship’s siren recorded at a building site inland."
        },
        "explanation": "船笛录音与内陆建筑地点不相符，构成异常线索；滑雪只是歌手与失踪者的经历。"
      },
      {
        "type": "detail",
        "prompt": "What did the technician find beneath the damaged panel?",
        "options": [
          "The real victim waiting beside a boat.",
          "An artificial skull and pieces resembling skin.",
          "The original concert microphone and a ski.",
          "A complete set of reliable maintenance records."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "He remained skeptical of ghosts. A skilled technician used her skill to open the shaft in a skillful way. She would skim the maintenance log, then skip the false entries. Beneath a damaged panel were an artificial skull and scraps resembling skin. The killer had tried to make the victim sink into a reservoir, but the singer’s recording led police to the real dock.",
          "focusQuote": "Beneath a damaged panel were an artificial skull and scraps resembling skin."
        },
        "explanation": "面板下是人造头骨和仿皮碎片；日志有虚假记录，不能说可靠。"
      },
      {
        "type": "inference",
        "prompt": "What role did the singer's recording play in the investigation?",
        "options": [
          "It confirmed that ghosts occupied the lift shaft.",
          "It proved that the missing victim had gone on a skiing holiday.",
          "It helped direct police from a misleading setting to the actual dock.",
          "It established that the artificial skull belonged to the victim."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "He remained skeptical of ghosts. A skilled technician used her skill to open the shaft in a skillful way. She would skim the maintenance log, then skip the false entries. Beneath a damaged panel were an artificial skull and scraps resembling skin. The killer had tried to make the victim sink into a reservoir, but the singer’s recording led police to the real dock.",
          "focusQuote": "The killer had tried to make the victim sink into a reservoir, but the singer’s recording led police to the real dock."
        },
        "explanation": "录音最终把警方引到真实码头，侦探不信鬼怪，发现物也属人造；不是证明失踪者度假。"
      }
    ]
  },
  {
    "id": "expansion-c-033",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the boy remain with his guardian during the storm?",
        "options": [
          "He needed her to collect coins from every exit.",
          "He refused to abandon her in the snow.",
          "He had agreed to help the landlord guard the dogs.",
          "He was waiting for her to repair the skyscraper."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A slender boy lived in a slum below a skyscraper. His sleepy guardian lay in slumber as a labor slump emptied the streets. Once a slave, she had escaped slavery, and the boy refused to leave her in the snowstorm.",
          "focusQuote": "Once a slave, she had escaped slavery, and the boy refused to leave her in the snowstorm."
        },
        "explanation": "男孩不愿在暴风雪中抛下监护人；硬币出口是房东控制手段。"
      },
      {
        "type": "detail",
        "prompt": "How did the neighbor make escape possible?",
        "options": [
          "She paid the landlord to remove the oil.",
          "She cut the family's blankets as instructed.",
          "She smashed the lock with a stone.",
          "She asked the sleepy guardian to open the coin slot."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Outside, a smart neighbor saw a snowy slope through the smog. The landlord’s slogan promised safety, but a coin slot controlled every exit. She walked slowly, refused his order to slash their blankets, and used a stone to smash the lock. A planned slaughter of stray dogs had distracted the guards; she exposed both cruelties and took the family to shelter.",
          "focusQuote": "She walked slowly, refused his order to slash their blankets, and used a stone to smash the lock."
        },
        "explanation": "邻居用石头砸锁，拒绝割破毯子；并没有付钱交换出口。"
      },
      {
        "type": "inference",
        "prompt": "What did the coin-controlled exits reveal about the landlord's safety slogan?",
        "options": [
          "His promise had guaranteed free access to shelter.",
          "His slogan described the neighbor's rescue plan accurately.",
          "His exits were designed solely to protect the stray dogs.",
          "His actual arrangements conflicted with his promise of safety."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Outside, a smart neighbor saw a snowy slope through the smog. The landlord’s slogan promised safety, but a coin slot controlled every exit. She walked slowly, refused his order to slash their blankets, and used a stone to smash the lock. A planned slaughter of stray dogs had distracted the guards; she exposed both cruelties and took the family to shelter.",
          "focusQuote": "The landlord’s slogan promised safety, but a coin slot controlled every exit."
        },
        "explanation": "宣称安全却让所有出口受投币装置控制，家人还需砸锁逃离，显然言行不符；没有免费通行。"
      }
    ]
  },
  {
    "id": "expansion-c-034",
    "questions": [
      {
        "type": "detail",
        "prompt": "What plan was disclosed in the snail's note?",
        "options": [
          "The gatekeeper would sell the academy's food crates.",
          "The apprentice would move the soccer game outside.",
          "The merchant would drug the watchman to facilitate theft.",
          "The watchman would use a kite to smuggle the snake."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The apprentice heard a snap, then a sneeze. Rather than sneer, she stopped to sniff the strange spice. A tiny snail carried a note beneath the table. It said the merchant would drug the watchman, making him snore while the theft went smoothly.",
          "focusQuote": "It said the merchant would drug the watchman, making him snore while the theft went smoothly."
        },
        "explanation": "蜗牛带来的纸条说商人要下药使看守睡着以便盗窃；风筝后来传递报警消息。"
      },
      {
        "type": "detail",
        "prompt": "How did the apprentice send the message beyond the academy wall?",
        "options": [
          "She asked the snob to carry it openly.",
          "She hid it in the watchman's snack.",
          "She made the snail crawl over the wall.",
          "She attached it to a small kite."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The so-called rare snake was harmless. The apprentice would soak the note’s cover in water and wash it with soap, uncovering its wax seal. She used a small kite to let the message soar over the wall. The rescued watchman began to sob, then grew sober as he described the thief. The kitchen’s evening soccer game resumed after the guards arrested him.",
          "focusQuote": "She used a small kite to let the message soar over the wall."
        },
        "explanation": "学徒用小风筝让消息越墙；蜗牛原本在桌下，不是越墙投递。"
      },
      {
        "type": "inference",
        "prompt": "Why did the snake's supposed rarity fail to identify the main danger?",
        "options": [
          "The real threat was a theft plan involving a drugged watchman.",
          "The snake was responsible for every stolen meal.",
          "The watchman had deliberately pretended to need rescue.",
          "The apprentice discovered that the snake was deadly after all."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The apprentice heard a snap, then a sneeze. Rather than sneer, she stopped to sniff the strange spice. A tiny snail carried a note beneath the table. It said the merchant would drug the watchman, making him snore while the theft went smoothly.",
          "focusQuote": "It said the merchant would drug the watchman, making him snore while the theft went smoothly."
        },
        "explanation": "蛇被证实无害，真正风险是给看守下药并偷窃；稀有名目转移了关注。"
      }
    ]
  },
  {
    "id": "expansion-c-035",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the solar sensor identify as the source of the town's illness?",
        "options": [
          "A soluble dye used by workers.",
          "The student's old software.",
          "A miner's clothing near the sofa.",
          "Contaminated soil."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "Inside lay soda and sodium salts on soft cloth. A warm lamp could soften the wax, whose softness hid a stolen key. The student spoke softly and searched the old software records. A solar sensor measured contaminated soil, the sole source of the town’s illness.",
          "focusQuote": "A solar sensor measured contaminated soil, the sole source of the town’s illness."
        },
        "explanation": "传感器测出污染土壤是镇上疾病唯一来源；染料后来用于追踪，不是病因。"
      },
      {
        "type": "detail",
        "prompt": "Why did the solicitor come to the mining town?",
        "options": [
          "To protect the witnesses.",
          "To promote the lecturer's slogans.",
          "To lock the chamber permanently.",
          "To buy the stolen key from the owner."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A solemn solicitor came solely to protect the witnesses. Their solidarity formed a solid defense, though the owner tried to solidify fear into silence. A miner sang a solo while workers tested a soluble dye. Its trail offered a solution: the case was solvable. They would solve it by opening the chamber and closing the poisoned well.",
          "focusQuote": "A solemn solicitor came solely to protect the witnesses."
        },
        "explanation": "律师此行专为保护证人；没有宣传、买钥匙或永久封闭的目的。"
      },
      {
        "type": "inference",
        "prompt": "How did the workers turn their suspicion into an actionable case?",
        "options": [
          "They replaced evidence with the lecturer's political slogans.",
          "They tested a dye trail that supported opening the chamber and closing the poisoned well.",
          "They accepted the owner's request for silence after hearing a song.",
          "They blamed the illness on the warm lamp without inspecting the soil."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A solemn solicitor came solely to protect the witnesses. Their solidarity formed a solid defense, though the owner tried to solidify fear into silence. A miner sang a solo while workers tested a soluble dye. Its trail offered a solution: the case was solvable. They would solve it by opening the chamber and closing the poisoned well.",
          "focusQuote": "A miner sang a solo while workers tested a soluble dye. Its trail offered a solution: the case was solvable. They would solve it by opening the chamber and closing the poisoned well."
        },
        "explanation": "可溶染料的轨迹提供解决办法，行动是打开暗室、关闭毒井；唱歌只是伴随行为，不能替代证据。"
      }
    ]
  },
  {
    "id": "expansion-c-036",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the origin of the governor's treasured medal?",
        "options": [
          "A wartime rescue involving his ancestor.",
          "A recent cooking contest at the governor's house.",
          "A gardener's reward for planting soy.",
          "A souvenir bought at the southern gate."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The sorrowful governor showed genuine sorrow over a lost souvenir. He insisted the medal was the soul of his family, though this sort of sentiment puzzled the cook. A Soviet officer had given it to a sovereign ancestor; its real source was a wartime rescue.",
          "focusQuote": "A Soviet officer had given it to a sovereign ancestor; its real source was a wartime rescue."
        },
        "explanation": "纪念章的真实来源是战时救援，由苏联军官赠给祖先；不是厨艺比赛或园丁奖励。"
      },
      {
        "type": "detail",
        "prompt": "Where was the missing medal recovered?",
        "options": [
          "Inside the sour soup in the kitchen.",
          "Under a bag of soy beside a seed-sowing tool.",
          "On the southern gate's delivery notice.",
          "In the governor's family portrait frame."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The cook checked the southern gate, then followed footsteps southwards toward the southeast garden. A cart turned toward the southwest. Beneath a bag of soy, the medal lay beside a tool used to sow seed. The thief had disguised himself as a gardener, but the sour soup identified the unfamiliar cook who had tried to poison the household.",
          "focusQuote": "Beneath a bag of soy, the medal lay beside a tool used to sow seed."
        },
        "explanation": "勋章位于豆袋下、播种工具旁；酸汤用于识别陌生厨师，并非藏勋章之处。"
      },
      {
        "type": "inference",
        "prompt": "What did the thief's appearance as a gardener conceal?",
        "options": [
          "His role in rescuing the governor's ancestor during war.",
          "His intention to repair the cook's ruined recipe honestly.",
          "His involvement in theft and an attempt to poison the household.",
          "His appointment as the family's regular trusted cook."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The cook checked the southern gate, then followed footsteps southwards toward the southeast garden. A cart turned toward the southwest. Beneath a bag of soy, the medal lay beside a tool used to sow seed. The thief had disguised himself as a gardener, but the sour soup identified the unfamiliar cook who had tried to poison the household.",
          "focusQuote": "The thief had disguised himself as a gardener, but the sour soup identified the unfamiliar cook who had tried to poison the household."
        },
        "explanation": "盗贼伪装园丁，酸汤又指向试图毒害家庭的陌生厨师；不能由伪装推成忠诚雇员。"
      }
    ]
  },
  {
    "id": "expansion-c-037",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the apprentice ask the specialist to specify?",
        "options": [
          "The amount of money owed to the spectators.",
          "The crystal's operating limits.",
          "The sparrow's future migration route.",
          "The length of every bridge in the atlas."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The apprentice demanded a specific specification, asking him specifically to specify the crystal’s limits. A rare bird species supplied the feather specimen inside it. When the atlas opened, a spectacular spectacle drew every spectator. Yet its altered light spectrum betrayed the forged crystal. The apprentice refused to speculate beyond the evidence and dug a spade deep to recover the stolen real one beneath a bridge span.",
          "focusQuote": "The apprentice demanded a specific specification, asking him specifically to specify the crystal’s limits."
        },
        "explanation": "学徒要求具体说明水晶的限制；金钱和桥长不属于该询问。"
      },
      {
        "type": "detail",
        "prompt": "What exposed the crystal as a forgery?",
        "options": [
          "The specialist's forged spear breaking.",
          "The rare bird's feather disappearing.",
          "Its altered light spectrum.",
          "The atlas showing only a small spacecraft."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The apprentice demanded a specific specification, asking him specifically to specify the crystal’s limits. A rare bird species supplied the feather specimen inside it. When the atlas opened, a spectacular spectacle drew every spectator. Yet its altered light spectrum betrayed the forged crystal. The apprentice refused to speculate beyond the evidence and dug a spade deep to recover the stolen real one beneath a bridge span.",
          "focusQuote": "Yet its altered light spectrum betrayed the forged crystal."
        },
        "explanation": "变化的光谱揭露假水晶；光彩场面并没有保证真品。"
      },
      {
        "type": "inference",
        "prompt": "What does the apprentice's response to the spectacle show?",
        "options": [
          "She accepted the specialist's claims because the audience was amazed.",
          "She rejected the atlas before checking the crystal.",
          "She concluded that every navigation specialist was dishonest.",
          "She gave measurable evidence greater weight than an impressive display."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The apprentice demanded a specific specification, asking him specifically to specify the crystal’s limits. A rare bird species supplied the feather specimen inside it. When the atlas opened, a spectacular spectacle drew every spectator. Yet its altered light spectrum betrayed the forged crystal. The apprentice refused to speculate beyond the evidence and dug a spade deep to recover the stolen real one beneath a bridge span.",
          "focusQuote": "When the atlas opened, a spectacular spectacle drew every spectator. Yet its altered light spectrum betrayed the forged crystal. The apprentice refused to speculate beyond the evidence and dug a spade deep to recover the stolen real one beneath a bridge span."
        },
        "explanation": "学徒查具体参数、光谱并拒绝超出证据猜测，说明重核验；没有全盘否定所有专家。"
      }
    ]
  },
  {
    "id": "expansion-c-038",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had the man witnessed before being trapped?",
        "options": [
          "The doctor placing a sphere inside a sponsor badge.",
          "A spokesman repairing the spiral stairs.",
          "A guard spilling poison and turning the jar to hide it.",
          "The donor offering treatment for his spine."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A spider web marked the jar. The man had seen a guard spill poison, then spin the jar to conceal it. His damaged spine needed spinal treatment, and the spiral stairs had made escape impossible. The guard called him an evil spirit and tried to spit at him in spite.",
          "focusQuote": "The man had seen a guard spill poison, then spin the jar to conceal it."
        },
        "explanation": "他见到守卫洒毒并转动罐子掩盖；医生和发言人不是此行为主体。"
      },
      {
        "type": "detail",
        "prompt": "What offer did the doctor reject?",
        "options": [
          "A basin to clean the guard's sleeve.",
          "Spinal treatment for the injured man.",
          "A glossary to recover the man's speech.",
          "A prize in exchange for splitting her testimony."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A splash from the doctor’s basin exposed the guard’s stained sleeve. A spokesman promised a splendid prize if she would split her testimony, but she would not spoil the evidence. She wiped it with a sponge, found the donor’s name on a sponsor badge, and took the man to safety. His first recovered word identified the guard.",
          "focusQuote": "A spokesman promised a splendid prize if she would split her testimony, but she would not spoil the evidence."
        },
        "explanation": "发言人以奖赏换分裂证词，医生拒绝破坏证据；并非拒绝治疗。"
      },
      {
        "type": "inference",
        "prompt": "How did the man's condition affect the investigation?",
        "options": [
          "He could supply investigative clues even while unable to speak.",
          "It made his recovered identification of the guard irrelevant.",
          "It proved that the hidden sphere caused every injury.",
          "It required the doctor to accept the spokesman's version."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A man lost his speech after climbing a spherical tower. The doctor tested the speed of his pulse, then asked him to spell one word. His spelling pointed to a small sphere hidden inside a jar of spice.",
          "focusQuote": "A man lost his speech after climbing a spherical tower. The doctor tested the speed of his pulse, then asked him to spell one word. His spelling pointed to a small sphere hidden inside a jar of spice."
        },
        "explanation": "失语时仍通过拼字指向香料罐中的小球，说明不能说话不等于不能提供调查线索。"
      }
    ]
  },
  {
    "id": "expansion-c-039",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why had the sportsman's spouse been held captive?",
        "options": [
          "She had damaged the vendor's squirrel cage.",
          "She had refused to buy growth powder.",
          "She had organized the crowd's perfume spray.",
          "She had witnessed the ticket theft."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The powder was theft-marking dye. The vendor planned to stab customers who followed him, so the athlete disarmed him with the spoon. A stable cart provided stability for the rescued woman; ropes would stabilize its broken wheel. Behind a stack of crates they found stolen entrance tickets for the town stadium. The missing woman had been held because she saw the theft.",
          "focusQuote": "The missing woman had been held because she saw the theft."
        },
        "explanation": "结尾明确她因目睹盗窃而被扣留；拒买粉末和损坏兽笼均未提及。"
      },
      {
        "type": "detail",
        "prompt": "How did the sportsman stop the vendor from attacking customers?",
        "options": [
          "He disarmed him using the spoon.",
          "He sprayed the vendor with plant powder.",
          "He drove the broken cart into the fruit stall.",
          "He asked the spy to squeeze the pouch."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The powder was theft-marking dye. The vendor planned to stab customers who followed him, so the athlete disarmed him with the spoon. A stable cart provided stability for the rescued woman; ropes would stabilize its broken wheel. Behind a stack of crates they found stolen entrance tickets for the town stadium. The missing woman had been held because she saw the theft.",
          "focusQuote": "The vendor planned to stab customers who followed him, so the athlete disarmed him with the spoon."
        },
        "explanation": "运动员用勺子解除武装；粉末实际上是防盗标记染料，不是防卫方式。"
      },
      {
        "type": "inference",
        "prompt": "What does the discovery about the powder imply about the vendor's sales claim?",
        "options": [
          "The powder had successfully accelerated the squash's growth.",
          "The growth claim disguised the powder's actual use as a marking dye.",
          "The powder was a perfume developed by the rescue squad.",
          "The vendor's claim explained why the cart's wheel was broken."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The powder was theft-marking dye. The vendor planned to stab customers who followed him, so the athlete disarmed him with the spoon. A stable cart provided stability for the rescued woman; ropes would stabilize its broken wheel. Behind a stack of crates they found stolen entrance tickets for the town stadium. The missing woman had been held because she saw the theft.",
          "focusQuote": "The powder was theft-marking dye."
        },
        "explanation": "商贩说促生长，后文揭示是盗窃标记染料，说明宣传遮蔽用途；没有长得快的实证。"
      }
    ]
  },
  {
    "id": "expansion-c-040",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the judge encourage the cook to give evidence?",
        "options": [
          "She let him describe events from his own standpoint without startling him.",
          "She demanded that he repeat the statesman's account.",
          "She required him to repair the blocked staircase first.",
          "She asked him to identify the tea stain before speaking."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The kitchen’s staple bread was stale, and a severed herb stalk lay by the stall. The cook would stammer when asked to state what happened. A judge did not startle him; she let him give a statement from his own standpoint.",
          "focusQuote": "A judge did not startle him; she let him give a statement from his own standpoint."
        },
        "explanation": "法官不惊吓结巴厨师，让他按自己的视角陈述；没有要求复述官员版本。"
      },
      {
        "type": "detail",
        "prompt": "What exposed the missing food deliveries?",
        "options": [
          "A stainless badge stained with tea.",
          "A receipt found among stationery.",
          "The cook's description of stale bread alone.",
          "A severed herb stalk beside the stall."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The inquiry found that workers faced starvation, while a statesman had diverted food. They would starve if a rigid standard stayed unchanged. The judge proposed to standardize inspections, checking a static display against a stationary camera. A receipt among the stationery exposed the missing deliveries. The official resigned, and the kitchens reopened.",
          "focusQuote": "A receipt among the stationery exposed the missing deliveries."
        },
        "explanation": "文具中的收据揭示漏送食品；茶渍和面包只是场景或异常信息，非最终凭证。"
      },
      {
        "type": "inference",
        "prompt": "What outcome was the proposed inspection reform intended to support?",
        "options": [
          "Replacing every kitchen worker with a statesman.",
          "Keeping kitchens closed until all bread became stale.",
          "More dependable checks on food deliveries to prevent further deprivation.",
          "Removing the need to compare displays with camera records."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The inquiry found that workers faced starvation, while a statesman had diverted food. They would starve if a rigid standard stayed unchanged. The judge proposed to standardize inspections, checking a static display against a stationary camera. A receipt among the stationery exposed the missing deliveries. The official resigned, and the kitchens reopened.",
          "focusQuote": "The judge proposed to standardize inspections, checking a static display against a stationary camera. A receipt among the stationery exposed the missing deliveries."
        },
        "explanation": "挪用食品使工人挨饿，法官提出标准化检查并核对影像，目的可推为可靠监管配送；不是取消核对。"
      }
    ]
  },
  {
    "id": "expansion-c-041",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why was the royal claim that every worker was content misleading?",
        "options": [
          "The clerk had interviewed no one of high status.",
          "The statistics excluded poorer people and counted high-status people.",
          "The royal office had included votes from every worker.",
          "The cook had refused to gather witnesses."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A statistical clerk questioned a royal statistic: every worker was supposedly content. The statistics counted only people of high status. A statute barred poorer voices from the vote, while a triumphant statue stood outside the office.",
          "focusQuote": "The statistics counted only people of high status. A statute barred poorer voices from the vote, while a triumphant statue stood outside the office."
        },
        "explanation": "统计只数高地位者、法规又排除贫困者，不能代表所有工人；不是已覆盖所有人。"
      },
      {
        "type": "detail",
        "prompt": "What did the plant stem in the statue's base indicate?",
        "options": [
          "The location of the cook's steel stove.",
          "The steamer's scheduled departure point.",
          "The hiding place of stolen ballots.",
          "The official's approved voting rule."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The clerk took a step toward the statue and found a plant stem stuffed in its base. It marked the hiding place of stolen ballots. The official had tried to steal them while a stereo played above. A stern judge rejected his stereotype of ignorant workers and opened the vote to everyone.",
          "focusQuote": "The clerk took a step toward the statue and found a plant stem stuffed in its base. It marked the hiding place of stolen ballots."
        },
        "explanation": "植物茎标记藏被盗选票的位置；轮船是可能的撤离工具。"
      },
      {
        "type": "inference",
        "prompt": "What did opening the vote to everyone change?",
        "options": [
          "It confirmed the original claim of universal worker satisfaction.",
          "It made the recovered ballots unnecessary evidence of theft.",
          "It transferred all voting power to the ship's crew.",
          "It removed an exclusion that had distorted representation."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The clerk took a step toward the statue and found a plant stem stuffed in its base. It marked the hiding place of stolen ballots. The official had tried to steal them while a stereo played above. A stern judge rejected his stereotype of ignorant workers and opened the vote to everyone.",
          "focusQuote": "A stern judge rejected his stereotype of ignorant workers and opened the vote to everyone."
        },
        "explanation": "法官拒绝对工人的刻板印象并开放投票，纠正此前排斥穷人；并未证实原统计。"
      }
    ]
  },
  {
    "id": "expansion-c-042",
    "questions": [
      {
        "type": "detail",
        "prompt": "What caused the porter's stomach pain?",
        "options": [
          "Salt water entering the upper storey.",
          "A remedy stirred by his neighbor.",
          "Poison concealed beneath a crooked stitch.",
          "Smoke from a fire that had already killed workers."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The porter felt stiffness in his knee. He used a stick to stoop toward a sticky package and watched the glue stiffen. Inside a torn stocking, a crooked stitch covered poison. Its sting made his stomach ache, but a neighbor hurried to stir a remedy.",
          "focusQuote": "Inside a torn stocking, a crooked stitch covered poison. Its sting made his stomach ache, but a neighbor hurried to stir a remedy."
        },
        "explanation": "破袜子的歪针脚下藏毒，毒性令他胃疼；邻居药方是救助，不是原因。"
      },
      {
        "type": "detail",
        "prompt": "Why had the fire alarm been activated?",
        "options": [
          "To summon them to move all stock indoors safely.",
          "To warn the neighbor not to prepare a remedy.",
          "To announce that the porter's leg had recovered.",
          "To force workers outside as part of an insurance-fire scheme."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "After the frightening stillness, he gave a straightforward account. A small stimulus had been used to stimulate a fire alarm and drive workers outside. He would straighten his stiff leg and help inspectors recover the package. The stockholder had engineered an insurance fire; the storm extinguished it before anyone died.",
          "focusQuote": "A small stimulus had been used to stimulate a fire alarm and drive workers outside. He would straighten his stiff leg and help inspectors recover the package. The stockholder had engineered an insurance fire; the storm extinguished it before anyone died."
        },
        "explanation": "人为触发警报赶工人出屋，股东设计保险纵火；不是单纯安全搬货。"
      },
      {
        "type": "inference",
        "prompt": "What prevented the stockholder's scheme from causing deaths?",
        "options": [
          "The storm put out the engineered fire in time.",
          "The stockholder had moved every worker's belongings indoors.",
          "The porter disabled the alarm before it sounded.",
          "The hidden poison neutralized the flames automatically."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "After the frightening stillness, he gave a straightforward account. A small stimulus had been used to stimulate a fire alarm and drive workers outside. He would straighten his stiff leg and help inspectors recover the package. The stockholder had engineered an insurance fire; the storm extinguished it before anyone died.",
          "focusQuote": "The stockholder had engineered an insurance fire; the storm extinguished it before anyone died."
        },
        "explanation": "风暴在死亡发生前灭火；这是外部天气阻断后果，不能归功于股东安全措施。"
      }
    ]
  },
  {
    "id": "expansion-c-043",
    "questions": [
      {
        "type": "detail",
        "prompt": "What physical problem threatened to strand the boat?",
        "options": [
          "A basket of strawberries blocked the watchtower.",
          "A cloth strip stopped the river's current.",
          "The captain removed every rescue rope.",
          "A frayed strap placed it under strain."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A stranger sought passage through the strait. The harbor’s strategic watchtower followed a rescue strategy, but a frayed strap put the boat under strain. It could strand everyone on a sandbank.",
          "focusQuote": "The harbor’s strategic watchtower followed a rescue strategy, but a frayed strap put the boat under strain. It could strand everyone on a sandbank."
        },
        "explanation": "磨损带子使船受力，可能搁浅；草莓是罪犯藏身物，不是该航行风险。"
      },
      {
        "type": "detail",
        "prompt": "What did the sailor notice that helped expose the criminal?",
        "options": [
          "A striped string beside a blue-striped cloth strip.",
          "The stranger's rescue permit in the captain's room.",
          "A hidden map behind the strategic watchtower.",
          "The captain's replacement strap beneath the deck."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "Under stress, she ordered the crew to stretch a line. A strict sailor followed strictly, taking a long stride toward the stern. He saw the criminal’s striped string beside a cloth strip with a blue stripe. There was brief strife, then a single strike disarmed the man. Everyone continued to strive for shore, and the captain’s striking courage saved them.",
          "focusQuote": "He saw the criminal’s striped string beside a cloth strip with a blue stripe."
        },
        "explanation": "船员发现罪犯的条纹绳及蓝纹布条，随后冲突并解除武装；未提到许可证或地图。"
      },
      {
        "type": "main",
        "prompt": "Which description best captures the captain's challenge?",
        "options": [
          "Choosing a new watchtower site after reaching shore safely.",
          "Managing a strained rescue voyage while confronting a concealed criminal.",
          "Transporting strawberries to finance a harbor construction plan.",
          "Teaching a stranger to navigate without any crew assistance."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Under stress, she ordered the crew to stretch a line. A strict sailor followed strictly, taking a long stride toward the stern. He saw the criminal’s striped string beside a cloth strip with a blue stripe. There was brief strife, then a single strike disarmed the man. Everyone continued to strive for shore, and the captain’s striking courage saved them.",
          "focusQuote": "He saw the criminal’s striped string beside a cloth strip with a blue stripe. There was brief strife, then a single strike disarmed the man. Everyone continued to strive for shore, and the captain’s striking courage saved them."
        },
        "explanation": "全篇结合绳索和水流造成的航行压力、暗藏罪犯与成功救人；不以运草莓或建塔为主。"
      }
    ]
  },
  {
    "id": "expansion-c-044",
    "questions": [
      {
        "type": "detail",
        "prompt": "What plan did the apprentice find behind the carved stump?",
        "options": [
          "Sketches for submerging stolen paintings using a submarine.",
          "Drawings for replacing the studio's damaged beam.",
          "Instructions for treating the artist's stroke.",
          "A list of friends permitted to enter the studio."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A sturdy apprentice would not stumble over the visitor’s discarded stuff. Behind a carved stump she found sketches of a submarine and plans to submerge stolen paintings. The thief wanted to stun the artist with medicine and called the apprentice stupid.",
          "focusQuote": "Behind a carved stump she found sketches of a submarine and plans to submerge stolen paintings."
        },
        "explanation": "树桩后图纸涉及潜艇和沉藏赃画；不是修梁或医疗方案。"
      },
      {
        "type": "detail",
        "prompt": "How did the artist's friends respond to the intruder?",
        "options": [
          "They accepted his demand that the artist remain inside.",
          "They searched the studio, restrained him, and submitted evidence.",
          "They submerged the paintings before contacting investigators.",
          "They dismissed the apprentice's findings as subjective."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The artist’s unique style had inspired a harbor subculture. Friends would subdivide the studio to search, subdue the intruder, and submit evidence rather than make a subjective accusation. A subordinate investigator made the submarine plan the subject of inquiry. The artist recovered and painted the rescuers.",
          "focusQuote": "Friends would subdivide the studio to search, subdue the intruder, and submit evidence rather than make a subjective accusation."
        },
        "explanation": "朋友分区搜寻、制服闯入者并呈交证据；不是照盗贼的计划藏画。"
      },
      {
        "type": "inference",
        "prompt": "Why did the submarine sketches matter to the inquiry?",
        "options": [
          "They showed that the artist intended to abandon his unique style.",
          "They proved that the apprentice had designed the damaged beam.",
          "They provided physical evidence of a planned painting theft.",
          "They justified giving the artist more of the intruder's medicine."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A sturdy apprentice would not stumble over the visitor’s discarded stuff. Behind a carved stump she found sketches of a submarine and plans to submerge stolen paintings. The thief wanted to stun the artist with medicine and called the apprentice stupid.",
          "focusQuote": "Behind a carved stump she found sketches of a submarine and plans to submerge stolen paintings."
        },
        "explanation": "调查以潜艇计划为对象，朋友呈交证据而非主观指责；图纸说明盗画方案，并非艺术家画风变化。"
      }
    ]
  },
  {
    "id": "expansion-c-045",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was wrong with the delivered food box?",
        "options": [
          "Its address contained no required subscript code.",
          "Cheap replacement material differed from the promised grain.",
          "It included grain from an unrelated honest successor.",
          "Its contents were heavier than the paid-for shipment."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The delivered substance was substantially different from the promised grain. A cheap substitute had replaced it. A subtle stain let the buyer subtract the empty box’s weight and prove the shortfall. A subway cleaner helped recover discarded labels.",
          "focusQuote": "The delivered substance was substantially different from the promised grain. A cheap substitute had replaced it."
        },
        "explanation": "收到的是便宜替代物且短缺；地址编码是订阅要求，未说缺失，重量也非超量。"
      },
      {
        "type": "detail",
        "prompt": "How did the buyer establish that the box was short of goods?",
        "options": [
          "She compared only the subscription prices.",
          "She counted the subsidiary company's employees.",
          "She deducted the empty box's weight.",
          "She ignored the stain and discarded labels."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The delivered substance was substantially different from the promised grain. A cheap substitute had replaced it. A subtle stain let the buyer subtract the empty box’s weight and prove the shortfall. A subway cleaner helped recover discarded labels.",
          "focusQuote": "A subtle stain let the buyer subtract the empty box’s weight and prove the shortfall."
        },
        "explanation": "称重时扣除空箱重量，从而证明货物不足；价格变化本身不能证明净重。"
      },
      {
        "type": "inference",
        "prompt": "What made the buyer's case effective despite the organizer's confusion?",
        "options": [
          "The organizer agreed immediately that the replacement was better.",
          "The cleaner returned the entire subsidy without a hearing.",
          "The family cancelled its subscription before receiving any box.",
          "Consistent tests and shipment tracing produced a clear chain of evidence."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The organizer expected to succeed through confusion, but the buyer’s success changed the succeeding hearing. Two successive tests were successful, and she successfully traced the shipments. After a clear succession of evidence, the organizer’s honest successor returned the stolen subsidy.",
          "focusQuote": "Two successive tests were successful, and she successfully traced the shipments. After a clear succession of evidence, the organizer’s honest successor returned the stolen subsidy."
        },
        "explanation": "连续两次成功检测与追踪货运构成清晰证据，促成追回补贴；不是对方立即认错或清洁工退款。"
      }
    ]
  },
  {
    "id": "expansion-c-046",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the medic reject relying on a single open window?",
        "options": [
          "The guest had requested that every window remain closed.",
          "The fan could safely store the powder away from guests.",
          "Adequate airflow had to reach the room quickly enough.",
          "The room's labels had already explained the deaths as suicide."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The manager’s suggestion was to call it suicide, but the medic rejected that guess. A safe room must suit its guests and contain suitable ventilation. The victims would suffer if a window did not suffice. Sufficient airflow had to reach the room sufficiently quickly.",
          "focusQuote": "The victims would suffer if a window did not suffice. Sufficient airflow had to reach the room sufficiently quickly."
        },
        "explanation": "窗户未必足够，必须及时有足量通风；标签不能证明自杀，坏风扇反而会吸来烟气。"
      },
      {
        "type": "detail",
        "prompt": "What linked the two differently spelled labels to the manager?",
        "options": [
          "The survivor had written both labels after suing.",
          "The medic had printed the delivery slip herself.",
          "The suitcase belonged to the manager's repair contractor.",
          "Both spellings appeared on his invoices."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A survivor chose to sue. The medic calculated the sum of unpaid repairs, then would summarize them in a summary. Both spellings on the labels belonged to the manager’s invoices. He had stored the powder beside a furnace despite repeated warnings; the deaths were investigated as negligent poisoning.",
          "focusQuote": "Both spellings on the labels belonged to the manager’s invoices."
        },
        "explanation": "两种拼写都来自经理发票，建立管理责任线索；不是幸存者诉讼后编写。"
      },
      {
        "type": "inference",
        "prompt": "Why was negligent poisoning a better-supported explanation than suicide?",
        "options": [
          "The manager had stored hazardous powder near a furnace despite repeated warnings.",
          "Every guest had independently asked to stop breathing the fumes.",
          "The differing spellings showed that two unrelated chemicals were present.",
          "The repairs had all been paid for before the odor appeared."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A survivor chose to sue. The medic calculated the sum of unpaid repairs, then would summarize them in a summary. Both spellings on the labels belonged to the manager’s invoices. He had stored the powder beside a furnace despite repeated warnings; the deaths were investigated as negligent poisoning.",
          "focusQuote": "He had stored the powder beside a furnace despite repeated warnings; the deaths were investigated as negligent poisoning."
        },
        "explanation": "反复警告后仍在炉旁存粉末、欠修造成危险，支持过失中毒；异体拼写不是两种化学品。"
      }
    ]
  },
  {
    "id": "expansion-c-047",
    "questions": [
      {
        "type": "detail",
        "prompt": "What produced the frightening roar at the mountain?",
        "options": [
          "The ordinary wind bells turning gold.",
          "The disciple's cooling supplement breaking.",
          "The brother calling the gate impressive.",
          "A jet from a concealed air nozzle."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "The mountain superintendent claimed superior knowledge and boasted of his superiority. A supersonic jet from a concealed air nozzle made a roar that frightened visitors into superstition. The disciple asked to supervise repairs; proper supervision could expose it.",
          "focusQuote": "A supersonic jet from a concealed air nozzle made a roar that frightened visitors into superstition."
        },
        "explanation": "隐藏喷气嘴产生超音速气流和轰鸣；金色铃铛是日光效果，不是怪响源。"
      },
      {
        "type": "detail",
        "prompt": "What had the disciple added by sunset?",
        "options": [
          "Cooling support and supplementary braces.",
          "A new title for the mountain superintendent.",
          "A report suppressing the academy's concerns.",
          "A second nozzle to make the roar stronger."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "By sunset, she had added a cooling supplement and supplementary braces. The academy would supply honest support, though officials did suppose the master might suppress the report. No supreme title could hide the lie. The mountain would surely recover its peaceful music once the device was removed.",
          "focusQuote": "By sunset, she had added a cooling supplement and supplementary braces."
        },
        "explanation": "她加入冷却补件及辅助支撑；未新增喷嘴或给总管封号。"
      },
      {
        "type": "inference",
        "prompt": "What was the superintendent's authority being used to sustain?",
        "options": [
          "An open explanation of the nozzle's technical function.",
          "A misleading supernatural explanation for a concealed device.",
          "The disciple's right to publish every repair immediately.",
          "A verified claim that no repairs were needed."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The mountain superintendent claimed superior knowledge and boasted of his superiority. A supersonic jet from a concealed air nozzle made a roar that frightened visitors into superstition. The disciple asked to supervise repairs; proper supervision could expose it.",
          "focusQuote": "The mountain superintendent claimed superior knowledge and boasted of his superiority. A supersonic jet from a concealed air nozzle made a roar that frightened visitors into superstition."
        },
        "explanation": "总管自夸高人一等，隐藏喷嘴使访客陷入迷信；其权威包装了误导，不是技术公开。"
      }
    ]
  },
  {
    "id": "expansion-c-048",
    "questions": [
      {
        "type": "detail",
        "prompt": "What made the hospital's finances suspicious after the flood?",
        "options": [
          "Donations exceeded costs, yet the surplus disappeared.",
          "Costs exceeded every donation, leaving no possible surplus.",
          "The surgeon refused to operate without payment.",
          "The missing surname belonged to all the donors."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A surge flooded the hospital. A surgeon performed surgery on a survivor whose surname was missing from the list. Donations began to surpass costs, but the surplus vanished. This was surprising, and surprisingly the treasurer offered to surrender no records.",
          "focusQuote": "Donations began to surpass costs, but the surplus vanished."
        },
        "explanation": "捐赠超出费用却余款不见，且财务主管拒交记录；不是本来没有剩余。"
      },
      {
        "type": "detail",
        "prompt": "Where had the treasurer hidden supplies?",
        "options": [
          "Under the hospital's surgical table.",
          "In a swamp near a white swan.",
          "On a soldier's survey route inside the storeroom.",
          "Behind the patient's incomplete name record."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A susceptible patient refused to swallow the medicine after recognizing the treasurer as a suspect. His suspension from duties could sustain the investigation. Under pressure, he admitted hiding supplies in a swamp near a white swan. Surgeons recovered them, and the missing surname finally returned to the record.",
          "focusQuote": "Under pressure, he admitted hiding supplies in a swamp near a white swan."
        },
        "explanation": "供认藏货在白天鹅附近的沼泽；姓名记录缺失并非实体藏货地点。"
      },
      {
        "type": "inference",
        "prompt": "Why was recovering the supplies urgent?",
        "options": [
          "It was necessary to replace every surgeon's surname.",
          "The supplies were needed to increase the treasurer's surplus.",
          "Food availability was essential to survivors' continued survival.",
          "The floods had left all patients unable to use medicine."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "Doctors asked soldiers to surround the storeroom while surveying the surrounding streets. The town’s surroundings needed a careful survey for other victims. Survival depended on food arriving soon; even strong people could not survive long without it.",
          "focusQuote": "Survival depended on food arriving soon; even strong people could not survive long without it."
        },
        "explanation": "医生明确生存依赖食品尽快送达，即便强壮者也撑不了太久；不是为了增加财务余额。"
      }
    ]
  },
  {
    "id": "expansion-c-049",
    "questions": [
      {
        "type": "detail",
        "prompt": "What happened when the keeper used syrup near the bees?",
        "options": [
          "The bees stopped responding to reflected light.",
          "The swarm increased rather than dispersed.",
          "The traveler's sweater was exchanged immediately.",
          "The hidden switch became permanently unusable."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The keeper tried to sweep the bees away and sweeten the air with syrup. Its sweetness made the swarm swell. A swift movement of the traveler’s arm made the sword swing, striking a hidden switch. The bees were a symbol of the keeper’s guild, and their symbolic dance depended on reflected light.",
          "focusQuote": "Its sweetness made the swarm swell."
        },
        "explanation": "糖浆甜味使蜂群膨胀，未达到扫走蜜蜂的目的；不是关闭反光反应。"
      },
      {
        "type": "detail",
        "prompt": "What had caused the abnormal behavior of the bees?",
        "options": [
          "The traveler's sweater carried a mysterious curse.",
          "The musician's symphony changed their species.",
          "A blocked mirror interrupted reflected light.",
          "The keeper's guild had replaced the bees with a different swarm."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A sympathetic musician noticed the mirrors’ symmetry. She could sympathize with the frightened crowd without losing reason. Her quiet symphony calmed the keeper; at a later symposium, she explained that a blocked mirror caused the bee symptom, not a curse or a mysterious syndrome. The sword’s blow had accidentally restored the light.",
          "focusQuote": "Her quiet symphony calmed the keeper; at a later symposium, she explained that a blocked mirror caused the bee symptom, not a curse or a mysterious syndrome."
        },
        "explanation": "音乐家解释镜子被挡导致异常；不是诅咒或换蜂群。"
      },
      {
        "type": "inference",
        "prompt": "How should the traveler's sword movement be interpreted in light of the explanation?",
        "options": [
          "It permanently removed the bees' dependence on mirrors.",
          "It proved that his promise about not disturbing bees was false.",
          "It was a planned performance directed by the musician.",
          "It accidentally restored the light rather than deliberately causing a curse."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A sympathetic musician noticed the mirrors’ symmetry. She could sympathize with the frightened crowd without losing reason. Her quiet symphony calmed the keeper; at a later symposium, she explained that a blocked mirror caused the bee symptom, not a curse or a mysterious syndrome. The sword’s blow had accidentally restored the light.",
          "focusQuote": "The sword’s blow had accidentally restored the light."
        },
        "explanation": "剑击意外恢复光线，所以不能从挥剑直接推成故意施咒；文本也没有音乐家策划演出。"
      }
    ]
  },
  {
    "id": "expansion-c-050",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why had the assistant removed the sample tag?",
        "options": [
          "To improve the chemist's batch records.",
          "To reward the boy's animal-training talent.",
          "To conceal contamination.",
          "To correct the tailor's customer address."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The boy could tame the animal, but its fur had turned tan after chemical exposure. He found a wire tangle in the water tank. A parked tanker was leaking into its feed. The assistant had removed the tag to hide contamination, and the chemist recalled every affected tablet.",
          "focusQuote": "The assistant had removed the tag to hide contamination, and the chemist recalled every affected tablet."
        },
        "explanation": "助手移走标签为了掩盖污染；并非改善原本系统记录。"
      },
      {
        "type": "detail",
        "prompt": "What was contaminating the animal's feed?",
        "options": [
          "The tailor's tack holding the sample tag.",
          "The boy's method of taming the animal.",
          "A recalled tablet recorded as safe.",
          "Leakage from a parked tanker."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The boy could tame the animal, but its fur had turned tan after chemical exposure. He found a wire tangle in the water tank. A parked tanker was leaking into its feed. The assistant had removed the tag to hide contamination, and the chemist recalled every affected tablet.",
          "focusQuote": "A parked tanker was leaking into its feed."
        },
        "explanation": "停放油罐车泄漏进入饲料；毛变棕提示化学接触，但训练方式不是污染源。"
      },
      {
        "type": "inference",
        "prompt": "What did the chemist's final action prioritize?",
        "options": [
          "Protecting users by recalling all affected tablets.",
          "Preserving the assistant's reputation by keeping the tag hidden.",
          "Selling the remaining tablets before testing the water.",
          "Replacing patient investigation with an immediate accusation."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The boy could tame the animal, but its fur had turned tan after chemical exposure. He found a wire tangle in the water tank. A parked tanker was leaking into its feed. The assistant had removed the tag to hide contamination, and the chemist recalled every affected tablet.",
          "focusQuote": "The assistant had removed the tag to hide contamination, and the chemist recalled every affected tablet."
        },
        "explanation": "她召回全部受影响药片，说明把安全处置放在首位；没有为助手隐瞒。"
      }
    ]
  },
  {
    "id": "expansion-c-051",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why had the smugglers changed the tariff notice?",
        "options": [
          "To replace the damaged telegraph with a telex.",
          "To fund genuine school teaching materials.",
          "To guide the volunteer team to the telescope shop.",
          "To avoid tax on their cargo."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A technician gave a technical explanation of the telegraph damage. New technology required a different technique, and repairing the old telex was tedious. The smugglers had altered a tariff notice to evade a cargo tax, disguising their shipment as school teaching materials.",
          "focusQuote": "The smugglers had altered a tariff notice to evade a cargo tax, disguising their shipment as school teaching materials."
        },
        "explanation": "改税则通知是为了逃避货物税，教具只是伪装；不是维修电报费用。"
      },
      {
        "type": "detail",
        "prompt": "Where did officers find the contraband?",
        "options": [
          "Behind crates at a telescope shop.",
          "Inside the repaired telecommunications valve.",
          "Beneath the volunteer team's school desks.",
          "On the clerk's new tariff notice."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A volunteer team followed the footprints to a telescope shop. The clerk tried to tease the boy, then tear the message. But the boy remembered the contraband’s bitter taste. Officers found it behind telescope crates. The boy’s steady temperament overcame his fear, and the telegram was restored.",
          "focusQuote": "Officers found it behind telescope crates."
        },
        "explanation": "沿脚印到望远镜店，警官在望远镜箱后找到违禁品；不是管阀或文件中。"
      },
      {
        "type": "inference",
        "prompt": "What made the teenager useful even when the clerk tried to destroy the message?",
        "options": [
          "He had already replaced the tariff rules himself.",
          "He retained information about the contraband despite his fear.",
          "He could repair every telegraph without a technician.",
          "He had no emotional reaction to the confrontation."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A volunteer team followed the footprints to a telescope shop. The clerk tried to tease the boy, then tear the message. But the boy remembered the contraband’s bitter taste. Officers found it behind telescope crates. The boy’s steady temperament overcame his fear, and the telegram was restored.",
          "focusQuote": "But the boy remembered the contraband’s bitter taste. Officers found it behind telescope crates. The boy’s steady temperament overcame his fear, and the telegram was restored."
        },
        "explanation": "男孩记得违禁品苦味并克服恐惧，纸条遭撕仍能帮助查证；不是毫无害怕。"
      }
    ]
  },
  {
    "id": "expansion-c-052",
    "questions": [
      {
        "type": "detail",
        "prompt": "Why did the healer tentatively plan to relocate the group?",
        "options": [
          "The tent ropes were dangerously weak in storms.",
          "The terrace had already been purchased by the priest.",
          "The child had recovered before any treatment.",
          "The prayer bells needed a faster rhythm."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "She would tend the child despite his father’s tense silence. A tender song eased the tension. Their tent stood on a terrace above rough terrain. Its ropes had poor tensile strength, a dangerous tendency during storms. The healer made a tentative plan to move everyone.",
          "focusQuote": "Its ropes had poor tensile strength, a dangerous tendency during storms. The healer made a tentative plan to move everyone."
        },
        "explanation": "帐篷绳抗拉强度差，暴风雨中危险，因此拟转移；并非孩子先痊愈。"
      },
      {
        "type": "detail",
        "prompt": "What did consulting the medical glossary enable her to do?",
        "options": [
          "Collect the priest's promised gold safely.",
          "Stop a harmful infusion.",
          "Repair every rope on the terrace.",
          "Confirm the priest's claim of a miracle."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The local terminal displayed an unfamiliar medical term. A glossary of terminology let her terminate a harmful infusion. She was not terrified by the priest’s terrible threats or claims of a terrific miracle. This was his territory, but the child recovered after clean water and proper care.",
          "focusQuote": "A glossary of terminology let her terminate a harmful infusion."
        },
        "explanation": "术语表帮助理解医疗词并终止有害输液；绳索修理和黄金无关。"
      },
      {
        "type": "inference",
        "prompt": "What best accounts for the child's recovery?",
        "options": [
          "The healer's acceptance of gold and faster prayer bells.",
          "A stronger infusion of the same harmful medicine.",
          "Clean water and appropriate care rather than the priest's threatened miracle claim.",
          "The father's silence preventing any diagnosis."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The local terminal displayed an unfamiliar medical term. A glossary of terminology let her terminate a harmful infusion. She was not terrified by the priest’s terrible threats or claims of a terrific miracle. This was his territory, but the child recovered after clean water and proper care.",
          "focusQuote": "This was his territory, but the child recovered after clean water and proper care."
        },
        "explanation": "结尾明确清水与妥当护理后康复，神迹宣称未获支持；继续有害输液与行动相反。"
      }
    ]
  },
  {
    "id": "expansion-c-053",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the warm locker contain?",
        "options": [
          "An explosive device intended to destroy the theatre.",
          "A timed heater used in a stage illusion.",
          "The missing charity money in a textile bag.",
          "A thermometer stolen by the survivor."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A thermal camera and a thermometer found a warm locker, thereby uncovering a timed heater therein. An officer could therefore reject the supposed explosive device. The maker’s thesis and fragments thereof explained the harmless stage illusion. The real criminal used the terror threat to steal charity money, not to destroy the theatre.",
          "focusQuote": "A thermal camera and a thermometer found a warm locker, thereby uncovering a timed heater therein. An officer could therefore reject the supposed explosive device. The maker’s thesis and fragments thereof explained the harmless stage illusion."
        },
        "explanation": "热像仪和温度计找到暖柜，柜内是定时加热器，之后认定舞台幻术无害；不是炸弹。"
      },
      {
        "type": "detail",
        "prompt": "What was the criminal's actual objective?",
        "options": [
          "Destroying the theatre during Thanksgiving.",
          "Publishing a new theorem about repeated patterns.",
          "Stealing charity money under cover of the threat.",
          "Helping the costumer replace every stolen curtain."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A thermal camera and a thermometer found a warm locker, thereby uncovering a timed heater therein. An officer could therefore reject the supposed explosive device. The maker’s thesis and fragments thereof explained the harmless stage illusion. The real criminal used the terror threat to steal charity money, not to destroy the theatre.",
          "focusQuote": "The real criminal used the terror threat to steal charity money, not to destroy the theatre."
        },
        "explanation": "真实目标是借恐怖威胁偷慈善款，明确不是毁剧院；研究定理是线索而非犯罪目标。"
      },
      {
        "type": "inference",
        "prompt": "Why were the maker's thesis and its fragments useful?",
        "options": [
          "They showed the survivor had invented the cloth theft.",
          "They confirmed that the thermal camera could not locate heat.",
          "They eliminated the need to investigate the missing money.",
          "They explained the apparently dangerous setup as a harmless stage effect."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A thermal camera and a thermometer found a warm locker, thereby uncovering a timed heater therein. An officer could therefore reject the supposed explosive device. The maker’s thesis and fragments thereof explained the harmless stage illusion. The real criminal used the terror threat to steal charity money, not to destroy the theatre.",
          "focusQuote": "The maker’s thesis and fragments thereof explained the harmless stage illusion."
        },
        "explanation": "制作人的论文及碎片解释无害舞台幻象，有助排除爆炸装置；排除炸弹不等于无需查盗款。"
      }
    ]
  },
  {
    "id": "expansion-c-054",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the guard discover beneath the throne?",
        "options": [
          "The king's winter ration document alone.",
          "A hedge planted by the injured thief.",
          "Grain hidden by a noble.",
          "A supply of clean water owned by the guard."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A loose thread led them beneath the throne, where a noble had hidden grain. His threat silenced the throng throughout the court. The guard raised the thief’s injured thumb to show blood on the secret door, then thrust it open. The town could thresh the recovered wheat and thrive again. A thrifty ration plan saved the winter, and the thief felt a thrill when his parched throat met clean water.",
          "focusQuote": "A loose thread led them beneath the throne, where a noble had hidden grain."
        },
        "explanation": "线头引向王座下，贵族在那里藏粮；清水是后来帮助伤者的。"
      },
      {
        "type": "detail",
        "prompt": "How was the recovered wheat used to protect the town?",
        "options": [
          "It was sold to punish every thief equally.",
          "It was stored untouched until the hedge thickened.",
          "It was given entirely to the noble's court followers.",
          "A careful rationing plan helped it get through winter."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A loose thread led them beneath the throne, where a noble had hidden grain. His threat silenced the throng throughout the court. The guard raised the thief’s injured thumb to show blood on the secret door, then thrust it open. The town could thresh the recovered wheat and thrive again. A thrifty ration plan saved the winter, and the thief felt a thrill when his parched throat met clean water.",
          "focusQuote": "A thrifty ration plan saved the winter, and the thief felt a thrill when his parched throat met clean water."
        },
        "explanation": "回收小麦可脱粒并通过节俭配给渡过冬季；不是全部给贵族或不动用。"
      },
      {
        "type": "inference",
        "prompt": "What did the guard's thorough treatment of the injured thief make possible?",
        "options": [
          "Discovery of a larger hidden-grain wrongdoing.",
          "Immediate enforcement of the king's harsh punishment without inquiry.",
          "Proof that the town had no need for stolen seed.",
          "A confession that the guard himself had hidden the grain."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A loose thread led them beneath the throne, where a noble had hidden grain. His threat silenced the throng throughout the court. The guard raised the thief’s injured thumb to show blood on the secret door, then thrust it open. The town could thresh the recovered wheat and thrive again. A thrifty ration plan saved the winter, and the thief felt a thrill when his parched throat met clean water.",
          "focusQuote": "A loose thread led them beneath the throne, where a noble had hidden grain. His threat silenced the throng throughout the court. The guard raised the thief’s injured thumb to show blood on the secret door, then thrust it open."
        },
        "explanation": "卫兵检查伤情并顺线头揭露贵族藏粮，说明调查能找出更大问题；不是只按严令处死小贼。"
      }
    ]
  },
  {
    "id": "expansion-c-055",
    "questions": [
      {
        "type": "detail",
        "prompt": "What warning did the tiny tin box contain?",
        "options": [
          "The tiger's cage belonged to a different port.",
          "The clock would stop as the tide began to rise.",
          "The roof tiles had been replaced with metal.",
          "The timber shipment's timetable had been altered."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A caged tiger shook the deck. Sailors would tighten its ropes and bind them tightly while a roof tile began to tilt. A tiny tin box held the timely warning: the timber shipment’s timetable had been altered. A forgotten tip from a porter confirmed sabotage.",
          "focusQuote": "A tiny tin box held the timely warning: the timber shipment’s timetable had been altered."
        },
        "explanation": "小铁盒中及时警告木材货运时间表被改；虎笼和屋瓦属现场风险。"
      },
      {
        "type": "detail",
        "prompt": "What decision ultimately saved the sailors?",
        "options": [
          "Delaying the voyage after alerting the harbor.",
          "Sailing before the clerk finished checking documents.",
          "Leaving every crate untied to reduce fatigue.",
          "Ignoring the porter's information about sabotage."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The work could tire anyone, but the tiresome checks prevented disaster. A splinter damaged the clerk’s hand tissue, yet he copied the owner’s title from the document and alerted the harbor. Thus, a delayed voyage saved every sailor, and the clerk learned that courage could speak in a quiet voice.",
          "focusQuote": "A splinter damaged the clerk’s hand tissue, yet he copied the owner’s title from the document and alerted the harbor. Thus, a delayed voyage saved every sailor, and the clerk learned that courage could speak in a quiet voice."
        },
        "explanation": "核查、通知港口后延迟航行救了所有水手；未忽略破坏线索或提前开船。"
      },
      {
        "type": "inference",
        "prompt": "What can be inferred about the clerk's role despite his timid manner?",
        "options": [
          "His quietness prevented him from contacting the harbor.",
          "His careful checks and warning were decisive protective actions.",
          "His hand injury made all the timetable evidence unreliable.",
          "His courage depended on personally controlling the tiger."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The work could tire anyone, but the tiresome checks prevented disaster. A splinter damaged the clerk’s hand tissue, yet he copied the owner’s title from the document and alerted the harbor. Thus, a delayed voyage saved every sailor, and the clerk learned that courage could speak in a quiet voice.",
          "focusQuote": "The work could tire anyone, but the tiresome checks prevented disaster. A splinter damaged the clerk’s hand tissue, yet he copied the owner’s title from the document and alerted the harbor. Thus, a delayed voyage saved every sailor, and the clerk learned that courage could speak in a quiet voice."
        },
        "explanation": "虽胆怯且受伤，他复制信息并报警，延航救人，说明细致核查与发声可体现勇气；不是必须控制老虎。"
      }
    ]
  },
  {
    "id": "expansion-c-056",
    "questions": [
      {
        "type": "detail",
        "prompt": "What restriction contradicted the inn's advertised facilities?",
        "options": [
          "The toilet required an extra token and a heavy charge.",
          "The breakfast room could be entered only after dark.",
          "The guest had to repair a step before receiving breakfast.",
          "The owner required guests to carry their own water."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 0,
          "quote": "A traveler named the inn after a toad on its sign. At breakfast, toast smelled of tobacco, and a broken step hurt his toe. The advertised toilet was locked behind a gate that required a token and a heavy toll.",
          "focusQuote": "The advertised toilet was locked behind a gate that required a token and a heavy toll."
        },
        "explanation": "广告中的厕所实际被锁在门后，还需代币并付高额费用；其余限制未出现。"
      },
      {
        "type": "detail",
        "prompt": "What did the guest discover after opening the hatch?",
        "options": [
          "The owner's account books and the guest's missing money.",
          "A captive merchant and stolen naval equipment.",
          "A repaired cart carrying supplies for the inn.",
          "A merchant voluntarily storing household tools."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Using a simple tool, he opened the top hatch. The real topic was a captive merchant whom the owner tried to torment. A torch revealed stolen naval parts: a torpedo, a torque wrench, and plans for river defenses. A torrent had exposed the cellar, and the guest freed the merchant. Even the inn’s pet tortoise escaped its dirty cage.",
          "focusQuote": "The real topic was a captive merchant whom the owner tried to torment. A torch revealed stolen naval parts: a torpedo, a torque wrench, and plans for river defenses."
        },
        "explanation": "打开顶盖后发现受折磨的商人，火光又照出被盗海军部件；商人不是自愿保管物品。"
      },
      {
        "type": "main",
        "prompt": "What development best describes the guest's investigation?",
        "options": [
          "A breakfast complaint led to a negotiated reduction in all room prices.",
          "A search for a lost token ended with repairs to the inn's entrance.",
          "A dispute over an inn's charges led to a captive's rescue and stolen goods.",
          "A merchant's request for transport led to the purchase of naval parts."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Using a simple tool, he opened the top hatch. The real topic was a captive merchant whom the owner tried to torment. A torch revealed stolen naval parts: a torpedo, a torque wrench, and plans for river defenses. A torrent had exposed the cellar, and the guest freed the merchant. Even the inn’s pet tortoise escaped its dirty cage.",
          "focusQuote": "The real topic was a captive merchant whom the owner tried to torment. A torch revealed stolen naval parts: a torpedo, a torque wrench, and plans for river defenses. A torrent had exposed the cellar, and the guest freed the merchant."
        },
        "explanation": "故事从收费争议发展为探查密室、救出商人并发现赃物；没有达成降价或购买军用部件。"
      }
    ]
  },
  {
    "id": "expansion-c-057",
    "questions": [
      {
        "type": "detail",
        "prompt": "How was the hidden code discovered?",
        "options": [
          "The guide found it written on the truck's tow rope.",
          "A child's touch on a toy model revealed it.",
          "The prisoner decoded the captor's dice throws.",
          "A tradesman printed it on a wet towel."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 0,
          "quote": "A toy car crossed a table while a prisoner endured torture. His captor would toss dice to decide the next threat. The total ransom was impossible, but a child’s light touch on the touchable model revealed a hidden code.",
          "focusQuote": "The total ransom was impossible, but a child’s light touch on the touchable model revealed a hidden code."
        },
        "explanation": "孩子轻触玩具模型显出代码；骰子用于威胁，不是解码线索。"
      },
      {
        "type": "detail",
        "prompt": "How did the festival help conceal the kidnapping?",
        "options": [
          "Its traders officially approved the ransom demand.",
          "Its tractor moved the prisoner out of the warehouse.",
          "Its stalled traffic provided cover for the crime.",
          "Its toy contest required the child's model to be hidden."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The code named a trade route and a forged trademark. A trader had bribed a tradesman to alter the crates. Under a traditional festival tradition, traffic stalled, hiding the kidnapping. The guide followed the trail before a tragic outcome turned into a tragedy, rescued the prisoner, and returned the child’s toy.",
          "focusQuote": "Under a traditional festival tradition, traffic stalled, hiding the kidnapping."
        },
        "explanation": "传统节日下交通停滞掩盖绑架；没有节日批准赎金或拖拉机运人的信息。"
      },
      {
        "type": "inference",
        "prompt": "What investigative value did the hidden code offer?",
        "options": [
          "It showed that the ransom could be paid from festival receipts.",
          "It proved that the broken van had caused the toxic spill.",
          "It supplied the guide with instructions for repairing the child's toy.",
          "It identified a trade route and false branding connected to the crime."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The code named a trade route and a forged trademark. A trader had bribed a tradesman to alter the crates. Under a traditional festival tradition, traffic stalled, hiding the kidnapping. The guide followed the trail before a tragic outcome turned into a tragedy, rescued the prisoner, and returned the child’s toy.",
          "focusQuote": "The code named a trade route and a forged trademark."
        },
        "explanation": "代码指明贸易路线与伪造商标，提供可追查的具体方向；并不说明赎金如何支付或玩具如何修理。"
      }
    ]
  },
  {
    "id": "expansion-c-058",
    "questions": [
      {
        "type": "detail",
        "prompt": "What interrupted transmission during the rescue?",
        "options": [
          "An ancient map lacked the location of the valley.",
          "The team deliberately cancelled the rail service.",
          "A broken transistor blocked a necessary signal.",
          "The scholar refused to provide any instructions."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The team needed to transfer a damaged transformer. Its transformation of current failed during a transient storm. A broken transistor blocked a signal they must transmit. The transit route’s transition from rail to boat depended on clear instructions.",
          "focusQuote": "A broken transistor blocked a signal they must transmit."
        },
        "explanation": "损坏的晶体管阻断需传送的信号；铁路与船舶之间的衔接需要清晰指令，并非主动停运。"
      },
      {
        "type": "detail",
        "prompt": "What did the scholar's translation actually describe?",
        "options": [
          "A heart transplant rather than a route across the valley.",
          "A bamboo tray rather than a damaged transformer.",
          "A traitor's trap rather than a usable crossing.",
          "A transparent bridge rather than a heart transplant."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The scholar could translate the ancient map. Her translation described a transparent bridge, not a living heart transplant as the traitor claimed. They arranged safe transport and reliable transportation, then crossed a transverse beam to traverse the valley. His trap collapsed into trash. Their supplies arrived on a bamboo tray, and the rescued village welcomed the scholar.",
          "focusQuote": "Her translation described a transparent bridge, not a living heart transplant as the traitor claimed."
        },
        "explanation": "译文说明透明桥，叛徒却称是活体心脏移植；后续据此组织安全运输。"
      },
      {
        "type": "inference",
        "prompt": "What can be inferred about the effect of the scholar's translation?",
        "options": [
          "It corrected misleading information and helped the team arrange safe transport.",
          "It established that electrical repairs were unnecessary throughout the rescue.",
          "It supported the traitor's interpretation of the map's medical purpose.",
          "It persuaded the villagers to abandon deliveries during the storm."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The scholar could translate the ancient map. Her translation described a transparent bridge, not a living heart transplant as the traitor claimed. They arranged safe transport and reliable transportation, then crossed a transverse beam to traverse the valley. His trap collapsed into trash. Their supplies arrived on a bamboo tray, and the rescued village welcomed the scholar.",
          "focusQuote": "Her translation described a transparent bridge, not a living heart transplant as the traitor claimed. They arranged safe transport and reliable transportation, then crossed a transverse beam to traverse the valley."
        },
        "explanation": "译文纠正叛徒错误说法，团队随后安排安全运输并跨过山谷；不能推成所有电气维修都多余。"
      }
    ]
  },
  {
    "id": "expansion-c-059",
    "questions": [
      {
        "type": "detail",
        "prompt": "What could the hidden trigger do?",
        "options": [
          "Release the witness from the guards' supervision.",
          "Return the chest to the tribe automatically.",
          "Notify the crowd that the trial had been cancelled.",
          "Set fire to records concerning the stolen treasure."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "A healer would treat his wounds before testimony. A triangular seal formed a triangle on the stolen chest. The treasurer’s trick was to call it a trifle, but a hidden trigger could burn the records. A tremendous crowd had grown tremendously, following the trend of similar thefts from towns.",
          "focusQuote": "The treasurer’s trick was to call it a trifle, but a hidden trigger could burn the records."
        },
        "explanation": "机关可能烧毁记录，证人后来剪断引线；并非自动返还财物。"
      },
      {
        "type": "detail",
        "prompt": "What financial wrongdoing did the witness's evidence establish?",
        "options": [
          "Each tribute had been charged three times.",
          "The tribe had paid no tribute under the treaty.",
          "The treasurer had reduced every town's payment.",
          "The witness had collected the emperor's court fees."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The witness crawled through a trench to trim the fuse. His evidence showed triple charges on every tribute. Such sums were never trivial. He earned no triumphant parade, but the court’s judgment was a triumph. A trolley returned the treasure, and the emperor’s troop escorted the thief to prison.",
          "focusQuote": "His evidence showed triple charges on every tribute."
        },
        "explanation": "证据显示每笔贡赋被收三倍；被告称其微不足道并不能改变金额事实。"
      },
      {
        "type": "inference",
        "prompt": "Why did trimming the fuse matter to the trial?",
        "options": [
          "It replaced the need to examine the witness's financial evidence.",
          "It prevented an attempt to destroy records relevant to the charges.",
          "It gave the treasurer a legitimate reason to keep the chest.",
          "It ensured that the crowd could choose the court's punishment."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A healer would treat his wounds before testimony. A triangular seal formed a triangle on the stolen chest. The treasurer’s trick was to call it a trifle, but a hidden trigger could burn the records. A tremendous crowd had grown tremendously, following the trend of similar thefts from towns.",
          "focusQuote": "The treasurer’s trick was to call it a trifle, but a hidden trigger could burn the records."
        },
        "explanation": "前段说明机关可焚烧记录，剪断引线因此保全证据；仍需审查三倍收费的证据。"
      }
    ]
  },
  {
    "id": "expansion-c-060",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the twins find inside the hollow tree trunk?",
        "options": [
          "Stolen medicine for tuberculosis.",
          "The tutor's unpaid tuition receipts.",
          "The driver's cargo of tuna and vegetables.",
          "A broken turbine from the harbor tug."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A troublesome driver claimed they could not truly trust him. The truth was in a hollow tree trunk: stolen medicine for tuberculosis. A tube hidden in a tub led to a tunnel. The twins would tuck the map inside a coat and seek a harbor tug.",
          "focusQuote": "The truth was in a hollow tree trunk: stolen medicine for tuberculosis."
        },
        "explanation": "空树干中藏有被盗结核病药物；食品货箱在后段另有出现。"
      },
      {
        "type": "detail",
        "prompt": "What did the tutor retrieve before it fell into the river?",
        "options": [
          "The truck's damaged engine.",
          "The map the twins had found.",
          "The driver's tuition payment.",
          "The medicine seal hidden with the turtle."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A turbine stirred turbulent water, but the tutor calmed the turmoil. She recovered the map before it could tumble into the river. Among crates of tuna, turkey, and turnips, a turtle hid the medicine seal. At the next turning, the driver was caught. The town’s turnover grew again, children planted a tulip, and the tutor played a gentle tune beneath stars that began to twinkle.",
          "focusQuote": "She recovered the map before it could tumble into the river."
        },
        "explanation": "导师赶在地图掉入河中前取回它；药品封印则出现在货箱间的乌龟处。"
      },
      {
        "type": "main",
        "prompt": "Which description best summarizes the episode?",
        "options": [
          "A tutor charged higher tuition to finance a new river transport business.",
          "Twins persuaded a driver to deliver food before a tropical storm arrived.",
          "Children and their tutor preserved clues in a stolen-medicine case that ended with a driver being caught.",
          "A harbor crew replaced a turbine after children lost their map in the river."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "A turbine stirred turbulent water, but the tutor calmed the turmoil. She recovered the map before it could tumble into the river. Among crates of tuna, turkey, and turnips, a turtle hid the medicine seal. At the next turning, the driver was caught. The town’s turnover grew again, children planted a tulip, and the tutor played a gentle tune beneath stars that began to twinkle.",
          "focusQuote": "She recovered the map before it could tumble into the river. Among crates of tuna, turkey, and turnips, a turtle hid the medicine seal. At the next turning, the driver was caught."
        },
        "explanation": "双胞胎发现赃药与地图，导师保住地图线索，最终司机落网；不能把线索发现的顺序颠倒成地图先揭露药物。"
      }
    ]
  },
  {
    "id": "expansion-c-061",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the clerk recover erased letters?",
        "options": [
          "By replacing the cart's damaged tyre.",
          "With an ultrasonic detector and ultraviolet light.",
          "By asking the unconscious guard to dictate them.",
          "With a new complaint typed by the tyrant."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The clerk used an ultrasonic detector and ultraviolet light to reveal erased letters. She carried an umbrella to the shelter, yet a broken truck tyre left her unable to travel. A unanimous group of rescuers called the delay unavoidable and brought a cart.",
          "focusQuote": "The clerk used an ultrasonic detector and ultraviolet light to reveal erased letters."
        },
        "explanation": "书记使用超声探测器和紫外光显出被擦文字；更换车辆或要求昏迷守卫口述未出现。"
      },
      {
        "type": "detail",
        "prompt": "What solution did the rescuers provide after the truck could not travel?",
        "options": [
          "They postponed reading the complaints indefinitely.",
          "They left the clerk to walk through the storm alone.",
          "They brought a cart to overcome the transport problem.",
          "They asked the guard to drive despite his condition."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "The clerk used an ultrasonic detector and ultraviolet light to reveal erased letters. She carried an umbrella to the shelter, yet a broken truck tyre left her unable to travel. A unanimous group of rescuers called the delay unavoidable and brought a cart.",
          "focusQuote": "She carried an umbrella to the shelter, yet a broken truck tyre left her unable to travel. A unanimous group of rescuers called the delay unavoidable and brought a cart."
        },
        "explanation": "爆胎导致无法出行，救援者一致认定延误不可避免并带来推车；不是独自冒险或永久延期。"
      },
      {
        "type": "inference",
        "prompt": "What did the group's approach to the storm suggest?",
        "options": [
          "They considered the complaints less important than the tyrant's reputation.",
          "They assumed the storm posed little risk once the safe was located.",
          "They required each volunteer to confront danger without assistance.",
          "They combined determination with shared precautions against danger."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The cold was unbearable, the future uncertain, and the road uncomfortable. An unconscious guard required help. An undergraduate proposed an unconventional way to uncover the tyrant’s safe beneath the floor. They would not underestimate the storm or make anyone undergo danger alone. The complaints were ultimately read in court; the rescue showed typical village courage.",
          "focusQuote": "They would not underestimate the storm or make anyone undergo danger alone."
        },
        "explanation": "众人不低估风暴，也不让任何人独自受险，最终投诉在法庭宣读；体现合作与审慎。"
      }
    ]
  },
  {
    "id": "expansion-c-062",
    "questions": [
      {
        "type": "detail",
        "prompt": "Where did the engineer locate the water leak?",
        "options": [
          "Inside the council's wage records.",
          "Under a newly issued uniform.",
          "Beneath an old fountain.",
          "At a district's employment office."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 0,
          "quote": "An underground city’s council wanted to unify every district. Leaders should underline its underlying water problems, yet chose to undermine the reports. Underneath an old fountain, an unknown engineer found the leak.",
          "focusQuote": "Underneath an old fountain, an unknown engineer found the leak."
        },
        "explanation": "工程师在旧喷泉下发现漏水；工资政策是另一问题，不是漏点。"
      },
      {
        "type": "detail",
        "prompt": "What organizational plan did the engineer propose?",
        "options": [
          "Assign all repair work to the city council alone.",
          "Separate the workers according to their clothing.",
          "Replace fair pay with identical uniforms.",
          "Unite repair units in a workers' union."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The council issued a uniform but could not solve undesirable conditions uniformly. The engineer began to unfold a unique plan: unite each repair unit in a workers’ union. An unexpected leak seemed unfortunate; unfortunately, it flooded a bedroom. Yet unity could undo the damage. The formerly unhappy workers repaired the fountain together.",
          "focusQuote": "The engineer began to unfold a unique plan: unite each repair unit in a workers’ union."
        },
        "explanation": "她提出把维修单位团结进工会；制服不足以解决恶劣条件，也不能代替公平工资。"
      },
      {
        "type": "inference",
        "prompt": "What limitation of the council's response does the story expose?",
        "options": [
          "A standard outward measure could not adequately address workers' different problems.",
          "A union prevented the workers from making any practical repairs.",
          "The water reports overstated the problem because no room flooded.",
          "Fair wages became unnecessary after the fountain had been repaired."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The council issued a uniform but could not solve undesirable conditions uniformly. The engineer began to unfold a unique plan: unite each repair unit in a workers’ union. An unexpected leak seemed unfortunate; unfortunately, it flooded a bedroom. Yet unity could undo the damage. The formerly unhappy workers repaired the fountain together.",
          "focusQuote": "The council issued a uniform but could not solve undesirable conditions uniformly."
        },
        "explanation": "议会发制服却不能统一解决不良条件，工会协作后工人才修好喷泉；不能推断工资不再重要。"
      }
    ]
  },
  {
    "id": "expansion-c-063",
    "questions": [
      {
        "type": "detail",
        "prompt": "What did the labels on the boxes establish?",
        "options": [
          "The guard had personally purchased every book.",
          "The hall's wiring had already been upgraded.",
          "Visitors owed a fee for each box they opened.",
          "The donated books carried no price."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "She asked him to untie the boxes. Their unusual labels were unusually clear: donated books, with no price. Though unwilling, he revealed an up-to-date contract. An update and a security upgrade would uphold the free-access promise. A second file named “uptodate” had the same terms. The doors opened at last.",
          "focusQuote": "Their unusual labels were unusually clear: donated books, with no price."
        },
        "explanation": "标签清楚写着捐赠图书且无价格；因此并不支持守卫收费。"
      },
      {
        "type": "detail",
        "prompt": "What did the second file confirm?",
        "options": [
          "The same free-access contract terms.",
          "A new right for the guard to charge admission.",
          "The porter had caused the wiring damage.",
          "The university had withdrawn its public promise."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "She asked him to untie the boxes. Their unusual labels were unusually clear: donated books, with no price. Though unwilling, he revealed an up-to-date contract. An update and a security upgrade would uphold the free-access promise. A second file named “uptodate” had the same terms. The doors opened at last.",
          "focusQuote": "A second file named “uptodate” had the same terms."
        },
        "explanation": "名为uptodate的第二份文件条款相同，支持免费开放；没有撤回承诺。"
      },
      {
        "type": "inference",
        "prompt": "Why did the librarian request the labels and contract?",
        "options": [
          "To negotiate a higher fee for books with unusual labels.",
          "To test the guard's demands against documented access conditions.",
          "To transfer the guard's unchecked authority to the porter.",
          "To avoid addressing whether the donated books should be free."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "She asked him to untie the boxes. Their unusual labels were unusually clear: donated books, with no price. Though unwilling, he revealed an up-to-date contract. An update and a security upgrade would uphold the free-access promise. A second file named “uptodate” had the same terms. The doors opened at last.",
          "focusQuote": "Their unusual labels were unusually clear: donated books, with no price. Though unwilling, he revealed an up-to-date contract. An update and a security upgrade would uphold the free-access promise. A second file named “uptodate” had the same terms."
        },
        "explanation": "标签与合同为核查收费是否符合免费开放约定提供依据；不是提高收费或回避是否合法。"
      }
    ]
  },
  {
    "id": "expansion-c-064",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the bottle actually used for?",
        "options": [
          "Testing household air with a pump.",
          "Storing dangerous uranium powder in the attic.",
          "Providing vaccines for the household's children.",
          "Marking the owner's route during his vacation."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The bottle held a vacuum, not dangerous powder. Its utility was to test household air, and its utilization required a pump. The inspector could utilize a useful valve; the owner’s map was useless. With the utmost care, she checked the usual records and made him utter the truth. He had hidden the bottle to sell a utopian promise of perfectly clean rooms; she ordered repairs and arranged to vaccinate the children against a spreading illness.",
          "focusQuote": "The bottle held a vacuum, not dangerous powder. Its utility was to test household air, and its utilization required a pump."
        },
        "explanation": "瓶中是真空，用途是配合泵测试室内空气；标签并不证明装有危险粉末。"
      },
      {
        "type": "detail",
        "prompt": "Why had the owner hidden the bottle?",
        "options": [
          "To prevent the inspector from vaccinating children.",
          "To sell a promise that rooms could be perfectly clean.",
          "To preserve a valid map of uranium supplies.",
          "To keep every household utensil inside a vacuum."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The bottle held a vacuum, not dangerous powder. Its utility was to test household air, and its utilization required a pump. The inspector could utilize a useful valve; the owner’s map was useless. With the utmost care, she checked the usual records and made him utter the truth. He had hidden the bottle to sell a utopian promise of perfectly clean rooms; she ordered repairs and arranged to vaccinate the children against a spreading illness.",
          "focusQuote": "He had hidden the bottle to sell a utopian promise of perfectly clean rooms; she ordered repairs and arranged to vaccinate the children against a spreading illness."
        },
        "explanation": "业主隐藏瓶子是为了兜售完美洁净房间的乌托邦式承诺；不是疫苗储存或保护地图。"
      },
      {
        "type": "inference",
        "prompt": "What does the inquiry suggest about assessing the alarming label?",
        "options": [
          "A uranium label made further inspection of the bottle unnecessary.",
          "The owner's vacation account was more reliable than the usage log.",
          "The contents and records had to be checked before accepting the apparent hazard.",
          "The children's illness proved that uranium powder had escaped."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The bottle held a vacuum, not dangerous powder. Its utility was to test household air, and its utilization required a pump. The inspector could utilize a useful valve; the owner’s map was useless. With the utmost care, she checked the usual records and made him utter the truth. He had hidden the bottle to sell a utopian promise of perfectly clean rooms; she ordered repairs and arranged to vaccinate the children against a spreading illness.",
          "focusQuote": "The bottle held a vacuum, not dangerous powder. Its utility was to test household air, and its utilization required a pump."
        },
        "explanation": "标签称铀，但核查内容与使用记录发现是真空检测瓶；儿童疾病没有被证明由铀导致。"
      }
    ]
  },
  {
    "id": "expansion-c-065",
    "questions": [
      {
        "type": "detail",
        "prompt": "What happened when the steaming valve released vapour?",
        "options": [
          "The vase was returned immediately to its shrine.",
          "The supply vehicle was delayed.",
          "The judge approved the collector's ownership claim.",
          "The keeper replaced the vault's vegetation."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A van carried supplies to a vault beneath dense vegetation. A steaming valve released vapour, delaying the vehicle. Wind velocity changed, making the fumes vary. A variable gauge recorded each variation; a variety of plants suffered in various ways.",
          "focusQuote": "A steaming valve released vapour, delaying the vehicle."
        },
        "explanation": "阀门排出的蒸气使车辆延误；合法归属核查和归还发生在别处。"
      },
      {
        "type": "detail",
        "prompt": "What physical match helped expose the collector's wrongdoing?",
        "options": [
          "The velvet veil matched the van's registration papers.",
          "The plants matched the collector's written claim.",
          "A blue vein in stone matched the drill dust.",
          "The gauge matched the price of the vase."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The keeper found a vector map hidden in a velvet veil around the vase. The collector’s vanity led him to demand vengeance, but a blocked vent revealed his stolen tools. A blue vein in the stone matched the drill dust. After workers could ventilate the vault, the vase returned to its shrine.",
          "focusQuote": "A blue vein in the stone matched the drill dust."
        },
        "explanation": "石中蓝色纹理与钻孔粉尘吻合，旁边又发现被盗工具；其余配对未出现。"
      },
      {
        "type": "inference",
        "prompt": "What standard did the judge require of the collector's claim?",
        "options": [
          "A high offered price that exceeded the vase's cultural value.",
          "An expression of anger sufficient to establish ownership.",
          "A rumor about the valley accepted without examination.",
          "A justification that could be independently checked."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 0,
          "quote": "A vague rumor described a valuable vase in a vast valley. A vain collector demanded it, but the judge asked for a valid claim whose validity could be checked. The collector valued its price more than its cultural value.",
          "focusQuote": "A vain collector demanded it, but the judge asked for a valid claim whose validity could be checked."
        },
        "explanation": "法官要求可核验的有效主张，意味着价格、情绪与传闻都不足以单独证明权利。"
      }
    ]
  },
  {
    "id": "expansion-c-066",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the hidden chest become visible?",
        "options": [
          "The council opened it during the translation debate.",
          "The poet found it while observing Venus outside the city.",
          "Vibration exposed it on a departing vessel.",
          "The collector brought it openly to the council."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "An old vertical banner shook as the walls began to vibrate. Its vibration exposed a chest on a departing vessel. A guard in a vest tried to veto an inspection. He thought he could vex the poet until the boat escaped via the canal.",
          "focusQuote": "Its vibration exposed a chest on a departing vessel."
        },
        "explanation": "墙体振动使离港船上的箱子暴露；并非在诗歌辩论中打开。"
      },
      {
        "type": "detail",
        "prompt": "What did the poet find inside the chest?",
        "options": [
          "The council's approved poem translation.",
          "The guard's legitimate canal permit.",
          "An old banner removed from the city walls.",
          "His stolen medals."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The poet saw his stolen medals in the chest. The guard’s vice was gambling; his vicious collector waited in the vicinity. The poet refused to become another victim they could victimize. His shipmates secured the chest, and the council celebrated a victorious return. The poet called it a quiet victory for honest words.",
          "focusQuote": "The poet saw his stolen medals in the chest."
        },
        "explanation": "诗人在箱内发现自己被盗的勋章；不是译文或船运许可。"
      },
      {
        "type": "inference",
        "prompt": "Why was the guard trying to prevent inspection?",
        "options": [
          "He wanted the vessel to escape before the stolen medals were discovered.",
          "He was protecting a newly approved translation from public criticism.",
          "He needed the poet to observe Venus before the boat departed.",
          "He was ensuring the collector could recover his lawful property."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "An old vertical banner shook as the walls began to vibrate. Its vibration exposed a chest on a departing vessel. A guard in a vest tried to veto an inspection. He thought he could vex the poet until the boat escaped via the canal.",
          "focusQuote": "A guard in a vest tried to veto an inspection. He thought he could vex the poet until the boat escaped via the canal."
        },
        "explanation": "守卫试图否决检查并拖延诗人，等待船经运河逃走；随后箱中出现赃勋章，说明想避查。"
      }
    ]
  },
  {
    "id": "expansion-c-067",
    "questions": [
      {
        "type": "detail",
        "prompt": "What was the actual violation at the villa?",
        "options": [
          "The gardener stole the owner's videotape and destroyed it.",
          "The visitor hid jewels inside a computer to disguise them.",
          "The owner poured vinegar on the gardener's travel documents.",
          "A guard violently attacked the gardener after he found missing jewels."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 1,
          "quote": "Footage showed him pouring vinegar on a violet cloth. The owner claimed he had tried to violate the property rules. Yet the real violation was violence by a violent guard, who shook the gardener violently after he found missing jewels.",
          "focusQuote": "Footage showed him pouring vinegar on a violet cloth. The owner claimed he had tried to violate the property rules. Yet the real violation was violence by a violent guard, who shook the gardener violently after he found missing jewels."
        },
        "explanation": "录像表明真正侵害是守卫在园丁发现失踪珠宝后施暴；倒醋行为不能等同盗窃。"
      },
      {
        "type": "detail",
        "prompt": "What established the gardener's actual arrival date?",
        "options": [
          "His travel visa.",
          "The computer's infected virtual tour.",
          "The owner's account of the previous night.",
          "The note using the spelling vigour."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A virgin patch of ground concealed the jewels under an untouched stone. A virtual tour was virtually useless because a computer virus had obscured the view. The gardener’s travel visa provided his true arrival date. The visitor felt a visceral anger at the guard’s lies, then used the original tape to clear the gardener.",
          "focusQuote": "The gardener’s travel visa provided his true arrival date."
        },
        "explanation": "旅行签证提供真实抵达日期；虚拟导览被病毒遮蔽而几乎无用。"
      },
      {
        "type": "inference",
        "prompt": "Why was the original tape more useful than the virtual tour?",
        "options": [
          "It demonstrated that all computer-based evidence was unreliable.",
          "It supplied usable evidence while the computer view had been obscured.",
          "It established the jewels' purchase price without any further records.",
          "It showed the visitor had arrived before the gardener."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A virgin patch of ground concealed the jewels under an untouched stone. A virtual tour was virtually useless because a computer virus had obscured the view. The gardener’s travel visa provided his true arrival date. The visitor felt a visceral anger at the guard’s lies, then used the original tape to clear the gardener.",
          "focusQuote": "A virtual tour was virtually useless because a computer virus had obscured the view. The gardener’s travel visa provided his true arrival date. The visitor felt a visceral anger at the guard’s lies, then used the original tape to clear the gardener."
        },
        "explanation": "病毒遮住电脑视图，原始录像则用来洗清园丁；只能比较当前证据，不能泛化为所有数字证据不可靠。"
      }
    ]
  },
  {
    "id": "expansion-c-068",
    "questions": [
      {
        "type": "detail",
        "prompt": "What impaired the alarm's signal?",
        "options": [
          "A power drop affected its volume.",
          "The teacher stopped pronouncing vowels clearly.",
          "Students replaced the map with vocabulary lists.",
          "The volunteer disconnected the boat's radio."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A viscous liquid leaked from the alarm. Power dropped: a single volt of lost voltage affected the signal volume. The teacher’s voice filled the hall, explaining each vowel clearly. Her vivid description made the danger vividly real, expanding their vocabulary.",
          "focusQuote": "Power dropped: a single volt of lost voltage affected the signal volume."
        },
        "explanation": "电压下降影响信号音量，报警器又有黏液泄漏；不是老师发音或地图替换造成。"
      },
      {
        "type": "detail",
        "prompt": "Which evacuation method did the class approve?",
        "options": [
          "Crossing directly over the crater.",
          "Leaving by boat.",
          "Waiting at the volleyball court.",
          "Following the alarm liquid into the volcano."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "Health was vital, and vitality depended vitally on air and water. The class packed a vitamin supply; an old label read “vitamine.” A voluntary volunteer abandoned a volleyball game to help. A vote approved evacuation by boat. Nobody would cross the crater’s void on that voyage, and no vulgar joke distracted them from the vulnerable children.",
          "focusQuote": "A vote approved evacuation by boat."
        },
        "explanation": "投票批准乘船疏散，明确无人跨过火山口；球场仅说明志愿者放弃比赛来帮忙。"
      },
      {
        "type": "inference",
        "prompt": "What priority is reflected in the class's preparations?",
        "options": [
          "Maintaining the language lesson despite the need to leave.",
          "Finishing the volleyball game before considering assistance.",
          "Protecting vulnerable people while preserving access to basic necessities.",
          "Testing whether students could cross the crater without supplies."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Health was vital, and vitality depended vitally on air and water. The class packed a vitamin supply; an old label read “vitamine.” A voluntary volunteer abandoned a volleyball game to help. A vote approved evacuation by boat. Nobody would cross the crater’s void on that voyage, and no vulgar joke distracted them from the vulnerable children.",
          "focusQuote": "Health was vital, and vitality depended vitally on air and water. The class packed a vitamin supply; an old label read “vitamine.” A voluntary volunteer abandoned a volleyball game to help. A vote approved evacuation by boat. Nobody would cross the crater’s void on that voyage, and no vulgar joke distracted them from the vulnerable children."
        },
        "explanation": "空气水与健康被强调，带上维生素并照顾脆弱儿童，说明安全和基本需要优先。"
      }
    ]
  },
  {
    "id": "expansion-c-069",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had the guard agreed to do when valuables were moved?",
        "options": [
          "List every item publicly in the warehouse.",
          "Leave the area at those times.",
          "Escort the workers directly to their wages.",
          "Destroy the wardrobe key after each move."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "The workers tried to waken the sleeping guard. A wallet lay at his waist beside a walnut. Inside, a key opened a wardrobe stocked with stolen ware. The guard had agreed to wander outside whenever the employer moved valuables.",
          "focusQuote": "The guard had agreed to wander outside whenever the employer moved valuables."
        },
        "explanation": "守卫同意在老板搬贵重物品时到外面闲逛；没有公开记账或销毁钥匙。"
      },
      {
        "type": "detail",
        "prompt": "How was the warehouse secured for the investigation?",
        "options": [
          "The workers fought a private battle with the employer.",
          "The guard moved the stolen goods to the hospital.",
          "A written warning and a valid warrant were obtained.",
          "The employer voluntarily emptied every wardrobe."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The workers refused another private war. They cared for the feverish guard in a hospital ward and gave him warmth. His account of the employer’s little financial warfare led them to warn investigators. A written warning and a valid warrant secured the warehouse. The employer paid both workers, and the guard testified.",
          "focusQuote": "A written warning and a valid warrant secured the warehouse."
        },
        "explanation": "书面警告与有效令状使仓库受控；工人拒绝私人冲突而非动用武力。"
      },
      {
        "type": "inference",
        "prompt": "What did caring for the guard help make possible?",
        "options": [
          "His illness excused the employer from paying the workers.",
          "His recovery proved that no goods had been stolen.",
          "His hospital stay replaced the need for a warehouse warrant.",
          "His account and testimony contributed to an official investigation."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The workers refused another private war. They cared for the feverish guard in a hospital ward and gave him warmth. His account of the employer’s little financial warfare led them to warn investigators. A written warning and a valid warrant secured the warehouse. The employer paid both workers, and the guard testified.",
          "focusQuote": "They cared for the feverish guard in a hospital ward and gave him warmth. His account of the employer’s little financial warfare led them to warn investigators. A written warning and a valid warrant secured the warehouse. The employer paid both workers, and the guard testified."
        },
        "explanation": "工人照顾发热守卫，他的叙述引向调查且最后作证；不能推出免除工资或不需令状。"
      }
    ]
  },
  {
    "id": "expansion-c-070",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had the groom fabricated?",
        "options": [
          "A new letter written by the weaver.",
          "A repair bill for the bride's waterproof bag.",
          "A wealthy uncle's promise of money.",
          "A radio broadcast about the waterfall."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 1,
          "quote": "A meter marked one watt beside a radio. Its wave changed wavelength, making the groom waver in his story. A broken wax seal exposed his weakness: he had forged a promise of wealth from a wealthy uncle. His weak excuse could only weaken trust.",
          "focusQuote": "A broken wax seal exposed his weakness: he had forged a promise of wealth from a wealthy uncle."
        },
        "explanation": "新郎伪造富有叔父的财富承诺，破损蜡封揭示问题；不是编造维修单。"
      },
      {
        "type": "detail",
        "prompt": "What connected the box to the groom's route?",
        "options": [
          "The weaver's new cloth cover.",
          "The bride's fatigue while reading.",
          "The radio's one-watt meter alone.",
          "A weed attached to its hinge."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A weaver helped the weary bride weigh the evidence. She would weave a new cover, use a wedge to open the box, and remove a tangled web. A weed stuck to its hinge traced the groom’s route. He had used a ceremonial weapon to cut the seal. The bride postponed the wedding and kept the truthful letter.",
          "focusQuote": "A weed stuck to its hinge traced the groom’s route."
        },
        "explanation": "铰链上的草提供新郎行动路线线索；其他细节未承担此定位作用。"
      },
      {
        "type": "inference",
        "prompt": "Why was discarding the damaged letter a poor response?",
        "options": [
          "It would have removed material useful for uncovering the false promise.",
          "It would have made the waterproof bag unable to hold any letter.",
          "It would have forced the weaver to cancel the wedding herself.",
          "It would have proved that the uncle had fulfilled his promise."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "A meter marked one watt beside a radio. Its wave changed wavelength, making the groom waver in his story. A broken wax seal exposed his weakness: he had forged a promise of wealth from a wealthy uncle. His weak excuse could only weaken trust.",
          "focusQuote": "A broken wax seal exposed his weakness: he had forged a promise of wealth from a wealthy uncle."
        },
        "explanation": "损坏页面仍有调查价值，故事明确丢弃会浪费，随后婚礼推迟且保留真实信件；不能当作无用纸张。"
      }
    ]
  },
  {
    "id": "expansion-c-071",
    "questions": [
      {
        "type": "detail",
        "prompt": "How did the thief use the widow's music?",
        "options": [
          "As proof that the captain's boat needed repairs.",
          "As a way to collect donations for the grain workers.",
          "As instructions for welding the damaged cart wheel.",
          "As a signal for an accomplice to steal grain."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The captain would investigate whatever the danger, accepting no false account whatsoever. The thief’s scheme used music as a signal whereby an accomplice could steal grain. He could escape wherever he chose, but whichever boat he took, the widow recognized the whistle. Whilst she played the final note, guards seized the thief at the dock.",
          "focusQuote": "The thief’s scheme used music as a signal whereby an accomplice could steal grain."
        },
        "explanation": "音乐在盗贼计划中充当同伙偷粮的信号；福利筹款是寡妇原本的正当用途。"
      },
      {
        "type": "detail",
        "prompt": "What helped the widow recognize the thief's escape?",
        "options": [
          "The distinctive whistle she could recognize on any chosen boat.",
          "The captain's promise to remain silent at the wharf.",
          "A weekly welfare list naming the supposed welder.",
          "A new drawing that the thief placed on her violin."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The captain would investigate whatever the danger, accepting no false account whatsoever. The thief’s scheme used music as a signal whereby an accomplice could steal grain. He could escape wherever he chose, but whichever boat he took, the widow recognized the whistle. Whilst she played the final note, guards seized the thief at the dock.",
          "focusQuote": "He could escape wherever he chose, but whichever boat he took, the widow recognized the whistle."
        },
        "explanation": "无论盗贼选哪条船，寡妇都识别出哨声，守卫最终在码头抓人；不是通过福利名单。"
      },
      {
        "type": "main",
        "prompt": "What is the central development in this account?",
        "options": [
          "A captain organized weekly concerts to finance repairs to his own boat.",
          "A charitable performance concealed a grain-theft signal that was exposed through sound.",
          "A widow abandoned welfare concerts after a dispute with legitimate welders.",
          "Workers solved a grain shortage by changing the direction of cargo boats."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The captain would investigate whatever the danger, accepting no false account whatsoever. The thief’s scheme used music as a signal whereby an accomplice could steal grain. He could escape wherever he chose, but whichever boat he took, the widow recognized the whistle. Whilst she played the final note, guards seized the thief at the dock.",
          "focusQuote": "The thief’s scheme used music as a signal whereby an accomplice could steal grain. He could escape wherever he chose, but whichever boat he took, the widow recognized the whistle. Whilst she played the final note, guards seized the thief at the dock."
        },
        "explanation": "音乐暗藏偷粮信号、哨声帮助辨认并抓捕是叙事主线；并非船长筹款修船。"
      }
    ]
  },
  {
    "id": "expansion-c-072",
    "questions": [
      {
        "type": "detail",
        "prompt": "What had caused the damage to the mill?",
        "options": [
          "A guard who had been drinking damaged it.",
          "The miller deliberately broke the axle to enter a contest.",
          "The village ordered the windmill stopped during strong wind.",
          "A pigeon became trapped inside a flour sack."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 1,
          "quote": "The guard had drunk whisky and wine, then damaged the mill. His boss sought to whitewash the accident, calling him merely wilful; an altered report used “willful.” A widespread lie spread widely. The miller measured the broken axle’s width and would widen the inquiry.",
          "focusQuote": "The guard had drunk whisky and wine, then damaged the mill."
        },
        "explanation": "守卫饮酒后损坏磨坊，老板随后试图粉饰事故；不是磨坊主故意破坏。"
      },
      {
        "type": "detail",
        "prompt": "What did the pigeon provide evidence of?",
        "options": [
          "The repaired mill could produce flour again.",
          "A blast had occurred.",
          "The guard's report had used the correct spelling.",
          "The village contest had been held unfairly."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "The whole village deserved wholesome flour. It was wholly wicked to hide the damage, whoever paid for it. The miller would wield no weapon, yet expected truth to win. The guard gave a nervous wink, but a pigeon’s damaged wing proved the blast. The miller became the village contest’s winner after repairing the mill honestly.",
          "focusQuote": "The guard gave a nervous wink, but a pigeon’s damaged wing proved the blast."
        },
        "explanation": "鸽子的受损翅膀证明爆炸；并未证明比赛不公或报告拼写决定真相。"
      },
      {
        "type": "inference",
        "prompt": "What does the miller's response to the cover-up demonstrate?",
        "options": [
          "He accepted the boss's explanation after the altered report circulated.",
          "He believed winning the contest mattered more than restoring flour supplies.",
          "He sought evidence and repairs without resorting to violence.",
          "He treated the guard's wink as sufficient proof of the accident's cause."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The whole village deserved wholesome flour. It was wholly wicked to hide the damage, whoever paid for it. The miller would wield no weapon, yet expected truth to win. The guard gave a nervous wink, but a pigeon’s damaged wing proved the blast. The miller became the village contest’s winner after repairing the mill honestly.",
          "focusQuote": "The miller would wield no weapon, yet expected truth to win. The guard gave a nervous wink, but a pigeon’s damaged wing proved the blast. The miller became the village contest’s winner after repairing the mill honestly."
        },
        "explanation": "磨坊主扩大调查、拒用武器、期待真相获胜并诚实修复；不是接受粉饰或凭暗示结案。"
      }
    ]
  },
  {
    "id": "expansion-c-073",
    "questions": [
      {
        "type": "detail",
        "prompt": "What made the child suspect that a captive might be nearby?",
        "options": [
          "The keeper's routine cleaning of radio contacts.",
          "An unusual tapping rhythm on the wooden roof.",
          "A label describing a worldwide pesticide sale.",
          "The hunter's explicit request to release a bird."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 1,
          "quote": "A hunter began to withhold news of a wounded wolf. Plants would wither if the hunter’s poison spread, yet he refused to withdraw. A witty child heard a woodpecker tapping the wooden roof. The strange rhythm made her wonder whether a captive was calling. It was a wonderful clue amid their woe.",
          "focusQuote": "A witty child heard a woodpecker tapping the wooden roof. The strange rhythm made her wonder whether a captive was calling."
        },
        "explanation": "啄木鸟敲木屋顶的奇怪节奏使孩子猜测有被囚者发信；猎人并未请求放鸟。"
      },
      {
        "type": "detail",
        "prompt": "What was concealed inside the drilled workpiece?",
        "options": [
          "The keeper's damaged wireless transmitter.",
          "The wounded wolf's treatment record.",
          "Pesticide intended for international sale.",
          "A map of unpoisoned forest soil."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "Inside the hunter’s workshop, a workman found a trapped bird wrapped in wool and a woollen scarf. A drilled workpiece hid pesticide meant for a worldwide sale; the label read “world-wide.” The keeper freed the bird, treated the wolf, and stopped the shipment. A rescued worm wriggled back into unpoisoned soil.",
          "focusQuote": "A drilled workpiece hid pesticide meant for a worldwide sale; the label read “world-wide.” The keeper freed the bird, treated the wolf, and stopped the shipment."
        },
        "explanation": "钻过的工件藏有准备全球销售的农药；动物伤病是另需处理的问题。"
      },
      {
        "type": "inference",
        "prompt": "What broader purpose did stopping the shipment serve?",
        "options": [
          "Ensuring the hunter could sell the pesticide under a different label.",
          "Eliminating any future need to treat injured forest animals.",
          "Proving that every forest plant had already died from poisoning.",
          "Preventing the hazardous substance from spreading beyond the immediate site."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "Inside the hunter’s workshop, a workman found a trapped bird wrapped in wool and a woollen scarf. A drilled workpiece hid pesticide meant for a worldwide sale; the label read “world-wide.” The keeper freed the bird, treated the wolf, and stopped the shipment. A rescued worm wriggled back into unpoisoned soil.",
          "focusQuote": "A drilled workpiece hid pesticide meant for a worldwide sale; the label read “world-wide.” The keeper freed the bird, treated the wolf, and stopped the shipment."
        },
        "explanation": "原文指出毒物扩散会令植物枯萎，又有全球销售计划，停运有助限制传播；不能推断已全部枯死。"
      }
    ]
  },
  {
    "id": "expansion-c-074",
    "questions": [
      {
        "type": "detail",
        "prompt": "What revealed the captain's hidden stolen cargo?",
        "options": [
          "The writer's copy of the sailor's funeral wreath.",
          "A public announcement from the lighthouse.",
          "A portable x-ray examination.",
          "The captain's voluntary confession during the storm."
        ],
        "answer": 2,
        "evidence": {
          "paragraph": 2,
          "quote": "The writer used a wrench to release a door and helped wrap the sailor’s hand. They would wring water from blankets while rescuers searched the wreckage. A portable x-ray revealed the captain’s hidden stolen cargo. The writer made a xerox copy of the cargo list and delivered it to court. The rescued sailors lived to give their own accounts.",
          "focusQuote": "A portable x-ray revealed the captain’s hidden stolen cargo."
        },
        "explanation": "便携X光发现船长隐藏赃物；复印清单则用于后来提交法庭。"
      },
      {
        "type": "detail",
        "prompt": "What document did the writer deliver to court?",
        "options": [
          "A contract cancelling the rescue mission.",
          "The captain's approved weather forecast.",
          "A bill for the sailor's medical treatment.",
          "A copied cargo list."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "The writer used a wrench to release a door and helped wrap the sailor’s hand. They would wring water from blankets while rescuers searched the wreckage. A portable x-ray revealed the captain’s hidden stolen cargo. The writer made a xerox copy of the cargo list and delivered it to court. The rescued sailors lived to give their own accounts.",
          "focusQuote": "The writer made a xerox copy of the cargo list and delivered it to court."
        },
        "explanation": "作者复印货物清单并送法庭；没有取消救援合同或治疗账单。"
      },
      {
        "type": "inference",
        "prompt": "How did rescuing the sailors strengthen the case?",
        "options": [
          "Survivors could provide their own accounts of what happened.",
          "It made the cargo list unnecessary for any court inquiry.",
          "It proved that the captain had arranged a timely rescue.",
          "It removed the need to examine the stolen cargo physically."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "The writer used a wrench to release a door and helped wrap the sailor’s hand. They would wring water from blankets while rescuers searched the wreckage. A portable x-ray revealed the captain’s hidden stolen cargo. The writer made a xerox copy of the cargo list and delivered it to court. The rescued sailors lived to give their own accounts.",
          "focusQuote": "The rescued sailors lived to give their own accounts."
        },
        "explanation": "结尾明确获救水手活着给出各自陈述，增加证人来源；并非替代清单与实物证据。"
      }
    ]
  },
  {
    "id": "expansion-c-075",
    "questions": [
      {
        "type": "detail",
        "prompt": "What hazard did the boy identify before anyone ate?",
        "options": [
          "Yeast that had failed to produce any dough.",
          "An animal that had entered the bakery through the oven.",
          "A yacht leaking beside the harbor's youth club.",
          "A corroded zinc pipe leaking into the food area."
        ],
        "answer": 3,
        "evidence": {
          "paragraph": 2,
          "quote": "A corroded zinc pipe leaked into the food area of this zone. The boy noticed it before anyone ate. He shut the water off, moved the dough to safety, and helped repair the pipe. His yacht fund bought clean fittings; the youth club later raised the money to repay him.",
          "focusQuote": "A corroded zinc pipe leaked into the food area of this zone. The boy noticed it before anyone ate."
        },
        "explanation": "男孩及时发现腐蚀锌管漏入食品区域；游艇是储蓄目标，不是漏水源。"
      },
      {
        "type": "detail",
        "prompt": "What did he use his yacht savings to purchase?",
        "options": [
          "Clean replacement fittings.",
          "Extra animals for the zebra enclosure.",
          "A larger bowl for the baker's yeast test.",
          "A new yacht for the youth club."
        ],
        "answer": 0,
        "evidence": {
          "paragraph": 2,
          "quote": "A corroded zinc pipe leaked into the food area of this zone. The boy noticed it before anyone ate. He shut the water off, moved the dough to safety, and helped repair the pipe. His yacht fund bought clean fittings; the youth club later raised the money to repay him.",
          "focusQuote": "His yacht fund bought clean fittings; the youth club later raised the money to repay him."
        },
        "explanation": "他的游艇储蓄用于购买洁净管件，之后青年俱乐部筹款归还；没有直接购船。"
      },
      {
        "type": "inference",
        "prompt": "What does the youth club's later response suggest?",
        "options": [
          "The boy's intervention had permanently ended his interest in sailing.",
          "The community helped restore savings he had spent protecting others.",
          "The baker expected the club to take responsibility before any repairs.",
          "The club considered the leaking pipe unrelated to food safety."
        ],
        "answer": 1,
        "evidence": {
          "paragraph": 2,
          "quote": "A corroded zinc pipe leaked into the food area of this zone. The boy noticed it before anyone ate. He shut the water off, moved the dough to safety, and helped repair the pipe. His yacht fund bought clean fittings; the youth club later raised the money to repay him.",
          "focusQuote": "His yacht fund bought clean fittings; the youth club later raised the money to repay him."
        },
        "explanation": "俱乐部后来募款偿还男孩用于安全维修的资金，体现对其保护公共安全的支持；不说明他放弃航海。"
      }
    ]
  }
];
