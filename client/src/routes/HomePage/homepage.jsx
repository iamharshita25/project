
import './homepage.scss';
import SearchBar from "../../component/SearchBar/searchbar"


function homepage() {
    return (
        
        <div className='homepage'>
            
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Get Your Dream House </h1>
                    <p>Discover the perfect home for your family, with a wide range of properties to suit every budget and lifestyle. With over 25 years of experience, we’re committed to helping you find the property of your dreams, whether you're looking to buy, rent, or invest.</p>
                    <SearchBar/>
                    <div className="Bada-Dabba">
                        <div className="chotta-dabba">
                            <h1>25+</h1>
                            <h2>Years Of Experience</h2>
                        </div>
                        <div className="chotta-dabba">
                            <h1>500+</h1>
                            <h2>Users</h2>
                        </div>
                        <div className="chotta-dabba">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="src/routes/HomePage/B-removebg-preview.png" alt="" />
            </div>
        </div>
    )
}

export default homepage
