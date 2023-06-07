import { Carousel, Row, Col } from "antd";
import slide_one from "../../../../public/assets/slider_1.png";
import slide_two from "../../../../public/assets/slider_2.jpg";
import slide_three from "../../../../public/assets/slider_3.jpeg";

import slide_right from "../../../../public/assets/slider_2.png";
import slide_left from "../../../../public/assets/slider_3.png";

export const Slider: React.FC = () => {
  return (
    <Row justify={"center"}>
      <Col>
        <img style={{ opacity: 0.4, marginRight: 10 }} src={slide_right} alt="" />
      </Col>
      <Col span={12}>
        <Carousel>
          <div>
            <img style={{ height: "679px" }} src={slide_one} alt="" />
          </div>
          <div>
            <img style={{ height: "679px" }} src={slide_two} alt="" />
          </div>
          <div>
            <img style={{ height: "679px" }} src={slide_three} alt="" />
          </div>{" "}
        </Carousel>
      </Col>{" "}
      <Col>
        <img style={{ opacity: 0.4, marginLeft: 10 }} src={slide_left} alt="" />
      </Col>
    </Row>
  );
};
