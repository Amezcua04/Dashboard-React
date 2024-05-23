import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { tokens } from '../theme/theme';
import React from 'react'

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Box>
        <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
        >{title}</Typography>
        <Typography
            variant="h5"
            color={colors.greenAccent[400]}
        >{subtitle}</Typography>
    </Box>
  )
}

export default Header;