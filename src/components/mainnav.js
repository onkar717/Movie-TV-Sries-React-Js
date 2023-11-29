import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useEffect , useState } from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  bottom: 0,
  backgroundColor: "#2d313a",
  zIndex: 100,
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    if (value === 0) { navigate('/')}
    else if (value === 1) { navigate('/movie')}
    else if (value === 2) { navigate('/series')}
    else if (value === 3) { navigate('/serach')}
  },[value , navigate])

  return (
    <Box sx={{ width: 500 }}>
      <StyledBottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="TV Series"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<LocationOnIcon />}
        />
      </StyledBottomNavigation>
    </Box>
  );
}
