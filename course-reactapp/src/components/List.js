import Item  from "./Item";
/**
 * 
 * @returns sintaxe é <> e </>
 * não há nome das tags html
 */
function List(){
    return(
    <>
    <ul>
        <Item brand="Toyota" model="Rav4" color="Black" year={2020} />
        <Item brand="HYundai" model="Tucson" color="White" year={20}/>
        <Item brand="Fiat" model="Panda" color="Yello" year="2000"/>
    </ul>
    </>
    );
}
export default List;