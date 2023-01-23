import React from 'react';

import './index.scss';

const OPTIONS = {
  1: {
    price: '£',
    address: '1 The Parade, Epsom, Surrey, KT18 5BY',
    name: 'Premier Inn Epsom Town Centre Hotel',
    link: 'https://www.premierinn.com/gb/en/hotels/england/surrey/epsom/epsom-town-centre.html',
  },
  2: {
    price: '£',
    address: '2-4 St Margaret Drive, Off Dorking Road, Surrey, KT18 7LB',
    name: 'Premier Inn Epsom Centre Hotel',
    link: 'https://www.premierinn.com/gb/en/hotels/england/surrey/epsom/epsom-central.html?INNID=EPSHAY&ARRdd=12&ARRmm=01&ARRyyyy=2023&NIGHTS=1&ROOMS=1&ADULT1=2&CHILD1=0&COT1=0&INTTYP1=DB&SID=4&ISH=true&BRAND=PI&CID=GHF3_GB_GoogleSearch_desktop_default+EPSHAY'
  },
  3: { 
    price: '£',
    address: 'Langley Vale Road, Surrey, KT18 5LG',
    name: 'Holiday Inn Express London - Epsom Downs',
    link: 'https://www.ihg.com/holidayinnexpress/hotels/gb/en/surrey/lonep/hoteldetail',
  },
  4: {
    price: '£££',
    address: 'Old London Road Mickleham Nr Dorking, Surrey, RH5 6DU',
    name: 'The Running Horses, Mickleham',
    link: 'https://via.eviivo.com/en-en/Google/therunninghorsesrh5du?startdate=2023-01-12&enddate=2023-01-13&adults1=2&children1=0&currency=GBP&fbl=true',
  },
}

const Accommodation = () => {
  return (
    <div className="accommodation">
      {Object.values(OPTIONS).map(({ link, name, price, address }) => {
        return (
          <div className="accommodation-option">
            <div className="accommodation-option-price">{price}</div>
            <a href={link} target="_blank">{name}</a>
            <div>{address}</div>
          </div>
        );
      })}
    </div>
  )
};

export default Accommodation;
