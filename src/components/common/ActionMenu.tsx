import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { type ReactNode } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Action = {
  label: string;
  icon?: ReactNode;
  onClick: (row: any) => void;
};

type ActionMenuProps = {
  row: any;
  actions: Action[];
};

export const ActionMenu: React.FC<ActionMenuProps> = ({ row, actions }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {actions.map((action, index) => (
          <Tooltip title={action.label} key={index} placement="right">
            <MenuItem
              key={index}
              onClick={() => {
                action.onClick(row);
                handleClose();
              }}
            >
              {action.icon && (
                <span
                  style={{
                    marginRight: 8,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {action.icon}
                </span>
              )}
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </>
  );
};
