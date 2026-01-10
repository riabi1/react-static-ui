import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">ProductName</div>
            <div className="hidden sm:flex gap-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {isLoading ? (
              <>
                <div className="h-16 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-lg mb-3 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-lg mb-10 w-3/4 mx-auto animate-pulse"></div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="h-12 w-48 bg-gray-200 rounded-lg animate-pulse mx-auto sm:mx-0"></div>
                  <div className="h-12 w-48 bg-gray-200 rounded-lg animate-pulse mx-auto sm:mx-0"></div>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Build Amazing Products Faster
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                  The modern platform that helps teams ship better products with less effort.
                  Streamline your workflow and focus on what matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
                    Get Started Free
                  </button>
                  <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50">
                    Watch Demo
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <>
              <div className="h-10 bg-gray-200 rounded-lg mb-4 w-64 mx-auto animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded-lg mb-16 w-96 mx-auto animate-pulse"></div>
            </>
          ) : (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4 tracking-tight">
                Everything you need
              </h2>
              <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                Powerful features designed to help you work smarter and ship faster
              </p>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons for feature cards
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-5 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded-lg mb-3 w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-lg w-5/6 animate-pulse"></div>
                </div>
              ))
            ) : (
              // Actual feature cards
              [
                {
                  title: "Fast Performance",
                  description: "Lightning-fast load times and smooth interactions keep your users engaged."
                },
                {
                  title: "Secure by Default",
                  description: "Enterprise-grade security built in from the ground up to protect your data."
                },
                {
                  title: "Easy Integration",
                  description: "Connect with your existing tools in minutes with our simple API."
                },
                {
                  title: "Real-time Sync",
                  description: "Changes sync instantly across all devices and team members."
                },
                {
                  title: "Advanced Analytics",
                  description: "Deep insights into user behavior and product performance."
                },
                {
                  title: "24/7 Support",
                  description: "Our team is always here to help you succeed with priority support."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-5"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight leading-tight">
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of teams already building better products.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 ProductName. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Debug: Toggle loading button */}
      <button
        onClick={() => setIsLoading(!isLoading)}
        className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800"
      >
        Toggle Loading
      </button>
    </div>
  );
}

export default App;