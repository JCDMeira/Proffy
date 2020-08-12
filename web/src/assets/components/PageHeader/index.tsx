import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import backIcon from '../../images/icons/back.svg';
import './styles.css';

interface PageHeaderProps{
  title: string;
  descriptions ?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return(
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>{ props.title}</strong>
          {props.descriptions && <p> {props.descriptions}</p>}

          {props.children}
        </div>


      </header>
  );
}

export default PageHeader;