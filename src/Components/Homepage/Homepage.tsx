import React from 'react';
import {Grid} from "@mui/material";
import Navigation from "../Navigation/Navigation.tsx";
import HomeSection from "../HomeSection/HomeSection.tsx";
import LatestAndTrending from "../LatestAndTrending/LatestAndTrending.tsx";

const Homepage : React.FC= () => {
    return (
        <Grid container className={'px-5 lg:px-36 justify-between'} xs={12}>
            <Grid item xs={0} lg={2.5} className={'hidden lg:block w-full relative'}>
                {/*<p className={'text-center'}>Left Part</p>*/}
                <Navigation/>
            </Grid>
            <Grid item xs={0} lg={6} className={'hidden lg:block w-full relative'}>
                {/*<p className={'text-center'}>Middle Part</p>*/}
                <HomeSection/>
            </Grid>
            <Grid item xs={0} lg={3} className={'hidden lg:block w-full relative'}>
                {/*<p className={'text-center'}>Part</p>*/}
                 <LatestAndTrending/>
            </Grid>
        </Grid>
    );
};

export default Homepage;