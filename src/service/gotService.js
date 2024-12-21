

export default class GotService {
    constructor(){
        this._apiBase = 'http://localhost:3000';
    }

    async getResource(url){
        console.log("url = ",`${this._apiBase}${url}`)
        // fetch(`${this._apiBase}${url}`).then(ans=>ans.text()).then(ans=>console.log("ans=",ans))

       let res = await fetch(`${this._apiBase}${url}`)
       let res2 = await res.text()
       console.log("res2 = ",res2)
       return res2

        // console.log("res = ", res)
        // if(!res.ok){
        //     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        // }
        
        // return await res.json();
        // return res
    }


    async postResource(url, body){
        fetch(`${this._apiBase}${url}`,{
            method: 'POST',
            body: JSON.stringify({password: body}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>res.text()).then(res=>console.log("res = ",res))
    }


    async authResource(url, token){
        console.log("token = ",token)
        fetch(`${this._apiBase}${url}`,{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
        })
    }

    getTest1(){
        return this.getResource('/test1');
    }

    getTest2(){
        return this.getResource('/test11');
    }

    getTest3(){
        return this.postResource('/test3');
    }

    getTest4(){
        return this.getResource('/start');
    }

    getTest5(){
        return this.getResource('/stop');
    }

    getTest6(){
        return this.authResource('/testAuth', 3);
    }

}