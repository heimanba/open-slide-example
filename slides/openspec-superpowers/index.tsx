import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: {
    bg: '#f3ede3',
    text: '#18212b',
    accent: '#c85f2f',
  },
  fonts: {
    display:
      '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
    body:
      '"Avenir Next", "Segoe UI", "PingFang SC", "Hiragino Sans GB", sans-serif',
  },
  typeScale: {
    hero: 152,
    body: 34,
  },
  radius: 24,
};

const palette = {
  ink: design.palette.text,
  paper: '#f7f1e7',
  paperWarm: '#fff9f1',
  accent: design.palette.accent,
  blue: '#3b6e90',
  gold: '#b98b4a',
  muted: '#6e706e',
  line: 'rgba(24,33,43,0.14)',
  lineStrong: 'rgba(24,33,43,0.24)',
  panel: 'rgba(255,249,241,0.86)',
  panelCool: 'rgba(236,242,246,0.92)',
  panelSoft: 'rgba(255,255,255,0.58)',
  accentSoft: 'rgba(200,95,47,0.12)',
  blueSoft: 'rgba(59,110,144,0.12)',
  shadow: '0 32px 80px -36px rgba(24,33,43,0.32)',
};

const font = {
  mono: '"SF Mono", "JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace',
};

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative' as const,
  overflow: 'hidden',
};

const styles = `
  @keyframes os-fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes os-fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes os-draw {
    from { transform: scaleX(0); opacity: 0; }
    to { transform: scaleX(1); opacity: 1; }
  }
  @keyframes os-drift {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  .os-fade-up {
    opacity: 0;
    animation: os-fadeUp 0.8s cubic-bezier(.2,.7,.2,1) forwards;
  }
  .os-fade-in {
    opacity: 0;
    animation: os-fadeIn 1s ease forwards;
  }
  .os-line {
    transform-origin: left center;
    animation: os-draw 0.9s cubic-bezier(.2,.7,.2,1) forwards;
  }
  .os-drift {
    animation: os-drift 5s ease-in-out infinite;
  }
`;

const StyleDefs = () => <style>{styles}</style>;

const PaperBg = () => (
  <>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at 12% 12%, rgba(200,95,47,0.16), transparent 26%), radial-gradient(circle at 82% 20%, rgba(59,110,144,0.14), transparent 28%), linear-gradient(180deg, #f8f3eb 0%, #f2ebdf 100%)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage:
          'linear-gradient(rgba(24,33,43,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(24,33,43,0.04) 1px, transparent 1px)',
        backgroundSize: '96px 96px',
        opacity: 0.42,
      }}
    />
    <div
      style={{
        position: 'absolute',
        inset: '42px',
        border: `1px solid ${palette.line}`,
        borderRadius: 32,
      }}
    />
  </>
);

const Header = ({
  label,
  mark,
}: {
  label: string;
  mark?: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 42,
    }}
  >
    <div
      className="os-fade-up"
      style={{
        fontFamily: font.mono,
        fontSize: 20,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: palette.muted,
      }}
    >
      {label}
    </div>
    <div
      className="os-fade-up"
      style={{
        animationDelay: '0.08s',
        fontFamily: font.mono,
        fontSize: 18,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: palette.muted,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <span
        style={{
          width: 48,
          height: 1,
          background: palette.lineStrong,
        }}
      />
      {mark ?? 'OpenSpec x Superpowers'}
    </div>
  </div>
);

const Footer = ({ page }: { page: string }) => (
  <div
    style={{
      position: 'absolute',
      left: 120,
      right: 120,
      bottom: 54,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: font.mono,
      fontSize: 18,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: palette.muted,
    }}
  >
    <span>Spec Assets + Agent Workflow</span>
    <span>{page}</span>
  </div>
);

const Frame = ({
  page,
  label,
  children,
  mark,
}: {
  page: string;
  label: string;
  children: React.ReactNode;
  mark?: string;
}) => (
  <div style={fill}>
    <StyleDefs />
    <PaperBg />
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        padding: '88px 120px 120px',
        boxSizing: 'border-box',
      }}
    >
      <Header label={label} mark={mark} />
      {children}
      <Footer page={page} />
    </div>
  </div>
);

const PageTitle = ({
  title,
  subtitle,
  accent = palette.accent,
  maxWidth = 1180,
}: {
  title: string;
  subtitle?: string;
  accent?: string;
  maxWidth?: number;
}) => (
  <div style={{ maxWidth }}>
    <div
      className="os-line"
      style={{
        width: 88,
        height: 6,
        borderRadius: 999,
        background: accent,
        marginBottom: 28,
      }}
    />
    <h1
      className="os-fade-up"
      style={{
        margin: 0,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 76,
        lineHeight: 1.08,
        letterSpacing: '-0.04em',
        fontWeight: 800,
      }}
    >
      {title}
    </h1>
    {subtitle ? (
      <p
        className="os-fade-up"
        style={{
          animationDelay: '0.08s',
          margin: '24px 0 0',
          maxWidth,
          fontSize: 32,
          lineHeight: 1.48,
          color: palette.muted,
        }}
      >
        {subtitle}
      </p>
    ) : null}
  </div>
);

const MetricCard = ({
  title,
  body,
  accent,
  delay,
}: {
  title: string;
  body: string;
  accent: string;
  delay: string;
}) => (
  <div
    className="os-fade-up"
    style={{
      animationDelay: delay,
      padding: '26px 28px 24px',
      borderRadius: 'var(--osd-radius)',
      background: palette.panel,
      border: `1px solid ${palette.line}`,
      boxShadow: palette.shadow,
    }}
  >
    <div
      style={{
        fontFamily: font.mono,
        fontSize: 18,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: accent,
        marginBottom: 14,
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontSize: 28,
        lineHeight: 1.42,
        color: palette.ink,
      }}
    >
      {body}
    </div>
  </div>
);

const BulletList = ({
  items,
  accent = palette.accent,
  size = 31,
}: {
  items: string[];
  accent?: string;
  size?: number;
}) => (
  <div style={{ display: 'grid', gap: 22 }}>
    {items.map((item, index) => (
      <div
        key={item}
        className="os-fade-up"
        style={{
          animationDelay: `${0.1 + index * 0.08}s`,
          display: 'grid',
          gridTemplateColumns: '24px 1fr',
          gap: 18,
          alignItems: 'start',
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            marginTop: 18,
            borderRadius: '50%',
            background: accent,
            boxShadow: `0 0 0 8px ${accent === palette.blue ? palette.blueSoft : palette.accentSoft}`,
          }}
        />
        <span
          style={{
            fontSize: size,
            lineHeight: 1.48,
          }}
        >
          {item}
        </span>
      </div>
    ))}
  </div>
);

const ColumnCard = ({
  title,
  tone,
  items,
}: {
  title: string;
  tone: 'warm' | 'cool' | 'neutral';
  items: string[];
}) => {
  const background =
    tone === 'warm'
      ? palette.panel
      : tone === 'cool'
        ? palette.panelCool
        : palette.panelSoft;
  const accent = tone === 'warm' ? palette.accent : tone === 'cool' ? palette.blue : palette.gold;

  return (
    <div
      className="os-fade-up"
      style={{
        padding: '28px 30px 30px',
        borderRadius: 'var(--osd-radius)',
        background,
        border: `1px solid ${palette.line}`,
        boxShadow: palette.shadow,
      }}
    >
      <div
        style={{
          fontFamily: font.mono,
          fontSize: 18,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: accent,
          marginBottom: 18,
        }}
      >
        {title}
      </div>
      <div style={{ display: 'grid', gap: 16 }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              fontSize: 28,
              lineHeight: 1.42,
              color: palette.ink,
              paddingLeft: 20,
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 15,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: accent,
              }}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const ComparisonCell = ({
  children,
  accent,
  align = 'left',
  style,
}: {
  children: React.ReactNode;
  accent?: string;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      padding: '18px 22px',
      borderBottom: `1px solid ${palette.line}`,
      fontSize: 26,
      lineHeight: 1.38,
      color: palette.ink,
      textAlign: align,
      background: accent ?? 'transparent',
      ...style,
    }}
  >
    {children}
  </div>
);

const StepCard = ({
  step,
  title,
  items,
  accent,
  delay,
}: {
  step: string;
  title: string;
  items: string[];
  accent: string;
  delay: string;
}) => (
  <div
    className="os-fade-up"
    style={{
      animationDelay: delay,
      flex: 1,
      minHeight: 360,
      padding: '28px 28px 30px',
      borderRadius: 'var(--osd-radius)',
      background: palette.panel,
      border: `1px solid ${palette.line}`,
      boxShadow: palette.shadow,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        fontFamily: font.mono,
        fontSize: 18,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: accent,
      }}
    >
      {step}
    </div>
    <h3
      style={{
        margin: '18px 0 18px',
        fontFamily: 'var(--osd-font-display)',
        fontSize: 48,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
      }}
    >
      {title}
    </h3>
    <div style={{ display: 'grid', gap: 14, marginTop: 'auto' }}>
      {items.map((item) => (
        <div
          key={item}
          style={{
            fontSize: 26,
            lineHeight: 1.4,
            color: palette.ink,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const Cover: Page = () => (
  <Frame page="01 / 08" label="AI Delivery Control Surface" mark="Technical editorial">
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.08fr 0.92fr',
        gap: 48,
        alignItems: 'start',
        paddingTop: 8,
      }}
    >
      <div>
        <div
          className="os-fade-up"
          style={{
            fontFamily: font.mono,
            fontSize: 22,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: palette.accent,
            marginBottom: 24,
          }}
        >
          OpenSpec + Superpowers
        </div>
        <h1
          className="os-fade-up"
          style={{
            animationDelay: '0.06s',
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 132,
            lineHeight: 0.98,
            letterSpacing: '-0.055em',
            fontWeight: 800,
            maxWidth: 860,
          }}
        >
          规格有人管
          <br />
          交付有人守
          <br />
          AI 开发才可控
        </h1>
        <p
          className="os-fade-up"
          style={{
            animationDelay: '0.14s',
            margin: '28px 0 0',
            maxWidth: 860,
            fontSize: 30,
            lineHeight: 1.45,
            color: palette.muted,
          }}
        >
          <span style={{ color: palette.accent, fontWeight: 700 }}>OpenSpec</span>{' '}
          负责沉淀 spec 与 changes，
          <span style={{ color: palette.blue, fontWeight: 700 }}>Superpowers</span>{' '}
          负责把澄清、验证与 review 变成默认动作。
        </p>
      </div>

      <div
        className="os-drift"
        style={{
          display: 'grid',
          gap: 18,
        }}
      >
        <MetricCard
          title="OpenSpec"
          accent={palette.accent}
          delay="0.18s"
          body="管理 specs 与 changes，把目标、边界、验收和 delta 变成可追溯资产。"
        />
        <MetricCard
          title="Superpowers"
          accent={palette.blue}
          delay="0.26s"
          body="管理 agent 的节奏与验证，把设计澄清、TDD、review 变成默认动作。"
        />
        <div
          className="os-fade-up"
          style={{
            animationDelay: '0.34s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '22px 24px',
            borderRadius: 'var(--osd-radius)',
            background: palette.panelSoft,
            border: `1px solid ${palette.line}`,
          }}
        >
          <span
            style={{
              fontSize: 25,
              lineHeight: 1.35,
              maxWidth: 360,
            }}
          >
            前者回答“做什么”，后者回答“怎么做得可靠”。
          </span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 22,
              letterSpacing: '0.12em',
              color: palette.gold,
            }}
          >
            CONTROL
          </span>
        </div>
      </div>
    </div>
  </Frame>
);

const Problem: Page = () => (
  <Frame page="02 / 08" label="The real bottleneck">
    <div style={{ display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', gap: 56 }}>
      <div>
        <PageTitle
          title="AI 开发缺的不是更会写代码，而是更可控"
          subtitle="真正的问题常常出在共识、变更和执行三层：需求没沉淀、delta 没分离、流程没纪律。"
        />
        <div style={{ display: 'grid', gap: 18, marginTop: 42 }}>
          <MetricCard
            title="共识缺席"
            accent={palette.accent}
            delay="0.12s"
            body="需求边界、非目标、验收条件没有固定下来，AI 很容易越做越偏。"
          />
          <MetricCard
            title="变更混线"
            accent={palette.gold}
            delay="0.2s"
            body="现状基线和本次修改混在一起，review 成本高，追溯成本更高。"
          />
          <MetricCard
            title="执行失序"
            accent={palette.blue}
            delay="0.28s"
            body="直接开写、缺少验证和收尾，导致输出像 demo，不像交付。"
          />
        </div>
      </div>

      <div
        className="os-fade-up"
        style={{
          animationDelay: '0.18s',
          padding: 36,
          borderRadius: 30,
          border: `1px solid ${palette.line}`,
          background: palette.panel,
          boxShadow: palette.shadow,
          display: 'grid',
          gap: 22,
          alignContent: 'start',
        }}
      >
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 20,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: palette.muted,
          }}
        >
          Two layers of control
        </div>
        <div
          style={{
            padding: '28px 30px',
            borderRadius: 24,
            background: palette.accentSoft,
            border: `1px solid rgba(200,95,47,0.18)`,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 48,
              lineHeight: 1.08,
              marginBottom: 14,
            }}
          >
            规格控制层
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.45 }}>
            把目标、边界、变更影响、验收标准沉淀成 shared truth。
          </div>
        </div>
        <div
          className="os-drift"
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 54,
            color: palette.gold,
            lineHeight: 1,
          }}
        >
          ↓
        </div>
        <div
          style={{
            padding: '28px 30px',
            borderRadius: 24,
            background: palette.blueSoft,
            border: `1px solid rgba(59,110,144,0.18)`,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 48,
              lineHeight: 1.08,
              marginBottom: 14,
            }}
          >
            执行控制层
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.45 }}>
            把拆解、验证、review、收尾变成 agent 的默认工作节奏。
          </div>
        </div>
        <div
          style={{
            marginTop: 10,
            paddingTop: 20,
            borderTop: `1px solid ${palette.line}`,
            fontSize: 27,
            lineHeight: 1.45,
            color: palette.muted,
          }}
        >
          所以这不是“谁替代谁”的问题，而是“你是否同时拥有两层控制面”。
        </div>
      </div>
    </div>
  </Frame>
);

const OpenSpecPage: Page = () => (
  <Frame page="03 / 08" label="Spec asset governance" mark="OpenSpec">
    <div style={{ display: 'grid', gridTemplateColumns: '0.98fr 1.02fr', gap: 52 }}>
      <div>
        <PageTitle
          title="OpenSpec 管的是 change / spec 资产"
          subtitle="它的重点不是替 AI 生成更多文档，而是把当前基线和本次 delta 分开管理。"
          accent={palette.accent}
        />
        <div style={{ marginTop: 42 }}>
          <BulletList
            items={[
              '`openspec/specs/` 维护当前行为的 source of truth。',
              '`openspec/changes/` 维护 proposal、spec、design、tasks 与推进过程。',
              '适合复杂需求、多人协作、brownfield 改造与需要正式 review 的场景。',
            ]}
          />
        </div>
      </div>

      <div
        className="os-fade-up"
        style={{
          animationDelay: '0.18s',
          padding: 34,
          borderRadius: 30,
          border: `1px solid ${palette.line}`,
          background: palette.paperWarm,
          boxShadow: palette.shadow,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 18,
            marginBottom: 22,
          }}
        >
          <ColumnCard
            title="Current baseline"
            tone="neutral"
            items={['specs/', '现状行为', '长期共识']}
          />
          <ColumnCard
            title="This change"
            tone="warm"
            items={['proposal.md', 'design.md', 'tasks.md']}
          />
        </div>
        <div
          style={{
            padding: '24px 26px',
            borderRadius: 22,
            background: palette.panelSoft,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div
            style={{
              fontFamily: font.mono,
              fontSize: 18,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: palette.muted,
              marginBottom: 14,
            }}
          >
            Workflow
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.28,
              fontFamily: font.mono,
              color: palette.ink,
            }}
          >
            /opsx:propose → /opsx:apply → /opsx:archive
          </div>
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 28,
            lineHeight: 1.45,
            color: palette.muted,
          }}
        >
          本质上，OpenSpec 增强的不是“模型智力”，而是变更的可解释性、可评审性和可归档性。
        </div>
      </div>
    </div>
  </Frame>
);

const SuperpowersPage: Page = () => (
  <Frame page="04 / 08" label="Execution governance" mark="Superpowers">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52 }}>
      <div
        className="os-fade-up"
        style={{
          animationDelay: '0.1s',
          padding: 34,
          borderRadius: 30,
          border: `1px solid ${palette.line}`,
          background: palette.panelCool,
          boxShadow: palette.shadow,
          display: 'grid',
          gap: 18,
          alignContent: 'start',
        }}
      >
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 18,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: palette.blue,
          }}
        >
          Agent workflow ladder
        </div>
        {[
          'Design clarification',
          'Task planning',
          'TDD loop',
          'Subagent execution',
          'Code review + verification',
        ].map((item, index) => (
          <div
            key={item}
            style={{
              display: 'grid',
              gridTemplateColumns: '56px 1fr',
              gap: 18,
              alignItems: 'center',
              padding: '16px 18px',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.52)',
              border: `1px solid ${palette.line}`,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: palette.blueSoft,
                color: palette.blue,
                display: 'grid',
                placeItems: 'center',
                fontFamily: font.mono,
                fontSize: 20,
              }}
            >
              0{index + 1}
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.35 }}>{item}</div>
          </div>
        ))}
      </div>

      <div>
        <PageTitle
          title="Superpowers 管的是 agent behavior / workflow"
          subtitle="重点不是给 AI 更多上下文，而是强约束它按成熟工程团队的节奏工作。"
          accent={palette.blue}
        />
        <div style={{ marginTop: 42 }}>
          <BulletList
            items={[
              '通过 brainstorming、writing-plans 先澄清设计与任务边界。',
              '通过 test-driven-development 把“先验证后实现”变成常态。',
              '通过 subagent 与 code review，把“写完了”变成“证据足够了”。',
            ]}
            accent={palette.blue}
          />
        </div>
        <div
          className="os-fade-up"
          style={{
            animationDelay: '0.34s',
            marginTop: 34,
            padding: '24px 28px',
            borderRadius: 24,
            background: palette.panelSoft,
            border: `1px solid ${palette.line}`,
            fontSize: 28,
            lineHeight: 1.45,
            color: palette.muted,
          }}
        >
          它真正增强的不是代码生成能力，而是 AI 的工程纪律。
        </div>
      </div>
    </div>
  </Frame>
);

const Comparison: Page = () => (
  <Frame page="05 / 08" label="Core contrast">
    <PageTitle
      title="一个管资产，一个管行为"
      subtitle="不要问谁更强，要问你现在缺的是规格治理，还是执行治理。"
      accent={palette.gold}
      maxWidth={1240}
    />
    <div
      className="os-fade-up"
      style={{
        animationDelay: '0.14s',
        marginTop: 38,
        borderRadius: 28,
        overflow: 'hidden',
        border: `1px solid ${palette.line}`,
        boxShadow: palette.shadow,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.82fr 1fr 1fr',
          background: palette.panel,
        }}
      >
        <ComparisonCell align="center">
          <strong>维度</strong>
        </ComparisonCell>
        <ComparisonCell align="center" accent={palette.accentSoft}>
          <strong>OpenSpec</strong>
        </ComparisonCell>
        <ComparisonCell align="center" accent={palette.blueSoft}>
          <strong>Superpowers</strong>
        </ComparisonCell>
        <ComparisonCell>
          <strong>核心对象</strong>
        </ComparisonCell>
        <ComparisonCell accent={palette.accentSoft}>规格、变更、验收、归档</ComparisonCell>
        <ComparisonCell accent={palette.blueSoft}>Agent 行为、执行、验证、review</ComparisonCell>
        <ComparisonCell>
          <strong>主要控制点</strong>
        </ComparisonCell>
        <ComparisonCell accent={palette.accentSoft}>边界是否清晰，delta 是否可追溯</ComparisonCell>
        <ComparisonCell accent={palette.blueSoft}>AI 是否按工程纪律推进</ComparisonCell>
        <ComparisonCell>
          <strong>关键产物</strong>
        </ComparisonCell>
        <ComparisonCell accent={palette.accentSoft}>proposal / spec / design / tasks / archive</ComparisonCell>
        <ComparisonCell accent={palette.blueSoft}>clarification / plan / TDD / subagent review</ComparisonCell>
        <ComparisonCell>
          <strong>最擅长防什么</strong>
        </ComparisonCell>
        <ComparisonCell accent={palette.accentSoft}>需求跑偏、评审无依据、知识不沉淀</ComparisonCell>
        <ComparisonCell accent={palette.blueSoft}>直接开写、任务失控、质量不稳</ComparisonCell>
        <ComparisonCell style={{ borderBottom: 'none' }}>
          <strong>单独使用的短板</strong>
        </ComparisonCell>
        <ComparisonCell accent={palette.accentSoft} style={{ borderBottom: 'none' }}>
          文档完整，但执行未必稳定
        </ComparisonCell>
        <ComparisonCell accent={palette.blueSoft} style={{ borderBottom: 'none' }}>
          执行很强，但缺少正式变更基线
        </ComparisonCell>
      </div>
    </div>
  </Frame>
);

const CombinedFlow: Page = () => (
  <Frame page="06 / 08" label="Recommended operating model">
    <PageTitle
      title="最推荐的关系是串联，不是替代"
      subtitle="OpenSpec 先定义边界，Superpowers 推动交付，OpenSpec 再回收知识。"
      accent={palette.accent}
    />
    <div
      style={{
        display: 'flex',
        gap: 24,
        alignItems: 'stretch',
        marginTop: 42,
      }}
    >
      <StepCard
        step="Step 1"
        title="OpenSpec"
        accent={palette.accent}
        delay="0.12s"
        items={['对齐目标', '写清范围与非目标', '固定验收标准']}
      />
      <div
        className="os-fade-in"
        style={{
          animationDelay: '0.22s',
          display: 'grid',
          placeItems: 'center',
          fontSize: 56,
          color: palette.gold,
          paddingTop: 112,
        }}
      >
        →
      </div>
      <StepCard
        step="Step 2"
        title="Superpowers"
        accent={palette.blue}
        delay="0.26s"
        items={['设计澄清', '任务拆解', 'TDD / subagent / review']}
      />
      <div
        className="os-fade-in"
        style={{
          animationDelay: '0.36s',
          display: 'grid',
          placeItems: 'center',
          fontSize: 56,
          color: palette.gold,
          paddingTop: 112,
        }}
      >
        →
      </div>
      <StepCard
        step="Step 3"
        title="OpenSpec"
        accent={palette.accent}
        delay="0.4s"
        items={['archive / sync', '回写规格基线', '沉淀组织知识']}
      />
    </div>
    <div
      className="os-fade-up"
      style={{
        animationDelay: '0.46s',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 18,
        marginTop: 26,
      }}
    >
      {[
        '减少方向错',
        '减少过程乱',
        '让结果可追溯',
      ].map((item) => (
        <div
          key={item}
          style={{
            padding: '18px 22px',
            borderRadius: 18,
            border: `1px solid ${palette.line}`,
            background: palette.panelSoft,
            fontSize: 26,
            lineHeight: 1.35,
            textAlign: 'center',
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </Frame>
);

const Usage: Page = () => (
  <Frame page="07 / 08" label="Decision guide">
    <PageTitle
      title="什么时候单独用，什么时候组合用"
      subtitle="判断标准不是流行度，而是你当前最痛的控制缺口在哪一层。"
      accent={palette.blue}
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 22,
        marginTop: 40,
      }}
    >
      <ColumnCard
        title="优先 OpenSpec"
        tone="warm"
        items={['跨角色协作明显', '需求复杂，非目标要写清楚', '存量系统需要区分现状与本次 delta']}
      />
      <ColumnCard
        title="优先 Superpowers"
        tone="cool"
        items={['需求已大致明确', 'AI 执行质量不稳定', '你更痛的是拆解、测试顺序与 review']}
      />
      <ColumnCard
        title="默认组合使用"
        tone="neutral"
        items={['重要业务、复杂需求', '多人协作、周期更长', '既要先说清楚，也要做得稳']}
      />
    </div>
    <div
      className="os-fade-up"
      style={{
        animationDelay: '0.24s',
        marginTop: 28,
        padding: '22px 26px',
        borderRadius: 22,
        border: `1px solid ${palette.line}`,
        background: palette.panelSoft,
        fontSize: 28,
        lineHeight: 1.45,
        color: palette.muted,
      }}
    >
      不必一开始就走最重流程。小型脚本、临时验证原型、低风险任务，可以只拿其中一层控制面先试点。
    </div>
  </Frame>
);

const Closing: Page = () => (
  <Frame page="08 / 08" label="Closing line">
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr auto',
        height: 760,
        alignContent: 'start',
      }}
    >
      <div
        className="os-fade-up"
        style={{
          fontFamily: font.mono,
          fontSize: 22,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: palette.accent,
          marginBottom: 26,
        }}
      >
        Final takeaway
      </div>
      <h1
        className="os-fade-up"
        style={{
          animationDelay: '0.06s',
          margin: 0,
          fontFamily: 'var(--osd-font-display)',
          fontSize: 112,
          lineHeight: 0.96,
          letterSpacing: '-0.055em',
          fontWeight: 800,
          maxWidth: 1500,
        }}
      >
        规格清晰
        <span style={{ color: palette.accent }}> + </span>
        执行可靠
        <span style={{ color: palette.blue }}> + </span>
        结果可追溯
      </h1>
      <div
        className="os-fade-up"
        style={{
          animationDelay: '0.16s',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1.12fr',
          gap: 22,
          marginTop: 44,
        }}
      >
        <MetricCard
          title="Only OpenSpec"
          accent={palette.accent}
          delay="0s"
          body="你解决的是“需求说清楚”。"
        />
        <MetricCard
          title="Only Superpowers"
          accent={palette.blue}
          delay="0s"
          body="你解决的是“AI 更会做事”。"
        />
        <MetricCard
          title="Together"
          accent={palette.gold}
          delay="0s"
          body="你解决的是“AI 开发能不能稳定落地”。"
        />
      </div>
      <p
        className="os-fade-up"
        style={{
          animationDelay: '0.28s',
          margin: '34px 0 0',
          maxWidth: 1380,
          fontSize: 34,
          lineHeight: 1.5,
          color: palette.muted,
        }}
      >
        在 AI 研发里，真正稀缺的不是生成速度，而是方向、过程和结果能不能形成闭环。
      </p>
    </div>
  </Frame>
);

export const meta: SlideMeta = {
  title: 'OpenSpec 与 Superpowers',
};

export default [
  Cover,
  Problem,
  OpenSpecPage,
  SuperpowersPage,
  Comparison,
  CombinedFlow,
  Usage,
  Closing,
] satisfies Page[];
