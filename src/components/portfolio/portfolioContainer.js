import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolioItem";

export default class PortfolioContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        pageTitle: "Kaerim Cisneros | Portfolio",
        isLoading: false,
        data: []
      };
  
      this.handleFilter = this.handleFilter.bind(this);
    }
  
    handleFilter(filter) {
      this.getPortfolioItems(filter)
    }
  
    getPortfolioItems(filter = null) {
      axios
        .get("https://kaerimcisneros.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          if (filter){
            this.setState({
              data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          }); 
          } else{
            this.setState({
              data: response.data.portfolio_items
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    portfolioItems() {
      return this.state.data.map(item => {
         
        return <PortfolioItem key={item.id} item={item} />;

      });
    }
  
    componentDidMount() {
      this.getPortfolioItems();
    }
  
    render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }
  
      return (
        <div className="portfolio-wrp">
          
            <div className="portfolio-wrp-filters">
                <a className="left" onClick={() => this.handleFilter("photography")}>
                    Photography
                </a>
                /
                <a onClick={() => this.handleFilter("webdesign")}>
                    Web Design and Development
                </a>
                /
                <a onClick={() => this.handleFilter("graphicdesign")}>
                    Graphic Design
                </a>
            </div>

            <div className="portfolio-wrp-gallery">
                {this.portfolioItems()}
            </div>
        </div>
      );
    }
  }