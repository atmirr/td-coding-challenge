import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CssBaseline, Container } from '@material-ui/core';
import Main from './components/Main';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOpen, setIsOpen] = useState(true);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Check the width and close the drawer for smaller screens
    if (isTablet) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  }, [isTablet]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar isOpen={isOpen} handleDrawerOpen={handleDrawerOpen} />
      <Drawer isOpen={isOpen} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Main />
        </Container>
      </main>
    </div>
  );
}

export default App;
