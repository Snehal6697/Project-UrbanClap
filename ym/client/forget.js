let submit = async () => {

    const email = document.querySelector("#email").value;

    const password = document.querySelector("#password").value;

    let url = `http://localhost:3200/updatedata?email=${email}&password=${password}`;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onload = () => {

        const res = xhr.responseText;
        console.log(res);
    };
    xhr.send();

    // const res = await fetch(url);
    // console.log(res);

};