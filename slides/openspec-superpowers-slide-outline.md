# OpenSpec 与 Superpowers Slide 稿

## 一页浓缩版

### 标题
OpenSpec 与 Superpowers：让 AI 开发从“会写代码”走向“可控交付”

### 开场结论
- 大多数 AI 开发失控，不是模型不会写代码，而是缺少两类约束：
- 规格约束：需求、边界、变更、验收没有被沉淀成共识
- 执行约束：AI 没有按工程流程拆解、验证、评审和收尾
- `OpenSpec` 主要补规格约束，`Superpowers` 主要补执行约束

### 两个框架分别解决什么问题

`OpenSpec`
- 一个轻量但可追溯的 spec/change framework
- 核心价值是把当前规格基线与本次变更分开管理
- 典型路径是 `openspec/specs/` 维护 source of truth，`openspec/changes/` 承载 proposal、spec、design、tasks 和变更过程
- 适合复杂需求、多人协作、brownfield 改造、需要 review 和归档的场景

`Superpowers`
- 一个面向 coding agent 的工程化方法论与 skill 体系
- 核心价值是强约束 AI 的工作节奏，而不是只给它更多上下文
- 典型能力包括：`brainstorming`、`writing-plans`、`test-driven-development`、`subagent-driven-development`、`requesting-code-review`
- 适合需求已经大致明确，但希望 AI 执行更稳、更像成熟工程团队的场景

### 最关键的一句对比
- `OpenSpec` 管的是 change/spec asset
- `Superpowers` 管的是 agent behavior/workflow
- 前者回答“做什么”，后者回答“怎么做得可靠”

### 推荐组合方式
```text
业务想法
  ↓
OpenSpec：对齐目标、边界、验收、变更影响
  ↓
Superpowers：设计澄清、任务拆解、TDD、子代理执行、review
  ↓
OpenSpec：归档变更、同步规格、沉淀组织知识
```

### 收尾金句
如果只上 `OpenSpec`，你解决的是“需求说清楚”；如果只上 `Superpowers`，你解决的是“AI 更会做事”；两者组合，解决的是“AI 开发能不能稳定落地”。

---

## 多页展开版

## Slide 1. 先讲问题，不先讲框架

### 标题
为什么今天 AI 开发缺的不是“更会写代码”，而是“更可控”

### 内容
- AI 写代码的能力已经不是主要瓶颈，真正的问题通常出在三件事：
- 需求没有沉淀成稳定共识
- 变更没有与现状基线分离，review 和追溯成本高
- 执行没有工程纪律，容易直接开写、越写越散
- 所以 SDD 真正需要的不是一个万能框架，而是两层控制：
- 一层控制规格与变更
- 一层控制 AI 的执行行为

### 讲者备注
- 这一页先把听众从“工具比较”拉到“研发控制面”。
- 不要一开始就报命令名，否则听众会误以为这是两个 prompt 集合。

## Slide 2. OpenSpec 的定位

### 标题
OpenSpec：把需求讨论变成可评审、可追溯的变更资产

### 内容
- `OpenSpec` 的核心不是“帮 AI 生成文档”，而是建立规格基线和变更闭环
- 它把系统当前行为放在 `openspec/specs/`，把本次变更放在 `openspec/changes/`
- 变更目录里通常包含：
- `proposal.md`：为什么要做
- `specs/`：行为变化与验收场景
- `design.md`：技术方案
- `tasks.md`：实施清单
- 标准工作流可以概括为：`/opsx:propose -> /opsx:apply -> /opsx:archive`
- 如果需要更细粒度控制，还可以扩展到 `explore/new/continue/ff/verify/sync`

### 你可以直接讲的一句话
`OpenSpec` 不是在增强模型智力，而是在增强变更的可解释性、可评审性和可归档性。

### 讲者备注
- 只讲“specs 与 changes 分离”这个关键设计，不要陷入目录细节。
- 对外分享时，重点强调它是 brownfield-first、iterative、fluid，不是重型流程审批系统。

## Slide 3. Superpowers 的定位

### 标题
Superpowers：给 coding agent 一条更像资深工程师的执行路径

### 内容
- `Superpowers` 的核心不是 spec，而是一组会自动介入的工程化 skills
- 它强调：先澄清设计，再拆计划，再按任务执行，再 review 收尾
- 典型能力链路包括：
- `brainstorming`：先把问题问清楚、把设计讲清楚
- `writing-plans`：把任务拆到足够细，降低执行漂移
- `test-driven-development`：先有失败测试，再写实现
- `subagent-driven-development`：按任务派子代理执行，并做双阶段 review
- `requesting-code-review` / `verification-before-completion`：把“写完了”改成“证据充足了”

### 你可以直接讲的一句话
`Superpowers` 真正增强的不是代码生成能力，而是 AI 的工程纪律。

### 讲者备注
- 这一页不要把它讲成“很多 skill 的集合”，而要讲成“把工程流程内化给 agent”。
- 听众如果已经在用 Cursor/Codex/Claude，会很容易理解它的价值。

## Slide 4. 两者到底差在哪

### 标题
OpenSpec vs Superpowers：一个管资产，一个管行为

| 维度 | OpenSpec | Superpowers |
| --- | --- | --- |
| 核心对象 | 规格、变更、验收、归档 | Agent 行为、任务执行、验证、review |
| 本质形态 | spec/change framework | agent workflow methodology |
| 主要控制点 | 需求边界是否清晰、变更是否可追溯 | AI 是否按工程纪律执行 |
| 关键产物 | proposal/spec/design/tasks/archive | design clarification、plan、TDD loop、subagent review |
| 最擅长的风险 | 需求跑偏、评审无依据、知识不沉淀 | 直接开写、任务失控、质量不稳 |
| 更适合的组织问题 | 多人协作、复杂需求、brownfield 变更 | 单人/小团队高频交付、AI 执行质量 |
| 单独使用时的短板 | 文档完整但执行未必稳定 | 执行很强但缺少正式变更基线 |

### 一句判断
不要问“谁更强”，要问“你现在缺的是规格治理，还是执行治理”。

## Slide 5. 为什么两者搭配最有价值

### 标题
最推荐的组合：OpenSpec 定义边界，Superpowers 推动交付，OpenSpec 回收知识

### 内容
```text
1. 需求进入
   用 OpenSpec 先把目标、范围、约束、验收条件讲清楚

2. 进入实现
   用 Superpowers 做设计澄清、任务拆解、TDD、子代理执行、代码审查

3. 完成收尾
   回到 OpenSpec 做 archive / sync，把结果沉淀回规格基线
```

### 为什么这个组合成立
- `OpenSpec` 负责减少“方向错”
- `Superpowers` 负责减少“过程乱”
- 二者组合后，需求、实现、验收、归档能形成闭环

### 讲者备注
- 这是全场最重要的一页，要明确说“不是替代关系，而是上下游协作关系”。
- 也可以补一句：在重要项目里，这种组合比“直接给 AI 一个大 prompt”稳得多。

## Slide 6. 应用场景怎么选

### 标题
什么时候单独用，什么时候组合用

### 内容

`优先上 OpenSpec`
- 跨角色协作明显
- 需求复杂，边界和非目标需要明确写下来
- 存量系统改造，需要把“现状”和“本次 delta”分开
- 需要 review、留档、可追溯

`优先上 Superpowers`
- 需求基本清楚，但 AI 执行质量不稳定
- 你更痛的是任务拆不好、测试先后顺序混乱、review 太弱
- 以个人或小团队为主，希望显著提升 agent 的工程行为

`默认组合使用`
- 重要业务、复杂需求、多人协作、较长周期迭代
- 既要“先说清楚”，又要“做得稳”

`不必一开始就重度使用`
- 很小的一次性脚本
- 临时验证性质的原型
- 低风险、低协作成本的短平快任务

## Slide 7. 落地建议与常见误区

### 标题
真正落地时，最常见的误区不是不会用，而是用错层

### 内容

`误区 1`
- 把 `OpenSpec` 当成“多写几份 Markdown”
- 正确理解：它管理的是 change baseline，而不是文档数量

`误区 2`
- 把 `Superpowers` 当成“prompt 技巧合集”
- 正确理解：它的价值在强约束流程，不在单条 prompt

`误区 3`
- 只在开头写 spec，不在结尾归档
- 正确理解：不回写规格基线，组织知识就不会累计

`落地建议`
- 团队第一次试点时，不要同时追求“全流程最重形态”
- 可以先用 `OpenSpec` 管重要变更，再让 `Superpowers` 管实现阶段
- 先在 1-2 个高价值需求上建立正反馈，再决定是否扩展为团队默认流程

### 收尾金句
在 AI 研发里，真正稀缺的不是“写代码速度”，而是“规格清晰 + 执行可靠 + 结果可追溯”。

---

## 30 秒电梯版

如果只看一句话：`OpenSpec` 管的是规格和变更基线，解决“做什么、改什么、验收什么”；`Superpowers` 管的是 agent 的执行纪律，解决“怎么拆、怎么测、怎么 review、怎么稳定交付”。两者不是替代关系，而是最适合串联使用的上下游：先用 `OpenSpec` 对齐需求和边界，再用 `Superpowers` 推动高质量实现，最后回到 `OpenSpec` 完成归档和知识沉淀。
