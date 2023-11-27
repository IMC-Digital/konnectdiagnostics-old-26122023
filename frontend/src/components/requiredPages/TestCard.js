import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const TestCard = ({ item, userId, auth, cart, handleLoginClick }) => {
  const [quantity, setQuantity] = useState(0);
  const [showQuantityController, setShowQuantityController] = useState(false);

  useEffect(() => {
    const cartItem = cart.find((cartItem) => cartItem.product_id === item.product_id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setShowQuantityController(true);
    } else {
      setShowQuantityController(false);
    }
  }, [cart, item.product_id]);

  const handleAddToCartClick = () => {
    if (!auth) {
      // Show an alert or a modal to sign in when auth is false
      // alert('Please sign in to add to cart.');
      handleLoginClick();
      return;
    }

    setShowQuantityController(true);
    const data = { product_id: item.product_id, userId, quantity: 1 };
    axios
      .post('http://localhost:3210/addtocart', data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // 
        } else {
          console.log('err occurred, not Success');
        }
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
    updateCartItemQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItemQuantity(quantity - 1);
    } else if (quantity === 1) {
      removeCartItem(item.product_id, userId);
    }
  };

  const updateCartItemQuantity = (newQuantity) => {
    if (!auth) {
      // Show an alert or a modal to sign in when auth is false
      // alert('Please sign in to update quantity.');
      handleLoginClick();
      return;
    }

    const data = { product_id: item.product_id, quantity: newQuantity, userId };
    axios
      .post('http://localhost:3210/updatecartitemquantity', data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // refreshCart();
        } else {
          console.log('err occurred while updating quantity');
        }
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
      });
  };

  const removeCartItem = (product_id, userId) => {
    if (!auth) {
      // Show an alert or a modal to sign in when auth is false
      // alert('Please sign in to remove item.');
      handleLoginClick();
      return;
    }

    const data = { product_id, userId };
    axios
      .post('http://localhost:3210/removecartitem', data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // 
        } else {
          console.log('err occurred while removing item');
        }
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };

  return (
    <Wrapper>
      <div className="tstCards d-flex gap-2">
        <img src="/images/k.png" className="cardcomplogo" alt="" />
        <div className="tstsCard w-100">
          <div className="go-corner">
          </div>
          <div className="tcardbody">
            <div className="card_org_cont">
              <img src={"/images/organs/" + item.category + ".png"} className="testOrgImg" alt="" />
            </div>
            <h5 className="tstTitle">{item.product_name}</h5>
            <p className="tstInv"> <b> INVCODE: </b> {item.product_code} </p>
            <div className="w-100 mb-4 more-det">
              <p className="tstInv"> <b> Sample Type: </b> {item.sample_type} </p>
              {/* <p className="tstInv"> Pre test preparation: <b> {item.pre_test_preparation} </b> </p> */}
              <p className="tstInv"> <b> Test Report Delivery: </b> {item.test_report_delivery} </p>
              <p className="tstInv"> <b> Frequency: </b> {item.frequency} </p>
              {/* <p className="tstInv"> Home sample collection: <b> {item.home_sample_collection } </b> </p> */}
            </div>
          </div>

          <div className="ftr-sec bg-light px-3 py-2 w-100 d-flex justify-content-between border-top tcardfooter">
            <div>
              {auth ? (
                showQuantityController ? (
                  <div className='qntCntWrp'>
                    <button className='plusminBtn plsBtn' onClick={handleDecrementQuantity}>-</button>
                    <span className='quantDisp'>{quantity}</span>
                    <button className='plusminBtn mnsBtn' onClick={handleIncrementQuantity}>+</button>
                  </div>
                ) : (
                  <button className='btn btn-primary btn-sm' onClick={handleAddToCartClick}>Add to Cart</button>
                )
              ) : (
                //<button className='btn btn-primary btn-sm' onClick={() => alert('Please sign in to perform this action.')}>Add to Cart</button>
                <button className='btn btn-primary btn-sm' onClick={() => handleLoginClick()}>Add to Cart</button>
              )}
            </div>
            <div>
              <h4 className="price mb-0 fw-bolder"> <small>Rs: </small> {item.price} </h4>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tstCards {
    flex-wrap: wrap;
    text-align: left;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.05);
    color: #fff;
    border-radius: 4px;
    width: 300px;
    transition: 0.5s;
    overflow: hidden;
    position: relative;
    z-index: 0;
    .card_org_cont{
      margin-bottom: 15px;
      .testOrgImg{
        width: 30px;
      }
    }
    &:hover{
      border: 1px solid rgba(0,0,0,0.2);
      box-shadow: rgba(255, 255, 255, 0.02) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.05) 0px 50px 100px -20px, rgba(0, 0, 0, 0.06) 0px 30px 60px -30px;
    }
    .cardcomplogo{
      position: absolute;
      width: 25px;
      height: 25px;
      top: 10px;
      right: 10px;
      z-index: 20;
    }
  }
  .tcardbody{
    z-index: 2;
    padding: 1rem;
    overflow: hidden;
    position: relative;
  }
  .tcardfooter{
      z-index: 3;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(0,0,0,0.05)
  }
  .tstCards:hover {
    cursor: pointer;
    &:hover .tstCardBtn {
      color: ${({ theme }) => theme.colors.txt};
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .tstsCard {
    height: 300px;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    .tstCardBtn {
      background-image: linear-gradient(180deg, #005bab, #00aeef90);
      padding: 5px 15px;
      font-weight: 600;
      border-radius: 5px;
      font-size: 14px;
      background: white;
      position: relative;
      display: inline-block;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10rem;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: 0.5s;
        border-radius: 5px;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        z-index: 1;
        &:before {
          width: 100%;
        }
      }
    }
    .tstTitle {
      font-size: 1.1rem;
      font-weight: 900;
      line-height: 1.6rem;
      margin-bottom: 18px;
    }
    .tstInv {
      color: #b3b3b3;
      font-weight: 400;
      font-size: 0.8rem;
    }
    .tstPrice {
      color: #00203c;
      font-weight: 900;
      font-size: 1.2rem;
    }
  }

  .tstCardBtn {
    color: #005bab;
    font-size: 0.8rem;
    border: 1px solid rgba(0,0,0,0.1);
    justify-content: flex-end;
  }
  .txtcartBtn:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
  .para {color: #fff;}
`;
