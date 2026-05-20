import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'schema/index': 'src/schema/index.ts',
    'resolver/index': 'src/resolver/index.ts',
    'emitter/index': 'src/emitter/index.ts',
    'codec/index': 'src/codec/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: {
    compilerOptions: {
      incremental: false,
      composite: false,
    },
  },
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  target: 'es2022',
});
