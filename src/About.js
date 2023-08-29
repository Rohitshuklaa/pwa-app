import React from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function About() {

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyD8epKDVL0shjL0K7nIoDrbZ_cuLKv8-MY" })
    if (!isLoaded) return <div>Loading...</div>;

    return <Map />;
}

function Map() {
    return (
        <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} style={{ width: "100%", height: "100%" }}><Marker position={{lat:44,lng :-80 }}/></GoogleMap>);
}
