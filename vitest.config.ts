import { UserConfig, defineConfig, mergeConfig } from 'vite'
import viteConfig from './vite.config.ts'

export const testCfg:UserConfig = {
    test: {
        globals: true,
        watch: true,
        environment: 'jsdom', // happy-dom
        setupFiles: [
            // './test/utils/ext-navigator-hook.ts'
        ],
    }
}

export const vitestConfig = mergeConfig(viteConfig, testCfg)

export default defineConfig(vitestConfig)
