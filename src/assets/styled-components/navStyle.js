import styled from 'styled-components';
import HomeIcon from '../images/home.svg';
import MailIcon from '../images/email-icon.svg';

const NavStyle = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    width: 39%;
    margin-bottom: 20px;
    border-left: 1px solid gray;
    padding-left: 25px;
    transform: translateX(-50%);
    margin-left: 50%;

    @media(min-width: 426px) {
        width: 80%;
        transform: none;
        margin-left: 0;
        flex-direction: row;
        margin-top: 30px;
        border-left: none;
        padding-left: 0;
    }

    @media(min-width: 530px) {
            width: 400px;
    }

    @media(min-width: 1200px) {
        width: 330px;
    }

    li {
        &:nth-child(1) {
            a {
                &.active {
                    &::before {
                        content: url(${HomeIcon});
                        @media(min-width: 300px) {
                            left: -70px;
                        }
                        @media(min-width: 426px) {
                            left: -30px;
                        }
                    }
                }

                &::before {
                    content: url(${HomeIcon});
                        @media(min-width: 300px) {
                            left: -70px;
                        }
                        @media(min-width: 426px) {
                            left: -30px;
                        }
                }
            }
        }

        &:nth-child(2) {
            a {
                &.active {
                    &::before {
                        @media(min-width: 300px) {
                            left: -70px;
                        }
                        @media(min-width: 426px) {
                            left: -25px;
                        }
                    }
                }

                &::before {
                    content: url(https://www.svgrepo.com/show/99025/sauce-bottle.svg);
                    @media(min-width: 426px) {
                        left: -25px;
                    }
                }
            }
        }

        &:nth-child(3) {
            a {
                &.active {
                    &::before {
                        ${'' /* content: url(${MailIcon}); */}
                        @media(min-width: 300px) {
                            left: -70px;
                        }
                        @media(min-width: 426px) {
                            left: -30px;
                        }
                    }
                }

                &::before {
                        content: url(${MailIcon});
                        @media(min-width: 300px) {
                            left: -70px;
                        }
                        @media(min-width: 426px) {
                            left: -30px;
                        }
                }
            }
        }

        a {
            justify-content: center;
            position: relative;
			display: flex;
			text-decoration: none;
			align-items: center;
			height: 100%;
			font-family: 'Work Sans', sans-serif;
			font-size: 15px;
			line-height: 1.733em;
			font-weight: 400;
			color: #000;
			font-size: 12px;
			color: #1d1d1d;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.2em;
			transition: all 0.2s ease-out;

            &:hover {
                &::before {
                    animation: qode-dot-bounce 0.3s forwards linear;
                }
                
            }

            &::before {
                position: absolute;
                top: calc(50% - 20px);
                height: 10px;
                width: 24px;
                fill: #24365f;
            }
        }

        

    }


    
`;

export default NavStyle;

