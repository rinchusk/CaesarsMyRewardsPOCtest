import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {getProperty} from '../../utilities/Helper';

const mapStateToProps = (state) => ({
    properties: state.common.properties
});

const OfferItem = (props) => {
    const { offer, properties } = props;

    let offerImageUrl = "images/list-img.jpg";
    const propertyFeed = getProperty(properties, offer.propertyList[0]);
    if(propertyFeed && propertyFeed.images && propertyFeed.images.length >= 2) {
        offerImageUrl ="http://caesars.com" + propertyFeed.images[1].url;
    }

    return (
        <li className="col-md-3 col-sm-6">
            <div className="listing-wrap">
                <div className="listing__img">
                    <img className="thumb" src={offerImageUrl} alt="Caesars"/>
                    <div className="fav">
                        <img src="images/favorate-icon.png" alt="Caesars"/>
                    </div>
                    <div className="img-info">
                        <h5>{offer.title}</h5>
                        <span className="offer-code">Offer Code : <strong>{offer.id}</strong></span>
                    </div>
                </div>
                <div className="listing__details">
                    <h2>{offer.type} - {offer.pref}</h2>
                    <span className="date">Valid : {new Date(offer.start).toLocaleDateString()} - {new Date(offer.end).toLocaleDateString()}</span>
                    <button className="button">
                        <Link
                            to={`/my-offer-details/${offer.id}`}>
                            Details
                        </Link>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default connect(mapStateToProps, null)(OfferItem);