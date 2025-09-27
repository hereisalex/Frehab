export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <h2 className="text-xl font-semibold text-green-800 mb-2">Our Simple Promise</h2>
              <p className="text-green-700 text-lg font-medium">
                We will never share, sell, or compromise your data. Your privacy and anonymity are absolute.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Anonymity by Design</h2>
            <p className="mb-4">
              Frehab is built with anonymity as a core principle. You can access all core content and recovery 
              modules without providing any personal information, including email addresses or names.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Don't Collect</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Real names or personal identities</li>
              <li>Email addresses (for core content access)</li>
              <li>Phone numbers</li>
              <li>Location data beyond general geographic region</li>
              <li>Personal health information</li>
              <li>Financial information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Data Storage</h2>
            <p className="mb-4">
              All interactive tools (Urge Tracker, Thought Records, Gratitude Journal) store data locally 
              in your browser. This data never leaves your device and is completely under your control.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Optional Account Features</h2>
            <p className="mb-4">
              If you choose to create an account for enhanced features like progress tracking across devices, 
              you only need to provide a username and password. No email or personal information is required.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Anonymous Usage Analytics</h2>
            <p className="mb-4">
              We collect completely anonymous usage statistics to understand how to improve the platform. 
              Since no personal information is involved, no consent is required:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Page visits:</strong> Which pages are viewed (no user identification)</li>
              <li><strong>Feature usage:</strong> Which tools are used and how often</li>
              <li><strong>Technical data:</strong> Browser type, screen size for compatibility improvements</li>
              <li><strong>General location:</strong> Country and region only (never precise location)</li>
              <li><strong>Error reports:</strong> Technical issues to help us fix problems</li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800 font-medium">Completely Anonymous</p>
              <p className="text-blue-700 text-sm mt-1">
                This data cannot be linked to any individual user. We track sessions, not people. 
                No consent is needed because no personal information is collected.
              </p>
            </div>
            
            <p className="mb-4">
              <strong>What we absolutely do NOT track:</strong> Your name, email, recovery data, tool entries, 
              personal thoughts, precise location, IP addresses, or any information that could identify you.
            </p>
            
            <p className="mb-4">
              This helps us understand things like "how many people used the Urge Tracker this week" or 
              "which recovery modules are most helpful" without ever knowing who those people are.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Data Sales or Sharing</h2>
            <p className="mb-4">
              We will never sell your data to third parties. We do not share any user information with 
              advertisers, marketers, or data brokers. Your recovery journey is private.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect any data we do store. 
              Our systems are designed to minimize data collection and maximize user privacy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Deletion</h2>
            <p className="mb-4">
              Since most data is stored locally on your device, you can delete it at any time by 
              clearing your browser data. For any account-related data, you can request deletion 
              at any time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              If we update this privacy policy, we will notify users through the platform. Any changes 
              will maintain our commitment to privacy and anonymity.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this privacy policy or our data practices, please contact 
              us through our support channels.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
              <p className="text-blue-800 font-medium">
                <strong>Remember:</strong> Your privacy and safety are our top priorities. Recovery requires 
                trust, and we take that responsibility seriously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
