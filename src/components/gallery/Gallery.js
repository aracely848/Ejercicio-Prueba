import React from 'react';
import { Card, CardColumns} from 'react-bootstrap';
import './gallery.css';


function Gallery() {
  return (
    <div className="col-12 col-sm-8 mt-3">
      <CardColumns>
        <Card className="col-sm-12">
          <Card.Img variant="top" src="https://i.blogs.es/126d35/plugin-galeria/450_1000.jpg" />
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://cdn.forbes.com.mx/2017/04/galerias-de-arte.jpg" />
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.escueladesarts.com/wp-content/uploads/galerias-de-arte.jpg" />
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/imagen_720x720/public/senalradio/articulo-noticia/galeriaimagen/12303929_1473431429340311_2360109361025442755_o_0.jpg?itok=0qHnCgL5&timestamp=1460700084" />
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://image.slidesharecdn.com/galeriasvirtuales-130605120509-phpapp02/95/galerias-virtuales-1-638.jpg?cb=1370433934" />
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.clasesdeperiodismo.com/wp-content/uploads/2014/11/expo.jpg" />
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardColumns>
    </div>
  );
}

export default Gallery;