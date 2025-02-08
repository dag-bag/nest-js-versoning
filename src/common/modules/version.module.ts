import { Module } from '@nestjs/common';
import { readdirSync } from 'fs';
import { join } from 'path';

// Function to dynamically load all modules inside the `v1/modules` and `v2/modules` folders
function loadVersionedModules() {
  const versions = ['v1', 'v2']; // List of API versions
  const modules = [];

  for (const version of versions) {
    const modulesPath = join(__dirname, `../${version}/modules`);
    const moduleFolders = readdirSync(modulesPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const moduleFolder of moduleFolders) {
      const modulePath = join(
        modulesPath,
        moduleFolder,
        `${moduleFolder}.module.ts`,
      );
      try {
        const importedModule = require(modulePath);
        const moduleClass = Object.values(importedModule)[0]; // Get the exported module class
        modules.push(moduleClass);
      } catch (error) {
        console.error(`Error loading module: ${modulePath}`, error);
      }
    }
  }

  return modules;
}

@Module({
  imports: loadVersionedModules(), // ✅ Auto-load all modules dynamically
})
export class VersionsModule {}
