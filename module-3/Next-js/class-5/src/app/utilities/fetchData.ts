export async function fetchData(url: string) {

    // try{

        const data = await fetch(url);
        const result =  await data.json()
        return result; // promise
    // }catch(e){
    //     console.log(e)
    // }
}