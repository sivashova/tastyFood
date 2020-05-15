import React from 'react';
import Recepie from '../Recepie';
import { Button } from '../UI/Button';

// styles
import css from './RecepieList.css';

class RecepieList extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            itemVisibilityIndex: 2,
            recepieList: this.props.list,
            showButton: true,
        }
    };

    showMoreRecepies = () => {
        this.setState({ itemVisibilityIndex: this.state.itemVisibilityIndex + 2});
        if (this.state.itemVisibilityIndex === this.state.recepieList.length) {
            this.setState({
                showButton: false,
            });
        }
    };

    render() {
        console.log(this.state.itemVisibilityIndex, '1')
        const recepieList = this.state.recepieList.slice(0, this.state.itemVisibilityIndex);
        return (
            <>
                <ul className={css.root}>
                    {recepieList.map(item => <Recepie item={item} key={item.name}/>)}
                    <Recepie isFake />
                </ul>
                {this.state.showButton && (
                    <div className={css.button}>
                        <Button onClick={this.showMoreRecepies}>
                            Показать еще
                        </Button>
                    </div>
                )}

            </>
        );
    }
}

export default RecepieList;