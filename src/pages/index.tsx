import React, { useState } from "react";

const concepts = [
  {
    id: 1,
    title: "Azure Functions",
    description: "Serverless compute that scales on demand.",
  },
  {
    id: 2,
    title: "Azure Service Bus",
    description: "Enterprise messaging for decoupling apps.",
  },
  {
    id: 3,
    title: "Azure Blob Storage",
    description: "Object storage for unstructured data.",
  },
  {
    id: 4,
    title: "Azure Key Vault",
    description: "Securely store secrets, keys, and certificates.",
  },
];

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-900 flex flex-wrap justify-center items-center gap-4 p-8">
      {concepts.map((card) => (
        <div
          key={card.id}
          className={`w-40 h-40 bg-blue-600 text-white rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 ${
            activeCard === card.id
              ? "scale-125 bg-blue-400 z-10"
              : "hover:scale-105"
          }`}
          onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
        >
          <div className="flex flex-col items-center justify-center w-full h-full p-2 text-center">
            <h2 className="text-lg font-bold">{card.title}</h2>
            {activeCard === card.id && (
              <p className="mt-2 text-sm">{card.description}</p>
            )}
          </div>
        </div>
      ))}
    </main>
  );
}
