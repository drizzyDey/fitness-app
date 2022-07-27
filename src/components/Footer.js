import React from 'react';
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="80px" bgolor="#FFF3F4">
      <Stack
        gap="40px"
        alignItems="center"
        px="40px"
        pt="24px"
      >
        <Typography variant="h5" pb="40px" mt="20px" textAlign="center">
          Mady By DrizzyDey <br />
          <Typography>
            <a 
              href="https://www.flaticon.com/free-icons/gym" 
              className="footer-link"
            >
              Gym icons/images created by Freepik
            </a>
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;