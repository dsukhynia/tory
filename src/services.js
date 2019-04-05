export function getAnimals() {
    return fetch('https://raw.githubusercontent.com/dsukhynia/jsons/master/animals.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw "Data fetch error";
            };
        });
}

export function echo(myname) {
    return fetch('https://postman-echo.com/post',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                myNameIs: myname,
                time: new Date()
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw "Data fetch error";
            };
        });
}