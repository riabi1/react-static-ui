import FeatureCard from "./FeatureCard";
import Container from "../components/Container";

const Features = () => {
    const features = [
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
    ];

    return (
        <section className="py-12 sm:py-20">
            <Container>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                    Everything you need
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;