var React = require('react');
var Layout = require('./layout');

var index = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    list: React.PropTypes.array
  },
  render: function() {
    return (
      <Layout title={this.props.title}>
        hello world
      </Layout>
    );
  }
});

module.exports = index;