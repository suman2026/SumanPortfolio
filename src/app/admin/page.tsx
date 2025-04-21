// src/app/admin/page.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRouter } from 'next/navigation';

// This would be a protected admin page in a real application
export default function AdminPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Content Management</h1>
      
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Content Calendar</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-3">Week</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Task</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Status</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Apr 21-27</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Update Now page</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
                </td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-green-600 hover:underline">Complete</button>
                </td>
              </tr>
              {/* More calendar items */}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Dashboard statistics would go here */}
    </main>
  );
}