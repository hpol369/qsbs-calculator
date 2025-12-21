import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get parameters from URL
  const savings = searchParams.get('savings');
  const state = searchParams.get('state');
  const daysLeft = searchParams.get('days');
  const qualifies = searchParams.get('qualifies') === 'true';

  // Format savings for display
  const formatSavings = (amount: string | null): string => {
    if (!amount) return '$0';
    const num = parseFloat(amount);
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num.toFixed(0)}`;
  };

  const formattedSavings = formatSavings(savings);
  const stateLabel = state || 'Federal';

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
            background: qualifies
              ? 'linear-gradient(90deg, #10b981, #10b981)'
              : 'linear-gradient(90deg, #f59e0b, #ef4444)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {/* Status badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: qualifies
                ? 'rgba(16, 185, 129, 0.15)'
                : 'rgba(245, 158, 11, 0.15)',
              border: qualifies
                ? '1px solid rgba(16, 185, 129, 0.3)'
                : '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '9999px',
              padding: '8px 20px',
            }}
          >
            <span
              style={{
                color: qualifies ? '#10b981' : '#f59e0b',
                fontSize: '18px',
              }}
            >
              {qualifies ? 'QSBS Qualified' : daysLeft ? `${daysLeft} Days Until Qualified` : 'QSBS Analysis'}
            </span>
          </div>

          {/* Main savings amount */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '24px', color: '#64748b' }}>
              Estimated Tax Savings
            </span>
            <span
              style={{
                fontSize: '96px',
                fontWeight: 'bold',
                color: '#10b981',
                lineHeight: 1,
              }}
            >
              {formattedSavings}
            </span>
            <span style={{ fontSize: '20px', color: '#94a3b8' }}>
              Under IRC Section 1202
            </span>
          </div>

          {/* State info */}
          {state && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '16px',
                padding: '12px 24px',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '12px',
              }}
            >
              <span style={{ fontSize: '18px', color: '#3b82f6' }}>
                State: {stateLabel}
              </span>
            </div>
          )}

          {/* CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '24px',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontSize: '20px', color: 'white', fontWeight: 600 }}>
              Calculate Your QSBS Savings
            </span>
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
      width: 1200,
      height: 630,
    }
  );
}
