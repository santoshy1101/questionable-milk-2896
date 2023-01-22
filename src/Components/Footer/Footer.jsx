import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./footer.css"
function Footer() {
  return (
    <div>
      <div className="footerParent ">
        <div>
          <Heading>
            Shop Non-Stop on <br /> Meesho
          </Heading>
          <Text mb={"1%"}>
            Trusted by more than 1 Crore Indians <br></br> Cash on Delivery | Free
            Delivery
          </Text>
          <div className="flex  ">
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png"
              alt=""
            />
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-[1%] text-xl font-semibold leading-24">
          <p>Carrers</p>
          <p>Become a supplier</p>
          <p>Hall of Fame</p>
        </div>
        <div className="mt-[1%] font-semibold text-xl  decoration-gray-500 leading-24">
          <p>Legal And Policies</p>
          <p>Meesho Tech Blog</p>
          <p>Notice and Returns</p>
        </div>
        <div className="  leading-14">
          <Heading>Contact Us</Heading>
          <p style={{fontSize:"12px"}}>
            Fashnear Technologies Private Limited,
            <br />
            CIN: U74900KA2015PTC082263
            <br />
            06-105-B, 06-102, (138 Wu) Vaishnavi
            <br /> Signature, No. 78/9, Outer Ring Road,
            <br />
            Bellandur, Varthur Hobli,
            <br /> Bengaluru-560103, Karnataka, India
            <br />
            E-mail address: query@meesho.com
            <br />© 2015-2022 Meesho.com
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;