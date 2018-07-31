// Level 2

const infoField = $("#info-field");
let character = []
const template = (detail, index) => {
    let no = index + 1;
    return `<div>No.${no}</div>
              <div>Name: ${detail.name}</div>
              <div>Height: ${detail.height}</div>
              <div>Hair Color: ${detail.hair_color}</div>
              <hr>`;
};

const fetchAPI = () => {
    for (let i = 1; i < 11; i++) {
        fetch(`https://swapi.co/api/people/${i}/`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                character.push(data);
            });
    }
};
const getData = () => {
    infoField.html("");
    character.map((detail, index) => {
        const details = template(detail, index);

        infoField.append(details);
    });
}

$(window).on('load',function(){
    fetchAPI();
    this.setTimeout(() => {
        getData()
    }, 2500);
})
