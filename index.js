// code:2373j3ggv44

//********************************
//***  Promise testing
//********************************

// const myPromise = new Promise( ( resolve, reject ) => {
//     resolve( "Success" );
//     //reject( "Error" );
// } );
// 
// myPromise.then( ( message ) => {
//     console.log( message );
// } ).catch( ( error ) => {
//     console.log( error );
// } )

//********************************
//***  Promise Object
//********************************
// 
// console.log( Promise );//is a function
// console.log( Promise.resolve( "Resolve value" ) ); //returns Object {"Resolve value"}
// console.log( Promise.reject( "Reject value" ) ); //Promise { <rejected> 'Reject value' } + Error ( node: 82648 ) UnhandledPromiseRejectionWarning: Reject value......


//********************************
//***  New Promise
//********************************


const mySecondPromise = new Promise( ( resolve, reject ) => {
    const condition = true;

    if ( condition ) {
        setTimeout( () => resolve( 'Success' ), 3000 );
    } else {
        setTimeout( () => {
            reject( 'Error' );
        }, 3000 );
    }
} );

console.log( mySecondPromise );
setTimeout( () => {
    console.log( mySecondPromise );
}, 4000 );

//********************************
//***  Promise Object, then catch
//********************************

//.then catch
console.log( 'With .then and .catch' );
mySecondPromise
    .then( success => {
        console.log( '.then', success );
    } )
    .catch( err => {
        console.log( '.catch', err );
    } );

//function returns  promise
let delay = Math.ceil( Math.random() * 10000 - 1000 + 1000 );
console.log( delay );


//********************************
//***  Promise Function
//********************************

const constructorPromise = delay => {
    console.log( 'in function' );
    return new Promise( ( resolve, reject ) => {
        const condition = true;

        if ( condition ) {
            setTimeout( () => resolve( `Success in function ${delay}` ), delay );
        } else {
            setTimeout( () => {
                reject( 'Error in function' );
            }, delay );
        }
    } );
};

//********************************
//***  then catch
//********************************

console.log( 'in code Promise 1' );
constructorPromise( delay )
    .then( success => {
        console.log( '.then', success );
    } )
    .catch( err => {
        console.log( '.catch', err );
    } );

console.log( 'in code Promise 2' );
delay = Math.ceil( Math.random() * 10000 - 1000 + 1000 );
console.log( delay );
constructorPromise( delay )
    .then( success => {
        console.log( '.then', success );
    } )
    .catch( err => {
        console.log( '.catch', err );
    } );

console.log( 'in code Promise 3' );
delay = Math.ceil( Math.random() * 10000 - 1000 + 1000 );
console.log( delay );
constructorPromise( delay )
    .then( success => {
        console.log( '.then', success );
    } )
    .catch( err => {
        console.log( '.catch', err );
    } );


//********************************
//*** async await
//********************************

console.log( 'ASYNC AWAIT' );

async function testAwait() {
    console.log( "in testAwait" );
    let test = await constructorPromise( 10000 )
    console.log( "after await", test );

}
testAwait();


//********************************
//***  Promise chaining
console.log( "Promise chaining" );
//********************************


const promise_1 = new Promise( ( resolve, reject ) => {
    console.log( "in promise_1" );
    const condition = true;

    if ( condition ) {
        setTimeout( () => resolve( 'Success 1' ), 1000 );
    } else {
        setTimeout( () => {
            reject( 'Error' );
        }, 1000 );
    }
} );

const promise_2 = new Promise( ( resolve, reject ) => {
    console.log( "in promise_2" );
    const condition = true;

    if ( condition ) {
        setTimeout( () => resolve( 'Success 2' ), 2000 );
    } else {
        setTimeout( () => {
            reject( 'Error' );
        }, 2000 );
    }
} );

const promise_3 = new Promise( ( resolve, reject ) => {
    console.log( "in promise_3" );
    const condition = true;

    if ( condition ) {
        setTimeout( () => resolve( 'Success 3' ), 3000 );
    } else {
        setTimeout( () => {
            reject( 'Error' );
        }, 3000 );
    }
} );


promise_3.then( ( result ) => { console.log( result ); return promise_2.then( ( result ) => { console.log( result ); return promise_1.then( ( result ) => { console.log( result ); } ) } ) } )



