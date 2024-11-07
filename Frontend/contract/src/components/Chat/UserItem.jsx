import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import React from "react";

export default function UserItem({ id, name, email, onClick }) {
  return (
    <ListItem
      button
      onClick={onClick}
      sx={{
        borderRadius: '8px',
        padding: '12px 16px',
        marginBottom: '8px',
        backgroundColor: '#e8f5e9', // Light green background
        '&:hover': {
          backgroundColor: '#66bb6a', // Darker green on hover
        },
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#43a047' }}> {/* Green Avatar color */}
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={email}
        primaryTypographyProps={{
          fontWeight: 'bold',
          color: '#2e7d32', // Dark green for primary text
        }}
        secondaryTypographyProps={{
          color: '#4caf50', // Lighter green for secondary text
        }}
      />
    </ListItem>
  );
}
