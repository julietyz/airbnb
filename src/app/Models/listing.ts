
export class Listing {
    public id: number;
    public spname: string;
    public name: string;
    public location: string;
    public price: number;
    public description: string;

    constructor(spnameInput, nameInput, locationInput, priceInput, descriptionInput)
    {
        this.id;
        this.spname = spnameInput;
        this.name = nameInput;
        this.location = locationInput;
        this.price = priceInput;
        this.description = descriptionInput;
    }
}


/* getAll(){
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from listing", function(err, res) {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } 
          let listings = res;
          mysqlConn.query(
            "Select * from listing_image_mapping WHERE listingId in (SELECT id FROM listigs);",
            function(err, res){
              if(err){
                console.log("error: ", err);
                reject(err);
              } else {
              listings.forEach(listing => {
                listing.imgUrl = [];
                res.forEach(imgUrl =>{
                  if(imgUrl,listingId == listing.id){
                    listing.imgUrl.push(imgUrl.imgUrl);
                  }
                });
              });
              console.log("Listings : ", res);
              resolve(res);
          }
      });
    });
  })
} */

