import { useState } from "react";
import { Container } from "./Style";

function App() {
  const [period, setPeriod] = useState(0);

  const DATA = [
    {
      work: {
        current: 5,
        previous: 7,
      },
      play: {
        current: 1,
        previous: 2,
      },
      study: {
        current: 0,
        previous: 1,
      },
      exercise: {
        current: 1,
        previous: 1,
      },
      social: {
        current: 1,
        previous: 3,
      },
      selfCare: {
        current: 0,
        previous: 1,
      },
    },
    {
      work: {
        current: 32,
        previous: 36,
      },
      play: {
        current: 10,
        previous: 8,
      },
      study: {
        current: 4,
        previous: 7,
      },
      exercise: {
        current: 4,
        previous: 5,
      },
      social: {
        current: 5,
        previous: 10,
      },
      selfCare: {
        current: 2,
        previous: 2,
      },
    },
    {
      work: {
        current: 103,
        previous: 128,
      },
      play: {
        current: 23,
        previous: 29,
      },
      study: {
        current: 13,
        previous: 19,
      },
      exercise: {
        current: 11,
        previous: 18,
      },
      social: {
        current: 21,
        previous: 23,
      },
      selfCare: {
        current: 7,
        previous: 11,
      },
    },
  ];

  return (
    <Container>
      <main>
        <div className="card__container">
          <div className="profile_card">
            <div className="profile_card__top">
              <img src="/image-jeremy.png" alt="Jeremy Robson" />
              <div className="profile_card__top_details">
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
              </div>
            </div>
            <div className="profile_card__bottom">
              <div
                className={`profile_card__bottom_element ${
                  period === 0 ? "active" : undefined
                }`}
                onClick={() => setPeriod(0)}
              >
                Daily
              </div>
              <div
                className={`profile_card__bottom_element ${
                  period === 1 ? "active" : undefined
                }`}
                onClick={() => setPeriod(1)}
              >
                Weekly
              </div>
              <div
                className={`profile_card__bottom_element ${
                  period === 2 ? "active" : undefined
                }`}
                onClick={() => setPeriod(2)}
              >
                Monthly
              </div>
            </div>
          </div>
        </div>
        <div className="card__container">
          <div className="track_card">
            <div className="track_card__body">
              <div className="track_card__body_line__1">
                <h2>Work</h2>
                <img src="/icon-ellipsis.svg" alt="options" />
              </div>
              <div className="track_card__body_line__2">
                <p className="track_card__body_line__2_time">{`${DATA[period].work.current}hrs`}</p>
                <p className="track_card__body_line__2_last__week">{`Last Week - ${DATA[period].work.previous}hrs`}</p>
              </div>
            </div>
          </div>
          <div className="track_card">
            <div className="track_card__body">
              <div className="track_card__body_line__1">
                <h2>Play</h2>
                <img src="/icon-ellipsis.svg" alt="options" />
              </div>
              <div className="track_card__body_line__2">
                <p className="track_card__body_line__2_time">
                  {DATA[period].play.current}hrs
                </p>
                <p className="track_card__body_line__2_last__week">{`Last Week - ${DATA[period].play.previous}hrs`}</p>
              </div>
            </div>
          </div>
          <div className="track_card">
            <div className="track_card__body">
              <div className="track_card__body_line__1">
                <h2>Study</h2>
                <img src="/icon-ellipsis.svg" alt="options" />
              </div>
              <div className="track_card__body_line__2">
                <p className="track_card__body_line__2_time">
                  {DATA[period].study.current}hrs
                </p>
                <p className="track_card__body_line__2_last__week">{`Last Week - ${DATA[period].study.previous}hrs`}</p>
              </div>
            </div>
          </div>
          <div className="track_card">
            <div className="track_card__body">
              <div className="track_card__body_line__1">
                <h2>Exercise</h2>
                <img src="/icon-ellipsis.svg" alt="options" />
              </div>
              <div className="track_card__body_line__2">
                <p className="track_card__body_line__2_time">
                  {DATA[period].exercise.current}hrs
                </p>
                <p className="track_card__body_line__2_last__week">{`Last Week - ${DATA[period].exercise.previous}hrs`}</p>
              </div>
            </div>
          </div>
          <div className="track_card">
            <div className="track_card__body">
              <div className="track_card__body_line__1">
                <h2>Social</h2>
                <img src="/icon-ellipsis.svg" alt="options" />
              </div>
              <div className="track_card__body_line__2">
                <p className="track_card__body_line__2_time">
                  {DATA[period].social.current}hrs
                </p>
                <p className="track_card__body_line__2_last__week">{`Last Week - ${DATA[period].social.previous}hrs`}</p>
              </div>
            </div>
          </div>
          <div className="track_card">
            <div className="track_card__body">
              <div className="track_card__body_line__1">
                <h2>Self Care</h2>
                <img src="/icon-ellipsis.svg" alt="options" />
              </div>
              <div className="track_card__body_line__2">
                <p className="track_card__body_line__2_time">
                  {DATA[period].selfCare.current}hrs
                </p>
                <p className="track_card__body_line__2_last__week">{`Last Week - ${DATA[period].selfCare.previous}hrs`}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default App;
