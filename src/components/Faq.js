import React, { Component } from "react";
import Collapsible from "react-collapsible";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import loginBackground from "../media/loginBackground.jpg";

injectGlobal`
.Collapsible {
    border: solid 1px lightgrey;
    margin: 10px;
    padding: 10px;
    cursor: pointer;
}
.Collapsible__trigger {
    font-size: 24px;
}
.Collapsible__contentInner p {
    margin-bottom: 0px;
}
`;

const StyledBannerDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.46)),
    url(${loginBackground});
  background-size: cover;
  height: 500px;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledCollapseHolder = styled.div`
  max-width: 85%;
  margin: auto;
`;

class Faq extends Component {
  state = {};
  render() {
    return (
      <div>
        <StyledBannerDiv>
          <h1>All of your questions answered in one place...</h1>
        </StyledBannerDiv>
        <StyledCollapseHolder>
          <Collapsible
            transitionTime={100}
            trigger="How do I make a reservation?"
            open
          >
            <p>Contact us at: 555-555-5555</p>
            <p>Or Email us at: shorttermsuites@gmail.com</p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="Do you have a waiting list for specific arrival dates and specific apartments?"
          >
            <p>
              Because of our flexible departure date, with a 3 week minimum
              notice, we often cannot confirm the availability of an apartment
              until 2-3 weeks before it actually becomes available and is posted
              on the Reservations page. Once you occupy an apartment you have
              the benefit of that flexible departure date as well. Upon arrival
              you do not need to have a specific departure date. You can relax,
              knowing that you do not have a deadline for departure.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="Do you accept less than one month stays?"
          >
            <p>Our minimum length of stay is one month.</p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="Can I do a daily prorate after that first month?"
          >
            <p>
              Yes. Our suites operate almost like a hotel after your first
              month. You can prorate the latter portion of your stay on a daily
              basis assuming you have given the required 3 week minimum notice
              prior to departure.
            </p>
          </Collapsible>
          <Collapsible transitionTime={100} trigger="Do you accept pets?">
            <p>
              On a case by case basis we do consider acceptance of pets after
              discussing the details. Non-refundable pet fees apply.
            </p>
          </Collapsible>
          <Collapsible transitionTime={100} trigger="Do you accept smoking?">
            <p>
              Smoking is strictly disallowed. Failure to comply will forfeit the
              deposit.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="What forms of payment do you accept?"
          >
            <p>
              We accept cash, checks, wire transfers and credit cards (Visa,
              Discover, MasterCard and American Express).
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="What is the role of the deposit?"
          >
            <p>
              The deposit is collected up front and is a firm mutual commitment
              and will be refunded to you within 14 days after departure.
              Non-emergency cancellations will forfeit the deposit. If there is
              damage to the suite, or supplies, or if a suite requires excessive
              cleaning, the extra cost will be deducted from your deposit.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="Is the deposit refundable?"
          >
            <p>
              Once you depart we schedule a professional crew to clean, inspect,
              and restore the apartment, furniture and supplies according to an
              extensive checklist provided to them. The cleaning fee is
              collected up front and is non-refundable. We do not provide
              cleaning services during your stay, and do expect the suite to be
              periodically cleaned by you.{" "}
              <strong>
                CHARGES FOR EXCESS CLEANING WILL BE DEDUCTED FROM YOUR DEPOSIT.
              </strong>
            </p>
          </Collapsible>
          <Collapsible transitionTime={100} trigger="When is the rent payable?">
            <p>
              First month rent is payable upon arrival, and on the same day of
              the month for the following months. If the latter portion of your
              stay is less than 30 days we can do a daily prorate (3 week
              minimum notice assumed). Rent received late is subject to $25/day
              extra charge. NSF checks returned to us will incur a $50 fee.
            </p>
          </Collapsible>
          <Collapsible transitionTime={100} trigger="Cancellation policy?">
            <p>
              If we provide you a suite and have accepted your deposit as
              agreed, and if you cancel less than 3 weeks of arrival, we reserve
              the right to retain your entire deposit unless we are able to find
              a replacement for the stay. In that event we will refund to you
              what portion remains of your deposit on a prorated daily basis.{" "}
              <strong>
                Only verifiable emergency cancellations will be considered for
                reimbursement.
              </strong>
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="How much notice do I need to give prior to departure?"
          >
            <p>
              We require a minimum 3 week written notice prior to departure.{" "}
              <strong>
                If you do not give the required 3 week notice you will lose your
                deposit!
              </strong>
            </p>
          </Collapsible>
          <Collapsible transitionTime={100} trigger="Can I extend my stay?">
            <p>
              Yes. Please let us know a minimum of 3 weeks if you wish to extend
              your stay.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="What does “completely furnished” include?"
          >
            <p>
              All of our suites include bed and bath linens, kitchen and cooking
              supplies, dishes/glasses, toaster, microwave, coffee maker. All
              furniture, TV, vacuum, iron and board.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="Is there parking? If so is it included in the rent?"
          >
            <p>
              Most apartments have either a reserved space or open parking in
              our private lot. Some buildings have covered parking. Parking is
              included in the monthly rate if available. Some units offer street
              parking only.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="How about laundry facilities?"
          >
            <p>
              All units have either in-suite washer/dryer or access to coin-op
              laundry in the building.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="Is there cable TV service?"
          >
            <p>
              Every unit has standard cable service with 50 plus channels
              available.
            </p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="Is there high speed internet service?"
          >
            <p>All suites have high-speed internet connection.</p>
          </Collapsible>
          <Collapsible
            transitionTime={100}
            trigger="Is heat and electric included?"
          >
            <p>
              Yes. In the winter months we ask that you try to conserve energy
              usage by turning down the heat and turning off lights when you are
              not in the apartment.
            </p>
          </Collapsible>
        </StyledCollapseHolder>
      </div>
    );
  }
}

export default Faq;
