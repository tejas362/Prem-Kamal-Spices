import React, { useEffect, useRef } from "react";

export const SpiceParticles = ({ className = "absolute inset-0 pointer-events-none" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Warm spice color palette: saffron gold, rich cardamom green, cinnamon maroon, warm amber
    const colors = [
      "rgba(229, 138, 31, 0.45)",  // Saffron gold
      "rgba(244, 196, 106, 0.4)",  // Warm cream amber
      "rgba(92, 29, 36, 0.25)",    // Maroon dust
      "rgba(43, 110, 68, 0.25)",   // Cardamom green
    ];

    const particleCount = Math.min(35, Math.floor(width / 35));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.5 - 0.15, // gently drift upwards like fragrant aroma
      sinOffset: Math.random() * Math.PI * 2,
      sinSpeed: 0.015 + Math.random() * 0.02,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.sinOffset += p.sinSpeed;
        p.x += p.vx + Math.sin(p.sinOffset) * 0.3;
        p.y += p.vy;

        // Mouse gentle repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};
