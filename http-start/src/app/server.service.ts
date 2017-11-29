import { Http, Headers, Response } from '@angular/http';
import { Injectable} from '@angular/core';
import 'rxjs/Rx';
import  {Observable} from 'rxjs/Observable'

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]){
    /* const headers = new Headers({'Content-type' : 'application/json'});
   return this.http.post('https://ng-fab-http.firebaseio.com/data.json', servers,
  {headers: headers}); */

  const headers = new Headers({'Content-type' : 'application/json'});
  return this.http.put('https://ng-fab-http.firebaseio.com/data.json', servers,
 {headers: headers});

  }

  getServers(){
    return  this.http.get('https://ng-fab-http.firebaseio.com/data.json').map(
     (response: Response) => {
        const data = response.json();
        for(const server of data){
          server.name = 'FECTHED_' + server.name;
        }
       return data;
    }
    ).catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');
      }
    );
  }

}
