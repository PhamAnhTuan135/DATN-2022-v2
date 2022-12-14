import React from "react";
import styled from "styled-components";
import { Card, Col, Menu, Row } from "antd";
import { Tabs } from "antd";
import Meta from "antd/lib/card/Meta";
import Avatar from "antd/lib/avatar/avatar";
const { TabPane } = Tabs;

const NewsPage = styled.div`
  .news-title {
    font-size: 40px;
    color: #979797;
    font-weight: 600;
    p {
      margin: 0;
    }
  }
  .ant-tabs-tab {
    font-size: 17px;
    margin: 10px 20px;
    color: #898989;
  }
  .ant-col.ant-col-17.gutter-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fafafa;
    .ant-card-meta {
      margin: -20px 0;
    }
    .news-card-title {
      .ant-card.ant-card-bordered.ant-card-hoverable {
        width: 90%;
        height: 415px;
      }
    }
    .news-list-card-title {
      .ant-card.ant-card-bordered.ant-card-hoverable {
        width: 300px;
        height: 90px;
        margin: 16px 0;
      }
      .ant-card-body {
        width: 60%;
        height: 100%;
      }
      img {
        margin-top: 5px;
      }
    }
    .news-list-card-title {
      transform: translateX(-29px);
    }
  }
  .news-list .news-top {
    font-size: 20px;
    color: #c5c5c5;
  }
  span.ant-avatar.ant-avatar-lg.ant-avatar-circle {
    margin-right: 10px;
  }
  span.ant-avatar-string {
    font-size: 20px;
  }
  ul.ant-menu.ant-menu-root.ant-menu-inline.ant-menu-light {
    width: 96%;
  }
  .news-top {
    font-size: 20px;
    color: #d3d3d3;
  }
  .news-item {
    .news-card-author {
      display: flex;
    }
    .ant-card-body {
      padding: 10px 20px;
    }
    p.news-title-tabs {
      color: #6157ff;
      margin-bottom: 5px;
    }
    .ant-card-cover {
      width: 500px;
    }
    .ant-card.ant-card-bordered.ant-card-hoverable {
      display: flex;
    }
    .hbEgeo .news-item .ant-card-cover {
      width: 52%;
    }
    .ant-card-body {
      width: 65%;
    }
    .ant-card-meta-title {
      font-size: 26px;
    }
    .ant-card-meta-description {
      font-size: 16px;
    }
    .news-card-author {
      margin-top: 12px;
      p {
        margin: 0 10px;
        margin-top: 5px;
      }
    }
  }
  .ant-card.ant-card-bordered.ant-card-hoverable {
    margin: 20px;
  }
  .news-product-new {
    .ant-card.ant-card-bordered.ant-card-hoverable {
      display: flex;
      height: 88px;
      justify-content: center;
      align-items: center;
    }
    .ant-card-body {
      height: 88px;
      padding: 24px 5px;
    }
  }
  .news-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
// const onOpenChange = keys => {
//     const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
//     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//       setOpenKeys(keys);
//     } else {
//       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//     }
//   };
const Demo = () => (
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="TIN M???I" key="1">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={17}>
          <div className="news-card-title">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/490x326/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/9/637641323761238139_so-sanh-iphone-13-pro-max-va-iphone-12-pro-max-8.jpg"
                />
              }
            >
              <Meta
                title="T???ng h???p th??ng tin iphone 13: Nh???ng g?? b???n mu???n bi???t v??? si??u ph???m c???a Apple"
                description=" 5 - 3 gi??? tr?????c"
              />
            </Card>
          </div>
          <div className="news-list-card-title">
            <Card
              hoverable
              style={{ display: "flex" }}
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/12/637643963999583138_z-fold-flip-3-uudai-6.jpg"
                />
              }
            >
              <Meta title="C??ch th???c " description=" 5 - 3 gi??? tr?????c" />
            </Card>
            <Card
              hoverable
              style={{ display: "flex" }}
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/12/637643633515922391_samsung-galaxy-z-flip-3-cover.jpg"
                />
              }
            >
              <Meta title="C??ch th???c " description=" 5 - 3 gi??? tr?????c" />
            </Card>
            <Card
              hoverable
              style={{ display: "flex" }}
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643231573070713_samsung-galaxy-zfold-3-cover.jpg"
                />
              }
            >
              <Meta title="C??ch th???c " description=" 5 - 3 gi??? tr?????c" />
            </Card>
            <Card
              hoverable
              style={{ display: "flex" }}
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/120x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643137305288321_samsung-galaxy-zfold-3-fpt-cover.jpg"
                />
              }
            >
              <Meta title="C??ch th???c " description=" 5 - 3 gi??? tr?????c" />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={7}>
          <div className="news-top">
            <p>Xem Nhi???u</p>
          </div>
          <div className="news-list">
            <Menu
              mode="inline"
              // onOpenChange={onOpenChange}
              style={{ width: 256 }}
            >
              <Menu.Item key="1" style={{ paddingLeft: 0, margin: "20px 0px" }}>
                <Avatar
                  src=""
                  alt="1"
                  size="large"
                  style={{ backgroundColor: "#f56a00" }}
                >
                  1
                </Avatar>
                Jailbreak l?? g??? C?? n??n Jailbreak cho iPhone, iPad?
              </Menu.Item>
              <Menu.Item key="2" style={{ paddingLeft: 0, margin: "20px 0px" }}>
                <Avatar
                  src=""
                  alt="2"
                  size="large"
                  style={{ backgroundColor: "#7265e6" }}
                >
                  2
                </Avatar>
                C???ng Lightning l?? g??? T??m hi???u v??? c???ng k???t n???i Lightning c???a
                Apple
              </Menu.Item>
              <Menu.Item key="3" style={{ paddingLeft: 0, margin: "20px 0px" }}>
                <Avatar src="" alt="3" size="large">
                  3
                </Avatar>
                Snapchat l?? g??? C??ch t???i ???ng d???ng Snapchat cho ??i???n tho???i
              </Menu.Item>
              <Menu.Item key="4" style={{ paddingLeft: 0, margin: "20px 0px" }}>
                <Avatar src="" alt="4" size="large">
                  4
                </Avatar>
                K??nh c?????ng l???c Corning Gorilla Glass l?? g??? Hi???u qu??? ra sao tr??n
                smartphone?
              </Menu.Item>
              <Menu.Item key="5" style={{ paddingLeft: 0, margin: "20px 0px" }}>
                <Avatar src="" alt="5" size="large">
                  5
                </Avatar>
                ?????ng h??? th??ng minh smartwatch l?? g??? C?? n??n mua ?????ng h??? ??eo tay
                th??ng minh kh??ng?
              </Menu.Item>
            </Menu>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* /className="gutter-row"/ */}
        <Col span={17} className="news-item">
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                alt="example"
                src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/12/637644095545558638_faceplay.jpg"
              />
            }
          >
            <p className="news-title-tabs">Th??? Thu???t - M???o V???t</p>
            <Meta
              title="FacePlay: C??ch t???i mi???n ph?? app gh??p m???t v??o video c??? trang tr??n Android"
              description="N???u b???n ??ang quan t??m t???i FacePlay, b??i vi???t s??? cung c???p cho b???n c??ch t???i v??? app gh??p m???t v??o video c??? trang Trung Qu???c ??ang r???t hot tr??n m???ng hi???n nay."
            />
            <div className="news-card-author">
              <Avatar src="" alt="5" size="default">
                5
              </Avatar>
              <p>Jasmine - 5 gi??? tr?????c</p>
            </div>
          </Card>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                alt="example"
                src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/12/637644095545558638_faceplay.jpg"
              />
            }
          >
            <p className="news-title-tabs">Th??? Thu???t - M???o V???t</p>
            <Meta
              title="FacePlay: C??ch t???i mi???n ph?? app gh??p m???t v??o video c??? trang tr??n Android"
              description="N???u b???n ??ang quan t??m t???i FacePlay, b??i vi???t s??? cung c???p cho b???n c??ch t???i v??? app gh??p m???t v??o video c??? trang Trung Qu???c ??ang r???t hot tr??n m???ng hi???n nay."
            />
            <div className="news-card-author">
              <Avatar src="" alt="5" size="default">
                5
              </Avatar>
              <p>Jasmine - 5 gi??? tr?????c</p>
            </div>
          </Card>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <img
                alt="example"
                src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/12/637644095545558638_faceplay.jpg"
              />
            }
          >
            <p className="news-title-tabs">Th??? Thu???t - M???o V???t</p>
            <Meta
              title="FacePlay: C??ch t???i mi???n ph?? app gh??p m???t v??o video c??? trang tr??n Android"
              description="N???u b???n ??ang quan t??m t???i FacePlay, b??i vi???t s??? cung c???p cho b???n c??ch t???i v??? app gh??p m???t v??o video c??? trang Trung Qu???c ??ang r???t hot tr??n m???ng hi???n nay."
            />
            <div className="news-card-author">
              <Avatar src="" alt="5" size="default">
                5
              </Avatar>
              <p>Jasmine - 5 gi??? tr?????c</p>
            </div>
          </Card>
        </Col>
        {/* /className="gutter-row"/ */}
        <Col span={7} className="news-product-new">
          <div className="news-top">
            <p>S???n Ph???m M???i</p>
          </div>
          <div className="news-list-new">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/9//637588529466974447_vivo-y53s-xanhden-dd.jpg"
                />
              }
            >
              <Meta
                title="Vivo Y53s 8GB+3GB - 128GB"
                description="9 b??i vi???t"
              />
            </Card>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/9//637588529466974447_vivo-y53s-xanhden-dd.jpg"
                />
              }
            >
              <Meta
                title="Vivo Y53s 8GB+3GB - 128GB"
                description="9 b??i vi???t"
              />
            </Card>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/9//637588529466974447_vivo-y53s-xanhden-dd.jpg"
                />
              }
            >
              <Meta
                title="Vivo Y53s 8GB+3GB - 128GB"
                description="9 b??i vi???t"
              />
            </Card>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/9//637588529466974447_vivo-y53s-xanhden-dd.jpg"
                />
              }
            >
              <Meta
                title="Vivo Y53s 8GB+3GB - 128GB"
                description="9 b??i vi???t"
              />
            </Card>
          </div>
          <div className="news-promotion">
            <div className="news-top">
              <p>Khuy???n M??i</p>
            </div>
            <div className="news-product-promotion">
              <div className="news-img">
                <img
                  alt=""
                  src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/137935/Originals/Z-Fold-Flip-3-UuDai-6.jpg"
                />
                <div className="news-text">
                  C??ch th???c nh???n ??u ????i gi???m ?????n 6,4 tri???u ?????ng khi l??n ?????i
                  Galaxy Z Fold3
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </TabPane>
    <TabPane tab="KHUY???N M??I" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="TH??? THU???T" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="FOR GAMERS" key="4">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="VIDEO HOT" key="5">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="????NG GI?? - T?? V???N" key="6">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="APP & GAME" key="7">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="S??? KI???N" key="8">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);
function News(props) {
  // const [openKeys, setOpenKeys] = React.useState(['sub1']);
  return (
    <NewsPage>
      <div className="news-title">
        <p className="TIN M???I">TIN M???i</p>
      </div>
      <Demo />
    </NewsPage>
  );
}

News.propTypes = {};

export default News;
