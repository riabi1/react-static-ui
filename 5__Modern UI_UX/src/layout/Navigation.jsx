import Container from '../components/Container';
import Button from '../components/Button';

const Navigation = () => (
    <nav className="bg-white border-b border-gray-200">
        <Container>
            <div className="flex justify-between items-center h-16">
                <div className="text-xl font-bold text-gray-900">ProductName</div>
                <div className="hidden sm:flex gap-6">
                    <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                    <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                    <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                </div>
                <Button className="px-4 py-2 text-base">Sign Up</Button>
            </div>
        </Container>
    </nav>
);
export default Navigation;