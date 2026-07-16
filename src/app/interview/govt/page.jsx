import FrontendInterviewHeadder from '@/components/InterviewComponent/FrontendInterviewHeadder';
import InterviewQuestion from '@/components/InterviewComponent/InterviewQuestion';
import React from 'react';

const GovtJobs = () => {
    const questions = [
        {
            "id": 1,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "বাংলা ভাষার আদি নিদর্শন 'চর্যাপদ' কত সালে আবিষ্কৃত হয়?",
            "options": ["১৯০৫", "১৯০৭", "১৯১৬", "১৯২১"],
            "answer": "১৯০৭",
            "explanation": "১৯০৭ সালে মহামহোপাধ্যায় হরপ্রসাদ শাস্ত্রী নেপালের রাজদরবারের রয়্যাল লাইব্রেরি থেকে চর্যাপদ আবিষ্কার করেন।"
        },
        {
            "id": 2,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "'গীতাঞ্জলি' কাব্যের জন্য রবীন্দ্রনাথ ঠাকুর কত সালে নোবেল পুরস্কার পান?",
            "options": ["১৯১০", "১৯১১", "১৯১৩", "১৯১৫"],
            "answer": "১৯১৩",
            "explanation": "রবীন্দ্রনাথ ঠাকুর ১৯১৩ সালে সাহিত্যের প্রথম অকৃষ্ণাঙ্গ ও এশীয় হিসেবে নোবেল পুরস্কার লাভ করেন।"
        },
        {
            "id": 3,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "বাংলা সাহিত্যের প্রথম সার্থক ঔপন্যাসিক কে?",
            "options": ["প্যারীচাঁদ মিত্র", "বঙ্কিমচন্দ্র চট্টোপাধ্যায়", "রবীন্দ্রনাথ ঠাকুর", "শরৎচন্দ্র চট্টোপাধ্যায়"],
            "answer": "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
            "explanation": "বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের 'দুর্গেশনন্দিনী' (১৮৬৫) বাংলা সাহিত্যের প্রথম সার্থক উপন্যাস।"
        },
        {
            "id": 4,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "কাজী নজরুল ইসলামের 'অগ্নিবীণা' কাব্যের প্রথম কবিতা কোনটি?",
            "options": ["প্রলয়োল্লাস", "বিদ্রোহী", "খেয়াপারের তরণী", "কোরবানী"],
            "answer": "প্রলয়োল্লাস",
            "explanation": "১৯২২ সালে প্রকাশিত অগ্নিবীণা কাব্যের প্রথম কবিতা 'প্রলয়োল্লাস' এবং দ্বিতীয় কবিতা 'বিদ্রোহী'।"
        },
        {
            "id": 5,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "'কবর' নাটকটির রচয়িতা কে?",
            "options": ["জসীমউদ্দীন", "মুনীর চৌধুরী", "শামসুর রাহমান", "সেলিম আল দীন"],
            "answer": "মুনীর চৌধুরী",
            "explanation": "১৯৫২ সালের ভাষা আন্দোলনের পটভূমিতে মুনীর চৌধুরী ভাষা শহীদদের স্মরণে ঢাকা কেন্দ্রীয় কারাগারে বসে এই নাটকটি লেখেন।"
        },
        {
            "id": 6,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "বাংলা ভাষায় মৌলিক স্বরধ্বনি কয়টি?",
            "options": ["৭টি", "১১টি", "২৫টি", "৩৭টি"],
            "answer": "৭টি",
            "explanation": "বাংলায় মৌলিক স্বরধ্বনি 7টি (অ, আ, ই, উ, এ, ও, অ্যা) এবং মোট স্বরবর্ণ 11টি।"
        },
        {
            "id": 7,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "'সমাস' শব্দের অর্থ কী?",
            "options": ["সংক্ষেপণ", "মিলন", "বিস্তার", "বিশ্লেষণ"],
            "answer": "সংক্ষেপণ",
            "explanation": "সমাস শব্দের অর্থ সংক্ষেপণ, মিলন বা একাধিক পদের একপদীকরণ।"
        },
        {
            "id": 8,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "কোনটি 'ক্ষীয়মাণ' শব্দের বিপরীত শব্দ?",
            "options": ["বর্ধমান", "বৃহৎ", "চলমান", "স্থায়ী"],
            "answer": "বর্ধমান",
            "explanation": "ক্ষীয়মাণ মানে যা কমে যাচ্ছে, আর বর্ধমান মানে যা বৃদ্ধি পাচ্ছে।"
        },
        {
            "id": 9,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Advanced",
            "question": "শুদ্ধ বানান কোনটি?",
            "options": ["মুহুর্মুহু", "মুহূর্মুহূ", "মুহুর্মুহূ", "মুহূর্মuহু"],
            "answer": "মুহুর্মুহু",
            "explanation": "শুদ্ধ রূপটি হলো 'মুহুর্মuহু', যেখানে দুটি ম-তেই হ্রস্ব-উ (ু) কার বসে।"
        },
        {
            "id": 10,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "যার কোনো উপায় নেই— এক কথায় কী হবে?",
            "options": ["অনাথ", "নিরুপায়", "দুর্দশাপন্ন", "অসহায়"],
            "answer": "নিরুপায়",
            "explanation": "বাক্য সংকোচনে 'যার কোনো উপায় নেই' এক কথায় হয় 'নিরুপায়'।"
        },
        {
            "id": 11,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Advanced",
            "question": "'মনীষা' শব্দের সঠিক সন্ধি বিচ্ছেদ কোনটি?",
            "options": ["মন + ঈষা", "মনস + ঈষা", "মনী + যা", "মণি + ষা"],
            "answer": "মনস + ঈষা",
            "explanation": "এটি নিপাতনে সিদ্ধ ব্যঞ্জনসন্ধির একটি উদাহরণ: মনস + ঈষা = মনীষা।"
        },
        {
            "id": 12,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "সিংহাসন কোন সমাস?",
            "options": ["कर्मধারয়", "তৎপুরুষ", "বহুব্রীহি", "দ্বিগু"],
            "answer": "কর্মধারয়",
            "explanation": "সিংহ চিহ্নিত আসন = সিংহাসন। এটি মধ্যপদলোপী কর্মধারয় সমাস।"
        },
        {
            "id": 13,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "বাংলা গদ্যের জনক কে?",
            "options": ["ঈশ্বরচন্দ্র বিদ্যাসাগর", "রবীন্দ্রনাথ ঠাকুর", "প্রমথ চৌধুরী", "প্যারীচাঁদ মিত্র"],
            "answer": "ঈশ্বরচন্দ্র বিদ্যাসাগর",
            "explanation": "গদ্যে প্রথম বিরাম চিহ্নের সফল ব্যবহার করার কারণে বিদ্যাসাগরকে বাংলা গদ্যের জনক বলা হয়।"
        },
        {
            "id": 14,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "প্রমথ চৌধুরীর সম্পাদিত পত্রিকার নাম কী?",
            "options": ["সবুজপত্র", "বঙ্গদর্শন", "তত্ত্ববোধিনী", "সওগাত"],
            "answer": "সবুজপত্র",
            "explanation": "১৯১৪ সালে প্রমথ চৌধুরীর সম্পাদনায় 'সবুজপত্র' প্রকাশিত হয়, যা বাংলা সাহিত্যে চলিত রীতির প্রবর্তনে ভূমিকা রাখে।"
        },
        {
            "id": 15,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Advanced",
            "question": "'চাঁদের অমাবস্যা' উপন্যাসটির রচয়িতা কে?",
            "options": ["সৈয়দ ওয়ালীউল্লাহ", "শওকত ওসমান", "আখতারুজ্জামান ইলিয়াস", "হাসান আজিজুল হক"],
            "answer": "সৈয়দ ওয়ালীউল্লাহ",
            "explanation": "লালসালু, চাঁদের অমাবস্যা ও কাঁদো নদী কাঁদো— এগুলো সৈয়দ ওয়ালীউল্লাহর বিখ্যাত উপন্যাস।"
        },
        {
            "id": 16,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "'রোহিণী' কোন উপন্যাসের প্রধান চরিত্র?",
            "options": ["বিষবৃক্ষ", "কৃষ্ণকান্তের উইল", "চোখের বালি", "চরিত্রহীন"],
            "answer": "কৃষ্ণকান্তের উইল",
            "explanation": "বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের বিখ্যাত সামাজিক উপন্যাস 'কৃষ্ণকান্তের উইল'-এর অন্যতম केंद्रीय চরিত্র রোহিণী।"
        },
        {
            "id": 17,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Advanced",
            "question": "বাংলা সাহিত্যের অন্ধকার যুগ বলা হয় কোন সময়কে?",
            "options": ["১২০১-১৩৫০ খ্রিঃ", "১২০০-১৮০০ খ্রিঃ", "৬৫৬-১২০০ খ্রিঃ", "১৫০০-১৬০০ খ্রিঃ"],
            "answer": "১২০১-১৩৫০ খ্রিঃ",
            "explanation": "তুর্কি আক্রমণের পর এই দেড়শ বছর উল্লেখযোগ্য কোনো সাহিত্য সৃষ্টি না হওয়ায় একে অন্ধকার যুগ ধরা হয়।"
        },
        {
            "id": 18,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "মাইকেল মধুসূদন দত্তের 'মেঘনাদবধ কাব্য' কত সালে প্রকাশিত হয়?",
            "options": ["১৮৬০", "১৮৬১", "১৮৬২", "১৮৬৫"],
            "answer": "১৮৬১",
            "explanation": "১৮৬১ সালে বাংলা সাহিত্যের প্রথম সার্থক মহাকাব্য 'মেঘনাদবধ কাব্য' প্রকাশিত হয় অমিত্রাক্ষর ছন্দে।"
        },
        {
            "id": 19,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "'সূর্য দীঘল বাড়ী' উপন্যাসটির রচয়িতা কে?",
            "options": ["আবু ইসহাক", "শওকত আলী", "আলাউদ্দিন আল আজাদ", "জহির রায়হান"],
            "answer": "আবু ইসহাক",
            "explanation": "আবু ইসহাকের বিখ্যাত দেশভাগ ও গ্রামীণ পটভূমির উপন্যাস হলো 'সূর্য দীঘল বাড়ী' (১৯৫৫)।"
        },
        {
            "id": 20,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "চলিত রীতির প্রবর্তক কে?",
            "options": ["রবীন্দ্রনাথ ঠাকুর", "প্রমথ চৌধুরী", "প্যারীচাঁদ মিত্র", "বঙ্কিমচন্দ্র চট্টোপাধ্যায়"],
            "answer": "প্রমথ চৌধুরী",
            "explanation": "প্রমথ চৌধুরী তাঁর 'সবুজপত্র' পত্রিকার মাধ্যমে বাংলা সাহিত্যে চলিত ভাষারীতি প্রতিষ্ঠা করেন।"
        },
        {
            "id": 21,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Advanced",
            "question": "'অনল-প্রবাহ' রচনা করেন কে?",
            "options": ["সৈয়দ ইসমাইল হোসেন সিরাজী", "মীর মশাররফ হোসেন", "কায়কোবাদ", "বেগম রোকেয়া"],
            "answer": "সৈয়দ ইসমাইল হোসেন সিরাজী",
            "explanation": "অনল-প্রবাহ জাতীয়তাবাদী চেতনায় উদ্বুদ্ধ সৈয়দ ইসমাইল হোসেন সিরাজীর একটি বিখ্যাত কাব্যগ্রন্থ যা ইংরেজ সরকার বাজেয়াপ্ত করেছিল।"
        },
        {
            "id": 22,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Intermediate",
            "question": "'বিষাদ-সিন্ধু' কোন ধরণের রচনা?",
            "options": ["মহাকাব্য", "ইতিহাস আশ্রিত উপন্যাস", "নাটক", "স্মৃতিকথা"],
            "answer": "ইতিহাস আশ্রিত উপন্যাস",
            "explanation": "মীর মশাররফ হোসেন রচিত 'বিষাদ-সিন্ধু' কারবালার ইতিহাস আশ্রিত একটি বিখ্যাত রোমান্টিক উপন্যাস।"
        },
        {
            "id": 23,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "বাংলা একাডেমি কত সালে প্রতিষ্ঠিত হয়?",
            "options": ["১৯৫২", "১৯৫৫", "১৯৬০", "১৯৭১"],
            "answer": "১৯৫৫",
            "explanation": "১৯৫৫ সালের ৩ ডিসেম্বর ভাষা আন্দোলনের ফলে ঢাকার বর্ধমান হাউজে বাংলা একাডেমি প্রতিষ্ঠিত হয়।"
        },
        {
            "id": 24,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "'পাখি সব করে রব রাতি পোহাইল' পঙক্তিটির রচয়িতা কে?",
            "options": ["মদনমোহন তর্কালঙ্কার", "রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "জীবনানন্দ দাশ"],
            "answer": "মদনমোহন তর্কালঙ্কার",
            "explanation": "মদনমোহন তর্কালঙ্কারের 'আমার পণ' কবিতার অংশ এটি।"
        },
        {
            "id": 25,
            "subject": "বাংলা (ভাষা ও সাহিত্য)",
            "level": "Beginner",
            "question": "'জীবনানন্দ দাশ' কে প্রধানত কী কবি বলা হয়?",
            "options": ["বিদ্রোহী কবি", "পল্লী কবি", "রূপসী বাংলার কবি / নির্জনতার কবি", "নাগরিক কবি"],
            "answer": "রূপসী বাংলার কবি / নির্জনতার কবি",
            "explanation": "প্রকৃতির রূপ ও নির্জনতার চিত্রায়নের জন্য জীবনানন্দ দাশকে নির্জনতার বা রূপসী বাংলার কবি বলা হয়।"
        },
        {
            "id": 26,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Beginner",
            "question": "What is the synonym of the word 'Competent'?",
            "options": ["Incompetent", "Capable", "Sluggish", "Frail"],
            "answer": "Capable",
            "explanation": "'Competent' শব্দের অর্থ দক্ষ বা যোগ্য, যার সমার্থক শব্দ হলো 'Capable'।"
        },
        {
            "id": 27,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "What is the antonym of the word 'Benign'?",
            "options": ["Malignant", "Kindly", "Friendly", "Gentle"],
            "answer": "Malignant",
            "explanation": "'Benign' মানে সদয় বা সৌম্য। এর বিপরীত হলো 'Malignant' (মারাত্মক/ক্ষতিকর)।"
        },
        {
            "id": 28,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Advanced",
            "question": "Choose the correct spelling:",
            "options": ["Bureaucracy", "Burocracy", "Beurocracy", "Bureacracy"],
            "answer": "Bureaucracy",
            "explanation": "Bureaucracy (আমলাতন্ত্র) শব্দের সঠিক বানান B-u-r-e-a-u-c-r-a-c-y।"
        },
        {
            "id": 29,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Beginner",
            "question": "Fill in the blank: 'He is devoid ___ common sense.'",
            "options": ["of", "in", "from", "with"],
            "answer": "of",
            "explanation": "Appropriate preposition: 'Devoid of' অর্থ কোনো কিছু বর্জিত বা হীন।"
        },
        {
            "id": 30,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "Who is the author of 'To Kill a Mockingbird'?",
            "options": ["Harper Lee", "Mark Twain", "Ernest Hemingway", "George Orwell"],
            "answer": "Harper Lee",
            "explanation": "আমেরিকান সাহিত্যের বিখ্যাত উপন্যাস 'To Kill a Mockingbird' লিখেছেন হার্পার লি (Harper Lee)।"
        },
        {
            "id": 31,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Beginner",
            "question": "Who wrote the famous play 'Hamlet'?",
            "options": ["William Shakespeare", "Christopher Marlowe", "John Milton", "Ben Jonson"],
            "answer": "William Shakespeare",
            "explanation": "'Hamlet' হলো উইলিয়াম শেক্সপিয়রের লেখা অন্যতম সেরা ট্র্যাজেডি নাটক।"
        },
        {
            "id": 32,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "What is the plural form of the word 'Oasis'?",
            "options": ["Oasises", "Oases", "Oasis", "Oasise"],
            "answer": "Oases",
            "explanation": "যেসব শব্দের শেষে 'is' থাকে, বহুবচনে তা 'es' হয়। যেমন: Oasis -> Oases।"
        },
        {
            "id": 33,
            "subject": " ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "Change the voice: 'Who is calling me?'",
            "options": ["By whom am I being called?", "By whom I am called?", "Who am I called by?", "By whom was I called?"],
            "answer": "By whom am I being called?",
            "explanation": "Who যুক্ত Active voice-কে Passive করতে প্রথমে By whom বসে এবং Present Continuous এর জন্য am/is/are + being + V3 বসে।"
        },
        {
            "id": 34,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Advanced",
            "question": "What is the meaning of the idiom 'Achilles' heel'?",
            "options": ["A strong point", "A weak point", "A fast runner", "An expensive shoe"],
            "answer": "A weak point",
            "explanation": "'Achilles' heel' ইডিয়মটির অর্থ দুর্বল স্থান বা ত্রুটি।"
        },
        {
            "id": 35,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Beginner",
            "question": "What is the noun form of the word 'Beautiful'?",
            "options": ["Beautify", "Beautifully", "Beauty", "Beauteous"],
            "answer": "Beauty",
            "explanation": "Beautiful হলো Adjective, Beautify হলো Verb, এবং Beauty হলো Noun।"
        },
        {
            "id": 36,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Advanced",
            "question": "Identify the part of speech of the underlined word: 'The fast train runs **fast**.' (এখানে ২য় fast-টি কী?)",
            "options": ["Noun", "Adjective", "Adverb", "Verb"],
            "answer": "Adverb",
            "explanation": "এখানে দ্বিতীয় 'fast' শব্দটি 'runs' (verb)-কে মডিফাই করছে, তাই এটি Adverb।"
        },
        {
            "id": 37,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "Select the correct sentence:",
            "options": ["Each of the boys has come.", "Each of the boys have come.", "Each of the boy has come.", "Every boys has come."],
            "answer": "Each of the boys has come.",
            "explanation": "'Each of the' এর পরে Noun-টি Plural (boys) হয় কিন্তু Verb-টি Singular (has) হয়।"
        },
        {
            "id": 38,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Beginner",
            "question": "Who is known as the 'Poet of Nature' in English literature?",
            "options": ["William Wordsworth", "John Keats", "Lord Byron", "P. B. Shelley"],
            "answer": "William Wordsworth",
            "explanation": "রোমান্টিক যুগের কবি উইলিয়াম ওয়ার্ডসওয়ার্থকে প্রকৃতির কবি (Poet of Nature) বলা হয়।"
        },
        {
            "id": 39,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "What type of book is 'Paradise Lost'?",
            "options": ["An Epic", "A Novel", "A Short Story", "A Play"],
            "answer": "An Epic",
            "explanation": "জন মিল্টন (John Milton) রচিত 'Paradise Lost' ইংরেজি সাহিত্যের একটি বিখ্যাত মহাকাব্য (Epic)।"
        },
        {
            "id": 40,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "Fill in the blank: 'I look forward to ___ from you soon.'",
            "options": ["hear", "hearing", "heard", "be heard"],
            "answer": "hearing",
            "explanation": "'Look forward to', 'with a view to' ইত্যাদির পর Verb-এর সাথে ing যুক্ত হয়।"
        },
        {
            "id": 41,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "What is the meaning of 'Call it a day'?",
            "options": ["Start working", "Stop working on something", "Celebrate a birthday", "A bright day"],
            "answer": "Stop working on something",
            "explanation": "'Call it a day' অর্থ সেদিনের মতো কাজ বা কোনো কার্যকলাপ বন্ধ করা।"
        },
        {
            "id": 42,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Advanced",
            "question": "Choose the correct spelling:",
            "options": ["Lieutenant", "Lieutinent", "Leftenant", "Lieuetenant"],
            "answer": "Lieutenant",
            "explanation": "Lieutenant (সামরিক পদমর্যাদা) মনে রাখার টেকনিক: Lie (মিথ্যা) + u (তুমি) + ten (দশ) + ant (পিপঁড়া)।"
        },
        {
            "id": 43,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Advanced",
            "question": "Which period is called the Golden Age of English literature?",
            "options": ["Victorian Period", "Elizabethan Period", "Romantic Period", "Modern Period"],
            "answer": "Elizabethan Period",
            "explanation": "রানী এলিজাবেথের আমলকে (১৫৫৮-১৬০৩) ড্রামা ও সাহিত্যের অভূতপূর্ব অগ্রগতির জন্য গোল্ডেন এজ বলা হয়।"
        },
        {
            "id": 44,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Advanced",
            "question": "Who wrote 'The Waste Land'?",
            "options": ["T. S. Eliot", "W. B. Yeats", "Virginia Woolf", "James Joyce"],
            "answer": "T. S. Eliot",
            "explanation": "আধুনিক যুগের বিখ্যাত দীর্ঘ কবিতা 'The Waste Land' (১৯২২) কবি টি. এস. এলিয়টের লেখা।"
        },
        {
            "id": 45,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Beginner",
            "question": "What is the superlative degree of 'Bad'?",
            "options": ["Badder", "Baddest", "Worse", "Worst"],
            "answer": "Worst",
            "explanation": "Bad (Positive) -> Worse (Comparative) -> Worst (Superlative)।"
        },
        {
            "id": 46,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "Fill in the blank: 'He died ___ over-eating.'",
            "options": ["of", "by", "from", "for"],
            "answer": "from",
            "explanation": "রোগে মরলে 'die of', দেশের জন্য মরলে 'die for', কিন্তু অতিরিক্ত খেয়ে বা কোনো কারণে মরলে 'die from' হয়।"
        },
        {
            "id": 47,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "Who is the author of 'Animal Farm'?",
            "options": ["George Orwell", "Charles Dickens", "Leo Tolstoy", "Thomas Hardy"],
            "answer": "George Orwell",
            "explanation": "রাজনৈতিক রূপকধর্মী উপন্যাস 'Animal Farm' ও '1984' এর লেখক জর্জ অরওয়েল।"
        },
        {
            "id": 48,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Beginner",
            "question": "What is the antonym of 'Fragile'?",
            "options": ["Weak", "Delicate", "Durable", "Broken"],
            "answer": "Durable",
            "explanation": "Fragile অর্থ ভঙ্গুর। এর বিপরীত Durable (টেকসই)।"
        },
        {
            "id": 49,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Intermediate",
            "question": "The book 'Gulliver's Travels' is written by —",
            "options": ["Jonathan Swift", "Daniel Defoe", "Alexander Pope", "Samuel Johnson"],
            "answer": "Jonathan Swift",
            "explanation": "বিখ্যাত ব্যঙ্গাত্মক উপন্যাস 'Gulliver's Travels' লিখেছেন জোনাথান সুইফট।"
        },
        {
            "id": 50,
            "subject": "ইংরেজি (English Language & Literature)",
            "level": "Beginner",
            "question": "What is the passive form of 'Do it'?",
            "options": ["Let it be done.", "Let it do.", "It should be done.", "Let do it."],
            "answer": "Let it be done.",
            "explanation": "Imperative sentence-কে Passive করার নিয়ম: Let + object + be + V3।"
        },
        {
            "id": 51,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "১ থেকে ১০০ পর্যন্ত মৌলিক সংখ্যা (Prime Numbers) মোট কয়টি?",
            "options": ["২২টি", "২৪টি", "২৫টি", "২৬টি"],
            "answer": "২৫টি",
            "explanation": "১ থেকে ১০০ পর্যন্ত মোট ২৫টি মৌলিক সংখ্যা আছে।"
        },
        {
            "id": 52,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "একটি সংখ্যার ৩ গুণ থেকে ১৫ বিয়োগ করলে যদি ফল ৩০ হয়, সংখ্যাটি কত?",
            "options": ["১০", "১২", "১৫", "২০"],
            "answer": "১৫",
            "explanation": "ধরি সংখ্যাটি x। প্রশ্নমতে, $3x - 15 = 30 \Rightarrow 3x = 45 \Rightarrow x = 15$।"
        },
        {
            "id": 53,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "x + y = 12 এবং x - y = 2 হলে, xy এর মান কত?",
            "options": ["৩৫", "৪০", "৪৫", "৫০"],
            "answer": "৩৫",
            "explanation": "$xy = \{ (x+y)/2 \}^2 - \{ (x-y)/2 \}^2 = 6^2 - 1^2 = 36 - 1 = 35$।"
        },
        {
            "id": 54,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "বার্ষিক ৫% হারে ৫০০ টাকার ৩ বছরের সরল সুদ কত?",
            "options": ["৫০ টাকা", "৬০ টাকা", "৭৫ টাকা", "১০০ টাকা"],
            "answer": "৭৫ টাকা",
            "explanation": "সরল সুদের সূত্র: $I = \frac{Pnr}{100} = \frac{500 \times 3 \times 5}{100} = 75$ টাকা।"
        },
        {
            "id": 55,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "একটি ত্রিভুজের তিন কোণের অনুপাত ১:২:৩ হলে, বৃহত্তম কোণটির মান কত ডিগ্রি?",
            "options": ["৪৫°", "৬০°", "৯০°", "১২০°"],
            "answer": "৯০°",
            "explanation": "ত্রিভুজের ৩ কোণের সমষ্টি ১৮০°। অনুপাতের যোগফল ১+২+৩=৬। বৃহত্তম কোণ = $180 \times \frac{3}{6} = 90^\circ$।"
        },
        {
            "id": 56,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "log2 (16) এর মান কত?",
            "options": ["২", "৩", "৪", "৮"],
            "answer": "৪",
            "explanation": "$\log_2 (16) = \log_2 (2^4) = 4\log_2(2) = 4$।"
        },
        {
            "id": 57,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Advanced",
            "question": "কোনো বৃত্তের ব্যাসার্ধ যদি ৫০% বৃদ্ধি পায়, তবে তার ক্ষেত্রফল কত শতাংশ বৃদ্ধি পাবে?",
            "options": ["৫০%", "১০০%", "১২৫%", "১৫০%"],
            "answer": "১২৫%",
            "explanation": "ক্ষেত্রফল বৃদ্ধির সূত্র: $A + B + \frac{AB}{100} = 50 + 50 + \frac{2500}{100} = 125\%$।"
        },
        {
            "id": 60,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "টাকায় ৩টি করে লেবু কিনে টাকায় ২টি করে বিক্রি করলে শতকরা কত লাভ হবে?",
            "options": ["৩৩.৩৩%", "৫০%", "২৫%", "২০%"],
            "answer": "৫০%",
            "explanation": "লাভ = $\frac{3 - 2}{2} \times 100\% = 50\%$।"
        },
        {
            "id": 59,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Advanced",
            "question": "পিতা ও পুত্রের বর্তমান বয়সের সমষ্টি ৬০ বছর। ৫ বছর পূর্বে পিতার বয়স পুত্রের বয়সের ৪ গুণ ছিল। পুত্রের বর্তমান বয়স কত?",
            "options": ["১০ বছর", "১৫ বছর", "২০ বছর", "২৫ বছর"],
            "answer": "১৫ বছর",
            "explanation": "৫ বছর আগে সমষ্টি ছিল ৬০ - ১০ = ৫০ বছর। ৪:১ অনুপাতে পুত্রের বয়স ছিল ১০ বছর। বর্তমানে ১০ + ৫ = ১৫ বছর।"
        },
        {
            "id": 60,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "একটি আয়তাকার ক্ষেত্রের দৈর্ঘ্য প্রস্থের দ্বিগুণ। ক্ষেত্রফল ৫১২ বর্গমিটার হলে তার দৈর্ঘ্য কত মিটার?",
            "options": ["১৬", "৩২", "৬৪", "২৮"],
            "answer": "৩২",
            "explanation": "ক্ষেত্রফল $2x^2 = 512 \Rightarrow x^2 = 256 \Rightarrow x = 16$ (প্রস্থ)। দৈর্ঘ্য = $16 \times 2 = 32$ মিটার।"
        },
        {
            "id": 61,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "দুটি সংখ্যার গ.সা.гу ও ল.সা.গু যথাক্রমে ১২ ও ১৬০। একটি সংখ্যা ৪৮ হলে অপর সংখ্যাটি কত?",
            "options": ["৪০", "৬০", "৮০", "৯০"],
            "answer": "৪০",
            "explanation": "সূত্র: অপর সংখ্যা = $\frac{\text{ল.সা.গু} \times \text{গ.সা.গু}}{\text{১ম সংখ্যা}} = \frac{160 \times 12}{48} = 40$।"
        },
        {
            "id": 62,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "x^2 - 5x + 6 = 0 সমীকরণটির মূলদ্বয় কী কী?",
            "options": ["(২, ৩)", "(১, ৫)", "(-২, -৩)", "(৪, ১)"],
            "answer": "(২, ৩)",
            "explanation": "$x^2 - 3x - 2x + 6 = 0 \Rightarrow (x-3)(x-2) = 0$। সুতরাং $x = 2, 3$।"
        },
        {
            "id": 63,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "১ থেকে ৩০ পর্যন্ত সংখ্যাগুলোর সমষ্টি কত?",
            "options": ["৪৬৫", "৪৫০", "৪০০", "৫০০"],
            "answer": "৪৬৫",
            "explanation": "সমষ্টির সূত্র: $\frac{n(n + 1)}{2} = \frac{30 \times 31}{2} = 465$।"
        },
        {
            "id": 64,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "একটি ঘড়ি ৬০০ টাকায় কিনে ১৫% ক্ষতিতে বিক্রি করলে বিক্রয়মূল্য কত হবে?",
            "options": ["৫১০ টাকা", "৫২০ টাকা", "৫৪০ টাকা", "৫৫০ টাকা"],
            "answer": "৫১০ টাকা",
            "explanation": "বিক্রয়মূল্য = $600 \times 85\% = 510$ টাকা।"
        },
        {
            "id": 65,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Advanced",
            "question": "যদি ৩ জন পুরুষ বা ৫ জন বালক একটি কাজ ২০ দিনে করতে পারে, তবে ৪ জন পুরুষ এবং ১০ জন বালক ওই কাজ কত দিনে করতে পারবে?",
            "options": ["৬ দিনে", "৮ দিনে", "১০ দিনে", "১২ দিনে"],
            "answer": "৬ দিনে",
            "explanation": "৩ পুরুষ = ৫ বালক হলে ৪ পুরুষ = ২০/৩ বালক। মোট বালক = ৫০/৩ জন। ঐকিক নিয়মে উত্তর ৬ দিন।"
        },
        {
            "id": 66,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "একটি সমকোণী ত্রিভুজের ভূমি ৪ সেমি এবং অতিভুজ ৫ সেমি হলে, তার ক্ষেত্রফল কত বর্গ সেমি?",
            "options": ["৬", "১২", "২০", "১০"],
            "answer": "৬",
            "explanation": "লম্ব = $\sqrt{5^2 - 4^2} = 3$ সেমি। ক্ষেত্রফল = $\frac{1}{2} \times 4 \times 3 = 6$ বর্গ সেমি।"
        },
        {
            "id": 67,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "০.১ × ০.০১ × ০.০০১ = কত?",
            "options": ["০.০০০১", "০.০০০০০১", "০.০০১", "০.০০০০০১"],
            "answer": "০.০০০০০১",
            "explanation": "দশমিকের পর মোট ঘরের সংখ্যা হবে ১+২+৩ = ৬টি। তাই উত্তর ০.০০০০০১।"
        },
        {
            "id": 68,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "কোনো আসল ৩ বছরে মুনাফা-আসলে ৫৬০০ টাকা এবং ৫ বছরে মুনাফা-আসলে ৬০০০ টাকা হলে আসল কত?",
            "options": ["৫০০০ টাকা", "৪৮০০ টাকা", "৪৫০০ টাকা", "৫十二章 টাকা"],
            "answer": "৫০০০ টাকা",
            "explanation": "২ বছরের মুনাফা ৪০০ টাকা হলে ৩ বছরের মুনাফা ৬০০ টাকা। আসল = ৫৬০০ - ৬০০ = ৫০০০ টাকা।"
        },
        {
            "id": 69,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "১, ২, ৩, ৫, ৮, ১৩, ২১, ... ধারাটির পরবর্তী পদটি কত?",
            "options": ["২৬", "৩৪", "২৯", "৩৫"],
            "answer": "৩৪",
            "explanation": "এটি ফিবোনাচ্চি ধারা, যেখানে পূর্ববর্তী দুটি পদের যোগফল পরের পদ হয় (১৩ + ২১ = ৩৪)।"
        },
        {
            "id": 70,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Advanced",
            "question": "৬০ লিটার মিশ্রণে কেরোসিন ও পেট্রোলের অনুপাত ৭:৩। ওই মিশ্রণে আর কত লিটার পেট্রোল মিশালে অনুপাত ৩:৭ হবে?",
            "options": ["৮০ লিটার", "৪০ লিটার", "৬০ লিটার", "১০০ লিটার"],
            "answer": "৮০ লিটার",
            "explanation": "কেরোসিন ৪২ লিটার ও পেট্রোল ১৮ লিটার। শর্তানুসারে হিসাব করলে নতুন পেট্রোল লাগবে ৮০ লিটার।"
        },
        {
            "id": 71,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "একটি বৃত্তের পরিধি ও ব্যাসের অনুপাত কত?",
            "options": ["২২/৭", "৩/১", "২/১", "৪/৩"],
            "answer": "২২/৭",
            "explanation": "বৃত্তের পরিধি $2\pi r$ এবং ব্যাস $2r$। অনুপাত = $\pi \approx 22/7$।"
        },
        {
            "id": 72,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Beginner",
            "question": "১২০ ডিগ্রি কোণের সম্পূরক কোণ কত ডিগ্রি?",
            "options": ["৬০°", "৩০°", "৯০°", "১৮০°"],
            "answer": "৬০°",
            "explanation": "সম্পূরক কোণের সমষ্টি ১৮০°। ১৮০ - ১২০ = ৬০°।"
        },
        {
            "id": 73,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "a + b = 7 এবং ab = 10 হলে, (a - b)^2 এর মান কত?",
            "options": ["৯", "৪", "১", "১৬"],
            "answer": "৯",
            "explanation": "$(a - b)^2 = (a + b)^2 - 4ab = 7^2 - 4(10) = 49 - 40 = 9$।"
        },
        {
            "id": 74,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Advanced",
            "question": "একটি ট্রেন ঘন্টায় ৬০ কিমি বেগে চলে ৯ সেকেন্ডে একটি খুঁটি অতিক্রম করে। ট্রেনটির দৈর্ঘ্য কত মিটার?",
            "options": ["১৫০ মিটার", "১২০ মিটার", "১০০ মিটার", "১৮০ মিটার"],
            "answer": "১৫০ মিটার",
            "explanation": "গতিবেগ = $60 \times \frac{5}{18} = \frac{50}{3}$ মি/সে। দৈর্ঘ্য = $\frac{50}{3} \times 9 = 150$ মিটার।"
        },
        {
            "id": 75,
            "subject": "সাধারণ গণিত (Mathematics)",
            "level": "Intermediate",
            "question": "১ থেকে ২০ পর্যন্ত জোড় সংখ্যাগুলোর গড় কত?",
            "options": ["১০", "১১", "১২", "৯.৫"],
            "answer": "১১",
            "explanation": "জোড় সংখ্যা ১০টি। গড় = $\frac{\text{প্রথম পদ} + \text{শেষ পদ}}{2} = \frac{2 + 20}{2} = 11$।"
        },
        {
            "id": 76,
            "subject": "সাধারণ জ্ঞান",
            "level": "Intermediate",
            "question": "বাংলাদেশের সংবিধান কত তারিখে গণপরিষদে গৃহীত হয়?",
            "options": ["৪ নভেম্বর, ১৯৭২", "১৬ ডিসেম্বর, ১৯৭২", "২৬ মার্চ, ১৯৭২", "১০ এপ্রিল, ১৯৭২"],
            "answer": "৪ নভেম্বর, ১৯৭২",
            "explanation": "সংবিধান গণপরিষদে গৃহীত হয় ৪ নভেম্বর ১৯৭২ এবং কার্যকর হয় ১৬ ডিসেম্বর ১৯৭২।"
        },
        {
            "id": 77,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "মুজিবনগর সরকার কত তারিখে শপথ গ্রহণ করেছিল?",
            "options": ["১০ এপ্রিল, ১৯৭১", "১৭ এপ্রিল, ১৯৭১", "২৫ মার্চ, ১৯৭১", "৭ মার্চ, ১৯৭১"],
            "answer": "১৭ এপ্রিল, ১৯৭১",
            "explanation": "১০ এপ্রিল ১৯৭১ মুজিবনগর সরকার গঠিত হয় এবং ১৭ এপ্রিল শপথ নেয়।"
        },
        {
            "id": 78,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "আয়তনে বাংলাদেশের সবচেয়ে বড় জেলা কোনটি?",
            "options": ["রাঙ্গামাটি", "বান্দরবান", "চট্টগ্রাম", "খুলনা"],
            "answer": "রাঙ্গামাটি",
            "explanation": "পার্বত্য জেলা রাঙ্গামাটি আয়তনে বাংলাদেশের বৃহত্তম জেলা।"
        },
        {
            "id": 79,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "বাংলাদেশের একমাত্র প্রবাল দ্বীপ কোনটি?",
            "options": ["সেন্ট মার্টিন", "কুতুবদিয়া", "মহেশখালী", "হাতিয়া"],
            "answer": "সেন্ট মার্টিন",
            "explanation": "কক্সবাজার জেলায় অবস্থিত সেন্ট মার্টিন বাংলাদেশের একমাত্র প্রবাল দ্বীপ।"
        },
        {
            "id": 80,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "পদ্মা সেতু উদ্বোধিত হয় কত তারিখে?",
            "options": ["২৫ জুন, ২০২২", "২৬ জুন, ২০২২", "১৬ ডিসেম্বর, ২০২১", "৭ মার্চ, ২০২২"],
            "answer": "২৫ জুন, ২০২২",
            "explanation": "প্রধানমন্ত্রী শেখ হাসিনা ২৫ জুন ২০২২ তারিখে পদ্মা বহুমুখী সেতু উদ্বোধন করেন।"
        },
        {
            "id": 81,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "আন্তর্জাতিক আদালতের (ICJ) সদর দপ্তর কোথায় অবস্থিত?",
            "options": ["জেনেভা", "নিউ ইয়র্ক", "হেগ", "প্যারিস"],
            "answer": "হেগ",
            "explanation": "জাতিসংঘের প্রধান বিচারিক অঙ্গ ICJ-এর সদর দপ্তর নেদারল্যান্ডসের হেগ শহরে অবস্থিত।"
        },
        {
            "id": 82,
            "subject": "সাধারণ জ্ঞান",
            "level": "Intermediate",
            "question": "টেকসই উন্নয়ন লক্ষ্যমাত্রা (SDG) অর্জনের মেয়াদকাল কত বছর পর্যন্ত?",
            "options": ["২০২০", "২০২৫", "২০৩০", "২০৪১"],
            "answer": "২০৩০",
            "explanation": "SDG-এর লক্ষ্য ১৭টি এবং এর অর্জনের সময়সীমা ২০৩০ সাল পর্যন্ত।"
        },
        {
            "id": 83,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "কোন দেশকে 'উদীয়মান সূর্যের দেশ' বলা হয়?",
            "options": ["চীন", "জাপান", "নরওয়ে", "কোরিয়া"],
            "answer": "জাপান",
            "explanation": "ভৌগোলিক অবস্থানের কারণে জাপানকে উদীয়মান সূর্যের দেশ বলা হয়।"
        },
        {
            "id": 84,
            "subject": "সাধারণ জ্ঞান",
            "level": "Advanced",
            "question": "ইউরোপীয় ইউনিয়নের একক মুদ্রা 'ইউরো' কত সালে আনুষ্ঠানিকভাবে বাজারে চালু হয়?",
            "options": ["১৯৯৯", "২০০২", "১৯৯৫", "২০০৫"],
            "answer": "২০০২",
            "explanation": "১ জানুয়ারি ২০০২ থেকে ইউরো মুদ্রা আনুষ্ঠানিকভাবে বাজারে লেনদেনের জন্য চালু হয়।"
        },
        {
            "id": 85,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "কম্পিউটারের অস্থায়ী স্মৃতিশক্তি বা প্রাইমারি মেমোরি কোনটি?",
            "options": ["ROM", "RAM", "Hard Disk", "SSD"],
            "answer": "RAM",
            "explanation": "RAM (Random Access Memory) হলো অস্থায়ী মেমোরি, যা কম্পিউটার বন্ধ করলে মুছে যায়।"
        },
        {
            "id": 86,
            "subject": "সাধারণ জ্ঞান",
            "level": "Advanced",
            "question": "বাংলাদেশের জাতীয় সংসদের প্রথম স্পিকার কে ছিলেন?",
            "options": ["शाह আব্দুল হামিদ", "মোহাম্মদ উল্লাহ", "আব্দুল মালেক উকিল", "হুমায়ুন রশীদ চৌধুরী"],
            "answer": "শাহ আব্দুল হামিদ",
            "explanation": "বাংলাদেশ গণপরিষদ ও প্রথম জাতীয় সংসদের প্রথম স্পিকার ছিলেন শাহ আব্দুল হামিদ।"
        },
        {
            "id": 87,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "বিশ্ব পরিবেশ দিবস কবে পালন করা হয়?",
            "options": ["৫ জুন", "১ মে", "৮ মার্চ", "১১ জুলাই"],
            "answer": "৫ জুন",
            "explanation": "পরিবেশ সুরক্ষায় সচেতনতা বাড়াতে প্রতি বছর ৫ জুন বিশ্ব পরিবেশ দিবস পালন করা হয়।"
        },
        {
            "id": 88,
            "subject": "সাধারণ জ্ঞান",
            "level": "Intermediate",
            "question": "লুভর মিউজিয়াম (Louvre Museum) কোথায় অবস্থিত?",
            "options": ["লন্ডন", "প্যারিস", "রোম", "ওয়াশিংটন ডিসি"],
            "answer": "প্যারিস",
            "explanation": "বিশ্বের বৃহত্তম এই শিল্পকলা জাদুঘরটি ফ্রান্সের প্যারিস শহরে অবস্থিত।"
        },
        {
            "id": 89,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "গ্রীনিচ মান সময় (GMT) অপেক্ষা বাংলাদেশের সময় কত ঘণ্টা এগিয়ে?",
            "options": ["+৫ ঘণ্টা", "+৬ ঘণ্টা", "-৬ ঘণ্টা", "+৪ ঘণ্টা"],
            "answer": "+৬ ঘণ্টা",
            "explanation": "বাংলাদেশ GMT+6 টাইমজোনে অবস্থিত, অর্থাৎ গ্রীনিচ সময় থেকে ৬ ঘণ্টা এগিয়ে।"
        },
        {
            "id": 90,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "বাংলাদেশের স্বাধীনতা যুদ্ধে বীরত্বের জন্য কতজনকে 'বীরশ্রেষ্ঠ' উপাধি দেওয়া হয়?",
            "options": ["৭ জন", "৬৮ জন", "১৭৫ জন", "৪২৬ জন"],
            "answer": "৭ জন",
            "explanation": "সর্বোচ্চ বীরত্বসূচক রাষ্ট্রীয় উপাধি 'বীরশ্রেষ্ঠ' দেওয়া হয় ৭ জন শহীদ মুক্তিযোদ্ধাকে।"
        },
        {
            "id": 91,
            "subject": "সাধারণ জ্ঞান",
            "level": "Intermediate",
            "question": "নায়াগ্রা জলপ্রপাত কোন দুটি দেশের সীমান্তে অবস্থিত?",
            "options": ["যুক্তরাষ্ট্র ও কানাডা", "ব্রাজিল ও আর্জেন্টিনা", "যুক্তরাষ্ট্র ও মেক্সিকো", "ফ্রান্স ও জার্মানি"],
            "answer": "যুক্তরাষ্ট্র ও কানাডা",
            "explanation": "উত্তর আমেরিকার বিখ্যাত নায়াগ্রা জলপ্রপাতটি যুক্তরাষ্ট্র ও কানাডার সীমান্তে অবস্থিত।"
        },
        {
            "id": 92,
            "subject": "সাধারণ জ্ঞান",
            "level": "Advanced",
            "question": "মানবাধিকার রক্ষায় নিয়োজিত আন্তর্জাতিক সংস্থা 'অ্যামনেস্টি ইন্টারন্যাশনাল'-এর সদর দপ্তর কোথায়?",
            "options": ["লন্ডন", "জেনেভা", "নিউ ইয়র্ক", "ভিয়েনা"],
            "answer": "লন্ডন",
            "explanation": "১৯৬১ সালে প্রতিষ্ঠিত অ্যামনেস্টি ইন্টারন্যাশনালের সদর দপ্তর যুক্তরাজ্যের লন্ডনে।"
        },
        {
            "id": 93,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "কোন ভিটামিনের অভাবে মানবদেহে স্কার্ভি (Scurvy) রোগ হয়?",
            "options": ["ভিটামিন A", "ভিটামিন B", "ভিটামিন C", "ভিটামিন D"],
            "answer": "ভিটামিন C",
            "explanation": "ভিটামিন C বা অ্যাসকরবিক অ্যাসিডের অভাবে মাড়ি দিয়ে রক্ত পড়া বা স্কার্ভি রোগ হয়।"
        },
        {
            "id": 94,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "পৃথিবীর গভীরতম খাদের নাম কী?",
            "options": ["মারিয়ানা খাত", "সুন্দা খাত", "জাভা খাত", "পুয়ের্তো রিকো খাত"],
            "answer": "মারিয়ানা খাত",
            "explanation": "প্রশান্ত মহাসাগরে অবস্থিত মারিয়ানা খাত পৃথিবীর গভীরতম স্থান।"
        },
        {
            "id": 95,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "নোবেল পুরস্কারের প্রবর্তক আলফ্রেড নোবেল কী আবিষ্কার করেছিলেন?",
            "options": ["ডিনামাইট", "পেনিসিলিন", "এক্স-রে", "টেলিফোন"],
            "answer": "ডিনামাইট",
            "explanation": "সুইডিশ বিজ্ঞানী আলফ্রেড নোবেল ১৮৬৭ সালে ডিনামাইট আবিষ্কার করেন।"
        },
        {
            "id": 96,
            "subject": "সাধারণ জ্ঞান",
            "level": "Intermediate",
            "question": "২০২৬ সালের ফিফা বিশ্বকাপ ফুটবল যৌথভাবে কোন কোন দেশে অনুষ্ঠিত হচ্ছে?",
            "options": ["যুক্তরাষ্ট্র, কানাডা ও মেক্সিকো", "কাতার ও ওমান", "ব্রাজিল ও আর্জেন্টিনা", "স্পেন ও পর্তুগাল"],
            "answer": "যুক্তরাষ্ট্র, কানাডা ও মেক্সিকো",
            "explanation": "২০২৬ সালের ফিফা বিশ্বকাপ উত্তর আমেরিকার এই ৩টি দেশে যৌথভাবে অনুষ্ঠিত হচ্ছে।"
        },
        {
            "id": 97,
            "subject": "সাধারণ জ্ঞান",
            "level": "Intermediate",
            "question": "বাংলাদেশের প্রথম ভূ-উপগ্রহ কেন্দ্রটি কোথায় অবস্থিত?",
            "options": ["বেতবুনিয়া, রাঙ্গামাটি", "তালিবাবাদ, গাজীপুর", "মহাখালী, ঢাকা", "পতেঙ্গা, চট্টগ্রাম"],
            "answer": "বেতবুনিয়া, রাঙ্গামাটি",
            "explanation": "১৯৭৫ সালের ১৪ জুন বঙ্গবন্ধু শেখ মুজিবুর রহমান বেতবুনিয়া ভূ-উপগ্রহ কেন্দ্রটি উদ্বোধন করেন।"
        },
        {
            "id": 98,
            "subject": "সাধারণ জ্ঞান",
            "level": "Intermediate",
            "question": "সবচেয়ে হালকা গ্যাস কোনটি?",
            "options": ["হাইড্রোজেন", "হিলিয়াম", "অক্সিজেন", "নাইট্রোজেন"],
            "answer": "হাইড্রোজেন",
            "explanation": "পর্যায় সারণির ১ম মৌল হাইড্রোজেন মহাবিশ্বের সবচেয়ে হালকা ও প্রাচুর্যময় গ্যাস।"
        },
        {
            "id": 99,
            "subject": "সাধারণ জ্ঞান",
            "level": "Advanced",
            "question": "বঙ্গবন্ধুর ঐতিহাসিক ৭ মার্চের ভাষণ সংবিধানের কোন তফসিলে অন্তর্ভুক্ত করা হয়েছে?",
            "options": ["চতুর্থ তফসিল", "পঞ্চম তফসিল", "ষষ্ঠ তফসিল", "সপ্তম তফসিল"],
            "answer": "পঞ্চম তফসিল",
            "explanation": "সংবিধানের ৫ম তফসিলে ৭ মার্চের ভাষণ অন্তর্ভুক্ত করা হয়েছে।"
        },
        {
            "id": 100,
            "subject": "সাধারণ জ্ঞান",
            "level": "Beginner",
            "question": "ফেসবুক (বর্তমান মূল কোম্পানি Meta) কত সালে প্রতিষ্ঠিত হয়?",
            "options": ["২০০২", "২০০৪", "২০০৬", "২০০৮"],
            "answer": "২০০৪",
            "explanation": "৪ ফেব্রুয়ারি ২০০৪ তারিখে মার্ক জাকারবার্গ ও তাঁর সহপাঠীরা মিলে ফেসবুক চালু করেন।"
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
                title="Govt. Jobs"
            />

            {/* Questions */}
            <InterviewQuestion
                questions={questions}
                badgeColor={badgeColor}
                title="Govt."
            />
        </div>
    );
};

export default GovtJobs;