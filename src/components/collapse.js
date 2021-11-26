// ilk constructor --> state initialisition
// render metodu ilk defa çalıştı
// onclick eventi çalıştı
// setstate state nesnesini güncelledi --> triggered render(render methodunu tekrar çalıştırıyor)
// render metodu güncel jsxi sayfada gösteriyor



import React from 'react';

class Collapse extends React.Component {


                    state = { showContent: false }

        
          showMore = () => {
                 this.setState({showContent : !this.state.showContent})
          }

        //   componentDidMount(){
        //           console.log("component oluşturuldu")
        //   }
        //   componentDidUpdate(){
        //           console.log("component güncellendi")
        //   }


          render() {
                    console.log(this)

                    return (
                              <div>

                                        <button className="btn btn-primary w-100" onClick={this.showMore}>
                                                  
                                                  {React.Children.map(this.props.children, children => children.props.cardTitle)}
                                        </button>

                                        {
                                                  this.state.showContent ? (
                                                            <div className="collapse show">
                                                                  {/* {this.props.children} */}
                                                                  {React.Children.map(this.props.children, children => children)}

                                                            </div>)
                                                            : null
                                        }


                              </div>
                    );
          }

};

export default Collapse;