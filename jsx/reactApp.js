//	Root module
var SimpleList = React.createClass({
	//	Download state with server data
	loadSimpleListFromServer: function() {
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
	//	Set the initial (default) state
	getInitialState: function() {
        return {
			simpleList: [
				{
					row: ''
				}
			]
        };
    },
	componentDidMount: function() {
		this.loadSimpleListFromServer();
	},
	//	 Actually remder the module
	render: function() {
		return (
			<table>
				<thead>
					<tr>
						<th>
							Pasos para dominar ReactJS:
						</th>
					</tr>
				</thead>
				<SimpleListRow simpleList={this.state.simpleList}/>
			</table>
		);
	}	
});

var SimpleListRow = React.createClass({
	render: function() {
		console.log('_________________');
		console.log('simpleList rows data:');
		console.log(this.props);
		var rows = this.props.simpleList;
		return (
			<tbody>
				{rows.map(function(element) {
					return <tr key={element.id}><td>{element.row}</td></tr>
				})}
			</tbody>
		);
	}	
});

React.render(
	<SimpleList url="jsx/simpleList_data.json"/>,
	document.getElementById('simpleList')
)