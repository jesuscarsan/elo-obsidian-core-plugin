import { buildPlugin } from '../../libs/obsidian-plugin/esbuild.config.mjs';

buildPlugin({
  pluginId: 'elocuency',
  entryPoints: ['src/Infrastructure/Obsidian/main.ts'],
  outfile: 'main.js',
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
