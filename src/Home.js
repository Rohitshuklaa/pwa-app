import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import {FaMapMarkerAlt} from "react-icons/fa";
const AnyReactComponent = ({ text }) => <div><h1 style={{color : 'blue'}} > <FaMapMarkerAlt/></h1> <p style={{marginTop:-10 , marginLeft:8 ,fontWeight:900, fontSize:20, color :"red"}}>{text}</p></div>;

export default function Home() {
    const [latitude, setLatitude] = useState(10)
    const [longitude, setLongitude] = useState(75)
    const defaultProps = {
        center: {
            lat: 22.62584534,   
            lng: 75.91502627
        },
        zoom: 11
    };
    let data =[
        {
            name : "ME",
            lat  :  latitude,
            lng  :  longitude
        },
        {
            name : "user1",
            lat  :  22.64584534,
            lng  :  75.92345885
        },
        {
            name : "user2",
            lat  :  22.84584534,
            lng  :  75.80345885
        },

    ]
    

    useEffect(() => {
        findMyCoordinates();
    }, [])

    function findMyCoordinates() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // const bdcAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)

            }, (err) => {
                alert(err.message)
            })
        } else {
            alert("geolocation is not supported by your browser")
        }
    }

    // function getAPI(bdcAPI){
    // http.open("GET", bdcAPI)
    // http.send()
    // http.onreadystatechange = function() {
    //     if(this.readyState === 4 && this.status ===200 ){
    //         result.innerHTML = this.responseText
    //         const results = JSON.parse(this.responseText)
    //         console.log(results.locality)
    //     }
    // } 

    // }
    return (
        <div>
            Home component
            <p>latitude: {latitude}</p>
            <p>longitude: {longitude}</p>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={10}
                >
               
               {data.map((e)=>{
                {console.log("map")}
                return(

                
                             <AnyReactComponent
                             lat={e.lat}
                             lng={e.lng}
                             text={e.name}
                         />
                    
                    )
                })}
                    </GoogleMapReact>
            </div>
        </div>
    )
}
