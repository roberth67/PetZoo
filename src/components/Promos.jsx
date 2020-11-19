import React, {Fragment} from 'react';
import productimg from '../assets/img/logo192.png';

const Promos = () => {
    return ( 
        <Fragment>
            <h1>Best Products</h1>
        <div className="row text-center mb-5">
            
            <div className="col-sm-4 col-12 ">
                <div className="card" >
                    <img src={productimg} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Product 1</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 col-12 ">
                <div className="card">
                    <img src={productimg} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Product 2</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 col-12">
                <div className="card">
                    <img src={productimg} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Product 3</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
     );
}
 
export default Promos;