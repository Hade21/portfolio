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
                "swipe-left": "swipe-left .5s ease-in",
                "swipe-right": "swipe-right .5s ease-out",
            },
            keyframes: {
                "swipe-left": {
                    "0%": { transform: "translateX(0)", opacity: "100%" },
                    "30%": { opacity: "0%" },
                    "100%": { transform: "translateX(-100%)", opacity: "0%" },
                },
                "swipe-right": {
                    "0%": { transform: "translateX(100%)", opacity: "0%" },
                    "60%": { opacity: "0%" },
                    "100%": { transform: "translateX(0%)", opacity: "100%" },
                },
            },
        },
    },
    plugins: [],
};