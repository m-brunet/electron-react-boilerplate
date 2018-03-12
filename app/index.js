import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/root.container';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextRoot = require('./containers/root.container'); // eslint-disable-line global-require
        render(
            <AppContainer>
                <NextRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
