import React from "react";

import Header from "../Common/Header";
import styles from './Browse.module.css';
import Card from '../Widgets/Card';
import Footer from '../Common/Footer';

// export default class Browse extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             data: [],
//         }

//         // handle logic when user clicks on item
//         this.handleClick = this.handleClick.bind(this);

//         this.params = (new URL(document.location)).searchParams;
//         this.query = this.params.get('search')
//         this.store = this.params.get('store')

//     }

//     handleClick() {
//         alert('hey')
//     }

//     componentDidMount() {
//         if (this.store === 'countdown') {
//             fetch(`/api/v1/products_count?name=${this.query}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     this.setState({
//                         data: data['result']
//                     })
//                     console.log(this.state.data)
//                 })
//                 .catch(error => console.log(error))

//         } else {
//             fetch(`/api/v1/products_pak?name=${this.query}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     this.setState({
//                         data: data['result']
//                     })
//                     console.log(this.state.data)
//                 })
//                 .catch(error => console.log(error))
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <div className='container'>
//                     <div className="row">
//                         <div className="browse-header">
//                             <h1>Search results for "{this.query}"</h1>
//                         </div>
//                     </div>
//                     <div className="cards">
//                         {
//                             this.state.data.map((items =>
//                                 <div className="card-wrapper">
//                                     <div className="card">
//                                         <img class="card-img-top" src={items.img} alt="Card image cap"/>
//                                         <div class="card-body">
//                                             <h5 class="card-title">{items.name}</h5>
//                                             <p class="card-text">{items.volumeSize}</p>
//                                             <h1 className="card-title">${items.price}</h1>
//                                             <Link to='/'><a href="#" class="btn btn-primary" onClick={this.handleClick}>Select this item</a></Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default function Browse(props) {
  return (
    <div>
      <Header isBrowse={true} />
      <main className={styles.content}>
            <div className={styles.heading}>
                <div className="container">
                    <h2>Search Results for</h2>
                    <h5>Bread</h5>
                    <h6>in <i><em>Countdown</em></i></h6>
                </div>
            </div>
            <div className="container">
                <section className={styles.cardGrid}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </section>
            </div>
      </main>
      <Footer/>
    </div>
  );
}
