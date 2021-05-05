import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

// import './App.css';

import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Auth from "./pages/auth";

import { auth, createUserProfileDoc } from "./config/firebase";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromSnapshot;
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // get userRef from authenticated user
        const userRef = await createUserProfileDoc(userAuth);
        unsubscribeFromSnapshot = userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      // if !userAuth: currentUser = userAuth = null
      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
      if (unsubscribeFromSnapshot) unsubscribeFromSnapshot();
    };
  }, []);

  return (
    <div className="page-holder">
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/signup" component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
