import { VFC, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { ChangeEvent } from "react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Stack } from "@chakra-ui/layout";
import styles from "./MapAndPosts.module.css";

export const MapAndPosts: VFC = () => {
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const handleChangePlace = (e: ChangeEvent<HTMLInputElement>) => {
    setPlace(e.target.value);
  };

  const handleSearch = () => {
    // if (place !== "") {
    //   const geocoder = new google.maps.Geocoder();
    //   geocoder.geocode(
    //     {
    //       address: place,
    //       region: "jp",
    //     },
    //     (results, status) => {
    //       if (status === "OK") {
    //         const geometryLoc = results![0].geometry.location;
    //         setLocation({
    //           latitude: geometryLoc.lat(),
    //           longitude: geometryLoc.lng(),
    //         });
    //       }
    //     }
    //   );
    // }
  };

  // const containerStyle = {
  //   width: "400px",
  //   height: "400px",
  // };

  // const center = {
  //   lat: 35.702259,
  //   lng: 139.774473,
  // };

  return (
    <>
      <Container maxW="10xl">
        <Stack direction={{ lg: "row", base: "column" }} spacing="8">
          <Stack flex="1" spacing="5">
            <Stack
              direction="row"
              spacing="4"
              className={styles.Map}
              zIndex="1"
            >
              <Input
                placeholder="Enter the address"
                type="text"
                value={place}
                onChange={handleChangePlace}
              />
              <Button
                bg="blue.300"
                color="white"
                _hover={{ bg: "blue.400" }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Stack>
            <Flex direction="column">
              {[...Array(10)]
                .map((_, i) => i)
                .map((i) => (
                  <Box
                    key={i}
                    w="100%"
                    h="400px"
                    borderTop="solid 0.1px"
                    borderColor="gray.200"
                    p="5"
                  ></Box>
                ))}
            </Flex>
          </Stack>
          <Flex flex="1" direction="column">
            <Box
              className={styles.Map}
              h="1220px"
              w="100%"
              bg="gray.300"
              display={{ lg: "flex", base: "none" }}
            >
              map
            </Box>
            <Box h="100%"></Box>
          </Flex>
        </Stack>
      </Container>

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
