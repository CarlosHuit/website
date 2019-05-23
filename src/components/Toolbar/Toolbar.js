import React from 'react'
import './Toolbar.css'

class Toolbar extends React.Component {

  optionsMenu = [
    { txt: 'Home',      id: 'header' },
    { txt: 'Sobre mi',  id: 'aboutMe' },
    { txt: 'Skills',    id: 'skills' },
    { txt: 'Proyectos', id: 'projects' },
  ]

  constructor(props) {

    super(props);
    
    const query = window.innerWidth < 768;
    this.state = ({
      isMobile: query,
      showMobileMenu: false,
    });

  }


  componentDidMount() {

    window.addEventListener('resize', this.onResize)

  }


  onResize = (ev) => {

    const query = window.innerWidth < 768;
    this.setState({ isMobile: query });

  }


  iconMenu() {

    return (
      <div className="Icon-menu">
        <div className="Line"></div>
        <div className="Line"></div>
        <div className="Line"></div>
      </div>
    )

  }


  desktopMenu() {

    const list = []

    for (let i = 1; i < this.optionsMenu.length; i++) {

      const opt = (
        <div onClick={(ev) => this.scrollTo(i)} key={i} className="Option-menu">
          { this.optionsMenu[i].txt }
        </div>
      )

      list.push( opt )

    }

    return <div className="Options">{ list }</div>

  }


  mobileMenu() {

    const list = []

    for (let i = 1; i < this.optionsMenu.length; i++) {

      const opt = (
        <div key={i} className="Option-menu-mobile" onClick={(ev) => this.scrollTo(i)}>
          {this.optionsMenu[i].txt}
        </div>
      )

      list.push( opt )

    }

    return <div className="MobileMenu">

      <div className="Options-menu-list-mobile">
        { list }
      </div>

      <div className="Icon-close" onClick={this.closeMobileMenu.bind(this)}>
        <div></div>
      </div>

    </div>

  }


  scrollTo(i) {

    this.setState({ showMobileMenu: false })

    let top = 0;

    for (let index = 0; index < this.optionsMenu.length; index++) {

      if (index < i) {

        const id = `#${this.optionsMenu[index].id}`;
        const el = document.querySelector(id);
        top += el.clientHeight;

      }
      
    }

    window.scrollTo({ behavior: 'smooth', top });

  }


  closeMobileMenu() {

    this.setState({ showMobileMenu: false })

  }


  openMenuMobile = () => {

    this.setState({ showMobileMenu: true })

  }


  render() {

    return (
      <div>


        <div className="Toolbar">

          <div className="Container-icon"  onClick={this.openMenuMobile} >
            { this.state.isMobile && this.iconMenu() }
          </div>

          <div className="Container-options">
            { !this.state.isMobile && this.desktopMenu() }
          </div>

        </div>


        { this.state.showMobileMenu && this.mobileMenu() }


      </div>
    )

  }


}


export default Toolbar