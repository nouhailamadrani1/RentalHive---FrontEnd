export interface RentalRequest {

  id?:number,
  start_date : string,
  end_date : string,
  rentalRequestStatus : string,
  client : {
    id:number,
    name?:string
  },
  equipment : {
    id:number,
    name?:string
  }
}
