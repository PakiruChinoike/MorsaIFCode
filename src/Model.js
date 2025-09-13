import React from "react";
import Header from "./components/Header";

function Model({children}) {
    return(
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Model;