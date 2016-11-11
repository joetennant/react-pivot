var _ = { without: require('lodash/without'), sortBy: require('lodash/sortBy') }
var React = require('react')

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      sorted: false,
      hiddenColumns: [],
      onChange: function () {}
    }
  },

  render: function () {

    //sort hidden columns
    var sorted = this.props.sorted ? _.sortBy(this.props.hiddenColumns) : this.props.hiddenColumns;

    return (
      <div className='reactPivot-columnControl'>
        { !sorted.length ? '' :
          <select value={''} onChange={this.showColumn}>
            <option value={''}>- Hidden Columns -</option>
            { sorted.map(function(column) {
              return <option key={column}>{column}</option>
            })}
          </select>
        }
      </div>
    )
  },

  showColumn: function (evt) {
    var col = evt.target.value
    var hidden = _.without(this.props.hiddenColumns, col)
    this.props.onChange(hidden)
  },
})
