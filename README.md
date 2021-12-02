# Next.js 12 Boilerplate
The following repo contains boilerplate code for your next "Next.js 12" project.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a2effcd5-58bf-44e4-99c2-79a0c1a7e1a4/deploy-status)](https://app.netlify.com/sites/wish-nextjs/deploys)

### We aim for
  - Reducing decision fatigue
  - Providing a ready-to-develop codebase
  - Choosing industry-standard tooling
  - Applying best practices
  - Constantly adapting and improving
### Here's what we landed on to take your project to the moon and why

#### Framer Motion
Framer motion is a production-ready physics-based animation library that can provide fluid animations. It provides the level of flexibility you need and eliminates any need for CSS animations. Setting keyframes, defining variants, and toggling animations between physics-based and time-based makes framer motion a superior choice.
With Next.js 12 and added support for URL imports, you can design your animations in Framer and use it directly in your app. To read more about this feature follow https://www.framer.com/docs/guides/handshake/##paste-import.

And for more information on Framer Motion follow https://www.framer.com/motion/.

#### Tailwind CSS
Tailwind CSS is a utility library that eliminates the need for CSS custom classes in many circumstances. It provides utility classes you can apply to your code.
For example, you can use `flex justify-center items-center text-white font-bold` directly in className without the need to write the code below.
```
.myclass{
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
```
It's by no means revolutionary but it makes life easier and helps you code faster.

#### styled-jsx
styled-jsx is a CSS in JS library. It lets you write CSS within provided code blocks directly inside your JSX and also in separate JS files.

The ultimate reason for choosing styled-jsx over styled-components or JSS comes down to the quote below from Next.js blog.
> Compilation using Rust is 17x faster than Babel and enabled by default using Next.js 12, replacing transforming JavaScript and TypeScript files. This meant we had to port the Babel transformations in Next.js to Rust, including a brand new CSS parser in Rust used to implement the styled-jsx transform.

> The new Rust compiler is backwards compatible. If you have an existing Babel configuration, you will automatically be opted out. We have plans to port parsing for popular libraries like styled-components, emotion, and relay soon.

### Contributions
We are evolving this project as time passes and new technologies arise.

We also welcome you to participate in this project by submitting pull requests or opening issues.
