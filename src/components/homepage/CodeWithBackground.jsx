import React from 'react'
import CodeSnippet from './CodeSnippet'
import PaymentBox from './PaymentBox'

const CodeWithBackground = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto', padding: '84px 0' }}>
      {/* SVG Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/homepage/intro-warp.svg")',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          opacity: 0.9,
        }}
      />

      {/* Container for CodeSnippet and PaymentBox */}
      <div
        style={{
          width: '100%',
          maxWidth: '1152px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          position: 'relative',
          zIndex: 2,
          flexWrap: 'wrap',
          padding: '0 16px',
        }}
      >
        <CodeSnippet style={{ flex: '1 1 300px', minWidth: 0 }} />
        <PaymentBox style={{ flex: '0 0 auto' }} />
      </div>
    </div>
  )
}

export default CodeWithBackground