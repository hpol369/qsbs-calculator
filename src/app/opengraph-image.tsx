import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'QSBS Calculator - Section 1202 Tax Savings';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top decorative element */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* IRC Section badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '9999px',
              padding: '8px 20px',
            }}
          >
            <span style={{ color: '#10b981', fontSize: '18px' }}>IRC Section 1202</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            QSBS Calculator
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '28px',
              color: '#94a3b8',
              textAlign: 'center',
              margin: 0,
              maxWidth: '800px',
            }}
          >
            Estimate your Section 1202 tax savings in 60 seconds
          </p>

          {/* Key stats */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginTop: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#10b981' }}>
                $10M+
              </span>
              <span style={{ fontSize: '16px', color: '#64748b' }}>
                Max Tax-Free Gain
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#3b82f6' }}>
                100%
              </span>
              <span style={{ fontSize: '16px', color: '#64748b' }}>
                Federal Exclusion
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#8b5cf6' }}>
                5 Yrs
              </span>
              <span style={{ fontSize: '16px', color: '#64748b' }}>
                Holding Period
              </span>
            </div>
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '20px', color: '#64748b' }}>qsbsguide.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
