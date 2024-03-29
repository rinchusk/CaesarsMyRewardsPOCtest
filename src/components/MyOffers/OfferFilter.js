import React from "react";
import SelectList from "../Common/SelectList";
import Textbox from "../Common/Textbox";
import MultiSelectList from "../Common/MultiSelectList";
import Autocomplete from "../Common/Autocomplete";
import SearchCalendar  from "../Common/SearchCalendar";
import {getStructuredMarketsPropertiesList} from "../../utilities/Helper";
import {getOfferFilterTypes, getOfferSortTypes} from "../../constants/configs";


const OfferFilter = (props) => {
    const offerTypes = getOfferFilterTypes();
    const offerSortTypes = getOfferSortTypes();

    const {defaultSort,defaultFilter, markets} = props;
    let defaultDateSelection="date", defaultDateRange = "", defaultLocation = "", defaultType = "", defaultOfferCode = "";
    if(defaultFilter && defaultFilter.length) {
        defaultFilter.map((filter) => {
            const {filterType, filterValue} = filter;
            if(filterType === "date" || filterType === "month") {
                defaultDateSelection = filterType;
                defaultDateRange = {
                    "startDate" : filterValue.startDate,
                    "endDate": filterValue.endDate
                };
            }
            if(filterType === "location") {
                defaultLocation = filterValue;
            }
            if(filterType === "type") {
                defaultType = filterValue;
            }
            if(filterType === "code") {
                defaultOfferCode = filterValue;
            }
        });
    }

    const marketPropertyListData = getStructuredMarketsPropertiesList(markets);

    return (
        <div>
            <div className="title">
                <h1>My Offers</h1>
                <div className="sort">
                    <SelectList 
                        dataList={offerSortTypes} 
                        defaultValue={defaultSort} 
                        onClick={props.onSortingChange} />
                </div>
            </div>
            <div className="form--search">
                <ul className="row">
                    <li className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <Autocomplete 
                            dataList={marketPropertyListData}
                            elementId="market-property" 
                            title="Where do you want to go?" 
                            defaultValue={defaultLocation} 
                            onChange={props.onLocationChange} />
                    </li>
                    <li className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <SearchCalendar 
                            calendarId="offer-calendar" 
                            defaultType={defaultDateSelection} 
                            defaultValue={defaultDateRange} 
                            onChange={props.onDateRangeChange} />
                    </li>
                    <li className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <MultiSelectList 
                            dataList={offerTypes} 
                            title="Offer Types" 
                            selectId="offer-type" 
                            defaultValue = {defaultType} 
                            onChange={props.onOfferTypeChange} />
                    </li>
                    <li className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <Textbox 
                            textboxId = "offerCodeSearch"
                            title="Offer Code" 
                            defaultValue = {defaultOfferCode}
                            onChange={props.onOfferCodeChange} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OfferFilter;
