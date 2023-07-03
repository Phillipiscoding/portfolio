const App = () => {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/UserProfile" element={<UserProfile />} />
          <Route exact path="/Test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
