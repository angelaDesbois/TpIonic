import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
// pas besoin si déclarer ds app.module et inversement.
providedIn: 'root'
})
export class OpenTriviaService {
    constructor(private http: HttpClient) { }
    async getQuestions(niveau: string, nb: number): Promise<Array<Object>> {
        const res = await this.http.get("https://opentdb.com/api.php?amount=" +nb + "&difficulty=" + niveau).toPromise();
        if(res && res['results']){
            return res["results"];
        }else{
            throw Error("impossible de recup les questions");
        }
   
 }
}