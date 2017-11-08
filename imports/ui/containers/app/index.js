import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { withTracker } from "meteor/react-meteor-data";
import { muiTheme } from "../../config/theme";
import Routes from "../../../startup/client/routes";
import { Notes } from "../../../api/notes";

import "./styles.css";

import Layout from '../../components/Layout/'


export const url = `http://localhost:3000`;
const loginUrl = `${url}/login`


// const NoteJS = () => (
//   <MuiThemeProvider muiTheme={muiTheme}>
//     <Router>
//       <Layout>
//         <Routers />
//       </Layout>
//     </Router>
//   </MuiThemeProvider>
// );

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;


// Layout.defaultProps = {
//   notes: {}
// };

// Layout.PropTypes = {
//   notes: PropTypes.array.isRequired,
//   currentUserId: PropTypes.string
// };

// export default withTracker(() => {
//   Meteor.subscribe("notes");
//   console.log(Notes);
//   return {
//     currentUserId: Meteor.userId(),
//     notes: Notes.find({}).fetch()
//   };
// })(Layout);
