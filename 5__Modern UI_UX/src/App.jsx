import { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [features, setFeatures] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showEmpty) {
        setFeatures([
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
        ]);
      }
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showEmpty]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">ProductName</div>
            <div className="hidden sm:flex gap-6">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1"
              >
                About
              </a>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Sign up for an account"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="main-content"
        className="py-16 sm:py-24"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {isLoading ? (
              <div aria-live="polite" aria-busy="true">
                <span className="sr-only">Loading page content...</span>
                <div className="h-16 bg-gray-200 rounded-lg mb-6 animate-pulse" aria-hidden="true"></div>
                <div className="h-6 bg-gray-200 rounded-lg mb-3 animate-pulse" aria-hidden="true"></div>
                <div className="h-6 bg-gray-200 rounded-lg mb-10 w-3/4 mx-auto animate-pulse" aria-hidden="true"></div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="h-12 w-48 bg-gray-200 rounded-lg animate-pulse mx-auto sm:mx-0" aria-hidden="true"></div>
                  <div className="h-12 w-48 bg-gray-200 rounded-lg animate-pulse mx-auto sm:mx-0" aria-hidden="true"></div>
                </div>
              </div>
            ) : (
              <>
                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
                >
                  Build Amazing Products Faster
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                  The modern platform that helps teams ship better products with less effort.
                  Streamline your workflow and focus on what matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    aria-label="Get started with a free account"
                  >
                    Get Started Free
                  </button>
                  <button
                    className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    aria-label="Watch a product demonstration video"
                  >
                    Watch Demo
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 sm:py-24"
        aria-labelledby="features-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div aria-live="polite" aria-busy="true">
              <span className="sr-only">Loading features...</span>
              <div className="h-10 bg-gray-200 rounded-lg mb-4 w-64 mx-auto animate-pulse" aria-hidden="true"></div>
              <div className="h-6 bg-gray-200 rounded-lg mb-16 w-96 mx-auto animate-pulse" aria-hidden="true"></div>
            </div>
          ) : (
            <>
              <h2
                id="features-heading"
                className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4 tracking-tight"
              >
                Everything you need
              </h2>
              <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                Powerful features designed to help you work smarter and ship faster
              </p>
            </>
          )}

          {isLoading ? (
            // Loading skeletons
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" aria-hidden="true">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-5 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded-lg mb-3 w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-lg w-5/6 animate-pulse"></div>
                </div>
              ))}
            </div>
          ) : features.length > 0 ? (
            // Feature cards
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 focus-within:ring-2 focus-within:ring-blue-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mb-5" aria-hidden="true"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            // Empty state
            <div
              className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center max-w-2xl mx-auto"
              role="status"
              aria-live="polite"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No features available</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're currently updating our features. Check back soon or contact us to learn more about what we offer.
              </p>
              <button
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
                aria-label="Contact support team"
              >
                Contact Support
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-blue-600 py-16 sm:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight leading-tight"
            >
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of teams already building better products.
            </p>
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors"
              aria-label="Start your free trial now"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8" aria-label="Footer navigation">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 ProductName. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Debug Controls */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2" role="group" aria-label="Development controls">
        <button
          onClick={() => setIsLoading(!isLoading)}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Toggle loading state for testing"
        >
          Toggle Loading
        </button>
        <button
          onClick={() => {
            setShowEmpty(!showEmpty);
            setFeatures([]);
            setIsLoading(true);
          }}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Toggle empty state for testing"
        >
          Toggle Empty
        </button>
      </div>
    </div>
  );
}
export default App;