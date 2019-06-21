import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { NEWS_IMPORT } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  card: {
    width: 500,
    height: 300
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Article = props => {
  const classes = useStyles();
  const { renderDataNews } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {renderDataNews.language}
        </Typography>
        <Typography variant="h5" component="h2">
          {renderDataNews.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          watchers: {renderDataNews.watchers}
        </Typography>
        <Typography variant="body2" component="p">
          {renderDataNews.description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

class NewsArray extends React.Component {
  dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a, b) => {
      let result =
        a[property] > b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  renderNews() {
    const { dataNews } = this.props;
    let newsTemplate = null;
    let renderDataNews = dataNews.sort(this.dynamicSort("watchers"));

    if (renderDataNews) {
      newsTemplate = renderDataNews.map(item => {
        return (
          <div className="reb_block" key={item.id}>
            <Article renderDataNews={item} />
          </div>
        );
      });
    } else {
      return <h2> Не работает</h2>;
    }

    return newsTemplate;
  }

  render() {
    const { Data } = this.props.dataNews;
    return (
      <div>
        <div className="leftBlock main_leftBlock" />
        <div className="rightBlock main_rightBlock">
          {this.renderNews()}
          {Data ? (
            <strong className={"news__count"}>
              Всего новостей: {Data.length}
            </strong>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({ dataNews: store.dataNews });

const NewsPage = connect(mapStateToProps)(NewsArray);
export { NewsPage };
