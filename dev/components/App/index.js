import React from 'react';

//components
import Header from '../Header';
import Layout from '../Layout';
import Page from '../Page';
import RecepieList from '../RecepieList';

import { RECIPES } from '../RecepieList/utils/recipes';

//styles
import css from './App.css';


class App extends React.Component {
    render() {
        console.log(RECIPES);
        return (
            <div>
                <Layout>
                    <Header />
                </Layout>
                <div className={css.root} />
                <Page>
                    <RecepieList list={RECIPES} />
                </Page>
            </div>
        );
    }
}

export default App;