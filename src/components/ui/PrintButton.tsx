"use client"

export default function PrintButton() {
  return (
    <button 
      onClick={() => window.print()} 
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
      Print / Save as PDF
    </button>
  );
}