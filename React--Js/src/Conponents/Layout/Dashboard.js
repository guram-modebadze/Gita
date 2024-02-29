import React, { useState } from "react";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Index from "../UI/header/Card";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box display={"flex"} gap={"30px"} flexWrap={"wrap"}>
     
     {
        data?.map((item, index)=>{
         return   <Index  key={index} item={item} />
        })


     }



      <Index/>
    </Box>
  );
};

export default Dashboard;
