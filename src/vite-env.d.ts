/// <reference types="vite/client" />

// Allow importing GLSL shader files as strings
declare module '*.glsl' { const s: string; export default s }
declare module '*.vert' { const s: string; export default s }
declare module '*.frag' { const s: string; export default s }
