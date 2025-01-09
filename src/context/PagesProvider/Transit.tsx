import { MouseEventHandler, ReactElement } from "react";
import { Link } from "@chakra-ui/react";
import { ILinkProps } from "./interface";
import { usePages } from "./usePages";

export const Transit = ({ children, to }: ILinkProps): ReactElement => {
	const { navigate } = usePages();

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
		event.preventDefault();
		navigate(to);
	};

	return (
		<Link
			p="2"
			color="white"
			variant="plain"
			onClick={handleClick}
			href={to}
		>
			{children}
		</Link>
	);
}
