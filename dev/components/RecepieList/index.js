import React from 'react';
import Recepie from '../Recepie';
import { Button } from '../UI/Button';


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
        console.log(this.state.recepieList.length)
        console.log(this.state.itemVisibilityIndex)
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
                <ul className='recepieList'>
                    {recepieList.map((item, i) => <Recepie item={item} key={item.name}/>)}
                    <li className='recepieItemFake'/>
                </ul>
                {this.state.showButton && (
                    <div className='recepieButton'>
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