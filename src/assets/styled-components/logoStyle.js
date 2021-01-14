import Logo from '../../assets/images/Logo.png';
import styled from 'styled-components';

const LogoStyle = styled.img.attrs(props => ({
    src: props.Img || Logo,
  }))`
    width: 250px;
  `;

export default LogoStyle;