/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    containerClassnames: 'menu-default',
    subHiddenBreakpoint: 1440,
    menuHiddenBreakpoint: 768,
    menuClickCount: 0,
    selectedMenuHasSubItems: true // if you use menu-sub-hidden as default menu type, set value of this variable to false
  },
  reducers: {
    changeSelectedMenuHasSubItems(state, action) {
      state.selectedMenuHasSubItems = action.payload;
    },
    setContainerClassnames: {
      reducer: (state, action) => {
        state.containerClassnames = action.payload.containerClassnames;
        state.menuClickCount = action.payload.menuClickCount;
      },
      prepare: (clickIndex, strCurrentClasses, selectedMenuHasSubItems) => {
        const currentClasses = strCurrentClasses
          ? strCurrentClasses.split(' ').filter(x => x !== '')
          : '';
        let nextClasses = '';
        if (!selectedMenuHasSubItems) {
          if (
            currentClasses.includes('menu-default') &&
            (clickIndex % 4 === 0 || clickIndex % 4 === 3)
          ) {
            clickIndex = 1;
          }
          if (
            currentClasses.includes('menu-sub-hidden') &&
            clickIndex % 4 === 2
          ) {
            clickIndex = 0;
          }
          if (
            currentClasses.includes('menu-hidden') &&
            (clickIndex % 4 === 2 || clickIndex % 4 === 3)
          ) {
            clickIndex = 0;
          }
        }

        if (clickIndex % 4 === 0) {
          if (
            currentClasses.includes('menu-default') &&
            currentClasses.includes('menu-sub-hidden')
          ) {
            nextClasses = 'menu-default menu-sub-hidden';
          } else if (currentClasses.includes('menu-default')) {
            nextClasses = 'menu-default';
          } else if (currentClasses.includes('menu-sub-hidden')) {
            nextClasses = 'menu-sub-hidden';
          } else if (currentClasses.includes('menu-hidden')) {
            nextClasses = 'menu-hidden';
          }
          clickIndex = 0;
        } else if (clickIndex % 4 === 1) {
          if (
            currentClasses.includes('menu-default') &&
            currentClasses.includes('menu-sub-hidden')
          ) {
            nextClasses = 'menu-default menu-sub-hidden main-hidden sub-hidden';
          } else if (currentClasses.includes('menu-default')) {
            nextClasses = 'menu-default sub-hidden';
          } else if (currentClasses.includes('menu-sub-hidden')) {
            nextClasses = 'menu-sub-hidden main-hidden sub-hidden';
          } else if (currentClasses.includes('menu-hidden')) {
            nextClasses = 'menu-hidden main-show-temporary';
          }
        } else if (clickIndex % 4 === 2) {
          if (
            currentClasses.includes('menu-default') &&
            currentClasses.includes('menu-sub-hidden')
          ) {
            nextClasses = 'menu-default menu-sub-hidden sub-hidden';
          } else if (currentClasses.includes('menu-default')) {
            nextClasses = 'menu-default main-hidden sub-hidden';
          } else if (currentClasses.includes('menu-sub-hidden')) {
            nextClasses = 'menu-sub-hidden sub-hidden';
          } else if (currentClasses.includes('menu-hidden')) {
            nextClasses = 'menu-hidden main-show-temporary sub-show-temporary';
          }
        } else if (clickIndex % 4 === 3) {
          if (
            currentClasses.includes('menu-default') &&
            currentClasses.includes('menu-sub-hidden')
          ) {
            nextClasses = 'menu-default menu-sub-hidden sub-show-temporary';
          } else if (currentClasses.includes('menu-default')) {
            nextClasses = 'menu-default sub-hidden';
          } else if (currentClasses.includes('menu-sub-hidden')) {
            nextClasses = 'menu-sub-hidden sub-show-temporary';
          } else if (currentClasses.includes('menu-hidden')) {
            nextClasses = 'menu-hidden main-show-temporary';
          }
        }
        if (currentClasses.includes('menu-mobile')) {
          nextClasses += ' menu-mobile';
        }
        return {
          payload: {
            containerClassnames: nextClasses,
            menuClickCount: clickIndex
          }
        };
      }
    },
    clickOnMobileMenu: {
      reducer: (state, action) => {
        state.containerClassnames = action.payload.containerClassnames;
        state.menuClickCount = action.payload.menuClickCount;
      },
      prepare: strCurrentClasses => {
        const currentClasses = strCurrentClasses
          ? strCurrentClasses
              .split(' ')
              .filter(x => x !== '' && x !== 'sub-show-temporary')
          : '';
        let nextClasses = '';
        if (currentClasses.includes('main-show-temporary')) {
          nextClasses = currentClasses
            .filter(x => x !== 'main-show-temporary')
            .join(' ');
        } else {
          nextClasses = `${currentClasses.join(' ')} main-show-temporary`;
        }
        return {
          payload: { containerClassnames: nextClasses, menuClickCount: 0 }
        };
      }
    },
    addContainerClassname: {
      reducer: (state, action) => {
        state.containerClassnames = action.payload;
      },
      prepare: (classname, strCurrentClasses) => {
        const newClasses =
          !strCurrentClasses.indexOf(classname) > -1
            ? `${strCurrentClasses} ${classname}`
            : strCurrentClasses;
        return { payload: { newClasses } };
      }
    },
    changeDefaultClassnames(state, action) {
      state.containerClassnames = action.payload;
    }
  }
});

export const {
  changeSelectedMenuHasSubItems,
  setContainerClassnames,
  clickOnMobileMenu,
  addContainerClassname,
  changeDefaultClassnames
} = menuSlice.actions;

export default menuSlice.reducer;
