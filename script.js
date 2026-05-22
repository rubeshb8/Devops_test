async function inspectIP() {

    const ip =
        document.getElementById('ipInput').value;

    const resultBox =
        document.getElementById('resultBox');

    if (!ip) {

        resultBox.innerHTML =
            "Please enter IP address.";

        return;
    }

    resultBox.innerHTML =
        "Inspecting IP address...";

    try {

        const response =
            await fetch(`https://ipapi.co/${ip}/json/`);

        const data =
            await response.json();

        resultBox.innerHTML = `

            <h2>Inspection Result</h2>

            <p><strong>IP:</strong> ${data.ip}</p>

            <p><strong>City:</strong> ${data.city}</p>

            <p><strong>Region:</strong> ${data.region}</p>

            <p><strong>Country:</strong> ${data.country_name}</p>

            <p><strong>ISP:</strong> ${data.org}</p>

            <p><strong>ASN:</strong> ${data.asn}</p>

            <p><strong>Timezone:</strong> ${data.timezone}</p>

            <p><strong>Latitude:</strong> ${data.latitude}</p>

            <p><strong>Longitude:</strong> ${data.longitude}</p>

        `;

    }

    catch (error) {

        resultBox.innerHTML =
            "Failed to fetch IP details.";

        console.log(error);
    }
}