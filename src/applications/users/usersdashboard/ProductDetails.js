import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    const ProductDetails = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
            setProduct(d.data)
            console.log(product)
        })
    }

    useEffect(() => {
        ProductDetails();
    },[])




    return (
        <>
            <div className="container py-5">
                <div className="row">


                    <div className="col-md-5">
                        <div className="card shadow-sm p-3 ">
                            <img src={product.thumbnail}
                                className="img-fluid rounded" alt="Projector" />
                            <div className="d-flex mt-3 gap-2 w-50 h-50 overflow-x-auto">
                                <img src={product.images?.[0]} className="img-thumbnail" alt="" />
                                <img src={product.images?.[1]} className="img-thumbnail" alt="" />
                                <img src={product.images?.[2]} className="img-thumbnail" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="col-md-7">
                        <h4 className="fw-bold">{product.title}</h4>
                        <p className="text-muted">
                            {product.description}
                        </p>


                        <div className="mb-2">
                            <span className="badge bg-success">{product.rating}  ★</span>
                           
                        </div>


                        <h3 className="text-danger">{product.price}
                            <small className="text-muted text-decoration-line-through">₹{product.price * 2}</small>
                            <span className="text-success fs-6">50% off</span>
                        </h3>
                        <p className="text-danger fw-semibold">
                            Stock: {product.stock > 10 ? product.stock : "Only Few Left"}
                        </p>
                        <p className="text-muted">Or Pay ₹5,890 + 100</p>


                        <div className="mb-3">
                            <h6>Available offers</h6>
                            <ul className="list-unstyled">
                                <li>💳 5% cashback on Flipkart Axis Bank Credit Card</li>
                                <li>💳 5% cashback on SBI Credit Card</li>
                                <li>💳 5% cashback on Axis Bank Debit Card</li>
                            </ul>
                        </div>


                        <div className="d-flex gap-3">
                            <button className="btn btn-warning btn-lg fw-bold">🛒 Add to Cart</button>
                            <button className="btn btn-danger btn-lg fw-bold">⚡ Buy Now</button>
                        </div>


                        <div className="mt-4">
                            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductDetails;
