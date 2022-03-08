import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  min-height: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 81px 24px;
  main {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 30px;
    max-width: 1109px;
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
      gap: 23px;
    }
    .card__container {
      &:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: min(254px, 100%);
        @media (max-width: 548px) {
          width: min(100%, 325px);
        }
        .profile_card {
          background: #1d204b;
          border-radius: 16px;
          box-shadow:0 10px 10px 0px hsl(208deg 16% 85%);
          &__top {
            border-radius: 16px;
            background: #5746ea;
            padding: 34px 28px 83px;
            @media (max-width: 548px) {
              padding: 32px 27px 29px;
              display: flex;
              gap: 16px;
            }
            img {
              border: 3px solid #eeebff;
              width: 84px;
              height: 84px;
              border-radius: 50%;
              @media (max-width: 548px) {
                width: 71px;
                height: 71px;
              }
            }
            &_details {
              padding-left: 3px;
              @media (max-width: 548px) {
                display: flex;
                flex-direction: column;
              }
              p {
                padding-top: 40px;
                padding-bottom: 4px;
                font-weight: normal;
                font-size: 15px;
                line-height: 18px;
                color: #c5baff;
                @media (max-width: 548px) {
                  padding-top: 0;
                }
              }
              h1 {
                font-weight: 300;
                font-size: 40px;
                line-height: 47px;
                color: #fbfaff;
                @media (max-width: 548px) {
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 18px;
                }
              }
            }
          }
          &__bottom {
            padding: 26px 31px 34px;
            display: flex;
            flex-direction: column;
            gap: 22px;
            @media (max-width: 548px) {
              padding: 25px 19px 27px 33px;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }
            &_element {
              font-weight: normal;
              font-size: 18px;
              line-height: 21px;
              color: #787ab5;
              cursor: pointer;
              &.active,
              &:hover {
                color: #fbffff;
              }
            }
          }
        }
      }
      &:nth-child(2) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 31px;
        grid-column-gap: 30px;
        @media (max-width: 768px) {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 548px) {
          grid-template-columns: 1fr;
          grid-row-gap: 23px;
        }
        .track_card {
          width: min(255px, 100%);
          background-repeat: no-repeat;
          background-color: #ff8b64;
          background-image: url(/icon-work.svg);
          background-position: top -11px right 17px;
          padding-top: 45px;
          display: flex;
          border-radius: 16px;
          border: none;
          box-shadow:0 10px 10px 0px hsl(208deg 16% 85%);
          @media (max-width: 548px) {
            padding-top: 38px;
            width: min(327px, 100%);
          }
          &:hover {
            .track_card__body {
              background-color: #34397b;
            }
          }
          &__body {
            flex: 1;
            background-color: #1d204b;
            width: calc(100%);
            border-radius: 15px;
            padding: 29px 30px 33px;
            display: flex;
            flex-direction: column;
            gap: 25px;
            @media (max-width: 548px) {
              padding: 28px 23.07px 31px;
              gap: 9px;
            }
            &_line__1 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              h2 {
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                color: #f9f9ff;
              }
            }
            &_line__2 {
              display: flex;
              flex-direction: column;
              gap: 21px;
              @media (max-width: 548px) {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
              }
              &_time {
                font-weight: 300;
                font-size: 56px;
                line-height: 66px;
                color: #fcffff;
                @media (max-width: 548px) {
                  font-weight: 300;
                  font-size: 32px;
                  line-height: 38px;
                }
              }
              &_last__week {
                font-weight: normal;
                font-size: 15px;
                line-height: 18px;
                color: #c5c9f6;
              }
            }
          }
          &:nth-child(2) {
            background-color: #56c2e6;
            background-image: url(/icon-play.svg);
            background-position: top -4px right 21px;
          }
          &:nth-child(3) {
            background-color: #ff5e7d;
            background-image: url(/icon-study.svg);
            background-position: top -7px right 16px;
          }
          &:nth-child(4) {
            background-color: #4bcf83;
            background-image: url(/icon-exercise.svg);
            background-position: top 0px right 17px;
          }
          &:nth-child(5) {
            background-color: #7235d1;
            background-image: url(/icon-social.svg);
            background-position: top -24.5px right 19.01px;
          }
          &:nth-child(6) {
            background-color: #f1c75b;
            background-image: url(/icon-self-care.svg);
            background-position: top -11px right 15px;
          }
        }
      }
    }
  }
`;
