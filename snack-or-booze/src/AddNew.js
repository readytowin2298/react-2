import React, { useState } from 'react';
import { Card, CardTitle } from 'reactstrap';

function AddNew(){
    const [formData, setFormData] = useState({
        name : "",
        description : "",
        recipe : "",
        serve : ""
    })

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    return (
        <Card>
            <CardTitle>Add New:</CardTitle>
            <form>
                <label htmlFor="form-name">Name</label> <br />
                <input onChange={handleChange} name="name" type="text" value={formData.name} id="form-name" /> <br />
                <label htmlFor="form-description">Description</label> <br />
                <textarea onChange={handleChange} name="description" value={formData.description} id="form-description">{formData.description}</textarea> <br />
                <label htmlFor="form-recipe">Recipe</label> <br />
                <textarea onChange={handleChange} name="recipe" value={formData.recipe} id="form-description">{formData.recipe}</textarea> <br />
                <label htmlFor="form-serve">Serve:</label> <br />
                <textarea onChange={handleChange} name="serve" value={formData.serve} id="form-serve">{formData.serve}</textarea>
            </form>
        </Card>
    )
};

export default AddNew;