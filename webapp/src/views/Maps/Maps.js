import React, {useEffect, useState} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import firebase from "firebase";
import "firebase/auth";

export default function Maps(props) {

  const [data, setData] = useState([]);
  const availableCar = { available: true };

  const isAvailable = props.isAvailable;

  function apiGet() {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:8080/public/cars/available", requestOptions)
        .then(response => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });

  }

  useEffect(() =>{
    apiGet();
  }, []);

  const CustomSkinMap = withScriptjs(
      withGoogleMap(() => (
          <GoogleMap
              defaultZoom={13}
              defaultCenter={{ lat: 51.06030966745902, lng: 3.7099092338747224 }}
              defaultOptions={{
                scrollwheel: true, //false
                zoomControl: true,
                styles: [
                  {
                    featureType: "water",
                    stylers: [
                      { saturation: 43 },
                      { lightness: -11 },
                      { hue: "#0088ff" }
                    ]
                  },
                  {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [
                      { hue: "#ff0000" },
                      { saturation: -100 },
                      { lightness: 99 }
                    ]
                  },
                  {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#808080" }, { lightness: 54 }]
                  },
                  {
                    featureType: "landscape.man_made",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ece2d9" }]
                  },
                  {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ccdca1" }]
                  },
                  {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#767676" }]
                  },
                  {
                    featureType: "road",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#ffffff" }]
                  },
                  { featureType: "poi", stylers: [{ visibility: "off" }] },
                  {
                    featureType: "landscape.natural",
                    elementType: "geometry.fill",
                    stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
                  },
                  { featureType: "poi.park", stylers: [{ visibility: "on" }] },
                  {
                    featureType: "poi.sports_complex",
                    stylers: [{ visibility: "on" }]
                  },
                  { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
                  {
                    featureType: "poi.business",
                    stylers: [{ visibility: "simplified" }]
                  }
                ]
              }}
          >

            {data.map(item => (

                <Marker key = {item.id}
                        position = {{lat: item.latitude , lng: item.longitude}}
                ></Marker>


            ))}

          </GoogleMap>
      ))
  );

  return (
    <CustomSkinMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKKl-FYPh4vucpMF071kQBBAdvEmVacIE"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
