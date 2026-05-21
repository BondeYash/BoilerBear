import { CodecError, type Plan, decodePlan } from '@boilerbear/core';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const WIDTH = 1200;
const HEIGHT = 630;

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ hash: string }> },
): Promise<Response> {
  const { hash } = await ctx.params;

  let plan: Plan;
  try {
    plan = decodePlan(decodeURIComponent(hash));
  } catch (err) {
    if (!(err instanceof CodecError)) throw err;
    return renderFallback();
  }

  const modules = plan.modules.slice(0, 8);
  const overflow = plan.modules.length - modules.length;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '64px',
        background: 'linear-gradient(135deg, #0b1220 0%, #111c2f 50%, #1b2c4b 100%)',
        color: '#f8fafc',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '28px' }}>
        <span style={{ fontSize: '40px' }}>🐻</span>
        <span style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>BoilerBear</span>
        <span style={{ marginLeft: 'auto', color: '#94a3b8', fontSize: '20px' }}>shared stack</span>
      </div>

      <div
        style={{
          marginTop: '64px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <div style={{ color: '#94a3b8', fontSize: '24px', display: 'flex' }}>Project</div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            display: 'flex',
          }}
        >
          {plan.projectName}
        </div>
      </div>

      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontSize: '24px',
          color: '#cbd5e1',
        }}
      >
        <span
          style={{
            padding: '6px 16px',
            border: '1px solid #60a5fa',
            borderRadius: '999px',
            background: 'rgba(96, 165, 250, 0.1)',
            color: '#bfdbfe',
            display: 'flex',
          }}
        >
          {plan.base}
        </span>
        <span style={{ display: 'flex' }}>·</span>
        <span style={{ display: 'flex' }}>{plan.packageManager}</span>
        <span style={{ display: 'flex' }}>·</span>
        <span style={{ display: 'flex' }}>{plan.modules.length} modules</span>
      </div>

      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {modules.map((id) => (
          <span
            key={id}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'rgba(148, 163, 184, 0.16)',
              color: '#e2e8f0',
              fontSize: '22px',
              fontFamily: 'ui-monospace, SFMono-Regular, monospace',
              display: 'flex',
            }}
          >
            {id}
          </span>
        ))}
        {overflow > 0 && (
          <span
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'rgba(148, 163, 184, 0.08)',
              color: '#94a3b8',
              fontSize: '22px',
              display: 'flex',
            }}
          >
            +{overflow} more
          </span>
        )}
      </div>

      <div
        style={{
          marginTop: 'auto',
          fontSize: '20px',
          color: '#64748b',
          display: 'flex',
        }}
      >
        boilerbear.dev — pick your stack, get one command
      </div>
    </div>,
    {
      width: WIDTH,
      height: HEIGHT,
    },
  );
}

function renderFallback(): Response {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0b1220, #1b2c4b)',
        color: '#f8fafc',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ fontSize: '56px', fontWeight: 800, display: 'flex' }}>🐻 BoilerBear</div>
      <div style={{ marginTop: '20px', fontSize: '24px', color: '#94a3b8', display: 'flex' }}>
        Pick your stack. Get one command.
      </div>
    </div>,
    { width: WIDTH, height: HEIGHT },
  );
}
