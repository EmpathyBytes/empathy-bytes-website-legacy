import * as React from "react";
import '../styles.css';
import NavBar from "../components/navbar";
import Project from "../components/Project"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const container = {
  width: '80%',
  padding: 96,
  paddingTop: 150
}

const projectsPage = () => {
   return(
       <div style={container}>
       <NavBar/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid Project xs={6} padding={2}>
              <Project title="Covid Freshman"></Project>
            </Grid>
            <Grid Project xs={6} padding={2}>
              <Project title="Dance Community"></Project>
            </Grid>
            <Grid Project xs={6} padding={2}>
              <Project title="Distance Math"></Project>
            </Grid>
            <Grid Project xs={6} padding={2}>
              <Project></Project>
            </Grid>
          </Grid>
      </Box>
       </div>
   );
};

export default projectsPage;