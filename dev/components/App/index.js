import React from 'react';

//components
import Header from '../Header';
import Layout from '../Layout';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Header />
            </Layout>
        );
    }
}

export default App;