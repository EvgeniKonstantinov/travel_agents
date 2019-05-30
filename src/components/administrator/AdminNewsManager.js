import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { importNews } from "../../actions/importNews";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@material-ui/core/TextField";

class NewsImport extends React.Component {
  import = () => {
    const { token } = this.state;
    this.props.action.importNews({ apiKey: token });
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: e.currentTarget.value });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <TextField
          id="token"
          label="Token"
          placeholder="ru"
          className="country_input"
          margin="normal"
          onChange={this.handleChange}
        />
        <button onClick={this.import}>Import</button>
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
