class Storage{
    static addFilmToStorage(newFilm){

        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
        /* 
        [
            {title:"dsf",director:"dsfe",url:"sdfs"}
            {title:"hjklşf",director:"vhjklşfe",url:"sdbvcvbklfs"}
        ]*/
        localStorage.setItem("films",JSON.stringify(films));
    }
    static getFilmsFromStorage(){
        let films;
    
        if(localStorage.getItem("films") === null){
            films =[];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
    
        }
        return films;
    
    }
    static deleteFilmsFromStorage(filmTitle){
        let films = this.getFilmsFromStorage();
    
        films.forEach(function(film,index){
            if(film.title === filmTitle){
                films.splice(index,1);
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    
    }
}

Storage.prototype.addFilmToStorage = function(newFilm){

    let films = this.getFilmsFromStorage();

    films.push(newFilm);
    /* 
    [
        {title:"dsf",director:"dsfe",url:"sdfs"}
        {title:"hjklşf",director:"vhjklşfe",url:"sdbvcvbklfs"}
    ]*/
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null){
        films =[];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));

    }
    return films;

}
Storage.prototype.deleteFilmsFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();

    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));

}