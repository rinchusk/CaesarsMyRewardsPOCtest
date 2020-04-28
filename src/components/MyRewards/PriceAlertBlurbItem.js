import React from 'react';
import {buildEnterpriseResponse, getProperty} from '../../utilities/Helper'
import {getImageUrl} from '../../Configs/Configs'

function viewMyPriceAlerts() {
    alert('TODO!');
  }
function viewAllMyPriceAlerts() {
    alert('TODO!');
  }
const PriceAlertBlurbItem = (props) => { 
    var rooms = [];
    var priceAlert = null;
    var lowestRate = null;
    var imageUrl = getImageUrl();
    var propertyName = '';     

    var enterprise = buildEnterpriseResponse(props.priceList.harrahs.roomtypes);
    for (var a = 0, len = props.enterpriseList.priceAlerts.length; a < len; a++) {      
        priceAlert = props.enterpriseList.priceAlerts[a];
        lowestRate = enterprise.find(t => t.propertyCode.toUpperCase() === priceAlert.propcode.toUpperCase());
        if(lowestRate){
            var property = getProperty(props.propertyList, lowestRate.propertyCode);
            if(property){
                imageUrl ="http://caesars.com" + property.thumbnail.url + "/hd/l/cover";
                propertyName = property.propertyName.toUpperCase();
            }
            if (lowestRate.rate < parseInt(priceAlert.threshold, 10)) {
                rooms.push({
                    propertyCode: lowestRate.propertyCode,
                    rateSet: lowestRate.rateSet,
                    rate: lowestRate.rate,
                    propertyName: propertyName,
                    roomImageUrl: imageUrl
                })
            }
        }
    }
    
    return (        
        <div className="listing-wrap">
            <h3>My Price Alert</h3>
            <div className="listing__img">
                <img className="thumb" src={rooms[0].roomImageUrl} alt="price alert image"/>
                <div className="img-info">
                    <h5>{rooms[0].propertyName}</h5>
                    <span className="place">Las Vegas</span>
                </div>
            </div>
            <div className="listing__details">
                <h2>Stay for as little as</h2>
                <span className="rate">${rooms[0].rate}</span>
                
            </div>
            <div className="btn-wrap-double">
                <button className="button" onClick={viewMyPriceAlerts}>View Offer</button>
                <button className="button button-outline" onClick={viewAllMyPriceAlerts}>View All</button>
            </div>
        </div>
   				// <h6>Based on availability</h6>
    );
}

export default PriceAlertBlurbItem;