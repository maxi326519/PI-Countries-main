import React from 'react';
import CountrieCard from './CountrieCard/CountrieCard';
import { connect } from 'react-redux';
import { getCountriesList } from '../../../redux/actions';

import './CountriesList.css';
import america from '../../../assets/svg/continents/America.svg';
import africa from '../../../assets/svg/continents/Africa.svg';
import europa from '../../../assets/svg/continents/Europe.svg';
import asia from '../../../assets/svg/continents/Asia.svg';
import oceania from '../../../assets/svg/continents/Oceania.svg';
import antarctica from '../../../assets/svg/continents/Antarctica.svg';

class CountriesList extends React.Component{

    componentDidMount(){
        this.props.getCountriesList();
    }

    render(){
        return(
            <div className='countries-list'>
                {
                    this.props.list?.map( (countrie, i) =>{
                        if(i<9){
                            const continent = [africa, europa, oceania, america, asia, antarctica]
                            return (
                                <CountrieCard
                                 key={ countrie.id }
                                 id={ countrie.id }
                                 img={ countrie.img[0] }
                                 countrie={ countrie.name }
                                 continent={ countrie.continent }
                                 population={ countrie.population }
                                 svg={ continent.find(e => countrie.continent[0].includes(e.split('/')[3].split('.')[0]) )}
                                 /*
                                    Recorro cada elemento del array extraigo el nombre del SVG y busco
                                    si esta incluido en el texto del continente de cada countrie
                                 */
                                />
                           )
                        }
                        return undefined;
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state.list
    }
}

function mapDispatchToProps(dispatch){
    return {
        getCountriesList: () => dispatch(getCountriesList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList)