import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { skeletonProduct } from "../../assets/fake-data";
import Grid from "../../Components/Grid";
import Helmet from "../../Components/Helmet";
import ProductCart from "../../Components/ProductCart";
import { SectionBody } from "../../Components/Section";
import SkeletonProducts from "../../Components/SkeletonProducts";
import { setLoadingAction } from "../../Store/Reducer/loadingReducer";
import {
  productsSelector,
  useGetAllProductsQuery,
} from "../../Store/Reducer/productsReducer";
// import { getProducts } from "../../utils";

export default function Catalog() {
  const { products } = useSelector(productsSelector);
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();

  const { isLoading } = useGetAllProductsQuery({
    pageNum: pageNum,
    limitNum: 5,
  });

  const handleLoadmoreProduct = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  useEffect(() => {
    dispatch(setLoadingAction(isLoading));
  }, [dispatch, isLoading, pageNum]);

  return (
    <Helmet title="Catalog">
      <SectionBody>
        <div className="cart-products">
          <Grid col={5} mdCol={2} smCol={1} gap={0}>
            {products?.map((item, index) => {
              return (
                <div key={index}>
                  <ProductCart
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    status={item.status}
                    star={item.star}
                    amount={item.amount}
                    category={item.category}
                    capacity={item.capacity}
                    product={item}
                    varation={item.varation}
                    image={item.image}
                    description={item.description}
                    priceOld={item.priceOld}
                    height="350"
                    img_width="90%"
                    right="5px"
                    sold={item.sold}
                  />
                </div>
              );
            })}
          </Grid>

          <Grid col={5} mdCol={2} smCol={1} gap={0}>
            {isLoading &&
              skeletonProduct.map((item, index) => (
                <SkeletonProducts key={index} />
              ))}
          </Grid>
        </div>
      </SectionBody>
      <Button
        onClick={handleLoadmoreProduct}
        style={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          marginLeft: "45%",
        }}
      >
        Tải thêm
      </Button>
      {/* <Empty /> */}
    </Helmet>
  );
}
