import React from 'react'

const NewCodeSnippet = () => {
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
        fontSize: 'clamp(12px, 2.5vw, 16px)',
        lineHeight: '1.5',
        color: '#6B7280',
        fontWeight: 600, // Add this line to make all text semi-bold by default
      }}
    >
      <pre style={{ 
        margin: 0, 
        width: '100%',
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}>
        <code>
          <span style={{ color: '#1F2937', fontWeight: 'normal' }}># Step 1: Install Nutshell package</span>{'\n'}
          subprocess.run(["pip", "install", "nutshell"]){'\n\n'}

          <span style={{ color: '#1F2937', fontWeight: 'normal' }}># Step 2: Define the configuration for the mint</span>{'\n'}
          config_content = """{'\n'}
          host: <span style={{ background: "linear-gradient(135deg, #A3E635 0%, #10B981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>https://mymint.example.com</span>{'\n'}
          port: <span style={{ background: "linear-gradient(135deg, #A3E635 0%, #10B981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>5000</span>{'\n'}
          database_url: <span style={{ background: "linear-gradient(135deg, #A3E635 0%, #10B981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>sqlite:///mymint.db</span>{'\n'}
          secret_key: <span style={{ background: "linear-gradient(135deg, #A3E635 0%, #10B981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>YOUR_SECRET_KEY</span>{'\n'}
          """{'\n\n'}

          <span style={{ color: '#1F2937', fontWeight: 'normal' }}># Step 3: Write the configuration to a file</span>{'\n'}
          with open("config.yml", "w") as config_file:{'\n'}
          {'  '} config_file.write(config_content){'\n\n'}

          <span style={{ color: '#1F2937', fontWeight: 'normal' }}># Step 4: Deploy the mint using the configuration file</span>{'\n'}
          subprocess.run(["nutshell", "mint", "--config", "config.yml"]){'\n\n'}

          print("<span style={{ background: "linear-gradient(135deg, #A3E635 0%, #10B981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>Mint deployed successfully!</span>")
        </code>
      </pre>
    </div>
  )
}

export default NewCodeSnippet