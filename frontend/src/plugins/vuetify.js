import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {
  mdiAlertCircle,
  mdiCheckboxBlankOutline,
  mdiCheckboxMarked,
  mdiCheckboxMarkedOutline, mdiChevronDown,
  mdiCircle, mdiClose, mdiDotsVertical, mdiMinusCircle, mdiPlus, mdiAccount,mdiEarth
} from '@mdi/js'
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    defaultAssets: false,
    values: {
      checkboxOn: mdiCheckboxMarked,
      checkboxOff: mdiCheckboxBlankOutline,
      checkboxIndeterminate: mdiCheckboxMarkedOutline,
      circle: mdiCircle,
      chevronDown: mdiChevronDown,
      close: mdiClose,
      plus: mdiPlus,
      alertCircle: mdiAlertCircle,
      minusCircle: mdiMinusCircle,
      dotsVertical: mdiDotsVertical,
      account: mdiAccount,
      earth: mdiEarth
    }
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#2B85D8',
        secondaryText: '#7a7a7a',
        textColor: '#E9E9E9',
        borderColor: '#363636',
        blueishGray: '#103456',
        lightGrey: '#e4e5e6',
        pitchBlack: '#222222',
        borderIcon: '#B6AFAF',
      },
      light: {
        primary: '#2b85d8',
        general_bckgr: '#ffffff',
        secondaryText: '#7a7a7a',
        error: '#ec4234',
        success: '#00a86b',
        warning: '#ffba13',
        background: '#f1f1f1',
        lightGrey: '#e4e5e6',
        blackish: '#232c33',
        lineColor: '#dedede',
        textColor: '#222222',
        overlaycolor: '#2c3039',
        greyAlert: '#757a83',
        blueishGray: '#103456',
        babyBlueish: '#95c2eb',
        lightRed: '#f9585a',
        darkerPink: '#b40d85',
        lightAstral: '#357e9d',
        bgIconMatisse: '#204998',
        bgIconbourbon: '#c17720',
        bgIcontTuatara: '#373733',
        crtBarJade: '#00a86b',
        crtBarCinnabar: '#ec4234',
        bgPillowOlivine: '#93c47d',
        bgPillowAlto: '#d3d3d3',
        bourbonLight: '#ecc859',
        bourbonLighter: '#e2b32b',
        pistachio: '#99cc00',
        rectBgd: '#f4f4f4',
        borderColor: '#dedede',
        locationBorder: '#464343',
        accountRoleBlue: '#09368E',
        checkInputColor: '#E3F2FD',
        adminChipText: '#0FE0ED',
        contentChipText: '#0052BC',
        viewerChipText: '#2B85D8'
      },
    },
  },
});