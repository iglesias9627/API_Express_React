import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { createTutorial } from "../actions/tutorials";

const AddTutorial = ({ createTutorial }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const saveTutorial = () => {
        createTutorial(title, description)
          .then((data) => {
            setTitle(data.title);
            setDescription(data.description);
            setSubmitted(true);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    const newTutorial = () => {
        setTitle("");
        setDescription("");
        setSubmitted(false);
    };

    return (
        <>
        {submitted ? (
            <div>
                <h4>You submitted succesfully!</h4>
                <button onClick={newTutorial}>Add another tutorial</button>
            </div>
        ): (
            <div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                      type="text"
                      className="form-control"
                      id="title"
                      required
                      value={title}
                      onChange={onChangeTitle}
                      name="title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Title</label>
                    <textarea 
                      className="form-control"
                      id="description"
                      required
                      value={description}
                      onChange={onChangeDescription}
                      name="description"
                    />
                </div>

                <button 
                onClick={saveTutorial}
                className="btn btn-success"
                >
                    Submit
                </button>
            </div>
        )}
        </>
    );
};

export default connect(null, { createTutorial })(AddTutorial);