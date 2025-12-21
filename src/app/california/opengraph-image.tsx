import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'California QSBS Tax - No State Exclusion';
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
        {/* Top decorative element - warning colors */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #ef4444, #f59e0b)',
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
          {/* Warning badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '9999px',
              padding: '8px 20px',
            }}
          >
            <span style={{ color: '#ef4444', fontSize: '18px' }}>No State QSBS Exclusion</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            California & QSBS
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
            What California founders need to know
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
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#ef4444' }}>
                0%
              </span>
              <span style={{ fontSize: '16px', color: '#64748b' }}>
                California Exclusion
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#f59e0b' }}>
                13.3%
              </span>
              <span style={{ fontSize: '16px', color: '#64748b' }}>
                CA Tax Rate
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
