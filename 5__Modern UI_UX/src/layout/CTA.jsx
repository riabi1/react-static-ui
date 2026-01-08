import Container from '../components/Container';

const CTA = () => (
    <section className="bg-blue-600 py-12 sm:py-20">
        <Container>
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Ready to get started?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Join thousands of teams already building better products.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50">
                    Start Free Trial
                </button>
            </div>
        </Container>
    </section>
);

export default CTA;