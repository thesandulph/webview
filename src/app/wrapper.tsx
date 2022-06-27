import React, {FC, ReactNode} from 'react';
import {Box, Typography, Divider} from '@mui/material';
import {styled} from '@mui/system';
import logo from '../assets/logo.svg';
import {styles} from './wrapper.styles';

const StyledImage = styled('img')({});

interface Props {
    children: ReactNode;
}

const Wrapper: FC<Props> = ({children}) => {
    return (
        <Box sx={styles.root}>
            <Box sx={styles.header} component="header">
                <StyledImage src={logo} sx={styles.logo} alt="HiDr Logo"/>
            </Box>
            <Box sx={styles.content}>
                {children}
            </Box>
            <Divider />
            <Box sx={styles.footer} component="footer">
                <Typography sx={styles.copyRight}>
                    Copyright © 2022 AsanPardakht, Inc.
                </Typography>
            </Box>
        </Box>
    );
};

export default Wrapper;
