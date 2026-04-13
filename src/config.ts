import type {
    SiteConfig,
    ProfileConfig,
    LabConfig
} from "./types/config"

export const siteConfig: SiteConfig = {
    title: "雪糕小豪",
    subTitle: "主站",

    backgroundImage: {
        enabled: false, // If backgroundImage is not enabled, this will be used as the background color
        url: "assets/background.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    },

    mirrorSite: {
        enabled: false, // If mirrorSite is enabled, this will alart the user to visit the mirror site if user is in region below
        url: "xgxh.cc",
        region: "CN" // Region of the mirror site, 
    },

    favicon: "/favicon/logo.ico" // Path of the favicon, relative to the /public directory
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/logo.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "雪糕小豪",
    description: "这是主站 请点击下方前往分站",
    introPage: "https://www.xgxh.cc",
    links: [
        /* -------------------------------- Icon -------------------------------- */
        // Visit https://icones.js.org/ for icon codes
        // You will need to install the corresponding icon set if it's not already included
        // `pnpm add @iconify-json/<icon-set-name>`
        // Then add icon to defineConfig.integrationsin.icon in astro.config.mjs
        // You can also use local svg icons end with .svg, relative to the src directory
        // eg. `icon: "assets/icons/github.svg"`
        /* -------------------------------- Color -------------------------------- */
        // The colors a best to be clearly visible in both light and dark environments 
        // If color is not set, it will use the icon's default color
        {
          name: "个人博客",
          url: "https://blog.xgxh.cc",
          icon: "assets/icons/Book.svg", 
          color: "#0dbc79",
        },
        {
            name: "我的世界服务器",
            url: "https://wiki.xgxh.cc",
            icon: "assets/icons/minecraft.svg",
        },
        {
            name: "GitHub",
            url: "https://github.com/jinliangyu1234",
            icon: "fa6-brands:github",
            color: "#888",
        },
        {
            name: "更多界面",
            url: "/lab",
            icon: "fa6-solid:grip", // 最适合“更多界面”
            color: "#ff914d", // 暖橙色，好看
        },
    ]
}

export const labConfig : LabConfig = [
    // Icon and color rules are same as profileConfig
    {
        name: "没有啦～",
        description: "谢谢",
        url: "",
        icon: "svg-spinners:blocks-wave", 
        color: "#9fa1a1ff"
    },
]