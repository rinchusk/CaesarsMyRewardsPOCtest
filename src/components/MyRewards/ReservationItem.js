import React from 'react';
import {getProperty, getMoment} from '../../utilities/Helper'
import {getImageUrl} from '../../constants/configs'

  /**
   * 
   * @param {*} props 
   */
const ReservationItem = (props) => { 
    const {propertyList, reservationList} = props;

    let imageUrl = getImageUrl();
    let propertyName = '';
    let reservations = reservationList.reservations[0];
    if(propertyList && reservations && reservations && reservations.propertyCode){
        let property = getProperty(props.propertyList, reservations.propertyCode);
        if(property){
            imageUrl =`http://caesars.com${property.thumbnail.url}/hd/m/cover`;
            propertyName = property.propertyName.toUpperCase();
        }
    }
    
    return (        
        <div className="listing-wrap">
            <h3>My Reservations</h3>
            <div className="listing__img">
                <img className="thumb" src={imageUrl} alt="Caesars"/>
                <div className="img-info">
                    <h5>{propertyName}</h5>
                    <span className="place">&nbsp;</span>
                </div>
            </div>
            <div className="listing__details">
                <h2>Date:- &nbsp;&nbsp;
                    {getMoment(reservations.checkInDate).format("MM/DD/YYYY")} 
                    &nbsp;- &nbsp;{getMoment(reservations.checkOutDate).format("MM/DD/YYYY")}</h2>
                <span className="rate">&nbsp;</span>
            </div>
            <div className="btn-wrap-double">
                <button className="button">View All</button>
            </div>
        </div>
    );
}

export default (ReservationItem);
