import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material"; 

import HorizontalScrollBar from "./HorizontalScrollBar" 
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ( { setExercises, bodyPart, setBodyPart  } ) => {
  const [search, setSearch] = useState(""); 
  const [bodyParts, setBodyParts] = useState([]);

  // useEffect to display HorizontallScrollBar without copying the data myself
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(["all", ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search) { 
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exercisesData.filter((exercise) => ( 
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      ));

      setSearch(""); 
      setExercises(searchedExercises);
    } 
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} mb="49px" textAlign="center" sx={{
        fontSize: { lg: "44px", xs: "30px" }
      }} >
        Search for<br />
        Awesome Exercises
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px"
          }}
          height="76px"
          value={search} 
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => { 
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Button className="search-btn" onClick={handleSearch}
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px"
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{
        position: "realtive",
        width: "100%",
        p: "20px"
      }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts /> 
      </Box>
    </Stack>
  );
};

export default SearchExercises;