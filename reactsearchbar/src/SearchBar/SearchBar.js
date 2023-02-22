import "./SearchBar.css"
const SearchBar = function () {
    return (
        <div className="main">
            <h1>React Search</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
            
        </div>
    );
}
export default SearchBar;