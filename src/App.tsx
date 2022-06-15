import React from 'react';
import { Router } from 'Router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'components/ThemeProvider/ThemeProvider';

type AppProps = { store: any };
export const App = ({ store }: AppProps): JSX.Element => {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <div id="app" style={hasMounted ? { opacity: 1 } : undefined}>
            <Provider store={store}>
                <ThemeProvider>
                    <Router />
                </ThemeProvider>
            </Provider>
        </div>
    );
};
