import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPainting } from '../shared/interfaces';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  constructor(private http: HttpClient) { }

  // router.get('/', paintingController.listPaintings);
  // router.get('/:id', paintingController.getPainting);
  // router.post('/', auth(), paintingController.createPainting);
  // router.put('/:id', auth(), paintingController.updatePainting);
  // router.delete('/:id', auth(), paintingController.deletePainting);
  listPaintings(): Observable<IPainting[]> {
    return this.http.get<IPainting[]>(`${apiUrl}/painting`, { withCredentials: true });
  }
  getPainting(id: string): Observable<IPainting> {
    return this.http.get<IPainting>(`${apiUrl}/painting/${id}`, { withCredentials: true });
  }
  createPainting(data: IPainting): Observable<IPainting> {
    return this.http.post<IPainting>(`${apiUrl}/painting`, data, { withCredentials: true });
  }

  updatePainting(id: string, data: IPainting): Observable<IPainting> {
    return this.http.put<IPainting>(`${apiUrl}/painting/${id}`, data, { withCredentials: true });
  }
  deletePainting(id: string): Observable<any> {
    return this.http.delete<IPainting>(`${apiUrl}/painting/${id}`, { withCredentials: true });
  }
  search(query: string): Observable<IPainting[]> {
    return this.http.get<IPainting[]>(`${apiUrl}/painting?query=${query}`, { withCredentials: true });
  }

  // listTopPaintings(limit?: number): Observable<IPainting[]> {
  //   return this.http.get<IPainting[]>(`${apiUrl}/painting${limit ? `?limit=${limit}` : ''}`, { withCredentials: true });
  // }




}
