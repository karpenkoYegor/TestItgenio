import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Meteor } from 'meteor/meteor';
const BoardForm = () => {
    const [text, setText] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        if (!text) return;

        Meteor.call('rooms.insert', text);

        setText("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text className="text-muted">
                    Название комнаты
                </Form.Text>
                <Form.Control
                    type="input"
                    placeholder="Введите название"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Создать
            </Button>
            <hr/>
        </Form>
    );
};

export default BoardForm;