import { components, controllers } from './require';
import { connect } from 'react-redux';
import { thunks } from './thunks';

let models = {}, pages = {}, views = {};

for (let component of Object.keys(components.models)) {
  models[component] = connect(
    (state => ({ ...state.models[component] })),
    (dispatch => Object.keys(controllers.models[component]({
      setState: () => null,
      setData: () => null,
      dispatch: () => null,
      fetch: () => null,
      send: () => null,
      route: () => null,
      handle: () => null
    })).reduce((prev, action) => (action !== 'init' ? ({
      ...prev,
      [action]: (payload => dispatch(thunks[`models.${component}.${action}`](payload)))
    }) : (prev)), {}))
  )(components.models[component]);
}

for (let component of Object.keys(components.pages)) {
  pages[component] = connect(
    (state => ({ ...state.pages[component] })),
    (dispatch => Object.keys(controllers.pages[component]({
      setState: () => null,
      setData: () => null,
      dispatch: () => null,
      fetch: () => null,
      send: () => null,
      route: () => null,
      handle: () => null
    })).reduce((prev, action) => (action !== 'init' ? ({
      ...prev,
      [action]: (payload => dispatch(thunks[`pages.${component}.${action}`](payload)))
    }) : (prev)), {}))
  )(components.pages[component]);
}

for (let component of Object.keys(components.views)) {
  views[component] = connect(
    (state => ({ ...state.views[component] })),
    (dispatch => Object.keys(controllers.views[component]({
      setState: () => null,
      setData: () => null,
      dispatch: () => null,
      fetch: () => null,
      send: () => null,
      route: () => null,
      handle: () => null
    })).reduce((prev, action) => (action !== 'init' ? ({
      ...prev,
      [action]: (payload => dispatch(thunks[`views.${component}.${action}`](payload)))
    }) : (prev)), {}))
  )(components.views[component]);
}

export { models, pages, views };