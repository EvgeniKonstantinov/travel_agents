import React from "react";

import { importNews } from "../../actions/importNews";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";

class NewsImport extends React.Component {
  import = () => {
    this.props.action.importNews();
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
    console.log(this.state);
  };
  render() {
    return (
      <div className="news_admin_page">
        <TextField
          id="token"
          label="Token"
          placeholder="ru"
          className="country_input"
          margin="normal"
          onChange={this.handleChange}
        />
        <div className="import_button" onClick={this.import}>
          Import
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({ tokenId: store.token });
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ importNews }, dispatch)
});
const AdminNewsManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsImport);
export { AdminNewsManager };
