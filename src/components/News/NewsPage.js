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
    width: 500
  },
  bullet: {
    display: "inline-block",
    margin: "20px 2px",
    transform: "scale(0.8)"
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
  const { dataNews } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {dataNews.language}
        </Typography>
        <Typography variant="h5" component="h2">
          {dataNews.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          watchers: {dataNews.watchers}
        </Typography>
        <Typography variant="body2" component="p">
          {dataNews.description}
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
  renderNews() {
    const { dataNews } = this.props;
    let newsTemplate = null;
    console.log(dataNews);
    if (dataNews) {
      newsTemplate = dataNews.map(item => {
        return (
          <div className="reb_block" key={item.id}>
            <Article dataNews={item} />
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
