import fs from 'node:fs';
import path from 'node:path';

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

type SidebarModule = {
  id: string;
  sidebar: SidebarsConfig[string];
};

const sidebarFilePattern = /^\d+-.*\.ts$/;
const sidebarsDir = path.join(__dirname, 'sidebars');

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getSidebarModule(filePath: string): SidebarModule {
  const loadedModule: unknown = require(filePath);
  const candidate =
    isRecord(loadedModule) && 'default' in loadedModule ? loadedModule.default : loadedModule;

  if (!isRecord(candidate) || typeof candidate.id !== 'string' || !('sidebar' in candidate)) {
    throw new Error(
      `Invalid sidebar module "${filePath}". Expected default export { id: string, sidebar: SidebarConfig }.`,
    );
  }

  return {
    id: candidate.id,
    sidebar: candidate.sidebar as SidebarsConfig[string],
  };
}

const sidebars = fs
  .readdirSync(sidebarsDir)
  .filter((fileName) => sidebarFilePattern.test(fileName))
  .sort((left, right) => left.localeCompare(right))
  .reduce<SidebarsConfig>((config, fileName) => {
    const modulePath = path.join(sidebarsDir, fileName);
    const sidebarModule = getSidebarModule(modulePath);

    return {
      ...config,
      [sidebarModule.id]: sidebarModule.sidebar,
    };
  }, {});

export default sidebars;
