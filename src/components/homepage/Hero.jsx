import React, { useEffect } from 'react';
import * as THREE from 'three';

const Hero = () => {
  useEffect(() => {
    let scene, camera, renderer, particles, particleMaterial, mouseX = 0, mouseY = 0;

    // Set up the scene, camera, and renderer
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.z = 1000;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('hero-background').appendChild(renderer.domElement);

    // Reduce particle count
    const particleCount = 200; // Reduced from 500

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      [0.2, 0.5, 1],  // Light blue
      [0.1, 0.3, 0.8],  // Darker blue
      [1, 1, 1],  // White
      [0.8, 0.2, 0.8],  // Purple
      [0.2, 0.8, 0.8],  // Cyan
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;  // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;  // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;  // Z

      // Use color palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 2] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    particleMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 0.0,
    });

    particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);

    // Modify the line material and creation
    const lineMaterial = new THREE.LineBasicMaterial({ 
      vertexColors: true,
      transparent: true, 
      opacity: 0.2,  // Further reduced opacity for subtlety
      linewidth: 1
    });
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * 3); // Reduced to particleCount * 3
    const lineColors = new Float32Array(particleCount * 3); // Reduced to particleCount * 3
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Define more subtle colors for lines
    const lineColorPalette = [
      [0.2, 0.2, 0.2],  // Dark gray
      [0.3, 0.3, 0.3],  // Medium gray
      [0.4, 0.4, 0.4],  // Light gray
      [0.2, 0.25, 0.3],  // Very subtle blue
      [0.25, 0.2, 0.3],  // Very subtle purple
    ];

    // Mouse movement interaction
    document.addEventListener('mousemove', onDocumentMouseMove);

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.2;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.2;
    }

    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Update particle positions and colors
      const positions = particles.geometry.attributes.position.array;
      const colors = particles.geometry.attributes.color.array;
      const linePositions = lines.geometry.attributes.position.array;
      const lineColors = lines.geometry.attributes.color.array;

      for (let i = 0; i < particleCount; i++) {
        // More complex particle motion
        positions[i * 3] += Math.sin(time * 0.3 + i * 0.1) * 0.3;
        positions[i * 3 + 1] += Math.cos(time * 0.2 + i * 0.05) * 0.3;
        positions[i * 3 + 2] += Math.sin(time * 0.1 + i * 0.02) * 0.3;

        // Slowly change particle colors over time
        const colorIndex = Math.floor((Math.sin(time * 0.1 + i * 0.05) + 1) * 0.5 * colorPalette.length);
        const color = colorPalette[colorIndex];
        colors[i * 3] = color[0];
        colors[i * 3 + 1] = color[1];
        colors[i * 3 + 2] = color[2];

        // Update line positions and colors
        linePositions[i * 3] = positions[i * 3];
        linePositions[i * 3 + 1] = positions[i * 3 + 1];
        linePositions[i * 3 + 2] = positions[i * 3 + 2];

        // Set line colors from the subtle color palette
        const lineColor = lineColorPalette[Math.floor(Math.random() * lineColorPalette.length)];
        lineColors[i * 3] = lineColor[0];
        lineColors[i * 3 + 1] = lineColor[1];
        lineColors[i * 3 + 2] = lineColor[2];
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.color.needsUpdate = true;
      lines.geometry.attributes.position.needsUpdate = true;
      lines.geometry.attributes.color.needsUpdate = true;

      particles.rotation.y += 0.0005;
      lines.rotation.y += 0.0005;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      document.getElementById('hero-background').removeChild(renderer.domElement);
      document.removeEventListener('mousemove', onDocumentMouseMove);
    };
  }, []);

  return (
    <div
      id="hero-background"
      className="relative w-full h-[500px]"
      style={{ overflow: 'hidden' }} // Ensure overflow is hidden for a clean look
    >
      {/* Add this new div for the gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 flex items-center justify-center text-center text-black">
        <section className="">
          <p className="text-center font-roboto text-[32px] font-bold md:text-[64px] xl:text-[100px] m-0">
            CASHU
          </p>
          <p className="text-center font-roboto font-bold text-[48px] uppercase m-0">
            ECASH WITHOUT BOUNDARIES
          </p>
          <p className="text-center font-roboto-mono font-medium text-[24px]" style={{ letterSpacing: '-0.02em', marginTop: '8px' }}>
            Deploy the power of ecash on any rail, anytime.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-7 ">
            <button className="flex items-center gap-2.5 rounded-lg bg-[#f1f5f9] px-6 py-5 hover:bg-gray-300 transition duration-300 ease-in-out">
              <img src="/homepage/github-icon.png" alt="GitHub Icon" />
              <a
                className="font-semibold text-[#1f2937] xl:text-[21px]"
                href="https://github.com/cashubtc"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </button>
            <button className="flex gap-2.5 rounded-md bg-black p-5">
              <img
                src="/homepage/documentation-icon.png"
                alt="Documentation Icon"
              />
              <a
                className="font-semibold text-white xl:text-[21px]"
                href="https://docs.cashu.space/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOCUMENTATION
              </a>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;