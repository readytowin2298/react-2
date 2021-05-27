import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Item from '../Item.js';
import { snacks, drinks} from './fakeApi.js'
import { MemoryRouter } from "react-router-dom";
import SnackOrBoozeApi from "../Api";

describe("smoke", ()=> {
    test("does the thing", async () =>{
        const { getByText } = render(
            <MemoryRouter>
              <Item items={snacks} cantFind="/snacks"/>
            </MemoryRouter>
          );
        expect(getByText)
    } )
})