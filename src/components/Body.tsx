import { cn } from "@/utils/cn";
import { JSX, ParentProps } from "solid-js";

type BodyProps = ParentProps<JSX.HTMLAttributes<HTMLDivElement>>;

export default function Body({ children, class: className, ...props }: BodyProps) {
	return (
		<div {...props} class={cn("font-poppins", className)}>
			{children}
		</div>
	);
}
