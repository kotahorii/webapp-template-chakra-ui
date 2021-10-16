import { VFC, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { ChangeEvent } from "react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import styles from "./MapAndPosts.module.css";
import { Image } from "@chakra-ui/image";

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
            <Flex direction="column">
              <Stack
                direction="row"
                spacing="4"
                className={styles.SearchBar}
                py="10px"
                bg="gray.50"
              >
                <Input
                  bg="gray.100"
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
              {[...Array(10)]
                .map((_, i) => i)
                .map((i) => (
                  <Stack
                    direction={{ md: "row", base: "column" }}
                    key={i}
                    w="100%"
                    h={{ lg: "250px", base: "560px" }}
                    borderTop="solid 0.1px"
                    borderColor="gray.200"
                    p="5"
                  >
                    <Image
                      w="100%"
                      h="100%"
                      fit="cover"
                      align="center"
                      borderRadius="10"
                      alt="posts"
                      src="https://yuu01.jp/wp-content/uploads/2021/03/sOSXyDGZ_400x400.jpg"
                    />
                  </Stack>
                ))}
            </Flex>
          </Stack>
          <Flex flex="2" direction="column">
            <Box
              alignItems="center"
              justifyContent="center"
              className={styles.Map}
              h="1220px"
              w="100%"
              bg="gray.300"
              display={{ lg: "flex", base: "none" }}
            >
              <Heading color="white">Map</Heading>
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
