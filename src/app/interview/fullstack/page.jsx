import FrontendInterviewHeadder from '@/components/InterviewComponent/FrontendInterviewHeadder';
import InterviewQuestion from '@/components/InterviewComponent/InterviewQuestion';
import React from 'react';

const FullStackInterviewPage = () => {

    const questions = [
        // === FRONTEND & BROWSER INTERNALS (1-20) ===
        {
            id: 1,
            level: "Beginner",
            category: "HTML",
            question: "What is the difference between block and inline elements?",
            answer: "Block elements (e.g., <div>, <p>) start on a new line and take up the full width available. Inline elements (e.g., <span>, <a>) only take up as much width as their content and do not force a new line.",
            skills: ["HTML Basics", "DOM Structure"]
        },
        {
            id: 2,
            level: "Beginner",
            category: "HTML",
            question: "What is Semantic HTML and why is it important?",
            answer: "Semantic HTML uses tags that clearly describe their meaning (e.g., <article>, <nav>, <header>). It is critical for Search Engine Optimization (SEO), accessibility (screen readers), and code readability.",
            skills: ["SEO", "Accessibility", "A11y"]
        },
        {
            id: 3,
            level: "Beginner",
            category: "CSS",
            question: "Explain the CSS Box Model.",
            answer: "The box model dictates how HTML elements are structured visually. It consists of the core Content, wrapped by Padding (space inside the border), Border, and Margin (space outside the border).",
            skills: ["CSS Layouts", "Styling"]
        },
        {
            id: 4,
            level: "Intermediate",
            category: "CSS",
            question: "What is the primary difference between Flexbox and CSS Grid?",
            answer: "Flexbox is designed for one-dimensional layouts (either a single row or a single column), whereas CSS Grid is explicitly built for complex two-dimensional layouts (rows and columns combined).",
            skills: ["Flexbox", "CSS Grid", "Responsive Layouts"]
        },
        {
            id: 5,
            level: "Intermediate",
            category: "CSS",
            question: "What is CSS Specificity and how is it calculated?",
            answer: "Specificity determines which CSS rule wins when multiple conflict. The hierarchy weight is: Inline styles (highest) > IDs > Classes/Attributes/Pseudo-classes > Elements (lowest).",
            skills: ["CSS Basics", "Cascading Rules"]
        },
        {
            id: 6,
            level: "Intermediate",
            category: "CSS",
            question: "What is the difference between 'em' and 'rem' units?",
            answer: "'rem' is relative to the root HTML element font size (usually 16px by default), making it highly predictable. 'em' is relative to the font size of its immediate parent element.",
            skills: ["Modern CSS", "Typography"]
        },
        {
            id: 7,
            level: "Beginner",
            category: "JavaScript",
            question: "What is the difference between 'let', 'const', and 'var'?",
            answer: "'var' is function-scoped and hoisted. 'let' and 'const' are block-scoped; 'let' allows reassignment of values, while 'const' creates a read-only variable reference.",
            skills: ["ES6 Syntax", "Scope"]
        },
        {
            id: 8,
            level: "Intermediate",
            category: "JavaScript",
            question: "Explain the concept of JavaScript Closures.",
            answer: "A closure is a function that remembers and accesses variables from its outer (lexical) scope even after the outer function has finished executing.",
            skills: ["Closures", "Scope Chain", "Advanced JS"]
        },
        {
            id: 9,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is the difference between '==' and '==='?",
            answer: "'==' (loose equality) compares two values after converting them to a common type (type coercion). '===' (strict equality) checks both value equality and data type without shifting.",
            skills: ["Type Coercion", "JS Operators"]
        },
        {
            id: 10,
            level: "Intermediate",
            category: "JavaScript",
            question: "Explain the JavaScript Event Loop.",
            answer: "The Event Loop is a mechanism that allows JS to perform non-blocking asynchronous operations. It continuously monitors the Call Stack and moves callbacks from the Callback/Task Queue to the stack when it is completely empty.",
            skills: ["Event Loop", "Asynchronous JS", "Concurrency"]
        },
        {
            id: 11,
            level: "Intermediate",
            category: "JavaScript",
            question: "What is a Promise in JavaScript?",
            answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It exists in three states: Pending, Fulfilled, or Rejected.",
            skills: ["Promises", "Async Flow", "ES6"]
        },
        {
            id: 12,
            level: "Intermediate",
            category: "JavaScript",
            question: "How does async/await improve asynchronous code?",
            answer: "Async/await is syntactic sugar built on top of JavaScript Promises. It allows asynchronous code to be written and read like synchronous code, greatly improving clean readability.",
            skills: ["Async/Await", "Clean Code"]
        },
        {
            id: 13,
            level: "Advanced",
            category: "JavaScript",
            question: "Explain Prototypal Inheritance in JavaScript.",
            answer: "Every JavaScript object has an internal prototype link to another object. When a property or method is called, JS traverses up this prototype chain until it finds it or hits null.",
            skills: ["Prototypes", "OOP JS", "Inheritance"]
        },
        {
            id: 14,
            level: "Advanced",
            category: "JavaScript",
            question: "What is the Temporal Dead Zone (TDZ)?",
            answer: "TDZ is the phase from the start of the block scope until the variable is declared. Accessing variables declared via 'let' or 'const' in this zone throws a ReferenceError.",
            skills: ["Hoisting", "Variables Scope"]
        },
        {
            id: 15,
            level: "Advanced",
            category: "JavaScript",
            question: "What is the difference between 'call', 'apply', and 'bind'?",
            answer: "'call' invokes a function with a specified 'this' value and arguments passed individually. 'apply' does the same but accepts arguments as an array. 'bind' returns a new function with fixed 'this' without executing instantly.",
            skills: ["Context Binding", "This Keyword"]
        },
        {
            id: 16,
            level: "Intermediate",
            category: "Web Performance",
            question: "What is the difference between Debouncing and Throttling?",
            answer: "Debouncing delays function execution until a specified time has passed since the last trigger (great for search inputs). Throttling limits execution to once per specified time interval (great for window resizing).",
            skills: ["Event Optimization", "DOM Performance"]
        },
        {
            id: 17,
            level: "Intermediate",
            category: "Web Performance",
            question: "What is Lazy Loading?",
            answer: "Lazy loading is a strategy that defers the loading of non-critical assets (like below-the-fold images or split code chunks) until the moment they enter the user's viewport.",
            skills: ["Asset Optimization", "Loading Speed"]
        },
        {
            id: 18,
            level: "Advanced",
            category: "Web Performance",
            question: "What are Core Web Vitals?",
            answer: "Core Web Vitals are user-centric performance metrics tracked by Google: LCP (Largest Contentful Paint for loading speed), FID/INP (Interaction tracking), and CLS (Cumulative Layout Shift for visual stability).",
            skills: ["SEO Performance", "Frontend Auditing"]
        },
        {
            id: 19,
            level: "Advanced",
            category: "Web Performance",
            question: "What is Tree Shaking?",
            answer: "Tree shaking is a term for dead-code elimination. It relies on the static structure of ES2015 module syntax (import/export) to remove unused code modules during project bundles.",
            skills: ["Webpack", "Vite", "Bundle Optimization"]
        },
        {
            id: 20,
            level: "Intermediate",
            category: "Browser Internals",
            question: "What is the difference between LocalStorage, SessionStorage, and Cookies?",
            answer: "LocalStorage persists indefinitely across browser sessions. SessionStorage clears automatically when the browser tab closes. Cookies are small, sent with HTTP requests, and have explicit expirations.",
            skills: ["Client Storage", "Web Storage"]
        },

        // === REACT & MODERN FRONTEND FRAMEWORKS (21-40) ===
        {
            id: 21,
            level: "Intermediate",
            category: "React",
            question: "What is the Virtual DOM and how does React use it?",
            answer: "The Virtual DOM is a lightweight, in-memory representation of the real DOM. React tracks UI updates in the Virtual DOM first, runs a 'diffing' algorithm, and updates only changed nodes in the real DOM (Reconciliation).",
            skills: ["React Core", "Diffing Algorithm"]
        },
        {
            id: 22,
            level: "Beginner",
            category: "React",
            question: "Why do you need 'keys' when rendering arrays of components in React?",
            answer: "Keys provide a stable identity to array items. They help React identify which elements have changed, been added, or been removed, preventing unnecessary DOM rebuilding and preserving element state.",
            skills: ["React Lists", "Rendering Efficiency"]
        },
        {
            id: 23,
            level: "Intermediate",
            category: "React",
            question: "Explain the purpose of the useEffect dependency array.",
            answer: "The dependency array controls when the hook re-runs. An empty array [] runs only on mount. An array with values [prop, state] re-runs whenever those specific values mutate.",
            skills: ["Hooks Lifecycle", "Side Effects"]
        },
        {
            id: 24,
            level: "Intermediate",
            category: "React",
            question: "What is Prop Drilling and how can you prevent it?",
            answer: "Prop drilling is passing data down multiple levels of nested child components that don't need it just to reach a lower component. It is prevented using React Context API or state managers like Redux.",
            skills: ["State Management", "Context API"]
        },
        {
            id: 25,
            level: "Intermediate",
            category: "React",
            question: "What is the difference between useMemo and useCallback?",
            answer: "useMemo caches the *result value* of an expensive calculation. useCallback caches the *instance of a callback function* itself to prevent child re-renders via prop references.",
            skills: ["Performance Hooks", "Memoization"]
        },
        {
            id: 26,
            level: "Intermediate",
            category: "React",
            question: "What is the difference between Controlled and Uncontrolled components?",
            answer: "Controlled components have form input values bound directly to React state. Uncontrolled components rely on traditional HTML DOM handling, where input data is fetched using React refs.",
            skills: ["React Forms", "Refs Hook"]
        },
        {
            id: 27,
            level: "Advanced",
            category: "React",
            question: "What are React Portals and when should you use them?",
            answer: "Portals allow rendering child nodes into a completely different DOM subtree outside the parent component's structural container, ideal for overlays like Modals and Tooltips.",
            skills: ["Advanced Render", "DOM Management"]
        },
        {
            id: 28,
            level: "Advanced",
            category: "React / Next.js",
            question: "Explain Hydration in modern SSR frameworks.",
            answer: "Hydration is the client-side process where React boots up in the browser, matches the server-rendered pre-built HTML layout, and attaches JavaScript event listeners to make it interactive.",
            skills: ["SSR Architecture", "Next.js Rendering"]
        },
        {
            id: 29,
            level: "Advanced",
            category: "Next.js",
            question: "What is the difference between SSR, SSG, and ISR?",
            answer: "SSR (Server-Side Rendering) compiles pages dynamically on every user request. SSG (Static Site Generation) builds pages once at compile time. ISR (Incremental Static Regeneration) regenerates static pages in the background over custom intervals.",
            skills: ["Next.js Caching", "Rendering Optimization"]
        },
        {
            id: 30,
            level: "Intermediate",
            category: "State Management",
            question: "What is Redux Toolkit (RTK) and why use it over classic Redux?",
            answer: "Redux Toolkit is the official, opinionated toolset for Redux. It drastically cuts down boilerplate code, automatically integrates Redux-Thunk for async tasks, and includes Immer for mutable-looking state updates.",
            skills: ["Global State", "Redux Toolkit"]
        },
        {
            id: 31,
            level: "Intermediate",
            category: "React",
            question: "What is the useReducer hook and when should you prefer it over useState?",
            answer: "useReducer is a React hook used for complex state logic involving multiple sub-values or when the next state depends directly on the previous one. It uses an action/reducer dispatch mechanism.",
            skills: ["State Architecture", "React Hooks"]
        },
        {
            id: 32,
            level: "Advanced",
            category: "React",
            question: "What is React StrictMode and what does it do in development?",
            answer: "StrictMode is a development-only tool that highlights potential bugs. It deliberately double-invokes component lifecycles, states, and effects to catch side-effects and warn about deprecated APIs.",
            skills: ["Debugging", "React Standards"]
        },
        {
            id: 33,
            level: "Intermediate",
            category: "React",
            question: "What are Higher-Order Components (HOC)?",
            answer: "A Higher-Order Component is an advanced pattern in React where a function takes an existing component as an argument and returns a new component injected with enhanced functionalities.",
            skills: ["Code Reusability", "Advanced React Patterns"]
        },
        {
            id: 34,
            level: "Intermediate",
            category: "React",
            question: "What is the purpose of React Suspense?",
            answer: "Suspense allows components to declaratively wait for something async to load (like dynamic code-splitting or data fetching) before rendering, showing a fallback loader UI in the interim.",
            skills: ["Async Loading", "Code-Splitting"]
        },
        {
            id: 35,
            level: "Advanced",
            category: "React",
            question: "How does React 18 Concurrent Mode work at a high level?",
            answer: "Concurrent Mode changes React rendering from an uninterrupted sequential flow to interruptible multitasking. It allows React to pause long, heavy calculations to process immediate user events like typing.",
            skills: ["Concurrent Rendering", "React 18 Architecture"]
        },
        {
            id: 36,
            level: "Intermediate",
            category: "Tailwind CSS",
            question: "What are the core benefits of utility-first CSS frameworks like Tailwind?",
            answer: "Tailwind eliminates the need to continuously invent custom CSS class names, keeps style definitions scoped directly inside markup files, and keeps build file sizes small via dead-utility purging.",
            skills: ["CSS Frameworks", "Tailwind CSS"]
        },
        {
            id: 37,
            level: "Advanced",
            category: "Micro-Frontends",
            question: "What is Module Federation in Micro-frontend design?",
            answer: "Module Federation is a Webpack/Vite runtime feature that allows a standalone frontend application to dynamically load compiled JavaScript code components from another distinct build at runtime.",
            skills: ["Micro-frontends", "Module Federation", "Scale"]
        },
        {
            id: 38,
            level: "Intermediate",
            category: "React",
            question: "What are Error Boundaries in React?",
            answer: "Error Boundaries are React components that catch JavaScript runtime errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.",
            skills: ["Error Handling", "App Resilience"]
        },
        {
            id: 39,
            level: "Intermediate",
            category: "Form Handling",
            question: "Why use libraries like React Hook Form instead of simple tracking states?",
            answer: "React Hook Form leverages uncontrolled inputs via refs, avoiding widespread re-renders of the entire form whenever a user types a single character, heavily optimizing performance.",
            skills: ["Form Optimization", "React Validation"]
        },
        {
            id: 40,
            level: "Advanced",
            category: "Next.js",
            question: "What are Server Actions in modern Next.js?",
            answer: "Server Actions allow frontend client components to directly call asynchronous JavaScript functions that execute directly on the server, eliminating the need to write an intermediary REST API route endpoint.",
            skills: ["Next.js", "Server Actions", "Full-Stack Convergence"]
        },

        // === BACKEND RUNTIMES & FRAMEWORKS (41-60) ===
        {
            id: 41,
            level: "Intermediate",
            category: "Node.js",
            question: "Is Node.js single-threaded or multi-threaded?",
            answer: "Node.js executes JavaScript code on a single thread via the V8 engine loop. However, its underlying C++ engine (libuv) runs a multi-threaded pool to process background I/O operations asynchronously.",
            skills: ["Node.js Core", "Event Loop Mechanics"]
        },
        {
            id: 42,
            level: "Intermediate",
            category: "Node.js",
            question: "What is Express.js Middleware?",
            answer: "Middleware functions are blocks executed sequentially during the request-response lifecycle. They can access, read, or manipulate incoming requests and outgoing responses before routing ends.",
            skills: ["Express.js", "Backend Control Flow"]
        },
        {
            id: 43,
            level: "Intermediate",
            category: "Node.js",
            question: "What is the purpose of the package-lock.json file?",
            answer: "It locks down the exact exact versions of nested deep dependencies installed for a project, ensuring deterministic builds across environments.",
            skills: ["Npm", "Dependency Management"]
        },
        {
            id: 44,
            level: "Advanced",
            category: "Node.js",
            question: "What are Streams in Node.js and why are they used?",
            answer: "Streams allow reading and writing data chunk-by-chunk in pipes without loading the full file payload into the system RAM, making it optimal for heavy file downloads.",
            skills: ["Buffer Control", "Memory Management"]
        },
        {
            id: 45,
            level: "Advanced",
            category: "Node.js",
            question: "Explain the purpose of Worker Threads in Node.js.",
            answer: "Worker Threads allow parallel execution of heavy CPU-bound tasks on separate OS threads, keeping the main thread free to handle light incoming HTTP network traffic.",
            skills: ["Multi-threading", "CPU Optimization"]
        },
        {
            id: 46,
            level: "Intermediate",
            category: "API Design",
            question: "What is a RESTful API?",
            answer: "An architectural pattern using HTTP methods (GET, POST, PUT, DELETE) and stateless client-server resource structures to exchange data over standardized URLs.",
            skills: ["REST Architecture", "HTTP Protocols"]
        },
        {
            id: 47,
            level: "Intermediate",
            category: "API Design",
            question: "What is GraphQL and how does it prevent over-fetching?",
            answer: "GraphQL is a query language for APIs where clients define the exact structural shape of the data payload they want, preventing the redundant field data transfers typical of REST.",
            skills: ["GraphQL", "Data Optimization"]
        },
        {
            id: 48,
            level: "Advanced",
            category: "API Design",
            question: "What is the difference between WebSockets and long-polling REST?",
            answer: "Long-polling makes repeated HTTP request loops to simulate updates. WebSockets open a single persistent, full-duplex TCP communication line between client and server for real-time pushed streams.",
            skills: ["WebSockets", "Real-Time Architecture"]
        },
        {
            id: 49,
            level: "Intermediate",
            category: "Backend Patterns",
            question: "What is MVC architecture?",
            answer: "MVC splits backend layers into Model (data and validation laws), View (UI layout formats), and Controller (orchestrating business logistics between Model and View).",
            skills: ["Design Patterns", "Software Architecture"]
        },
        {
            id: 50,
            level: "Intermediate",
            category: "TypeScript",
            question: "What are the main advantages of TypeScript in a Full-Stack codebase?",
            answer: "TypeScript provides static type-checking, enabling compile-time error detection, safe IDE code refactoring, and single-source type sharing across frontend and backend models.",
            skills: ["TypeScript", "Type Safety"]
        },
        {
            id: 51,
            level: "Advanced",
            category: "TypeScript",
            question: "Difference between Type and Interface in TypeScript?",
            answer: "Interfaces support declaration merging and are generally optimized for objects. Types are more versatile and allow creating structural unions, intersections, and primitive type mapping.",
            skills: ["Advanced TypeScript", "Type Design"]
        },
        {
            id: 52,
            level: "Advanced",
            category: "TypeScript",
            question: "What are Generics in TypeScript?",
            answer: "Generics act as type placeholders, allowing developer abstractions to build flexible, highly reusable functions or classes that safely adapt to different data shapes.",
            skills: ["Generics", "Reusability"]
        },
        {
            id: 53,
            level: "Intermediate",
            category: "Authentication",
            question: "What is a JSON Web Token (JWT) composed of?",
            answer: "A JWT is a string divided into three base64url parts separated by dots: the Header (signing algorithm metadata), the Payload (user claims data), and the Verification Signature.",
            skills: ["JWT Authentication", "Tokens"]
        },
        {
            id: 54,
            level: "Advanced",
            category: "Authentication",
            question: "What is OAuth 2.0 authorization framework?",
            answer: "OAuth 2.0 is a security delegation standard allowing applications to request granular access permissions to third-party services on behalf of a user without handling raw passwords.",
            skills: ["OAuth 2.0", "Third-party Auth"]
        },
        {
            id: 55,
            level: "Intermediate",
            category: "Node.js",
            question: "What is the difference between 'process.nextTick' and 'setImmediate'?",
            answer: "'process.nextTick' runs its callbacks immediately after the current operation finishes, ahead of any loop phase ticks. 'setImmediate' runs during the check phase of the event loop.",
            skills: ["Event Loop Phases", "Node Internals"]
        },
        {
            id: 56,
            level: "Intermediate",
            category: "Backend Utilities",
            question: "What is the Event Emitter pattern in Node?",
            answer: "A fundamental Node pattern where an object binds listener callback functions to named events, executing them whenever the specific event key is dispatched.",
            skills: ["Event-driven Code", "Node Core"]
        },
        {
            id: 57,
            level: "Advanced",
            category: "API Design",
            question: "What are gRPC and Protocol Buffers?",
            answer: "gRPC is a high-performance RPC framework by Google. It leverages HTTP/2 transport and Protocol Buffers binary serialization instead of JSON, accelerating microservice communications.",
            skills: ["gRPC", "Protobuf", "Microservices"]
        },
        {
            id: 58,
            level: "Intermediate",
            category: "Error Handling",
            question: "How should unhandled rejections be caught in Node?",
            answer: "By listening to the 'unhandledRejection' event hook on the global Node process object, which catches any forgotten asynchronous Promise rejections across the codebase.",
            skills: ["Process Diagnostics", "Error Catching"]
        },
        {
            id: 59,
            level: "Intermediate",
            category: "Database Layers",
            question: "What is an ORM/ODM and name common examples?",
            answer: "An ORM/ODM maps object-oriented code to database entities. Common examples are Prisma or Sequelize for SQL databases, and Mongoose for MongoDB.",
            skills: ["Prisma", "Mongoose", "Data Modeling"]
        },
        {
            id: 60,
            level: "Advanced",
            category: "Node.js",
            question: "Explain Cluster module scaling in Node.js.",
            answer: "The Cluster module forks the single Node process into multiple instances that map cleanly across individual CPU cores, allowing them to balance incoming traffic under a single shared port.",
            skills: ["Process Clustering", "Horizontal Core Scaling"]
        },

        // === DATABASES & STORAGE SYSTEMS (61-80) ===
        {
            id: 61,
            level: "Intermediate",
            category: "Databases",
            question: "What is the difference between SQL and NoSQL?",
            answer: "SQL databases are relational, table-based, require strict schemas, and optimize vertical scaling. NoSQL databases are non-relational, document/key-value based, have dynamic schemas, and scale horizontally.",
            skills: ["SQL Architecture", "NoSQL Documents"]
        },
        {
            id: 62,
            level: "Advanced",
            category: "Databases",
            question: "Explain ACID properties in relational databases.",
            answer: "ACID represents Atomicity (all changes complete or rollback), Consistency (data state laws are preserved), Isolation (transactions don't conflict), and Durability (saved permanently).",
            skills: ["Transactions", "Data Integrity"]
        },
        {
            id: 63,
            level: "Advanced",
            category: "Databases",
            question: "What is the CAP Theorem?",
            answer: "CAP theorem states a distributed data system can simultaneously guarantee only two out of three characteristics: Consistency, Availability, and Partition Tolerance.",
            skills: ["Distributed Theory", "System Constraints"]
        },
        {
            id: 64,
            level: "Intermediate",
            category: "Databases",
            question: "What are Database Indexes and what is their trade-off?",
            answer: "Indexes are lookup tables that heavily accelerate data retrieval (SELECT queries) but slow down write operations (INSERT, UPDATE) because the index tree must rewrite.",
            skills: ["Query Optimization", "B-Tree Indexes"]
        },
        {
            id: 65,
            level: "Advanced",
            category: "Databases",
            question: "What is Database Sharding?",
            answer: "Sharding is a horizontal scaling technique that splits a single large database table across separate physical database instances based on a shard key.",
            skills: ["Horizontal Scaling", "Data Distribution"]
        },
        {
            id: 66,
            level: "Intermediate",
            category: "Databases",
            question: "What is the difference between Inner Join and Left Join in SQL?",
            answer: "Inner Join returns records that have matching values in both tables. Left Join returns all records from the left table, plus matching records from the right table, filling nulls if missing.",
            skills: ["SQL Queries", "Relational Joins"]
        },
        {
            id: 67,
            level: "Advanced",
            category: "Databases",
            question: "What is Database Normalization and why do we use it?",
            answer: "Normalization is structuring table layouts to eliminate redundant duplicated fields and safeguard against data update anomalies, typically up to Third Normal Form (3NF).",
            skills: ["Schema Design", "Normalization"]
        },
        {
            id: 68,
            level: "Intermediate",
            category: "Databases",
            question: "What is N+1 query problem and how do you solve it?",
            answer: "The N+1 problem occurs when an application executes one primary query and then triggers 'N' subsequent queries to fetch relational data. Solved via Eager Loading or Joins.",
            skills: ["Performance Fixes", "Eager Loading"]
        },
        {
            id: 69,
            level: "Intermediate",
            category: "Caching",
            question: "What is Redis and how is it used in a Full-Stack system?",
            answer: "Redis is an in-memory, key-value data store. It is primarily used as an ultra-fast caching layer to store session tokens or expensive database data, lowering system response latency.",
            skills: ["Redis", "Memory Caching"]
        },
        {
            id: 70,
            level: "Advanced",
            category: "Caching",
            question: "Explain Cache Invalidation and Cache Aside pattern.",
            answer: "Cache Invalidation is clearing stale data when changes occur. Under Cache Aside, the application checks the cache first; if a miss occurs, it queries the database and populates the cache back.",
            skills: ["Caching Patterns", "Data Expirations"]
        },
        {
            id: 71,
            level: "Intermediate",
            category: "Databases",
            question: "What is an aggregation pipeline in MongoDB?",
            answer: "An aggregation pipeline is a framework for data processing inside MongoDB. It routes documents through multi-stage arrays (e.g., $match, $group) to transform and calculate results.",
            skills: ["NoSQL Operations", "MongoDB Aggregations"]
        },
        {
            id: 72,
            level: "Advanced",
            category: "Databases",
            question: "What are database transactions and deadlocks?",
            answer: "A transaction bundles operations into an all-or-nothing block. A deadlock occurs when two transactions hold locks the other needs, blocking each other indefinitely.",
            skills: ["Concurrency Control", "SQL Safety"]
        },
        {
            id: 73,
            level: "Intermediate",
            category: "Databases",
            question: "What is the purpose of a database migration?",
            answer: "Migrations are version-controlled tracking scripts that safely introduce incremental updates to database schema structures over time across distinct environments.",
            skills: ["DevOps Data", "Schema Versioning"]
        },
        {
            id: 74,
            level: "Advanced",
            category: "Databases",
            question: "What is Replication (Master-Slave) architecture?",
            answer: "A setup where all data writes route to a primary Master database, which pushes changes to replica Slave databases. Slaves handle all read operations, boosting read capacities.",
            skills: ["High Availability", "Data Replication"]
        },
        {
            id: 75,
            level: "Intermediate",
            category: "Databases",
            question: "What is the difference between embedded documents and references in MongoDB?",
            answer: "Embedded documents store sub-data nested inside a single document for atomic performance. References store distinct document IDs, linking data like a traditional relational join.",
            skills: ["NoSQL Modeling", "Document Design"]
        },
        {
            id: 76,
            level: "Advanced",
            category: "Databases",
            question: "What is Connection Pooling?",
            answer: "Connection pooling maintains a cache of open database connections. Instead of opening a new connection for every HTTP request, connections are recycled, avoiding handshake overhead.",
            skills: ["Resource Management", "Performance Optimization"]
        },
        {
            id: 77,
            level: "Intermediate",
            category: "Databases",
            question: "What are optimistic and pessimistic locking?",
            answer: "Optimistic locking assumes conflicts are rare and verifies data versions before saving. Pessimistic locking aggressively locks rows during reads, forcing others to wait.",
            skills: ["Data Isolation", "Concurrency"]
        },
        {
            id: 78,
            level: "Advanced",
            category: "Databases",
            question: "What is a Time-Series database?",
            answer: "A database explicitly optimized to handle timestamped measurements, logs, or metrics over real-world timelines (e.g., InfluxDB, Prometheus).",
            skills: ["Metrics Storage", "Analytics Infrastructure"]
        },
        {
            id: 79,
            level: "Intermediate",
            category: "Databases",
            question: "What is the purpose of a Upsert operation?",
            answer: "An atomic operation that updates a target record if it already exists in the database table, or inserts a brand new record if no match is found.",
            skills: ["SQL Writing", "Data Mutations"]
        },
        {
            id: 80,
            level: "Advanced",
            category: "Databases",
            question: "What is Vector Search in modern databases?",
            answer: "Vector search indexes data as multi-dimensional mathematical coordinates. It enables semantic AI calculations to find text, images, or files based on contextual similarity rather than exact keyword matches.",
            skills: ["Vector Embeddings", "AI Integrations"]
        },

        // === DEVOPS, INFRASTRUCTURE & ARCHITECTURE (81-105) ===
        {
            id: 81,
            level: "Intermediate",
            category: "DevOps",
            question: "What is Docker and how does it help developers?",
            answer: "Docker containerizes applications along with their full OS environments, dependencies, and settings. It guarantees code runs identically across local development, staging, and production servers.",
            skills: ["Docker", "Containerization"]
        },
        {
            id: 82,
            level: "Advanced",
            category: "DevOps",
            question: "What is Kubernetes (K8s)?",
            answer: "Kubernetes is an open-source container orchestration engine that automates the deployment, scaling, healing, and network routing of container pools.",
            skills: ["Kubernetes", "Orchestrating Scale"]
        },
        {
            id: 83,
            level: "Intermediate",
            category: "CI/CD",
            question: "What is the goal of a CI/CD pipeline?",
            answer: "Continuous Integration automates testing and merging code when developers push changes. Continuous Deployment automates deploying those verified builds directly to production.",
            skills: ["GitHub Actions", "Automation"]
        },
        {
            id: 84,
            level: "Advanced",
            category: "Architecture",
            question: "What is the difference between Monolithic and Microservices architecture?",
            answer: "Monolith compiles the entire application stack into a single unified deployment unit. Microservices break components into decoupled, self-contained services that communicate via lightweight APIs.",
            skills: ["System Design", "Microservices"]
        },
        {
            id: 85,
            level: "Advanced",
            category: "Infrastructure",
            question: "What is a Load Balancer?",
            answer: "A reverse proxy infrastructure layer that distributes incoming public network requests across a pool of backend application servers to protect against overloads.",
            skills: ["Traffic Routing", "Scalability"]
        },
        {
            id: 86,
            level: "Intermediate",
            category: "Security",
            question: "What is Cross-Origin Resource Sharing (CORS)?",
            answer: "CORS is a browser security mechanism using HTTP headers that blocks web apps running under one origin domain from querying resources hosted on a different server origin unless explicitly permitted.",
            skills: ["CORS Configuration", "Web Security"]
        },
        {
            id: 87,
            level: "Advanced",
            category: "Security",
            question: "What is Cross-Site Scripting (XSS) and how do you block it?",
            answer: "XSS occurs when attackers inject malicious script strings that run inside other users' browsers. Blocked via strict input sanitization, context escaping, and configuring Content Security Policies (CSP).",
            skills: ["XSS Mitigation", "Frontend Security"]
        },
        {
            id: 88,
            level: "Advanced",
            category: "Security",
            question: "What is Cross-Site Request Forgery (CSRF)?",
            answer: "CSRF tricks an authenticated browser session into sending malicious state-changing commands to a backend. Prevented via anti-CSRF tokens and setting cookies to SameSite=Strict.",
            skills: ["CSRF Mitigation", "Cookie Protection"]
        },
        {
            id: 89,
            level: "Advanced",
            category: "Security",
            question: "What is SQL Injection (SQLi) and how do you prevent it?",
            answer: "SQLi occurs when unchecked user inputs alter database queries to leak data. It is prevented by using parameterized queries or prepared statements via modern ORMs.",
            skills: ["SQLi Prevention", "Database Security"]
        },
        {
            id: 90,
            level: "Intermediate",
            category: "Security",
            question: "Why should you never store plain passwords, and what is Salting?",
            answer: "Plain passwords compromise security if the database leaks. Salting adds unique, random cryptographic strings to the password before running hashing functions like bcrypt to block lookup exploits.",
            skills: ["Bcrypt", "Password Hashing"]
        },
        {
            id: 91,
            level: "Advanced",
            category: "Architecture",
            question: "What is the Circuit Breaker pattern in microservices?",
            answer: "A fault-tolerance pattern that monitors calls to external services. If failures spike, the circuit trips open, immediately returning fallbacks without wasting system resources on broken networks.",
            skills: ["Resilience Patterns", "Fault Tolerance"]
        },
        {
            id: 92,
            level: "Intermediate",
            category: "DevOps",
            question: "What is Infrastructure as Code (IaC)?",
            answer: "IaC is managing and provisioning server infrastructures (networks, VMs, balancers) using configuration files instead of manual console adjustments (e.g., Terraform).",
            skills: ["Terraform", "Infrastructure Config"]
        },
        {
            id: 93,
            level: "Intermediate",
            category: "Networking",
            question: "What is the difference between DNS and IP addresses?",
            answer: "An IP address is a numerical identifier for a server node on the network. DNS (Domain Name System) maps human-readable domain text names directly to those IP coordinates.",
            skills: ["DNS Routing", "Networking Basics"]
        },
        {
            id: 94,
            level: "Advanced",
            category: "Performance",
            question: "What is a Content Delivery Network (CDN)?",
            answer: "A CDN is a distributed network of global edge proxy servers that cache static resources close to users' physical geographic locations to lower page response times.",
            skills: ["CDNs", "Caching Infrastructure"]
        },
        {
            id: 95,
            level: "Intermediate",
            category: "Security",
            question: "What is the difference between Authentication and Authorization?",
            answer: "Authentication verifies *who* a user is (e.g., login credentials). Authorization verifies *what privileges* that authenticated user has access to perform.",
            skills: ["RBAC", "Access Security"]
        },
        {
            id: 96,
            level: "Advanced",
            category: "Architecture",
            question: "What is horizontal vs vertical scaling?",
            answer: "Vertical scaling increases compute power (more RAM/CPU) on a single machine. Horizontal scaling adds completely new independent server nodes into a balanced resource pool.",
            skills: ["Scalability Design", "System Architecture"]
        },
        {
            id: 97,
            level: "Intermediate",
            category: "Git",
            question: "What is the difference between git merge and git rebase?",
            answer: "'git merge' joins separate branch branches by adding a standalone merge commit block. 'git rebase' unwinds and moves commits to apply cleanly on top of the master branch, rewriting history linearly.",
            skills: ["Version Control", "Git Flow"]
        },
        {
            id: 98,
            level: "Advanced",
            category: "Architecture",
            question: "Explain the CQRS structural pattern.",
            answer: "Command Query Responsibility Segregation explicitly separates mutation paths (Commands like Writes) from read data query operations to maximize application scale efficiency.",
            skills: ["CQRS", "Enterprise Architecture"]
        },
        {
            id: 99,
            level: "Advanced",
            category: "Security",
            question: "Where should you securely store JWT tokens on the client?",
            answer: "To mitigate XSS thefts, tokens should ideally be stored inside httpOnly, Secure cookies with SameSite=Strict properties, keeping them inaccessible to malicious browser JavaScript scripts.",
            skills: ["Web Security", "Token Storage"]
        },
        {
            id: 100,
            level: "Advanced",
            category: "Architecture",
            question: "What is Event-Driven Architecture?",
            answer: "An asynchronous design style where decoupled software components communicate by producing, emitting, and consuming immutable messages called events via event brokers like Kafka.",
            skills: ["Kafka", "RabbitMQ", "Event Streaming"]
        },
        {
            id: 101,
            level: "Intermediate",
            category: "API Design",
            question: "What is API Rate Limiting and how can it be implemented?",
            answer: "Rate limiting restricts the volume of requests a client can submit in a given timeframe to prevent abuse. It can be implemented using Redis to count request tracking tokens per IP.",
            skills: ["Rate Limiting", "System Defense"]
        },
        {
            id: 102,
            level: "Advanced",
            category: "DevOps",
            question: "What is a Reverse Proxy?",
            answer: "A reverse proxy is an edge server positioned in front of internal microservices. It manages incoming traffic tasks like SSL termination, unified routing, and security filtering (e.g., Nginx).",
            skills: ["Nginx", "Infrastructure Routing"]
        },
        {
            id: 103,
            level: "Intermediate",
            category: "DevOps",
            question: "What is Serverless computing (FaaS)?",
            answer: "Serverless lets developers write stateless functional code blocks that execute purely on-demand triggered by events, where cloud vendors manage all operating container lifecycles (e.g., AWS Lambda).",
            skills: ["AWS Lambda", "Serverless Architecture"]
        },
        {
            id: 104,
            level: "Advanced",
            category: "Architecture",
            question: "What is Blue-Green deployment strategy?",
            answer: "A zero-downtime deployment pattern utilizing two identical environments. Blue runs live production code while Green tests the new update build. Traffic switches instantaneously to Green once verified.",
            skills: ["Zero-downtime Deployments", "Release Management"]
        },
        {
            id: 105,
            level: "Advanced",
            category: "Architecture",
            question: "What is Event Sourcing?",
            answer: "An architecture design where changes to application state are captured as an immutable sequence of historical events in an append-only log, rather than just overwriting tables with current values.",
            skills: ["Event Logs", "Data Patterns"]
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

            <FrontendInterviewHeadder
                title="Full Stack"
                questions={questions} />

            {/* Questions */}
            <InterviewQuestion
                questions={questions}
                badgeColor={badgeColor}
                title="Full Stack"
            />
        </div>
    );
};

export default FullStackInterviewPage;