import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function RestaurantInfo({ address, phone, email, website, position }) {

  return (
    <div className="restaurant-info-wrapper">

    <h3 className="title3" itemprop="headline">
      <span className="sudo-bottom sudo-bg-red">Book</span> This Restaurant Table
    </h3>

    <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
      <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
       <Marker  position={position} >

       </Marker>
      </MapContainer>
    </div>

      <ul className="restaurant-info-list">
        <li>
          <i className="fa fa-map-marker red-clr"></i>
          <strong>Address :</strong>
          <span>{address}</span>
        </li>
        <li>
          <i className="fa fa-phone red-clr"></i>
          <strong>Call us & Hire us</strong>
          <span>{phone}</span>
        </li>
        <li>
          <i className="fa fa-envelope-o red-clr"></i>
          <strong>Have any questions?</strong>
          <span>{email}</span>
        </li>
        <li>
          <i className="fa fa-fax red-clr"></i>
          <strong>Website</strong>
          <span>{website}</span>
        </li>
      </ul>
    </div>
  );
}

export default RestaurantInfo;
