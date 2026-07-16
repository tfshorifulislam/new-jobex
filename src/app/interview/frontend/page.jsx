import FrontendInterviewHeadder from "@/components/InterviewComponent/FrontendInterviewHeadder";
import InterviewQuestion from "@/components/InterviewComponent/InterviewQuestion";

const FrontendInterview = () => {
    const questions = [
        // --- HTML & CSS (Beginner to Advanced) ---
        {
            level: "Beginner",
            category: "HTML & CSS",
            question: "What is HTML?",
            answer: "HTML (HyperText Markup Language) is the standard markup language used to structure web pages."
        },
        {
            level: "Beginner",
            category: "HTML & CSS",
            question: "What is Semantic HTML?",
            answer: "Semantic HTML uses meaningful elements such as <header>, <main>, <article>, and <footer> to improve accessibility and SEO."
        },
        {
            level: "Beginner",
            category: "HTML & CSS",
            question: "What is the CSS Box Model?",
            answer: "The CSS Box Model is a container that wraps every HTML element, consisting of Margin, Border, Padding, and the actual Content."
        },
        {
            level: "Beginner",
            category: "HTML & CSS",
            question: "What is the difference between display: none and visibility: hidden?",
            answer: "display: none removes the element from the DOM taking 0px space, while visibility: hidden hides the element but it still occupies its original space in the layout."
        },
        {
            level: "Beginner",
            category: "HTML & CSS",
            question: "What is CSS Specificity?",
            answer: "CSS Specificity is the rule used by browsers to determine which CSS property values are the most relevant to an element and should be applied. The hierarchy is: Inline styles > IDs > Classes/Attributes > Elements."
        },
        {
            level: "Intermediate",
            category: "HTML & CSS",
            question: "What is the difference between Flexbox and CSS Grid?",
            answer: "Flexbox is designed for one-dimensional layouts (either a row OR a column), whereas CSS Grid is designed for two-dimensional layouts (rows AND columns simultaneously)."
        },
        {
            level: "Intermediate",
            category: "HTML & CSS",
            question: "What is the difference between em and rem units in CSS?",
            answer: "em is relative to the font-size of its direct parent element, while rem (root em) is relative to the font-size of the root <html> element (usually 16px by default)."
        },
        {
            level: "Intermediate",
            category: "HTML & CSS",
            question: "What is CSS BEM methodology?",
            answer: "BEM (Block Element Modifier) is a popular naming convention for writing clean and modular CSS classes (e.g., .card, .card__title, .card__title--large)."
        },
        {
            level: "Intermediate",
            category: "HTML & CSS",
            question: "What are CSS Custom Properties (Variables)?",
            answer: "CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document using the var(--variable-name) function."
        },
        {
            level: "Intermediate",
            category: "HTML & CSS",
            question: "What is the difference between CSS Reset and Normalize.css?",
            answer: "CSS Reset removes all default browser styling completely, while Normalize.css preserves useful browser defaults and corrects common cross-browser inconsistencies."
        },
        {
            level: "Intermediate",
            category: "HTML & CSS",
            question: "What is a Stacking Context in CSS?",
            answer: "A Stacking Context is a three-dimensional conceptualization of HTML elements along the Z-axis relative to the user, triggered by properties like position: absolute/fixed with a z-index, or opacity."
        },
        {
            level: "Intermediate",
            category: "HTML & CSS",
            question: "What is the difference between pseudo-classes and pseudo-elements?",
            answer: "A pseudo-class (e.g., :hover) styles an element based on its state, while a pseudo-element (e.g., ::before) allows you to style a specific part of the selected element."
        },
        {
            level: "Intermediate",
            category: "HTML & CSS",
            question: "How do you achieve center alignment using Flexbox and Grid?",
            answer: "For Flexbox, use justify-content: center and align-items: center on the parent. For Grid, use place-items: center on the parent."
        },
        {
            level: "Advanced",
            category: "HTML & CSS",
            question: "What is a CSS Reflow and Repaint?",
            answer: "Reflow is when the browser recalculates the positions and geometries of elements in the document. Repaint is when the browser redraws the pixels on the screen after layout changes."
        },
        {
            level: "Advanced",
            category: "HTML & CSS",
            question: "What are Container Queries in CSS?",
            answer: "Unlike Media Queries which check the viewport size, Container Queries allow you to style an element based on the size of its parent container."
        },
        {
            level: "Advanced",
            category: "HTML & CSS",
            question: "How do you optimize web fonts for faster performance?",
            answer: "By using modern formats like WOFF2, applying font-display: swap to prevent render-blocking, preloading critical fonts, and subsetting to remove unused characters."
        },
        {
            level: "Advanced",
            category: "HTML & CSS",
            question: "What is Critical CSS and how does it improve page load speed?",
            answer: "Critical CSS is the technique of extracting and inlining the CSS required to render the above-the-fold content of a webpage, while deferring the rest of the stylesheet."
        },
        {
            level: "Advanced",
            category: "HTML & CSS",
            question: "What is the aspect-ratio property in CSS?",
            answer: "The aspect-ratio property allows you to define a preferred aspect ratio (e.g., 16/9) for an element, preventing layout shifts during page loading."
        },
        {
            level: "Advanced",
            category: "HTML & CSS",
            question: "How does the browser parse HTML and CSS to render a page?",
            answer: "The browser parses HTML to build the DOM tree, parses CSS to build the CSSOM tree, combines them to create the Render Tree, calculates layouts (Reflow), and finally paints pixels (Repaint)."
        },
        {
            level: "Advanced",
            category: "HTML & CSS",
            question: "What is CSS containment (contain property)?",
            answer: "The contain CSS property allows you to isolate a subtree of the page from the rest, telling the browser it doesn't need to recalculate layout or paint for the entire page when this subtree changes."
        },

        // --- JavaScript Core & ES6+ (Beginner to Advanced) ---
        {
            level: "Beginner",
            category: "JavaScript",
            question: "What is the difference between var, let, and const?",
            answer: "var is function-scoped and can be redeclared. let and const are block-scoped; let allows reassignment, while const does not."
        },
        {
            level: "Beginner",
            category: "JavaScript",
            question: "What is the difference between == and ===?",
            answer: "== (loose equality) compares values after performing type coercion, while === (strict equality) compares both value and type without type coercion."
        },
        {
            level: "Beginner",
            category: "JavaScript",
            question: "What are the primitive data types in JavaScript?",
            answer: "There are 7 primitive types: string, number, boolean, null, undefined, symbol, and bigint."
        },
        {
            level: "Beginner",
            category: "JavaScript",
            question: "What is the difference between null and undefined?",
            answer: "undefined means a variable has been declared but not yet assigned a value. null is an assignment value that represents the intentional absence of any object value."
        },
        {
            level: "Beginner",
            category: "JavaScript",
            question: "What is JavaScript Hoisting?",
            answer: "Hoisting is JavaScript's default behavior of moving declarations (variables and functions) to the top of their current scope before code execution."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "Explain the JavaScript Event Loop.",
            answer: "The Event Loop enables JavaScript to execute asynchronous code without blocking the main thread by monitoring the Call Stack and pushing callbacks from the Task Queue when the stack is empty."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is a Closure in JavaScript?",
            answer: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment), allowing the inner function to access variables of the outer function even after it has finished executing."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the Temporal Dead Zone (TDZ)?",
            answer: "The TDZ is the period of time between entering a scope and when a let or const variable is declared, during which accessing the variable results in a ReferenceError."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is a Promise and its three states?",
            answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. Its three states are Pending, Fulfilled, and Rejected."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is Prototypal Inheritance?",
            answer: "It is a feature where every JavaScript object has a private property pointing to another object called its prototype. Objects inherit properties and methods from their prototype."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the difference between call, apply, and bind?",
            answer: "call invokes a function with a specified 'this' and individual arguments. apply does the same but accepts arguments as an array. bind returns a new function with 'this' bound permanently, without invoking it immediately."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the difference between a shallow copy and a deep copy?",
            answer: "A shallow copy duplicates the top-level properties of an object, but nested objects still share references. A deep copy duplicates everything recursively, ensuring absolutely no shared references."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is Event Delegation?",
            answer: "Event delegation is a technique where a single event listener is added to a parent element to manage events for all of its current or future child elements, leveraging event bubbling."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the difference between Map and standard Object?",
            answer: "A Map can have keys of any data type (including objects and functions), maintains insertion order, and has built-in size properties, whereas an Object only allows strings/symbols as keys."
        },
        {
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the purpose of the rest parameter and spread operator (...)?",
            answer: "The rest parameter gathers remaining arguments into an array inside a function definition, while the spread operator unpacks array elements or object properties into separate elements."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "What is Currying in JavaScript?",
            answer: "Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of nesting functions, each taking a single argument."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "Explain the difference between Debouncing and Throttling.",
            answer: "Debouncing delays invoking a function until a certain amount of idle time has passed since the last trigger. Throttling limits the execution of a function to once in every specified time interval."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "What are Generator Functions?",
            answer: "Generator functions (defined with function*) can yield control back to the caller mid-execution and resume later, maintaining their internal state across invocations."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "What is the difference between Microtasks and Macrotasks?",
            answer: "Microtasks (Promises, queueMicrotask) have higher priority and run immediately after the current operation and before the browser renders. Macrotasks (setTimeout, setInterval) are queued and executed on successive ticks of the event loop."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "What is WeakMap and WeakSet and when should you use them?",
            answer: "WeakMap/WeakSet hold weak references to objects, meaning they do not prevent garbage collection of their key/value objects. They are ideal for storing metadata or caching without memory leaks."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "What is IIFE (Immediately Invoked Function Expression)?",
            answer: "An IIFE is a JavaScript function that runs as soon as it is defined, typically used to create a private scope and avoid polluting the global namespace."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "What is the Nullish Coalescing Operator (??) and how is it different from ||?",
            answer: "The ?? operator returns its right-hand side operand only when its left-hand operand is null or undefined, unlike || which returns the right-hand side for any falsy value (like 0 or empty string)."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "What is Javascript's Strict Mode and why is it used?",
            answer: "Strict Mode ('use strict') is a way to opt in to a restricted variant of JavaScript, which eliminates silent errors, makes engine optimizations run faster, and prevents bad syntax like creating global variables accidentally."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "How does JavaScript Garbage Collection work?",
            answer: "JavaScript uses automatic garbage collection, primarily based on the 'Mark-and-Sweep' algorithm. It identifies unreachable objects (starting from roots like global variables) and reclaims their memory."
        },
        {
            level: "Advanced",
            category: "JavaScript",
            question: "Explain Object.freeze() vs Object.seal().",
            answer: "Object.freeze() makes an object completely immutable (cannot add, delete, or change properties). Object.seal() prevents adding or deleting properties but allows modifying existing ones."
        },

        // --- React Core Concepts (Beginner to Advanced) ---
        {
            level: "Beginner",
            category: "React",
            question: "What is React?",
            answer: "React is an open-source, component-based front-end JavaScript library used to build fast and interactive user interfaces."
        },
        {
            level: "Beginner",
            category: "React",
            question: "What is the Virtual DOM?",
            answer: "Virtual DOM is a lightweight copy of the real DOM. React compares it with the previous Virtual DOM and updates only the changed elements."
        },
        {
            level: "Beginner",
            category: "React",
            question: "What is the difference between State and Props?",
            answer: "State is local, mutable data managed internally by the component itself, whereas Props are read-only, immutable data passed down from a parent component."
        },
        {
            level: "Beginner",
            category: "React",
            question: "Why do we use Keys in React lists?",
            answer: "Keys help React identify which items in a list have changed, been added, or been removed, ensuring high-performance DOM updates."
        },
        {
            level: "Beginner",
            category: "React",
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript code. Babel compiles it into React.createElement() calls."
        },
        {
            level: "Beginner",
            category: "React",
            question: "What is a React Fragment (<>...</>)?",
            answer: "A Fragment lets you group multiple child elements together without adding an extra node (like a wrapper <div>) to the HTML DOM."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "What are Controlled vs Uncontrolled Components?",
            answer: "Controlled components have their form inputs managed by React state, while Uncontrolled components handle input data directly via the DOM using refs."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "What is Prop Drilling and how do you avoid it?",
            answer: "Prop Drilling is the process of passing props down through multiple layers of nested components. It can be avoided using Context API or State Management libraries (e.g., Zustand, Redux)."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "What are the rules of React Hooks?",
            answer: "Hooks must only be called at the top level of your functional component (not inside loops or conditions) and must only be called from React Functional Components or Custom Hooks."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "How does the dependency array in useEffect work?",
            answer: "If empty ([]), the effect runs once after mounting. If it has dependencies ([state]), it runs on mount and whenever those dependencies change. If omitted, it runs after every render."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "What is the difference between useMemo and useCallback?",
            answer: "useMemo memoizes the computed value of a function, whereas useCallback memoizes the function definition itself to prevent unnecessary recreation of callbacks."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "What is the purpose of useRef?",
            answer: "useRef returns a mutable ref object whose .current property persists across renders. It is commonly used to access DOM elements directly or store values without triggering a re-render."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "What is the difference between useEffect and useLayoutEffect?",
            answer: "useEffect runs asynchronously after the render has been painted to the screen. useLayoutEffect runs synchronously after DOM mutations but before the screen is painted."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "What is React Context API?",
            answer: "Context API is a built-in React feature that allows you to share global state directly with any nested component without manually passing props down through the tree."
        },
        {
            level: "Intermediate",
            category: "React",
            question: "What is React.memo()?",
            answer: "React.memo is a higher-order component that wraps a functional component to prevent it from re-rendering if its props have not changed."
        },
        {
            level: "Advanced",
            category: "React",
            question: "What is Reconciliation in React?",
            answer: "Reconciliation is the algorithm React uses to compare the old Virtual DOM tree with the new one to determine which parts of the real DOM need to be updated."
        },
        {
            level: "Advanced",
            category: "React",
            question: "What is Hydration?",
            answer: "Hydration is the process where React attaches event listeners to server-rendered HTML, turning static HTML pages into fully interactive React elements in the browser."
        },
        {
            level: "Advanced",
            category: "React",
            question: "What are Error Boundaries in React?",
            answer: "Error Boundaries are class components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app."
        },
        {
            level: "Advanced",
            category: "React",
            question: "What is React Portal?",
            answer: "React Portal is a way to render a child component into a DOM node that exists outside the DOM hierarchy of the parent component (e.g., for modals or tooltips)."
        },
        {
            level: "Advanced",
            category: "React",
            question: "What is Concurrent Mode/Concurrent Rendering in React 18?",
            answer: "Concurrent Rendering is a set of features that allows React to prepare multiple versions of your UI at the same time, making transitions smoother and rendering interruptible."
        },
        {
            level: "Advanced",
            category: "React",
            question: "What is useTransition hook in React 18?",
            answer: "useTransition is a Hook that lets you mark state updates as non-urgent transitions, allowing the browser to prioritize high-priority interactions like user input."
        },
        {
            level: "Advanced",
            category: "React",
            question: "How does useReducer compare to useState?",
            answer: "useReducer is preferred over useState when you have complex state logic involving multiple sub-values or when the next state depends on the previous one, utilizing a dispatch-action model."
        },
        {
            level: "Advanced",
            category: "React",
            question: "What is React StrictMode?",
            answer: "StrictMode is a helper component that activates additional checks and warnings for its descendants in development, such as identifying unsafe lifecycles and double-invoking effects."
        },
        {
            level: "Advanced",
            category: "React",
            question: "Explain the concept of Higher-Order Components (HOC).",
            answer: "An HOC is a advanced pattern in React where a function takes a component as an argument and returns a new component with injected properties or behavior."
        },
        {
            level: "Advanced",
            category: "React",
            question: "What is the purpose of custom hooks in React?",
            answer: "Custom hooks allow you to extract component logic into reusable functions, keeping your UI and business logic separated and clean."
        },

        // --- Next.js & Modern Web (Beginner to Advanced) ---
        {
            level: "Beginner",
            category: "Next.js",
            question: "What is Next.js?",
            answer: "Next.js is a production-ready React framework that offers built-in server-side rendering, static site generation, routing, and optimization out-of-the-box."
        },
        {
            level: "Beginner",
            category: "Next.js",
            question: "What is the difference between Page Router and App Router?",
            answer: "Page Router uses the /pages directory where filenames map directly to routes, whereas App Router (/app) uses folders for route naming and supports Server Components by default."
        },
        {
            level: "Intermediate",
            category: "Next.js",
            question: "What is Server-Side Rendering (SSR)?",
            answer: "SSR is the process of rendering pages on the server for each user request before sending the complete HTML to the browser."
        },
        {
            level: "Intermediate",
            category: "Next.js",
            question: "What is Static Site Generation (SSG)?",
            answer: "SSG is a rendering method where HTML pages are pre-built at build time and served as static files, resulting in extremely fast load times."
        },
        {
            level: "Intermediate",
            category: "Next.js",
            question: "What is Incremental Static Regeneration (ISR)?",
            answer: "ISR allows you to update static pages in the background without needing to rebuild the entire website, using a revalidate interval."
        },
        {
            level: "Advanced",
            category: "Next.js",
            question: "What are React Server Components (RSC)?",
            answer: "RSCs are a new type of component that render exclusively on the server. They reduce client-side bundle size because their dependencies are not shipped to the browser."
        },
        {
            level: "Advanced",
            category: "Next.js",
            question: "What is the difference between Client and Server Components in App Router?",
            answer: "Server Components (default) run on the server and have zero client bundle size. Client Components (use 'use client') are shipped to the browser to enable interactivity, hooks, and event listeners."
        },
        {
            level: "Advanced",
            category: "Next.js",
            question: "What are Next.js Middleware?",
            answer: "Middleware allows you to run code before a request is completed, enabling redirecting, rewrite, authentication checks, or modifying headers."
        },
        {
            level: "Advanced",
            category: "Next.js",
            question: "How does Image Optimization work in Next.js?",
            answer: "The <Image> component automatically resizes images, compresses them, serves modern formats (like WebP), and lazy-loads them to prevent Cumulative Layout Shift (CLS)."
        },
        {
            level: "Advanced",
            category: "Next.js",
            question: "What is Next.js Route Handlers?",
            answer: "Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs, serving as API endpoints."
        },

        // --- Web Performance, Security & Tools (Intermediate to Advanced) ---
        {
            level: "Intermediate",
            category: "Web Security",
            question: "What is CORS (Cross-Origin Resource Sharing)?",
            answer: "CORS is a browser security mechanism that uses HTTP headers to determine whether a web application running in one origin can request resources from a different origin."
        },
        {
            level: "Intermediate",
            category: "Web Security",
            question: "What is the difference between LocalStorage, SessionStorage, and Cookies?",
            answer: "LocalStorage persists data permanently across browser sessions. SessionStorage clears data when the tab is closed. Cookies are smaller (usually 4KB) and sent with HTTP requests to the server."
        },
        {
            level: "Intermediate",
            category: "Performance",
            question: "What are Core Web Vitals?",
            answer: "Core Web Vitals are a set of metrics defined by Google to measure user experience: LCP (Largest Contentful Paint - loading speed), INP (Interaction to Next Paint - responsiveness), and CLS (Cumulative Layout Shift - visual stability)."
        },
        {
            level: "Intermediate",
            category: "Performance",
            question: "What is Lazy Loading?",
            answer: "Lazy loading is an optimization technique that delays the loading of non-critical resources (like images or code bundles) until they are actually needed on screen."
        },
        {
            level: "Intermediate",
            category: "Web Tools",
            question: "What is Code Splitting?",
            answer: "Code splitting is the practice of breaking down a single massive JS bundle into smaller chunks, loading them dynamically to speed up the initial page load."
        },
        {
            level: "Intermediate",
            category: "Web Concepts",
            question: "What is a Single Page Application (SPA)?",
            answer: "An SPA is a web app that loads a single HTML document and dynamically updates that page as the user interacts with it without reloading the entire page."
        },
        {
            level: "Intermediate",
            category: "Performance",
            question: "What is Tree Shaking?",
            answer: "Tree shaking is a dead-code elimination technique used by modern bundlers (like Webpack or Vite) to remove unused JavaScript exports from the final bundle."
        },
        {
            level: "Intermediate",
            category: "Web Concepts",
            question: "What is the difference between REST API and GraphQL?",
            answer: "REST API relies on multiple endpoints returning fixed data structures, whereas GraphQL uses a single endpoint allowing clients to query only the specific data they need."
        },
        {
            level: "Intermediate",
            category: "Web Security",
            question: "What is XSS (Cross-Site Scripting)?",
            answer: "XSS is a security vulnerability where attackers inject malicious client-side scripts into web pages viewed by other users."
        },
        {
            level: "Intermediate",
            category: "Web Security",
            question: "What is CSRF (Cross-Site Request Forgery)?",
            answer: "CSRF is an attack that forces an authenticated user to execute unwanted actions on a web application in which they're currently logged in."
        },
        {
            level: "Intermediate",
            category: "Git",
            question: "What is the difference between git merge and git rebase?",
            answer: "git merge combines changes keeping the original commit history intact with a merge commit. git rebase moves your branch's commits on top of the target branch, creating a flat, linear commit history."
        },
        {
            level: "Intermediate",
            category: "Web Concepts",
            question: "How does JWT (JSON Web Token) Authentication work?",
            answer: "The user logs in, the server signs a cryptographically secure token and sends it back. The client stores it (e.g., in Cookies or local storage) and attaches it to the Authorization header of subsequent API requests."
        },
        {
            level: "Advanced",
            category: "Performance",
            question: "What are CSS and JS rendering paths (Critical Rendering Path)?",
            answer: "The Critical Rendering Path is the sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on the screen. Optimizing this path minimizes first render time."
        },
        {
            level: "Advanced",
            category: "Performance",
            question: "Explain the difference between Preload, Prefetch, and Preconnect.",
            answer: "Preload tells the browser to download a high-priority resource immediately. Prefetch downloads low-priority resources for subsequent pages. Preconnect establishes early server connections (DNS/TCP/TLS) for external domains."
        },
        {
            level: "Advanced",
            category: "Performance",
            question: "What is a Service Worker?",
            answer: "A Service Worker is a background script run by the browser, acting as a network proxy that enables offline support, asset caching, and push notifications for PWAs."
        },
        {
            level: "Advanced",
            category: "Performance",
            question: "What is DNS Prefetching?",
            answer: "DNS prefetching is a browser feature that resolves domain names (DNS lookups) in the background before a user clicks on an external link, reducing latency."
        },
        {
            level: "Advanced",
            category: "Web Security",
            question: "What is CSP (Content Security Policy)?",
            answer: "CSP is an HTTP header security layer that helps detect and mitigate attacks like XSS and data injection by specifying which dynamic resources are allowed to load."
        },
        {
            level: "Advanced",
            category: "Web Concepts",
            question: "Explain the concept of WebSockets.",
            answer: "WebSockets provide a persistent, full-duplex communication channel over a single TCP connection, allowing real-time, bi-directional exchange of data between client and server."
        },
        {
            level: "Advanced",
            category: "Performance",
            question: "What is Content Delivery Network (CDN) and how does it work?",
            answer: "A CDN is a globally distributed network of servers that caches static content close to the user's physical location, dramatically improving page load speeds."
        },
        {
            level: "Advanced",
            category: "Performance",
            question: "Explain CDN Edge Caching and Stale-While-Revalidate.",
            answer: "Edge caching stores rendered HTML directly at global servers. Stale-While-Revalidate serves the cached (stale) version to the user instantly, while fetching the latest update in the background for the next request."
        },

        // --- TypeScript & testing (Intermediate to Advanced) ---
        {
            level: "Intermediate",
            category: "TypeScript",
            question: "What is the difference between Interface and Type in TypeScript?",
            answer: "Interfaces can be merged with declaration merging and are generally better for defining object shapes. Types can define primitives, unions, and tuples, making them more flexible."
        },
        {
            level: "Intermediate",
            category: "TypeScript",
            question: "What is the difference between any and unknown types?",
            answer: "any turns off all type-checking completely. unknown is a type-safe counterpart; you can assign anything to it, but you must narrow/check the type before you can perform operations on it."
        },
        {
            level: "Intermediate",
            category: "Testing",
            question: "What is the difference between Unit Testing and Integration Testing?",
            answer: "Unit testing verifies that individual functions or components work in isolation, while Integration testing checks how multiple pieces of your application work together as a group."
        },
        {
            level: "Advanced",
            category: "TypeScript",
            question: "What are Generics in TypeScript?",
            answer: "Generics allow you to write reusable, flexible code that can work with a variety of data types while still maintaining strict type-safety."
        },
        {
            level: "Advanced",
            category: "Testing",
            question: "What is the difference between Jest and Cypress?",
            answer: "Jest is a unit testing framework running in a Node environment using JSDOM. Cypress is an end-to-end (E2E) testing framework that runs tests directly inside a real browser."
        },

        // --- Real-life Scenario & Practical Interview Questions ---
        {
            level: "Intermediate",
            category: "Scenario",
            question: "Why can't you mutate state directly in React?",
            answer: "Directly mutating state doesn't trigger a re-render because React uses shallow reference equality checks. Modifying state immutably (e.g., creating a new copy) ensures React detects the change and updates the UI."
        },
        {
            level: "Intermediate",
            category: "Scenario",
            question: "Where is the best place to make an API call in a React Component?",
            answer: "The best place is inside a useEffect hook with an empty dependency array (for initial mount), or managed by data-fetching libraries like React Query or SWR."
        },
        {
            level: "Intermediate",
            category: "Scenario",
            question: "Is state update in React synchronous or asynchronous?",
            answer: "State updates in React are asynchronous. React batches multiple state updates together into a single render pass to optimize application performance."
        },
        {
            level: "Intermediate",
            category: "Scenario",
            question: "How do you handle a CORS error during front-end development?",
            answer: "By setting up a reverse proxy in your dev server (such as next.config.js redirects or vite.config.js proxy rules), or by asking the backend team to add your origin to the CORS whitelist headers."
        },
        {
            level: "Intermediate",
            category: "Scenario",
            question: "What is CSS FOUC (Flash of Unstyled Content) and how do you prevent it?",
            answer: "FOUC occurs when the HTML renders before the browser loads the external CSS. You prevent it by inlining critical styles or keeping style links inside the HTML <head>."
        },
        {
            level: "Advanced",
            category: "Scenario",
            question: "How do you optimize a page with thousands of listed elements?",
            answer: "By implementing Windowing (Virtualization) using libraries like react-window, loading elements incrementally via infinite scroll, and applying pagination."
        },
        {
            level: "Advanced",
            category: "Scenario",
            question: "How do you handle JWT token expiration on the front-end?",
            answer: "By listening to 401 response status in an Axios interceptor or fetch wrapper, triggering a refresh token request automatically, and updating the storage before retrying the original request."
        },
        {
            level: "Advanced",
            category: "Scenario",
            question: "How do you prevent memory leaks in React components?",
            answer: "By returning a cleanup function in useEffect to cancel active API fetches, clear timeouts/intervals, and remove event listeners when the component unmounts."
        },
        {
            level: "Advanced",
            category: "Scenario",
            question: "How would you handle progressive image loading for large banner images?",
            answer: "By displaying a low-resolution blurred placeholder first (base64) and swapping it out with the high-resolution source once the image loading is completed."
        },
        {
            level: "Advanced",
            category: "Scenario",
            question: "How do you handle accessibility (a11y) in custom dropdown menus?",
            answer: "By using proper ARIA attributes (e.g., aria-haspopup, aria-expanded), supporting keyboard navigation (Arrow keys, Enter, Escape), and managing focus with ref focus() calls."
        }
    ];

    const badgeColor = (level) => {
        switch (level) {
            case "Beginner":
                return "bg-green-100 text-green-700";
            case "Intermediate":
                return "bg-yellow-100 text-yellow-700";
            case "Advanced":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero */}
            <FrontendInterviewHeadder questions={questions} />

            {/* Questions */}
            <InterviewQuestion
                questions={questions}
                badgeColor={badgeColor}
                title="Frontend"
            />
        </main>
    );
};

export default FrontendInterview;