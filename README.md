# nextjs-boilerplate

#Framer Motion

#Tailwind CSS

#Styled JSX

Compilation using Rust is 17x faster than Babel and enabled by default using Next.js 12, replacing transforming JavaScript and TypeScript files. This meant we had to port the Babel transformations in Next.js to Rust, including a brand new CSS parser in Rust used to implement the styled-jsx transform.

The new Rust compiler is backwards compatible. If you have an existing Babel configuration, you will automatically be opted out. We have plans to port parsing for popular libraries like styled-components, emotion, and relay soon.
