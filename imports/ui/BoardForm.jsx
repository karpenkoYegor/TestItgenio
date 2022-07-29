import React, {useState} from 'react';
import {Meteor} from 'meteor/meteor';

const BoardForm = () => {
    const [text, setText] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        if (!text) return;

        Meteor.call('rooms.insert', text);

        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
                <label htmlFor="nameBoardForm" className="form-label">Название комнаты</label>
                <div className="col col-9">
                    <input type="input"
                           className="form-control"
                           id="nameBoardForm"
                           placeholder="Введите название"
                           value={text}
                           onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="col col-3">
                    <button type="submit" className="btn btn-primary ">Создать</button>
                </div>
            </div>
            <hr/>
        </form>
    );
};

export default BoardForm;