import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Menu from '../Menu.js';
import { snacks, drinks} from './fakeApi.test.js'

describe("smoke", ()=> {
    test("does the thing", async () =>{
        expect(render(<Menu items={drinks} /> ))
    } )
})