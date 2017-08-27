/**
 * Fat Arrow Function
 * @param {string} batsmanName [description]
 * @param {number} battingOrder [description]
 */

let cricketer = (batsmanName: string, battingOrder: number): any=> {
    /**log output**/
    console.log(`BatsmanName is ${batsmanName}, Batting Order is ${battingOrder}`);

    /**binding value to html element**/

    document.getElementById('name').innerHTML=`BatsmanName is ${batsmanName}`;
    document.getElementById('order').innerHTML=`Batting Order is ${battingOrder}`;
}

/**passing parameter value**/

cricketer('sachin',1);