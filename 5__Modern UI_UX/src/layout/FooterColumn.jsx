const FooterColumn = ({ title, links }) => (
    <div>
        <h4 className="text-white font-semibold mb-4">{title}</h4>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <a href="#" className="hover:text-white">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterColumn;