const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Welcome to Our Platform
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                    Building static UIs with React made easy and beautiful.
                </p>
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Hero;