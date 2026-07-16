import InterviewQuestion from '@/components/InterviewComponent/InterviewQuestion';

const BackendInterviewPage = () => {
    const questions = [
        {
            id: 1,
            level: "Beginner",
            category: "HTML",
            question: "What is HTML?",
            answer: "HTML (HyperText Markup Language) is the standard markup language used to structure web pages.",
            skills: ["Web Basics", "Structure", "Tags"]
        },
        {
            id: 2,
            level: "Beginner",
            category: "HTML",
            question: "What is Semantic HTML?",
            answer: "Semantic HTML uses meaningful elements such as <header>, <main>, <article>, and <footer> to improve accessibility and SEO.",
            skills: ["SEO", "Accessibility", "A11y"]
        },
        {
            id: 3,
            level: "Beginner",
            category: "CSS",
            question: "What is the CSS Box Model?",
            answer: "The CSS Box Model is a container that wraps every HTML element, consisting of Margin, Border, Padding, and the actual Content.",
            skills: ["CSS Layout", "Styling"]
        },
        {
            id: 4,
            level: "Intermediate",
            category: "JavaScript",
            question: "Explain the JavaScript Event Loop.",
            answer: "The Event Loop enables JavaScript to execute asynchronous code without blocking the main thread by monitoring the Call Stack and Task Queue.",
            skills: ["Core JS", "Asynchronous", "Event Loop"]
        },
        {
            id: 5,
            level: "Intermediate",
            category: "React",
            question: "What is the Virtual DOM?",
            answer: "Virtual DOM is a lightweight copy of the real DOM. React compares it with the previous Virtual DOM and updates only the changed elements.",
            skills: ["React Core", "Diffing", "Reconciliation"]
        },
        {
            id: 6,
            level: "Advanced",
            category: "React / Next.js",
            question: "What is Hydration in Next.js?",
            answer: "Hydration is the process where React attaches event listeners to server-rendered HTML, making the static page fully interactive in the browser.",
            skills: ["Next.js", "SSR", "Hydration"]
        },
        {
            id: 7,
            level: "Advanced",
            category: "Node.js",
            question: "What are Worker Threads in Node.js?",
            answer: "Worker Threads allow execution of JavaScript code in parallel on separate threads, ideal for heavy CPU-intensive tasks without blocking the main loop.",
            skills: ["Node.js", "Multithreading", "Performance"]
        },
        {
            id: 8,
            level: "Intermediate",
            category: "Databases",
            question: "What are Database Indexes and how do they work?",
            answer: "Indexes are special data structures that store pointers to data rows, drastically speeding up data retrieval queries at the cost of slower writes.",
            skills: ["SQL", "NoSQL", "Query Optimization"]
        },
        {
            id: 9,
            level: "Advanced",
            category: "Security",
            question: "How do you securely store JWT tokens on the frontend?",
            answer: "Storing tokens in httpOnly, Secure, and SameSite=Strict cookies protects them from both XSS and CSRF attacks compared to LocalStorage.",
            skills: ["Web Security", "JWT", "Cookies"]
        },
        {
            id: 10,
            level: "Advanced",
            category: "Architecture",
            question: "What is the Circuit Breaker Pattern in Microservices?",
            answer: "It prevents an application from repeatedly calling a failing dependent service by immediately tripping the connection and returning a fallback error.",
            skills: ["System Design", "Microservices", "Resilience"]
        },
        {
            id: 11,
            level: "Beginner",
            category: "CSS",
            question: "What is the difference between Flexbox and Grid?",
            answer: "Flexbox is designed for one-dimensional layouts (row or column), while CSS Grid is designed for two-dimensional layouts (rows and columns simultaneously).",
            skills: ["CSS Layout", "Flexbox", "Grid"]
        },
        {
            id: 12,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is a Closure in JavaScript?",
            answer: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment), allowing inner functions to access outer scope variables even after the outer function has returned.",
            skills: ["JS Scope", "Closures", "Advanced JS"]
        },
        {
            id: 13,
            level: "Intermediate",
            category: "JavaScript",
            question: "Difference between '==' and '===' operators?",
            answer: "'==' compares values for equality after performing type coercion, whereas '===' compares both the values and the data types strictly without changing them.",
            skills: ["Data Types", "Operators", "Strict Mode"]
        },
        {
            id: 14,
            level: "Beginner",
            category: "HTML",
            question: "What is the purpose of the 'alt' attribute in images?",
            answer: "The 'alt' attribute provides alternative text for an image if it cannot be displayed, which is critical for screen readers used by visually impaired users and for SEO.",
            skills: ["A11y", "HTML Tags", "SEO Basics"]
        },
        {
            id: 15,
            level: "Intermediate",
            category: "React",
            question: "What is the purpose of React hooks?",
            answer: "Hooks are functions that let you 'hook into' React state and lifecycle features from functional components without writing class components.",
            skills: ["React Hooks", "State Management"]
        },
        {
            id: 16,
            level: "Intermediate",
            category: "React",
            question: "Explain the useEffect hook dependency array.",
            answer: "The dependency array controls when the useEffect runs. If empty, it runs once on mount. If it contains variables, it triggers whenever those specific variables change.",
            skills: ["React Lifecycle", "Hooks", "Side Effects"]
        },
        {
            id: 17,
            level: "Advanced",
            category: "JavaScript",
            question: "What is JavaScript Prototype Inheritance?",
            answer: "JavaScript objects have a link to a prototype object. When trying to access a property that doesn't exist on an object, JS looks for it in the prototype chain.",
            skills: ["Prototypes", "OOP JS", "Inheritance"]
        },
        {
            id: 18,
            level: "Intermediate",
            category: "CSS",
            question: "What are CSS Custom Properties (Variables)?",
            answer: "They are entities defined by authors that contain specific values to be reused throughout a document using the var() function.",
            skills: ["Modern CSS", "Theming", "Variables"]
        },
        {
            id: 19,
            level: "Beginner",
            category: "JavaScript",
            question: "Difference between var, let, and const?",
            answer: "var is function-scoped and hoisted. let and const are block-scoped, where let allows reassignment and const creates a read-only reference.",
            skills: ["ES6", "Variables", "Scope"]
        },
        {
            id: 20,
            level: "Intermediate",
            category: "Node.js",
            question: "What is npm and package.json?",
            answer: "npm is the package manager for Node.js. package.json is the manifest file that stores project metadata, scripts, and third-party dependencies.",
            skills: ["Node Eco", "npm", "Dependency Management"]
        },
        {
            id: 21,
            level: "Advanced",
            category: "Databases",
            question: "Explain ACID properties in SQL databases.",
            answer: "ACID stands for Atomicity (all or nothing), Consistency (valid data state), Isolation (independent transactions), and Durability (saved permanently).",
            skills: ["SQL", "Transactions", "Data Integrity"]
        },
        {
            id: 22,
            level: "Intermediate",
            category: "Web Performance",
            question: "What is Debouncing in JavaScript?",
            answer: "Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called, optimizing frequent events like search inputs.",
            skills: ["Optimization", "DOM Events", "Performance"]
        },
        {
            id: 23,
            level: "Intermediate",
            category: "Web Performance",
            question: "What is Throttling in JavaScript?",
            answer: "Throttling limits the maximum number of times a function can be called over time, useful for heavy event handlers like scrolling or resizing.",
            skills: ["Optimization", "DOM Events", "Rate Limiting"]
        },
        {
            id: 24,
            level: "Beginner",
            category: "Git",
            question: "What is the difference between git merge and git rebase?",
            answer: "git merge integrates feature branches by adding a new merge commit, preserving exact history, while git rebase moves the entire feature branch to begin on the tip of the master branch, rewriting history linearly.",
            skills: ["Git", "Version Control", "DevOps Basics"]
        },
        {
            id: 25,
            level: "Advanced",
            category: "Security",
            question: "What is Cross-Site Scripting (XSS)?",
            answer: "XSS is a vulnerability where an attacker injects malicious client-side scripts into web pages viewed by other users, bypassable via proper input sanitization.",
            skills: ["Web Security", "XSS", "Sanitization"]
        },
        {
            id: 26,
            level: "Advanced",
            category: "Security",
            question: "What is Cross-Site Request Forgery (CSRF)?",
            answer: "CSRF forces an end user to execute unwanted actions on a web application in which they're currently authenticated, preventable via anti-CSRF tokens.",
            skills: ["Web Security", "CSRF", "Tokens"]
        },
        {
            id: 27,
            level: "Intermediate",
            category: "React",
            question: "What is the Context API in React?",
            answer: "Context API provides a way to pass data down through the component tree without having to pass props manually at every level (avoiding prop drilling).",
            skills: ["React Context", "State Management", "Prop Drilling"]
        },
        {
            id: 28,
            level: "Intermediate",
            category: "React",
            question: "What is React.memo() used for?",
            answer: "React.memo is a higher-order component that shallowly compares component props to prevent unnecessary re-renders when props don't change.",
            skills: ["Optimization", "React Core", "Memoization"]
        },
        {
            id: 29,
            level: "Advanced",
            category: "JavaScript",
            question: "What are JavaScript Generator Functions?",
            answer: "Generators are functions that can be exited and later re-entered, maintaining their context across yield statements, written with function* syntax.",
            skills: ["Advanced JS", "Generators", "Iterators"]
        },
        {
            id: 30,
            level: "Advanced",
            category: "Next.js",
            question: "Difference between SSR and SSG in Next.js?",
            answer: "SSR (Server-Side Rendering) generates HTML dynamically on every user request, while SSG (Static Site Generation) compiles HTML ahead of time at build time.",
            skills: ["Next.js", "Rendering Patterns", "Performance"]
        },
        {
            id: 31,
            level: "Beginner",
            category: "JavaScript",
            question: "What are Higher-Order Functions?",
            answer: "Functions that operate on other functions, either by taking them as arguments or by returning them, such as .map(), .filter(), and .reduce().",
            skills: ["Functional JS", "Array Methods"]
        },
        {
            id: 32,
            level: "Intermediate",
            category: "API Design",
            question: "What is RESTful API design?",
            answer: "An architectural style for developing APIs based on HTTP methods (GET, POST, PUT, DELETE) using stateless operations and resource-based endpoints.",
            skills: ["REST API", "Backend", "HTTP Methods"]
        },
        {
            id: 33,
            level: "Intermediate",
            category: "API Design",
            question: "What is GraphQL and how does it differ from REST?",
            answer: "GraphQL is a query language for APIs that allows clients to request exactly the data they need, eliminating over-fetching and under-fetching common in REST.",
            skills: ["GraphQL", "API Development", "Data Fetching"]
        },
        {
            id: 34,
            level: "Advanced",
            category: "TypeScript",
            question: "Difference between Type and Interface in TypeScript?",
            answer: "Interfaces are extendable via declaration merging and are optimized for objects, whereas Types are more flexible and can define unions, primitives, and tuples.",
            skills: ["TypeScript", "Static Typing", "Type Safety"]
        },
        {
            id: 35,
            level: "Advanced",
            category: "TypeScript",
            question: "What are Generics in TypeScript?",
            answer: "Generics allow developers to create reusable components or functions that work over a variety of types rather than a single specific data type.",
            skills: ["TypeScript", "Generics", "Reusability"]
        },
        {
            id: 36,
            level: "Intermediate",
            category: "CSS",
            question: "Explain the CSS specificity hierarchy.",
            answer: "Specificity determines which CSS rule applies: Inline styles have highest weight, followed by IDs (#), Classes/Attributes (. class), and Elements (div, p).",
            skills: ["CSS Basics", "Cascading Rules"]
        },
        {
            id: 37,
            level: "Beginner",
            category: "HTML",
            question: "What is the purpose of data-* attributes?",
            answer: "They allow embedding custom private data attributes on standard HTML elements, easily accessible via JavaScript dataset properties.",
            skills: ["HTML5", "DOM Manipulation"]
        },
        {
            id: 38,
            level: "Intermediate",
            category: "Node.js",
            question: "What is middleware in Express.js?",
            answer: "Middleware functions are functions that have access to the request, response, and the next middleware function in the application's request-response cycle.",
            skills: ["Express.js", "Backend Architecture", "Node.js"]
        },
        {
            id: 39,
            level: "Advanced",
            category: "Architecture",
            question: "What is Horizontal vs Vertical Scaling?",
            answer: "Vertical scaling increases compute power (CPU/RAM) on a single server, while Horizontal scaling adds more independent server instances to a pool.",
            skills: ["System Design", "Scalability", "Infrastructure"]
        },
        {
            id: 40,
            level: "Advanced",
            category: "Architecture",
            question: "What is Sharding in databases?",
            answer: "Sharding is a method for distributing a single dataset across multiple databases or machines, breaking large tables into smaller chunks.",
            skills: ["Database Design", "Sharding", "Scale"]
        },
        {
            id: 41,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is a Promise in JavaScript?",
            answer: "A Promise is an object representing the ultimate completion or failure of an asynchronous operation, existing in Pending, Fulfilled, or Rejected states.",
            skills: ["Async JS", "Promises", "ES6"]
        },
        {
            id: 42,
            level: "Intermediate",
            category: "JavaScript",
            question: "Explain async/await syntax.",
            answer: "Async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code, improving readability.",
            skills: ["Async JS", "Async/Await", "Clean Code"]
        },
        {
            id: 43,
            level: "Beginner",
            category: "CSS",
            question: "What is the difference between relative, absolute, and fixed positioning?",
            answer: "Relative shifts relative to normal flow; absolute offsets relative to its nearest positioned ancestor; fixed offsets relative to the viewport browser window.",
            skills: ["CSS Positioning", "Layouts"]
        },
        {
            id: 44,
            level: "Advanced",
            category: "Security",
            question: "What is SQL Injection (SQLi) and how do you prevent it?",
            answer: "SQLi occurs when malicious SQL statements are inserted into entry fields for execution. It is prevented using parameterized queries and prepared statements.",
            skills: ["Security", "SQL", "Backend Safety"]
        },
        {
            id: 45,
            level: "Intermediate",
            category: "React",
            question: "Why do we need 'keys' in React lists?",
            answer: "Keys help React identify which items have changed, been added, or been removed, giving elements a stable identity during the DOM diffing process.",
            skills: ["React Core", "Performance", "Lists"]
        },
        {
            id: 46,
            level: "Intermediate",
            category: "React",
            question: "What is prop drilling and how do you solve it?",
            answer: "Prop drilling is passing data through multiple layers of nested components that don't need it. Solved via Context API or global state managers like Redux.",
            skills: ["React State", "Architecture"]
        },
        {
            id: 47,
            level: "Advanced",
            category: "JavaScript",
            question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
            answer: "TDZ is the behavior where let and const variables cannot be accessed before their formal declaration line, throwing a ReferenceError if attempted.",
            skills: ["Hoisting", "Variables Scope", "Core JS"]
        },
        {
            id: 48,
            level: "Intermediate",
            category: "Web Performance",
            question: "What is Lazy Loading?",
            answer: "A strategy that delays the loading of non-critical resources (like images or lower page components) until the moment they are actually needed by the user.",
            skills: ["Optimization", "Asset Loading", "Lazy Loading"]
        },
        {
            id: 49,
            level: "Advanced",
            category: "Databases",
            question: "What is CAP Theorem?",
            answer: "CAP states a distributed system can guarantee at most two out of three features: Consistency, Availability, and Partition Tolerance.",
            skills: ["System Design", "Distributed Systems", "Data Theory"]
        },
        {
            id: 50,
            level: "Beginner",
            category: "Git",
            question: "What is the purpose of git stash?",
            answer: "Git stash temporarily shelves (or stashes) changes you've made to your working directory so you can work on something else, then reapply them later.",
            skills: ["Git Tools", "Workflow"]
        },
        {
            id: 51,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the purpose of the Array.prototype.reduce() method?",
            answer: "It executes a reducer function on each element of the array, resulting in a single output value (e.g., summing numbers, combining objects).",
            skills: ["Array Methods", "Functional Programming"]
        },
        {
            id: 52,
            level: "Beginner",
            category: "CSS",
            question: "What is the difference between display: none and visibility: hidden?",
            answer: "display: none removes the element entirely from the layout flow, whereas visibility: hidden hides the element but leaves its empty space intact.",
            skills: ["CSS Basics", "Layout Control"]
        },
        {
            id: 53,
            level: "Intermediate",
            category: "Web Performance",
            question: "What are Core Web Vitals?",
            answer: "A set of specific metrics defined by Google to measure user experience: LCP (Loading), FID/INP (Interactivity), and CLS (Visual Stability).",
            skills: ["SEO", "Web Performance", "Google Metrics"]
        },
        {
            id: 54,
            level: "Advanced",
            category: "Architecture",
            question: "What is Micro-frontend architecture?",
            answer: "An architectural style where a frontend application is broken down into smaller, semi-independent applications that work seamlessly together.",
            skills: ["Frontend Architecture", "Scale", "Module Federation"]
        },
        {
            id: 55,
            level: "Advanced",
            category: "Security",
            question: "Explain Cross-Origin Resource Sharing (CORS).",
            answer: "CORS is a browser security mechanism that uses HTTP headers to allow or restrict a web application running at one origin to access resources from another server.",
            skills: ["Web Security", "HTTP Headers", "CORS"]
        },
        {
            id: 56,
            level: "Intermediate",
            category: "React",
            question: "What is the difference between useMemo and useCallback?",
            answer: "useMemo returns a memoized *value* computed from an expensive function, while useCallback returns a memoized *callback function* itself to prevent recreation.",
            skills: ["React Hooks", "Optimization", "Memoization"]
        },
        {
            id: 57,
            level: "Intermediate",
            category: "React",
            question: "What are uncontrolled components in React?",
            answer: "Components where form data is handled by the traditional DOM itself instead of updating state inside React components, typically fetched using a ref.",
            skills: ["React Forms", "Refs"]
        },
        {
            id: 58,
            level: "Advanced",
            category: "Node.js",
            question: "Explain the streams API in Node.js.",
            answer: "Streams are unix-like pipes that let you read data from a source or write data to a destination continuously, handling large data chunks efficiently without overloading RAM.",
            skills: ["Node.js Core", "Buffers", "Streams"]
        },
        {
            id: 59,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the difference between Object.freeze() and Object.seal()?",
            answer: "freeze() makes an object entirely immutable (no adds, deletes, or changes). seal() stops new properties from being added or deleted, but allows modifying existing ones.",
            skills: ["Objects", "Immutability"]
        },
        {
            id: 60,
            level: "Advanced",
            category: "Architecture",
            question: "What is Event-Driven Architecture?",
            answer: "A software architecture paradigm centered around the production, detection, consumption of, and reaction to system state-change events.",
            skills: ["System Design", "Kafka", "Asynchronous Patterns"]
        },
        {
            id: 61,
            level: "Beginner",
            category: "HTML",
            question: "What is the difference between <span> and <div> elements?",
            answer: "div is a block-level element used for structural layout, taking up full width. span is an inline element used to wrap text or phrasing content.",
            skills: ["HTML Basics", "Block vs Inline"]
        },
        {
            id: 62,
            level: "Intermediate",
            category: "CSS",
            question: "What are CSS media queries?",
            answer: "A feature of CSS that allows content rendering to adapt to conditions such as screen resolution, viewport width, or device orientation.",
            skills: ["Responsive Web Design", "Mobile First"]
        },
        {
            id: 63,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the difference between synchronous and asynchronous code?",
            answer: "Synchronous code executes sequentially line-by-line, blocking operations. Asynchronous code allows task offloading, continuing execution without waiting.",
            skills: ["Asynchronous", "Execution Flow"]
        },
        {
            id: 64,
            level: "Advanced",
            category: "Databases",
            question: "When should you use NoSQL instead of SQL?",
            answer: "NoSQL is ideal for unstructured or rapidly changing data shapes, high-throughput horizontal write scaling, and systems needing rapid denormalized lookups.",
            skills: ["Database Choice", "NoSQL", "System Design"]
        },
        {
            id: 65,
            level: "Intermediate",
            category: "React",
            question: "What is the purpose of the useReducer hook?",
            answer: "An alternative hook to useState for managing complex component state transitions, using a dispatch approach similar to global Redux patterns.",
            skills: ["React Hooks", "State Architecture"]
        },
        {
            id: 66,
            level: "Advanced",
            category: "Next.js",
            question: "What is Incremental Static Regeneration (ISR)?",
            answer: "ISR allows developers to update static pages in the background after building the site, without needing to fully rebuild the entire static site.",
            skills: ["Next.js", "ISR", "Static Caching"]
        },
        {
            id: 67,
            level: "Advanced",
            category: "JavaScript",
            question: "What is the purpose of the JavaScript Proxy object?",
            answer: "A Proxy allows you to create a wrapper for another object, intercepting and custom-defining fundamental operations like reading or writing properties.",
            skills: ["Meta-programming", "Advanced JS", "Proxies"]
        },
        {
            id: 68,
            level: "Intermediate",
            category: "Web Performance",
            question: "What is Content Delivery Network (CDN)?",
            answer: "A globally distributed network of proxy servers that cache static content close to users' physical locations, reducing page load latencies.",
            skills: ["Caching", "Networking", "Performance"]
        },
        {
            id: 69,
            level: "Advanced",
            category: "Security",
            question: "What is OAuth 2.0?",
            answer: "An authorization framework that enables third-party applications to obtain limited access to an HTTP service on behalf of a resource owner.",
            skills: ["Authentication", "OAuth2", "Identity Control"]
        },
        {
            id: 70,
            level: "Intermediate",
            category: "TypeScript",
            question: "What is type assertion in TypeScript?",
            answer: "Type assertion allows you to manually tell the compiler to treat a value as a specific type, overriding its inferred assumptions using 'as' syntax.",
            skills: ["TypeScript Basics", "Type Assertion"]
        },
        {
            id: 71,
            level: "Beginner",
            category: "JavaScript",
            question: "What is the typeof operator?",
            answer: "A unary operator placed before a single operand, returning a string indicating the JavaScript evaluation type (e.g., 'string', 'number').",
            skills: ["JS Basics", "Types Testing"]
        },
        {
            id: 72,
            level: "Intermediate",
            category: "CSS",
            question: "What is Mobile-First design?",
            answer: "An approach where styles are written for small viewport sizes first (base styles), then expanded for larger screens via media queries.",
            skills: ["Responsive Design", "Mobile Patterns"]
        },
        {
            id: 73,
            level: "Advanced",
            category: "API Design",
            question: "What is API Rate Limiting?",
            answer: "A strategy for limiting network traffic by enforcing constraints on how frequently a client can make requests within a target window.",
            skills: ["API Security", "Rate Limiting", "Backend Defense"]
        },
        {
            id: 74,
            level: "Intermediate",
            category: "React",
            question: "What are React Fragments?",
            answer: "Fragments let you group a list of children elements together without adding extra unnecessary container wrapper nodes to the HTML DOM structure.",
            skills: ["React Rendering", "Clean DOM"]
        },
        {
            id: 75,
            level: "Intermediate",
            category: "Node.js",
            question: "What is the difference between cluster mode and worker threads?",
            answer: "Cluster mode creates multi-process instances sharing network ports (ideal for multi-core HTTP scale), while worker threads share memory inside one process.",
            skills: ["Node Concurrency", "Scaling"]
        },
        {
            id: 76,
            level: "Advanced",
            category: "Architecture",
            question: "What is CQRS pattern?",
            answer: "Command Query Responsibility Segregation separates reading data operations from mutation write paths to optimize performance and security scales.",
            skills: ["System Design", "CQRS", "Data Patterns"]
        },
        {
            id: 77,
            level: "Advanced",
            category: "Security",
            question: "What is a Man-in-the-Middle (MitM) attack?",
            answer: "An attack where the attacker secretly intercepts and alters communications between two authenticated endpoints, mitigated using strict HTTPS.",
            skills: ["Network Security", "HTTPS", "Encryption"]
        },
        {
            id: 78,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the difference between map() and forEach()?",
            answer: "map() creates a brand new transformed array based on function returns, while forEach() simply iterates through items executing side-effects.",
            skills: ["Array Methods", "Immutability"]
        },
        {
            id: 79,
            level: "Beginner",
            category: "HTML",
            question: "What is the purpose of the <meta> tags in HTML?",
            answer: "Meta tags provide structured metadata about the HTML document, configuring attributes like charset encoding, viewport scale, and SEO details.",
            skills: ["SEO Basics", "HTML Config"]
        },
        {
            id: 80,
            level: "Intermediate",
            category: "Git",
            question: "What is the HEAD in Git?",
            answer: "HEAD is a reference pointer targeting the currently active local branch or checked-out commit workspace inside the current repository.",
            skills: ["Git Core", "DevOps Base"]
        },
        {
            id: 81,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is string interpolation in JavaScript?",
            answer: "A feature allowing expression embedding inside backtick template literals using the dollar-brace syntax: `${expression}`.",
            skills: ["ES6", "String Formats"]
        },
        {
            id: 82,
            level: "Beginner",
            category: "CSS",
            question: "What is the z-index property?",
            answer: "z-index sets the stack order hierarchy of overlapping elements, applying solely to nodes with explicit position settings.",
            skills: ["CSS Stacking", "Layout Fixes"]
        },
        {
            id: 83,
            level: "Advanced",
            category: "Databases",
            question: "What is Database Normalization?",
            answer: "The systematic process of structuring database schemas to reduce data redundancy and eliminate bad mutation anomalies up to 3NF forms.",
            skills: ["SQL Design", "Schema Architecture"]
        },
        {
            id: 84,
            level: "Advanced",
            category: "Web Performance",
            question: "What is tree shaking?",
            answer: "A build-optimization step that analyzes modern ES module code to strip out unused dead code bundles during packaging compilers.",
            skills: ["Webpack", "Bundling Optimization"]
        },
        {
            id: 85,
            level: "Intermediate",
            category: "React",
            question: "What is code-splitting in React?",
            answer: "A feature that splits bundles into isolated lazily loaded parts, lowering initial loading weights via React.lazy and Suspense boundaries.",
            skills: ["React Performance", "Code Splitting"]
        },
        {
            id: 86,
            level: "Intermediate",
            category: "TypeScript",
            question: "What is an enum in TypeScript?",
            answer: "A feature allowing developers to declare a set of named constants, organizing numeric or string-based categorical option labels explicitly.",
            skills: ["TypeScript Enums", "Data Safety"]
        },
        {
            id: 87,
            level: "Advanced",
            category: "Security",
            question: "What is Content Security Policy (CSP)?",
            answer: "An HTTP header mitigation defense layer that restricts the source sites from which browsers can safely load resources or scripts.",
            skills: ["Csp", "Xss Defense", "Security Headers"]
        },
        {
            id: 88,
            level: "Advanced",
            category: "Architecture",
            question: "What is Event Sourcing?",
            answer: "An architecture where state mutations are recorded as an immutable append-only sequence of historical system events rather than direct overwrite rows.",
            skills: ["Architecture", "Event Logs"]
        },
        {
            id: 89,
            level: "Intermediate",
            category: "Node.js",
            question: "What is the event emitter pattern?",
            answer: "A core Node node pattern where objects bind listener callback functions to named events, executing them asynchronously on target dispatch ticks.",
            skills: ["Node Events", "Backend design"]
        },
        {
            id: 90,
            level: "Beginner",
            category: "JavaScript",
            question: "What are template literals?",
            answer: "String literals allowing multi-line strings and inline expression values, marked natively via backtick enclosures instead of quotes.",
            skills: ["ES6", "Strings Syntax"]
        },
        {
            id: 91,
            level: "Intermediate",
            category: "CSS",
            question: "What is the difference between em and rem units?",
            answer: "rem measures relative to the root HTML font size settings, while em adjusts scaling relative to the parent local node font inheritance.",
            skills: ["CSS Units", "Fluid Typography"]
        },
        {
            id: 92,
            level: "Advanced",
            category: "JavaScript",
            question: "What is strict mode in JavaScript?",
            answer: "A parsed configuration ('use strict') that enforces stricter run rules, catching silent errors and blocking unsafe variable exposures.",
            skills: ["Strict Parsing", "Code Quality"]
        },
        {
            id: 93,
            level: "Intermediate",
            category: "React",
            question: "What is prop validation in React?",
            answer: "A runtime check mechanism utilizing the prop-types library to flag validation mismatch alerts for component parameters in development builds.",
            skills: ["React Quality", "Type Safety"]
        },
        {
            id: 94,
            level: "Advanced",
            category: "API Design",
            question: "What are WebSockets?",
            answer: "A persistent, bi-directional full-duplex TCP transport connection protocol allowing real-time data push feeds without REST pulling loops.",
            skills: ["WebSockets", "Real-Time Systems"]
        },
        {
            id: 95,
            level: "Advanced",
            category: "Architecture",
            question: "What is a Reverse Proxy?",
            answer: "An edge server routing gateway positioned ahead of internal services, managing tasks like SSL terminations, load balancing, and cache routing.",
            skills: ["Nginx", "Infrastructure", "Proxies"]
        },
        {
            id: 96,
            level: "Intermediate",
            category: "Databases",
            question: "What is an ORM?",
            answer: "Object-Relational Mapping libraries allowing developers to query databases using local object code instead of raw SQL lines (e.g., Prisma).",
            skills: ["Orms", "Prisma", "Data Layer"]
        },
        {
            id: 97,
            level: "Beginner",
            category: "Git",
            question: "What is a git clone?",
            answer: "A command that targets an external repository URL, downloading a copy of its history to create a local workspace folder.",
            skills: ["Git Basics", "Workspace Config"]
        },
        {
            id: 98,
            level: "Intermediate",
            category: "Web Performance",
            question: "What is Service Worker?",
            answer: "A background proxy script intercepting network requests, driving offline resource caching and enabling PWA application behaviors.",
            skills: ["Pwa Base", "Caching Proxies"]
        },
        {
            id: 99,
            level: "Advanced",
            category: "Security",
            question: "Explain Salting in password hashing.",
            answer: "Adding a unique random string block to passwords before hashing them, completely neutralizing rainbow table lookup database exploits.",
            skills: ["Crypto Base", "Backend Safety"]
        },
        {
            id: 100,
            level: "Advanced",
            category: "Architecture",
            question: "What is Load Balancing?",
            answer: "The process of distributing incoming network traffic efficiently across multiple backend application servers to avoid single bottle-necks.",
            skills: ["Scale Theory", "Infrastructure Design"]
        },
        {
            id: 101,
            level: "Intermediate",
            category: "React",
            question: "What are React Portals?",
            answer: "Portals provide a first-class way to render React child components into a completely different DOM node that exists outside the parent layout tree hierarchy.",
            skills: ["React Portals", "Modals", "Advanced Layout"]
        },
        {
            id: 102,
            level: "Advanced",
            category: "JavaScript",
            question: "What is garbage collection in JavaScript?",
            answer: "An automatic memory management system that tracks objects in memory and frees up memory blocks when objects are no longer referenced or reachable in the execution context.",
            skills: ["Memory Management", "V8 Engine", "Performance Optimization"]
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
        <div>
            {/* Questions */}
            <InterviewQuestion
                questions={questions}
                badgeColor={badgeColor}
            />
        </div>
    );
};

export default BackendInterviewPage;