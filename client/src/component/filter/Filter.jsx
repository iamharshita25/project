import './Filter.scss'

function Filter() {
    return (
        <div className="filter">
            <h1>Search Result for <b>Vadodara</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">location</label>
                    <input type="text" id='city' name='city' placeholder='Enter the city location' />

                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>

                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">any</option>
                        <option value="apartment">aparment</option>
                        <option value="house">House</option>
                        <option value="bunglow">Bunglow</option>
                    </select>

                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number" id='minPrice' name='minPrice' placeholder='MinPrice' />

                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id='maxPrice' name='maxPrice' placeholder='Max Price' />

                </div>

                <div className="item">
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <input type="number" id='bedrooms' name='bedrooms' placeholder='Bedrooms' />

                </div>
                <button>
                    <img src="./fluent--search-sparkle-16-filled.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter