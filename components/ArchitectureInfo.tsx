
import React from 'react';

const ArchitectureInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">System Architecture Design (CTO Blueprint)</h1>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">1. Tech Stack & Infrastructure</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="font-bold mb-2">Frontend (Modern & Fast)</h3>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Next.js 14+ (App Router) for SEO & Performance</li>
              <li>Tailwind CSS for highly responsive, custom-themed UI</li>
              <li>Dynamic Viewport rendering for RTL (Arabic) support</li>
            </ul>
          </div>
          <div className="p-4 border rounded-xl bg-white shadow-sm">
            <h3 className="font-bold mb-2">Backend (Scalable & Secure)</h3>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>FastAPI (Asynchronous Python) for high throughput</li>
              <li>PostgreSQL with JSONB for flexible site content</li>
              <li>Celery + Redis for long-running AI tasks</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">2. Production Database Schema</h2>
        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto font-mono text-xs">
          <pre>{`
Table Users {
  id: uuid pk
  email: string unique
  hashed_password: string
  is_active: boolean
  created_at: timestamp
}

Table Sites {
  id: uuid pk
  owner_id: uuid fk(Users.id)
  business_name: string
  template_id: string  // Fixed ID from Factory
  content_json: jsonb  // AI Generated copy & icons
  status: enum (draft, published)
  created_at: timestamp
}
          `}</pre>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">3. Backend Workflow (The Magic)</h2>
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-700">
            <li><strong>Request Validation:</strong> FastAPI checks the user input (Business Type, Name, etc).</li>
            <li><strong>AI Generation:</strong> The <code>AIService</code> queries Gemini to generate professional marketing copy in the target language.</li>
            <li><strong>Constraint Injection:</strong> The system automatically selects a verified, professional <code>template_id</code>.</li>
            <li><strong>Persistence:</strong> The generated data is stored as a structured JSON object in PostgreSQL.</li>
            <li><strong>Instant Delivery:</strong> The frontend fetches this JSON and hydrates the React template in real-time.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">4. Example API Payload</h2>
        <div className="bg-gray-100 p-6 rounded-xl text-xs font-mono">
          <p className="text-blue-600 mb-2 font-bold">POST /sites/generate</p>
          <p className="text-gray-500 mb-2"># Request Body</p>
          <pre>{`{
  "business_name": "Noor Clinic",
  "business_type": "Dental Clinic",
  "language": "ar"
}`}</pre>
          <p className="text-gray-500 my-2"># Response Body (Hydration Data)</p>
          <pre>{`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "template_id": "corporate_pro",
  "content_json": {
    "hero": { "title": "ابتسامتك هي شغفنا", ... },
    "services": [...]
  }
}`}</pre>
        </div>
      </section>
    </div>
  );
};

export default ArchitectureInfo;
