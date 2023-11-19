import reservation from '../img/chef3.jpg'
function Reservation() {
    return ( 
        <div class="divres" id='res'>
        <img src={reservation} alt=""  width={700}/>
        <form action="">
          <h2>Reservation</h2>
          <h1>Book A Table Online</h1>
          <table border={0}>
            <tr>
              <td>
                <input type="text" placeholder="Your Name" />
              </td>
              <td>
                <input type="text" placeholder="Your Email" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="datetime-local" name="" id="" />
              </td>
              <td>
                <select name="" id="">
                  <option value="">N° Of People</option>
                  <option value="">1 Place</option>
                  <option value="">2 Places</option>
                  <option value="">3 Places</option>
                </select>
              </td>
            </tr>
          </table>
          <textarea
            name=""
            id=""
            cols="45"
            rows="8"
            placeholder="Special Requests"
          ></textarea>{" "}
          <br />
          <input type="button" value="Book Now" />
        </form>
      </div>
     );
}

export default Reservation;