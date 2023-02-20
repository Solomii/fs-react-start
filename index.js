// React;
// ReactDOM;

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        // this.add = this.add.bind(this);
        // this.sub = this.add.bind(this);  /// так ми пишемо в випадку коли  не використовуємо функцію стрілку
    }
    add = () => {
            this.setState({ count: this.state.count + 1 });
    };
    sub = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        const { count } = this.state;
        const { classNameSection, classNameBtn } = this.props;
        return React.createElement(
            "section",
            { className:classNameSection },
            React.createElement("h2", {}, count),
            React.createElement(
                "button",
                { onClick: this.add, className: classNameBtn },
                "+"
            ),
            React.createElement(
                "button",
                { onClick: this.sub, className: classNameBtn },
                "-"
            )
        );
    }
}

const reactElement = React.createElement(Counter, {
    classNameSection: "heading",
    classNameBtn: "btn",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);
