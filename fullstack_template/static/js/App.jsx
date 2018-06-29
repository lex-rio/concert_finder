// App.jsx
import React from "react";
import axios from "axios";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            concertsData: [],
            band: 'Maroon5',
            location: '123123'
        };
    }

    getConcerts () {
        axios.get(`/getConcerts/${this.state.band}`)
            .then(res => {
                const concertsData = res.data;
                console.log(concertsData[0]);
                this.setState({ concertsData });
            });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.getConcerts();
        event.preventDefault();
    }

    render () {
        return  (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Band" name="band" value={this.state.band} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                {this.state.concertsData.map(concert => (
                    <div className="concert">{concert.datetime}</div>
                ))}
            </div>
        );
    }
}