import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Home from '../Home.js';
import { snacks, drinks} from './fakeApi.js'
import { MemoryRouter } from "react-router-dom";
import SnackOrBoozeApi from "../Api";

describe("smoke", ()=> {
    test("does the thing", async () =>{
        expect(render(<Home snacks={snacks} drinks={drinks} />, { wrapper : MemoryRouter} ))
    } )
})

