import React from "react";

import { css } from "styled-components";
import Helmet from "../../Components/Helmet";

export const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  transition: display 0.5s ease;
`;

function Contact() {
  //   const [loading, setLoading] = useState(false);

  return (
    <Helmet title="Liên Hệ">
      <div className="contact">
        <div className="contact_content">
          <h2 className="contact_title_topic">LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <p className="contact_title_icon">
            Tuấn store <i className="fas fa-store"></i>
          </p>
        </div>
        <div className="contact_container">
          <div className="contact_container_Infor">
            <div className="contact_container_Infor_box">
              <div className="contact_container_box_icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact_container_box_title">
                <h2>Địa Chỉ</h2>
                <p>125 Nguyễn Văn Linh, Quận Hải Châu, TP. Đà Nẵng</p>
              </div>
            </div>
            <div className="contact_container_Infor_box">
              <div className="contact_container_box_icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div className="contact_container_box_title">
                <h2>Điện Thoại</h2>
                <p>0935278930</p>
              </div>
            </div>
            <div className="contact_container_Infor_box">
              <div className="contact_container_box_icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div className="contact_container_box_title">
                <h2>Email</h2>
                <p>PhamTuan02051998@gmail.com</p>
              </div>
            </div>
          </div>
          {/* <div className="contact_container_Infor_customer">
            <div className="contact_container_Infor_customer_titlefb"></div>
            <div className="contact_container_Infor_customer_title">edwww</div>
          </div> */}
        </div>
      </div>
    </Helmet>
  );
}

export default Contact;
