import React from "react";
import { connect } from "react-redux";
import { getCountriesList } from "../../../redux/actions";
import { Link } from 'react-router-dom';

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
        this.filters = {
          america: false,
          europa: true,
          africa: true,
          asia: true,
          oceania: true,
          antarctica: false,
        }
    }
  componentDidMount() {
    this.props.getCountriesList();
  }

  render() {
    return (
      <div className="countries-list">
        <div className="countries-list__container">
            {this.props.list?.filter( e => {
              if(e.continent[0].includes('America')) return this.filters.america;
              if(e.continent[0].includes('Europe')) return this.filters.europa;
              if(e.continent[0].includes('Africa')) return this.filters.africa;
              if(e.continent[0].includes('Asia')) return this.filters.asia;
              if(e.continent[0].includes('Oceania')) return this.filters.oceania;
              if(e.continent[0].includes('Antarctica')) return this.filters.antarctica;
              return true;
            }).map((countrie, i) => {
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
            })}
        </div>
        {(()=>{
            const pages = Math.ceil(this.props.list.length / this.amount);
            return (
                <div className="countries__pages-link">
                    <Link to={`/home/page/${this.props.page - 1}`}>{'<'}</Link>
                    <Link to={`/home/page/${this.props.page}`}>{this.props.page}</Link>
                    <Link to={`/home/page/${1 + Number(this.props.page)}`}>{1 + Number(this.props.page)}</Link>
                    <Link to={`/home/page/${2 + Number(this.props.page)}`}>{2 + Number(this.props.page)}</Link>
                    <Link to={`/home/page/${2 + Number(this.props.page)}`}>{2 + Number(this.props.page)}</Link>
                    <span>...</span>
                    <Link to={`/home/page/${pages}`}>{pages}</Link>
                    <Link to={`/home/page/${1 + Number(this.props.page)}`}>{'>'}</Link>
                </div>
            )
        })()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCountriesList: () => dispatch(getCountriesList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);