import FrontendInterviewHeadder from '@/components/InterviewComponent/FrontendInterviewHeadder';
import InterviewQuestion from '@/components/InterviewComponent/InterviewQuestion';
import React from 'react';

const DevOpsInterviewQuestions = () => {

    const questions = [
        {
            "id": 1,
            "subject": "DevOps Interview (Core Concepts)",
            "level": "Beginner",
            "question": "What is the primary goal of DevOps methodology?",
            "options": [
                "To completely eliminate the need for software developers.",
                "To bridge the gap between development and operations teams for faster, more reliable software delivery.",
                "To focus exclusively on reducing the cost of cloud infrastructure hardware.",
                "To write complex documentation for legacy monolithic applications."
            ],
            "answer": "To bridge the gap between development and operations teams for faster, more reliable software delivery.",
            "explanation": "DevOps-er pradhan uddeshyo holo Development (Dev) ebong Operations (Ops) doler moddhe shomonnoy ba collaboration briddhi kora, jate druto ebong nirapodbhabe software deploy kora jay."
        },
        {
            "id": 2,
            "subject": "DevOps Interview (Infrastructure as Code)",
            "level": "Beginner",
            "question": "What does 'Infrastructure as Code' (IaC) mean?",
            "options": [
                "Writing manual instructions for system administrators to build servers.",
                "Managing and provisioning computing infrastructure through machine-readable definition files rather than manual configuration.",
                "Coding web applications using HTML and CSS directly on bare-metal hardware.",
                "Restricting developers from accessing production network environments."
            ],
            "answer": "Managing and provisioning computing infrastructure through machine-readable definition files rather than manual configuration.",
            "explanation": "Infrastructure as Code (IaC) holo manual configuration chara, software code ba definition file-er madhome server, network, ebong storage shwongkriyobhabe (automatically) toiri o manage korar prokriya."
        },
        {
            "id": 3,
            "subject": "DevOps Interview (CI/CD Pipeline)",
            "level": "Beginner",
            "question": "What is the fundamental difference between Continuous Delivery and Continuous Deployment?",
            "options": [
                "Continuous Delivery requires manual approval to deploy to production, while Continuous Deployment automates the entire release process.",
                "Continuous Delivery is only for frontend apps, whereas Continuous Deployment is for databases.",
                "Continuous Deployment requires compiling code manually on local developer machines.",
                "There is no difference; both terms mean exactly the same thing."
            ],
            "answer": "Continuous Delivery requires manual approval to deploy to production, while Continuous Deployment automates the entire release process.",
            "explanation": "Continuous Delivery-te code ready thake kintu production-e deploy korar jonno manual approval ba manusher shommiti lage. R Continuous Deployment-te shob automated test pass korle code shwongkriyobhabe production-e chole jay."
        },
        {
            "id": 4,
            "subject": "DevOps Interview (Source Code Management)",
            "level": "Beginner",
            "question": "What is the purpose of the '.gitignore' file in a Git repository?",
            "options": [
                "To delete files automatically from the local hard drive after a commit.",
                "To list untracked files and patterns that Git should intentionally ignore and not track.",
                "To encrypt sensitive source code files before pushing to GitHub.",
                "To force Git to track binary media files like video and audio instead of code."
            ],
            "answer": "To list untracked files and patterns that Git should intentionally ignore and not track.",
            "explanation": ".gitignore file-er kaaj holo emon kisu file ba folder (jemon proxy config, node_modules, log file) chihniro kora ja Git track korbe na ebong repository-te push hobe na."
        },
        {
            "id": 5,
            "subject": "DevOps Interview (Source Code Management)",
            "level": "Beginner",
            "question": "Which Git command is used to save temporary changes without committing them?",
            "options": [
                "git commit --amend",
                "git stash",
                "git checkout -b",
                "git reset --hard"
            ],
            "answer": "git stash",
            "explanation": "git stash command-ti diye working directory-r current shob changes temporary bhabe ekta nrapod jaygay rakha jay, jate commit na korei onno branch-e kaaj kora jay."
        },
        {
            "id": 6,
            "subject": "DevOps Interview (Containers)",
            "level": "Beginner",
            "question": "What is a major architectural difference between virtual machines (VMs) and containers?",
            "options": [
                "VMs share the host OS kernel, while containers include a complete guest operating system.",
                "VMs include a full guest operating system running on a hypervisor, while containers share the host operating system kernel.",
                "Containers can only run on Windows, while VMs only run on Linux systems.",
                "VMs do not use physical hardware RAM or CPU allocation."
            ],
            "answer": "VMs include a full guest operating system running on a hypervisor, while containers share the host operating system kernel.",
            "explanation": "Virtual Machine (VM) chalanor jonno protiti machine-e alada complete Guest OS thake. Kintu Container chalanor jonno kono alada Guest OS lage na, eti host machine-er OS kernel share kore chole, tai eti khub lightweight."
        },
        {
            "id": 7,
            "subject": "DevOps Interview (Containers)",
            "level": "Beginner",
            "question": "In a Dockerfile, what is the main difference between the RUN and CMD instructions?",
            "options": [
                "RUN is executed during the image building phase, while CMD specifies the default command to run when the container starts.",
                "RUN runs when the container is stopped, and CMD runs when the image is deleted.",
                "RUN is used exclusively for Windows containers, and CMD is only for Linux containers.",
                "There is no difference; they can be used interchangeably at any stage."
            ],
            "answer": "RUN is executed during the image building phase, while CMD specifies the default command to run when the container starts.",
            "explanation": "Dockerfile-e RUN instruction-ti image toiri (build) korar shomoy dependency install korte babohar হয়। R CMD instruction-ti container jokhon prothom start hobe, tokhon default-e kon command cholbe ta nirdesh kore."
        },
        {
            "id": 8,
            "subject": "DevOps Interview (Containers)",
            "level": "Beginner",
            "question": "What is the relationship between a Docker image and a Docker container?",
            "options": [
                "A container is a blueprint, and an image is the active runtime running instance.",
                "An image is a read-only blueprint/template, and a container is a live, executable runtime instance of that image.",
                "An image is a network protocol, and a container is a storage disk drive.",
                "They are totally unrelated tools managed by different software companies."
            ],
            "answer": "An image is a read-only blueprint/template, and a container is a live, executable runtime instance of that image.",
            "explanation": "Docker image holo ekta read-only static blueprint ba template. R Docker container holo shei template/image theke toiri kora ekta shashol, choloman execution runtime instance."
        },
        {
            "id": 9,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Beginner",
            "question": "Which Linux command is used to display real-time system performance resource statistics like CPU and memory usage?",
            "options": [
                "ls -la",
                "top",
                "df -h",
                "cat /etc/passwd"
            ],
            "answer": "top",
            "explanation": "Linux-e `top` (ba htop) command-ti diye real-time-e CPU, memory usage, ebong kon kon process choltose tar ekta dynamic live dashboard dekha jay."
        },
        {
            "id": 10,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Beginner",
            "question": "If a Linux file has permissions set to '755', what access rights does it grant?",
            "options": [
                "Full access to everyone in the network including anonymous users.",
                "Read, write, and execute for the owner; read and execute for the group and others.",
                "No access to anyone except the root administrator system account.",
                "Read and write for the group, but write-only for the primary file owner."
            ],
            "answer": "Read, write, and execute for the owner; read and execute for the group and others.",
            "explanation": "755 permission-er ortho holo: Owner pabe Full access (7 = Read+Write+Execute), Group pabe (5 = Read+Execute), ebong Others/baki shobai pabe (5 = Read+Execute)."
        },
        {
            "id": 11,
            "subject": "DevOps Interview (Security)",
            "level": "Beginner",
            "question": "How does SSH public key authentication securely log a user into a server?",
            "options": [
                "The server sends its private key over the internet to the client browser dynamically.",
                "The client keeps the private key secure and shares the public key with the server to verify digital signatures.",
                "Both client and server use the same clear-text text string password over an unencrypted port.",
                "The server requests the client's credit score history before allowing connection rules."
            ],
            "answer": "The client keeps the private key secure and shares the public key with the server to verify digital signatures.",
            "explanation": "SSH public key authentication-e user tar Private Key nijosho machine-e gopone rakhe ebong Public Key-ti server-e save kore rakhe. Server sign match kore user-ke password charai safe access dey."
        },
        {
            "id": 12,
            "subject": "DevOps Interview (Networking)",
            "level": "Beginner",
            "question": "What is the purpose of an 'A record' in a DNS configuration?",
            "options": [
                "To map an email domain service explicitly to an incoming mail exchange server.",
                "To map a human-readable domain name directly to an IPv4 address.",
                "To route internal database connections via safe hardware tokens.",
                "To create an alternate alias name for an existing canonical name."
            ],
            "answer": "To map a human-readable domain name directly to an IPv4 address.",
            "explanation": "DNS configuration-e 'A Record' babohar kora hoy ekta domain name-ke (jemon: google.com) tar nirdishto numeric IPv4 address-e point ba map korar jonno."
        },
        {
            "id": 13,
            "subject": "DevOps Interview (Networking)",
            "level": "Beginner",
            "question": "What security addition does HTTPS offer compared to standard HTTP protocol?",
            "options": [
                "HTTPS blocks all incoming user connection requests by default.",
                "HTTPS encrypts the communication data channel using SSL/TLS protocols to prevent sniffing.",
                "HTTPS allows servers to serve files much faster without any network latency.",
                "HTTPS automatically fixes syntax errors present within application source code."
            ],
            "answer": "HTTPS encrypts the communication data channel using SSL/TLS protocols to prevent sniffing.",
            "explanation": "HTTP-r cheye HTTPS (Hypertext Transfer Protocol Secure) nrapod karon eti SSL/TLS layer-er maddhome client ebong server-er moddher shob data fully encrypt kore pathay."
        },
        {
            "id": 14,
            "subject": "DevOps Interview (Networking)",
            "level": "Beginner",
            "question": "What does an HTTP 502 status code represent?",
            "options": [
                "The client request was successful and data is sent.",
                "Bad Gateway - One server on the internet received an invalid response from another gateway server.",
                "Unauthorized access attempt due to missing token logins.",
                "The requested page/resource was not found on the active hosting environment."
            ],
            "answer": "Bad Gateway - One server on the internet received an invalid response from another gateway server.",
            "explanation": "HTTP 502 status code-er ortho holo 'Bad Gateway'. Er mane proxy ba edge server-ti shothik response payni primary backend application server theke."
        },
        {
            "id": 15,
            "subject": "DevOps Interview (Networking)",
            "level": "Beginner",
            "question": "What is the primary function of a reverse proxy server like Nginx?",
            "options": [
                "To protect a client browser's identity when accessing internal public sites.",
                "To accept internet requests on behalf of backend servers, handling load distribution, security, and caching.",
                "To compress source files directly inside the developer's computer repository.",
                "To manage internal microservice database backups overnight automatically."
            ],
            "answer": "To accept internet requests on behalf of backend servers, handling load distribution, security, and caching.",
            "explanation": "Reverse Proxy (jemon Nginx) client theke asha request gulo backend server-er kase forward kore. Eti security, SSL termination, caching ebong load balancing-e shahajjo kore."
        },
        {
            "id": 16,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Beginner",
            "question": "What is a major financial advantage of using Cloud Infrastructure over traditional on-premise hardware?",
            "options": [
                "Cloud mandates massive fixed upfront capital expenditure (CapEx) long before deployment.",
                "Shifting from capital expenditure (CapEx) to variable operational expenditure (OpEx) pay-as-you-go pricing models.",
                "Cloud providers offer completely free unlimited computing hardware resources permanently.",
                "Eliminating the requirement of hiring software development teams altogether."
            ],
            "answer": "Shifting from capital expenditure (CapEx) to variable operational expenditure (OpEx) pay-as-you-go pricing models.",
            "explanation": "Cloud computing-e kono fixed upfront hardware kinar capital cost (CapEx) dorkar hoy na. Ekhane pay-as-you-go ba use onujayi variable cost (OpEx) model kaj kore."
        },
        {
            "id": 17,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Beginner",
            "question": "Which service model does AWS EC2 belong to?",
            "options": [
                "Software as a Service (SaaS)",
                "Infrastructure as a Service (IaaS)",
                "Platform as a Service (PaaS)",
                "Function as a Service (FaaS)"
            ],
            "answer": "Infrastructure as a Service (IaaS)",
            "explanation": "AWS EC2 (Elastic Compute Cloud) holo ekta IaaS (Infrastructure as a Service) karon ekhane user ke raw virtual machine, compute, memory o OS selection-er purnango control deya hoy."
        },
        {
            "id": 18,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Beginner",
            "question": "What is the primary role of an AWS Security Group?",
            "options": [
                "To encrypt data items placed inside storage buckets automatically.",
                "To act as a virtual firewall controlling inbound and outbound traffic for EC2 instances.",
                "To manage monthly corporate billing quotas across different company departments.",
                "To inspect human developer physical authorization badging at server facilities."
            ],
            "answer": "To act as a virtual firewall controlling inbound and outbound traffic for EC2 instances.",
            "explanation": "AWS Security Group holo ekta virtual firewall ja EC2 instance layer-e inbound ebong outbound layer-er traffic traffic block ba allow korar rules handle kore."
        },
        {
            "id": 19,
            "subject": "DevOps Interview (Configuration Management)",
            "level": "Beginner",
            "question": "Why is YAML heavily preferred in DevOps orchestration tools like Kubernetes or Ansible?",
            "options": [
                "Because it compiles into binary files much quicker than general code languages.",
                "Because it is highly human-readable and uses indentation to structure complex hierarchical configuration data configurations.",
                "Because it includes absolute built-in database querying syntax capabilities inside tags.",
                "Because it enforces strict access passwords into system file schemas directly."
            ],
            "answer": "Because it is highly human-readable and uses indentation to structure complex hierarchical configuration data configurations.",
            "explanation": "YAML (Yet Another Markup Language) khub shohoje manush porte pare. Eti indentation (spaces) babohar kore configuration data tree organize kore, ja tool configuration-er jonno best."
        },
        {
            "id": 20,
            "subject": "DevOps Interview (Configuration Management)",
            "level": "Beginner",
            "question": "How do you permanently set an environment variable for a specific user session in Linux?",
            "options": [
                "By adding the export command declaration into the user's `~/.bashrc` or `~/.bash_profile` file.",
                "By restarting the entire physical database server machine.",
                "By renaming the active directory path to a root format path name.",
                "By typing the raw variable expression into an HTML head component block."
            ],
            "answer": "By adding the export command declaration into the user's `~/.bashrc` or `~/.bash_profile` file.",
            "explanation": "Linux-e permanent variable shell session-e save rakhar jonno user-er home directory-r profile file-e (jemon `~/.bashrc`) `export VARIABLE_NAME=value` likhe rakhte hoy."
        },
        {
            "id": 21,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Beginner",
            "question": "What is the standard purpose of Cron jobs inside Linux systems?",
            "options": [
                "To debug syntax compilation mistakes inside web projects.",
                "To schedule and run background shell scripts or tasks automatically at fixed intervals, dates, or times.",
                "To compress system backup drives without allocating active memory blocks.",
                "To check for hardware cable connection status across data arrays."
            ],
            "answer": "To schedule and run background shell scripts or tasks automatically at fixed intervals, dates, or times.",
            "explanation": "Cron job-er maddhome Linux system-e nirdishto shomoy por por (jemon: protidin rat 12 tai database backup neya) background commands shwongkriyobhabe chalanor schedule kora jay."
        },
        {
            "id": 22,
            "subject": "DevOps Interview (Source Code Management)",
            "level": "Beginner",
            "question": "What is a common purpose of opening a Pull Request (PR) on GitHub?",
            "options": [
                "To download the entire production server logs onto a development system desktop.",
                "To notify team members about code changes proposed for review and merge into a target master/main branch.",
                "To delete an experimental branch completely from a central server repository.",
                "To change the billing subscription currency for the global enterprise workspace."
            ],
            "answer": "To notify team members about code changes proposed for review and merge into a target master/main branch.",
            "explanation": "Pull Request (PR) er kaj holo developed feature ba code changes toiri korar por senior ba team member-der code review abong main branch-e safe merge korar jonno amontron janano."
        },
        {
            "id": 23,
            "subject": "DevOps Interview (CI/CD Pipeline)",
            "level": "Beginner",
            "question": "What is an artifact in the context of a software build process?",
            "options": [
                "Old deprecated documentation files written by former developer teams.",
                "The compiled output, executable package, or zip file generated during the CI build stage ready for distribution or deployment.",
                "An unhandled critical error message thrown by a core database query.",
                "The raw unfinished design layouts uploaded into project mock channels."
            ],
            "answer": "The compiled output, executable package, or zip file generated during the CI build stage ready for distribution or deployment.",
            "explanation": "Software build phase-e (CI stage) shob test pass hole deploy-er jogyo je output/executable file toiri hoy (jar moddhe compiled code, zip, jar text file dynamic thake) take Artifact bole."
        },
        {
            "id": 24,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Beginner",
            "question": "What happens if you delete the source target file of a Symbolic Link (symlink) in Linux?",
            "options": [
                "The symlink remains intact and functional by copying original internal blocks.",
                "The symlink becomes broken ('dangling link') and will no longer resolve to any real file content.",
                "The operating system crashes and drops into single-user emergency restoration mode.",
                "The link automatically searches for alternative files with identical file sizes."
            ],
            "answer": "The becomes broken ('dangling link') and will no longer resolve to any real file content.",
            "explanation": "Symbolic Link ba symlink holo shorashori shortcut link. Mool target file-ti delete kore dile symlink-ti broken (dangling link) hoye pore ebong er bhitotorer kono data pay na."
        },
        {
            "id": 25,
            "subject": "DevOps Interview (Networking)",
            "level": "Beginner",
            "question": "What is the primary objective of deploying a software firewall rule?",
            "options": [
                "To force application compilation processes to speed up instantly.",
                "To monitor and filter incoming and outgoing network traffic based on an organization's previously established security policies.",
                "To allocate dynamic IP ranges to wireless remote endpoints on demand.",
                "To prevent software containers from consuming excessive RAM resources on local nodes."
            ],
            "answer": "To monitor and filter incoming and outgoing network traffic based on an organization's previously established security policies.",
            "explanation": "Firewall-er kaj holo nirdishto security policy follow kore internal networks ebong external unsecure internet traffic-er moddhe data packets filter o block kora."
        },
        {
            "id": 26,
            "subject": "DevOps Interview (Core Concepts)",
            "level": "Beginner",
            "question": "What is a defining characteristic of a Monolithic application architecture?",
            "options": [
                "The software components are broken down into hundreds of decoupled network service containers.",
                "All functional components, data logic, and frontend routines are unified into a single, tightly coupled codebase and deployment package.",
                "The backend executes purely on edge cloud serverless structures without server nodes.",
                "The database is separated into global sharded storage layers automatically."
            ],
            "answer": "All functional components, data logic, and frontend routines are unified into a single, tightly coupled codebase and deployment package.",
            "explanation": "Monolithic architecture-e shob functionality, code module ebong service ekti single tightly-coupled application block ba codebase-e embedded thake."
        },
        {
            "id": 27,
            "subject": "DevOps Interview (Source Code Management)",
            "level": "Beginner",
            "question": "Which Git command is used to initialize a brand new empty local repository?",
            "options": [
                "git commit -m",
                "git init",
                "git push origin main",
                "git remote add"
            ],
            "answer": "git init",
            "explanation": "`git init` command-er maddhome ekti empty local workspace ba current folder-ke active git repository-te convert kora hoy."
        },
        {
            "id": 28,
            "subject": "DevOps Interview (Networking)",
            "level": "Beginner",
            "question": "At which layer of the OSI model does an Application Load Balancer (ALB) primarily operate?",
            "options": [
                "Layer 3 (Network Layer)",
                "Layer 7 (Application Layer)",
                "Layer 4 (Transport Layer)",
                "Layer 2 (Data Link Layer)"
            ],
            "answer": "Layer 7 (Application Layer)",
            "explanation": "Application Load Balancer (ALB) kaaj kore OSI Model-er Layer 7 (Application Layer)-e, ja HTTP/HTTPS paths (jemon /api, /images) dekhe traffic direct korte pare."
        },
        {
            "id": 29,
            "subject": "DevOps Interview (Configuration Management)",
            "level": "Beginner",
            "question": "Which DevOps practice focuses on automating the installation, patching, and tuning of software on existing active servers?",
            "options": [
                "Static Application Security Code Testing (SAST)",
                "Configuration Management",
                "Continuous Integration Logging",
                "Chaos Engineering Auditing"
            ],
            "answer": "Configuration Management",
            "explanation": "Configuration Management (Ansible, Chef, Puppet) er main kaji holo live bare-metal ba cloud server-e software install, patch optimization o dynamic software states automated way-e maintain kora."
        },
        {
            "id": 30,
            "subject": "DevOps Interview (Networking)",
            "level": "Beginner",
            "question": "What is the primary role of a subnet mask inside a private network routing layout?",
            "options": [
                "To double the hardware data transit capability of optical fibre links.",
                "To distinguish which portion of an IP address refers to the network identity and which portion refers to the specific host device.",
                "To change the global encryption strength dynamically on incoming packets.",
                "To map public text domains to localized microservice systems."
            ],
            "answer": "To distinguish which portion of an IP address refers to the network identity and which portion refers to the specific host device.",
            "explanation": "Subnet Mask ekti IP Address-ke dui bhae bhag kore chihniro kore: kon ongsho-tuku main network block identification ar kon ongsho-tuku nirdishto user host device code."
        },
        {
            "id": 31,
            "subject": "DevOps Interview (CI/CD Pipeline)",
            "level": "Beginner",
            "question": "What is the primary goal of writing automated Unit Tests inside a CI pipeline?",
            "options": [
                "To secure internal network routers from distributed security threats.",
                "To validate that isolated small blocks or individual functions of code work correctly and catch regressions early.",
                "To build final production container packages within the cloud cluster ecosystem.",
                "To optimize database index querying latency constraints."
            ],
            "answer": "To validate that isolated small blocks or individual functions of code work correctly and catch regressions early.",
            "explanation": "Unit test ekti application-er choto single function checking automate kore, jate new push-e jodi purano purano system bhenge jay ba regression toiri hoy, ta build phase-ei dhora pore."
        },
        {
            "id": 32,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Beginner",
            "question": "What utility does the 'sudo' prefix grant to standard users in a Linux terminal environment?",
            "options": [
                "It deletes administrative users permanently from the server registry config.",
                "It permits permitted users to execute commands with administrative security privileges (typically as the root user).",
                "It encrypts the current directory structure layout with public system keys.",
                "It changes terminal visual display layouts to night mode settings."
            ],
            "answer": "It permits permitted users to execute commands with administrative security privileges (typically as the root user).",
            "explanation": "`sudo` (Superuser Do) normal system user-ke dynamic administrative power ba root user level commands executing access allow kore, jodi tar user permission entry file allow thake."
        },
        {
            "id": 33,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Beginner",
            "question": "What type of cloud storage category does Amazon S3 fall under?",
            "options": [
                "Block Storage system volume.",
                "Object Storage system service.",
                "Relational Database storage allocation.",
                "Local temporary scratchpad storage."
            ],
            "answer": "Object Storage system service.",
            "explanation": "Amazon S3 (Simple Storage Service) holo ekta pure Object Storage system, jekhane unstructured large images, static documents flat key-value metadata store file system-e save thake."
        },
        {
            "id": 34,
            "subject": "DevOps Interview (Monitoring & Logging)",
            "level": "Beginner",
            "question": "Which metric should be closely monitored to detect memory leaks within a microservice container?",
            "options": [
                "Network packet transmission loss frequency.",
                "Continuous gradual increase in RAM consumption over prolonged periods without returning to a baseline state.",
                "Total hard disk input/output write speeds during overnight script schedules.",
                "Changes in developer source code commit line frequencies."
            ],
            "answer": "Continuous gradual increase in RAM consumption over prolonged periods without returning to a baseline state.",
            "explanation": "Memory leak dhorar poddhotii holo jodi kono container continuous base-e RAM hold kortei thake ebong kaj shesh holeo drop na kore, ta chihniro kora."
        },
        {
            "id": 35,
            "subject": "DevOps Interview (Core Concepts)",
            "level": "Beginner",
            "question": "What does the phrase 'Shift Left' mean within DevOps security and quality engineering methodologies?",
            "options": [
                "Moving critical testing and security verification workflows earlier into the development lifecycle instead of doing them right before release.",
                "Moving application servers physically to geographic regions situated further west.",
                "Delaying production feature delivery timelines to allow lengthy audit validations.",
                "Structuring code logic block tags strictly to the left alignment space in code text."
            ],
            "answer": "Moving critical testing and security verification workflows earlier into the development lifecycle instead of doing them right before release.",
            "explanation": "Shift Left-er mane holo deployment cycle-er akebare sheshe security checking na kore, coding ba shuru/left side layer thekei test o secure coding practice automation kora."
        },

        // ==========================================
        // LEVEL: INTERMEDIATE (Questions 36 - 75)
        // ==========================================
        {
            "id": 36,
            "subject": "DevOps Interview (Source Code Management)",
            "level": "Intermediate",
            "question": "What is a significant functional risk of using 'git rebase' on a shared, public repository branch?",
            "options": [
                "It causes local storage hard drive corruption immediately.",
                "It rewrites the commit history, which can confuse other collaborators working on the exact same branch by breaking their history tracking.",
                "It forces Git to automatically merge unvetted changes without verification tests.",
                "It deletes all active staging configurations stored on GitHub cloud endpoints."
            ],
            "answer": "It rewrites the commit history, which can confuse other collaborators working on the exact same branch by breaking their history tracking.",
            "explanation": "Git rebase commit history rewrite ba alter kore. Shomproday ba public branch-e rebase korle team-er onno member-der local git history tracking mismatch hobe ebong pull conflict complex hobe."
        },
        {
            "id": 37,
            "subject": "DevOps Interview (Source Code Management)",
            "level": "Intermediate",
            "question": "What purpose do Git Hooks serve inside modern automated developer environments?",
            "options": [
                "They allow web tracking of software developer keystroke velocity matrix details.",
                "They are custom shell scripts that Git executes automatically before or after specific actions like commits, pushes, or receives.",
                "They are secure hardware keys needed to log into enterprise cloud routers.",
                "They dynamically compress old repository code into zip file cloud backups."
            ],
            "answer": "They are custom shell scripts that Git executes automatically before or after specific actions like commits, pushes, or receives.",
            "explanation": "Git Hooks holo script (custom shell scripts) ja core git actions (pre-commit, pre-push) er thik age ba pore shwongkriyobhabe execute hoy code verify ba linting check korar jonno."
        },
        {
            "id": 38,
            "subject": "DevOps Interview (Containers)",
            "level": "Intermediate",
            "question": "How do Multi-stage Docker builds successfully optimize final target artifact image footprints?",
            "options": [
                "By compressing image formats into special zip files requiring extraction layers.",
                "By utilizing multiple intermediate FROM stages and copying only necessary compiled artifacts into a fresh, minimal runtime base image stage.",
                "By splitting container runtime systems across separated server hardware racks.",
                "By converting all microservice logic functions into minimal bash script arrays."
            ],
            "answer": "By utilizing multiple intermediate FROM stages and copying only necessary compiled artifacts into a fresh, minimal runtime base image stage.",
            "explanation": "Multi-stage build-e ekti Dockerfile-e eka-dhik FROM statment use kora hoy. Build compiler dependency pratham thick stage-e thake kintu final minimal layer-e shudhu final clean package binary copy kora hoy, file size choto korar jonno."
        },
        {
            "id": 39,
            "subject": "DevOps Interview (Containers)",
            "level": "Intermediate",
            "question": "What distinguishes a Docker volume from a standard container Bind Mount mechanism?",
            "options": [
                "Volumes store data directly inside the developer application container RAM allocations.",
                "Volumes are managed fully by Docker internal storage subsystems on the host, abstracting specific file directory structures from the host filesystem.",
                "Bind mounts are completely isolated and cannot access host storage locations.",
                "Volumes delete stored details instantly as soon as any active container shuts down."
            ],
            "answer": "Volumes are managed fully by Docker internal storage subsystems on the host, abstracting specific file directory structures from the host filesystem.",
            "explanation": "Docker volume hosting directory struct-er upore dependencies chore data lifecycle fully Docker system control management wrap arakhe, host machine er normal user path dependencies theke safe thake."
        },
        {
            "id": 40,
            "subject": "DevOps Interview (Containers)",
            "level": "Intermediate",
            "question": "Which Docker network type allows independent multi-host containers to securely communicate without host-level manual port-mapping?",
            "options": [
                "Bridge Network profile.",
                "Overlay Network profile.",
                "Host Network configuration.",
                "None Network environment."
            ],
            "answer": "Overlay Network profile.",
            "explanation": "Overlay network eka-dhik cloud dynamic host cluster host (Docker Swarm/K8s logic) running containers er moddhe an internal network direct setup allow kore, container to container communications routing bypass secure rakhe."
        },
        {
            "id": 41,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Intermediate",
            "question": "Which Kubernetes control component maintains the authoritative cluster record state store data?",
            "options": [
                "kube-scheduler",
                "etcd",
                "kubelet",
                "kube-proxy"
            ],
            "answer": "etcd",
            "explanation": "Kubernetes cluster-er shob configuration information, system dynamic nodes conditions details state record storage component ta holo `etcd`, ja ekti highly-available distributed key-value store database."
        },
        {
            "id": 42,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Intermediate",
            "question": "What is the primary role of a Kubernetes Deployment manifest file?",
            "options": [
                "To provision underlying physical bare metal servers dynamically from standard data centers.",
                "To declaratively manage the scaling, updates, and desired state configuration profile of a group of identical running Pods.",
                "To open secure internet proxy gateways into internal cluster databases.",
                "To run security code checking checks across developer git pull actions."
            ],
            "answer": "To declaratively manage the scaling, updates, and desired state configuration profile of a group of identical running Pods.",
            "explanation": "Kubernetes Deployment layout file ensure kore targeted desired count pod status always running thake. Rolling updates handling, pod count adjustments shob control automated state dynamic track rakhe."
        },
        {
            "id": 43,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Intermediate",
            "question": "Which Kubernetes Service type makes an application accessible externally by binding a static high-range port on every single node IP?",
            "options": [
                "ClusterIP",
                "NodePort",
                "LoadBalancer",
                "ExternalName"
            ],
            "answer": "NodePort",
            "explanation": "NodePort service protiti worker node server er upore ekti specific high range port open (30000-32767 range) bind kore direct outside connections inbound traffic-ke targeting internal pod layer forward access target block kore."
        },
        {
            "id": 44,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Intermediate",
            "question": "How do Kubernetes ConfigMaps differ securely from standard Kubernetes Secret manifests?",
            "options": [
                "ConfigMaps are encrypted at rest using custom hard tokens automatically.",
                "ConfigMaps are for plain-text non-confidential application configurations, while Secrets are for confidential items obfuscated via Base64 or encrypted.",
                "Secrets are stored inside external public github profiles dynamically.",
                "There is no difference; they accept identical security parameters everywhere."
            ],
            "answer": "ConfigMaps are for plain-text non-confidential application configurations, while Secrets are for confidential items obfuscated via Base64 or encrypted.",
            "explanation": "Normal non-sensitive configs plain configuration information handle ar data load range storage context simple map array define hoy configmaps. Sensitive pass keys token parameters handle context secrets layer data manage safe encrypt use."
        },
        {
            "id": 45,
            "subject": "DevOps Interview (CI/CD Pipeline)",
            "level": "Intermediate",
            "question": "What is the defining attribute of a Jenkins Declarative Pipeline compared to older Scripted Pipelines?",
            "options": [
                "It requires writing application compilation rules using pure Python scripting code block logic.",
                "It offers a stricter, pre-defined structural layout enclosed in a 'pipeline' block, making it easier to read and maintain.",
                "It can only run inside localized Windows target workstations.",
                "It doesn't support integration with external version control platforms like GitHub."
            ],
            "answer": "It offers a stricter, pre-defined structural layout enclosed in a 'pipeline' block, making it easier to read and maintain.",
            "explanation": "Declarative pipeline Jenkins environment strict layout template blocks offer (Stages, Steps, Post logic control tracking code syntax), ja traditional groovy codes implementation structured logic configuration ensure raw error reduce kore."
        },
        {
            "id": 46,
            "subject": "DevOps Interview (CI/CD Pipeline)",
            "level": "Intermediate",
            "question": "What is the recommended method to pass database passwords securely inside GitHub Actions workflows?",
            "options": [
                "Hardcode the database password strings directly into the workflow `.github/workflows/main.yml` file.",
                "Store them as GitHub Encrypted Secrets and reference them in the YAML workflow using the `{{ secrets.SECRET_NAME }}` syntax.",
                "Print out the password keys into plain build target logs during lint test jobs.",
                "Ask developers to type the credentials manually using standard text prompts during compilation actions."
            ],
            "answer": "Store them as GitHub Encrypted Secrets and reference them in the YAML workflow using the `{{ secrets.SECRET_NAME }}` syntax.",
            "explanation": "GitHub Actions secrets manager repository space configurations option setup dashboard parameter dynamic variable link store create workflow configuration file securely variable call execution pipeline inject target handle create default configuration protect data data leak tracking system rules blocks block."
        },
        {
            "id": 47,
            "subject": "DevOps Interview (Infrastructure as Code)",
            "level": "Intermediate",
            "question": "What role does the local `terraform.tfstate` state file serve in infrastructure lifecycle automation?",
            "options": [
                "It contains full source compilation binary assets for custom enterprise target applications.",
                "It acts as a local source of truth database mapping your abstract code declarations directly to real existing assets created in the cloud.",
                "It tracks employee access time schedules for cloud resource allocation panels.",
                "It functions as a temporary text backup log that can be discarded safely at any execution stage."
            ],
            "answer": "It acts as a local source of truth database mapping your abstract code declarations directly to real existing assets created in the cloud.",
            "explanation": "Terraform space state format database framework tracking tracking resource config blueprint maps information system mapping target true code values real infrastructure layout current synchronization monitoring target framework state manage kora details core validation rules update structure."
        },
        {
            "id": 48,
            "subject": "DevOps Interview (Infrastructure as Code)",
            "level": "Intermediate",
            "question": "What does it mean if an automation provisioning action or configuration tool is described as 'Idempotent'?",
            "options": [
                "The setup execution code will result in different infrastructure conditions every single time it runs.",
                "Running the exact same configuration multiple times yields the exact same intended system state without performing duplicate modifications if already matching.",
                "The orchestration requires manual reboot operations after script completions.",
                "The automation logic only executes over microservice array items on local host configurations."
            ],
            "answer": "Running the exact same configuration multiple times yields the exact same intended system state without performing duplicate modifications if already matching.",
            "explanation": "Idempotency properties rule status update structure code setup rules block, context parameters script change database status structure template execution targeted state mismatch content missing track target logic check updates ensure configuration status maintain trace control execution rules state parameters system."
        },
        {
            "id": 49,
            "subject": "DevOps Interview (Configuration Management)",
            "level": "Intermediate",
            "question": "What fundamental architectural design differentiates Ansible orchestration from system management tools like Chef or Puppet?",
            "options": [
                "Ansible utilizes an agentless push-model architecture running configurations over SSH, whereas traditional tools rely on long-lived host agent daemons.",
                "Ansible requires compiled executable binary containers to operate on production target network hosts.",
                "Ansible forces local network routers to change incoming port pathways automatically.",
                "Ansible can only manipulate relational databases and cannot configure bare operating systems."
            ],
            "answer": "Ansible utilizes an agentless push-model architecture running configurations over SSH, whereas traditional tools rely on long-lived host agent daemons.",
            "explanation": "Ansible architecture design framework client server structure tracking agent dependencies remove access standard target setup node dependencies bypass manage process raw system host server automation connection model push control over SSH configuration files control layer execute targets parameter execution model structures logic."
        },
        {
            "id": 50,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Intermediate",
            "question": "Inside AWS VPC architectures, what role does a NAT Gateway fulfill for backend resource management?",
            "options": [
                "It permits internet traffic to access local system backend master databases directly from external browsers.",
                "It allows instances located inside isolated private subnets to reach out safely to the internet for security updates while blocking unsolicited inbound connections.",
                "It encrypts internal file systems across regional elastic compute modules automatically.",
                "It handles automated load redistribution routines across public application facing endpoints."
            ],
            "answer": "It allows instances located inside isolated private subnets to reach out safely to the internet for security updates while blocking unsolicited inbound connections.",
            "explanation": "NAT Gateway public access route configuration private instance parameters tracking system internet dependencies outbound updates access clear outbound connections secure open frame, internet response external unvetted entities directly backend targeted access completely drop blocks prevent protect infrastructure systems profile track environment configuration structures data template link layer."
        },
        {
            "id": 51,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Intermediate",
            "question": "Why is assigning an AWS IAM Role to an EC2 instance preferred over hardcoding IAM Access Keys inside app code?",
            "options": [
                "Because IAM Roles completely disable monitoring billing data collections.",
                "Because IAM Roles leverage short-lived temporary security credentials that rotate automatically, avoiding long-term credential leakage risks.",
                "Because configuration keys cannot parse JSON string datasets correctly.",
                "Because hardware compute speeds increase when static verification steps are removed."
            ],
            "answer": "Because IAM Roles leverage short-lived temporary security credentials that rotate automatically, avoiding long-term credential leakage risks.",
            "explanation": "Static security access keys system code configurations configuration source block save parameter breach risks leak visibility raise framework structure data profile settings code trace tracking systems credentials bypass dynamic security roles configuration validation automatic token rotations dynamic safe secure block access path target provide code track environment framework parameters rules dynamic context management layer profile framework options."
        },
        {
            "id": 52,
            "subject": "DevOps Interview (Networking)",
            "level": "Intermediate",
            "question": "What core performance distinction separates Network Load Balancers (NLB) from standard Application Load Balancers (ALB)?",
            "options": [
                "NLBs interpret application cookies to inspect raw payload datasets.",
                "NLBs operate at Layer 4 (Transport Layer) handling ultra-high throughput raw TCP/UDP streams with low latency, whereas ALBs target Layer 7 application routing logic.",
                "ALBs are exclusively deployed to secure physical database cluster hardware networks.",
                "There are no operational differences regarding protocol visibility levels."
            ],
            "answer": "NLBs operate at Layer 4 (Transport Layer) handling ultra-high throughput raw TCP/UDP streams with low latency, whereas ALBs target Layer 7 application routing logic.",
            "explanation": "Network Load Balancer (NLB) high performance optimization parameters layer OSI transport Layer 4 protocol TCP/UDP layer routing fast stream processing execution blocks handle. Application Load Balancer path headers cookies analysis execution system layer context dynamic target tracking blocks routing management level rule context map control execution template properties status profile framework option settings."
        },
        {
            "id": 53,
            "subject": "DevOps Interview (Monitoring & Logging)",
            "level": "Intermediate",
            "question": "How does Prometheus gather tracking metrics from monitored microservice target applications?",
            "options": [
                "By forcing applications to stream real-time logs via custom raw terminal pipes continuously.",
                "By utilizing a pull-based HTTP mechanism scraping metrics data endpoints published by the targets at regular scheduled intervals.",
                "By querying underlying operational database query log arrays overnight automatically.",
                "By intercepting direct version control commit structures from public repo lines."
            ],
            "answer": "By utilizing a pull-based HTTP mechanism scraping metrics data endpoints published by the targets at regular scheduled intervals.",
            "explanation": "Prometheus pull base operational metrics aggregation layout work profile setup targets data structure metrics system endpoint path open target system state check automated frequency configuration execution metrics pull monitoring setup storage framework target block save."
        },
        {
            "id": 54,
            "subject": "DevOps Interview (Monitoring & Logging)",
            "level": "Intermediate",
            "question": "What is the key advantage of centralized log aggregation platforms like the ELK stack or Grafana Loki?",
            "options": [
                "They ensure that application systems execute database requests twice as fast.",
                "They ingest, parse, and store logs from scattered multi-server nodes into a searchable master interface for streamlined analysis and debugging.",
                "They automatically remove syntax compiling layout bugs present in developer codes.",
                "They eliminate the need to back up transaction storage assets dynamically."
            ],
            "answer": "They ingest, parse, and store logs from scattered multi-server nodes into a searchable master interface for streamlined analysis and debugging.",
            "explanation": "Centralized Log Aggregation platform scattered multiple distributed service cluster environments context logging track control optimization dashboard search query simple framework trace debugging setup capability trace handle system."
        },
        {
            "id": 55,
            "subject": "DevOps Interview (Deployment Strategies)",
            "level": "Intermediate",
            "question": "How does a standard Blue-Green deployment model protect operations from unexpected deployment service downtime?",
            "options": [
                "By splitting data workloads evenly across two microservice database configurations perpetually.",
                "By maintaining two identical production environments; one live (Blue) handling active traffic and one staging (Green) where updates are deployed and verified before switching routing instantly.",
                "By moving application code logic structures into legacy binary execution models.",
                "By forcing computing systems to shut down completely for maintenance hours during transition phases."
            ],
            "answer": "By maintaining two identical production environments; one live (Blue) handling active traffic and one staging (Green) where updates are deployed and verified before switching routing instantly.",
            "explanation": "Blue-Green method zero downtime implementation standard practice setup check. Two identical environment profile tracking structures target, green version fully update verify router switch target instantly shift error roll quick rollback simple."
        },
        {
            "id": 56,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Intermediate",
            "question": "What defines a zombie or defunct process state inside Linux process trees?",
            "options": [
                "A script configuration that consumes massive CPU load capacity blocks continuously.",
                "A completed process that has terminated execution but still occupies an identification slot in the process table because its parent hasn't read its exit status.",
                "An unauthorized third party software tool attempting network port entries.",
                "A task configuration routine running inside background kernel threads without authorization permissions."
            ],
            "answer": "A completed process that has terminated execution but still occupies an identification slot in the process table because its parent hasn't read its exit status.",
            "explanation": "Zombie process already resource release execution framework finish check PID process table record drop tracking system clean configuration validation check parent process wait array tracking parameter wait code track control process state target."
        },
        {
            "id": 57,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Intermediate",
            "question": "What performance concern is unique to Serverless compute operations like AWS Lambda or Azure Functions?",
            "options": [
                "Total absence of security credential policy checks.",
                "Cold Start latency, which occurs when a function invocation requires initializing a fresh container instantiation after period inactivity.",
                "Inability to link serverless functions to microservice applications.",
                "High costs associated with maintaining local bare-metal storage frames constantly."
            ],
            "answer": "Cold Start latency, which occurs when a function invocation requires initializing a fresh container instantiation after period inactivity.",
            "explanation": "Serverless architectures function context allocation parameters compute optimization trace dynamic logic save. Inactive period duration scale baseline dropped containers startup new execution context setup invocation request initialization duration delay response cold start performance point topic context."
        },
        {
            "id": 58,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Intermediate",
            "question": "Which system component manages operational services initialization sequences inside modern Linux versions like Ubuntu or CentOs?",
            "options": [
                "initd-scripts",
                "systemd",
                "cron-daemon",
                "syslog-service"
            ],
            "answer": "systemd",
            "explanation": "Modern Linux systems management layer control `systemd` process initialization dependency execution tracking, service unit control background automation optimization setup processes framework core structure management process."
        },
        {
            "id": 59,
            "subject": "DevOps Interview (Security)",
            "level": "Intermediate",
            "question": "What scanning objective differentiates SAST tools from dynamic DAST security testing frameworks?",
            "options": [
                "SAST tracks cloud data billing transactions continuously over networks.",
                "SAST analyzes application source code security flaws at rest without running the program, while DAST tests the live application from the outside during runtime.",
                "DAST operates exclusively inside developer local terminal environments.",
                "There are no differences; they search for duplicate binary asset properties."
            ],
            "answer": "SAST analyzes application source code security flaws at rest without running the program, while DAST tests the live application from the outside during runtime.",
            "explanation": "SAST (Static Application Security Testing) white-box validation code check analysis framework compile context without execution code path find logic tracking. DAST (Dynamic Application Security Testing) running application exploit simulate system outer boundary parameters black box auditing process model."
        },
        {
            "id": 60,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Intermediate",
            "question": "What is the primary objective of deploying an Ingress Controller inside a Kubernetes cluster?",
            "options": [
                "To limit internal communication throughput capacities between compute nodes.",
                "To act as a central entry point proxy managing inbound routing rules, SSL termination, and paths exposing internal cluster Services to the outside world.",
                "To secure local master node file system partitions using hard access tokens.",
                "To build microservice code blocks whenever a new commit action registers."
            ],
            "answer": "To act as a central entry point proxy managing inbound routing rules, SSL termination, and paths exposing internal cluster Services to the outside world.",
            "explanation": "Kubernetes Ingress Controller edge routing configuration load system proxy cluster exterior internet entry flow handle rules configuration paths configuration validation traffic dispatch direct map tracking control process layer."
        },
        {
            "id": 61,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Intermediate",
            "question": "In Linux terminal scripting, how do you redirect the error output (stderr) of a command safely into a separate text file?",
            "options": [
                "command > file.txt",
                "command 2> error.log",
                "command &> file.txt",
                "command | error.log"
            ],
            "answer": "command 2> error.log",
            "explanation": "Standard streams numeric codes array target descriptor value `1` standard output (`stdout`), `2` represents standard error (`stderr`). Tai error output redirect korar jonno `2>` descriptor path file string mapping configuration format apply kora hoy."
        },
        {
            "id": 62,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Intermediate",
            "question": "What function does a Readiness Probe fulfill for a running Pod replica in Kubernetes?",
            "options": [
                "It determines if the container system kernel has crashed completely requiring instant terminations.",
                "It indicates whether the container application is fully initialized and ready to receive active network traffic request loads from Services.",
                "It checks if developer source control branch permissions match deployment token files.",
                "It calculates total hard drive data sizes occupied across cloud resource storage frames."
            ],
            "answer": "It indicates whether the container application is fully initialized and ready to receive active network traffic request loads from Services.",
            "explanation": "Readiness probe verify configuration check complete application boot process internal structures database connectivity cache loads pass ready clear, load balancer context service active target endpoints layer select entry direct check block routing verify system load dynamic safe keep tracking."
        },
        {
            "id": 63,
            "subject": "DevOps Interview (CI/CD Pipeline)",
            "level": "Intermediate",
            "question": "Why is an artifact management system like Sonatype Nexus or JFrog Artifactory crucial for enterprise scale CI/CD setups?",
            "options": [
                "It removes the requirements of establishing version control setups like Git.",
                "It provides a secure, versioned, centralized storage repository for built binaries, packages, and images, ensuring consistency and caching external dependencies.",
                "It automatically runs frontend user visual design updates over distributed web layers.",
                "It replaces the application hosting server systems completely during outages."
            ],
            "answer": "It provides a secure, versioned, centralized storage repository for built binaries, packages, and images, ensuring consistency and caching external dependencies.",
            "explanation": "Artifact repository framework compiled binary targets secure track version caching store support lifecycle maintain handle. Production deployments depend direct build package archive repository link, compilation speeds dependency management secure track keep dynamic structure."
        },
        {
            "id": 64,
            "subject": "DevOps Interview (Source Code Management)",
            "level": "Intermediate",
            "question": "What occurs when a Git merge conflict arises during software development?",
            "options": [
                "Git chooses the oldest history tracking block and deletes new development tracks automatically.",
                "Git stops the merge process when changes are made to the exact same line of a file in two competing branches, requiring manual human text reconciliation.",
                "The master repository system crashes and prevents developers from initiating local commits.",
                "The version control service alerts cloud providers to deploy alternative fallback server instances."
            ],
            "answer": "Git stops the merge process when changes are made to the exact same line of a file in two competing branches, requiring manual human text reconciliation.",
            "explanation": "Merge conflict toiri hoy jokhon ekai line modifications history branches path auto tracking logic cross match conflict trace context error throw context resolution developer code verify check clean code merge choice resolve control provide framework handle logic check parameters."
        },
        {
            "id": 65,
            "subject": "DevOps Interview (Networking)",
            "level": "Intermediate",
            "question": "What configuration setting allows isolated server systems across different AWS accounts to securely interact without public internet traversal?",
            "options": [
                "Internet Gateway allocations.",
                "VPC Peering or Transit Gateway connection setups.",
                "Public DNS record mappings.",
                "Security group protocol rule deletions."
            ],
            "answer": "VPC Peering or Transit Gateway connection setups.",
            "explanation": "VPC Peering configuration network backbone cross account infrastructure setups dynamic internal pathways connection routing clear access cloud provider network boundary cross safe path target maintain secure data access line manage."
        },
        {
            "id": 66,
            "subject": "DevOps Interview (Containers)",
            "level": "Intermediate",
            "question": "What utility does Docker Compose offer over standard single Docker run terminal arguments?",
            "options": [
                "It allows multi-container execution configurations using unified YAML declaration manifest definitions rather than complex long single shell strings.",
                "It allows containers to run completely free of computer host operating systems memory bounds.",
                "It automatically designs application graphics interfaces for running code files.",
                "It eliminates the requirement to write system Dockerfiles altogether during builds."
            ],
            "answer": "It allows multi-container execution configurations using unified YAML declaration manifest definitions rather than complex long single shell strings.",
            "explanation": "Docker Compose ekti direct container stack declaration environment management tool setup configuration tracking handle simple YAML declaration infrastructure configurations link network dependencies variables manage configuration parameters simplify runtime target options save."
        },
        {
            "id": 67,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Intermediate",
            "question": "What is the purpose of configuring an Auto Scaling Group behind an Application Load Balancer?",
            "options": [
                "To automatically modify the code logic parameters of microservice data apps.",
                "To dynamically adjust the count of active compute instances up or down based on real time processing metrics like CPU utilization or request counts.",
                "To completely disable internal server firewalls during high data transit schedules.",
                "To move user application resources across global database systems overnight dynamically."
            ],
            "answer": "To dynamically adjust the count of active compute instances up or down based on real time processing metrics like CPU utilization or request counts.",
            "explanation": "Auto Scaling Group automatic monitoring metrics thresholds condition tracking check system scale elasticity control handle target instance additions resource management optimization performance ensure dynamic cloud framework standard rules block scale drop down check cost control context properties optimization."
        },
        {
            "id": 68,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Intermediate",
            "question": "What performance metrics issue is typically resolved by adjusting the 'nofile' resource limits configuration inside Linux configurations?",
            "options": [
                "Total lack of graphic user interface display resolutions.",
                "Too many open files error conditions under dense concurrency loads due to system threshold constraints tracking standard sockets or active storage targets.",
                "Physical data storage corruption errors within block storage structures.",
                "Loss of wireless internet adapters connectivity configurations on master servers."
            ],
            "answer": "Too many open files error conditions under dense concurrency loads due to system threshold constraints tracking standard sockets or active storage targets.",
            "explanation": "Linux default environment session restrictions descriptors limits count low value setup. Concurrency high connection proxy web server configurations database networks limits hit 'Too many open files' issue occur check, context config properties modify resolution control handle parameters system level tuning framework process."
        },
        {
            "id": 69,
            "subject": "DevOps Interview (CI/CD Pipeline)",
            "level": "Intermediate",
            "question": "What role does a Webhook fulfill when integrating source code management sites with deployment runners?",
            "options": [
                "It compresses repository files before upload actions are carried out.",
                "It transmits an automated real-time HTTP POST payload event notice to targeted external deployment endpoints immediately following activities like commits or pull merges.",
                "It enforces multi factor user password logins into local terminal pipelines.",
                "It checks for hardware configuration details on the master host machine nodes."
            ],
            "answer": "It transmits an automated real-time HTTP POST payload event notice to targeted external deployment endpoints immediately following activities like commits or pull merges.",
            "explanation": "Webhook configuration dynamic trigger method code push actions events immediately version control server payload notice tracking CI/CD endpoint pipeline automation execution instant launch context setup target capability dynamic manage process context path setup."
        },
        {
            "id": 70,
            "subject": "DevOps Interview (Security)",
            "level": "Intermediate",
            "question": "What process optimization target is accomplished by using SSL Termination at the Load Balancer level?",
            "options": [
                "It removes the application layer encryption entirely across external networks.",
                "It decrypts incoming SSL traffic at the entry proxy layer, relieving internal backend microservices from the computational overhead of cryptographic processing.",
                "It enforces developer password authentications over public interface pipelines.",
                "It allows public database engines to operate without localized data storage mechanisms."
            ],
            "answer": "It decrypts incoming SSL traffic at the entry proxy layer, relieving internal backend microservices from the computational overhead of cryptographic processing.",
            "explanation": "SSL Termination load balancer entry level SSL handshake decryption burden clear handle system internals simple unencrypted network protocol layer performance save, compute resource microservice app code processing optimize fast throughput data structure logic maintain capability setup tracking profile options configurations rules path option system layer."
        },
        {
            "id": 71,
            "subject": "DevOps Interview (Automation & Scripting)",
            "level": "Intermediate",
            "question": "Why is Python often preferred over Bash for advanced automated administrative automation tasks?",
            "options": [
                "Bash doesn't support basic loop logic controls inside script execution.",
                "Python provides superior readability, exception handling, data parsing libraries, and complex data structure support suitable for large scale automation frameworks.",
                "Python scripts run inside compute kernels without requiring background interpreter processing modules.",
                "Bash syntax cannot execute networking tasks or call public API system structures."
            ],
            "answer": "Python provides superior readability, exception handling, data parsing libraries, and complex data structure support suitable for large scale automation frameworks.",
            "explanation": "Simple logic shell task short quick command pipe processing bash shell scripts ideal tool optimization tracking. Kintu exception handling complex structural datasets API communications multi system integrations parsing scenarios clean error tracking system structure control automation requirements Python highly functional support engine dynamic clear code maintain block options context map rules profile code text data logic."
        },
        {
            "id": 72,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Intermediate",
            "question": "What is the primary role of a Kubernetes Service abstraction resource component?",
            "options": [
                "To compile microservice source codes into container binary objects.",
                "To define a stable logical abstraction layer and persistent network access endpoint policy targeting an ephemeral collection of running Pod pods replicas.",
                "To allocate virtual machine server operating system installations across network configurations.",
                "To schedule data backup schedules over regional elastic cluster nodes."
            ],
            "answer": "To define a stable logical abstraction layer and persistent network access endpoint policy targeting an ephemeral collection of running Pod pod replicas.",
            "explanation": "Kubernetes pods instances ephemeral variable properties hold dynamic death dynamic new allocations IPs change target check. Service framework static interface layer persistent name network identity endpoints target map configuration load balancer request distributions safely pass target tracking engine standard setup options core parameters dynamic check configuration rules block properties status track configurations parameter."
        },
        {
            "id": 73,
            "subject": "DevOps Interview (Infrastructure as Code)",
            "level": "Intermediate",
            "question": "What target is achieved by using Terraform variables declarations within dynamic infrastructure code scripts?",
            "options": [
                "To increase the local disk space parameter during runtime build scripts execution.",
                "To modularize code definitions allowing customization, parameters decoupling, reusability across staging environments without hardcoding details.",
                "To encrypt local state files using public identity provider mechanisms.",
                "To restrict developers from changing cloud resource tags during deployment operations."
            ],
            "answer": "To modularize code definitions allowing customization, parameters decoupling, reusability across staging environments without hardcoding details.",
            "explanation": "Variables infrastructure configuration template decoupling configuration options parameters parameterize ensure multi environment execution reuse target clear provide code architecture dry clean rules follow dynamic infrastructure provisioning parameter configurations check track properties system."
        },
        {
            "id": 74,
            "subject": "DevOps Interview (Networking)",
            "level": "Intermediate",
            "question": "What operational problem does setting up an internal Private DNS zone solve inside microservice topologies?",
            "options": [
                "It blocks external developers from pushing version commits to repositories.",
                "It allows internal services to reference other dependent cluster systems using abstract names (e.g., database.internal) isolated from public visibility.",
                "It completely eliminates the requirements of using local network IP address systems.",
                "It prevents application container images from growing too large in storage layers."
            ],
            "answer": "It allows internal services to reference other dependent cluster systems using abstract names (e.g., database.internal) isolated from public visibility.",
            "explanation": "Private DNS zones secure infrastructure setup standard method. Internal microservices public resolution visibility avoid context configuration map link communication endpoints abstract stable strings wrap communication architecture framework manage safety clean framework target dynamic setup track model."
        },
        {
            "id": 75,
            "subject": "DevOps Interview (Monitoring & Logging)",
            "level": "Intermediate",
            "question": "What capability differentiates Grafana dashboards visualization tools from metric collection engines like Prometheus?",
            "options": [
                "Grafana focuses purely on analytics visualization and dashboard UI layouts ingesting disparate data sources, while Prometheus handles storage and metrics tracking backend querying.",
                "Grafana operates as a localized hardware disk compiler for server microservices.",
                "Prometheus can only analyze log string entries and cannot process integer data points.",
                "There are no distinct differences; they perform identical processing roles within pipelines."
            ],
            "answer": "Grafana focuses purely on analytics visualization and dashboard UI layouts ingesting disparate data sources, while Prometheus handles storage and metrics tracking backend querying.",
            "explanation": "Prometheus tracking storage time series database framework engine rules metrics engine, Grafana UI representation tracking analytics display layers multi source ingestion engine tools set combination monitor layout structure setup target manage process parameters check map properties framework settings options details."
        },

        // ==========================================
        // LEVEL: ADVANCED (Questions 76 - 100)
        // ==========================================
        {
            "id": 76,
            "subject": "DevOps Interview (GitOps)",
            "level": "Advanced",
            "question": "What core architectural property distinguishes GitOps delivery engines (like ArgoCD) from traditional push-based CI/CD pipeline automation?",
            "options": [
                "GitOps requires deploying heavy local compiler agents into all engineer workstations.",
                "GitOps uses an in-cluster agent that continuously pulls the desired state from Git, reconciling infrastructure state drift automatically without exposing cluster external credentials.",
                "GitOps completely disables the usage of container platforms like Kubernetes inside pipelines.",
                "GitOps relies on sending raw bash commands over public SSH channels straight from build runners."
            ],
            "answer": "GitOps uses an in-cluster agent that continuously pulls the desired state from Git, reconciling infrastructure state drift automatically without exposing cluster external credentials.",
            "explanation": "GitOps pull model architecture framework base deployment control logic pattern standard check. Cluster controller (ArgoCD) state check system drift alignment observe dynamic configuration sync execution trigger automated loop ensure pipeline push control secrets open firewall mitigation control provide."
        },
        {
            "id": 77,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Advanced",
            "question": "How does the Kubernetes control plane maintain synchronization during a severe network partition affecting etcd cluster quorum calculations?",
            "options": [
                "It forces worker nodes to elect temporary alternative runtime databases via internal bash configurations.",
                "etcd requires a strict majority quorum to write updates; if a partition breaks quorum, it stops writes to prevent split-brain state inconsistency, halting data drift.",
                "The entire cluster wipes out local node configurations to re-initialize cloud assets from scratch.",
                "It shifts processing load variables into serverless configuration pools without operational checks."
            ],
            "answer": "etcd requires a strict majority quorum to write updates; if a partition breaks quorum, it stops writes to prevent split-brain state inconsistency, halting data drift.",
            "explanation": "etcd Raft consensus protocol criteria tracking calculations rules process check. Quorum calculation majority count broken branch state write execution drop state preservation mechanism consistency lock check split brain condition drop mitigation design framework block rules check target."
        },
        {
            "id": 78,
            "subject": "DevOps Interview (Deployment Strategies)",
            "level": "Advanced",
            "question": "What dynamic capability does a Service Mesh like Istio provide to execute advanced Canary deployments safely?",
            "options": [
                "It compiles frontend JavaScript assets faster at the edge cloud layer.",
                "It leverages sidecar proxies to split traffic at the application layer based on weighted ratios, HTTP headers, or cookies, independent of basic network DNS updates.",
                "It completely eliminates the requirements of running Kubernetes internal pod networks.",
                "It automates structural adjustments across backend database row tables dynamically."
            ],
            "answer": "It leverages sidecar proxies to split traffic at the application layer based on weighted ratios, HTTP headers, or cookies, independent of basic network DNS updates.",
            "explanation": "Service Mesh (Istio) application architecture layer proxy wrapper implementation configuration standard control. Envoy sidecar controls data flow traffic dynamic splitting percentage weight rules user headers identification control route matching dynamic canary release validation process control check."
        },
        {
            "id": 79,
            "subject": "DevOps Interview (Infrastructure as Code)",
            "level": "Advanced",
            "question": "When scale orchestrations target large engineering organizations, how is infrastructure state file race-condition concurrency conflict avoided in Terraform configurations?",
            "options": [
                "By keeping distinct copies of the local text files on each developer's laptop machine system.",
                "By configuring a Remote Backend architecture (e.g., AWS S3) combined with a distributed State Locking mechanism (e.g., DynamoDB) to block simultaneous operations.",
                "By forcing the entire cloud cluster environment to restart prior to executing configuration plans.",
                "By disabling resource tags modifications entirely within codebase models."
            ],
            "answer": "By configuring a Remote Backend architecture (e.g., AWS S3) combined with a distributed State Locking mechanism (e.g., DynamoDB) to block simultaneous operations.",
            "explanation": "Remote State management combined with state locking (S3 + DynamoDB configuration setup) state synchronization data lock handle system control prevent overwrite condition multiple continuous deploy simultaneous running state block logic security track."
        },
        {
            "id": 80,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Advanced",
            "question": "What architectural abstraction model defines a Kubernetes Operator?",
            "options": [
                "A graphical dashboard interface to visually observe microservice container logs on dashboards.",
                "A custom controller utilizing Custom Resource Definitions (CRDs) to encapsulate operational human domain knowledge into automated code loops managing complex stateful applications.",
                "A software continuous integration platform operating separate from container frameworks.",
                "An automated backup program targeting localized system hard drives."
            ],
            "answer": "A custom controller utilizing Custom Resource Definitions (CRDs) to encapsulate operational human domain knowledge into automated code loops managing complex stateful applications.",
            "explanation": "Kubernetes Operator concept extension core platform mechanism framework. CRDs dynamic state capture logic customized control loops reconciliation loop management stateful apps (DB failovers, scaling logic lifecycle operations) automated code logic check track standard architecture model implementation."
        },
        {
            "id": 81,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Advanced",
            "question": "How do Horizontal Pod Autoscalers (HPA) and Cluster Autoscalers interact when a sudden massive traffic surge hits a Kubernetes setup?",
            "options": [
                "Cluster Autoscaler scales pods, and HPA handles database hardware provisioning variables.",
                "HPA scales the number of pods based on metrics thresholds; if nodes exhaust capacity, the Cluster Autoscaler detects unschedulable pods and provisions new cloud nodes.",
                "They duplicate cluster state databases automatically to absorb extra latency limits.",
                "They shut down trailing microservice container instances to prevent hardware failures."
            ],
            "answer": "HPA scales the number of pods based on metrics thresholds; if nodes exhaust capacity, the Cluster Autoscaler detects unschedulable pods and provisions new cloud nodes.",
            "explanation": "HPA application tier scaling logic count control tracking pod numbers. Nodes resource memory CPU allocation full capacity reach check pending status pod catch system trigger cluster auto scaler infrastructure tier cloud server generation allocation synchronization logic check."
        },
        {
            "id": 82,
            "subject": "DevOps Interview (Cloud Computing)",
            "level": "Advanced",
            "question": "To satisfy a near-zero Recovery Point Objective (RPO) and low Recovery Time Objective (RTO) across global cloud infrastructures, which data strategy is mandatory?",
            "options": [
                "Executing cold backups onto local developer storage systems once every week.",
                "Implementing active-active multi-region replication architectures with automated synchronous or near-real-time data streaming and continuous layer 7 global traffic routing failovers.",
                "Transitioning all frontend application resources into single server legacy architectures.",
                "Restricting configuration deployments strictly to one central network availability zone availability."
            ],
            "answer": "Implementing active-active multi-region replication architectures with automated synchronous or near-real-time data streaming and continuous layer 7 global traffic routing failovers.",
            "explanation": "RPO near zero execution target minimal data loss target. Active-Active database state routing global layer DNS weight health mapping automation setups cross continental latency optimizations failover strategies infrastructure requirement setup topic framework context profile options dynamic."
        },
        {
            "id": 83,
            "subject": "DevOps Interview (Security)",
            "level": "Advanced",
            "question": "How does HashiCorp Vault's Dynamic Secrets engine mitigate credentials exposure vectors in microservices architecture configurations?",
            "options": [
                "By hardcoding passwords into specialized local configuration text arrays safely.",
                "By generating tracking database access credentials programmatically on demand with custom time-to-live (TTL) limits, automatically revoking them when expired.",
                "By forcing developer logins via external biometric verification nodes during runtime workflows.",
                "By mapping all configuration variable profiles inside plain public code repository text structures."
            ],
            "answer": "By generating tracking database access credentials programmatically on demand with custom time-to-live (TTL) limits, automatically revoking them when expired.",
            "explanation": "Dynamic Secrets HashiCorp Vault optimization strategy standard check. Static master password application properties save config leak risk bypass create, microservice app database request hit logic short live dynamic lease generate query auto delete lifecycle management security standard rules engine configuration framework."
        },
        {
            "id": 84,
            "subject": "DevOps Interview (Database Operations)",
            "level": "Advanced",
            "question": "Which database pattern permits executing critical schema migrations across microservice architectures without risking runtime breaking change errors?",
            "options": [
                "Enforcing instant downtime windows across all active application configurations overnight.",
                "Utilizing the Expand and Contract (Parallel Change) pattern by rolling out backward-compatible schema changes first, updating applications, and pruning legacy structures later.",
                "Deleting former production database structures completely right before new code releases launch.",
                "Restructuring the application code logic configurations into flat single string file parameters."
            ],
            "answer": "Utilizing the Expand and Contract (Parallel Change) pattern by rolling out backward-compatible schema changes first, updating applications, and pruning legacy structures later.",
            "explanation": "Expand and Contract strategy execution runtime standard check method database zero downtime strategy. Multi phase approach database field expand both version support application transition phase completion check old column drop verification step safe cycle track execution."
        },
        {
            "id": 85,
            "subject": "DevOps Interview (Testing & QA)",
            "level": "Advanced",
            "question": "What architectural absolute prerequisite must be satisfied before team environments safely authorize Chaos Engineering testing (e.g., Chaos Mesh) inside production clusters?",
            "options": [
                "Complete removal of version control history logs from central servers.",
                "Comprehensive automated monitoring observability networks providing automated real-time alerts and instantaneous circuit-breaker blast-radius rollback limits control hooks.",
                "Migrating all backend system tools to single localized cloud server nodes hardware platforms.",
                "Disabling application layer encryption protocols permanently over cloud routers."
            ],
            "answer": "Comprehensive automated monitoring observability networks providing automated real-time alerts and instantaneous circuit-breaker blast-radius rollback limits control hooks.",
            "explanation": "Chaos engineering inject experiment failure model validation mechanism practice framework check. Blast radius control capability absolute safety mechanism layout requirement monitoring drop system blindness chaos trigger catastrophic state risk profile optimization control check parameters."
        },
        {
            "id": 86,
            "subject": "DevOps Interview (Security)",
            "level": "Advanced",
            "question": "What operational efficiency target is accomplished by enforcing Policy-as-Code via Open Policy Agent (OPA) or Kyverno inside orchestration frameworks?",
            "options": [
                "It accelerates container image build times by bypassing traditional security sweeps.",
                "It decouples governance compliance checks from custom applications by validation resource configurations against declarative policies automatically right at the admission control gate.",
                "It eliminates the requirement of tracking computing resource costs inside enterprise groups.",
                "It forces cloud environments to drop traditional network firewalls settings automatically."
            ],
            "answer": "It decouples governance compliance checks from custom applications by validation resource configurations against declarative policies automatically right at the admission control gate.",
            "explanation": "Policy-as-Code admission controller enforcement step standard configuration context check (OPA/Kyverno). Deployment specs verify baseline validation checks (root prevention, label checklist, ingress parameter filters) automated block before deployment state cluster save tracking options clear structure."
        },
        {
            "id": 87,
            "subject": "DevOps Interview (SRE)",
            "level": "Advanced",
            "question": "How is a site reliability team's Error Budget calculation derived to guide application deployment velocity boundaries?",
            "options": [
                "By calculating the total financial budget overhead consumed by developer cloud infrastructure tags.",
                "It is the remaining allowance of unreliability calculated directly from an application's defined Service Level Objective (SLO), tracking if user availability targets drop thresholds.",
                "By measuring total code lines deleted across public repository histories during clean up sprints.",
                "By tracking corporate employee turnaround ratios over internal organizational databases dashboards."
            ],
            "answer": "It is the remaining allowance of unreliability calculated directly from an application's defined Service Level Objective (SLO), tracking if user availability targets drop thresholds.",
            "explanation": "Error Budget mathematical representation reliability allowance value framework ($$Error\ Budget = 100\% - SLO\%$$). Error budget exhausted phase hit reliability team freeze new feature releases policy execution code reliability maintenance priority switch context handle parameters."
        },
        {
            "id": 88,
            "subject": "DevOps Interview (Monitoring & Logging)",
            "level": "Advanced",
            "question": "When debugging high tail-latency anomalies across massive distributed microservices topologies, which telemetry strategy provides precise diagnostic visibility?",
            "options": [
                "Running single tracking greps across localized text log paths across separate node servers.",
                "Deploying distributed contextual trace propagation maps leveraging OpenTelemetry to generate unique parent child Span ID flows across the entire cross network network path.",
                "Doubling memory allocations to downstream caching layers without investigation tests.",
                "Changing the database configuration files syntax format structures to raw binary values."
            ],
            "answer": "Deploying distributed contextual trace propagation maps leveraging OpenTelemetry to generate unique parent child Span ID flows across the entire cross network network path.",
            "explanation": "Tail latency microservice bottleneck trace contextual information trace propagation analysis mandatory capability framework check. W3C Trace Context dynamic span matching tracking parent context down service path identification clear cross boundary tracking optimization execution tool set."
        },
        {
            "id": 89,
            "subject": "DevOps Interview (Security)",
            "level": "Advanced",
            "question": "How do secure container runtime sandboxes like gVisor or Kata Containers drastically reduce container breakout host privilege escalation threats?",
            "options": [
                "By fully disabling networking stacks inside active container architectures.",
                "By intercepting and proxying container application system calls inside a user-space kernel wrapper or specialized lightweight microVM, preventing direct access to the host kernel.",
                "By automatically encrypting developer code strings before building packages.",
                "By forcing systems to drop base container image configuration files during pipeline builds."
            ],
            "answer": "By intercepting and proxying container application system calls inside a user-space kernel wrapper or specialized lightweight microVM, preventing direct access to the host kernel.",
            "explanation": "Standard Docker architectures root kernel sharing vulnerability exposure high risk point profile. gVisor intercept syscalls boundary check context user-space proxy handler processing engine or Kata custom independent microVM isolate kernel execution safety tier standard architecture logic advanced context security tracking optimization setup."
        },
        {
            "id": 90,
            "subject": "DevOps Interview (SRE)",
            "level": "Advanced",
            "question": "Which architecture pattern explicitly prevents cascading target server system exhaustion when a core internal service experiences critical degradations under heavy loads?",
            "options": [
                "The Thundering Herd execution protocol script.",
                "The Circuit Breaker pattern paired with intelligent client side exponentially backed-off retry policies and request throttling hooks.",
                "Forcing the application tracking framework to drop incoming database index tables.",
                "Increasing load balancer thread pool allocations without limits configurations parameters."
            ],
            "answer": "The Circuit Breaker pattern paired with intelligent client side exponentially backed-off retry policies and request throttling hooks.",
            "explanation": "Cascading failures prevention strategy system design standard practice check. Faulty upstream service requests hit block context fallback trip open execution condition check system restoration pause duration target provide recovery space track dynamic pattern clear."
        },
        {
            "id": 91,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Advanced",
            "question": "What deep technical performance optimization differentiates an eBPF-based Kubernetes CNI (like Calico/Cilium) from legacy iptables-based routing?",
            "options": [
                "eBPF completely bypasses storage block data checks inside physical disks systems.",
                "eBPF executes custom sandbox logic directly within the Linux kernel space using lookups tables bypassing slow linear iptables rules matching loops under high scale.",
                "eBPF enforces application build scripts to execute compilation steps faster at edge sites.",
                "eBPF requires assigning raw public IP addresses directly to all developer local laptops accounts."
            ],
            "answer": "eBPF executes custom sandbox logic directly within the Linux kernel space using lookups tables bypassing slow linear iptables rules matching loops under high scale.",
            "explanation": "Kubernetes standard network tracking scaling parameters high node count hit logic iptables chains grow complex performance hit linear search mode. eBPF kernel space network packet control direct hook direct lookup table mapping optimization data throughput highly performance enhance context tools setup trace."
        },
        {
            "id": 92,
            "subject": "DevOps Interview (Infrastructure as Code)",
            "level": "Advanced",
            "question": "What development pipeline strategy is realized by utilizing HashiCorp Packer alongside Terraform configuration scripts?",
            "options": [
                "Automating the calculation of cloud infrastructure billing variables maps.",
                "Building immutable infrastructure lifecycle models by pre baking standard software dependency assets directly into repeatable Golden Machine Images before scaling deployment.",
                "Creating front facing user application user interfaces from abstract database configurations files.",
                "Removing the absolute requirements of implementing source control platforms like Git inside companies."
            ],
            "answer": "Building immutable infrastructure lifecycle models by pre baking standard software dependency assets directly into repeatable Golden Machine Images before scaling deployment.",
            "explanation": "Packer golden image artifact building tool IaC strategy standard implementation check. Configuration management drift runtime setup time drop target safe image build speed infrastructure deployment velocity highly optimize framework pattern check."
        },
        {
            "id": 93,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Advanced",
            "question": "When scaling stateful setups like Apache Kafka or Elasticsearch inside Kubernetes, why are StatefulSets preferred over standard Deployments?",
            "options": [
                "StatefulSets consume much less network processing capacity than standard Deployments configurations.",
                "StatefulSets enforce strict persistent unique network identifier states, ordered gracefully scaling controls, stable storage bounds mapping volume allocations to identical pod indexes.",
                "StatefulSets completely strip application layers of cryptographic validation protocols during executions.",
                "StatefulSets are specifically built to run only within localized standalone corporate hardware clusters networks."
            ],
            "answer": "StatefulSets enforce strict persistent unique network identifier states, ordered gracefully scaling controls, stable storage bounds mapping volume allocations to identical pod indexes.",
            "explanation": "Stateful applications data storage stability network identification parameters persistence value requirement high standard check. Pod death configuration identity replacement matching volume binding consistency logic StatefulSet strict deterministic behavior map guarantee properties provide standard setup logic."
        },
        {
            "id": 94,
            "subject": "DevOps Interview (Operating Systems)",
            "level": "Advanced",
            "question": "How do you systematically identify the root cause of an application process abruptly ending due to an Linux Out-Of-Memory (OOM) Killer event?",
            "options": [
                "By rewriting the developer source code logic into simple script parameters formats.",
                "By analyzing system log buffers using tools like `dmesg -T | grep -i oom` or inspecting `/var/log/syslog` messages to verify kernel process termination scoring metrics details.",
                "By completely replacing the physical networking cables attached to host machine node structures.",
                "By deleting older version branches inside central public Git database systems repositories."
            ],
            "answer": "By analyzing system log buffers using tools like `dmesg -T | grep -i oom` or inspecting `/var/log/syslog` messages to verify kernel process termination scoring metrics details.",
            "explanation": "OOM killer event kernel defense mechanism behavior standard check track. Resource limit allocations cross validation hit log trace capture `dmesg` commands kernel buffer logging check process memory consumption score validation details extraction framework debugging path standard rule step."
        },
        {
            "id": 95,
            "subject": "DevOps Interview (FinOps)",
            "level": "Advanced",
            "question": "In cloud scaling cost optimization frameworks (FinOps), what specific architectural design choice minimizes data transit cross-zone billing overhead?",
            "options": [
                "Completely disabling logging aggregations actions inside cluster parameters architectures.",
                "Enforcing localized server affinity rules, cross-availability-zone data traffic compression, and routing requests within the same cloud availability zone whenever possible.",
                "Moving application file storage configurations into local hard drive systems memory pools.",
                "Restricting code access variables configurations to plain text repository entries profiles."
            ],
            "answer": "Enforcing localized server affinity rules, cross-availability-zone data traffic compression, and routing requests within the same cloud availability zone whenever possible.",
            "explanation": "Cloud providers cross Availability Zone (AZ) communication channels layer pricing cost calculation structure target high value metrics tracking define. Internal application microservice dependencies communication local topology awareness node affinity logic check cost savings highly effective results provide."
        },
        {
            "id": 96,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Advanced",
            "question": "What operational failure loop occurs if a custom Kubernetes Mutating Webhook backend goes down while its configuration rule failurePolicy property is explicitly set to 'Fail'?",
            "options": [
                "The cluster shifts to serverless node engines configurations automatically without latency checks.",
                "All incoming API requests matching the targeted validation scope are completely blocked from cluster admission entry, preventing new target resource generation deployments.",
                "The control plane completely formats etcd authoritative cluster store configurations automatically.",
                "The operating system drops the worker system nodes firewall rule architectures."
            ],
            "answer": "All incoming API requests matching the targeted validation scope are completely blocked from cluster admission entry, preventing new target resource generation deployments.",
            "explanation": "Admission control webhooks failurePolicy 'Fail' configuration strict security standard condition enforce target check. Webhook controller component unavailable phase hit API request validation bypass block reject loop enter configuration error mitigation checks mandatory system stability topic profile."
        },
        {
            "id": 97,
            "subject": "DevOps Interview (Security)",
            "level": "Advanced",
            "question": "What pipeline technology approach permits building clean Docker container images safely inside unprivileged isolated CI/CD runner nodes environments?",
            "options": [
                "Running the main runner process with standard root privilege options mappings.",
                "Utilizing rootless container build tools like Kaniko or Buildah, which execute commands completely in user space without requiring access to a host Docker daemon root process socket.",
                "Moving build scripts directly into localized hardware system architectures scripts executions.",
                "Disabling application security scanning integrations completely across target version control tools frameworks."
            ],
            "answer": "Utilizing rootless container build tools like Kaniko or Buildah, which execute commands completely in user space without requiring access to a host Docker daemon root process socket.",
            "explanation": "CI/CD environments host security isolation context socket mounting `/var/run/docker.sock` severe vulnerability vector. Kaniko rootless space implementation snapshots creation layer compile user space execution engine system design safe modern approach standard track."
        },
        {
            "id": 98,
            "subject": "DevOps Interview (SRE)",
            "level": "Advanced",
            "question": "What core logic purpose does a Graceful Shutdown design configuration fulfill inside high scale microservice orchestration nodes systems?",
            "options": [
                "It speeds up compilation cycles inside local build runner workstations environments.",
                "It catches SIGTERM signals allowing applications to finish active requests, flush database connections, and clear open sockets before safe process endings.",
                "It forces cloud environments to bypass standard network credential validations rules parameters.",
                "It automatically converts large storage log file formats into minimal zip files configuration tables."
            ],
            "answer": "It catches SIGTERM signals allowing applications to finish active requests, flush database connections, and clear open sockets before safe process endings.",
            "explanation": "Kubernetes rolling updates or dynamic pod scaling lifecycle events context pod eviction time SIGTERM signal capture mechanism critical process framework check. Connection draining configuration logic completion safety ensure error rate drop zero downtime maintenance profile check rules target."
        },
        {
            "id": 99,
            "subject": "DevOps Interview (Container Orchestration)",
            "level": "Advanced",
            "question": "How do Helm charting dependency structure schemes help teams enforce 'DRY' (Don't Repeat Yourself) setup rules across multi environment Kubernetes clusters?",
            "options": [
                "By forcing developers to manage standalone raw configuration files manually on local workstations.",
                "By leveraging abstract global dynamic global dynamic base parameters variables configurations templates combined with environment specific override values sheets configurations overrides configurations files definitions configurations.",
                "By completely replacing the requirements of using target deployment configurations manifest yaml profiles models.",
                "By moving cloud database storage operations into unencrypted local network files partitions layers."
            ],
            "answer": "By leveraging abstract global dynamic global dynamic base parameters variables configurations templates combined with environment specific override values sheets configurations overrides configurations files definitions configurations.",
            "explanation": "Helm chart template structure abstraction framework multiple parameters parameters dynamic definition check. Global master definition single copy maintain environment variable paths value configuration parameters mapping clean deployment dynamic separation handle strategy configuration code dry."
        },
        {
            "id": 100,
            "subject": "DevOps Interview (SRE)",
            "level": "Advanced",
            "question": "What design philosophy distinguishes an Automated Self-Healing remediation runbook task loop from a basic passive monitoring dashboard layout design?",
            "options": [
                "Passive dashboards automatically execute command scripts on backend database nodes directly.",
                "Automated remediation runbooks use programmatic alert webhooks to trigger event driven orchestration code (e.g., executing disk purges or pod cycling) to resolve issues instantly without human intervention.",
                "Self-healing loops completely remove network security verification frameworks from all cluster instances platforms.",
                "Passive dashboards require compiling application source files directly inside underlying cloud operating kernels networks parameters."
            ],
            "answer": "Automated remediation runbooks use programmatic alert webhooks to trigger event driven orchestration code (e.g., executing disk purges or pod cycling) to resolve issues instantly without human intervention.",
            "explanation": "Passive dashboard human evaluation interaction pattern layout wait mode configuration. Event driven automated remediation SRE maturity high state target check system, alerting engine direct response code module trigger automated validation action loop clear incident resolution immediate execute framework block option settings profile."
        }
    ]


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
                questions={questions}
                title="DevOps Jobs"
            />

            {/* Questions */}
            <InterviewQuestion
                questions={questions}
                badgeColor={badgeColor}
                title="DevOps Jobs"
            />
        </div>
    );
};

export default DevOpsInterviewQuestions;