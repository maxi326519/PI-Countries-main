import React from "react";
import { connect } from "react-redux";
import { getCountriesList } from "../../../redux/actions";

import PagesLinks from '../PagesLinks/PagesLinks';
import Loading from '../../Loading/Loading';

import CountrieCard from "./CountrieCard/CountrieCard";
import "./CountriesList.css";
import america from "../../../assets/svg/continents/America.svg";
import africa from "../../../assets/svg/continents/Africa.svg";
import europa from "../../../assets/svg/continents/Europe.svg";
import asia from "../../../assets/svg/continents/Asia.svg";
import oceania from "../../../assets/svg/continents/Oceania.svg";
import antarctica from "../../../assets/svg/continents/Antarctica.svg";

class CountriesList extends React.Component {
  constructor(props){
      super(props);
      this.amount = 10;
  }

  componentDidMount() {
    this.props.getCountriesList();
  }

  render() {
    return (
      <div className="countries-list">
        <PagesLinks
          currentPage={ Number(this.props.page) }
          maxPages={ Math.ceil(this.props.list.length / this.amount) }
        />
        <div className="countries-list__container">
            {this.props.list.length === 0 ? <Loading/> :
            this.props.list?.map((countrie, i) => {
              const continent = [africa, europa, oceania, america, asia, antarctica];
              if ((i >= (this.amount * this.props.page) - this.amount) && (i < this.amount * this.props.page)) {
                return (
                  <CountrieCard
                    key={i}
                    id={countrie.id}
                    img={countrie.img}
                    countrie={countrie.name}
                    continent={countrie.continent}
                    population={countrie.population}
                    svg={continent.find((e) =>
                      countrie.continent[0].includes(e.split("/")[3].split(".")[0])
                    )}
                    /*
                        Recorro cada elemento del array extraigo el nombre del SVG y busco
                        si esta incluido en el texto del continente de cada countrie
                    */
                  />
                );
              }
              return null;
            })}
        </div>
        <PagesLinks
          currentPage={ Number(this.props.page) }
          maxPages={ Math.ceil(this.props.list.length / this.amount) }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCountriesList: () => dispatch(getCountriesList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);