"use client";
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        breakpoints: {
        sm: "431px",
        md: "790px",
        lg: "1032px",
        },

        // 1. Define Brand Colors
        tokens: {
            colors: {
                // Let's pick specific shades. You can adjust these later.
                blue: { value: '#0A2540' },    // A deep, professional navy blue
                green: { value: '#2ECC71' },   // A vibrant, energetic green
                background:{ value: '#FFFFFF' }, // Clean white
                text: { value: '#1A202C' },      // Default dark text for readability
            },
        },
        semanticTokens: {
            colors: {
            // This tells Chakra: when we ask for "primary", use our deep blue.
            primary: { value: '#0A2540' },
            white: { value: "#FFFFFF" }, 
            // When we ask for "accent", use our vibrant green.
            accent: { value: '#2ECC71' }, 
            _dark: { value: '#2ECC71' },
            // You can add more as needed
            body_text: { value: '#1A202C' },
            _dark_mode_text: { value: '#E2E8' }

            },
            fonts: {
                // This tells Chakra: use the poppins variable for headings
                heading: { value: 'var(--font-poppins)' },
                // use the lato variable for the body
                body: { value: 'var(--font-lato)' },
            }
        },
        textStyles: {
            fonts: {
                heading: { value: `'Poppins', sans-serif`},
                body: { value: `'Lato', sans-serif`}
            }
        },
    }
});

// 3. Extend the theme
// export const theme = extendTheme({
//   colors,
//   fonts,
//   // We can add more customizations here later, like for buttons or links.
// });

const theme = createSystem(defaultConfig, config);
export default theme;