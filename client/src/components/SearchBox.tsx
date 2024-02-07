import IonIcon from '@reacticons/ionicons';

interface SearchProps {
    placeholder: string;
}


function Search({ placeholder }: SearchProps) {
    return(
        <div className="searchBox">
            <div>
                <input type="text" placeholder={placeholder} />
                <IonIcon name="search-outline" className="search-outline-icon"/>
            </div>
        </div>
    );
}

export default Search;