import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = /* glsl */`
  attribute vec3 position;
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */`
  precision highp float;
  uniform vec2  u_res;
  uniform float u_time;
  uniform float u_xScale;
  uniform float u_yScale;
  uniform float u_distortion;

  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - u_res) / min(u_res.x, u_res.y);

    float d  = length(p) * u_distortion;
    float rx = p.x * (1.0 + d);
    float gx = p.x;
    float bx = p.x * (1.0 - d);

    float r = 0.05 / abs(p.y + sin((rx + u_time) * u_xScale) * u_yScale);
    float g = 0.05 / abs(p.y + sin((gx + u_time) * u_xScale) * u_yScale);
    float b = 0.05 / abs(p.y + sin((bx + u_time) * u_xScale) * u_yScale);

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`

export default function ChromaticShader() {
  const { size } = useThree()
  const uniformsRef = useRef<{ [key: string]: THREE.IUniform }>({
    u_time:       { value: 0 },
    u_res:        { value: new THREE.Vector2(size.width, size.height) },
    u_xScale:     { value: 1.0 },
    u_yScale:     { value: 0.5 },
    u_distortion: { value: 0.05 },
  })

  useFrame(({ size: s }) => {
    uniformsRef.current.u_time.value   += 0.008
    uniformsRef.current.u_res.value.set(s.width, s.height)
  })

  return (
    <mesh>
      {/*
        A full-screen triangle pair.
        args=[2,2] fills clip-space exactly with an OrthographicCamera at [-1,1].
      */}
      <planeGeometry args={[2, 2]} />
      <rawShaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}
