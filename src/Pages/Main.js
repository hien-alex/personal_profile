import React from "react";
import { useSpring, animated } from "react-spring";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Spring } from "react-spring";

export default function MainPage() {
  return (
    // <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    //   {(props) => (
    //     <div
    //       style={{
    //         height: 100,
    //         width: 100,
    //         backgroundColor: "pink",
    //         color: "#fff",
    //         ...props,
    //       }}
    //     >
    //       1
    //     </div>
    //   )}
    // </Spring>
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
