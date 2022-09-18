import { useState } from "react";
// const location = "Seattle, WA";
const SearchParams = () => {
    const [location, setLocation] = useState("Vishal");
    console.log(location);
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
