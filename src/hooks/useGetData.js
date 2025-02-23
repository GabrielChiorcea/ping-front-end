



const useGetData = (url, resourse) => {

     const getData = async (passurl, passresourse) => {

        let link = "https://strapi.pingteam.ro"

        const response = await fetch("link", {
            method: "GET",
            headers: {
                "Authorization" : `Bearer `,
                "Content-Type" : "application/json"
            }
        })

        if(response.ok){
            const data = await response.json()
            console.log(data)
        }else{
            console.log("error")
        }

     }

     return getData(url, resourse)
    

}


export default useGetData