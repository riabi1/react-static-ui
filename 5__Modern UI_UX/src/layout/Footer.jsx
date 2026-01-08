import FooterColumn from "./FooterColumn";
import Container from "../components/Container";

const Footer = () => {
    const footerData = [
        { title: "Product", links: ["Features", "Pricing", "Security"] },
        { title: "Company", links: ["About", "Blog", "Careers"] },
        { title: "Resources", links: ["Documentation", "Help Center", "API"] },
        { title: "Legal", links: ["Privacy", "Terms", "Cookies"] }
    ];

    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <Container>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
                    {footerData.map((column, index) => (
                        <FooterColumn key={index} {...column} />
                    ))}
                </div>
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p>&copy; 2024 ProductName. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;