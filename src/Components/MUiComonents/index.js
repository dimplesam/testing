import React, { useState } from "react";
import {
  Button,
  Drawer,
  Dialog,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

const MUiComponents = () => {
  const [open, setOpen] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <div className="flex h-screen justify-center items-center">
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Button variant="contained" onClick={() => setIsOpenDialog(true)}>
        Open Dialog
      </Button>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem>Nav 1</ListItem>
          <ListItemButton>Nav 1</ListItemButton>
          <ListItemButton>Nav 1</ListItemButton>
          <ListItemButton>Nav 1</ListItemButton>
          <ListItemButton>Nav 1</ListItemButton>
        </List>
      </Drawer>

      <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)}>
        <div className="h-96 w-96">ishdfiehfihj</div>
      </Dialog>
    </div>
  );
};

export default MUiComponents;
