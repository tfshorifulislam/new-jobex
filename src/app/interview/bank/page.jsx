import FrontendInterviewHeadder from '@/components/InterviewComponent/FrontendInterviewHeadder';
import InterviewQuestion from '@/components/InterviewComponent/InterviewQuestion';
import React from 'react';

const BankIntervirePage = () => {

    const questions = [
        {
            "id": 1,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is the full form of 'ATM'?",
            "options": ["Automated Teller Machine", "Automatic Transaction Mechanism", "All Time Money", "Automated Transfer Mode"],
            "answer": "Automated Teller Machine",
            "explanation": "ATM-এর পূর্ণরূপ হলো Automated Teller Machine, যা গ্রাহকদের ব্যাংকের শাখায় না গিয়েই স্বয়ংক্রিয়ভাবে টাকা তোলা বা জমা দেওয়ার সুবিধা দেয়।"
        },
        {
            "id": 2,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is a 'Bouncing Cheque'?",
            "options": ["A cheque made of plastic", "A cheque that is processed instantly", "A cheque rejected by the bank due to insufficient funds in the account", "A cheque signed by two different people"],
            "answer": "A cheque rejected by the bank due to insufficient funds in the account",
            "explanation": "অ্যাকাউন্টে পর্যাপ্ত টাকা না থাকলে ব্যাংক যখন কোনো চেকে পেমেন্ট করতে অস্বীকৃতি জানায়, তখন তাকে চেক বাউন্স বা ডিজনার হওয়া বলে।"
        },
        {
            "id": 3,
            "subject": "Bank Interview (Financial Concepts)",
            "level": "Intermediate",
            "question": "What is the difference between Inflation and Deflation?",
            "options": ["Inflation increases currency value; Deflation decreases it.", "Inflation means prices rise; Deflation means general price levels decrease.", "They both mean the same thing in economy.", "Inflation is controlled by government; Deflation by private sectors."],
            "answer": "Inflation means prices rise; Deflation means general price levels decrease.",
            "explanation": "ইনফ্লেশন (মুদ্রাস্ফীতি) হলে পণ্যের দাম বাড়ে ও টাকার মান কমে। ডিফ্লেশন (মুদ্রাসঙ্কোচন) হলে পণ্যের দাম কমে ও টাকার মান বাড়ে।"
        },
        {
            "id": 4,
            "subject": "Bank Interview (Central Banking)",
            "level": "Intermediate",
            "question": "What is 'Cash Reserve Ratio' (CRR)?",
            "options": ["The percentage of deposits that commercial banks must keep with the Central Bank in cash form.", "The money kept in the bank's own vault.", "The total profit kept for shareholders.", "The ratio of agricultural loans given by a bank."],
            "answer": "The percentage of deposits that commercial banks must keep with the Central Bank in cash form.",
            "explanation": "CRR হলো বাণিজ্যিক ব্যাংকের মোট আমানতের সেই নির্দিষ্ট অংশ, যা বাধ্যতামূলকভাবে কেন্দ্রীয় ব্যাংকে নগদ টাকা হিসেবে জমা রাখতে হয়।"
        },
        {
            "id": 5,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What does 'Operational Risk' include in banking?",
            "options": ["Risk of loss due to stock market crashes.", "Risk of loss resulting from inadequate or failed internal processes, people, systems, or external events.", "Risk of customers not paying back their loans.", "Risk of changes in international exchange rates."],
            "answer": "Risk of loss resulting from inadequate or failed internal processes, people, systems, or external events.",
            "explanation": "অপারেশনাল রিস্ক বলতে ব্যাংকের অভ্যন্তরীণ অব্যবস্থাপনা, মানবীয় ভুল, সিস্টেমের ত্রুটি (যেমন হ্যাকিং বা সার্ভার ডাউন) বা প্রাকৃতিক দুর্যোগের কারণে সৃষ্ট ক্ষতিকে বোঝায়।"
        },
        {
            "id": 6,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is a 'Demand Draft' (DD)?",
            "options": ["A type of loan request", "A financial instrument issued by a bank directing another bank/branch to pay a certain sum to a specified person", "A regular savings account paper", "An online crypto transaction link"],
            "answer": "A financial instrument issued by a bank directing another bank/branch to pay a certain sum to a specified person",
            "explanation": "ডিমান্ড ড্রাফট বা ডিডি হলো ব্যাংক দ্বারা ইস্যুকৃত একটি নিরাপদ পেমেন্ট মাধ্যম, যা চেক বাউন্স হওয়ার ঝুঁকি দূর করে।"
        },
        {
            "id": 7,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Intermediate",
            "question": "What does 'EFT' stand for?",
            "options": ["Electronic Funds Transfer", "Easy Financial Transaction", "Emergency Fund Tracker", "Efficient Fund Term"],
            "answer": "Electronic Funds Transfer",
            "explanation": "EFT-এর পূর্ণরূপ হলো Electronic Funds Transfer, যার মাধ্যমে এক ব্যাংক অ্যাকাউন্ট থেকে অন্য অ্যাকাউন্টে ডিজিটাল উপায়ে টাকা পাঠানো হয়।"
        },
        {
            "id": 8,
            "subject": "Bank Interview (Macroeconomics)",
            "level": "Advanced",
            "question": "What is the primary effect of expansionary monetary policy?",
            "options": ["To decrease the money supply in the market.", "To increase liquidity and money supply to stimulate economic growth.", "To increase tax rates across the country.", "To shut down small scale business loans."],
            "answer": "To increase liquidity and money supply to stimulate economic growth.",
            "explanation": "সম্প্রসারণমূলক মুদ্রানীতি (Expansionary Monetary Policy)-র মাধ্যমে বাজারে সুদের হার কমিয়ে টাকার প্রবাহ বাড়ানো হয়, যাতে অর্থনৈতিক কর্মকাণ্ড গতিশীল হয়।"
        },
        {
            "id": 9,
            "subject": "Bank Interview (Behavioral)",
            "level": "Beginner",
            "question": "Why do you think honesty and ethical behavior are critical in banking?",
            "options": ["Because banks deal with public money, and trust is the foundation of banking operations.", "Because it is required only to pass audits.", "Because ethical banks get tax exemptions.", "Honesty is not strictly required if the bank makes huge profits."],
            "answer": "Because banks deal with public money, and trust is the foundation of banking operations.",
            "explanation": "ব্যাংকিং খাতের মূল ভিত্তিই হলো মানুষের 'বিশ্বাস'। গ্রাহকের আমানত সুরক্ষিত রাখা এবং আর্থিক স্বচ্ছতা বজায় রাখার জন্য সততা ও নৈতিকতা সবচেয়ে বেশি প্রয়োজন।"
        },
        {
            "id": 10,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is 'Dormant Account'?",
            "options": ["An account opened by a minor.", "An account that has seen no transaction (deposit or withdrawal) for a long period, typically over 1 to 2 years.", "An account used only for salary dispatch.", "A temporary account created for foreign tours."],
            "answer": "An account that has seen no transaction (deposit or withdrawal) for a long period, typically over 1 to 2 years.",
            "explanation": "দীর্ঘদিন (সাধারণত ১-২ বছর) কোনো অ্যাকাউন্ট সচল বা কোনো লেনদেন না করা হলে নিরাপত্তা নিশ্চিত করতে ব্যাংক সেটিকে 'ডরম্যান্ট' বা নিষ্ক্রিয় অ্যাকাউন্ট হিসেবে চিহ্নিত করে।"
        },
        {
            "id": 11,
            "subject": "Bank Interview (Accounting & Audit)",
            "level": "Intermediate",
            "question": "What is the meaning of 'Bank Reconciliation Statement' (BRS)?",
            "options": ["A report to hire new branch auditors.", "A statement prepared to match the bank balance in the company's cash book with the balance in the bank passbook.", "A legal notice issued to loan defaulters.", "A balance sheet showing only corporate tax debts."],
            "answer": "A statement prepared to match the bank balance in the company's cash book with the balance in the bank passbook.",
            "explanation": "কোম্পানির হিসাবের খাতা (Cash Book) এবং ব্যাংকের স্টেটমেন্টের (Passbook) তথ্যের মধ্যে কোনো অমিল থাকলে তা খুঁজে বের করে মেলানোর বিবরণীকে BRS বলা হয়।"
        },
        {
            "id": 12,
            "subject": "Bank Interview (Credit Management)",
            "level": "Advanced",
            "question": "What is 'Debt-to-Equity Ratio' and why do credit officers check it?",
            "options": ["It measures the total gold reserves against paper money.", "It evaluates a company's financial leverage and indicates how much debt it uses to finance assets relative to shareholders' equity.", "It calculates the distance between two corporate branches.", "It measures the total credit cards issued in a year."],
            "answer": "It evaluates a company's financial leverage and indicates how much debt it uses to finance assets relative to shareholders' equity.",
            "explanation": "Debt-to-Equity Ratio থেকে জানা যায় একটি প্রতিষ্ঠান নিজের পুঁজির তুলনায় বাইরে থেকে কত বেশি ঋণ নিয়েছে। এই অনুপাত বেশি হলে ঋণ দেওয়ার ঝুঁকি বেড়ে যায়।"
        },
        {
            "id": 13,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Beginner",
            "question": "What is an 'OTP' and why is it used?",
            "options": ["One-Time Password; used as an extra layer of security for digital transactions.", "Official Transaction Permit; used by branch managers.", "Online Transfer Protocol; used for high-speed internet.", "Over the Counter Payment; used for cash withdrawals."],
            "answer": "One-Time Password; used as an extra layer of security for digital transactions.",
            "explanation": "OTP (One-Time Password) হলো একটি ক্ষণস্থায়ী গোপন কোড, যা অনলাইন লেনদেনের সময় টু-ফ্যাক্টর অথেন্টিকেশন (2FA) হিসেবে নিরাপত্তা প্রদান করে।"
        },
        {
            "id": 14,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is the role of a 'Guarantor' in a bank loan?",
            "options": ["A person who calculates the interest rate for the borrower.", "A person who promises to repay the loan if the primary borrower defaults.", "A bank employee who delivers the loan money.", "An agent who sells insurance products."],
            "answer": "A person who promises to repay the loan if the primary borrower defaults.",
            "explanation": "জামিনদার বা গ্যারান্টর হলেন তিনি, যিনি মূল ঋণগ্রহীতা টাকা পরিশোধে ব্যর্থ হলে আইনগতভাবে সেই ঋণ পরিশোধের দায়বদ্ধতা নিজের কাঁধে নেন।"
        },
        {
            "id": 15,
            "subject": "Bank Interview (Central Banking)",
            "level": "Advanced",
            "question": "What is 'Reverse Repo Rate'?",
            "options": ["The rate at which customers borrow from commercial banks.", "The interest rate at which the Central Bank borrows money from commercial banks within the country.", "The penalty rate applied on overdue loans.", "The fee for canceling a credit card application."],
            "answer": "The interest rate at which the Central Bank borrows money from commercial banks within the country.",
            "explanation": "রিভার্স রেপো রেট হলো সেই সুদের হার, যা বাণিজ্যিক ব্যাংকগুলো তাদের উদ্বৃত্ত টাকা কেন্দ্রীয় ব্যাংকে জমা রাখলে বিনিময়ে পেয়ে থাকে। বাজারে টাকার প্রবাহ কমাতে কেন্দ্রীয় ব্যাংক এটি বাড়িয়ে দেয়।"
        },
        {
            "id": 16,
            "subject": "Bank Interview (Retail Banking)",
            "level": "Beginner",
            "question": "What is a 'Lien' on a bank account?",
            "options": ["A promotion offer given to premium accounts.", "A legal claim or hold placed on an account preventing withdrawal of funds until a debt is cleared.", "A facility to transfer money globally.", "A system to convert regular accounts to current accounts."],
            "answer": "A legal claim or hold placed on an account preventing withdrawal of funds until a debt is cleared.",
            "explanation": "কোনো বকেয়া ঋণ বা আইনি জটিলতার কারণে ব্যাংক যখন নির্দিষ্ট গ্রাহকের অ্যাকাউন্টের টাকা তোলার ওপর নিষেধাজ্ঞা বা লক জারি করে, তাকে 'লিয়েন' (Lien) বলে।"
        },
        {
            "id": 17,
            "subject": "Bank Interview (Compliance & AML)",
            "level": "Intermediate",
            "question": "What is 'STR' in anti-money laundering regulations?",
            "options": ["Standard Transaction Report", "Suspicious Transaction Report", "Systematic Transfer Route", "Secured Trade Record"],
            "answer": "Suspicious Transaction Report",
            "explanation": "কোনো গ্রাহকের অ্যাকাউন্টে অস্বাভাবিক বা সন্দেহজনক লেনদেন দেখা গেলে ব্যাংক তা ফাইন্যান্সিয়াল ইন্টেলিজেন্স ইউনিট বা কেন্দ্রীয় ব্যাংকের কাছে STR (Suspicious Transaction Report) হিসেবে জমা দেয়।"
        },
        {
            "id": 18,
            "subject": "Bank Interview (Macroeconomics)",
            "level": "Advanced",
            "question": "What is 'Fiscal Deficit'?",
            "options": ["When a bank's branches lose money due to bad operations.", "When a government's total expenditure exceeds the total revenue it generates (excluding borrowings).", "A condition where stock prices drop sharply.", "The loss suffered by an insurance company."],
            "answer": "When a government's total expenditure exceeds the total revenue it generates (excluding borrowings).",
            "explanation": "রাজস্ব ঘাটতি বা ফিসকাল ডেফিসিট হলো যখন কোনো দেশের সরকারের বার্ষিক মোট ব্যয় তার মোট আয়ের (ঋণ ব্যতীত) চেয়ে বেশি হয়ে যায়।"
        },
        {
            "id": 19,
            "subject": "Bank Interview (Behavioral)",
            "level": "Beginner",
            "question": "How would you pitch a new financial product to a customer who is hesitant?",
            "options": ["Force them to sign the documents immediately.", "Listen to their concerns, highlight how the product benefits their financial goals, and clear up any doubts patiently.", "Tell them they cannot use the bank if they do not buy it.", "Ignore them and move to the next customer."],
            "answer": "Listen to their concerns, highlight how the product benefits their financial goals, and clear up any doubts patiently.",
            "explanation": "নতুন কোনো প্রোডাক্ট বা স্কিম বিক্রির সঠিক উপায় হলো জোর না করে গ্রাহকের আর্থিক প্রয়োজন বোঝা এবং স্কিমটি কীভাবে তাঁর উপকারে আসবে তা বুঝিয়ে বলা।"
        },
        {
            "id": 20,
            "subject": "Bank Interview (Financial Concepts)",
            "level": "Intermediate",
            "question": "What is 'Amortization' in banking terms?",
            "options": ["The method of calculating branch operational losses.", "The process of spreading out a loan into a series of fixed periodic payments over time.", "The evaluation of gold asset purity.", "A type of tax exemption for corporate staff."],
            "answer": "The process of spreading out a loan into a series of fixed periodic payments over time.",
            "explanation": "অ্যামোর্টাইজেশন হলো একটি নির্দিষ্ট সময়সীমার মধ্যে সমান কিস্তিতে (EMI) সুদাসলসহ পুরো ঋণ পরিশোধ করার পরিকল্পিত প্রক্রিয়া।"
        },
        {
            "id": 21,
            "subject": "Bank Interview (Retail Banking)",
            "level": "Beginner",
            "question": "What is the full form of 'PIN' in digital cards?",
            "options": ["Personal Identification Number", "Public Information Network", "Payment Identity Node", "Private Internet Name"],
            "answer": "Personal Identification Number",
            "explanation": "PIN-এর পূর্ণরূপ হলো Personal Identification Number, যা ডেবিট বা ক্রেডিট কার্ড দিয়ে লেনদেন করার জন্য ব্যবহৃত একটি ৪-৬ ডিজিটের সুরক্ষিত পাসওয়ার্ড।"
        },
        {
            "id": 22,
            "subject": "Bank Interview (Trade Finance)",
            "level": "Intermediate",
            "question": "What is 'Bank Guarantee' (BG)?",
            "options": ["A promise that the bank will never go bankrupt.", "A contract where the bank acts as a guarantor to pay a specific amount if the applicant fails to fulfill a contract performance.", "A certificate showing high customer credit score.", "An insurance for bank cash counters."],
            "answer": "A contract where the bank acts as a guarantor to pay a specific amount if the applicant fails to fulfill a contract performance.",
            "explanation": "ব্যাংক গ্যারান্টি (BG) হলো এমন একটি চুক্তি যেখানে ব্যাংক তৃতীয় কোনো পক্ষের কাছে দায়বদ্ধ থাকে যে, তার মক্কেল চুক্তি অনুযায়ী কাজ শেষ করতে না পারলে ব্যাংক তার ক্ষতিপূরণ দেবে।"
        },
        {
            "id": 23,
            "subject": "Bank Interview (Corporate Governance)",
            "level": "Advanced",
            "question": "What is the primary function of the 'Internal Audit' team in a bank?",
            "options": ["To check if customers are behaving politely.", "To provide an independent, objective assurance that a bank’s risk management, governance, and internal control processes are operating effectively.", "To calculate daily profits for marketing announcements.", "To manage the main corporate bank accounts directly."],
            "answer": "To provide an independent, objective assurance that a bank’s risk management, governance, and internal control processes are operating effectively.",
            "explanation": "ইন্টারনাল অডিট টিম ব্যাংকের অভ্যন্তরীণ নীতি, কাজের স্বচ্ছতা ও নিরাপত্তা প্রক্রিয়া সঠিকভাবে মানা হচ্ছে কি না তা স্বাধীনভাবে মূল্যায়ন করে পরিচালনা পর্ষদকে রিপোর্ট করে।"
        },
        {
            "id": 24,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Bancassurance'?",
            "options": ["An insurance cover exclusively for bank buildings.", "An arrangement between a bank and an insurance company allowing the bank to sell insurance products to its customers.", "A policy to secure bank servers from hackers.", "A mechanism to guarantee 100% recovery of bad loans."],
            "answer": "An arrangement between a bank and an insurance company allowing the bank to sell insurance products to its customers.",
            "explanation": "ব্যাংকাস্যুরেন্স হলো ব্যাংক এবং ইন্স্যুরেন্স কোম্পানির মধ্যকার একটি ব্যবসায়িক চুক্তি, যার অধীনে ব্যাংক তার নিজস্ব গ্রাহকদের কাছে বিভিন্ন বীমা পলিসি বিক্রি করে থাকে।"
        },
        {
            "id": 25,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What is 'Market Risk' for a bank?",
            "options": ["The risk that new competitor banks will open nearby.", "The risk of losses in on- and off-balance sheet positions arising from movements in market prices (e.g., interest rates, stock prices, foreign exchange rates).", "The risk that farmers will not get fair crop prices.", "The risk that the bank will choose bad locations for new branches."],
            "answer": "The risk of losses in on- and off-balance sheet positions arising from movements in market prices (e.g., interest rates, stock prices, foreign exchange rates).",
            "explanation": "মার্কেট রিস্ক হলো শেয়ার বাজার, সুদের হার, অথবা বৈদেশিক মুদ্রার দামের ওঠানামার কারণে ব্যাংকের বিনিয়োগ বা অ্যাসেটের মূল্য কমে যাওয়ার ঝুঁকি।"
        },
        {
            "id": 26,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Base Rate' of a bank?",
            "options": ["The rate at which a bank purchases furniture.", "The minimum interest rate below which a bank is generally not allowed to lend money to its customers.", "The initial setup cost of a branch.", "The basic savings rate for kids."],
            "answer": "The minimum interest rate below which a bank is generally not allowed to lend money to its customers.",
            "explanation": "বেস রেট (Base Rate) হলো কেন্দ্রীয় ব্যাংক নির্ধারিত বা নির্দেশিত এমন একটি সর্বনিম্ন সুদের হার, যার নিচে কোনো বাণিজ্যিক ব্যাংক কাউকে ঋণ দিতে পারে না।"
        },
        {
            "id": 27,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is a 'Passbook'?",
            "options": ["A booklet issued by a bank to a depositor to record all transaction history.", "A passport copy kept for verification.", "A ticket used to access VIP lounges.", "A book that teaches banking history."],
            "answer": "A booklet issued by a bank to a depositor to record all transaction history.",
            "explanation": "পাসবই বা পাসবুক হলো গ্রাহককে দেওয়া ব্যাংকের একটি ছোট বই, যেখানে গ্রাহকের অ্যাকাউন্টের জমা, খরচ ও বর্তমান ব্যালেন্সের হিসাব প্রিন্ট করা থাকে।"
        },
        {
            "id": 28,
            "subject": "Bank Interview (Financial Concepts)",
            "level": "Intermediate",
            "question": "What is 'Liquidity' in finance?",
            "options": ["The total amount of gold coins in a country.", "The ease with which an asset can be converted into ready cash without affecting its market price.", "The process of closing down an unprofitable branch.", "The rate of tax applied on corporate imports."],
            "answer": "The ease with which an asset can be converted into ready cash without affecting its market price.",
            "explanation": "তারল্য বা লিকুইডিটি বলতে বোঝায় কোনো সম্পদকে কত দ্রুত এবং সহজে মূল্যের ক্ষতি না করে নগদ টাকায় রূপান্তর করা যায়। যেমন: ক্যাশ টাকা সবচেয়ে বেশি তরল সম্পদ।"
        },
        {
            "id": 29,
            "subject": "Bank Interview (Central Banking)",
            "level": "Intermediate",
            "question": "What is the primary role of a 'Lender of Last Resort'?",
            "options": ["A local money lender helping poor villagers.", "The Central Bank providing emergency liquidity support to commercial banks facing acute cash crises.", "A government board giving free housing credits.", "An international bank investing in local stocks."],
            "answer": "The Central Bank providing emergency liquidity support to commercial banks facing acute cash crises.",
            "explanation": "'Lender of Last Resort' বা শেষ আশ্রয়স্থল হিসেবে কেন্দ্রীয় ব্যাংক বাণিজ্যিক ব্যাংকগুলোর তীব্র নগদ সংকটের সময়ে জরুরি ঋণ দিয়ে দেশের অর্থনৈতিক ব্যবস্থা ভেঙে পড়া থেকে রক্ষা করে।"
        },
        {
            "id": 30,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What does 'CAR' (Capital Adequacy Ratio) measure?",
            "options": ["The total car loans issued in a quarter.", "A bank's available capital expressed as a percentage of its risk-weighted credit exposure, ensuring it can absorb losses.", "The total value of branch physical buildings.", "The ratio of managers to entry level staff."],
            "answer": "A bank's available capital expressed as a percentage of its risk-weighted credit exposure, ensuring it can absorb losses.",
            "explanation": "CAR বা মূলধন পর্যাপ্ততার অনুপাত দেখায় যে একটি ব্যাংকের ঝুঁকি-ভারিত সম্পদের বিপরীতে নিজস্ব কতটুকু মূলধন রয়েছে, যা ব্যাংককে দেউলিয়া হওয়া থেকে বাঁচায়।"
        },
        {
            "id": 31,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Overdraft' (OD) facility?",
            "options": ["A penalty fee for bad customer behavior.", "A credit arrangement that allows an account holder to withdraw more money than they actually have in their account up to a certain limit.", "A system that automatically blocks credit cards.", "An automatic renewal of fixed deposits."],
            "answer": "A credit arrangement that allows an account holder to withdraw more money than they actually have in their account up to a certain limit.",
            "explanation": "ওভারড্রাফট বা ওডি সুবিধা হলো এমন একটি ঋণ ব্যবস্থা, যার মাধ্যমে কারেন্ট বা নির্দিষ্ট অ্যাকাউন্টধারীরা তাদের অ্যাকাউন্টে থাকা জমার চেয়েও অতিরিক্ত টাকা (নির্দিষ্ট সীমা পর্যন্ত) তুলতে পারেন।"
        },
        {
            "id": 32,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Intermediate",
            "question": "What is 'IMPS' and how does it differ from NEFT?",
            "options": ["Instant Money Process Scheme; it takes 24 hours.", "Immediate Payment Service; it offers instant 24/7 electronic fund transfer, unlike NEFT which works in batches.", "International Master Payment System; used only outside the country.", "Internal Manager Performance Score; used for payrolls."],
            "answer": "Immediate Payment Service; it offers instant 24/7 electronic fund transfer, unlike NEFT which works in batches.",
            "explanation": "IMPS (Immediate Payment Service) হলো একটি তাত্ক্ষণিক ফান্ড ট্রান্সফার মাধ্যম, যা বছরের যেকোনো দিন ২৪ ঘণ্টা রিয়েল-টাইমে কাজ করে, যেখানে NEFT নির্দিষ্ট সময়ে ব্যাচ আকারে সেটেল হয়।"
        },
        {
            "id": 33,
            "subject": "Bank Interview (Macroeconomics)",
            "level": "Advanced",
            "question": "What happens when a country's currency undergoes 'Devaluation'?",
            "options": ["Its value increases relative to foreign currencies.", "Its official value is deliberately lowered relative to foreign benchmark currencies.", "The country stops using paper money.", "Inflation drops to 0% instantly."],
            "answer": "Its official value is deliberately lowered relative to foreign benchmark currencies.",
            "explanation": "মুদ্রার অবমূল্যায়ন বা ডিভ্যালুয়েশন হলো সরকারের পক্ষ থেকে নিজস্ব মুদ্রার আনুষ্ঠানিক মান অন্য দেশের মুদ্রার তুলনায় কমিয়ে দেওয়া, যা সাধারণত রপ্তানি বাড়ানোর জন্য করা হয়।"
        },
        {
            "id": 34,
            "subject": "Bank Interview (Behavioral)",
            "level": "Beginner",
            "question": "How will you stay motivated during repetitive tasks like data entry or cash counting?",
            "options": ["By understanding that accuracy in these tasks ensures the bank's core security and customer trust.", "By taking frequent long breaks without informing managers.", "By listening to music while working on the cash counter.", "I will try to avoid repetitive tasks as much as possible."],
            "answer": "By understanding that accuracy in these tasks ensures the bank's core security and customer trust.",
            "explanation": "ব্যাংকের ক্যাশ গণনা বা ডাটা এন্ট্রি একঘেয়ে মনে হলেও এর ওপর ব্যাংকের আর্থিক হিসাব ও গ্রাহকের নিখুঁত ব্যালেন্স নির্ভর করে। এই দায়িত্ববোধই মোটিভেশন ধরে রাখতে সাহায্য করে।"
        },
        {
            "id": 35,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is the difference between 'Bearer Cheque' and 'Order Cheque'?",
            "options": ["Bearer cheque requires signature verification; Order cheque does not.", "Bearer cheque can be encashed by whoever presents it at the counter; Order cheque is paid only to the specified person named on it.", "Order cheque has no validity limit.", "Bearer cheque can only be used by government officials."],
            "answer": "Bearer cheque can be encashed by whoever presents it at the counter; Order cheque is paid only to the specified person named on it.",
            "explanation": "বেয়ারার বা বাহক চেক কাউন্টারে যে কেউ জমা দিয়ে টাকা তুলতে পারে। কিন্তু অর্ডার চেকের ক্ষেত্রে চেকে যার নাম লেখা আছে, ভেরিফিকেশন সাপেক্ষে তাকে বা তার অনুমোদিত ব্যক্তিকে টাকা দেওয়া হয়।"
        },
        {
            "id": 36,
            "subject": "Bank Interview (Accounting & Audit)",
            "level": "Intermediate",
            "question": "What is 'NIM' (Net Interest Margin) and why is it crucial for a bank?",
            "options": ["National Investment Module; it shows total active accounts.", "The difference between interest income generated by banks and the amount of interest paid out to lenders/depositors, relative to its assets.", "The total service charges collected from credit card operations.", "The cost of building new corporate data centers."],
            "answer": "The difference between interest income generated by banks and the amount of interest paid out to lenders/depositors, relative to its assets.",
            "explanation": "NIM হলো একটি ব্যাংকের অন্যতম প্রধান মুনাফাসূচক। ব্যাংক ঋণ থেকে যে সুদ আয় করে এবং আমানতকারীদের যে সুদ দেয়—এই দুইয়ের ব্যবধানই হলো নেট ইন্টারেস্ট মার্জিন।"
        },
        {
            "id": 37,
            "subject": "Bank Interview (Credit Management)",
            "level": "Advanced",
            "question": "What does a credit bureau report (like CIB) show to a loan officer?",
            "options": ["The candidate's educational certificates and details.", "The borrower's credit history, active loans, repayment tracks, and default status across all financial institutions.", "The tax history of the local government.", "The total net worth of the bank's shareholders."],
            "answer": "The borrower's credit history, active loans, repayment tracks, and default status across all financial institutions.",
            "explanation": "CIB (Credit Information Bureau) রিপোর্ট ঋণগ্রহীতার পূর্বের সমস্ত লোনের রেকর্ড ও তা সময়মতো শোধ করার ইতিহাস দেখায়, যা দেখে ব্যাংক সিদ্ধান্ত নেয় তাকে নতুন ঋণ দেওয়া নিরাপদ কি না।"
        },
        {
            "id": 38,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Beginner",
            "question": "What is 'Mobile Banking'?",
            "options": ["A system where bank branches are set up inside moving vans.", "A service provided by a bank that allows its customers to conduct financial transactions remotely using a smartphone application.", "A service to buy and sell mobile phones on installments.", "An internal communication system for bank staff."],
            "answer": "A service provided by a bank that allows its customers to conduct financial transactions remotely using a smartphone application.",
            "explanation": "মোবাইল ব্যাংকিং হলো স্মার্টফোন অ্যাপের (যেমন ইন্টারনেট ব্যাংকিং অ্যাপ) মাধ্যমে ঘরে বসেই ব্যালেন্স দেখা, ফান্ড ট্রান্সফার করা বা বিল দেওয়ার ডিজিটাল ব্যাংকিং ব্যবস্থা।"
        },
        {
            "id": 39,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is 'No-Frills Account'?",
            "options": ["An account with premium services and hidden fees.", "A basic savings account that requires no minimum balance or very low balance, aimed at financial inclusion.", "An account made exclusively for corporate directors.", "An account that does not provide any debit cards."],
            "answer": "A basic savings account that requires no minimum balance or very low balance, aimed at financial inclusion.",
            "explanation": "নো-ফ্রিলস বা জিরো ব্যালেন্স অ্যাকাউন্ট হলো সাধারণ মানুষের দোরগোড়ায় ব্যাংকিং সেবা পৌঁছে দেওয়ার জন্য তৈরি একটি অ্যাকাউন্ট, যেখানে কোনো ন্যূনতম ব্যালেন্স রাখার বাধ্যবাধকতা থাকে না।"
        },
        {
            "id": 40,
            "subject": "Bank Interview (Central Banking)",
            "level": "Advanced",
            "question": "What is the purpose of 'Prompt Corrective Action' (PCA) framework by a Central Bank?",
            "options": ["To immediately fire underperforming branch officers.", "A supervisory framework to intervene and audit a commercial bank that becomes financially weak in terms of capital adequacy, asset quality, or profitability.", "To change the physical currency design within a week.", "To approve new digital banking licenses rapidly."],
            "answer": "A supervisory framework to intervene and audit a commercial bank that becomes financially weak in terms of capital adequacy, asset quality, or profitability.",
            "explanation": "PCA হলো কেন্দ্রীয় ব্যাংকের একটি সতর্কতামূলক ব্যবস্থা। কোনো বাণিজ্যিক ব্যাংক আর্থিক ঝুঁকিতে পড়লে (যেমন মাত্রাতিরিক্ত খেলাপি ঋণ হলে) কেন্দ্রীয় ব্যাংক তার ওপর নির্দিষ্ট বিধিনিষেধ আরোপ করে সংশোধন করার চেষ্টা করে।"
        },
        {
            "id": 41,
            "subject": "Bank Interview (Retail Banking)",
            "level": "Beginner",
            "question": "What is the meaning of 'KYC Documents'?",
            "options": ["Key Yearly Conversion forms.", "Documents used to verify identity and address, such as National ID, Passport, Utility Bills, etc.", "Documents proving internal branch cash counts.", "Loan application agreement files."],
            "answer": "Documents used to verify identity and address, such as National ID, Passport, Utility Bills, etc.",
            "explanation": "গ্রাহকের সঠিক পরিচয় নিশ্চিত করতে ব্যাংক যেসব জাতীয় পরিচয়পত্র, পাসপোর্ট, ছবি বা ইউটিলিটি বিলের কপি সংগ্রহ করে, সেগুলোকে KYC ডকুমেন্টস বলে।"
        },
        {
            "id": 42,
            "subject": "Bank Interview (Trade Finance)",
            "level": "Intermediate",
            "question": "What is an 'Inward Remittance'?",
            "options": ["Money sent from one local branch to another.", "Funds received by a domestic bank account from an overseas or foreign source.", "The expenses incurred by the bank internally.", "A type of short term loan given to local small businesses."],
            "answer": "Funds received by a domestic bank account from an overseas or foreign source.",
            "explanation": "বিদেশ থেকে যখন কোনো প্রবাসী বা বিদেশি প্রতিষ্ঠান দেশের অভ্যন্তরীণ কোনো ব্যাংক অ্যাকাউন্টে টাকা পাঠায়, তখন তাকে ইনওয়ার্ড রেমিট্যান্স (Inward Remittance) বলে।"
        },
        {
            "id": 43,
            "subject": "Bank Interview (Corporate Governance)",
            "level": "Advanced",
            "question": "What is the main role of the 'Board Risk Management Committee'?",
            "options": ["To check branch safety guards' performance.", "To oversee the formulation and implementation of the bank's enterprise-wide risk management frameworks and policies.", "To manage corporate marketing expenses.", "To decide individual customer loan approvals directly."],
            "answer": "To oversee the formulation and implementation of the bank's enterprise-wide risk management frameworks and policies.",
            "explanation": "বোর্ডের এই কমিটি ব্যাংক পরিচালনার সামগ্রিক আর্থিক ও কৌশলগত ঝুঁকিগুলো পর্যালোচনা করে এবং বড় ধরনের বড় ক্ষতি এড়াতে বিভিন্ন নীতি নির্ধারণ করে।"
        },
        {
            "id": 44,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is a 'Joint Account'?",
            "options": ["An account shared between two different banks.", "A bank account opened and operated by two or more individuals together.", "An account meant for small tea stalls.", "A loan account backed by corporate shares."],
            "answer": "A bank account opened and operated by two or more individuals together.",
            "explanation": "যখন দুই বা ততোধিক ব্যক্তি মিলিতভাবে একটি ব্যাংক অ্যাকাউন্ট খোলেন এবং পরিচালনা করেন, তখন তাকে জয়েন্ট অ্যাকাউন্ট বা যৌথ হিসাব বলা হয়।"
        },
        {
            "id": 45,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What is 'Systemic Risk' in the banking industry?",
            "options": ["The risk of a computer operating system failing.", "The risk that the failure of a single financial institution could trigger a domino effect, leading to the collapse of the entire financial system.", "The risk of error in manual accounting calculations.", "The risk of losing cash during transition."],
            "answer": "The risk that the failure of a single financial institution could trigger a domino effect, leading to the collapse of the entire financial system.",
            "explanation": "সিস্টেমিক রিস্ক বলতে বোঝায় এমন একটি বড় ঝুঁকি, যেখানে একটি বড় ব্যাংকের পতন বা ধস পুরো দেশের আর্থিক ও ব্যাংকিং ব্যবস্থাকে অচল করে দিতে পারে।"
        },
        {
            "id": 46,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is a 'Stale Cheque'?",
            "options": ["A torn or damaged cheque.", "A cheque that has exceeded its validity period (usually 3 or 6 months from the date written on it) and cannot be encashed.", "A cheque signed by a deceased person.", "A fake counter cheque copy."],
            "answer": "A cheque that has exceeded its validity period (usually 3 or 6 months from the date written on it) and cannot be encashed.",
            "explanation": "চেক লেখার তারিখ থেকে নির্দিষ্ট সময় পার হয়ে গেলে (সাধারণত ৩ বা ৬ মাস) সেই চেকের মেয়াদ শেষ হয়ে যায় এবং ব্যাংক তা গ্রহণ করে না। একেই স্টেল বা বাসি চেক বলে।"
        },
        {
            "id": 47,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What does 'E-Statement' mean?",
            "options": ["An electronic version of a bank statement sent via email or available online.", "An emergency report written by a branch manager.", "A tax return form submitted online.", "An accounting software license document."],
            "answer": "An electronic version of a bank statement sent via email or available online.",
            "explanation": "ই-স্টেটমেন্ট বা ইলেকট্রনিক স্টেটমেন্ট হলো কাগজের রিপোর্টের পরিবর্তে গ্রাহকের ইমেইলে পাঠানো বা অ্যাপে দেখা অ্যাকাউন্টের লেনদেনের ডিজিটাল বিবরণী।"
        },
        {
            "id": 48,
            "subject": "Bank Interview (Financial Concepts)",
            "level": "Intermediate",
            "question": "What is the difference between 'Simple Interest' and 'Compound Interest'?",
            "options": ["Simple interest is calculated on the principal amount only; Compound interest is calculated on the principal plus accumulated interest.", "Simple interest changes every month; Compound interest stays fixed.", "Compound interest is only used for government micro-credits.", "There is no difference in return value."],
            "answer": "Simple interest is calculated on the principal amount only; Compound interest is calculated on the principal plus accumulated interest.",
            "explanation": "সরল সুদ (Simple Interest) কেবল মূল টাকার ওপর হিসাব করা হয়। চক্রবৃদ্ধি সুদ (Compound Interest) মূল টাকার পাশাপাশি অর্জিত সুদের ওপরও হিসাব করা হয়।"
        },
        {
            "id": 49,
            "subject": "Bank Interview (Central Banking)",
            "level": "Intermediate",
            "question": "What is the primary motive behind a Central Bank changing the 'Bank Rate'?",
            "options": ["To charge processing fees from commercial branches.", "To control inflation and regulate the long-term cost of credit in the economy.", "To fund government infrastructure projects directly.", "To evaluate bank employee pay scales."],
            "answer": "To control inflation and regulate the long-term cost of credit in the economy.",
            "explanation": "ব্যাংক রেট (Bank Rate) হলো সেই হার, যে হারে কেন্দ্রীয় ব্যাংক বাণিজ্যিক ব্যাংকগুলোকে দীর্ঘমেয়াদী ঋণ দেয়। এর মাধ্যমে বাজারে ঋণের খরচ নিয়ন্ত্রণ করা হয়।"
        },
        {
            "id": 50,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What is 'Interest Rate Risk' for a commercial bank?",
            "options": ["The risk that customers will refuse to pay interest.", "The risk to a bank's earnings and capital arising from adverse movements in interest rates affecting assets and liabilities.", "The risk of central bank canceling the bank license.", "The risk that corporate clients will choose other investment tools."],
            "answer": "The risk to a bank's earnings and capital arising from adverse movements in interest rates affecting assets and liabilities.",
            "explanation": "সুদের হারের ঝুঁকি বা Interest Rate Risk বলতে বোঝায় বাজারে সুদের হার আকস্মিক পরিবর্তনের ফলে ব্যাংকের মোট আয় বা সম্পদের মূল্যে নেতিবাচক প্রভাব পড়ার আশঙ্কা।"
        },
        {
            "id": 51,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Collateral' in lending?",
            "options": ["A premium processing charge.", "An asset pledged by a borrower to secure a loan, which the bank can seize if the loan defaults.", "A type of short term account certificate.", "A recommendation letter from another customer."],
            "answer": "An asset pledged by a borrower to secure a loan, which the bank can seize if the loan defaults.",
            "explanation": "জামানত বা কোলাটেরাল হলো ঋণ নেওয়ার বিপরীতে ব্যাংকের কাছে জমা রাখা কোনো স্থায়ী সম্পদ (যেমন জমি বা এফডিআর), যাতে গ্রাহক খেলাপি হলে ব্যাংক তা বিক্রি করে টাকা তুলতে পারে।"
        },
        {
            "id": 52,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Intermediate",
            "question": "What is a 'Payment Gateway'?",
            "options": ["A physical security gate outside currency vaults.", "An e-commerce service that authorizes card or direct payments processing for e-businesses and online retailers.", "An international clearing branch location.", "A digital network used only by central bank managers."],
            "answer": "An e-commerce service that authorizes card or direct payments processing for e-businesses and online retailers.",
            "explanation": "পেমেন্ট গেটওয়ে হলো একটি অনলাইন প্রযুক্তি মাধ্যম, যা কোনো ই-কমার্স ওয়েবসাইট ও ব্যাংকের মধ্যে নিরাপদ যোগাযোগ তৈরি করে গ্রাহকের কার্ড বা ডিজিটাল পেমেন্ট সম্পন্ন করে।"
        },
        {
            "id": 53,
            "subject": "Bank Interview (Macroeconomics)",
            "level": "Advanced",
            "question": "What does a country's 'Balance of Payments' (BOP) capture?",
            "options": ["The total active balance sheets of all domestic banks.", "A statement summarizing all economic transactions between residents of the country and the rest of the world over a specific period.", "The total vault cash inside the central bank.", "The tax revenue distribution list between local districts."],
            "answer": "A statement summarizing all economic transactions between residents of the country and the rest of the world over a specific period.",
            "explanation": "লেনদেন ভারসাম্য (BOP) হলো একটি নির্দিষ্ট সময়ে (সাধারণত এক বছর) একটি দেশের সাথে বহির্বিশ্বের বা অন্য সমস্ত দেশের সামগ্রিক অর্থনৈতিক ও বাণিজ্যিক লেনদেনের হিসাব।"
        },
        {
            "id": 54,
            "subject": "Bank Interview (Behavioral)",
            "level": "Beginner",
            "question": "How do you respond if you realize you made a mistake in a transaction entry?",
            "options": ["Try to hide it and hope no one notices.", "Blame a colleague who was sitting nearby.", "Immediately report it to the supervisor so it can be corrected through proper accounting channels.", "Leave early on that specific day."],
            "answer": "Immediately report it to the supervisor so it can be corrected through proper accounting channels.",
            "explanation": "ব্যাংকিংয়ে যেকোনো ভুল লুকানোর চেষ্টা করলে তা বড় ধরনের ক্ষতি বা জালিয়াতি হিসেবে গণ্য হতে পারে। তাই ভুল হওয়া মাত্রই তা সুপারভাইজারকে জানিয়ে সংশোধন করে নেওয়াই দায়িত্বশীলতা।"
        },
        {
            "id": 55,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What does 'Maturity Value' mean for a Fixed Deposit?",
            "options": ["The total value of initial tax deducted.", "The total amount (principal plus accumulated interest) payable to the depositor at the end of the specified term.", "The cancellation charge if withdrawn early.", "The penalty applied on delayed installations."],
            "answer": "The total amount (principal plus accumulated interest) payable to the depositor at the end of the specified term.",
            "explanation": "মেয়াদপূর্তি মূল্য বা ম্যাচিউরিটি ভ্যালু হলো নির্দিষ্ট মেয়াদ শেষে গ্রাহক সুদে-আসলে মোট যে পরিমাণ টাকা ব্যাংক থেকে ফেরত পান।"
        },
        {
            "id": 56,
            "subject": "Bank Interview (Accounting & Audit)",
            "level": "Intermediate",
            "question": "What is the concept of 'Depreciation'?",
            "options": ["The decrease in cash value inside current accounts.", "The systematic reduction in the recorded cost of a physical asset over its useful life due to wear and tear.", "The rise in corporate service fees.", "The process of dissolving an unperforming bank investment portfolio."],
            "answer": "The systematic reduction in the recorded cost of a physical asset over its useful life due to wear and tear.",
            "explanation": "অবচয় বা ডেপ্রিসিয়েশন হলো ব্যবহার বা সময়ের আবর্তনে কোনো স্থায়ী সম্পদের (যেমন বিল্ডিং, কম্পিউটার, গাড়ি) মূল্য বা কার্যকারিতা ক্রমান্বয়ে কমে যাওয়া।"
        },
        {
            "id": 57,
            "subject": "Bank Interview (Credit Management)",
            "level": "Advanced",
            "question": "What is 'Working Capital Loan'?",
            "options": ["A loan given to buy personal cars for corporate directors.", "A short-term loan used to finance a company's everyday operations, such as accounts payable and wages, rather than buying long-term assets.", "A loan dedicated only to construction projects.", "An unsecured emergency loan given to students."],
            "answer": "A short-term loan used to finance a company's everyday operations, such as accounts payable and wages, rather than buying long-term assets.",
            "explanation": "ওয়ার্কিং ক্যাপিটাল লোন বা চলতি মূলধন ঋণ হলো কোনো ব্যবসার প্রতিদিনের খরচ, কর্মচারীদের বেতন ও কাঁচামাল কেনার মতো পরিচালন ব্যয় মেটানোর জন্য দেওয়া স্বল্পমেয়াদী ঋণ।"
        },
        {
            "id": 58,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Beginner",
            "question": "What is 'Core Banking Solution' (CBS)?",
            "options": ["A strategy to design branch offices.", "A centralized networking software platform that connects all branches of a bank, allowing real-time transaction updates from anywhere.", "A special security system for cash transport vans.", "A training manual for new bank recruits."],
            "answer": "A centralized networking software platform that connects all branches of a bank, allowing real-time transaction updates from anywhere.",
            "explanation": "CBS হলো ব্যাংকের একটি কেন্দ্রীয় সফটওয়্যার সিস্টেম, যার মাধ্যমে সমস্ত শাখা একে অপরের সাথে যুক্ত থাকে। ফলে গ্রাহক যেকোনো শাখায় বা অনলাইনে রিয়েল-টাইমে লেনদেন করতে পারেন।"
        },
        {
            "id": 59,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is 'No-Objection Certificate' (NOC) in banking?",
            "options": ["A document showing a customer is eligible for a new credit card.", "A legal document issued by a bank stating that a customer has fully cleared their dues/loans and the bank has no further claims.", "A form used to change account signature profiles.", "An internal clearance given to branch auditors."],
            "answer": "A legal document issued by a bank stating that a customer has fully cleared their dues/loans and the bank has no further claims.",
            "explanation": "NOC বা অনাপত্তি পত্র হলো ব্যাংক প্রদত্ত এমন একটি দলিল, যা প্রমাণ করে যে গ্রাহক তার লোন সম্পূর্ণ পরিশোধ করেছেন এবং ব্যাংকের কাছে তার আর কোনো দেনা নেই।"
        },
        {
            "id": 60,
            "subject": "Bank Interview (Central Banking)",
            "level": "Advanced",
            "question": "What does a central bank aim to control through 'Quantitative Easing' (QE)?",
            "options": ["The recruitment rates of national banks.", "The domestic money supply and liquidity by directly purchasing long-term government bonds and securities from the market when standard interest rates are near zero.", "The price of gold imports from foreign countries.", "The registration of private credit information agencies."],
            "answer": "The domestic money supply and liquidity by directly purchasing long-term government bonds and securities from the market when standard interest rates are near zero.",
            "explanation": "QE হলো একটি বিশেষ আর্থিক নীতি, যেখানে কেন্দ্রীয় ব্যাংক অর্থনীতিতে সরাসরি অর্থ ইনজেক্ট করার জন্য বাজার থেকে বিপুল পরিমাণ বন্ড ও সিকিউরিটিজ কেনে, যাতে ব্যাংকগুলো সহজে ঋণ দিতে পারে।"
        },
        {
            "id": 61,
            "subject": "Bank Interview (Retail Banking)",
            "level": "Beginner",
            "question": "What is 'Minimum Balance' requirement?",
            "options": ["The lowest amount of money a bank must keep in its primary vault.", "The minimum amount of money a customer must maintain in their account to keep it active and avoid penalty fees.", "The lowest interest rate offered on credit options.", "The minimum age requirement to open an investment account."],
            "answer": "The minimum amount of money a customer must maintain in their account to keep it active and avoid penalty fees.",
            "explanation": "ন্যূনতম ব্যালেন্স বা মিনিমাম ব্যালেন্স হলো ব্যাংক অ্যাকাউন্ট সচল রাখার জন্য অ্যাকাউন্টে সর্বদা জমা রাখতে হয় এমন সর্বনিম্ন অর্থ। এটি না রাখলে ব্যাংক চার্জ কাটতে পারে।"
        },
        {
            "id": 62,
            "subject": "Bank Interview (Trade Finance)",
            "level": "Intermediate",
            "question": "What is 'Outward Remittance'?",
            "options": ["Money transferred between personal checking accounts.", "Funds sent abroad or to a foreign destination from a domestic bank account.", "The expense budget fixed for employee insurance covers.", "A mechanism to fund agricultural loans inside the state."],
            "answer": "Funds sent abroad or to a foreign destination from a domestic bank account.",
            "explanation": "আউটওয়ার্ড রেমিট্যান্স হলো দেশের অভ্যন্তরে থাকা কোনো ব্যাংক অ্যাকাউন্ট থেকে বৈধ নিয়মে বা বাণিজ্যের উদ্দেশ্যে বিদেশে টাকা পাঠানো।"
        },
        {
            "id": 63,
            "subject": "Bank Interview (Corporate Governance)",
            "level": "Advanced",
            "question": "What is the purpose of 'Whistleblower Policy' in corporate banking?",
            "options": ["To award top performing field sales agents.", "To provide a secure channel for employees to report unethical behavior, financial fraud, or violations of code of conduct without fear of retaliation.", "To invite customer reviews via official websites.", "To track branch opening and closing hours automatically."],
            "answer": "To provide a secure channel for employees to report unethical behavior, financial fraud, or violations of code of conduct without fear of retaliation.",
            "explanation": "হুইসেলব্লোয়ার নীতি হলো এমন একটি সুরক্ষা কবচ, যা কোনো কর্মকর্তা ব্যাংকের ভেতরের বড় কোনো জালিয়াতি বা অনিয়ম কর্তৃপক্ষের কাছে উন্মোচন করলে তার চাকরি ও নিরাপত্তা নিশ্চিত করে।"
        },
        {
            "id": 64,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is the function of a 'Bank Statement'?",
            "options": ["A document outlining a bank's corporate history and profile.", "A formal record summarizing all financial transactions within an account over a specific timeframe.", "A contract signed for high-value lockers.", "A notice reminding customers about changed interest policies."],
            "answer": "A formal record summarizing all financial transactions within an account over a specific timeframe.",
            "explanation": "ব্যাংক স্টেটমেন্ট হলো একটি নির্দিষ্ট সময়ের মধ্যে (যেমন প্রতি মাসে) কোনো গ্রাহকের অ্যাকাউন্টে হওয়া সমস্ত লেনদেন এবং বর্তমান ব্যালেন্সের একটি অফিশিয়াল বিবরণী।"
        },
        {
            "id": 65,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What does 'Sovereign Risk' mean in global banking?",
            "options": ["The risk that corporate houses will not pay their debts.", "The risk that a foreign government will default on its loan bonds or fail to honor its financial commitments.", "The risk of system server failure across international network links.", "The risk of gold price dropping below global margins."],
            "answer": "The risk that a foreign government will default on its loan bonds or fail to honor its financial commitments.",
            "explanation": "সোভেরেন রিস্ক বলতে বোঝায় কোনো দেশের সরকার যখন তার নেওয়া আন্তর্জাতিক ঋণ বা বন্ডের টাকা ফেরত দিতে ব্যর্থ হয় বা খেলাপি হওয়ার ঝুঁকিতে পড়ে।"
        },
        {
            "id": 66,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Mutilated Notes'?",
            "options": ["Notes that are newly printed by the mint.", "Notes that are torn, damaged, or have parts missing, which can be exchanged at specific bank branches under regulations.", "Notes used exclusively for interbank clearings.", "Fake currency notes caught by machines."],
            "answer": "Notes that are torn, damaged, or have parts missing, which can be exchanged at specific bank branches under regulations.",
            "explanation": "ছেঁড়া-ফাটা, জীর্ণ বা বিকৃত হয়ে যাওয়া ব্যাংক নোটগুলোকে মিউটিলেটেড নোট বলে। নির্দিষ্ট নিয়ম মেনে এগুলো ব্যাংকে জমা দিয়ে পরিবর্তন করা যায়।"
        },
        {
            "id": 67,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Nominee' in a bank account?",
            "options": ["The person who recommends the bank to others.", "The person designated by the account holder to receive the funds in the account in the event of the holder's death.", "The internal auditor assigned to verify the branch data.", "The supervisor who handles corporate credit clients."],
            "answer": "The person designated by the account holder to receive the funds in the account in the event of the holder's death.",
            "explanation": "মনোনীত ব্যক্তি বা নমিনি হলেন তিনি, যাকে অ্যাকাউন্টধারী ব্যক্তি নিজের মৃত্যুর পর তার অ্যাকাউন্টের জমানো টাকা পাওয়ার জন্য আইনিভাবে মনোনীত করে যান।"
        },
        {
            "id": 68,
            "subject": "Bank Interview (Financial Concepts)",
            "level": "Intermediate",
            "question": "What is 'Treasury Bills' (T-Bills)?",
            "options": ["Short-term debt instruments issued by the government to meet short-term financial requirements, typically considered risk-free.", "The total bills paid by the bank for its utility lines.", "High risk corporate investment bonds.", "Foreign currency notes held by global trading banks."],
            "answer": "Short-term debt instruments issued by the government to meet short-term financial requirements, typically considered risk-free.",
            "explanation": "ট্রেজারি বিল (T-Bills) হলো সরকারের পক্ষে কেন্দ্রীয় ব্যাংক কর্তৃক ইস্যুকৃত স্বল্পমেয়াদী ঋণপত্র, যা অত্যন্ত নিরাপদ ও নিশ্চিত মুনাফাযুক্ত বিনিয়োগ মাধ্যম।"
        },
        {
            "id": 69,
            "subject": "Bank Interview (Central Banking)",
            "level": "Intermediate",
            "question": "What is the full form of 'MICR' code found on a cheque?",
            "options": ["Magnetic Ink Character Recognition", "Management Information Credit Route", "Money Integration Cleared Registry", "Micro Ink Coding Ratio"],
            "answer": "Magnetic Ink Character Recognition",
            "explanation": "MICR-এর পূর্ণরূপ হলো Magnetic Ink Character Recognition, যা চেকের নিচে বিশেষ চৌম্বকীয় কালিতে লেখা কোড, যা দিয়ে দ্রুত ও স্বয়ংক্রিয়ভাবে চেক প্রসেস বা ক্লিয়ারিং করা হয়।"
        },
        {
            "id": 70,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What is 'Credit Concentration Risk'?",
            "options": ["The risk of credit card details leaking online.", "The risk of loss arising from having too much exposure or lending to a single borrower, industry, or geographic sector.", "The risk that all cash managers will fall sick together.", "The risk that central bank audits will take too much time."],
            "answer": "The risk of loss arising from having too much exposure or lending to a single borrower, industry, or geographic sector.",
            "explanation": "ক্রেডিট কনসেন্ট্রেশন রিস্ক হলো যখন একটি ব্যাংক তার মোট ঋণের বড় অংশ কোনো একক বড় গ্রুপ, শিল্প (যেমন গার্মেন্টস) বা অঞ্চলে ঋণ দেয়। ওই খাত সংকটে পড়লে ব্যাংক বড় ঝুঁকিতে পড়ে।"
        },
        {
            "id": 71,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Processing Fee' in loan disbursement?",
            "options": ["A one-time charge collected by the bank to cover administrative expenses of evaluating and processing a loan application.", "The daily interest added to accounts.", "The penalty charge if a borrower defaults on installments.", "The commission paid to local field brokers."],
            "answer": "A one-time charge collected by the bank to cover administrative expenses of evaluating and processing a loan application.",
            "explanation": "প্রসেসিং ফি হলো ঋণ দেওয়ার পূর্বে গ্রাহকের আবেদনপত্র যাচাই, দলিল পরীক্ষা ও প্রশাসনিক কাজ সম্পন্ন করার জন্য ব্যাংক কর্তৃক নেওয়া এককালীন চার্জ।"
        },
        {
            "id": 72,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Intermediate",
            "question": "What does 'RTGS' mean and when is it typically preferred?",
            "options": ["Routine Tax Government Settlement; preferred for minor bills.", "Real Time Gross Settlement; preferred for high-value transactions requiring immediate settlement.", "Remote Transfer Group System; preferred for personal savings.", "Registered Trade Growth Scheme; preferred for industrial layouts."],
            "answer": "Real Time Gross Settlement; preferred for high-value transactions requiring immediate settlement.",
            "explanation": "RTGS (Real Time Gross Settlement) হলো তাত্ক্ষণিক বড় অঙ্কের অর্থ স্থানান্তরের একটি নিরাপদ ব্যবস্থা, যা সাধারণত বড় ধরনের ব্যবসায়িক লেনদেনের জন্য ব্যবহৃত হয়।"
        },
        {
            "id": 73,
            "subject": "Bank Interview (Macroeconomics)",
            "level": "Advanced",
            "question": "What is 'FDI' (Foreign Direct Investment)?",
            "options": ["An investment made by local commercial banks in central bonds.", "An investment made by a company or individual from one country into business interests located in another country, gaining significant control.", "The total grant given by the United Nations to a developing country.", "A currency exchange platform used in local airports."],
            "answer": "An investment made by a company or individual from one country into business interests located in another country, gaining significant control.",
            "explanation": "FDI (প্রত্যক্ষ বৈদেশিক বিনিয়োগ) হলো যখন কোনো বিদেশী প্রতিষ্ঠান বা ব্যক্তি দেশের উৎপাদন বা কোনো ব্যবসায় সরাসরি পুঁজি বিনিয়োগ করে এবং পরিচালনার অংশীদার হয়।"
        },
        {
            "id": 74,
            "subject": "Bank Interview (Behavioral)",
            "level": "Beginner",
            "question": "How do you ensure data confidentiality when operating at a branch computer?",
            "options": ["By sharing passwords only with very close friends.", "By locking the computer screen whenever stepping away from the desk and never revealing passwords.", "By writing passwords down on a sticky note attached to the screen.", "By ignoring security rules if the customer rush is high."],
            "answer": "By locking the computer screen whenever stepping away from the desk and never revealing passwords.",
            "explanation": "ব্যাংকের তথ্য ও গ্রাহকের পাসওয়ার্ড সুরক্ষায় চরম গোপনীয়তা অবলম্বন করতে হয়। ডেস্ক ছেড়ে এক মিনিটের জন্য উঠলেও কম্পিউটার স্ক্রিন লক করা প্রতিটি ব্যাংক কর্মকর্তার মৌলিক দায়িত্ব।"
        },
        {
            "id": 75,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is 'Moratorium Period' in educational or industrial loans?",
            "options": ["The timeline during which a bank can cancel a credit product.", "A designated period during a loan term when the borrower is not required to make any repayment payments.", "The exact day a loan becomes a bad debt.", "The closing timeline of annual balance sheet statements."],
            "answer": "A designated period during a loan term when the borrower is not required to make any repayment payments.",
            "explanation": "মোরাটোরিয়াম পিরিয়ড বা গ্রেস পিরিয়ড হলো ঋণ নেওয়ার পর শুরুর দিকের এমন একটি সময়কাল, যখন গ্রাহককে কোনো কিস্তি দিতে হয় না (যেমন স্টুডেন্ট লোনে পড়াশোনা চলাকালীন সময়)।"
        },
        {
            "id": 76,
            "subject": "Bank Interview (Accounting & Audit)",
            "level": "Intermediate",
            "question": "What does a 'Balance Sheet' present?",
            "options": ["The daily cash records collected at counter tables.", "A financial statement that summarizes a company’s assets, liabilities, and shareholders' equity at a specific point in time.", "A target board showing monthly credit card sales volumes.", "A document calculating staff payroll deductions."],
            "answer": "A financial statement that summarizes a company’s assets, liabilities, and shareholders' equity at a specific point in time.",
            "explanation": "ব্যালেন্স শিট বা উদ্বর্তপত্র হলো একটি নির্দিষ্ট তারিখে কোনো প্রতিষ্ঠানের মোট সম্পদ (Assets), দায় (Liabilities) ও মালিকানা স্বত্বের (Equity) একটি সামগ্রিক আর্থিক চিত্র।"
        },
        {
            "id": 77,
            "subject": "Bank Interview (Credit Management)",
            "level": "Advanced",
            "question": "What is 'Syndicated Loan'?",
            "options": ["A loan given to illegal networks or groups.", "A large loan offered by a group of commercial banks or institutional investors together to a single corporate borrower to spread risk.", "A fast approval minor crop loan given to rural workers.", "An auto renewal loan option offered to long term depositors."],
            "answer": "A large loan offered by a group of commercial banks or institutional investors together to a single corporate borrower to spread risk.",
            "explanation": "সিন্ডিকেটেড লোন হলো যখন কোনো বড় মেগা প্রজেক্টের (যেমন মেগা ব্রিজ বা পাওয়ার প্ল্যান্ট) জন্য একটি ব্যাংক একা ঝুঁকি না নিয়ে বেশ কয়েকটি ব্যাংক মিলে যৌথভাবে একটি বড় ঋণ বা তহবিল গঠন করে।"
        },
        {
            "id": 78,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Beginner",
            "question": "What does 'POS Terminal' stand for?",
            "options": ["Point of Sale; a handheld device that processes credit/debit card transactions at merchant stores.", "Payment Operations System; used in international wire transfers.", "Public Online Service; used in public info centers.", "Post Office Service; used for traditional money tracking."],
            "answer": "Point of Sale; a handheld device that processes credit/debit card transactions at merchant stores.",
            "explanation": "POS (Point of Sale) টার্মিনাল হলো দোকান বা শপিং মলে থাকা ছোট কার্ড সোয়াইপ মেশিন, যার মাধ্যমে ডেবিট বা ক্রেডিট কার্ড দিয়ে সরাসরি বিল পরিশোধ করা যায়।"
        },
        {
            "id": 79,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is 'Escrow Account'?",
            "options": ["A temporary account for bank employee picnic funds.", "A third-party account where funds are kept safely until certain conditions of a contract or transaction are fulfilled by both primary parties.", "A savings account opened for minor students.", "An inactive corporate credit accumulation line."],
            "answer": "A third-party account where funds are kept safely until certain conditions of a contract or transaction are fulfilled by both primary parties.",
            "explanation": "এসক্রো অ্যাকাউন্ট হলো একটি নিরপেক্ষ তৃতীয় পক্ষের হিসাব, যেখানে বড় কোনো লেনদেনের শর্ত পূরণ না হওয়া পর্যন্ত টাকা নিরাপদে জমা রাখা হয় (যেমন আবাসন কেনাবেচায় ক্রেতা ও বিক্রেতার মাঝে)।"
        },
        {
            "id": 80,
            "subject": "Bank Interview (Central Banking)",
            "level": "Advanced",
            "question": "What is the core target of a Central Bank implementing 'Sterilization' operations?",
            "options": ["To medically clean bank facilities and branches.", "To neutralize the inflationary or liquidity impact of foreign exchange inflows on the domestic monetary market.", "To replace old torn paper notes with crisp new ones.", "To close down illegal non banking institutions directly."],
            "answer": "To neutralize the inflationary or liquidity impact of foreign exchange inflows on the domestic monetary market.",
            "explanation": "স্টেরিলাইজেশন হলো কেন্দ্রীয় ব্যাংকের একটি ব্যবস্থা, যার মাধ্যমে দেশে হঠাৎ প্রচুর বিদেশী মুদ্রা বা রেমিট্যান্স ঢুকলে তা বাজারে যাতে মুদ্রাস্ফীতি তৈরি করতে না পারে, সেজন্য খোলা বাজারে বন্ড বিক্রি করে টাকার ভারসাম্য রক্ষা করা হয়।"
        },
        {
            "id": 81,
            "subject": "Bank Interview (Retail Banking)",
            "level": "Beginner",
            "question": "What is an 'EMI' in retail loans?",
            "options": ["Equated Monthly Installment; a fixed payment amount made by a borrower to a lender at a specified date each calendar month.", "Emergency Money Index; calculated for unexpected crises.", "Electronic Money Integration; a digital card update protocol.", "Efficient Management Indicator; evaluated for branch officers."],
            "answer": "Equated Monthly Installment; a fixed payment amount made by a borrower to a lender at a specified date each calendar month.",
            "explanation": "EMI-এর পূর্ণরূপ হলো Equated Monthly Installment। এটি হলো সুদাসলসহ ঋণের এমন একটি নির্দিষ্ট মাসিক কিস্তি, যা গ্রাহককে প্রতি মাসে একটি নির্দিষ্ট তারিখে ব্যাংকে জমা দিতে হয়।"
        },
        {
            "id": 82,
            "subject": "Bank Interview (Trade Finance)",
            "level": "Intermediate",
            "question": "What does 'NOSTRO Account' mean?",
            "options": ["An account held by a domestic citizen in a domestic branch.", "An account that our bank maintains in a foreign bank in the currency of that foreign country.", "A zero balance salary card account.", "A loan tracking ledger handled by corporate risk officers."],
            "answer": "An account that our bank maintains in a foreign bank in the currency of that foreign country.",
            "explanation": "নস্ট্রো (Nostro) অ্যাকাউন্ট হলো আমাদের দেশের কোনো ব্যাংকের ল্যাটিন অর্থ 'আমাদের অ্যাকাউন্ট', যা তারা আন্তর্জাতিক বাণিজ্য সহজ করার জন্য বিদেশের কোনো ব্যাংকে তাদের দেশের মুদ্রায় খুলে থাকে (যেমন নিউ ইয়র্কের কোনো ব্যাংকে সোনালী ব্যাংকের ডলার অ্যাকাউন্ট)।"
        },
        {
            "id": 83,
            "subject": "Bank Interview (Corporate Governance)",
            "level": "Advanced",
            "question": "What does 'Conflict of Interest' mean for a bank board director?",
            "options": ["A healthy academic debate between board members regarding corporate plans.", "A situation where a director's personal or business interest clashes with the best interest of the bank, potentially leading to biased decisions.", "A conflict between two competing customer queues.", "A disagreement regarding branch architectural choices."],
            "answer": "A situation where a director's personal or business interest clashes with the best interest of the bank, potentially leading to biased decisions.",
            "explanation": "স্বার্থের সংঘাত বা Conflict of Interest হলো যখন ব্যাংকের কোনো পরিচালকের ব্যক্তিগত ব্যবসা বা আত্মীয়ের লোন পাসের বিষয়টি বোর্ডে আসে, যা ব্যাংকের নিরপেক্ষ সিদ্ধান্ত গ্রহণে বাধা সৃষ্টি করতে পারে।"
        },
        {
            "id": 84,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Cash Vault' of a bank?",
            "options": ["A software terminal tracking branch profits.", "A highly secure, fortified room or safe inside a bank branch used to store large volumes of cash and valuables.", "A mobile van distributing small coins.", "An online cloud database platform."],
            "answer": "A highly secure, fortified room or safe inside a bank branch used to store large volumes of cash and valuables.",
            "explanation": "ক্যাশ ভল্ট হলো ব্যাংকের ভেতরের একটি অত্যন্ত সুরক্ষিত এবং সিসিটিভি নিয়ন্ত্রিত ঘর বা লকার, যেখানে ব্যাংকের প্রতিদিনের নগদ টাকা ও মূল্যবান জিনিসপত্র নিরাপদে লক করে রাখা হয়।"
        },
        {
            "id": 85,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What is 'Legal Risk' in financial services?",
            "options": ["The risk of customers getting arrested for traffic rules violations.", "The risk of loss arising from lawsuits, legal judgments, or contracts that turn out to be legally unenforceable.", "The risk that the government will change the working days calendar.", "The risk that corporate documents will get damaged in rain."],
            "answer": "The risk of loss arising from lawsuits, legal judgments, or contracts that turn out to be legally unenforceable.",
            "explanation": "আইনি ঝুঁকি বা Legal Risk বলতে বোঝায় ভুল বা ত্রুটিপূর্ণ লোন চুক্তির কারণে গ্রাহকের বিরুদ্ধে মামলা করে টাকা তুলতে না পারা, অথবা নিয়মনীতি লঙ্ঘনের জন্য ব্যাংকের ওপর বড় অঙ্কের জরিমানা হওয়া।"
        },
        {
            "id": 86,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Teller' in a bank?",
            "options": ["An automated telephone system.", "A bank employee who deals directly with customers for routine transactions like cash deposits, withdrawals, and balance updates.", "An external auditor inspecting the accounts.", "A person who calls customers for recovery updates."],
            "answer": "A bank employee who deals directly with customers for routine transactions like cash deposits, withdrawals, and balance updates.",
            "explanation": "টেলার (Teller) হলেন ব্যাংকের ফ্রন্ট ডেস্কে বা ক্যাশ কাউন্টারে বসা কর্মকর্তা, যিনি সরাসরি গ্রাহকের কাছ থেকে টাকা জমা নেন এবং চেকের বিপরীতে টাকা প্রদান করেন।"
        },
        {
            "id": 87,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Liquidity Crisis'?",
            "options": ["A shortage of drinking water inside branches.", "A situation where a bank faces an acute shortage of ready cash to meet immediate short-term obligations and customer withdrawals.", "A state where a bank cannot print new chequefbooks.", "A sudden crash in international stock markets."],
            "answer": "A situation where a bank faces an acute shortage of ready cash to meet immediate short-term obligations and customer withdrawals.",
            "explanation": "তারল্য সংকট হলো এমন একটি অবস্থা যখন কোনো ব্যাংকে গ্রাহকের দাবিকৃত নগদ টাকা বা তাৎক্ষণিক পাওনা মেটানোর মতো পর্যাপ্ত ক্যাশ টাকা বা তরল সম্পদ থাকে না।"
        },
        {
            "id": 88,
            "subject": "Bank Interview (Financial Concepts)",
            "level": "Intermediate",
            "question": "What is 'Face Value' of a share or bond?",
            "options": ["The value estimated by looking at market trends.", "The nominal value or original value stated on the certificate by the issuer, independent of its market price.", "The maximum price a share hits in a year.", "The current tax rate added to corporate investments."],
            "answer": "The nominal value or original value stated on the certificate by the issuer, independent of its market price.",
            "explanation": "ফেসব ভ্যালু বা অভিহিত মূল্য হলো বন্ড বা শেয়ারের সার্টিফিকেটের ওপর খোদাই করা বা লেখা মূল প্রাথমিক দাম, যার ওপর ভিত্তি করে লভ্যাংশ বা সুদ হিসাব করা হয়।"
        },
        {
            "id": 89,
            "subject": "Bank Interview (Central Banking)",
            "level": "Intermediate",
            "question": "What is the purpose of 'IFSC' or Routing/Swift codes?",
            "options": ["To check branch cleaning guidelines.", "To uniquely identify a specific bank branch to ensure error-free electronic fund routing and clearance during local or international transfers.", "To calculate individual employee work hours.", "To track corporate credit client details online."],
            "answer": "To uniquely identify a specific bank branch to ensure error-free electronic fund routing and clearance during local or international transfers.",
            "explanation": "রউটিং কোড বা সুইফট কোড (SWIFT Code) হলো একটি নির্দিষ্ট ব্যাংক শাখার অনন্য আলফা-নিউমেরিক আইডি, যা দিয়ে দেশের ভেতর বা আন্তর্জাতিকভাবে সঠিক শাখায় টাকা পাঠানো নিশ্চিত করা হয়।"
        },
        {
            "id": 90,
            "subject": "Bank Interview (Risk Management)",
            "level": "Advanced",
            "question": "What does 'Stress Testing' mean for a bank?",
            "options": ["A medical checkup mandatory for branch heads.", "A simulation technique used to analyze how a bank’s portfolio will perform under hypothetical extreme economic shock scenarios.", "A test to calculate database network speeds during rush hours.", "Evaluating how fast telers can handle cash rows."],
            "answer": "A simulation technique used to analyze how a bank’s portfolio will perform under hypothetical extreme economic shock scenarios.",
            "explanation": "স্ট্রেস টেস্টিং হলো এমন একটি কাল্পনিক পরীক্ষা বা সিমুলেশন, যার মাধ্যমে ব্যাংক যাচাই করে যে দেশে যদি বড় কোনো আর্থিক মহামন্দা বা চরম মন্দা দেখা দেয়, তবে ব্যাংক তা সহ্য করে টিকে থাকতে পারবে কি না।"
        },
        {
            "id": 91,
            "subject": "Bank Interview (Core Banking)",
            "level": "Beginner",
            "question": "What is 'Surplus' cash inside a branch?",
            "options": ["Cash stolen from bank vault structures.", "The extra cash balance held by a branch that exceeds its daily approved limit, which must be sent to the main chest/central pool.", "The cash given to poor farmers as free aid.", "The amount kept for employee daily snacks."],
            "answer": "The extra cash balance held by a branch that exceeds its daily approved limit, which must be sent to the main chest/central pool.",
            "explanation": "উদ্বৃত্ত নগদ বা সারপ্লাস ক্যাশ হলো প্রতিটি শাখার জন্য অনুমোদিত দৈনিক সর্বোচ্চ সীমার অতিরিক্ত ক্যাশ টাকা, যা দিন শেষে মূল চেস্টে বা ফিডার শাখায় পাঠিয়ে দিতে হয়।"
        },
        {
            "id": 92,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Intermediate",
            "question": "What is the primary feature of 'Blockchain Technology' in banking futures?",
            "options": ["A mechanism to connect physical branch buildings via chains.", "A decentralized, distributed ledger technology that offers enhanced security, transparency, and immutability for financial records.", "A specialized anti-virus tool built for mobile banking.", "An automated robotic system to count cash bags."],
            "answer": "A decentralized, distributed ledger technology that offers enhanced security, transparency, and immutability for financial records.",
            "explanation": "ব্লকচেইন হলো একটি বিকেন্দ্রীকৃত ডিজিটাল লেজার প্রযুক্তি, যেখানে ডেটা পরিবর্তন বা হ্যাক করা প্রায় অসম্ভব। এটি লেনদেনকে অত্যন্ত নিরাপদ, স্বচ্ছ ও মধ্যস্থতাকারীহীন করে তোলে।"
        },
        {
            "id": 93,
            "subject": "Bank Interview (Macroeconomics)",
            "level": "Advanced",
            "question": "What does 'GDP' (Gross Domestic Product) reflect?",
            "options": ["The total profit earned by all commercial banks inside a country.", "The total monetary or market value of all the finished goods and services produced within a country's borders in a specific time period.", "The total foreign exchange reserves held by central bank.", "The total value of outstanding credit lines across the nation."],
            "answer": "The total monetary or market value of all the finished goods and services produced within a country's borders in a specific time period.",
            "explanation": "GDP বা মোট দেশজ উৎপাদন হলো একটি নির্দিষ্ট বছরে একটি দেশের ভৌগোলিক সীমানার ভেতরে উৎপাদিত চূড়ান্ত পর্যায়ের সমস্ত পণ্য ও সেবার মোট আর্থিক মূল্য।"
        },
        {
            "id": 94,
            "subject": "Bank Interview (Behavioral)",
            "level": "Beginner",
            "question": "If you observe a senior colleague breaking a safety protocol at the vault entry, what will you do?",
            "options": ["Ignore it because they are senior.", "Follow the bank's operational guideline, politely remind them, and report to the branch manager if the breach poses a security threat.", "Tell other junior staff members to start gossiping.", "Leave the bank immediately without telling anyone."],
            "answer": "Follow the bank's operational guideline, politely remind them, and report to the branch manager if the breach poses a security threat.",
            "explanation": "ভল্টের নিরাপত্তা ব্যাংকের সুরক্ষার জন্য সবচেয়ে গুরুত্বপূর্ণ। নিয়মের ক্ষেত্রে জুনিয়র-সিনিয়র কোনো ভেদাভেদ নেই। যেকোনো বিচ্যুতি সঙ্গে সঙ্গে নিয়ম অনুযায়ী রিপোর্ট করতে হবে।"
        },
        {
            "id": 95,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is 'Post-Dated Cheque' (PDC)?",
            "options": ["A cheque that has already expired.", "A cheque that bears a future date, meaning it cannot be honored or encashed by the bank until that specific future date arrives.", "A cheque sent via registered post office mail.", "A cheque issued without any signature validations."],
            "answer": "A cheque that bears a future date, meaning it cannot be honored or encashed by the bank until that specific future date arrives.",
            "explanation": "ভবিষ্যতের কোনো তারিখ উল্লেখ করে যে চেক দেওয়া হয়, তাকে পোস্ট-ডেটেড বা অগ্রিম তারিখের চেক বলে। চেকে উল্লেখিত তারিখ আসার আগে ব্যাংক গ্রাহককে এই চেকে কোনো টাকা দিতে পারে না।"
        },
        {
            "id": 96,
            "subject": "Bank Interview (Accounting & Audit)",
            "level": "Intermediate",
            "question": "What is the core target of 'Asset Quality' evaluation in bank audits?",
            "options": ["To calculate the market value of computers and office desks.", "To evaluate the credit risk and performance of the bank's loan portfolio, tracking the percentage of performing vs non-performing loans.", "To check the gold reserves held inside central vaults.", "To determine the tax exemptions available for rural branch lines."],
            "answer": "To evaluate the credit risk and performance of the bank's loan portfolio, tracking the percentage of performing vs non-performing loans.",
            "explanation": "অ্যাসেট কোয়ালিটি বা সম্পদের গুণগত মান যাচাই বলতে অডিটররা দেখেন ব্যাংকের দেওয়া ঋণের মধ্যে কতটুকু নিয়মিত আদায় হচ্ছে এবং কতটা খেলাপি (NPL) হয়ে গেছে। এটি ব্যাংকের স্বাস্থ্যের অন্যতম সূচক।"
        },
        {
            "id": 97,
            "subject": "Bank Interview (Credit Management)",
            "level": "Advanced",
            "question": "What is 'Debt Service Coverage Ratio' (DSCR) and why is it checked for commercial loans?",
            "options": ["It measures the total distance between a company and bank branch networks.", "It measures a firm's available cash flow to pay its current debt obligations (interest and principal payments).", "It tracks the total credit cards used by company staff in a quarter.", "It calculates the tax deductions available for manufacturing units."],
            "answer": "It ensures a firm's available cash flow to pay its current debt obligations (interest and principal payments).",
            "explanation": "DSCR অনুপাতটি দেখে ক্রেডিট অফিসাররা নিশ্চিত হন যে, কোনো একটি ব্যবসা বা প্রজেক্ট প্রতি মাসে যে লাভ বা ক্যাশ ফ্লো তৈরি করছে, তা দিয়ে সে ব্যাংকের ঋণের কিস্তি ও সুদ নিয়মিত শোধ করতে পারবে কি না।"
        },
        {
            "id": 98,
            "subject": "Bank Interview (Financial Technology)",
            "level": "Beginner",
            "question": "What is 'Digital Wallet' (E-Wallet)?",
            "options": ["A physical leather wallet equipped with digital trackers.", "A software application that securely stores users' payment information and passwords for making quick digital transactions.", "A database containing corporate employee profiles.", "A special secure box kept inside physical cash counters."],
            "answer": "A software application that securely stores users' payment information and passwords for making quick digital transactions.",
            "explanation": "ডিজিটাল ওয়ালেট হলো একটি সফটওয়্যার বা অ্যাপ (যেমন মোবাইল ওয়ালেট), যা টাকা বা কার্ডের তথ্য নিরাপদে জমা রেখে অনলাইন কেনাকাটা বা ক্যাশলেস লেনদেনে সাহায্য করে।"
        },
        {
            "id": 99,
            "subject": "Bank Interview (Core Banking)",
            "level": "Intermediate",
            "question": "What is 'LOR' (Letter of Reference) or credit reference in retail banking?",
            "options": ["A certificate given to employees for hitting operational targets.", "A formal assessment or statement verifying a client's creditworthiness and financial discipline provided by a previous banker or credible body.", "A form used to change account nominee choices.", "A legal notice issued to corporate tax offices."],
            "answer": "A formal assessment or statement verifying a client's creditworthiness and financial discipline provided by a previous banker or credible body.",
            "explanation": "ক্রেডিট রেফারেন্স লেটার হলো কোনো বিশ্বস্ত প্রতিষ্ঠান বা আগের ব্যাংকের দেওয়া প্রশংসাপত্র, যা নতুন ঋণ বা অ্যাকাউন্ট খোলার সময় গ্রাহকের ভালো আর্থিক লেনদেনের স্বভাব ও বিশ্বস্ততা প্রমাণ করে।"
        },
        {
            "id": 100,
            "subject": "Bank Interview (Central Banking)",
            "level": "Advanced",
            "question": "What does 'Basel Accord' (Basel I, II, III) primarily standardize globally?",
            "options": ["The recruitment salary frameworks for central bankers.", "The international regulation and minimum capital requirements for commercial banks to manage risk and ensure global financial stability.", "The technical guidelines for building high security currency vaults.", "The exchange rate margins between western nations."],
            "answer": "The international regulation and minimum capital requirements for commercial banks to manage risk and ensure global financial stability.",
            "explanation": "ব্যাসেল চুক্তি (Basel Accords) হলো সুইজারল্যান্ডের ব্যাসেল কমিটির তৈরি আন্তর্জাতিক ব্যাংকিং নীতিমালা, যা বিশ্বজুড়ে ব্যাংকগুলোর ঝুঁকি (যেমন ক্রেডিট, মার্কেট, অপারেশনাল রিস্ক) মোকাবেলা করার জন্য পর্যাপ্ত মূলধন রাখার নিয়ম নির্ধারণ করে।"
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
                title="Bank. Jobs"
            />

            {/* Questions */}
            <InterviewQuestion
                questions={questions}
                badgeColor={badgeColor}
                title="Bank"
            />
        </div>
    );
};

export default BankIntervirePage;