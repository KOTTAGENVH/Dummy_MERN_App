import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const AddForms = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
       Name:"",
       Age:"",
      });

      //Handle change function
    const handleChange = (e) => {
        setInputs((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
        }));
      };
    
      //send request function
      const sendRequest = async () => {
      const res = await axios.post("http://localhost:4000/form/addForm", {
        Name: inputs.Name,
        Age: inputs.Age,
        }).catch((err) => console.log(err));
      const data = await res.data;
      };

       //handle submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
        .then((data) => console.log("d", data))
        .then(() => navigate("/"));
      };  

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <Box
           border={3}
           borderColor="linear-gradient(90deg, rgba(255,252,13,1) 60%, rgba(110,224,200,1) 100%, rgba(169,175,14,1) 100%)"
           borderRadius={10}
           boxShadow="10px 10px 20px #ccc"
           padding={3}
           margin={"auto"}
           marginTop={3}
           display="flex"
           flexDirection={"column"}
           width={"80%"}
        >
        <Typography
           fontWeight={"bold"}
           padding={3}
           color="black"
           variant="h2"
           textAlign={"center"}
        >
      
        </Typography>
        <br />
        <TextField
           id="outlined-search"
           label="Name"
           type="search"
           name="Name"
           onChange={handleChange}
           value={inputs.Name}
           margin="auto"
           variant="outlined"
        />
        <br />
        <TextField
           id="outlined-search"
           label="Age"
           type="search"
           name="Age"
           onChange={handleChange}
           value={inputs.Age}
           margin="auto"
           variant="outlined"
        />
       
        <Button
           sx={{ mt: 2, borderRadius: 4 }}
           variant="contained"
           color="warning"
           type="submit"
        >
           {" "}
           Submit
        </Button>
       </Box>
      </form>
        </div>
        
    );
    }
export default AddForms;