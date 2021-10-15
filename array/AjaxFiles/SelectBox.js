const get_Countires = () => {
  $.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    type: "GET",
    dataType: "json",

    success: (data) => {
      populate_select(data);
    },
    error: () => {
      console.log("an error occured");
    },
  });

  $("#countries").change(() => {
    localStorage.setItem("slectedCountry", $("#countries").val());
  });
};
get_Countires();

const populate_select = (country) => {
  for (let i = 0; i < country.length; i++) {
    let optionHolder =
      "<option = '" +
      country[i].alpha3Code +
      "' > " +
      country[i].name +
      "</option> ";

    document.getElementById("countries").innerHTML += optionHolder;
  }
};
