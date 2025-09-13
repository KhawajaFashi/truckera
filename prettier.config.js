import config from '../../.prettierrc.json' with { type: 'json' };

export default {
    ...config,
    tailwindStylesheet: './app/globals.css',
};