import React from 'react'

const PaymentBox = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '326px', // Limits width to keep it manageable
        height: 'auto',
        padding: '32px',
        alignItems: 'flex-start',
        gap: '32px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '8px 8px 100px 0px rgba(24, 48, 63, 0.20)',
        boxSizing: 'border-box',
      }}
    >
      {/* Send Payment Text */}
      <div
        style={{
          color: '#6B7280',
          fontFamily: '"SF Compact Display", sans-serif',
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '36px',
          letterSpacing: '-0.48px',
        }}
      >
        Send Payment
      </div>

      {/* Enter Amount and 40,000 sats Text with Background */}
      <div
        style={{
          backgroundColor: '#F1F5F9',
          padding: '16px',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
          width: '100%',
        }}
      >
        <div
          style={{
            color: '#6B7280',
            fontFamily: '"SF Compact Display", sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '28px',
            textAlign: 'left',
          }}
        >
          Enter amount
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
          }}
        >
          <span
            style={{
              color: '#6B7280',
              fontFamily: '"SF Compact Display", sans-serif',
              fontSize: '36px',
              fontWeight: '600',
              lineHeight: '44px',
            }}
          >
            40,000
          </span>
          <span
            style={{
              color: '#6B7280',
              fontFamily: '"SF Compact Display", sans-serif',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '32px',
            }}
          >
            sats
          </span>
        </div>
      </div>

      {/* Send Ecash Button */}
      <button
        disabled
        style={{
          borderRadius: '8px',
          background: '#F1F5F9',
          backdropFilter: 'blur(2px)',
          display: 'flex',
          height: '50px',
          padding: '16px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          alignSelf: 'stretch',
          fontFamily: '"SF Compact Display", sans-serif',
          fontSize: '16px',
          fontWeight: '600',
          color: '#1F2937',
          cursor: 'default',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      >
        Send Ecash
      </button>
    </div>
  )
}

export default PaymentBox