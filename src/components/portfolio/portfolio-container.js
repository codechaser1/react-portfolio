import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = { // initial state
            pageTitle: "Welcome to my portfolio",
            data: [
                { title: "Quip" },
                { title: "Everbrite" },
                { title: "Ministry Safe" },
                { title: "SwingWay" }
            ]
        };
    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}
            </div>
        )
    }
}