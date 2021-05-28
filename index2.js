//! NEXT STEP: MAKE A TABLE https://semantic-ui.com/collections/table.html

let url = "https://randomuser.me/api/?page=3&results=10&inc=gender,name,nat";
const results = document.getElementById( 'results' );
let dataOutside = 0;



let promise = fetch( url ).then( jdata => jdata.json() ).then( ( data ) => {
    dataOutside = data.results;


} ).then( () => console.log( dataOutside ) ).catch( ( err ) => console.log( err ) )






const getFilteredData = ( dataOutside, gender ) => {
    let filteredData = dataOutside.filter( ( item ) => item.gender === gender );
    console.log( "in getFilteredData - filteredData", filteredData, dataOutside );
    return filteredData;
}

const deleteResults = () => {
    let results = document.getElementById( 'results' );
    console.log( "results", results.children );
    [...results.children].map( ( elem ) => {
        elem.remove();
    } )
    console.log( "results", results.children );
}


const showResults = ( filteredData ) => {
    console.log( "in filteredData func", filteredData );
    if ( filteredData ) {
        deleteResults();
    }

    filteredData.map( ( user ) => {
        let row = document.createElement( "div" );
        row.classList.add( "list" )
        let li = document.createElement( 'li' );
        li.classList.add( "line" )

        let name = document.createElement( 'div' );

        name.classList.add( "list-item-name" )
        name.innerHTML = `${user.name.first} ${user.name.last}`;

        let gender = document.createElement( 'div' );
        gender.classList.add( "list-item-gender" )
        gender.innerHTML = `${user.gender}`;


        console.log( results );

        li.append( name, gender )
        row.append( li );
        results.append( row );

    } )
}




async function waitForData() {
    await promise;
    showResults( dataOutside );

    let button = document.getElementById( "startSearch" );

    button.addEventListener( "click", ( event ) => {
        let gender = document.getElementById( "gender" ).value;
        console.log( gender );
        let filteredData = getFilteredData( dataOutside, gender );
        showResults( filteredData );
        console.log( "dataOutside", dataOutside );

    } )
}
waitForData();


console.log( "dataOutside", dataOutside );




filteredData = dataOutside;












