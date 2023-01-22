import { Button, Heading, Box } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/supplier.png";
import pic3 from "../../assets/buisnesswithZero.png";
import Footer from "../../Components/Footer";
import "./Home.css";
import { useSelector } from "react-redux";
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
  const [sortingHover, setsortingHover] = React.useState(false);
  return (
    <div>
      <div className="flex justify-center mt-7 photoimg1">
        <img className="w-[66%] " src={pic1} alt="" />
      </div>
      <div className="flex justify-center align-middle mx-auto w-[70%] flexdiv">
        <div className="section123">
          <div className="flex justify-center mx-auto photodiv">
            <img
              className="photoimg"
              src="https://images.meesho.com/images/marketing/1649760442043.webp"
              alt=""
            />
            <img
              className="photoimg"
              src="https://images.meesho.com/images/marketing/1649760423313.webp"
              alt=""
            />
            <img
              className="photoimg"
              src="https://images.meesho.com/images/marketing/1649759799809.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle mx-auto w-[70%] flexdiv">
        <div className="section245">
          <div className="flex justify-center mx-auto">
            <div className="mt-[22%] mr-3 seconddiv">
              <div className="px-16 py-3 m-auto text-2xl font-semibold rounded-full bg-slate-200">
                View All
              </div>
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

      <div className="flex justify-center mt-7 photoimg3">
        <img className="w-[63%]" src={pic3} alt="" />
      </div>
      <div className="flex justify-center mt-7 photoimg3">
        <img className="w-[66%]" src={pic2} alt="" />
      </div>
      <div className="mx-auto mt-16">
        <Heading>Products For You</Heading>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div className="leading-14">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <div
                    onMouseLeave={() => setsortingHover(false)}
                    onClick={() => setsortingHover(!sortingHover)}
                    className={`  hover:bg-slate-400 cursor-pointer flex flex-row px-4 py-1 border gap-x-2 ${
                      sortingHover && "group"
                    } `}
                  >
                    <div>Sort By</div>
                    <div className="duration-1000 group-hover:-rotate-180">
                      <AccordionIcon />
                    </div>
                  </div>
                </h2>
                <div pb={4}>
                  <div className="hover:bg-pink-200">Revelance</div>
                  <div className="hover:bg-pink-200">Price: Low to High</div>
                  <div className="hover:bg-pink-200">New Arrivals</div>
                  <div className="hover:bg-pink-200">Ratings</div>
                </div>
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
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
