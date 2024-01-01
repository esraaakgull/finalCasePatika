import {Route, Routes} from "react-router-dom";
import Header from '../src/components/Header'
import {useAppContext} from "./contexts/appContext";
import NotFound from "./pages/NotFound";
import {useEffect, useState} from "react";

function App() {
    const {displayedPages} = useAppContext()
    const [pages, setPages] = useState({})

    useEffect(() => {
        setPages(displayedPages)
    }, [displayedPages])

    return (
        <div>
            <Header/>
            <Routes>
                {Object.keys(pages)?.map((page, index) =>
                    <Route
                        exact
                        path={pages[page].path}
                        element={pages[page].element}
                        key={`page${index}`}
                    />
                )}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
