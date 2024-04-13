import plugin from "tailwindcss";

module.exports = {
    content:['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    themme:{
        extend:{
            colors:{
                primary: '#f8f8f8'
            }
        }
    },
    plugins: [plugin({})],
}
