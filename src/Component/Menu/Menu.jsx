import menu1 from "../img/menu-1.jpg";
import menu2 from "../img/menu-2.jpg";
import menu3 from "../img/menu-3.jpg";
import menu4 from "../img/menu-4.jpg";
import menu5 from "../img/menu-5.jpg";
import menu6 from "../img/menu-6.jpg";
import menu7 from "../img/menu-7.jpg";
import menu8 from "../img/menu-8.jpg";
import couscous from "../../assets/couscous.png";
import loobia from "../../assets/loobia.jpg";
import riz from "../../assets/riz.jpg";
import makroona from "../../assets/mak.jpg";
import eja from "../../assets/eja.jpg";
import plat from "../../assets/plat.jpg";
import lablebi from "../../assets/lablebi.jpg";
import kafteji from "../../assets/kafteji.jpg";

function Menu() {
    return ( 
        <div class="divmenu" id="Menu">
        <h2>----- Food Menu -----</h2>
        <h1>Most Popular Plats</h1>
        <div>
          <table border={0}>
            <tr>
              <td>
                <img src={couscous} alt="" width={100} height={80} />
              </td>
              <td>
                <h3> Couscous </h3>
                <hr /> <p>Ipsum ipsum clita erat amet dolor justo diam</p>
              </td>
              <td>
                <b> 7.5 DT</b>
              </td>
            </tr>
            <tr>
              <td>
                <img src={loobia} alt=""  width={100} height={80}/>
              </td>
              <td>
                <h3> Loobia </h3>
                <hr /> <p>Ipsum ipsum clita erat amet dolor justo diam</p>
              </td>
              <td>
                <b> 5 DT</b>
              </td>
            </tr>
            <tr>
              <td>
                <img src={riz} alt=""  width={100} height={80}/>
              </td>
              <td>
                <h3> Riz </h3>
                <hr /> <p>Ipsum ipsum clita erat amet dolor justo diam</p>
              </td>
              <td>
                <b> 8 DT</b>
              </td>
            </tr>
            <tr>
              <td>
                <img src={makroona} alt="" width={100} height={80} />
              </td>
              <td>
                <h3> Makroona </h3>
                <hr /> <p>Ipsum ipsum clita erat amet dolor justo diam</p>
              </td>
              <td>
                <b> 6.5 DT</b>
              </td>
            </tr>
          </table>
          {/*Table 2*/}
          <table border={0}>
            <tr>
              <td>
                <img src={eja} alt=""  width={100} height={80}/>
              </td>
              <td>
                <h3> Eja </h3>
                <hr /> <p>Ipsum ipsum clita erat amet dolor justo diam</p>
              </td>
              <td>
                <b> 7 DT</b>
              </td>
            </tr>
            <tr>
              <td>
                <img src={plat} alt=""  width={100} height={80} />
              </td>
              <td>
                <h3> Plat Tunisienne </h3> <hr />
                <p>Ipsum ipsum clita erat amet dolor justo diam</p>
              </td>
              <td>
                <b> 6 DT</b>
              </td>
            </tr>
            <tr>
              <td>
                <img src={lablebi} alt=""   width={100} height={80}/>
              </td>
              <td>
                <h3> Lablebi </h3>
                <hr /> <p>Ipsum ipsum clita erat amet dolor justo diam</p>
              </td>
              <td>
                <b> 3.5 DT</b>
              </td>
            </tr>
            <tr>
              <td>
                <img src={kafteji} alt=""  width={100} height={80} />
              </td>
              <td>
                <h3> Kafteji </h3>
                <hr /> <p>Ipsum ipsum clita erat amet dolor justo diam</p>
              </td>
              <td>
                <b> 4 DT</b>
              </td>
            </tr>
          </table>
        </div>
      </div>
     );
}

export default Menu;