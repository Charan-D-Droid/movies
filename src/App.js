import { Container } from "@material-ui/core";
import SimpleBottomNavigation from "./components/appbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Latest from "./pages/latest";
// import Trending from "./pages/trending";

function App() {
  return (
    // <BrowserRouter>
    //   <div className="app">
    //     <Container>
    //       <Switch>
    //         <Route path="/" />
    //         <Route path="/search" />
    //       </Switch>
    //     </Container>
    //   </div>
    // </BrowserRouter>
    <div>
      {/* <Search /> */}
      <Latest />
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
