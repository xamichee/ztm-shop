import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`

export const Payment = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: auto;
    width: 120px;
  }
`

export const TestWarning = styled.div`
  text-align: center;
  margin: 40px 0;
  font-size: 24px;
  color: red;
`