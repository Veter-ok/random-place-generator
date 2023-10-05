export const getLocation = (callback) => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            callback()
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            callback()
          } else if (result.state === "denied") {
            alert("Вы заблокировали доступ к геопозиции((")
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
}