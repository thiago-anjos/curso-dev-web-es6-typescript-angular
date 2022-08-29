import ngPreset from 'jest-preset-angular/presets';
import { compilerOptions } from './tsconfig.json';

type Options = import('ts-jest').InitialOptionsTsJest;

const projectMaps: Record<string, string[]> = {};

for (const [name, paths] of Object.entries(compilerOptions.paths)) {
  projectMaps[name] = paths.map((p) => require.resolve(`./${p}`));
}

const options: Options = {
  ...ngPreset.defaultsESM,

  injectGlobals: false,

  moduleNameMapper: {
    ...projectMaps,
  },
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!tslib|rxjs)'],
};

export default options;
