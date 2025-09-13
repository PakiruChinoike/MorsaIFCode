import React from "react";
import Header from "./components/Header";

export default function Model({children}) {
    return(
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}