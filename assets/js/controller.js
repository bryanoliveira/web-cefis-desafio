/**
 * Trata de toda a comunicação com o Model (a API, neste caso)
 */

var controller = {
    get_courses: function() {
        // mostra a tela de loading para que o usuário espere
        view.show_loading()

        // faz a requisição pra API
        // (poderia ser otimizado com um lazyload e uma rolagem infinita)
        $.ajax({
            url: "https://cefis.com.br/api/v1/event",
            type: "GET",
            success: function(data) { // se tudo ocorrer corretamente, exibe os cursos
                view.list_courses(data["data"])
            },
            error: function(data) { // se ocorrer um erro, mostra o que aconteceu
                view.show_error(data)
            }
        })
    },
    get_course_details: function(courseID) {
        // mostra a tela de loading para que o usuário espere
        view.show_loading()

        // faz a requisição pra API
        // (poderia ser otimizado com um lazyload e uma rolagem infinita)
        $.ajax({
            url: "https://cefis.com.br/api/v1/event/" + courseID + "?include=classes",
            type: "GET",
            success: function(data) { // se tudo ocorrer corretamente, exibe os cursos
                view.set_details(data["data"])
            },
            error: function(data) { // se ocorrer um erro, volta pra página principal
                location.href = "index.html"
            }
        })
    }
}