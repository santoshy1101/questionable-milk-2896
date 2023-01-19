import { Button, Heading, Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/supplier.png";
import pic3 from "../assets/buisnesswithZero.png";
import Footer from "../Components/Footer";
import "./Home.css";
const categoery = [
  {
    name: "Men top wear",
  },
  {
    name: "Women Top wear",
  },
  {
    name: "Kids Wear",
  },
];

const price = [
  {
    name: "Below 500",
  },
  {
    name: "500-1000",
  },
  {
    name: "1000-2000",
  },
  {
    name: "2000-3000",
  },
  {
    name: "3000-4000",
  },
];
const Home = () => {
  return (
    <div>
      <div className="flex mt-7 justify-center">
        <img className="w-[66%]" src={pic1} alt="" />
      </div>
      <div className="flex justify-center align-middle mx-auto w-[70%] ">
        <div className="section123">
          <div className="flex justify-center mx-auto">
            <img
              style={{
                objectFit: "contain",
                height: "320px",
                padding: "1rem",
                marginTop: "6rem",
              }}
              src="https://images.meesho.com/images/marketing/1649760442043.webp"
              alt=""
            />
            <img
              style={{
                objectFit: "contain",
                height: "280px",
                padding: "1rem",
                marginTop: "8rem",
              }}
              src="https://images.meesho.com/images/marketing/1649760423313.webp"
              alt=""
            />
            <img
              style={{
                objectFit: "contain",
                height: "280px",
                padding: "1rem",
                marginTop: "8rem",
              }}
              src="https://images.meesho.com/images/marketing/1649759799809.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle mx-auto w-[70%]">
        <div className="section245">
          <div className="flex justify-center mx-auto">
            <div className="mt-[22%] mr-3">
              <Button w={"200px"} m={"auto"} colorScheme={"blackAlpha"}>
                View All
              </Button>
            </div>
            <div>
              <img
                style={{
                  objectFit: "contain",
                  height: "280px",
                  padding: "1rem",
                  marginLeft: "3%",
                  marginTop: "8rem",
                }}
                src="https://images.meesho.com/images/marketing/1649760808952.webp"
                alt=""
              />
              <img
                src="https://images.meesho.com/images/marketing/1664364866805.webp"
                alt=""
              />
            </div>
            <div>
              <img
                style={{
                  objectFit: "contain",
                  height: "280px",
                  padding: "1rem",
                  marginTop: "8rem",
                }}
                src="https://images.meesho.com/images/marketing/1649760703179.webp"
                alt=""
              />
              <img
                src="https://images.meesho.com/images/marketing/1664364917657.webp"
                alt=""
              />
            </div>
            <div>
              <img
                style={{
                  objectFit: "contain",
                  height: "280px",
                  padding: "1rem",
                  marginTop: "8rem",
                }}
                src="https://images.meesho.com/images/marketing/1649760786763.webp"
                alt=""
              />
              <img
                src="https://images.meesho.com/images/marketing/1664364898513.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>


      <div className="flex mt-7 justify-center">
        <img className="w-[63%]" src={pic3} alt="" />
      </div>
      <div className="flex mt-7 justify-center">
        <img className="w-[66%]" src={pic2} alt="" />
      </div>
      <div className="mx-auto">
        <Heading>Products For You</Heading>
      </div>
      <div style={{display:"flex"}}>
        <div>
      <div className="leading-14">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" textAlign="left">
                  Sort By
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="hover:bg-pink-200">Revelance</div>
              <div className="hover:bg-pink-200">Price: Low to High</div>
              <div className="hover:bg-pink-200">New Arrivals</div>
              <div className="hover:bg-pink-200">Ratings</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="leading-14">
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" textAlign="left">
                  Category
                </Box>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="hover:bg-pink-200">Men Top Wear</div>
              <div className="hover:bg-pink-200">Women Wear</div>
              <div className="hover:bg-pink-200">New Arrivals</div>
              <div className="hover:bg-pink-200">Kids Wear</div>
            </AccordionPanel>
          </AccordionItem>
          </Accordion>
      </div>
      <div className="leading-14">
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" textAlign="left">
                  Price
                </Box>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="hover:bg-pink-200">Under 300</div>
              <div className="hover:bg-pink-200">under 500</div>
              <div className="hover:bg-pink-200">Under 1000</div>
              <div className="hover:bg-pink-200">Under 5000</div>
            </AccordionPanel>
          </AccordionItem>
          </Accordion>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;