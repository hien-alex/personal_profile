import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function MainPage() {
  return (
    <Container maxWidth="md">
      <Typography
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      >
        Hello. I am alex
      </Typography>
    </Container>
  );
}

// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
//   );
// }
