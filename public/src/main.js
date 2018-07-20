import {render, e} from "./lib.js"

render(
	e("div", {className: "top-frame"},
		e("p", "hello world")
	),
	document.getElementById("root")
);
