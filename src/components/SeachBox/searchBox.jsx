export default function SearchBox({value, onType }) {
    return (
        <>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={(event) => onType(event.target.value)} />
             
        </>
    );
}