import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
        template: { transformAssetUrls }
    }),
    quasar({
        sassVariables: 'src/quasar-variables.sass'
    }),
    Unocss({
        presets: [
            presetAttributify({ /* options */ }),
            presetUno()

            // ...other presets
        ]
    })
  ]
});
