import FrontendInterviewHeadder from '@/components/InterviewComponent/FrontendInterviewHeadder';
import InterviewQuestion from '@/components/InterviewComponent/InterviewQuestion';

const HrInterviewPage = () => {

    const questions = [
        {
            "id": 1,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is the primary purpose of a job description?",
            "options": [
                "To outline the specific responsibilities, skills, and requirements for a role.",
                "To calculate the exact monthly salary and bonuses for an employee.",
                "To list all the current employees working in that department.",
                "To track the daily attendance and leaves of the team members."
            ],
            "answer": "To outline the specific responsibilities, skills, and requirements for a role.",
            "explanation": "A job description clearly details what a job entails and what qualifications are needed, helping candidates understand the role and helping HR filter applicants."
        },
        {
            "id": 2,
            "subject": "HR Interview (Employee Relations)",
            "level": "Intermediate",
            "question": "What is the main goal of a progressive discipline policy?",
            "options": [
                "To terminate employees as quickly as possible without legal risks.",
                "To provide a structured process for correcting employee performance or behavior issues through escalating steps.",
                "To automatically increase employee salaries based on performance reviews.",
                "To assign employees to different departments every month."
            ],
            "answer": "To provide a structured process for correcting employee performance or behavior issues through escalating steps.",
            "explanation": "Progressive discipline aims to correct behavior through clear communication and measured steps (warning, suspension, etc.) before resorting to termination."
        },
        {
            "id": 3,
            "subject": "HR Interview (Total Rewards)",
            "level": "Advanced",
            "question": "In compensation management, what does the term 'Compa-Ratio' signify?",
            "options": [
                "The percentage of employees who receive a annual bonus.",
                "The ratio of an employee's salary to the market midpoint for their specific salary grade.",
                "The comparison between the highest and lowest salary in a company.",
                "The total expenditure on employee benefits versus base salaries."
            ],
            "answer": "The ratio of an employee's salary to the market midpoint for their specific salary grade.",
            "explanation": "Compa-ratio is calculated by dividing an employee's salary by the midpoint of the salary range, used to measure how competitive individual pay is against the market."
        },
        {
            "id": 4,
            "subject": "HR Interview (Performance Management)",
            "level": "Beginner",
            "question": "What does the 'S' in a SMART performance goal stand for?",
            "options": [
                "Structured",
                "Specific",
                "Sustainable",
                "Systematic"
            ],
            "answer": "Specific",
            "explanation": "SMART stands for Specific, Measurable, Achievable, Relevant, and Time-bound. A goal must be specific so the employee knows exactly what is expected."
        },
        {
            "id": 5,
            "subject": "HR Interview (Strategic HR)",
            "level": "Advanced",
            "question": "What is the primary focus of 'Succession Planning' in human resources?",
            "options": [
                "Planning the company's annual office party and holiday schedule.",
                "Identifying and developing high-potential employees to fill key leadership roles in the future.",
                "Standardizing the process for onboarding entry-level interns.",
                "Tracking the historical turnover rate of the organization."
            ],
            "answer": "Identifying and developing high-potential employees to fill key leadership roles in the future.",
            "explanation": "Succession planning ensures business continuity by preparing internal talent to smoothly step into critical leadership spots when current leaders leave."
        },
        {
            "id": 6,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Intermediate",
            "question": "What does an 'ATS' stand for in modern recruitment workflows?",
            "options": [
                "Applicant Tracking System",
                "Attendance Tracking Software",
                "Automated Termination System",
                "Annual Training Strategy"
            ],
            "answer": "Applicant Tracking System",
            "explanation": "An ATS is a software application that handles the electronic hiring needs of a company, collecting, sorting, and scanning resumes."
        },
        {
            "id": 7,
            "subject": "HR Interview (Onboarding)",
            "level": "Beginner",
            "question": "Which of the following is the main objective of employee onboarding?",
            "options": [
                "To conduct final salary negotiations with the selected candidate.",
                "To integrate new hires smoothly into the company culture, systems, and their specific roles.",
                "To evaluate if the employee qualifies for an immediate promotion.",
                "To exit employees peacefully at the end of their employment cycle."
            ],
            "answer": "To integrate new hires smoothly into the company culture, systems, and their specific roles.",
            "explanation": "Effective onboarding helps new hires feel welcome, understand their tools, adjust to corporate culture, and reach full productivity faster."
        },
        {
            "id": 8,
            "subject": "HR Interview (Learning & Development)",
            "level": "Intermediate",
            "question": "What is the first step in creating an effective corporate training program?",
            "options": [
                "Booking an external venue and hiring motivational speakers.",
                "Conducting a Training Needs Analysis (TNA) to identify performance gaps.",
                "Distributing final certificates and feedback forms to all employees.",
                "Setting up the budget before assessing what training is required."
            ],
            "answer": "Conducting a Training Needs Analysis (TNA) to identify performance gaps.",
            "explanation": "Before spending time or money, HR must perform a needs analysis to understand what skills the workforce is missing and where training will add value."
        },
        {
            "id": 9,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Advanced",
            "question": "What constitutes 'Constructive Dismissal' in employment relations?",
            "options": [
                "Terminating an employee with a constructive and highly positive recommendation letter.",
                "When an employer creates a hostile work environment, forcing the employee to resign against their will.",
                "Firing an employee due to structural downsizings or global economic shifts.",
                "Mutually agreeing to end an employment contract at the end of its duration."
            ],
            "answer": "When an employer creates a hostile work environment, forcing the employee to resign against their will.",
            "explanation": "Constructive dismissal occurs when an employer significantly breaches the contract terms or makes conditions unbearable, leaving the employee no choice but to quit."
        },
        {
            "id": 10,
            "subject": "HR Interview (Performance Management)",
            "level": "Intermediate",
            "question": "What defines a '360-Degree Performance Appraisal'?",
            "options": [
                "An evaluation conducted solely by the CEO of the organization.",
                "Gathering feedback from supervisors, peers, direct reports, and sometimes external clients, alongside self-appraisal.",
                "Reviewing an employee's performance every single day of the calendar year.",
                "An automated scorecard system that only tracks quantitative sales figures."
            ],
            "answer": "Gathering feedback from supervisors, peers, direct reports, and sometimes external clients, alongside self-appraisal.",
            "explanation": "360-degree feedback offers a comprehensive view of an individual's performance by incorporating perspectives from all around them in the workplace."
        },
        {
            "id": 11,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is 'Sourcing' in the context of recruitment?",
            "options": [
                "The process of identifying, reaching out to, and engaging passive candidates for open roles.",
                "Signing the final offer letter and arranging the physical workspace.",
                "Running a background check on a candidate's criminal records.",
                "Conducting exit interviews for departing company executives."
            ],
            "answer": "The process of identifying, reaching out to, and engaging passive candidates for open roles.",
            "explanation": "Sourcing is proactive recruiting—finding high-quality people who aren't actively looking for jobs but might be a great match for future or current vacancies."
        },
        {
            "id": 12,
            "subject": "HR Interview (HR Analytics)",
            "level": "Intermediate",
            "question": "How is the 'Employee Turnover Rate' typically calculated?",
            "options": [
                "Number of new hires divided by total employees, multiplied by 100.",
                "Number of separations during a period divided by the average number of employees during that period, multiplied by 100.",
                "Total hours worked by employees divided by the total sick leaves taken.",
                "Total revenue of the company divided by the number of current HR professionals."
            ],
            "answer": "Number of separations during a period divided by the average number of employees during that period, multiplied by 100.",
            "explanation": "Turnover rate measures the percentage of workers who leave an organization over a certain timeframe, revealing retention health."
        },
        {
            "id": 13,
            "subject": "HR Interview (Organizational Development)",
            "level": "Advanced",
            "question": "What does corporate 'Culture Fit' mean, and what is its primary pitfall if overemphasized?",
            "options": [
                "Ensuring everyone dresses similarly; the pitfall is higher clothing expenses.",
                "Aligning candidate values with company values; the pitfall is creating an echo chamber that restricts diversity.",
                "Hiring candidates from the same university; the pitfall is excessive internal competition.",
                "Matching employee working hours perfectly; the pitfall is lack of overtime availability."
            ],
            "answer": "Aligning candidate values with company values; the pitfall is creating an echo chamber that restricts diversity.",
            "explanation": "While value alignment matters, prioritizing 'culture fit' too strictly can cause bias, leading companies to hire similar profiles and reject diverse perspectives."
        },
        {
            "id": 14,
            "subject": "HR Interview (Total Rewards)",
            "level": "Beginner",
            "question": "Which of the following is considered a 'Fringe Benefit'?",
            "options": [
                "The core monthly base salary deposited into a bank account.",
                "Company-provided health insurance, gym memberships, or a corporate car.",
                "Government-mandated basic income tax deductions.",
                "Overtime pay earned by working extra hourly shifts."
            ],
            "answer": "Company-provided health insurance, gym memberships, or a corporate car.",
            "explanation": "Fringe benefits are extra perks provided to employees beyond their standard salaries, used to attract and keep top talent."
        },
        {
            "id": 15,
            "subject": "HR Interview (Employee Relations)",
            "level": "Intermediate",
            "question": "What is the primary function of a grievance procedure in a company?",
            "options": [
                "To give managers an official path to demote poor performers.",
                "To provide a clear, formal channel for employees to raise complaints about unfair treatment or workplace issues.",
                "To track the daily attendance logs of industrial factory laborers.",
                "To distribute quarterly bonuses based on positive client reviews."
            ],
            "answer": "To provide a clear, formal channel for employees to raise complaints about unfair treatment or workplace issues.",
            "explanation": "A grievance procedure guarantees that worker concerns are heard fairly and resolved systematically without fear of retaliation."
        },
        {
            "id": 16,
            "subject": "HR Interview (Strategic HR)",
            "level": "Intermediate",
            "question": "What does 'HRBP' stand for?",
            "options": [
                "Human Resources Business Partner",
                "Human Resources Budget Planner",
                "Human Resources Behavior Provider",
                "Human Resources Bureau Policy"
            ],
            "answer": "Human Resources Business Partner",
            "explanation": "An HRBP is an HR professional who works closely with business leaders to align human resource strategies with overall corporate commercial goals."
        },
        {
            "id": 17,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is a 'Structured Interview'?",
            "options": [
                "An informal chat where the interviewer asks whatever comes to mind.",
                "An interview where every candidate is asked the exact same pre-determined questions in the same order.",
                "An interview conducted exclusively over a phone call without video tracking.",
                "A test where candidates assemble physical structures or blocks."
            ],
            "answer": "An interview where every candidate is asked the exact same pre-determined questions in the same order.",
            "explanation": "Structured interviews reduce unconscious hiring bias by offering a uniform baseline to evaluate all candidates fairly."
        },
        {
            "id": 18,
            "subject": "HR Interview (Learning & Development)",
            "level": "Advanced",
            "question": "What does Kirkpatrick's Four-Level Training Evaluation Model assess?",
            "options": [
                "The cost of recruitment, onboarding, training, and exit strategies.",
                "Reaction, Learning, Behavior, and Results.",
                "Technical skills, soft skills, managerial competence, and attendance.",
                "Sourcing, screening, interviewing, and shortlisting speeds."
            ],
            "answer": "Reaction, Learning, Behavior, and Results.",
            "explanation": "Kirkpatrick's framework evaluates how students felt about training (Reaction), what they picked up (Learning), how their performance shifted (Behavior), and business impact (Results)."
        },
        {
            "id": 19,
            "subject": "HR Interview (Employee Relations)",
            "level": "Beginner",
            "question": "What is 'Employee Engagement'?",
            "options": [
                "The marital status of workforce professionals recorded in the database.",
                "The emotional commitment and dedication an employee has toward their organization and its goals.",
                "The total amount of overtime hours an employee logs each week.",
                "The number of corporate meetings an individual attends daily."
            ],
            "answer": "The emotional commitment and dedication an employee has toward their organization and its goals.",
            "explanation": "Engaged employees don't just work for a paycheck; they care about their work and are motivated to help the business succeed."
        },
        {
            "id": 20,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Intermediate",
            "question": "What does 'At-Will Employment' mean?",
            "options": [
                "Employees can only be terminated if they give explicit written consent.",
                "Either the employer or the employee can terminate the employment relationship at any time, for any lawful reason, without notice.",
                "Employees are legally forced to work for the organization for a minimum of 5 years.",
                "Salaries are paid purely based on the personal will of the managing director."
            ],
            "answer": "Either the employer or the employee can terminate the employment relationship at any time, for any lawful reason, without notice.",
            "explanation": "At-will employment offers flexibility to both sides, though employers still cannot terminate someone for discriminatory or illegal reasons."
        },
        {
            "id": 21,
            "subject": "HR Interview (Performance Management)",
            "level": "Intermediate",
            "question": "What is the primary characteristic of the 'BARS' appraisal method?",
            "options": [
                "It ranks employees based strictly on their physical attendance records.",
                "It combines qualitative narrative statements with quantified ratings anchored to specific behavioral examples.",
                "It forces a fixed percentage of employees into a low-performance category.",
                "It uses an informal grading scale managed by external auditors."
            ],
            "answer": "It combines qualitative narrative statements with quantified ratings anchored to specific behavioral examples.",
            "explanation": "BARS (Behaviorally Anchored Rating Scales) provides highly specific, objective criteria for tracking performance, reducing supervisor subjectivity."
        },
        {
            "id": 22,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is an 'Exit Interview'?",
            "options": [
                "An interview held with a new hire on their first working day.",
                "A meeting with a departing employee to understand their reasons for leaving and gather constructive feedback.",
                "A screening call used to eliminate weak resumes before shortlisting.",
                "A security evaluation conducted before clearing building access."
            ],
            "answer": "A meeting with a departing employee to understand their reasons for leaving and gather constructive feedback.",
            "explanation": "Exit interviews help HR uncover organizational issues, management flaws, or culture problems that might be driving talent turnover."
        },
        {
            "id": 23,
            "subject": "HR Interview (Diversity & Inclusion)",
            "level": "Intermediate",
            "question": "What is 'Unconscious Bias' in hiring decisions?",
            "options": [
                "A conscious, written preference to hire specific candidates over others.",
                "Social stereotypes or preferences about certain groups of people that individuals form outside their own conscious awareness.",
                "A software bug inside the ATS that drops candidate records.",
                "A formal requirement mandated by corporate trade unions."
            ],
            "answer": "Social stereotypes or preferences about certain groups of people that individuals form outside their own conscious awareness.",
            "explanation": "Unconscious bias can cause interviewers to favor candidates who share similar backgrounds, undermining true objective evaluation."
        },
        {
            "id": 24,
            "subject": "HR Interview (Strategic HR)",
            "level": "Advanced",
            "question": "What does a 'SWOT Analysis' help HR leaders achieve during strategic planning?",
            "options": [
                "Calculating annual payroll taxes and health insurance premiums.",
                "Evaluating internal Strengths and Weaknesses alongside external Opportunities and Threats.",
                "Standardizing internal technical training models.",
                "Tracking daily operational hours spent on administrative tasks."
            ],
            "answer": "Evaluating internal Strengths and Weaknesses alongside external Opportunities and Threats.",
            "explanation": "HR leaders use SWOT analyses to align their human capital strategies with corporate goals while anticipating talent shortages or market challenges."
        },
        {
            "id": 25,
            "subject": "HR Interview (Total Rewards)",
            "level": "Intermediate",
            "question": "What defines 'Exempt Employees' under standard labor regulations?",
            "options": [
                "Employees who are completely free from following office dress codes.",
                "Employees who are excluded from overtime pay requirements due to their specific job duties and salary levels.",
                "Employees who do not have to undergo annual performance reviews.",
                "Temporary interns who are exempt from paying corporate office taxes."
            ],
            "answer": "Employees who are excluded from overtime pay requirements due to their specific job duties and salary levels.",
            "explanation": "Exempt employees (often salaried professionals or managers) receive a fixed salary and do not qualify for overtime pay, unlike non-exempt hourly staff."
        },
        {
            "id": 26,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is 'Employer Branding'?",
            "options": [
                "The logo and design elements printed on corporate stationery.",
                "A company's reputation and popularity as a workplace, and its value proposition to employees.",
                "The process of registering a business name with local authorities.",
                "The training given to marketing professionals regarding product features."
            ],
            "answer": "A company's reputation and popularity as a workplace, and its value proposition to employees.",
            "explanation": "Employer branding helps a business look like an excellent place to work, making it easier to attract top-tier talent organically."
        },
        {
            "id": 27,
            "subject": "HR Interview (HR Analytics)",
            "level": "Advanced",
            "question": "What does the metric 'Time-to-Hire' measure?",
            "options": [
                "The total time an employee spends working at the company before quitting.",
                "The number of days between when a job candidate enters a pipeline and when they accept the final offer.",
                "The average length of an individual interview round.",
                "The time it takes to onboard a candidate after they arrive on day one."
            ],
            "answer": "The number of days between when a job candidate enters a pipeline and when they accept the final offer.",
            "explanation": "Time-to-hire measures recruitment efficiency and candidate experience quality, showing how fast HR can move talent through the selection stages."
        },
        {
            "id": 28,
            "subject": "HR Interview (Employee Relations)",
            "level": "Intermediate",
            "question": "What is the primary purpose of an 'Employee Handbook'?",
            "options": [
                "To provide a technical operational manual for running office servers.",
                "To communicate company policies, working conditions, culture, and behavioral expectations to all staff members.",
                "To document the personal contact details of corporate board members.",
                "To list the contact numbers of local emergency services."
            ],
            "answer": "To communicate company policies, working conditions, culture, and behavioral expectations to all staff members.",
            "explanation": "An employee handbook sets clear performance and behavioral baselines, protecting both the worker and the organization from misunderstandings."
        },
        {
            "id": 29,
            "subject": "HR Interview (Learning & Development)",
            "level": "Beginner",
            "question": "What is the main advantage of 'On-the-Job Training' (OJT)?",
            "options": [
                "It requires zero commitment or evaluation from supervisors.",
                "It allows employees to learn essential skills in the actual work environment while producing real output.",
                "It completely eliminates the need for any corporate training budgets.",
                "It guarantees that employees will never make operational mistakes."
            ],
            "answer": "It allows employees to learn essential skills in the actual work environment while producing real output.",
            "explanation": "OJT is highly practical, helping workers build confidence and apply skills instantly in their real daily workflows."
        },
        {
            "id": 30,
            "subject": "HR Interview (Performance Management)",
            "level": "Advanced",
            "question": "What is a major risk associated with 'Forced Distribution' ranking systems?",
            "options": [
                "It takes too much time to calculate employee attendance statistics.",
                "It can damage teamwork and collaboration by forcing peers into competition for a limited number of high grades.",
                "It increases corporate tax liabilities significantly.",
                "It automatically gives all employees the exact same high performance review."
            ],
            "answer": "It can damage teamwork and collaboration by forcing peers into competition for a limited number of high grades.",
            "explanation": "Forced distribution (or a 'bell curve' system) forces managers to label some good workers as underperformers, which can hurt morale and collaboration."
        },
        {
            "id": 31,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Intermediate",
            "question": "What defines a 'Behavioral Interview Question'?",
            "options": [
                "A question about hypothetical scenarios the candidate has never encountered.",
                "A question that asks the candidate to describe past experiences to predict future performance.",
                "A test measuring a candidate's mental logic and puzzle-solving skills.",
                "An evaluation regarding an individual's posture and speech speed."
            ],
            "answer": "A question that asks the candidate to describe past experiences to predict future performance.",
            "explanation": "Behavioral questions usually start with 'Tell me about a time when...', operating on the idea that past behavior is the best predictor of future results."
        },
        {
            "id": 32,
            "subject": "HR Interview (Total Rewards)",
            "level": "Beginner",
            "question": "What does 'Base Pay' represent?",
            "options": [
                "The total compensation package including stock options and medical insurance.",
                "The fixed rate of pay an employee receives for performing their job, excluding bonuses or overtime.",
                "The minimum wage set by global international frameworks.",
                "The final payout received during an employee's retirement ceremony."
            ],
            "answer": "The fixed rate of pay an employee receives for performing their job, excluding bonuses or overtime.",
            "explanation": "Base pay is the foundational salary or hourly rate a worker is guaranteed to receive before any variables or bonuses are factored in."
        },
        {
            "id": 33,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Advanced",
            "question": "What is 'Hostile Work Environment Harassment'?",
            "options": [
                "When an employee simply dislikes their current desk placement or work assignments.",
                "When unwelcome conduct or discrimination is severe or pervasive enough to disrupt an individual's performance or cause an intimidating environment.",
                "When a company lowers product prices to beat market competitors.",
                "When an employee is asked to complete standard daily assignments on time."
            ],
            "answer": "When unwelcome conduct or discrimination is severe or pervasive enough to disrupt an individual's performance or cause an intimidating environment.",
            "explanation": "A hostile work environment is a serious compliance breach where pervasive, toxic behaviors interfere with an employee's ability to safely work."
        },
        {
            "id": 34,
            "subject": "HR Interview (Strategic HR)",
            "level": "Intermediate",
            "question": "What is the primary aim of 'Human Resource Planning' (HRP)?",
            "options": [
                "To design corporate marketing campaigns and sales targets.",
                "To ensure that an organization has the right number of people with the right skills at the right time.",
                "To minimize all employee communication to optimize work hours.",
                "To check company balance sheets for financial investment portfolios."
            ],
            "answer": "To ensure that an organization has the right number of people with the right skills at the right time.",
            "explanation": "HRP forecasts future talent needs and matches them against existing internal numbers, preventing sudden labor shortages or overstaffing."
        },
        {
            "id": 35,
            "subject": "HR Interview (HR Analytics)",
            "level": "Beginner",
            "question": "What does a high 'Absenteeism Rate' typically indicate to HR leaders?",
            "options": [
                "Excellent workplace engagement and robust company health.",
                "Potential low morale, poor working conditions, or widespread employee burnout.",
                "An increase in employee productivity and operational capacity.",
                "A technical glitch inside office biometric sensors."
            ],
            "answer": "Potential low morale, poor working conditions, or widespread employee burnout.",
            "explanation": "Frequent unplanned absences usually signal underlying cultural issues, poor management, or severe employee fatigue."
        },
        {
            "id": 36,
            "subject": "HR Interview (Learning & Development)",
            "level": "Intermediate",
            "question": "What is 'Microlearning'?",
            "options": [
                "Training employees to use microscopes and scientific gear.",
                "Delivering educational content in small, focused bites that are easy to absorb and apply quickly.",
                "A long, month-long certification course covering complex corporate rules.",
                "A secret coaching session held for senior leadership teams."
            ],
            "answer": "Delivering educational content in small, focused bites that are easy to absorb and apply quickly.",
            "explanation": "Microlearning provides short, highly targeted modules (like 5-minute videos or quick quizzes) that fit easily into a modern worker's busy routine."
        },
        {
            "id": 37,
            "subject": "HR Interview (Employee Relations)",
            "level": "Advanced",
            "question": "What is 'Collective Bargaining'?",
            "options": [
                "A process where HR buys bulk office supplies at discounted wholesale prices.",
                "Negotiations between an employer and a group of employees (often represented by a union) to determine employment conditions and pay.",
                "A method where individual candidates bid against each other for a job.",
                "The strategy used to calculate seasonal client product discounts."
            ],
            "answer": "Negotiations between an employer and a group of employees (often represented by a union) to determine employment conditions and pay.",
            "explanation": "Collective bargaining balances workplace relationships by allowing employees to negotiate terms together, resulting in a collective employment agreement."
        },
        {
            "id": 38,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is the role of a 'Headhunter' in recruitment?",
            "options": [
                "A specialist who handles employee health, safety, and medical concerns.",
                "An recruitment professional who targets and approaches specific, high-level talent for specialized positions.",
                "An internal compliance auditor who investigates corporate security leaks.",
                "A designer who manages internal branding and corporate office logos."
            ],
            "answer": "An recruitment professional who targets and approaches specific, high-level talent for specialized positions.",
            "explanation": "Headhunters are third-party recruiters or executive search experts focused on finding and pitching roles to elite, passive executives."
        },
        {
            "id": 39,
            "subject": "HR Interview (Total Rewards)",
            "level": "Intermediate",
            "question": "What is the concept of 'Total Rewards'?",
            "options": [
                "Giving all employees financial bonuses every quarter regardless of output.",
                "The complete package of financial pay, health benefits, recognition, growth opportunities, and culture perks an employee receives.",
                "The cumulative evaluation score an individual achieves over a decade.",
                "An award ceremony recognizing the single top employee of the year."
            ],
            "answer": "The complete package of financial pay, health benefits, recognition, growth opportunities, and culture perks an employee receives.",
            "explanation": "Total Rewards looks beyond the base paycheck, combining monetary and non-monetary value to attract and retain talented people."
        },
        {
            "id": 40,
            "subject": "HR Interview (Performance Management)",
            "level": "Beginner",
            "question": "What is a 'Performance Gap'?",
            "options": [
                "The time gap between an employee's resignation and their final departure.",
                "The difference between an employee's actual performance level and the expected company performance standard.",
                "The disparity in compensation levels between junior and senior roles.",
                "The physical space separating managerial desks from baseline staff."
            ],
            "answer": "The difference between an employee's actual performance level and the expected company performance standard.",
            "explanation": "Identifying a performance gap is the first step in creating targeted performance improvement plans or training initiatives."
        },
        {
            "id": 41,
            "subject": "HR Interview (HR Analytics)",
            "level": "Advanced",
            "question": "What does 'Predictive Analytics' help HR departments accomplish?",
            "options": [
                "Recording basic biographical data for current team members.",
                "Using historical data and statistical algorithms to forecast future talent trends, like turnover or hiring needs.",
                "Automating daily check-in and checkout times for remote employees.",
                "Generating standard monthly expenditure sheets for leadership."
            ],
            "answer": "Using historical data and statistical algorithms to forecast future talent trends, like turnover or hiring needs.",
            "explanation": "Predictive analytics allows HR to spot patterns early, anticipating issues like flight risk or future skill gaps before they disrupt operations."
        },
        {
            "id": 42,
            "subject": "HR Interview (Organizational Development)",
            "level": "Intermediate",
            "question": "What is the primary benefit of encouraging 'Cross-Training' within teams?",
            "options": [
                "It allows the company to cut headcount by making employees do two jobs full-time.",
                "It improves operational flexibility and resilience by teaching employees skills from different positions.",
                "It eliminates the need for formal department structures.",
                "It automatically qualifies every team member for an executive promotion."
            ],
            "answer": "It improves operational flexibility and resilience by teaching employees skills from different positions.",
            "explanation": "Cross-training keeps operations running smoothly even if key team members are out sick, on leave, or transition out of the business."
        },
        {
            "id": 43,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Beginner",
            "question": "What is the definition of 'Minimum Wage'?",
            "options": [
                "The lowest pay rate an employer can legally pay an employee for their work.",
                "The average salary earned by entry-level corporate interns.",
                "The lowest compensation level accepted by an executive leader.",
                "The baseline standard cost of running employee engagement programs."
            ],
            "answer": "The lowest pay rate an employer can legally pay an employee for their work.",
            "explanation": "Minimum wage laws set a legally binding pay floor to protect vulnerable workers from exploitation."
        },
        {
            "id": 44,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Intermediate",
            "question": "What is a 'Panel Interview'?",
            "options": [
                "An interview consisting of multiple candidates answering questions simultaneously.",
                "An interview where a single candidate is evaluated by a group of multiple interviewers at the same time.",
                "An automated assessment screen managed by AI screening bots.",
                "A text-based test administered via an online customer help forum."
            ],
            "answer": "An interview where a single candidate is evaluated by a group of multiple interviewers at the same time.",
            "explanation": "Panel interviews bring in different team perspectives at once, saving time and limiting single-interviewer bias."
        },
        {
            "id": 45,
            "subject": "HR Interview (Diversity & Inclusion)",
            "level": "Advanced",
            "question": "What is the difference between 'Diversity' and 'Inclusion' in the workplace?",
            "options": [
                "There is no difference; they are identical concepts used interchangeably.",
                "Diversity means having broad representation of different identities; inclusion means ensuring those individuals feel valued, respected, and integrated.",
                "Diversity focuses on corporate tax breaks; inclusion looks at real estate choices.",
                "Diversity tracks recruitment speeds; inclusion counts the total employee count."
            ],
            "answer": "Diversity means having broad representation of different identities; inclusion means ensuring those individuals feel valued, respected, and integrated.",
            "explanation": "Diversity focuses on the mix of different backgrounds present, while inclusion ensures everyone feels respected, valued, and empowered to contribute."
        },
        {
            "id": 46,
            "subject": "HR Interview (Strategic HR)",
            "level": "Beginner",
            "question": "What does 'HR Management' (HRM) primarily deal with?",
            "options": [
                "Managing financial stock profiles and asset growth pathways.",
                "The recruitment, management, development, and optimization of an organization's people.",
                "Fixing office hardware, computers, and connectivity frameworks.",
                "Designing client-facing advertisements and online brand positions."
            ],
            "answer": "The recruitment, management, development, and optimization of an organization's people.",
            "explanation": "HRM encompasses everything tied to managing human capital throughout the complete employee lifecycle."
        },
        {
            "id": 47,
            "subject": "HR Interview (Performance Management)",
            "level": "Intermediate",
            "question": "What is the primary danger of the 'Halo Effect' during employee appraisals?",
            "options": [
                "An evaluator grades an employee harshly based on a single small mistake.",
                "An evaluator allows one positive trait or recent success to overly influence their entire assessment of the employee's work.",
                "The system crashes due to high traffic volume on evaluation days.",
                "All workers are automatically given average, non-descript marks."
            ],
            "answer": "An evaluator allows one positive trait or recent success to overly influence their entire assessment of the employee's work.",
            "explanation": "The Halo Effect skews ratings, leading managers to overlook serious development needs just because an employee is pleasant or excelled at one high-profile task."
        },
        {
            "id": 48,
            "subject": "HR Interview (Learning & Development)",
            "level": "Advanced",
            "question": "What is the '70-20-10' Learning Model framework?",
            "options": [
                "70% salary, 20% health benefits, and 10% retirement savings.",
                "70% hands-on experience, 20% social learning from peers, and 10% formal training courses.",
                "70% attendance, 20% technical skills, and 10% manager approval ratings.",
                "70% sourcing speed, 20% screening volume, and 10% hiring ratios."
            ],
            "answer": "70% hands-on experience, 20% social learning from peers, and 10% formal training courses.",
            "explanation": "This popular framework highlights that most professional development happens through practical on-the-job experience, supported by peer coaching and formal training."
        },
        {
            "id": 49,
            "subject": "HR Interview (Employee Relations)",
            "level": "Beginner",
            "question": "What does a 'Hostile Work Environment' undermine?",
            "options": [
                "The absolute authority of executive management boards.",
                "Employee safety, psychological well-being, morale, and performance.",
                "The global pricing index of retail client goods.",
                "The maintenance schedules of physical building facilities."
            ],
            "answer": "Employee safety, psychological well-being, morale, and performance.",
            "explanation": "Toxic work environments lead to high stress, poor productivity, and increased legal and turnover risks."
        },
        {
            "id": 50,
            "subject": "HR Interview (Total Rewards)",
            "level": "Intermediate",
            "question": "What is the difference between 'Direct Compensation' and 'Indirect Compensation'?",
            "options": [
                "Direct pay is handled via cash; indirect pay is handled via digital bank apps.",
                "Direct compensation includes salaries, wages, and bonuses; indirect compensation covers benefits, health insurance, and retirement plans.",
                "Direct pay goes to managers; indirect pay goes to temporary interns.",
                "Direct pay covers daytime work; indirect pay covers nighttime shifts."
            ],
            "answer": "Direct compensation includes salaries, wages, and bonuses; indirect compensation covers benefits, health insurance, and retirement plans.",
            "explanation": "Direct compensation is the cash paid directly to workers for labor, while indirect compensation provides non-cash value like health coverage and retirement contributions."
        },
        {
            "id": 51,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Intermediate",
            "question": "What does 'Cost-per-Hire' evaluate?",
            "options": [
                "The lifetime value of an employee's total production.",
                "The total financial investment required to recruit and onboard a single new employee.",
                "The expense of running an employee termination process.",
                "The monthly payroll tax calculated for senior executive staff."
            ],
            "answer": "The total financial investment required to recruit and onboard a single new employee.",
            "explanation": "Cost-per-hire tracks recruiting efficiency by calculating expenses like job board listings, agency fees, and interview hours against total hires."
        },
        {
            "id": 52,
            "subject": "HR Interview (Strategic HR)",
            "level": "Advanced",
            "question": "What is a 'Balanced Scorecard' in corporate strategic management?",
            "options": [
                "A scorecard tracking payroll expenses against company profits.",
                "A tool tracking financial, customer, internal process, and learning/growth performance measures.",
                "A sheet documenting employee daily check-in and checkout data.",
                "An absolute ranking system used to eliminate low performers."
            ],
            "answer": "A tool tracking financial, customer, internal process, and learning/growth performance measures.",
            "explanation": "A Balanced Scorecard offers leaders a comprehensive look at organizational health, linking everyday HR actions directly to long-term strategy."
        },
        {
            "id": 53,
            "subject": "HR Interview (Performance Management)",
            "level": "Beginner",
            "question": "What does 'KPI' stand for?",
            "options": [
                "Key Performance Indicator",
                "Knowledge Progression Index",
                "Key Personnel Interaction",
                "Knowledge Performance Item"
            ],
            "answer": "Key Performance Indicator",
            "explanation": "KPIs are quantifiable measurements used to judge the success of an employee, team, or company in hitting performance targets."
        },
        {
            "id": 54,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Intermediate",
            "question": "What is the purpose of an 'FMLA' framework (Family and Medical Leave Act) where applicable?",
            "options": [
                "To provide permanent retirement solutions to elderly factory workers.",
                "To allow eligible employees to take unpaid, job-protected leave for specified family and medical reasons.",
                "To calculate annual income tax deductions for large families.",
                "To guarantee mandatory monthly salary hikes for family leaders."
            ],
            "answer": "To allow eligible employees to take unpaid, job-protected leave for specified family and medical reasons.",
            "explanation": "FMLA protections allow workers to care for serious health conditions or family needs without fear of losing their jobs."
        },
        {
            "id": 55,
            "subject": "HR Interview (Employee Relations)",
            "level": "Advanced",
            "question": "What is the focus of 'Alternative Dispute Resolution' (ADR) in HR?",
            "options": [
                "Finding alternative software platforms to manage corporate payroll data.",
                "Resolving workplace conflicts outside formal courtroom settings using methods like mediation or arbitration.",
                "Replacing existing managers to resolve internal department friction.",
                "Redesigning employee shift schedules to avoid worker interaction."
            ],
            "answer": "Resolving workplace conflicts outside formal courtroom settings using methods like mediation or arbitration.",
            "explanation": "ADR processes offer cheaper, faster, and more collaborative ways to settle employee disputes compared to formal lawsuits."
        },
        {
            "id": 56,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is a 'Resume Screen'?",
            "options": [
                "A physical divider placed between the interviewer and applicant.",
                "The initial review of applications to filter out candidates who do not meet baseline job qualifications.",
                "A background check confirming academic history from universities.",
                "An automated onboarding video shown to newly hired employees."
            ],
            "answer": "The initial review of applications to filter out candidates who do not meet baseline job qualifications.",
            "explanation": "Screening ensures recruiters spend their interviewing time efficiently by talking only to candidates who hit core role requirements."
        },
        {
            "id": 57,
            "subject": "HR Interview (HR Analytics)",
            "level": "Intermediate",
            "question": "What does the metric 'Revenue per Employee' highlight?",
            "options": [
                "The total base compensation paid to an individual staff member.",
                "The company's total revenue divided by current full-time headcount, indicating general workforce productivity.",
                "The money spent on recruitment campaigns over a business quarter.",
                "The individual sales figures logged by junior account managers."
            ],
            "answer": "The company's total revenue divided by current full-time headcount, indicating general workforce productivity.",
            "explanation": "Revenue per employee measures baseline workforce efficiency, showing how effectively the business leverages its talent to drive revenue."
        },
        {
            "id": 58,
            "subject": "HR Interview (Learning & Development)",
            "level": "Beginner",
            "question": "What defines 'Mentorship' in professional development?",
            "options": [
                "A formal disciplinary process managed by compliance officers.",
                "A relationship where a more experienced professional guides and shares insights with a less experienced colleague.",
                "An automated training module delivered through a web learning portal.",
                "A mandatory review panel held before terminating low performers."
            ],
            "answer": "A relationship where a more experienced professional guides and shares insights with a less experienced colleague.",
            "explanation": "Mentorship offers personal, informal support that helps less-experienced employees navigate corporate dynamics and grow their careers."
        },
        {
            "id": 59,
            "subject": "HR Interview (Organizational Development)",
            "level": "Advanced",
            "question": "What is 'Change Management' in HR practice?",
            "options": [
                "Updating shift schedules and changing building keycards.",
                "A structured framework for preparing, supporting, and helping individuals and teams adopt organizational transitions.",
                "The policy used to change financial banking partners.",
                "Replacing underperforming managers with external expert consultancies."
            ],
            "answer": "A structured framework for preparing, supporting, and helping individuals and teams adopt organizational transitions.",
            "explanation": "Change management handles the human side of corporate shifts, reducing anxiety and resistance while boosting adoption rates for new tools or structures."
        },
        {
            "id": 60,
            "subject": "HR Interview (Total Rewards)",
            "level": "Intermediate",
            "question": "What is a 'Job Evaluation'?",
            "options": [
                "A performance review analyzing an individual employee's output quality.",
                "A systematic process to determine the relative value or worth of a role within an organization to set fair pay structures.",
                "A questionnaire checking candidate comfort levels after an interview.",
                "A background check reviewing past employment histories."
            ],
            "answer": "A systematic process to determine the relative value or worth of a role within an organization to set fair pay structures.",
            "explanation": "Job evaluation focuses on the role itself, not the person in it, ensuring internal equity by setting appropriate salary ranges for different levels of responsibility."
        },
        {
            "id": 61,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Beginner",
            "question": "What is 'Workplace Discrimination'?",
            "options": [
                "Evaluating candidates based purely on their professional merits and skills.",
                "Unfair treatment of employees or applicants based on protected characteristics like race, gender, age, or religion.",
                "Assigning difficult projects to highly competent team members.",
                "Standardizing corporate shift rules across global department hubs."
            ],
            "answer": "Unfair treatment of employees or applicants based on protected characteristics like race, gender, age, or religion.",
            "explanation": "Workplace discrimination is illegal and toxic, violating core labor standards and creating massive legal vulnerabilities for organizations."
        },
        {
            "id": 62,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Intermediate",
            "question": "What is the primary objective of a 'Realistic Job Preview' (RJP)?",
            "options": [
                "To highlight only the most positive, high-paying elements of a position.",
                "To provide candidates with an honest, balanced look at both the highlights and challenges of a job.",
                "To run automated skills tests before shortlisting candidate applications.",
                "To show candidates the physical office facilities and desk setups."
            ],
            "answer": "To provide candidates with an honest, balanced look at both the highlights and challenges of a job.",
            "explanation": "RJPs set accurate expectations, reducing early turnover by filtering out candidates who aren't comfortable with the role's daily realities."
        },
        {
            "id": 63,
            "subject": "HR Interview (Employee Relations)",
            "level": "Advanced",
            "question": "What does 'EAP' stand for, and what is its corporate function?",
            "options": [
                "Employee Assistance Program; provides confidential support for personal, emotional, or mental health issues.",
                "Employee Attendance Portal; records daily digital login and logout events.",
                "Executive Action Plan; outlines monthly financial sales objectives.",
                "Employment Application Process; routes incoming candidate applications."
            ],
            "answer": "Employee Assistance Program; provides confidential support for personal, emotional, or mental health issues.",
            "explanation": "An EAP provides professional counseling and support to help employees manage personal challenges, boosting overall wellness and productivity."
        },
        {
            "id": 64,
            "subject": "HR Interview (Performance Management)",
            "level": "Beginner",
            "question": "What is a 'Self-Appraisal'?",
            "options": [
                "An evaluation of a manager conducted by external consultants.",
                "A process where an employee reviews and documents their own performance before meeting with a supervisor.",
                "An automated salary calculator built into modern HR software.",
                "A background audit reviewing personal credit track records."
            ],
            "answer": "A process where an employee reviews and documents their own performance before meeting with a supervisor.",
            "explanation": "Self-appraisals encourage personal accountability and give employees an active voice in their own career growth discussions."
        },
        {
            "id": 65,
            "subject": "HR Interview (Strategic HR)",
            "level": "Intermediate",
            "question": "What does 'Voluntary Turnover' mean?",
            "options": [
                "When a company lays off staff members due to sudden branch closures.",
                "When employees choose to leave the organization on their own accord (e.g., for a new job or retirement).",
                "When an underperforming employee is dismissed for misconduct.",
                "When workers rotate between internal departments every month."
            ],
            "answer": "When employees choose to leave the organization on their own accord (e.g., for a new job or retirement).",
            "explanation": "Voluntary turnover happens when employees resign by choice. Tracking this closely helps HR spot potential management or retention issues."
        },
        {
            "id": 66,
            "subject": "HR Interview (Learning & Development)",
            "level": "Advanced",
            "question": "What is 'LMS' in corporate training strategy?",
            "options": [
                "Labor Management Standard",
                "Learning Management System",
                "Leadership Measurement Scale",
                "Legal Monitoring Software"
            ],
            "answer": "Learning Management System",
            "explanation": "An LMS is a software platform used to deliver, track, and manage corporate training programs and educational pathways."
        },
        {
            "id": 67,
            "subject": "HR Interview (Total Rewards)",
            "level": "Beginner",
            "question": "What defines 'Variable Pay'?",
            "options": [
                "The static base paycheck that never changes month-to-month.",
                "Compensation tied directly to performance, like commissions, bonuses, or profit-sharing rewards.",
                "Government tax subtractions that vary by salary brackets.",
                "The processing fee deducted by banking systems for transactions."
            ],
            "answer": "Compensation tied directly to performance, like commissions, bonuses, or profit-sharing rewards.",
            "explanation": "Variable pay gives employees a direct financial stake in hits or wins, motivating teams to exceed expectations."
        },
        {
            "id": 68,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Intermediate",
            "question": "What is a 'Passive Candidate'?",
            "options": [
                "A candidate who answers interview questions slowly or lacks enthusiasm.",
                "An individual who is currently employed and not actively job hunting, but open to the right offer.",
                "An applicant who fails to submit required employment references.",
                "A new hire who prefers working completely alone without team interaction."
            ],
            "answer": "An individual who is currently employed and not actively job hunting, but open to the right offer.",
            "explanation": "Passive candidates are often high performers. Reaching them requires creative sourcing, as they don't browse active job boards."
        },
        {
            "id": 69,
            "subject": "HR Interview (HR Analytics)",
            "level": "Advanced",
            "question": "What does the metric 'Offer Acceptance Rate' (OAR) help measure?",
            "options": [
                "The speed at which hiring managers create job descriptions.",
                "The percentage of extended job offers that are accepted by selected candidates.",
                "The budget efficiency of the recruitment department.",
                "The ratio of internal employee transfers to external hires."
            ],
            "answer": "The percentage of extended job offers that are accepted by selected candidates.",
            "explanation": "A low OAR suggests that compensation targets are uncompetitive, job details are unclear, or the candidate experience is turning talent away."
        },
        {
            "id": 70,
            "subject": "HR Interview (Employee Relations)",
            "level": "Beginner",
            "question": "What is 'Workplace Burnout'?",
            "options": [
                "A technical hazard caused by electronic server damage.",
                "A state of physical, emotional, and mental exhaustion caused by excessive and prolonged workplace stress.",
                "The dynamic feeling of completing projects ahead of schedule.",
                "A formal disciplinary step used to manage poor performance."
            ],
            "answer": "A state of physical, emotional, and mental exhaustion caused by excessive and prolonged workplace stress.",
            "explanation": "Burnout hits productivity and spikes turnover. HR teams must design wellness strategies and monitor workloads to protect staff health."
        },
        {
            "id": 71,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Intermediate",
            "question": "What does 'Whistleblower Protection' safeguard?",
            "options": [
                "Employees who report illegal, unethical, or unsafe practices within their company from retaliation.",
                "Managers who terminate underperforming workers without formal notice.",
                "External clients who terminate product purchases mid-contract.",
                "Companies from being audited by local government departments."
            ],
            "answer": "Employees who report illegal, unethical, or unsafe practices within their company from retaliation.",
            "explanation": "Whistleblower rules provide a safe foundation for employees to flag internal wrongdoing, supporting compliance and business ethics."
        },
        {
            "id": 72,
            "subject": "HR Interview (Performance Management)",
            "level": "Advanced",
            "question": "What is the primary feature of 'OKR' frameworks?",
            "options": [
                "Objective and Key Results; links ambitious goals directly to measurable operational outputs.",
                "Office Knowledge Review; a standard test checking software literacy.",
                "Operational Key Retention; a calculation measuring baseline turnover speeds.",
                "Organization Key Ratios; a spreadsheet detailing financial liabilities."
            ],
            "answer": "Objective and Key Results; links ambitious goals directly to measurable operational outputs.",
            "explanation": "OKRs keep company, team, and personal goals pulling in the same direction, driving transparency and focus across fast-moving businesses."
        },
        {
            "id": 73,
            "subject": "HR Interview (Learning & Development)",
            "level": "Beginner",
            "question": "What is the focus of 'Soft Skills' training?",
            "options": [
                "Teaching complex coding languages and engineering operations.",
                "Developing interpersonal abilities like communication, teamwork, leadership, and emotional intelligence.",
                "Understanding corporate asset tax filing procedures.",
                "Learning how to use and service delicate office machinery."
            ],
            "answer": "Developing interpersonal abilities like communication, teamwork, leadership, and emotional intelligence.",
            "explanation": "Soft skills are vital for strong collaboration and leadership, making them a major focus for corporate talent development."
        },
        {
            "id": 74,
            "subject": "HR Interview (Strategic HR)",
            "level": "Intermediate",
            "question": "What defines 'Involuntary Turnover'?",
            "options": [
                "When high-performing leaders resign to launch their own firms.",
                "When an employer terminates an employee due to poor performance, misconduct, or corporate restructuring.",
                "When workers take extended medical or paternity leave options.",
                "When an employee transfers voluntarily to an overseas office branch."
            ],
            "answer": "When an employer terminates an employee due to poor performance, misconduct, or corporate restructuring.",
            "explanation": "Involuntary turnover covers terminations initiated by the company. High spikes here can signal hiring process issues or structural instability."
        },
        {
            "id": 75,
            "subject": "HR Interview (Total Rewards)",
            "level": "Advanced",
            "question": "What does a 'Pay Equity Audit' evaluate?",
            "options": [
                "The difference between total company revenue and payroll budgets.",
                "Whether employees performing similar work are paid fairly and free from biases like gender, race, or age gaps.",
                "The efficiency of digital transaction tools used to process payroll.",
                "The tax reductions claimed by executive board directors."
            ],
            "answer": "Whether employees performing similar work are paid fairly and free from biases like gender, race, or age gaps.",
            "explanation": "Pay equity audits help organizations uncover and fix unfair wage gaps, ensuring legal compliance and building a culture of trust."
        },
        {
            "id": 76,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is an 'Employee Referral Program'?",
            "options": [
                "An internal disciplinary framework tracking worker misconduct cases.",
                "A recruiting strategy where current staff recommend qualified candidates from their networks for open roles.",
                "An automated file routing system used to archive old resumes.",
                "A training session teaching employees how to speak to clients."
            ],
            "answer": "A recruiting strategy where current staff recommend qualified candidates from their networks for open roles.",
            "explanation": "Referrals often yield high-quality hires quickly and cost-effectively, while boosting existing employee engagement through referral bonuses."
        },
        {
            "id": 77,
            "subject": "HR Interview (Employee Relations)",
            "level": "Intermediate",
            "question": "What defines 'Work-Life Balance' in HR management?",
            "options": [
                "Ensuring workers spend exactly equal hours at the desk and at home every single day.",
                "The comfortable equilibrium between an employee's professional priorities and their personal lifestyle commitments.",
                "Forcing employees to complete all work without any personal desk distractions.",
                "Calculating individual production output against monthly salaries."
            ],
            "answer": "The comfortable equilibrium between an employee's professional priorities and their personal lifestyle commitments.",
            "explanation": "Supporting work-life balance through flexible hours or hybrid models cuts down stress, prevents burnout, and drives long-term retention."
        },
        {
            "id": 78,
            "subject": "HR Interview (Organizational Development)",
            "level": "Advanced",
            "question": "What is 'Attrition' in human resource dynamics?",
            "options": [
                "The immediate termination of underperforming teams due to behavioral incidents.",
                "The reduction of staff size over time through natural resignations, retirements, or deaths, without immediately refilling the positions.",
                "The processing speed tracking resume intake within an ATS platform.",
                "The structural layout separating team divisions inside building facilities."
            ],
            "answer": "The reduction of staff size over time through natural resignations, retirements, or deaths, without immediately refilling the positions.",
            "explanation": "Attrition allows companies to naturally scale down headcount and trim costs without resorting to painful active layoffs."
        },
        {
            "id": 79,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Beginner",
            "question": "What is 'Severance Pay'?",
            "options": [
                "The initial sign-on bonus paid to an elite candidate upon arrival.",
                "Compensation provided to an employee whose employment is terminated through no fault of their own (e.g., during layoffs).",
                "An optional holiday payment distributed during peak corporate seasons.",
                "The daily transport allowance given to external sales executives."
            ],
            "answer": "Compensation provided to an employee whose employment is terminated through no fault of their own (e.g., during layoffs).",
            "explanation": "Severance pay helps cushion the transition for departing staff, often packaged alongside extended health perks and career placement help."
        },
        {
            "id": 80,
            "subject": "HR Interview (Performance Management)",
            "level": "Intermediate",
            "question": "What is a 'Performance Improvement Plan' (PIP)?",
            "options": [
                "A strategy used to fast-track high-performing workers for promotion.",
                "A structured tool detailing specific goals and support designed to help an underperforming employee meet baseline company standards.",
                "A yearly bonus distribution schedule managed by financial teams.",
                "An internal survey collecting employee feedback regarding office facilities."
            ],
            "answer": "A structured tool detailing specific goals and support designed to help an underperforming employee meet baseline company standards.",
            "explanation": "A PIP gives struggling workers clear guideposts and timelines to turn their performance around before the company considers termination."
        },
        {
            "id": 81,
            "subject": "HR Interview (Learning & Development)",
            "level": "Intermediate",
            "question": "What is 'Upskilling'?",
            "options": [
                "Moving an employee to a different physical desk location.",
                "Providing training to help employees learn new skills to adapt to changing technologies or role demands.",
                "The process of cutting down employee training durations.",
                "Evaluating baseline typing speeds during initial candidate screening."
            ],
            "answer": "Providing training to help employees learn new skills to adapt to changing technologies or role demands.",
            "explanation": "Upskilling keeps the workforce agile, filling talent gaps internally as technology evolution reshapes everyday roles."
        },
        {
            "id": 82,
            "subject": "HR Interview (Strategic HR)",
            "level": "Advanced",
            "question": "What does 'Human Capital' mean?",
            "options": [
                "The total financial cash reserves held in a corporate bank account.",
                "The collective skills, knowledge, experience, capability, and health of an organization's employees that bring economic value.",
                "The real estate value of corporate building properties.",
                "The physical machinery and technology hardware used across factory floors."
            ],
            "answer": "The collective skills, knowledge, experience, capability, and health of an organization's employees that bring economic value.",
            "explanation": "Viewing workers as 'human capital' underscores that people are valuable assets to invest in, rather than just ongoing overhead costs."
        },
        {
            "id": 83,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is an 'Offer Letter'?",
            "options": [
                "A formal written document inviting a candidate to join the company, outlining key employment terms and salary.",
                "A marketing flyer sent to external corporate product clients.",
                "A complaint letter filed by employee unions regarding shift metrics.",
                "A declaration sheet detailing internal health policy guidelines."
            ],
            "answer": "A formal written document inviting a candidate to join the company, outlining key employment terms and salary.",
            "explanation": "An offer letter officially seals the deal with a candidate, mapping out pay rates, start dates, and core conditions before the final contract."
        },
        {
            "id": 84,
            "subject": "HR Interview (Employee Relations)",
            "level": "Intermediate",
            "question": "What defines 'Absenteeism' in workplace metrics?",
            "options": [
                "Attending corporate training sessions via remote online links.",
                "A chronic, habitual pattern of unplanned absences from work without valid reason.",
                "Taking planned annual vacations approved months in advance.",
                "Leaving the desk briefly for standard afternoon lunch breaks."
            ],
            "answer": "A chronic, habitual pattern of unplanned absences from work without valid reason.",
            "explanation": "Habitual absenteeism harms team workflows and usually points to deeper issues like disengagement, poor culture, or health problems."
        },
        {
            "id": 85,
            "subject": "HR Interview (HR Analytics)",
            "level": "Advanced",
            "question": "What is the primary utility of an 'Employee Net Promoter Score' (eNPS)?",
            "options": [
                "Calculating individual sales volumes per fiscal quarter.",
                "Measuring employee loyalty, satisfaction, and likelihood to recommend the company as an excellent workplace.",
                "Tracking absolute biometric login and logout times daily.",
                "Auditing total production costs against raw materials used."
            ],
            "answer": "Measuring employee loyalty, satisfaction, and likelihood to recommend the company as an excellent workplace.",
            "explanation": "eNPS provides a quick, pulse check on organizational culture health by asking workers how likely they are to recommend their employer to others."
        },
        {
            "id": 86,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Beginner",
            "question": "What does 'Overtime' refer to?",
            "options": [
                "Arriving early to work to read personal news items.",
                "Hours worked by an employee beyond their standard, legally defined weekly limits, usually compensated at higher rates.",
                "The time gap spent traveling between home and office facilities.",
                "Taking extra break periods during standard industrial shifts."
            ],
            "answer": "Hours worked by an employee beyond their standard, legally defined weekly limits, usually compensated at higher rates.",
            "explanation": "Overtime rules protect hourly workers from overwork by mandating premium pay rates for extra hours put in."
        },
        {
            "id": 87,
            "subject": "HR Interview (Performance Management)",
            "level": "Intermediate",
            "question": "What is the primary drawback of the 'Recency Bias' in evaluations?",
            "options": [
                "Managers penalize old historical errors while ignoring recent wins.",
                "An evaluator focuses heavily on an employee's most recent behavior over the last few weeks, ignoring performance across the full year.",
                "The system automatically assigns high scores to newly hired staff.",
                "Reviews take too long because supervisors pull records from decades ago."
            ],
            "answer": "An evaluator focuses heavily on an employee's most recent behavior over the last few weeks, ignoring performance across the full year.",
            "explanation": "Recency bias skews reviews, leading managers to over-reward a last-minute push or over-punish a recent stumble while overlooking months of steady work."
        },
        {
            "id": 88,
            "subject": "HR Interview (Learning & Development)",
            "level": "Advanced",
            "question": "What is 'Reskilling'?",
            "options": [
                "Reviewing identical training content multiple times to ensure storage.",
                "Training an employee with entirely new skills to transition them into a completely different job function or role.",
                "Testing baseline literacy skills during initial screening phases.",
                "Cutting training budgets by using open-source web learning platforms."
            ],
            "answer": "Training an employee with entirely new skills to transition them into a completely different job function or role.",
            "explanation": "Reskilling helps businesses save institutional knowledge by retraining loyal workers for new internal paths when their old jobs become obsolete."
        },
        {
            "id": 89,
            "subject": "HR Interview (Total Rewards)",
            "level": "Beginner",
            "question": "What is a 'Pay Grade'?",
            "options": [
                "The academic evaluation rating scored by corporate interns.",
                "A defined salary range step associated with roles carrying similar responsibilities or values.",
                "The transactional priority rank handled by processing banks.",
                "The ranking system sorting executive board members."
            ],
            "answer": "A defined salary range step associated with roles carrying similar responsibilities or values.",
            "explanation": "Pay grades simplify compensation structures, ensuring fair and transparent base salary ranges for positions with similar scope."
        },
        {
            "id": 90,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Intermediate",
            "question": "What is the function of a 'Job Fair'?",
            "options": [
                "An internal compliance court reviewing employee bias incidents.",
                "An event where employers, recruiters, and schools meet with job seekers to share career options and screen candidates.",
                "A holiday market organized for employee family networks.",
                "A pricing scale tracking standard market recruitment costs."
            ],
            "answer": "An event where employers, recruiters, and schools meet with job seekers to share career options and screen candidates.",
            "explanation": "Job fairs give HR teams a massive networking platform to build high-volume talent pipelines and boost brand presence face-to-face."
        },
        {
            "id": 91,
            "subject": "HR Interview (Employee Relations)",
            "level": "Advanced",
            "question": "What is 'Ombudsman' in an organization?",
            "options": [
                "A dedicated hardware engineer fixing security server issues.",
                "An independent, neutral official appointed to investigate and resolve workplace complaints and disputes impartially.",
                "The absolute top executive leader managing financial assets.",
                "A legal representative sent by trade unions to demand salary hikes."
            ],
            "answer": "An independent, neutral official appointed to investigate and resolve workplace complaints and disputes impartially.",
            "explanation": "Ombudsmen provide a safe, confidential outlet for workers to report issues, helping resolve sensitive disputes before they escalate to legal friction."
        },
        {
            "id": 92,
            "subject": "HR Interview (Organizational Development)",
            "level": "Beginner",
            "question": "What is 'Company Culture'?",
            "options": [
                "The geographic location and layout design of corporate office properties.",
                "The shared values, beliefs, behaviors, and environment that define how people interact and work within an organization.",
                "The specific products and commercial items sold to retail buyers.",
                "The financial profit levels logged across annual balance sheets."
            ],
            "answer": "The shared values, beliefs, behaviors, and environment that define how people interact and work within an organization.",
            "explanation": "Company culture sets the tone for daily operations, shaping morale, teamwork, and how employees treat both each other and external clients."
        },
        {
            "id": 93,
            "subject": "HR Interview (Labor Law & Compliance)",
            "level": "Intermediate",
            "question": "What does 'EEO' stand for?",
            "options": [
                "Equal Employment Opportunity",
                "Employee Evaluation Office",
                "Executive Operational Objective",
                "Employment Equity Organization"
            ],
            "answer": "Equal Employment Opportunity",
            "explanation": "EEO laws protect workers from job-related discrimination, ensuring everyone gets a fair shot at hiring, promotions, and pay regardless of personal traits."
        },
        {
            "id": 94,
            "subject": "HR Interview (Performance Management)",
            "level": "Advanced",
            "question": "What constitutes the 'Leniency Error' in performance tracking?",
            "options": [
                "A software bug that automatically deletes manager feedback records.",
                "A supervisor's tendency to rate all employees consistently higher than their actual performance justifies.",
                "Giving new team members extra long deadlines during onboarding.",
                "Ignoring late arrivals if the worker delivers high product volumes."
            ],
            "answer": "A supervisor's tendency to rate all employees consistently higher than their actual performance justifies.",
            "explanation": "Leniency errors mask real performance gaps, making it difficult to identify development needs or distinguish your true top performers."
        },
        {
            "id": 95,
            "subject": "HR Interview (Learning & Development)",
            "level": "Beginner",
            "question": "What is a 'Skill Assessment'?",
            "options": [
                "An interview evaluating an individual's requested target salary range.",
                "A test or evaluation used to measure a candidate's or employee's specific technical competencies and capabilities.",
                "A survey reviewing customer comfort levels after purchase transactions.",
                "A biometric test tracking health metrics for insurance filings."
            ],
            "answer": "A test or evaluation used to measure a candidate's or employee's specific technical competencies and capabilities.",
            "explanation": "Skill assessments replace guesswork with data, giving HR an objective baseline to confirm an applicant can actually handle the job's technical demands."
        },
        {
            "id": 96,
            "subject": "HR Interview (Strategic HR)",
            "level": "Intermediate",
            "question": "What is the primary function of 'Workforce Analytics'?",
            "options": [
                "Calculating day-to-day office utility bills and space costs.",
                "Using employee data to analyze, optimize, and improve human resource management choices and business impacts.",
                "Managing social media updates for candidate branding profiles.",
                "Automating communication flows between managers and clients."
            ],
            "answer": "Using employee data to analyze, optimize, and improve human resource management choices and business impacts.",
            "explanation": "Workforce analytics turns basic people metrics into actionable insights, helping leaders make smart, data-driven planning and retention choices."
        },
        {
            "id": 97,
            "subject": "HR Interview (Total Rewards)",
            "level": "Advanced",
            "question": "What is 'Deferred Compensation'?",
            "options": [
                "Delaying salary payments because the firm faces sudden cash shortages.",
                "An arrangement where a portion of an employee's income is paid out at a later date, such as retirement or pension plans.",
                "Giving entry-level workers bonuses only after their second year.",
                "An automated tax penalty charged by local compliance boards."
            ],
            "answer": "An arrangement where a portion of an employee's income is paid out at a later date, such as retirement or pension plans.",
            "explanation": "Deferred compensation models (like stock plans or pensions) offer valuable tax advantages while giving key talent a major incentive to stay long-term."
        },
        {
            "id": 98,
            "subject": "HR Interview (Talent Acquisition)",
            "level": "Beginner",
            "question": "What is a 'Background Check'?",
            "options": [
                "An inspection evaluating the physical layout of an interview venue.",
                "The process of verifying a candidate's commercial background, legal records, employment history, and education.",
                "A psychological profile test managed by software bots.",
                "Checking an employee's daily desk attendance statistics."
            ],
            "answer": "The process of verifying a candidate's commercial background, legal records, employment history, and education.",
            "explanation": "Background checks confirm that candidates have been honest about their qualifications, protecting the firm from safety and compliance risks."
        },
        {
            "id": 99,
            "subject": "HR Interview (Employee Relations)",
            "level": "Intermediate",
            "question": "What is the primary utility of 'Peer-to-Peer Recognition' systems?",
            "options": [
                "Allowing colleagues to evaluate each other's technical attendance logs.",
                "A framework where employees can officially praise and highlight the great work of their colleagues, boosting morale.",
                "Forcing teams to rank their peers to determine budget cuts.",
                "Allowing workers to vote on department management replacements."
            ],
            "answer": "A framework where employees can officially praise and highlight the great work of their colleagues, boosting morale.",
            "explanation": "Peer recognition helps build a supportive culture, driving engagement by making everyday contributions visible outside standard manager channels."
        },
        {
            "id": 100,
            "subject": "HR Interview (Strategic HR)",
            "level": "Advanced",
            "question": "What is the core definition of 'Human Resource Metrics'?",
            "options": [
                "The physical dimension benchmarks tracking desk furniture sizes.",
                "Key tracking variables used to measure the efficiency and effectiveness of HR policies and talent management performance.",
                "The simple headcount list detailing current department numbers.",
                "The list tracking client product delivery durations."
            ],
            "answer": "Key tracking variables used to measure the efficiency and effectiveness of HR policies and talent management performance.",
            "explanation": "HR metrics (like turnover rate or cost-per-hire) turn people management into concrete data, proving the financial and operational impact of HR programs."
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
                title="Hr Jobs"
            />

            {/* Questions */}
            <InterviewQuestion
                questions={questions}
                badgeColor={badgeColor}
                title="Hr"
            />
        </div>
    );
};

export default HrInterviewPage;