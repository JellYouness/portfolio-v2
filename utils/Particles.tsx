'use client';

import React, { useRef, useEffect } from 'react';
import { Particle, particles, init as initializeParticles, calculateDistance } from './particleHandler';

const ParticlesComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        (canvas as HTMLCanvasElement).width = window.innerWidth;
        (canvas as HTMLCanvasElement).height = window.innerHeight;
        let animationFrameId: number;

        if (canvas) {
            const context = (canvas as HTMLCanvasElement).getContext('2d');

            const render = () => {
                if (context) {
                    draw(context);
                    animationFrameId = window.requestAnimationFrame(render);
                }
            };

            const draw = (ctx: CanvasRenderingContext2D) => {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                // Draw circles for particles
                ctx.fillStyle = '#b0b0b0';

                particles.forEach((it: Particle) => {
                    ctx.beginPath();
                    ctx.arc(it.x, it.y, 2, 0, 2 * Math.PI);
                    it.move();
                    ctx.fill();
                });

                // Draw lines connecting them
                for (let i = 0; i < particles.length - 1; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dist = calculateDistance(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        if (dist < 100) {
                            ctx.strokeStyle = `rgba(176, 176, 176, ${(100 - dist) / 100})`;
                            ctx.lineWidth = 1;

                            // draw a red line
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            };

            initializeParticles(window.innerWidth, window.innerHeight);

            render();
        }

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ParticlesComponent;
