"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a variety of grooming services including haircuts, shaving, beard trims, facials, and hair coloring to suit your style and preferences.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to guarantee your preferred time and service availability.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open Monday to Friday from 9:00 AM to 7:00 PM, Saturday 9:00 AM to 5:00 PM, and closed on Sundays.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel your appointment by contacting us at least 24 hours in advance.",
  },
  {
    question: "What safety measures do you follow?",
    answer:
      "We follow strict hygiene protocols including sanitizing tools and workspaces after every client, and staff wear masks and gloves for your safety.",
  },
];

const FAQs = () => {
  // Track which item is open to conditionally style question text
  const [openItem, setOpenItem] = useState<string | null>(null);

  // Accordion onValueChange handler
  const handleValueChange = (value: string | string[] | undefined) => {
    // For single type accordion, value is string or undefined
    if (typeof value === "string") {
      setOpenItem(value);
    } else {
      setOpenItem(null);
    }
  };

  return (
    <section
      id="faqs"
      className="bg-white dark:bg-[#0a0a23] md:py-20 py-12 px-6 md:px-20 text-black dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          onValueChange={handleValueChange}
          value={openItem || undefined}
        >
          {faqData.map(({ question, answer }, index) => {
            const value = `item-${index}`;
            const isOpen = openItem === value;

            return (
              <AccordionItem
                key={value}
                value={value}
                className="bg-gray-100 dark:bg-[#1a1a2e] border border-gray-300 dark:border-gray-700 rounded-xl px-4"
              >
                <AccordionTrigger
                  className={`
                    text-lg font-semibold
                    transition-colors duration-300
                    cursor-pointer
                    ${isOpen ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500" : "text-gray-900 dark:text-white"}
                    hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-600 hover:to-pink-500
                    border-none
                    focus-visible:ring-0 focus-visible:outline-none
                  `}
                  style={{ borderBottom: "none" }}
                >
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
