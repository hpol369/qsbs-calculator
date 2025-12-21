import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ISO Exercise and QSBS - When Your Holding Period Starts';
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
            background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
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
          {/* ISO badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '9999px',
              padding: '8px 20px',
            }}
          >
            <span style={{ color: '#8b5cf6', fontSize: '18px' }}>Incentive Stock Options</span>
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
            ISO Exercise & QSBS
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
            Your 5-year clock starts at exercise, not grant
          </p>

          {/* Timeline visualization */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
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
              <span style={{ fontSize: '18px', color: '#64748b' }}>Grant Date</span>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#475569',
                  marginTop: '8px',
                }}
              />
            </div>
            <div
              style={{
                width: '80px',
                height: '4px',
                background: '#475569',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '18px', color: '#10b981', fontWeight: 'bold' }}>
                Exercise Date
              </span>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#10b981',
                  marginTop: '8px',
                }}
              />
              <span style={{ fontSize: '14px', color: '#10b981', marginTop: '4px' }}>
                Clock Starts
              </span>
            </div>
            <div
              style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #10b981, #3b82f6)',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '18px', color: '#3b82f6', fontWeight: 'bold' }}>
                +5 Years
              </span>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#3b82f6',
                  marginTop: '8px',
                }}
              />
              <span style={{ fontSize: '14px', color: '#3b82f6', marginTop: '4px' }}>
                QSBS Eligible
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
