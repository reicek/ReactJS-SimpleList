//	Root module
var ToDos = React.createClass({
	//	Download state with server data
	loadToDosFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
//				console.log(data);
				this.setState({toDos: data});
			}.bind(this),
				error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	//	Set the initial (default) state
	getInitialState: function() {
        return {
			toDos: [
				{
					date: '',
					toDo: ''
				}
			]
        };
    },
	componentDidMount: function() {
		this.loadToDosFromServer();
	},
	//	Render the module
	render: function() {
		return (
			<article>
				<ToDoList toDos={this.state.toDos} />
			</article>
		);
	}	
});
	
var ToDoAddBox = React.createClass({
	render: function() {
		return (
			<input type="search"></input>
		);
	}	
});

var ToDoList = React.createClass({
	render: function() {
//		console.log(this.props);
		return (
			<table>
				<thead>
					<tr>
						<th>
							Pasos para dominar ReactJS:
						</th>
					</tr>
				</thead>
				<ToDoListElement toDos={this.props.toDos}/>
			</table>
		);
	}	
});

var ToDoListElement = React.createClass({
	render: function() {
		console.log(this.props);
		var rows = [];
		
		this.props.toDos.forEach(function(element) {
			console.log(element);
			rows.push(
				<tr>
					<td>{element.toDo}</td>
				</tr>);
		})
		return (
			<tbody>
				{rows}
			</tbody>
		);
	}	
});

React.render(
	<ToDos url="jsx/toDos_data.json"/>,
	document.getElementById('toDos')
)