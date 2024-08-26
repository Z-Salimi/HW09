const url = document.getElementById("url");
const request = document.getElementById("request");
const submit = document.getElementById("submit");
const postBodyContainer = document.getElementById("post-body-container");
const postBody = document.getElementById("post-body");
const responseContainer = document.getElementById("response-container");
const plainT = document.getElementById("plainT");
const statusT = document.getElementById("statusT");
const responseBody = document.getElementById("response-body");

request.addEventListener("change", function () {
    if (request.value === "POST") {
        postBodyContainer.style.display = "block";
    } else {
        postBodyContainer.style.display = "none";
    }
});

submit.addEventListener("click", function () {
    getRequest().then((response) => {
        console.log(response);
        render(response);
    });
});

async function getRequest() {
    try {
        let options = {
            method: request.value,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (request.value === "POST") {
            try {
                JSON.parse(postBody.value); 
                options.body = postBody.value;
            } catch (e) {
                throw new Error("Invalid JSON format in request body.");
            }
        }

        let response = await fetch(url.value, options);

        let contentType = response.headers.get('Content-Type');
        if (!contentType.includes("application/json")) {
            throw new Error("Invalid content type. Expected JSON.");
        }

        createStatusBar("JSON", response.status);

        return response.json();
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

function createStatusBar(text, status) {
    plainT.innerText = `Content Type: ${text}`;
    statusT.innerText = `Status Code: ${status}`;
}

function render(response) {
    responseBody.value = JSON.stringify(response, null, 2);
}
