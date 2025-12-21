import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'QSBS $10 Million Limit - Section 1202 Cap Explained';
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
            background: 'linear-gradient(90deg, #10b981, #059669)',
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
          {/* Section badge */}
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

          {/* Main number */}
          <h1
            style={{
              fontSize: '120px',
              fontWeight: 'bold',
              color: '#10b981',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1,
            }}
          >
            $10M
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              color: 'white',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Tax-Free Capital Gains Limit
          </p>

          {/* Explanation */}
          <p
            style={{
              fontSize: '20px',
              color: '#94a3b8',
              textAlign: 'center',
              margin: 0,
              maxWidth: '700px',
            }}
          >
            Or 10x your cost basis, whichever is greater
          </p>

          {/* Example boxes */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 24px',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '12px',
              }}
            >
              <span style={{ fontSize: '14px', color: '#64748b' }}>Cost Basis</span>
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                $500K
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#64748b',
                fontSize: '24px',
              }}
            >
              →
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px 24px',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '12px',
              }}
            >
              <span style={{ fontSize: '14px', color: '#64748b' }}>Tax-Free Limit</span>
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>
                $10M
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
