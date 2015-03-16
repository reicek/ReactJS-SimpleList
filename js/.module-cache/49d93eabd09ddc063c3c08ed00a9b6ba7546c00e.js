"use strict"
var SimpleList = React.createClass({displayName: "SimpleList",
	getInitialState: function() {
        return {
			simpleList: [
				{
					row: 'cargando	...'
				}
			]
        };
    },
	componentDidMount: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				console.log('_________________');
				console.log('Simple List data recieved:');
				console.log(data);
				this.setState({simpleList: data});
			}.bind(this),
				error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString())
			}.bind(this)
		});
	},
	render: function() {
		return (
			React.createElement("span", null, 
				React.createElement("p", null, React.createElement("strong", null, "Pasos para dominar un nuevo lenguaje de programación:")), 
				React.createElement(SimpleListRow, {simpleList: this.state.simpleList})
			)
		);
	}	
});

var SimpleListRow = React.createClass({displayName: "SimpleListRow",
	render: function() {
		console.log('_________________');
		console.log('simpleList rows data:');
		console.log(this.props);
		var rows = this.props.simpleList;
		return (
			React.createElement("ol", null, 
				rows.map(function(element) {
					return (
						React.createElement("li", null, element.row)
					);
				})
			)
		);
	}	
});

React.render(
	React.createElement(SimpleList, {url: "simpleList_data.json"}),
	document.getElementById('simpleList')
)