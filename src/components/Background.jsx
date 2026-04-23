import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width, height;
        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Mouse interaction for parallax and globe rotation
        let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
        const handleMouseMove = (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Generate points on a sphere using Fibonacci lattice for even distribution
        const numPoints = window.innerWidth > 768 ? 1000 : 500;
        const spherePoints = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

        for (let i = 0; i < numPoints; i++) {
            const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y); 
            const theta = phi * i;

            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;
            
            // Assign some points to be "active" data nodes
            const isActive = Math.random() > 0.95;

            spherePoints.push({
                baseX: x,
                baseY: y,
                baseZ: z,
                isActive,
                pulseOffset: Math.random() * Math.PI * 2
            });
        }

        // Add a secondary orbital ring
        const ringPoints = [];
        const numRingPoints = 200;
        for (let i = 0; i < numRingPoints; i++) {
            const theta = (i / numRingPoints) * Math.PI * 2;
            ringPoints.push({
                baseX: Math.cos(theta),
                baseY: 0,
                baseZ: Math.sin(theta),
                pulseOffset: Math.random() * Math.PI * 2
            });
        }

        let time = 0;
        let rotationX = 0;
        let rotationY = 0;

        const animate = () => {
            // Smoothly interpolate mouse position
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

            // Clear with dark ocean theme
            ctx.fillStyle = '#020617';
            ctx.fillRect(0, 0, width, height);

            time += 0.002;

            // Globe base radius
            const baseRadius = Math.min(width, height) * 0.45;
            
            // Atmospheric background glow (Sky Blue core)
            const centerX = width / 2;
            const centerY = height / 2;
            const glow = ctx.createRadialGradient(centerX, centerY, baseRadius * 0.5, centerX, centerY, baseRadius * 1.5);
            glow.addColorStop(0, 'rgba(14, 165, 233, 0.12)'); // Sky Blue core
            glow.addColorStop(1, 'transparent');
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, width, height);

            // Auto rotation + interactive rotation
            const mouseOffsetX = (mouse.x - width / 2) / width;
            const mouseOffsetY = (mouse.y - height / 2) / height;
            
            rotationY = time * 0.5 + mouseOffsetX * 1.5;
            rotationX = -0.2 + mouseOffsetY * 0.5; // Slight tilt

            const renderPoints = (pointsArray, scaleMultiplier, colorBase, isRing) => {
                const projected = [];

                pointsArray.forEach(p => {
                    // Apply 3D Rotation Y
                    const x1 = p.baseX * Math.cos(rotationY) - p.baseZ * Math.sin(rotationY);
                    const z1 = p.baseX * Math.sin(rotationY) + p.baseZ * Math.cos(rotationY);
                    
                    // Apply 3D Rotation X (Tilt)
                    let y2 = p.baseY * Math.cos(rotationX) - z1 * Math.sin(rotationX);
                    let z2 = p.baseY * Math.sin(rotationX) + z1 * Math.cos(rotationX);

                    // If it's a ring, tilt it additionally to orbit diagonally
                    if (isRing) {
                        const ringTilt = 0.5;
                        const ringY = y2 * Math.cos(ringTilt) - z2 * Math.sin(ringTilt);
                        const ringZ = y2 * Math.sin(ringTilt) + z2 * Math.cos(ringTilt);
                        y2 = ringY;
                        z2 = ringZ;
                    }

                    // Calculate radius variation (pulsing effect)
                    const currentRadius = baseRadius * scaleMultiplier * (1 + (p.isActive ? Math.sin(time * 10 + p.pulseOffset) * 0.05 : 0));

                    // 3D Projection
                    const focalLength = 1000;
                    // Z goes from -1 (front) to 1 (back)
                    const perspective = focalLength / (focalLength + z2 * currentRadius);
                    
                    // Filter points behind the camera
                    if (perspective < 0) return;

                    const projX = centerX + x1 * currentRadius * perspective;
                    const projY = centerY + y2 * currentRadius * perspective;

                    projected.push({
                        x: projX,
                        y: projY,
                        z: z2,
                        isActive: p.isActive,
                        perspective
                    });
                });

                // Sort by Z index for proper depth rendering (Painter's algorithm)
                projected.sort((a, b) => b.z - a.z);

                // Render connections first (only for active points to look like data links)
                if (!isRing) {
                    ctx.lineWidth = 0.5;
                    const activeNodes = projected.filter(p => p.isActive && p.z < 0); // Only front nodes
                    for (let i = 0; i < activeNodes.length; i++) {
                        for (let j = i + 1; j < activeNodes.length; j++) {
                            const n1 = activeNodes[i];
                            const n2 = activeNodes[j];
                            const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
                            if (dist < baseRadius * 0.4) {
                                const alpha = Math.max(0.05, 0.3 - (dist / (baseRadius * 0.4)));
                                ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`; // Emerald data links
                                ctx.beginPath();
                                ctx.moveTo(n1.x, n1.y);
                                ctx.lineTo(n2.x, n2.y);
                                ctx.stroke();
                            }
                        }
                    }
                }

                // Render Points
                projected.forEach(p => {
                    // Depth mapping: -1 is closest, 1 is furthest
                    const depthAlpha = Math.max(0.05, (1 - p.z) / 2); // 0 to 1
                    
                    if (depthAlpha < 0.1) return; // Don't draw back face perfectly for a cleaner look

                    const baseSize = isRing ? 1.5 : (p.isActive ? 2.5 : 1);
                    const size = Math.max(0.1, baseSize * p.perspective);
                    
                    // Shift color based on Z depth
                    // Closer = Emerald (160), Further = Sky Blue (200)
                    const hue = isRing ? 180 : (200 - depthAlpha * 40);
                    const alpha = isRing ? depthAlpha * 0.6 : (p.isActive ? depthAlpha : depthAlpha * 0.4);

                    ctx.fillStyle = `hsla(${hue}, 80%, 65%, ${alpha})`;
                    
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                    ctx.fill();

                    // Glow for active nodes
                    if (p.isActive && p.z < 0) {
                        ctx.fillStyle = `hsla(160, 100%, 70%, ${alpha * 0.5})`;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
                        ctx.fill();
                    }
                });
            };

            // Render Sphere (Base hue Sky Blue 200)
            renderPoints(spherePoints, 1, 200, false);
            // Render Orbital Ring (Base hue Cyan 180)
            renderPoints(ringPoints, 1.3, 180, true);

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed-background"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export default Background;
