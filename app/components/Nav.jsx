var React = require('react');
var { Link, IndexLink } = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//        <div>
//          <h3>Nav Component</h3>
//            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
//            <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
//            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
//        </div>
//     );
//   },
// });

var Nav = () => {
  return (
     <div>
       <h3>Nav Component - rf</h3>
         <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
         <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
         <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
     </div>
  );
};

module.exports = Nav;
