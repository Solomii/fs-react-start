// React;
// ReactDOM;

class Heading extends React.Component {
    render() {
        console.log(this);
        const { titleProps, classProps, children } = this.props;
        return React.createElement(
            "h2",
            { title: titleProps, className: classProps },
            "hi!!!  ",
            ...children
        );
    }
}

// const h1 = React.createElement("h1", { title: "title" }, "title:", "hello");

const reactElement = React.createElement(
    Heading,
    {
        titleProps: "title for 2",
        classProps: "heading",
    },
    "children",
    "123"
);
console.log(reactElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);
