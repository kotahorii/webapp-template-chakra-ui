import { VFC, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { ChangeEvent } from "react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";

export const MapAndPosts: VFC = () => {
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const handleChangePlace = (e: ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value);
  };

  const handleSearch = () => {
    if (place !== "") {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        {
          address: place,
          region: "jp",
        },
        (results, status) => {
          if (status === "OK") {
            const geometryLoc = results![0].geometry.location;
            setLocation({
              latitude: geometryLoc.lat(),
              longitude: geometryLoc.lng(),
            });
          }
        }
      );
    }
  };

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 35.702259,
    lng: 139.774473,
  };
  return (
    <>
      <Input type="text" value={place} onChange={handleChangePlace} />
      <Button onClick={handleSearch}>Search</Button>
      {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API!}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        ></GoogleMap>
      </LoadScript> */}
    </>
  );
};
