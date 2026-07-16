import {
  BadgeCheck,
  BookOpen,
  ChevronRight,
  Lightbulb,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const InterviewQuestion = ({ questions, badgeColor, title = 'Frontend' }) => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          {title} Interview Questions
        </h2>

        <p className="mt-2 text-gray-500">
          Click on a question to reveal the answer.
        </p>
      </div>

      {/* Questions */}
      <Accordion type="single" className="space-y-5">
        {questions.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-[#6633ff]/40 hover:shadow-md"
          >
            <AccordionTrigger className="px-5 py-5 hover:no-underline sm:px-6">
              <div className="flex w-full items-start gap-4 text-left">
                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6633ff]/10 font-bold text-[#6633ff]">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <div
                    className={`mb-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeColor(
                      item.level
                    )}`}
                  >
                    {item.level}
                  </div>

                  <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                    {item.question}
                  </h3>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="border-t bg-gray-50 px-5 py-6 sm:px-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6633ff]/10">
                  <BookOpen className="h-5 w-5 text-[#6633ff]" />
                </div>

                <div>
                  <p className="leading-8 text-gray-700">
                    {item.answer}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Interview Tips */}
      <div className="mt-12 rounded-3xl border border-[#6633ff]/20 bg-gradient-to-r from-[#6633ff]/5 to-blue-50 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-[#6633ff]/10 p-3">
            <Lightbulb className="h-6 w-6 text-[#6633ff]" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Interview Tips
            </h2>

            <p className="text-sm text-gray-500">
              Keep these in mind before your interview.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Explain concepts with real-world examples.",
            "Practice coding instead of memorizing answers.",
            "Review your recent React & Next.js projects.",
            "Understand the 'why' behind each concept.",
            "Communicate your thought process clearly.",
            "Be confident and ask questions if needed.",
          ].map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
            >
              <ChevronRight className="mt-1 h-5 w-5 text-[#6633ff]" />

              <p className="text-sm leading-6 text-gray-700">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewQuestion;