import "./styles.css";
import { useState } from "react";
export default function App() {
  var travelTypes = {
    grouptour: [
      {
        spot: "Ladakh",
        description:
          "Ladakh is quite famous for its incandescent mountains and longing valleys",
        ratings: "ratings : 4/5"
      },
      {
        spot: "Manali",
        description:
          "Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley.",
        ratings: "ratings : 4.5/5"
      },
      {
        spot: "Kashmir",
        description:
          "Kashmir is also famous for its scenic beauty, flower gardens, apple farms and more",
        ratings: "ratings : 3.5/5"
      }
    ],
    weekendbreak: [
      {
        spot: "Mahabaleshwar",
        description:
          "Strawberries, Mulberries and carrots are the speciality of Mahabaleshwar",
        ratings: "ratings : 4/5"
      },
      {
        spot: "Matheran",
        description:
          "One of the finest hill stations in Maharashtra, matheran is a beautiful tourist destination.",
        ratings: "ratings : 4.5/5"
      },
      {
        spot: "Lonavala",
        description:
          "Lonavla is a beautiful place to hangout with your buddies especially during monsoon",
        ratings: "ratings : 4/5"
      }
    ],
    voluntarytravel: [
      {
        spot: "Himachal",
        description:
          "Himachal Pradesh is famous for its handicrafts including carpets, paintings, leather works, stoles, and more.",
        ratings: "ratings : 4/5"
      },
      {
        spot: "Sikkim",
        description:
          "A part of the Eastern Himalaya, Sikkim is notable for its biodiversity",
        ratings: "ratings : 4.5/5"
      },
      {
        spot: "Goa",
        description:
          "Goa is visited by large numbers of international and domestic tourists each year because of its white-sand beaches, active nightlife, places of worship",
        ratings: "Ratings : 4.5/5"
      }
    ]
  };
  var [travelList, setTravelList] = useState("grouptour");

  function clickEventHandler(travelList) {
    setTravelList(travelList);
  }

  return (
    <div className="App">
      <h1 id="heading">Travel tips ✈️</h1>
      {Object.keys(travelTypes).map(function (travelInput) {
        console.log(travelInput);
        return (
          <button
            class="btn-traveltype"
            onClick={() => clickEventHandler(travelInput)}
          >
            {travelInput}
          </button>
        );
      })}
      <hr />
      <div>
        {travelTypes[travelList].map((item) => {
          return (
            <li class="travel-places">
              <h4>{item.spot}</h4>
              <small>{item.description}</small>
              <hr />
              <small>{item.ratings}</small>
            </li>
          );
        })}
      </div>
    </div>
  );
}
