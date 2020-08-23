import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import {
  loadMore,
  loadMoreFiltered,
  toggleTheme,
} from "./redux/app/appActions";

//styles
import { reset as GlobalStyle } from "./styles/cssReset";
import { ThemeProvider } from "styled-components";

//components
import { Layout, GridContainer } from "./components/Layout/Layout";
import Header from "./components/Header";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import Gnome from "./components/Gnome";
import IntersectionObserver from "./components/IntersectionObserver";

//custom hooks
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import Heading from "./components/Heading";

function App() {
  //state
  const dispatch = useDispatch();
  const {
    data: { loading, data, error },
    app: {
      filteredBW,
      filteredBWShown,
      cachedBW,
      inputValue,
      theme,
      themeMode,
    },
  } = useSelector((state) => state);

  // data fetching

  useEffect(() => {
    //dispatching our async action from the store
    //we only fetch the data once, all our data filtering
    //and other manipulation uses the cached version in our redux store

    dispatch(fetchData());
  }, [dispatch]);

  // generating our intersection observers with the help of our custom hook

  const loadMoreRef = useIntersectionObserver(loading, error, () =>
    dispatch(loadMore(data))
  );

  const loadMoreFilteredRef = useIntersectionObserver(loading, error, () =>
    dispatch(loadMoreFiltered())
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header themeMode={themeMode} onClick={() => dispatch(toggleTheme())} />
        <GridContainer>
          <Heading />
          <Search value={inputValue} data={data} dispatch={dispatch} />

          {error && (
            <ErrorMessage>
              Something went wrong, please try again later.
            </ErrorMessage>
          )}

          {!loading &&
            !error &&
            inputValue.length > 0 &&
            filteredBW.length === 0 && (
              <ErrorMessage>
                Your search term doesn't match any of our records.
              </ErrorMessage>
            )}

          {loading && <Spinner />}

          {!loading &&
            !error &&
            !inputValue &&
            filteredBWShown.length === 0 &&
            cachedBW.map((props) => (
              <Gnome key={props.id} hairColor={props.hair_color} {...props} />
            ))}

          {!loading &&
            !error &&
            filteredBWShown.length > 0 &&
            filteredBWShown.map((props) => (
              <Gnome key={props.id} hairColor={props.hair_color} {...props} />
            ))}

          {filteredBW.length > 0 ? (
            <IntersectionObserver forwardedRef={loadMoreFilteredRef} />
          ) : (
            <IntersectionObserver forwardedRef={loadMoreRef} />
          )}
        </GridContainer>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
