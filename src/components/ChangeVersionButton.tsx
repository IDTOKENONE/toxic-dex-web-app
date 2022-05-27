import iconArrowLeft from "images/icon-arrow-left.svg"
import styled from "styled-components"

const Button = styled.button`
  width: 100%;
  height: auto;
  position: relative;
  background-color: transparent;
  padding: 9px;
  border-radius: 10px;
  border: solid 1px #fff;

  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;

  letter-spacing: normal;
  color: #fff;

  &::before {
    content: "";
    display: inline-block;

    width: 13.9px;
    height: 10.4px;
    display: inline-block;

    margin-right: 6.1px;

    background-image: url(${iconArrowLeft});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
`

const ChangeVersionButton = () => {
  return (
    <a href="https://app-classic.terraswap.io">
      <Button>Go to Classic</Button>
    </a>
  )
}

export default ChangeVersionButton
