import React from 'react'

const CodeSnippet = () => {
  return (
    <div
      style={{
        borderRadius: '23px',
        background: 'linear-gradient(143deg, #F6F7FF 2.6%, rgba(255, 255, 255, 0.00) 78.58%)',
        boxShadow: '8px 8px 100px 0px rgba(24, 48, 63, 0.20)',
        display: 'flex',
        maxWidth: '80%',
        margin: '0 auto',
        padding: '32px',
        alignItems: 'flex-start',
        fontFamily: '"Roboto Mono", monospace',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#6B7280',
        fontWeight: 600, // Add this line to make all text semi-bold by default
      }}
    >
      <pre style={{ margin: 0, overflowX: 'auto', width: '100%' }}>
        <code>
          <span style={{ color: '#1F2937', fontWeight: 'inherit' }}># Initialize Cashu</span>{'\n'}
          client = cashu.Client(api_key='<span style={{ background: "linear-gradient(135deg, #FC00FF 0%, #00B6DE 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>your_api_key</span>') {'\n\n'}

          <span style={{ color: '#1F2937', fontWeight: 'inherit' }}># Define the payment details</span>{'\n'}
          payment_details = {'{'}{'\n'}
          {'  '} 'amount': <span style={{ background: "linear-gradient(135deg, #E3FF72 0%, #E27C39 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>40000</span>, {' '} # Amount in cents (e.g., 1000 cents = $10.00){'\n'}
          {'  '} 'currency': '<span style={{ background: "linear-gradient(135deg, #FC00FF 0%, #00B6DE 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>USD</span>', {'\n'}
          {'  '} 'recipient': 'recipient_identifier', {'\n'}
          {'  '} 'description': 'Thanks for the Pizza!' {'\n'}
          {'}'}{'\n\n'}

          <span style={{ color: '#1F2937', fontWeight: 'inherit' }}># Send the payment</span>{'\n'}
          response = client.payments.send(payment_details){'\n\n'}

          <span style={{ color: '#1F2937', fontWeight: 'inherit' }}># Check the response</span>{'\n'}
          if (response['status'] === 'success') {'{'}{'\n'}
          {'  '} print(<span style={{ background: "linear-gradient(135deg, #FC00FF 0%, #00B6DE 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>{'`Payment sent successfully: ${response[\'transaction_id\']}`'}</span>){'\n'}
          {'}'} else {'{'}{'\n'}
          {'  '} print(<span style={{ background: "linear-gradient(135deg, #E3FF72 0%, #E27C39 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>{'`Failed to send payment: ${response[\'error_message\']}`'}</span>){'\n'}
          {'}'}{'\n'}
        </code>
      </pre>
    </div>
  )
}

export default CodeSnippet