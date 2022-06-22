import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import campaign from '../../assets/images/campaign.png'
import tick from '../../assets/images/tick.png'

export const Hero = () => {
    return (
        <Box
            sx={{
                boxSizing: "border-box", padding: {xs:"1rem",md:"2rem 5rem"}, bgcolor: "#EFF0F4"
            }}
        >
            <Box
                sx={{
                    width: "100%", minHeight: "300px", boxSizing: "border-box", borderRadius: "50px", padding: {xs:"1.5rem",md:"2.5rem 3.5rem"},
                    background: "linear-gradient(104.67deg, #3FABB3 39.63%, #18878E 56.42%, #390563 79.3%)"
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ color: "#ffffff" }}>
                            <Typography sx={{ fontSize: "2.5rem", fontWeight: 700, fontFamily: "Jura", lineHeight: "3rem" }}>A Layer 2 crowdfunding</Typography>
                            <Typography sx={{ fontSize: "2.5rem", fontWeight: 700, fontFamily: "Jura", lineHeight: "3rem" }}>platform created by </Typography>
                            <Typography sx={{ fontSize: "2.5rem", fontWeight: 700, fontFamily: "Jura", lineHeight: "3rem" }}>you, for everyone.</Typography>
                            <Button
                                variant='contained'
                                sx={{
                                    bgcolor: "#000000", color: "#ffffff", marginTop: "2rem", borderRadius: ".5rem", textTransform: "none",
                                    fontFamily: "Jura", fontWeight: "600", fontSize: "1.125rem"
                                }}
                            >
                                Create Campaign
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>

                    </Grid>
                </Grid>

            </Box>

            <Box
                sx={{
                    width: "100%", boxSizing: "border-box", paddingY: "5rem"
                }}
            >
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "1.5rem", flexWrap:"wrap"
                    }}
                >
                    <Typography sx={{ fontFamily: "Jura", fontWeight: 700, fontSize: "1.725rem" }}>
                        Open Campaigns
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{
                            bgcolor: "#52DCF0", color: "#000000", textTransform: "none", borderRadius: "100px",
                            fontFamily: "Jura", fontWeight: 700, fontSize: "1.25rem"
                        }}
                    >
                        See All
                    </Button>
                </Box>

                <Grid container spacing="2rem">
                    {[1, 2, 3].map(ele =>
                        <Grid item xs={12} md={6} xl={4} key={ele}>
                            <Box
                                sx={{
                                    bgcolor: "#ffffff", boxSizing: "border-box", padding: "3.75rem 1.25rem 1.25rem 1.25rem"
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex", alignItems: "center", justifyContent: "space-between",
                                    }}
                                >
                                    <Typography sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: "1.25rem" }}>
                                        O0xfbrt656..
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex", alignItems: "center"
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                padding: ".25rem .5rem", bgcolor: "#DFEEFC", borderRadius: ".25rem", color: '#006ED4', marginRight: ".75rem"
                                            }}
                                        >
                                            B2C
                                        </Typography>
                                        <Typography
                                            sx={{
                                                padding: ".25rem .5rem", bgcolor: "#DFEEFC", borderRadius: ".25rem", color: '#006ED4'
                                            }}
                                        >
                                            CPG
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{ position: "relative", paddingY: "1.25rem" }}
                                >
                                    <Box
                                        sx={{ objectFit: "cover" }}
                                    >
                                        <img src={campaign} alt="campaign" width={"100%"} />
                                    </Box>
                                    <Box sx={{ position: "absolute", top: "2.25rem", right: '1rem' }}>
                                        <img src={tick} alt="tick" />
                                    </Box>
                                </Box>
                                <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "Montserrat", color: "#006ED4", maxWidth: "250px" }}>
                                    50+ patents, trademarks and copyrights
                                </Typography>
                                <Typography sx={{ fontSize: ".8rem", fontWeight: 400, fontFamily: "Montserrat", color: "#006ED4" }}>
                                    50+ patents, trademarks and copyrights
                                </Typography>
                                <Typography sx={{ fontSize: ".8rem", fontWeight: 400, fontFamily: "Montserrat", color: "#232323", marginTop: ".5rem" }}>
                                    Raised
                                </Typography>
                                <Typography sx={{ fontSize: "1.25rem", fontWeight: 600, fontFamily: "Montserrat", color: "#000104" }}>
                                    ETH 2,661,895
                                </Typography>
                                <Button
                                    variant='contained'
                                    sx={{
                                        background: "linear-gradient(180deg, #00FBFF 0%, #09C9E3 100%)", color: "#000000", textTransform: "none", borderRadius: ".5rem", px: 5,
                                        fontFamily: "Montserrat", fontWeight: 600, fontSize: "1.125rem", marginTop: "1rem"
                                    }}
                                >
                                    Donate
                                </Button>
                            </Box>
                        </Grid>
                    )}

                </Grid>
            </Box>

        </Box>
    )
}
