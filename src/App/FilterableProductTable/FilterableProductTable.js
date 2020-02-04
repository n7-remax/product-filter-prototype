import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './Product/ProductTable'

class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = { filterText: '', inStockOnly: false };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleinStockChange = this.handleinStockChange.bind(this);

    }

    handleFilterTextChange(filterText) {
        this.setState({ filterText: filterText })
    }

    handleinStockChange(inStockOnly) {
        this.setState({ inStockOnly: inStockOnly })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange} 
                    onInStockChange={this.handleinStockChange}/>

                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
            </div>
        )
    }
}

export default FilterableProductTable
