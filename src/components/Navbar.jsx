import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import { DensitySmall, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
 
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display:"none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
    // if breackpoint is higher then 600px or (higher then xs 599px then display flex otherwise display none)
  }
}));

const UserBox = styled(Box) (({theme})=> ({
  display:"flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
    // if breackpoint is higher then 600px or (higher then xs 599px then display flex otherwise display none)
  }
}))

const Navbar = () => {
const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Pranav
        </Typography>
        <DensitySmall sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search.." sx={{color:"black"}}/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://staticg.sportskeeda.com/editor/2022/12/7503f-16712689878228-1920.jpg"
            onClick={() =>setOpen(!open)}
          
          />
        </Icons>
        <UserBox  onClick={() =>setOpen(!open)}>
        <Avatar
            sx={{ width: 30, height: 30, }}
            src="https://staticg.sportskeeda.com/editor/2022/12/7503f-16712689878228-1920.jpg"
            
          />
          <Typography variant="span">Pranav</Typography>
        </UserBox>
      </StyledToolbar>
      {open && <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose = {() =>setOpen (!open)}
      
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>

      </Menu>}
    </AppBar>
  );
};

export default Navbar;
