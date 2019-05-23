import React from 'react'
import './Toolbar.css'

class Toolbar extends React.Component {

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


  optionsMenu = [
    { txt: 'Home',      id: 'header' },
    { txt: 'Sobre mi',  id: 'aboutMe' },
    { txt: 'Skills',    id: 'skills' },
    { txt: 'Proyectos', id: 'projects' },
  ]


  iconMenu = <div className="Icon-menu">
    <div className="Line"></div>
    <div className="Line"></div>
    <div className="Line"></div>
  </div>


  optionsMenuList = <div className="Options">
    {
      // eslint-disable-next-line array-callback-return
      this.optionsMenu.map((e, i) => {

        if (i > 0) {
          return (
            <div
              onClick={(ev) => this.scrollTo(i)} key={i} className="Option-menu"
              >
              { e.txt }
            </div>
          )
        }

      })
    }
  </div>


  mobileMenu = <div className="MobileMenu">

    <div className="Options-menu-list-mobile">
      {
        // eslint-disable-next-line array-callback-return
        this.optionsMenu.map((e, i) => {

          if (i > 0) {
            return <div onClick={(ev) => this.scrollTo(i)} className="Option-menu-mobile" key={i}>
              {e.txt}
            </div>
          }

        })
      }
    </div>

    <div className="Icon-close" onClick={this.closeMobileMenu.bind(this)}>
      <div></div>
    </div>

  </div>


  scrollTo(i ) {

    this.setState({
      showMobileMenu: false
    })

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
            { this.state.isMobile && this.iconMenu }
          </div>

          <div className="Container-options">
            { !this.state.isMobile && this.optionsMenuList }
          </div>

        </div>


        {
          this.state.showMobileMenu && this.mobileMenu
        }




      </div>
    )

  }


}


export default Toolbar