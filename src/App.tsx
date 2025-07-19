import { Route, Router } from "@solidjs/router";
import { ParentComponent } from "solid-js";

//ROUTES
import Home from "@pages/Home";

type AppProps = {
	layout: ParentComponent;
};

export default function App({ layout }: AppProps) {
	return (
		<Router root={layout}>
			<Route path="/" component={Home} />
			<Route path="/home" component={Home} />
		</Router>
	);
}
