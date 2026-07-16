import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/larum99" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/laura-barona-saavedra-backend-frontend-software-developer/" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return <div className={containerStyles}>
        {socials.map((item) => {
            return <Link key={item.path} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
}

export default Social