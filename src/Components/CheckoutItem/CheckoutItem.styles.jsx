import styled, {css} from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const CheckoutItemImage = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

const ItemProp = css`
  width: 23%;
`

export const ItemName = styled.span`
  ${ItemProp}
`

export const ItemPrice = ItemName;

export const ItemQuantity = styled.span`
  ${ItemProp};
  
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`