import { Link } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function NavbarLink(props) {
    let href = props.href
    const pathName = usePathname();

    let isActive = (href) => { return href === pathName };

    return (
        <Link 
            href={href} 
            _hover={{ borderBottom:'4px', borderColor:'secondary.yellow' }} 
            borderBottom={isActive(href) ? '4px' : ''}
            borderColor={isActive(href) ? 'secondary.yellow' : ''}
            fontWeight={isActive(href) ? 'bold' : ''}
        >
            {props.children}
        </Link>
    )
}