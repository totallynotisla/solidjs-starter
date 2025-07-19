import { Route, Router } from "@solidjs/router";
import { ParentComponent } from "solid-js";

//ROUTER
import Home from "@pages/Home";

type RouterAppProps = {
	layout: ParentComponent;
};

export default function App({ layout }: RouterAppProps) {
	return (
		<Router root={layout}>
			<Route path="/" component={Home} />
			<Route path="/home" component={Home} />
		</Router>
	);
}
