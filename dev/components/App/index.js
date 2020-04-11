import React from 'react';

//components
import Header from '../Header';
import Layout from '../Layout';
import Page from '../Page';
import RecepieList from '../RecepieList';

import { RECIPES } from '../utils/recipes';


class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header />
                </Layout>
                <div className='mainBg' />
                <Page>
                    <RecepieList list={RECIPES} />
                </Page>
            </div>
        );
    }
}

export default App;