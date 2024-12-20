
//data validation
import PropTypes from 'prop-types'; 
function Item({brand, model, color, year}){

    return (
        <>
        <li>{brand} - {model} - {color} - {year}</li>
        </>
    );
}
//validation types
Item.prototypes = {
    brand:PropTypes.string.isRequired,
    model:PropTypes.string.isRequired,
    color:PropTypes.string,
    year:PropTypes.number.isRequired
}
export default Item;