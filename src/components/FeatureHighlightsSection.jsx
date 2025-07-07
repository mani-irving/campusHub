import React from "react";
import { CalendarDays, Users, Bell } from "lucide-react";

const features = [
  {
    icon: <CalendarDays size={28} className="text-yellow-500" />,
    title: "Event Calendar",
    desc: "Stay updated on all upcoming auditions, fests, and club meets.",
  },
  {
    icon: <Users size={28} className="text-blue-500" />,
    title: "Club Directory",
    desc: "Explore all clubs with their leaders and connect with seniors easily.",
  },
  {
    icon: <Bell size={28} className="text-green-500" />,
    title: "Instant Notifications",
    desc: "Never miss an announcement or deadline with timely alerts.",
  },
];

export default function FeatureHighlightsSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-14 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        What You Get
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-lg text-center"
          >
            <div className="mb-4 flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
