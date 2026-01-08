import Container from '../components/Container';
import Button from '../components/Button';

const Hero = () => (
    <section className="py-12 sm:py-20">
        <Container>
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Build Amazing Products Faster
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">
                    The modern platform that helps teams ship better products with less effort.
                    Streamline your workflow and focus on what matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button>Get Started Free</Button>
                    <Button variant="secondary">Watch Demo</Button>
                </div>
            </div>
        </Container>
    </section>
);
export default Hero;