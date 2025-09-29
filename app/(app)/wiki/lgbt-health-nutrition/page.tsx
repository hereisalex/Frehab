'use client'

import { useState } from 'react'
import ClinicalDisclaimer from '@/components/ClinicalDisclaimer'

export default function LGBTHealthNutritionPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(true)

  return (
    <div className="min-h-screen bg-slate-50">
      {showDisclaimer && (
        <ClinicalDisclaimer id="lgbt-health-nutrition" />
      )}
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            LGBT+ Health and Nutrition
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Good nutrition is essential for recovery and overall health, but LGBT+ individuals 
              often face unique challenges including healthcare discrimination, minority stress, 
              and specific health concerns that affect nutritional needs.
            </p>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              LGBT+ Specific Health Considerations
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-blue-800">
                LGBT+ individuals may have unique nutritional needs due to hormone therapy, 
                HIV status, mental health challenges, and the physical effects of minority 
                stress and discrimination.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Nutrition and Recovery
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Substance Use and Nutrition</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Nutrient deficiencies from substance use</li>
                  <li>Digestive issues and gut health</li>
                  <li>Liver and kidney function</li>
                  <li>Immune system support</li>
                  <li>Mental health and brain function</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Recovery-Focused Nutrition</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Balanced meals and regular eating</li>
                  <li>Hydration and fluid intake</li>
                  <li>Protein for muscle and tissue repair</li>
                  <li>Vitamins and minerals for healing</li>
                  <li>Fiber for digestive health</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              LGBT+ Specific Nutritional Needs
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Hormone Therapy</h3>
                <ul className="list-disc pl-4 space-y-1 text-purple-700">
                  <li>Increased protein needs</li>
                  <li>Calcium and vitamin D for bone health</li>
                  <li>Iron supplementation (for some)</li>
                  <li>Monitoring weight and body composition</li>
                  <li>Hydration and fluid balance</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">HIV and Immune Health</h3>
                <ul className="list-disc pl-4 space-y-1 text-orange-700">
                  <li>High-quality protein sources</li>
                  <li>Antioxidant-rich foods</li>
                  <li>Zinc and selenium for immune function</li>
                  <li>B-complex vitamins</li>
                  <li>Omega-3 fatty acids</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Mental Health and Nutrition
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Depression and Anxiety</h3>
                <ul className="list-disc pl-4 space-y-1 text-yellow-700">
                  <li>Omega-3 fatty acids (fish, nuts, seeds)</li>
                  <li>B-complex vitamins</li>
                  <li>Magnesium and zinc</li>
                  <li>Probiotics for gut-brain connection</li>
                  <li>Regular meal timing</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Stress Management</h3>
                <ul className="list-disc pl-4 space-y-1 text-blue-700">
                  <li>Complex carbohydrates for stable blood sugar</li>
                  <li>Vitamin C and antioxidants</li>
                  <li>Adaptogenic herbs and foods</li>
                  <li>Hydration and electrolyte balance</li>
                  <li>Mindful eating practices</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Building Healthy Eating Habits
            </h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Meal Planning</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Plan meals and snacks in advance</li>
                  <li>Batch cooking and meal prep</li>
                  <li>Keep healthy snacks available</li>
                  <li>Shop with a list and budget</li>
                  <li>Cook at home when possible</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Eating Patterns</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Regular meal times</li>
                  <li>Balanced macronutrients</li>
                  <li>Portion control and mindful eating</li>
                  <li>Hydration throughout the day</li>
                  <li>Limit processed foods and sugar</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Finding Affirming Healthcare
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-green-800 mb-3">What to Look For</h3>
              <ul className="list-disc pl-4 space-y-2 text-green-700">
                <li>Understanding of LGBT+ health disparities</li>
                <li>Knowledge of hormone therapy and medications</li>
                <li>Experience with LGBT+ patients</li>
                <li>Respect for chosen names and pronouns</li>
                <li>Inclusive intake forms and procedures</li>
                <li>Non-judgmental approach to care</li>
                <li>Knowledge of LGBT+ specific health concerns</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Common Nutritional Challenges
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Barriers to Good Nutrition</h3>
                <ul className="list-disc pl-4 space-y-1 text-red-700">
                  <li>Food insecurity and poverty</li>
                  <li>Lack of access to healthy foods</li>
                  <li>Healthcare discrimination</li>
                  <li>Mental health challenges</li>
                  <li>Substance use history</li>
                  <li>Social isolation</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Solutions and Resources</h3>
                <ul className="list-disc pl-4 space-y-1 text-pink-700">
                  <li>Food assistance programs</li>
                  <li>Community gardens and food banks</li>
                  <li>LGBT+ affirming healthcare providers</li>
                  <li>Mental health support and therapy</li>
                  <li>Recovery support groups</li>
                  <li>Community connection and support</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Practical Nutrition Tips
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Budget-Friendly Options</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Buy seasonal and local produce</li>
                  <li>Choose frozen fruits and vegetables</li>
                  <li>Buy in bulk and store properly</li>
                  <li>Cook from scratch when possible</li>
                  <li>Use food assistance programs</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-slate-700 mb-2">Quick and Easy Meals</h3>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Overnight oats and smoothies</li>
                  <li>Sheet pan meals and one-pot dishes</li>
                  <li>Salads and grain bowls</li>
                  <li>Healthy snacks and finger foods</li>
                  <li>Meal prep and batch cooking</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">
              Supplements and Medications
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Important Considerations</h3>
              <ul className="list-disc pl-4 space-y-2 text-yellow-700">
                <li>Consult with healthcare providers before taking supplements</li>
                <li>Be aware of medication interactions</li>
                <li>Consider hormone therapy interactions</li>
                <li>Monitor for side effects and changes</li>
                <li>Choose quality, tested supplements</li>
                <li>Focus on food first, supplements second</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Remember</h3>
              <p className="text-green-700">
                Good nutrition is a form of self-care and an important part of your recovery 
                journey. Don't let barriers like discrimination or lack of access prevent you 
                from nourishing your body and mind. There are resources and support available 
                to help you build healthy eating habits that support your recovery and overall 
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
