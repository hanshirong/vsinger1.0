import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class IndexService {
    constructor(private http: HttpClient){}
    getToken(){
        return this.http.post(`${environment.baseUrl}/student/project?state=`,{
            headers:{}});
    }
}