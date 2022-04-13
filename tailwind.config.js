module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                pink: "#FF2869",
                myblue: "#5685FF",
                desc: "#56CCFF",
                "black-glass": "rgba(0,0,0,0.2)",
                "border-glass": "rgba(  55, 48, 50, 0.18 )",
            },
            boxShadow: {
                glass: "0 8px 32px 0 rgba( 55, 48, 50, 0.37 )",
            },
            backdropBlur: {
                glass: "4px",
            },
            fontFamily: {
                inter: "Inter, sans-serif",
                nunito: "Nunito, sans-serif",
            },
            backgroundImage: {
                profile: "url('./assets/20190611_100255.jpg')",
            },
            animation: {
                loadhtml: "loadBg 1s ease-in-out",
                loadcss: "loadBg 1.5s ease-in-out",
                loadjs: "loadBg 2s ease-in-out",
                loadreact: "loadBg 2.5s ease-in-out",
                loadnode: "loadBg 3s ease-in-out",
                loadBarHtml: "loadBarHtml 4s ease-in-out",
                loadBarJs: "loadBarJs 4s ease-in-out",
                loadBarReact: "loadBarReact 4s ease-in-out",
                loadBarNode: "loadBarNode 4s ease-in-out",
            },
            keyframes: {
                loadBg: {
                    "0%, 50%": { width: "15%" },
                    "100%": { width: "100%" },
                },
                loadBarHtml: {
                    "0%, 70%": { width: "0%" },
                    "100%": { width: "90%" },
                },
                loadBarJs: {
                    "0%, 70%": { width: "0%" },
                    "100%": { width: "70%" },
                },
                loadBarReact: {
                    "0%, 70%": { width: "0%" },
                    "100%": { width: "50%" },
                },
                loadBarNode: {
                    "0%, 70%": { width: "0%" },
                    "100%": { width: "30%" },
                },
            },
        },
    },
    plugins: [],
};