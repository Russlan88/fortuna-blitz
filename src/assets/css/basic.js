import styled, { createGlobalStyle } from 'styled-components';
import {whiteColor, lightGray, darkBlue} from '../css/variables';

export const GloabalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Work+Sans:wght@100,500&display=swap');

    @font-face {
	font-family: 'Cormorant';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4c-BXOCl9bbnla_nHIq6qNMgba8SzVBFNEQW7U.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Cormorant';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4c-BXOCl9bbnla_nHIq6qNMgba1SzVBFNEQW7U.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Cormorant';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4c-BXOCl9bbnla_nHIq6qNMgba-SzVBFNEQW7U.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4c-BXOCl9bbnla_nHIq6qNMgba_SzVBFNEQW7U.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Cormorant';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4c-BXOCl9bbnla_nHIq6qNMgbaxSzVBFNEQ.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiRLmoiIazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiRLmogYazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiRLmoioazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiRLmoi4azQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiRLmohYazQTJjFg.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4clBXOCl9bbnla_nHIq4pu9qKS-awhq.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4clBXOCl9bbnla_nHIq65u9qKS-awhq.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4clBXOCl9bbnla_nHIq4Ju9qKS-awhq.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4clBXOCl9bbnla_nHIq4Zu9qKS-awhq.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4clBXOCl9bbnla_nHIq75u9qKS-aw.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiHLioiIazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiHLiogYazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiHLioioazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiHLioi4azQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiHLiohYazQTJjFg.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiML-oiIazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiML-ogYazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiML-oioazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiML-oi4azQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiML-ohYazQTJjFg.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiVL6oiIazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiVL6ogYazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiVL6oioazQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiVL6oi4azQTJjFuER.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Cormorant';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/cormorant/v10/H4cgBXOCl9bbnla_nHIiVL6ohYazQTJjFg.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Raleway';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMDr4fJh1Zyc61YBlG.woff)
		format('woff');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Raleway';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMDrcfJh1Zyc61YBlG.woff)
		format('woff');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Raleway';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMDrwfJh1Zyc61YBlG.woff)
		format('woff');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Raleway';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMDr0fJh1Zyc61YBlG.woff)
		format('woff');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Raleway';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4VrMDrMfJh1Zyc61YA.woff)
		format('woff');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCkIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCIIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCkIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCIIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCkIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCIIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCkIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCIIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
		U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCkIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCIIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Raleway';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
	font-family: 'Work Sans';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU7Gs5q4feCSXCQNBfHFA.woff)
		format('woff');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Work Sans';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU7Gs5qofeCSXCQNBfHFA.woff)
		format('woff');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Work Sans';
	font-style: italic;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU7Gs5pIfeCSXCQNBf.woff)
		format('woff');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_c6DptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 300;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_c6DptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 400;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_c6DptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 500;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_c6DptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 600;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_c6DptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
		U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2)
		format('woff2');
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
		U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
	font-family: 'Work Sans';
	font-style: normal;
	font-weight: 700;
	src: url(https://fonts.gstatic.com/s/worksans/v8/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2)
		format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}

    html, body {
        margin: 0;
        padding: 0;

        ul {
            margin: 0;

            li {
                list-style: none;
            }
        }
    }

    ::selection {
        color: ${whiteColor};
        background: ${darkBlue};
    }

    body::-webkit-scrollbar {
        width: 7px;
    }
    body::-webkit-scrollbar-track {
        background-color: ${lightGray};
    }
    body::-webkit-scrollbar-thumb {
        background-color: #950740;
        outline: 1px solid ${darkBlue};
    }
    
    body{
        font-family: 'Work Sans', sans-serif;
        font-size: 15px;
        font-weight: 400;
    }
`;

export const Container  = styled.div`
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
`;

export const Button = styled.button`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: auto;
    margin: 0;
    font-family: "Work Sans",sans-serif;
    font-size: 11px;
    line-height: 2em;
    text-transform: uppercase;
    letter-spacing: .2em;
    font-weight: 600;
    text-decoration: none;
    border: none;
    border-radius: 0;
    outline: 0;
    -webkit-transition: all,background-color .2s ease-out,border-color .2s ease-out;
    -o-transition: all,background-color .2s ease-out,border-color .2s ease-out;
    transition: all,background-color .2s ease-out,border-color .2s ease-out;
    padding: 15px 36px;
    color: #000;

    

    &.--contact {
        &::after {
            right: -34px;
        }

        &:hover {
            &::after {
                 right: -45px;
            }
        }
    }

    &::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 34px;
        height: 2px;
        right: -16px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size: 11px;
        line-height: 1;
        color: #000;
        background: linear-gradient(90deg,#fff 51%,#000 51%);
        -webkit-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;

        &:hover {
            transform: translateX(30%) translateY(-50%) scaleX(1.3);
            &::before {
                 background: linear-gradient(90deg,#fff 28%,#000 28%);
            }
        }
    }
   
    &::after {
        content: '\\276F';
        position: absolute;
        display: inline-block;
        color: #000;
        top: 33%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        right: -47px;
        width: 34px;
        height: 2px;
        -webkit-transform-origin: left;
        -ms-transform-origin: left;
        transform-origin: left;
        will-change: transform;
        -webkit-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
        
    &.primary{
        margin: 40px 0 35px 15px;
        background: ${lightGray};
        ${'' /* max-width: 150px; */}
        display: inline-block;
        }

        &:hover {
       background: #950740;
    }
    }

    &.secondary {
        background: ${darkBlue};
        color: ${lightGray};

        &--modify{
            margin-top: 50px;
        }

        &:hover {
       background: #950740;
    }

        
    }

`;



