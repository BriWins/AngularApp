import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'YOUR_HOSTED_API_URL_HERE/';
@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + `users`, userDetails).pipe(
    catchError(this.handleError)
    );
  }

  // Making the api call for the user login endpoint
  public userLogin(userCredentials: any): Observable<any> {
    console.log(userCredentials);
    return this.http.post(apiUrl + `login`, userCredentials).pipe(
    catchError(this.handleError)
    );
  }

// Making the api call for retrieving all movies
  public getAllMovies(allMovies: any): Observable<any> {
    console.log(allMovies);
    return this.http.get(apiUrl + `movies`, allMovies).pipe(
    catchError(this.handleError)
    );
  }

// Making the api call for retrieving a single movie by title
  public getSingleMovie(singleMovie: any): Observable<any> {
    console.log(singleMovie);
    return this.http.get(apiUrl + `movies/title`, singleMovie).pipe(
    catchError(this.handleError)
    );
  }

// Making the api call for getting info on a director
  public movieDirector(directorInfo: any): Observable<any> {
    console.log(directorInfo);
    return this.http.get(apiUrl + `movies/director/name`, directorInfo).pipe(
    catchError(this.handleError)
    );
  }

// Making the api call for getting info on a genre
  public movieGenre(genreInfo: any): Observable<any> {
    console.log(genreInfo);
    return this.http.get(apiUrl + `movies/genre/name`, genreInfo).pipe(
    catchError(this.handleError)
    );
  }
  
// Making the api call to get user information
  public getUser(userInfo: any): Observable<any> {
    console.log(userInfo);
    return this.http.get(apiUrl + `user/username`, userInfo).pipe(
    catchError(this.handleError)
    );
  }

// Making the api call to add a movies to favorites list
  public addMovie(addFavorite: any): Observable<any> {
    console.log(addFavorite);
    return this.http.post(apiUrl + `user/favorites`, addFavorite).pipe(
    catchError(this.handleError)
    );
  }

// Making the api call to remove a movie by title from favorites list
  public deleteMovie(removeFavorite: any): Observable<any> {
    console.log(removeFavorite);
    return this.http.delete(apiUrl + `user/favorites/title`, removeFavorite).pipe(
    catchError(this.handleError)
    );
  }

// Making the api call to update user profile
  public updateUser(updateUser: any): Observable<any> {
    console.log(updateUser);
    return this.http.put(apiUrl + `user/username`, updateUser).pipe(
    catchError(this.handleError)
    );
  }

// Making the api call to delete user profile
  public deleteAcct (deleteUser: any): Observable<any> {
    console.log(deleteUser);
    return this.http.delete(apiUrl + `user/username`, deleteUser).pipe(
    catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}