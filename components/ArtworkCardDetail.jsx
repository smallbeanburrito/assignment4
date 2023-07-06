import useSWR from "swr";
import Error from "next/error";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";

export default function ArtworkCardDetail(props) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.objectID}`
  );

  if (error) {
    return <Error statusCode={404} />;
  }
  if (data) {
    if (data.length < 1) {
      return null;
    }

    return (
      <Card>
        {data.primaryImage ? <Card.Img src={data.primaryImage} /> : ""}
        <Card.Body>
          <Card.Title>{data.title ? data.title : "N/A"}</Card.Title>
          <Card.Text>
            {data.objectDate ? data.objectDate : "N/A"}&nbsp;
            {data.medium ? data.medium : "N/A"}
            <br />
            <br />
            {data.artistDisplayName ? data.artistDisplayName : "N/A"}&nbsp;
            {data.artistDisplayName ? (
              <a
                href={data.artistWikidata_URL}
                target="_blank"
                rel="noreferrer"
              >
                wiki
              </a>
            ) : (
              ""
            )}
            &nbsp;
            {data.creditLine ? data.creditLine : "N/A"}&nbsp;
            {data.dimensions ? data.dimensions : "N/A"}&nbsp;
            {data.classification ? data.classification : "N/A"}
          </Card.Text>
          <Link href={"/artwork/" + data.objectID} passHref>
            <Button variant="primary">{data.objectID}</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
