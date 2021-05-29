import React, { useState } from 'react';
import { Card, CardTitle } from 'reactstrap';
import './AddNew.css'
import { Button, FormGroup, Label, Input } from 'reactstrap';
import SnackOrBoozeApi from "./Api";
import { Redirect } from "react-router-dom";



function AddNew(){
    const [formData, setFormData] = useState({
        name : "",
        description : "",
        recipe : "",
        serve : "",
        type : "snack"
    })

    const [redirect, setRedirect] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await SnackOrBoozeApi.addItem(formData);
        if(res){
            setRedirect(true);
        } else {
            alert("Error submitting form, please ensure all fields are filled out")
        }
    }



    return redirect? <Redirect to={`/${formData.type}s`} /> : (
        <Card >
            <CardTitle >Add New:</CardTitle>
            <form className="AddNew-Form" onSubmit={handleSubmit}>
                <FormGroup tag="fieldset" onChange={handleChange}>
                    <legend>Type:</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="type" value="snack" required />{' '}
                            Snack
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="type" value="drink" required />{' '}
                            Drink
                        </Label>
                    </FormGroup>
                </FormGroup>
                
                <label htmlFor="form-name">Name</label> <br />
                <input onChange={handleChange} name="name" type="text" value={formData.name} id="form-name" /> <br />
                <label htmlFor="form-description">Description</label> <br />
                <textarea onChange={handleChange} name="description" value={formData.description} id="form-description">{formData.description}</textarea> <br />
                <label htmlFor="form-recipe">Recipe</label> <br />
                <textarea onChange={handleChange} name="recipe" value={formData.recipe} id="form-description">{formData.recipe}</textarea> <br />
                <label htmlFor="form-serve">Serve:</label> <br />
                <textarea onChange={handleChange} name="serve" value={formData.serve} id="form-serve">{formData.serve}</textarea><br />
                <Button className="btn btn-success" type="submit">Submit</Button>
            </form>
        </Card>
    )
};

export default AddNew;