import { Component, JSX, ParentProps } from "solid-js";
import Body from "./components/Body";

type RootProps = {
	children: JSX.Element;
};

const Layout: Component = ({ children }: RootProps) => {
	return <Body>{children}</Body>;
};

export default Layout;
