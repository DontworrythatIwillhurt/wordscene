# 词汇来源

同时纳入 [ECDICT](https://github.com/skywind3000/ECDICT) 的全部 `cet4` / `cet6` 标记词，补齐参考书重点词表省略的基础词。其许可见 `ECDICT-LICENSE.txt`。统计范围为三个来源的并集。

词表完整纳入 [Qwerty Learner](https://github.com/Kaiyiwing/qwerty-learner) 的 `public/dicts/CET4_T.json` 和 `CET6_T.json`，保留中文释义与英美音标。上游许可见 `DICTIONARY-LICENSE.txt`。

项目根目录 `build-dictionary.mjs` 可重建词库；`dictionary.js` 记录下载日期、原始条目数和 SHA-256。页面运行时离线读取本地词表。

“完整收录”指上述公开参考词表去重并集，不代表穷尽所有出版社词表、派生词、词组和词义。六级学习同时需要四级基础，页面提供分别筛选。

故事覆盖率单独计算：每个内置词均须在实际英文故事情节中通过词元与实际形态标注，只有词表条目不算故事覆盖。当前 300 篇故事覆盖 6,164 个内置词（其中 6,131 个参考词表词、33 个补充词），每词至少一个语境；不代表每种词义或用户之后自添的词都有故事。

新增 260 篇故事采用修仙／悬疑两类人物与情节，中英文段落对应，完成分组结构校验与交叉抽查。完整映射和检查结果见 `story-coverage.json`。

故事为原创语言学习素材，非官方试题。
