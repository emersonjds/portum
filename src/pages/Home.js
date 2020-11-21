import React from 'react';
import { Button } from 'reactstrap';


export default function Home() {
    return (
        <div className="App">
            <h1>
                Home
                <Button color="danger">Danger!</Button>
            </h1>
        </div>
    )
}