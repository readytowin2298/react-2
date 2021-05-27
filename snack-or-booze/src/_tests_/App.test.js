import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import App from '../App.js';
import { snacks, drinks} from './fakeApi.js'
import { MemoryRouter } from "react-router-dom";
import SnackOrBoozeApi from "../Api";

describe("smoke", ()=> {
    test("does the thing", async () =>{
        expect(render(<App />, { wrapper : MemoryRouter} ))
    } )
})

