var NumberOfMovies = 4
var movies = new BuildArray(NumberOfMovies)

movies[1] = "Gia"
movies[2] = "Fear Street 1994"
movies[3] = "Fear Street 1978"
movies[4] = "Fear Street 1666"

function BuildArray(size){
    this.length = size
    for(var i = 1; 1 <= size; i++){
        this[i] = null
        return this
    }
}

function PickRandomMovie(frm){
    var rnd = Math.ceil(Math.random() * NumberOfMovies)

    frm.MovieBox.value = movies[rnd]
}