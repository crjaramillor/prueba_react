// src/FashionApp.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import BatteryFull from "@mui/icons-material/BatteryFull";
import NetworkWifi from "@mui/icons-material/NetworkWifi";
import SignalCellularAlt from "@mui/icons-material/SignalCellularAlt";
import CollectionsOutlined from "@mui/icons-material/CollectionsOutlined";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import GraphicEq from "@mui/icons-material/GraphicEq";
import CameraAlt from "@mui/icons-material/CameraAlt";
import KeyboardVoice from "@mui/icons-material/KeyboardVoice";
import Logo from "../img/Logo.png";
import Profile from "../img/profile.png";
const Mira = () => {
  const options = [
    { option: "Can you rate my outfit?" },
    { option: "Help me pick an outfit for a date." },
    { option: "What type of style would look good on me?" },
    { option: "What's the latest fashion trend for chic style?" },
  ];
  const [selectedOptions, setSelectedOptions] = useState(Array(options.length).fill(false));

  const handleClick = (index) => {
    setSelectedOptions(prevSelectedOptions => {
      // Crear un nuevo array con todos los valores en false
      const newSelectedOptions = Array(options.length).fill(false);
      // Activar solo el índice clickeado
      newSelectedOptions[index] = true;
      return newSelectedOptions;
    });
  };
  
  
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f5f0ff",
        borderRadius: "10px",
      }}
    >
      <Box
        alt="Header"
        sx={{
          Width: "398px",
          Height: "52px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          alt="time"
          sx={{ color: "#000000", fontWeight: 700 }}
        >
          9:41
        </Typography>
        <Image
          alt="Logo"
          src={Logo}
          width={150}
          height={150}
          style={{ alignItems: "center", marginRight: "30px" }}
        ></Image>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            color: "black",
            gap: 1,
          }}
        >
          <SignalCellularAlt />
          <NetworkWifi />
          <BatteryFull />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Image
          alt="profile"
          src={Profile}
          width={150}
          height={150}
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleClick(index)}
            gap={5}
            sx={{
              height: "55px",
              backgroundColor:"#ffffff",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              borderColor: selectedOptions[index] ? "#6706E3" : "black",
              borderStyle: "solid",
              border: selectedOptions[index] ? "1px solid #6706E3": "none",
            }}
          >
            <Typography sx={{ color: selectedOptions[index] ? "#6706E3" : "#828282", textTransform: "capitalize" }}>
              {option.option}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Box sx={{ width: "90%" }}>
          <Box alt="Messages" sx={{ marginTop: "15px" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  alt="UserMessage"
                  sx={{
                    height: "55px",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px 12px 0px 12px",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                    borderColor: "black",
                    borderStyle: "solid",
                  }}
                >
                  <Typography sx={{ color: "#828282", textTransform: "capitalize" }}>
                    Can you rate my outfit?
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Box
                alt="IAMessage"
                sx={{
                  height: "55px",
                  backgroundColor: "#6706E3",
                  borderRadius: "12px 12px 12px 0px",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40%",
                  borderColor: "black",
                  borderStyle: "solid",
                }}
              >
                <Typography sx={{ color: "#FFFFFF",textTransform: "capitalize"  }}>
                  Sure, send me a photo!
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            mt={3}
            gap={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                width: "50%",
                height: "150px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <CollectionsOutlined
                size={240}
                sx={{ fontSize: "40px", color: "#828282" }}
              />
              <Typography variant="h6" sx={{ color: "#828282" }}>
                Gallery Upload
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                width: "50%",
                height: "150px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <CameraAltOutlined
                size={240}
                sx={{ fontSize: "40px", color: "#828282" }}
              />
              <Typography variant="h6" sx={{ color: "#828282" }}>
                Snap a Photo
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          mt={6}
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            variant="standard"
            placeholder="Type Message..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <GraphicEq sx={{ color: "#6706E3" }} />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            sx={{
              borderRadius: "32px",
              background: "#ffffff",
              width: "60%",
              height: "56px",
              alignItems: "flex-start",
              display: "flex",
              justifyContent: "center",
              marginLeft: "10px",
            }}
          />
          <Box>
            <Button
              sx={{
                background: "#6706E3",
                borderRadius: "46px",
                width: "45px",
                height: "56px",
              }}
            >
              <CameraAlt sx={{ color: "#ffffff" }} />
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                background: "#6706E3",
                borderRadius: "46px",
                width: "45px",
                height: "56px",
              }}
            >
              <KeyboardVoice sx={{ color: "#ffffff" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Mira;
