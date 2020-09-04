let submit = async () => {


    const name = document.querySelector("#name").value;

    const email = document.querySelector("#email").value;

    const password = document.querySelector("#password").value;

    let url = `http://localhost:3200/adduser?name=${name}&email=${email}&password=${password}`;

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