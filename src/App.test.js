
// import {render, @testing-library } from 'react'

import { render, screen} from "@testing-library/react";
import App from "./App";
import React from "react";

const sum  = (a,b) => a + b;

describe("App", () => {
    beforeEach(() =>{
        render(<App/>);
        console.log("RUNNING BEFORE EACH HOOK...")
    })
    test('sum', () => {
        render(<App/>)
        // const sum = screen.find
        expect(sum(2, 7).toEqual(9)
    )})
})

