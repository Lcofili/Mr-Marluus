const get_countries = () =>{

  $.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    type: "GET",
    datatype: "json",
  
    success: (data) => {
      populate_select(data);
    },
    error: () =>{
      console.log("an error occured");
    }
  });
  $("#countries").change(() =>{
    
  })
};
get_countries();

const populate_select = (country) =>{

}

