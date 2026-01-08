import Card from "react-bootstrap/Card";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./ArticleItem.css";
import { FiClock } from "react-icons/fi";

function ArticleItem({ image, title, desc, writer, readingTime, id }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="py-2">{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Link to={`/article/${id}`}>
          <span className="read-more">
            <span>ادامه مقاله</span>
            <TiArrowLeftThick size="25px" />
          </span>
        </Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span>نویسنده: {writer}</span>
        <span>
          <FiClock /> {readingTime} دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;
