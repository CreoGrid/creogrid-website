import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface IntelligentGridCubeProps {
  compact?: boolean;
}

const BRAND_BLUE = "#3A5DE2";
const BRAND_ACCENT = "#3684A6";

function useVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const on = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", on);
    return () => document.removeEventListener("visibilitychange", on);
  }, []);
  return visible;
}

function InnerCubes({ compact = false }: IntelligentGridCubeProps) {
  const group = useRef<THREE.Group>(null!);
  const N = 3; // 3x3x3 subdivisions
  const size = 2.6;
  const step = size / N;
  const offset = (size - step) / 2;

  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let x = 0; x < N; x++)
      for (let y = 0; y < N; y++)
        for (let z = 0; z < N; z++) {
          arr.push([x * step - offset, y * step - offset, z * step - offset]);
        }
    return arr;
  }, [step, offset]);

  const visible = useVisible();
  useFrame((state) => {
    if (!group.current || !visible) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.12;
    group.current.rotation.x = Math.sin(t * 0.15) * 0.15;
    group.current.position.y = Math.sin(t * 0.6) * 0.05;
    group.current.scale.setScalar(compact ? 1.03 : 1);
  });

  return (
    <group ref={group}>
      {/* Outer wireframe cube */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(size, size, size)]} />
        <lineBasicMaterial color={BRAND_BLUE} transparent opacity={0.55} />
      </lineSegments>

      {/* Inner modular cubes */}
      {positions.map((pos, i) => (
        <lineSegments key={i} position={pos}>
          <edgesGeometry args={[new THREE.BoxGeometry(step * 0.92, step * 0.92, step * 0.92)]} />
          <lineBasicMaterial color={BRAND_BLUE} transparent opacity={0.18} />
        </lineSegments>
      ))}

      {/* Pulsing nodes at outer vertices */}
      <Nodes size={size} />

      {/* Particle drift */}
      <Particles size={size} />
    </group>
  );
}

function Nodes({ size }: { size: number }) {
  const half = size / 2;
  const points: [number, number, number][] = [
    [-half, -half, -half], [half, -half, -half],
    [-half, half, -half], [half, half, -half],
    [-half, -half, half], [half, -half, half],
    [-half, half, half], [half, half, half],
    // face centers
    [0, 0, half], [0, 0, -half],
    [half, 0, 0], [-half, 0, 0],
    [0, half, 0], [0, -half, 0],
  ];
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.children.forEach((child, i) => {
      const s = 1 + Math.sin(t * 1.2 + i * 0.7) * 0.25;
      child.scale.setScalar(s);
    });
  });
  return (
    <group ref={ref}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={i % 3 === 0 ? BRAND_ACCENT : BRAND_BLUE} />
        </mesh>
      ))}
    </group>
  );
}

function Particles({ size }: { size: number }) {
  const count = 120;
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * size * 1.4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * size * 1.4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * size * 1.4;
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, [size]);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = -state.clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color={BRAND_BLUE}
        size={0.025}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function IntelligentGridCube({ compact = false }: IntelligentGridCubeProps) {
  return (
    <Canvas
      dpr={[1, compact ? 1.4 : 1.8]}
      camera={{ position: compact ? [3.2, 2.15, 4.3] : [3.6, 2.55, 4.6], fov: compact ? 44 : 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 6, 5]} intensity={0.7} />
      <pointLight position={[0, 2.5, 3.5]} intensity={0.8} color={BRAND_BLUE} />
      <pointLight position={[-4, -2, -2]} intensity={0.32} color={BRAND_ACCENT} />
      <InnerCubes compact={compact} />
    </Canvas>
  );
}
