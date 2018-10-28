var Counter = React.createClass({

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function() {
        console.log('wykonuje się przed render');
    },

    componentDidMount: function() {
        console.log('wyświetla komponenty na stronie');
    },

    componentWillReceiveProps: function() {
        console.log('wykonuje się po dodaniu nowych propsów');
    },

    shouldComponentUpdate: function() {
        console.log('sprawdza czy przerysowuje komponent');
        return true;
    },

    componentWillUpdate: function() {
        console.log('przygotowuje uaktualnienia');
    },

    componentDidUpdate: function() {
        console.log('wyświetla komponent po uaktualnieniu');
    },

    componentWillUnmount: function() {
        console.log('usuwa niepotrzebne komponenty');
    },

    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('div', {className: 'counter'},
                    React.createElement('button',{onClick: this.increment}, '+'),
                    React.createElement('div', {}, 'Counter:' + this.state.counter),
                    React.createElement('button', {onClick: this.decrement}, '-'),
                    )
                )
            
        );
    }
});



var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));